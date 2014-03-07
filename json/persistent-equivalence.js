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
        "word": "persistent-equivalence"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode for manipulation of equivalence classes on index types.  An\n    \u003ccode\u003e\u003ca\u003eEquivalence\u003c/a\u003e\u003c/code\u003e is an equivalence relation.  The empty equivalence relation\n    is constructed over a ranges of values using \u003ccode\u003e\u003ca\u003eemptyEquivalence\u003c/a\u003e\u003c/code\u003e.  Less\n    discerning equivalence relations can be obtained with \u003ccode\u003e\u003ca\u003eequate\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003eequateAll\u003c/a\u003e\u003c/code\u003e.  The relation can be tested with \u003ccode\u003e\u003ca\u003eequiv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eequivalent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn example follows:\n\u003c/p\u003e\u003cpre\u003e import Data.Equivalence.Persistent\n\n rel = equateAll [1,3,5,7,9]\n     . equate 5 6\n     . equate 2 4\n     $ emptyEquivalence (1,10)\n\n test1 = equiv rel 3 5 -- This is True\n test2 = equiv rel 1 6 -- This is True\n test3 = equiv rel 4 6 -- This is False\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "Persistent",
          "package": "persistent-equivalence",
          "source": "src/Data-Equivalence-Persistent.html",
          "type": "module"
        },
        "index": {
          "description": "Code for manipulation of equivalence classes on index types An Equivalence is an equivalence relation The empty equivalence relation is constructed over ranges of values using emptyEquivalence Less discerning equivalence relations can be obtained with equate and equateAll The relation can be tested with equiv and equivalent An example follows import Data.Equivalence.Persistent rel equateAll equate equate emptyEquivalence test1 equiv rel This is True test2 equiv rel This is True test3 equiv rel This is False",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "Persistent",
          "package": "persistent-equivalence",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEquivalence\u003c/a\u003e\u003c/code\u003e is an equivalence relation on a range of values of some\n    index type.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "Equivalence",
          "package": "persistent-equivalence",
          "source": "src/Data-Equivalence-Persistent.html#Equivalence",
          "type": "data"
        },
        "index": {
          "description": "An Equivalence is an equivalence relation on range of values of some index type",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "Equivalence",
          "package": "persistent-equivalence",
          "partial": "Equivalence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#t:Equivalence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the domain of an equivalence relation, as the ordered pair of index\n    bounds.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "domain",
          "package": "persistent-equivalence",
          "signature": "Equivalence i -\u003e (i, i)",
          "source": "src/Data-Equivalence-Persistent.html#domain",
          "type": "function"
        },
        "index": {
          "description": "Gets the domain of an equivalence relation as the ordered pair of index bounds",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "domain",
          "normalized": "Equivalence a-\u003e(a,a)",
          "package": "persistent-equivalence",
          "signature": "Equivalence i-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:domain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eemptyEquivalence\u003c/a\u003e\u003c/code\u003e is an equivalence relation that equates two values\n    only when they are equal to each other.  It is the most discerning such\n    relation possible.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "emptyEquivalence",
          "package": "persistent-equivalence",
          "signature": "(i, i) -\u003e Equivalence i",
          "source": "src/Data-Equivalence-Persistent.html#emptyEquivalence",
          "type": "function"
        },
        "index": {
          "description": "emptyEquivalence is an equivalence relation that equates two values only when they are equal to each other It is the most discerning such relation possible",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "emptyEquivalence",
          "normalized": "(a,a)-\u003eEquivalence a",
          "package": "persistent-equivalence",
          "partial": "Equivalence",
          "signature": "(i,i)-\u003eEquivalence i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:emptyEquivalence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the equivalence relation obtained by equating the given two\n    values.  This combines equivalence classes.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "equate",
          "package": "persistent-equivalence",
          "signature": "i -\u003e i -\u003e Equivalence i -\u003e Equivalence i",
          "source": "src/Data-Equivalence-Persistent.html#equate",
          "type": "function"
        },
        "index": {
          "description": "Construct the equivalence relation obtained by equating the given two values This combines equivalence classes",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "equate",
          "normalized": "a-\u003ea-\u003eEquivalence a-\u003eEquivalence a",
          "package": "persistent-equivalence",
          "signature": "i-\u003ei-\u003eEquivalence i-\u003eEquivalence i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the equivalence relation obtained by equating all of the given\n    values.  This combines equivalence classes.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "equateAll",
          "package": "persistent-equivalence",
          "signature": "[i] -\u003e Equivalence i -\u003e Equivalence i",
          "source": "src/Data-Equivalence-Persistent.html#equateAll",
          "type": "function"
        },
        "index": {
          "description": "Construct the equivalence relation obtained by equating all of the given values This combines equivalence classes",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "equateAll",
          "normalized": "[a]-\u003eEquivalence a-\u003eEquivalence a",
          "package": "persistent-equivalence",
          "partial": "All",
          "signature": "[i]-\u003eEquivalence i-\u003eEquivalence i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if two values are equivalent under the given equivalence\n    relation.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "equiv",
          "package": "persistent-equivalence",
          "signature": "Equivalence i -\u003e i -\u003e i -\u003e Bool",
          "source": "src/Data-Equivalence-Persistent.html#equiv",
          "type": "function"
        },
        "index": {
          "description": "Determines if two values are equivalent under the given equivalence relation",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "equiv",
          "normalized": "Equivalence a-\u003ea-\u003ea-\u003eBool",
          "package": "persistent-equivalence",
          "signature": "Equivalence i-\u003ei-\u003ei-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if all of the given values are equivalent under the given\n    equivalence relation.\n\u003c/p\u003e",
          "module": "Data.Equivalence.Persistent",
          "name": "equivalent",
          "package": "persistent-equivalence",
          "signature": "Equivalence i -\u003e [i] -\u003e Bool",
          "source": "src/Data-Equivalence-Persistent.html#equivalent",
          "type": "function"
        },
        "index": {
          "description": "Determines if all of the given values are equivalent under the given equivalence relation",
          "hierarchy": "Data Equivalence Persistent",
          "module": "Data.Equivalence.Persistent",
          "name": "equivalent",
          "normalized": "Equivalence a-\u003e[a]-\u003eBool",
          "package": "persistent-equivalence",
          "signature": "Equivalence i-\u003e[i]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equivalent"
      }
    }
  ]
]