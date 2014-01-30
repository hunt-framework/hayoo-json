[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Base-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "Map",
        "normalized": "",
        "package": "list-tries",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:AList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "data",
        "fct-source": "src/Data-ListTrie-Base-Map.html#AList",
        "fct-type": "data",
        "title": "AList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "AList",
        "normalized": "",
        "package": "list-tries",
        "partial": "AList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:Map",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal complete implementation:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eeqCmp\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edifferenceWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eintersectionWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor decent performance, supplying at least \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e as\n well is probably a good idea.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "class",
        "fct-source": "src/Data-ListTrie-Base-Map.html#Map",
        "fct-type": "class",
        "title": "Map"
      },
      "index": {
        "description": "Minimal complete implementation eqCmp null lookup alter unionWithKey differenceWithKey intersectionWithKey toList empty or fromList or fromListWith isSubmapOfBy For decent performance supplying at least mapAccumWithKey and filter as well is probably good idea",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "Map",
        "normalized": "",
        "package": "list-tries",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:OrdMap",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eordCmp\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esplitLookup\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor decent performance, supplying at least the following is probably a good\n idea:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaxViewWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emapAccumAscWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emapAccumDescWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "class",
        "fct-source": "src/Data-ListTrie-Base-Map.html#OrdMap",
        "fct-type": "class",
        "title": "OrdMap"
      },
      "index": {
        "description": "Minimal complete definition ordCmp toAscList or toDescList splitLookup For decent performance supplying at least the following is probably good idea minViewWithKey maxViewWithKey mapAccumAscWithKey mapAccumDescWithKey",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "OrdMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Ord Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:WrappedIntMap",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "data",
        "fct-source": "src/Data-ListTrie-Base-Map.html#WrappedIntMap",
        "fct-type": "data",
        "title": "WrappedIntMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "WrappedIntMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Wrapped Int Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:adjust",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a) -\u003e k -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#adjust",
        "fct-type": "method",
        "title": "adjust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003ec b a-\u003ec b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ek-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:alter",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#alter",
        "fct-type": "method",
        "title": "alter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ec b a-\u003ec b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:delete",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "delete",
        "normalized": "a-\u003eb a c-\u003eb a c",
        "package": "list-tries",
        "partial": "",
        "signature": "k-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:deserializeFromList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "[(k, a)] -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#deserializeFromList",
        "fct-type": "method",
        "title": "deserializeFromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "deserializeFromList",
        "normalized": "[(a,b)]-\u003ec a b",
        "package": "list-tries",
        "partial": "From List",
        "signature": "[(k,a)]-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:differenceWith",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e m k a -\u003e m k b -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#differenceWith",
        "fct-type": "method",
        "title": "differenceWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ec d a-\u003ec d b-\u003ec d a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003em k a-\u003em k b-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:differenceWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e Maybe a) -\u003e m k a -\u003e m k b -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#differenceWithKey",
        "fct-type": "method",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "differenceWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003eMaybe b)-\u003ed a b-\u003ed a c-\u003ed a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003eMaybe a)-\u003em k a-\u003em k b-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:doubleton",
      "description": {
        "fct-descr": "\u003cp\u003ePrecondition: the two keys differ\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e a -\u003e k -\u003e a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#doubleton",
        "fct-type": "method",
        "title": "doubleton"
      },
      "index": {
        "description": "Precondition the two keys differ",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "doubleton",
        "normalized": "a-\u003eb-\u003ea-\u003eb-\u003ec a b",
        "package": "list-tries",
        "partial": "",
        "signature": "k-\u003ea-\u003ek-\u003ea-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:empty",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "empty",
        "normalized": "",
        "package": "list-tries",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:eqCmp",
      "description": {
        "fct-descr": "\u003cp\u003eLike an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance over k, but should compare on the same type as\n \u003ccode\u003em\u003c/code\u003e does. In most cases this can be defined just as \u003ccode\u003econst (==)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e k -\u003e k -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Base-Map.html#eqCmp",
        "fct-type": "method",
        "title": "eqCmp"
      },
      "index": {
        "description": "Like an Eq instance over but should compare on the same type as does In most cases this can be defined just as const",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "eqCmp",
        "normalized": "a b c-\u003eb-\u003eb-\u003eBool",
        "package": "list-tries",
        "partial": "Cmp",
        "signature": "m k a-\u003ek-\u003ek-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:filter",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Bool) -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#filter",
        "fct-type": "method",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eb c a-\u003eb c a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:findPredecessor",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e m k a -\u003e Maybe (k, a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#findPredecessor",
        "fct-type": "method",
        "title": "findPredecessor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "findPredecessor",
        "normalized": "a-\u003eb a c-\u003eMaybe(a,c)",
        "package": "list-tries",
        "partial": "Predecessor",
        "signature": "k-\u003em k a-\u003eMaybe(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:findSuccessor",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e m k a -\u003e Maybe (k, a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#findSuccessor",
        "fct-type": "method",
        "title": "findSuccessor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "findSuccessor",
        "normalized": "a-\u003eb a c-\u003eMaybe(a,c)",
        "package": "list-tries",
        "partial": "Successor",
        "signature": "k-\u003em k a-\u003eMaybe(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:fromList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "[(k, a)] -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#fromList",
        "fct-type": "method",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003ec a b",
        "package": "list-tries",
        "partial": "List",
        "signature": "[(k,a)]-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:fromListWith",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#fromListWith",
        "fct-type": "method",
        "title": "fromListWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003ec b a",
        "package": "list-tries",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:insert",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e a -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "insert",
        "normalized": "a-\u003eb-\u003ec a b-\u003ec a b",
        "package": "list-tries",
        "partial": "",
        "signature": "k-\u003ea-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003eStrictness can be whatever is more optimal for the map type, shouldn't\n matter\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#insertWith",
        "fct-type": "method",
        "title": "insertWith"
      },
      "index": {
        "description": "Strictness can be whatever is more optimal for the map type shouldn matter",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec b a-\u003ec b a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:intersectionWith",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e m k a -\u003e m k b -\u003e m k c",
        "fct-source": "src/Data-ListTrie-Base-Map.html#intersectionWith",
        "fct-type": "method",
        "title": "intersectionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "intersectionWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed e a-\u003ed e b-\u003ed e c",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003em k a-\u003em k b-\u003em k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:intersectionWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k -\u003e a -\u003e b -\u003e c) -\u003e m k a -\u003e m k b -\u003e m k c",
        "fct-source": "src/Data-ListTrie-Base-Map.html#intersectionWithKey",
        "fct-type": "method",
        "title": "intersectionWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "intersectionWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a b-\u003ee a c-\u003ee a d",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb-\u003ec)-\u003em k a-\u003em k b-\u003em k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:isSubmapOfBy",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e m k a -\u003e m k b -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Base-Map.html#isSubmapOfBy",
        "fct-type": "method",
        "title": "isSubmapOfBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "isSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003ec d a-\u003ec d b-\u003eBool",
        "package": "list-tries",
        "partial": "Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003em k a-\u003em k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:lookup",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e m k a -\u003e Maybe a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "lookup",
        "normalized": "a-\u003eb a c-\u003eMaybe c",
        "package": "list-tries",
        "partial": "",
        "signature": "k-\u003em k a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:map",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e m k a -\u003e m k b",
        "fct-source": "src/Data-ListTrie-Base-Map.html#map",
        "fct-type": "method",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb)-\u003em k a-\u003em k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccum",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapAccum",
        "fct-type": "method",
        "title": "mapAccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapAccum",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed e b-\u003e(a,d e c)",
        "package": "list-tries",
        "partial": "Accum",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumAsc",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapAccumAsc",
        "fct-type": "method",
        "title": "mapAccumAsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapAccumAsc",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed e b-\u003e(a,d e c)",
        "package": "list-tries",
        "partial": "Accum Asc",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumAscWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapAccumAscWithKey",
        "fct-type": "method",
        "title": "mapAccumAscWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapAccumAscWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003ee b c-\u003e(a,e b d)",
        "package": "list-tries",
        "partial": "Accum Asc With Key",
        "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumDesc",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapAccumDesc",
        "fct-type": "method",
        "title": "mapAccumDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapAccumDesc",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed e b-\u003e(a,d e c)",
        "package": "list-tries",
        "partial": "Accum Desc",
        "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumDescWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapAccumDescWithKey",
        "fct-type": "method",
        "title": "mapAccumDescWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapAccumDescWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003ee b c-\u003e(a,e b d)",
        "package": "list-tries",
        "partial": "Accum Desc With Key",
        "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapAccumWithKey",
        "fct-type": "method",
        "title": "mapAccumWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapAccumWithKey",
        "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003ee b c-\u003e(a,e b d)",
        "package": "list-tries",
        "partial": "Accum With Key",
        "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k -\u003e a -\u003e b) -\u003e m k a -\u003e m k b",
        "fct-source": "src/Data-ListTrie-Base-Map.html#mapWithKey",
        "fct-type": "method",
        "title": "mapWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a b-\u003ed a c",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003eb)-\u003em k a-\u003em k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:maxViewWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e (Maybe (k, a), m k a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#maxViewWithKey",
        "fct-type": "method",
        "title": "maxViewWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "maxViewWithKey",
        "normalized": "a b c-\u003e(Maybe(b,c),a b c)",
        "package": "list-tries",
        "partial": "View With Key",
        "signature": "m k a-\u003e(Maybe(k,a),m k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:minViewWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e (Maybe (k, a), m k a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#minViewWithKey",
        "fct-type": "method",
        "title": "minViewWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "minViewWithKey",
        "normalized": "a b c-\u003e(Maybe(b,c),a b c)",
        "package": "list-tries",
        "partial": "View With Key",
        "signature": "m k a-\u003e(Maybe(k,a),m k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:null",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Base-Map.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "null",
        "normalized": "a b c-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "m k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:ordCmp",
      "description": {
        "fct-descr": "\u003cp\u003eLike an Ord instance over k, but should compare on the same type as \u003ccode\u003em\u003c/code\u003e\n does. In most cases this can be defined just as \u003ccode\u003econst compare\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e k -\u003e k -\u003e Ordering",
        "fct-source": "src/Data-ListTrie-Base-Map.html#ordCmp",
        "fct-type": "method",
        "title": "ordCmp"
      },
      "index": {
        "description": "Like an Ord instance over but should compare on the same type as does In most cases this can be defined just as const compare",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "ordCmp",
        "normalized": "a b c-\u003eb-\u003eb-\u003eOrdering",
        "package": "list-tries",
        "partial": "Cmp",
        "signature": "m k a-\u003ek-\u003ek-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:serializeToList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e [(k, a)]",
        "fct-source": "src/Data-ListTrie-Base-Map.html#serializeToList",
        "fct-type": "method",
        "title": "serializeToList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "serializeToList",
        "normalized": "a b c-\u003e[(b,c)]",
        "package": "list-tries",
        "partial": "To List",
        "signature": "m k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:singleton",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003ec a b",
        "package": "list-tries",
        "partial": "",
        "signature": "k-\u003ea-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:singletonView",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e Maybe (k, a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#singletonView",
        "fct-type": "method",
        "title": "singletonView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "singletonView",
        "normalized": "a b c-\u003eMaybe(b,c)",
        "package": "list-tries",
        "partial": "View",
        "signature": "m k a-\u003eMaybe(k,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:split",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e m k a -\u003e (m k a, m k a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "split",
        "normalized": "a-\u003eb a c-\u003e(b a c,b a c)",
        "package": "list-tries",
        "partial": "",
        "signature": "k-\u003em k a-\u003e(m k a,m k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:splitLookup",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "k -\u003e m k a -\u003e (m k a, Maybe a, m k a)",
        "fct-source": "src/Data-ListTrie-Base-Map.html#splitLookup",
        "fct-type": "method",
        "title": "splitLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "splitLookup",
        "normalized": "a-\u003eb a c-\u003e(b a c,Maybe c,b a c)",
        "package": "list-tries",
        "partial": "Lookup",
        "signature": "k-\u003em k a-\u003e(m k a,Maybe a,m k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:toAscList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e [(k, a)]",
        "fct-source": "src/Data-ListTrie-Base-Map.html#toAscList",
        "fct-type": "method",
        "title": "toAscList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "toAscList",
        "normalized": "a b c-\u003e[(b,c)]",
        "package": "list-tries",
        "partial": "Asc List",
        "signature": "m k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:toDescList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e [(k, a)]",
        "fct-source": "src/Data-ListTrie-Base-Map.html#toDescList",
        "fct-type": "method",
        "title": "toDescList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "toDescList",
        "normalized": "a b c-\u003e[(b,c)]",
        "package": "list-tries",
        "partial": "Desc List",
        "signature": "m k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:toList",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "m k a -\u003e [(k, a)]",
        "fct-source": "src/Data-ListTrie-Base-Map.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "toList",
        "normalized": "a b c-\u003e[(b,c)]",
        "package": "list-tries",
        "partial": "List",
        "signature": "m k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:unionWith",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e m k a -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#unionWith",
        "fct-type": "method",
        "title": "unionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb c a-\u003eb c a-\u003eb c a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003em k a-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:unionWithKey",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e m k a -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#unionWithKey",
        "fct-type": "method",
        "title": "unionWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "unionWithKey",
        "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ec a b-\u003ec a b-\u003ec a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003em k a-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:update",
      "description": {
        "fct-module": "Data.ListTrie.Base.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe a) -\u003e k -\u003e m k a -\u003e m k a",
        "fct-source": "src/Data-ListTrie-Base-Map.html#update",
        "fct-type": "method",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Base Map",
        "module": "Data.ListTrie.Base.Map",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ec b a-\u003ec b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003ek-\u003em k a-\u003em k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Enum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of enumerable elements to arbitrary values, based on a\n trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their Int representation\n after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Map.Enum",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Map-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "map from lists of enumerable elements to arbitrary values based on trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
        "hierarchy": "Data ListTrie Map Enum",
        "module": "Data.ListTrie.Map.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "list-tries",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Enum.html#t:TrieMap",
      "description": {
        "fct-module": "Data.ListTrie.Map.Enum",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Map-Enum.html#TrieMap",
        "fct-type": "type",
        "title": "TrieMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Map Enum",
        "module": "Data.ListTrie.Map.Enum",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Eq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be compared for equality to\n arbitrary values, based on a trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Map.Eq",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Map-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "map from lists of elements that can be compared for equality to arbitrary values based on trie",
        "hierarchy": "Data ListTrie Map Eq",
        "module": "Data.ListTrie.Map.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "list-tries",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Eq.html#t:TrieMap",
      "description": {
        "fct-module": "Data.ListTrie.Map.Eq",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Map-Eq.html#TrieMap",
        "fct-type": "type",
        "title": "TrieMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Map Eq",
        "module": "Data.ListTrie.Map.Eq",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Ord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be totally ordered to arbitrary\n values, based on a trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Map.Ord",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Map-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "map from lists of elements that can be totally ordered to arbitrary values based on trie",
        "hierarchy": "Data ListTrie Map Ord",
        "module": "Data.ListTrie.Map.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "list-tries",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Ord.html#t:TrieMap",
      "description": {
        "fct-module": "Data.ListTrie.Map.Ord",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Map-Ord.html#TrieMap",
        "fct-type": "type",
        "title": "TrieMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Map Ord",
        "module": "Data.ListTrie.Map.Ord",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a trie representing a map with list keys,\n generalized over any type of map from element values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the map and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the map.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003cp\u003eStrict versions of functions are provided for those who want to be certain\n that their \u003ccode\u003e\u003ca\u003eTrieMap\u003c/a\u003e\u003c/code\u003e doesn't contain values consisting of unevaluated\n thunks. Note, however, that they do not evaluate the whole trie strictly,\n only the values. And only to one level of depth: for instance, \u003ccode\u003e\u003ca\u003ealter'\u003c/a\u003e\u003c/code\u003e does\n not \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e the value within the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, only the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e itself. The user\n should add the strictness in such cases himself, if he so wishes.\n\u003c/p\u003e\u003cp\u003eMany functions come in both ordinary and \u003ccode\u003eWithKey\u003c/code\u003e forms, where the former\n takes a function of type \u003ccode\u003ea -\u003e b\u003c/code\u003e and the latter of type \u003ccode\u003e[k] -\u003e a -\u003e b\u003c/code\u003e,\n where \u003ccode\u003e[k]\u003c/code\u003e is the key associated with the value \u003ccode\u003ea\u003c/code\u003e. For most of these\n functions, there is additional overhead involved in keeping track of the\n key: don't use the latter form of the function unless you need it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "The base implementation of trie representing map with list keys generalized over any type of map from element values to tries Worst-case complexities are given in terms of and refers to the number of keys in the map and to their maximum length refers to the length of key given to the function not any property of the map In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven Strict versions of functions are provided for those who want to be certain that their TrieMap doesn contain values consisting of unevaluated thunks Note however that they do not evaluate the whole trie strictly only the values And only to one level of depth for instance alter does not seq the value within the Maybe only the Maybe itself The user should add the strictness in such cases himself if he so wishes Many functions come in both ordinary and WithKey forms where the former takes function of type and the latter of type where is the key associated with the value For most of these functions there is additional overhead involved in keeping track of the key don use the latter form of the function unless you need it",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "Map",
        "normalized": "",
        "package": "list-tries",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#t:TrieMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure itself: a map from keys of type \u003ccode\u003e[k]\u003c/code\u003e to values of type\n \u003ccode\u003ev\u003c/code\u003e implemented as a trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ek\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eTrie\u003c/code\u003e class is internal, ignore it.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003eFoldable\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances allow folding over and\n   traversing only the values, not the keys.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "data",
        "fct-source": "src/Data-ListTrie-Map.html#TrieMap",
        "fct-type": "data",
        "title": "TrieMap"
      },
      "index": {
        "description": "The data structure itself map from keys of type to values of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The Trie class is internal ignore it The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Foldable and Traversable instances allow folding over and traversing only the values not the keys The Monoid instance defines mappend as union and mempty as empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:addPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the map. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"xa\" (fromList [(\"a\",1),(\"b\",2)])\n    == fromList [(\"xaa\",1),(\"xab\",2)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#addPrefix",
        "fct-type": "function",
        "title": "addPrefix"
      },
      "index": {
        "description": "Prepends the given key to all the keys of the map For example addPrefix xa fromList fromList xaa xab",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "addPrefix",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Adjusts the value at the given key by calling the given\n function on it. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "min Adjusts the value at the given key by calling the given function on it If the key is not member of the map the map is unchanged",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:adjust-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eadjust\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#adjust%27",
        "fct-type": "function",
        "title": "adjust'"
      },
      "index": {
        "description": "min Like adjust but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "adjust'",
        "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. The most general modification function, allowing you to\n modify the value at the given key, whether or not it is a member of the map.\n In short: the given function is passed \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value at the key if it is\n present, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise; if the function returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the\n new value is inserted into the map, otherwise the old value is removed. More\n precisely, for \u003ccode\u003ealter f k m\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ek\u003c/code\u003e is a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e oldValue)\u003c/code\u003e is called. Now:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e newValue\u003c/code\u003e, \u003ccode\u003eoldValue\u003c/code\u003e is replaced with \u003ccode\u003enewValue\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ek\u003c/code\u003e and \u003ccode\u003eoldValue\u003c/code\u003e are removed from the map.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf, instead, \u003ccode\u003ek\u003c/code\u003e is not a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef \u003c/code\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is called, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e value\u003c/code\u003e, \u003ccode\u003evalue\u003c/code\u003e is inserted into the map, at \u003ccode\u003ek\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the map is unchanged.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function is applied lazily only if the given key is a prefix of another\n key in the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "min The most general modification function allowing you to modify the value at the given key whether or not it is member of the map In short the given function is passed Just the value at the key if it is present or Nothing otherwise if the function returns Just value the new value is inserted into the map otherwise the old value is removed More precisely for alter If is member of Just oldValue is called Now If returned Just newValue oldValue is replaced with newValue If returned Nothing and oldValue are removed from the map If instead is not member of Nothing is called and If returned Just value value is inserted into the map at If returned Nothing the map is unchanged The function is applied lazily only if the given key is prefix of another key in the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:alter-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e, but the function is always applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#alter%27",
        "fct-type": "function",
        "title": "alter'"
      },
      "index": {
        "description": "min Like alter but the function is always applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "alter'",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. The children of the longest common prefix in the trie as maps,\n associated with their distinguishing key value. If the map contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [(\"a\",1),(\"abc\",2),(\"abcd\",3)])\n    == Map.fromList [('b',fromList [(\"c\",2),(\"cd\",3)])]\n children (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "The children of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "children",
        "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:children1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as maps, associated with their distinguishing key value. If the map\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [(\"abc\",1),(\"abcd\",2)])\n    == Map.fromList [('a',fromList [(\"bc\",1),(\"bcd\",2)])]\n children1 (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#children1",
        "fct-type": "function",
        "title": "children1"
      },
      "index": {
        "description": "The children of the first element of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "children1",
        "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the map along with its associated\n value. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Removes the key from the map along with its associated value If the key is not member of the map the map is unchanged",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "delete",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The map without its maximal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "Like snd composed with maxView The map without its maximal key or the unchanged original map if it was empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "deleteMax",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The map without its minimal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "Like snd composed with minView The map without its minimal key or the unchanged original map if it was empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "deleteMin",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deletePrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the map, an empty map is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == fromList [(\"\",1),(\"b\",2),(\"c\",3)]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to find the value in a map associated with a string,\n but you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting map is empty, the entire string cannot\n be a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#deletePrefix",
        "fct-type": "function",
        "title": "deletePrefix"
      },
      "index": {
        "description": "The map which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the map an empty map is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to find the value in map associated with string but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting map is empty the entire string cannot be member of the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "deletePrefix",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deleteSuffixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#deleteSuffixes",
        "fct-type": "function",
        "title": "deleteSuffixes"
      },
      "index": {
        "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "deleteSuffixes",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Suffixes",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two maps: the map which\n contains all keys that are members of the first map and not of the second.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e difference = differenceWith (\\_ _ -\u003e Nothing)\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The difference of the two maps the map which contains all keys that are members of the first map and not of the second The worst-case performance occurs when the two maps are identical difference differenceWith Nothing",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "difference",
        "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e, but the given function\n determines what to do when a key is a member of both maps. If the function\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the key is removed; if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a new value,\n that value replaces the old one in the first map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like difference but the given function determines what to do when key is member of both maps If the function returns Nothing the key is removed if it returns Just new value that value replaces the old one in the first map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eTrieMap c d a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifferenceWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#differenceWithKey",
        "fct-type": "function",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like differenceWith but in addition to the two values the key they are associated with is passed to the combining function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "differenceWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003eMaybe b)-\u003eTrieMap d a b-\u003eTrieMap d a c-\u003eTrieMap d a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "empty",
        "normalized": "",
        "package": "list-tries",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, discarding\n those for which the function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Apply the given function to the elements in the map discarding those for which the function returns False",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Like filter but the key associated with the element is also passed to the given predicate",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "filterWithKey",
        "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Map.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "Like fst composed with maxView Just the minimal key in the map and its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "findMax",
        "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Map.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Like fst composed with minView Just the minimal key in the map and its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "findMin",
        "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findPredecessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which precedes the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Map.html#findPredecessor",
        "fct-type": "function",
        "title": "findPredecessor"
      },
      "index": {
        "description": "Just the key of the map which precedes the given key in order along with its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "findPredecessor",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
        "package": "list-tries",
        "partial": "Predecessor",
        "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findSuccessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which succeeds the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Map.html#findSuccessor",
        "fct-type": "function",
        "title": "findSuccessor"
      },
      "index": {
        "description": "Just the key of the map which succeeds the given key in order along with its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "findSuccessor",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
        "package": "list-tries",
        "partial": "Successor",
        "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlAsc",
        "fct-type": "function",
        "title": "foldlAsc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlAsc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAsc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlAsc%27",
        "fct-type": "function",
        "title": "foldlAsc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlAsc'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Asc'",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAscWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlAscWithKey",
        "fct-type": "function",
        "title": "foldlAscWithKey"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlAscWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Asc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAscWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlAscWithKey%27",
        "fct-type": "function",
        "title": "foldlAscWithKey'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlAscWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Asc With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlDesc",
        "fct-type": "function",
        "title": "foldlDesc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlDesc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDesc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlDesc%27",
        "fct-type": "function",
        "title": "foldlDesc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlDesc'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Desc'",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDescWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlDescWithKey",
        "fct-type": "function",
        "title": "foldlDescWithKey"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlDescWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Desc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDescWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation, folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlDescWithKey%27",
        "fct-type": "function",
        "title": "foldlDescWithKey'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlDescWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Desc With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldlWithKey%27",
        "fct-type": "function",
        "title": "foldlWithKey'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldlWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding only over the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Equivalent to list foldr on the toList representation folding only over the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldrAsc",
        "fct-type": "function",
        "title": "foldrAsc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toAscList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldrAsc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrAscWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldrAscWithKey",
        "fct-type": "function",
        "title": "foldrAscWithKey"
      },
      "index": {
        "description": "Equivalent to list foldr on the toAscList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldrAscWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Asc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldrDesc",
        "fct-type": "function",
        "title": "foldrDesc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toDescList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldrDesc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrDescWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldrDescWithKey",
        "fct-type": "function",
        "title": "foldrDescWithKey"
      },
      "index": {
        "description": "Equivalent to list foldr on the toDescList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldrDescWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Desc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Map.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Equivalent to list foldr on the toList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "foldrWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a map from a list of key-value pairs. If a key occurs\n more than once, the value from the last pair (according to the list's order)\n is the one which ends up in the map.\n\u003c/p\u003e\u003cpre\u003e fromList = fromListWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates map from list of key-value pairs If key occurs more than once the value from the last pair according to the list order is the one which ends up in the map fromList fromListWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "fromList",
        "normalized": "[([a],b)]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "List",
        "signature": "[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e, but the given function is used to determine the\n final value if a key occurs more than once. The function is applied as\n though it were flipped and then applied as a left fold over the values in\n the given list's order. Or, equivalently (except as far as performance is\n concerned), as though the function were applied as a right fold over the\n values in the reverse of the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e fromListWith (-) [(\"a\",1),(\"a\",2),(\"a\",3),(\"a\",4)]\n    == fromList [(\"a\",4-(3-(2-1)))]\n    == fromList [(\"a\",2)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "Like fromList but the given function is used to determine the final value if key occurs more than once The function is applied as though it were flipped and then applied as left fold over the values in the given list order Or equivalently except as far as performance is concerned as though the function were applied as right fold over the values in the reverse of the given list order For example fromListWith fromList fromList",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#fromListWith%27",
        "fct-type": "function",
        "title": "fromListWith'"
      },
      "index": {
        "description": "Like fromListWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "fromListWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "List With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the key, in addition to the values to\n be combined, is passed to the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#fromListWithKey",
        "fct-type": "function",
        "title": "fromListWithKey"
      },
      "index": {
        "description": "Like fromListWith but the key in addition to the values to be combined is passed to the combining function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "fromListWithKey",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "List With Key",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#fromListWithKey%27",
        "fct-type": "function",
        "title": "fromListWithKey'"
      },
      "index": {
        "description": "Like fromListWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "fromListWithKey'",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "List With Key'",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the given value replaces the old one.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Inserts the key-value pair into the map If the key is already member of the map the given value replaces the old one",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "insert",
        "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insert-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the given value replaces the old one.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#insert%27",
        "fct-type": "function",
        "title": "insert'"
      },
      "index": {
        "description": "min Inserts the key-value pair into the map If the key is already member of the map the given value replaces the old one",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "insert'",
        "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the old value is replaced by \u003ccode\u003ef givenValue\n oldValue\u003c/code\u003e where \u003ccode\u003ef\u003c/code\u003e is the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "min Inserts the key-value pair into the map If the key is already member of the map the old value is replaced by givenValue oldValue where is the given function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insertWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but the new value is reduced to weak\n head normal form before being placed into the map, whether it is the given\n value or a result of the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#insertWith%27",
        "fct-type": "function",
        "title": "insertWith'"
      },
      "index": {
        "description": "min Like insertWith but the new value is reduced to weak head normal form before being placed into the map whether it is the given value or result of the combining function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "insertWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two maps: the map which\n contains all keys that are members of both maps.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e intersection = intersectionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The intersection of the two maps the map which contains all keys that are members of both maps The worst-case performance occurs when the two maps are identical intersection intersectionWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "intersection",
        "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersection-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e intersection' = intersectionWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#intersection%27",
        "fct-type": "function",
        "title": "intersection'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersection but the combining function is applied strictly intersection intersectionWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "intersection'",
        "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the given function\n determines the new values.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Map.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersection but the given function determines the new values",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "intersectionWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but the combining function\n is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Map.html#intersectionWith%27",
        "fct-type": "function",
        "title": "intersectionWith'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersectionWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "intersectionWith'",
        "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Map.html#intersectionWithKey",
        "fct-type": "function",
        "title": "intersectionWithKey"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersectionWith but in addition to the two values the key they are associated with is passed to the combining function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "intersectionWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining\n function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Map.html#intersectionWithKey%27",
        "fct-type": "function",
        "title": "intersectionWithKey'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersectionWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "intersectionWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isProperSubmapOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a proper submap of the\n second, i.e. all keys that are members of the first map are also members of\n the second map, and their associated values are the same, but the maps are\n not equal. That is, at least one key was a member of the second map but not\n the first.\n\u003c/p\u003e\u003cpre\u003e isProperSubmapOf = isProperSubmapOfBy (==)\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#isProperSubmapOf",
        "fct-type": "function",
        "title": "isProperSubmapOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first map is proper submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same but the maps are not equal That is at least one key was member of the second map but not the first isProperSubmapOf isProperSubmapOfBy",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "isProperSubmapOf",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
        "package": "list-tries",
        "partial": "Proper Submap Of",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isProperSubmapOfBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the\n equality relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key, and at least one key in the second map is not\n a member of the first.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#isProperSubmapOfBy",
        "fct-type": "function",
        "title": "isProperSubmapOfBy"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like isProperSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key and at least one key in the second map is not member of the first",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "isProperSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
        "package": "list-tries",
        "partial": "Proper Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isSubmapOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a submap of the second,\n i.e. all keys that are members of the first map are also members of the\n second map, and their associated values are the same.\n\u003c/p\u003e\u003cpre\u003e isSubmapOf = isSubmapOfBy (==)\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#isSubmapOf",
        "fct-type": "function",
        "title": "isSubmapOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first map is submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same isSubmapOf isSubmapOfBy",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "isSubmapOf",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
        "package": "list-tries",
        "partial": "Submap Of",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isSubmapOfBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the equality\n relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#isSubmapOfBy",
        "fct-type": "function",
        "title": "isSubmapOfBy"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like isSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "isSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
        "package": "list-tries",
        "partial": "Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value in the map associated with the given key,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Maybe a",
        "fct-source": "src/Data-ListTrie-Map.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "min Just the value in the map associated with the given key or Nothing if the key is not member of the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "lookup",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe c",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:lookupPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3),(\"abc\",4)])\n    == fromList [(\"ab\",2),(\"abc\",4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#lookupPrefix",
        "fct-type": "function",
        "title": "lookupPrefix"
      },
      "index": {
        "description": "The map which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "lookupPrefix",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:lookupWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, but returns the given value when the key is\n not a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "a -\u003e [k] -\u003e TrieMap map k a -\u003e a",
        "fct-source": "src/Data-ListTrie-Map.html#lookupWithDefault",
        "fct-type": "function",
        "title": "lookupWithDefault"
      },
      "index": {
        "description": "min Like lookup but returns the given value when the key is not member of the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "lookupWithDefault",
        "normalized": "a-\u003e[b]-\u003eTrieMap c b a-\u003ea",
        "package": "list-tries",
        "partial": "With Default",
        "signature": "a-\u003e[k]-\u003eTrieMap map k a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the elements in the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Map.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply the given function to all the elements in the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:map-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Map.html#map%27",
        "fct-type": "function",
        "title": "map'"
      },
      "index": {
        "description": "Like map but apply the function strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "map'",
        "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ca\u003eData.List\u003c/a\u003e.\u003ccode\u003emapAccumL\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e\u003cp\u003eEssentially a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e: the given\n function is applied to each element of the map, resulting in a new value for\n the accumulator and a replacement element for the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Like Data.List mapAccumL on the toList representation Essentially combination of map and foldl the given function is applied to each element of the map resulting in new value for the accumulator and replacement element for the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccum",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccum-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccum%27",
        "fct-type": "function",
        "title": "mapAccum'"
      },
      "index": {
        "description": "Like mapAccum but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccum'",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum'",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in ascending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumAsc",
        "fct-type": "function",
        "title": "mapAccumAsc"
      },
      "index": {
        "description": "Like mapAccum but in ascending order as though operating on the toAscList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumAsc",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Asc",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAsc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumAsc%27",
        "fct-type": "function",
        "title": "mapAccumAsc'"
      },
      "index": {
        "description": "Like mapAccumAsc but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumAsc'",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Asc'",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAscWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumAscWithKey",
        "fct-type": "function",
        "title": "mapAccumAscWithKey"
      },
      "index": {
        "description": "Like mapAccumAsc but the function receives the key in addition to the value associated with it",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumAscWithKey",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Asc With Key",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAscWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAscWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumAscWithKey%27",
        "fct-type": "function",
        "title": "mapAccumAscWithKey'"
      },
      "index": {
        "description": "Like mapAccumAscWithKey but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumAscWithKey'",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Asc With Key'",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in descending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumDesc",
        "fct-type": "function",
        "title": "mapAccumDesc"
      },
      "index": {
        "description": "Like mapAccum but in descending order as though operating on the toDescList representation",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumDesc",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Desc",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDesc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumDesc%27",
        "fct-type": "function",
        "title": "mapAccumDesc'"
      },
      "index": {
        "description": "Like mapAccumDesc but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumDesc'",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Desc'",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDescWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumDescWithKey",
        "fct-type": "function",
        "title": "mapAccumDescWithKey"
      },
      "index": {
        "description": "Like mapAccumDesc but the function receives the key in addition to the value associated with it",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumDescWithKey",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Desc With Key",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDescWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDescWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumDescWithKey%27",
        "fct-type": "function",
        "title": "mapAccumDescWithKey'"
      },
      "index": {
        "description": "Like mapAccumDescWithKey but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumDescWithKey'",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Desc With Key'",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function receives the key in addition\n to the value associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumWithKey",
        "fct-type": "function",
        "title": "mapAccumWithKey"
      },
      "index": {
        "description": "Like mapAccum but the function receives the key in addition to the value associated with it",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumWithKey",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum With Key",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Map.html#mapAccumWithKey%27",
        "fct-type": "function",
        "title": "mapAccumWithKey'"
      },
      "index": {
        "description": "Like mapAccumWithKey but the function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapAccumWithKey'",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum With Key'",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, separating\n the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e results from the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. The first element of the pair contains\n the former results, and the second the latter.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
        "fct-source": "src/Data-ListTrie-Map.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Apply the given function to the elements in the map separating the Left results from the Right The first element of the pair contains the former results and the second the latter",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eTrieMap d e a-\u003e(TrieMap d e b,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapEitherWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapEither\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
        "fct-source": "src/Data-ListTrie-Map.html#mapEitherWithKey",
        "fct-type": "function",
        "title": "mapEitherWithKey"
      },
      "index": {
        "description": "Like mapEither but the key associated with the element is also passed to the given function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapEitherWithKey",
        "normalized": "([a]-\u003eb-\u003eEither c d)-\u003eTrieMap e a b-\u003e(TrieMap e a c,TrieMap e a d)",
        "package": "list-tries",
        "partial": "Either With Key",
        "signature": "([k]-\u003ea-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n map.\n\u003c/p\u003e\u003cpre\u003e mapInKeys = mapInKeysWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Map.html#mapInKeys",
        "fct-type": "function",
        "title": "mapInKeys"
      },
      "index": {
        "description": "Apply the given function to the contents of all the keys in the map mapInKeys mapInKeysWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapInKeys",
        "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "In Keys",
        "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeys-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but combine identical keys strictly.\n\u003c/p\u003e\u003cpre\u003e mapInKeys' = mapInKeysWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Map.html#mapInKeys%27",
        "fct-type": "function",
        "title": "mapInKeys'"
      },
      "index": {
        "description": "Like mapInKeys but combine identical keys strictly mapInKeys mapInKeysWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapInKeys'",
        "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "In Keys'",
        "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeysWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Map.html#mapInKeysWith",
        "fct-type": "function",
        "title": "mapInKeysWith"
      },
      "index": {
        "description": "Like mapInKeys but use the first given function to combine elements if the second function gives two keys the same value",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapInKeysWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "In Keys With",
        "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeysWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeysWith\u003c/a\u003e\u003c/code\u003e, but apply the combining function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Map.html#mapInKeysWith%27",
        "fct-type": "function",
        "title": "mapInKeysWith'"
      },
      "index": {
        "description": "Like mapInKeysWith but apply the combining function strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapInKeysWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "In Keys With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in a map.\n\u003c/p\u003e\u003cpre\u003e mapKeys = mapKeysWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Map.html#mapKeys",
        "fct-type": "function",
        "title": "mapKeys"
      },
      "index": {
        "description": "Apply the given function to all the keys in map mapKeys mapKeysWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapKeys",
        "normalized": "([a]-\u003e[a])-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Keys",
        "signature": "([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapKeysWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e ([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Map.html#mapKeysWith",
        "fct-type": "function",
        "title": "mapKeysWith"
      },
      "index": {
        "description": "Like mapKeys but use the first given function to combine elements if the second function gives two keys the same value",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapKeysWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e([b]-\u003e[b])-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "Keys With",
        "signature": "(a-\u003ea-\u003ea)-\u003e([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, preserving\n only the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Map.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Apply the given function to the elements in the map preserving only the Just results",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eTrieMap c d a-\u003eTrieMap c d b",
        "package": "list-tries",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Map.html#mapMaybeWithKey",
        "fct-type": "function",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Like mapMaybe but the key associated with the element is also passed to the given function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapMaybeWithKey",
        "normalized": "([a]-\u003eb-\u003eMaybe c)-\u003eTrieMap d a b-\u003eTrieMap d a c",
        "package": "list-tries",
        "partial": "Maybe With Key",
        "signature": "([k]-\u003ea-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but also pass the key associated with the element to\n the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Map.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Like map but also pass the key associated with the element to the given function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapWithKey",
        "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapWithKey\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Map.html#mapWithKey%27",
        "fct-type": "function",
        "title": "mapWithKey'"
      },
      "index": {
        "description": "Like mapWithKey but apply the function strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "mapWithKey'",
        "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "Removes and returns the maximal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "maxView",
        "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min True iff the given key is associated with value in the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "member",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "Removes and returns the minimal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "minView",
        "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min False iff the given key is associated with value in the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "notMember",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
        "package": "list-tries",
        "partial": "Member",
        "signature": "[k]-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Map.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "True iff the map is empty",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "null",
        "normalized": "TrieMap a b c-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of maps: the first element contains those values for\n which the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second contains those for\n which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "pair of maps the first element contains those values for which the given predicate returns True and the second contains those for which it was False",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003e(TrieMap b c a,TrieMap b c a)",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:partitionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#partitionWithKey",
        "fct-type": "function",
        "title": "partitionWithKey"
      },
      "index": {
        "description": "Like partition but the key associated with the element is also passed to the given predicate",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "partitionWithKey",
        "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003e(TrieMap c a b,TrieMap c a b)",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:showTrie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the map's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e ShowS",
        "fct-source": "src/Data-ListTrie-Map.html#showTrie",
        "fct-type": "function",
        "title": "showTrie"
      },
      "index": {
        "description": "Displays the map internal structure in an undefined way That is to say no program should depend on the function results",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "showTrie",
        "normalized": "TrieMap a b c-\u003eShowS",
        "package": "list-tries",
        "partial": "Trie",
        "signature": "TrieMap map k a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:showTrieWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eshowTrie\u003c/a\u003e\u003c/code\u003e, but uses the given function to display the\n elements of the map. Still undefined.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e ShowS) -\u003e TrieMap map k a -\u003e ShowS",
        "fct-source": "src/Data-ListTrie-Map.html#showTrieWith",
        "fct-type": "function",
        "title": "showTrieWith"
      },
      "index": {
        "description": "Like showTrie but uses the given function to display the elements of the map Still undefined",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "showTrieWith",
        "normalized": "(Maybe a-\u003eShowS)-\u003eTrieMap b c a-\u003eShowS",
        "package": "list-tries",
        "partial": "Trie With",
        "signature": "(Maybe a-\u003eShowS)-\u003eTrieMap map k a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The singleton map containing only the given key-value pair.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "The singleton map containing only the given key-value pair",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "singleton",
        "normalized": "[a]-\u003eb-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003ea-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e n",
        "fct-source": "src/Data-ListTrie-Map.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the map The value is built up lazily allowing for delivery of partial results without traversing the whole map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "size",
        "normalized": "TrieMap a b c-\u003ed",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:size-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built strictly:\n no value is returned until the map has been fully traversed.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e n",
        "fct-source": "src/Data-ListTrie-Map.html#size%27",
        "fct-type": "function",
        "title": "size'"
      },
      "index": {
        "description": "The number of elements in the map The value is built strictly no value is returned until the map has been fully traversed",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "size'",
        "normalized": "TrieMap a b c-\u003ed",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the map in two about the given key. The first\n element of the resulting pair is a map containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "min Splits the map in two about the given key The first element of the resulting pair is map containing the keys lesser than the given key the second contains those keys that are greater",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "split",
        "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,TrieMap b a c)",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:splitLookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns the value associated with\n the given key, if any.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, Maybe a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#splitLookup",
        "fct-type": "function",
        "title": "splitLookup"
      },
      "index": {
        "description": "min Like split but also returns the value associated with the given key if any",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "splitLookup",
        "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,Maybe c,TrieMap b a c)",
        "package": "list-tries",
        "partial": "Lookup",
        "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,Maybe a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:splitPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n map, the value associated with that prefix, if any, and the map with that\n prefix removed from all the keys as well as the map itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [(\"a\",1),(\"b\",2)])\n    == (\"\", Nothing, fromList [(\"a\",1),(\"b\",2)])\n splitPrefix (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == (\"a\", Just 1, fromList [(\"b\",2),(\"c\",3)])\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e ([k], Maybe a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#splitPrefix",
        "fct-type": "function",
        "title": "splitPrefix"
      },
      "index": {
        "description": "triple containing the longest common prefix of all keys in the map the value associated with that prefix if any and the map with that prefix removed from all the keys as well as the map itself Examples splitPrefix fromList Nothing fromList splitPrefix fromList ab ac Just fromList",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "splitPrefix",
        "normalized": "TrieMap a b c-\u003e([b],Maybe c,TrieMap a b c)",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "TrieMap map k a-\u003e([k],Maybe a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e [([k], a)]",
        "fct-source": "src/Data-ListTrie-Map.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Converts the map to list of the key-value pairs contained within in ascending order",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "toAscList",
        "normalized": "TrieMap a b c-\u003e[([b],c)]",
        "package": "list-tries",
        "partial": "Asc List",
        "signature": "TrieMap map k a-\u003e[([k],a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e [([k], a)]",
        "fct-source": "src/Data-ListTrie-Map.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "Converts the map to list of the key-value pairs contained within in descending order",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "toDescList",
        "normalized": "TrieMap a b c-\u003e[([b],c)]",
        "package": "list-tries",
        "partial": "Desc List",
        "signature": "TrieMap map k a-\u003e[([k],a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in undefined order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e [([k], a)]",
        "fct-source": "src/Data-ListTrie-Map.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Converts the map to list of the key-value pairs contained within in undefined order",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "toList",
        "normalized": "TrieMap a b c-\u003e[([b],c)]",
        "package": "list-tries",
        "partial": "List",
        "signature": "TrieMap map k a-\u003e[([k],a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two maps: the map which contains\n all keys that are members of either map. This union is left-biased: if a key\n is a member of both maps, the value from the first map is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e union = unionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The union of the two maps the map which contains all keys that are members of either map This union is left-biased if key is member of both maps the value from the first map is chosen The worst-case performance occurs when the two maps are identical union unionWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "union",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:union-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e) is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e union' = unionWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#union%27",
        "fct-type": "function",
        "title": "union'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like union but the combining function const is applied strictly union unionWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "union'",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the given function is used to\n determine the new value if a key is a member of both given maps. For a\n function \u003ccode\u003ef\u003c/code\u003e, the new value is \u003ccode\u003ef firstMapValue secondMapValue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like union but the given function is used to determine the new value if key is member of both given maps For function the new value is firstMapValue secondMapValue",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionWith%27",
        "fct-type": "function",
        "title": "unionWith'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like unionWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key is passed to the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like unionWith but in addition to the two values the key is passed to the combining function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionWithKey",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionWithKey%27",
        "fct-type": "function",
        "title": "unionWithKey'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like unionWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionWithKey'",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the maps: the map which contains all keys\n that are members of any of the maps. If a key is a member of multiple maps,\n the value that occurs in the earliest of the maps (according to the order of\n the given list) is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the maps are identical.\n\u003c/p\u003e\u003cpre\u003e unions = unionsWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "sum The union of all the maps the map which contains all keys that are members of any of the maps If key is member of multiple maps the value that occurs in the earliest of the maps according to the order of the given list is chosen The worst-case performance occurs when all the maps are identical unions unionsWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unions",
        "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unions-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e) is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e unions' = unionsWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "[TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unions%27",
        "fct-type": "function",
        "title": "unions'"
      },
      "index": {
        "description": "sum Like unions but the combining function const is applied strictly unions unionsWith const",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unions'",
        "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the given function determines the final\n value if a key is a member of more than one map. The function is applied as\n a left fold over the values in the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e unionsWith (-) [fromList [(\"a\",1)],fromList [(\"a\",2)],fromList [(\"a\",3)]]\n    == fromList [(\"a\",(1-2)-3)]\n    == fromList [(\"a\",-4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "sum Like unions but the given function determines the final value if key is member of more than one map The function is applied as left fold over the values in the given list order For example unionsWith fromList fromList fromList fromList fromList",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionsWith%27",
        "fct-type": "function",
        "title": "unionsWith'"
      },
      "index": {
        "description": "sum Like unionsWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionsWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two values under\n consideration, the key is passed to the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionsWithKey",
        "fct-type": "function",
        "title": "unionsWithKey"
      },
      "index": {
        "description": "sum Like unionsWith but in addition to the two values under consideration the key is passed to the combining function",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionsWithKey",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#unionsWithKey%27",
        "fct-type": "function",
        "title": "unionsWithKey'"
      },
      "index": {
        "description": "sum Like unionsWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "unionsWithKey'",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Updates the value at the given key: if the given\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the value and its associated key are removed; if\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e a\u003c/code\u003e is returned, the old value is replaced with \u003ccode\u003ea\u003c/code\u003e. If the key is\n not a member of the map, the map is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Map.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "min Updates the value at the given key if the given function returns Nothing the value and its associated key are removed if Just is returned the old value is replaced with If the key is not member of the map the map is unchanged",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:updateLookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, but also returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the original value,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e (Maybe a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Map.html#updateLookup",
        "fct-type": "function",
        "title": "updateLookup"
      },
      "index": {
        "description": "min Like update but also returns Just the original value or Nothing if the key is not member of the map",
        "hierarchy": "Data ListTrie Map",
        "module": "Data.ListTrie.Map",
        "name": "updateLookup",
        "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003e(Maybe a,TrieMap c b a)",
        "package": "list-tries",
        "partial": "Lookup",
        "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003e(Maybe a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Enum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of enumerable elements to arbitrary values, based on a\n Patricia trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n representation after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map.Enum",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Map-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "map from lists of enumerable elements to arbitrary values based on Patricia trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
        "hierarchy": "Data ListTrie Patricia Map Enum",
        "module": "Data.ListTrie.Patricia.Map.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "list-tries",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Enum.html#t:TrieMap",
      "description": {
        "fct-module": "Data.ListTrie.Patricia.Map.Enum",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Patricia-Map-Enum.html#TrieMap",
        "fct-type": "type",
        "title": "TrieMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Patricia Map Enum",
        "module": "Data.ListTrie.Patricia.Map.Enum",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Eq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be compared for equality to\n arbitrary values, based on a Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map.Eq",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Map-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "map from lists of elements that can be compared for equality to arbitrary values based on Patricia trie",
        "hierarchy": "Data ListTrie Patricia Map Eq",
        "module": "Data.ListTrie.Patricia.Map.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "list-tries",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Eq.html#t:TrieMap",
      "description": {
        "fct-module": "Data.ListTrie.Patricia.Map.Eq",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Patricia-Map-Eq.html#TrieMap",
        "fct-type": "type",
        "title": "TrieMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Patricia Map Eq",
        "module": "Data.ListTrie.Patricia.Map.Eq",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Ord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be totally ordered to arbitrary\n values, based on a Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map.Ord",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Map-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "map from lists of elements that can be totally ordered to arbitrary values based on Patricia trie",
        "hierarchy": "Data ListTrie Patricia Map Ord",
        "module": "Data.ListTrie.Patricia.Map.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "list-tries",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Ord.html#t:TrieMap",
      "description": {
        "fct-module": "Data.ListTrie.Patricia.Map.Ord",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Patricia-Map-Ord.html#TrieMap",
        "fct-type": "type",
        "title": "TrieMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Patricia Map Ord",
        "module": "Data.ListTrie.Patricia.Map.Ord",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a Patricia trie representing a map with list\n keys, generalized over any type of map from element values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the map and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the map.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003cp\u003eStrict versions of functions are provided for those who want to be certain\n that their \u003ccode\u003e\u003ca\u003eTrieMap\u003c/a\u003e\u003c/code\u003e doesn't contain values consisting of unevaluated\n thunks. Note, however, that they do not evaluate the whole trie strictly,\n only the values. And only to one level of depth: for instance, \u003ccode\u003e\u003ca\u003ealter'\u003c/a\u003e\u003c/code\u003e does\n not \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e the value within the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, only the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e itself. The user\n should add the strictness in such cases himself, if he so wishes.\n\u003c/p\u003e\u003cp\u003eMany functions come in both ordinary and \u003ccode\u003eWithKey\u003c/code\u003e forms, where the former\n takes a function of type \u003ccode\u003ea -\u003e b\u003c/code\u003e and the latter of type \u003ccode\u003e[k] -\u003e a -\u003e b\u003c/code\u003e,\n where \u003ccode\u003e[k]\u003c/code\u003e is the key associated with the value \u003ccode\u003ea\u003c/code\u003e. For most of these\n functions, there is additional overhead involved in keeping track of the\n key: don't use the latter form of the function unless you need it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html",
        "fct-type": "module",
        "title": "Map"
      },
      "index": {
        "description": "The base implementation of Patricia trie representing map with list keys generalized over any type of map from element values to tries Worst-case complexities are given in terms of and refers to the number of keys in the map and to their maximum length refers to the length of key given to the function not any property of the map In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven Strict versions of functions are provided for those who want to be certain that their TrieMap doesn contain values consisting of unevaluated thunks Note however that they do not evaluate the whole trie strictly only the values And only to one level of depth for instance alter does not seq the value within the Maybe only the Maybe itself The user should add the strictness in such cases himself if he so wishes Many functions come in both ordinary and WithKey forms where the former takes function of type and the latter of type where is the key associated with the value For most of these functions there is additional overhead involved in keeping track of the key don use the latter form of the function unless you need it",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "Map",
        "normalized": "",
        "package": "list-tries",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#t:TrieMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure itself: a map from keys of type \u003ccode\u003e[k]\u003c/code\u003e to values of type\n \u003ccode\u003ev\u003c/code\u003e implemented as a trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ek\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eTrie\u003c/code\u003e class is internal, ignore it.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003eFoldable\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances allow folding over and\n   traversing only the values, not the keys.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "data",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#TrieMap",
        "fct-type": "data",
        "title": "TrieMap"
      },
      "index": {
        "description": "The data structure itself map from keys of type to values of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The Trie class is internal ignore it The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Foldable and Traversable instances allow folding over and traversing only the values not the keys The Monoid instance defines mappend as union and mempty as empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "TrieMap",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:addPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the map. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"xa\" (fromList [(\"a\",1),(\"b\",2)])\n    == fromList [(\"xaa\",1),(\"xab\",2)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#addPrefix",
        "fct-type": "function",
        "title": "addPrefix"
      },
      "index": {
        "description": "Prepends the given key to all the keys of the map For example addPrefix xa fromList fromList xaa xab",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "addPrefix",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Adjusts the value at the given key by calling the given\n function on it. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "min Adjusts the value at the given key by calling the given function on it If the key is not member of the map the map is unchanged",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:adjust-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eadjust\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#adjust%27",
        "fct-type": "function",
        "title": "adjust'"
      },
      "index": {
        "description": "min Like adjust but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "adjust'",
        "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. The most general modification function, allowing you to\n modify the value at the given key, whether or not it is a member of the map.\n In short: the given function is passed \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value at the key if it is\n present, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise; if the function returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the\n new value is inserted into the map, otherwise the old value is removed. More\n precisely, for \u003ccode\u003ealter f k m\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ek\u003c/code\u003e is a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e oldValue)\u003c/code\u003e is called. Now:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e newValue\u003c/code\u003e, \u003ccode\u003eoldValue\u003c/code\u003e is replaced with \u003ccode\u003enewValue\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ek\u003c/code\u003e and \u003ccode\u003eoldValue\u003c/code\u003e are removed from the map.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf, instead, \u003ccode\u003ek\u003c/code\u003e is not a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef \u003c/code\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is called, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e value\u003c/code\u003e, \u003ccode\u003evalue\u003c/code\u003e is inserted into the map, at \u003ccode\u003ek\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the map is unchanged.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function is applied lazily only if the given key is a prefix of more\n than one key in the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "min The most general modification function allowing you to modify the value at the given key whether or not it is member of the map In short the given function is passed Just the value at the key if it is present or Nothing otherwise if the function returns Just value the new value is inserted into the map otherwise the old value is removed More precisely for alter If is member of Just oldValue is called Now If returned Just newValue oldValue is replaced with newValue If returned Nothing and oldValue are removed from the map If instead is not member of Nothing is called and If returned Just value value is inserted into the map at If returned Nothing the map is unchanged The function is applied lazily only if the given key is prefix of more than one key in the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:alter-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e, but the function is always applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#alter%27",
        "fct-type": "function",
        "title": "alter'"
      },
      "index": {
        "description": "min Like alter but the function is always applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "alter'",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the longest common prefix in the trie as maps,\n associated with their distinguishing key value. If the map contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [(\"a\",1),(\"abc\",2),(\"abcd\",3)])\n    == Map.fromList [('b',fromList [(\"c\",2),(\"cd\",3)])]\n children (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "The children of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "children",
        "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:children1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as maps, associated with their distinguishing key value. If the map\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [(\"abc\",1),(\"abcd\",2)])\n    == Map.fromList [('a',fromList [(\"bc\",1),(\"bcd\",2)])]\n children1 (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#children1",
        "fct-type": "function",
        "title": "children1"
      },
      "index": {
        "description": "The children of the first element of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "children1",
        "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the map along with its associated\n value. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Removes the key from the map along with its associated value If the key is not member of the map the map is unchanged",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "delete",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The map without its maximal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "Like snd composed with maxView The map without its maximal key or the unchanged original map if it was empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "deleteMax",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The map without its minimal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "Like snd composed with minView The map without its minimal key or the unchanged original map if it was empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "deleteMin",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deletePrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the map, an empty map is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == fromList [(\"\",1),(\"b\",2),(\"c\",3)]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to find the value in a map associated with a string,\n but you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting map is empty, the entire string cannot\n be a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#deletePrefix",
        "fct-type": "function",
        "title": "deletePrefix"
      },
      "index": {
        "description": "The map which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the map an empty map is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to find the value in map associated with string but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting map is empty the entire string cannot be member of the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "deletePrefix",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deleteSuffixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#deleteSuffixes",
        "fct-type": "function",
        "title": "deleteSuffixes"
      },
      "index": {
        "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "deleteSuffixes",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Suffixes",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two maps: the map which\n contains all keys that are members of the first map and not of the second.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e difference = differenceWith (\\_ _ -\u003e Nothing)\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The difference of the two maps the map which contains all keys that are members of the first map and not of the second The worst-case performance occurs when the two maps are identical difference differenceWith Nothing",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "difference",
        "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e, but the given function\n determines what to do when a key is a member of both maps. If the function\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the key is removed; if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a new value,\n that value replaces the old one in the first map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like difference but the given function determines what to do when key is member of both maps If the function returns Nothing the key is removed if it returns Just new value that value replaces the old one in the first map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eTrieMap c d a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifferenceWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#differenceWithKey",
        "fct-type": "function",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like differenceWith but in addition to the two values the key they are associated with is passed to the combining function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "differenceWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003eMaybe b)-\u003eTrieMap d a b-\u003eTrieMap d a c-\u003eTrieMap d a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "empty",
        "normalized": "",
        "package": "list-tries",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, discarding\n those for which the function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Apply the given function to the elements in the map discarding those for which the function returns False",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:filterWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#filterWithKey",
        "fct-type": "function",
        "title": "filterWithKey"
      },
      "index": {
        "description": "Like filter but the key associated with the element is also passed to the given predicate",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "filterWithKey",
        "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "Like fst composed with maxView Just the minimal key in the map and its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "findMax",
        "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Like fst composed with minView Just the minimal key in the map and its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "findMin",
        "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findPredecessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which precedes the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#findPredecessor",
        "fct-type": "function",
        "title": "findPredecessor"
      },
      "index": {
        "description": "Just the key of the map which precedes the given key in order along with its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "findPredecessor",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
        "package": "list-tries",
        "partial": "Predecessor",
        "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findSuccessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which succeeds the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#findSuccessor",
        "fct-type": "function",
        "title": "findSuccessor"
      },
      "index": {
        "description": "Just the key of the map which succeeds the given key in order along with its associated value or Nothing if the map is empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "findSuccessor",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
        "package": "list-tries",
        "partial": "Successor",
        "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlAsc",
        "fct-type": "function",
        "title": "foldlAsc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlAsc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAsc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlAsc%27",
        "fct-type": "function",
        "title": "foldlAsc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlAsc'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Asc'",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAscWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlAscWithKey",
        "fct-type": "function",
        "title": "foldlAscWithKey"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlAscWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Asc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAscWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlAscWithKey%27",
        "fct-type": "function",
        "title": "foldlAscWithKey'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlAscWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Asc With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlDesc",
        "fct-type": "function",
        "title": "foldlDesc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlDesc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDesc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlDesc%27",
        "fct-type": "function",
        "title": "foldlDesc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlDesc'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Desc'",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDescWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlDescWithKey",
        "fct-type": "function",
        "title": "foldlDescWithKey"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlDescWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Desc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDescWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation, folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlDescWithKey%27",
        "fct-type": "function",
        "title": "foldlDescWithKey'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlDescWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Desc With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlWithKey",
        "fct-type": "function",
        "title": "foldlWithKey"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldlWithKey%27",
        "fct-type": "function",
        "title": "foldlWithKey'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldlWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding only over the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Equivalent to list foldr on the toList representation folding only over the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldrAsc",
        "fct-type": "function",
        "title": "foldrAsc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldrAsc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrAscWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldrAscWithKey",
        "fct-type": "function",
        "title": "foldrAscWithKey"
      },
      "index": {
        "description": "Equivalent to list foldr on the toAscList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldrAscWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Asc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldrDesc",
        "fct-type": "function",
        "title": "foldrDesc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldrDesc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrDescWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldrDescWithKey",
        "fct-type": "function",
        "title": "foldrDescWithKey"
      },
      "index": {
        "description": "Equivalent to list foldr on the toDescList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldrDescWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "Desc With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Equivalent to list foldr on the toList representation folding over both the keys and the elements",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "foldrWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a map from a list of key-value pairs. If a key occurs\n more than once, the value from the last pair (according to the list's order)\n is the one which ends up in the map.\n\u003c/p\u003e\u003cpre\u003e fromList = fromListWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates map from list of key-value pairs If key occurs more than once the value from the last pair according to the list order is the one which ends up in the map fromList fromListWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "fromList",
        "normalized": "[([a],b)]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "List",
        "signature": "[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e, but the given function is used to determine the\n final value if a key occurs more than once. The function is applied as\n though it were flipped and then applied as a left fold over the values in\n the given list's order. Or, equivalently (except as far as performance is\n concerned), as though the function were applied as a right fold over the\n values in the reverse of the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e fromListWith (-) [(\"a\",1),(\"a\",2),(\"a\",3),(\"a\",4)]\n    == fromList [(\"a\",4-(3-(2-1)))]\n    == fromList [(\"a\",2)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "Like fromList but the given function is used to determine the final value if key occurs more than once The function is applied as though it were flipped and then applied as left fold over the values in the given list order Or equivalently except as far as performance is concerned as though the function were applied as right fold over the values in the reverse of the given list order For example fromListWith fromList fromList",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#fromListWith%27",
        "fct-type": "function",
        "title": "fromListWith'"
      },
      "index": {
        "description": "Like fromListWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "fromListWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "List With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the key, in addition to the values to\n be combined, is passed to the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#fromListWithKey",
        "fct-type": "function",
        "title": "fromListWithKey"
      },
      "index": {
        "description": "Like fromListWith but the key in addition to the values to be combined is passed to the combining function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "fromListWithKey",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "List With Key",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#fromListWithKey%27",
        "fct-type": "function",
        "title": "fromListWithKey'"
      },
      "index": {
        "description": "Like fromListWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "fromListWithKey'",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "List With Key'",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the given value replaces the old one.\n\u003c/p\u003e\u003cpre\u003e insert = insertWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Inserts the key-value pair into the map If the key is already member of the map the given value replaces the old one insert insertWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "insert",
        "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insert-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but the new value is reduced to weak head\n normal form before being placed into the map.\n\u003c/p\u003e\u003cpre\u003e insert' = insertWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#insert%27",
        "fct-type": "function",
        "title": "insert'"
      },
      "index": {
        "description": "min Like insert but the new value is reduced to weak head normal form before being placed into the map insert insertWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "insert'",
        "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the old value is replaced by \u003ccode\u003ef givenValue\n oldValue\u003c/code\u003e where \u003ccode\u003ef\u003c/code\u003e is the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "min Inserts the key-value pair into the map If the key is already member of the map the old value is replaced by givenValue oldValue where is the given function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insertWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but the new value is reduced to weak\n head normal form before being placed into the map, whether it is the given\n value or a result of the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#insertWith%27",
        "fct-type": "function",
        "title": "insertWith'"
      },
      "index": {
        "description": "min Like insertWith but the new value is reduced to weak head normal form before being placed into the map whether it is the given value or result of the combining function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "insertWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two maps: the map which\n contains all keys that are members of both maps.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e intersection = intersectionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The intersection of the two maps the map which contains all keys that are members of both maps The worst-case performance occurs when the two maps are identical intersection intersectionWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "intersection",
        "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersection-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e intersection' = intersectionWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#intersection%27",
        "fct-type": "function",
        "title": "intersection'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersection but the combining function is applied strictly intersection intersectionWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "intersection'",
        "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the given function\n determines the new values.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersection but the given function determines the new values",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "intersectionWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but the combining function\n is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#intersectionWith%27",
        "fct-type": "function",
        "title": "intersectionWith'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersectionWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "intersectionWith'",
        "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#intersectionWithKey",
        "fct-type": "function",
        "title": "intersectionWithKey"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersectionWith but in addition to the two values the key they are associated with is passed to the combining function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "intersectionWithKey",
        "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining\n function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#intersectionWithKey%27",
        "fct-type": "function",
        "title": "intersectionWithKey'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like intersectionWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "intersectionWithKey'",
        "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isProperSubmapOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a proper submap of the\n second, i.e. all keys that are members of the first map are also members of\n the second map, and their associated values are the same, but the maps are\n not equal. That is, at least one key was a member of the second map but not\n the first.\n\u003c/p\u003e\u003cpre\u003e isProperSubmapOf = isProperSubmapOfBy (==)\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#isProperSubmapOf",
        "fct-type": "function",
        "title": "isProperSubmapOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first map is proper submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same but the maps are not equal That is at least one key was member of the second map but not the first isProperSubmapOf isProperSubmapOfBy",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "isProperSubmapOf",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
        "package": "list-tries",
        "partial": "Proper Submap Of",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isProperSubmapOfBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the\n equality relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key, and at least one key in the second map is not\n a member of the first.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#isProperSubmapOfBy",
        "fct-type": "function",
        "title": "isProperSubmapOfBy"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like isProperSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key and at least one key in the second map is not member of the first",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "isProperSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
        "package": "list-tries",
        "partial": "Proper Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isSubmapOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a submap of the second,\n i.e. all keys that are members of the first map are also members of the\n second map, and their associated values are the same.\n\u003c/p\u003e\u003cpre\u003e isSubmapOf = isSubmapOfBy (==)\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#isSubmapOf",
        "fct-type": "function",
        "title": "isSubmapOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first map is submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same isSubmapOf isSubmapOfBy",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "isSubmapOf",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
        "package": "list-tries",
        "partial": "Submap Of",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isSubmapOfBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the equality\n relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#isSubmapOfBy",
        "fct-type": "function",
        "title": "isSubmapOfBy"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like isSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "isSubmapOfBy",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
        "package": "list-tries",
        "partial": "Submap Of By",
        "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value in the map associated with the given key,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Maybe a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "min Just the value in the map associated with the given key or Nothing if the key is not member of the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "lookup",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe c",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:lookupPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3),(\"abc\",4)])\n    == fromList [(\"ab\",2),(\"abc\",4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#lookupPrefix",
        "fct-type": "function",
        "title": "lookupPrefix"
      },
      "index": {
        "description": "The map which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "lookupPrefix",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:lookupWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, but returns the given value when the key is\n not a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "a -\u003e [k] -\u003e TrieMap map k a -\u003e a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#lookupWithDefault",
        "fct-type": "function",
        "title": "lookupWithDefault"
      },
      "index": {
        "description": "min Like lookup but returns the given value when the key is not member of the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "lookupWithDefault",
        "normalized": "a-\u003e[b]-\u003eTrieMap c b a-\u003ea",
        "package": "list-tries",
        "partial": "With Default",
        "signature": "a-\u003e[k]-\u003eTrieMap map k a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the elements in the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply the given function to all the elements in the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:map-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#map%27",
        "fct-type": "function",
        "title": "map'"
      },
      "index": {
        "description": "Like map but apply the function strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "map'",
        "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ca\u003eData.List\u003c/a\u003e.\u003ccode\u003emapAccumL\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e\u003cp\u003eEssentially a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e: the given\n function is applied to each element of the map, resulting in a new value for\n the accumulator and a replacement element for the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Like Data.List mapAccumL on the toList representation Essentially combination of map and foldl the given function is applied to each element of the map resulting in new value for the accumulator and replacement element for the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccum",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccum-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccum%27",
        "fct-type": "function",
        "title": "mapAccum'"
      },
      "index": {
        "description": "Like mapAccum but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccum'",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum'",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in ascending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAsc",
        "fct-type": "function",
        "title": "mapAccumAsc"
      },
      "index": {
        "description": "Like mapAccum but in ascending order as though operating on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumAsc",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Asc",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAsc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAsc%27",
        "fct-type": "function",
        "title": "mapAccumAsc'"
      },
      "index": {
        "description": "Like mapAccumAsc but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumAsc'",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Asc'",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAscWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAscWithKey",
        "fct-type": "function",
        "title": "mapAccumAscWithKey"
      },
      "index": {
        "description": "Like mapAccumAsc but the function receives the key in addition to the value associated with it",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumAscWithKey",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Asc With Key",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAscWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAscWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAscWithKey%27",
        "fct-type": "function",
        "title": "mapAccumAscWithKey'"
      },
      "index": {
        "description": "Like mapAccumAscWithKey but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumAscWithKey'",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Asc With Key'",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in descending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDesc",
        "fct-type": "function",
        "title": "mapAccumDesc"
      },
      "index": {
        "description": "Like mapAccum but in descending order as though operating on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumDesc",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Desc",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDesc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDesc%27",
        "fct-type": "function",
        "title": "mapAccumDesc'"
      },
      "index": {
        "description": "Like mapAccumDesc but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumDesc'",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Accum Desc'",
        "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDescWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDescWithKey",
        "fct-type": "function",
        "title": "mapAccumDescWithKey"
      },
      "index": {
        "description": "Like mapAccumDesc but the function receives the key in addition to the value associated with it",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumDescWithKey",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Desc With Key",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDescWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDescWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDescWithKey%27",
        "fct-type": "function",
        "title": "mapAccumDescWithKey'"
      },
      "index": {
        "description": "Like mapAccumDescWithKey but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumDescWithKey'",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum Desc With Key'",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function receives the key in addition\n to the value associated with it.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumWithKey",
        "fct-type": "function",
        "title": "mapAccumWithKey"
      },
      "index": {
        "description": "Like mapAccum but the function receives the key in addition to the value associated with it",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumWithKey",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum With Key",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapAccumWithKey%27",
        "fct-type": "function",
        "title": "mapAccumWithKey'"
      },
      "index": {
        "description": "Like mapAccumWithKey but the function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapAccumWithKey'",
        "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
        "package": "list-tries",
        "partial": "Accum With Key'",
        "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, separating\n the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e results from the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. The first element of the pair contains\n the former results, and the second the latter.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "Apply the given function to the elements in the map separating the Left results from the Right The first element of the pair contains the former results and the second the latter",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapEither",
        "normalized": "(a-\u003eEither b c)-\u003eTrieMap d e a-\u003e(TrieMap d e b,TrieMap d e c)",
        "package": "list-tries",
        "partial": "Either",
        "signature": "(a-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapEitherWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapEither\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapEitherWithKey",
        "fct-type": "function",
        "title": "mapEitherWithKey"
      },
      "index": {
        "description": "Like mapEither but the key associated with the element is also passed to the given function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapEitherWithKey",
        "normalized": "([a]-\u003eb-\u003eEither c d)-\u003eTrieMap e a b-\u003e(TrieMap e a c,TrieMap e a d)",
        "package": "list-tries",
        "partial": "Either With Key",
        "signature": "([k]-\u003ea-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n map.\n\u003c/p\u003e\u003cpre\u003e mapInKeys = mapInKeysWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapInKeys",
        "fct-type": "function",
        "title": "mapInKeys"
      },
      "index": {
        "description": "Apply the given function to the contents of all the keys in the map mapInKeys mapInKeysWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapInKeys",
        "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "In Keys",
        "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeys-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but combine identical keys strictly.\n\u003c/p\u003e\u003cpre\u003e mapInKeys' = mapInKeysWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapInKeys%27",
        "fct-type": "function",
        "title": "mapInKeys'"
      },
      "index": {
        "description": "Like mapInKeys but combine identical keys strictly mapInKeys mapInKeysWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapInKeys'",
        "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "In Keys'",
        "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeysWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapInKeysWith",
        "fct-type": "function",
        "title": "mapInKeysWith"
      },
      "index": {
        "description": "Like mapInKeys but use the first given function to combine elements if the second function gives two keys the same value",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapInKeysWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "In Keys With",
        "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeysWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeysWith\u003c/a\u003e\u003c/code\u003e, but apply the combining function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapInKeysWith%27",
        "fct-type": "function",
        "title": "mapInKeysWith'"
      },
      "index": {
        "description": "Like mapInKeysWith but apply the combining function strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapInKeysWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "In Keys With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapKeys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in a map.\n\u003c/p\u003e\u003cpre\u003e mapKeys = mapKeysWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapKeys",
        "fct-type": "function",
        "title": "mapKeys"
      },
      "index": {
        "description": "Apply the given function to all the keys in map mapKeys mapKeysWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapKeys",
        "normalized": "([a]-\u003e[a])-\u003eTrieMap b a c-\u003eTrieMap b a c",
        "package": "list-tries",
        "partial": "Keys",
        "signature": "([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapKeysWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e ([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapKeysWith",
        "fct-type": "function",
        "title": "mapKeysWith"
      },
      "index": {
        "description": "Like mapKeys but use the first given function to combine elements if the second function gives two keys the same value",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapKeysWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e([b]-\u003e[b])-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "Keys With",
        "signature": "(a-\u003ea-\u003ea)-\u003e([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, preserving\n only the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Apply the given function to the elements in the map preserving only the Just results",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eTrieMap c d a-\u003eTrieMap c d b",
        "package": "list-tries",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapMaybeWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapMaybeWithKey",
        "fct-type": "function",
        "title": "mapMaybeWithKey"
      },
      "index": {
        "description": "Like mapMaybe but the key associated with the element is also passed to the given function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapMaybeWithKey",
        "normalized": "([a]-\u003eb-\u003eMaybe c)-\u003eTrieMap d a b-\u003eTrieMap d a c",
        "package": "list-tries",
        "partial": "Maybe With Key",
        "signature": "([k]-\u003ea-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but also pass the key associated with the element to\n the given function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Like map but also pass the key associated with the element to the given function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapWithKey",
        "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapWithKey\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#mapWithKey%27",
        "fct-type": "function",
        "title": "mapWithKey'"
      },
      "index": {
        "description": "Like mapWithKey but apply the function strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "mapWithKey'",
        "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "Removes and returns the maximal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "maxView",
        "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min True iff the given key is associated with value in the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "member",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "Removes and returns the minimal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "minView",
        "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min False iff the given key is associated with value in the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "notMember",
        "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
        "package": "list-tries",
        "partial": "Member",
        "signature": "[k]-\u003eTrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the map is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "True iff the map is empty",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "null",
        "normalized": "TrieMap a b c-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of maps: the first element contains those values for\n which the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second contains those for\n which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "pair of maps the first element contains those values for which the given predicate returns True and the second contains those for which it was False",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003e(TrieMap b c a,TrieMap b c a)",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:partitionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#partitionWithKey",
        "fct-type": "function",
        "title": "partitionWithKey"
      },
      "index": {
        "description": "Like partition but the key associated with the element is also passed to the given predicate",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "partitionWithKey",
        "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003e(TrieMap c a b,TrieMap c a b)",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:showTrie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the map's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e ShowS",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#showTrie",
        "fct-type": "function",
        "title": "showTrie"
      },
      "index": {
        "description": "Displays the map internal structure in an undefined way That is to say no program should depend on the function results",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "showTrie",
        "normalized": "TrieMap a b c-\u003eShowS",
        "package": "list-tries",
        "partial": "Trie",
        "signature": "TrieMap map k a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:showTrieWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eshowTrie\u003c/a\u003e\u003c/code\u003e, but uses the given function to display the\n elements of the map. Still undefined.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(Maybe a -\u003e ShowS) -\u003e TrieMap map k a -\u003e ShowS",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#showTrieWith",
        "fct-type": "function",
        "title": "showTrieWith"
      },
      "index": {
        "description": "Like showTrie but uses the given function to display the elements of the map Still undefined",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "showTrieWith",
        "normalized": "(Maybe a-\u003eShowS)-\u003eTrieMap b c a-\u003eShowS",
        "package": "list-tries",
        "partial": "Trie With",
        "signature": "(Maybe a-\u003eShowS)-\u003eTrieMap map k a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The singleton map containing only the given key-value pair.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "The singleton map containing only the given key-value pair",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "singleton",
        "normalized": "[a]-\u003eb-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003ea-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e n",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the map The value is built up lazily allowing for delivery of partial results without traversing the whole map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "size",
        "normalized": "TrieMap a b c-\u003ed",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:size-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built strictly:\n no value is returned until the map has been fully traversed.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e n",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#size%27",
        "fct-type": "function",
        "title": "size'"
      },
      "index": {
        "description": "The number of elements in the map The value is built strictly no value is returned until the map has been fully traversed",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "size'",
        "normalized": "TrieMap a b c-\u003ed",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the map in two about the given key. The first\n element of the resulting pair is a map containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "min Splits the map in two about the given key The first element of the resulting pair is map containing the keys lesser than the given key the second contains those keys that are greater",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "split",
        "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,TrieMap b a c)",
        "package": "list-tries",
        "partial": "",
        "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:splitLookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns the value associated with\n the given key, if any.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, Maybe a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#splitLookup",
        "fct-type": "function",
        "title": "splitLookup"
      },
      "index": {
        "description": "min Like split but also returns the value associated with the given key if any",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "splitLookup",
        "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,Maybe c,TrieMap b a c)",
        "package": "list-tries",
        "partial": "Lookup",
        "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,Maybe a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:splitPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n map, the value associated with that prefix, if any, and the map with that\n prefix removed from all the keys as well as the map itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [(\"a\",1),(\"b\",2)])\n    == (\"\", Nothing, fromList [(\"a\",1),(\"b\",2)])\n splitPrefix (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == (\"a\", Just 1, fromList [(\"b\",2),(\"c\",3)])\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e ([k], Maybe a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#splitPrefix",
        "fct-type": "function",
        "title": "splitPrefix"
      },
      "index": {
        "description": "triple containing the longest common prefix of all keys in the map the value associated with that prefix if any and the map with that prefix removed from all the keys as well as the map itself Examples splitPrefix fromList Nothing fromList splitPrefix fromList ab ac Just fromList",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "splitPrefix",
        "normalized": "TrieMap a b c-\u003e([b],Maybe c,TrieMap a b c)",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "TrieMap map k a-\u003e([k],Maybe a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e [([k], a)]",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Converts the map to list of the key-value pairs contained within in ascending order",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "toAscList",
        "normalized": "TrieMap a b c-\u003e[([b],c)]",
        "package": "list-tries",
        "partial": "Asc List",
        "signature": "TrieMap map k a-\u003e[([k],a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in descending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e [([k], a)]",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "Converts the map to list of the key-value pairs contained within in descending order",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "toDescList",
        "normalized": "TrieMap a b c-\u003e[([b],c)]",
        "package": "list-tries",
        "partial": "Desc List",
        "signature": "TrieMap map k a-\u003e[([k],a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in undefined order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e [([k], a)]",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Converts the map to list of the key-value pairs contained within in undefined order",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "toList",
        "normalized": "TrieMap a b c-\u003e[([b],c)]",
        "package": "list-tries",
        "partial": "List",
        "signature": "TrieMap map k a-\u003e[([k],a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two maps: the map which contains\n all keys that are members of either map. This union is left-biased: if a key\n is a member of both maps, the value from the first map is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e union = unionWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The union of the two maps the map which contains all keys that are members of either map This union is left-biased if key is member of both maps the value from the first map is chosen The worst-case performance occurs when the two maps are identical union unionWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "union",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:union-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e)\n is applied strictly.\n\u003c/p\u003e\u003cpre\u003e union' = unionWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#union%27",
        "fct-type": "function",
        "title": "union'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like union but the combining function const is applied strictly union unionWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "union'",
        "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the given function is used to\n determine the new value if a key is a member of both given maps. For a\n function \u003ccode\u003ef\u003c/code\u003e, the new value is \u003ccode\u003ef firstMapValue secondMapValue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like union but the given function is used to determine the new value if key is member of both given maps For function the new value is firstMapValue secondMapValue",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionWith%27",
        "fct-type": "function",
        "title": "unionWith'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like unionWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key is passed to the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like unionWith but in addition to the two values the key is passed to the combining function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionWithKey",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionWithKey%27",
        "fct-type": "function",
        "title": "unionWithKey'"
      },
      "index": {
        "description": "min n1 m1 n2 m2 Like unionWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionWithKey'",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the maps: the map which contains all keys\n that are members of any of the maps. If a key is a member of multiple maps,\n the value that occurs in the earliest of the maps (according to the order of\n the given list) is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the maps are identical.\n\u003c/p\u003e\u003cpre\u003e unions = unionsWith const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "sum The union of all the maps the map which contains all keys that are members of any of the maps If key is member of multiple maps the value that occurs in the earliest of the maps according to the order of the given list is chosen The worst-case performance occurs when all the maps are identical unions unionsWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unions",
        "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unions-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e) is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e unions' = unionsWith' const\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "[TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unions%27",
        "fct-type": "function",
        "title": "unions'"
      },
      "index": {
        "description": "sum Like unions but the combining function const is applied strictly unions unionsWith const",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unions'",
        "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
        "package": "list-tries",
        "partial": "",
        "signature": "[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the given function determines the final\n value if a key is a member of more than one map. The function is applied as\n a left fold over the values in the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e unionsWith (-) [fromList [(\"a\",1)],fromList [(\"a\",2)],fromList [(\"a\",3)]]\n    == fromList [(\"a\",(1-2)-3)]\n    == fromList [(\"a\",-4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "sum Like unions but the given function determines the final value if key is member of more than one map The function is applied as left fold over the values in the given list order For example unionsWith fromList fromList fromList fromList fromList",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionsWith%27",
        "fct-type": "function",
        "title": "unionsWith'"
      },
      "index": {
        "description": "sum Like unionsWith but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionsWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
        "package": "list-tries",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two values under\n consideration, the key is passed to the combining function.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionsWithKey",
        "fct-type": "function",
        "title": "unionsWithKey"
      },
      "index": {
        "description": "sum Like unionsWith but in addition to the two values under consideration the key is passed to the combining function",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionsWithKey",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#unionsWithKey%27",
        "fct-type": "function",
        "title": "unionsWithKey'"
      },
      "index": {
        "description": "sum Like unionsWithKey but the combining function is applied strictly",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "unionsWithKey'",
        "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
        "package": "list-tries",
        "partial": "With Key'",
        "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Updates the value at the given key: if the given\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the value and its associated key are removed; if\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e a\u003c/code\u003e is returned, the old value is replaced with \u003ccode\u003ea\u003c/code\u003e. If the key is\n not a member of the map, the map is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "min Updates the value at the given key if the given function returns Nothing the value and its associated key are removed if Just is returned the old value is replaced with If the key is not member of the map the map is unchanged",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
        "package": "list-tries",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:updateLookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, but also returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the original value,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Map",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e (Maybe a, TrieMap map k a)",
        "fct-source": "src/Data-ListTrie-Patricia-Map.html#updateLookup",
        "fct-type": "function",
        "title": "updateLookup"
      },
      "index": {
        "description": "min Like update but also returns Just the original value or Nothing if the key is not member of the map",
        "hierarchy": "Data ListTrie Patricia Map",
        "module": "Data.ListTrie.Patricia.Map",
        "name": "updateLookup",
        "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003e(Maybe a,TrieMap c b a)",
        "package": "list-tries",
        "partial": "Lookup",
        "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003e(Maybe a,TrieMap map k a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Enum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of enumerable elements, based on a Patricia trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n representation after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set.Enum",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Set-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "set of lists of enumerable elements based on Patricia trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
        "hierarchy": "Data ListTrie Patricia Set Enum",
        "module": "Data.ListTrie.Patricia.Set.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "list-tries",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Enum.html#t:TrieSet",
      "description": {
        "fct-module": "Data.ListTrie.Patricia.Set.Enum",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Patricia-Set-Enum.html#TrieSet",
        "fct-type": "type",
        "title": "TrieSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Patricia Set Enum",
        "module": "Data.ListTrie.Patricia.Set.Enum",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Eq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be compared for equality, based on a\n Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set.Eq",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Set-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "set of lists of elements that can be compared for equality based on Patricia trie",
        "hierarchy": "Data ListTrie Patricia Set Eq",
        "module": "Data.ListTrie.Patricia.Set.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "list-tries",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Eq.html#t:TrieSet",
      "description": {
        "fct-module": "Data.ListTrie.Patricia.Set.Eq",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Patricia-Set-Eq.html#TrieSet",
        "fct-type": "type",
        "title": "TrieSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Patricia Set Eq",
        "module": "Data.ListTrie.Patricia.Set.Eq",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Ord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be totally ordered, based on a\n Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set.Ord",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Set-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "set of lists of elements that can be totally ordered based on Patricia trie",
        "hierarchy": "Data ListTrie Patricia Set Ord",
        "module": "Data.ListTrie.Patricia.Set.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "list-tries",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Ord.html#t:TrieSet",
      "description": {
        "fct-module": "Data.ListTrie.Patricia.Set.Ord",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Patricia-Set-Ord.html#TrieSet",
        "fct-type": "type",
        "title": "TrieSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Patricia Set Ord",
        "module": "Data.ListTrie.Patricia.Set.Ord",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a Patricia trie representing a set of lists,\n generalized over any type of map from element values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the set and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the set.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html",
        "fct-type": "module",
        "title": "Set"
      },
      "index": {
        "description": "The base implementation of Patricia trie representing set of lists generalized over any type of map from element values to tries Worst-case complexities are given in terms of and refers to the number of keys in the set and to their maximum length refers to the length of key given to the function not any property of the set In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "Set",
        "normalized": "",
        "package": "list-tries",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#t:TrieSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure itself: a set of keys of type \u003ccode\u003e[a]\u003c/code\u003e implemented as a\n trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ea\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eCMap\u003c/code\u003e type is internal, ignore it. For \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\n   instance is required: what this means is that \u003ccode\u003emap a v\u003c/code\u003e is expected to be\n   an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, given \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e v\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "data",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#TrieSet",
        "fct-type": "data",
        "title": "TrieSet"
      },
      "index": {
        "description": "The data structure itself set of keys of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The CMap type is internal ignore it For Eq and Ord an Eq instance is required what this means is that map is expected to be an instance of Eq given Eq The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Monoid instance defines mappend as union and mempty as empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:addPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the set. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"pre\" (fromList [\"a\",\"b\"]) == fromList [\"prea\",\"preb\"]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#addPrefix",
        "fct-type": "function",
        "title": "addPrefix"
      },
      "index": {
        "description": "Prepends the given key to all the keys of the set For example addPrefix pre fromList fromList prea preb",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "addPrefix",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the longest common prefix in the trie as sets,\n associated with their distinguishing key value. If the set contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [\"a\",\"abc\",\"abcd\"])\n    == Map.fromList [('b',fromList [\"c\",\"cd\"])]\n children (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e map a (TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "The children of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "children",
        "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003emap a(TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:children1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as sets, associated with their distinguishing key value. If the set\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [\"abc\",\"abcd\"])\n    == Map.fromList [('a',fromList [\"bc\",\"bcd\"])]\n children1 (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e map a (TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#children1",
        "fct-type": "function",
        "title": "children1"
      },
      "index": {
        "description": "The children of the first element of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "children1",
        "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003emap a(TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the set. If the key is not a member of\n the set, the set is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Removes the key from the set If the key is not member of the set the set is unchanged",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "delete",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The set without its maximal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "Like snd composed with maxView The set without its maximal key or the unchanged original set if it was empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "deleteMax",
        "normalized": "TrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The set without its minimal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "Like snd composed with minView The set without its minimal key or the unchanged original set if it was empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "deleteMin",
        "normalized": "TrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deletePrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the set, an empty set is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [\"a\",\"ab\",\"ac\"]) == fromList [\"\",\"b\",\"c\"]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to check whether a string is a member of a set, but\n you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting set is empty, the entire string cannot\n be a member of the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#deletePrefix",
        "fct-type": "function",
        "title": "deletePrefix"
      },
      "index": {
        "description": "The set which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the set an empty set is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to check whether string is member of set but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting set is empty the entire string cannot be member of the set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "deletePrefix",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deleteSuffixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#deleteSuffixes",
        "fct-type": "function",
        "title": "deleteSuffixes"
      },
      "index": {
        "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "deleteSuffixes",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Suffixes",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two sets: the set which\n contains all keys that are members of the first set and not members of the\n second set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The difference of the two sets the set which contains all keys that are members of the first set and not members of the second set The worst-case performance occurs when the two sets are identical",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "difference",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "empty",
        "normalized": "",
        "package": "list-tries",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The set of those keys in the set for which the given predicate\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "The set of those keys in the set for which the given predicate returns True",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "filter",
        "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the maximal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "Like fst composed with maxView Just the maximal key in the set or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "findMax",
        "normalized": "TrieSet a b-\u003eMaybe[b]",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Like fst composed with minView Just the minimal key in the set or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "findMin",
        "normalized": "TrieSet a b-\u003eMaybe[b]",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findPredecessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which precedes the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#findPredecessor",
        "fct-type": "function",
        "title": "findPredecessor"
      },
      "index": {
        "description": "Just the key of the set which precedes the given key in order or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "findPredecessor",
        "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
        "package": "list-tries",
        "partial": "Predecessor",
        "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findSuccessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which succeeds the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#findSuccessor",
        "fct-type": "function",
        "title": "findSuccessor"
      },
      "index": {
        "description": "Just the key of the set which succeeds the given key in order or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "findSuccessor",
        "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
        "package": "list-tries",
        "partial": "Successor",
        "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldl",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldl'",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldlAsc",
        "fct-type": "function",
        "title": "foldlAsc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldlAsc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlAsc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldlAsc%27",
        "fct-type": "function",
        "title": "foldlAsc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldlAsc'",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Asc'",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldlDesc",
        "fct-type": "function",
        "title": "foldlDesc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldlDesc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlDesc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldlDesc%27",
        "fct-type": "function",
        "title": "foldlDesc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldlDesc'",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Desc'",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Equivalent to list foldr on the toList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldr",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldrAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldrAsc",
        "fct-type": "function",
        "title": "foldrAsc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toAscList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldrAsc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldrDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#foldrDesc",
        "fct-type": "function",
        "title": "foldrDesc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toDescList representation",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "foldrDesc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a set from a list of keys.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[[a]] -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates set from list of keys",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "fromList",
        "normalized": "[[a]]-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "List",
        "signature": "[[a]]-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key into the set. If the key is already a\n member of the set, the set is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Inserts the key into the set If the key is already member of the set the set is unchanged",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "insert",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two sets: the set which\n contains all keys that are members of both sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The intersection of the two sets the set which contains all keys that are members of both sets The worst-case performance occurs when the two sets are identical",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "intersection",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a proper subset of the\n second, i.e. the first is a subset of the second, but the sets are not\n equal.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first set is proper subset of the second i.e the first is subset of the second but the sets are not equal",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "isProperSubsetOf",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
        "package": "list-tries",
        "partial": "Proper Subset Of",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a subset of the second,\n i.e. all keys that are members of the first set are also members of the\n second set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first set is subset of the second i.e all keys that are members of the first set are also members of the second set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "isSubsetOf",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
        "package": "list-tries",
        "partial": "Subset Of",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:lookupPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [\"a\",\"ab\",\"ac\",\"abc\"])\n    == fromList [\"ab\",\"abc\"]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#lookupPrefix",
        "fct-type": "function",
        "title": "lookupPrefix"
      },
      "index": {
        "description": "The set which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "lookupPrefix",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e [b]) -\u003e TrieSet map a -\u003e TrieSet map b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply the given function to all the keys in the set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "map",
        "normalized": "([a]-\u003e[b])-\u003eTrieSet c a-\u003eTrieSet c b",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003e[b])-\u003eTrieSet map a-\u003eTrieSet map b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:mapIn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e TrieSet map a -\u003e TrieSet map b",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#mapIn",
        "fct-type": "function",
        "title": "mapIn"
      },
      "index": {
        "description": "Apply the given function to the contents of all the keys in the set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "mapIn",
        "normalized": "(a-\u003eb)-\u003eTrieSet c a-\u003eTrieSet c b",
        "package": "list-tries",
        "partial": "In",
        "signature": "(a-\u003eb)-\u003eTrieSet map a-\u003eTrieSet map b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "Removes and returns the maximal key in the set If the set is empty Nothing and the original set are returned",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "maxView",
        "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min True iff the given key is contained within the set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "member",
        "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "Removes and returns the minimal key in the set If the set is empty Nothing and the original set are returned",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "minView",
        "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min False iff the given key is contained within the set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "notMember",
        "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
        "package": "list-tries",
        "partial": "Member",
        "signature": "[a]-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "True iff the set is empty",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "null",
        "normalized": "TrieSet a b-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of sets: the first element contains those keys for which\n the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second element contains those\n for which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "pair of sets the first element contains those keys for which the given predicate returns True and the second element contains those for which it was False",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "partition",
        "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:showTrie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the set's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e ShowS",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#showTrie",
        "fct-type": "function",
        "title": "showTrie"
      },
      "index": {
        "description": "Displays the set internal structure in an undefined way That is to say no program should depend on the function results",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "showTrie",
        "normalized": "TrieSet a b-\u003eShowS",
        "package": "list-tries",
        "partial": "Trie",
        "signature": "TrieSet map a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The singleton set containing only the given key.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "The singleton set containing only the given key",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "singleton",
        "normalized": "[a]-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e n",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of keys in the set The value is built up lazily allowing for delivery of partial results without traversing the whole set",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "size",
        "normalized": "TrieSet a b-\u003ec",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:size-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built strictly: no\n value is returned until the set has been fully traversed.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e n",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#size%27",
        "fct-type": "function",
        "title": "size'"
      },
      "index": {
        "description": "The number of keys in the set The value is built strictly no value is returned until the set has been fully traversed",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "size'",
        "normalized": "TrieSet a b-\u003ec",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the set in two about the given key. The first\n element of the resulting pair is a set containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "min Splits the set in two about the given key The first element of the resulting pair is set containing the keys lesser than the given key the second contains those keys that are greater",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "split",
        "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:splitMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns whether the given key was a\n member of the set or not.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, Bool, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#splitMember",
        "fct-type": "function",
        "title": "splitMember"
      },
      "index": {
        "description": "min Like split but also returns whether the given key was member of the set or not",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "splitMember",
        "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,Bool,TrieSet b a)",
        "package": "list-tries",
        "partial": "Member",
        "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,Bool,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:splitPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n set, whether that prefix was a member of the set, and the set with that\n prefix removed from all the keys as well as the set itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [\"a\",\"b\"]) == (\"\", False, fromList [\"a\",\"b\"])\n splitPrefix (fromList [\"a\",\"ab\",\"ac\"]) == (\"a\", True, fromList [\"b\",\"c\"])\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e ([a], Bool, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#splitPrefix",
        "fct-type": "function",
        "title": "splitPrefix"
      },
      "index": {
        "description": "triple containing the longest common prefix of all keys in the set whether that prefix was member of the set and the set with that prefix removed from all the keys as well as the set itself Examples splitPrefix fromList False fromList splitPrefix fromList ab ac True fromList",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "splitPrefix",
        "normalized": "TrieSet a b-\u003e([b],Bool,TrieSet a b)",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "TrieSet map a-\u003e([a],Bool,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e [[a]]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Converts the set to list of the keys contained within in ascending order",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "toAscList",
        "normalized": "TrieSet a b-\u003e[[b]]",
        "package": "list-tries",
        "partial": "Asc List",
        "signature": "TrieSet map a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n descending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e [[a]]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "Converts the set to list of the keys contained within in descending order",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "toDescList",
        "normalized": "TrieSet a b-\u003e[[b]]",
        "package": "list-tries",
        "partial": "Desc List",
        "signature": "TrieSet map a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n undefined order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e [[a]]",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Converts the set to list of the keys contained within in undefined order",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "toList",
        "normalized": "TrieSet a b-\u003e[[b]]",
        "package": "list-tries",
        "partial": "List",
        "signature": "TrieSet map a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two sets: the set which contains\n all keys that are members of either set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The union of the two sets the set which contains all keys that are members of either set The worst-case performance occurs when the two sets are identical",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "union",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the sets: the set which contains all keys\n that are members of any of the sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Patricia.Set",
        "fct-package": "list-tries",
        "fct-signature": "[TrieSet map a] -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Patricia-Set.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "sum The union of all the sets the set which contains all keys that are members of any of the sets The worst-case performance occurs when all the sets are identical",
        "hierarchy": "Data ListTrie Patricia Set",
        "module": "Data.ListTrie.Patricia.Set",
        "name": "unions",
        "normalized": "[TrieSet a b]-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[TrieSet map a]-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Enum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of enumerable elements, based on a trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their Int representation\n after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Set.Enum",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Set-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "set of lists of enumerable elements based on trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
        "hierarchy": "Data ListTrie Set Enum",
        "module": "Data.ListTrie.Set.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "list-tries",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Enum.html#t:TrieSet",
      "description": {
        "fct-module": "Data.ListTrie.Set.Enum",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Set-Enum.html#TrieSet",
        "fct-type": "type",
        "title": "TrieSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Set Enum",
        "module": "Data.ListTrie.Set.Enum",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Eq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be compared for equality, based on a\n trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Set.Eq",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Set-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "set of lists of elements that can be compared for equality based on trie",
        "hierarchy": "Data ListTrie Set Eq",
        "module": "Data.ListTrie.Set.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "list-tries",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Eq.html#t:TrieSet",
      "description": {
        "fct-module": "Data.ListTrie.Set.Eq",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Set-Eq.html#TrieSet",
        "fct-type": "type",
        "title": "TrieSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Set Eq",
        "module": "Data.ListTrie.Set.Eq",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Ord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be totally ordered, based on a trie.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Set.Ord",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Set-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "set of lists of elements that can be totally ordered based on trie",
        "hierarchy": "Data ListTrie Set Ord",
        "module": "Data.ListTrie.Set.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "list-tries",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Ord.html#t:TrieSet",
      "description": {
        "fct-module": "Data.ListTrie.Set.Ord",
        "fct-package": "list-tries",
        "fct-signature": "type",
        "fct-source": "src/Data-ListTrie-Set-Ord.html#TrieSet",
        "fct-type": "type",
        "title": "TrieSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ListTrie Set Ord",
        "module": "Data.ListTrie.Set.Ord",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a trie representing a set of lists, generalized\n over any type of map from key values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the set and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the set.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "module",
        "fct-source": "src/Data-ListTrie-Set.html",
        "fct-type": "module",
        "title": "Set"
      },
      "index": {
        "description": "The base implementation of trie representing set of lists generalized over any type of map from key values to tries Worst-case complexities are given in terms of and refers to the number of keys in the set and to their maximum length refers to the length of key given to the function not any property of the set In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "Set",
        "normalized": "",
        "package": "list-tries",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#t:TrieSet",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure itself: a set of keys of type \u003ccode\u003e[a]\u003c/code\u003e implemented as a\n trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ea\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eCMap\u003c/code\u003e type is internal, ignore it. For \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\n   instance is required: what this means is that \u003ccode\u003emap a v\u003c/code\u003e is expected to be\n   an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, given \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e v\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "data",
        "fct-source": "src/Data-ListTrie-Set.html#TrieSet",
        "fct-type": "data",
        "title": "TrieSet"
      },
      "index": {
        "description": "The data structure itself set of keys of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The CMap type is internal ignore it For Eq and Ord an Eq instance is required what this means is that map is expected to be an instance of Eq given Eq The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Monoid instance defines mappend as union and mempty as empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "TrieSet",
        "normalized": "",
        "package": "list-tries",
        "partial": "Trie Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:addPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the set. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"pre\" (fromList [\"a\",\"b\"]) == fromList [\"prea\",\"preb\"]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#addPrefix",
        "fct-type": "function",
        "title": "addPrefix"
      },
      "index": {
        "description": "Prepends the given key to all the keys of the set For example addPrefix pre fromList fromList prea preb",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "addPrefix",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. The children of the longest common prefix in the trie as sets,\n associated with their distinguishing key value. If the set contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [\"a\",\"abc\",\"abcd\"])\n    == Map.fromList [('b',fromList [\"c\",\"cd\"])]\n children (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e map a (TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "The children of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "children",
        "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003emap a(TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:children1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as sets, associated with their distinguishing key value. If the set\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [\"abc\",\"abcd\"])\n    == Map.fromList [('a',fromList [\"bc\",\"bcd\"])]\n children1 (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e map a (TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#children1",
        "fct-type": "function",
        "title": "children1"
      },
      "index": {
        "description": "The children of the first element of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "children1",
        "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003emap a(TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the set. If the key is not a member of\n the set, the set is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Removes the key from the set If the key is not member of the set the set is unchanged",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "delete",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deleteMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The set without its maximal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "Like snd composed with maxView The set without its maximal key or the unchanged original set if it was empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "deleteMax",
        "normalized": "TrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deleteMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The set without its minimal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "Like snd composed with minView The set without its minimal key or the unchanged original set if it was empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "deleteMin",
        "normalized": "TrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deletePrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the set, an empty set is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [\"a\",\"ab\",\"ac\"]) == fromList [\"\",\"b\",\"c\"]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to check whether a string is a member of a set, but\n you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting set is empty, the entire string cannot\n be a member of the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#deletePrefix",
        "fct-type": "function",
        "title": "deletePrefix"
      },
      "index": {
        "description": "The set which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the set an empty set is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to check whether string is member of set but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting set is empty the entire string cannot be member of the set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "deletePrefix",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deleteSuffixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#deleteSuffixes",
        "fct-type": "function",
        "title": "deleteSuffixes"
      },
      "index": {
        "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "deleteSuffixes",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Suffixes",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two sets: the set which\n contains all keys that are members of the first set and not members of the\n second set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The difference of the two sets the set which contains all keys that are members of the first set and not members of the second set The worst-case performance occurs when the two sets are identical",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "difference",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "empty",
        "normalized": "",
        "package": "list-tries",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The set of those keys in the set for which the given predicate\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "The set of those keys in the set for which the given predicate returns True",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "filter",
        "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the maximal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Set.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "Like fst composed with maxView Just the maximal key in the set or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "findMax",
        "normalized": "TrieSet a b-\u003eMaybe[b]",
        "package": "list-tries",
        "partial": "Max",
        "signature": "TrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Set.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Like fst composed with minView Just the minimal key in the set or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "findMin",
        "normalized": "TrieSet a b-\u003eMaybe[b]",
        "package": "list-tries",
        "partial": "Min",
        "signature": "TrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findPredecessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which precedes the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Set.html#findPredecessor",
        "fct-type": "function",
        "title": "findPredecessor"
      },
      "index": {
        "description": "Just the key of the set which precedes the given key in order or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "findPredecessor",
        "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
        "package": "list-tries",
        "partial": "Predecessor",
        "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findSuccessor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which succeeds the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
        "fct-source": "src/Data-ListTrie-Set.html#findSuccessor",
        "fct-type": "function",
        "title": "findSuccessor"
      },
      "index": {
        "description": "Just the key of the set which succeeds the given key in order or Nothing if the set is empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "findSuccessor",
        "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
        "package": "list-tries",
        "partial": "Successor",
        "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldl",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldl'",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldlAsc",
        "fct-type": "function",
        "title": "foldlAsc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldlAsc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlAsc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldlAsc%27",
        "fct-type": "function",
        "title": "foldlAsc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toAscList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldlAsc'",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Asc'",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldlDesc",
        "fct-type": "function",
        "title": "foldlDesc"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldlDesc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlDesc-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldlDesc%27",
        "fct-type": "function",
        "title": "foldlDesc'"
      },
      "index": {
        "description": "Equivalent to list foldl on the toDescList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldlDesc'",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Desc'",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Equivalent to list foldr on the toList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldr",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldrAsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldrAsc",
        "fct-type": "function",
        "title": "foldrAsc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toAscList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldrAsc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Asc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldrDesc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
        "fct-source": "src/Data-ListTrie-Set.html#foldrDesc",
        "fct-type": "function",
        "title": "foldrDesc"
      },
      "index": {
        "description": "Equivalent to list foldr on the toDescList representation",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "foldrDesc",
        "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
        "package": "list-tries",
        "partial": "Desc",
        "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a set from a list of keys.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[[a]] -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates set from list of keys",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "fromList",
        "normalized": "[[a]]-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "List",
        "signature": "[[a]]-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key into the set. If the key is already a\n member of the set, the set is unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Inserts the key into the set If the key is already member of the set the set is unchanged",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "insert",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two sets: the set which\n contains all keys that are members of both sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The intersection of the two sets the set which contains all keys that are members of both sets The worst-case performance occurs when the two sets are identical",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "intersection",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:isProperSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a proper subset of the\n second, i.e. the first is a subset of the second, but the sets are not\n equal.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Set.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first set is proper subset of the second i.e the first is subset of the second but the sets are not equal",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "isProperSubsetOf",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
        "package": "list-tries",
        "partial": "Proper Subset Of",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a subset of the second,\n i.e. all keys that are members of the first set are also members of the\n second set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Set.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "min n1 m1 n2 m2 True iff the first set is subset of the second i.e all keys that are members of the first set are also members of the second set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "isSubsetOf",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
        "package": "list-tries",
        "partial": "Subset Of",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:lookupPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [\"a\",\"ab\",\"ac\",\"abc\"])\n    == fromList [\"ab\",\"abc\"]\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#lookupPrefix",
        "fct-type": "function",
        "title": "lookupPrefix"
      },
      "index": {
        "description": "The set which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "lookupPrefix",
        "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e [b]) -\u003e TrieSet map a -\u003e TrieSet map b",
        "fct-source": "src/Data-ListTrie-Set.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply the given function to all the keys in the set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "map",
        "normalized": "([a]-\u003e[b])-\u003eTrieSet c a-\u003eTrieSet c b",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003e[b])-\u003eTrieSet map a-\u003eTrieSet map b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:mapIn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "(a -\u003e b) -\u003e TrieSet map a -\u003e TrieSet map b",
        "fct-source": "src/Data-ListTrie-Set.html#mapIn",
        "fct-type": "function",
        "title": "mapIn"
      },
      "index": {
        "description": "Apply the given function to the contents of all the keys in the set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "mapIn",
        "normalized": "(a-\u003eb)-\u003eTrieSet c a-\u003eTrieSet c b",
        "package": "list-tries",
        "partial": "In",
        "signature": "(a-\u003eb)-\u003eTrieSet map a-\u003eTrieSet map b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:maxView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "Removes and returns the maximal key in the set If the set is empty Nothing and the original set are returned",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "maxView",
        "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Set.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min True iff the given key is contained within the set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "member",
        "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:minView",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "Removes and returns the minimal key in the set If the set is empty Nothing and the original set are returned",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "minView",
        "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
        "package": "list-tries",
        "partial": "View",
        "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Set.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "min False iff the given key is contained within the set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "notMember",
        "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
        "package": "list-tries",
        "partial": "Member",
        "signature": "[a]-\u003eTrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the set is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e Bool",
        "fct-source": "src/Data-ListTrie-Set.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "True iff the set is empty",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "null",
        "normalized": "TrieSet a b-\u003eBool",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of sets: the first element contains those keys for which\n the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second element contains those\n for which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "pair of sets the first element contains those keys for which the given predicate returns True and the second element contains those for which it was False",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "partition",
        "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
        "package": "list-tries",
        "partial": "",
        "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:showTrie",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the set's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e ShowS",
        "fct-source": "src/Data-ListTrie-Set.html#showTrie",
        "fct-type": "function",
        "title": "showTrie"
      },
      "index": {
        "description": "Displays the set internal structure in an undefined way That is to say no program should depend on the function results",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "showTrie",
        "normalized": "TrieSet a b-\u003eShowS",
        "package": "list-tries",
        "partial": "Trie",
        "signature": "TrieSet map a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The singleton set containing only the given key.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "The singleton set containing only the given key",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "singleton",
        "normalized": "[a]-\u003eTrieSet b a",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole set.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e n",
        "fct-source": "src/Data-ListTrie-Set.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of keys in the set The value is built up lazily allowing for delivery of partial results without traversing the whole set",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "size",
        "normalized": "TrieSet a b-\u003ec",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:size-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built strictly: no\n value is returned until the set has been fully traversed.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e n",
        "fct-source": "src/Data-ListTrie-Set.html#size%27",
        "fct-type": "function",
        "title": "size'"
      },
      "index": {
        "description": "The number of keys in the set The value is built strictly no value is returned until the set has been fully traversed",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "size'",
        "normalized": "TrieSet a b-\u003ec",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the set in two about the given key. The first\n element of the resulting pair is a set containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "min Splits the set in two about the given key The first element of the resulting pair is set containing the keys lesser than the given key the second contains those keys that are greater",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "split",
        "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
        "package": "list-tries",
        "partial": "",
        "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:splitMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns whether the given key was a\n member of the set or not.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, Bool, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#splitMember",
        "fct-type": "function",
        "title": "splitMember"
      },
      "index": {
        "description": "min Like split but also returns whether the given key was member of the set or not",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "splitMember",
        "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,Bool,TrieSet b a)",
        "package": "list-tries",
        "partial": "Member",
        "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,Bool,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:splitPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n set, whether that prefix was a member of the set, and the set with that\n prefix removed from all the keys as well as the set itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [\"a\",\"b\"]) == (\"\", False, fromList [\"a\",\"b\"])\n splitPrefix (fromList [\"a\",\"ab\",\"ac\"]) == (\"a\", True, fromList [\"b\",\"c\"])\n\u003c/pre\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e ([a], Bool, TrieSet map a)",
        "fct-source": "src/Data-ListTrie-Set.html#splitPrefix",
        "fct-type": "function",
        "title": "splitPrefix"
      },
      "index": {
        "description": "triple containing the longest common prefix of all keys in the set whether that prefix was member of the set and the set with that prefix removed from all the keys as well as the set itself Examples splitPrefix fromList False fromList splitPrefix fromList ab ac True fromList",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "splitPrefix",
        "normalized": "TrieSet a b-\u003e([b],Bool,TrieSet a b)",
        "package": "list-tries",
        "partial": "Prefix",
        "signature": "TrieSet map a-\u003e([a],Bool,TrieSet map a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e [[a]]",
        "fct-source": "src/Data-ListTrie-Set.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Converts the set to list of the keys contained within in ascending order",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "toAscList",
        "normalized": "TrieSet a b-\u003e[[b]]",
        "package": "list-tries",
        "partial": "Asc List",
        "signature": "TrieSet map a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:toDescList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n descending order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e [[a]]",
        "fct-source": "src/Data-ListTrie-Set.html#toDescList",
        "fct-type": "function",
        "title": "toDescList"
      },
      "index": {
        "description": "Converts the set to list of the keys contained within in descending order",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "toDescList",
        "normalized": "TrieSet a b-\u003e[[b]]",
        "package": "list-tries",
        "partial": "Desc List",
        "signature": "TrieSet map a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n undefined order.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e [[a]]",
        "fct-source": "src/Data-ListTrie-Set.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Converts the set to list of the keys contained within in undefined order",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "toList",
        "normalized": "TrieSet a b-\u003e[[b]]",
        "package": "list-tries",
        "partial": "List",
        "signature": "TrieSet map a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two sets: the set which contains\n all keys that are members of either set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "min n1 m1 n2 m2 The union of the two sets the set which contains all keys that are members of either set The worst-case performance occurs when the two sets are identical",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "union",
        "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the sets: the set which contains all keys\n that are members of any of the sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the sets are identical.\n\u003c/p\u003e",
        "fct-module": "Data.ListTrie.Set",
        "fct-package": "list-tries",
        "fct-signature": "[TrieSet map a] -\u003e TrieSet map a",
        "fct-source": "src/Data-ListTrie-Set.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "sum The union of all the sets the set which contains all keys that are members of any of the sets The worst-case performance occurs when all the sets are identical",
        "hierarchy": "Data ListTrie Set",
        "module": "Data.ListTrie.Set",
        "name": "unions",
        "normalized": "[TrieSet a b]-\u003eTrieSet a b",
        "package": "list-tries",
        "partial": "",
        "signature": "[TrieSet map a]-\u003eTrieSet map a"
      }
    }
  }
]