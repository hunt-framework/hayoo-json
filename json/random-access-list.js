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
        "word": "random-access-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA random-access list implementation based on Chris Okasaki's approach\n on his book \"Purely Functional Data Structures\", Cambridge University\n Press, 1998, chapter 9.3.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es are finite lists providing random-access (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e, etc.) in \u003cem\u003eO(log n)\u003c/em\u003e while the list functionality \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e still works in \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es for effective indexing. The valid index\n range of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e of size \u003ccode\u003en\u003c/code\u003e is \u003ccode\u003e[0 .. n-1]\u003c/code\u003e. If an index is\n out of range, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RandomAccessList",
          "name": "RandomAccessList",
          "package": "random-access-list",
          "source": "src/Data-RandomAccessList.html",
          "type": "module"
        },
        "index": {
          "description": "random-access list implementation based on Chris Okasaki approach on his book Purely Functional Data Structures Cambridge University Press chapter RandomAccessList are finite lists providing random-access lookup update etc in log while the list functionality head tail and cons still works in RandomAccessList uses Int for effective indexing The valid index range of RandomAccessList of size is n-1 If an index is out of range an error is raised",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "RandomAccessList",
          "package": "random-access-list",
          "partial": "Random Access List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom-access lists allowing \u003cem\u003eO(1)\u003c/em\u003e list operations and \u003cem\u003eO(log n)\u003c/em\u003e\n indexed access.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "RandomAccessList",
          "package": "random-access-list",
          "source": "src/Data-RandomAccessList.html#RandomAccessList",
          "type": "data"
        },
        "index": {
          "description": "Random-access lists allowing list operations and log indexed access",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "RandomAccessList",
          "package": "random-access-list",
          "partial": "Random Access List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#t:RandomAccessList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView the end of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e which is either empty or has\n been constructed by \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "View",
          "package": "random-access-list",
          "source": "src/Data-RandomAccessList.html#View",
          "type": "data"
        },
        "index": {
          "description": "View the end of RandomAccessList which is either empty or has been constructed by head and tail",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "View",
          "package": "random-access-list",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e of a non-empty \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "Cons",
          "package": "random-access-list",
          "signature": "Cons a (RandomAccessList a)",
          "source": "src/Data-RandomAccessList.html#View",
          "type": "function"
        },
        "index": {
          "description": "head and tail of non-empty RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "Cons",
          "package": "random-access-list",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "Empty",
          "package": "random-access-list",
          "signature": "Empty",
          "source": "src/Data-RandomAccessList.html#View",
          "type": "function"
        },
        "index": {
          "description": "An empty RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "Empty",
          "package": "random-access-list",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust \u003cem\u003ei\u003c/em\u003eth element of the list according to the\n given function. Unless \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "adjust",
          "package": "random-access-list",
          "signature": "(a -\u003e a) -\u003e Int -\u003e RandomAccessList a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Adjust th element of the list according to the given function Unless an error is raised",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the \u003cem\u003ei\u003c/em\u003eth element of the list and change it. This\n function returns the element that is at index \u003cem\u003ei\u003c/em\u003e in the original\n \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e and a new \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e with the \u003cem\u003ei\u003c/em\u003eth\n element replaced according to the given function:\n\u003c/p\u003e\u003cpre\u003e\n    lookup   index list === fst (adjustLookup undefined index list)\n    adjust f index list === snd (adjustLookup f         index list)\n\u003c/pre\u003e\u003cp\u003eUnless \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "adjustLookup",
          "package": "random-access-list",
          "signature": "(a -\u003e a)-\u003e Int-\u003e RandomAccessList a-\u003e (a, RandomAccessList a)",
          "type": "function"
        },
        "index": {
          "description": "log Find the th element of the list and change it This function returns the element that is at index in the original RandomAccessList and new RandomAccessList with the th element replaced according to the given function lookup index list fst adjustLookup undefined index list adjust index list snd adjustLookup index list Unless an error is raised",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "adjustLookup",
          "normalized": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003e(a,RandomAccessList a)",
          "package": "random-access-list",
          "partial": "Lookup",
          "signature": "(a-\u003ea)-\u003eInt-\u003eRandomAccessList a-\u003e(a,RandomAccessList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:adjustLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e where \u003cem\u003en\u003c/em\u003e is the \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of the first list. Appends the second\n list to the first list.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "append",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e RandomAccessList a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#append",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the first list Appends the second list to the first list",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "append",
          "normalized": "RandomAccessList a-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Prepend an element to the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "cons",
          "package": "random-access-list",
          "signature": "a -\u003e RandomAccessList a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Prepend an element to the RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "cons",
          "normalized": "a-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "a-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Builds an empty \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "empty",
          "package": "random-access-list",
          "signature": "RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Builds an empty RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "empty",
          "package": "random-access-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Remove all elements from a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e not fulfilling a\n predicate.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "filter",
          "package": "random-access-list",
          "signature": "(a -\u003e Bool) -\u003e RandomAccessList a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Remove all elements from RandomAccessList not fulfilling predicate",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "(a-\u003eBool)-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Given an \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e, generate a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. The elements'\n order will be preserved.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "fromArray",
          "package": "random-access-list",
          "signature": "a i e -\u003e RandomAccessList e",
          "source": "src/Data-RandomAccessList.html#fromArray",
          "type": "function"
        },
        "index": {
          "description": "Given an IArray generate RandomAccessList The elements order will be preserved",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "fromArray",
          "normalized": "a b c-\u003eRandomAccessList c",
          "package": "random-access-list",
          "partial": "Array",
          "signature": "a i e-\u003eRandomAccessList e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:fromArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e from a list.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "fromList",
          "package": "random-access-list",
          "signature": "[a] -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build RandomAccessList from list",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "fromList",
          "normalized": "[a]-\u003eRandomAccessList a",
          "package": "random-access-list",
          "partial": "List",
          "signature": "[a]-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Returns the head of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "head",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e a",
          "source": "src/Data-RandomAccessList.html#head",
          "type": "function"
        },
        "index": {
          "description": "Returns the head of RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "head",
          "normalized": "RandomAccessList a-\u003ea",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Find the index of a given element.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "index",
          "package": "random-access-list",
          "signature": "a -\u003e RandomAccessList a -\u003e Maybe Int",
          "source": "src/Data-RandomAccessList.html#index",
          "type": "function"
        },
        "index": {
          "description": "Find the index of given element",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "index",
          "normalized": "a-\u003eRandomAccessList a-\u003eMaybe Int",
          "package": "random-access-list",
          "signature": "a-\u003eRandomAccessList a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "isEmpty",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e Bool",
          "source": "src/Data-RandomAccessList.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Is the RandomAccessList empty",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "isEmpty",
          "normalized": "RandomAccessList a-\u003eBool",
          "package": "random-access-list",
          "partial": "Empty",
          "signature": "RandomAccessList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements contained in a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "length",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e Int",
          "source": "src/Data-RandomAccessList.html#length",
          "type": "function"
        },
        "index": {
          "description": "The number of elements contained in RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "length",
          "normalized": "RandomAccessList a-\u003eInt",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieve the \u003cem\u003ei\u003c/em\u003eth element of the list. Unless\n \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "lookup",
          "package": "random-access-list",
          "signature": "Int -\u003e RandomAccessList a -\u003e a",
          "source": "src/Data-RandomAccessList.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Retrieve the th element of the list Unless an error is raised",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "lookup",
          "normalized": "Int-\u003eRandomAccessList a-\u003ea",
          "package": "random-access-list",
          "signature": "Int-\u003eRandomAccessList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Is the given element a member of the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "member",
          "package": "random-access-list",
          "signature": "a -\u003e RandomAccessList a -\u003e Bool",
          "source": "src/Data-RandomAccessList.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the given element member of the RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "member",
          "normalized": "a-\u003eRandomAccessList a-\u003eBool",
          "package": "random-access-list",
          "signature": "a-\u003eRandomAccessList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e empty?\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "null",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e Bool",
          "source": "src/Data-RandomAccessList.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the RandomAccessList empty",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "null",
          "normalized": "RandomAccessList a-\u003eBool",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Split a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e into two: The elements in the first\n fulfill the given prefix, the others don't.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "partition",
          "package": "random-access-list",
          "signature": "(a -\u003e Bool) -\u003e RandomAccessList a -\u003e (RandomAccessList a, RandomAccessList a)",
          "source": "src/Data-RandomAccessList.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Split RandomAccessList into two The elements in the first fulfill the given prefix the others don",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eRandomAccessList a-\u003e(RandomAccessList a,RandomAccessList a)",
          "package": "random-access-list",
          "signature": "(a-\u003eBool)-\u003eRandomAccessList a-\u003e(RandomAccessList a,RandomAccessList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e constructs a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e that\n contains the same element \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "replicate",
          "package": "random-access-list",
          "signature": "Int -\u003e a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate constructs RandomAccessList that contains the same element times",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "Int-\u003ea-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Builds a singleton \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "singleton",
          "package": "random-access-list",
          "signature": "a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Builds singleton RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "singleton",
          "normalized": "a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements contained in a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "size",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e Int",
          "source": "src/Data-RandomAccessList.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements contained in RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "size",
          "normalized": "RandomAccessList a-\u003eInt",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Retrieve the tail of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "tail",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the tail of RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "tail",
          "normalized": "RandomAccessList a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build an \u003ccode\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. It will have\n an index range from \u003ccode\u003e[0 .. n-1]\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es\n \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "toArray",
          "package": "random-access-list",
          "signature": "RandomAccessList e -\u003e a Int e",
          "source": "src/Data-RandomAccessList.html#toArray",
          "type": "function"
        },
        "index": {
          "description": "Build an IArray from the RandomAccessList It will have an index range from n-1 where is the RandomAccessList length",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "toArray",
          "normalized": "RandomAccessList a-\u003eb Int a",
          "package": "random-access-list",
          "partial": "Array",
          "signature": "RandomAccessList e-\u003ea Int e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e to a list of tuples each holding\n an element and its index. The list is ordered ascending regarding the\n indices.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "toIndexedList",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e [(Int, a)]",
          "source": "src/Data-RandomAccessList.html#toIndexedList",
          "type": "function"
        },
        "index": {
          "description": "Convert RandomAccessList to list of tuples each holding an element and its index The list is ordered ascending regarding the indices",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "toIndexedList",
          "normalized": "RandomAccessList a-\u003e[(Int,a)]",
          "package": "random-access-list",
          "partial": "Indexed List",
          "signature": "RandomAccessList a-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toIndexedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. The keys in the\n \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e are the indices of the elements in the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "toIntMap",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e IntMap a",
          "source": "src/Data-RandomAccessList.html#toIntMap",
          "type": "function"
        },
        "index": {
          "description": "Build an IntMap from RandomAccessList The keys in the IntMap are the indices of the elements in the RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "toIntMap",
          "normalized": "RandomAccessList a-\u003eIntMap a",
          "package": "random-access-list",
          "partial": "Int Map",
          "signature": "RandomAccessList a-\u003eIntMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e to a list.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "toList",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e [a]",
          "source": "src/Data-RandomAccessList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert RandomAccessList to list",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "toList",
          "normalized": "RandomAccessList a-\u003e[a]",
          "package": "random-access-list",
          "partial": "List",
          "signature": "RandomAccessList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e. The keys in the\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e are the indices of the elements in the \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "toMap",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e Map Int a",
          "source": "src/Data-RandomAccessList.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Build Map from RandomAccessList The keys in the Map are the indices of the elements in the RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "toMap",
          "normalized": "RandomAccessList a-\u003eMap Int a",
          "package": "random-access-list",
          "partial": "Map",
          "signature": "RandomAccessList a-\u003eMap Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Retrieve both, \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "uncons",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e (a, RandomAccessList a)",
          "source": "src/Data-RandomAccessList.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Retrieve both head and tail of RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "uncons",
          "normalized": "RandomAccessList a-\u003e(a,RandomAccessList a)",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003e(a,RandomAccessList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. List-like \u003ccode\u003ePrelude.unzip\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "unzip",
          "package": "random-access-list",
          "signature": "RandomAccessList (a, b) -\u003e (RandomAccessList a, RandomAccessList b)",
          "source": "src/Data-RandomAccessList.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "List-like Prelude.unzip for RandomAccessList",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "unzip",
          "normalized": "RandomAccessList(a,b)-\u003e(RandomAccessList a,RandomAccessList b)",
          "package": "random-access-list",
          "signature": "RandomAccessList(a,b)-\u003e(RandomAccessList a,RandomAccessList b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Set the \u003cem\u003ei\u003c/em\u003eth element of the list. Unless\n \u003cem\u003e0 \u003c= i \u003c n\u003c/em\u003e, an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e is raised.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "update",
          "package": "random-access-list",
          "signature": "Int -\u003e a -\u003e RandomAccessList a -\u003e RandomAccessList a",
          "source": "src/Data-RandomAccessList.html#update",
          "type": "function"
        },
        "index": {
          "description": "log Set the th element of the list Unless an error is raised",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "update",
          "normalized": "Int-\u003ea-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "package": "random-access-list",
          "signature": "Int-\u003ea-\u003eRandomAccessList a-\u003eRandomAccessList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Examine a \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003e: Either it is \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e or it has\n a \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e (packed in \u003ccode\u003e\u003ca\u003eCons\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "view",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e View a",
          "source": "src/Data-RandomAccessList.html#view",
          "type": "function"
        },
        "index": {
          "description": "Examine RandomAccessList Either it is Empty or it has head and tail packed in Cons",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "view",
          "normalized": "RandomAccessList a-\u003eView a",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eView a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n, m))\u003c/em\u003e. List-like \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e. This function is slightly faster\n when called with two \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es of equal \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "zip",
          "package": "random-access-list",
          "signature": "RandomAccessList a -\u003e RandomAccessList b -\u003e RandomAccessList (a, b)",
          "source": "src/Data-RandomAccessList.html#zip",
          "type": "function"
        },
        "index": {
          "description": "min List-like zip This function is slightly faster when called with two RandomAccessList of equal length",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "zip",
          "normalized": "RandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList(a,b)",
          "package": "random-access-list",
          "signature": "RandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(n, m))\u003c/em\u003e. List-like \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e. This function is slightly faster\n when called with two \u003ccode\u003e\u003ca\u003eRandomAccessList\u003c/a\u003e\u003c/code\u003es of equal \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandomAccessList",
          "name": "zipWith",
          "package": "random-access-list",
          "signature": "(a -\u003e b -\u003e c) -\u003e RandomAccessList a -\u003e RandomAccessList b -\u003e RandomAccessList c",
          "source": "src/Data-RandomAccessList.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "min List-like zipWith This function is slightly faster when called with two RandomAccessList of equal length",
          "hierarchy": "Data RandomAccessList",
          "module": "Data.RandomAccessList",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eRandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList c",
          "package": "random-access-list",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eRandomAccessList a-\u003eRandomAccessList b-\u003eRandomAccessList c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-access-list/docs/Data-RandomAccessList.html#v:zipWith"
      }
    }
  ]
]