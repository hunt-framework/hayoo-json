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
        "word": "meldable-heap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heap is a container supporting the insertion of elements and the extraction of the minimum element.\nThis library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper \"Optimal Purely Functional Priority Queues\".\nThe Coq proof assistant has been used to prove this implementation correct.\nThe proofs are available in the Cabal package or at \u003ca\u003ehttp://code.google.com/p/priority-queues/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation is lazy.\nA strict implementation is available in this package as \u003ca\u003eData.MeldableHeap.Strict\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "Lazy",
          "package": "meldable-heap",
          "source": "src/Data-MeldableHeap-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "heap is container supporting the insertion of elements and the extraction of the minimum element This library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper Optimal Purely Functional Priority Queues The Coq proof assistant has been used to prove this implementation correct The proofs are available in the Cabal package or at http code.google.com priority-queues This implementation is lazy strict implementation is available in this package as Data.MeldableHeap.Strict",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "Lazy",
          "package": "meldable-heap",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MeldableHeap.Lazy",
          "name": "PQ",
          "package": "meldable-heap",
          "source": "src/Data-MeldableHeap-Lazy.html#PQ",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "PQ",
          "package": "meldable-heap",
          "partial": "PQ",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#t:PQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the heap with no elements\n\u003c/p\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "empty",
          "package": "meldable-heap",
          "signature": "PQ a",
          "source": "src/Data-MeldableHeap-Lazy.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty is the heap with no elements",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "empty",
          "package": "meldable-heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextractMin\u003c/a\u003e\u003c/code\u003e (O(lg n)) returns (if the heap is nonempty) a pair containing the minimum element and a heap that contains all of the other elements.\nIt does not remove copies of the minimum element if some exist in the heap.\n\u003c/p\u003e\u003cpre\u003e (0,[2,1]) == let x = insert 0 $ insert 2 $ insert 1 $ empty in let Just (p,q) = extractMin x in (p,toList q)\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "extractMin",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e Maybe (a, PQ a)",
          "source": "src/Data-MeldableHeap-Lazy.html#extractMin",
          "type": "function"
        },
        "index": {
          "description": "extractMin lg returns if the heap is nonempty pair containing the minimum element and heap that contains all of the other elements It does not remove copies of the minimum element if some exist in the heap let insert insert insert empty in let Just extractMin in toList",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "extractMin",
          "normalized": "PQ a-\u003eMaybe(a,PQ a)",
          "package": "meldable-heap",
          "partial": "Min",
          "signature": "PQ a-\u003eMaybe(a,PQ a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:extractMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e (O(1)) returns the minimum element of a nonempty heap.\n\u003c/p\u003e\u003cpre\u003e Just 0 == findMin $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "findMin",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e Maybe a",
          "source": "src/Data-MeldableHeap-Lazy.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "findMin returns the minimum element of nonempty heap Just findMin insert insert insert empty",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "findMin",
          "normalized": "PQ a-\u003eMaybe a",
          "package": "meldable-heap",
          "partial": "Min",
          "signature": "PQ a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (O(1)) adds an element to a heap.\n\u003c/p\u003e\u003cpre\u003e [1,2,1,0] == toList $ insert 1 $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "insert",
          "package": "meldable-heap",
          "signature": "a -\u003e PQ a -\u003e PQ a",
          "source": "src/Data-MeldableHeap-Lazy.html#insert",
          "type": "function"
        },
        "index": {
          "description": "insert adds an element to heap toList insert insert insert insert empty",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "insert",
          "normalized": "a-\u003ePQ a-\u003ePQ a",
          "package": "meldable-heap",
          "signature": "a-\u003ePQ a-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeld\u003c/a\u003e\u003c/code\u003e (O(1)) joins two heaps P and Q into a heap containing exactly the elements in P and Q. It does not remove duplicates.\n\u003c/p\u003e\u003cpre\u003e [2,1,0,2,1,0] == let x = insert 0 $ insert 2 $ insert 1 $ empty in toList (meld x x)\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "meld",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e PQ a -\u003e PQ a",
          "source": "src/Data-MeldableHeap-Lazy.html#meld",
          "type": "function"
        },
        "index": {
          "description": "meld joins two heaps and into heap containing exactly the elements in and It does not remove duplicates let insert insert insert empty in toList meld",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "meld",
          "normalized": "PQ a-\u003ePQ a-\u003ePQ a",
          "package": "meldable-heap",
          "signature": "PQ a-\u003ePQ a-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:meld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e (O(n)) returns a list of the elements in the heap in some arbitrary order.\n\u003c/p\u003e\u003cpre\u003e [] == toList empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Lazy",
          "name": "toList",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e [a]",
          "source": "src/Data-MeldableHeap-Lazy.html#toList",
          "type": "function"
        },
        "index": {
          "description": "toList returns list of the elements in the heap in some arbitrary order toList empty",
          "hierarchy": "Data MeldableHeap Lazy",
          "module": "Data.MeldableHeap.Lazy",
          "name": "toList",
          "normalized": "PQ a-\u003e[a]",
          "package": "meldable-heap",
          "partial": "List",
          "signature": "PQ a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heap is a container supporting the insertion of elements and the extraction of the minimum element.\nThis library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper \"Optimal Purely Functional Priority Queues\".\nThe Coq proof assistant has been used to prove this implementation correct.\nThe proofs are available in the Cabal package or at \u003ca\u003ehttp://code.google.com/p/priority-queues/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation is strict.\nA lazy implementation is available in this package as \u003ca\u003eData.MeldableHeap.Lazy\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "Strict",
          "package": "meldable-heap",
          "source": "src/Data-MeldableHeap-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "heap is container supporting the insertion of elements and the extraction of the minimum element This library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper Optimal Purely Functional Priority Queues The Coq proof assistant has been used to prove this implementation correct The proofs are available in the Cabal package or at http code.google.com priority-queues This implementation is strict lazy implementation is available in this package as Data.MeldableHeap.Lazy",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "Strict",
          "package": "meldable-heap",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MeldableHeap.Strict",
          "name": "PQ",
          "package": "meldable-heap",
          "source": "src/Data-MeldableHeap-Strict.html#PQ",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "PQ",
          "package": "meldable-heap",
          "partial": "PQ",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#t:PQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the heap with no elements\n\u003c/p\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "empty",
          "package": "meldable-heap",
          "signature": "PQ a",
          "source": "src/Data-MeldableHeap-Strict.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty is the heap with no elements",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "empty",
          "package": "meldable-heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextractMin\u003c/a\u003e\u003c/code\u003e (O(lg n)) returns (if the heap is nonempty) a pair containing the minimum element and a heap that contains all of the other elements.\nIt does not remove copies of the minimum element if some exist in the heap.\n\u003c/p\u003e\u003cpre\u003e (0,[2,1]) == let x = insert 0 $ insert 2 $ insert 1 $ empty in let Just (p,q) = extractMin x in (p,toList q)\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "extractMin",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e Maybe (a, PQ a)",
          "source": "src/Data-MeldableHeap-Strict.html#extractMin",
          "type": "function"
        },
        "index": {
          "description": "extractMin lg returns if the heap is nonempty pair containing the minimum element and heap that contains all of the other elements It does not remove copies of the minimum element if some exist in the heap let insert insert insert empty in let Just extractMin in toList",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "extractMin",
          "normalized": "PQ a-\u003eMaybe(a,PQ a)",
          "package": "meldable-heap",
          "partial": "Min",
          "signature": "PQ a-\u003eMaybe(a,PQ a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:extractMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e (O(1)) returns the minimum element of a nonempty heap.\n\u003c/p\u003e\u003cpre\u003e Just 0 == findMin $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "findMin",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e Maybe a",
          "source": "src/Data-MeldableHeap-Strict.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "findMin returns the minimum element of nonempty heap Just findMin insert insert insert empty",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "findMin",
          "normalized": "PQ a-\u003eMaybe a",
          "package": "meldable-heap",
          "partial": "Min",
          "signature": "PQ a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (O(1)) adds an element to a heap.\n\u003c/p\u003e\u003cpre\u003e [1,2,1,0] == toList $ insert 1 $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "insert",
          "package": "meldable-heap",
          "signature": "a -\u003e PQ a -\u003e PQ a",
          "source": "src/Data-MeldableHeap-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "description": "insert adds an element to heap toList insert insert insert insert empty",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "insert",
          "normalized": "a-\u003ePQ a-\u003ePQ a",
          "package": "meldable-heap",
          "signature": "a-\u003ePQ a-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeld\u003c/a\u003e\u003c/code\u003e (O(1)) joins two heaps P and Q into a heap containing exactly the elements in P and Q. It does not remove duplicates.\n\u003c/p\u003e\u003cpre\u003e [2,1,0,2,1,0] == let x = insert 0 $ insert 2 $ insert 1 $ empty in toList (meld x x)\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "meld",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e PQ a -\u003e PQ a",
          "source": "src/Data-MeldableHeap-Strict.html#meld",
          "type": "function"
        },
        "index": {
          "description": "meld joins two heaps and into heap containing exactly the elements in and It does not remove duplicates let insert insert insert empty in toList meld",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "meld",
          "normalized": "PQ a-\u003ePQ a-\u003ePQ a",
          "package": "meldable-heap",
          "signature": "PQ a-\u003ePQ a-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:meld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e (O(n)) returns a list of the elements in the heap in some arbitrary order.\n\u003c/p\u003e\u003cpre\u003e [] == toList empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap.Strict",
          "name": "toList",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e [a]",
          "source": "src/Data-MeldableHeap-Strict.html#toList",
          "type": "function"
        },
        "index": {
          "description": "toList returns list of the elements in the heap in some arbitrary order toList empty",
          "hierarchy": "Data MeldableHeap Strict",
          "module": "Data.MeldableHeap.Strict",
          "name": "toList",
          "normalized": "PQ a-\u003e[a]",
          "package": "meldable-heap",
          "partial": "List",
          "signature": "PQ a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heap is a container supporting the insertion of elements and the extraction of the minimum element.\nThis library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper \"Optimal Purely Functional Priority Queues\".\nThe Coq proof assistant has been used to prove this implementation correct.\nThe proofs are available in the Cabal package or at \u003ca\u003ehttp://code.google.com/p/priority-queues/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe default implementation is lazy.\nA strict implementation is available in this package as \u003ca\u003eData.MeldableHeap.Strict\u003c/a\u003e. \nThe lazy implementation is available in this module (\u003ca\u003eData.MeldableHeap\u003c/a\u003e) or in \u003ca\u003eData.MeldableHeap.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MeldableHeap",
          "name": "MeldableHeap",
          "package": "meldable-heap",
          "source": "src/Data-MeldableHeap.html",
          "type": "module"
        },
        "index": {
          "description": "heap is container supporting the insertion of elements and the extraction of the minimum element This library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper Optimal Purely Functional Priority Queues The Coq proof assistant has been used to prove this implementation correct The proofs are available in the Cabal package or at http code.google.com priority-queues The default implementation is lazy strict implementation is available in this package as Data.MeldableHeap.Strict The lazy implementation is available in this module Data.MeldableHeap or in Data.MeldableHeap.Lazy",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "MeldableHeap",
          "package": "meldable-heap",
          "partial": "Meldable Heap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MeldableHeap",
          "name": "PQ",
          "package": "meldable-heap",
          "source": "src/Data-MeldableHeap.html#PQ",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "PQ",
          "package": "meldable-heap",
          "partial": "PQ",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#t:PQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the heap with no elements\n\u003c/p\u003e",
          "module": "Data.MeldableHeap",
          "name": "empty",
          "package": "meldable-heap",
          "signature": "PQ a",
          "source": "src/Data-MeldableHeap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty is the heap with no elements",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "empty",
          "package": "meldable-heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextractMin\u003c/a\u003e\u003c/code\u003e (O(lg n)) returns (if the heap is nonempty) a pair containing the minimum element and a heap that contains all of the other elements.\nIt does not remove copies of the minimum element if some exist in the heap.\n\u003c/p\u003e\u003cpre\u003e (0,[2,1]) == let x = insert 0 $ insert 2 $ insert 1 $ empty in let Just (p,q) = extractMin x in (p,toList q)\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap",
          "name": "extractMin",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e Maybe (a, PQ a)",
          "source": "src/Data-MeldableHeap.html#extractMin",
          "type": "function"
        },
        "index": {
          "description": "extractMin lg returns if the heap is nonempty pair containing the minimum element and heap that contains all of the other elements It does not remove copies of the minimum element if some exist in the heap let insert insert insert empty in let Just extractMin in toList",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "extractMin",
          "normalized": "PQ a-\u003eMaybe(a,PQ a)",
          "package": "meldable-heap",
          "partial": "Min",
          "signature": "PQ a-\u003eMaybe(a,PQ a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:extractMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e (O(1)) returns the minimum element of a nonempty heap.\n\u003c/p\u003e\u003cpre\u003e Just 0 == findMin $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap",
          "name": "findMin",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e Maybe a",
          "source": "src/Data-MeldableHeap.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "findMin returns the minimum element of nonempty heap Just findMin insert insert insert empty",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "findMin",
          "normalized": "PQ a-\u003eMaybe a",
          "package": "meldable-heap",
          "partial": "Min",
          "signature": "PQ a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (O(1)) adds an element to a heap.\n\u003c/p\u003e\u003cpre\u003e [1,2,1,0] == toList $ insert 1 $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap",
          "name": "insert",
          "package": "meldable-heap",
          "signature": "a -\u003e PQ a -\u003e PQ a",
          "source": "src/Data-MeldableHeap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "insert adds an element to heap toList insert insert insert insert empty",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "insert",
          "normalized": "a-\u003ePQ a-\u003ePQ a",
          "package": "meldable-heap",
          "signature": "a-\u003ePQ a-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeld\u003c/a\u003e\u003c/code\u003e (O(1)) joins two heaps P and Q into a heap containing exactly the elements in P and Q. It does not remove duplicates.\n\u003c/p\u003e\u003cpre\u003e [2,1,0,2,1,0] == let x = insert 0 $ insert 2 $ insert 1 $ empty in toList (meld x x)\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap",
          "name": "meld",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e PQ a -\u003e PQ a",
          "source": "src/Data-MeldableHeap.html#meld",
          "type": "function"
        },
        "index": {
          "description": "meld joins two heaps and into heap containing exactly the elements in and It does not remove duplicates let insert insert insert empty in toList meld",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "meld",
          "normalized": "PQ a-\u003ePQ a-\u003ePQ a",
          "package": "meldable-heap",
          "signature": "PQ a-\u003ePQ a-\u003ePQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:meld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e (O(n)) returns a list of the elements in the heap in some arbitrary order.\n\u003c/p\u003e\u003cpre\u003e [] == toList empty\n\u003c/pre\u003e",
          "module": "Data.MeldableHeap",
          "name": "toList",
          "package": "meldable-heap",
          "signature": "PQ a -\u003e [a]",
          "source": "src/Data-MeldableHeap.html#toList",
          "type": "function"
        },
        "index": {
          "description": "toList returns list of the elements in the heap in some arbitrary order toList empty",
          "hierarchy": "Data MeldableHeap",
          "module": "Data.MeldableHeap",
          "name": "toList",
          "normalized": "PQ a-\u003e[a]",
          "package": "meldable-heap",
          "partial": "List",
          "signature": "PQ a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:toList"
      }
    }
  ]
]