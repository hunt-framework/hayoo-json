[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a minimal infinite, lazy trie for integral types.\n It intentionally leaves out ideas such as delete and\n emptiness so that it can be used lazily, eg. as the target\n of an infinite foldr.  Essentially its purpose is to be an\n efficient implementation of a function from integral type,\n given point-at-a-time modifications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "module",
        "fct-source": "src/Data-IntTrie.html",
        "fct-type": "module",
        "title": "IntTrie"
      },
      "index": {
        "description": "Provides minimal infinite lazy trie for integral types It intentionally leaves out ideas such as delete and emptiness so that it can be used lazily eg as the target of an infinite foldr Essentially its purpose is to be an efficient implementation of function from integral type given point-at-a-time modifications",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "IntTrie",
        "normalized": "",
        "package": "data-inttrie",
        "partial": "Int Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#t:IntTrie",
      "description": {
        "fct-descr": "\u003cp\u003eA trie from integers to values of type a. \n\u003c/p\u003e\u003cp\u003eSemantics: [[IntTrie a]] = Integer -\u003e a\n\u003c/p\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "data",
        "fct-source": "src/Data-IntTrie.html#IntTrie",
        "fct-type": "data",
        "title": "IntTrie"
      },
      "index": {
        "description": "trie from integers to values of type Semantics IntTrie Integer",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "IntTrie",
        "normalized": "",
        "package": "data-inttrie",
        "partial": "Int Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply the trie to an argument.  This is the semantic map.\n\u003c/p\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "IntTrie a -\u003e b -\u003e a",
        "fct-source": "src/Data-IntTrie.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply the trie to an argument This is the semantic map",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "apply",
        "normalized": "IntTrie a-\u003eb-\u003ea",
        "package": "data-inttrie",
        "partial": "",
        "signature": "IntTrie a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:identity",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity trie.  \n\u003c/p\u003e\u003cpre\u003e apply identity = id\n\u003c/pre\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "IntTrie a",
        "fct-source": "src/Data-IntTrie.html#identity",
        "fct-type": "function",
        "title": "identity"
      },
      "index": {
        "description": "The identity trie apply identity id",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "identity",
        "normalized": "",
        "package": "data-inttrie",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModify the function at one point\n\u003c/p\u003e\u003cpre\u003e apply (modify x f t) i | i == x = f (apply t i)\n                        | otherwise = apply t i\n\u003c/pre\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "b -\u003e (a -\u003e a) -\u003e IntTrie a -\u003e IntTrie a",
        "fct-source": "src/Data-IntTrie.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modify the function at one point apply modify apply otherwise apply",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "modify",
        "normalized": "a-\u003e(b-\u003eb)-\u003eIntTrie b-\u003eIntTrie b",
        "package": "data-inttrie",
        "partial": "",
        "signature": "b-\u003e(a-\u003ea)-\u003eIntTrie a-\u003eIntTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:modify-39-",
      "description": {
        "fct-descr": "\u003cp\u003eModify the function at one point (strict version)\n\u003c/p\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "b -\u003e (a -\u003e a) -\u003e IntTrie a -\u003e IntTrie a",
        "fct-source": "src/Data-IntTrie.html#modify%27",
        "fct-type": "function",
        "title": "modify'"
      },
      "index": {
        "description": "Modify the function at one point strict version",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "modify'",
        "normalized": "a-\u003e(b-\u003eb)-\u003eIntTrie b-\u003eIntTrie b",
        "package": "data-inttrie",
        "partial": "",
        "signature": "b-\u003e(a-\u003ea)-\u003eIntTrie a-\u003eIntTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-inttrie/docs/Data-IntTrie.html#v:overwrite",
      "description": {
        "fct-descr": "\u003cp\u003eOverwrite the function at one point\n\u003c/p\u003e\u003cpre\u003e overwrite i x = modify i (const x)\n\u003c/pre\u003e",
        "fct-module": "Data.IntTrie",
        "fct-package": "data-inttrie",
        "fct-signature": "b -\u003e a -\u003e IntTrie a -\u003e IntTrie a",
        "fct-source": "src/Data-IntTrie.html#overwrite",
        "fct-type": "function",
        "title": "overwrite"
      },
      "index": {
        "description": "Overwrite the function at one point overwrite modify const",
        "hierarchy": "Data IntTrie",
        "module": "Data.IntTrie",
        "name": "overwrite",
        "normalized": "a-\u003eb-\u003eIntTrie b-\u003eIntTrie b",
        "package": "data-inttrie",
        "partial": "",
        "signature": "b-\u003ea-\u003eIntTrie a-\u003eIntTrie a"
      }
    }
  }
]