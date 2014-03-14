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
        "word": "infinite-search"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of nonempty searchable (compact and overt) sets, i.e. sets s \n which admit a total operation \u003ccode\u003esearch s :: (a -\u003e Bool) -\u003e Maybe a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e bit = pair True False\n cantor = sequence (repeat bit)\n take 5 $ search cantor (\\s -\u003e not (s !! 3) && (s !! 4))\n    -- gives [True, True, True, False, True]\n\u003c/pre\u003e\u003cp\u003eThis module is based on the paper \"Exhaustible sets in higher-type computation\"\n by Martin Escardo, and is almost identical to the code in his his expository blog\n post on the subject: \u003ccode\u003ehttp://math.andrej.com/2008/11/21/a-haskell-monad-for-infinite-search-in-finite-time/\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Searchable",
          "name": "Searchable",
          "package": "infinite-search",
          "source": "src/Data-Searchable.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of nonempty searchable compact and overt sets i.e sets which admit total operation search Bool Maybe Example usage bit pair True False cantor sequence repeat bit take search cantor not gives True True True False True This module is based on the paper Exhaustible sets in higher-type computation by Martin Escardo and is almost identical to the code in his his expository blog post on the subject http math.andrej.com a-haskell-monad-for-infinite-search-in-finite-time",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "Searchable",
          "package": "infinite-search",
          "partial": "Searchable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSet a\u003c/code\u003e is a nonempty searchable set of a's.\n There is no Monoid or MonadPlus instance, since\n we lack the ability to represent the empty set,\n which would be the units of those structures.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "Set",
          "package": "infinite-search",
          "source": "src/Data-Searchable.html#Set",
          "type": "data"
        },
        "index": {
          "description": "Set is nonempty searchable set of There is no Monoid or MonadPlus instance since we lack the ability to represent the empty set which would be the units of those structures",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "Set",
          "package": "infinite-search",
          "partial": "Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebigUnion ss\u003c/code\u003e is the union of all the elemens of \u003ccode\u003ess\u003c/code\u003e.  In other words,\n \u003ccode\u003ex `member` bigUnion ss\u003c/code\u003e iff \u003ccode\u003eforsome ss (s -\u003e x `member` s)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "bigUnion",
          "package": "infinite-search",
          "signature": "Set (Set a) -\u003e Set a",
          "source": "src/Data-Searchable.html#bigUnion",
          "type": "function"
        },
        "index": {
          "description": "bigUnion ss is the union of all the elemens of ss In other words member bigUnion ss iff forsome ss member",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "bigUnion",
          "normalized": "Set(Set a)-\u003eSet a",
          "package": "infinite-search",
          "partial": "Union",
          "signature": "Set(Set a)-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:bigUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether the set contains an element.  \u003ccode\u003econtains s x = forsome s (== x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "contains",
          "package": "infinite-search",
          "signature": "Set a -\u003e a -\u003e Bool",
          "source": "src/Data-Searchable.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Tests whether the set contains an element contains forsome",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "contains",
          "normalized": "Set a-\u003ea-\u003eBool",
          "package": "infinite-search",
          "signature": "Set a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epair x y\u003c/code\u003e is the set \u003ccode\u003e{x,y}\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "doubleton",
          "package": "infinite-search",
          "signature": "a -\u003e a -\u003e Set a",
          "source": "src/Data-Searchable.html#doubleton",
          "type": "function"
        },
        "index": {
          "description": "pair is the set",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "doubleton",
          "normalized": "a-\u003ea-\u003eSet a",
          "package": "infinite-search",
          "signature": "a-\u003ea-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:doubleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eforevery s p\u003c/code\u003e returns True iff every element \u003ccode\u003ex\u003c/code\u003e of \u003ccode\u003es\u003c/code\u003e satisfies \u003ccode\u003ep x =\n True\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "forevery",
          "package": "infinite-search",
          "signature": "Set a -\u003e (a -\u003e Bool) -\u003e Bool",
          "source": "src/Data-Searchable.html#forevery",
          "type": "function"
        },
        "index": {
          "description": "forevery returns True iff every element of satisfies True",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "forevery",
          "normalized": "Set a-\u003e(a-\u003eBool)-\u003eBool",
          "package": "infinite-search",
          "signature": "Set a-\u003e(a-\u003eBool)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:forevery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eforsome s p\u003c/code\u003e returns True iff there is some element \u003ccode\u003ex\u003c/code\u003e of \u003ccode\u003es\u003c/code\u003e such that\n \u003ccode\u003ep x = True\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "forsome",
          "package": "infinite-search",
          "signature": "Set a -\u003e (a -\u003e Bool) -\u003e Bool",
          "source": "src/Data-Searchable.html#forsome",
          "type": "function"
        },
        "index": {
          "description": "forsome returns True iff there is some element of such that True",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "forsome",
          "normalized": "Set a-\u003e(a-\u003eBool)-\u003eBool",
          "package": "infinite-search",
          "signature": "Set a-\u003e(a-\u003eBool)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:forsome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emember = flip contains\u003c/pre\u003e",
          "module": "Data.Searchable",
          "name": "member",
          "package": "infinite-search",
          "signature": "a -\u003e Set a -\u003e Bool",
          "source": "src/Data-Searchable.html#member",
          "type": "function"
        },
        "index": {
          "description": "member flip contains",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "member",
          "normalized": "a-\u003eSet a-\u003eBool",
          "package": "infinite-search",
          "signature": "a-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a member of the set satisfying a predicate.  \n If \u003ccode\u003esearch s p = Just x\u003c/code\u003e then \u003ccode\u003ep x = True\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "search",
          "package": "infinite-search",
          "signature": "Set a -\u003e (a -\u003e Bool) -\u003e Maybe a",
          "source": "src/Data-Searchable.html#search",
          "type": "function"
        },
        "index": {
          "description": "Choose member of the set satisfying predicate If search Just then True",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "search",
          "normalized": "Set a-\u003e(a-\u003eBool)-\u003eMaybe a",
          "package": "infinite-search",
          "signature": "Set a-\u003e(a-\u003eBool)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esingleton x\u003c/code\u003e is the set \u003ccode\u003e{x}\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "singleton",
          "package": "infinite-search",
          "signature": "a -\u003e Set a",
          "source": "src/Data-Searchable.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton is the set",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "singleton",
          "normalized": "a-\u003eSet a",
          "package": "infinite-search",
          "signature": "a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex `member` union s t\u003c/code\u003e iff \u003ccode\u003e(x `member` s) || (x `member` t)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Searchable",
          "name": "union",
          "package": "infinite-search",
          "signature": "Set a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Searchable.html#union",
          "type": "function"
        },
        "index": {
          "description": "member union iff member member",
          "hierarchy": "Data Searchable",
          "module": "Data.Searchable",
          "name": "union",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "infinite-search",
          "signature": "Set a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/infinite-search/docs/Data-Searchable.html#v:union"
      }
    }
  ]
]