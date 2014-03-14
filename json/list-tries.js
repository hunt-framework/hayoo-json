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
        "word": "list-tries"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "Map",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Base-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "Map",
          "package": "list-tries",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "AList",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Base-Map.html#AList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "AList",
          "package": "list-tries",
          "partial": "AList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:AList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete implementation:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eeqCmp\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edifferenceWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eintersectionWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor decent performance, supplying at least \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e as\n well is probably a good idea.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Base.Map",
          "name": "Map",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Base-Map.html#Map",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete implementation eqCmp null lookup alter unionWithKey differenceWithKey intersectionWithKey toList empty or fromList or fromListWith isSubmapOfBy For decent performance supplying at least mapAccumWithKey and filter as well is probably good idea",
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "Map",
          "package": "list-tries",
          "partial": "Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eordCmp\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esplitLookup\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor decent performance, supplying at least the following is probably a good\n idea:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaxViewWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emapAccumAscWithKey\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emapAccumDescWithKey\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListTrie.Base.Map",
          "name": "OrdMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Base-Map.html#OrdMap",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete definition ordCmp toAscList or toDescList splitLookup For decent performance supplying at least the following is probably good idea minViewWithKey maxViewWithKey mapAccumAscWithKey mapAccumDescWithKey",
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "OrdMap",
          "package": "list-tries",
          "partial": "Ord Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:OrdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "WrappedIntMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Base-Map.html#WrappedIntMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "WrappedIntMap",
          "package": "list-tries",
          "partial": "Wrapped Int Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#t:WrappedIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "adjust",
          "package": "list-tries",
          "signature": "(a -\u003e a) -\u003e k -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#adjust",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003ec b a-\u003ec b a",
          "package": "list-tries",
          "signature": "(a-\u003ea)-\u003ek-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "alter",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#alter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ec b a-\u003ec b a",
          "package": "list-tries",
          "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "delete",
          "package": "list-tries",
          "signature": "k -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#delete",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "delete",
          "normalized": "a-\u003eb a c-\u003eb a c",
          "package": "list-tries",
          "signature": "k-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "deserializeFromList",
          "package": "list-tries",
          "signature": "[(k, a)] -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#deserializeFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "deserializeFromList",
          "normalized": "[(a,b)]-\u003ec a b",
          "package": "list-tries",
          "partial": "From List",
          "signature": "[(k,a)]-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:deserializeFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "differenceWith",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e m k a -\u003e m k b -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#differenceWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003ec d a-\u003ec d b-\u003ec d a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003em k a-\u003em k b-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "differenceWithKey",
          "package": "list-tries",
          "signature": "(k -\u003e a -\u003e b -\u003e Maybe a) -\u003e m k a -\u003e m k b -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#differenceWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "differenceWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eMaybe b)-\u003ed a b-\u003ed a c-\u003ed a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eMaybe a)-\u003em k a-\u003em k b-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecondition: the two keys differ\n\u003c/p\u003e",
          "module": "Data.ListTrie.Base.Map",
          "name": "doubleton",
          "package": "list-tries",
          "signature": "k -\u003e a -\u003e k -\u003e a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#doubleton",
          "type": "method"
        },
        "index": {
          "description": "Precondition the two keys differ",
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "doubleton",
          "normalized": "a-\u003eb-\u003ea-\u003eb-\u003ec a b",
          "package": "list-tries",
          "signature": "k-\u003ea-\u003ek-\u003ea-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:doubleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "empty",
          "package": "list-tries",
          "signature": "m k a",
          "source": "src/Data-ListTrie-Base-Map.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "empty",
          "package": "list-tries",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance over k, but should compare on the same type as\n \u003ccode\u003em\u003c/code\u003e does. In most cases this can be defined just as \u003ccode\u003econst (==)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Base.Map",
          "name": "eqCmp",
          "package": "list-tries",
          "signature": "m k a -\u003e k -\u003e k -\u003e Bool",
          "source": "src/Data-ListTrie-Base-Map.html#eqCmp",
          "type": "method"
        },
        "index": {
          "description": "Like an Eq instance over but should compare on the same type as does In most cases this can be defined just as const",
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "eqCmp",
          "normalized": "a b c-\u003eb-\u003eb-\u003eBool",
          "package": "list-tries",
          "partial": "Cmp",
          "signature": "m k a-\u003ek-\u003ek-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:eqCmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "filter",
          "package": "list-tries",
          "signature": "(a -\u003e Bool) -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#filter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb c a-\u003eb c a",
          "package": "list-tries",
          "signature": "(a-\u003eBool)-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "findPredecessor",
          "package": "list-tries",
          "signature": "k -\u003e m k a -\u003e Maybe (k, a)",
          "source": "src/Data-ListTrie-Base-Map.html#findPredecessor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "findPredecessor",
          "normalized": "a-\u003eb a c-\u003eMaybe(a,c)",
          "package": "list-tries",
          "partial": "Predecessor",
          "signature": "k-\u003em k a-\u003eMaybe(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:findPredecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "findSuccessor",
          "package": "list-tries",
          "signature": "k -\u003e m k a -\u003e Maybe (k, a)",
          "source": "src/Data-ListTrie-Base-Map.html#findSuccessor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "findSuccessor",
          "normalized": "a-\u003eb a c-\u003eMaybe(a,c)",
          "package": "list-tries",
          "partial": "Successor",
          "signature": "k-\u003em k a-\u003eMaybe(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:findSuccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "fromList",
          "package": "list-tries",
          "signature": "[(k, a)] -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#fromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003ec a b",
          "package": "list-tries",
          "partial": "List",
          "signature": "[(k,a)]-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "fromListWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#fromListWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003ec b a",
          "package": "list-tries",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "insert",
          "package": "list-tries",
          "signature": "k -\u003e a -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#insert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ec a b-\u003ec a b",
          "package": "list-tries",
          "signature": "k-\u003ea-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrictness can be whatever is more optimal for the map type, shouldn't\n matter\n\u003c/p\u003e",
          "module": "Data.ListTrie.Base.Map",
          "name": "insertWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#insertWith",
          "type": "method"
        },
        "index": {
          "description": "Strictness can be whatever is more optimal for the map type shouldn matter",
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec b a-\u003ec b a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "intersectionWith",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e c) -\u003e m k a -\u003e m k b -\u003e m k c",
          "source": "src/Data-ListTrie-Base-Map.html#intersectionWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed e a-\u003ed e b-\u003ed e c",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003em k a-\u003em k b-\u003em k c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "intersectionWithKey",
          "package": "list-tries",
          "signature": "(k -\u003e a -\u003e b -\u003e c) -\u003e m k a -\u003e m k b -\u003e m k c",
          "source": "src/Data-ListTrie-Base-Map.html#intersectionWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "intersectionWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a b-\u003ee a c-\u003ee a d",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003ec)-\u003em k a-\u003em k b-\u003em k c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "isSubmapOfBy",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e m k a -\u003e m k b -\u003e Bool",
          "source": "src/Data-ListTrie-Base-Map.html#isSubmapOfBy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "isSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003ec d a-\u003ec d b-\u003eBool",
          "package": "list-tries",
          "partial": "Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003em k a-\u003em k b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "lookup",
          "package": "list-tries",
          "signature": "k -\u003e m k a -\u003e Maybe a",
          "source": "src/Data-ListTrie-Base-Map.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "lookup",
          "normalized": "a-\u003eb a c-\u003eMaybe c",
          "package": "list-tries",
          "signature": "k-\u003em k a-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "map",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e m k a -\u003e m k b",
          "source": "src/Data-ListTrie-Base-Map.html#map",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "list-tries",
          "signature": "(a-\u003eb)-\u003em k a-\u003em k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccum",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
          "source": "src/Data-ListTrie-Base-Map.html#mapAccum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed e b-\u003e(a,d e c)",
          "package": "list-tries",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumAsc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
          "source": "src/Data-ListTrie-Base-Map.html#mapAccumAsc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumAsc",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed e b-\u003e(a,d e c)",
          "package": "list-tries",
          "partial": "Accum Asc",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumAscWithKey",
          "package": "list-tries",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
          "source": "src/Data-ListTrie-Base-Map.html#mapAccumAscWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumAscWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003ee b c-\u003e(a,e b d)",
          "package": "list-tries",
          "partial": "Accum Asc With Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumDesc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
          "source": "src/Data-ListTrie-Base-Map.html#mapAccumDesc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumDesc",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed e b-\u003e(a,d e c)",
          "package": "list-tries",
          "partial": "Accum Desc",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumDescWithKey",
          "package": "list-tries",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
          "source": "src/Data-ListTrie-Base-Map.html#mapAccumDescWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumDescWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003ee b c-\u003e(a,e b d)",
          "package": "list-tries",
          "partial": "Accum Desc With Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumWithKey",
          "package": "list-tries",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e m k b -\u003e (a, m k c)",
          "source": "src/Data-ListTrie-Base-Map.html#mapAccumWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003ee b c-\u003e(a,e b d)",
          "package": "list-tries",
          "partial": "Accum With Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003em k b-\u003e(a,m k c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "mapWithKey",
          "package": "list-tries",
          "signature": "(k -\u003e a -\u003e b) -\u003e m k a -\u003e m k b",
          "source": "src/Data-ListTrie-Base-Map.html#mapWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a b-\u003ed a c",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003em k a-\u003em k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "maxViewWithKey",
          "package": "list-tries",
          "signature": "m k a -\u003e (Maybe (k, a), m k a)",
          "source": "src/Data-ListTrie-Base-Map.html#maxViewWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "maxViewWithKey",
          "normalized": "a b c-\u003e(Maybe(b,c),a b c)",
          "package": "list-tries",
          "partial": "View With Key",
          "signature": "m k a-\u003e(Maybe(k,a),m k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:maxViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "minViewWithKey",
          "package": "list-tries",
          "signature": "m k a -\u003e (Maybe (k, a), m k a)",
          "source": "src/Data-ListTrie-Base-Map.html#minViewWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "minViewWithKey",
          "normalized": "a b c-\u003e(Maybe(b,c),a b c)",
          "package": "list-tries",
          "partial": "View With Key",
          "signature": "m k a-\u003e(Maybe(k,a),m k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "null",
          "package": "list-tries",
          "signature": "m k a -\u003e Bool",
          "source": "src/Data-ListTrie-Base-Map.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "null",
          "normalized": "a b c-\u003eBool",
          "package": "list-tries",
          "signature": "m k a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike an Ord instance over k, but should compare on the same type as \u003ccode\u003em\u003c/code\u003e\n does. In most cases this can be defined just as \u003ccode\u003econst compare\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Base.Map",
          "name": "ordCmp",
          "package": "list-tries",
          "signature": "m k a -\u003e k -\u003e k -\u003e Ordering",
          "source": "src/Data-ListTrie-Base-Map.html#ordCmp",
          "type": "method"
        },
        "index": {
          "description": "Like an Ord instance over but should compare on the same type as does In most cases this can be defined just as const compare",
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "ordCmp",
          "normalized": "a b c-\u003eb-\u003eb-\u003eOrdering",
          "package": "list-tries",
          "partial": "Cmp",
          "signature": "m k a-\u003ek-\u003ek-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:ordCmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "serializeToList",
          "package": "list-tries",
          "signature": "m k a -\u003e [(k, a)]",
          "source": "src/Data-ListTrie-Base-Map.html#serializeToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "serializeToList",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "list-tries",
          "partial": "To List",
          "signature": "m k a-\u003e[(k,a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:serializeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "singleton",
          "package": "list-tries",
          "signature": "k -\u003e a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#singleton",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003ec a b",
          "package": "list-tries",
          "signature": "k-\u003ea-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "singletonView",
          "package": "list-tries",
          "signature": "m k a -\u003e Maybe (k, a)",
          "source": "src/Data-ListTrie-Base-Map.html#singletonView",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "singletonView",
          "normalized": "a b c-\u003eMaybe(b,c)",
          "package": "list-tries",
          "partial": "View",
          "signature": "m k a-\u003eMaybe(k,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:singletonView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "split",
          "package": "list-tries",
          "signature": "k -\u003e m k a -\u003e (m k a, m k a)",
          "source": "src/Data-ListTrie-Base-Map.html#split",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "split",
          "normalized": "a-\u003eb a c-\u003e(b a c,b a c)",
          "package": "list-tries",
          "signature": "k-\u003em k a-\u003e(m k a,m k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "splitLookup",
          "package": "list-tries",
          "signature": "k -\u003e m k a -\u003e (m k a, Maybe a, m k a)",
          "source": "src/Data-ListTrie-Base-Map.html#splitLookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "splitLookup",
          "normalized": "a-\u003eb a c-\u003e(b a c,Maybe c,b a c)",
          "package": "list-tries",
          "partial": "Lookup",
          "signature": "k-\u003em k a-\u003e(m k a,Maybe a,m k a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "toAscList",
          "package": "list-tries",
          "signature": "m k a -\u003e [(k, a)]",
          "source": "src/Data-ListTrie-Base-Map.html#toAscList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "toAscList",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "list-tries",
          "partial": "Asc List",
          "signature": "m k a-\u003e[(k,a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "toDescList",
          "package": "list-tries",
          "signature": "m k a -\u003e [(k, a)]",
          "source": "src/Data-ListTrie-Base-Map.html#toDescList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "toDescList",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "list-tries",
          "partial": "Desc List",
          "signature": "m k a-\u003e[(k,a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "toList",
          "package": "list-tries",
          "signature": "m k a -\u003e [(k, a)]",
          "source": "src/Data-ListTrie-Base-Map.html#toList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "toList",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "list-tries",
          "partial": "List",
          "signature": "m k a-\u003e[(k,a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "unionWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e m k a -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#unionWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb c a-\u003eb c a-\u003eb c a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003em k a-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "unionWithKey",
          "package": "list-tries",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e m k a -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#unionWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ec a b-\u003ec a b-\u003ec a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003em k a-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Base.Map",
          "name": "update",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e m k a -\u003e m k a",
          "source": "src/Data-ListTrie-Base-Map.html#update",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ListTrie Base Map",
          "module": "Data.ListTrie.Base.Map",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003ec b a-\u003ec b a",
          "package": "list-tries",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003em k a-\u003em k a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Base-Map.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of enumerable elements to arbitrary values, based on a\n trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their Int representation\n after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Map.Enum",
          "name": "Enum",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map-Enum.html",
          "type": "module"
        },
        "index": {
          "description": "map from lists of enumerable elements to arbitrary values based on trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
          "hierarchy": "Data ListTrie Map Enum",
          "module": "Data.ListTrie.Map.Enum",
          "name": "Enum",
          "package": "list-tries",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Map.Enum",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map-Enum.html#TrieMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Map Enum",
          "module": "Data.ListTrie.Map.Enum",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Enum.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be compared for equality to\n arbitrary values, based on a trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Map.Eq",
          "name": "Eq",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "map from lists of elements that can be compared for equality to arbitrary values based on trie",
          "hierarchy": "Data ListTrie Map Eq",
          "module": "Data.ListTrie.Map.Eq",
          "name": "Eq",
          "package": "list-tries",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Map.Eq",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map-Eq.html#TrieMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Map Eq",
          "module": "Data.ListTrie.Map.Eq",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Eq.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be totally ordered to arbitrary\n values, based on a trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Map.Ord",
          "name": "Ord",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "map from lists of elements that can be totally ordered to arbitrary values based on trie",
          "hierarchy": "Data ListTrie Map Ord",
          "module": "Data.ListTrie.Map.Ord",
          "name": "Ord",
          "package": "list-tries",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Map.Ord",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map-Ord.html#TrieMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Map Ord",
          "module": "Data.ListTrie.Map.Ord",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map-Ord.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a trie representing a map with list keys,\n generalized over any type of map from element values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the map and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the map.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003cp\u003eStrict versions of functions are provided for those who want to be certain\n that their \u003ccode\u003e\u003ca\u003eTrieMap\u003c/a\u003e\u003c/code\u003e doesn't contain values consisting of unevaluated\n thunks. Note, however, that they do not evaluate the whole trie strictly,\n only the values. And only to one level of depth: for instance, \u003ccode\u003e\u003ca\u003ealter'\u003c/a\u003e\u003c/code\u003e does\n not \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e the value within the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, only the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e itself. The user\n should add the strictness in such cases himself, if he so wishes.\n\u003c/p\u003e\u003cp\u003eMany functions come in both ordinary and \u003ccode\u003eWithKey\u003c/code\u003e forms, where the former\n takes a function of type \u003ccode\u003ea -\u003e b\u003c/code\u003e and the latter of type \u003ccode\u003e[k] -\u003e a -\u003e b\u003c/code\u003e,\n where \u003ccode\u003e[k]\u003c/code\u003e is the key associated with the value \u003ccode\u003ea\u003c/code\u003e. For most of these\n functions, there is additional overhead involved in keeping track of the\n key: don't use the latter form of the function unless you need it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Map",
          "name": "Map",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map.html",
          "type": "module"
        },
        "index": {
          "description": "The base implementation of trie representing map with list keys generalized over any type of map from element values to tries Worst-case complexities are given in terms of and refers to the number of keys in the map and to their maximum length refers to the length of key given to the function not any property of the map In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven Strict versions of functions are provided for those who want to be certain that their TrieMap doesn contain values consisting of unevaluated thunks Note however that they do not evaluate the whole trie strictly only the values And only to one level of depth for instance alter does not seq the value within the Maybe only the Maybe itself The user should add the strictness in such cases himself if he so wishes Many functions come in both ordinary and WithKey forms where the former takes function of type and the latter of type where is the key associated with the value For most of these functions there is additional overhead involved in keeping track of the key don use the latter form of the function unless you need it",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "Map",
          "package": "list-tries",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure itself: a map from keys of type \u003ccode\u003e[k]\u003c/code\u003e to values of type\n \u003ccode\u003ev\u003c/code\u003e implemented as a trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ek\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eTrie\u003c/code\u003e class is internal, ignore it.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003eFoldable\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances allow folding over and\n   traversing only the values, not the keys.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListTrie.Map",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Map.html#TrieMap",
          "type": "data"
        },
        "index": {
          "description": "The data structure itself map from keys of type to values of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The Trie class is internal ignore it The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Foldable and Traversable instances allow folding over and traversing only the values not the keys The Monoid instance defines mappend as union and mempty as empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the map. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"xa\" (fromList [(\"a\",1),(\"b\",2)])\n    == fromList [(\"xaa\",1),(\"xab\",2)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "addPrefix",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#addPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prepends the given key to all the keys of the map For example addPrefix xa fromList fromList xaa xab",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "addPrefix",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:addPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Adjusts the value at the given key by calling the given\n function on it. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "adjust",
          "package": "list-tries",
          "signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "min Adjusts the value at the given key by calling the given function on it If the key is not member of the map the map is unchanged",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eadjust\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "adjust'",
          "package": "list-tries",
          "signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#adjust%27",
          "type": "function"
        },
        "index": {
          "description": "min Like adjust but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "adjust'",
          "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:adjust-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. The most general modification function, allowing you to\n modify the value at the given key, whether or not it is a member of the map.\n In short: the given function is passed \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value at the key if it is\n present, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise; if the function returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the\n new value is inserted into the map, otherwise the old value is removed. More\n precisely, for \u003ccode\u003ealter f k m\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ek\u003c/code\u003e is a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e oldValue)\u003c/code\u003e is called. Now:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e newValue\u003c/code\u003e, \u003ccode\u003eoldValue\u003c/code\u003e is replaced with \u003ccode\u003enewValue\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ek\u003c/code\u003e and \u003ccode\u003eoldValue\u003c/code\u003e are removed from the map.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf, instead, \u003ccode\u003ek\u003c/code\u003e is not a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef \u003c/code\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is called, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e value\u003c/code\u003e, \u003ccode\u003evalue\u003c/code\u003e is inserted into the map, at \u003ccode\u003ek\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the map is unchanged.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function is applied lazily only if the given key is a prefix of another\n key in the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "alter",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#alter",
          "type": "function"
        },
        "index": {
          "description": "min The most general modification function allowing you to modify the value at the given key whether or not it is member of the map In short the given function is passed Just the value at the key if it is present or Nothing otherwise if the function returns Just value the new value is inserted into the map otherwise the old value is removed More precisely for alter If is member of Just oldValue is called Now If returned Just newValue oldValue is replaced with newValue If returned Nothing and oldValue are removed from the map If instead is not member of Nothing is called and If returned Just value value is inserted into the map at If returned Nothing the map is unchanged The function is applied lazily only if the given key is prefix of another key in the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e, but the function is always applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "alter'",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#alter%27",
          "type": "function"
        },
        "index": {
          "description": "min Like alter but the function is always applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "alter'",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:alter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. The children of the longest common prefix in the trie as maps,\n associated with their distinguishing key value. If the map contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [(\"a\",1),(\"abc\",2),(\"abcd\",3)])\n    == Map.fromList [('b',fromList [(\"c\",2),(\"cd\",3)])]\n children (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "children",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#children",
          "type": "function"
        },
        "index": {
          "description": "The children of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "children",
          "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as maps, associated with their distinguishing key value. If the map\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [(\"abc\",1),(\"abcd\",2)])\n    == Map.fromList [('a',fromList [(\"bc\",1),(\"bcd\",2)])]\n children1 (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "children1",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#children1",
          "type": "function"
        },
        "index": {
          "description": "The children of the first element of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "children1",
          "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:children1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the map along with its associated\n value. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "delete",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Removes the key from the map along with its associated value If the key is not member of the map the map is unchanged",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "delete",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The map without its maximal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "deleteMax",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with maxView The map without its maximal key or the unchanged original map if it was empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "deleteMax",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The map without its minimal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "deleteMin",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with minView The map without its minimal key or the unchanged original map if it was empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "deleteMin",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the map, an empty map is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == fromList [(\"\",1),(\"b\",2),(\"c\",3)]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to find the value in a map associated with a string,\n but you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting map is empty, the entire string cannot\n be a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "deletePrefix",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#deletePrefix",
          "type": "function"
        },
        "index": {
          "description": "The map which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the map an empty map is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to find the value in map associated with string but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting map is empty the entire string cannot be member of the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "deletePrefix",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deletePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "deleteSuffixes",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#deleteSuffixes",
          "type": "function"
        },
        "index": {
          "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "deleteSuffixes",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Suffixes",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:deleteSuffixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two maps: the map which\n contains all keys that are members of the first map and not of the second.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e difference = differenceWith (\\_ _ -\u003e Nothing)\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "difference",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#difference",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The difference of the two maps the map which contains all keys that are members of the first map and not of the second The worst-case performance occurs when the two maps are identical difference differenceWith Nothing",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "difference",
          "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e, but the given function\n determines what to do when a key is a member of both maps. If the function\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the key is removed; if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a new value,\n that value replaces the old one in the first map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "differenceWith",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#differenceWith",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like difference but the given function determines what to do when key is member of both maps If the function returns Nothing the key is removed if it returns Just new value that value replaces the old one in the first map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eTrieMap c d a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifferenceWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "differenceWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like differenceWith but in addition to the two values the key they are associated with is passed to the combining function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "differenceWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003eMaybe b)-\u003eTrieMap d a b-\u003eTrieMap d a c-\u003eTrieMap d a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "empty",
          "package": "list-tries",
          "signature": "TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "empty",
          "package": "list-tries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, discarding\n those for which the function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "filter",
          "package": "list-tries",
          "signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the elements in the map discarding those for which the function returns False",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003eTrieMap b c a",
          "package": "list-tries",
          "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given predicate.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "filterWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like filter but the key associated with the element is also passed to the given predicate",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "filterWithKey",
          "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "findMax",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Map.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with maxView Just the minimal key in the map and its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "findMax",
          "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "findMin",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Map.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with minView Just the minimal key in the map and its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "findMin",
          "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which precedes the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "findPredecessor",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Map.html#findPredecessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the map which precedes the given key in order along with its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "findPredecessor",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
          "package": "list-tries",
          "partial": "Predecessor",
          "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findPredecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which succeeds the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "findSuccessor",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Map.html#findSuccessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the map which succeeds the given key in order along with its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "findSuccessor",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
          "package": "list-tries",
          "partial": "Successor",
          "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:findSuccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldl",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldl'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlAsc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlAsc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlAsc'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlAsc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlAsc'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Asc'",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAsc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlAscWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlAscWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlAscWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Asc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlAscWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlAscWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlAscWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Asc With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlAscWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlDesc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlDesc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlDesc'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlDesc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlDesc'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Desc'",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDesc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlDescWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlDescWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlDescWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Desc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation, folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlDescWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlDescWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlDescWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Desc With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlDescWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldlWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldlWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldlWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldlWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding only over the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldr",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toList representation folding only over the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldrAsc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldrAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toAscList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldrAsc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldrAscWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldrAscWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toAscList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldrAscWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Asc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldrDesc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldrDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toDescList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldrDesc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldrDescWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldrDescWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toDescList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldrDescWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Desc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "foldrWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Map.html#foldrWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "foldrWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a map from a list of key-value pairs. If a key occurs\n more than once, the value from the last pair (according to the list's order)\n is the one which ends up in the map.\n\u003c/p\u003e\u003cpre\u003e fromList = fromListWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "fromList",
          "package": "list-tries",
          "signature": "[([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates map from list of key-value pairs If key occurs more than once the value from the last pair according to the list order is the one which ends up in the map fromList fromListWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "fromList",
          "normalized": "[([a],b)]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "List",
          "signature": "[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e, but the given function is used to determine the\n final value if a key occurs more than once. The function is applied as\n though it were flipped and then applied as a left fold over the values in\n the given list's order. Or, equivalently (except as far as performance is\n concerned), as though the function were applied as a right fold over the\n values in the reverse of the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e fromListWith (-) [(\"a\",1),(\"a\",2),(\"a\",3),(\"a\",4)]\n    == fromList [(\"a\",4-(3-(2-1)))]\n    == fromList [(\"a\",2)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "fromListWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "Like fromList but the given function is used to determine the final value if key occurs more than once The function is applied as though it were flipped and then applied as left fold over the values in the given list order Or equivalently except as far as performance is concerned as though the function were applied as right fold over the values in the reverse of the given list order For example fromListWith fromList fromList",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "fromListWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#fromListWith%27",
          "type": "function"
        },
        "index": {
          "description": "Like fromListWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "fromListWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "List With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the key, in addition to the values to\n be combined, is passed to the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "fromListWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like fromListWith but the key in addition to the values to be combined is passed to the combining function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "fromListWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "List With Key",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "fromListWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#fromListWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like fromListWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "fromListWithKey'",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "List With Key'",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:fromListWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the given value replaces the old one.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "insert",
          "package": "list-tries",
          "signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key-value pair into the map If the key is already member of the map the given value replaces the old one",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "insert",
          "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the given value replaces the old one.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "insert'",
          "package": "list-tries",
          "signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#insert%27",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key-value pair into the map If the key is already member of the map the given value replaces the old one",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "insert'",
          "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the old value is replaced by \u003ccode\u003ef givenValue\n oldValue\u003c/code\u003e where \u003ccode\u003ef\u003c/code\u003e is the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "insertWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key-value pair into the map If the key is already member of the map the old value is replaced by givenValue oldValue where is the given function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but the new value is reduced to weak\n head normal form before being placed into the map, whether it is the given\n value or a result of the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "insertWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "min Like insertWith but the new value is reduced to weak head normal form before being placed into the map whether it is the given value or result of the combining function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two maps: the map which\n contains all keys that are members of both maps.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e intersection = intersectionWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "intersection",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The intersection of the two maps the map which contains all keys that are members of both maps The worst-case performance occurs when the two maps are identical intersection intersectionWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "intersection",
          "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e intersection' = intersectionWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "intersection'",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#intersection%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersection but the combining function is applied strictly intersection intersectionWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "intersection'",
          "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the given function\n determines the new values.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWith",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Map.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersection but the given function determines the new values",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but the combining function\n is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWith'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Map.html#intersectionWith%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersectionWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWith'",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Map.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersectionWith but in addition to the two values the key they are associated with is passed to the combining function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining\n function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Map.html#intersectionWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersectionWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "intersectionWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:intersectionWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a proper submap of the\n second, i.e. all keys that are members of the first map are also members of\n the second map, and their associated values are the same, but the maps are\n not equal. That is, at least one key was a member of the second map but not\n the first.\n\u003c/p\u003e\u003cpre\u003e isProperSubmapOf = isProperSubmapOfBy (==)\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "isProperSubmapOf",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#isProperSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first map is proper submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same but the maps are not equal That is at least one key was member of the second map but not the first isProperSubmapOf isProperSubmapOfBy",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "isProperSubmapOf",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
          "package": "list-tries",
          "partial": "Proper Submap Of",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isProperSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the\n equality relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key, and at least one key in the second map is not\n a member of the first.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "isProperSubmapOfBy",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#isProperSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like isProperSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key and at least one key in the second map is not member of the first",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "isProperSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
          "package": "list-tries",
          "partial": "Proper Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isProperSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a submap of the second,\n i.e. all keys that are members of the first map are also members of the\n second map, and their associated values are the same.\n\u003c/p\u003e\u003cpre\u003e isSubmapOf = isSubmapOfBy (==)\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "isSubmapOf",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#isSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first map is submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same isSubmapOf isSubmapOfBy",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "isSubmapOf",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
          "package": "list-tries",
          "partial": "Submap Of",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the equality\n relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "isSubmapOfBy",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#isSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like isSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "isSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
          "package": "list-tries",
          "partial": "Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value in the map associated with the given key,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "lookup",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Maybe a",
          "source": "src/Data-ListTrie-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "min Just the value in the map associated with the given key or Nothing if the key is not member of the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "lookup",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe c",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3),(\"abc\",4)])\n    == fromList [(\"ab\",2),(\"abc\",4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "lookupPrefix",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#lookupPrefix",
          "type": "function"
        },
        "index": {
          "description": "The map which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "lookupPrefix",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:lookupPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, but returns the given value when the key is\n not a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "lookupWithDefault",
          "package": "list-tries",
          "signature": "a -\u003e [k] -\u003e TrieMap map k a -\u003e a",
          "source": "src/Data-ListTrie-Map.html#lookupWithDefault",
          "type": "function"
        },
        "index": {
          "description": "min Like lookup but returns the given value when the key is not member of the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "lookupWithDefault",
          "normalized": "a-\u003e[b]-\u003eTrieMap c b a-\u003ea",
          "package": "list-tries",
          "partial": "With Default",
          "signature": "a-\u003e[k]-\u003eTrieMap map k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the elements in the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "map",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Map.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to all the elements in the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
          "package": "list-tries",
          "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "map'",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Map.html#map%27",
          "type": "function"
        },
        "index": {
          "description": "Like map but apply the function strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "map'",
          "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
          "package": "list-tries",
          "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:map-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ca\u003eData.List\u003c/a\u003e.\u003ccode\u003emapAccumL\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e\u003cp\u003eEssentially a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e: the given\n function is applied to each element of the map, resulting in a new value for\n the accumulator and a replacement element for the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccum",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Like Data.List mapAccumL on the toList representation Essentially combination of map and foldl the given function is applied to each element of the map resulting in new value for the accumulator and replacement element for the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccum'",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccum%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccum'",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum'",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in ascending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAsc",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumAsc",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but in ascending order as though operating on the toAscList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAsc",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Asc",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAsc'",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumAsc%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumAsc but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAsc'",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Asc'",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAsc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAscWithKey",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumAscWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumAsc but the function receives the key in addition to the value associated with it",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAscWithKey",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Asc With Key",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAscWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAscWithKey'",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumAscWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumAscWithKey but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumAscWithKey'",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Asc With Key'",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumAscWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in descending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDesc",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumDesc",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but in descending order as though operating on the toDescList representation",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDesc",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Desc",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDesc'",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumDesc%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumDesc but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDesc'",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Desc'",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDesc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDescWithKey",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumDescWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumDesc but the function receives the key in addition to the value associated with it",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDescWithKey",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Desc With Key",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDescWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDescWithKey'",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumDescWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumDescWithKey but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumDescWithKey'",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Desc With Key'",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumDescWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function receives the key in addition\n to the value associated with it.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumWithKey",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but the function receives the key in addition to the value associated with it",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum With Key",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumWithKey'",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Map.html#mapAccumWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumWithKey but the function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapAccumWithKey'",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum With Key'",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapAccumWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, separating\n the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e results from the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. The first element of the pair contains\n the former results, and the second the latter.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapEither",
          "package": "list-tries",
          "signature": "(a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
          "source": "src/Data-ListTrie-Map.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the elements in the map separating the Left results from the Right The first element of the pair contains the former results and the second the latter",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eTrieMap d e a-\u003e(TrieMap d e b,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapEither\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapEitherWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
          "source": "src/Data-ListTrie-Map.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapEither but the key associated with the element is also passed to the given function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapEitherWithKey",
          "normalized": "([a]-\u003eb-\u003eEither c d)-\u003eTrieMap e a b-\u003e(TrieMap e a c,TrieMap e a d)",
          "package": "list-tries",
          "partial": "Either With Key",
          "signature": "([k]-\u003ea-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n map.\n\u003c/p\u003e\u003cpre\u003e mapInKeys = mapInKeysWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeys",
          "package": "list-tries",
          "signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Map.html#mapInKeys",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the contents of all the keys in the map mapInKeys mapInKeysWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeys",
          "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "In Keys",
          "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but combine identical keys strictly.\n\u003c/p\u003e\u003cpre\u003e mapInKeys' = mapInKeysWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeys'",
          "package": "list-tries",
          "signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Map.html#mapInKeys%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapInKeys but combine identical keys strictly mapInKeys mapInKeysWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeys'",
          "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "In Keys'",
          "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeys-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeysWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Map.html#mapInKeysWith",
          "type": "function"
        },
        "index": {
          "description": "Like mapInKeys but use the first given function to combine elements if the second function gives two keys the same value",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "In Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeysWith\u003c/a\u003e\u003c/code\u003e, but apply the combining function strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeysWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Map.html#mapInKeysWith%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapInKeysWith but apply the combining function strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapInKeysWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "In Keys With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapInKeysWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in a map.\n\u003c/p\u003e\u003cpre\u003e mapKeys = mapKeysWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapKeys",
          "package": "list-tries",
          "signature": "([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Map.html#mapKeys",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to all the keys in map mapKeys mapKeysWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapKeys",
          "normalized": "([a]-\u003e[a])-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Keys",
          "signature": "([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapKeysWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e ([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Map.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "description": "Like mapKeys but use the first given function to combine elements if the second function gives two keys the same value",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e([b]-\u003e[b])-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, preserving\n only the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapMaybe",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Map.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the elements in the map preserving only the Just results",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eTrieMap c d a-\u003eTrieMap c d b",
          "package": "list-tries",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapMaybeWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Map.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapMaybe but the key associated with the element is also passed to the given function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapMaybeWithKey",
          "normalized": "([a]-\u003eb-\u003eMaybe c)-\u003eTrieMap d a b-\u003eTrieMap d a c",
          "package": "list-tries",
          "partial": "Maybe With Key",
          "signature": "([k]-\u003ea-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but also pass the key associated with the element to\n the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Map.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like map but also pass the key associated with the element to the given function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapWithKey",
          "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapWithKey\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "mapWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Map.html#mapWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapWithKey but apply the function strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "mapWithKey'",
          "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:mapWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "maxView",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the maximal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "maxView",
          "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "member",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#member",
          "type": "function"
        },
        "index": {
          "description": "min True iff the given key is associated with value in the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "member",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "minView",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#minView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the minimal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "minView",
          "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "notMember",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "min False iff the given key is associated with value in the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "notMember",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
          "package": "list-tries",
          "partial": "Member",
          "signature": "[k]-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "null",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Map.html#null",
          "type": "function"
        },
        "index": {
          "description": "True iff the map is empty",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "null",
          "normalized": "TrieMap a b c-\u003eBool",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of maps: the first element contains those values for\n which the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second contains those for\n which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "partition",
          "package": "list-tries",
          "signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#partition",
          "type": "function"
        },
        "index": {
          "description": "pair of maps the first element contains those values for which the given predicate returns True and the second contains those for which it was False",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003e(TrieMap b c a,TrieMap b c a)",
          "package": "list-tries",
          "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given predicate.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "partitionWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#partitionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like partition but the key associated with the element is also passed to the given predicate",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "partitionWithKey",
          "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003e(TrieMap c a b,TrieMap c a b)",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the map's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "showTrie",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e ShowS",
          "source": "src/Data-ListTrie-Map.html#showTrie",
          "type": "function"
        },
        "index": {
          "description": "Displays the map internal structure in an undefined way That is to say no program should depend on the function results",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "showTrie",
          "normalized": "TrieMap a b c-\u003eShowS",
          "package": "list-tries",
          "partial": "Trie",
          "signature": "TrieMap map k a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:showTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eshowTrie\u003c/a\u003e\u003c/code\u003e, but uses the given function to display the\n elements of the map. Still undefined.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "showTrieWith",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e ShowS) -\u003e TrieMap map k a -\u003e ShowS",
          "source": "src/Data-ListTrie-Map.html#showTrieWith",
          "type": "function"
        },
        "index": {
          "description": "Like showTrie but uses the given function to display the elements of the map Still undefined",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "showTrieWith",
          "normalized": "(Maybe a-\u003eShowS)-\u003eTrieMap b c a-\u003eShowS",
          "package": "list-tries",
          "partial": "Trie With",
          "signature": "(Maybe a-\u003eShowS)-\u003eTrieMap map k a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:showTrieWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The singleton map containing only the given key-value pair.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "singleton",
          "package": "list-tries",
          "signature": "[k] -\u003e a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "The singleton map containing only the given key-value pair",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "singleton",
          "normalized": "[a]-\u003eb-\u003eTrieMap c a b",
          "package": "list-tries",
          "signature": "[k]-\u003ea-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "size",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e n",
          "source": "src/Data-ListTrie-Map.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map The value is built up lazily allowing for delivery of partial results without traversing the whole map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "size",
          "normalized": "TrieMap a b c-\u003ed",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built strictly:\n no value is returned until the map has been fully traversed.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "size'",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e n",
          "source": "src/Data-ListTrie-Map.html#size%27",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map The value is built strictly no value is returned until the map has been fully traversed",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "size'",
          "normalized": "TrieMap a b c-\u003ed",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:size-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the map in two about the given key. The first\n element of the resulting pair is a map containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "split",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#split",
          "type": "function"
        },
        "index": {
          "description": "min Splits the map in two about the given key The first element of the resulting pair is map containing the keys lesser than the given key the second contains those keys that are greater",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "split",
          "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,TrieMap b a c)",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns the value associated with\n the given key, if any.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "splitLookup",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, Maybe a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#splitLookup",
          "type": "function"
        },
        "index": {
          "description": "min Like split but also returns the value associated with the given key if any",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "splitLookup",
          "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,Maybe c,TrieMap b a c)",
          "package": "list-tries",
          "partial": "Lookup",
          "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,Maybe a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n map, the value associated with that prefix, if any, and the map with that\n prefix removed from all the keys as well as the map itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [(\"a\",1),(\"b\",2)])\n    == (\"\", Nothing, fromList [(\"a\",1),(\"b\",2)])\n splitPrefix (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == (\"a\", Just 1, fromList [(\"b\",2),(\"c\",3)])\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "splitPrefix",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e ([k], Maybe a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#splitPrefix",
          "type": "function"
        },
        "index": {
          "description": "triple containing the longest common prefix of all keys in the map the value associated with that prefix if any and the map with that prefix removed from all the keys as well as the map itself Examples splitPrefix fromList Nothing fromList splitPrefix fromList ab ac Just fromList",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "splitPrefix",
          "normalized": "TrieMap a b c-\u003e([b],Maybe c,TrieMap a b c)",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "TrieMap map k a-\u003e([k],Maybe a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:splitPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "toAscList",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e [([k], a)]",
          "source": "src/Data-ListTrie-Map.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Converts the map to list of the key-value pairs contained within in ascending order",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "toAscList",
          "normalized": "TrieMap a b c-\u003e[([b],c)]",
          "package": "list-tries",
          "partial": "Asc List",
          "signature": "TrieMap map k a-\u003e[([k],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in descending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "toDescList",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e [([k], a)]",
          "source": "src/Data-ListTrie-Map.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Converts the map to list of the key-value pairs contained within in descending order",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "toDescList",
          "normalized": "TrieMap a b c-\u003e[([b],c)]",
          "package": "list-tries",
          "partial": "Desc List",
          "signature": "TrieMap map k a-\u003e[([k],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in undefined order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "toList",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e [([k], a)]",
          "source": "src/Data-ListTrie-Map.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts the map to list of the key-value pairs contained within in undefined order",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "toList",
          "normalized": "TrieMap a b c-\u003e[([b],c)]",
          "package": "list-tries",
          "partial": "List",
          "signature": "TrieMap map k a-\u003e[([k],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two maps: the map which contains\n all keys that are members of either map. This union is left-biased: if a key\n is a member of both maps, the value from the first map is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e union = unionWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "union",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#union",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The union of the two maps the map which contains all keys that are members of either map This union is left-biased if key is member of both maps the value from the first map is chosen The worst-case performance occurs when the two maps are identical union unionWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "union",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e) is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e union' = unionWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "union'",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#union%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like union but the combining function const is applied strictly union unionWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "union'",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:union-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the given function is used to\n determine the new value if a key is a member of both given maps. For a\n function \u003ccode\u003ef\u003c/code\u003e, the new value is \u003ccode\u003ef firstMapValue secondMapValue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like union but the given function is used to determine the new value if key is member of both given maps For function the new value is firstMapValue secondMapValue",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionWith%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like unionWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key is passed to the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like unionWith but in addition to the two values the key is passed to the combining function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like unionWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionWithKey'",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the maps: the map which contains all keys\n that are members of any of the maps. If a key is a member of multiple maps,\n the value that occurs in the earliest of the maps (according to the order of\n the given list) is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the maps are identical.\n\u003c/p\u003e\u003cpre\u003e unions = unionsWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unions",
          "package": "list-tries",
          "signature": "[TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unions",
          "type": "function"
        },
        "index": {
          "description": "sum The union of all the maps the map which contains all keys that are members of any of the maps If key is member of multiple maps the value that occurs in the earliest of the maps according to the order of the given list is chosen The worst-case performance occurs when all the maps are identical unions unionsWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unions",
          "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e) is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e unions' = unionsWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unions'",
          "package": "list-tries",
          "signature": "[TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unions%27",
          "type": "function"
        },
        "index": {
          "description": "sum Like unions but the combining function const is applied strictly unions unionsWith const",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unions'",
          "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the given function determines the final\n value if a key is a member of more than one map. The function is applied as\n a left fold over the values in the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e unionsWith (-) [fromList [(\"a\",1)],fromList [(\"a\",2)],fromList [(\"a\",3)]]\n    == fromList [(\"a\",(1-2)-3)]\n    == fromList [(\"a\",-4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionsWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "sum Like unions but the given function determines the final value if key is member of more than one map The function is applied as left fold over the values in the given list order For example unionsWith fromList fromList fromList fromList fromList",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionsWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionsWith%27",
          "type": "function"
        },
        "index": {
          "description": "sum Like unionsWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionsWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two values under\n consideration, the key is passed to the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionsWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionsWithKey",
          "type": "function"
        },
        "index": {
          "description": "sum Like unionsWith but in addition to the two values under consideration the key is passed to the combining function",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionsWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "unionsWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#unionsWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "sum Like unionsWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "unionsWithKey'",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:unionsWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Updates the value at the given key: if the given\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the value and its associated key are removed; if\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e a\u003c/code\u003e is returned, the old value is replaced with \u003ccode\u003ea\u003c/code\u003e. If the key is\n not a member of the map, the map is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "update",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Map.html#update",
          "type": "function"
        },
        "index": {
          "description": "min Updates the value at the given key if the given function returns Nothing the value and its associated key are removed if Just is returned the old value is replaced with If the key is not member of the map the map is unchanged",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, but also returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the original value,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Map",
          "name": "updateLookup",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e (Maybe a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Map.html#updateLookup",
          "type": "function"
        },
        "index": {
          "description": "min Like update but also returns Just the original value or Nothing if the key is not member of the map",
          "hierarchy": "Data ListTrie Map",
          "module": "Data.ListTrie.Map",
          "name": "updateLookup",
          "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003e(Maybe a,TrieMap c b a)",
          "package": "list-tries",
          "partial": "Lookup",
          "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003e(Maybe a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Map.html#v:updateLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of enumerable elements to arbitrary values, based on a\n Patricia trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n representation after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Map.Enum",
          "name": "Enum",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map-Enum.html",
          "type": "module"
        },
        "index": {
          "description": "map from lists of enumerable elements to arbitrary values based on Patricia trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
          "hierarchy": "Data ListTrie Patricia Map Enum",
          "module": "Data.ListTrie.Patricia.Map.Enum",
          "name": "Enum",
          "package": "list-tries",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Patricia.Map.Enum",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map-Enum.html#TrieMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Patricia Map Enum",
          "module": "Data.ListTrie.Patricia.Map.Enum",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Enum.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be compared for equality to\n arbitrary values, based on a Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Map.Eq",
          "name": "Eq",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "map from lists of elements that can be compared for equality to arbitrary values based on Patricia trie",
          "hierarchy": "Data ListTrie Patricia Map Eq",
          "module": "Data.ListTrie.Patricia.Map.Eq",
          "name": "Eq",
          "package": "list-tries",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Patricia.Map.Eq",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map-Eq.html#TrieMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Patricia Map Eq",
          "module": "Data.ListTrie.Patricia.Map.Eq",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Eq.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA map from lists of elements that can be totally ordered to arbitrary\n values, based on a Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Map.Ord",
          "name": "Ord",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "map from lists of elements that can be totally ordered to arbitrary values based on Patricia trie",
          "hierarchy": "Data ListTrie Patricia Map Ord",
          "module": "Data.ListTrie.Patricia.Map.Ord",
          "name": "Ord",
          "package": "list-tries",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Patricia.Map.Ord",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map-Ord.html#TrieMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Patricia Map Ord",
          "module": "Data.ListTrie.Patricia.Map.Ord",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map-Ord.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a Patricia trie representing a map with list\n keys, generalized over any type of map from element values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the map and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the map.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003cp\u003eStrict versions of functions are provided for those who want to be certain\n that their \u003ccode\u003e\u003ca\u003eTrieMap\u003c/a\u003e\u003c/code\u003e doesn't contain values consisting of unevaluated\n thunks. Note, however, that they do not evaluate the whole trie strictly,\n only the values. And only to one level of depth: for instance, \u003ccode\u003e\u003ca\u003ealter'\u003c/a\u003e\u003c/code\u003e does\n not \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e the value within the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, only the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e itself. The user\n should add the strictness in such cases himself, if he so wishes.\n\u003c/p\u003e\u003cp\u003eMany functions come in both ordinary and \u003ccode\u003eWithKey\u003c/code\u003e forms, where the former\n takes a function of type \u003ccode\u003ea -\u003e b\u003c/code\u003e and the latter of type \u003ccode\u003e[k] -\u003e a -\u003e b\u003c/code\u003e,\n where \u003ccode\u003e[k]\u003c/code\u003e is the key associated with the value \u003ccode\u003ea\u003c/code\u003e. For most of these\n functions, there is additional overhead involved in keeping track of the\n key: don't use the latter form of the function unless you need it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "Map",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map.html",
          "type": "module"
        },
        "index": {
          "description": "The base implementation of Patricia trie representing map with list keys generalized over any type of map from element values to tries Worst-case complexities are given in terms of and refers to the number of keys in the map and to their maximum length refers to the length of key given to the function not any property of the map In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven Strict versions of functions are provided for those who want to be certain that their TrieMap doesn contain values consisting of unevaluated thunks Note however that they do not evaluate the whole trie strictly only the values And only to one level of depth for instance alter does not seq the value within the Maybe only the Maybe itself The user should add the strictness in such cases himself if he so wishes Many functions come in both ordinary and WithKey forms where the former takes function of type and the latter of type where is the key associated with the value For most of these functions there is additional overhead involved in keeping track of the key don use the latter form of the function unless you need it",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "Map",
          "package": "list-tries",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure itself: a map from keys of type \u003ccode\u003e[k]\u003c/code\u003e to values of type\n \u003ccode\u003ev\u003c/code\u003e implemented as a trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ek\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eTrie\u003c/code\u003e class is internal, ignore it.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003eFoldable\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances allow folding over and\n   traversing only the values, not the keys.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "TrieMap",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Map.html#TrieMap",
          "type": "data"
        },
        "index": {
          "description": "The data structure itself map from keys of type to values of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The Trie class is internal ignore it The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Foldable and Traversable instances allow folding over and traversing only the values not the keys The Monoid instance defines mappend as union and mempty as empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "TrieMap",
          "package": "list-tries",
          "partial": "Trie Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#t:TrieMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the map. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"xa\" (fromList [(\"a\",1),(\"b\",2)])\n    == fromList [(\"xaa\",1),(\"xab\",2)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "addPrefix",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#addPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prepends the given key to all the keys of the map For example addPrefix xa fromList fromList xaa xab",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "addPrefix",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:addPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Adjusts the value at the given key by calling the given\n function on it. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "adjust",
          "package": "list-tries",
          "signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "min Adjusts the value at the given key by calling the given function on it If the key is not member of the map the map is unchanged",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eadjust\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "adjust'",
          "package": "list-tries",
          "signature": "(a -\u003e a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#adjust%27",
          "type": "function"
        },
        "index": {
          "description": "min Like adjust but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "adjust'",
          "normalized": "(a-\u003ea)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(a-\u003ea)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:adjust-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. The most general modification function, allowing you to\n modify the value at the given key, whether or not it is a member of the map.\n In short: the given function is passed \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value at the key if it is\n present, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise; if the function returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the\n new value is inserted into the map, otherwise the old value is removed. More\n precisely, for \u003ccode\u003ealter f k m\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ek\u003c/code\u003e is a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef (\u003c/code\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e oldValue)\u003c/code\u003e is called. Now:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e newValue\u003c/code\u003e, \u003ccode\u003eoldValue\u003c/code\u003e is replaced with \u003ccode\u003enewValue\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003ek\u003c/code\u003e and \u003ccode\u003eoldValue\u003c/code\u003e are removed from the map.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf, instead, \u003ccode\u003ek\u003c/code\u003e is not a member of \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003ef \u003c/code\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is called, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e value\u003c/code\u003e, \u003ccode\u003evalue\u003c/code\u003e is inserted into the map, at \u003ccode\u003ek\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ef\u003c/code\u003e returned \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the map is unchanged.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe function is applied lazily only if the given key is a prefix of more\n than one key in the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "alter",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#alter",
          "type": "function"
        },
        "index": {
          "description": "min The most general modification function allowing you to modify the value at the given key whether or not it is member of the map In short the given function is passed Just the value at the key if it is present or Nothing otherwise if the function returns Just value the new value is inserted into the map otherwise the old value is removed More precisely for alter If is member of Just oldValue is called Now If returned Just newValue oldValue is replaced with newValue If returned Nothing and oldValue are removed from the map If instead is not member of Nothing is called and If returned Just value value is inserted into the map at If returned Nothing the map is unchanged The function is applied lazily only if the given key is prefix of more than one key in the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e, but the function is always applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "alter'",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#alter%27",
          "type": "function"
        },
        "index": {
          "description": "min Like alter but the function is always applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "alter'",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(Maybe a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:alter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the longest common prefix in the trie as maps,\n associated with their distinguishing key value. If the map contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [(\"a\",1),(\"abc\",2),(\"abcd\",3)])\n    == Map.fromList [('b',fromList [(\"c\",2),(\"cd\",3)])]\n children (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "children",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#children",
          "type": "function"
        },
        "index": {
          "description": "The children of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "children",
          "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as maps, associated with their distinguishing key value. If the map\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [(\"abc\",1),(\"abcd\",2)])\n    == Map.fromList [('a',fromList [(\"bc\",1),(\"bcd\",2)])]\n children1 (fromList [(\"b\",1),(\"c\",2)])\n    == Map.fromList [('b',fromList [(\"\",1)]),('c',fromList [(\"\",2)])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "children1",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e map k (TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#children1",
          "type": "function"
        },
        "index": {
          "description": "The children of the first element of the longest common prefix in the trie as maps associated with their distinguishing key value If the map contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "children1",
          "normalized": "TrieMap a b c-\u003ea b(TrieMap a b c)",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003emap k(TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:children1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the map along with its associated\n value. If the key is not a member of the map, the map is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "delete",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Removes the key from the map along with its associated value If the key is not member of the map the map is unchanged",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "delete",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The map without its maximal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deleteMax",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with maxView The map without its maximal key or the unchanged original map if it was empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deleteMax",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The map without its minimal\n key, or the unchanged original map if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deleteMin",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with minView The map without its minimal key or the unchanged original map if it was empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deleteMin",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the map, an empty map is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == fromList [(\"\",1),(\"b\",2),(\"c\",3)]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to find the value in a map associated with a string,\n but you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting map is empty, the entire string cannot\n be a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deletePrefix",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#deletePrefix",
          "type": "function"
        },
        "index": {
          "description": "The map which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the map an empty map is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to find the value in map associated with string but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting map is empty the entire string cannot be member of the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deletePrefix",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deletePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deleteSuffixes",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#deleteSuffixes",
          "type": "function"
        },
        "index": {
          "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "deleteSuffixes",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Suffixes",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:deleteSuffixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two maps: the map which\n contains all keys that are members of the first map and not of the second.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e difference = differenceWith (\\_ _ -\u003e Nothing)\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "difference",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#difference",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The difference of the two maps the map which contains all keys that are members of the first map and not of the second The worst-case performance occurs when the two maps are identical difference differenceWith Nothing",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "difference",
          "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e, but the given function\n determines what to do when a key is a member of both maps. If the function\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the key is removed; if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a new value,\n that value replaces the old one in the first map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "differenceWith",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#differenceWith",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like difference but the given function determines what to do when key is member of both maps If the function returns Nothing the key is removed if it returns Just new value that value replaces the old one in the first map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eTrieMap c d a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edifferenceWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "differenceWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e Maybe a) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like differenceWith but in addition to the two values the key they are associated with is passed to the combining function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "differenceWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003eMaybe b)-\u003eTrieMap d a b-\u003eTrieMap d a c-\u003eTrieMap d a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eMaybe a)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "empty",
          "package": "list-tries",
          "signature": "TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "empty",
          "package": "list-tries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, discarding\n those for which the function returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "filter",
          "package": "list-tries",
          "signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the elements in the map discarding those for which the function returns False",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003eTrieMap b c a",
          "package": "list-tries",
          "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given predicate.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "filterWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#filterWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like filter but the key associated with the element is also passed to the given predicate",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "filterWithKey",
          "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findMax",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with maxView Just the minimal key in the map and its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findMax",
          "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n map and its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findMin",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with minView Just the minimal key in the map and its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findMin",
          "normalized": "TrieMap a b c-\u003eMaybe([b],c)",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which precedes the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findPredecessor",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#findPredecessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the map which precedes the given key in order along with its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findPredecessor",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
          "package": "list-tries",
          "partial": "Predecessor",
          "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findPredecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the map which succeeds the given key in order,\n along with its associated value, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findSuccessor",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Maybe ([k], a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#findSuccessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the map which succeeds the given key in order along with its associated value or Nothing if the map is empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "findSuccessor",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe([a],c)",
          "package": "list-tries",
          "partial": "Successor",
          "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe([k],a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:findSuccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldl",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldl'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAsc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAsc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAsc'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlAsc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAsc'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Asc'",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAsc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toAscList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAscWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlAscWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAscWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Asc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAscWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlAscWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlAscWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Asc With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlAscWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDesc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDesc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDesc'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlDesc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDesc'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Desc'",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDesc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toDescList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDescWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlDescWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDescWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Desc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation, folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDescWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlDescWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlDescWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Desc With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlDescWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the toList representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldlWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldlWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldlWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding only over the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldr",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toList representation folding only over the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrAsc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldrAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrAsc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrAscWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldrAscWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toAscList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrAscWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Asc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrDesc",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldrDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrDesc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap c d a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrDescWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldrDescWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toDescList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrDescWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "Desc With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation,\n folding over both the keys and the elements.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e TrieMap map k a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Map.html#foldrWithKey",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toList representation folding over both the keys and the elements",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "foldrWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTrieMap d a b-\u003ec",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrieMap map k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a map from a list of key-value pairs. If a key occurs\n more than once, the value from the last pair (according to the list's order)\n is the one which ends up in the map.\n\u003c/p\u003e\u003cpre\u003e fromList = fromListWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromList",
          "package": "list-tries",
          "signature": "[([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates map from list of key-value pairs If key occurs more than once the value from the last pair according to the list order is the one which ends up in the map fromList fromListWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromList",
          "normalized": "[([a],b)]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "List",
          "signature": "[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e, but the given function is used to determine the\n final value if a key occurs more than once. The function is applied as\n though it were flipped and then applied as a left fold over the values in\n the given list's order. Or, equivalently (except as far as performance is\n concerned), as though the function were applied as a right fold over the\n values in the reverse of the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e fromListWith (-) [(\"a\",1),(\"a\",2),(\"a\",3),(\"a\",4)]\n    == fromList [(\"a\",4-(3-(2-1)))]\n    == fromList [(\"a\",2)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "Like fromList but the given function is used to determine the final value if key occurs more than once The function is applied as though it were flipped and then applied as left fold over the values in the given list order Or equivalently except as far as performance is concerned as though the function were applied as right fold over the values in the reverse of the given list order For example fromListWith fromList fromList",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#fromListWith%27",
          "type": "function"
        },
        "index": {
          "description": "Like fromListWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "List With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, but the key, in addition to the values to\n be combined, is passed to the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like fromListWith but the key in addition to the values to be combined is passed to the combining function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "List With Key",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efromListWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [([k], a)] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#fromListWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like fromListWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "fromListWithKey'",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "List With Key'",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[([k],a)]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:fromListWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the given value replaces the old one.\n\u003c/p\u003e\u003cpre\u003e insert = insertWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insert",
          "package": "list-tries",
          "signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key-value pair into the map If the key is already member of the map the given value replaces the old one insert insertWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insert",
          "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but the new value is reduced to weak head\n normal form before being placed into the map.\n\u003c/p\u003e\u003cpre\u003e insert' = insertWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insert'",
          "package": "list-tries",
          "signature": "[k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#insert%27",
          "type": "function"
        },
        "index": {
          "description": "min Like insert but the new value is reduced to weak head normal form before being placed into the map insert insertWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insert'",
          "normalized": "[a]-\u003eb-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "signature": "[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key-value pair into the map. If the key is\n already a member of the map, the old value is replaced by \u003ccode\u003ef givenValue\n oldValue\u003c/code\u003e where \u003ccode\u003ef\u003c/code\u003e is the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insertWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key-value pair into the map If the key is already member of the map the old value is replaced by givenValue oldValue where is the given function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but the new value is reduced to weak\n head normal form before being placed into the map, whether it is the given\n value or a result of the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insertWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [k] -\u003e a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "min Like insertWith but the new value is reduced to weak head normal form before being placed into the map whether it is the given value or result of the combining function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[k]-\u003ea-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two maps: the map which\n contains all keys that are members of both maps.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e intersection = intersectionWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersection",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The intersection of the two maps the map which contains all keys that are members of both maps The worst-case performance occurs when the two maps are identical intersection intersectionWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersection",
          "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e intersection' = intersectionWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersection'",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#intersection%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersection but the combining function is applied strictly intersection intersectionWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersection'",
          "normalized": "TrieMap a b c-\u003eTrieMap a b d-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersection-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e, but the given function\n determines the new values.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWith",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Patricia-Map.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersection but the given function determines the new values",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but the combining function\n is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWith'",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Patricia-Map.html#intersectionWith%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersectionWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWith'",
          "normalized": "(a-\u003eb-\u003ec)-\u003eTrieMap d e a-\u003eTrieMap d e b-\u003eTrieMap d e c",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key they are associated with is passed to the combining\n function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Patricia-Map.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersectionWith but in addition to the two values the key they are associated with is passed to the combining function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWithKey",
          "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eintersectionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining\n function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b -\u003e c) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e TrieMap map k c",
          "source": "src/Data-ListTrie-Patricia-Map.html#intersectionWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like intersectionWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "intersectionWithKey'",
          "normalized": "([a]-\u003eb-\u003ec-\u003ed)-\u003eTrieMap e a b-\u003eTrieMap e a c-\u003eTrieMap e a d",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003eb-\u003ec)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eTrieMap map k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:intersectionWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a proper submap of the\n second, i.e. all keys that are members of the first map are also members of\n the second map, and their associated values are the same, but the maps are\n not equal. That is, at least one key was a member of the second map but not\n the first.\n\u003c/p\u003e\u003cpre\u003e isProperSubmapOf = isProperSubmapOfBy (==)\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isProperSubmapOf",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#isProperSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first map is proper submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same but the maps are not equal That is at least one key was member of the second map but not the first isProperSubmapOf isProperSubmapOfBy",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isProperSubmapOf",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
          "package": "list-tries",
          "partial": "Proper Submap Of",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isProperSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the\n equality relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key, and at least one key in the second map is not\n a member of the first.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isProperSubmapOfBy",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#isProperSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like isProperSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key and at least one key in the second map is not member of the first",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isProperSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
          "package": "list-tries",
          "partial": "Proper Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isProperSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first map is a submap of the second,\n i.e. all keys that are members of the first map are also members of the\n second map, and their associated values are the same.\n\u003c/p\u003e\u003cpre\u003e isSubmapOf = isSubmapOfBy (==)\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isSubmapOf",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#isSubmapOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first map is submap of the second i.e all keys that are members of the first map are also members of the second map and their associated values are the same isSubmapOf isSubmapOfBy",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isSubmapOf",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eBool",
          "package": "list-tries",
          "partial": "Submap Of",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e, but one can specify the equality\n relation applied to the values.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all keys that are members of the first map are also members of\n the second map, and the given function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003ef\n firstMapValue secondMapValue\u003c/code\u003e where \u003ccode\u003efirstMapValue\u003c/code\u003e and \u003ccode\u003esecondMapValue\u003c/code\u003e are\n associated with the same key.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isSubmapOfBy",
          "package": "list-tries",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e TrieMap map k a -\u003e TrieMap map k b -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#isSubmapOfBy",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like isSubmapOf but one can specify the equality relation applied to the values True iff all keys that are members of the first map are also members of the second map and the given function returns True for all firstMapValue secondMapValue where firstMapValue and secondMapValue are associated with the same key",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "isSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eTrieMap c d a-\u003eTrieMap c d b-\u003eBool",
          "package": "list-tries",
          "partial": "Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eTrieMap map k a-\u003eTrieMap map k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the value in the map associated with the given key,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "lookup",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Maybe a",
          "source": "src/Data-ListTrie-Patricia-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "min Just the value in the map associated with the given key or Nothing if the key is not member of the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "lookup",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eMaybe c",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The map which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3),(\"abc\",4)])\n    == fromList [(\"ab\",2),(\"abc\",4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "lookupPrefix",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#lookupPrefix",
          "type": "function"
        },
        "index": {
          "description": "The map which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "lookupPrefix",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:lookupPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, but returns the given value when the key is\n not a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "lookupWithDefault",
          "package": "list-tries",
          "signature": "a -\u003e [k] -\u003e TrieMap map k a -\u003e a",
          "source": "src/Data-ListTrie-Patricia-Map.html#lookupWithDefault",
          "type": "function"
        },
        "index": {
          "description": "min Like lookup but returns the given value when the key is not member of the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "lookupWithDefault",
          "normalized": "a-\u003e[b]-\u003eTrieMap c b a-\u003ea",
          "package": "list-tries",
          "partial": "With Default",
          "signature": "a-\u003e[k]-\u003eTrieMap map k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the elements in the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "map",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Patricia-Map.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to all the elements in the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
          "package": "list-tries",
          "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "map'",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Patricia-Map.html#map%27",
          "type": "function"
        },
        "index": {
          "description": "Like map but apply the function strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "map'",
          "normalized": "(a-\u003eb)-\u003eTrieMap c d a-\u003eTrieMap c d b",
          "package": "list-tries",
          "signature": "(a-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:map-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ca\u003eData.List\u003c/a\u003e.\u003ccode\u003emapAccumL\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e\u003cp\u003eEssentially a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e: the given\n function is applied to each element of the map, resulting in a new value for\n the accumulator and a replacement element for the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccum",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Like Data.List mapAccumL on the toList representation Essentially combination of map and foldl the given function is applied to each element of the map resulting in new value for the accumulator and replacement element for the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccum'",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccum%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccum'",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum'",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccum-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in ascending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAsc",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAsc",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but in ascending order as though operating on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAsc",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Asc",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAsc'",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAsc%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumAsc but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAsc'",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Asc'",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAsc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAsc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAscWithKey",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAscWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumAsc but the function receives the key in addition to the value associated with it",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAscWithKey",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Asc With Key",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAscWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumAscWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAscWithKey'",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumAscWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumAscWithKey but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumAscWithKey'",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Asc With Key'",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumAscWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but in descending order, as though operating on\n the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDesc",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDesc",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but in descending order as though operating on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDesc",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Desc",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDesc'",
          "package": "list-tries",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDesc%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumDesc but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDesc'",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eTrieMap d e b-\u003e(a,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Accum Desc'",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDesc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDesc\u003c/a\u003e\u003c/code\u003e, but the function receives the key in\n addition to the value associated with it.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDescWithKey",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDescWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumDesc but the function receives the key in addition to the value associated with it",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDescWithKey",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Desc With Key",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDescWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumDescWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDescWithKey'",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumDescWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumDescWithKey but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumDescWithKey'",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum Desc With Key'",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumDescWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e, but the function receives the key in addition\n to the value associated with it.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumWithKey",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccum but the function receives the key in addition to the value associated with it",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum With Key",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e, but the function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumWithKey'",
          "package": "list-tries",
          "signature": "(acc -\u003e [k] -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e TrieMap map k a -\u003e (acc, TrieMap map k b)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapAccumWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapAccumWithKey but the function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapAccumWithKey'",
          "normalized": "(a-\u003e[b]-\u003ec-\u003e(a,d))-\u003ea-\u003eTrieMap e b c-\u003e(a,TrieMap e b d)",
          "package": "list-tries",
          "partial": "Accum With Key'",
          "signature": "(acc-\u003e[k]-\u003ea-\u003e(acc,b))-\u003eacc-\u003eTrieMap map k a-\u003e(acc,TrieMap map k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapAccumWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, separating\n the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e results from the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. The first element of the pair contains\n the former results, and the second the latter.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapEither",
          "package": "list-tries",
          "signature": "(a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the elements in the map separating the Left results from the Right The first element of the pair contains the former results and the second the latter",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eTrieMap d e a-\u003e(TrieMap d e b,TrieMap d e c)",
          "package": "list-tries",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapEither\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapEitherWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Either b c) -\u003e TrieMap map k a -\u003e (TrieMap map k b, TrieMap map k c)",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapEither but the key associated with the element is also passed to the given function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapEitherWithKey",
          "normalized": "([a]-\u003eb-\u003eEither c d)-\u003eTrieMap e a b-\u003e(TrieMap e a c,TrieMap e a d)",
          "package": "list-tries",
          "partial": "Either With Key",
          "signature": "([k]-\u003ea-\u003eEither b c)-\u003eTrieMap map k a-\u003e(TrieMap map k b,TrieMap map k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n map.\n\u003c/p\u003e\u003cpre\u003e mapInKeys = mapInKeysWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeys",
          "package": "list-tries",
          "signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapInKeys",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the contents of all the keys in the map mapInKeys mapInKeysWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeys",
          "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "In Keys",
          "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but combine identical keys strictly.\n\u003c/p\u003e\u003cpre\u003e mapInKeys' = mapInKeysWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeys'",
          "package": "list-tries",
          "signature": "(k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapInKeys%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapInKeys but combine identical keys strictly mapInKeys mapInKeysWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeys'",
          "normalized": "(a-\u003ea)-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "In Keys'",
          "signature": "(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeys-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeysWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapInKeysWith",
          "type": "function"
        },
        "index": {
          "description": "Like mapInKeys but use the first given function to combine elements if the second function gives two keys the same value",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "In Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapInKeysWith\u003c/a\u003e\u003c/code\u003e, but apply the combining function strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeysWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k1 -\u003e k2) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapInKeysWith%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapInKeysWith but apply the combining function strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapInKeysWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "In Keys With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapInKeysWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in a map.\n\u003c/p\u003e\u003cpre\u003e mapKeys = mapKeysWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapKeys",
          "package": "list-tries",
          "signature": "([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapKeys",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to all the keys in map mapKeys mapKeysWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapKeys",
          "normalized": "([a]-\u003e[a])-\u003eTrieMap b a c-\u003eTrieMap b a c",
          "package": "list-tries",
          "partial": "Keys",
          "signature": "([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e, but use the first given function to combine\n elements if the second function gives two keys the same value.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapKeysWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e ([k1] -\u003e [k2]) -\u003e TrieMap map k1 a -\u003e TrieMap map k2 a",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "description": "Like mapKeys but use the first given function to combine elements if the second function gives two keys the same value",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e([b]-\u003e[b])-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e([k]-\u003e[k])-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the elements in the map, preserving\n only the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapMaybe",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the elements in the map preserving only the Just results",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eTrieMap c d a-\u003eTrieMap c d b",
          "package": "list-tries",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is also\n passed to the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapMaybeWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Maybe b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like mapMaybe but the key associated with the element is also passed to the given function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapMaybeWithKey",
          "normalized": "([a]-\u003eb-\u003eMaybe c)-\u003eTrieMap d a b-\u003eTrieMap d a c",
          "package": "list-tries",
          "partial": "Maybe With Key",
          "signature": "([k]-\u003ea-\u003eMaybe b)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but also pass the key associated with the element to\n the given function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like map but also pass the key associated with the element to the given function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapWithKey",
          "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003emapWithKey\u003c/a\u003e\u003c/code\u003e, but apply the function strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e b) -\u003e TrieMap map k a -\u003e TrieMap map k b",
          "source": "src/Data-ListTrie-Patricia-Map.html#mapWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Like mapWithKey but apply the function strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "mapWithKey'",
          "normalized": "([a]-\u003eb-\u003ec)-\u003eTrieMap d a b-\u003eTrieMap d a c",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003eb)-\u003eTrieMap map k a-\u003eTrieMap map k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:mapWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "maxView",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the maximal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "maxView",
          "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "member",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#member",
          "type": "function"
        },
        "index": {
          "description": "min True iff the given key is associated with value in the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "member",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the map, along with the\n value associated with it. If the map is empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original\n map are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "minView",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e (Maybe ([k], a), TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#minView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the minimal key in the map along with the value associated with it If the map is empty Nothing and the original map are returned",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "minView",
          "normalized": "TrieMap a b c-\u003e(Maybe([b],c),TrieMap a b c)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieMap map k a-\u003e(Maybe([k],a),TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is associated with a value in the\n map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "notMember",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "min False iff the given key is associated with value in the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "notMember",
          "normalized": "[a]-\u003eTrieMap b a c-\u003eBool",
          "package": "list-tries",
          "partial": "Member",
          "signature": "[k]-\u003eTrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the map is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "null",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Map.html#null",
          "type": "function"
        },
        "index": {
          "description": "True iff the map is empty",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "null",
          "normalized": "TrieMap a b c-\u003eBool",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of maps: the first element contains those values for\n which the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second contains those for\n which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "partition",
          "package": "list-tries",
          "signature": "(a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#partition",
          "type": "function"
        },
        "index": {
          "description": "pair of maps the first element contains those values for which the given predicate returns True and the second contains those for which it was False",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eTrieMap b c a-\u003e(TrieMap b c a,TrieMap b c a)",
          "package": "list-tries",
          "signature": "(a-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e, but the key associated with the element is\n also passed to the given predicate.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "partitionWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e Bool) -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#partitionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Like partition but the key associated with the element is also passed to the given predicate",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "partitionWithKey",
          "normalized": "([a]-\u003eb-\u003eBool)-\u003eTrieMap c a b-\u003e(TrieMap c a b,TrieMap c a b)",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003eBool)-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the map's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "showTrie",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e ShowS",
          "source": "src/Data-ListTrie-Patricia-Map.html#showTrie",
          "type": "function"
        },
        "index": {
          "description": "Displays the map internal structure in an undefined way That is to say no program should depend on the function results",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "showTrie",
          "normalized": "TrieMap a b c-\u003eShowS",
          "package": "list-tries",
          "partial": "Trie",
          "signature": "TrieMap map k a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:showTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eshowTrie\u003c/a\u003e\u003c/code\u003e, but uses the given function to display the\n elements of the map. Still undefined.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "showTrieWith",
          "package": "list-tries",
          "signature": "(Maybe a -\u003e ShowS) -\u003e TrieMap map k a -\u003e ShowS",
          "source": "src/Data-ListTrie-Patricia-Map.html#showTrieWith",
          "type": "function"
        },
        "index": {
          "description": "Like showTrie but uses the given function to display the elements of the map Still undefined",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "showTrieWith",
          "normalized": "(Maybe a-\u003eShowS)-\u003eTrieMap b c a-\u003eShowS",
          "package": "list-tries",
          "partial": "Trie With",
          "signature": "(Maybe a-\u003eShowS)-\u003eTrieMap map k a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:showTrieWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The singleton map containing only the given key-value pair.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "singleton",
          "package": "list-tries",
          "signature": "[k] -\u003e a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "The singleton map containing only the given key-value pair",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "singleton",
          "normalized": "[a]-\u003eb-\u003eTrieMap c a b",
          "package": "list-tries",
          "signature": "[k]-\u003ea-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "size",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e n",
          "source": "src/Data-ListTrie-Patricia-Map.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map The value is built up lazily allowing for delivery of partial results without traversing the whole map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "size",
          "normalized": "TrieMap a b c-\u003ed",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of elements in the map. The value is built strictly:\n no value is returned until the map has been fully traversed.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "size'",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e n",
          "source": "src/Data-ListTrie-Patricia-Map.html#size%27",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the map The value is built strictly no value is returned until the map has been fully traversed",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "size'",
          "normalized": "TrieMap a b c-\u003ed",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:size-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the map in two about the given key. The first\n element of the resulting pair is a map containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "split",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#split",
          "type": "function"
        },
        "index": {
          "description": "min Splits the map in two about the given key The first element of the resulting pair is map containing the keys lesser than the given key the second contains those keys that are greater",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "split",
          "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,TrieMap b a c)",
          "package": "list-tries",
          "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns the value associated with\n the given key, if any.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "splitLookup",
          "package": "list-tries",
          "signature": "[k] -\u003e TrieMap map k a -\u003e (TrieMap map k a, Maybe a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#splitLookup",
          "type": "function"
        },
        "index": {
          "description": "min Like split but also returns the value associated with the given key if any",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "splitLookup",
          "normalized": "[a]-\u003eTrieMap b a c-\u003e(TrieMap b a c,Maybe c,TrieMap b a c)",
          "package": "list-tries",
          "partial": "Lookup",
          "signature": "[k]-\u003eTrieMap map k a-\u003e(TrieMap map k a,Maybe a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n map, the value associated with that prefix, if any, and the map with that\n prefix removed from all the keys as well as the map itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [(\"a\",1),(\"b\",2)])\n    == (\"\", Nothing, fromList [(\"a\",1),(\"b\",2)])\n splitPrefix (fromList [(\"a\",1),(\"ab\",2),(\"ac\",3)])\n    == (\"a\", Just 1, fromList [(\"b\",2),(\"c\",3)])\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "splitPrefix",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e ([k], Maybe a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#splitPrefix",
          "type": "function"
        },
        "index": {
          "description": "triple containing the longest common prefix of all keys in the map the value associated with that prefix if any and the map with that prefix removed from all the keys as well as the map itself Examples splitPrefix fromList Nothing fromList splitPrefix fromList ab ac Just fromList",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "splitPrefix",
          "normalized": "TrieMap a b c-\u003e([b],Maybe c,TrieMap a b c)",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "TrieMap map k a-\u003e([k],Maybe a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:splitPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "toAscList",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e [([k], a)]",
          "source": "src/Data-ListTrie-Patricia-Map.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Converts the map to list of the key-value pairs contained within in ascending order",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "toAscList",
          "normalized": "TrieMap a b c-\u003e[([b],c)]",
          "package": "list-tries",
          "partial": "Asc List",
          "signature": "TrieMap map k a-\u003e[([k],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in descending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "toDescList",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e [([k], a)]",
          "source": "src/Data-ListTrie-Patricia-Map.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Converts the map to list of the key-value pairs contained within in descending order",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "toDescList",
          "normalized": "TrieMap a b c-\u003e[([b],c)]",
          "package": "list-tries",
          "partial": "Desc List",
          "signature": "TrieMap map k a-\u003e[([k],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the map to a list of the key-value pairs contained\n within, in undefined order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "toList",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e [([k], a)]",
          "source": "src/Data-ListTrie-Patricia-Map.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts the map to list of the key-value pairs contained within in undefined order",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "toList",
          "normalized": "TrieMap a b c-\u003e[([b],c)]",
          "package": "list-tries",
          "partial": "List",
          "signature": "TrieMap map k a-\u003e[([k],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two maps: the map which contains\n all keys that are members of either map. This union is left-biased: if a key\n is a member of both maps, the value from the first map is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two maps are identical.\n\u003c/p\u003e\u003cpre\u003e union = unionWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "union",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#union",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The union of the two maps the map which contains all keys that are members of either map This union is left-biased if key is member of both maps the value from the first map is chosen The worst-case performance occurs when the two maps are identical union unionWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "union",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e)\n is applied strictly.\n\u003c/p\u003e\u003cpre\u003e union' = unionWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "union'",
          "package": "list-tries",
          "signature": "TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#union%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like union but the combining function const is applied strictly union unionWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "union'",
          "normalized": "TrieMap a b c-\u003eTrieMap a b c-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "TrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:union-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but the given function is used to\n determine the new value if a key is a member of both given maps. For a\n function \u003ccode\u003ef\u003c/code\u003e, the new value is \u003ccode\u003ef firstMapValue secondMapValue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like union but the given function is used to determine the new value if key is member of both given maps For function the new value is firstMapValue secondMapValue",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionWith%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like unionWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eTrieMap b c a-\u003eTrieMap b c a-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two\n values, the key is passed to the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like unionWith but in addition to the two values the key is passed to the combining function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e TrieMap map k a -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 Like unionWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionWithKey'",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003eTrieMap c a b-\u003eTrieMap c a b-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003eTrieMap map k a-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the maps: the map which contains all keys\n that are members of any of the maps. If a key is a member of multiple maps,\n the value that occurs in the earliest of the maps (according to the order of\n the given list) is chosen.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the maps are identical.\n\u003c/p\u003e\u003cpre\u003e unions = unionsWith const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unions",
          "package": "list-tries",
          "signature": "[TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unions",
          "type": "function"
        },
        "index": {
          "description": "sum The union of all the maps the map which contains all keys that are members of any of the maps If key is member of multiple maps the value that occurs in the earliest of the maps according to the order of the given list is chosen The worst-case performance occurs when all the maps are identical unions unionsWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unions",
          "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the combining function (\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e) is\n applied strictly.\n\u003c/p\u003e\u003cpre\u003e unions' = unionsWith' const\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unions'",
          "package": "list-tries",
          "signature": "[TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unions%27",
          "type": "function"
        },
        "index": {
          "description": "sum Like unions but the combining function const is applied strictly unions unionsWith const",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unions'",
          "normalized": "[TrieMap a b c]-\u003eTrieMap a b c",
          "package": "list-tries",
          "signature": "[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unions-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e, but the given function determines the final\n value if a key is a member of more than one map. The function is applied as\n a left fold over the values in the given list's order. For example:\n\u003c/p\u003e\u003cpre\u003e unionsWith (-) [fromList [(\"a\",1)],fromList [(\"a\",2)],fromList [(\"a\",3)]]\n    == fromList [(\"a\",(1-2)-3)]\n    == fromList [(\"a\",-4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWith",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "sum Like unions but the given function determines the final value if key is member of more than one map The function is applied as left fold over the values in the given list order For example unionsWith fromList fromList fromList fromList fromList",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWith'",
          "package": "list-tries",
          "signature": "(a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionsWith%27",
          "type": "function"
        },
        "index": {
          "description": "sum Like unionsWith but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[TrieMap b c a]-\u003eTrieMap b c a",
          "package": "list-tries",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e, but in addition to the two values under\n consideration, the key is passed to the combining function.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWithKey",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionsWithKey",
          "type": "function"
        },
        "index": {
          "description": "sum Like unionsWith but in addition to the two values under consideration the key is passed to the combining function",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eunionsWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is applied\n strictly.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWithKey'",
          "package": "list-tries",
          "signature": "([k] -\u003e a -\u003e a -\u003e a) -\u003e [TrieMap map k a] -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#unionsWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "sum Like unionsWithKey but the combining function is applied strictly",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "unionsWithKey'",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[TrieMap c a b]-\u003eTrieMap c a b",
          "package": "list-tries",
          "partial": "With Key'",
          "signature": "([k]-\u003ea-\u003ea-\u003ea)-\u003e[TrieMap map k a]-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:unionsWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Updates the value at the given key: if the given\n function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the value and its associated key are removed; if\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e a\u003c/code\u003e is returned, the old value is replaced with \u003ccode\u003ea\u003c/code\u003e. If the key is\n not a member of the map, the map is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "update",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e TrieMap map k a",
          "source": "src/Data-ListTrie-Patricia-Map.html#update",
          "type": "function"
        },
        "index": {
          "description": "min Updates the value at the given key if the given function returns Nothing the value and its associated key are removed if Just is returned the old value is replaced with If the key is not member of the map the map is unchanged",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003eTrieMap c b a",
          "package": "list-tries",
          "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003eTrieMap map k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, but also returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the original value,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not a member of the map.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "updateLookup",
          "package": "list-tries",
          "signature": "(a -\u003e Maybe a) -\u003e [k] -\u003e TrieMap map k a -\u003e (Maybe a, TrieMap map k a)",
          "source": "src/Data-ListTrie-Patricia-Map.html#updateLookup",
          "type": "function"
        },
        "index": {
          "description": "min Like update but also returns Just the original value or Nothing if the key is not member of the map",
          "hierarchy": "Data ListTrie Patricia Map",
          "module": "Data.ListTrie.Patricia.Map",
          "name": "updateLookup",
          "normalized": "(a-\u003eMaybe a)-\u003e[b]-\u003eTrieMap c b a-\u003e(Maybe a,TrieMap c b a)",
          "package": "list-tries",
          "partial": "Lookup",
          "signature": "(a-\u003eMaybe a)-\u003e[k]-\u003eTrieMap map k a-\u003e(Maybe a,TrieMap map k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Map.html#v:updateLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of enumerable elements, based on a Patricia trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n representation after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Set.Enum",
          "name": "Enum",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set-Enum.html",
          "type": "module"
        },
        "index": {
          "description": "set of lists of enumerable elements based on Patricia trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
          "hierarchy": "Data ListTrie Patricia Set Enum",
          "module": "Data.ListTrie.Patricia.Set.Enum",
          "name": "Enum",
          "package": "list-tries",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Patricia.Set.Enum",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set-Enum.html#TrieSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Patricia Set Enum",
          "module": "Data.ListTrie.Patricia.Set.Enum",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Enum.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be compared for equality, based on a\n Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Set.Eq",
          "name": "Eq",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "set of lists of elements that can be compared for equality based on Patricia trie",
          "hierarchy": "Data ListTrie Patricia Set Eq",
          "module": "Data.ListTrie.Patricia.Set.Eq",
          "name": "Eq",
          "package": "list-tries",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Patricia.Set.Eq",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set-Eq.html#TrieSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Patricia Set Eq",
          "module": "Data.ListTrie.Patricia.Set.Eq",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Eq.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be totally ordered, based on a\n Patricia trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Set.Ord",
          "name": "Ord",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "set of lists of elements that can be totally ordered based on Patricia trie",
          "hierarchy": "Data ListTrie Patricia Set Ord",
          "module": "Data.ListTrie.Patricia.Set.Ord",
          "name": "Ord",
          "package": "list-tries",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Patricia.Set.Ord",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set-Ord.html#TrieSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Patricia Set Ord",
          "module": "Data.ListTrie.Patricia.Set.Ord",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set-Ord.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a Patricia trie representing a set of lists,\n generalized over any type of map from element values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the set and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the set.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "Set",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set.html",
          "type": "module"
        },
        "index": {
          "description": "The base implementation of Patricia trie representing set of lists generalized over any type of map from element values to tries Worst-case complexities are given in terms of and refers to the number of keys in the set and to their maximum length refers to the length of key given to the function not any property of the set In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "Set",
          "package": "list-tries",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure itself: a set of keys of type \u003ccode\u003e[a]\u003c/code\u003e implemented as a\n trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ea\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eCMap\u003c/code\u003e type is internal, ignore it. For \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\n   instance is required: what this means is that \u003ccode\u003emap a v\u003c/code\u003e is expected to be\n   an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, given \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e v\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Patricia-Set.html#TrieSet",
          "type": "data"
        },
        "index": {
          "description": "The data structure itself set of keys of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The CMap type is internal ignore it For Eq and Ord an Eq instance is required what this means is that map is expected to be an instance of Eq given Eq The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Monoid instance defines mappend as union and mempty as empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the set. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"pre\" (fromList [\"a\",\"b\"]) == fromList [\"prea\",\"preb\"]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "addPrefix",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#addPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prepends the given key to all the keys of the set For example addPrefix pre fromList fromList prea preb",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "addPrefix",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:addPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the longest common prefix in the trie as sets,\n associated with their distinguishing key value. If the set contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [\"a\",\"abc\",\"abcd\"])\n    == Map.fromList [('b',fromList [\"c\",\"cd\"])]\n children (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "children",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e map a (TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#children",
          "type": "function"
        },
        "index": {
          "description": "The children of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "children",
          "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003emap a(TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as sets, associated with their distinguishing key value. If the set\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [\"abc\",\"abcd\"])\n    == Map.fromList [('a',fromList [\"bc\",\"bcd\"])]\n children1 (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "children1",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e map a (TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#children1",
          "type": "function"
        },
        "index": {
          "description": "The children of the first element of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "children1",
          "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003emap a(TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:children1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the set. If the key is not a member of\n the set, the set is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "delete",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Removes the key from the set If the key is not member of the set the set is unchanged",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "delete",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The set without its maximal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deleteMax",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with maxView The set without its maximal key or the unchanged original set if it was empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deleteMax",
          "normalized": "TrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The set without its minimal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deleteMin",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with minView The set without its minimal key or the unchanged original set if it was empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deleteMin",
          "normalized": "TrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the set, an empty set is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [\"a\",\"ab\",\"ac\"]) == fromList [\"\",\"b\",\"c\"]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to check whether a string is a member of a set, but\n you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting set is empty, the entire string cannot\n be a member of the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deletePrefix",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#deletePrefix",
          "type": "function"
        },
        "index": {
          "description": "The set which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the set an empty set is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to check whether string is member of set but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting set is empty the entire string cannot be member of the set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deletePrefix",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deletePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deleteSuffixes",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#deleteSuffixes",
          "type": "function"
        },
        "index": {
          "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "deleteSuffixes",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Suffixes",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:deleteSuffixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two sets: the set which\n contains all keys that are members of the first set and not members of the\n second set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "difference",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#difference",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The difference of the two sets the set which contains all keys that are members of the first set and not members of the second set The worst-case performance occurs when the two sets are identical",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "difference",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "empty",
          "package": "list-tries",
          "signature": "TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "empty",
          "package": "list-tries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The set of those keys in the set for which the given predicate\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "filter",
          "package": "list-tries",
          "signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#filter",
          "type": "function"
        },
        "index": {
          "description": "The set of those keys in the set for which the given predicate returns True",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "filter",
          "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the maximal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findMax",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Patricia-Set.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with maxView Just the maximal key in the set or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findMax",
          "normalized": "TrieSet a b-\u003eMaybe[b]",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findMin",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Patricia-Set.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with minView Just the minimal key in the set or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findMin",
          "normalized": "TrieSet a b-\u003eMaybe[b]",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which precedes the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findPredecessor",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Patricia-Set.html#findPredecessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the set which precedes the given key in order or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findPredecessor",
          "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
          "package": "list-tries",
          "partial": "Predecessor",
          "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findPredecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which succeeds the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findSuccessor",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Patricia-Set.html#findSuccessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the set which succeeds the given key in order or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "findSuccessor",
          "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
          "package": "list-tries",
          "partial": "Successor",
          "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:findSuccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldl",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldl",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldl'",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldl'",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlAsc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldlAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlAsc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlAsc'",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldlAsc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlAsc'",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Asc'",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlAsc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlDesc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldlDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlDesc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlDesc'",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldlDesc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldlDesc'",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Desc'",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldlDesc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldr",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldr",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldrAsc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldrAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toAscList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldrAsc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldrAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldrDesc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Patricia-Set.html#foldrDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toDescList representation",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "foldrDesc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:foldrDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a set from a list of keys.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "fromList",
          "package": "list-tries",
          "signature": "[[a]] -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates set from list of keys",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "fromList",
          "normalized": "[[a]]-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "List",
          "signature": "[[a]]-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key into the set. If the key is already a\n member of the set, the set is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "insert",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key into the set If the key is already member of the set the set is unchanged",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "insert",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two sets: the set which\n contains all keys that are members of both sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "intersection",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The intersection of the two sets the set which contains all keys that are members of both sets The worst-case performance occurs when the two sets are identical",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "intersection",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a proper subset of the\n second, i.e. the first is a subset of the second, but the sets are not\n equal.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "isProperSubsetOf",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Set.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first set is proper subset of the second i.e the first is subset of the second but the sets are not equal",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "isProperSubsetOf",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
          "package": "list-tries",
          "partial": "Proper Subset Of",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a subset of the second,\n i.e. all keys that are members of the first set are also members of the\n second set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "isSubsetOf",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Set.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first set is subset of the second i.e all keys that are members of the first set are also members of the second set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "isSubsetOf",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
          "package": "list-tries",
          "partial": "Subset Of",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [\"a\",\"ab\",\"ac\",\"abc\"])\n    == fromList [\"ab\",\"abc\"]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "lookupPrefix",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#lookupPrefix",
          "type": "function"
        },
        "index": {
          "description": "The set which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "lookupPrefix",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:lookupPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "map",
          "package": "list-tries",
          "signature": "([a] -\u003e [b]) -\u003e TrieSet map a -\u003e TrieSet map b",
          "source": "src/Data-ListTrie-Patricia-Set.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to all the keys in the set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "map",
          "normalized": "([a]-\u003e[b])-\u003eTrieSet c a-\u003eTrieSet c b",
          "package": "list-tries",
          "signature": "([a]-\u003e[b])-\u003eTrieSet map a-\u003eTrieSet map b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "mapIn",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e TrieSet map a -\u003e TrieSet map b",
          "source": "src/Data-ListTrie-Patricia-Set.html#mapIn",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the contents of all the keys in the set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "mapIn",
          "normalized": "(a-\u003eb)-\u003eTrieSet c a-\u003eTrieSet c b",
          "package": "list-tries",
          "partial": "In",
          "signature": "(a-\u003eb)-\u003eTrieSet map a-\u003eTrieSet map b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:mapIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "maxView",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the maximal key in the set If the set is empty Nothing and the original set are returned",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "maxView",
          "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "member",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Set.html#member",
          "type": "function"
        },
        "index": {
          "description": "min True iff the given key is contained within the set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "member",
          "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "minView",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#minView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the minimal key in the set If the set is empty Nothing and the original set are returned",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "minView",
          "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "notMember",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Set.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "min False iff the given key is contained within the set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "notMember",
          "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
          "package": "list-tries",
          "partial": "Member",
          "signature": "[a]-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "null",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Patricia-Set.html#null",
          "type": "function"
        },
        "index": {
          "description": "True iff the set is empty",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "null",
          "normalized": "TrieSet a b-\u003eBool",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of sets: the first element contains those keys for which\n the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second element contains those\n for which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "partition",
          "package": "list-tries",
          "signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#partition",
          "type": "function"
        },
        "index": {
          "description": "pair of sets the first element contains those keys for which the given predicate returns True and the second element contains those for which it was False",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "partition",
          "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
          "package": "list-tries",
          "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the set's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "showTrie",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e ShowS",
          "source": "src/Data-ListTrie-Patricia-Set.html#showTrie",
          "type": "function"
        },
        "index": {
          "description": "Displays the set internal structure in an undefined way That is to say no program should depend on the function results",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "showTrie",
          "normalized": "TrieSet a b-\u003eShowS",
          "package": "list-tries",
          "partial": "Trie",
          "signature": "TrieSet map a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:showTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The singleton set containing only the given key.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "singleton",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "The singleton set containing only the given key",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "singleton",
          "normalized": "[a]-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "size",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e n",
          "source": "src/Data-ListTrie-Patricia-Set.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of keys in the set The value is built up lazily allowing for delivery of partial results without traversing the whole set",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "size",
          "normalized": "TrieSet a b-\u003ec",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built strictly: no\n value is returned until the set has been fully traversed.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "size'",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e n",
          "source": "src/Data-ListTrie-Patricia-Set.html#size%27",
          "type": "function"
        },
        "index": {
          "description": "The number of keys in the set The value is built strictly no value is returned until the set has been fully traversed",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "size'",
          "normalized": "TrieSet a b-\u003ec",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:size-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the set in two about the given key. The first\n element of the resulting pair is a set containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "split",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#split",
          "type": "function"
        },
        "index": {
          "description": "min Splits the set in two about the given key The first element of the resulting pair is set containing the keys lesser than the given key the second contains those keys that are greater",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "split",
          "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns whether the given key was a\n member of the set or not.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "splitMember",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, Bool, TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#splitMember",
          "type": "function"
        },
        "index": {
          "description": "min Like split but also returns whether the given key was member of the set or not",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "splitMember",
          "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,Bool,TrieSet b a)",
          "package": "list-tries",
          "partial": "Member",
          "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,Bool,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:splitMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n set, whether that prefix was a member of the set, and the set with that\n prefix removed from all the keys as well as the set itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [\"a\",\"b\"]) == (\"\", False, fromList [\"a\",\"b\"])\n splitPrefix (fromList [\"a\",\"ab\",\"ac\"]) == (\"a\", True, fromList [\"b\",\"c\"])\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "splitPrefix",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e ([a], Bool, TrieSet map a)",
          "source": "src/Data-ListTrie-Patricia-Set.html#splitPrefix",
          "type": "function"
        },
        "index": {
          "description": "triple containing the longest common prefix of all keys in the set whether that prefix was member of the set and the set with that prefix removed from all the keys as well as the set itself Examples splitPrefix fromList False fromList splitPrefix fromList ab ac True fromList",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "splitPrefix",
          "normalized": "TrieSet a b-\u003e([b],Bool,TrieSet a b)",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "TrieSet map a-\u003e([a],Bool,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:splitPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n ascending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "toAscList",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e [[a]]",
          "source": "src/Data-ListTrie-Patricia-Set.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Converts the set to list of the keys contained within in ascending order",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "toAscList",
          "normalized": "TrieSet a b-\u003e[[b]]",
          "package": "list-tries",
          "partial": "Asc List",
          "signature": "TrieSet map a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n descending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "toDescList",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e [[a]]",
          "source": "src/Data-ListTrie-Patricia-Set.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Converts the set to list of the keys contained within in descending order",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "toDescList",
          "normalized": "TrieSet a b-\u003e[[b]]",
          "package": "list-tries",
          "partial": "Desc List",
          "signature": "TrieSet map a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n undefined order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "toList",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e [[a]]",
          "source": "src/Data-ListTrie-Patricia-Set.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts the set to list of the keys contained within in undefined order",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "toList",
          "normalized": "TrieSet a b-\u003e[[b]]",
          "package": "list-tries",
          "partial": "List",
          "signature": "TrieSet map a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two sets: the set which contains\n all keys that are members of either set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "union",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#union",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The union of the two sets the set which contains all keys that are members of either set The worst-case performance occurs when the two sets are identical",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "union",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the sets: the set which contains all keys\n that are members of any of the sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "unions",
          "package": "list-tries",
          "signature": "[TrieSet map a] -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Patricia-Set.html#unions",
          "type": "function"
        },
        "index": {
          "description": "sum The union of all the sets the set which contains all keys that are members of any of the sets The worst-case performance occurs when all the sets are identical",
          "hierarchy": "Data ListTrie Patricia Set",
          "module": "Data.ListTrie.Patricia.Set",
          "name": "unions",
          "normalized": "[TrieSet a b]-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "[TrieSet map a]-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Patricia-Set.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of enumerable elements, based on a trie.\n\u003c/p\u003e\u003cp\u003eNote that those operations which require an ordering, such as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e,\n do not compare the elements themselves, but rather their Int representation\n after \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Set.Enum",
          "name": "Enum",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set-Enum.html",
          "type": "module"
        },
        "index": {
          "description": "set of lists of enumerable elements based on trie Note that those operations which require an ordering such as toAscList do not compare the elements themselves but rather their Int representation after fromEnum",
          "hierarchy": "Data ListTrie Set Enum",
          "module": "Data.ListTrie.Set.Enum",
          "name": "Enum",
          "package": "list-tries",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Set.Enum",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set-Enum.html#TrieSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Set Enum",
          "module": "Data.ListTrie.Set.Enum",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Enum.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be compared for equality, based on a\n trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Set.Eq",
          "name": "Eq",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "set of lists of elements that can be compared for equality based on trie",
          "hierarchy": "Data ListTrie Set Eq",
          "module": "Data.ListTrie.Set.Eq",
          "name": "Eq",
          "package": "list-tries",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Set.Eq",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set-Eq.html#TrieSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Set Eq",
          "module": "Data.ListTrie.Set.Eq",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Eq.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA set of lists of elements that can be totally ordered, based on a trie.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Set.Ord",
          "name": "Ord",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "set of lists of elements that can be totally ordered based on trie",
          "hierarchy": "Data ListTrie Set Ord",
          "module": "Data.ListTrie.Set.Ord",
          "name": "Ord",
          "package": "list-tries",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListTrie.Set.Ord",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set-Ord.html#TrieSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ListTrie Set Ord",
          "module": "Data.ListTrie.Set.Ord",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set-Ord.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base implementation of a trie representing a set of lists, generalized\n over any type of map from key values to tries.\n\u003c/p\u003e\u003cp\u003eWorst-case complexities are given in terms of \u003ccode\u003en\u003c/code\u003e, \u003ccode\u003em\u003c/code\u003e, and \u003ccode\u003es\u003c/code\u003e. \u003ccode\u003en\u003c/code\u003e refers\n to the number of keys in the set and \u003ccode\u003em\u003c/code\u003e to their maximum length. \u003ccode\u003es\u003c/code\u003e refers\n to the length of a key given to the function, not any property of the set.\n\u003c/p\u003e\u003cp\u003eIn addition, the trie's branching factor plays a part in almost every\n operation, but the complexity depends on the underlying \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. Thus, for\n instance, \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e is actually \u003ccode\u003eO(m f(b))\u003c/code\u003e where \u003ccode\u003ef(b)\u003c/code\u003e is the complexity of\n a lookup operation on the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e used. This complexity depends on the\n underlying operation, which is not part of the specification of the visible\n function. Thus it could change whilst affecting the complexity only for\n certain Map types: hence this \"b factor\" is not shown explicitly.\n\u003c/p\u003e\u003cp\u003eDisclaimer: the complexities have not been proven.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListTrie.Set",
          "name": "Set",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set.html",
          "type": "module"
        },
        "index": {
          "description": "The base implementation of trie representing set of lists generalized over any type of map from key values to tries Worst-case complexities are given in terms of and refers to the number of keys in the set and to their maximum length refers to the length of key given to the function not any property of the set In addition the trie branching factor plays part in almost every operation but the complexity depends on the underlying Map Thus for instance member is actually where is the complexity of lookup operation on the Map used This complexity depends on the underlying operation which is not part of the specification of the visible function Thus it could change whilst affecting the complexity only for certain Map types hence this factor is not shown explicitly Disclaimer the complexities have not been proven",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "Set",
          "package": "list-tries",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure itself: a set of keys of type \u003ccode\u003e[a]\u003c/code\u003e implemented as a\n trie, using \u003ccode\u003emap\u003c/code\u003e to map keys of type \u003ccode\u003ea\u003c/code\u003e to sub-tries.\n\u003c/p\u003e\u003cp\u003eRegarding the instances:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eCMap\u003c/code\u003e type is internal, ignore it. For \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\n   instance is required: what this means is that \u003ccode\u003emap a v\u003c/code\u003e is expected to be\n   an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, given \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e\u003ccode\u003e v\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint for the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance is misleading: it is needed\n   only because \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e is a superclass of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance defines \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e as\n   \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListTrie.Set",
          "name": "TrieSet",
          "package": "list-tries",
          "source": "src/Data-ListTrie-Set.html#TrieSet",
          "type": "data"
        },
        "index": {
          "description": "The data structure itself set of keys of type implemented as trie using map to map keys of type to sub-tries Regarding the instances The CMap type is internal ignore it For Eq and Ord an Eq instance is required what this means is that map is expected to be an instance of Eq given Eq The Eq constraint for the Ord instance is misleading it is needed only because Eq is superclass of Ord The Monoid instance defines mappend as union and mempty as empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "TrieSet",
          "package": "list-tries",
          "partial": "Trie Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#t:TrieSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Prepends the given key to all the keys of the set. For example:\n\u003c/p\u003e\u003cpre\u003e addPrefix \"pre\" (fromList [\"a\",\"b\"]) == fromList [\"prea\",\"preb\"]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Set",
          "name": "addPrefix",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#addPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prepends the given key to all the keys of the set For example addPrefix pre fromList fromList prea preb",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "addPrefix",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:addPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. The children of the longest common prefix in the trie as sets,\n associated with their distinguishing key value. If the set contains less\n than two keys, this function will return an empty map. Examples;\n\u003c/p\u003e\u003cpre\u003e children (fromList [\"a\",\"abc\",\"abcd\"])\n    == Map.fromList [('b',fromList [\"c\",\"cd\"])]\n children (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Set",
          "name": "children",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e map a (TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#children",
          "type": "function"
        },
        "index": {
          "description": "The children of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map Examples children fromList abc abcd Map.fromList fromList cd children fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "children",
          "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003emap a(TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The children of the first element of the longest common prefix in\n the trie as sets, associated with their distinguishing key value. If the set\n contains less than two keys, this function will return an empty map.\n\u003c/p\u003e\u003cp\u003eIf the longest common prefix of all keys in the trie is the empty list, this\n function is equivalent to \u003ccode\u003e\u003ca\u003echildren\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e children1 (fromList [\"abc\",\"abcd\"])\n    == Map.fromList [('a',fromList [\"bc\",\"bcd\"])]\n children1 (fromList [\"b\",\"c\"])\n    == Map.fromList [('b',fromList [\"\"]),('c',fromList [\"\"])]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Set",
          "name": "children1",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e map a (TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#children1",
          "type": "function"
        },
        "index": {
          "description": "The children of the first element of the longest common prefix in the trie as sets associated with their distinguishing key value If the set contains less than two keys this function will return an empty map If the longest common prefix of all keys in the trie is the empty list this function is equivalent to children Examples children1 fromList abc abcd Map.fromList fromList bc bcd children1 fromList Map.fromList fromList fromList",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "children1",
          "normalized": "TrieSet a b-\u003ea b(TrieSet a b)",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003emap a(TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:children1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Removes the key from the set. If the key is not a member of\n the set, the set is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "delete",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#delete",
          "type": "function"
        },
        "index": {
          "description": "min Removes the key from the set If the key is not member of the set the set is unchanged",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "delete",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. The set without its maximal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "deleteMax",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with maxView The set without its maximal key or the unchanged original set if it was empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "deleteMax",
          "normalized": "TrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. The set without its minimal\n key, or the unchanged original set if it was empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "deleteMin",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Like snd composed with minView The set without its minimal key or the unchanged original set if it was empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "deleteMin",
          "normalized": "TrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix, with the prefix removed from each key. If the given key is not a\n prefix of any key in the set, an empty set is returned. For example:\n\u003c/p\u003e\u003cpre\u003e deletePrefix \"a\" (fromList [\"a\",\"ab\",\"ac\"]) == fromList [\"\",\"b\",\"c\"]\n\u003c/pre\u003e\u003cp\u003eThis function can be used, for instance, to reduce potentially expensive I/O\n operations: if you need to check whether a string is a member of a set, but\n you only have a prefix of it and retrieving the rest is an expensive\n operation, calling \u003ccode\u003e\u003ca\u003edeletePrefix\u003c/a\u003e\u003c/code\u003e with what you have might allow you to\n avoid the operation: if the resulting set is empty, the entire string cannot\n be a member of the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "deletePrefix",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#deletePrefix",
          "type": "function"
        },
        "index": {
          "description": "The set which contains all keys of which the given key is prefix with the prefix removed from each key If the given key is not prefix of any key in the set an empty set is returned For example deletePrefix fromList ab ac fromList This function can be used for instance to reduce potentially expensive operations if you need to check whether string is member of set but you only have prefix of it and retrieving the rest is an expensive operation calling deletePrefix with what you have might allow you to avoid the operation if the resulting set is empty the entire string cannot be member of the set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "deletePrefix",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deletePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. Deletes all keys which are suffixes of the given key. For example:\n\u003c/p\u003e\u003cpre\u003e deleteSuffixes \"ab\" (fromList $ zip [\"a\",\"ab\",\"ac\",\"b\",\"abc\"] [1..])\n    == fromList [(\"a\",1),(\"ac\",3),(\"b\",4)]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Set",
          "name": "deleteSuffixes",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#deleteSuffixes",
          "type": "function"
        },
        "index": {
          "description": "Deletes all keys which are suffixes of the given key For example deleteSuffixes ab fromList zip ab ac abc fromList ac",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "deleteSuffixes",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Suffixes",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:deleteSuffixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The difference of the two sets: the set which\n contains all keys that are members of the first set and not members of the\n second set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "difference",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#difference",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The difference of the two sets the set which contains all keys that are members of the first set and not members of the second set The worst-case performance occurs when the two sets are identical",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "difference",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. The empty set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "empty",
          "package": "list-tries",
          "signature": "TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "empty",
          "package": "list-tries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The set of those keys in the set for which the given predicate\n returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "filter",
          "package": "list-tries",
          "signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#filter",
          "type": "function"
        },
        "index": {
          "description": "The set of those keys in the set for which the given predicate returns True",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "filter",
          "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003emaxView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the maximal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "findMax",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Set.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with maxView Just the maximal key in the set or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "findMax",
          "normalized": "TrieSet a b-\u003eMaybe[b]",
          "package": "list-tries",
          "partial": "Max",
          "signature": "TrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the minimal key in the\n set, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "findMin",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Set.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Like fst composed with minView Just the minimal key in the set or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "findMin",
          "normalized": "TrieSet a b-\u003eMaybe[b]",
          "package": "list-tries",
          "partial": "Min",
          "signature": "TrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which precedes the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "findPredecessor",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Set.html#findPredecessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the set which precedes the given key in order or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "findPredecessor",
          "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
          "package": "list-tries",
          "partial": "Predecessor",
          "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findPredecessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the key of the set which succeeds the given key in order,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "findSuccessor",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Maybe [a]",
          "source": "src/Data-ListTrie-Set.html#findSuccessor",
          "type": "function"
        },
        "index": {
          "description": "Just the key of the set which succeeds the given key in order or Nothing if the set is empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "findSuccessor",
          "normalized": "[a]-\u003eTrieSet b a-\u003eMaybe[a]",
          "package": "list-tries",
          "partial": "Successor",
          "signature": "[a]-\u003eTrieSet map a-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:findSuccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldl",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldl",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldl'",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldl'",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldlAsc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldlAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldlAsc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldlAsc'",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldlAsc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toAscList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldlAsc'",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Asc'",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlAsc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldlDesc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldlDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldlDesc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldl'\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e\n representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldlDesc'",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldlDesc%27",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldl on the toDescList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldlDesc'",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Desc'",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldlDesc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldr",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldr",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldrAsc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldrAsc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toAscList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldrAsc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Asc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldrAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Equivalent to a list \u003ccode\u003efoldr\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003etoDescList\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "foldrDesc",
          "package": "list-tries",
          "signature": "([a] -\u003e b -\u003e b) -\u003e b -\u003e TrieSet map a -\u003e b",
          "source": "src/Data-ListTrie-Set.html#foldrDesc",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to list foldr on the toDescList representation",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "foldrDesc",
          "normalized": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet c a-\u003eb",
          "package": "list-tries",
          "partial": "Desc",
          "signature": "([a]-\u003eb-\u003eb)-\u003eb-\u003eTrieSet map a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:foldrDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Creates a set from a list of keys.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "fromList",
          "package": "list-tries",
          "signature": "[[a]] -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates set from list of keys",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "fromList",
          "normalized": "[[a]]-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "List",
          "signature": "[[a]]-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Inserts the key into the set. If the key is already a\n member of the set, the set is unchanged.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "insert",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#insert",
          "type": "function"
        },
        "index": {
          "description": "min Inserts the key into the set If the key is already member of the set the set is unchanged",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "insert",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The intersection of the two sets: the set which\n contains all keys that are members of both sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "intersection",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The intersection of the two sets the set which contains all keys that are members of both sets The worst-case performance occurs when the two sets are identical",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "intersection",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a proper subset of the\n second, i.e. the first is a subset of the second, but the sets are not\n equal.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "isProperSubsetOf",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Set.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first set is proper subset of the second i.e the first is subset of the second but the sets are not equal",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "isProperSubsetOf",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
          "package": "list-tries",
          "partial": "Proper Subset Of",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first set is a subset of the second,\n i.e. all keys that are members of the first set are also members of the\n second set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "isSubsetOf",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Set.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 True iff the first set is subset of the second i.e all keys that are members of the first set are also members of the second set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "isSubsetOf",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eBool",
          "package": "list-tries",
          "partial": "Subset Of",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The set which contains all keys of which the given key is a\n prefix. For example:\n\u003c/p\u003e\u003cpre\u003e lookupPrefix \"ab\" (fromList [\"a\",\"ab\",\"ac\",\"abc\"])\n    == fromList [\"ab\",\"abc\"]\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Set",
          "name": "lookupPrefix",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#lookupPrefix",
          "type": "function"
        },
        "index": {
          "description": "The set which contains all keys of which the given key is prefix For example lookupPrefix ab fromList ab ac abc fromList ab abc",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "lookupPrefix",
          "normalized": "[a]-\u003eTrieSet b a-\u003eTrieSet b a",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "[a]-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:lookupPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to all the keys in the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "map",
          "package": "list-tries",
          "signature": "([a] -\u003e [b]) -\u003e TrieSet map a -\u003e TrieSet map b",
          "source": "src/Data-ListTrie-Set.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to all the keys in the set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "map",
          "normalized": "([a]-\u003e[b])-\u003eTrieSet c a-\u003eTrieSet c b",
          "package": "list-tries",
          "signature": "([a]-\u003e[b])-\u003eTrieSet map a-\u003eTrieSet map b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Apply the given function to the contents of all the keys in the\n set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "mapIn",
          "package": "list-tries",
          "signature": "(a -\u003e b) -\u003e TrieSet map a -\u003e TrieSet map b",
          "source": "src/Data-ListTrie-Set.html#mapIn",
          "type": "function"
        },
        "index": {
          "description": "Apply the given function to the contents of all the keys in the set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "mapIn",
          "normalized": "(a-\u003eb)-\u003eTrieSet c a-\u003eTrieSet c b",
          "package": "list-tries",
          "partial": "In",
          "signature": "(a-\u003eb)-\u003eTrieSet map a-\u003eTrieSet map b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:mapIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the maximal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "maxView",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#maxView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the maximal key in the set If the set is empty Nothing and the original set are returned",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "maxView",
          "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "member",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Set.html#member",
          "type": "function"
        },
        "index": {
          "description": "min True iff the given key is contained within the set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "member",
          "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. Removes and returns the minimal key in the set. If the set is\n empty, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and the original set are returned.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "minView",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e (Maybe [a], TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#minView",
          "type": "function"
        },
        "index": {
          "description": "Removes and returns the minimal key in the set If the set is empty Nothing and the original set are returned",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "minView",
          "normalized": "TrieSet a b-\u003e(Maybe[b],TrieSet a b)",
          "package": "list-tries",
          "partial": "View",
          "signature": "TrieSet map a-\u003e(Maybe[a],TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e iff the given key is contained within the set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "notMember",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Set.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "min False iff the given key is contained within the set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "notMember",
          "normalized": "[a]-\u003eTrieSet b a-\u003eBool",
          "package": "list-tries",
          "partial": "Member",
          "signature": "[a]-\u003eTrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(1)\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the set is empty.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "null",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e Bool",
          "source": "src/Data-ListTrie-Set.html#null",
          "type": "function"
        },
        "index": {
          "description": "True iff the set is empty",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "null",
          "normalized": "TrieSet a b-\u003eBool",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. A pair of sets: the first element contains those keys for which\n the given predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and the second element contains those\n for which it was \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "partition",
          "package": "list-tries",
          "signature": "([a] -\u003e Bool) -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#partition",
          "type": "function"
        },
        "index": {
          "description": "pair of sets the first element contains those keys for which the given predicate returns True and the second element contains those for which it was False",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "partition",
          "normalized": "([a]-\u003eBool)-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
          "package": "list-tries",
          "signature": "([a]-\u003eBool)-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Displays the set's internal structure in an undefined way. That\n is to say, no program should depend on the function's results.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "showTrie",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e ShowS",
          "source": "src/Data-ListTrie-Set.html#showTrie",
          "type": "function"
        },
        "index": {
          "description": "Displays the set internal structure in an undefined way That is to say no program should depend on the function results",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "showTrie",
          "normalized": "TrieSet a b-\u003eShowS",
          "package": "list-tries",
          "partial": "Trie",
          "signature": "TrieSet map a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:showTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(s)\u003c/code\u003e. The singleton set containing only the given key.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "singleton",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "The singleton set containing only the given key",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "singleton",
          "normalized": "[a]-\u003eTrieSet b a",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built up lazily,\n allowing for delivery of partial results without traversing the whole set.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "size",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e n",
          "source": "src/Data-ListTrie-Set.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of keys in the set The value is built up lazily allowing for delivery of partial results without traversing the whole set",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "size",
          "normalized": "TrieSet a b-\u003ec",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. The number of keys in the set. The value is built strictly: no\n value is returned until the set has been fully traversed.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "size'",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e n",
          "source": "src/Data-ListTrie-Set.html#size%27",
          "type": "function"
        },
        "index": {
          "description": "The number of keys in the set The value is built strictly no value is returned until the set has been fully traversed",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "size'",
          "normalized": "TrieSet a b-\u003ec",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:size-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Splits the set in two about the given key. The first\n element of the resulting pair is a set containing the keys lesser than the\n given key; the second contains those keys that are greater.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "split",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#split",
          "type": "function"
        },
        "index": {
          "description": "min Splits the set in two about the given key The first element of the resulting pair is set containing the keys lesser than the given key the second contains those keys that are greater",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "split",
          "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,TrieSet b a)",
          "package": "list-tries",
          "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(m,s))\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e, but also returns whether the given key was a\n member of the set or not.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "splitMember",
          "package": "list-tries",
          "signature": "[a] -\u003e TrieSet map a -\u003e (TrieSet map a, Bool, TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#splitMember",
          "type": "function"
        },
        "index": {
          "description": "min Like split but also returns whether the given key was member of the set or not",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "splitMember",
          "normalized": "[a]-\u003eTrieSet b a-\u003e(TrieSet b a,Bool,TrieSet b a)",
          "package": "list-tries",
          "partial": "Member",
          "signature": "[a]-\u003eTrieSet map a-\u003e(TrieSet map a,Bool,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:splitMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(m)\u003c/code\u003e. A triple containing the longest common prefix of all keys in the\n set, whether that prefix was a member of the set, and the set with that\n prefix removed from all the keys as well as the set itself. Examples:\n\u003c/p\u003e\u003cpre\u003e splitPrefix (fromList [\"a\",\"b\"]) == (\"\", False, fromList [\"a\",\"b\"])\n splitPrefix (fromList [\"a\",\"ab\",\"ac\"]) == (\"a\", True, fromList [\"b\",\"c\"])\n\u003c/pre\u003e",
          "module": "Data.ListTrie.Set",
          "name": "splitPrefix",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e ([a], Bool, TrieSet map a)",
          "source": "src/Data-ListTrie-Set.html#splitPrefix",
          "type": "function"
        },
        "index": {
          "description": "triple containing the longest common prefix of all keys in the set whether that prefix was member of the set and the set with that prefix removed from all the keys as well as the set itself Examples splitPrefix fromList False fromList splitPrefix fromList ab ac True fromList",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "splitPrefix",
          "normalized": "TrieSet a b-\u003e([b],Bool,TrieSet a b)",
          "package": "list-tries",
          "partial": "Prefix",
          "signature": "TrieSet map a-\u003e([a],Bool,TrieSet map a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:splitPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n ascending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "toAscList",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e [[a]]",
          "source": "src/Data-ListTrie-Set.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Converts the set to list of the keys contained within in ascending order",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "toAscList",
          "normalized": "TrieSet a b-\u003e[[b]]",
          "package": "list-tries",
          "partial": "Asc List",
          "signature": "TrieSet map a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n descending order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "toDescList",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e [[a]]",
          "source": "src/Data-ListTrie-Set.html#toDescList",
          "type": "function"
        },
        "index": {
          "description": "Converts the set to list of the keys contained within in descending order",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "toDescList",
          "normalized": "TrieSet a b-\u003e[[b]]",
          "package": "list-tries",
          "partial": "Desc List",
          "signature": "TrieSet map a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(n m)\u003c/code\u003e. Converts the set to a list of the keys contained within, in\n undefined order.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "toList",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e [[a]]",
          "source": "src/Data-ListTrie-Set.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Converts the set to list of the keys contained within in undefined order",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "toList",
          "normalized": "TrieSet a b-\u003e[[b]]",
          "package": "list-tries",
          "partial": "List",
          "signature": "TrieSet map a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(min(n1 m1,n2 m2))\u003c/code\u003e. The union of the two sets: the set which contains\n all keys that are members of either set.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when the two sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "union",
          "package": "list-tries",
          "signature": "TrieSet map a -\u003e TrieSet map a -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#union",
          "type": "function"
        },
        "index": {
          "description": "min n1 m1 n2 m2 The union of the two sets the set which contains all keys that are members of either set The worst-case performance occurs when the two sets are identical",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "union",
          "normalized": "TrieSet a b-\u003eTrieSet a b-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "TrieSet map a-\u003eTrieSet map a-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eO(sum(n))\u003c/code\u003e. The union of all the sets: the set which contains all keys\n that are members of any of the sets.\n\u003c/p\u003e\u003cp\u003eThe worst-case performance occurs when all the sets are identical.\n\u003c/p\u003e",
          "module": "Data.ListTrie.Set",
          "name": "unions",
          "package": "list-tries",
          "signature": "[TrieSet map a] -\u003e TrieSet map a",
          "source": "src/Data-ListTrie-Set.html#unions",
          "type": "function"
        },
        "index": {
          "description": "sum The union of all the sets the set which contains all keys that are members of any of the sets The worst-case performance occurs when all the sets are identical",
          "hierarchy": "Data ListTrie Set",
          "module": "Data.ListTrie.Set",
          "name": "unions",
          "normalized": "[TrieSet a b]-\u003eTrieSet a b",
          "package": "list-tries",
          "signature": "[TrieSet map a]-\u003eTrieSet map a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-tries/docs/Data-ListTrie-Set.html#v:unions"
      }
    }
  ]
]