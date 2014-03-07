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
        "word": "streams"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnticausal streams implemented as non-empty skew binary random access lists\n\u003c/p\u003e\u003cp\u003eThe Applicative zips streams, but since these are potentially infinite\n this is stricter than would be desired. You almost always want\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "Skew",
          "package": "streams",
          "source": "src/Data-Stream-Future-Skew.html",
          "type": "module"
        },
        "index": {
          "description": "Anticausal streams implemented as non-empty skew binary random access lists The Applicative zips streams but since these are potentially infinite this is stricter than would be desired You almost always want",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "Skew",
          "package": "streams",
          "partial": "Skew",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "Future",
          "package": "streams",
          "source": "src/Data-Stream-Future-Skew.html#Future",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "Future",
          "package": "streams",
          "partial": "Future",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#t:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e cons\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "(\u003c|)",
          "package": "streams",
          "signature": "a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "cons",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": ":\u003c",
          "package": "streams",
          "signature": "(Complete a) :\u003c (Future a)",
          "source": "src/Data-Stream-Future-Skew.html#Future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": ":\u003c",
          "package": "streams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "Last",
          "package": "streams",
          "signature": "Last !(Complete a)",
          "source": "src/Data-Stream-Future-Skew.html#Future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "Last",
          "package": "streams",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "adjust",
          "package": "streams",
          "signature": "Int -\u003e (a -\u003e a) -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "adjust",
          "normalized": "Int-\u003e(a-\u003ea)-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "Int-\u003e(a-\u003ea)-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "break",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Future a -\u003e ([a], Maybe (Future a))",
          "source": "src/Data-Stream-Future-Skew.html#break",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "cons",
          "package": "streams",
          "signature": "a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "cons",
          "normalized": "a-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "drop",
          "package": "streams",
          "signature": "Int -\u003e Future a -\u003e Maybe (Future a)",
          "source": "src/Data-Stream-Future-Skew.html#drop",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "drop",
          "normalized": "Int-\u003eFuture a-\u003eMaybe(Future a)",
          "package": "streams",
          "signature": "Int-\u003eFuture a-\u003eMaybe(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "dropWhile",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Future a -\u003e Maybe (Future a)",
          "source": "src/Data-Stream-Future-Skew.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eFuture a-\u003eMaybe(Future a)",
          "package": "streams",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eFuture a-\u003eMaybe(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "from",
          "package": "streams",
          "signature": "a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#from",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "from",
          "normalized": "a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "fromList",
          "package": "streams",
          "signature": "[a] -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "fromList",
          "normalized": "[a]-\u003eFuture a",
          "package": "streams",
          "partial": "List",
          "signature": "[a]-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "head",
          "package": "streams",
          "signature": "Future a -\u003e a",
          "source": "src/Data-Stream-Future-Skew.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "head",
          "normalized": "Future a-\u003ea",
          "package": "streams",
          "signature": "Future a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "index",
          "package": "streams",
          "signature": "Int -\u003e Future a -\u003e a",
          "source": "src/Data-Stream-Future-Skew.html#index",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "index",
          "normalized": "Int-\u003eFuture a-\u003ea",
          "package": "streams",
          "signature": "Int-\u003eFuture a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "indexed",
          "package": "streams",
          "signature": "Future a -\u003e Future (Int, a)",
          "source": "src/Data-Stream-Future-Skew.html#indexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "indexed",
          "normalized": "Future a-\u003eFuture(Int,a)",
          "package": "streams",
          "signature": "Future a-\u003eFuture(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "insert",
          "package": "streams",
          "signature": "a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "insert",
          "normalized": "a-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "insertBy",
          "package": "streams",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "last",
          "package": "streams",
          "signature": "Future a -\u003e a",
          "source": "src/Data-Stream-Future-Skew.html#last",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "last",
          "normalized": "Future a-\u003ea",
          "package": "streams",
          "signature": "Future a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "length",
          "package": "streams",
          "signature": "Future a -\u003e Int",
          "source": "src/Data-Stream-Future-Skew.html#length",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "length",
          "normalized": "Future a-\u003eInt",
          "package": "streams",
          "signature": "Future a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "repeat",
          "package": "streams",
          "signature": "a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "repeat",
          "normalized": "a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "replicate",
          "package": "streams",
          "signature": "Int -\u003e a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eFuture a",
          "package": "streams",
          "signature": "Int-\u003ea-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "span",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Future a -\u003e ([a], Maybe (Future a))",
          "source": "src/Data-Stream-Future-Skew.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "split",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Future a -\u003e ([a], Maybe (Future a))",
          "source": "src/Data-Stream-Future-Skew.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "split",
          "normalized": "(a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "splitW",
          "package": "streams",
          "signature": "(Future a -\u003e Bool) -\u003e Future a -\u003e ([a], Maybe (Future a))",
          "source": "src/Data-Stream-Future-Skew.html#splitW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "splitW",
          "normalized": "(Future a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "package": "streams",
          "signature": "(Future a-\u003eBool)-\u003eFuture a-\u003e([a],Maybe(Future a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:splitW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "tail",
          "package": "streams",
          "signature": "Future a -\u003e Maybe (Future a)",
          "source": "src/Data-Stream-Future-Skew.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "tail",
          "normalized": "Future a-\u003eMaybe(Future a)",
          "package": "streams",
          "signature": "Future a-\u003eMaybe(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "tails",
          "package": "streams",
          "signature": "Future a -\u003e Future (Future a)",
          "source": "src/Data-Stream-Future-Skew.html#tails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "tails",
          "normalized": "Future a-\u003eFuture(Future a)",
          "package": "streams",
          "signature": "Future a-\u003eFuture(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "toFuture",
          "package": "streams",
          "signature": "[a] -\u003e Maybe (Future a)",
          "source": "src/Data-Stream-Future-Skew.html#toFuture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "toFuture",
          "normalized": "[a]-\u003eMaybe(Future a)",
          "package": "streams",
          "partial": "Future",
          "signature": "[a]-\u003eMaybe(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:toFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Future.Skew",
          "name": "uncons",
          "package": "streams",
          "signature": "Future a -\u003e (a, Maybe (Future a))",
          "source": "src/Data-Stream-Future-Skew.html#uncons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "uncons",
          "normalized": "Future a-\u003e(a,Maybe(Future a))",
          "package": "streams",
          "signature": "Future a-\u003e(a,Maybe(Future a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future.Skew",
          "name": "update",
          "package": "streams",
          "signature": "Int -\u003e a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future-Skew.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future Skew",
          "module": "Data.Stream.Future.Skew",
          "name": "update",
          "normalized": "Int-\u003ea-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "Int-\u003ea-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future-Skew.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "Future",
          "package": "streams",
          "source": "src/Data-Stream-Future.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "Future",
          "package": "streams",
          "partial": "Future",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "Future",
          "package": "streams",
          "source": "src/Data-Stream-Future.html#Future",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "Future",
          "package": "streams",
          "partial": "Future",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#t:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "(\u003c|)",
          "package": "streams",
          "signature": "a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": ":\u003c",
          "package": "streams",
          "signature": "a :\u003c (Future a)",
          "source": "src/Data-Stream-Future.html#Future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": ":\u003c",
          "package": "streams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "Last",
          "package": "streams",
          "signature": "Last a",
          "source": "src/Data-Stream-Future.html#Future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "Last",
          "package": "streams",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "cons",
          "package": "streams",
          "signature": "a -\u003e Future a -\u003e Future a",
          "source": "src/Data-Stream-Future.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "cons",
          "normalized": "a-\u003eFuture a-\u003eFuture a",
          "package": "streams",
          "signature": "a-\u003eFuture a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "head",
          "package": "streams",
          "signature": "Future a -\u003e a",
          "source": "src/Data-Stream-Future.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "head",
          "normalized": "Future a-\u003ea",
          "package": "streams",
          "signature": "Future a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "index",
          "package": "streams",
          "signature": "Int -\u003e Future a -\u003e a",
          "source": "src/Data-Stream-Future.html#index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "index",
          "normalized": "Int-\u003eFuture a-\u003ea",
          "package": "streams",
          "signature": "Int-\u003eFuture a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "length",
          "package": "streams",
          "signature": "Future a -\u003e Int",
          "source": "src/Data-Stream-Future.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "length",
          "normalized": "Future a-\u003eInt",
          "package": "streams",
          "signature": "Future a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "map",
          "package": "streams",
          "signature": "(a -\u003e b) -\u003e Future a -\u003e Future b",
          "source": "src/Data-Stream-Future.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eFuture a-\u003eFuture b",
          "package": "streams",
          "signature": "(a-\u003eb)-\u003eFuture a-\u003eFuture b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "tail",
          "package": "streams",
          "signature": "Future a -\u003e Maybe (Future a)",
          "source": "src/Data-Stream-Future.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "tail",
          "normalized": "Future a-\u003eMaybe(Future a)",
          "package": "streams",
          "signature": "Future a-\u003eMaybe(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Future",
          "name": "tails",
          "package": "streams",
          "signature": "Future a -\u003e Future (Future a)",
          "source": "src/Data-Stream-Future.html#tails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Future",
          "module": "Data.Stream.Future",
          "name": "tails",
          "normalized": "Future a-\u003eFuture(Future a)",
          "package": "streams",
          "signature": "Future a-\u003eFuture(Future a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Future.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an infinite bidirectional zipper\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "Zipper",
          "package": "streams",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html",
          "type": "module"
        },
        "index": {
          "description": "This is an infinite bidirectional zipper",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "Zipper",
          "package": "streams",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "Zipper",
          "package": "streams",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "Zipper",
          "package": "streams",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003exs !! n\u003c/code\u003e returns the element of the stream \u003ccode\u003exs\u003c/code\u003e at index\n \u003ccode\u003en\u003c/code\u003e. Note that the head of the stream has index 0.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "(!!)",
          "package": "streams",
          "signature": "Zipper a -\u003e Integer -\u003e a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "xs returns the element of the stream xs at index Note that the head of the stream has index",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "(!!) !!",
          "normalized": "Zipper a-\u003eInteger-\u003ea",
          "package": "streams",
          "signature": "Zipper a-\u003eInteger-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCons before the head of the zipper. The head now points to the new element\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "(\u003c|)",
          "package": "streams",
          "signature": "a -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Cons before the head of the zipper The head now points to the new element",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eZipper a-\u003eZipper a",
          "package": "streams",
          "signature": "a-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": ":~",
          "package": "streams",
          "signature": "Integer :~ !(Integer -\u003e a)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#Zipper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": ":~",
          "normalized": "Integer(Integer-\u003ea)",
          "package": "streams",
          "signature": "Integer(Integer-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003enot . p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "break",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Zipper a -\u003e ([a], Zipper a)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#break",
          "type": "function"
        },
        "index": {
          "description": "The break function is equivalent to span not",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eZipper a-\u003e([a],Zipper a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eZipper a-\u003e([a],Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e elements off the front of\n the sequence \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "drop",
          "package": "streams",
          "signature": "Integer -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs drops the first elements off the front of the sequence xs",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "drop",
          "normalized": "Integer-\u003eZipper a-\u003eZipper a",
          "package": "streams",
          "signature": "Integer-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if every element of \u003ccode\u003exs\u003c/code\u003e\n satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003edropWhile even (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "dropWhile",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs Beware this function may diverge if every element of xs satisfies e.g dropWhile even repeat will loop",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eZipper a-\u003eZipper a",
          "package": "streams",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given stream which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e x xs\u003c/code\u003e will diverge if none of the elements\n of \u003ccode\u003exs\u003c/code\u003e equal \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "elemIndex",
          "package": "streams",
          "signature": "a -\u003e Zipper a -\u003e Integer",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given stream which is equal by to the query element Beware elemIndex xs will diverge if none of the elements of xs equal",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "elemIndex",
          "normalized": "a-\u003eZipper a-\u003eInteger",
          "package": "streams",
          "partial": "Index",
          "signature": "a-\u003eZipper a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a stream and returns\n the index of the first element in the stream that satisfies the predicate,\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if none of the elements of\n \u003ccode\u003exs\u003c/code\u003e satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "findIndex",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Zipper a -\u003e Integer",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and stream and returns the index of the first element in the stream that satisfies the predicate Beware findIndex xs will diverge if none of the elements of xs satisfy",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eZipper a-\u003eInteger",
          "package": "streams",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eZipper a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the focused element\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "head",
          "package": "streams",
          "signature": "Zipper a -\u003e a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the focused element",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "head",
          "normalized": "Zipper a-\u003ea",
          "package": "streams",
          "signature": "Zipper a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave two Zippers \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e, alternating elements\n from each list.\n\u003c/p\u003e\u003cpre\u003e [x1,x2,...] `interleave` [y1,y2,...] == [x1,y1,x2,y2,...]\n interleave = (\u003c\u003e)\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "interleave",
          "package": "streams",
          "signature": "Zipper a -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave two Zippers xs and ys alternating elements from each list x1 x2 interleave y1 y2 x1 y1 x2 y2 interleave",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "interleave",
          "normalized": "Zipper a-\u003eZipper a-\u003eZipper a",
          "package": "streams",
          "signature": "Zipper a-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e y xs\u003c/code\u003e creates an alternating stream of\n elements from \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "intersperse",
          "package": "streams",
          "signature": "a -\u003e Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "intersperse xs creates an alternating stream of elements from xs and",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "intersperse",
          "normalized": "a-\u003eZipper a-\u003eZipper a",
          "package": "streams",
          "signature": "a-\u003eZipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eisPrefix\u003c/code\u003e function returns \u003ccode\u003eTrue\u003c/code\u003e if the first argument is\n a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "isPrefixOf",
          "package": "streams",
          "signature": "[a] -\u003e Zipper a -\u003e Bool",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefix function returns True if the first argument is prefix of the second",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003eZipper a-\u003eBool",
          "package": "streams",
          "partial": "Prefix Of",
          "signature": "[a]-\u003eZipper a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "reverse",
          "package": "streams",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "streams",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the longest prefix of \u003ccode\u003exs\u003c/code\u003e that satisfies\n \u003ccode\u003ep\u003c/code\u003e, together with the remainder of the stream.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "span",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Zipper a -\u003e ([a], Zipper a)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs returns the longest prefix of xs that satisfies together with the remainder of the stream",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eZipper a-\u003e([a],Zipper a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eZipper a-\u003e([a],Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns a pair consisting of the prefix of\n \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e and the remaining stream immediately following\n this prefix.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error if you access the taken portion\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "splitAt",
          "package": "streams",
          "signature": "Integer -\u003e Zipper a -\u003e ([a], Zipper a)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns pair consisting of the prefix of xs of length and the remaining stream immediately following this prefix Beware passing negative integer as the first argument will cause an error if you access the taken portion",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "splitAt",
          "normalized": "Integer-\u003eZipper a-\u003e([a],Zipper a)",
          "package": "streams",
          "partial": "At",
          "signature": "Integer-\u003eZipper a-\u003e([a],Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the head of the zipper to the right\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "tail",
          "package": "streams",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Move the head of the zipper to the right",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "tail",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "streams",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "take",
          "package": "streams",
          "signature": "Integer -\u003e Zipper a -\u003e [a]",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "take",
          "normalized": "Integer-\u003eZipper a-\u003e[a]",
          "package": "streams",
          "signature": "Integer-\u003eZipper a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the longest prefix of the stream\n \u003ccode\u003exs\u003c/code\u003e for which the predicate \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "takeWhile",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Zipper a -\u003e [a]",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile xs returns the longest prefix of the stream xs for which the predicate holds",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eZipper a-\u003e[a]",
          "package": "streams",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eZipper a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "toSequence",
          "package": "streams",
          "signature": "(Integer -\u003e a) -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#toSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "toSequence",
          "normalized": "(Integer-\u003ea)-\u003eZipper a",
          "package": "streams",
          "partial": "Sequence",
          "signature": "(Integer-\u003ea)-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:toSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e computes the transposition of a stream of streams.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "transpose",
          "package": "streams",
          "signature": "Zipper (Zipper a) -\u003e Zipper (Zipper a)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "transpose computes the transposition of stream of streams",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "transpose",
          "normalized": "Zipper(Zipper a)-\u003eZipper(Zipper a)",
          "package": "streams",
          "signature": "Zipper(Zipper a)-\u003eZipper(Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the head of the zipper one step to the right, returning the value we move over.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "uncons",
          "package": "streams",
          "signature": "Zipper a -\u003e (a, Zipper a)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Move the head of the zipper one step to the right returning the value we move over",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "uncons",
          "normalized": "Zipper a-\u003e(a,Zipper a)",
          "package": "streams",
          "signature": "Zipper a-\u003e(a,Zipper a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the head of the zipper to the left\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "untail",
          "package": "streams",
          "signature": "Zipper a -\u003e Zipper a",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#untail",
          "type": "function"
        },
        "index": {
          "description": "Move the head of the zipper to the left",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "untail",
          "normalized": "Zipper a-\u003eZipper a",
          "package": "streams",
          "signature": "Zipper a-\u003eZipper a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:untail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e function is the inverse of the \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "unzip",
          "package": "streams",
          "signature": "Zipper (a, b) -\u003e (Zipper a, Zipper b)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "The unzip function is the inverse of the zip function",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "unzip",
          "normalized": "Zipper(a,b)-\u003e(Zipper a,Zipper b)",
          "package": "streams",
          "signature": "Zipper(a,b)-\u003e(Zipper a,Zipper b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function takes two streams and returns a list of\n corresponding pairs.\n\u003c/p\u003e\u003cpre\u003e zip = liftA2 (,)\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "zip",
          "package": "streams",
          "signature": "Zipper a -\u003e Zipper b -\u003e Zipper (a, b)",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#zip",
          "type": "function"
        },
        "index": {
          "description": "The zip function takes two streams and returns list of corresponding pairs zip liftA2",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "zip",
          "normalized": "Zipper a-\u003eZipper b-\u003eZipper(a,b)",
          "package": "streams",
          "signature": "Zipper a-\u003eZipper b-\u003eZipper(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e. Rather than tupling\n the functions, the elements are combined using the function\n passed as the first argument to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e zipWith = liftA2\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "zipWith",
          "package": "streams",
          "signature": "(a -\u003e b -\u003e c) -\u003e Zipper a -\u003e Zipper b -\u003e Zipper c",
          "source": "src/Data-Stream-Infinite-Functional-Zipper.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "The zipWith function generalizes zip Rather than tupling the functions the elements are combined using the function passed as the first argument to zipWith zipWith liftA2",
          "hierarchy": "Data Stream Infinite Functional Zipper",
          "module": "Data.Stream.Infinite.Functional.Zipper",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eZipper a-\u003eZipper b-\u003eZipper c",
          "package": "streams",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eZipper a-\u003eZipper b-\u003eZipper c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Functional-Zipper.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnticausal streams implemented as non-empty skew binary random access lists\n\u003c/p\u003e\u003cp\u003eThe Applicative zips streams, the monad diagonalizes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "Skew",
          "package": "streams",
          "source": "src/Data-Stream-Infinite-Skew.html",
          "type": "module"
        },
        "index": {
          "description": "Anticausal streams implemented as non-empty skew binary random access lists The Applicative zips streams the monad diagonalizes",
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "Skew",
          "package": "streams",
          "partial": "Skew",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "Stream",
          "package": "streams",
          "source": "src/Data-Stream-Infinite-Skew.html#Stream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "Stream",
          "package": "streams",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "(!!)",
          "package": "streams",
          "signature": "Stream a -\u003e Integer -\u003e a",
          "source": "src/Data-Stream-Infinite-Skew.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "(!!) !!",
          "normalized": "Stream a-\u003eInteger-\u003ea",
          "package": "streams",
          "signature": "Stream a-\u003eInteger-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e cons\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "(\u003c|)",
          "package": "streams",
          "signature": "a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "cons",
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "adjust",
          "package": "streams",
          "signature": "Integer -\u003e (a -\u003e a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "adjust",
          "normalized": "Integer-\u003e(a-\u003ea)-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "Integer-\u003e(a-\u003ea)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "break",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite-Skew.html#break",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "drop",
          "package": "streams",
          "signature": "Integer -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#drop",
          "type": "function"
        },
        "index": {
          "description": "log",
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "drop",
          "normalized": "Integer-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "Integer-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "dropWhile",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "package": "streams",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "from",
          "package": "streams",
          "signature": "a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#from",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "from",
          "normalized": "a-\u003eStream a",
          "package": "streams",
          "signature": "a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "fromList",
          "package": "streams",
          "signature": "[a] -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "fromList",
          "normalized": "[a]-\u003eStream a",
          "package": "streams",
          "partial": "List",
          "signature": "[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "head",
          "package": "streams",
          "signature": "Stream a -\u003e a",
          "source": "src/Data-Stream-Infinite-Skew.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "head",
          "normalized": "Stream a-\u003ea",
          "package": "streams",
          "signature": "Stream a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "indexed",
          "package": "streams",
          "signature": "Stream a -\u003e Stream (Integer, a)",
          "source": "src/Data-Stream-Infinite-Skew.html#indexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "indexed",
          "normalized": "Stream a-\u003eStream(Integer,a)",
          "package": "streams",
          "signature": "Stream a-\u003eStream(Integer,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "insert",
          "package": "streams",
          "signature": "a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "insert",
          "normalized": "a-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "insertBy",
          "package": "streams",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eStream a-\u003eStream a",
          "package": "streams",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "interleave",
          "package": "streams",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "interleave",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "repeat",
          "package": "streams",
          "signature": "a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "repeat",
          "normalized": "a-\u003eStream a",
          "package": "streams",
          "signature": "a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "span",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite-Skew.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "split",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite-Skew.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "split",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "splitW",
          "package": "streams",
          "signature": "(Stream a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite-Skew.html#splitW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "splitW",
          "normalized": "(Stream a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "signature": "(Stream a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:splitW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "tail",
          "package": "streams",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "tail",
          "normalized": "Stream a-\u003eStream a",
          "package": "streams",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "tails",
          "package": "streams",
          "signature": "Stream a -\u003e Stream (Stream a)",
          "source": "src/Data-Stream-Infinite-Skew.html#tails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "tails",
          "normalized": "Stream a-\u003eStream(Stream a)",
          "package": "streams",
          "signature": "Stream a-\u003eStream(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite.Skew",
          "name": "uncons",
          "package": "streams",
          "signature": "Stream a -\u003e (a, Stream a)",
          "source": "src/Data-Stream-Infinite-Skew.html#uncons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "uncons",
          "normalized": "Stream a-\u003e(a,Stream a)",
          "package": "streams",
          "signature": "Stream a-\u003e(a,Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite.Skew",
          "name": "update",
          "package": "streams",
          "signature": "Integer -\u003e a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite-Skew.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite Skew",
          "module": "Data.Stream.Infinite.Skew",
          "name": "update",
          "normalized": "Integer-\u003ea-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "Integer-\u003ea-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite-Skew.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite",
          "name": "Infinite",
          "package": "streams",
          "source": "src/Data-Stream-Infinite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "Infinite",
          "package": "streams",
          "partial": "Infinite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite",
          "name": "Stream",
          "package": "streams",
          "source": "src/Data-Stream-Infinite.html#Stream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "Stream",
          "package": "streams",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003exs !! n\u003c/code\u003e returns the element of the stream \u003ccode\u003exs\u003c/code\u003e at index\n \u003ccode\u003en\u003c/code\u003e. Note that the head of the stream has index 0.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will cause\n an error.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "(!!)",
          "package": "streams",
          "signature": "Stream a -\u003e Int -\u003e a",
          "source": "src/Data-Stream-Infinite.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "xs returns the element of the stream xs at index Note that the head of the stream has index Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "(!!) !!",
          "normalized": "Stream a-\u003eInt-\u003ea",
          "package": "streams",
          "signature": "Stream a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite",
          "name": ":\u003e",
          "package": "streams",
          "signature": "a :\u003e (Stream a)",
          "source": "src/Data-Stream-Infinite.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": ":\u003e",
          "package": "streams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003enot . p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "break",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite.html#break",
          "type": "function"
        },
        "index": {
          "description": "The break function is equivalent to span not",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e returns the infinite repetition of \u003ccode\u003exs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e cycle [1,2,3] = Cons 1 (Cons 2 (Cons 3 (Cons 1 (Cons 2 ...\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "cycle",
          "package": "streams",
          "signature": "NonEmpty a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "cycle xs returns the infinite repetition of xs cycle Cons Cons Cons Cons Cons",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "cycle",
          "normalized": "NonEmpty a-\u003eStream a",
          "package": "streams",
          "signature": "NonEmpty a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e elements off the front of\n the sequence \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "drop",
          "package": "streams",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs drops the first elements off the front of the sequence xs Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "drop",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if every element of \u003ccode\u003exs\u003c/code\u003e\n satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003edropWhile even (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "dropWhile",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs Beware this function may diverge if every element of xs satisfies e.g dropWhile even repeat will loop",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "package": "streams",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given stream which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e x xs\u003c/code\u003e will diverge if none of the elements\n of \u003ccode\u003exs\u003c/code\u003e equal \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "elemIndex",
          "package": "streams",
          "signature": "a -\u003e Stream a -\u003e Int",
          "source": "src/Data-Stream-Infinite.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given stream which is equal by to the query element Beware elemIndex xs will diverge if none of the elements of xs equal",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "elemIndex",
          "normalized": "a-\u003eStream a-\u003eInt",
          "package": "streams",
          "partial": "Index",
          "signature": "a-\u003eStream a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if any suffix of\n \u003ccode\u003exs\u003c/code\u003e does not contain \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "elemIndices",
          "package": "streams",
          "signature": "a -\u003e Stream a -\u003e Stream Int",
          "source": "src/Data-Stream-Infinite.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order Beware elemIndices xs will diverge if any suffix of xs does not contain",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "elemIndices",
          "normalized": "a-\u003eStream a-\u003eStream Int",
          "package": "streams",
          "partial": "Indices",
          "signature": "a-\u003eStream a-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e, removes any elements from \u003ccode\u003exs\u003c/code\u003e that do not satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if there is no element of\n \u003ccode\u003exs\u003c/code\u003e that satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003efilter odd (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "filter",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter xs removes any elements from xs that do not satisfy Beware this function may diverge if there is no element of xs that satisfies e.g filter odd repeat will loop",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a stream and returns\n the index of the first element in the stream that satisfies the predicate,\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if none of the elements of\n \u003ccode\u003exs\u003c/code\u003e satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "findIndex",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Int",
          "source": "src/Data-Stream-Infinite.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and stream and returns the index of the first element in the stream that satisfies the predicate Beware findIndex xs will diverge if none of the elements of xs satisfy",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eInt",
          "package": "streams",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending\n order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if all the elements\n of any suffix of \u003ccode\u003exs\u003c/code\u003e fails to satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "findIndices",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream Int",
          "source": "src/Data-Stream-Infinite.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order Beware findIndices xs will diverge if all the elements of any suffix of xs fails to satisfy",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream Int",
          "package": "streams",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e converts an infinite list to a\n stream.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: Passing a finite list, will cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "fromList",
          "package": "streams",
          "signature": "[a] -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "The fromList converts an infinite list to stream Beware Passing finite list will cause an error",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "fromList",
          "normalized": "[a]-\u003eStream a",
          "package": "streams",
          "partial": "List",
          "signature": "[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a stream and returns a stream of\n lists such that flattening the resulting stream is equal to the\n argument.  Moreover, each sublist in the resulting stream\n contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group $ cycle \"Mississippi\" = \"M\" ::: \"i\" ::: \"ss\" ::: \"i\" ::: \"ss\" ::: \"i\" ::: \"pp\" ::: \"i\" ::: \"M\" ::: \"i\" ::: ...\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "group",
          "package": "streams",
          "signature": "Stream a -\u003e Stream (NonEmpty a)",
          "source": "src/Data-Stream-Infinite.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes stream and returns stream of lists such that flattening the resulting stream is equal to the argument Moreover each sublist in the resulting stream contains only equal elements For example group cycle Mississippi ss ss pp",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "group",
          "normalized": "Stream a-\u003eStream(NonEmpty a)",
          "package": "streams",
          "signature": "Stream a-\u003eStream(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Infinite",
          "name": "groupBy",
          "package": "streams",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Stream a -\u003e Stream (NonEmpty a)",
          "source": "src/Data-Stream-Infinite.html#groupBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eStream a-\u003eStream(NonEmpty a)",
          "package": "streams",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eStream a-\u003eStream(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of the sequence.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "head",
          "package": "streams",
          "signature": "Stream a -\u003e a",
          "source": "src/Data-Stream-Infinite.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of the sequence",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "head",
          "normalized": "Stream a-\u003ea",
          "package": "streams",
          "signature": "Stream a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n finite prefixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e is lazier then \u003ccode\u003eData.List.inits\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e inits _|_ = [] ::: _|_\n\u003c/pre\u003e\u003cp\u003ewhile for \u003ccode\u003eData.List.inits\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e inits _|_ = _|_\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "inits",
          "package": "streams",
          "signature": "Stream a -\u003e Stream [a]",
          "source": "src/Data-Stream-Infinite.html#inits",
          "type": "function"
        },
        "index": {
          "description": "The inits function takes stream xs and returns all the finite prefixes of xs Note that this inits is lazier then Data.List.inits inits while for Data.List.inits inits",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "inits",
          "normalized": "Stream a-\u003eStream[a]",
          "package": "streams",
          "signature": "Stream a-\u003eStream[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave two Streams \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e, alternating elements\n from each list.\n\u003c/p\u003e\u003cpre\u003e [x1,x2,...] `interleave` [y1,y2,...] == [x1,y1,x2,y2,...]\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "interleave",
          "package": "streams",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave two Streams xs and ys alternating elements from each list x1 x2 interleave y1 y2 x1 y1 x2 y2",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "interleave",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e y xs\u003c/code\u003e creates an alternating stream of\n elements from \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "intersperse",
          "package": "streams",
          "signature": "a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "intersperse xs creates an alternating stream of elements from xs and",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "intersperse",
          "normalized": "a-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eisPrefix\u003c/code\u003e function returns \u003ccode\u003eTrue\u003c/code\u003e if the first argument is\n a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "isPrefixOf",
          "package": "streams",
          "signature": "[a] -\u003e Stream a -\u003e Bool",
          "source": "src/Data-Stream-Infinite.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefix function returns True if the first argument is prefix of the second",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003eStream a-\u003eBool",
          "package": "streams",
          "partial": "Prefix Of",
          "signature": "[a]-\u003eStream a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e produces the infinite sequence\n of repeated applications of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e iterate f x = [x, f x, f (f x), ..]\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "iterate",
          "package": "streams",
          "signature": "(a -\u003e a) -\u003e a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate produces the infinite sequence of repeated applications of to iterate",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eStream a",
          "package": "streams",
          "signature": "(a-\u003ea)-\u003ea-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function breaks a stream of characters into a list\n of strings at newline characters. The resulting strings do not\n contain newlines.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: if the stream of characters \u003ccode\u003exs\u003c/code\u003e does not contain\n newline characters, accessing the tail of \u003ccode\u003elines xs\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "lines",
          "package": "streams",
          "signature": "Stream Char -\u003e Stream String",
          "source": "src/Data-Stream-Infinite.html#lines",
          "type": "function"
        },
        "index": {
          "description": "The lines function breaks stream of characters into list of strings at newline characters The resulting strings do not contain newlines Beware if the stream of characters xs does not contain newline characters accessing the tail of lines xs will loop",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "lines",
          "normalized": "Stream Char-\u003eStream String",
          "package": "streams",
          "signature": "Stream Char-\u003eStream String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a pure function over a stream\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "map",
          "package": "streams",
          "signature": "(a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Data-Stream-Infinite.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map pure function over stream",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "streams",
          "signature": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate \u003ccode\u003ep\u003c/code\u003e and a stream\n \u003ccode\u003exs\u003c/code\u003e, and returns a pair of streams. The first stream corresponds\n to the elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e holds; the second stream\n corresponds to the elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e does not hold.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: One of the elements of the tuple may be undefined. For\n example, \u003ccode\u003efst (partition even (repeat 0)) == repeat 0\u003c/code\u003e; on the\n other hand \u003ccode\u003esnd (partition even (repeat 0))\u003c/code\u003e is undefined.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "partition",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e (Stream a, Stream a)",
          "source": "src/Data-Stream-Infinite.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate and stream xs and returns pair of streams The first stream corresponds to the elements of xs for which holds the second stream corresponds to the elements of xs for which does not hold Beware One of the elements of the tuple may be undefined For example fst partition even repeat repeat on the other hand snd partition even repeat is undefined",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e(Stream a,Stream a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e(Stream a,Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e returns a constant stream, where all elements are\n equal to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "repeat",
          "package": "streams",
          "signature": "a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat returns constant stream where all elements are equal to",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "repeat",
          "normalized": "a-\u003eStream a",
          "package": "streams",
          "signature": "a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e yields a stream of successive reduced values from:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "scanl",
          "package": "streams",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl yields stream of successive reduced values from scanl x1 x2 x1 x1 x2",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "package": "streams",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e yields a stream of successive reduced values from:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "scanl'",
          "package": "streams",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#scanl%27",
          "type": "function"
        },
        "index": {
          "description": "scanl yields stream of successive reduced values from scanl x1 x2 x1 x1 x2",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "scanl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "package": "streams",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:scanl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Stream.Infinite",
          "name": "scanl1",
          "package": "streams",
          "signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escanl1'\u003c/code\u003e is a strict \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "scanl1'",
          "package": "streams",
          "signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#scanl1%27",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is strict scanl that has no starting value",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "scanl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "package": "streams",
          "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:scanl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the longest prefix of \u003ccode\u003exs\u003c/code\u003e that satisfies\n \u003ccode\u003ep\u003c/code\u003e, together with the remainder of the stream.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "span",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs returns the longest prefix of xs that satisfies together with the remainder of the stream",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns a pair consisting of the prefix of\n \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e and the remaining stream immediately following\n this prefix.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "splitAt",
          "package": "streams",
          "signature": "Int -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream-Infinite.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns pair consisting of the prefix of xs of length and the remaining stream immediately following this prefix Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "splitAt",
          "normalized": "Int-\u003eStream a-\u003e([a],Stream a)",
          "package": "streams",
          "partial": "At",
          "signature": "Int-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sequence following the head of the stream.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "tail",
          "package": "streams",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Data-Stream-Infinite.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the sequence following the head of the stream",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "tail",
          "normalized": "Stream a-\u003eStream a",
          "package": "streams",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n suffixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "tails",
          "package": "streams",
          "signature": "Stream a -\u003e Stream (Stream a)",
          "source": "src/Data-Stream-Infinite.html#tails",
          "type": "function"
        },
        "index": {
          "description": "The tails function takes stream xs and returns all the suffixes of xs",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "tails",
          "normalized": "Stream a-\u003eStream(Stream a)",
          "package": "streams",
          "signature": "Stream a-\u003eStream(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "take",
          "package": "streams",
          "signature": "Int -\u003e Stream a -\u003e [a]",
          "source": "src/Data-Stream-Infinite.html#take",
          "type": "function"
        },
        "index": {
          "description": "take xs returns the first elements of xs Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "take",
          "normalized": "Int-\u003eStream a-\u003e[a]",
          "package": "streams",
          "signature": "Int-\u003eStream a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the longest prefix of the stream\n \u003ccode\u003exs\u003c/code\u003e for which the predicate \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "takeWhile",
          "package": "streams",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e [a]",
          "source": "src/Data-Stream-Infinite.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile xs returns the longest prefix of the stream xs for which the predicate holds",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e[a]",
          "package": "streams",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e computes the transposition of a stream of streams.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "transpose",
          "package": "streams",
          "signature": "Stream (Stream a) -\u003e Stream (Stream a)",
          "source": "src/Data-Stream-Infinite.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "transpose computes the transposition of stream of streams",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "transpose",
          "normalized": "Stream(Stream a)-\u003eStream(Stream a)",
          "package": "streams",
          "signature": "Stream(Stream a)-\u003eStream(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unfold function is similar to the unfold for lists. Note\n there is no base case: all streams must be infinite.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "unfold",
          "package": "streams",
          "signature": "(a -\u003e (b, a)) -\u003e a -\u003e Stream b",
          "source": "src/Data-Stream-Infinite.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "The unfold function is similar to the unfold for lists Note there is no base case all streams must be infinite",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "unfold",
          "normalized": "(a-\u003e(b,a))-\u003ea-\u003eStream b",
          "package": "streams",
          "signature": "(a-\u003e(b,a))-\u003ea-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e. It\n joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "unlines",
          "package": "streams",
          "signature": "Stream String -\u003e Stream Char",
          "source": "src/Data-Stream-Infinite.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "The unlines function is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "unlines",
          "normalized": "Stream String-\u003eStream Char",
          "package": "streams",
          "signature": "Stream String-\u003eStream Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e. It\n joins words with separating spaces.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "unwords",
          "package": "streams",
          "signature": "Stream String -\u003e Stream Char",
          "source": "src/Data-Stream-Infinite.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "unwords",
          "normalized": "Stream String-\u003eStream Char",
          "package": "streams",
          "signature": "Stream String-\u003eStream Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e function is the inverse of the \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "unzip",
          "package": "streams",
          "signature": "Stream (a, b) -\u003e (Stream a, Stream b)",
          "source": "src/Data-Stream-Infinite.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "The unzip function is the inverse of the zip function",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "unzip",
          "normalized": "Stream(a,b)-\u003e(Stream a,Stream b)",
          "package": "streams",
          "signature": "Stream(a,b)-\u003e(Stream a,Stream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e function breaks a stream of characters into a\n stream of words, which were delimited by white space.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: if the stream of characters \u003ccode\u003exs\u003c/code\u003e does not contain white\n space, accessing the tail of \u003ccode\u003ewords xs\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "words",
          "package": "streams",
          "signature": "Stream Char -\u003e Stream String",
          "source": "src/Data-Stream-Infinite.html#words",
          "type": "function"
        },
        "index": {
          "description": "The words function breaks stream of characters into stream of words which were delimited by white space Beware if the stream of characters xs does not contain white space accessing the tail of words xs will loop",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "words",
          "normalized": "Stream Char-\u003eStream String",
          "package": "streams",
          "signature": "Stream Char-\u003eStream String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function takes two streams and returns a list of\n corresponding pairs.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "zip",
          "package": "streams",
          "signature": "Stream a -\u003e Stream b -\u003e Stream (a, b)",
          "source": "src/Data-Stream-Infinite.html#zip",
          "type": "function"
        },
        "index": {
          "description": "The zip function takes two streams and returns list of corresponding pairs",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "zip",
          "normalized": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "package": "streams",
          "signature": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e. Rather than tupling\n the functions, the elements are combined using the function\n passed as the first argument to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream.Infinite",
          "name": "zipWith",
          "package": "streams",
          "signature": "(a -\u003e b -\u003e c) -\u003e Stream a -\u003e Stream b -\u003e Stream c",
          "source": "src/Data-Stream-Infinite.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "The zipWith function generalizes zip Rather than tupling the functions the elements are combined using the function passed as the first argument to zipWith",
          "hierarchy": "Data Stream Infinite",
          "module": "Data.Stream.Infinite",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
          "package": "streams",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Infinite.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library can be used to generate values (for example, new names)\n without the need to thread state.  This means that functions that\n need to generate new values only need a supply object as an argument,\n and they do not need to return a new supply object as a result.\n This decreases the number of data-dependencies in a program, which\n makes it easier to exploit parallelism.\n\u003c/p\u003e\u003cp\u003eThe technique for generating new values is based on the paper\n ''On Generating Unique Names'' by Lennart Augustsson, Mikael Rittri,\n and Dan Synek.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Stream.Supply",
          "name": "Supply",
          "package": "streams",
          "source": "src/Data-Stream-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "This library can be used to generate values for example new names without the need to thread state This means that functions that need to generate new values only need supply object as an argument and they do not need to return new supply object as result This decreases the number of data-dependencies in program which makes it easier to exploit parallelism The technique for generating new values is based on the paper On Generating Unique Names by Lennart Augustsson Mikael Rittri and Dan Synek",
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "Supply",
          "package": "streams",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "Supply",
          "package": "streams",
          "source": "src/Data-Stream-Supply.html#Supply",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "Supply",
          "package": "streams",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "leftSupply",
          "package": "streams",
          "signature": "Supply a -\u003e Supply a",
          "source": "src/Data-Stream-Supply.html#leftSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "leftSupply",
          "normalized": "Supply a-\u003eSupply a",
          "package": "streams",
          "partial": "Supply",
          "signature": "Supply a-\u003eSupply a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:leftSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "newDupableEnumSupply",
          "package": "streams",
          "signature": "IO (Supply a)",
          "source": "src/Data-Stream-Supply.html#newDupableEnumSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "newDupableEnumSupply",
          "package": "streams",
          "partial": "Dupable Enum Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:newDupableEnumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "newDupableNumSupply",
          "package": "streams",
          "signature": "IO (Supply a)",
          "source": "src/Data-Stream-Supply.html#newDupableNumSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "newDupableNumSupply",
          "package": "streams",
          "partial": "Dupable Num Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:newDupableNumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "newDupableSupply",
          "package": "streams",
          "signature": "(a -\u003e a) -\u003e a -\u003e IO (Supply a)",
          "source": "src/Data-Stream-Supply.html#newDupableSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "newDupableSupply",
          "normalized": "(a-\u003ea)-\u003ea-\u003eIO(Supply a)",
          "package": "streams",
          "partial": "Dupable Supply",
          "signature": "(a-\u003ea)-\u003ea-\u003eIO(Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:newDupableSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "newEnumSupply",
          "package": "streams",
          "signature": "IO (Supply a)",
          "source": "src/Data-Stream-Supply.html#newEnumSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "newEnumSupply",
          "package": "streams",
          "partial": "Enum Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:newEnumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "newNumSupply",
          "package": "streams",
          "signature": "IO (Supply a)",
          "source": "src/Data-Stream-Supply.html#newNumSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "newNumSupply",
          "package": "streams",
          "partial": "Num Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:newNumSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "newSupply",
          "package": "streams",
          "signature": "(a -\u003e a) -\u003e a -\u003e IO (Supply a)",
          "source": "src/Data-Stream-Supply.html#newSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "newSupply",
          "normalized": "(a-\u003ea)-\u003ea-\u003eIO(Supply a)",
          "package": "streams",
          "partial": "Supply",
          "signature": "(a-\u003ea)-\u003ea-\u003eIO(Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:newSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "rightSupply",
          "package": "streams",
          "signature": "Supply a -\u003e Supply a",
          "source": "src/Data-Stream-Supply.html#rightSupply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "rightSupply",
          "normalized": "Supply a-\u003eSupply a",
          "package": "streams",
          "partial": "Supply",
          "signature": "Supply a-\u003eSupply a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:rightSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "split",
          "package": "streams",
          "signature": "Supply a -\u003e Stream (Supply a)",
          "source": "src/Data-Stream-Supply.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "split",
          "normalized": "Supply a-\u003eStream(Supply a)",
          "package": "streams",
          "signature": "Supply a-\u003eStream(Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "split2",
          "package": "streams",
          "signature": "Supply a -\u003e (Supply a, Supply a)",
          "source": "src/Data-Stream-Supply.html#split2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "split2",
          "normalized": "Supply a-\u003e(Supply a,Supply a)",
          "package": "streams",
          "signature": "Supply a-\u003e(Supply a,Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:split2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "split3",
          "package": "streams",
          "signature": "Supply a -\u003e (Supply a, Supply a, Supply a)",
          "source": "src/Data-Stream-Supply.html#split3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "split3",
          "normalized": "Supply a-\u003e(Supply a,Supply a,Supply a)",
          "package": "streams",
          "signature": "Supply a-\u003e(Supply a,Supply a,Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:split3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "split4",
          "package": "streams",
          "signature": "Supply a -\u003e (Supply a, Supply a, Supply a, Supply a)",
          "source": "src/Data-Stream-Supply.html#split4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "split4",
          "normalized": "Supply a-\u003e(Supply a,Supply a,Supply a,Supply a)",
          "package": "streams",
          "signature": "Supply a-\u003e(Supply a,Supply a,Supply a,Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:split4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "splitSkew",
          "package": "streams",
          "signature": "Supply a -\u003e Stream (Supply a)",
          "source": "src/Data-Stream-Supply.html#splitSkew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "splitSkew",
          "normalized": "Supply a-\u003eStream(Supply a)",
          "package": "streams",
          "partial": "Skew",
          "signature": "Supply a-\u003eStream(Supply a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:splitSkew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream.Supply",
          "name": "splits",
          "package": "streams",
          "signature": "Supply a -\u003e b -\u003e Supply a",
          "source": "src/Data-Stream-Supply.html#splits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream Supply",
          "module": "Data.Stream.Supply",
          "name": "splits",
          "normalized": "Supply a-\u003eb-\u003eSupply a",
          "package": "streams",
          "signature": "Supply a-\u003eb-\u003eSupply a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/streams/docs/Data-Stream-Supply.html#v:splits"
      }
    }
  ]
]