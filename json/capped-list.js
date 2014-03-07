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
        "word": "capped-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA list-like type for lazy sequences, with a user-defined termination value.\n\u003c/p\u003e\u003cp\u003eThis module uses common names and so is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.CappedList as CL\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.CappedList",
          "name": "CappedList",
          "package": "capped-list",
          "source": "src/Data-CappedList.html",
          "type": "module"
        },
        "index": {
          "description": "list-like type for lazy sequences with user-defined termination value This module uses common names and so is designed to be imported qualified import qualified Data.CappedList as CL",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "CappedList",
          "package": "capped-list",
          "partial": "Capped List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list-like type for lazy sequences, with a user-defined termination value.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "CappedList",
          "package": "capped-list",
          "source": "src/Data-CappedList.html#CappedList",
          "type": "data"
        },
        "index": {
          "description": "list-like type for lazy sequences with user-defined termination value",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "CappedList",
          "package": "capped-list",
          "partial": "Capped List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#t:CappedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CappedList",
          "name": "Cap",
          "package": "capped-list",
          "signature": "Cap cap",
          "source": "src/Data-CappedList.html#CappedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "Cap",
          "package": "capped-list",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:Cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CappedList",
          "name": "Next",
          "package": "capped-list",
          "signature": "Next a (CappedList cap a)",
          "source": "src/Data-CappedList.html#CappedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "Next",
          "package": "capped-list",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "appendL",
          "package": "capped-list",
          "signature": "CappedList cap1 a -\u003e CappedList cap2 a -\u003e (cap2, CappedList cap1 a)",
          "source": "src/Data-CappedList.html#appendL",
          "type": "function"
        },
        "index": {
          "description": "Like the standard function",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "appendL",
          "normalized": "CappedList a b-\u003eCappedList a b-\u003e(a,CappedList a b)",
          "package": "capped-list",
          "signature": "CappedList cap a-\u003eCappedList cap a-\u003e(cap,CappedList cap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:appendL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eThe second list's \"cap\" will be discarded; to preserve the cap, use\n \u003ccode\u003e\u003ca\u003eappendL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "appendL_",
          "package": "capped-list",
          "signature": "CappedList cap1 a -\u003e CappedList cap2 a -\u003e CappedList cap1 a",
          "source": "src/Data-CappedList.html#appendL_",
          "type": "function"
        },
        "index": {
          "description": "Like the standard function The second list cap will be discarded to preserve the cap use appendL",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "appendL_",
          "normalized": "CappedList a b-\u003eCappedList a b-\u003eCappedList a b",
          "package": "capped-list",
          "signature": "CappedList cap a-\u003eCappedList cap a-\u003eCappedList cap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:appendL_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "appendR",
          "package": "capped-list",
          "signature": "CappedList cap1 a -\u003e CappedList cap2 a -\u003e (cap1, CappedList cap2 a)",
          "source": "src/Data-CappedList.html#appendR",
          "type": "function"
        },
        "index": {
          "description": "Like the standard function",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "appendR",
          "normalized": "CappedList a b-\u003eCappedList a b-\u003e(a,CappedList a b)",
          "package": "capped-list",
          "signature": "CappedList cap a-\u003eCappedList cap a-\u003e(cap,CappedList cap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:appendR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eThe first list's \"cap\" will be discarded; to preserve the cap, use\n \u003ccode\u003e\u003ca\u003eappendR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "appendR_",
          "package": "capped-list",
          "signature": "CappedList cap1 a -\u003e CappedList cap2 a -\u003e CappedList cap2 a",
          "source": "src/Data-CappedList.html#appendR_",
          "type": "function"
        },
        "index": {
          "description": "Like the standard function The first list cap will be discarded to preserve the cap use appendR",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "appendR_",
          "normalized": "CappedList a b-\u003eCappedList a b-\u003eCappedList a b",
          "package": "capped-list",
          "signature": "CappedList cap a-\u003eCappedList cap a-\u003eCappedList cap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:appendR_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two capped lists, merging the caps together using a user-provided\n function.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "appendWith",
          "package": "capped-list",
          "signature": "(c -\u003e d -\u003e e) -\u003e CappedList c a -\u003e CappedList d a -\u003e CappedList e a",
          "source": "src/Data-CappedList.html#appendWith",
          "type": "function"
        },
        "index": {
          "description": "Append two capped lists merging the caps together using user-provided function",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "appendWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eCappedList a d-\u003eCappedList b d-\u003eCappedList c d",
          "package": "capped-list",
          "partial": "With",
          "signature": "(c-\u003ed-\u003ee)-\u003eCappedList c a-\u003eCappedList d a-\u003eCappedList e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:appendWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "concatMapM",
          "package": "capped-list",
          "signature": "(a -\u003e CappedList cap b) -\u003e CappedList cap a -\u003e CappedList cap b",
          "source": "src/Data-CappedList.html#concatMapM",
          "type": "function"
        },
        "index": {
          "description": "Like the standard concatMap function",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "concatMapM",
          "normalized": "(a-\u003eCappedList b c)-\u003eCappedList b a-\u003eCappedList b c",
          "package": "capped-list",
          "partial": "Map",
          "signature": "(a-\u003eCappedList cap b)-\u003eCappedList cap a-\u003eCappedList cap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e function, but accepting an extra\n parameter to handle \u003ccode\u003e\u003ca\u003eCap\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "foldl",
          "package": "capped-list",
          "signature": "(b -\u003e a -\u003e b) -\u003e (cap -\u003e b) -\u003e CappedList cap a -\u003e b",
          "source": "src/Data-CappedList.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Like the standard foldl function but accepting an extra parameter to handle Cap values",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003e(c-\u003ea)-\u003eCappedList c b-\u003ea",
          "package": "capped-list",
          "signature": "(b-\u003ea-\u003eb)-\u003e(cap-\u003eb)-\u003eCappedList cap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e function, but accepting an extra\n parameter to handle \u003ccode\u003e\u003ca\u003eCap\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "foldr",
          "package": "capped-list",
          "signature": "(a -\u003e b -\u003e b) -\u003e (cap -\u003e b) -\u003e CappedList cap a -\u003e b",
          "source": "src/Data-CappedList.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Like the standard foldr function but accepting an extra parameter to handle Cap values",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003e(c-\u003eb)-\u003eCappedList c a-\u003eb",
          "package": "capped-list",
          "signature": "(a-\u003eb-\u003eb)-\u003e(cap-\u003eb)-\u003eCappedList cap a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a standard list and cap to a capped list.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "fromList",
          "package": "capped-list",
          "signature": "[a] -\u003e cap -\u003e CappedList cap a",
          "source": "src/Data-CappedList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert standard list and cap to capped list",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "fromList",
          "normalized": "[a]-\u003eb-\u003eCappedList b a",
          "package": "capped-list",
          "partial": "List",
          "signature": "[a]-\u003ecap-\u003eCappedList cap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e function; \u003ccode\u003e\u003ca\u003eCap\u003c/a\u003e\u003c/code\u003e is considered\n 0-length.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "length",
          "package": "capped-list",
          "signature": "CappedList cap a -\u003e Int",
          "source": "src/Data-CappedList.html#length",
          "type": "function"
        },
        "index": {
          "description": "Like the standard length function Cap is considered length",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "length",
          "normalized": "CappedList a b-\u003eInt",
          "package": "capped-list",
          "signature": "CappedList cap a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "map",
          "package": "capped-list",
          "signature": "(a -\u003e b) -\u003e CappedList cap a -\u003e CappedList cap b",
          "source": "src/Data-CappedList.html#map",
          "type": "function"
        },
        "index": {
          "description": "Like the standard map function",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eCappedList c a-\u003eCappedList c b",
          "package": "capped-list",
          "signature": "(a-\u003eb)-\u003eCappedList cap a-\u003eCappedList cap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e function, but the mapping function may\n return a capping value.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "mapEither",
          "package": "capped-list",
          "signature": "(a -\u003e Either cap b) -\u003e CappedList cap a -\u003e CappedList cap b",
          "source": "src/Data-CappedList.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Like the standard map function but the mapping function may return capping value",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eCappedList b a-\u003eCappedList b c",
          "package": "capped-list",
          "partial": "Either",
          "signature": "(a-\u003eEither cap b)-\u003eCappedList cap a-\u003eCappedList cap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "null",
          "package": "capped-list",
          "signature": "CappedList cap a -\u003e Bool",
          "source": "src/Data-CappedList.html#null",
          "type": "function"
        },
        "index": {
          "description": "Like the standard null function",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "null",
          "normalized": "CappedList a b-\u003eBool",
          "package": "capped-list",
          "signature": "CappedList cap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a capped list to a standard list.\n\u003c/p\u003e\u003cp\u003eThe cap is returned in the first value of the result tuple.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "toList",
          "package": "capped-list",
          "signature": "CappedList cap a -\u003e (cap, [a])",
          "source": "src/Data-CappedList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert capped list to standard list The cap is returned in the first value of the result tuple",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "toList",
          "normalized": "CappedList a b-\u003e(a,[b])",
          "package": "capped-list",
          "partial": "List",
          "signature": "CappedList cap a-\u003e(cap,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a capped list to a standard list, discarding the cap.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "toList_",
          "package": "capped-list",
          "signature": "CappedList cap a -\u003e [a]",
          "source": "src/Data-CappedList.html#toList_",
          "type": "function"
        },
        "index": {
          "description": "Convert capped list to standard list discarding the cap",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "toList_",
          "normalized": "CappedList a b-\u003e[b]",
          "package": "capped-list",
          "partial": "List",
          "signature": "CappedList cap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:toList_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the standard \u003ccode\u003eData.List.unfoldr\u003c/code\u003e function, but the step function\n must return a cap to terminate the unfold.\n\u003c/p\u003e",
          "module": "Data.CappedList",
          "name": "unfoldr",
          "package": "capped-list",
          "signature": "(b -\u003e Either cap (a, b)) -\u003e b -\u003e CappedList cap a",
          "source": "src/Data-CappedList.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "Like the standard Data.List.unfoldr function but the step function must return cap to terminate the unfold",
          "hierarchy": "Data CappedList",
          "module": "Data.CappedList",
          "name": "unfoldr",
          "normalized": "(a-\u003eEither b(c,a))-\u003ea-\u003eCappedList b c",
          "package": "capped-list",
          "signature": "(b-\u003eEither cap(a,b))-\u003eb-\u003eCappedList cap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/capped-list/docs/Data-CappedList.html#v:unfoldr"
      }
    }
  ]
]