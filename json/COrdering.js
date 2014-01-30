[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a useful variant of the \u003ca\u003ePrelude\u003c/a\u003e \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e\u003cp\u003eTypically this data type is used as the result of a \"combining comparison\"\n which combines values that are deemed to be equal (somehow). Note that the\n functions defined here adhere to the same ordering convention as the overloaded\n \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e (from the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class). That is..\n\u003c/p\u003e\u003cpre\u003e\n a `compare` b -\u003e LT (or Lt) implies a \u003c b\n a `compare` b -\u003e GT (or Gt) implies a \u003e b\n\u003c/pre\u003e\u003cp\u003eThe combinators exported from this module have a \"CC\" suffix if they\n return a combining comparison (most of them) and a \"C\" suffix if they return\n an ordinary comparison. All the combinators defined here are INLINEd, in the hope\n that the compiler can avoid the overhead of using HOFs for frequently\n used comparisons (dunno if this does any good though :-)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "module",
        "fct-source": "src/Data-COrdering.html",
        "fct-type": "module",
        "title": "COrdering"
      },
      "index": {
        "description": "This module defines useful variant of the Prelude Ordering data type Typically this data type is used as the result of combining comparison which combines values that are deemed to be equal somehow Note that the functions defined here adhere to the same ordering convention as the overloaded compare from the Ord class That is compare LT or Lt implies compare GT or Gt implies The combinators exported from this module have CC suffix if they return combining comparison most of them and suffix if they return an ordinary comparison All the combinators defined here are INLINEd in the hope that the compiler can avoid the overhead of using HOFs for frequently used comparisons dunno if this does any good though",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "COrdering",
        "normalized": "",
        "package": "COrdering",
        "partial": "COrdering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#t:COrdering",
      "description": {
        "fct-descr": "\u003cp\u003eResult of a combining comparison.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "data",
        "fct-source": "src/Data-COrdering.html#COrdering",
        "fct-type": "data",
        "title": "COrdering"
      },
      "index": {
        "description": "Result of combining comparison",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "COrdering",
        "normalized": "",
        "package": "COrdering",
        "partial": "COrdering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:Eq",
      "description": {
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "Eq a",
        "fct-source": "src/Data-COrdering.html#COrdering",
        "fct-type": "function",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "Eq",
        "normalized": "",
        "package": "COrdering",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:Gt",
      "description": {
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "Gt",
        "fct-source": "src/Data-COrdering.html#COrdering",
        "fct-type": "function",
        "title": "Gt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "Gt",
        "normalized": "",
        "package": "COrdering",
        "partial": "Gt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:Lt",
      "description": {
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "Lt",
        "fct-source": "src/Data-COrdering.html#COrdering",
        "fct-type": "function",
        "title": "Lt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "Lt",
        "normalized": "",
        "package": "COrdering",
        "partial": "Lt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:flipC",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a comparison to one which takes arguments in flipped order, but\n preserves the ordering that would be given by the \"unflipped\" version (disregarding type issues).\n So it's not the same as using the prelude \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (which would reverse the ordering too).\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e Ordering) -\u003e b -\u003e a -\u003e Ordering",
        "fct-source": "src/Data-COrdering.html#flipC",
        "fct-type": "function",
        "title": "flipC"
      },
      "index": {
        "description": "Converts comparison to one which takes arguments in flipped order but preserves the ordering that would be given by the unflipped version disregarding type issues So it not the same as using the prelude flip which would reverse the ordering too",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "flipC",
        "normalized": "(a-\u003eb-\u003eOrdering)-\u003eb-\u003ea-\u003eOrdering",
        "package": "COrdering",
        "partial": "",
        "signature": "(a-\u003eb-\u003eOrdering)-\u003eb-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:flipCC",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a combining comparison to one which takes arguments in flipped order, but\n preserves the ordering that would be given by the \"unflipped\" version (disregarding type issues).\n So it's not the same as using the prelude \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (which would reverse the ordering too).\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e COrdering c) -\u003e b -\u003e a -\u003e COrdering c",
        "fct-source": "src/Data-COrdering.html#flipCC",
        "fct-type": "function",
        "title": "flipCC"
      },
      "index": {
        "description": "Converts combining comparison to one which takes arguments in flipped order but preserves the ordering that would be given by the unflipped version disregarding type issues So it not the same as using the prelude flip which would reverse the ordering too",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "flipCC",
        "normalized": "(a-\u003eb-\u003eCOrdering c)-\u003eb-\u003ea-\u003eCOrdering c",
        "package": "COrdering",
        "partial": "CC",
        "signature": "(a-\u003eb-\u003eCOrdering c)-\u003eb-\u003ea-\u003eCOrdering c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:fstByCC",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a combining comparison from an ordinary comparison by keeping the first argument\n if they are deemed equal. The second argument is discarded in this case.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e Ordering) -\u003e a -\u003e b -\u003e COrdering a",
        "fct-source": "src/Data-COrdering.html#fstByCC",
        "fct-type": "function",
        "title": "fstByCC"
      },
      "index": {
        "description": "Create combining comparison from an ordinary comparison by keeping the first argument if they are deemed equal The second argument is discarded in this case",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "fstByCC",
        "normalized": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering a",
        "package": "COrdering",
        "partial": "By CC",
        "signature": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:fstCC",
      "description": {
        "fct-descr": "\u003cp\u003eA combining comparison for an instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e which keeps the first argument\n if they are deemed equal. The second argument is discarded in this case.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "a -\u003e a -\u003e COrdering a",
        "fct-source": "src/Data-COrdering.html#fstCC",
        "fct-type": "function",
        "title": "fstCC"
      },
      "index": {
        "description": "combining comparison for an instance of Ord which keeps the first argument if they are deemed equal The second argument is discarded in this case",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "fstCC",
        "normalized": "a-\u003ea-\u003eCOrdering a",
        "package": "COrdering",
        "partial": "CC",
        "signature": "a-\u003ea-\u003eCOrdering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:sndByCC",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a combining comparison from an ordinary comparison by keeping the second argument\n if they are deemed equal. The first argument is discarded in this case.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e Ordering) -\u003e a -\u003e b -\u003e COrdering b",
        "fct-source": "src/Data-COrdering.html#sndByCC",
        "fct-type": "function",
        "title": "sndByCC"
      },
      "index": {
        "description": "Create combining comparison from an ordinary comparison by keeping the second argument if they are deemed equal The first argument is discarded in this case",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "sndByCC",
        "normalized": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering b",
        "package": "COrdering",
        "partial": "By CC",
        "signature": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:sndCC",
      "description": {
        "fct-descr": "\u003cp\u003eA combining comparison for an instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e which keeps the second argument\n if they are deemed equal. The first argument is discarded in this case.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "a -\u003e a -\u003e COrdering a",
        "fct-source": "src/Data-COrdering.html#sndCC",
        "fct-type": "function",
        "title": "sndCC"
      },
      "index": {
        "description": "combining comparison for an instance of Ord which keeps the second argument if they are deemed equal The first argument is discarded in this case",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "sndCC",
        "normalized": "a-\u003ea-\u003eCOrdering a",
        "package": "COrdering",
        "partial": "CC",
        "signature": "a-\u003ea-\u003eCOrdering a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:unitByCC",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a combining comparison from an ordinary comparison by returning unit () where appropriate.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e Ordering) -\u003e a -\u003e b -\u003e COrdering ()",
        "fct-source": "src/Data-COrdering.html#unitByCC",
        "fct-type": "function",
        "title": "unitByCC"
      },
      "index": {
        "description": "Create combining comparison from an ordinary comparison by returning unit where appropriate",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "unitByCC",
        "normalized": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering()",
        "package": "COrdering",
        "partial": "By CC",
        "signature": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:unitCC",
      "description": {
        "fct-descr": "\u003cp\u003eA combining comparison for an instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e which returns unit () where appropriate.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "a -\u003e a -\u003e COrdering ()",
        "fct-source": "src/Data-COrdering.html#unitCC",
        "fct-type": "function",
        "title": "unitCC"
      },
      "index": {
        "description": "combining comparison for an instance of Ord which returns unit where appropriate",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "unitCC",
        "normalized": "a-\u003ea-\u003eCOrdering()",
        "package": "COrdering",
        "partial": "CC",
        "signature": "a-\u003ea-\u003eCOrdering()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withByCC",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a combining comparison using the supplied comparison and combining function,\n which is applied if the comparison returns \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ewithByCC'\u003c/a\u003e\u003c/code\u003e for a stricter version\n of this function.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e Ordering) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e COrdering c",
        "fct-source": "src/Data-COrdering.html#withByCC",
        "fct-type": "function",
        "title": "withByCC"
      },
      "index": {
        "description": "Create combining comparison using the supplied comparison and combining function which is applied if the comparison returns EQ See withByCC for stricter version of this function",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "withByCC",
        "normalized": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c",
        "package": "COrdering",
        "partial": "By CC",
        "signature": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withByCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithByCC\u003c/a\u003e\u003c/code\u003e, except the combining function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e b -\u003e Ordering) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e COrdering c",
        "fct-source": "src/Data-COrdering.html#withByCC%27",
        "fct-type": "function",
        "title": "withByCC'"
      },
      "index": {
        "description": "Same as withByCC except the combining function is applied strictly",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "withByCC'",
        "normalized": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c",
        "package": "COrdering",
        "partial": "By CC'",
        "signature": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withCC",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a combining comparison using the supplied combining function, which is applied if\n \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ewithCC'\u003c/a\u003e\u003c/code\u003e for a stricter version of this function.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e COrdering b",
        "fct-source": "src/Data-COrdering.html#withCC",
        "fct-type": "function",
        "title": "withCC"
      },
      "index": {
        "description": "Create combining comparison using the supplied combining function which is applied if compare returns EQ See withCC for stricter version of this function",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "withCC",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b",
        "package": "COrdering",
        "partial": "CC",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithCC\u003c/a\u003e\u003c/code\u003e, except the combining function is applied strictly.\n\u003c/p\u003e",
        "fct-module": "Data.COrdering",
        "fct-package": "COrdering",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e COrdering b",
        "fct-source": "src/Data-COrdering.html#withCC%27",
        "fct-type": "function",
        "title": "withCC'"
      },
      "index": {
        "description": "Same as withCC except the combining function is applied strictly",
        "hierarchy": "Data COrdering",
        "module": "Data.COrdering",
        "name": "withCC'",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b",
        "package": "COrdering",
        "partial": "CC'",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b"
      }
    }
  }
]