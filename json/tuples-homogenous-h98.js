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
        "word": "tuples-homogenous-h98"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides wrappers for homogenous tuples defined as\n\u003c/p\u003e\u003cpre\u003e\n newtype TupleN a = TupleN (a,...,a)\n\u003c/pre\u003e\u003cp\u003etogether with helper methods\n\u003c/p\u003e\u003cpre\u003e\n tupleN :: a -\u003e ... -\u003e a -\u003e TupleN a\n\u003c/pre\u003e\u003cp\u003eand instances for\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e applies a given function to all elements of a tuple.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e zips two tuples, applying \u003cem\u003ei\u003c/em\u003e-th function of the first to\n     \u003cem\u003ei\u003c/em\u003e-th element of the second.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e where \u003cem\u003ei\u003c/em\u003e-th element of \u003ccode\u003ex \u003e\u003e= f\u003c/code\u003e is the result of applying \u003ccode\u003ef\u003c/code\u003e\n     to the \u003cem\u003ei\u003c/em\u003e-th element of \u003ccode\u003ex\u003c/code\u003e and taking its \u003cem\u003ei\u003c/em\u003e-th result. In other words,\n     \u003ccode\u003ejoin :: Tupple N (TuppleN a) -\u003e TuppleN a\u003c/code\u003e returns the diagonal of the\n     \u003cem\u003eNxN\u003c/em\u003e matrix.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e folds/traverses over the \u003cem\u003eN\u003c/em\u003e elements.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Tuple.Homogenous",
          "name": "Homogenous",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html",
          "type": "module"
        },
        "index": {
          "description": "Provides wrappers for homogenous tuples defined as newtype TupleN TupleN together with helper methods tupleN TupleN and instances for Functor applies given function to all elements of tuple Applicative zips two tuples applying th function of the first to th element of the second Monad where th element of is the result of applying to the th element of and taking its th result In other words join Tupple TuppleN TuppleN returns the diagonal of the NxN matrix Foldable and Traversable folds traverses over the elements",
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Homogenous",
          "package": "tuples-homogenous-h98",
          "partial": "Homogenous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple0",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple0",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple0",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003enewtype\u003c/code\u003e intentionally omits the \u003ccode\u003euntuple1\u003c/code\u003e accessor as there is no\n 1-tuple in Haskell.\n\u003c/p\u003e",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple1",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple1",
          "type": "newtype"
        },
        "index": {
          "description": "This newtype intentionally omits the untuple1 accessor as there is no tuple in Haskell",
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple1",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple10",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple10",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple10",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple11",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple11",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple11",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple12",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple12",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple12",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple13",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple13",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple13",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple14",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple14",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple14",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple15",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple15",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple15",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple2",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple2",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple2",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple3",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple3",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple3",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple4",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple4",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple4",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple5",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple5",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple5",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple6",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple6",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple6",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple7",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple7",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple7",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple8",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple8",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple8",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple9",
          "package": "tuples-homogenous-h98",
          "source": "src/Data-Tuple-Homogenous.html#Tuple9",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple9",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple0",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple0",
          "source": "src/Data-Tuple-Homogenous.html#Tuple0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple0",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple1",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple1 a",
          "source": "src/Data-Tuple-Homogenous.html#Tuple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple1",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple10",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple10",
          "source": "src/Data-Tuple-Homogenous.html#Tuple10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple10",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple11",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple11",
          "source": "src/Data-Tuple-Homogenous.html#Tuple11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple11",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple12",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple12",
          "source": "src/Data-Tuple-Homogenous.html#Tuple12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple12",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple13",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple13",
          "source": "src/Data-Tuple-Homogenous.html#Tuple13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple13",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple14",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple14",
          "source": "src/Data-Tuple-Homogenous.html#Tuple14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple14",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple15",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple15",
          "source": "src/Data-Tuple-Homogenous.html#Tuple15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple15",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple2",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple2",
          "source": "src/Data-Tuple-Homogenous.html#Tuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple2",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple3",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple3",
          "source": "src/Data-Tuple-Homogenous.html#Tuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple3",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple4",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple4",
          "source": "src/Data-Tuple-Homogenous.html#Tuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple4",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple5",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple5",
          "source": "src/Data-Tuple-Homogenous.html#Tuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple5",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple6",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple6",
          "source": "src/Data-Tuple-Homogenous.html#Tuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple6",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple7",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple7",
          "source": "src/Data-Tuple-Homogenous.html#Tuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple7",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple8",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple8",
          "source": "src/Data-Tuple-Homogenous.html#Tuple8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple8",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple9",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple9",
          "source": "src/Data-Tuple-Homogenous.html#Tuple9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "Tuple9",
          "package": "tuples-homogenous-h98",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple0",
          "package": "tuples-homogenous-h98",
          "signature": "Tuple0 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple0",
          "package": "tuples-homogenous-h98",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple1",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e Tuple1 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple1",
          "normalized": "a-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple10",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple10 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple10",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple11",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple11 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple11",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple12",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple12 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple12",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple13",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple13 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple13",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple14",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple14 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple14",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple15",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple15 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple15",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple2",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e Tuple2 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple2",
          "normalized": "a-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple3",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e Tuple3 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple3",
          "normalized": "a-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple4",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e Tuple4 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple4",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple5",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple5 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple5",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple6",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple6 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple6",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple7",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple7 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple7",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple8",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple8 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple8",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "tuple9",
          "package": "tuples-homogenous-h98",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple9 a",
          "source": "src/Data-Tuple-Homogenous.html#tuple9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "tuple9",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "package": "tuples-homogenous-h98",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple0",
          "package": "tuples-homogenous-h98",
          "signature": "()",
          "source": "src/Data-Tuple-Homogenous.html#Tuple0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple0",
          "normalized": "()",
          "package": "tuples-homogenous-h98",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple10",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple10",
          "normalized": "(a,a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple11",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple11",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple12",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple12",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple13",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple13",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple14",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple14",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple15",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple15",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple2",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple2",
          "normalized": "(a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple3",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple3",
          "normalized": "(a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple4",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple4",
          "normalized": "(a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple5",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple5",
          "normalized": "(a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple6",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple6",
          "normalized": "(a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple7",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple7",
          "normalized": "(a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple8",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple8",
          "normalized": "(a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Homogenous",
          "name": "untuple9",
          "package": "tuples-homogenous-h98",
          "signature": "(a, a, a, a, a, a, a, a, a)",
          "source": "src/Data-Tuple-Homogenous.html#Tuple9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Homogenous",
          "module": "Data.Tuple.Homogenous",
          "name": "untuple9",
          "normalized": "(a,a,a,a,a,a,a,a,a)",
          "package": "tuples-homogenous-h98",
          "signature": "(a,a,a,a,a,a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple9"
      }
    }
  ]
]