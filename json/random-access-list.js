[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA random-access list implementation based on Chris Okasaki's approach\n on his book \"Purely Functional Data Structures\", Cambridge University\n Press, 1998, chapter 9.3.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es are finite lists providing random-access (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, etc.) in \u003cem\u003eO(log n)\u003c/em\u003e while the list functionality \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e still works in \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es for effective indexing. The valid index\n range of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e of size \u003ccode\u003en\u003c/code\u003e is \u003ccode\u003e[0 .. n-1]\u003c/code\u003e. If an index is\n out of range, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "module",
        "fct-source": "src/Data-RandomAccessList.html",
        "fct-type": "module",
        "title": "RandomAccessList"
      },
      "index": {
        "description": "random-access list implementation based on Chris Okasaki approach on his book Purely Functional Data Structures Cambridge University Press chapter RandomAccessList are finite lists providing random-access lookup update etc in log while the list functionality head tail and cons still works in RandomAccessList uses Int for effective indexing The valid index range of RandomAccessList of size is n-1 If an index is out of range an error is raised",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "RandomAccessList",
        "normalized": "",
        "package": "random-access-list",
        "partial": "Random Access List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#t:RandomAccessList",
      "description": {
        "fct-descr": "\u003cp\u003eRandom-access lists allowing \u003cem\u003eO(1)\u003c/em\u003e list operations and \u003cem\u003eO(log n)\u003c/em\u003e\n indexed access.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "data",
        "fct-source": "src/Data-RandomAccessList.html#RandomAccessList",
        "fct-type": "data",
        "title": "RandomAccessList"
      },
      "index": {
        "description": "Random-access lists allowing list operations and log indexed access",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "RandomAccessList",
        "normalized": "",
        "package": "random-access-list",
        "partial": "Random Access List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#t:View",
      "description": {
        "fct-descr": "\u003cp\u003eView the end of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e which is either empty or has\n been constructed by \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "data",
        "fct-source": "src/Data-RandomAccessList.html#View",
        "fct-type": "data",
        "title": "View"
      },
      "index": {
        "description": "View the end of RandomAccessList which is either empty or has been constructed by head and tail",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "View",
        "normalized": "",
        "package": "random-access-list",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:Cons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e of a non-empty \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "Cons a (RandomAccessList a)",
        "fct-source": "src/Data-RandomAccessList.html#View",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "head and tail of non-empty RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "Cons",
        "normalized": "",
        "package": "random-access-list",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:Empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "Empty",
        "fct-source": "src/Data-RandomAccessList.html#View",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "An empty RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "Empty",
        "normalized": "",
        "package": "random-access-list",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust \u003cem\u003ei\u003c/em\u003eth element of the list according to the\n given function. Unless \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "(a -\u003e a) -\u003e Int -\u003e RandomAccessList a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Adjust th element of the list according to the given function Unless an error is raised",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:adjustLookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the \u003cem\u003ei\u003c/em\u003eth element of the list and change it. This\n function returns the element that is at index \u003cem\u003ei\u003c/em\u003e in the original\n \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e and a new \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e with the \u003cem\u003ei\u003c/em\u003eth\n element replaced according to the given function:\n\u003c/p\u003e\u003cpre\u003e\n    lookup   index list === fst (adjustLookup undefined index list)\n    adjust f index list === snd (adjustLookup f         index list)\n\u003c/pre\u003e\u003cp\u003eUnless \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "(a -\u003e a)-\u003e Int-\u003e RandomAccessList a-\u003e (a, RandomAccessList a)",
        "fct-type": "function",
        "title": "adjustLookup"
      },
      "index": {
        "description": "log Find the th element of the list and change it This function returns the element that is at index in the original RandomAccessList and new RandomAccessList with the th element replaced according to the given function lookup index list fst adjustLookup undefined index list adjust index list snd adjustLookup index list Unless an error is raised",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "adjustLookup",
        "normalized": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003e(a,RandomAccessList a)",
        "package": "random-access-list",
        "partial": "Lookup",
        "signature": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003e(a,RandomAccessList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e where \u003cem\u003en\u003c/em\u003e is the \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of the first list. Appends the second\n list to the first list.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e RandomAccessList a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "where is the length of the first list Appends the second list to the first list",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "append",
        "normalized": "RandomAccessList a-\u003eRandomAccessList a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eRandomAccessList a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Prepend an element to the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "a -\u003e RandomAccessList a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "Prepend an element to the RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "cons",
        "normalized": "a-\u003eRandomAccessList a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "a-\u003eRandomAccessList a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Builds an empty \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Builds an empty RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "empty",
        "normalized": "",
        "package": "random-access-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Remove all elements from a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e not fulfilling a\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "(a -\u003e Bool) -\u003e RandomAccessList a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Remove all elements from RandomAccessList not fulfilling predicate",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eRandomAccessList a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRandomAccessList a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:fromArray",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Given an \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e, generate a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. The elements'\n order will be preserved.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "a i e -\u003e RandomAccessList e",
        "fct-source": "src/Data-RandomAccessList.html#fromArray",
        "fct-type": "function",
        "title": "fromArray"
      },
      "index": {
        "description": "Given an IArray generate RandomAccessList The elements order will be preserved",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "fromArray",
        "normalized": "a b c-\u003eRandomAccessList c",
        "package": "random-access-list",
        "partial": "Array",
        "signature": "a i e-\u003eRandomAccessList e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e from a list.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "[a] -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build RandomAccessList from list",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "fromList",
        "normalized": "[a]-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "List",
        "signature": "[a]-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Returns the head of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e a",
        "fct-source": "src/Data-RandomAccessList.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Returns the head of RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "head",
        "normalized": "RandomAccessList a-\u003ea",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Find the index of a given element.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "a -\u003e RandomAccessList a -\u003e Maybe Int",
        "fct-source": "src/Data-RandomAccessList.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Find the index of given element",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "index",
        "normalized": "a-\u003eRandomAccessList a-\u003eMaybe Int",
        "package": "random-access-list",
        "partial": "",
        "signature": "a-\u003eRandomAccessList a-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e Bool",
        "fct-source": "src/Data-RandomAccessList.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Is the RandomAccessList empty",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "isEmpty",
        "normalized": "RandomAccessList a-\u003eBool",
        "package": "random-access-list",
        "partial": "Empty",
        "signature": "RandomAccessList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements contained in a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e Int",
        "fct-source": "src/Data-RandomAccessList.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "The number of elements contained in RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "length",
        "normalized": "RandomAccessList a-\u003eInt",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieve the \u003cem\u003ei\u003c/em\u003eth element of the list. Unless\n \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "Int -\u003e RandomAccessList a -\u003e a",
        "fct-source": "src/Data-RandomAccessList.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Retrieve the th element of the list Unless an error is raised",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "lookup",
        "normalized": "Int-\u003eRandomAccessList a-\u003ea",
        "package": "random-access-list",
        "partial": "",
        "signature": "Int-\u003eRandomAccessList a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Is the given element a member of the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "a -\u003e RandomAccessList a -\u003e Bool",
        "fct-source": "src/Data-RandomAccessList.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is the given element member of the RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "member",
        "normalized": "a-\u003eRandomAccessList a-\u003eBool",
        "package": "random-access-list",
        "partial": "",
        "signature": "a-\u003eRandomAccessList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e Bool",
        "fct-source": "src/Data-RandomAccessList.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the RandomAccessList empty",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "null",
        "normalized": "RandomAccessList a-\u003eBool",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Split a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e into two: The elements in the first\n fulfill the given prefix, the others don't.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "(a -\u003e Bool) -\u003e RandomAccessList a -\u003e (RandomAccessList a, RandomAccessList a)",
        "fct-source": "src/Data-RandomAccessList.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "Split RandomAccessList into two The elements in the first fulfill the given prefix the others don",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eRandomAccessList a-\u003e(RandomAccessList a,RandomAccessList a)",
        "package": "random-access-list",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eRandomAccessList a-\u003e(RandomAccessList a,RandomAccessList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e constructs a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e that\n contains the same element \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "Int -\u003e a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "replicate constructs RandomAccessList that contains the same element times",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "Int-\u003ea-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Builds a singleton \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Builds singleton RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "singleton",
        "normalized": "a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements contained in a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e Int",
        "fct-source": "src/Data-RandomAccessList.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements contained in RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "size",
        "normalized": "RandomAccessList a-\u003eInt",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Retrieve the tail of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Retrieve the tail of RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "tail",
        "normalized": "RandomAccessList a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toArray",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build an \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. It will have\n an index range from \u003ccode\u003e[0 .. n-1]\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es\n \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList e -\u003e a Int e",
        "fct-source": "src/Data-RandomAccessList.html#toArray",
        "fct-type": "function",
        "title": "toArray"
      },
      "index": {
        "description": "Build an IArray from the RandomAccessList It will have an index range from n-1 where is the RandomAccessList length",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "toArray",
        "normalized": "RandomAccessList a-\u003eb Int a",
        "package": "random-access-list",
        "partial": "Array",
        "signature": "RandomAccessList e-\u003ea Int e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toIndexedList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e to a list of tuples each holding\n an element and its index. The list is ordered ascending regarding the\n indices.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e [(Int, a)]",
        "fct-source": "src/Data-RandomAccessList.html#toIndexedList",
        "fct-type": "function",
        "title": "toIndexedList"
      },
      "index": {
        "description": "Convert RandomAccessList to list of tuples each holding an element and its index The list is ordered ascending regarding the indices",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "toIndexedList",
        "normalized": "RandomAccessList a-\u003e[(Int,a)]",
        "package": "random-access-list",
        "partial": "Indexed List",
        "signature": "RandomAccessList a-\u003e[(Int,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toIntMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. The keys in the\n \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e are the indices of the elements in the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e IntMap a",
        "fct-source": "src/Data-RandomAccessList.html#toIntMap",
        "fct-type": "function",
        "title": "toIntMap"
      },
      "index": {
        "description": "Build an IntMap from RandomAccessList The keys in the IntMap are the indices of the elements in the RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "toIntMap",
        "normalized": "RandomAccessList a-\u003eIntMap a",
        "package": "random-access-list",
        "partial": "Int Map",
        "signature": "RandomAccessList a-\u003eIntMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e to a list.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e [a]",
        "fct-source": "src/Data-RandomAccessList.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert RandomAccessList to list",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "toList",
        "normalized": "RandomAccessList a-\u003e[a]",
        "package": "random-access-list",
        "partial": "List",
        "signature": "RandomAccessList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. The keys in the\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e are the indices of the elements in the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e Map Int a",
        "fct-source": "src/Data-RandomAccessList.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Build Map from RandomAccessList The keys in the Map are the indices of the elements in the RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "toMap",
        "normalized": "RandomAccessList a-\u003eMap Int a",
        "package": "random-access-list",
        "partial": "Map",
        "signature": "RandomAccessList a-\u003eMap Int a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Retrieve both, \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e (a, RandomAccessList a)",
        "fct-source": "src/Data-RandomAccessList.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Retrieve both head and tail of RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "uncons",
        "normalized": "RandomAccessList a-\u003e(a,RandomAccessList a)",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003e(a,RandomAccessList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. List-like \u003ccode\u003ePrelude.unzip\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList (a, b) -\u003e (RandomAccessList a, RandomAccessList b)",
        "fct-source": "src/Data-RandomAccessList.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "List-like Prelude.unzip for RandomAccessList",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "unzip",
        "normalized": "RandomAccessList(a,b)-\u003e(RandomAccessList a,RandomAccessList b)",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList(a,b)-\u003e(RandomAccessList a,RandomAccessList b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Set the \u003cem\u003ei\u003c/em\u003eth element of the list. Unless\n \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "Int -\u003e a -\u003e RandomAccessList a -\u003e RandomAccessList a",
        "fct-source": "src/Data-RandomAccessList.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "log Set the th element of the list Unless an error is raised",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "update",
        "normalized": "Int-\u003ea-\u003eRandomAccessList a-\u003eRandomAccessList a",
        "package": "random-access-list",
        "partial": "",
        "signature": "Int-\u003ea-\u003eRandomAccessList a-\u003eRandomAccessList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Examine a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e: Either it is \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e or it has\n a \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e (packed in \u003ccode\u003e\u003ca\u003eCons\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e View a",
        "fct-source": "src/Data-RandomAccessList.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "Examine RandomAccessList Either it is Empty or it has head and tail packed in Cons",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "view",
        "normalized": "RandomAccessList a-\u003eView a",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eView a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n, m))\u003c/em\u003e. List-like \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e. This function is slightly faster\n when called with two \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es of equal \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "RandomAccessList a -\u003e RandomAccessList b -\u003e RandomAccessList (a, b)",
        "fct-source": "src/Data-RandomAccessList.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "min List-like zip This function is slightly faster when called with two RandomAccessList of equal length",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "zip",
        "normalized": "RandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList(a,b)",
        "package": "random-access-list",
        "partial": "",
        "signature": "RandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n, m))\u003c/em\u003e. List-like \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e. This function is slightly faster\n when called with two \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es of equal \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandomAccessList",
        "fct-package": "random-access-list",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e RandomAccessList a -\u003e RandomAccessList b -\u003e RandomAccessList c",
        "fct-source": "src/Data-RandomAccessList.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "min List-like zipWith This function is slightly faster when called with two RandomAccessList of equal length",
        "hierarchy": "Data RandomAccessList",
        "module": "Data.RandomAccessList",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eRandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList c",
        "package": "random-access-list",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eRandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList c"
      }
    }
  }
]