[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heap is a container supporting the insertion of elements and the extraction of the minimum element.\nThis library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper \"Optimal Purely Functional Priority Queues\".\nThe Coq proof assistant has been used to prove this implementation correct.\nThe proofs are available in the Cabal package or at \u003ca\u003ehttp://code.google.com/p/priority-queues/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation is lazy.\nA strict implementation is available in this package as \u003ca\u003eData.MeldableHeap.Strict\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "module",
        "fct-source": "src/Data-MeldableHeap-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "heap is container supporting the insertion of elements and the extraction of the minimum element This library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper Optimal Purely Functional Priority Queues The Coq proof assistant has been used to prove this implementation correct The proofs are available in the Cabal package or at http code.google.com priority-queues This implementation is lazy strict implementation is available in this package as Data.MeldableHeap.Strict",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#t:PQ",
      "description": {
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "type",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#PQ",
        "fct-type": "type",
        "title": "PQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "PQ",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "PQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the heap with no elements\n\u003c/p\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is the heap with no elements",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:extractMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextractMin\u003c/a\u003e\u003c/code\u003e (O(lg n)) returns (if the heap is nonempty) a pair containing the minimum element and a heap that contains all of the other elements.\nIt does not remove copies of the minimum element if some exist in the heap.\n\u003c/p\u003e\u003cpre\u003e (0,[2,1]) == let x = insert 0 $ insert 2 $ insert 1 $ empty in let Just (p,q) = extractMin x in (p,toList q)\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e Maybe (a, PQ a)",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#extractMin",
        "fct-type": "function",
        "title": "extractMin"
      },
      "index": {
        "description": "extractMin lg returns if the heap is nonempty pair containing the minimum element and heap that contains all of the other elements It does not remove copies of the minimum element if some exist in the heap let insert insert insert empty in let Just extractMin in toList",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "extractMin",
        "normalized": "PQ a-\u003eMaybe(a,PQ a)",
        "package": "meldable-heap",
        "partial": "Min",
        "signature": "PQ a-\u003eMaybe(a,PQ a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e (O(1)) returns the minimum element of a nonempty heap.\n\u003c/p\u003e\u003cpre\u003e Just 0 == findMin $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e Maybe a",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "findMin returns the minimum element of nonempty heap Just findMin insert insert insert empty",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "findMin",
        "normalized": "PQ a-\u003eMaybe a",
        "package": "meldable-heap",
        "partial": "Min",
        "signature": "PQ a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (O(1)) adds an element to a heap.\n\u003c/p\u003e\u003cpre\u003e [1,2,1,0] == toList $ insert 1 $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "a -\u003e PQ a -\u003e PQ a",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "insert adds an element to heap toList insert insert insert insert empty",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "insert",
        "normalized": "a-\u003ePQ a-\u003ePQ a",
        "package": "meldable-heap",
        "partial": "",
        "signature": "a-\u003ePQ a-\u003ePQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:meld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeld\u003c/a\u003e\u003c/code\u003e (O(1)) joins two heaps P and Q into a heap containing exactly the elements in P and Q. It does not remove duplicates.\n\u003c/p\u003e\u003cpre\u003e [2,1,0,2,1,0] == let x = insert 0 $ insert 2 $ insert 1 $ empty in toList (meld x x)\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e PQ a -\u003e PQ a",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#meld",
        "fct-type": "function",
        "title": "meld"
      },
      "index": {
        "description": "meld joins two heaps and into heap containing exactly the elements in and It does not remove duplicates let insert insert insert empty in toList meld",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "meld",
        "normalized": "PQ a-\u003ePQ a-\u003ePQ a",
        "package": "meldable-heap",
        "partial": "",
        "signature": "PQ a-\u003ePQ a-\u003ePQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Lazy.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e (O(n)) returns a list of the elements in the heap in some arbitrary order.\n\u003c/p\u003e\u003cpre\u003e [] == toList empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Lazy",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e [a]",
        "fct-source": "src/Data-MeldableHeap-Lazy.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "toList returns list of the elements in the heap in some arbitrary order toList empty",
        "hierarchy": "Data MeldableHeap Lazy",
        "module": "Data.MeldableHeap.Lazy",
        "name": "toList",
        "normalized": "PQ a-\u003e[a]",
        "package": "meldable-heap",
        "partial": "List",
        "signature": "PQ a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heap is a container supporting the insertion of elements and the extraction of the minimum element.\nThis library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper \"Optimal Purely Functional Priority Queues\".\nThe Coq proof assistant has been used to prove this implementation correct.\nThe proofs are available in the Cabal package or at \u003ca\u003ehttp://code.google.com/p/priority-queues/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation is strict.\nA lazy implementation is available in this package as \u003ca\u003eData.MeldableHeap.Lazy\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "module",
        "fct-source": "src/Data-MeldableHeap-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "heap is container supporting the insertion of elements and the extraction of the minimum element This library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper Optimal Purely Functional Priority Queues The Coq proof assistant has been used to prove this implementation correct The proofs are available in the Cabal package or at http code.google.com priority-queues This implementation is strict lazy implementation is available in this package as Data.MeldableHeap.Lazy",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#t:PQ",
      "description": {
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "type",
        "fct-source": "src/Data-MeldableHeap-Strict.html#PQ",
        "fct-type": "type",
        "title": "PQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "PQ",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "PQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the heap with no elements\n\u003c/p\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a",
        "fct-source": "src/Data-MeldableHeap-Strict.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is the heap with no elements",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "empty",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:extractMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextractMin\u003c/a\u003e\u003c/code\u003e (O(lg n)) returns (if the heap is nonempty) a pair containing the minimum element and a heap that contains all of the other elements.\nIt does not remove copies of the minimum element if some exist in the heap.\n\u003c/p\u003e\u003cpre\u003e (0,[2,1]) == let x = insert 0 $ insert 2 $ insert 1 $ empty in let Just (p,q) = extractMin x in (p,toList q)\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e Maybe (a, PQ a)",
        "fct-source": "src/Data-MeldableHeap-Strict.html#extractMin",
        "fct-type": "function",
        "title": "extractMin"
      },
      "index": {
        "description": "extractMin lg returns if the heap is nonempty pair containing the minimum element and heap that contains all of the other elements It does not remove copies of the minimum element if some exist in the heap let insert insert insert empty in let Just extractMin in toList",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "extractMin",
        "normalized": "PQ a-\u003eMaybe(a,PQ a)",
        "package": "meldable-heap",
        "partial": "Min",
        "signature": "PQ a-\u003eMaybe(a,PQ a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e (O(1)) returns the minimum element of a nonempty heap.\n\u003c/p\u003e\u003cpre\u003e Just 0 == findMin $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e Maybe a",
        "fct-source": "src/Data-MeldableHeap-Strict.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "findMin returns the minimum element of nonempty heap Just findMin insert insert insert empty",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "findMin",
        "normalized": "PQ a-\u003eMaybe a",
        "package": "meldable-heap",
        "partial": "Min",
        "signature": "PQ a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (O(1)) adds an element to a heap.\n\u003c/p\u003e\u003cpre\u003e [1,2,1,0] == toList $ insert 1 $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "a -\u003e PQ a -\u003e PQ a",
        "fct-source": "src/Data-MeldableHeap-Strict.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "insert adds an element to heap toList insert insert insert insert empty",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "insert",
        "normalized": "a-\u003ePQ a-\u003ePQ a",
        "package": "meldable-heap",
        "partial": "",
        "signature": "a-\u003ePQ a-\u003ePQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:meld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeld\u003c/a\u003e\u003c/code\u003e (O(1)) joins two heaps P and Q into a heap containing exactly the elements in P and Q. It does not remove duplicates.\n\u003c/p\u003e\u003cpre\u003e [2,1,0,2,1,0] == let x = insert 0 $ insert 2 $ insert 1 $ empty in toList (meld x x)\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e PQ a -\u003e PQ a",
        "fct-source": "src/Data-MeldableHeap-Strict.html#meld",
        "fct-type": "function",
        "title": "meld"
      },
      "index": {
        "description": "meld joins two heaps and into heap containing exactly the elements in and It does not remove duplicates let insert insert insert empty in toList meld",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "meld",
        "normalized": "PQ a-\u003ePQ a-\u003ePQ a",
        "package": "meldable-heap",
        "partial": "",
        "signature": "PQ a-\u003ePQ a-\u003ePQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap-Strict.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e (O(n)) returns a list of the elements in the heap in some arbitrary order.\n\u003c/p\u003e\u003cpre\u003e [] == toList empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap.Strict",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e [a]",
        "fct-source": "src/Data-MeldableHeap-Strict.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "toList returns list of the elements in the heap in some arbitrary order toList empty",
        "hierarchy": "Data MeldableHeap Strict",
        "module": "Data.MeldableHeap.Strict",
        "name": "toList",
        "normalized": "PQ a-\u003e[a]",
        "package": "meldable-heap",
        "partial": "List",
        "signature": "PQ a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA heap is a container supporting the insertion of elements and the extraction of the minimum element.\nThis library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper \"Optimal Purely Functional Priority Queues\".\nThe Coq proof assistant has been used to prove this implementation correct.\nThe proofs are available in the Cabal package or at \u003ca\u003ehttp://code.google.com/p/priority-queues/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe default implementation is lazy.\nA strict implementation is available in this package as \u003ca\u003eData.MeldableHeap.Strict\u003c/a\u003e. \nThe lazy implementation is available in this module (\u003ca\u003eData.MeldableHeap\u003c/a\u003e) or in \u003ca\u003eData.MeldableHeap.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "module",
        "fct-source": "src/Data-MeldableHeap.html",
        "fct-type": "module",
        "title": "MeldableHeap"
      },
      "index": {
        "description": "heap is container supporting the insertion of elements and the extraction of the minimum element This library models the implementation of asymptotically optimal purely functional heaps given by Brodal and Okasaki in their paper Optimal Purely Functional Priority Queues The Coq proof assistant has been used to prove this implementation correct The proofs are available in the Cabal package or at http code.google.com priority-queues The default implementation is lazy strict implementation is available in this package as Data.MeldableHeap.Strict The lazy implementation is available in this module Data.MeldableHeap or in Data.MeldableHeap.Lazy",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "MeldableHeap",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "Meldable Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#t:PQ",
      "description": {
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "type",
        "fct-source": "src/Data-MeldableHeap.html#PQ",
        "fct-type": "type",
        "title": "PQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "PQ",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "PQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is the heap with no elements\n\u003c/p\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a",
        "fct-source": "src/Data-MeldableHeap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is the heap with no elements",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "empty",
        "normalized": "",
        "package": "meldable-heap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:extractMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eextractMin\u003c/a\u003e\u003c/code\u003e (O(lg n)) returns (if the heap is nonempty) a pair containing the minimum element and a heap that contains all of the other elements.\nIt does not remove copies of the minimum element if some exist in the heap.\n\u003c/p\u003e\u003cpre\u003e (0,[2,1]) == let x = insert 0 $ insert 2 $ insert 1 $ empty in let Just (p,q) = extractMin x in (p,toList q)\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e Maybe (a, PQ a)",
        "fct-source": "src/Data-MeldableHeap.html#extractMin",
        "fct-type": "function",
        "title": "extractMin"
      },
      "index": {
        "description": "extractMin lg returns if the heap is nonempty pair containing the minimum element and heap that contains all of the other elements It does not remove copies of the minimum element if some exist in the heap let insert insert insert empty in let Just extractMin in toList",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "extractMin",
        "normalized": "PQ a-\u003eMaybe(a,PQ a)",
        "package": "meldable-heap",
        "partial": "Min",
        "signature": "PQ a-\u003eMaybe(a,PQ a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e (O(1)) returns the minimum element of a nonempty heap.\n\u003c/p\u003e\u003cpre\u003e Just 0 == findMin $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e Maybe a",
        "fct-source": "src/Data-MeldableHeap.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "findMin returns the minimum element of nonempty heap Just findMin insert insert insert empty",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "findMin",
        "normalized": "PQ a-\u003eMaybe a",
        "package": "meldable-heap",
        "partial": "Min",
        "signature": "PQ a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e (O(1)) adds an element to a heap.\n\u003c/p\u003e\u003cpre\u003e [1,2,1,0] == toList $ insert 1 $ insert 0 $ insert 2 $ insert 1 $ empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "a -\u003e PQ a -\u003e PQ a",
        "fct-source": "src/Data-MeldableHeap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "insert adds an element to heap toList insert insert insert insert empty",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "insert",
        "normalized": "a-\u003ePQ a-\u003ePQ a",
        "package": "meldable-heap",
        "partial": "",
        "signature": "a-\u003ePQ a-\u003ePQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:meld",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeld\u003c/a\u003e\u003c/code\u003e (O(1)) joins two heaps P and Q into a heap containing exactly the elements in P and Q. It does not remove duplicates.\n\u003c/p\u003e\u003cpre\u003e [2,1,0,2,1,0] == let x = insert 0 $ insert 2 $ insert 1 $ empty in toList (meld x x)\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e PQ a -\u003e PQ a",
        "fct-source": "src/Data-MeldableHeap.html#meld",
        "fct-type": "function",
        "title": "meld"
      },
      "index": {
        "description": "meld joins two heaps and into heap containing exactly the elements in and It does not remove duplicates let insert insert insert empty in toList meld",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "meld",
        "normalized": "PQ a-\u003ePQ a-\u003ePQ a",
        "package": "meldable-heap",
        "partial": "",
        "signature": "PQ a-\u003ePQ a-\u003ePQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/meldable-heap/docs/Data-MeldableHeap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e (O(n)) returns a list of the elements in the heap in some arbitrary order.\n\u003c/p\u003e\u003cpre\u003e [] == toList empty\n\u003c/pre\u003e",
        "fct-module": "Data.MeldableHeap",
        "fct-package": "meldable-heap",
        "fct-signature": "PQ a -\u003e [a]",
        "fct-source": "src/Data-MeldableHeap.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "toList returns list of the elements in the heap in some arbitrary order toList empty",
        "hierarchy": "Data MeldableHeap",
        "module": "Data.MeldableHeap",
        "name": "toList",
        "normalized": "PQ a-\u003e[a]",
        "package": "meldable-heap",
        "partial": "List",
        "signature": "PQ a-\u003e[a]"
      }
    }
  }
]