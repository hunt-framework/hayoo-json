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
        "word": "TreeStructures"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eData.Heap.Binary\u003c/code\u003e provides a binary min-heap. Balance is maintained through descendant counting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Heap.Binary",
          "name": "Binary",
          "package": "TreeStructures",
          "source": "src/Data-Heap-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Data.Heap.Binary provides binary min-heap Balance is maintained through descendant counting",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "Binary",
          "package": "TreeStructures",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binary",
          "name": "BinaryHeap",
          "package": "TreeStructures",
          "source": "src/Data-Heap-Binary.html#BinaryHeap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "BinaryHeap",
          "package": "TreeStructures",
          "partial": "Binary Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#t:BinaryHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e produces an empty heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "empty",
          "package": "TreeStructures",
          "signature": "BinaryHeap a",
          "source": "src/Data-Heap-Binary.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty produces an empty heap",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "empty",
          "package": "TreeStructures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e constructs a binary heap from an unsorted list.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "fromList",
          "package": "TreeStructures",
          "signature": "[a] -\u003e BinaryHeap a",
          "source": "src/Data-Heap-Binary.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "fromList constructs binary heap from an unsorted list",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "fromList",
          "normalized": "[a]-\u003eBinaryHeap a",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "[a]-\u003eBinaryHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e returns the element root of the heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "head",
          "package": "TreeStructures",
          "signature": "BinaryHeap a -\u003e a",
          "source": "src/Data-Heap-Binary.html#head",
          "type": "function"
        },
        "index": {
          "description": "head returns the element root of the heap",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "head",
          "normalized": "BinaryHeap a-\u003ea",
          "package": "TreeStructures",
          "signature": "BinaryHeap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "insert",
          "package": "TreeStructures",
          "signature": "a -\u003e BinaryHeap a -\u003e BinaryHeap a",
          "source": "src/Data-Heap-Binary.html#insert",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "insert",
          "normalized": "a-\u003eBinaryHeap a-\u003eBinaryHeap a",
          "package": "TreeStructures",
          "signature": "a-\u003eBinaryHeap a-\u003eBinaryHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e consumes two binary heaps and merges them.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "merge",
          "package": "TreeStructures",
          "signature": "BinaryHeap a -\u003e BinaryHeap a -\u003e BinaryHeap a",
          "source": "src/Data-Heap-Binary.html#merge",
          "type": "function"
        },
        "index": {
          "description": "merge consumes two binary heaps and merges them",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "merge",
          "normalized": "BinaryHeap a-\u003eBinaryHeap a-\u003eBinaryHeap a",
          "package": "TreeStructures",
          "signature": "BinaryHeap a-\u003eBinaryHeap a-\u003eBinaryHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "null",
          "package": "TreeStructures",
          "signature": "BinaryHeap a -\u003e Bool",
          "source": "src/Data-Heap-Binary.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "null",
          "normalized": "BinaryHeap a-\u003eBool",
          "package": "TreeStructures",
          "signature": "BinaryHeap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e consumes an element and constructs a singleton heap.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "singleton",
          "package": "TreeStructures",
          "signature": "a -\u003e BinaryHeap a",
          "source": "src/Data-Heap-Binary.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton consumes an element and constructs singleton heap",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "singleton",
          "normalized": "a-\u003eBinaryHeap a",
          "package": "TreeStructures",
          "signature": "a-\u003eBinaryHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e discards the root of the heap and merges the subtrees.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "tail",
          "package": "TreeStructures",
          "signature": "BinaryHeap a -\u003e BinaryHeap a",
          "source": "src/Data-Heap-Binary.html#tail",
          "type": "function"
        },
        "index": {
          "description": "lg tail discards the root of the heap and merges the subtrees",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "tail",
          "normalized": "BinaryHeap a-\u003eBinaryHeap a",
          "package": "TreeStructures",
          "signature": "BinaryHeap a-\u003eBinaryHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap.Binary",
          "name": "toList",
          "package": "TreeStructures",
          "signature": "BinaryHeap a -\u003e [a]",
          "source": "src/Data-Heap-Binary.html#toList",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binary",
          "module": "Data.Heap.Binary",
          "name": "toList",
          "normalized": "BinaryHeap a-\u003e[a]",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "BinaryHeap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binary.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binomial",
          "name": "Binomial",
          "package": "TreeStructures",
          "source": "src/Data-Heap-Binomial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "Binomial",
          "package": "TreeStructures",
          "partial": "Binomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binomial",
          "name": "BinomialHeap",
          "package": "TreeStructures",
          "source": "src/Data-Heap-Binomial.html#BinomialHeap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "BinomialHeap",
          "package": "TreeStructures",
          "partial": "Binomial Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#t:BinomialHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binomial",
          "name": "empty",
          "package": "TreeStructures",
          "signature": "BinomialHeap a",
          "source": "src/Data-Heap-Binomial.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "empty",
          "package": "TreeStructures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "fromList",
          "package": "TreeStructures",
          "signature": "[a] -\u003e BinomialHeap a",
          "source": "src/Data-Heap-Binomial.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "fromList",
          "normalized": "[a]-\u003eBinomialHeap a",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "[a]-\u003eBinomialHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "head",
          "package": "TreeStructures",
          "signature": "BinomialHeap a -\u003e a",
          "source": "src/Data-Heap-Binomial.html#head",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "head",
          "normalized": "BinomialHeap a-\u003ea",
          "package": "TreeStructures",
          "signature": "BinomialHeap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "insert",
          "package": "TreeStructures",
          "signature": "a -\u003e BinomialHeap a -\u003e BinomialHeap a",
          "source": "src/Data-Heap-Binomial.html#insert",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "insert",
          "normalized": "a-\u003eBinomialHeap a-\u003eBinomialHeap a",
          "package": "TreeStructures",
          "signature": "a-\u003eBinomialHeap a-\u003eBinomialHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "merge",
          "package": "TreeStructures",
          "signature": "BinomialHeap a -\u003e BinomialHeap a -\u003e BinomialHeap a",
          "source": "src/Data-Heap-Binomial.html#merge",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "merge",
          "normalized": "BinomialHeap a-\u003eBinomialHeap a-\u003eBinomialHeap a",
          "package": "TreeStructures",
          "signature": "BinomialHeap a-\u003eBinomialHeap a-\u003eBinomialHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Binomial",
          "name": "null",
          "package": "TreeStructures",
          "signature": "BinomialHeap a -\u003e Bool",
          "source": "src/Data-Heap-Binomial.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "null",
          "normalized": "BinomialHeap a-\u003eBool",
          "package": "TreeStructures",
          "signature": "BinomialHeap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "singleton",
          "package": "TreeStructures",
          "signature": "a -\u003e BinomialHeap a",
          "source": "src/Data-Heap-Binomial.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "singleton",
          "normalized": "a-\u003eBinomialHeap a",
          "package": "TreeStructures",
          "signature": "a-\u003eBinomialHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "tail",
          "package": "TreeStructures",
          "signature": "BinomialHeap a -\u003e BinomialHeap a",
          "source": "src/Data-Heap-Binomial.html#tail",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "tail",
          "normalized": "BinomialHeap a-\u003eBinomialHeap a",
          "package": "TreeStructures",
          "signature": "BinomialHeap a-\u003eBinomialHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Heap.Binomial",
          "name": "toList",
          "package": "TreeStructures",
          "signature": "BinomialHeap a -\u003e [a]",
          "source": "src/Data-Heap-Binomial.html#toList",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Heap Binomial",
          "module": "Data.Heap.Binomial",
          "name": "toList",
          "normalized": "BinomialHeap a-\u003e[a]",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "BinomialHeap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Binomial.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "Skew",
          "package": "TreeStructures",
          "source": "src/Data-Heap-Skew.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "Skew",
          "package": "TreeStructures",
          "partial": "Skew",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "SkewHeap",
          "package": "TreeStructures",
          "source": "src/Data-Heap-Skew.html#SkewHeap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "SkewHeap",
          "package": "TreeStructures",
          "partial": "Skew Heap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#t:SkewHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "empty",
          "package": "TreeStructures",
          "signature": "SkewHeap a",
          "source": "src/Data-Heap-Skew.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "empty",
          "package": "TreeStructures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "fromList",
          "package": "TreeStructures",
          "signature": "[a] -\u003e SkewHeap a",
          "source": "src/Data-Heap-Skew.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "fromList",
          "normalized": "[a]-\u003eSkewHeap a",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "[a]-\u003eSkewHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "head",
          "package": "TreeStructures",
          "signature": "SkewHeap a -\u003e a",
          "source": "src/Data-Heap-Skew.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "head",
          "normalized": "SkewHeap a-\u003ea",
          "package": "TreeStructures",
          "signature": "SkewHeap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "insert",
          "package": "TreeStructures",
          "signature": "a -\u003e SkewHeap a -\u003e SkewHeap a",
          "source": "src/Data-Heap-Skew.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "insert",
          "normalized": "a-\u003eSkewHeap a-\u003eSkewHeap a",
          "package": "TreeStructures",
          "signature": "a-\u003eSkewHeap a-\u003eSkewHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "merge",
          "package": "TreeStructures",
          "signature": "SkewHeap a -\u003e SkewHeap a -\u003e SkewHeap a",
          "source": "src/Data-Heap-Skew.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "merge",
          "normalized": "SkewHeap a-\u003eSkewHeap a-\u003eSkewHeap a",
          "package": "TreeStructures",
          "signature": "SkewHeap a-\u003eSkewHeap a-\u003eSkewHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "null",
          "package": "TreeStructures",
          "signature": "SkewHeap a -\u003e Bool",
          "source": "src/Data-Heap-Skew.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "null",
          "normalized": "SkewHeap a-\u003eBool",
          "package": "TreeStructures",
          "signature": "SkewHeap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "singleton",
          "package": "TreeStructures",
          "signature": "a -\u003e SkewHeap a",
          "source": "src/Data-Heap-Skew.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "singleton",
          "normalized": "a-\u003eSkewHeap a",
          "package": "TreeStructures",
          "signature": "a-\u003eSkewHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "tail",
          "package": "TreeStructures",
          "signature": "SkewHeap a -\u003e SkewHeap a",
          "source": "src/Data-Heap-Skew.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "tail",
          "normalized": "SkewHeap a-\u003eSkewHeap a",
          "package": "TreeStructures",
          "signature": "SkewHeap a-\u003eSkewHeap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Heap.Skew",
          "name": "toList",
          "package": "TreeStructures",
          "signature": "SkewHeap a -\u003e [a]",
          "source": "src/Data-Heap-Skew.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Heap Skew",
          "module": "Data.Heap.Skew",
          "name": "toList",
          "normalized": "SkewHeap a-\u003e[a]",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "SkewHeap a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Heap-Skew.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL",
          "name": "AVL",
          "package": "TreeStructures",
          "source": "src/Data-Tree-AVL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "AVL",
          "package": "TreeStructures",
          "partial": "AVL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL",
          "name": "AVLTree",
          "package": "TreeStructures",
          "source": "src/Data-Tree-AVL.html#AVLTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "AVLTree",
          "package": "TreeStructures",
          "partial": "AVLTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#t:AVLTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.AVL",
          "name": "(!!)",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e Int -\u003e (k, v)",
          "source": "src/Data-Tree-AVL.html#%21%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "(!!) !!",
          "normalized": "AVLTree a b-\u003eInt-\u003e(a,b)",
          "package": "TreeStructures",
          "signature": "AVLTree k v-\u003eInt-\u003e(k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "delete",
          "package": "TreeStructures",
          "signature": "k -\u003e AVLTree k v -\u003e AVLTree k v",
          "source": "src/Data-Tree-AVL.html#delete",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "delete",
          "normalized": "a-\u003eAVLTree a b-\u003eAVLTree a b",
          "package": "TreeStructures",
          "signature": "k-\u003eAVLTree k v-\u003eAVLTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e produces an empty tree\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "empty",
          "package": "TreeStructures",
          "signature": "AVLTree k v",
          "source": "src/Data-Tree-AVL.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty produces an empty tree",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "empty",
          "package": "TreeStructures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "fromAscList",
          "package": "TreeStructures",
          "signature": "[(k, v)] -\u003e AVLTree k v",
          "source": "src/Data-Tree-AVL.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "fromAscList",
          "normalized": "[(a,b)]-\u003eAVLTree a b",
          "package": "TreeStructures",
          "partial": "Asc List",
          "signature": "[(k,v)]-\u003eAVLTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "fromList",
          "package": "TreeStructures",
          "signature": "[(k, v)] -\u003e AVLTree k v",
          "source": "src/Data-Tree-AVL.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eAVLTree a b",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "[(k,v)]-\u003eAVLTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e returns the head of a tree.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "head",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e v",
          "source": "src/Data-Tree-AVL.html#head",
          "type": "function"
        },
        "index": {
          "description": "head returns the head of tree",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "head",
          "normalized": "AVLTree a b-\u003eb",
          "package": "TreeStructures",
          "signature": "AVLTree k v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "insert",
          "package": "TreeStructures",
          "signature": "k -\u003e v -\u003e AVLTree k v -\u003e AVLTree k v",
          "source": "src/Data-Tree-AVL.html#insert",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eAVLTree a b-\u003eAVLTree a b",
          "package": "TreeStructures",
          "signature": "k-\u003ev-\u003eAVLTree k v-\u003eAVLTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "lookup",
          "package": "TreeStructures",
          "signature": "k -\u003e AVLTree k v -\u003e Maybe v",
          "source": "src/Data-Tree-AVL.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "lookup",
          "normalized": "a-\u003eAVLTree a b-\u003eMaybe b",
          "package": "TreeStructures",
          "signature": "k-\u003eAVLTree k v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e returns True if a tree is empty, otherwise False.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "null",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e Bool",
          "source": "src/Data-Tree-AVL.html#null",
          "type": "function"
        },
        "index": {
          "description": "null returns True if tree is empty otherwise False",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "null",
          "normalized": "AVLTree a b-\u003eBool",
          "package": "TreeStructures",
          "signature": "AVLTree k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e constructs a singleton AVL tree\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "singleton",
          "package": "TreeStructures",
          "signature": "k -\u003e v -\u003e AVLTree k v",
          "source": "src/Data-Tree-AVL.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton constructs singleton AVL tree",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eAVLTree a b",
          "package": "TreeStructures",
          "signature": "k-\u003ev-\u003eAVLTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e reports the number of children in a tree\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "size",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e Int",
          "source": "src/Data-Tree-AVL.html#size",
          "type": "function"
        },
        "index": {
          "description": "size reports the number of children in tree",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "size",
          "normalized": "AVLTree a b-\u003eInt",
          "package": "TreeStructures",
          "signature": "AVLTree k v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(lg n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e discards the head of the tree and returns a tree.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "tail",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e AVLTree k v",
          "source": "src/Data-Tree-AVL.html#tail",
          "type": "function"
        },
        "index": {
          "description": "lg tail discards the head of the tree and returns tree",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "tail",
          "normalized": "AVLTree a b-\u003eAVLTree a b",
          "package": "TreeStructures",
          "signature": "AVLTree k v-\u003eAVLTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "toAscList",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e [(k, v)]",
          "source": "src/Data-Tree-AVL.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "toAscList",
          "normalized": "AVLTree a b-\u003e[(a,b)]",
          "package": "TreeStructures",
          "partial": "Asc List",
          "signature": "AVLTree k v-\u003e[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Tree.AVL",
          "name": "toList",
          "package": "TreeStructures",
          "signature": "AVLTree k v -\u003e [(k, v)]",
          "source": "src/Data-Tree-AVL.html#toList",
          "type": "function"
        },
        "index": {
          "description": "lg",
          "hierarchy": "Data Tree AVL",
          "module": "Data.Tree.AVL",
          "name": "toList",
          "normalized": "AVLTree a b-\u003e[(a,b)]",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "AVLTree k v-\u003e[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-AVL.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Splay",
          "name": "Splay",
          "package": "TreeStructures",
          "source": "src/Data-Tree-Splay.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "Splay",
          "package": "TreeStructures",
          "partial": "Splay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Splay",
          "name": "SplayTree",
          "package": "TreeStructures",
          "source": "src/Data-Tree-Splay.html#SplayTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "SplayTree",
          "package": "TreeStructures",
          "partial": "Splay Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#t:SplayTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocates the i^{th} element in BST order without splaying it.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "(!!)",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e Int -\u003e (k, v)",
          "source": "src/Data-Tree-Splay.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "Locates the th element in BST order without splaying it",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "(!!) !!",
          "normalized": "SplayTree a b-\u003eInt-\u003e(a,b)",
          "package": "TreeStructures",
          "signature": "SplayTree k v-\u003eInt-\u003e(k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Splay",
          "name": "delete",
          "package": "TreeStructures",
          "signature": "k -\u003e SplayTree k v -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "delete",
          "normalized": "a-\u003eSplayTree a b-\u003eSplayTree a b",
          "package": "TreeStructures",
          "signature": "k-\u003eSplayTree k v-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e constructs an empty splay tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "empty",
          "package": "TreeStructures",
          "signature": "SplayTree k v",
          "source": "src/Data-Tree-Splay.html#empty",
          "type": "function"
        },
        "index": {
          "description": "empty constructs an empty splay tree",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "empty",
          "package": "TreeStructures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e. Constructs a splay tree from a list of key-value pairs sorted in ascending order.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "fromAscList",
          "package": "TreeStructures",
          "signature": "[(k, v)] -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "lg Constructs splay tree from list of key-value pairs sorted in ascending order",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "fromAscList",
          "normalized": "[(a,b)]-\u003eSplayTree a b",
          "package": "TreeStructures",
          "partial": "Asc List",
          "signature": "[(k,v)]-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e. Constructs a splay tree from an unsorted list of key-value pairs.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "fromList",
          "package": "TreeStructures",
          "signature": "[(k, v)] -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "lg Constructs splay tree from an unsorted list of key-value pairs",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eSplayTree a b",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "[(k,v)]-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e returns the key-value pair of the root.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "head",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e (k, v)",
          "source": "src/Data-Tree-Splay.html#head",
          "type": "function"
        },
        "index": {
          "description": "head returns the key-value pair of the root",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "head",
          "normalized": "SplayTree a b-\u003e(a,b)",
          "package": "TreeStructures",
          "signature": "SplayTree k v-\u003e(k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eAmortized O(lg n)\u003c/em\u003e. Given a splay tree and a key-value pair, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e places the the pair into the tree in BST order. This function is unsatisfying.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "insert",
          "package": "TreeStructures",
          "signature": "k -\u003e v -\u003e SplayTree k v -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Amortized lg Given splay tree and key-value pair insert places the the pair into the tree in BST order This function is unsatisfying",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eSplayTree a b-\u003eSplayTree a b",
          "package": "TreeStructures",
          "signature": "k-\u003ev-\u003eSplayTree k v-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eAmortized O(lg n)\u003c/em\u003e. Given a splay tree and a key, \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e attempts to find a node with the specified key and splays this node to the root. If the key is not found, the nearest node is brought to the root of the tree.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "lookup",
          "package": "TreeStructures",
          "signature": "k -\u003e SplayTree k v -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Amortized lg Given splay tree and key lookup attempts to find node with the specified key and splays this node to the root If the key is not found the nearest node is brought to the root of the tree",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "lookup",
          "normalized": "a-\u003eSplayTree a b-\u003eSplayTree a b",
          "package": "TreeStructures",
          "signature": "k-\u003eSplayTree k v-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e returns true if a splay tree is empty.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "null",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e Bool",
          "source": "src/Data-Tree-Splay.html#null",
          "type": "function"
        },
        "index": {
          "description": "null returns true if splay tree is empty",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "null",
          "normalized": "SplayTree a b-\u003eBool",
          "package": "TreeStructures",
          "signature": "SplayTree k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e constructs a splay tree containing one element.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "singleton",
          "package": "TreeStructures",
          "signature": "(k, v) -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton constructs splay tree containing one element",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "singleton",
          "normalized": "(a,b)-\u003eSplayTree a b",
          "package": "TreeStructures",
          "signature": "(k,v)-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tree.Splay",
          "name": "size",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e Int",
          "source": "src/Data-Tree-Splay.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "size",
          "normalized": "SplayTree a b-\u003eInt",
          "package": "TreeStructures",
          "signature": "SplayTree k v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplays the i^{th} element in BST order\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "splay",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e Int -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#splay",
          "type": "function"
        },
        "index": {
          "description": "Splays the th element in BST order",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "splay",
          "normalized": "SplayTree a b-\u003eInt-\u003eSplayTree a b",
          "package": "TreeStructures",
          "signature": "SplayTree k v-\u003eInt-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:splay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eAmortized O(lg n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e removes the root of the tree and merges its subtrees\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "tail",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e SplayTree k v",
          "source": "src/Data-Tree-Splay.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Amortized lg tail removes the root of the tree and merges its subtrees",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "tail",
          "normalized": "SplayTree a b-\u003eSplayTree a b",
          "package": "TreeStructures",
          "signature": "SplayTree k v-\u003eSplayTree k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e converts a splay tree to a list of key-value pairs sorted in ascending order.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "toAscList",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e [(k, v)]",
          "source": "src/Data-Tree-Splay.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "lg toAscList converts splay tree to list of key-value pairs sorted in ascending order",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "toAscList",
          "normalized": "SplayTree a b-\u003e[(a,b)]",
          "package": "TreeStructures",
          "partial": "Asc List",
          "signature": "SplayTree k v-\u003e[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e. Converts a splay tree into a list of key-value pairs with no constraint on ordering.\n\u003c/p\u003e",
          "module": "Data.Tree.Splay",
          "name": "toList",
          "package": "TreeStructures",
          "signature": "SplayTree k v -\u003e [(k, v)]",
          "source": "src/Data-Tree-Splay.html#toList",
          "type": "function"
        },
        "index": {
          "description": "lg Converts splay tree into list of key-value pairs with no constraint on ordering",
          "hierarchy": "Data Tree Splay",
          "module": "Data.Tree.Splay",
          "name": "toList",
          "normalized": "SplayTree a b-\u003e[(a,b)]",
          "package": "TreeStructures",
          "partial": "List",
          "signature": "SplayTree k v-\u003e[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TreeStructures/docs/Data-Tree-Splay.html#v:toList"
      }
    }
  ]
]