[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode for manipulation of equivalence classes on index types.  An\n    \u003ccode\u003e\u003ca\u003eEquivalence\u003c/a\u003e\u003c/code\u003e is an equivalence relation.  The empty equivalence relation\n    is constructed over a ranges of values using \u003ccode\u003e\u003ca\u003eemptyEquivalence\u003c/a\u003e\u003c/code\u003e.  Less\n    discerning equivalence relations can be obtained with \u003ccode\u003e\u003ca\u003eequate\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003eequateAll\u003c/a\u003e\u003c/code\u003e.  The relation can be tested with \u003ccode\u003e\u003ca\u003eequiv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eequivalent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn example follows:\n\u003c/p\u003e\u003cpre\u003e import Data.Equivalence.Persistent\n\n rel = equateAll [1,3,5,7,9]\n     . equate 5 6\n     . equate 2 4\n     $ emptyEquivalence (1,10)\n\n test1 = equiv rel 3 5 -- This is True\n test2 = equiv rel 1 6 -- This is True\n test3 = equiv rel 4 6 -- This is False\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "module",
        "fct-source": "src/Data-Equivalence-Persistent.html",
        "fct-type": "module",
        "title": "Persistent"
      },
      "index": {
        "description": "Code for manipulation of equivalence classes on index types An Equivalence is an equivalence relation The empty equivalence relation is constructed over ranges of values using emptyEquivalence Less discerning equivalence relations can be obtained with equate and equateAll The relation can be tested with equiv and equivalent An example follows import Data.Equivalence.Persistent rel equateAll equate equate emptyEquivalence test1 equiv rel This is True test2 equiv rel This is True test3 equiv rel This is False",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "Persistent",
        "normalized": "",
        "package": "persistent-equivalence",
        "partial": "Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#t:Equivalence",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEquivalence\u003c/a\u003e\u003c/code\u003e is an equivalence relation on a range of values of some\n    index type.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "data",
        "fct-source": "src/Data-Equivalence-Persistent.html#Equivalence",
        "fct-type": "data",
        "title": "Equivalence"
      },
      "index": {
        "description": "An Equivalence is an equivalence relation on range of values of some index type",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "Equivalence",
        "normalized": "",
        "package": "persistent-equivalence",
        "partial": "Equivalence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:domain",
      "description": {
        "fct-descr": "\u003cp\u003eGets the domain of an equivalence relation, as the ordered pair of index\n    bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "Equivalence i -\u003e (i, i)",
        "fct-source": "src/Data-Equivalence-Persistent.html#domain",
        "fct-type": "function",
        "title": "domain"
      },
      "index": {
        "description": "Gets the domain of an equivalence relation as the ordered pair of index bounds",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "domain",
        "normalized": "Equivalence a-\u003e(a,a)",
        "package": "persistent-equivalence",
        "partial": "",
        "signature": "Equivalence i-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:emptyEquivalence",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eemptyEquivalence\u003c/a\u003e\u003c/code\u003e is an equivalence relation that equates two values\n    only when they are equal to each other.  It is the most discerning such\n    relation possible.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "(i, i) -\u003e Equivalence i",
        "fct-source": "src/Data-Equivalence-Persistent.html#emptyEquivalence",
        "fct-type": "function",
        "title": "emptyEquivalence"
      },
      "index": {
        "description": "emptyEquivalence is an equivalence relation that equates two values only when they are equal to each other It is the most discerning such relation possible",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "emptyEquivalence",
        "normalized": "(a,a)-\u003eEquivalence a",
        "package": "persistent-equivalence",
        "partial": "Equivalence",
        "signature": "(i,i)-\u003eEquivalence i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equate",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the equivalence relation obtained by equating the given two\n    values.  This combines equivalence classes.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "i -\u003e i -\u003e Equivalence i -\u003e Equivalence i",
        "fct-source": "src/Data-Equivalence-Persistent.html#equate",
        "fct-type": "function",
        "title": "equate"
      },
      "index": {
        "description": "Construct the equivalence relation obtained by equating the given two values This combines equivalence classes",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "equate",
        "normalized": "a-\u003ea-\u003eEquivalence a-\u003eEquivalence a",
        "package": "persistent-equivalence",
        "partial": "",
        "signature": "i-\u003ei-\u003eEquivalence i-\u003eEquivalence i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equateAll",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the equivalence relation obtained by equating all of the given\n    values.  This combines equivalence classes.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "[i] -\u003e Equivalence i -\u003e Equivalence i",
        "fct-source": "src/Data-Equivalence-Persistent.html#equateAll",
        "fct-type": "function",
        "title": "equateAll"
      },
      "index": {
        "description": "Construct the equivalence relation obtained by equating all of the given values This combines equivalence classes",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "equateAll",
        "normalized": "[a]-\u003eEquivalence a-\u003eEquivalence a",
        "package": "persistent-equivalence",
        "partial": "All",
        "signature": "[i]-\u003eEquivalence i-\u003eEquivalence i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equiv",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if two values are equivalent under the given equivalence\n    relation.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "Equivalence i -\u003e i -\u003e i -\u003e Bool",
        "fct-source": "src/Data-Equivalence-Persistent.html#equiv",
        "fct-type": "function",
        "title": "equiv"
      },
      "index": {
        "description": "Determines if two values are equivalent under the given equivalence relation",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "equiv",
        "normalized": "Equivalence a-\u003ea-\u003ea-\u003eBool",
        "package": "persistent-equivalence",
        "partial": "",
        "signature": "Equivalence i-\u003ei-\u003ei-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/persistent-equivalence/docs/Data-Equivalence-Persistent.html#v:equivalent",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if all of the given values are equivalent under the given\n    equivalence relation.\n\u003c/p\u003e",
        "fct-module": "Data.Equivalence.Persistent",
        "fct-package": "persistent-equivalence",
        "fct-signature": "Equivalence i -\u003e [i] -\u003e Bool",
        "fct-source": "src/Data-Equivalence-Persistent.html#equivalent",
        "fct-type": "function",
        "title": "equivalent"
      },
      "index": {
        "description": "Determines if all of the given values are equivalent under the given equivalence relation",
        "hierarchy": "Data Equivalence Persistent",
        "module": "Data.Equivalence.Persistent",
        "name": "equivalent",
        "normalized": "Equivalence a-\u003e[a]-\u003eBool",
        "package": "persistent-equivalence",
        "partial": "",
        "signature": "Equivalence i-\u003e[i]-\u003eBool"
      }
    }
  }
]