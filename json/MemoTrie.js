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
        "word": "MemoTrie"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTrie-based memoizer\n\u003c/p\u003e\u003cp\u003eAdapted from sjanssen's paste: \"a lazy trie\" \u003ca\u003ehttp://hpaste.org/3839\u003c/a\u003e,\n which I think is based on Ralf Hinze's paper \u003ca\u003eMemo Functions,\n Polytypically!\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MemoTrie",
          "name": "MemoTrie",
          "package": "MemoTrie",
          "source": "src/Data-MemoTrie.html",
          "type": "module"
        },
        "index": {
          "description": "Trie-based memoizer Adapted from sjanssen paste lazy trie http hpaste.org which think is based on Ralf Hinze paper Memo Functions Polytypically",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "MemoTrie",
          "package": "MemoTrie",
          "partial": "Memo Trie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping from all elements of \u003ccode\u003ea\u003c/code\u003e to the results of some function\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "HasTrie",
          "package": "MemoTrie",
          "source": "src/Data-MemoTrie.html#HasTrie",
          "type": "class"
        },
        "index": {
          "description": "Mapping from all elements of to the results of some function",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "HasTrie",
          "package": "MemoTrie",
          "partial": "Has Trie",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#t:HasTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrie composition\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "(@.@)",
          "package": "MemoTrie",
          "signature": "(b :-\u003e: c) -\u003e (a :-\u003e: b) -\u003e a :-\u003e: c",
          "source": "src/Data-MemoTrie.html#%40.%40",
          "type": "function"
        },
        "index": {
          "description": "Trie composition",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "(@.@) @.@",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "MemoTrie",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:-64-.-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDomain elements of a trie\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "domain",
          "package": "MemoTrie",
          "signature": "[a]",
          "source": "src/Data-MemoTrie.html#domain",
          "type": "function"
        },
        "index": {
          "description": "Domain elements of trie",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "domain",
          "normalized": "[a]",
          "package": "MemoTrie",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the trie elements.  Order of keys (\u003ccode\u003e:: a\u003c/code\u003e) is always the same.\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "enumerate",
          "package": "MemoTrie",
          "signature": "(a :-\u003e: b) -\u003e [(a, b)]",
          "source": "src/Data-MemoTrie.html#enumerate",
          "type": "method"
        },
        "index": {
          "description": "List the trie elements Order of keys is always the same",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "enumerate",
          "normalized": "(a-\u003eb)-\u003e[(a,b)]",
          "package": "MemoTrie",
          "signature": "(a-\u003eb)-\u003e[(a,b)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity trie\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "idTrie",
          "package": "MemoTrie",
          "signature": "a :-\u003e: a",
          "source": "src/Data-MemoTrie.html#idTrie",
          "type": "function"
        },
        "index": {
          "description": "Identity trie",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "idTrie",
          "normalized": "a-\u003ea",
          "package": "MemoTrie",
          "partial": "Trie",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:idTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a unary function inside of a trie\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "inTrie",
          "package": "MemoTrie",
          "signature": "((a -\u003e b) -\u003e c -\u003e d) -\u003e (a :-\u003e: b) -\u003e c :-\u003e: d",
          "source": "src/Data-MemoTrie.html#inTrie",
          "type": "function"
        },
        "index": {
          "description": "Apply unary function inside of trie",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "inTrie",
          "normalized": "((a-\u003eb)-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003ec-\u003ed",
          "package": "MemoTrie",
          "partial": "Trie",
          "signature": "((a-\u003eb)-\u003ec-\u003ed)-\u003e(a-\u003eb)-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:inTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a binary function inside of a trie\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "inTrie2",
          "package": "MemoTrie",
          "signature": "((a -\u003e b) -\u003e (c -\u003e d) -\u003e e -\u003e f) -\u003e (a :-\u003e: b) -\u003e (c :-\u003e: d) -\u003e e :-\u003e: f",
          "source": "src/Data-MemoTrie.html#inTrie2",
          "type": "function"
        },
        "index": {
          "description": "Apply binary function inside of trie",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "inTrie2",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed)-\u003ee-\u003ef)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003ee-\u003ef",
          "package": "MemoTrie",
          "partial": "Trie",
          "signature": "((a-\u003eb)-\u003e(c-\u003ed)-\u003ee-\u003ef)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003ee-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:inTrie2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a ternary function inside of a trie\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "inTrie3",
          "package": "MemoTrie",
          "signature": "((a -\u003e b) -\u003e (c -\u003e d) -\u003e (e -\u003e f) -\u003e g -\u003e h) -\u003e (a :-\u003e: b) -\u003e (c :-\u003e: d) -\u003e (e :-\u003e: f) -\u003e g :-\u003e: h",
          "source": "src/Data-MemoTrie.html#inTrie3",
          "type": "function"
        },
        "index": {
          "description": "Apply ternary function inside of trie",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "inTrie3",
          "normalized": "((a-\u003eb)-\u003e(c-\u003ed)-\u003e(e-\u003ef)-\u003eg-\u003eh)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e-\u003ef)-\u003eg-\u003eh",
          "package": "MemoTrie",
          "partial": "Trie",
          "signature": "((a-\u003eb)-\u003e(c-\u003ed)-\u003e(e-\u003ef)-\u003eg-\u003eh)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e-\u003ef)-\u003eg-\u003eh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:inTrie3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrie-based function memoizer\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "memo",
          "package": "MemoTrie",
          "signature": "(t -\u003e a) -\u003e t -\u003e a",
          "source": "src/Data-MemoTrie.html#memo",
          "type": "function"
        },
        "index": {
          "description": "Trie-based function memoizer",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "memo",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "MemoTrie",
          "signature": "(t-\u003ea)-\u003et-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a binary function, on its first argument and then on its\n second.  Take care to exploit any partial evaluation.\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "memo2",
          "package": "MemoTrie",
          "signature": "(s -\u003e t -\u003e a) -\u003e s -\u003e t -\u003e a",
          "source": "src/Data-MemoTrie.html#memo2",
          "type": "function"
        },
        "index": {
          "description": "Memoize binary function on its first argument and then on its second Take care to exploit any partial evaluation",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "memo2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "MemoTrie",
          "signature": "(s-\u003et-\u003ea)-\u003es-\u003et-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:memo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a ternary function on successive arguments.  Take care to\n exploit any partial evaluation.\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "memo3",
          "package": "MemoTrie",
          "signature": "(r -\u003e s -\u003e t -\u003e a) -\u003e r -\u003e s -\u003e t -\u003e a",
          "source": "src/Data-MemoTrie.html#memo3",
          "type": "function"
        },
        "index": {
          "description": "Memoize ternary function on successive arguments Take care to exploit any partial evaluation",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "memo3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "MemoTrie",
          "signature": "(r-\u003es-\u003et-\u003ea)-\u003er-\u003es-\u003et-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:memo3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a memoizer to work with one more argument.\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "mup",
          "package": "MemoTrie",
          "signature": "(b -\u003e c) -\u003e (t -\u003e b) -\u003e t -\u003e c",
          "source": "src/Data-MemoTrie.html#mup",
          "type": "function"
        },
        "index": {
          "description": "Lift memoizer to work with one more argument",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "mup",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "MemoTrie",
          "signature": "(b-\u003ec)-\u003e(t-\u003eb)-\u003et-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:mup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the trie for the entire domain of a function\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "trie",
          "package": "MemoTrie",
          "signature": "(a -\u003e b) -\u003e a :-\u003e: b",
          "source": "src/Data-MemoTrie.html#trie",
          "type": "method"
        },
        "index": {
          "description": "Create the trie for the entire domain of function",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "trie",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "MemoTrie",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:trie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a trie to a function, i.e., access a field of the trie\n\u003c/p\u003e",
          "module": "Data.MemoTrie",
          "name": "untrie",
          "package": "MemoTrie",
          "signature": "(a :-\u003e: b) -\u003e a -\u003e b",
          "source": "src/Data-MemoTrie.html#untrie",
          "type": "method"
        },
        "index": {
          "description": "Convert trie to function i.e access field of the trie",
          "hierarchy": "Data MemoTrie",
          "module": "Data.MemoTrie",
          "name": "untrie",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "MemoTrie",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MemoTrie/docs/Data-MemoTrie.html#v:untrie"
      }
    }
  ]
]