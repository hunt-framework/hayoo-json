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
        "word": "data-ordlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements bag and set operations on ordered lists.  For the\n purposes of this module,  a \"bag\" (or \"multiset\") is a non-decreasing\n list, whereas a \"set\" is a strictly ascending list.  Bags are sorted\n lists that may contain duplicates,  whereas sets are sorted lists that\n do not contain duplicates.\n\u003c/p\u003e\u003cp\u003eExcept for the  \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enubSort\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eisSorted\u003c/a\u003e\u003c/code\u003e families of\n functions, every function assumes that any list arguments are sorted\n lists. Assuming this precondition is met,  every resulting list is also\n sorted.\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003eisect\u003c/a\u003e\u003c/code\u003e handles multisets correctly, it does not return results\n comparable to \u003ccode\u003eData.List.\u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e on them.  Thus \u003ccode\u003eisect\u003c/code\u003e\n is more than just a more efficient \u003ccode\u003eintersect\u003c/code\u003e on ordered lists. Similar\n statements apply to other associations between functions this module and\n functions in \u003ccode\u003eData.List\u003c/code\u003e,  such as \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eData.List.\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll functions in this module are left biased.  Elements that appear in\n earlier arguments have priority over equal elements that appear in later\n arguments,  and elements that appear earlier in a single list have\n priority over equal elements that appear later in that list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Ordered",
          "name": "Ordered",
          "package": "data-ordlist",
          "source": "src/Data-List-Ordered.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements bag and set operations on ordered lists For the purposes of this module bag or multiset is non-decreasing list whereas set is strictly ascending list Bags are sorted lists that may contain duplicates whereas sets are sorted lists that do not contain duplicates Except for the nub sort nubSort and isSorted families of functions every function assumes that any list arguments are sorted lists Assuming this precondition is met every resulting list is also sorted Because isect handles multisets correctly it does not return results comparable to Data.List intersect on them Thus isect is more than just more efficient intersect on ordered lists Similar statements apply to other associations between functions this module and functions in Data.List such as union and Data.List union All functions in this module are left biased Elements that appear in earlier arguments have priority over equal elements that appear in later arguments and elements that appear earlier in single list have priority over equal elements that appear later in that list",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "Ordered",
          "package": "data-ordlist",
          "partial": "Ordered",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldt\u003c/a\u003e\u003c/code\u003e plus zero\u003c/code\u003e computes the sum of a list using\n a sequence of balanced trees of operations.   Given an appropriate \u003ccode\u003eplus\u003c/code\u003e\n operator,  this function can be productive on an infinite list, hence it\n is lazier than \u003ccode\u003e\u003ca\u003efoldt'\u003c/a\u003e\u003c/code\u003e.   \u003ccode\u003e\u003ca\u003efoldt\u003c/a\u003e\u003c/code\u003e is used in the implementation of\n \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "foldt",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e [a] -\u003e a",
          "source": "src/Data-List-Ordered.html#foldt",
          "type": "function"
        },
        "index": {
          "description": "The function foldt plus zero computes the sum of list using sequence of balanced trees of operations Given an appropriate plus operator this function can be productive on an infinite list hence it is lazier than foldt foldt is used in the implementation of mergeAll and unionAll",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "foldt",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "data-ordlist",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:foldt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldt'\u003c/a\u003e\u003c/code\u003e plus zero\u003c/code\u003e computes the sum of a list\n using a balanced tree of operations.  \u003ccode\u003e\u003ca\u003efoldt'\u003c/a\u003e\u003c/code\u003e necessarily diverges\n on infinite lists, hence it is a stricter variant of \u003ccode\u003e\u003ca\u003efoldt\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003efoldt'\u003c/a\u003e\u003c/code\u003e is used in the implementation of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enubSort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "foldt'",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e [a] -\u003e a",
          "source": "src/Data-List-Ordered.html#foldt%27",
          "type": "function"
        },
        "index": {
          "description": "The function foldt plus zero computes the sum of list using balanced tree of operations foldt necessarily diverges on infinite lists hence it is stricter variant of foldt foldt is used in the implementation of sort and nubSort",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "foldt'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "package": "data-ordlist",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:foldt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the element appears in the list;\n it is equivalent to \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e except the order of the arguments is reversed,\n making it a function from an ordered list to its characteristic function.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "has",
          "package": "data-ordlist",
          "signature": "[a] -\u003e a -\u003e Bool",
          "source": "src/Data-List-Ordered.html#has",
          "type": "function"
        },
        "index": {
          "description": "The has function returns True if the element appears in the list it is equivalent to member except the order of the arguments is reversed making it function from an ordered list to its characteristic function",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "has",
          "normalized": "[a]-\u003ea-\u003eBool",
          "package": "data-ordlist",
          "signature": "[a]-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:has"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ehasBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003ehas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "hasBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a -\u003e Bool",
          "source": "src/Data-List-Ordered.html#hasBy",
          "type": "function"
        },
        "index": {
          "description": "The hasBy function is the non-overloaded version of has",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "hasBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea-\u003eBool",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:hasBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsertBag\u003c/a\u003e\u003c/code\u003e function inserts an element into a list.  If the element\n is already there,  then another copy of the element is inserted.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "insertBag",
          "package": "data-ordlist",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#insertBag",
          "type": "function"
        },
        "index": {
          "description": "The insertBag function inserts an element into list If the element is already there then another copy of the element is inserted",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "insertBag",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Bag",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:insertBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsertBagBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003einsertBag\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "insertBagBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#insertBagBy",
          "type": "function"
        },
        "index": {
          "description": "The insertBagBy function is the non-overloaded version of insertBag",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "insertBagBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Bag By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:insertBagBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsertSet\u003c/a\u003e\u003c/code\u003e function inserts an element into an ordered list.\n If the element is already there,  then the element replaces the existing\n element.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "insertSet",
          "package": "data-ordlist",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#insertSet",
          "type": "function"
        },
        "index": {
          "description": "The insertSet function inserts an element into an ordered list If the element is already there then the element replaces the existing element",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "insertSet",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Set",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:insertSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsertSetBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003einsertSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "insertSetBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#insertSetBy",
          "type": "function"
        },
        "index": {
          "description": "The insertSetBy function is the non-overloaded version of insertSet",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "insertSetBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Set By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:insertSetBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSorted\u003c/a\u003e\u003c/code\u003e predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the elements of a list occur\n in non-descending order,  equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSortedBy\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "isSorted",
          "package": "data-ordlist",
          "signature": "[a] -\u003e Bool",
          "source": "src/Data-List-Ordered.html#isSorted",
          "type": "function"
        },
        "index": {
          "description": "The isSorted predicate returns True if the elements of list occur in non-descending order equivalent to isSortedBy",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "isSorted",
          "normalized": "[a]-\u003eBool",
          "package": "data-ordlist",
          "partial": "Sorted",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:isSorted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSortedBy\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the predicate returns true\n for all adjacent pairs of elements in the list.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "isSortedBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Ordered.html#isSortedBy",
          "type": "function"
        },
        "index": {
          "description": "The isSortedBy function returns True iff the predicate returns true for all adjacent pairs of elements in the list",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "isSortedBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "data-ordlist",
          "partial": "Sorted By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:isSortedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisect\u003c/a\u003e\u003c/code\u003e function computes the intersection of two ordered lists.\n An element occurs in the output as many times as the minimum number of\n occurrences in either input.  If either input is a set,  then the output\n is a set.\n\u003c/p\u003e\u003cpre\u003e isect [ 1,2, 3,4 ] [ 3,4, 5,6 ]   == [ 3,4 ]\n isect [ 1, 2,2,2 ] [ 1,1,1, 2,2 ] == [ 1, 2,2 ]\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "isect",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#isect",
          "type": "function"
        },
        "index": {
          "description": "The isect function computes the intersection of two ordered lists An element occurs in the output as many times as the minimum number of occurrences in either input If either input is set then the output is set isect isect",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "isect",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisectBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eisect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "isectBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e [a] -\u003e [b] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#isectBy",
          "type": "function"
        },
        "index": {
          "description": "The isectBy function is the non-overloaded version of isect",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "isectBy",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[b]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:isectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the element appears in the\n ordered list.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "member",
          "package": "data-ordlist",
          "signature": "a -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Ordered.html#member",
          "type": "function"
        },
        "index": {
          "description": "The member function returns True if the element appears in the ordered list",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "member",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "data-ordlist",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ememberBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "memberBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Ordered.html#memberBy",
          "type": "function"
        },
        "index": {
          "description": "The memberBy function is the non-overloaded version of member",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "memberBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003eBool",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:memberBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e function combines all elements of two ordered lists.\n An element occurs in the output as many times as the sum of the\n occurrences in both lists.   The output is a set if and only if\n the inputs are disjoint sets.\n\u003c/p\u003e\u003cpre\u003e merge [ 1,2, 3,4 ] [ 3,4, 5,6 ]   == [ 1,2,  3,3,4,4,  5,6 ]\n merge [ 1, 2,2,2 ] [ 1,1,1, 2,2 ] == [ 1,1,1,1,  2,2,2,2,2 ]\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "merge",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#merge",
          "type": "function"
        },
        "index": {
          "description": "The merge function combines all elements of two ordered lists An element occurs in the output as many times as the sum of the occurrences in both lists The output is set if and only if the inputs are disjoint sets merge merge",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "merge",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e function merges a (potentially) infinite number of\n ordered lists, under the assumption that the heads of the inner lists\n are sorted.  An element is duplicated in the result as many times as\n the total number of occurrences in all inner lists.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e function is closely related to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e []\u003c/code\u003e.\n The former does not assume that the outer list is finite, whereas\n the latter does not assume that the heads of the inner lists are sorted.\n When both sets of assumptions are met,  these two functions are\n equivalent.\n\u003c/p\u003e\u003cp\u003eThis implementation of \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e  uses a tree of comparisons, and is\n based on input from Dave Bayer, Heinrich Apfelmus, Omar Antolin Camarena,\n and Will Ness.  See \u003ccode\u003eCHANGES\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "mergeAll",
          "package": "data-ordlist",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#mergeAll",
          "type": "function"
        },
        "index": {
          "description": "The mergeAll function merges potentially infinite number of ordered lists under the assumption that the heads of the inner lists are sorted An element is duplicated in the result as many times as the total number of occurrences in all inner lists The mergeAll function is closely related to foldr merge The former does not assume that the outer list is finite whereas the latter does not assume that the heads of the inner lists are sorted When both sets of assumptions are met these two functions are equivalent This implementation of mergeAll uses tree of comparisons and is based on input from Dave Bayer Heinrich Apfelmus Omar Antolin Camarena and Will Ness See CHANGES for details",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "mergeAll",
          "normalized": "[[a]]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "All",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:mergeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emergeAllBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded variant of the \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "mergeAllBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [[a]] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#mergeAllBy",
          "type": "function"
        },
        "index": {
          "description": "The mergeAllBy function is the non-overloaded variant of the mergeAll function",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "mergeAllBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[[a]]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "All By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:mergeAllBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emergeBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "mergeBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#mergeBy",
          "type": "function"
        },
        "index": {
          "description": "The mergeBy function is the non-overloaded version of merge",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminus\u003c/a\u003e\u003c/code\u003e function computes the difference of two ordered lists.\n An element occurs in the output as many times as it occurs in\n the first input, minus the number of occurrences in the second input.\n If the first input is a set,  then the output is a set.\n\u003c/p\u003e\u003cpre\u003e minus [ 1,2, 3,4 ] [ 3,4, 5,6 ]   == [ 1,2 ]\n minus [ 1, 2,2,2 ] [ 1,1,1, 2,2 ] == [ 2 ]\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "minus",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#minus",
          "type": "function"
        },
        "index": {
          "description": "The minus function computes the difference of two ordered lists An element occurs in the output as many times as it occurs in the first input minus the number of occurrences in the second input If the first input is set then the output is set minus minus",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "minus",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminus'\u003c/a\u003e\u003c/code\u003e function computes the difference of two ordered lists.\n The result consists of elements from the first list that do not appear\n in the second list.  If the first input is a set, then the output is\n a set.\n\u003c/p\u003e\u003cpre\u003e minus' [ 1,2, 3,4 ] [ 3,4, 5,6 ]   == [ 1,2 ]\n minus' [ 1, 2,2,2 ] [ 1,1,1, 2,2 ] == []\n minus' [ 1,1, 2,2 ] [ 2 ]          == [ 1,1 ]\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "minus'",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#minus%27",
          "type": "function"
        },
        "index": {
          "description": "The minus function computes the difference of two ordered lists The result consists of elements from the first list that do not appear in the second list If the first input is set then the output is set minus minus minus",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "minus'",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:minus-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminusBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eminus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "minusBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e [a] -\u003e [b] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#minusBy",
          "type": "function"
        },
        "index": {
          "description": "The minusBy function is the non-overloaded version of minus",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "minusBy",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[b]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:minusBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminusBy'\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eminus'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "minusBy'",
          "package": "data-ordlist",
          "signature": "(a -\u003e b -\u003e Ordering) -\u003e [a] -\u003e [b] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#minusBy%27",
          "type": "function"
        },
        "index": {
          "description": "The minusBy function is the non-overloaded version of minus",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "minusBy'",
          "normalized": "(a-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[b]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By'",
          "signature": "(a-\u003eb-\u003eOrdering)-\u003e[a]-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:minusBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn ordered lists,  \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except that\n it runs in linear time instead of quadratic.   On unordered lists it also\n removes elements that are smaller than any preceding element.\n\u003c/p\u003e\u003cpre\u003e nub [1,1,1,2,2] == [1,2]\n nub [2,0,1,3,3] == [2,3]\n nub = nubBy (\u003c)\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "nub",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#nub",
          "type": "function"
        },
        "index": {
          "description": "On ordered lists nub is equivalent to nub except that it runs in linear time instead of quadratic On unordered lists it also removes elements that are smaller than any preceding element nub nub nub nubBy",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function is the greedy algorithm that returns a\n sublist of its input such that:\n\u003c/p\u003e\u003cpre\u003e isSortedBy pred (nubBy pred xs) == True\n\u003c/pre\u003e\u003cp\u003eThis is true for all lists,  not just ordered lists,  and all binary\n predicates,  not just total orders.   On infinite lists,  this statement\n is true in a certain mathematical sense,  but not a computational one.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "nubBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#nubBy",
          "type": "function"
        },
        "index": {
          "description": "The nubBy function is the greedy algorithm that returns sublist of its input such that isSortedBy pred nubBy pred xs True This is true for all lists not just ordered lists and all binary predicates not just total orders On infinite lists this statement is true in certain mathematical sense but not computational one",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubSort\u003c/a\u003e\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,  except\n that duplicates are removed as it sorts. It is essentially the same\n implementation as \u003ccode\u003eData.List.sort\u003c/code\u003e, with \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e replaced by \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n Thus the performance of \u003ccode\u003e\u003ca\u003enubSort\u003c/a\u003e\u003c/code\u003e should better than or nearly equal\n to \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e alone.  It is faster than \u003ccode\u003e\u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e when the\n input contains significant quantities of duplicated elements.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "nubSort",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#nubSort",
          "type": "function"
        },
        "index": {
          "description": "The nubSort function is equivalent to nub sort except that duplicates are removed as it sorts It is essentially the same implementation as Data.List.sort with merge replaced by union Thus the performance of nubSort should better than or nearly equal to sort alone It is faster than nub sort when the input contains significant quantities of duplicated elements",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "nubSort",
          "normalized": "[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Sort",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:nubSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubSortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003enubSort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "nubSortBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#nubSortBy",
          "type": "function"
        },
        "index": {
          "description": "The nubSortBy function is the non-overloaded version of nubSort",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "nubSortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Sort By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:nubSortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubSortOn\u003c/a\u003e\u003c/code\u003e function provides decorate-sort-undecorate for \u003ccode\u003e\u003ca\u003enubSort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "nubSortOn",
          "package": "data-ordlist",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#nubSortOn",
          "type": "function"
        },
        "index": {
          "description": "The nubSortOn function provides decorate-sort-undecorate for nubSort",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "nubSortOn",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Sort On",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:nubSortOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant of \u003ccode\u003e\u003ca\u003enubSortOn\u003c/a\u003e\u003c/code\u003e recomputes the sorting key for each comparison\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "nubSortOn'",
          "package": "data-ordlist",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#nubSortOn%27",
          "type": "function"
        },
        "index": {
          "description": "This variant of nubSortOn recomputes the sorting key for each comparison",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "nubSortOn'",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "Sort On'",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:nubSortOn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e function implements a stable sorting algorithm.\n It is a special case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "sort",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sort function implements stable sorting algorithm It is special case of sortBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "sortBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The sortBy function is the non-overloaded version of sort",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortOn\u003c/a\u003e\u003c/code\u003e function provides the decorate-sort-undecorate idiom,\n also known as the \"Schwartzian transform\".\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "sortOn",
          "package": "data-ordlist",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#sortOn",
          "type": "function"
        },
        "index": {
          "description": "The sortOn function provides the decorate-sort-undecorate idiom also known as the Schwartzian transform",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "sortOn",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "On",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:sortOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant of \u003ccode\u003e\u003ca\u003esortOn\u003c/a\u003e\u003c/code\u003e recomputes the sorting key every comparison.\n This can be better for functions that are cheap to compute.\n This is definitely better for projections,  as the decorate-sort-undecorate\n saves nothing and adds two traversals of the list and extra memory\n allocation.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "sortOn'",
          "package": "data-ordlist",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#sortOn%27",
          "type": "function"
        },
        "index": {
          "description": "This variant of sortOn recomputes the sorting key every comparison This can be better for functions that are cheap to compute This is definitely better for projections as the decorate-sort-undecorate saves nothing and adds two traversals of the list and extra memory allocation",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "sortOn'",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "On'",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:sortOn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e function returns true if the first list is a sub-list\n of the second.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "subset",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Ordered.html#subset",
          "type": "function"
        },
        "index": {
          "description": "The subset function returns true if the first list is sub-list of the second",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "subset",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubsetBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "subsetBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Ordered.html#subsetBy",
          "type": "function"
        },
        "index": {
          "description": "The subsetBy function is the non-overloaded version of subset",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "subsetBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003eBool",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:subsetBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e function computes the union of two ordered lists.\n An element occurs in the output as many times as the maximum number\n of occurrences in either input.  The output is a set if and only if\n both inputs are sets.\n\u003c/p\u003e\u003cpre\u003e union [ 1,2, 3,4 ] [ 3,4, 5,6 ]   == [ 1,2, 3,4, 5,6 ]\n union [ 1, 2,2,2 ] [ 1,1,1, 2,2 ] == [ 1,1,1, 2,2,2 ]\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "union",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union function computes the union of two ordered lists An element occurs in the output as many times as the maximum number of occurrences in either input The output is set if and only if both inputs are sets union union",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "union",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e computes the union of a (potentially) infinite number\n of lists,  under the assumption that the heads of the inner lists\n are sorted.  The result will duplicate an element as many times as\n the maximum number of occurrences in any single list.  Thus, the result\n is a set if and only if every inner list is a set.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e function is closely related to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e []\u003c/code\u003e.\n The former does not assume that the outer list is finite, whereas\n the latter does not assume that the heads of the inner lists are sorted.\n When both sets of assumptions are met,  these two functions are\n equivalent.\n\u003c/p\u003e\u003cp\u003eNote that there is no simple way to express \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e in terms of\n \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e or vice versa on arbitrary valid inputs.  They are related\n via \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e however,  as \u003ccode\u003e\u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emergeAll\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n If every list is a set,  then \u003ccode\u003emap nub == id\u003c/code\u003e,  and in this special case\n (and only in this special case) does \u003ccode\u003enub . mergeAll == unionAll\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation of \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e  uses a tree of comparisons, and is\n based on input from Dave Bayer, Heinrich Apfelmus, Omar Antolin Camarena,\n and Will Ness.  See \u003ccode\u003eCHANGES\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "unionAll",
          "package": "data-ordlist",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#unionAll",
          "type": "function"
        },
        "index": {
          "description": "The unionAll computes the union of potentially infinite number of lists under the assumption that the heads of the inner lists are sorted The result will duplicate an element as many times as the maximum number of occurrences in any single list Thus the result is set if and only if every inner list is set The unionAll function is closely related to foldr union The former does not assume that the outer list is finite whereas the latter does not assume that the heads of the inner lists are sorted When both sets of assumptions are met these two functions are equivalent Note that there is no simple way to express unionAll in terms of mergeAll or vice versa on arbitrary valid inputs They are related via nub however as nub mergeAll unionAll map nub If every list is set then map nub id and in this special case and only in this special case does nub mergeAll unionAll This implementation of unionAll uses tree of comparisons and is based on input from Dave Bayer Heinrich Apfelmus Omar Antolin Camarena and Will Ness See CHANGES for details",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "unionAll",
          "normalized": "[[a]]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "All",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:unionAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionAllBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded variant of the \u003ccode\u003e\u003ca\u003eunionAll\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "unionAllBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [[a]] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#unionAllBy",
          "type": "function"
        },
        "index": {
          "description": "The unionAllBy function is the non-overloaded variant of the unionAll function",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "unionAllBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[[a]]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "All By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:unionAllBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "unionBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#unionBy",
          "type": "function"
        },
        "index": {
          "description": "The unionBy function is the non-overloaded version of union",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003exunion\u003c/a\u003e\u003c/code\u003e function computes the exclusive union of two ordered lists.\n An element occurs in the output as many times as the absolute difference\n between the number of occurrences in the inputs.  If both inputs\n are sets,  then the output is a set.\n\u003c/p\u003e\u003cpre\u003e xunion [ 1,2, 3,4 ] [ 3,4, 5,6 ]   == [ 1,2, 5,6 ]\n xunion [ 1, 2,2,2 ] [ 1,1,1, 2,2 ] == [ 1,1, 2 ]\n\u003c/pre\u003e",
          "module": "Data.List.Ordered",
          "name": "xunion",
          "package": "data-ordlist",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#xunion",
          "type": "function"
        },
        "index": {
          "description": "The xunion function computes the exclusive union of two ordered lists An element occurs in the output as many times as the absolute difference between the number of occurrences in the inputs If both inputs are sets then the output is set xunion xunion",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "xunion",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:xunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003exunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003exunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.Ordered",
          "name": "xunionBy",
          "package": "data-ordlist",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Ordered.html#xunionBy",
          "type": "function"
        },
        "index": {
          "description": "The xunionBy function is the non-overloaded version of xunion",
          "hierarchy": "Data List Ordered",
          "module": "Data.List.Ordered",
          "name": "xunionBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "data-ordlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ordlist/docs/Data-List-Ordered.html#v:xunionBy"
      }
    }
  ]
]