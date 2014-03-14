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
        "word": "llrbtree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinominal Heap\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the fun of programming\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Heap.Binominal",
          "name": "Binominal",
          "package": "llrbtree",
          "source": "src/Data-Heap-Binominal.html",
          "type": "module"
        },
        "index": {
          "description": "Binominal Heap the fun of programming",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "Binominal",
          "package": "llrbtree",
          "partial": "Binominal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binominal",
          "name": "Heap",
          "package": "llrbtree",
          "source": "src/Data-Heap-Binominal.html#Heap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "Heap",
          "package": "llrbtree",
          "partial": "Heap",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#t:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binominal",
          "name": "Rank",
          "package": "llrbtree",
          "source": "src/Data-Heap-Binominal.html#Rank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "Rank",
          "package": "llrbtree",
          "partial": "Rank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binominal",
          "name": "Tree",
          "package": "llrbtree",
          "source": "src/Data-Heap-Binominal.html#Tree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "Tree",
          "package": "llrbtree",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binominal",
          "name": "Heap",
          "package": "llrbtree",
          "signature": "Heap [Tree a]",
          "source": "src/Data-Heap-Binominal.html#Heap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "Heap",
          "normalized": "Heap[Tree a]",
          "package": "llrbtree",
          "partial": "Heap",
          "signature": "Heap[Tree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRank, a minimum root element, trees\n\u003c/p\u003e",
          "module": "Data.Heap.Binominal",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node Rank a [Tree a]",
          "source": "src/Data-Heap-Binominal.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "Rank minimum root element trees",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "Node",
          "normalized": "Node Rank a[Tree a]",
          "package": "llrbtree",
          "partial": "Node",
          "signature": "Node Rank a[Tree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Heap a",
          "source": "src/Data-Heap-Binominal.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "deleteMin",
          "normalized": "Heap a-\u003eHeap a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "Heap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Binominal",
          "name": "empty",
          "package": "llrbtree",
          "signature": "Heap a",
          "source": "src/Data-Heap-Binominal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty heap",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a heap from a list.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e Heap a",
          "source": "src/Data-Heap-Binominal.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating heap from list empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "fromList",
          "normalized": "[a]-\u003eHeap a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binominal",
          "name": "heapSort",
          "package": "llrbtree",
          "signature": "Heap a -\u003e [a]",
          "source": "src/Data-Heap-Binominal.html#heapSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "heapSort",
          "normalized": "Heap a-\u003e[a]",
          "package": "llrbtree",
          "partial": "Sort",
          "signature": "Heap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:heapSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap-Binominal.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "insert",
          "normalized": "a-\u003eHeap a-\u003eHeap a",
          "package": "llrbtree",
          "signature": "a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two heaps\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emerge (fromList [5,3]) (fromList [5,7]) == fromList [3,5,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "merge",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap-Binominal.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two heaps merge fromList fromList fromList True",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "merge",
          "normalized": "Heap a-\u003eHeap a-\u003eHeap a",
          "package": "llrbtree",
          "signature": "Heap a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003eJust 1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Maybe a",
          "source": "src/Data-Heap-Binominal.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element minimum fromList Just minimum empty Nothing",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "minimum",
          "normalized": "Heap a-\u003eMaybe a",
          "package": "llrbtree",
          "signature": "Heap a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the heap is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Binominal.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Binominal.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "null",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Bool",
          "source": "src/Data-Heap-Binominal.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the heap is empty Data.Heap.Binominal.null empty True Data.Heap.Binominal.null singleton False",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "null",
          "normalized": "Heap a-\u003eBool",
          "package": "llrbtree",
          "signature": "Heap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Binominal",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e Heap a",
          "source": "src/Data-Heap-Binominal.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton heap",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "singleton",
          "normalized": "a-\u003eHeap a",
          "package": "llrbtree",
          "signature": "a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a heap. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = [5,3,5]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elength (toList (fromList xs)) == length xs\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Heap.Binominal",
          "name": "toList",
          "package": "llrbtree",
          "signature": "Heap a -\u003e [a]",
          "source": "src/Data-Heap-Binominal.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from heap let xs length toList fromList xs length xs True toList empty",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "toList",
          "normalized": "Heap a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "Heap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Binominal",
          "name": "valid",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Bool",
          "source": "src/Data-Heap-Binominal.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of heap",
          "hierarchy": "Data Heap Binominal",
          "module": "Data.Heap.Binominal",
          "name": "valid",
          "normalized": "Heap a-\u003eBool",
          "package": "llrbtree",
          "signature": "Heap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Binominal.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLeftist Heap\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the fun of programming\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Heap.Leftist",
          "name": "Leftist",
          "package": "llrbtree",
          "source": "src/Data-Heap-Leftist.html",
          "type": "module"
        },
        "index": {
          "description": "Leftist Heap the fun of programming",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "Leftist",
          "package": "llrbtree",
          "partial": "Leftist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Leftist",
          "name": "Leftist",
          "package": "llrbtree",
          "source": "src/Data-Heap-Leftist.html#Leftist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "Leftist",
          "package": "llrbtree",
          "partial": "Leftist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#t:Leftist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Leftist",
          "name": "Rank",
          "package": "llrbtree",
          "source": "src/Data-Heap-Leftist.html#Rank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "Rank",
          "package": "llrbtree",
          "partial": "Rank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Leftist",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Heap-Leftist.html#Leftist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Leftist",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node Rank (Leftist a) a (Leftist a)",
          "source": "src/Data-Heap-Leftist.html#Leftist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "Leftist a -\u003e Leftist a",
          "source": "src/Data-Heap-Leftist.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "deleteMin",
          "normalized": "Leftist a-\u003eLeftist a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "Leftist a-\u003eLeftist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Leftist",
          "name": "empty",
          "package": "llrbtree",
          "signature": "Leftist a",
          "source": "src/Data-Heap-Leftist.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty heap",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a heap from a list.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e Leftist a",
          "source": "src/Data-Heap-Leftist.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating heap from list empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "fromList",
          "normalized": "[a]-\u003eLeftist a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eLeftist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Leftist",
          "name": "heapSort",
          "package": "llrbtree",
          "signature": "Leftist a -\u003e [a]",
          "source": "src/Data-Heap-Leftist.html#heapSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "heapSort",
          "normalized": "Leftist a-\u003e[a]",
          "package": "llrbtree",
          "partial": "Sort",
          "signature": "Leftist a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:heapSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e Leftist a -\u003e Leftist a",
          "source": "src/Data-Heap-Leftist.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "insert",
          "normalized": "a-\u003eLeftist a-\u003eLeftist a",
          "package": "llrbtree",
          "signature": "a-\u003eLeftist a-\u003eLeftist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two heaps\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emerge (fromList [5,3]) (fromList [5,7]) == fromList [3,5,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "merge",
          "package": "llrbtree",
          "signature": "Leftist a -\u003e Leftist a -\u003e Leftist a",
          "source": "src/Data-Heap-Leftist.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two heaps merge fromList fromList fromList True",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "merge",
          "normalized": "Leftist a-\u003eLeftist a-\u003eLeftist a",
          "package": "llrbtree",
          "signature": "Leftist a-\u003eLeftist a-\u003eLeftist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003eJust 1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "Leftist a -\u003e Maybe a",
          "source": "src/Data-Heap-Leftist.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element minimum fromList Just minimum empty Nothing",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "minimum",
          "normalized": "Leftist a-\u003eMaybe a",
          "package": "llrbtree",
          "signature": "Leftist a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the heap is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Leftist.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Leftist.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "null",
          "package": "llrbtree",
          "signature": "Leftist t -\u003e Bool",
          "source": "src/Data-Heap-Leftist.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the heap is empty Data.Heap.Leftist.null empty True Data.Heap.Leftist.null singleton False",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "null",
          "normalized": "Leftist a-\u003eBool",
          "package": "llrbtree",
          "signature": "Leftist t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Leftist",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e Leftist a",
          "source": "src/Data-Heap-Leftist.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton heap",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "singleton",
          "normalized": "a-\u003eLeftist a",
          "package": "llrbtree",
          "signature": "a-\u003eLeftist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a heap. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = [5,3,5]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elength (toList (fromList xs)) == length xs\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Heap.Leftist",
          "name": "toList",
          "package": "llrbtree",
          "signature": "Leftist a -\u003e [a]",
          "source": "src/Data-Heap-Leftist.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from heap let xs length toList fromList xs length xs True toList empty",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "toList",
          "normalized": "Leftist a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "Leftist a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Leftist",
          "name": "valid",
          "package": "llrbtree",
          "signature": "Leftist a -\u003e Bool",
          "source": "src/Data-Heap-Leftist.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of heap",
          "hierarchy": "Data Heap Leftist",
          "module": "Data.Heap.Leftist",
          "name": "valid",
          "normalized": "Leftist a-\u003eBool",
          "package": "llrbtree",
          "signature": "Leftist a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Leftist.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSkew Heap\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the fun of programming\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Heap.Skew",
          "name": "Skew",
          "package": "llrbtree",
          "source": "src/Data-Heap-Skew.html",
          "type": "module"
        },
        "index": {
          "description": "Skew Heap the fun of programming",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "Skew",
          "package": "llrbtree",
          "partial": "Skew",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "Skew",
          "package": "llrbtree",
          "source": "src/Data-Heap-Skew.html#Skew",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "Skew",
          "package": "llrbtree",
          "partial": "Skew",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#t:Skew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Heap-Skew.html#Skew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node (Skew a) a (Skew a)",
          "source": "src/Data-Heap-Skew.html#Skew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "Skew a -\u003e Skew a",
          "source": "src/Data-Heap-Skew.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "deleteMin",
          "normalized": "Skew a-\u003eSkew a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "Skew a-\u003eSkew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Skew",
          "name": "empty",
          "package": "llrbtree",
          "signature": "Skew a",
          "source": "src/Data-Heap-Skew.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty heap",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a heap from a list.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e Skew a",
          "source": "src/Data-Heap-Skew.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating heap from list empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "fromList",
          "normalized": "[a]-\u003eSkew a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eSkew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "heapSort",
          "package": "llrbtree",
          "signature": "Skew a -\u003e [a]",
          "source": "src/Data-Heap-Skew.html#heapSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "heapSort",
          "normalized": "Skew a-\u003e[a]",
          "package": "llrbtree",
          "partial": "Sort",
          "signature": "Skew a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:heapSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e Skew a -\u003e Skew a",
          "source": "src/Data-Heap-Skew.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "insert",
          "normalized": "a-\u003eSkew a-\u003eSkew a",
          "package": "llrbtree",
          "signature": "a-\u003eSkew a-\u003eSkew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two heaps\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emerge (fromList [5,3]) (fromList [5,7]) == fromList [3,5,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "merge",
          "package": "llrbtree",
          "signature": "Skew a -\u003e Skew a -\u003e Skew a",
          "source": "src/Data-Heap-Skew.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two heaps merge fromList fromList fromList True",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "merge",
          "normalized": "Skew a-\u003eSkew a-\u003eSkew a",
          "package": "llrbtree",
          "signature": "Skew a-\u003eSkew a-\u003eSkew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003eJust 1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "Skew a -\u003e Maybe a",
          "source": "src/Data-Heap-Skew.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element minimum fromList Just minimum empty Nothing",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "minimum",
          "normalized": "Skew a-\u003eMaybe a",
          "package": "llrbtree",
          "signature": "Skew a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the heap is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Skew.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Skew.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "null",
          "package": "llrbtree",
          "signature": "Skew t -\u003e Bool",
          "source": "src/Data-Heap-Skew.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the heap is empty Data.Heap.Skew.null empty True Data.Heap.Skew.null singleton False",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "null",
          "normalized": "Skew a-\u003eBool",
          "package": "llrbtree",
          "signature": "Skew t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Skew",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e Skew a",
          "source": "src/Data-Heap-Skew.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton heap",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "singleton",
          "normalized": "a-\u003eSkew a",
          "package": "llrbtree",
          "signature": "a-\u003eSkew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a heap. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = [5,3,5]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elength (toList (fromList xs)) == length xs\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Heap.Skew",
          "name": "toList",
          "package": "llrbtree",
          "signature": "Skew a -\u003e [a]",
          "source": "src/Data-Heap-Skew.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from heap let xs length toList fromList xs length xs True toList empty",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "toList",
          "normalized": "Skew a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "Skew a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Skew",
          "name": "valid",
          "package": "llrbtree",
          "signature": "Skew a -\u003e Bool",
          "source": "src/Data-Heap-Skew.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of heap",
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "valid",
          "normalized": "Skew a-\u003eBool",
          "package": "llrbtree",
          "signature": "Skew a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Skew.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurely functional top-down splay heaps.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e D.D. Sleator and R.E. Rarjan,\n     \"Self-Adjusting Binary Search Tree\",\n     Journal of the Association for Computing Machinery,\n     Vol 32, No 3, July 1985, pp 652-686.\n     \u003ca\u003ehttp://www.cs.cmu.edu/~sleator/papers/self-adjusting.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Heap.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "source": "src/Data-Heap-Splay.html",
          "type": "module"
        },
        "index": {
          "description": "Purely functional top-down splay heaps D.D Sleator and R.E Rarjan Self-Adjusting Binary Search Tree Journal of the Association for Computing Machinery Vol No July pp http www.cs.cmu.edu sleator papers self-adjusting.pdf",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "partial": "Splay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "Heap",
          "package": "llrbtree",
          "source": "src/Data-Heap-Splay.html#Heap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "Heap",
          "package": "llrbtree",
          "partial": "Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#t:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "source": "src/Data-Heap-Splay.html#Splay",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "partial": "Splay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#t:Splay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Heap-Splay.html#Splay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node (Splay a) a (Splay a)",
          "source": "src/Data-Heap-Splay.html#Splay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "None",
          "package": "llrbtree",
          "signature": "None",
          "source": "src/Data-Heap-Splay.html#Heap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "None",
          "package": "llrbtree",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "Some",
          "package": "llrbtree",
          "signature": "Some a (Splay a)",
          "source": "src/Data-Heap-Splay.html#Heap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "Some",
          "package": "llrbtree",
          "partial": "Some",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:Some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Heap a",
          "source": "src/Data-Heap-Splay.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "deleteMin",
          "normalized": "Heap a-\u003eHeap a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "Heap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Splay",
          "name": "empty",
          "package": "llrbtree",
          "signature": "Heap a",
          "source": "src/Data-Heap-Splay.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty heap",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a heap from a list.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e Heap a",
          "source": "src/Data-Heap-Splay.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating heap from list empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "fromList",
          "normalized": "[a]-\u003eHeap a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "heapSort",
          "package": "llrbtree",
          "signature": "Heap a -\u003e [a]",
          "source": "src/Data-Heap-Splay.html#heapSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "heapSort",
          "normalized": "Heap a-\u003e[a]",
          "package": "llrbtree",
          "partial": "Sort",
          "signature": "Heap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:heapSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap-Splay.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "insert",
          "normalized": "a-\u003eHeap a-\u003eHeap a",
          "package": "llrbtree",
          "signature": "a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two heaps\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emerge (fromList [5,3]) (fromList [5,7]) == fromList [3,5,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "merge",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap-Splay.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two heaps merge fromList fromList fromList True",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "merge",
          "normalized": "Heap a-\u003eHeap a-\u003eHeap a",
          "package": "llrbtree",
          "signature": "Heap a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003eJust 1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Maybe a",
          "source": "src/Data-Heap-Splay.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element minimum fromList Just minimum empty Nothing",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "minimum",
          "normalized": "Heap a-\u003eMaybe a",
          "package": "llrbtree",
          "signature": "Heap a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the heap is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Splay.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Heap.Splay.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "null",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Bool",
          "source": "src/Data-Heap-Splay.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the heap is empty Data.Heap.Splay.null empty True Data.Heap.Splay.null singleton False",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "null",
          "normalized": "Heap a-\u003eBool",
          "package": "llrbtree",
          "signature": "Heap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting smaller and bigger with splay.\n    Since this is a heap implementation, members is not\n    necessarily unique.\n\u003c/p\u003e",
          "module": "Data.Heap.Splay",
          "name": "partition",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e (Splay a, Splay a)",
          "source": "src/Data-Heap-Splay.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Splitting smaller and bigger with splay Since this is heap implementation members is not necessarily unique",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "partition",
          "normalized": "a-\u003eSplay a-\u003e(Splay a,Splay a)",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003e(Splay a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "printHeap",
          "package": "llrbtree",
          "signature": "Splay a -\u003e IO ()",
          "source": "src/Data-Heap-Splay.html#printHeap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "printHeap",
          "normalized": "Splay a-\u003eIO()",
          "package": "llrbtree",
          "partial": "Heap",
          "signature": "Splay a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:printHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Splay",
          "name": "showHeap",
          "package": "llrbtree",
          "signature": "Splay a -\u003e String",
          "source": "src/Data-Heap-Splay.html#showHeap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "showHeap",
          "normalized": "Splay a-\u003eString",
          "package": "llrbtree",
          "partial": "Heap",
          "signature": "Splay a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:showHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Splay",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e Heap a",
          "source": "src/Data-Heap-Splay.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton heap",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "singleton",
          "normalized": "a-\u003eHeap a",
          "package": "llrbtree",
          "signature": "a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a heap. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet xs = [5,3,5]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elength (toList (fromList xs)) == length xs\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Heap.Splay",
          "name": "toList",
          "package": "llrbtree",
          "signature": "Heap a -\u003e [a]",
          "source": "src/Data-Heap-Splay.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from heap let xs length toList fromList xs length xs True toList empty",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "toList",
          "normalized": "Heap a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "Heap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Splay",
          "name": "valid",
          "package": "llrbtree",
          "signature": "Heap a -\u003e Bool",
          "source": "src/Data-Heap-Splay.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of heap",
          "hierarchy": "Data Heap Splay",
          "module": "Data.Heap.Splay",
          "name": "valid",
          "normalized": "Heap a-\u003eBool",
          "package": "llrbtree",
          "signature": "Heap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Heap-Splay.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurely functional bottom-up splay sets.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e D.D. Sleator and R.E. Rarjan,\n     \"Self-Adjusting Binary Search Tree\",\n     Journal of the Association for Computing Machinery,\n     Vol 32, No 3, July 1985, pp 652-686.\n     \u003ca\u003ehttp://www.cs.cmu.edu/~sleator/papers/self-adjusting.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Set.BUSplay",
          "name": "BUSplay",
          "package": "llrbtree",
          "source": "src/Data-Set-BUSplay.html",
          "type": "module"
        },
        "index": {
          "description": "Purely functional bottom-up splay sets D.D Sleator and R.E Rarjan Self-Adjusting Binary Search Tree Journal of the Association for Computing Machinery Vol No July pp http www.cs.cmu.edu sleator papers self-adjusting.pdf",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "BUSplay",
          "package": "llrbtree",
          "partial": "BUSplay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BUSplay",
          "name": "Splay",
          "package": "llrbtree",
          "source": "src/Data-Set-BUSplay.html#Splay",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "Splay",
          "package": "llrbtree",
          "partial": "Splay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#t:Splay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if two splay sets are exactly the same shape.\n\u003c/p\u003e",
          "module": "Data.Set.BUSplay",
          "name": "(===)",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Bool",
          "source": "src/Data-Set-BUSplay.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Checking if two splay sets are exactly the same shape",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "(===) ===",
          "normalized": "Splay a-\u003eSplay a-\u003eBool",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BUSplay",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Set-BUSplay.html#Splay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BUSplay",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node (Splay a) a (Splay a)",
          "source": "src/Data-Set-BUSplay.html#Splay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting this element from a set.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 (fromList [5,3]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 7 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 empty            == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "delete",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deleting this element from set delete fromList singleton True delete fromList fromList True delete empty empty True",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "delete",
          "normalized": "a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the maximum\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax (fromList [(5,\"a\"), (3,\"b\"), (7,\"c\")]) == fromList [(3,\"b\"), (5,\"a\")]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: deleteMax\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "deleteMax",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Deleting the maximum deleteMax fromList fromList True deleteMax empty Exception deleteMax",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "deleteMax",
          "normalized": "Splay a-\u003eSplay a",
          "package": "llrbtree",
          "partial": "Max",
          "signature": "Splay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: deleteMin\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element deleteMin fromList fromList True deleteMin empty Exception deleteMin",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "deleteMin",
          "normalized": "Splay a-\u003eSplay a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "Splay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a difference set from sets.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edifference (fromList [5,3]) (fromList [5,7]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "difference",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Creating difference set from sets difference fromList fromList singleton True",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "difference",
          "normalized": "Splay a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty set.\n\u003c/p\u003e",
          "module": "Data.Set.BUSplay",
          "name": "empty",
          "package": "llrbtree",
          "signature": "Splay a",
          "source": "src/Data-Set-BUSplay.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty set",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a set from a list.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3,5] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating set from list empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "fromList",
          "normalized": "[a]-\u003eSplay a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion insert fromList fromList True insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "insert",
          "normalized": "a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a intersection set from sets.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (fromList [5,3]) (fromList [5,7]) == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "intersection",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Creating intersection set from sets intersection fromList fromList singleton True",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "intersection",
          "normalized": "Splay a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the maximum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ maximum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: maximum\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "maximum",
          "package": "llrbtree",
          "signature": "Splay a -\u003e (a, Splay a)",
          "source": "src/Data-Set-BUSplay.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Finding the maximum element fst maximum fromList maximum empty Exception maximum",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "maximum",
          "normalized": "Splay a-\u003e(a,Splay a)",
          "package": "llrbtree",
          "signature": "Splay a-\u003e(a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if this element is a member of a set?\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ member 5 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ member 1 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "member",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e (Bool, Splay a)",
          "source": "src/Data-Set-BUSplay.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checking if this element is member of set fst member fromList True fst member fromList False",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "member",
          "normalized": "a-\u003eSplay a-\u003e(Bool,Splay a)",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003e(Bool,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ minimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: minimum\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "Splay a -\u003e (a, Splay a)",
          "source": "src/Data-Set-BUSplay.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element fst minimum fromList minimum empty Exception minimum",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "minimum",
          "normalized": "Splay a-\u003e(a,Splay a)",
          "package": "llrbtree",
          "signature": "Splay a-\u003e(a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the splay set is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.BUSplay.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.BUSplay.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "null",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Bool",
          "source": "src/Data-Set-BUSplay.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the splay set is empty Data.Set.BUSplay.null empty True Data.Set.BUSplay.null singleton False",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "null",
          "normalized": "Splay a-\u003eBool",
          "package": "llrbtree",
          "signature": "Splay a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BUSplay",
          "name": "printSet",
          "package": "llrbtree",
          "signature": "Splay a -\u003e IO ()",
          "source": "src/Data-Set-BUSplay.html#printSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "printSet",
          "normalized": "Splay a-\u003eIO()",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "Splay a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:printSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BUSplay",
          "name": "showSet",
          "package": "llrbtree",
          "signature": "Splay a -\u003e String",
          "source": "src/Data-Set-BUSplay.html#showSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "showSet",
          "normalized": "Splay a-\u003eString",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "Splay a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:showSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton set.\n\u003c/p\u003e",
          "module": "Data.Set.BUSplay",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton set",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "singleton",
          "normalized": "a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a set. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003e[3,5]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "toList",
          "package": "llrbtree",
          "signature": "Splay a -\u003e [a]",
          "source": "src/Data-Set-BUSplay.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from set toList fromList toList empty",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "toList",
          "normalized": "Splay a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "Splay a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a union set from two sets.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [5,3]) (fromList [5,7]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.BUSplay",
          "name": "union",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-BUSplay.html#union",
          "type": "function"
        },
        "index": {
          "description": "Creating union set from two sets union fromList fromList fromList True",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "union",
          "normalized": "Splay a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a set.\n\u003c/p\u003e",
          "module": "Data.Set.BUSplay",
          "name": "valid",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Bool",
          "source": "src/Data-Set-BUSplay.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of set",
          "hierarchy": "Data Set BUSplay",
          "module": "Data.Set.BUSplay",
          "name": "valid",
          "normalized": "Splay a-\u003eBool",
          "package": "llrbtree",
          "signature": "Splay a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-BUSplay.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurely functional left-leaning red-black trees.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Robert Sedgewick, \"Left-Leaning Red-Black Trees\",\n     Data structures seminar at Dagstuhl, Feb 2008.\n     \u003ca\u003ehttp://www.cs.princeton.edu/~rs/talks/LLRB/LLRB.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Robert Sedgewick, \"Left-Leaning Red-Black Trees\",\n     Analysis of Algorithms meeting at Maresias, Apr 2008\n     \u003ca\u003ehttp://www.cs.princeton.edu/~rs/talks/LLRB/RedBlack.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "LLRBTree",
          "package": "llrbtree",
          "source": "src/Data-Set-LLRBTree.html",
          "type": "module"
        },
        "index": {
          "description": "Purely functional left-leaning red-black trees Robert Sedgewick Left-Leaning Red-Black Trees Data structures seminar at Dagstuhl Feb http www.cs.princeton.edu rs talks LLRB LLRB.pdf Robert Sedgewick Left-Leaning Red-Black Trees Analysis of Algorithms meeting at Maresias Apr http www.cs.princeton.edu rs talks LLRB RedBlack.pdf",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "LLRBTree",
          "package": "llrbtree",
          "partial": "LLRBTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRed nodes have the same BlackHeight of their parent.\n\u003c/p\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "BlackHeight",
          "package": "llrbtree",
          "source": "src/Data-Set-LLRBTree.html#BlackHeight",
          "type": "type"
        },
        "index": {
          "description": "Red nodes have the same BlackHeight of their parent",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "BlackHeight",
          "package": "llrbtree",
          "partial": "Black Height",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#t:BlackHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.LLRBTree",
          "name": "Color",
          "package": "llrbtree",
          "source": "src/Data-Set-LLRBTree.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "Color",
          "package": "llrbtree",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.LLRBTree",
          "name": "RBTree",
          "package": "llrbtree",
          "source": "src/Data-Set-LLRBTree.html#RBTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "RBTree",
          "package": "llrbtree",
          "partial": "RBTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#t:RBTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlack\n\u003c/p\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "B",
          "package": "llrbtree",
          "signature": "B",
          "source": "src/Data-Set-LLRBTree.html#Color",
          "type": "function"
        },
        "index": {
          "description": "Black",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "B",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.LLRBTree",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Set-LLRBTree.html#RBTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.LLRBTree",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node Color !BlackHeight !(RBTree a) a !(RBTree a)",
          "source": "src/Data-Set-LLRBTree.html#RBTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRed\n\u003c/p\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "R",
          "package": "llrbtree",
          "signature": "R",
          "source": "src/Data-Set-LLRBTree.html#Color",
          "type": "function"
        },
        "index": {
          "description": "Red",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "R",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting this element from a tree. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 (fromList [5,3]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 7 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 empty                         == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "delete",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deleting this element from tree log delete fromList singleton True delete fromList fromList True delete empty empty True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "delete",
          "normalized": "a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the maximum\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax (fromList [(5,\"a\"), (3,\"b\"), (7,\"c\")]) == fromList [(3,\"b\"), (5,\"a\")]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "deleteMax",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Deleting the maximum deleteMax fromList fromList True deleteMax empty empty True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "deleteMax",
          "normalized": "RBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "partial": "Max",
          "signature": "RBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element log deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "deleteMin",
          "normalized": "RBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "RBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a difference tree from trees. O(N + N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edifference (fromList [5,3]) (fromList [5,7]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "difference",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Creating difference tree from trees difference fromList fromList singleton True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "difference",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty tree.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eheight empty\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "empty",
          "package": "llrbtree",
          "signature": "RBTree a",
          "source": "src/Data-Set-LLRBTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty tree height empty",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a tree from a list. O(N log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3,5] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating tree from list log empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "fromList",
          "normalized": "[a]-\u003eRBTree a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion log insert fromList fromList True insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "insert",
          "normalized": "a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a intersection tree from trees. O(N + N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (fromList [5,3]) (fromList [5,7]) == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "intersection",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Creating intersection tree from trees intersection fromList fromList singleton True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "intersection",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoining two trees with an element. O(log N)\n\u003c/p\u003e\u003cp\u003eEach element of the left tree must be less than the element.\n    Each element of the right tree must be greater than the element.\n    Both tree must have black root.\n\u003c/p\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "join",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#join",
          "type": "function"
        },
        "index": {
          "description": "Joining two trees with an element log Each element of the left tree must be less than the element Each element of the right tree must be greater than the element Both tree must have black root",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "join",
          "normalized": "RBTree a-\u003ea-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003ea-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the maximum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: maximum\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "maximum",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e a",
          "source": "src/Data-Set-LLRBTree.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Finding the maximum element log maximum fromList maximum empty Exception maximum",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "maximum",
          "normalized": "RBTree a-\u003ea",
          "package": "llrbtree",
          "signature": "RBTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if this element is a member of a tree?\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emember 5 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emember 1 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "member",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e Bool",
          "source": "src/Data-Set-LLRBTree.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checking if this element is member of tree member fromList True member fromList False",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "member",
          "normalized": "a-\u003eRBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two trees. O(log N)\n\u003c/p\u003e\u003cp\u003eEach element of the left tree must be less than each element of\n    the right tree. Both trees must have black root.\n\u003c/p\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "merge",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two trees log Each element of the left tree must be less than each element of the right tree Both trees must have black root",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "merge",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: minimum\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e a",
          "source": "src/Data-Set-LLRBTree.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element log minimum fromList minimum empty Exception minimum",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "minimum",
          "normalized": "RBTree a-\u003ea",
          "package": "llrbtree",
          "signature": "RBTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the red black tree is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.LLRBTree.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.LLRBTree.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "null",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e Bool",
          "source": "src/Data-Set-LLRBTree.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the red black tree is empty Data.Set.LLRBTree.null empty True Data.Set.LLRBTree.null singleton False",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "null",
          "normalized": "RBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.LLRBTree",
          "name": "printSet",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e IO ()",
          "source": "src/Data-Set-LLRBTree.html#printSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "printSet",
          "normalized": "RBTree a-\u003eIO()",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "RBTree a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:printSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.LLRBTree",
          "name": "showSet",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e String",
          "source": "src/Data-Set-LLRBTree.html#showSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "showSet",
          "normalized": "RBTree a-\u003eString",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "RBTree a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:showSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton tree.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eheight (singleton 'a')\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton tree height singleton",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "singleton",
          "normalized": "a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting a tree. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 2 (fromList [5,3]) == (empty, fromList [3,5])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 3 (fromList [5,3]) == (empty, singleton 5)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 4 (fromList [5,3]) == (singleton 3, singleton 5)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 5 (fromList [5,3]) == (singleton 3, empty)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 6 (fromList [5,3]) == (fromList [3,5], empty)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "split",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e (RBTree a, RBTree a)",
          "source": "src/Data-Set-LLRBTree.html#split",
          "type": "function"
        },
        "index": {
          "description": "Splitting tree log split fromList empty fromList True split fromList empty singleton True split fromList singleton singleton True split fromList singleton empty True split fromList fromList empty True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "split",
          "normalized": "a-\u003eRBTree a-\u003e(RBTree a,RBTree a)",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003e(RBTree a,RBTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a tree. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003e[3,5]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "toList",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e [a]",
          "source": "src/Data-Set-LLRBTree.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from tree toList fromList toList empty",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "toList",
          "normalized": "RBTree a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "RBTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a union tree from two trees. O(N + M)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [5,3]) (fromList [5,7]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "union",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-LLRBTree.html#union",
          "type": "function"
        },
        "index": {
          "description": "Creating union tree from two trees union fromList fromList fromList True",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "union",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a tree.\n\u003c/p\u003e",
          "module": "Data.Set.LLRBTree",
          "name": "valid",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e Bool",
          "source": "src/Data-Set-LLRBTree.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of tree",
          "hierarchy": "Data Set LLRBTree",
          "module": "Data.Set.LLRBTree",
          "name": "valid",
          "normalized": "RBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-LLRBTree.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurely functional red-black trees.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chris Okasaki, \"Red-Black Trees in a Functional Setting\",\n\t  Journal of Functional Programming, 9(4), pp 471-477, July 1999\n      \u003ca\u003ehttp://www.eecs.usma.edu/webs/people/okasaki/pubs.html#jfp99\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Stefan Kahrs, \"Red-black trees with types\",\n      Journal of functional programming, 11(04), pp 425-432, July 2001\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Set.RBTree",
          "name": "RBTree",
          "package": "llrbtree",
          "source": "src/Data-Set-RBTree.html",
          "type": "module"
        },
        "index": {
          "description": "Purely functional red-black trees Chris Okasaki Red-Black Trees in Functional Setting Journal of Functional Programming pp July http www.eecs.usma.edu webs people okasaki pubs.html jfp99 Stefan Kahrs Red-black trees with types Journal of functional programming pp July",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "RBTree",
          "package": "llrbtree",
          "partial": "RBTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRed nodes have the same BlackHeight of their parent.\n\u003c/p\u003e",
          "module": "Data.Set.RBTree",
          "name": "BlackHeight",
          "package": "llrbtree",
          "source": "src/Data-Set-RBTree.html#BlackHeight",
          "type": "type"
        },
        "index": {
          "description": "Red nodes have the same BlackHeight of their parent",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "BlackHeight",
          "package": "llrbtree",
          "partial": "Black Height",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#t:BlackHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.RBTree",
          "name": "Color",
          "package": "llrbtree",
          "source": "src/Data-Set-RBTree.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "Color",
          "package": "llrbtree",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.RBTree",
          "name": "RBTree",
          "package": "llrbtree",
          "source": "src/Data-Set-RBTree.html#RBTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "RBTree",
          "package": "llrbtree",
          "partial": "RBTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#t:RBTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlack\n\u003c/p\u003e",
          "module": "Data.Set.RBTree",
          "name": "B",
          "package": "llrbtree",
          "signature": "B",
          "source": "src/Data-Set-RBTree.html#Color",
          "type": "function"
        },
        "index": {
          "description": "Black",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "B",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.RBTree",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Set-RBTree.html#RBTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.RBTree",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node Color !BlackHeight !(RBTree a) a !(RBTree a)",
          "source": "src/Data-Set-RBTree.html#RBTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRed\n\u003c/p\u003e",
          "module": "Data.Set.RBTree",
          "name": "R",
          "package": "llrbtree",
          "signature": "R",
          "source": "src/Data-Set-RBTree.html#Color",
          "type": "function"
        },
        "index": {
          "description": "Red",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "R",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting this element from a tree. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 (fromList [5,3]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 7 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 empty            == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "delete",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deleting this element from tree log delete fromList singleton True delete fromList fromList True delete empty empty True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "delete",
          "normalized": "a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the maximum\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax (fromList [(5,\"a\"), (3,\"b\"), (7,\"c\")]) == fromList [(3,\"b\"), (5,\"a\")]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "deleteMax",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Deleting the maximum deleteMax fromList fromList True deleteMax empty empty True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "deleteMax",
          "normalized": "RBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "partial": "Max",
          "signature": "RBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element log deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "deleteMin",
          "normalized": "RBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "RBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a difference tree from trees. O(N + N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edifference (fromList [5,3]) (fromList [5,7]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "difference",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Creating difference tree from trees difference fromList fromList singleton True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "difference",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty tree.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eheight empty\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "empty",
          "package": "llrbtree",
          "signature": "RBTree a",
          "source": "src/Data-Set-RBTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty tree height empty",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a tree from a list. O(N log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3,5] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating tree from list log empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "fromList",
          "normalized": "[a]-\u003eRBTree a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion log insert fromList fromList True insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "insert",
          "normalized": "a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a intersection tree from trees. O(N + N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (fromList [5,3]) (fromList [5,7]) == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "intersection",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Creating intersection tree from trees intersection fromList fromList singleton True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "intersection",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoining two trees with an element. O(log N)\n\u003c/p\u003e\u003cp\u003eEach element of the left tree must be less than the element.\n    Each element of the right tree must be greater than the element.\n    Both tree must have black root.\n\u003c/p\u003e",
          "module": "Data.Set.RBTree",
          "name": "join",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#join",
          "type": "function"
        },
        "index": {
          "description": "Joining two trees with an element log Each element of the left tree must be less than the element Each element of the right tree must be greater than the element Both tree must have black root",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "join",
          "normalized": "RBTree a-\u003ea-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003ea-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the maximum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: maximum\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "maximum",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e a",
          "source": "src/Data-Set-RBTree.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Finding the maximum element log maximum fromList maximum empty Exception maximum",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "maximum",
          "normalized": "RBTree a-\u003ea",
          "package": "llrbtree",
          "signature": "RBTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if this element is a member of a tree?\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emember 5 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emember 1 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "member",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e Bool",
          "source": "src/Data-Set-RBTree.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checking if this element is member of tree member fromList True member fromList False",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "member",
          "normalized": "a-\u003eRBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two trees. O(log N)\n\u003c/p\u003e\u003cp\u003eEach element of the left tree must be less than each element of\n    the right tree. Both trees must have black root.\n\u003c/p\u003e",
          "module": "Data.Set.RBTree",
          "name": "merge",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two trees log Each element of the left tree must be less than each element of the right tree Both trees must have black root",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "merge",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: minimum\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e a",
          "source": "src/Data-Set-RBTree.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element log minimum fromList minimum empty Exception minimum",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "minimum",
          "normalized": "RBTree a-\u003ea",
          "package": "llrbtree",
          "signature": "RBTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the red black tree is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.RBTree.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.RBTree.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "null",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e Bool",
          "source": "src/Data-Set-RBTree.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the red black tree is empty Data.Set.RBTree.null empty True Data.Set.RBTree.null singleton False",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "null",
          "normalized": "RBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.RBTree",
          "name": "printSet",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e IO ()",
          "source": "src/Data-Set-RBTree.html#printSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "printSet",
          "normalized": "RBTree a-\u003eIO()",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "RBTree a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:printSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.RBTree",
          "name": "showSet",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e String",
          "source": "src/Data-Set-RBTree.html#showSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "showSet",
          "normalized": "RBTree a-\u003eString",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "RBTree a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:showSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton tree.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eheight (singleton 'a')\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton tree height singleton",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "singleton",
          "normalized": "a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting a tree. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 2 (fromList [5,3]) == (empty, fromList [3,5])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 3 (fromList [5,3]) == (empty, singleton 5)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 4 (fromList [5,3]) == (singleton 3, singleton 5)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 5 (fromList [5,3]) == (singleton 3, empty)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 6 (fromList [5,3]) == (fromList [3,5], empty)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "split",
          "package": "llrbtree",
          "signature": "a -\u003e RBTree a -\u003e (RBTree a, RBTree a)",
          "source": "src/Data-Set-RBTree.html#split",
          "type": "function"
        },
        "index": {
          "description": "Splitting tree log split fromList empty fromList True split fromList empty singleton True split fromList singleton singleton True split fromList singleton empty True split fromList fromList empty True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "split",
          "normalized": "a-\u003eRBTree a-\u003e(RBTree a,RBTree a)",
          "package": "llrbtree",
          "signature": "a-\u003eRBTree a-\u003e(RBTree a,RBTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a tree. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003e[3,5]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "toList",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e [a]",
          "source": "src/Data-Set-RBTree.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from tree toList fromList toList empty",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "toList",
          "normalized": "RBTree a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "RBTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a union tree from two trees. O(N + M)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [5,3]) (fromList [5,7]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.RBTree",
          "name": "union",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e RBTree a -\u003e RBTree a",
          "source": "src/Data-Set-RBTree.html#union",
          "type": "function"
        },
        "index": {
          "description": "Creating union tree from two trees union fromList fromList fromList True",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "union",
          "normalized": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eRBTree a-\u003eRBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a tree.\n\u003c/p\u003e",
          "module": "Data.Set.RBTree",
          "name": "valid",
          "package": "llrbtree",
          "signature": "RBTree a -\u003e Bool",
          "source": "src/Data-Set-RBTree.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of tree",
          "hierarchy": "Data Set RBTree",
          "module": "Data.Set.RBTree",
          "name": "valid",
          "normalized": "RBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "RBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-RBTree.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurely functional top-down splay sets.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e D.D. Sleator and R.E. Rarjan,\n     \"Self-Adjusting Binary Search Tree\",\n     Journal of the Association for Computing Machinery,\n     Vol 32, No 3, July 1985, pp 652-686.\n     \u003ca\u003ehttp://www.cs.cmu.edu/~sleator/papers/self-adjusting.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Set.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "source": "src/Data-Set-Splay.html",
          "type": "module"
        },
        "index": {
          "description": "Purely functional top-down splay sets D.D Sleator and R.E Rarjan Self-Adjusting Binary Search Tree Journal of the Association for Computing Machinery Vol No July pp http www.cs.cmu.edu sleator papers self-adjusting.pdf",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "partial": "Splay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "source": "src/Data-Set-Splay.html#Splay",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "Splay",
          "package": "llrbtree",
          "partial": "Splay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#t:Splay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if two splay sets are exactly the same shape.\n\u003c/p\u003e",
          "module": "Data.Set.Splay",
          "name": "(===)",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Bool",
          "source": "src/Data-Set-Splay.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "description": "Checking if two splay sets are exactly the same shape",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "(===) ===",
          "normalized": "Splay a-\u003eSplay a-\u003eBool",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Splay",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Set-Splay.html#Splay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Splay",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node (Splay a) a (Splay a)",
          "source": "src/Data-Set-Splay.html#Splay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting this element from a set.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 (fromList [5,3]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 7 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 empty            == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "delete",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deleting this element from set delete fromList singleton True delete fromList fromList True delete empty empty True",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "delete",
          "normalized": "a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the maximum\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esnd (deleteMax (fromList [(5,\"a\"), (3,\"b\"), (7,\"c\")])) == fromList [(3,\"b\"), (5,\"a\")]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: deleteMax\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "deleteMax",
          "package": "llrbtree",
          "signature": "Splay a -\u003e (a, Splay a)",
          "source": "src/Data-Set-Splay.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Deleting the maximum snd deleteMax fromList fromList True deleteMax empty Exception deleteMax",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "deleteMax",
          "normalized": "Splay a-\u003e(a,Splay a)",
          "package": "llrbtree",
          "partial": "Max",
          "signature": "Splay a-\u003e(a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esnd (deleteMin (fromList [5,3,7])) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: deleteMin\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "Splay a -\u003e (a, Splay a)",
          "source": "src/Data-Set-Splay.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element snd deleteMin fromList fromList True deleteMin empty Exception deleteMin",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "deleteMin",
          "normalized": "Splay a-\u003e(a,Splay a)",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "Splay a-\u003e(a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a difference set from sets.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edifference (fromList [5,3]) (fromList [5,7]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "difference",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Creating difference set from sets difference fromList fromList singleton True",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "difference",
          "normalized": "Splay a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty set.\n\u003c/p\u003e",
          "module": "Data.Set.Splay",
          "name": "empty",
          "package": "llrbtree",
          "signature": "Splay a",
          "source": "src/Data-Set-Splay.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty set",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a set from a list.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3,5] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating set from list empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "fromList",
          "normalized": "[a]-\u003eSplay a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion insert fromList fromList True insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "insert",
          "normalized": "a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a intersection set from sets.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (fromList [5,3]) (fromList [5,7]) == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "intersection",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Creating intersection set from sets intersection fromList fromList singleton True",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "intersection",
          "normalized": "Splay a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the maximum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ maximum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: maximum\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "maximum",
          "package": "llrbtree",
          "signature": "Splay a -\u003e (a, Splay a)",
          "source": "src/Data-Set-Splay.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Finding the maximum element fst maximum fromList maximum empty Exception maximum",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "maximum",
          "normalized": "Splay a-\u003e(a,Splay a)",
          "package": "llrbtree",
          "signature": "Splay a-\u003e(a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if this element is a member of a set?\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ member 5 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ member 1 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "member",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e (Bool, Splay a)",
          "source": "src/Data-Set-Splay.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checking if this element is member of set fst member fromList True fst member fromList False",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "member",
          "normalized": "a-\u003eSplay a-\u003e(Bool,Splay a)",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003e(Bool,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efst $ minimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: minimum\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "Splay a -\u003e (a, Splay a)",
          "source": "src/Data-Set-Splay.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element fst minimum fromList minimum empty Exception minimum",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "minimum",
          "normalized": "Splay a-\u003e(a,Splay a)",
          "package": "llrbtree",
          "signature": "Splay a-\u003e(a,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the splay set is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.Splay.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.Splay.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "null",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Bool",
          "source": "src/Data-Set-Splay.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the splay set is empty Data.Set.Splay.null empty True Data.Set.Splay.null singleton False",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "null",
          "normalized": "Splay a-\u003eBool",
          "package": "llrbtree",
          "signature": "Splay a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Splay",
          "name": "printSet",
          "package": "llrbtree",
          "signature": "Splay a -\u003e IO ()",
          "source": "src/Data-Set-Splay.html#printSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "printSet",
          "normalized": "Splay a-\u003eIO()",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "Splay a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:printSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Splay",
          "name": "showSet",
          "package": "llrbtree",
          "signature": "Splay a -\u003e String",
          "source": "src/Data-Set-Splay.html#showSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "showSet",
          "normalized": "Splay a-\u003eString",
          "package": "llrbtree",
          "partial": "Set",
          "signature": "Splay a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:showSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton set.\n\u003c/p\u003e",
          "module": "Data.Set.Splay",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton set",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "singleton",
          "normalized": "a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting smaller and bigger with splay.\n    Since this is a set implementation, members must be unique.\n\u003c/p\u003e",
          "module": "Data.Set.Splay",
          "name": "split",
          "package": "llrbtree",
          "signature": "a -\u003e Splay a -\u003e (Splay a, Bool, Splay a)",
          "source": "src/Data-Set-Splay.html#split",
          "type": "function"
        },
        "index": {
          "description": "Splitting smaller and bigger with splay Since this is set implementation members must be unique",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "split",
          "normalized": "a-\u003eSplay a-\u003e(Splay a,Bool,Splay a)",
          "package": "llrbtree",
          "signature": "a-\u003eSplay a-\u003e(Splay a,Bool,Splay a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a set.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003e[3,5]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "toList",
          "package": "llrbtree",
          "signature": "Splay a -\u003e [a]",
          "source": "src/Data-Set-Splay.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from set toList fromList toList empty",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "toList",
          "normalized": "Splay a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "Splay a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a union set from two sets.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [5,3]) (fromList [5,7]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.Splay",
          "name": "union",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Splay a -\u003e Splay a",
          "source": "src/Data-Set-Splay.html#union",
          "type": "function"
        },
        "index": {
          "description": "Creating union set from two sets union fromList fromList fromList True",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "union",
          "normalized": "Splay a-\u003eSplay a-\u003eSplay a",
          "package": "llrbtree",
          "signature": "Splay a-\u003eSplay a-\u003eSplay a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a set.\n\u003c/p\u003e",
          "module": "Data.Set.Splay",
          "name": "valid",
          "package": "llrbtree",
          "signature": "Splay a -\u003e Bool",
          "source": "src/Data-Set-Splay.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of set",
          "hierarchy": "Data Set Splay",
          "module": "Data.Set.Splay",
          "name": "valid",
          "normalized": "Splay a-\u003eBool",
          "package": "llrbtree",
          "signature": "Splay a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-Splay.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePurely functional weight balanced trees, aka trees of bounded balance.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e J. Nievergelt and E.M. Reingold, \"Binary search trees of\n      bounded balance\", Proceedings of the fourth annual ACM symposium on\n      Theory of computing, pp 137-142, 1972.\n\u003c/li\u003e\u003cli\u003e S. Adams, \"Implementing sets efficiently in a functional language\",\n      Technical Report CSTR 92-10, University of Southampton, 1992.\n      \u003ca\u003ehttp://groups.csail.mit.edu/mac/users/adams/BB/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e S. Adam, \"Efficient sets: a balancing act\",\n      Journal of Functional Programming, Vol 3, Issue 4, pp 553-562.\n\u003c/li\u003e\u003cli\u003e Y. Hirai and K. Yamamoto,\n      \"Balancing Weight-Balanced Trees\",\n      Journal of Functional Programming. Vol 21, Issue 03, pp 287-307.\n      \u003ca\u003ehttp://mew.org/~kazu/proj/weight-balanced-tree/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e M. Strake, \"Adams' Trees Revisited - Correct and Efficient Implementation\",\n      TFP 2011.\n      \u003ca\u003ehttp://fox.ucw.cz/papers/bbtree/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Set.WBTree",
          "name": "WBTree",
          "package": "llrbtree",
          "source": "src/Data-Set-WBTree.html",
          "type": "module"
        },
        "index": {
          "description": "Purely functional weight balanced trees aka trees of bounded balance Nievergelt and E.M Reingold Binary search trees of bounded balance Proceedings of the fourth annual ACM symposium on Theory of computing pp Adams Implementing sets efficiently in functional language Technical Report CSTR University of Southampton http groups.csail.mit.edu mac users adams BB Adam Efficient sets balancing act Journal of Functional Programming Vol Issue pp Hirai and Yamamoto Balancing Weight-Balanced Trees Journal of Functional Programming Vol Issue pp http mew.org kazu proj weight-balanced-tree Strake Adams Trees Revisited Correct and Efficient Implementation TFP http fox.ucw.cz papers bbtree",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "WBTree",
          "package": "llrbtree",
          "partial": "WBTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.WBTree",
          "name": "Size",
          "package": "llrbtree",
          "source": "src/Data-Set-WBTree.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "Size",
          "package": "llrbtree",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.WBTree",
          "name": "WBTree",
          "package": "llrbtree",
          "source": "src/Data-Set-WBTree.html#WBTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "WBTree",
          "package": "llrbtree",
          "partial": "WBTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#t:WBTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.WBTree",
          "name": "Leaf",
          "package": "llrbtree",
          "signature": "Leaf",
          "source": "src/Data-Set-WBTree.html#WBTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "Leaf",
          "package": "llrbtree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.WBTree",
          "name": "Node",
          "package": "llrbtree",
          "signature": "Node Size (WBTree a) a (WBTree a)",
          "source": "src/Data-Set-WBTree.html#WBTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "Node",
          "package": "llrbtree",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting this element from a set. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 (fromList [5,3]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 7 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete 5 empty            == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "delete",
          "package": "llrbtree",
          "signature": "a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deleting this element from set log delete fromList singleton True delete fromList fromList True delete empty empty True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "delete",
          "normalized": "a-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the maximum\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax (fromList [(5,\"a\"), (3,\"b\"), (7,\"c\")]) == fromList [(3,\"b\"), (5,\"a\")]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMax empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "deleteMax",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "Deleting the maximum deleteMax fromList fromList True deleteMax empty empty True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "deleteMax",
          "normalized": "WBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "partial": "Max",
          "signature": "WBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeleting the minimum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [5,3,7]) == fromList [5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin empty == empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "deleteMin",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "Deleting the minimum element log deleteMin fromList fromList True deleteMin empty empty True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "deleteMin",
          "normalized": "WBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "partial": "Min",
          "signature": "WBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a difference set from sets. O(N + N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edifference (fromList [5,3]) (fromList [5,7]) == singleton 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "difference",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Creating difference set from sets difference fromList fromList singleton True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "difference",
          "normalized": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty set.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize empty\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "empty",
          "package": "llrbtree",
          "signature": "WBTree a",
          "source": "src/Data-Set-WBTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty set size empty",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "empty",
          "package": "llrbtree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a set from a list. O(N log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 'a' == fromList ['a']\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromList [5,3,5] == fromList [5,3]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "fromList",
          "package": "llrbtree",
          "signature": "[a] -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creating set from list log empty fromList True singleton fromList True fromList fromList True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "fromList",
          "normalized": "[a]-\u003eWBTree a",
          "package": "llrbtree",
          "partial": "List",
          "signature": "[a]-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsertion. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 (fromList [5,3]) == fromList [3,5]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 7 (fromList [5,3]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 5 empty            == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "insert",
          "package": "llrbtree",
          "signature": "a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insertion log insert fromList fromList True insert fromList fromList True insert empty singleton True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "insert",
          "normalized": "a-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a intersection set from sets. O(N + N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (fromList [5,3]) (fromList [5,7]) == singleton 5\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "intersection",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Creating intersection set from sets intersection fromList fromList singleton True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "intersection",
          "normalized": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoining two sets with an element. O(log N)\n\u003c/p\u003e\u003cp\u003eEach element of the left set must be less than the element.\n    Each element of the right set must be greater than the element.\n\u003c/p\u003e",
          "module": "Data.Set.WBTree",
          "name": "join",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#join",
          "type": "function"
        },
        "index": {
          "description": "Joining two sets with an element log Each element of the left set must be less than the element Each element of the right set must be greater than the element",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "join",
          "normalized": "WBTree a-\u003ea-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "WBTree a-\u003ea-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the maximum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e5\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaximum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: maximum\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "maximum",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e a",
          "source": "src/Data-Set-WBTree.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Finding the maximum element log maximum fromList maximum empty Exception maximum",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "maximum",
          "normalized": "WBTree a-\u003ea",
          "package": "llrbtree",
          "signature": "WBTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if this element is a member of a set?\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emember 5 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emember 1 (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "member",
          "package": "llrbtree",
          "signature": "a -\u003e WBTree a -\u003e Bool",
          "source": "src/Data-Set-WBTree.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checking if this element is member of set member fromList True member fromList False",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "member",
          "normalized": "a-\u003eWBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "a-\u003eWBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging two sets. O(log N)\n\u003c/p\u003e\u003cp\u003eEach element of the left set must be less than each element of\n    the right set.\n\u003c/p\u003e",
          "module": "Data.Set.WBTree",
          "name": "merge",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merging two sets log Each element of the left set must be less than each element of the right set",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "merge",
          "normalized": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the minimum element. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,5,1])\n\u003c/code\u003e\u003c/strong\u003e1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum empty\n\u003c/code\u003e\u003c/strong\u003e*** Exception: minimum\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "minimum",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e a",
          "source": "src/Data-Set-WBTree.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Finding the minimum element log minimum fromList minimum empty Exception minimum",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "minimum",
          "normalized": "WBTree a-\u003ea",
          "package": "llrbtree",
          "signature": "WBTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee if the set is empty.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.WBTree.null empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eData.Set.WBTree.null (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "null",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e Bool",
          "source": "src/Data-Set-WBTree.html#null",
          "type": "function"
        },
        "index": {
          "description": "See if the set is empty Data.Set.WBTree.null empty True Data.Set.WBTree.null singleton False",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "null",
          "normalized": "WBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton set.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize (singleton 'a')\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "singleton",
          "package": "llrbtree",
          "signature": "a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton set size singleton",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "singleton",
          "normalized": "a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.WBTree",
          "name": "size",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e Size",
          "source": "src/Data-Set-WBTree.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "size",
          "normalized": "WBTree a-\u003eSize",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplitting a set. O(log N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 2 (fromList [5,3]) == (empty, fromList [3,5])\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 3 (fromList [5,3]) == (empty, singleton 5)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 4 (fromList [5,3]) == (singleton 3, singleton 5)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 5 (fromList [5,3]) == (singleton 3, empty)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 6 (fromList [5,3]) == (fromList [3,5], empty)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "split",
          "package": "llrbtree",
          "signature": "a -\u003e WBTree a -\u003e (WBTree a, WBTree a)",
          "source": "src/Data-Set-WBTree.html#split",
          "type": "function"
        },
        "index": {
          "description": "Splitting set log split fromList empty fromList True split fromList empty singleton True split fromList singleton singleton True split fromList singleton empty True split fromList fromList empty True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "split",
          "normalized": "a-\u003eWBTree a-\u003e(WBTree a,WBTree a)",
          "package": "llrbtree",
          "signature": "a-\u003eWBTree a-\u003e(WBTree a,WBTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a list from a set. O(N)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList (fromList [5,3])\n\u003c/code\u003e\u003c/strong\u003e[3,5]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList empty\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "toList",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e [a]",
          "source": "src/Data-Set-WBTree.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creating list from set toList fromList toList empty",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "toList",
          "normalized": "WBTree a-\u003e[a]",
          "package": "llrbtree",
          "partial": "List",
          "signature": "WBTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a union set from two sets. O(N + M)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [5,3]) (fromList [5,7]) == fromList [3,5,7]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.Set.WBTree",
          "name": "union",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e WBTree a -\u003e WBTree a",
          "source": "src/Data-Set-WBTree.html#union",
          "type": "function"
        },
        "index": {
          "description": "Creating union set from two sets union fromList fromList fromList True",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "union",
          "normalized": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eWBTree a-\u003eWBTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking validity of a set.\n\u003c/p\u003e",
          "module": "Data.Set.WBTree",
          "name": "valid",
          "package": "llrbtree",
          "signature": "WBTree a -\u003e Bool",
          "source": "src/Data-Set-WBTree.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Checking validity of set",
          "hierarchy": "Data Set WBTree",
          "module": "Data.Set.WBTree",
          "name": "valid",
          "normalized": "WBTree a-\u003eBool",
          "package": "llrbtree",
          "signature": "WBTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llrbtree/docs/Data-Set-WBTree.html#v:valid"
      }
    }
  ]
]