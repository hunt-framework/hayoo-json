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
        "word": "COrdering"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a useful variant of the \u003ca\u003ePrelude\u003c/a\u003e \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e\u003cp\u003eTypically this data type is used as the result of a \"combining comparison\"\n which combines values that are deemed to be equal (somehow). Note that the\n functions defined here adhere to the same ordering convention as the overloaded\n \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e (from the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class). That is..\n\u003c/p\u003e\u003cpre\u003e\n a `compare` b -\u003e LT (or Lt) implies a \u003c b\n a `compare` b -\u003e GT (or Gt) implies a \u003e b\n\u003c/pre\u003e\u003cp\u003eThe combinators exported from this module have a \"CC\" suffix if they\n return a combining comparison (most of them) and a \"C\" suffix if they return\n an ordinary comparison. All the combinators defined here are INLINEd, in the hope\n that the compiler can avoid the overhead of using HOFs for frequently\n used comparisons (dunno if this does any good though :-)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.COrdering",
          "name": "COrdering",
          "package": "COrdering",
          "source": "src/Data-COrdering.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines useful variant of the Prelude Ordering data type Typically this data type is used as the result of combining comparison which combines values that are deemed to be equal somehow Note that the functions defined here adhere to the same ordering convention as the overloaded compare from the Ord class That is compare LT or Lt implies compare GT or Gt implies The combinators exported from this module have CC suffix if they return combining comparison most of them and suffix if they return an ordinary comparison All the combinators defined here are INLINEd in the hope that the compiler can avoid the overhead of using HOFs for frequently used comparisons dunno if this does any good though",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "COrdering",
          "package": "COrdering",
          "partial": "COrdering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a combining comparison.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "COrdering",
          "package": "COrdering",
          "source": "src/Data-COrdering.html#COrdering",
          "type": "data"
        },
        "index": {
          "description": "Result of combining comparison",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "COrdering",
          "package": "COrdering",
          "partial": "COrdering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#t:COrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.COrdering",
          "name": "Eq",
          "package": "COrdering",
          "signature": "Eq a",
          "source": "src/Data-COrdering.html#COrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "Eq",
          "package": "COrdering",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.COrdering",
          "name": "Gt",
          "package": "COrdering",
          "signature": "Gt",
          "source": "src/Data-COrdering.html#COrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "Gt",
          "package": "COrdering",
          "partial": "Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.COrdering",
          "name": "Lt",
          "package": "COrdering",
          "signature": "Lt",
          "source": "src/Data-COrdering.html#COrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "Lt",
          "package": "COrdering",
          "partial": "Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a comparison to one which takes arguments in flipped order, but\n preserves the ordering that would be given by the \"unflipped\" version (disregarding type issues).\n So it's not the same as using the prelude \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (which would reverse the ordering too).\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "flipC",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e b -\u003e a -\u003e Ordering",
          "source": "src/Data-COrdering.html#flipC",
          "type": "function"
        },
        "index": {
          "description": "Converts comparison to one which takes arguments in flipped order but preserves the ordering that would be given by the unflipped version disregarding type issues So it not the same as using the prelude flip which would reverse the ordering too",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "flipC",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003eb-\u003ea-\u003eOrdering",
          "package": "COrdering",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003eb-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:flipC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a combining comparison to one which takes arguments in flipped order, but\n preserves the ordering that would be given by the \"unflipped\" version (disregarding type issues).\n So it's not the same as using the prelude \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (which would reverse the ordering too).\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "flipCC",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e COrdering c) -\u003e b -\u003e a -\u003e COrdering c",
          "source": "src/Data-COrdering.html#flipCC",
          "type": "function"
        },
        "index": {
          "description": "Converts combining comparison to one which takes arguments in flipped order but preserves the ordering that would be given by the unflipped version disregarding type issues So it not the same as using the prelude flip which would reverse the ordering too",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "flipCC",
          "normalized": "(a-\u003eb-\u003eCOrdering c)-\u003eb-\u003ea-\u003eCOrdering c",
          "package": "COrdering",
          "partial": "CC",
          "signature": "(a-\u003eb-\u003eCOrdering c)-\u003eb-\u003ea-\u003eCOrdering c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:flipCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a combining comparison from an ordinary comparison by keeping the first argument\n if they are deemed equal. The second argument is discarded in this case.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "fstByCC",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e a -\u003e b -\u003e COrdering a",
          "source": "src/Data-COrdering.html#fstByCC",
          "type": "function"
        },
        "index": {
          "description": "Create combining comparison from an ordinary comparison by keeping the first argument if they are deemed equal The second argument is discarded in this case",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "fstByCC",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering a",
          "package": "COrdering",
          "partial": "By CC",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:fstByCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combining comparison for an instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e which keeps the first argument\n if they are deemed equal. The second argument is discarded in this case.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "fstCC",
          "package": "COrdering",
          "signature": "a -\u003e a -\u003e COrdering a",
          "source": "src/Data-COrdering.html#fstCC",
          "type": "function"
        },
        "index": {
          "description": "combining comparison for an instance of Ord which keeps the first argument if they are deemed equal The second argument is discarded in this case",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "fstCC",
          "normalized": "a-\u003ea-\u003eCOrdering a",
          "package": "COrdering",
          "partial": "CC",
          "signature": "a-\u003ea-\u003eCOrdering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:fstCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a combining comparison from an ordinary comparison by keeping the second argument\n if they are deemed equal. The first argument is discarded in this case.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "sndByCC",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e a -\u003e b -\u003e COrdering b",
          "source": "src/Data-COrdering.html#sndByCC",
          "type": "function"
        },
        "index": {
          "description": "Create combining comparison from an ordinary comparison by keeping the second argument if they are deemed equal The first argument is discarded in this case",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "sndByCC",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering b",
          "package": "COrdering",
          "partial": "By CC",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:sndByCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combining comparison for an instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e which keeps the second argument\n if they are deemed equal. The first argument is discarded in this case.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "sndCC",
          "package": "COrdering",
          "signature": "a -\u003e a -\u003e COrdering a",
          "source": "src/Data-COrdering.html#sndCC",
          "type": "function"
        },
        "index": {
          "description": "combining comparison for an instance of Ord which keeps the second argument if they are deemed equal The first argument is discarded in this case",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "sndCC",
          "normalized": "a-\u003ea-\u003eCOrdering a",
          "package": "COrdering",
          "partial": "CC",
          "signature": "a-\u003ea-\u003eCOrdering a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:sndCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a combining comparison from an ordinary comparison by returning unit () where appropriate.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "unitByCC",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e a -\u003e b -\u003e COrdering ()",
          "source": "src/Data-COrdering.html#unitByCC",
          "type": "function"
        },
        "index": {
          "description": "Create combining comparison from an ordinary comparison by returning unit where appropriate",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "unitByCC",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering()",
          "package": "COrdering",
          "partial": "By CC",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003ea-\u003eb-\u003eCOrdering()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:unitByCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combining comparison for an instance of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e which returns unit () where appropriate.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "unitCC",
          "package": "COrdering",
          "signature": "a -\u003e a -\u003e COrdering ()",
          "source": "src/Data-COrdering.html#unitCC",
          "type": "function"
        },
        "index": {
          "description": "combining comparison for an instance of Ord which returns unit where appropriate",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "unitCC",
          "normalized": "a-\u003ea-\u003eCOrdering()",
          "package": "COrdering",
          "partial": "CC",
          "signature": "a-\u003ea-\u003eCOrdering()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:unitCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a combining comparison using the supplied comparison and combining function,\n which is applied if the comparison returns \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ewithByCC'\u003c/a\u003e\u003c/code\u003e for a stricter version\n of this function.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "withByCC",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e COrdering c",
          "source": "src/Data-COrdering.html#withByCC",
          "type": "function"
        },
        "index": {
          "description": "Create combining comparison using the supplied comparison and combining function which is applied if the comparison returns EQ See withByCC for stricter version of this function",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "withByCC",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c",
          "package": "COrdering",
          "partial": "By CC",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withByCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithByCC\u003c/a\u003e\u003c/code\u003e, except the combining function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "withByCC'",
          "package": "COrdering",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e COrdering c",
          "source": "src/Data-COrdering.html#withByCC%27",
          "type": "function"
        },
        "index": {
          "description": "Same as withByCC except the combining function is applied strictly",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "withByCC'",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c",
          "package": "COrdering",
          "partial": "By CC'",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003eCOrdering c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withByCC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a combining comparison using the supplied combining function, which is applied if\n \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ewithCC'\u003c/a\u003e\u003c/code\u003e for a stricter version of this function.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "withCC",
          "package": "COrdering",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e COrdering b",
          "source": "src/Data-COrdering.html#withCC",
          "type": "function"
        },
        "index": {
          "description": "Create combining comparison using the supplied combining function which is applied if compare returns EQ See withCC for stricter version of this function",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "withCC",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b",
          "package": "COrdering",
          "partial": "CC",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithCC\u003c/a\u003e\u003c/code\u003e, except the combining function is applied strictly.\n\u003c/p\u003e",
          "module": "Data.COrdering",
          "name": "withCC'",
          "package": "COrdering",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e COrdering b",
          "source": "src/Data-COrdering.html#withCC%27",
          "type": "function"
        },
        "index": {
          "description": "Same as withCC except the combining function is applied strictly",
          "hierarchy": "Data COrdering",
          "module": "Data.COrdering",
          "name": "withCC'",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b",
          "package": "COrdering",
          "partial": "CC'",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eCOrdering b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/COrdering/docs/Data-COrdering.html#v:withCC-39-"
      }
    }
  ]
]