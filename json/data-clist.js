[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple purely functional circular list, or ring, data type.\n\u003c/p\u003e\u003cp\u003eLets describe what we mean by \u003ccode\u003ering\u003c/code\u003e. A ring is a circular data structure\nsuch that if you continue rotating the ring, you'll eventually return to\nthe element you first observed.\n\u003c/p\u003e\u003cp\u003eAll of our analogies involve sitting at a table who's top surface rotates\nabout its center axis (think of those convenient rotating platforms one\noften finds in an (Americanized) Chinese Restaurant).\n\u003c/p\u003e\u003cp\u003eOnly the closest item on the table is avialable to us. In order to reach\nother elements on the table, we need to rotate the table to the left or\nthe right.\n\u003c/p\u003e\u003cp\u003eOur convention for this problem says that rotations to the right are a\nforward motion while rotations to the left are backward motions.\n\u003c/p\u003e\u003cp\u003eWe'll use the following circular list for our examples:\n\u003c/p\u003e\u003cpre\u003e   8 7 6\n  9     5\n A       4\n B       3\n  C     2\n   D 0 1\n     ^\n\u003c/pre\u003e\u003cp\u003eThe pointer at the bottom represents our position at the table. The element\ncurrently in front of is is referred to as the \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e. So, in this case,\nour focus is 0.\n\u003c/p\u003e\u003cp\u003eIf we were to rotate the table to the right using the \u003ccode\u003e\u003ca\u003erotR\u003c/a\u003e\u003c/code\u003e operation, we'd\nhave the following table.\n\u003c/p\u003e\u003cpre\u003e   9 8 7\n  A     6\n B       5\n C       4\n  D     3\n   0 1 2\n     ^\n\u003c/pre\u003e\u003cp\u003eThis yields 1 as our new focus. Rotating this table left would return 0 to\nthe focus position.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "module",
        "fct-source": "src/Data-CircularList.html",
        "fct-type": "module",
        "title": "CircularList"
      },
      "index": {
        "description": "simple purely functional circular list or ring data type Lets describe what we mean by ring ring is circular data structure such that if you continue rotating the ring you ll eventually return to the element you first observed All of our analogies involve sitting at table who top surface rotates about its center axis think of those convenient rotating platforms one often finds in an Americanized Chinese Restaurant Only the closest item on the table is avialable to us In order to reach other elements on the table we need to rotate the table to the left or the right Our convention for this problem says that rotations to the right are forward motion while rotations to the left are backward motions We ll use the following circular list for our examples The pointer at the bottom represents our position at the table The element currently in front of is is referred to as the focus So in this case our focus is If we were to rotate the table to the right using the rotR operation we have the following table This yields as our new focus Rotating this table left would return to the focus position",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "CircularList",
        "normalized": "",
        "package": "data-clist",
        "partial": "Circular List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#t:CList",
      "description": {
        "fct-descr": "\u003cp\u003eA functional ring type.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "data",
        "fct-source": "src/Data-CircularList.html#CList",
        "fct-type": "data",
        "title": "CList"
      },
      "index": {
        "description": "functional ring type",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "CList",
        "normalized": "",
        "package": "data-clist",
        "partial": "CList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:allRotations",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all possible rotations of the provided \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e, where the\n focus is the provided \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList (CList a)",
        "fct-source": "src/Data-CircularList.html#allRotations",
        "fct-type": "function",
        "title": "allRotations"
      },
      "index": {
        "description": "Return all possible rotations of the provided CList where the focus is the provided CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "allRotations",
        "normalized": "CList a-\u003eCList(CList a)",
        "package": "data-clist",
        "partial": "Rotations",
        "signature": "CList a-\u003eCList(CList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:balance",
      "description": {
        "fct-descr": "\u003cp\u003eBalance the CList. Equivalent to `fromList . toList`\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#balance",
        "fct-type": "function",
        "title": "balance"
      },
      "index": {
        "description": "Balance the CList Equivalent to fromList toList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "balance",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a",
        "fct-source": "src/Data-CircularList.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "empty",
        "normalized": "",
        "package": "data-clist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:filterL",
      "description": {
        "fct-descr": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003efilterR\u003c/a\u003e\u003c/code\u003e, but rotates to the \u003cem\u003eleft\u003c/em\u003e if the focus does not\n satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e Bool) -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#filterL",
        "fct-type": "function",
        "title": "filterL"
      },
      "index": {
        "description": "As with filterR but rotates to the left if the focus does not satisfy the predicate",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "filterL",
        "normalized": "(a-\u003eBool)-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:filterR",
      "description": {
        "fct-descr": "\u003cp\u003eRemove those elements that do not satisfy the supplied predicate,\n rotating to the right if the focus does not satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e Bool) -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#filterR",
        "fct-type": "function",
        "title": "filterR"
      },
      "index": {
        "description": "Remove those elements that do not satisfy the supplied predicate rotating to the right if the focus does not satisfy the predicate",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "filterR",
        "normalized": "(a-\u003eBool)-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:findRotateTo",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to rotate the \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e such that focused element matches\n the supplied predicate.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e Bool) -\u003e CList a -\u003e Maybe (CList a)",
        "fct-source": "src/Data-CircularList.html#findRotateTo",
        "fct-type": "function",
        "title": "findRotateTo"
      },
      "index": {
        "description": "Attempt to rotate the CList such that focused element matches the supplied predicate",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "findRotateTo",
        "normalized": "(a-\u003eBool)-\u003eCList a-\u003eMaybe(CList a)",
        "package": "data-clist",
        "partial": "Rotate To",
        "signature": "(a-\u003eBool)-\u003eCList a-\u003eMaybe(CList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:focus",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the focus of the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e Maybe a",
        "fct-source": "src/Data-CircularList.html#focus",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "Return the focus of the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "focus",
        "normalized": "CList a-\u003eMaybe a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldlL",
      "description": {
        "fct-descr": "\u003cp\u003eA (strict) left-fold, rotating to the left through the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e CList b -\u003e a",
        "fct-source": "src/Data-CircularList.html#foldlL",
        "fct-type": "function",
        "title": "foldlL"
      },
      "index": {
        "description": "strict left-fold rotating to the left through the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "foldlL",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea",
        "package": "data-clist",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldlR",
      "description": {
        "fct-descr": "\u003cp\u003eA (strict) left-fold, rotating to the right through the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e CList b -\u003e a",
        "fct-source": "src/Data-CircularList.html#foldlR",
        "fct-type": "function",
        "title": "foldlR"
      },
      "index": {
        "description": "strict left-fold rotating to the right through the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "foldlR",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea",
        "package": "data-clist",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eCList b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldrL",
      "description": {
        "fct-descr": "\u003cp\u003eA right-fold, rotating to the left through the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e CList a -\u003e b",
        "fct-source": "src/Data-CircularList.html#foldrL",
        "fct-type": "function",
        "title": "foldrL"
      },
      "index": {
        "description": "right-fold rotating to the left through the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "foldrL",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb",
        "package": "data-clist",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:foldrR",
      "description": {
        "fct-descr": "\u003cp\u003eA right-fold, rotating to the right through the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e CList a -\u003e b",
        "fct-source": "src/Data-CircularList.html#foldrR",
        "fct-type": "function",
        "title": "foldrR"
      },
      "index": {
        "description": "right-fold rotating to the right through the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "foldrR",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb",
        "package": "data-clist",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eCList a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eMake a (balanced) CList from a list.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "[a] -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Make balanced CList from list",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "fromList",
        "normalized": "[a]-\u003eCList a",
        "package": "data-clist",
        "partial": "List",
        "signature": "[a]-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:insertL",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an element into the CList as the new focus. The\n old focus is now the next element to the left.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "a -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#insertL",
        "fct-type": "function",
        "title": "insertL"
      },
      "index": {
        "description": "Insert an element into the CList as the new focus The old focus is now the next element to the left",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "insertL",
        "normalized": "a-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "a-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:insertR",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an element into the CList as the new focus. The\n old focus is now the next element to the right.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "a -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#insertR",
        "fct-type": "function",
        "title": "insertR"
      },
      "index": {
        "description": "Insert an element into the CList as the new focus The old focus is now the next element to the right",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "insertR",
        "normalized": "a-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "a-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the CList is empty.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e Bool",
        "fct-source": "src/Data-CircularList.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Returns true if the CList is empty",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "isEmpty",
        "normalized": "CList a-\u003eBool",
        "package": "data-clist",
        "partial": "Empty",
        "signature": "CList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:leftElements",
      "description": {
        "fct-descr": "\u003cp\u003eStarting with the focus, go left and accumulate all\n elements of the CList in a list.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e [a]",
        "fct-source": "src/Data-CircularList.html#leftElements",
        "fct-type": "function",
        "title": "leftElements"
      },
      "index": {
        "description": "Starting with the focus go left and accumulate all elements of the CList in list",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "leftElements",
        "normalized": "CList a-\u003e[a]",
        "package": "data-clist",
        "partial": "Elements",
        "signature": "CList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:packL",
      "description": {
        "fct-descr": "\u003cp\u003eMove all elements to the left side of the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#packL",
        "fct-type": "function",
        "title": "packL"
      },
      "index": {
        "description": "Move all elements to the left side of the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "packL",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:packR",
      "description": {
        "fct-descr": "\u003cp\u003eMove all elements to the right side of the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#packR",
        "fct-type": "function",
        "title": "packR"
      },
      "index": {
        "description": "Move all elements to the right side of the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "packR",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:removeL",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the focus from the CList. The new focus is the\n next element to the left.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#removeL",
        "fct-type": "function",
        "title": "removeL"
      },
      "index": {
        "description": "Remove the focus from the CList The new focus is the next element to the left",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "removeL",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:removeR",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the focus from the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#removeR",
        "fct-type": "function",
        "title": "removeR"
      },
      "index": {
        "description": "Remove the focus from the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "removeR",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:reverseDirection",
      "description": {
        "fct-descr": "\u003cp\u003eReverse the direction of rotation.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#reverseDirection",
        "fct-type": "function",
        "title": "reverseDirection"
      },
      "index": {
        "description": "Reverse the direction of rotation",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "reverseDirection",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "Direction",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rightElements",
      "description": {
        "fct-descr": "\u003cp\u003eStarting with the focus, go right and accumulate all\n elements of the CList in a list.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e [a]",
        "fct-source": "src/Data-CircularList.html#rightElements",
        "fct-type": "function",
        "title": "rightElements"
      },
      "index": {
        "description": "Starting with the focus go right and accumulate all elements of the CList in list",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rightElements",
        "normalized": "CList a-\u003e[a]",
        "package": "data-clist",
        "partial": "Elements",
        "signature": "CList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotL",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the focus to the previous (left) element.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#rotL",
        "fct-type": "function",
        "title": "rotL"
      },
      "index": {
        "description": "Rotate the focus to the previous left element",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rotL",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotN",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the focus the specified number of times; if the index is\n positive then it is rotated to the right; otherwise it is rotated\n to the left.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "Int -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#rotN",
        "fct-type": "function",
        "title": "rotN"
      },
      "index": {
        "description": "Rotate the focus the specified number of times if the index is positive then it is rotated to the right otherwise it is rotated to the left",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rotN",
        "normalized": "Int-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "Int-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotNL",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the focus the specified number of times to the left (but\n don't rotate if \u003ccode\u003en \u003c= 0\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "Int -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#rotNL",
        "fct-type": "function",
        "title": "rotNL"
      },
      "index": {
        "description": "Rotate the focus the specified number of times to the left but don rotate if",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rotNL",
        "normalized": "Int-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "NL",
        "signature": "Int-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotNR",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003erotN\u003c/a\u003e\u003c/code\u003e that doesn't rotate the CList if \u003ccode\u003en \u003c= 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "Int -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#rotNR",
        "fct-type": "function",
        "title": "rotNR"
      },
      "index": {
        "description": "wrapper around rotN that doesn rotate the CList if",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rotNR",
        "normalized": "Int-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "NR",
        "signature": "Int-\u003eCList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotR",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the focus to the next (right) element.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#rotR",
        "fct-type": "function",
        "title": "rotR"
      },
      "index": {
        "description": "Rotate the focus to the next right element",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rotR",
        "normalized": "CList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:rotateTo",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003e such that the specified element (if it exists)\n is focused.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "a -\u003e CList a -\u003e Maybe (CList a)",
        "fct-source": "src/Data-CircularList.html#rotateTo",
        "fct-type": "function",
        "title": "rotateTo"
      },
      "index": {
        "description": "Rotate the CList such that the specified element if it exists is focused",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "rotateTo",
        "normalized": "a-\u003eCList a-\u003eMaybe(CList a)",
        "package": "data-clist",
        "partial": "To",
        "signature": "a-\u003eCList a-\u003eMaybe(CList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:singleton",
      "description": {
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "singleton",
        "normalized": "a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "a-\u003eCList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of the CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e Int",
        "fct-source": "src/Data-CircularList.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Return the size of the CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "size",
        "normalized": "CList a-\u003eInt",
        "package": "data-clist",
        "partial": "",
        "signature": "CList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:toInfList",
      "description": {
        "fct-descr": "\u003cp\u003eMake a CList into an infinite list.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e [a]",
        "fct-source": "src/Data-CircularList.html#toInfList",
        "fct-type": "function",
        "title": "toInfList"
      },
      "index": {
        "description": "Make CList into an infinite list",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "toInfList",
        "normalized": "CList a-\u003e[a]",
        "package": "data-clist",
        "partial": "Inf List",
        "signature": "CList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eMake a list from a CList.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "CList a -\u003e [a]",
        "fct-source": "src/Data-CircularList.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Make list from CList",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "toList",
        "normalized": "CList a-\u003e[a]",
        "package": "data-clist",
        "partial": "List",
        "signature": "CList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-clist/docs/Data-CircularList.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces the current focus with a new focus.\n\u003c/p\u003e",
        "fct-module": "Data.CircularList",
        "fct-package": "data-clist",
        "fct-signature": "a -\u003e CList a -\u003e CList a",
        "fct-source": "src/Data-CircularList.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Replaces the current focus with new focus",
        "hierarchy": "Data CircularList",
        "module": "Data.CircularList",
        "name": "update",
        "normalized": "a-\u003eCList a-\u003eCList a",
        "package": "data-clist",
        "partial": "",
        "signature": "a-\u003eCList a-\u003eCList a"
      }
    }
  }
]