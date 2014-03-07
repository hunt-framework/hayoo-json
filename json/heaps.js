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
        "word": "heaps"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient, asymptotically optimal, implementation of a priority queues\n extended with support for efficient size, and \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Since many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.Heap (Heap)\n  import qualified Data.Heap as Heap\n\u003c/pre\u003e\u003cp\u003eThe implementation of \u003ccode\u003e\u003ca\u003eHeap\u003c/a\u003e\u003c/code\u003e is based on \u003cem\u003ebootstrapped skew binomial heaps\u003c/em\u003e\n as described by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e G. Brodal and C. Okasaki , \u003ca\u003e\"Optimal Purely Functional Priority Queues\"\u003c/a\u003e,\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 6:839-857 (1996)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll time bounds are worst-case.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Heap",
          "name": "Heap",
          "package": "heaps",
          "source": "src/Data-Heap.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient asymptotically optimal implementation of priority queues extended with support for efficient size and Foldable Note Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.Heap Heap import qualified Data.Heap as Heap The implementation of Heap is based on bootstrapped skew binomial heaps as described by Brodal and Okasaki Optimal Purely Functional Priority Queues Journal of Functional Programming All time bounds are worst-case",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "Heap",
          "package": "heaps",
          "partial": "Heap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexplicit priority/payload tuples\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "Entry",
          "package": "heaps",
          "source": "src/Data-Heap.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "explicit priority payload tuples",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "Entry",
          "package": "heaps",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA min-heap of values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "Heap",
          "package": "heaps",
          "source": "src/Data-Heap.html#Heap",
          "type": "data"
        },
        "index": {
          "description": "min-heap of values of type",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "Heap",
          "package": "heaps",
          "partial": "Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#t:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap",
          "name": "Entry",
          "package": "heaps",
          "signature": "Entry",
          "source": "src/Data-Heap.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "Entry",
          "package": "heaps",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a heap \u003ccode\u003exs\u003c/code\u003e returns a tuple where the first element is a heap consisting of the\n longest prefix the least elements of \u003ccode\u003exs\u003c/code\u003e that \u003cem\u003edo not satisfy\u003c/em\u003e p and the second element is the remainder of the elements in the heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebreak (\\x -\u003e x `mod` 4 == 0) (fromList [3,5,7,12,13,16])\n\u003c/code\u003e\u003c/strong\u003e(fromList [3,5,7],fromList [12,13,16])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "break",
          "package": "heaps",
          "signature": "(a -\u003e Bool) -\u003e Heap a -\u003e (Heap a, Heap a)",
          "source": "src/Data-Heap.html#break",
          "type": "function"
        },
        "index": {
          "description": "log break applied to predicate and heap xs returns tuple where the first element is heap consisting of the longest prefix the least elements of xs that do not satisfy and the second element is the remainder of the elements in the heap break mod fromList fromList fromList break is equivalent to span not",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eHeap a-\u003e(Heap a,Heap a)",
          "package": "heaps",
          "signature": "(a-\u003eBool)-\u003eHeap a-\u003e(Heap a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Construct heaps from each element in another heap, and union them together.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econcatMap (\\a -\u003e fromList [a,a+1]) (fromList [1,4])\n\u003c/code\u003e\u003c/strong\u003efromList [1,4,5,2]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "concatMap",
          "package": "heaps",
          "signature": "(a -\u003e Heap b) -\u003e Heap a -\u003e Heap b",
          "source": "src/Data-Heap.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Construct heaps from each element in another heap and union them together concatMap fromList fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "concatMap",
          "normalized": "(a-\u003eHeap b)-\u003eHeap a-\u003eHeap b",
          "package": "heaps",
          "partial": "Map",
          "signature": "(a-\u003eHeap b)-\u003eHeap a-\u003eHeap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete the minimum key from the heap and return the resulting heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edeleteMin (fromList [3,1,2])\n\u003c/code\u003e\u003c/strong\u003efromList [2,3]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "deleteMin",
          "package": "heaps",
          "signature": "Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the minimum key from the heap and return the resulting heap deleteMin fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "deleteMin",
          "normalized": "Heap a-\u003eHeap a",
          "package": "heaps",
          "partial": "Min",
          "signature": "Heap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Return a heap consisting of all members of given heap except for the \u003ccode\u003en\u003c/code\u003e least elements.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "drop",
          "package": "heaps",
          "signature": "Int -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#drop",
          "type": "function"
        },
        "index": {
          "description": "log Return heap consisting of all members of given heap except for the least elements",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "drop",
          "normalized": "Int-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "signature": "Int-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix of the heap remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edropWhile (\\x -\u003e x `mod` 4 == 0) (fromList [4,8,12,14,16])\n\u003c/code\u003e\u003c/strong\u003efromList [14,16]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "dropWhile",
          "package": "heaps",
          "signature": "(a -\u003e Bool) -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "log dropWhile xs returns the suffix of the heap remaining after takeWhile xs dropWhile mod fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty heap\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e []\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize empty\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "empty",
          "package": "heaps",
          "signature": "Heap a",
          "source": "src/Data-Heap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty heap empty fromList size empty",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "empty",
          "package": "heaps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter the heap, retaining only values that satisfy the predicate.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efilter (\u003e'a') (fromList \"ab\")\n\u003c/code\u003e\u003c/strong\u003efromList \"b\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efilter (\u003e'x') (fromList \"ab\")\n\u003c/code\u003e\u003c/strong\u003efromList []\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efilter (\u003c'a') (fromList \"ab\")\n\u003c/code\u003e\u003c/strong\u003efromList []\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "filter",
          "package": "heaps",
          "signature": "(a -\u003e Bool) -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter the heap retaining only values that satisfy the predicate filter fromList ab fromList filter fromList ab fromList filter fromList ab fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "signature": "(a-\u003eBool)-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a heap from a list of values.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "fromList",
          "package": "heaps",
          "signature": "[a] -\u003e Heap a",
          "source": "src/Data-Heap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build heap from list of values fromList toList id toList fromList sort",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "fromList",
          "normalized": "[a]-\u003eHeap a",
          "package": "heaps",
          "partial": "List",
          "signature": "[a]-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Group a heap into a heap of heaps, by unioning together duplicates.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroup (fromList \"hello\")\n\u003c/code\u003e\u003c/strong\u003efromList [fromList \"e\",fromList \"h\",fromList \"ll\",fromList \"o\"]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "group",
          "package": "heaps",
          "signature": "Heap a -\u003e Heap (Heap a)",
          "source": "src/Data-Heap.html#group",
          "type": "function"
        },
        "index": {
          "description": "log Group heap into heap of heaps by unioning together duplicates group fromList hello fromList fromList fromList fromList ll fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "group",
          "normalized": "Heap a-\u003eHeap(Heap a)",
          "package": "heaps",
          "signature": "Heap a-\u003eHeap(Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Group using a user supplied function.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "groupBy",
          "package": "heaps",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Heap a -\u003e Heap (Heap a)",
          "source": "src/Data-Heap.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "log Group using user supplied function",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eHeap a-\u003eHeap(Heap a)",
          "package": "heaps",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eHeap a-\u003eHeap(Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Insert a new value into the heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einsert 2 (fromList [1,3])\n\u003c/code\u003e\u003c/strong\u003efromList [1,2,3]\n\u003c/pre\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e x\n \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e x xs) &#8801; 1 + \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e xs\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "insert",
          "package": "heaps",
          "signature": "a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new value into the heap insert fromList fromList insert empty singleton size insert xs size xs",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "insert",
          "normalized": "a-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "signature": "a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n + m log m)\u003c/em\u003e. Intersect the values in two heaps, returning the value in the left heap that compares as equal\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "intersect",
          "package": "heaps",
          "signature": "Heap a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "log log Intersect the values in two heaps returning the value in the left heap that compares as equal",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "intersect",
          "normalized": "Heap a-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "signature": "Heap a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n + m log m)\u003c/em\u003e. Intersect the values in two heaps using a function to generate the elements in the right heap.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "intersectWith",
          "package": "heaps",
          "signature": "(a -\u003e a -\u003e b) -\u003e Heap a -\u003e Heap a -\u003e Heap b",
          "source": "src/Data-Heap.html#intersectWith",
          "type": "function"
        },
        "index": {
          "description": "log log Intersect the values in two heaps using function to generate the elements in the right heap",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "intersectWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003eHeap a-\u003eHeap a-\u003eHeap b",
          "package": "heaps",
          "partial": "With",
          "signature": "(a-\u003ea-\u003eb)-\u003eHeap a-\u003eHeap a-\u003eHeap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:intersectWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over the heap, returning a new heap ordered appropriately for its fresh contents\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap negate (fromList [3,1,2])\n\u003c/code\u003e\u003c/strong\u003efromList [-3,-1,-2]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "map",
          "package": "heaps",
          "signature": "(a -\u003e b) -\u003e Heap a -\u003e Heap b",
          "source": "src/Data-Heap.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over the heap returning new heap ordered appropriately for its fresh contents map negate fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eHeap a-\u003eHeap b",
          "package": "heaps",
          "signature": "(a-\u003eb)-\u003eHeap a-\u003eHeap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Traverse the elements of the heap in sorted order and produce a new heap using \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003eic side-effects.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "mapM",
          "package": "heaps",
          "signature": "(a -\u003e m b) -\u003e Heap a -\u003e m (Heap b)",
          "source": "src/Data-Heap.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "log Traverse the elements of the heap in sorted order and produce new heap using Monad ic side-effects",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eHeap a-\u003eb(Heap c)",
          "package": "heaps",
          "signature": "(a-\u003em b)-\u003eHeap a-\u003em(Heap b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a monotone increasing function over the heap.\n Provides a better constant factor for performance than \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but no checking is performed that the function provided is monotone increasing. Misuse of this function can cause a Heap to violate the heap property.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap (+1) (fromList [1,2,3])\n\u003c/code\u003e\u003c/strong\u003efromList [2,3,4]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap (*2) (fromList [1,2,3])\n\u003c/code\u003e\u003c/strong\u003efromList [2,4,6]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "mapMonotonic",
          "package": "heaps",
          "signature": "(a -\u003e b) -\u003e Heap a -\u003e Heap b",
          "source": "src/Data-Heap.html#mapMonotonic",
          "type": "function"
        },
        "index": {
          "description": "Map monotone increasing function over the heap Provides better constant factor for performance than map but no checking is performed that the function provided is monotone increasing Misuse of this function can cause Heap to violate the heap property map fromList fromList map fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "mapMonotonic",
          "normalized": "(a-\u003eb)-\u003eHeap a-\u003eHeap b",
          "package": "heaps",
          "partial": "Monotonic",
          "signature": "(a-\u003eb)-\u003eHeap a-\u003eHeap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:mapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Assumes the argument is a non-\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eminimum (fromList [3,1,2])\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "minimum",
          "package": "heaps",
          "signature": "Heap a -\u003e a",
          "source": "src/Data-Heap.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "Assumes the argument is non null heap minimum fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "minimum",
          "normalized": "Heap a-\u003ea",
          "package": "heaps",
          "signature": "Heap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Remove duplicate entries from the heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enub (fromList [1,1,2,6,6])\n\u003c/code\u003e\u003c/strong\u003efromList [1,2,6]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "nub",
          "package": "heaps",
          "signature": "Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#nub",
          "type": "function"
        },
        "index": {
          "description": "log Remove duplicate entries from the heap nub fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "nub",
          "normalized": "Heap a-\u003eHeap a",
          "package": "heaps",
          "signature": "Heap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the heap empty?\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull (singleton \"hello\")\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "null",
          "package": "heaps",
          "signature": "Heap a -\u003e Bool",
          "source": "src/Data-Heap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the heap empty null empty True null singleton hello False",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "null",
          "normalized": "Heap a-\u003eBool",
          "package": "heaps",
          "signature": "Heap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the heap according to a predicate. The first heap contains all elements that satisfy the predicate, the second all elements that fail the predicate. See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epartition (\u003e'a') (fromList \"ab\")\n\u003c/code\u003e\u003c/strong\u003e(fromList \"b\",fromList \"a\")\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "partition",
          "package": "heaps",
          "signature": "(a -\u003e Bool) -\u003e Heap a -\u003e (Heap a, Heap a)",
          "source": "src/Data-Heap.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Partition the heap according to predicate The first heap contains all elements that satisfy the predicate the second all elements that fail the predicate See also split partition fromList ab fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eHeap a-\u003e(Heap a,Heap a)",
          "package": "heaps",
          "signature": "(a-\u003eBool)-\u003eHeap a-\u003e(Heap a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap",
          "name": "payload",
          "package": "heaps",
          "signature": "a",
          "source": "src/Data-Heap.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "payload",
          "package": "heaps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:payload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap",
          "name": "priority",
          "package": "heaps",
          "signature": "p",
          "source": "src/Data-Heap.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "priority",
          "package": "heaps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Create a heap consisting of multiple copies of the same value.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereplicate 'a' 10\n\u003c/code\u003e\u003c/strong\u003efromList \"aaaaaaaaaa\"\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "replicate",
          "package": "heaps",
          "signature": "a -\u003e Int -\u003e Heap a",
          "source": "src/Data-Heap.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "log Create heap consisting of multiple copies of the same value replicate fromList aaaaaaaaaa",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "replicate",
          "normalized": "a-\u003eInt-\u003eHeap a",
          "package": "heaps",
          "signature": "a-\u003eInt-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A heap with a single element\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e x &#8801; \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e [x]\n \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e x &#8801; \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize (singleton \"hello\")\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "singleton",
          "package": "heaps",
          "signature": "a -\u003e Heap a",
          "source": "src/Data-Heap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "heap with single element singleton fromList singleton insert empty size singleton hello",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "singleton",
          "normalized": "a-\u003eHeap a",
          "package": "heaps",
          "signature": "a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize empty\n\u003c/code\u003e\u003c/strong\u003e0\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize (singleton \"hello\")\n\u003c/code\u003e\u003c/strong\u003e1\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize (fromList [4,1,2])\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "size",
          "package": "heaps",
          "signature": "Heap a -\u003e Int",
          "source": "src/Data-Heap.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the heap size empty size singleton hello size fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "size",
          "normalized": "Heap a-\u003eInt",
          "package": "heaps",
          "signature": "Heap a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Perform a heap sort\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "sort",
          "package": "heaps",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-Heap.html#sort",
          "type": "function"
        },
        "index": {
          "description": "log Perform heap sort",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "heaps",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a heap \u003ccode\u003exs\u003c/code\u003e returns a tuple where the first element is a heap consisting of the\n longest prefix the least elements of xs that satisfy \u003ccode\u003ep\u003c/code\u003e and the second element is the remainder of the elements in the heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003espan (\\x -\u003e x `mod` 4 == 0) (fromList [4,8,12,14,16])\n\u003c/code\u003e\u003c/strong\u003e(fromList [4,8,12],fromList [14,16])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, 'dropWhile p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "span",
          "package": "heaps",
          "signature": "(a -\u003e Bool) -\u003e Heap a -\u003e (Heap a, Heap a)",
          "source": "src/Data-Heap.html#span",
          "type": "function"
        },
        "index": {
          "description": "log span applied to predicate and heap xs returns tuple where the first element is heap consisting of the longest prefix the least elements of xs that satisfy and the second element is the remainder of the elements in the heap span mod fromList fromList fromList span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eHeap a-\u003e(Heap a,Heap a)",
          "package": "heaps",
          "signature": "(a-\u003eBool)-\u003eHeap a-\u003e(Heap a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the heap into heaps of the elements that are less than, equal to, and greater than a given value.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 'h' (fromList \"hello\")\n\u003c/code\u003e\u003c/strong\u003e(fromList \"e\",fromList \"h\",fromList \"llo\")\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "split",
          "package": "heaps",
          "signature": "a -\u003e Heap a -\u003e (Heap a, Heap a, Heap a)",
          "source": "src/Data-Heap.html#split",
          "type": "function"
        },
        "index": {
          "description": "Partition the heap into heaps of the elements that are less than equal to and greater than given value split fromList hello fromList fromList fromList llo",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "split",
          "normalized": "a-\u003eHeap a-\u003e(Heap a,Heap a,Heap a)",
          "package": "heaps",
          "signature": "a-\u003eHeap a-\u003e(Heap a,Heap a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Split a heap into two heaps, the first containing the \u003ccode\u003en\u003c/code\u003e least elements, the latter consisting of all members of the heap except for those elements.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "splitAt",
          "package": "heaps",
          "signature": "Int -\u003e Heap a -\u003e (Heap a, Heap a)",
          "source": "src/Data-Heap.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "log Split heap into two heaps the first containing the least elements the latter consisting of all members of the heap except for those elements",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "splitAt",
          "normalized": "Int-\u003eHeap a-\u003e(Heap a,Heap a)",
          "package": "heaps",
          "partial": "At",
          "signature": "Int-\u003eHeap a-\u003e(Heap a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Return a heap consisting of the least \u003ccode\u003en\u003c/code\u003e elements of a given heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 3 (fromList [10,2,4,1,9,8,2])\n\u003c/code\u003e\u003c/strong\u003efromList [1,2,2]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "take",
          "package": "heaps",
          "signature": "Int -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#take",
          "type": "function"
        },
        "index": {
          "description": "log Return heap consisting of the least elements of given heap take fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "take",
          "normalized": "Int-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "signature": "Int-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a heap \u003ccode\u003exs\u003c/code\u003e returns a heap consisting of the\n longest prefix the least elements of \u003ccode\u003exs\u003c/code\u003e that satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etakeWhile (\\x -\u003e x `mod` 4 == 0) (fromList [4,8,12,14,16])\n\u003c/code\u003e\u003c/strong\u003efromList [4,8,12]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "takeWhile",
          "package": "heaps",
          "signature": "(a -\u003e Bool) -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "log takeWhile applied to predicate and heap xs returns heap consisting of the longest prefix the least elements of xs that satisfy takeWhile mod fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Returns the elements in the heap in some arbitrary, very likely unsorted, order.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoUnsortedList (fromList [3,1,2])\n\u003c/code\u003e\u003c/strong\u003e[1,3,2]\n\u003c/pre\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etoUnsortedList\u003c/a\u003e\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "toUnsortedList",
          "package": "heaps",
          "signature": "Heap a -\u003e [a]",
          "source": "src/Data-Heap.html#toUnsortedList",
          "type": "function"
        },
        "index": {
          "description": "Returns the elements in the heap in some arbitrary very likely unsorted order toUnsortedList fromList fromList toUnsortedList id",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "toUnsortedList",
          "normalized": "Heap a-\u003e[a]",
          "package": "heaps",
          "partial": "Unsorted List",
          "signature": "Heap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:toUnsortedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Traverse the elements of the heap in sorted order and produce a new heap using \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e side-effects.\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "traverse",
          "package": "heaps",
          "signature": "(a -\u003e t b) -\u003e Heap a -\u003e t (Heap b)",
          "source": "src/Data-Heap.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "log Traverse the elements of the heap in sorted order and produce new heap using Applicative side-effects",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003eHeap a-\u003eb(Heap c)",
          "package": "heaps",
          "signature": "(a-\u003et b)-\u003eHeap a-\u003et(Heap b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides both \u003cem\u003eO(1)\u003c/em\u003e access to the minimum element and \u003cem\u003eO(log n)\u003c/em\u003e access to the remainder of the heap.\n This is the same operation as \u003ccode\u003e\u003ca\u003eviewMin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euncons (fromList [2,1,3])\n\u003c/code\u003e\u003c/strong\u003eJust (1,fromList [2,3])\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "uncons",
          "package": "heaps",
          "signature": "Heap a -\u003e Maybe (a, Heap a)",
          "source": "src/Data-Heap.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Provides both access to the minimum element and log access to the remainder of the heap This is the same operation as viewMin uncons fromList Just fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "uncons",
          "normalized": "Heap a-\u003eMaybe(a,Heap a)",
          "package": "heaps",
          "signature": "Heap a-\u003eMaybe(a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Meld the values from two heaps into one heap.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [1,3,5]) (fromList [6,4,2])\n\u003c/code\u003e\u003c/strong\u003efromList [1,2,6,4,3,5]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunion (fromList [1,1,1]) (fromList [1,2,1])\n\u003c/code\u003e\u003c/strong\u003efromList [1,1,1,2,1,1]\n\u003c/pre\u003e",
          "module": "Data.Heap",
          "name": "union",
          "package": "heaps",
          "signature": "Heap a -\u003e Heap a -\u003e Heap a",
          "source": "src/Data-Heap.html#union",
          "type": "function"
        },
        "index": {
          "description": "Meld the values from two heaps into one heap union fromList fromList fromList union fromList fromList fromList",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "union",
          "normalized": "Heap a-\u003eHeap a-\u003eHeap a",
          "package": "heaps",
          "signature": "Heap a-\u003eHeap a-\u003eHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Heap",
          "name": "viewMin",
          "package": "heaps",
          "signature": "Heap a -\u003e Maybe (a, Heap a)",
          "source": "src/Data-Heap.html#viewMin",
          "type": "function"
        },
        "index": {
          "description": "Same as uncons",
          "hierarchy": "Data Heap",
          "module": "Data.Heap",
          "name": "viewMin",
          "normalized": "Heap a-\u003eMaybe(a,Heap a)",
          "package": "heaps",
          "partial": "Min",
          "signature": "Heap a-\u003eMaybe(a,Heap a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/heaps/docs/Data-Heap.html#v:viewMin"
      }
    }
  ]
]