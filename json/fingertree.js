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
        "word": "fingertree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA general sequence representation with arbitrary annotations, for\n use as a base for implementations of various collection types, as\n described in section 4 of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ralf Hinze and Ross Paterson,\n      \"Finger trees: a simple general-purpose data structure\",\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 16:2 (2006) pp 197-217.\n      \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor a directly usable sequence type, see \u003ccode\u003eData.Sequence\u003c/code\u003e, which is\n a specialization of this structure.\n\u003c/p\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e\n referring to the length of the sequence.  These bounds hold even in\n a persistent (shared) setting.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Many of these operations have the same names as similar\n operations on lists in the \u003ca\u003ePrelude\u003c/a\u003e.  The ambiguity may be resolved\n using either qualification or the \u003ccode\u003ehiding\u003c/code\u003e clause.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "source": "src/Data-FingerTree.html",
          "type": "module"
        },
        "index": {
          "description": "general sequence representation with arbitrary annotations for use as base for implementations of various collection types as described in section of Ralf Hinze and Ross Paterson Finger trees simple general-purpose data structure Journal of Functional Programming pp http www.soi.city.ac.uk ross papers FingerTree.html For directly usable sequence type see Data.Sequence which is specialization of this structure An amortized running time is given for each operation with referring to the length of the sequence These bounds hold even in persistent shared setting Note Many of these operations have the same names as similar operations on lists in the Prelude The ambiguity may be resolved using either qualification or the hiding clause",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "partial": "Finger Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of a sequence of values of type \u003ccode\u003ea\u003c/code\u003e, allowing\n access to the ends in constant time, and append and split in time\n logarithmic in the size of the smaller piece.\n\u003c/p\u003e\u003cp\u003eThe collection is also parameterized by a measure type \u003ccode\u003ev\u003c/code\u003e, which\n is used to specify a position in the sequence for the \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e operation.\n The types of the operations enforce the constraint \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMeasured\u003c/a\u003e\u003c/code\u003e v a\u003c/code\u003e,\n which also implies that the type \u003ccode\u003ev\u003c/code\u003e is determined by \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA variety of abstract data types can be implemented by using different\n element types and measurements.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "source": "src/Data-FingerTree.html#FingerTree",
          "type": "data"
        },
        "index": {
          "description": "representation of sequence of values of type allowing access to the ends in constant time and append and split in time logarithmic in the size of the smaller piece The collection is also parameterized by measure type which is used to specify position in the sequence for the split operation The types of the operations enforce the constraint Measured which also implies that the type is determined by variety of abstract data types can be implemented by using different element types and measurements",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "partial": "Finger Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#t:FingerTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that can be measured.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "Measured",
          "package": "fingertree",
          "source": "src/Data-FingerTree.html#Measured",
          "type": "class"
        },
        "index": {
          "description": "Things that can be measured",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "Measured",
          "package": "fingertree",
          "partial": "Measured",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#t:Measured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView of the left end of a sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "ViewL",
          "package": "fingertree",
          "source": "src/Data-FingerTree.html#ViewL",
          "type": "data"
        },
        "index": {
          "description": "View of the left end of sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "ViewL",
          "package": "fingertree",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#t:ViewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView of the right end of a sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "ViewR",
          "package": "fingertree",
          "source": "src/Data-FingerTree.html#ViewR",
          "type": "data"
        },
        "index": {
          "description": "View of the right end of sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "ViewR",
          "package": "fingertree",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#t:ViewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add an element to the right end of a sequence.\n Mnemonic: a triangle with the single element at the pointy end.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "(|\u003e)",
          "package": "fingertree",
          "signature": "FingerTree v a -\u003e a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Add an element to the right end of sequence Mnemonic triangle with the single element at the pointy end",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "(|\u003e) |\u003e",
          "normalized": "FingerTree a b-\u003eb-\u003eFingerTree a b",
          "package": "fingertree",
          "signature": "FingerTree v a-\u003ea-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Add an element to the left end of a sequence.\n Mnemonic: a triangle with the single element at the pointy end.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "(\u003c|)",
          "package": "fingertree",
          "signature": "a -\u003e FingerTree v a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Add an element to the left end of sequence Mnemonic triangle with the single element at the pointy end",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eFingerTree b a-\u003eFingerTree b a",
          "package": "fingertree",
          "signature": "a-\u003eFingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(min(n1,n2)))\u003c/em\u003e. Concatenate two sequences.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "(\u003e\u003c)",
          "package": "fingertree",
          "signature": "FingerTree v a -\u003e FingerTree v a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "log min n1 n2 Concatenate two sequences",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "FingerTree a b-\u003eFingerTree a b-\u003eFingerTree a b",
          "package": "fingertree",
          "signature": "FingerTree v a-\u003eFingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eleftmost element and the rest of the sequence\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": ":\u003c",
          "package": "fingertree",
          "signature": "a :\u003c (s a)",
          "source": "src/Data-FingerTree.html#ViewL",
          "type": "function"
        },
        "index": {
          "description": "leftmost element and the rest of the sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": ":\u003c",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe sequence minus the rightmost element,\n and the rightmost element\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": ":\u003e",
          "package": "fingertree",
          "signature": "(s a) :\u003e a",
          "source": "src/Data-FingerTree.html#ViewR",
          "type": "function"
        },
        "index": {
          "description": "the sequence minus the rightmost element and the rightmost element",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": ":\u003e",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty sequence\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "EmptyL",
          "package": "fingertree",
          "signature": "EmptyL",
          "source": "src/Data-FingerTree.html#ViewL",
          "type": "function"
        },
        "index": {
          "description": "empty sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "EmptyL",
          "package": "fingertree",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:EmptyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty sequence\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "EmptyR",
          "package": "fingertree",
          "signature": "EmptyR",
          "source": "src/Data-FingerTree.html#ViewR",
          "type": "function"
        },
        "index": {
          "description": "empty sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "EmptyR",
          "package": "fingertree",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:EmptyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(min(i,n-i)))\u003c/em\u003e.\n Given a monotonic predicate \u003ccode\u003ep\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edropUntil\u003c/a\u003e\u003c/code\u003e p t\u003c/code\u003e is the rest of \u003ccode\u003et\u003c/code\u003e\n after removing the largest prefix whose measure does not satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edropUntil\u003c/a\u003e\u003c/code\u003e p t = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e p t)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.FingerTree",
          "name": "dropUntil",
          "package": "fingertree",
          "signature": "(v -\u003e Bool) -\u003e FingerTree v a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#dropUntil",
          "type": "function"
        },
        "index": {
          "description": "log min n-i Given monotonic predicate dropUntil is the rest of after removing the largest prefix whose measure does not satisfy dropUntil snd split",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "dropUntil",
          "normalized": "(a-\u003eBool)-\u003eFingerTree a b-\u003eFingerTree a b",
          "package": "fingertree",
          "partial": "Until",
          "signature": "(v-\u003eBool)-\u003eFingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:dropUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "empty",
          "package": "fingertree",
          "signature": "FingerTree v a",
          "source": "src/Data-FingerTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "empty",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but with a more constrained type.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "fmap'",
          "package": "fingertree",
          "signature": "(a1 -\u003e a2) -\u003e FingerTree v1 a1 -\u003e FingerTree v2 a2",
          "source": "src/Data-FingerTree.html#fmap%27",
          "type": "function"
        },
        "index": {
          "description": "Like fmap but with more constrained type",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "fmap'",
          "normalized": "(a-\u003ea)-\u003eFingerTree b a-\u003eFingerTree b a",
          "package": "fingertree",
          "signature": "(a-\u003ea)-\u003eFingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:fmap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap all elements of the tree with a function that also takes the\n measure of the prefix of the tree to the left of the element.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "fmapWithPos",
          "package": "fingertree",
          "signature": "(v1 -\u003e a1 -\u003e a2) -\u003e FingerTree v1 a1 -\u003e FingerTree v2 a2",
          "source": "src/Data-FingerTree.html#fmapWithPos",
          "type": "function"
        },
        "index": {
          "description": "Map all elements of the tree with function that also takes the measure of the prefix of the tree to the left of the element",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "fmapWithPos",
          "normalized": "(a-\u003eb-\u003eb)-\u003eFingerTree a b-\u003eFingerTree a b",
          "package": "fingertree",
          "partial": "With Pos",
          "signature": "(v-\u003ea-\u003ea)-\u003eFingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:fmapWithPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a sequence from a finite list of elements.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "fromList",
          "package": "fingertree",
          "signature": "[a] -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create sequence from finite list of elements",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "fromList",
          "normalized": "[a]-\u003eFingerTree b a",
          "package": "fingertree",
          "partial": "List",
          "signature": "[a]-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FingerTree",
          "name": "measure",
          "package": "fingertree",
          "signature": "a -\u003e v",
          "source": "src/Data-FingerTree.html#measure",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "measure",
          "normalized": "a-\u003eb",
          "package": "fingertree",
          "signature": "a-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty sequence?\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "null",
          "package": "fingertree",
          "signature": "FingerTree v a -\u003e Bool",
          "source": "src/Data-FingerTree.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is this the empty sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "null",
          "normalized": "FingerTree a b-\u003eBool",
          "package": "fingertree",
          "signature": "FingerTree v a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The reverse of a sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "reverse",
          "package": "fingertree",
          "signature": "FingerTree v a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "The reverse of sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "reverse",
          "normalized": "FingerTree a b-\u003eFingerTree a b",
          "package": "fingertree",
          "signature": "FingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A singleton sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "singleton",
          "package": "fingertree",
          "signature": "a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "singleton",
          "normalized": "a-\u003eFingerTree b a",
          "package": "fingertree",
          "signature": "a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(min(i,n-i)))\u003c/em\u003e. Split a sequence at a point where the predicate\n on the accumulated measure changes from \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor predictable results, one should ensure that there is only one such\n point, i.e. that the predicate is \u003cem\u003emonotonic\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "split",
          "package": "fingertree",
          "signature": "(v -\u003e Bool) -\u003e FingerTree v a -\u003e (FingerTree v a, FingerTree v a)",
          "source": "src/Data-FingerTree.html#split",
          "type": "function"
        },
        "index": {
          "description": "log min n-i Split sequence at point where the predicate on the accumulated measure changes from False to True For predictable results one should ensure that there is only one such point i.e that the predicate is monotonic",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "split",
          "normalized": "(a-\u003eBool)-\u003eFingerTree a b-\u003e(FingerTree a b,FingerTree a b)",
          "package": "fingertree",
          "signature": "(v-\u003eBool)-\u003eFingerTree v a-\u003e(FingerTree v a,FingerTree v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(min(i,n-i)))\u003c/em\u003e.\n Given a monotonic predicate \u003ccode\u003ep\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeUntil\u003c/a\u003e\u003c/code\u003e p t\u003c/code\u003e is the largest\n prefix of \u003ccode\u003et\u003c/code\u003e whose measure does not satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etakeUntil\u003c/a\u003e\u003c/code\u003e p t = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e p t)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.FingerTree",
          "name": "takeUntil",
          "package": "fingertree",
          "signature": "(v -\u003e Bool) -\u003e FingerTree v a -\u003e FingerTree v a",
          "source": "src/Data-FingerTree.html#takeUntil",
          "type": "function"
        },
        "index": {
          "description": "log min n-i Given monotonic predicate takeUntil is the largest prefix of whose measure does not satisfy takeUntil fst split",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "takeUntil",
          "normalized": "(a-\u003eBool)-\u003eFingerTree a b-\u003eFingerTree a b",
          "package": "fingertree",
          "partial": "Until",
          "signature": "(v-\u003eBool)-\u003eFingerTree v a-\u003eFingerTree v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:takeUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003etraverse\u003c/code\u003e, but with a more constrained type.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "traverse'",
          "package": "fingertree",
          "signature": "(a1 -\u003e f a2) -\u003e FingerTree v1 a1 -\u003e f (FingerTree v2 a2)",
          "source": "src/Data-FingerTree.html#traverse%27",
          "type": "function"
        },
        "index": {
          "description": "Like traverse but with more constrained type",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "traverse'",
          "normalized": "(a-\u003eb a)-\u003eFingerTree c a-\u003eb(FingerTree c a)",
          "package": "fingertree",
          "signature": "(a-\u003ef a)-\u003eFingerTree v a-\u003ef(FingerTree v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:traverse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the tree with a function that also takes the\n measure of the prefix of the tree to the left of the element.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "traverseWithPos",
          "package": "fingertree",
          "signature": "(v1 -\u003e a1 -\u003e f a2) -\u003e FingerTree v1 a1 -\u003e f (FingerTree v2 a2)",
          "source": "src/Data-FingerTree.html#traverseWithPos",
          "type": "function"
        },
        "index": {
          "description": "Traverse the tree with function that also takes the measure of the prefix of the tree to the left of the element",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "traverseWithPos",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eFingerTree a b-\u003ec(FingerTree a b)",
          "package": "fingertree",
          "partial": "With Pos",
          "signature": "(v-\u003ea-\u003ef a)-\u003eFingerTree v a-\u003ef(FingerTree v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:traverseWithPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but safe only if the function preserves the measure.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "unsafeFmap",
          "package": "fingertree",
          "signature": "(a -\u003e b) -\u003e FingerTree v a -\u003e FingerTree v b",
          "source": "src/Data-FingerTree.html#unsafeFmap",
          "type": "function"
        },
        "index": {
          "description": "Like fmap but safe only if the function preserves the measure",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "unsafeFmap",
          "normalized": "(a-\u003eb)-\u003eFingerTree c a-\u003eFingerTree c b",
          "package": "fingertree",
          "partial": "Fmap",
          "signature": "(a-\u003eb)-\u003eFingerTree v a-\u003eFingerTree v b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:unsafeFmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003etraverse\u003c/code\u003e, but safe only if the function preserves the measure.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "unsafeTraverse",
          "package": "fingertree",
          "signature": "(a -\u003e f b) -\u003e FingerTree v a -\u003e f (FingerTree v b)",
          "source": "src/Data-FingerTree.html#unsafeTraverse",
          "type": "function"
        },
        "index": {
          "description": "Like traverse but safe only if the function preserves the measure",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "unsafeTraverse",
          "normalized": "(a-\u003eb c)-\u003eFingerTree d a-\u003eb(FingerTree d c)",
          "package": "fingertree",
          "partial": "Traverse",
          "signature": "(a-\u003ef b)-\u003eFingerTree v a-\u003ef(FingerTree v b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:unsafeTraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Analyse the left end of a sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "viewl",
          "package": "fingertree",
          "signature": "FingerTree v a -\u003e ViewL (FingerTree v) a",
          "source": "src/Data-FingerTree.html#viewl",
          "type": "function"
        },
        "index": {
          "description": "Analyse the left end of sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "viewl",
          "normalized": "FingerTree a b-\u003eViewL(FingerTree a)b",
          "package": "fingertree",
          "signature": "FingerTree v a-\u003eViewL(FingerTree v)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:viewl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Analyse the right end of a sequence.\n\u003c/p\u003e",
          "module": "Data.FingerTree",
          "name": "viewr",
          "package": "fingertree",
          "signature": "FingerTree v a -\u003e ViewR (FingerTree v) a",
          "source": "src/Data-FingerTree.html#viewr",
          "type": "function"
        },
        "index": {
          "description": "Analyse the right end of sequence",
          "hierarchy": "Data FingerTree",
          "module": "Data.FingerTree",
          "name": "viewr",
          "normalized": "FingerTree a b-\u003eViewR(FingerTree a)b",
          "package": "fingertree",
          "signature": "FingerTree v a-\u003eViewR(FingerTree v)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-FingerTree.html#v:viewr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterval maps implemented using the \u003ccode\u003e\u003ca\u003eFingerTree\u003c/a\u003e\u003c/code\u003e type, following\n section 4.8 of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ralf Hinze and Ross Paterson,\n      \"Finger trees: a simple general-purpose data structure\",\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 16:2 (2006) pp 197-217.\n      \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e\n referring to the size of the priority queue.  These bounds hold even\n in a persistent (shared) setting.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Many of these operations have the same names as similar\n operations on lists in the \u003ca\u003ePrelude\u003c/a\u003e.  The ambiguity may be resolved\n using either qualification or the \u003ccode\u003ehiding\u003c/code\u003e clause.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "source": "src/Data-IntervalMap-FingerTree.html",
          "type": "module"
        },
        "index": {
          "description": "Interval maps implemented using the FingerTree type following section of Ralf Hinze and Ross Paterson Finger trees simple general-purpose data structure Journal of Functional Programming pp http www.soi.city.ac.uk ross papers FingerTree.html An amortized running time is given for each operation with referring to the size of the priority queue These bounds hold even in persistent shared setting Note Many of these operations have the same names as similar operations on lists in the Prelude The ambiguity may be resolved using either qualification or the hiding clause",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "partial": "Finger Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closed interval.  The lower bound should be less than or equal\n to the higher bound.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "Interval",
          "package": "fingertree",
          "source": "src/Data-IntervalMap-FingerTree.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "closed interval The lower bound should be less than or equal to the higher bound",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "Interval",
          "package": "fingertree",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of closed intervals, possibly with duplicates.\n The \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances process the intervals in\n lexicographical order.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "IntervalMap",
          "package": "fingertree",
          "source": "src/Data-IntervalMap-FingerTree.html#IntervalMap",
          "type": "data"
        },
        "index": {
          "description": "Map of closed intervals possibly with duplicates The Foldable and Traversable instances process the intervals in lexicographical order",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "IntervalMap",
          "package": "fingertree",
          "partial": "Interval Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#t:IntervalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntervalMap.FingerTree",
          "name": "Interval",
          "package": "fingertree",
          "signature": "Interval",
          "source": "src/Data-IntervalMap-FingerTree.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "Interval",
          "package": "fingertree",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k log (n\u003c/em\u003e/\u003cem\u003ek))\u003c/em\u003e.  All intervals that contain the given interval,\n in lexicographical order.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "dominators",
          "package": "fingertree",
          "signature": "Interval v -\u003e IntervalMap v a -\u003e [(Interval v, a)]",
          "source": "src/Data-IntervalMap-FingerTree.html#dominators",
          "type": "function"
        },
        "index": {
          "description": "log All intervals that contain the given interval in lexicographical order",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "dominators",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003e[(Interval a,b)]",
          "package": "fingertree",
          "signature": "Interval v-\u003eIntervalMap v a-\u003e[(Interval v,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:dominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty interval map.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "empty",
          "package": "fingertree",
          "signature": "IntervalMap v a",
          "source": "src/Data-IntervalMap-FingerTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty interval map",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "empty",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntervalMap.FingerTree",
          "name": "high",
          "package": "fingertree",
          "signature": "v",
          "source": "src/Data-IntervalMap-FingerTree.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "high",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:high"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.  Insert an interval into a map.\n The map may contain duplicate intervals; the new entry will be inserted\n before any existing entries for the same interval.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "insert",
          "package": "fingertree",
          "signature": "Interval v -\u003e a -\u003e IntervalMap v a -\u003e IntervalMap v a",
          "source": "src/Data-IntervalMap-FingerTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert an interval into map The map may contain duplicate intervals the new entry will be inserted before any existing entries for the same interval",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "insert",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "fingertree",
          "signature": "Interval v-\u003ea-\u003eIntervalMap v a-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k log (n\u003c/em\u003e/\u003cem\u003ek))\u003c/em\u003e.  All intervals that intersect with the given\n interval, in lexicographical order.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "intersections",
          "package": "fingertree",
          "signature": "Interval v -\u003e IntervalMap v a -\u003e [(Interval v, a)]",
          "source": "src/Data-IntervalMap-FingerTree.html#intersections",
          "type": "function"
        },
        "index": {
          "description": "log All intervals that intersect with the given interval in lexicographical order",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "intersections",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003e[(Interval a,b)]",
          "package": "fingertree",
          "signature": "Interval v-\u003eIntervalMap v a-\u003e[(Interval v,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:intersections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IntervalMap.FingerTree",
          "name": "low",
          "package": "fingertree",
          "signature": "v",
          "source": "src/Data-IntervalMap-FingerTree.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "low",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:low"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval in which the lower and upper bounds are equal.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "point",
          "package": "fingertree",
          "signature": "v -\u003e Interval v",
          "source": "src/Data-IntervalMap-FingerTree.html#point",
          "type": "function"
        },
        "index": {
          "description": "An interval in which the lower and upper bounds are equal",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "point",
          "normalized": "a-\u003eInterval a",
          "package": "fingertree",
          "signature": "v-\u003eInterval v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k log (n\u003c/em\u003e/\u003cem\u003ek))\u003c/em\u003e.  All intervals that contain the given point,\n in lexicographical order.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "search",
          "package": "fingertree",
          "signature": "v -\u003e IntervalMap v a -\u003e [(Interval v, a)]",
          "source": "src/Data-IntervalMap-FingerTree.html#search",
          "type": "function"
        },
        "index": {
          "description": "log All intervals that contain the given point in lexicographical order",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "search",
          "normalized": "a-\u003eIntervalMap a b-\u003e[(Interval a,b)]",
          "package": "fingertree",
          "signature": "v-\u003eIntervalMap v a-\u003e[(Interval v,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Interval map with a single entry.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "singleton",
          "package": "fingertree",
          "signature": "Interval v -\u003e a -\u003e IntervalMap v a",
          "source": "src/Data-IntervalMap-FingerTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Interval map with single entry",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "singleton",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b",
          "package": "fingertree",
          "signature": "Interval v-\u003ea-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(m log (n\u003c/em\u003e/\u003cem\u003em))\u003c/em\u003e.  Merge two interval maps.\n The map may contain duplicate intervals; entries with equal intervals\n are kept in the original order.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.FingerTree",
          "name": "union",
          "package": "fingertree",
          "signature": "IntervalMap v a -\u003e IntervalMap v a -\u003e IntervalMap v a",
          "source": "src/Data-IntervalMap-FingerTree.html#union",
          "type": "function"
        },
        "index": {
          "description": "log Merge two interval maps The map may contain duplicate intervals entries with equal intervals are kept in the original order",
          "hierarchy": "Data IntervalMap FingerTree",
          "module": "Data.IntervalMap.FingerTree",
          "name": "union",
          "normalized": "IntervalMap a b-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "fingertree",
          "signature": "IntervalMap v a-\u003eIntervalMap v a-\u003eIntervalMap v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-IntervalMap-FingerTree.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMin-priority queues implemented using the \u003ccode\u003e\u003ca\u003eFingerTree\u003c/a\u003e\u003c/code\u003e type,\n following section 4.6 of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Ralf Hinze and Ross Paterson,\n      \"Finger trees: a simple general-purpose data structure\",\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 16:2 (2006) pp 197-217.\n      \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese have the same big-O complexity as skew heap implementations,\n but are approximately an order of magnitude slower.\n On the other hand, they are stable, so they can be used for fair\n queueing.  They are also shallower, so that \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e consumes less\n space.\n\u003c/p\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e\n referring to the size of the priority queue.  These bounds hold even\n in a persistent (shared) setting.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Many of these operations have the same names as similar\n operations on lists in the \u003ca\u003ePrelude\u003c/a\u003e.  The ambiguity may be resolved\n using either qualification or the \u003ccode\u003ehiding\u003c/code\u003e clause.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "source": "src/Data-PriorityQueue-FingerTree.html",
          "type": "module"
        },
        "index": {
          "description": "Min-priority queues implemented using the FingerTree type following section of Ralf Hinze and Ross Paterson Finger trees simple general-purpose data structure Journal of Functional Programming pp http www.soi.city.ac.uk ross papers FingerTree.html These have the same big-O complexity as skew heap implementations but are approximately an order of magnitude slower On the other hand they are stable so they can be used for fair queueing They are also shallower so that fmap consumes less space An amortized running time is given for each operation with referring to the size of the priority queue These bounds hold even in persistent shared setting Note Many of these operations have the same names as similar operations on lists in the Prelude The ambiguity may be resolved using either qualification or the hiding clause",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "FingerTree",
          "package": "fingertree",
          "partial": "Finger Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePriority queues.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "PQueue",
          "package": "fingertree",
          "source": "src/Data-PriorityQueue-FingerTree.html#PQueue",
          "type": "data"
        },
        "index": {
          "description": "Priority queues",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "PQueue",
          "package": "fingertree",
          "partial": "PQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#t:PQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Add a (priority, value) pair to the back of a priority queue.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e k v q = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e q (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e k v)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003eq\u003c/code\u003e contains entries with the same priority \u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e k v q\u003c/code\u003e will return them before this one.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "add",
          "package": "fingertree",
          "signature": "k -\u003e v -\u003e PQueue k v -\u003e PQueue k v",
          "source": "src/Data-PriorityQueue-FingerTree.html#add",
          "type": "function"
        },
        "index": {
          "description": "log Add priority value pair to the back of priority queue add union singleton If contains entries with the same priority minView of add will return them before this one",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "add",
          "normalized": "a-\u003eb-\u003ePQueue a b-\u003ePQueue a b",
          "package": "fingertree",
          "signature": "k-\u003ev-\u003ePQueue k v-\u003ePQueue k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty priority queue.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "empty",
          "package": "fingertree",
          "signature": "PQueue k v",
          "source": "src/Data-PriorityQueue-FingerTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty priority queue",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "empty",
          "package": "fingertree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a priority queue from a finite list of priorities\n and values.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "fromList",
          "package": "fingertree",
          "signature": "[(k, v)] -\u003e PQueue k v",
          "source": "src/Data-PriorityQueue-FingerTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create priority queue from finite list of priorities and values",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003ePQueue a b",
          "package": "fingertree",
          "partial": "List",
          "signature": "[(k,v)]-\u003ePQueue k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Add a (priority, value) pair to the front of a priority queue.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e k v q = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e k v) q\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003eq\u003c/code\u003e contains entries with the same priority \u003ccode\u003ek\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e k v q\u003c/code\u003e will return them after this one.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "insert",
          "package": "fingertree",
          "signature": "k -\u003e v -\u003e PQueue k v -\u003e PQueue k v",
          "source": "src/Data-PriorityQueue-FingerTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Add priority value pair to the front of priority queue insert union singleton If contains entries with the same priority minView of insert will return them after this one",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ePQueue a b-\u003ePQueue a b",
          "package": "fingertree",
          "signature": "k-\u003ev-\u003ePQueue k v-\u003ePQueue k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e for the element, \u003cem\u003eO(log(n))\u003c/em\u003e for the reduced queue.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for an empty map, or the value associated with the\n minimal priority together with the rest of the priority queue.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e k v) = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (v, \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "minView",
          "package": "fingertree",
          "signature": "PQueue k v -\u003e Maybe (v, PQueue k v)",
          "source": "src/Data-PriorityQueue-FingerTree.html#minView",
          "type": "function"
        },
        "index": {
          "description": "for the element log for the reduced queue Returns Nothing for an empty map or the value associated with the minimal priority together with the rest of the priority queue minView empty Nothing minView singleton Just empty",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "minView",
          "normalized": "PQueue a b-\u003eMaybe(b,PQueue a b)",
          "package": "fingertree",
          "partial": "View",
          "signature": "PQueue k v-\u003eMaybe(v,PQueue k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e for the element, \u003cem\u003eO(log(n))\u003c/em\u003e for the reduced queue.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for an empty map, or the minimal (priority, value)\n pair together with the rest of the priority queue.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e k v) = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e ((k, v), \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e qi = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e ((ki, vi), qi')\u003c/code\u003e and \u003ccode\u003ek1 \u003c= k2\u003c/code\u003e,\n    then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e q1 q2) = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e ((k1, v1), \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e q1' q2)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e qi = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e ((ki, vi), qi')\u003c/code\u003e and \u003ccode\u003ek2 \u003c k1\u003c/code\u003e,\n    then \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminViewWithKey\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e q1 q2) = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e ((k2, v2), \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e q1 q2')\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "minViewWithKey",
          "package": "fingertree",
          "signature": "PQueue k v -\u003e Maybe ((k, v), PQueue k v)",
          "source": "src/Data-PriorityQueue-FingerTree.html#minViewWithKey",
          "type": "function"
        },
        "index": {
          "description": "for the element log for the reduced queue Returns Nothing for an empty map or the minimal priority value pair together with the rest of the priority queue minViewWithKey empty Nothing minViewWithKey singleton Just empty If minViewWithKey qi Just ki vi qi and k1 k2 then minViewWithKey union q1 q2 Just k1 v1 union q1 q2 If minViewWithKey qi Just ki vi qi and k2 k1 then minViewWithKey union q1 q2 Just k2 v2 union q1 q2",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "minViewWithKey",
          "normalized": "PQueue a b-\u003eMaybe((a,b),PQueue a b)",
          "package": "fingertree",
          "partial": "View With Key",
          "signature": "PQueue k v-\u003eMaybe((k,v),PQueue k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is this the empty priority queue?\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "null",
          "package": "fingertree",
          "signature": "PQueue k v -\u003e Bool",
          "source": "src/Data-PriorityQueue-FingerTree.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is this the empty priority queue",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "null",
          "normalized": "PQueue a b-\u003eBool",
          "package": "fingertree",
          "signature": "PQueue k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A singleton priority queue.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "singleton",
          "package": "fingertree",
          "signature": "k -\u003e v -\u003e PQueue k v",
          "source": "src/Data-PriorityQueue-FingerTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton priority queue",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003ePQueue a b",
          "package": "fingertree",
          "signature": "k-\u003ev-\u003ePQueue k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(min(n1,n2)))\u003c/em\u003e. Concatenate two priority queues.\n \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e is associative, with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf there are entries with the same priority in both arguments, \u003ccode\u003e\u003ca\u003eminView\u003c/a\u003e\u003c/code\u003e\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e xs ys\u003c/code\u003e will return those from \u003ccode\u003exs\u003c/code\u003e before those from \u003ccode\u003eys\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "union",
          "package": "fingertree",
          "signature": "PQueue k v -\u003e PQueue k v -\u003e PQueue k v",
          "source": "src/Data-PriorityQueue-FingerTree.html#union",
          "type": "function"
        },
        "index": {
          "description": "log min n1 n2 Concatenate two priority queues union is associative with identity empty If there are entries with the same priority in both arguments minView of union xs ys will return those from xs before those from ys",
          "hierarchy": "Data PriorityQueue FingerTree",
          "module": "Data.PriorityQueue.FingerTree",
          "name": "union",
          "normalized": "PQueue a b-\u003ePQueue a b-\u003ePQueue a b",
          "package": "fingertree",
          "signature": "PQueue k v-\u003ePQueue k v-\u003ePQueue k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fingertree/docs/Data-PriorityQueue-FingerTree.html#v:union"
      }
    }
  ]
]