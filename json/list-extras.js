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
        "word": "list-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides variants of the \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e\n functions which return the elements for which some function is\n maximized or minimized.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "Argmax",
          "package": "list-extras",
          "source": "src/Data-List-Extras-Argmax.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides variants of the maximum and minimum functions which return the elements for which some function is maximized or minimized",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "Argmax",
          "package": "list-extras",
          "partial": "Argmax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an element of the list which maximizes the function.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmax",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e a",
          "source": "src/Data-List-Extras-Argmax.html#argmax",
          "type": "function"
        },
        "index": {
          "description": "Return an element of the list which maximizes the function",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmax",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003ea",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an element of the list which maximizes the function\n according to a user-defined ordering.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxBy",
          "package": "list-extras",
          "signature": "(b -\u003e b -\u003e Ordering) -\u003e (a -\u003e b) -\u003e [a] -\u003e a",
          "source": "src/Data-List-Extras-Argmax.html#argmaxBy",
          "type": "function"
        },
        "index": {
          "description": "Return an element of the list which maximizes the function according to user-defined ordering",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(b-\u003ea)-\u003e[b]-\u003eb",
          "package": "list-extras",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eOrdering)-\u003e(a-\u003eb)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an element of the list which maximizes the function,\n and return the value of the function at that element as well.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxWithMax",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e (a, b)",
          "source": "src/Data-List-Extras-Argmax.html#argmaxWithMax",
          "type": "function"
        },
        "index": {
          "description": "Return an element of the list which maximizes the function and return the value of the function at that element as well",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxWithMax",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e(a,b)",
          "package": "list-extras",
          "partial": "With Max",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxWithMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an element of the list which maximizes the function\n according to a user-defined ordering, and return the value of\n the function at that element as well.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxWithMaxBy",
          "package": "list-extras",
          "signature": "(b -\u003e b -\u003e Ordering) -\u003e (a -\u003e b) -\u003e [a] -\u003e (a, b)",
          "source": "src/Data-List-Extras-Argmax.html#argmaxWithMaxBy",
          "type": "function"
        },
        "index": {
          "description": "Return an element of the list which maximizes the function according to user-defined ordering and return the value of the function at that element as well",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxWithMaxBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(b-\u003ea)-\u003e[b]-\u003e(b,a)",
          "package": "list-extras",
          "partial": "With Max By",
          "signature": "(b-\u003eb-\u003eOrdering)-\u003e(a-\u003eb)-\u003e[a]-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxWithMaxBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the list which maximize the function.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxes",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Extras-Argmax.html#argmaxes",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the list which maximize the function",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxes",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the list which maximize the function\n according to a user-defined ordering.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxesBy",
          "package": "list-extras",
          "signature": "(b -\u003e b -\u003e Ordering) -\u003e (a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Extras-Argmax.html#argmaxesBy",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the list which maximize the function according to user-defined ordering",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxesBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(b-\u003ea)-\u003e[b]-\u003e[b]",
          "package": "list-extras",
          "partial": "By",
          "signature": "(b-\u003eb-\u003eOrdering)-\u003e(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxesBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the list which maximize the function,\n and return the value of the function at those elements as well.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxesWithMax",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e ([a], b)",
          "source": "src/Data-List-Extras-Argmax.html#argmaxesWithMax",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the list which maximize the function and return the value of the function at those elements as well",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxesWithMax",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e([a],b)",
          "package": "list-extras",
          "partial": "With Max",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e([a],b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxesWithMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the list which maximize the function\n according to a user-defined ordering, and return the value of\n the function at those elements as well.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxesWithMaxBy",
          "package": "list-extras",
          "signature": "(b -\u003e b -\u003e Ordering) -\u003e (a -\u003e b) -\u003e [a] -\u003e ([a], b)",
          "source": "src/Data-List-Extras-Argmax.html#argmaxesWithMaxBy",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the list which maximize the function according to user-defined ordering and return the value of the function at those elements as well",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmaxesWithMaxBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(b-\u003ea)-\u003e[b]-\u003e([b],a)",
          "package": "list-extras",
          "partial": "With Max By",
          "signature": "(b-\u003eb-\u003eOrdering)-\u003e(a-\u003eb)-\u003e[a]-\u003e([a],b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmaxesWithMaxBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an element of the list which minimizes the function.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmin",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e a",
          "source": "src/Data-List-Extras-Argmax.html#argmin",
          "type": "function"
        },
        "index": {
          "description": "Return an element of the list which minimizes the function",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmin",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003ea",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an element of the list which minimizes the function,\n and return the value of the function at that element as well.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argminWithMin",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e (a, b)",
          "source": "src/Data-List-Extras-Argmax.html#argminWithMin",
          "type": "function"
        },
        "index": {
          "description": "Return an element of the list which minimizes the function and return the value of the function at that element as well",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argminWithMin",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e(a,b)",
          "package": "list-extras",
          "partial": "With Min",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argminWithMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the list which minimize the function.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argmins",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Extras-Argmax.html#argmins",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the list which minimize the function",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argmins",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argmins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the list which minimize the function,\n and return the value of the function at those elements as well.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "argminsWithMin",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e ([a], b)",
          "source": "src/Data-List-Extras-Argmax.html#argminsWithMin",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the list which minimize the function and return the value of the function at those elements as well",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "argminsWithMin",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e([a],b)",
          "package": "list-extras",
          "partial": "With Min",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e([a],b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:argminsWithMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list function safely, i.e. when the list is non-empty.\n All other functions will throw errors on empty lists, so use\n this to make your own safe variations.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Argmax",
          "name": "catchNull",
          "package": "list-extras",
          "signature": "([a] -\u003e b) -\u003e [a] -\u003e Maybe b",
          "source": "src/Data-List-Extras-Argmax.html#catchNull",
          "type": "function"
        },
        "index": {
          "description": "Apply list function safely i.e when the list is non-empty All other functions will throw errors on empty lists so use this to make your own safe variations",
          "hierarchy": "Data List Extras Argmax",
          "module": "Data.List.Extras.Argmax",
          "name": "catchNull",
          "normalized": "([a]-\u003eb)-\u003e[a]-\u003eMaybe b",
          "package": "list-extras",
          "partial": "Null",
          "signature": "([a]-\u003eb)-\u003e[a]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Argmax.html#v:catchNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides least-strict functions for getting a list's\n length and doing natural things with it.\n\u003c/p\u003e\u003cp\u003eThe regular version of \u003ccode\u003elength\u003c/code\u003e will traverse the entire spine\n of the list in order to return an answer. For comparing the\n length against some bound, that is by far too strict. Being too\n strict can cause a space leak by expanding a lazy list before\n necessary (or more than is ever necessary). And it can lead to\n unnecessarily non-terminating programs when trying to determine\n if an infinite list is longer or shorter than some finite bound.\n\u003c/p\u003e\u003cp\u003eA nicer version of \u003ccode\u003elength\u003c/code\u003e would return some lazy approximation\n of an answer which retains the proper semantics. An option for\n doing this is to return Peano integers which can be decremented\n as much as necessary and no further (i.e. at most one more than\n the bound). Of course, Peano integers are woefully inefficient.\n This module provides functions with the same lazy effect but\n does so efficiently instead.\n\u003c/p\u003e\u003cp\u003eAs of version 0.3.0 the GHC rules to automatically rewrite\n certain calls to \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e into our least-strict versions have\n been \u003cem\u003eremoved\u003c/em\u003e for more consistent and predictable semantics.\n All clients should explicitly call these least-strict functions\n if they want the least-strict behavior.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Extras.LazyLength",
          "name": "LazyLength",
          "package": "list-extras",
          "source": "src/Data-List-Extras-LazyLength.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides least-strict functions for getting list length and doing natural things with it The regular version of length will traverse the entire spine of the list in order to return an answer For comparing the length against some bound that is by far too strict Being too strict can cause space leak by expanding lazy list before necessary or more than is ever necessary And it can lead to unnecessarily non-terminating programs when trying to determine if an infinite list is longer or shorter than some finite bound nicer version of length would return some lazy approximation of an answer which retains the proper semantics An option for doing this is to return Peano integers which can be decremented as much as necessary and no further i.e at most one more than the bound Of course Peano integers are woefully inefficient This module provides functions with the same lazy effect but does so efficiently instead As of version the GHC rules to automatically rewrite certain calls to length into our least-strict versions have been removed for more consistent and predictable semantics All clients should explicitly call these least-strict functions if they want the least-strict behavior",
          "hierarchy": "Data List Extras LazyLength",
          "module": "Data.List.Extras.LazyLength",
          "name": "LazyLength",
          "package": "list-extras",
          "partial": "Lazy Length",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-LazyLength.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e which is least-strict for comparing\n against a boundary length.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elengthBound\u003c/code\u003e is polymorphic in the return of the helper\n function so we can use \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e. If you want to use any other functions, know\n that we only preserve the ordering of the list's length vs the\n boundary length and so the function should not rely on the true\n values of either of the numbers being compared.\n\u003c/p\u003e",
          "module": "Data.List.Extras.LazyLength",
          "name": "lengthBound",
          "package": "list-extras",
          "signature": "Int -\u003e (Int -\u003e Int -\u003e a) -\u003e [b] -\u003e a",
          "source": "src/Data-List-Extras-LazyLength.html#lengthBound",
          "type": "function"
        },
        "index": {
          "description": "variant of length which is least-strict for comparing against boundary length lengthBound is polymorphic in the return of the helper function so we can use compare as well as If you want to use any other functions know that we only preserve the ordering of the list length vs the boundary length and so the function should not rely on the true values of either of the numbers being compared",
          "hierarchy": "Data List Extras LazyLength",
          "module": "Data.List.Extras.LazyLength",
          "name": "lengthBound",
          "normalized": "Int-\u003e(Int-\u003eInt-\u003ea)-\u003e[b]-\u003ea",
          "package": "list-extras",
          "partial": "Bound",
          "signature": "Int-\u003e(Int-\u003eInt-\u003ea)-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-LazyLength.html#v:lengthBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e which is least-strict for comparing\n the lengths of two lists. This is as strict as the length of the\n shorter list (which allows comparing an infinite list against a\n finite list).\n\u003c/p\u003e\u003cp\u003eIf you're going to immediately follow this with a \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function\n then see \u003ca\u003eData.List.Extras.Pair\u003c/a\u003e instead.\n\u003c/p\u003e",
          "module": "Data.List.Extras.LazyLength",
          "name": "lengthCompare",
          "package": "list-extras",
          "signature": "[a] -\u003e [b] -\u003e Ordering",
          "source": "src/Data-List-Extras-LazyLength.html#lengthCompare",
          "type": "function"
        },
        "index": {
          "description": "variant of length which is least-strict for comparing the lengths of two lists This is as strict as the length of the shorter list which allows comparing an infinite list against finite list If you re going to immediately follow this with zip function then see Data.List.Extras.Pair instead",
          "hierarchy": "Data List Extras LazyLength",
          "module": "Data.List.Extras.LazyLength",
          "name": "lengthCompare",
          "normalized": "[a]-\u003e[b]-\u003eOrdering",
          "package": "list-extras",
          "partial": "Compare",
          "signature": "[a]-\u003e[b]-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-LazyLength.html#v:lengthCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides safe zipping functions which will fail\n (return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) on uneven length lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "Pair",
          "package": "list-extras",
          "source": "src/Data-List-Extras-Pair.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides safe zipping functions which will fail return Nothing on uneven length lists",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "Pair",
          "package": "list-extras",
          "partial": "Pair",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bijection from a list of functions and a list of arguments\n to a list of results of applying the functions bijectively.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "biject",
          "package": "list-extras",
          "signature": "[a -\u003e b] -\u003e [a] -\u003e Maybe [b]",
          "source": "src/Data-List-Extras-Pair.html#biject",
          "type": "function"
        },
        "index": {
          "description": "bijection from list of functions and list of arguments to list of results of applying the functions bijectively",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "biject",
          "normalized": "[a-\u003eb]-\u003e[a]-\u003eMaybe[b]",
          "package": "list-extras",
          "signature": "[a-\u003eb]-\u003e[a]-\u003eMaybe[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:biject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ebiject\u003c/a\u003e\u003c/code\u003e that applies functions strictly. N.B.\n the list is still lazily evaluated, this just makes the functions\n strict in their argument.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "biject'",
          "package": "list-extras",
          "signature": "[a -\u003e b] -\u003e [a] -\u003e Maybe [b]",
          "source": "src/Data-List-Extras-Pair.html#biject%27",
          "type": "function"
        },
        "index": {
          "description": "version of biject that applies functions strictly N.B the list is still lazily evaluated this just makes the functions strict in their argument",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "biject'",
          "normalized": "[a-\u003eb]-\u003e[a]-\u003eMaybe[b]",
          "package": "list-extras",
          "signature": "[a-\u003eb]-\u003e[a]-\u003eMaybe[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:biject-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "pair",
          "package": "list-extras",
          "signature": "[a] -\u003e [b] -\u003e Maybe [(a, b)]",
          "source": "src/Data-List-Extras-Pair.html#pair",
          "type": "function"
        },
        "index": {
          "description": "safe version of zip",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "pair",
          "normalized": "[a]-\u003e[b]-\u003eMaybe[(a,b)]",
          "package": "list-extras",
          "signature": "[a]-\u003e[b]-\u003eMaybe[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e that uses a user-defined list homomorphism.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "pairBy",
          "package": "list-extras",
          "signature": "((a, b) -\u003e d -\u003e d) -\u003e d -\u003e [a] -\u003e [b] -\u003e Maybe d",
          "source": "src/Data-List-Extras-Pair.html#pairBy",
          "type": "function"
        },
        "index": {
          "description": "safe version of zip that uses user-defined list homomorphism",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "pairBy",
          "normalized": "((a,b)-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003eMaybe c",
          "package": "list-extras",
          "partial": "By",
          "signature": "((a,b)-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003eMaybe d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:pairBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "pairWith",
          "package": "list-extras",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e Maybe [c]",
          "source": "src/Data-List-Extras-Pair.html#pairWith",
          "type": "function"
        },
        "index": {
          "description": "safe version of zipWith",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "pairWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003eMaybe[c]",
          "package": "list-extras",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003eMaybe[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:pairWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e. The first argument is a tuple\n homomorphism (i.e. a function for how to combine values from the\n two lists), the second two arguments form a list homomorphism\n (i.e. so you can \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e the \u003ccode\u003e[c]\u003c/code\u003e list directly without actually\n constructing it).\n\u003c/p\u003e\u003cp\u003eIn order to evaluate to WHNF \u003ccode\u003e\u003ca\u003epairWithBy\u003c/a\u003e\u003c/code\u003e is strict in both list\n arguments, as it must be, to determine that the lists are of the\n same length. This means it can survive one infinite list (yielding\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e) but that it can't survive two. The implementation is\n very efficient and uses a tight tail-recursive loop, however\n with extremely long lists it will be churning through heap and\n that tightness can make it hard to interrupt (lists of 1 million\n elements return in 1~2 seconds, but lists of 10 million can lock\n your system up).\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "pairWithBy",
          "package": "list-extras",
          "signature": "(a -\u003e b -\u003e c) -\u003e (c -\u003e d -\u003e d) -\u003e d -\u003e [a] -\u003e [b] -\u003e Maybe d",
          "source": "src/Data-List-Extras-Pair.html#pairWithBy",
          "type": "function"
        },
        "index": {
          "description": "generic version of pair The first argument is tuple homomorphism i.e function for how to combine values from the two lists the second two arguments form list homomorphism i.e so you can foldr the list directly without actually constructing it In order to evaluate to WHNF pairWithBy is strict in both list arguments as it must be to determine that the lists are of the same length This means it can survive one infinite list yielding Nothing but that it can survive two The implementation is very efficient and uses tight tail-recursive loop however with extremely long lists it will be churning through heap and that tightness can make it hard to interrupt lists of million elements return in seconds but lists of million can lock your system up",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "pairWithBy",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003eMaybe d",
          "package": "list-extras",
          "partial": "With By",
          "signature": "(a-\u003eb-\u003ec)-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003eMaybe d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:pairWithBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e that uses a user-defined list homomorphism.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "zipBy",
          "package": "list-extras",
          "signature": "((a, b) -\u003e d -\u003e d) -\u003e d -\u003e [a] -\u003e [b] -\u003e d",
          "source": "src/Data-List-Extras-Pair.html#zipBy",
          "type": "function"
        },
        "index": {
          "description": "version of zip that uses user-defined list homomorphism",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "zipBy",
          "normalized": "((a,b)-\u003ec-\u003ec)-\u003ec-\u003e[a]-\u003e[b]-\u003ec",
          "package": "list-extras",
          "partial": "By",
          "signature": "((a,b)-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:zipBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsafe variant of \u003ccode\u003e\u003ca\u003epairWithBy\u003c/a\u003e\u003c/code\u003e to fill out the interface.\n\u003c/p\u003e",
          "module": "Data.List.Extras.Pair",
          "name": "zipWithBy",
          "package": "list-extras",
          "signature": "(a -\u003e b -\u003e c) -\u003e (c -\u003e d -\u003e d) -\u003e d -\u003e [a] -\u003e [b] -\u003e d",
          "source": "src/Data-List-Extras-Pair.html#zipWithBy",
          "type": "function"
        },
        "index": {
          "description": "An unsafe variant of pairWithBy to fill out the interface",
          "hierarchy": "Data List Extras Pair",
          "module": "Data.List.Extras.Pair",
          "name": "zipWithBy",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003ed",
          "package": "list-extras",
          "partial": "With By",
          "signature": "(a-\u003eb-\u003ec)-\u003e(c-\u003ed-\u003ed)-\u003ed-\u003e[a]-\u003e[b]-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras-Pair.html#v:zipWithBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a single header for all \u003ccode\u003eData.List.Extras.*\u003c/code\u003e\n modules and provides a small number of other utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Extras",
          "name": "Extras",
          "package": "list-extras",
          "source": "src/Data-List-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides single header for all Data.List.Extras modules and provides small number of other utility functions",
          "hierarchy": "Data List Extras",
          "module": "Data.List.Extras",
          "name": "Extras",
          "package": "list-extras",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern matching for lists, as a first-class function. (Could\n also be considered as a non-recursive \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.) If the list\n argument is \u003ccode\u003e[]\u003c/code\u003e then the default argument is returned; otherwise\n the function is called with the head and tail of the list.\n\u003c/p\u003e",
          "module": "Data.List.Extras",
          "name": "list",
          "package": "list-extras",
          "signature": "(a -\u003e [a] -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/Data-List-Extras.html#list",
          "type": "function"
        },
        "index": {
          "description": "Pattern matching for lists as first-class function Could also be considered as non-recursive foldr If the list argument is then the default argument is returned otherwise the function is called with the head and tail of the list",
          "hierarchy": "Data List Extras",
          "module": "Data.List.Extras",
          "name": "list",
          "normalized": "(a-\u003e[a]-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "list-extras",
          "signature": "(a-\u003e[a]-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Data-List-Extras.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ca\u003ePrelude\u003c/a\u003e but removing all the list\n functions. This is helpful for modules that overload those\n function names to work for other types. Note that on GHC 7.6 and\n above \u003ccode\u003ecatch\u003c/code\u003e is no longer exported from the Prelude, and also\n not re-exported from here; whereas, on earlier versions of GHC\n (and non-GHC compilers) we still re-export it.\n\u003c/p\u003e\u003cp\u003eBe sure to disable the implicit importing of the prelude when\n you import this one (by passing \u003ccode\u003e-fno-implicit-prelude\u003c/code\u003e for GHC,\n or by explicitly importing the prelude with an empty import list\n for most implementations).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Prelude.Listless",
          "name": "Listless",
          "package": "list-extras",
          "source": "src/Prelude-Listless.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the Prelude but removing all the list functions This is helpful for modules that overload those function names to work for other types Note that on GHC and above catch is no longer exported from the Prelude and also not re-exported from here whereas on earlier versions of GHC and non-GHC compilers we still re-export it Be sure to disable the implicit importing of the prelude when you import this one by passing fno-implicit-prelude for GHC or by explicitly importing the prelude with an empty import list for most implementations",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Listless",
          "package": "list-extras",
          "partial": "Listless",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Bool",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Bool",
          "package": "list-extras",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class is used to name the upper and lower limits of a\n type.  \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e is not a superclass of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e since types that are not\n totally ordered may also have upper and lower bounds.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class may be derived for any enumeration type;\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e is the first constructor listed in the \u003ccode\u003edata\u003c/code\u003e declaration\n and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is the last.\n \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e may also be derived for single-constructor datatypes whose\n constituent types are in \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Bounded",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "The Bounded class is used to name the upper and lower limits of type Ord is not superclass of Bounded since types that are not totally ordered may also have upper and lower bounds The Bounded class may be derived for any enumeration type minBound is the first constructor listed in the data declaration and maxBound is the last Bounded may also be derived for single-constructor datatypes whose constituent types are in Bounded",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Bounded",
          "package": "list-extras",
          "partial": "Bounded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is an enumeration whose values represent\nUnicode (or equivalently ISO/IEC 10646) characters (see\n\u003ca\u003ehttp://www.unicode.org/\u003c/a\u003e for details).  This set extends the ISO 8859-1\n(Latin-1) character set (the first 256 characters), which is itself an extension\nof the ASCII character set (the first 128 characters).  A character literal in\nHaskell has type \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to or from the corresponding \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value defined\nby Unicode, use \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from the\n\u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class respectively (or equivalently \u003ccode\u003eord\u003c/code\u003e and \u003ccode\u003echr\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Char",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "The character type Char is an enumeration whose values represent Unicode or equivalently ISO IEC characters see http www.unicode.org for details This set extends the ISO Latin-1 character set the first characters which is itself an extension of the ASCII character set the first characters character literal in Haskell has type Char To convert Char to or from the corresponding Int value defined by Unicode use toEnum and fromEnum from the Enum class respectively or equivalently ord and chr",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Char",
          "package": "list-extras",
          "partial": "Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Double",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Double",
          "package": "list-extras",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type represents values with two possibilities: a value of\ntype \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e a b\u003c/code\u003e is either \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type is sometimes used to represent a value which is\neither correct or an error; by convention, the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e constructor is\nused to hold an error value and the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e constructor is used to\nhold a correct value (mnemonic: \"right\" also means \"correct\").\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Either",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "The Either type represents values with two possibilities value of type Either is either Left or Right The Either type is sometimes used to represent value which is either correct or an error by convention the Left constructor is used to hold an error value and the Right constructor is used to hold correct value mnemonic right also means correct",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Either",
          "package": "list-extras",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "Enum",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Enum",
          "package": "list-extras",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class defines equality (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and inequality (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e).\n All the basic datatypes exported by the \u003ca\u003ePrelude\u003c/a\u003e are instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e may be derived for any datatype whose constituents are also\n instances of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Eq",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "The Eq class defines equality and inequality All the basic datatypes exported by the Prelude are instances of Eq and Eq may be derived for any datatype whose constituents are also instances of Eq Minimal complete definition either or",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Eq",
          "package": "list-extras",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "FilePath",
          "package": "list-extras",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "FilePath",
          "package": "list-extras",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Float",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Float",
          "package": "list-extras",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigonometric and hyperbolic functions and related functions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e,\n      \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Floating",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Trigonometric and hyperbolic functions and related functions Minimal complete definition pi exp log sin cos sinh cosh asin acos atan asinh acosh and atanh",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Floating",
          "package": "list-extras",
          "partial": "Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional numbers, supporting real division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e and (\u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Fractional",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Fractional numbers supporting real division Minimal complete definition fromRational and recip or",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Fractional",
          "package": "list-extras",
          "partial": "Fractional",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Fractional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class is used for types that can be mapped over.\nInstances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e fmap id  ==  id\n fmap (f . g)  ==  fmap f . fmap g\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\nsatisfy these laws.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Functor",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "The Functor class is used for types that can be mapped over Instances of Functor should satisfy the following laws fmap id id fmap fmap fmap The instances of Functor for lists Maybe and IO satisfy these laws",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Functor",
          "package": "list-extras",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a computation which, when performed,\ndoes some I/O before returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is really only one way to \"perform\" an I/O action: bind it to\n\u003ccode\u003eMain.main\u003c/code\u003e in your program.  When your program is run, the I/O will\nbe performed.  It isn't possible to perform I/O from an arbitrary\nfunction, unless that function is itself in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and called\nat some point, directly or indirectly, from \u003ccode\u003eMain.main\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is a monad, so \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions can be combined using either the do-notation\nor the \u003ccode\u003e\u003e\u003e\u003c/code\u003e and \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operations from the \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "IO",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "value of type IO is computation which when performed does some before returning value of type There is really only one way to perform an action bind it to Main.main in your program When your program is run the will be performed It isn possible to perform from an arbitrary function unless that function is itself in the IO monad and called at some point directly or indirectly from Main.main IO is monad so IO actions can be combined using either the do-notation or the and operations from the Monad class",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "IO",
          "package": "list-extras",
          "partial": "IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:IO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell 98 type for exceptions in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n Any I/O operation may raise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e instead of returning a result.\n For a more general type of exception, including also those that arise\n in pure code, see \u003ca\u003eControl.Exception.Exception\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn Haskell 98, this is an opaque type.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "IOError",
          "package": "list-extras",
          "type": "type"
        },
        "index": {
          "description": "The Haskell type for exceptions in the IO monad Any operation may raise an IOError instead of returning result For more general type of exception including also those that arise in pure code see Control.Exception.Exception In Haskell this is an opaque type",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "IOError",
          "package": "list-extras",
          "partial": "IOError",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:IOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Int",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Int",
          "package": "list-extras",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision integers.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Integer",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "Arbitrary-precision integers",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Integer",
          "package": "list-extras",
          "partial": "Integer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Integral",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Integral numbers supporting integer division Minimal complete definition quotRem and toInteger",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Integral",
          "package": "list-extras",
          "partial": "Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Maybe",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Maybe",
          "package": "list-extras",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class defines the basic operations over a \u003cem\u003emonad\u003c/em\u003e,\na concept from a branch of mathematics known as \u003cem\u003ecategory theory\u003c/em\u003e.\nFrom the perspective of a Haskell programmer, however, it is best to\nthink of a monad as an \u003cem\u003eabstract datatype\u003c/em\u003e of actions.\nHaskell's \u003ccode\u003edo\u003c/code\u003e expressions provide a convenient syntax for writing\nmonadic expressions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cpre\u003e return a \u003e\u003e= k  ==  k a\n m \u003e\u003e= return  ==  m\n m \u003e\u003e= (\\x -\u003e k x \u003e\u003e= h)  ==  (m \u003e\u003e= k) \u003e\u003e= h\n\u003c/pre\u003e\u003cp\u003eInstances of both \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e should additionally satisfy the law:\n\u003c/p\u003e\u003cpre\u003e fmap f xs  ==  xs \u003e\u003e= return . f\n\u003c/pre\u003e\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e for lists, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ndefined in the \u003ca\u003ePrelude\u003c/a\u003e satisfy these laws.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Monad",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "The Monad class defines the basic operations over monad concept from branch of mathematics known as category theory From the perspective of Haskell programmer however it is best to think of monad as an abstract datatype of actions Haskell do expressions provide convenient syntax for writing monadic expressions Minimal complete definition and return Instances of Monad should satisfy the following laws return return Instances of both Monad and Functor should additionally satisfy the law fmap xs xs return The instances of Monad for lists Maybe and IO defined in the Prelude satisfy these laws",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Monad",
          "package": "list-extras",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic numeric class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(-)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Num",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Basic numeric class Minimal complete definition all except negate or",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Num",
          "package": "list-extras",
          "partial": "Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class is used for totally ordered datatypes.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e can be derived for any user-defined\n datatype whose constituent types are in \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.  The declared order\n of the constructors in the data declaration determines the ordering\n in derived \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances.  The \u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e datatype allows a single\n comparison to determine the precise ordering of two objects.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: either \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e.\n Using \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e can be more efficient for complex types.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Ord",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "The Ord class is used for totally ordered datatypes Instances of Ord can be derived for any user-defined datatype whose constituent types are in Ord The declared order of the constructors in the data declaration determines the ordering in derived Ord instances The Ordering datatype allows single comparison to determine the precise ordering of two objects Minimal complete definition either compare or Using compare can be more efficient for complex types",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Ord",
          "package": "list-extras",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Ordering",
          "package": "list-extras",
          "type": "data"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Ordering",
          "package": "list-extras",
          "partial": "Ordering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary-precision rational numbers, represented as a ratio of\n two \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values.  A rational number may be constructed using\n the \u003ccode\u003e\u003ca\u003e%\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "Rational",
          "package": "list-extras",
          "type": "type"
        },
        "index": {
          "description": "Arbitrary-precision rational numbers represented as ratio of two Integer values rational number may be constructed using the operator",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Rational",
          "package": "list-extras",
          "partial": "Rational",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, producing values.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e (or, for GHC only, \u003ccode\u003e\u003ca\u003ereadPrec\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e make the following assumptions, which\n derived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e obey:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then the\n   derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance will parse only infix applications of\n   the constructor (not the prefix form).\n\u003c/li\u003e\u003cli\u003e Associativity is not used to reduce the occurrence of parentheses,\n   although precedence may be.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, the derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e\n   will parse only the record-syntax form, and furthermore, the fields\n   must be given in the same order as the original declaration.\n\u003c/li\u003e\u003cli\u003e The derived \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance allows arbitrary Haskell whitespace\n   between tokens of the input string.  Extra parentheses are also\n   allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e in Haskell 98 is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readsPrec d r =  readParen (d \u003e app_prec)\n                          (\\r -\u003e [(Leaf m,t) |\n                                  (\"Leaf\",s) \u003c- lex r,\n                                  (m,t) \u003c- readsPrec (app_prec+1) s]) r\n\n                       ++ readParen (d \u003e up_prec)\n                          (\\r -\u003e [(u:^:v,w) |\n                                  (u,s) \u003c- readsPrec (up_prec+1) r,\n                                  (\":^:\",t) \u003c- lex s,\n                                  (v,w) \u003c- readsPrec (up_prec+1) t]) r\n\n           where app_prec = 10\n                 up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is unused.\n\u003c/p\u003e\u003cp\u003eThe derived instance in GHC is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Read a) =\u003e Read (Tree a) where\n\n         readPrec = parens $ (prec app_prec $ do\n                                  Ident \"Leaf\" \u003c- lexP\n                                  m \u003c- step readPrec\n                                  return (Leaf m))\n\n                      +++ (prec up_prec $ do\n                                  u \u003c- step readPrec\n                                  Symbol \":^:\" \u003c- lexP\n                                  v \u003c- step readPrec\n                                  return (u :^: v))\n\n           where app_prec = 10\n                 up_prec = 5\n\n         readListPrec = readListPrecDefault\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "Read",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Parsing of String producing values Minimal complete definition readsPrec or for GHC only readPrec Derived instances of Read make the following assumptions which derived instances of Show obey If the constructor is defined to be an infix operator then the derived Read instance will parse only infix applications of the constructor not the prefix form Associativity is not used to reduce the occurrence of parentheses although precedence may be If the constructor is defined using record syntax the derived Read will parse only the record-syntax form and furthermore the fields must be given in the same order as the original declaration The derived Read instance allows arbitrary Haskell whitespace between tokens of the input string Extra parentheses are also allowed For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Read in Haskell is equivalent to instance Read Read Tree where readsPrec readParen app prec Leaf Leaf lex readsPrec app prec readParen up prec readsPrec up prec lex readsPrec up prec where app prec up prec Note that right-associativity of is unused The derived instance in GHC is equivalent to instance Read Read Tree where readPrec parens prec app prec do Ident Leaf lexP step readPrec return Leaf prec up prec do step readPrec Symbol lexP step readPrec return where app prec up prec readListPrec readListPrecDefault",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Read",
          "package": "list-extras",
          "partial": "Read",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for a type \u003ccode\u003ea\u003c/code\u003e, represented as a function that takes a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and returns a list of possible parses as \u003ccode\u003e(a,\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eNote that this kind of backtracking parser is very inefficient;\n reading a large structure may be quite slow (cf \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "ReadS",
          "package": "list-extras",
          "type": "type"
        },
        "index": {
          "description": "parser for type represented as function that takes String and returns list of possible parses as String pairs Note that this kind of backtracking parser is very inefficient reading large structure may be quite slow cf ReadP",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "ReadS",
          "package": "list-extras",
          "partial": "Read",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:ReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Real",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Real",
          "package": "list-extras",
          "partial": "Real",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient, machine-independent access to the components of a\n floating-point number.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n      all except \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "RealFloat",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Efficient machine-independent access to the components of floating-point number Minimal complete definition all except exponent significand scaleFloat and atan2",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "RealFloat",
          "package": "list-extras",
          "partial": "Real Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:RealFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting components of fractions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "RealFrac",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Extracting components of fractions Minimal complete definition properFraction",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "RealFrac",
          "package": "list-extras",
          "partial": "Real Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:RealFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e have the following properties, which\n are compatible with derived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e infixr 5 :^:\n data Tree a =  Leaf a  |  Tree a :^: Tree a\n\u003c/pre\u003e\u003cp\u003ethe derived instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Show a) =\u003e Show (Tree a) where\n\n        showsPrec d (Leaf m) = showParen (d \u003e app_prec) $\n             showString \"Leaf \" . showsPrec (app_prec+1) m\n          where app_prec = 10\n\n        showsPrec d (u :^: v) = showParen (d \u003e up_prec) $\n             showsPrec (up_prec+1) u .\n             showString \" :^: \"      .\n             showsPrec (up_prec+1) v\n          where up_prec = 5\n\u003c/pre\u003e\u003cp\u003eNote that right-associativity of \u003ccode\u003e:^:\u003c/code\u003e is ignored.  For example,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e (Leaf 1 :^: Leaf 2 :^: Leaf 3)\u003c/code\u003e produces the string\n   \u003ccode\u003e\"Leaf 1 :^: (Leaf 2 :^: Leaf 3)\"\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude.Listless",
          "name": "Show",
          "package": "list-extras",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable String Minimal complete definition showsPrec or show Derived instances of Show have the following properties which are compatible with derived instances of Read The result of show is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then showsPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then show will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations infixr data Tree Leaf Tree Tree the derived instance of Show is equivalent to instance Show Show Tree where showsPrec Leaf showParen app prec showString Leaf showsPrec app prec where app prec showsPrec showParen up prec showsPrec up prec showString showsPrec up prec where up prec Note that right-associativity of is ignored For example show Leaf Leaf Leaf produces the string Leaf Leaf Leaf",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Show",
          "package": "list-extras",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eshows\u003c/code\u003e functions return a function that prepends the\n output \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  This allows constant-time\n concatenation of results using function composition.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "ShowS",
          "package": "list-extras",
          "type": "type"
        },
        "index": {
          "description": "The shows functions return function that prepends the output String to an existing String This allows constant-time concatenation of results using function composition",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "ShowS",
          "package": "list-extras",
          "partial": "Show",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:ShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a list of characters.  String constants in Haskell are values\n of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "String",
          "package": "list-extras",
          "type": "type"
        },
        "index": {
          "description": "String is list of characters String constants in Haskell are values of type String",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "String",
          "package": "list-extras",
          "partial": "String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#t:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(||)",
          "package": "list-extras",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "list-extras",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication operator.  This operator is redundant, since ordinary\n application \u003ccode\u003e(f x)\u003c/code\u003e means the same as \u003ccode\u003e(f \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e x)\u003c/code\u003e. However, \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e has\n low, right-associative binding precedence, so it sometimes allows\n parentheses to be omitted; for example:\n\u003c/p\u003e\u003cpre\u003e     f $ g $ h x  =  f (g (h x))\n\u003c/pre\u003e\u003cp\u003eIt is also useful in higher-order situations, such as \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e 0) xs\u003c/code\u003e,\n or \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e) fs xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "($)",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Application operator This operator is redundant since ordinary application means the same as However has low right-associative binding precedence so it sometimes allows parentheses to be omitted for example It is also useful in higher-order situations such as map xs or zipWith fs xs",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "($) $",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict (call-by-value) application, defined in terms of \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "($!)",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Strict call-by-value application defined in terms of seq",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "($!) $!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-36--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(&&)",
          "package": "list-extras",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "list-extras",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(*)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(**)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(**) **",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(+)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(-)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efractional division\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(/)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "fractional division",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(/=)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(/=) /=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(\u003c)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(\u003c) \u003c",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(\u003c=)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(\u003c=) \u003c=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e, but with the arguments interchanged.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(=\u003c\u003c)",
          "package": "list-extras",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Same as but with the arguments interchanged",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "list-extras",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(==)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(==) ==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(\u003e)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(\u003e) \u003e",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "(\u003e=)",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(\u003e=) \u003e=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, discarding any value produced\n by the first, like sequencing operators (such as the semicolon)\n in imperative languages.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(\u003e\u003e)",
          "package": "list-extras",
          "signature": "m a -\u003e m b -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions discarding any value produced by the first like sequencing operators such as the semicolon in imperative languages",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "list-extras",
          "signature": "m a-\u003em b-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequentially compose two actions, passing any value produced\n by the first as an argument to the second.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(\u003e\u003e=)",
          "package": "list-extras",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "type": "method"
        },
        "index": {
          "description": "Sequentially compose two actions passing any value produced by the first as an argument to the second",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "list-extras",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to a non-negative integral power\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(^)",
          "package": "list-extras",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to non-negative integral power",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraise a number to an integral power\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(^^)",
          "package": "list-extras",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "raise number to an integral power",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(^^) ^^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:-94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction composition.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "(.)",
          "package": "list-extras",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Function composition",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "(.) .",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "list-extras",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "EQ",
          "package": "list-extras",
          "signature": "EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "EQ",
          "package": "list-extras",
          "partial": "EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "False",
          "package": "list-extras",
          "signature": "False",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "False",
          "package": "list-extras",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "GT",
          "package": "list-extras",
          "signature": "GT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "GT",
          "package": "list-extras",
          "partial": "GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:GT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Just",
          "package": "list-extras",
          "signature": "Just a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Just",
          "package": "list-extras",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:Just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "LT",
          "package": "list-extras",
          "signature": "LT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "LT",
          "package": "list-extras",
          "partial": "LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:LT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Left",
          "package": "list-extras",
          "signature": "Left a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Left",
          "package": "list-extras",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Nothing",
          "package": "list-extras",
          "signature": "Nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Nothing",
          "package": "list-extras",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:Nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "Right",
          "package": "list-extras",
          "signature": "Right b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "Right",
          "package": "list-extras",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:Right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "True",
          "package": "list-extras",
          "signature": "True",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "True",
          "package": "list-extras",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute value.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "abs",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Absolute value",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "abs",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "acos",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "acos",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "acosh",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "acosh",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e write a literal string\n to a file.  To write a value of any printable type, as with \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e,\n use the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e function to convert the value to a string first.\n\u003c/p\u003e\u003cpre\u003e main = appendFile \"squares\" (show [(x,x*x) | x \u003c- [0,0.1..2]])\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "appendFile",
          "package": "list-extras",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the string str to the file file Note that writeFile and appendFile write literal string to file To write value of any printable type as with print use the show function to convert the value to string first main appendFile squares show",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "list-extras",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003easTypeOf\u003c/a\u003e\u003c/code\u003e is a type-restricted version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e.  It is usually\n used as an infix operator, and its typing forces its first argument\n (which is usually overloaded) to have the same type as the second.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "asTypeOf",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "asTypeOf is type-restricted version of const It is usually used as an infix operator and its typing forces its first argument which is usually overloaded to have the same type as the second",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "asTypeOf",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "partial": "Type Of",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:asTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "asin",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "asin",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "asinh",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "asinh",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "atan",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "atan",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea version of arctangent taking two real floating-point arguments.\n For real floating \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e computes the angle\n (from the positive x-axis) of the vector from the origin to the\n point \u003ccode\u003e(x,y)\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e returns a value in the range [\u003ccode\u003e-pi\u003c/code\u003e,\n \u003ccode\u003epi\u003c/code\u003e].  It follows the Common Lisp semantics for the origin when\n signed zeroes are supported.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y 1\u003c/code\u003e, with \u003ccode\u003ey\u003c/code\u003e in a type\n that is \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e, should return the same value as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e.\n A default definition of \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e is provided, but implementors\n can provide a more accurate implementation.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "atan2",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "version of arctangent taking two real floating-point arguments For real floating and atan2 computes the angle from the positive x-axis of the vector from the origin to the point atan2 returns value in the range pi pi It follows the Common Lisp semantics for the origin when signed zeroes are supported atan2 with in type that is RealFloat should return the same value as atan default definition of atan2 is provided but implementors can provide more accurate implementation",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "atan2",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:atan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "atanh",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "atanh",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "ceiling",
          "package": "list-extras",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "ceiling returns the least integer not less than",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "ceiling",
          "normalized": "a-\u003eb",
          "package": "list-extras",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "compare",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e Ordering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant function.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "const",
          "package": "list-extras",
          "signature": "a -\u003e b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Constant function",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "const",
          "normalized": "a-\u003eb-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "cos",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "cos",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "cosh",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "cosh",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "curry",
          "package": "list-extras",
          "signature": "((a, b) -\u003e c) -\u003e a -\u003e b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "curry converts an uncurried function to curried function",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "curry",
          "normalized": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "list-extras",
          "signature": "((a,b)-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e applied to a real floating-point\n number returns the significand expressed as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and an\n appropriately scaled exponent (an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e).  If \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e\n yields \u003ccode\u003e(m,n)\u003c/code\u003e, then \u003ccode\u003ex\u003c/code\u003e is equal in value to \u003ccode\u003em*b^^n\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e\n is the floating-point radix, and furthermore, either \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e\n are both zero or else \u003ccode\u003eb^(d-1) \u003c= \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e m \u003c b^d\u003c/code\u003e, where \u003ccode\u003ed\u003c/code\u003e is\n the value of \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n In particular, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e 0 = (0,0)\u003c/code\u003e. If the type\n contains a negative zero, also \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e (-0.0) = (0,0)\u003c/code\u003e.\n \u003cem\u003eThe result of\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis unspecified if either of\u003c/em\u003e\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e \u003cem\u003eis\u003c/em\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "decodeFloat",
          "package": "list-extras",
          "signature": "a -\u003e (Integer, Int)",
          "type": "method"
        },
        "index": {
          "description": "The function decodeFloat applied to real floating-point number returns the significand expressed as an Integer and an appropriately scaled exponent an Int If decodeFloat yields then is equal in value to where is the floating-point radix and furthermore either and are both zero or else d-1 abs where is the value of floatDigits In particular decodeFloat If the type contains negative zero also decodeFloat The result of decodeFloat is unspecified if either of isNaN or isInfinite is True",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "decodeFloat",
          "normalized": "a-\u003e(Integer,Int)",
          "package": "list-extras",
          "partial": "Float",
          "signature": "a-\u003e(Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:decodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward negative infinity\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "div",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward negative infinity",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "div",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "divMod",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous div and mod",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "divMod",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "list-extras",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:divMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n If the value is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, apply the first function to \u003ccode\u003ea\u003c/code\u003e;\n if it is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e, apply the second function to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "either",
          "package": "list-extras",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e Either a b -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Case analysis for the Either type If the value is Left apply the first function to if it is Right apply the second function to",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "list-extras",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e performs the inverse of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e in the\n sense that for finite \u003ccode\u003ex\u003c/code\u003e with the exception of \u003ccode\u003e-0.0\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003euncurry\u003c/code\u003e \u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) = x\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e m n\u003c/code\u003e is one of the two closest representable\n floating-point numbers to \u003ccode\u003em*b^^n\u003c/code\u003e (or \u003ccode\u003e&#177;Infinity\u003c/code\u003e if overflow\n occurs); usually the closer, but if \u003ccode\u003em\u003c/code\u003e contains too many bits,\n the result may be rounded in the wrong direction.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "encodeFloat",
          "package": "list-extras",
          "signature": "Integer -\u003e Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "encodeFloat performs the inverse of decodeFloat in the sense that for finite with the exception of uncurry encodeFloat decodeFloat encodeFloat is one of the two closest representable floating-point numbers to or Infinity if overflow occurs usually the closer but if contains too many bits the result may be rounded in the wrong direction",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "encodeFloat",
          "normalized": "Integer-\u003eInt-\u003ea",
          "package": "list-extras",
          "partial": "Float",
          "signature": "Integer-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:encodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "enumFrom",
          "package": "list-extras",
          "signature": "a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "list-extras",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "enumFromThen",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "list-extras",
          "partial": "From Then",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "enumFromThenTo",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "list-extras",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "enumFromTo",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of n..m",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "list-extras",
          "partial": "From To",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e stops execution and displays an error message.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "error",
          "package": "list-extras",
          "signature": "[Char] -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "error stops execution and displays an error message",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "error",
          "normalized": "[Char]-\u003ea",
          "package": "list-extras",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "even",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "even",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:even"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "exp",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "exp",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e corresponds to the second component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e 0 = 0\u003c/code\u003e and for finite nonzero \u003ccode\u003ex\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x = snd (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) + \u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e.\n If \u003ccode\u003ex\u003c/code\u003e is a finite floating-point number, it is equal in value to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignificand\u003c/a\u003e\u003c/code\u003e x * b ^^ \u003ccode\u003e\u003ca\u003eexponent\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e, where \u003ccode\u003eb\u003c/code\u003e is the\n floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "exponent",
          "package": "list-extras",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "exponent corresponds to the second component of decodeFloat exponent and for finite nonzero exponent snd decodeFloat floatDigits If is finite floating-point number it is equal in value to significand exponent where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "exponent",
          "normalized": "a-\u003eInt",
          "package": "list-extras",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message.  This operation is not part of the\n mathematical definition of a monad, but is invoked on pattern-match\n failure in a \u003ccode\u003edo\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "fail",
          "package": "list-extras",
          "signature": "String -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Fail with message This operation is not part of the mathematical definition of monad but is invoked on pattern-match failure in do expression",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "list-extras",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e takes its (first) two arguments in the reverse order of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "flip",
          "package": "list-extras",
          "signature": "(a -\u003e b -\u003e c) -\u003e b -\u003e a -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "flip takes its first two arguments in the reverse order of",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "flip",
          "normalized": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "list-extras",
          "signature": "(a-\u003eb-\u003ec)-\u003eb-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the number of digits of\n \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e in the significand\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "floatDigits",
          "package": "list-extras",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the number of digits of floatRadix in the significand",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "floatDigits",
          "normalized": "a-\u003eInt",
          "package": "list-extras",
          "partial": "Digits",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:floatDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the radix of the representation\n (often \u003ccode\u003e2\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "floatRadix",
          "package": "list-extras",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the radix of the representation often",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "floatRadix",
          "normalized": "a-\u003eInteger",
          "package": "list-extras",
          "partial": "Radix",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:floatRadix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea constant function, returning the lowest and highest values\n the exponent may assume\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "floatRange",
          "package": "list-extras",
          "signature": "a -\u003e (Int, Int)",
          "type": "method"
        },
        "index": {
          "description": "constant function returning the lowest and highest values the exponent may assume",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "floatRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "list-extras",
          "partial": "Range",
          "signature": "a-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:floatRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "floor",
          "package": "list-extras",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "floor returns the greatest integer not greater than",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "floor",
          "normalized": "a-\u003eb",
          "package": "list-extras",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "fmap",
          "package": "list-extras",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fmap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "list-extras",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "fromEnum",
          "package": "list-extras",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fromEnum",
          "normalized": "a-\u003eInt",
          "package": "list-extras",
          "partial": "Enum",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n An integer literal represents the application of the function\n \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e to the appropriate value of type \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e,\n so such literals have type \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "fromInteger",
          "package": "list-extras",
          "signature": "Integer -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from an Integer An integer literal represents the application of the function fromInteger to the appropriate value of type Integer so such literals have type Num",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fromInteger",
          "normalized": "Integer-\u003ea",
          "package": "list-extras",
          "partial": "Integer",
          "signature": "Integer-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fromInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion from integral types\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "fromIntegral",
          "package": "list-extras",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion from integral types",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fromIntegral",
          "normalized": "a-\u003eb",
          "package": "list-extras",
          "partial": "Integral",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fromIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion from a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e (that is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRatio\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n A floating literal stands for an application of \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e\n to a value of type \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, so such literals have type\n \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e a) =\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "fromRational",
          "package": "list-extras",
          "signature": "Rational -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Conversion from Rational that is Ratio Integer floating literal stands for an application of fromRational to value of type Rational so such literals have type Fractional",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fromRational",
          "normalized": "Rational-\u003ea",
          "package": "list-extras",
          "partial": "Rational",
          "signature": "Rational-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "fst",
          "package": "list-extras",
          "signature": "(a, b) -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Extract the first component of pair",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "fst",
          "normalized": "(a,b)-\u003ea",
          "package": "list-extras",
          "signature": "(a,b)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the non-negative factor of both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e of which\n every common factor of \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e is also a factor; for example\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 4 2 = 2\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e (-4) 6 = 2\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 4\u003c/code\u003e = \u003ccode\u003e4\u003c/code\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003egcd\u003c/a\u003e\u003c/code\u003e 0 0\u003c/code\u003e = \u003ccode\u003e0\u003c/code\u003e.\n (That is, the common divisor that is \"greatest\" in the divisibility\n preordering.)\n\u003c/p\u003e\u003cp\u003eNote: Since for signed fixed-width integer types, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e \u003c 0\u003c/code\u003e,\n the result may be negative if one of the arguments is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (and\n necessarily is if the other is \u003ccode\u003e0\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e) for such types.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "gcd",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "gcd is the non-negative factor of both and of which every common factor of and is also factor for example gcd gcd gcd gcd That is the common divisor that is greatest in the divisibility preordering Note Since for signed fixed-width integer types abs minBound the result may be negative if one of the arguments is minBound and necessarily is if the other is or minBound for such types",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "gcd",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:gcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a character from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "getChar",
          "package": "list-extras",
          "signature": "IO Char",
          "type": "function"
        },
        "index": {
          "description": "Read character from the standard input device same as hGetChar stdin",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "getChar",
          "package": "list-extras",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:getChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "getContents",
          "package": "list-extras",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "getContents",
          "package": "list-extras",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from the standard input device\n (same as \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "getLine",
          "package": "list-extras",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "Read line from the standard input device same as hGetLine stdin",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "getLine",
          "package": "list-extras",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "id",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Identity function",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eString-\u003eString\u003c/code\u003e\n as its argument.  The entire input from the standard input device is\n passed to this function as its argument, and the resulting string is\n output on the standard output device.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "interact",
          "package": "list-extras",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The interact function takes function of type String String as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "list-extras",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "ioError",
          "package": "list-extras",
          "signature": "IOError -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Raise an IOError in the IO monad",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "ioError",
          "normalized": "IOError-\u003eIO a",
          "package": "list-extras",
          "partial": "Error",
          "signature": "IOError-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is too small to be represented in\n normalized format\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "isDenormalized",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is too small to be represented in normalized format",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "isDenormalized",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "partial": "Denormalized",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:isDenormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE floating point number\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "isIEEE",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE floating point number",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "isIEEE",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "partial": "IEEE",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:isIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE infinity or negative infinity\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "isInfinite",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE infinity or negative infinity",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "isInfinite",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "partial": "Infinite",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE \"not-a-number\" (NaN) value\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "isNaN",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE not-a-number NaN value",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "isNaN",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "partial": "Na",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE negative zero\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "isNegativeZero",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "method"
        },
        "index": {
          "description": "True if the argument is an IEEE negative zero",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "isNegativeZero",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "partial": "Negative Zero",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:isNegativeZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elcm\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e is the smallest positive integer that both \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e divide.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "lcm",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "lcm is the smallest positive integer that both and divide",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "lcm",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:lcm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e function reads a single lexeme from the input, discarding\n initial white space, and returning the characters that constitute the\n lexeme.  If the input string contains only white space, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e returns a\n single successful `lexeme' consisting of the empty string.  (Thus\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e \"\" = [(\"\",\"\")]\u003c/code\u003e.)  If there is no legal lexeme at the\n beginning of the input string, \u003ccode\u003e\u003ca\u003elex\u003c/a\u003e\u003c/code\u003e fails (i.e. returns \u003ccode\u003e[]\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis lexer is not completely faithful to the Haskell lexical syntax\n in the following respects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Qualified names are not handled properly\n\u003c/li\u003e\u003cli\u003e Octal and hexadecimal numerics are not recognized as a single token\n\u003c/li\u003e\u003cli\u003e Comments are not treated properly\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Prelude.Listless",
          "name": "lex",
          "package": "list-extras",
          "signature": "ReadS String",
          "type": "function"
        },
        "index": {
          "description": "The lex function reads single lexeme from the input discarding initial white space and returning the characters that constitute the lexeme If the input string contains only white space lex returns single successful lexeme consisting of the empty string Thus lex If there is no legal lexeme at the beginning of the input string lex fails i.e returns This lexer is not completely faithful to the Haskell lexical syntax in the following respects Qualified names are not handled properly Octal and hexadecimal numerics are not recognized as single token Comments are not treated properly",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "lex",
          "package": "list-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "log",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "log",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "logBase",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "logBase",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "partial": "Base",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "max",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "max",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "maxBound",
          "package": "list-extras",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "maxBound",
          "package": "list-extras",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:maxBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e function takes a default value, a function, and a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the function returns the\n default value.  Otherwise, it applies the function to the value inside\n the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e and returns the result.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "maybe",
          "package": "list-extras",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The maybe function takes default value function and Maybe value If the Maybe value is Nothing the function returns the default value Otherwise it applies the function to the value inside the Just and returns the result",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "list-extras",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "min",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "min",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "minBound",
          "package": "list-extras",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "minBound",
          "package": "list-extras",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:minBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger modulus, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `div` y)*y + (x `mod` y) == x\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "mod",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer modulus satisfying div mod",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "mod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary negation.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "negate",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Unary negation",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "not",
          "package": "list-extras",
          "signature": "Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean not",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "list-extras",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "odd",
          "package": "list-extras",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "odd",
          "normalized": "a-\u003eBool",
          "package": "list-extras",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:odd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "otherwise",
          "package": "list-extras",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "otherwise",
          "package": "list-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "pi",
          "package": "list-extras",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "pi",
          "package": "list-extras",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "pred",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the predecessor of value For numeric types pred subtracts",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "print",
          "package": "list-extras",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "list-extras",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e takes a real fractional number \u003ccode\u003ex\u003c/code\u003e\n and returns a pair \u003ccode\u003e(n,f)\u003c/code\u003e such that \u003ccode\u003ex = n+f\u003c/code\u003e, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is an integral number with the same sign as \u003ccode\u003ex\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e is a fraction with the same type and sign as \u003ccode\u003ex\u003c/code\u003e,\n   and with absolute value less than \u003ccode\u003e1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default definitions of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e functions are in terms of \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "properFraction",
          "package": "list-extras",
          "signature": "a -\u003e (b, a)",
          "type": "method"
        },
        "index": {
          "description": "The function properFraction takes real fractional number and returns pair such that and is an integral number with the same sign as and is fraction with the same type and sign as and with absolute value less than The default definitions of the ceiling floor truncate and round functions are in terms of properFraction",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "properFraction",
          "normalized": "a-\u003e(b,a)",
          "package": "list-extras",
          "partial": "Fraction",
          "signature": "a-\u003e(b,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:properFraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutChar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "putChar",
          "package": "list-extras",
          "signature": "Char -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write character to the standard output device same as hPutChar stdout",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "putChar",
          "normalized": "Char-\u003eIO()",
          "package": "list-extras",
          "partial": "Char",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:putChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "putStr",
          "package": "list-extras",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "list-extras",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "putStrLn",
          "package": "list-extras",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "list-extras",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger division truncated toward zero\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "quot",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer division truncated toward zero",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "quot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "quotRem",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e (a, a)",
          "type": "method"
        },
        "index": {
          "description": "simultaneous quot and rem",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "quotRem",
          "normalized": "a-\u003ea-\u003e(a,a)",
          "package": "list-extras",
          "partial": "Rem",
          "signature": "a-\u003ea-\u003e(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:quotRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function reads input from a string, which must be\n completely consumed by the input process.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "read",
          "package": "list-extras",
          "signature": "String -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The read function reads input from string which must be completely consumed by the input process",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "read",
          "normalized": "String-\u003ea",
          "package": "list-extras",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "readFile",
          "package": "list-extras",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "list-extras",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e function is similar to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e except that it signals\n parse failure to the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad instead of terminating the program.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "readIO",
          "package": "list-extras",
          "signature": "String -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "The readIO function is similar to read except that it signals parse failure to the IO monad instead of terminating the program",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "readIO",
          "normalized": "String-\u003eIO a",
          "package": "list-extras",
          "partial": "IO",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:readIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003ereadList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of parsing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be are\n expected to use double quotes, rather than square brackets.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "readList",
          "package": "list-extras",
          "signature": "ReadS [a]",
          "type": "method"
        },
        "index": {
          "description": "The method readList is provided to allow the programmer to give specialised way of parsing lists of values For example this is used by the predefined Read instance of the Char type where values of type String should be are expected to use double quotes rather than square brackets",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "readList",
          "normalized": "ReadS[a]",
          "package": "list-extras",
          "partial": "List",
          "signature": "ReadS[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:readList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "readLn",
          "package": "list-extras",
          "signature": "IO a",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "readLn",
          "package": "list-extras",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but surrounded with\n parentheses.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereadParen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses what \u003ccode\u003ep\u003c/code\u003e parses, but optionally\n surrounded with parentheses.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "readParen",
          "package": "list-extras",
          "signature": "Bool -\u003e ReadS a -\u003e ReadS a",
          "type": "function"
        },
        "index": {
          "description": "readParen True parses what parses but surrounded with parentheses readParen False parses what parses but optionally surrounded with parentheses",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "readParen",
          "normalized": "Bool-\u003eReadS a-\u003eReadS a",
          "package": "list-extras",
          "partial": "Paren",
          "signature": "Bool-\u003eReadS a-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:readParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "reads",
          "package": "list-extras",
          "signature": "ReadS a",
          "type": "function"
        },
        "index": {
          "description": "equivalent to readsPrec with precedence of",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "reads",
          "package": "list-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempts to parse a value from the front of the string, returning\n a list of (parsed value, remaining string) pairs.  If there is no\n successful parse, the returned list is empty.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "readsPrec",
          "package": "list-extras",
          "signature": "readsPrec",
          "type": "method"
        },
        "index": {
          "description": "attempts to parse value from the front of the string returning list of parsed value remaining string pairs If there is no successful parse the returned list is empty Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "readsPrec",
          "package": "list-extras",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:readsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneral coercion to fractional types\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "realToFrac",
          "package": "list-extras",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "general coercion to fractional types",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "realToFrac",
          "normalized": "a-\u003eb",
          "package": "list-extras",
          "partial": "To Frac",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:realToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereciprocal fraction\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "recip",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "reciprocal fraction",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einteger remainder, satisfying\n\u003c/p\u003e\u003cpre\u003e (x `quot` y)*y + (x `rem` y) == x\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "rem",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "integer remainder satisfying quot rem",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "rem",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a value into the monadic type.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "return",
          "package": "list-extras",
          "signature": "a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "Inject value into the monadic type",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "list-extras",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e;\n   the even integer if \u003ccode\u003ex\u003c/code\u003e is equidistant between two integers\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "round",
          "package": "list-extras",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "round returns the nearest integer to the even integer if is equidistant between two integers",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "round",
          "normalized": "a-\u003eb",
          "package": "list-extras",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiplies a floating-point number by an integer power of the radix\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "scaleFloat",
          "package": "list-extras",
          "signature": "Int -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "multiplies floating-point number by an integer power of the radix",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "scaleFloat",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "list-extras",
          "partial": "Float",
          "signature": "Int-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:scaleFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to head normal form, and then returns its second\n \targument as the result. \n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "seq",
          "package": "list-extras",
          "signature": "a -\u003e b -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to head normal form and then returns its second argument as the result",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "seq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "list-extras",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, using precedence context\n zero, and returning an ordinary \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "show",
          "package": "list-extras",
          "signature": "a -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "specialised variant of showsPrec using precedence context zero and returning an ordinary String",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "show",
          "normalized": "a-\u003eString",
          "package": "list-extras",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the character unchanged.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "showChar",
          "package": "list-extras",
          "signature": "Char -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting Char to show function that simply prepends the character unchanged",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "showChar",
          "normalized": "Char-\u003eShowS",
          "package": "list-extras",
          "partial": "Char",
          "signature": "Char-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:showChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "showList",
          "package": "list-extras",
          "signature": "[a] -\u003e ShowS",
          "type": "method"
        },
        "index": {
          "description": "The method showList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Show instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "showList",
          "normalized": "[a]-\u003eShowS",
          "package": "list-extras",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:showList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function that surrounds the inner show function with\n parentheses when the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e parameter is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "showParen",
          "package": "list-extras",
          "signature": "Bool -\u003e ShowS -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function that surrounds the inner show function with parentheses when the Bool parameter is True",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "showParen",
          "normalized": "Bool-\u003eShowS-\u003eShowS",
          "package": "list-extras",
          "partial": "Paren",
          "signature": "Bool-\u003eShowS-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:showParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eutility function converting a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a show function that\n simply prepends the string unchanged.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "showString",
          "package": "list-extras",
          "signature": "String -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "utility function converting String to show function that simply prepends the string unchanged",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "showString",
          "normalized": "String-\u003eShowS",
          "package": "list-extras",
          "partial": "String",
          "signature": "String-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:showString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e with a precedence of 0.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "shows",
          "package": "list-extras",
          "signature": "a -\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "equivalent to showsPrec with precedence of",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "shows",
          "normalized": "a-\u003eShowS",
          "package": "list-extras",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:shows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value to a readable \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e should satisfy the law\n\u003c/p\u003e\u003cpre\u003e showsPrec d x r ++ s  ==  showsPrec d x (r ++ s)\n\u003c/pre\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(x,\"\")\u003c/code\u003e is an element of\n   \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e d (\u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e d x \"\"))\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThat is, \u003ccode\u003e\u003ca\u003ereadsPrec\u003c/a\u003e\u003c/code\u003e parses the string produced by\n \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e, and delivers the value that \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e started with.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "showsPrec",
          "package": "list-extras",
          "signature": "showsPrec",
          "type": "method"
        },
        "index": {
          "description": "Convert value to readable String showsPrec should satisfy the law showsPrec showsPrec Derived instances of Read and Show satisfy the following is an element of readsPrec showsPrec That is readsPrec parses the string produced by showsPrec and delivers the value that showsPrec started with",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "showsPrec",
          "package": "list-extras",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:showsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first component of \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, scaled to lie in the open\n interval (\u003ccode\u003e-1\u003c/code\u003e,\u003ccode\u003e1\u003c/code\u003e), either \u003ccode\u003e0.0\u003c/code\u003e or of absolute value \u003ccode\u003e\u003e= 1/b\u003c/code\u003e,\n where \u003ccode\u003eb\u003c/code\u003e is the floating-point radix.\n The behaviour is unspecified on infinite or \u003ccode\u003eNaN\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "significand",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "The first component of decodeFloat scaled to lie in the open interval either or of absolute value where is the floating-point radix The behaviour is unspecified on infinite or NaN values",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "significand",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:significand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign of a number.\n The functions \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e should satisfy the law:\n\u003c/p\u003e\u003cpre\u003e abs x * signum x == x\n\u003c/pre\u003e\u003cp\u003eFor real numbers, the \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e is either \u003ccode\u003e-1\u003c/code\u003e (negative), \u003ccode\u003e0\u003c/code\u003e (zero)\n or \u003ccode\u003e1\u003c/code\u003e (positive).\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "signum",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Sign of number The functions abs and signum should satisfy the law abs signum For real numbers the signum is either negative zero or positive",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "signum",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:signum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "sin",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "sin",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "sinh",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "sinh",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "snd",
          "package": "list-extras",
          "signature": "(a, b) -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Extract the second component of pair",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "snd",
          "normalized": "(a,b)-\u003eb",
          "package": "list-extras",
          "signature": "(a,b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "sqrt",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "sqrt",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e-\u003c/code\u003e is treated specially in the Haskell grammar,\n \u003ccode\u003e(-\u003c/code\u003e \u003cem\u003ee\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is not a section, but an application of prefix negation.\n However, \u003ccode\u003e(\u003ccode\u003e\u003ca\u003esubtract\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \u003cem\u003eexp\u003c/em\u003e\u003ccode\u003e)\u003c/code\u003e is equivalent to the disallowed section.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "subtract",
          "package": "list-extras",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "the same as flip Because is treated specially in the Haskell grammar is not section but an application of prefix negation However subtract exp is equivalent to the disallowed section",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "succ",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the successor of value For numeric types succ adds",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "tan",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "tan",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Prelude.Listless",
          "name": "tanh",
          "package": "list-extras",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "tanh",
          "normalized": "a-\u003ea",
          "package": "list-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "toEnum",
          "package": "list-extras",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Convert from an Int",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "toEnum",
          "normalized": "Int-\u003ea",
          "package": "list-extras",
          "partial": "Enum",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:toEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econversion to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "toInteger",
          "package": "list-extras",
          "signature": "a -\u003e Integer",
          "type": "method"
        },
        "index": {
          "description": "conversion to Integer",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "toInteger",
          "normalized": "a-\u003eInteger",
          "package": "list-extras",
          "partial": "Integer",
          "signature": "a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe rational equivalent of its real argument with full precision\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "toRational",
          "package": "list-extras",
          "signature": "a -\u003e Rational",
          "type": "method"
        },
        "index": {
          "description": "the rational equivalent of its real argument with full precision",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "toRational",
          "normalized": "a-\u003eRational",
          "package": "list-extras",
          "partial": "Rational",
          "signature": "a-\u003eRational",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:toRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "truncate",
          "package": "list-extras",
          "signature": "a -\u003e b",
          "type": "method"
        },
        "index": {
          "description": "truncate returns the integer nearest between zero and",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "truncate",
          "normalized": "a-\u003eb",
          "package": "list-extras",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "uncurry",
          "package": "list-extras",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "type": "function"
        },
        "index": {
          "description": "uncurry converts curried function to function on pairs",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "list-extras",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n It is expected that compilers will recognize this and insert error\n messages which are more appropriate to the context in which \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\n appears. \n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "undefined",
          "package": "list-extras",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "special case of error It is expected that compilers will recognize this and insert error messages which are more appropriate to the context in which undefined appears",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "undefined",
          "package": "list-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003euntil\u003c/a\u003e\u003c/code\u003e p f\u003c/code\u003e yields the result of applying \u003ccode\u003ef\u003c/code\u003e until \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "until",
          "package": "list-extras",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "until yields the result of applying until holds",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "until",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "list-extras",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e value with a string describing the error.\n The \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance of the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class raises a\n \u003ccode\u003e\u003ca\u003euserError\u003c/a\u003e\u003c/code\u003e, thus:\n\u003c/p\u003e\u003cpre\u003e instance Monad IO where \n   ...\n   fail s = ioError (userError s)\n\u003c/pre\u003e",
          "module": "Prelude.Listless",
          "name": "userError",
          "package": "list-extras",
          "signature": "String -\u003e IOError",
          "type": "function"
        },
        "index": {
          "description": "Construct an IOError value with string describing the error The fail method of the IO instance of the Monad class raises userError thus instance Monad IO where fail ioError userError",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "userError",
          "normalized": "String-\u003eIOError",
          "package": "list-extras",
          "partial": "Error",
          "signature": "String-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:userError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Prelude.Listless",
          "name": "writeFile",
          "package": "list-extras",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the string str to the file file",
          "hierarchy": "Prelude Listless",
          "module": "Prelude.Listless",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "list-extras",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/list-extras/docs/Prelude-Listless.html#v:writeFile"
      }
    }
  ]
]