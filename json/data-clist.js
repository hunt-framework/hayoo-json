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
        "word": "data-clist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple purely functional circular list, or ring, data type.\n\u003c/p\u003e\u003cp\u003eLets describe what we mean by \u003ccode\u003ering\u003c/code\u003e. A ring is a circular data structure\nsuch that if you continue rotating the ring, you'll eventually return to\nthe element you first observed.\n\u003c/p\u003e\u003cp\u003eAll of our analogies involve sitting at a table who's top surface rotates\nabout its center axis (think of those convenient rotating platforms one\noften finds in an (Americanized) Chinese Restaurant).\n\u003c/p\u003e\u003cp\u003eOnly the closest item on the table is avialable to us. In order to reach\nother elements on the table, we need to rotate the table to the left or\nthe right.\n\u003c/p\u003e\u003cp\u003eOur convention for this problem says that rotations to the right are a\nforward motion while rotations to the left are backward motions.\n\u003c/p\u003e\u003cp\u003eWe'll use the following circular list for our examples:\n\u003c/p\u003e\u003cpre\u003e   8 7 6\n  9     5\n A       4\n B       3\n  C     2\n   D 0 1\n     ^\n\u003c/pre\u003e\u003cp\u003eThe pointer at the bottom represents our position at the table. The element\ncurrently in front of is is referred to as the \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e. So, in this case,\nour focus is 0.\n\u003c/p\u003e\u003cp\u003eIf we were to rotate the table to the right using the \u003ccode\u003e\u003ca\u003erotR\u003c/a\u003e\u003c/code\u003e operation, we'd\nhave the following table.\n\u003c/p\u003e\u003cpre\u003e   9 8 7\n  A     6\n B       5\n C       4\n  D     3\n   0 1 2\n     ^\n\u003c/pre\u003e\u003cp\u003eThis yields 1 as our new focus. Rotating this table left would return 0 to\nthe focus position.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CircularList",
          "name": "CircularList",
          "package": "data-clist",
          "source": "src/Data-CircularList.html",
          "type": "module"
        },
        "index": {
          "description": "simple purely functional circular list or ring data type Lets describe what we mean by ring ring is circular data structure such that if you continue rotating the ring you ll eventually return to the element you first observed All of our analogies involve sitting at table who top surface rotates about its center axis think of those convenient rotating platforms one often finds in an Americanized Chinese Restaurant Only the closest item on the table is avialable to us In order to reach other elements on the table we need to rotate the table to the left or the right Our convention for this problem says that rotations to the right are forward motion while rotations to the left are backward motions We ll use the following circular list for our examples The pointer at the bottom represents our position at the table The element currently in front of is is referred to as the focus So in this case our focus is If we were to rotate the table to the right using the rotR operation we have the following table This yields as our new focus Rotating this table left would return to the focus position",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "CircularList",
          "package": "data-clist",
          "partial": "Circular List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functional ring type.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "CList",
          "package": "data-clist",
          "source": "src/Data-CircularList.html#CList",
          "type": "data"
        },
        "index": {
          "description": "functional ring type",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "CList",
          "package": "data-clist",
          "partial": "CList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#t:CList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all possible rotations of the provided \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e, where the\n focus is the provided \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "allRotations",
          "package": "data-clist",
          "signature": "CList a -\u003e CList (CList a)",
          "source": "src/Data-CircularList.html#allRotations",
          "type": "function"
        },
        "index": {
          "description": "Return all possible rotations of the provided CList where the focus is the provided CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "allRotations",
          "normalized": "CList a-\u003eCList(CList a)",
          "package": "data-clist",
          "partial": "Rotations",
          "signature": "CList a-\u003eCList(CList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:allRotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBalance the CList. Equivalent to `fromList . toList`\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "balance",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#balance",
          "type": "function"
        },
        "index": {
          "description": "Balance the CList Equivalent to fromList toList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "balance",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "empty",
          "package": "data-clist",
          "signature": "CList a",
          "source": "src/Data-CircularList.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "empty",
          "package": "data-clist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003efilterR\u003c/a\u003e\u003c/code\u003e, but rotates to the \u003cem\u003eleft\u003c/em\u003e if the focus does not\n satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "filterL",
          "package": "data-clist",
          "signature": "(a -\u003e Bool) -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#filterL",
          "type": "function"
        },
        "index": {
          "description": "As with filterR but rotates to the left if the focus does not satisfy the predicate",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "filterL",
          "normalized": "(a-\u003eBool)-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "signature": "(a-\u003eBool)-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:filterL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove those elements that do not satisfy the supplied predicate,\n rotating to the right if the focus does not satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "filterR",
          "package": "data-clist",
          "signature": "(a -\u003e Bool) -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#filterR",
          "type": "function"
        },
        "index": {
          "description": "Remove those elements that do not satisfy the supplied predicate rotating to the right if the focus does not satisfy the predicate",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "filterR",
          "normalized": "(a-\u003eBool)-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "signature": "(a-\u003eBool)-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:filterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to rotate the \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e such that focused element matches\n the supplied predicate.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "findRotateTo",
          "package": "data-clist",
          "signature": "(a -\u003e Bool) -\u003e CList a -\u003e Maybe (CList a)",
          "source": "src/Data-CircularList.html#findRotateTo",
          "type": "function"
        },
        "index": {
          "description": "Attempt to rotate the CList such that focused element matches the supplied predicate",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "findRotateTo",
          "normalized": "(a-\u003eBool)-\u003eCList a-\u003eMaybe(CList a)",
          "package": "data-clist",
          "partial": "Rotate To",
          "signature": "(a-\u003eBool)-\u003eCList a-\u003eMaybe(CList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:findRotateTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the focus of the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "focus",
          "package": "data-clist",
          "signature": "CList a -\u003e Maybe a",
          "source": "src/Data-CircularList.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Return the focus of the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "focus",
          "normalized": "CList a-\u003eMaybe a",
          "package": "data-clist",
          "signature": "CList a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (strict) left-fold, rotating to the left through the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "foldlL",
          "package": "data-clist",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e CList b -\u003e a",
          "source": "src/Data-CircularList.html#foldlL",
          "type": "function"
        },
        "index": {
          "description": "strict left-fold rotating to the left through the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "foldlL",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea",
          "package": "data-clist",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldlL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (strict) left-fold, rotating to the right through the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "foldlR",
          "package": "data-clist",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e CList b -\u003e a",
          "source": "src/Data-CircularList.html#foldlR",
          "type": "function"
        },
        "index": {
          "description": "strict left-fold rotating to the right through the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "foldlR",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea",
          "package": "data-clist",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldlR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-fold, rotating to the left through the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "foldrL",
          "package": "data-clist",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e CList a -\u003e b",
          "source": "src/Data-CircularList.html#foldrL",
          "type": "function"
        },
        "index": {
          "description": "right-fold rotating to the left through the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "foldrL",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb",
          "package": "data-clist",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldrL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA right-fold, rotating to the right through the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "foldrR",
          "package": "data-clist",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e CList a -\u003e b",
          "source": "src/Data-CircularList.html#foldrR",
          "type": "function"
        },
        "index": {
          "description": "right-fold rotating to the right through the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "foldrR",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb",
          "package": "data-clist",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldrR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a (balanced) CList from a list.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "fromList",
          "package": "data-clist",
          "signature": "[a] -\u003e CList a",
          "source": "src/Data-CircularList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Make balanced CList from list",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "fromList",
          "normalized": "[a]-\u003eCList a",
          "package": "data-clist",
          "partial": "List",
          "signature": "[a]-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into the CList as the new focus. The\n old focus is now the next element to the left.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "insertL",
          "package": "data-clist",
          "signature": "a -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#insertL",
          "type": "function"
        },
        "index": {
          "description": "Insert an element into the CList as the new focus The old focus is now the next element to the left",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "insertL",
          "normalized": "a-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "signature": "a-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:insertL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into the CList as the new focus. The\n old focus is now the next element to the right.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "insertR",
          "package": "data-clist",
          "signature": "a -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#insertR",
          "type": "function"
        },
        "index": {
          "description": "Insert an element into the CList as the new focus The old focus is now the next element to the right",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "insertR",
          "normalized": "a-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "signature": "a-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:insertR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the CList is empty.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "isEmpty",
          "package": "data-clist",
          "signature": "CList a -\u003e Bool",
          "source": "src/Data-CircularList.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the CList is empty",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "isEmpty",
          "normalized": "CList a-\u003eBool",
          "package": "data-clist",
          "partial": "Empty",
          "signature": "CList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting with the focus, go left and accumulate all\n elements of the CList in a list.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "leftElements",
          "package": "data-clist",
          "signature": "CList a -\u003e [a]",
          "source": "src/Data-CircularList.html#leftElements",
          "type": "function"
        },
        "index": {
          "description": "Starting with the focus go left and accumulate all elements of the CList in list",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "leftElements",
          "normalized": "CList a-\u003e[a]",
          "package": "data-clist",
          "partial": "Elements",
          "signature": "CList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:leftElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove all elements to the left side of the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "packL",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#packL",
          "type": "function"
        },
        "index": {
          "description": "Move all elements to the left side of the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "packL",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:packL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove all elements to the right side of the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "packR",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#packR",
          "type": "function"
        },
        "index": {
          "description": "Move all elements to the right side of the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "packR",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:packR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the focus from the CList. The new focus is the\n next element to the left.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "removeL",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#removeL",
          "type": "function"
        },
        "index": {
          "description": "Remove the focus from the CList The new focus is the next element to the left",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "removeL",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:removeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the focus from the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "removeR",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#removeR",
          "type": "function"
        },
        "index": {
          "description": "Remove the focus from the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "removeR",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:removeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the direction of rotation.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "reverseDirection",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#reverseDirection",
          "type": "function"
        },
        "index": {
          "description": "Reverse the direction of rotation",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "reverseDirection",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "partial": "Direction",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:reverseDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting with the focus, go right and accumulate all\n elements of the CList in a list.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rightElements",
          "package": "data-clist",
          "signature": "CList a -\u003e [a]",
          "source": "src/Data-CircularList.html#rightElements",
          "type": "function"
        },
        "index": {
          "description": "Starting with the focus go right and accumulate all elements of the CList in list",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rightElements",
          "normalized": "CList a-\u003e[a]",
          "package": "data-clist",
          "partial": "Elements",
          "signature": "CList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rightElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the focus to the previous (left) element.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rotL",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#rotL",
          "type": "function"
        },
        "index": {
          "description": "Rotate the focus to the previous left element",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rotL",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the focus the specified number of times; if the index is\n positive then it is rotated to the right; otherwise it is rotated\n to the left.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rotN",
          "package": "data-clist",
          "signature": "Int -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#rotN",
          "type": "function"
        },
        "index": {
          "description": "Rotate the focus the specified number of times if the index is positive then it is rotated to the right otherwise it is rotated to the left",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rotN",
          "normalized": "Int-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "signature": "Int-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the focus the specified number of times to the left (but\n don't rotate if \u003ccode\u003en \u003c= 0\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rotNL",
          "package": "data-clist",
          "signature": "Int -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#rotNL",
          "type": "function"
        },
        "index": {
          "description": "Rotate the focus the specified number of times to the left but don rotate if",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rotNL",
          "normalized": "Int-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "partial": "NL",
          "signature": "Int-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotNL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003erotN\u003c/a\u003e\u003c/code\u003e that doesn't rotate the CList if \u003ccode\u003en \u003c= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rotNR",
          "package": "data-clist",
          "signature": "Int -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#rotNR",
          "type": "function"
        },
        "index": {
          "description": "wrapper around rotN that doesn rotate the CList if",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rotNR",
          "normalized": "Int-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "partial": "NR",
          "signature": "Int-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotNR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the focus to the next (right) element.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rotR",
          "package": "data-clist",
          "signature": "CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#rotR",
          "type": "function"
        },
        "index": {
          "description": "Rotate the focus to the next right element",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rotR",
          "normalized": "CList a-\u003eCList a",
          "package": "data-clist",
          "signature": "CList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e such that the specified element (if it exists)\n is focused.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "rotateTo",
          "package": "data-clist",
          "signature": "a -\u003e CList a -\u003e Maybe (CList a)",
          "source": "src/Data-CircularList.html#rotateTo",
          "type": "function"
        },
        "index": {
          "description": "Rotate the CList such that the specified element if it exists is focused",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "rotateTo",
          "normalized": "a-\u003eCList a-\u003eMaybe(CList a)",
          "package": "data-clist",
          "partial": "To",
          "signature": "a-\u003eCList a-\u003eMaybe(CList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotateTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CircularList",
          "name": "singleton",
          "package": "data-clist",
          "signature": "a -\u003e CList a",
          "source": "src/Data-CircularList.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "singleton",
          "normalized": "a-\u003eCList a",
          "package": "data-clist",
          "signature": "a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the size of the CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "size",
          "package": "data-clist",
          "signature": "CList a -\u003e Int",
          "source": "src/Data-CircularList.html#size",
          "type": "function"
        },
        "index": {
          "description": "Return the size of the CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "size",
          "normalized": "CList a-\u003eInt",
          "package": "data-clist",
          "signature": "CList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a CList into an infinite list.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "toInfList",
          "package": "data-clist",
          "signature": "CList a -\u003e [a]",
          "source": "src/Data-CircularList.html#toInfList",
          "type": "function"
        },
        "index": {
          "description": "Make CList into an infinite list",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "toInfList",
          "normalized": "CList a-\u003e[a]",
          "package": "data-clist",
          "partial": "Inf List",
          "signature": "CList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:toInfList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a list from a CList.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "toList",
          "package": "data-clist",
          "signature": "CList a -\u003e [a]",
          "source": "src/Data-CircularList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Make list from CList",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "toList",
          "normalized": "CList a-\u003e[a]",
          "package": "data-clist",
          "partial": "List",
          "signature": "CList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the current focus with a new focus.\n\u003c/p\u003e",
          "module": "Data.CircularList",
          "name": "update",
          "package": "data-clist",
          "signature": "a -\u003e CList a -\u003e CList a",
          "source": "src/Data-CircularList.html#update",
          "type": "function"
        },
        "index": {
          "description": "Replaces the current focus with new focus",
          "hierarchy": "Data CircularList",
          "module": "Data.CircularList",
          "name": "update",
          "normalized": "a-\u003eCList a-\u003eCList a",
          "package": "data-clist",
          "signature": "a-\u003eCList a-\u003eCList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:update"
      }
    }
  ]
]