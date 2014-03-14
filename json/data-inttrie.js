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
        "word": "data-inttrie"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a minimal infinite, lazy trie for integral types.\n It intentionally leaves out ideas such as delete and\n emptiness so that it can be used lazily, eg. as the target\n of an infinite foldr.  Essentially its purpose is to be an\n efficient implementation of a function from integral type,\n given point-at-a-time modifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntTrie",
          "name": "IntTrie",
          "package": "data-inttrie",
          "source": "src/Data-IntTrie.html",
          "type": "module"
        },
        "index": {
          "description": "Provides minimal infinite lazy trie for integral types It intentionally leaves out ideas such as delete and emptiness so that it can be used lazily eg as the target of an infinite foldr Essentially its purpose is to be an efficient implementation of function from integral type given point-at-a-time modifications",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "IntTrie",
          "package": "data-inttrie",
          "partial": "Int Trie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trie from integers to values of type a. \n\u003c/p\u003e\u003cp\u003eSemantics: [[IntTrie a]] = Integer -\u003e a\n\u003c/p\u003e",
          "module": "Data.IntTrie",
          "name": "IntTrie",
          "package": "data-inttrie",
          "source": "src/Data-IntTrie.html#IntTrie",
          "type": "data"
        },
        "index": {
          "description": "trie from integers to values of type Semantics IntTrie Integer",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "IntTrie",
          "package": "data-inttrie",
          "partial": "Int Trie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#t:IntTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the trie to an argument.  This is the semantic map.\n\u003c/p\u003e",
          "module": "Data.IntTrie",
          "name": "apply",
          "package": "data-inttrie",
          "signature": "IntTrie a -\u003e b -\u003e a",
          "source": "src/Data-IntTrie.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Apply the trie to an argument This is the semantic map",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "apply",
          "normalized": "IntTrie a-\u003eb-\u003ea",
          "package": "data-inttrie",
          "signature": "IntTrie a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity trie.  \n\u003c/p\u003e\u003cpre\u003e apply identity = id\n\u003c/pre\u003e",
          "module": "Data.IntTrie",
          "name": "identity",
          "package": "data-inttrie",
          "signature": "IntTrie a",
          "source": "src/Data-IntTrie.html#identity",
          "type": "function"
        },
        "index": {
          "description": "The identity trie apply identity id",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "identity",
          "package": "data-inttrie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the function at one point\n\u003c/p\u003e\u003cpre\u003e apply (modify x f t) i | i == x = f (apply t i)\n                        | otherwise = apply t i\n\u003c/pre\u003e",
          "module": "Data.IntTrie",
          "name": "modify",
          "package": "data-inttrie",
          "signature": "b -\u003e (a -\u003e a) -\u003e IntTrie a -\u003e IntTrie a",
          "source": "src/Data-IntTrie.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modify the function at one point apply modify apply otherwise apply",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "modify",
          "normalized": "a-\u003e(b-\u003eb)-\u003eIntTrie b-\u003eIntTrie b",
          "package": "data-inttrie",
          "signature": "b-\u003e(a-\u003ea)-\u003eIntTrie a-\u003eIntTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the function at one point (strict version)\n\u003c/p\u003e",
          "module": "Data.IntTrie",
          "name": "modify'",
          "package": "data-inttrie",
          "signature": "b -\u003e (a -\u003e a) -\u003e IntTrie a -\u003e IntTrie a",
          "source": "src/Data-IntTrie.html#modify%27",
          "type": "function"
        },
        "index": {
          "description": "Modify the function at one point strict version",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "modify'",
          "normalized": "a-\u003e(b-\u003eb)-\u003eIntTrie b-\u003eIntTrie b",
          "package": "data-inttrie",
          "signature": "b-\u003e(a-\u003ea)-\u003eIntTrie a-\u003eIntTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:modify-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverwrite the function at one point\n\u003c/p\u003e\u003cpre\u003e overwrite i x = modify i (const x)\n\u003c/pre\u003e",
          "module": "Data.IntTrie",
          "name": "overwrite",
          "package": "data-inttrie",
          "signature": "b -\u003e a -\u003e IntTrie a -\u003e IntTrie a",
          "source": "src/Data-IntTrie.html#overwrite",
          "type": "function"
        },
        "index": {
          "description": "Overwrite the function at one point overwrite modify const",
          "hierarchy": "Data IntTrie",
          "module": "Data.IntTrie",
          "name": "overwrite",
          "normalized": "a-\u003eb-\u003eIntTrie b-\u003eIntTrie b",
          "package": "data-inttrie",
          "signature": "b-\u003ea-\u003eIntTrie a-\u003eIntTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:overwrite"
      }
    }
  ]
]