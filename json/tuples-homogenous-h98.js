[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides wrappers for homogenous tuples defined as\n\u003c/p\u003e\u003cpre\u003e\n newtype TupleN a = TupleN (a,...,a)\n\u003c/pre\u003e\u003cp\u003etogether with helper methods\n\u003c/p\u003e\u003cpre\u003e\n tupleN :: a -\u003e ... -\u003e a -\u003e TupleN a\n\u003c/pre\u003e\u003cp\u003eand instances for\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e applies a given function to all elements of a tuple.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e zips two tuples, applying \u003cem\u003ei\u003c/em\u003e-th function of the first to\n     \u003cem\u003ei\u003c/em\u003e-th element of the second.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e where \u003cem\u003ei\u003c/em\u003e-th element of \u003ccode\u003ex \u003e\u003e= f\u003c/code\u003e is the result of applying \u003ccode\u003ef\u003c/code\u003e\n     to the \u003cem\u003ei\u003c/em\u003e-th element of \u003ccode\u003ex\u003c/code\u003e and taking its \u003cem\u003ei\u003c/em\u003e-th result. In other words,\n     \u003ccode\u003ejoin :: Tupple N (TuppleN a) -\u003e TuppleN a\u003c/code\u003e returns the diagonal of the\n     \u003cem\u003eNxN\u003c/em\u003e matrix.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e folds/traverses over the \u003cem\u003eN\u003c/em\u003e elements.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "module",
        "fct-source": "src/Data-Tuple-Homogenous.html",
        "fct-type": "module",
        "title": "Homogenous"
      },
      "index": {
        "description": "Provides wrappers for homogenous tuples defined as newtype TupleN TupleN together with helper methods tupleN TupleN and instances for Functor applies given function to all elements of tuple Applicative zips two tuples applying th function of the first to th element of the second Monad where th element of is the result of applying to the th element of and taking its th result In other words join Tupple TuppleN TuppleN returns the diagonal of the NxN matrix Foldable and Traversable folds traverses over the elements",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Homogenous",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Homogenous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple0",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple0",
        "fct-type": "newtype",
        "title": "Tuple0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple0",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple1",
      "description": {
        "fct-descr": "\u003cp\u003eThis \u003ccode\u003enewtype\u003c/code\u003e intentionally omits the \u003ccode\u003euntuple1\u003c/code\u003e accessor as there is no\n 1-tuple in Haskell.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple1",
        "fct-type": "newtype",
        "title": "Tuple1"
      },
      "index": {
        "description": "This newtype intentionally omits the untuple1 accessor as there is no tuple in Haskell",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple1",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple10",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple10",
        "fct-type": "newtype",
        "title": "Tuple10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple10",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple11",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple11",
        "fct-type": "newtype",
        "title": "Tuple11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple11",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple12",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple12",
        "fct-type": "newtype",
        "title": "Tuple12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple12",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple13",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple13",
        "fct-type": "newtype",
        "title": "Tuple13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple13",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple14",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple14",
        "fct-type": "newtype",
        "title": "Tuple14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple14",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple15",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple15",
        "fct-type": "newtype",
        "title": "Tuple15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple15",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple2",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple2",
        "fct-type": "newtype",
        "title": "Tuple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple2",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple3",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple3",
        "fct-type": "newtype",
        "title": "Tuple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple3",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple4",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple4",
        "fct-type": "newtype",
        "title": "Tuple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple4",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple5",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple5",
        "fct-type": "newtype",
        "title": "Tuple5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple5",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple6",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple6",
        "fct-type": "newtype",
        "title": "Tuple6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple6",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple7",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple7",
        "fct-type": "newtype",
        "title": "Tuple7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple7",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple8",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple8",
        "fct-type": "newtype",
        "title": "Tuple8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple8",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#t:Tuple9",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple9",
        "fct-type": "newtype",
        "title": "Tuple9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple9",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple0",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple0",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple0",
        "fct-type": "function",
        "title": "Tuple0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple0",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple1",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple1 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple1",
        "fct-type": "function",
        "title": "Tuple1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple1",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple10",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple10",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple10",
        "fct-type": "function",
        "title": "Tuple10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple10",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple11",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple11",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple11",
        "fct-type": "function",
        "title": "Tuple11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple11",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple12",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple12",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple12",
        "fct-type": "function",
        "title": "Tuple12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple12",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple13",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple13",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple13",
        "fct-type": "function",
        "title": "Tuple13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple13",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple14",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple14",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple14",
        "fct-type": "function",
        "title": "Tuple14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple14",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple15",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple15",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple15",
        "fct-type": "function",
        "title": "Tuple15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple15",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple2",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple2",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple2",
        "fct-type": "function",
        "title": "Tuple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple2",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple3",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple3",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple3",
        "fct-type": "function",
        "title": "Tuple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple3",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple4",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple4",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple4",
        "fct-type": "function",
        "title": "Tuple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple4",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple5",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple5",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple5",
        "fct-type": "function",
        "title": "Tuple5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple5",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple6",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple6",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple6",
        "fct-type": "function",
        "title": "Tuple6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple6",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple7",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple7",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple7",
        "fct-type": "function",
        "title": "Tuple7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple7",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple8",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple8",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple8",
        "fct-type": "function",
        "title": "Tuple8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple8",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:Tuple9",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple9",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple9",
        "fct-type": "function",
        "title": "Tuple9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "Tuple9",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple0",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "Tuple0 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple0",
        "fct-type": "function",
        "title": "tuple0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple0",
        "normalized": "",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple1",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e Tuple1 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple1",
        "fct-type": "function",
        "title": "tuple1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple1",
        "normalized": "a-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple10",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple10 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple10",
        "fct-type": "function",
        "title": "tuple10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple10",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple11",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple11 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple11",
        "fct-type": "function",
        "title": "tuple11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple11",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple12",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple12 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple12",
        "fct-type": "function",
        "title": "tuple12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple12",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple13",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple13 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple13",
        "fct-type": "function",
        "title": "tuple13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple13",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple14",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple14 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple14",
        "fct-type": "function",
        "title": "tuple14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple14",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple15",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple15 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple15",
        "fct-type": "function",
        "title": "tuple15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple15",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple2",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e Tuple2 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple2",
        "fct-type": "function",
        "title": "tuple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple2",
        "normalized": "a-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple3",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e Tuple3 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple3",
        "fct-type": "function",
        "title": "tuple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple3",
        "normalized": "a-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple4",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e Tuple4 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple4",
        "fct-type": "function",
        "title": "tuple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple4",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple5",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple5 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple5",
        "fct-type": "function",
        "title": "tuple5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple5",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple6",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple6 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple6",
        "fct-type": "function",
        "title": "tuple6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple6",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple7",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple7 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple7",
        "fct-type": "function",
        "title": "tuple7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple7",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple8",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple8 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple8",
        "fct-type": "function",
        "title": "tuple8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple8",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:tuple9",
      "description": {
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e Tuple9 a",
        "fct-source": "src/Data-Tuple-Homogenous.html#tuple9",
        "fct-type": "function",
        "title": "tuple9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "tuple9",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eTuple a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple0",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "()",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple0",
        "fct-type": "function",
        "title": "untuple0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple0",
        "normalized": "()",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple10",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple10",
        "fct-type": "function",
        "title": "untuple10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple10",
        "normalized": "(a,a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple11",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple11",
        "fct-type": "function",
        "title": "untuple11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple11",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple12",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple12",
        "fct-type": "function",
        "title": "untuple12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple12",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple13",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple13",
        "fct-type": "function",
        "title": "untuple13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple13",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple14",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple14",
        "fct-type": "function",
        "title": "untuple14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple14",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple15",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple15",
        "fct-type": "function",
        "title": "untuple15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple15",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple2",
        "fct-type": "function",
        "title": "untuple2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple2",
        "normalized": "(a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple3",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple3",
        "fct-type": "function",
        "title": "untuple3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple3",
        "normalized": "(a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple4",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple4",
        "fct-type": "function",
        "title": "untuple4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple4",
        "normalized": "(a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple5",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple5",
        "fct-type": "function",
        "title": "untuple5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple5",
        "normalized": "(a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple6",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple6",
        "fct-type": "function",
        "title": "untuple6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple6",
        "normalized": "(a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple7",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple7",
        "fct-type": "function",
        "title": "untuple7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple7",
        "normalized": "(a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple8",
        "fct-type": "function",
        "title": "untuple8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple8",
        "normalized": "(a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuples-homogenous-h98/docs/Data-Tuple-Homogenous.html#v:untuple9",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tuple.Homogenous",
        "fct-package": "tuples-homogenous-h98",
        "fct-signature": "(a, a, a, a, a, a, a, a, a)",
        "fct-source": "src/Data-Tuple-Homogenous.html#Tuple9",
        "fct-type": "function",
        "title": "untuple9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Homogenous",
        "module": "Data.Tuple.Homogenous",
        "name": "untuple9",
        "normalized": "(a,a,a,a,a,a,a,a,a)",
        "package": "tuples-homogenous-h98",
        "partial": "",
        "signature": "(a,a,a,a,a,a,a,a,a)"
      }
    }
  }
]