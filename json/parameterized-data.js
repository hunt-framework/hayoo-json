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
        "word": "parameterized-data"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFSVec\u003c/a\u003e\u003c/code\u003e: Fixed sized vectors. Vectors with numerically parameterized size.\n\u003c/p\u003e\u003cp\u003eTutorial: \u003ca\u003ehttp://www.ict.kth.se/forsyde/files/tutorial/tutorial.html#FSVec\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Param.FSVec",
          "name": "FSVec",
          "package": "parameterized-data",
          "source": "src/Data-Param-FSVec.html",
          "type": "module"
        },
        "index": {
          "description": "FSVec Fixed sized vectors Vectors with numerically parameterized size Tutorial http www.ict.kth.se forsyde files tutorial tutorial.html FSVec",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "FSVec",
          "package": "parameterized-data",
          "partial": "FSVec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed-Sized Vector data type, indexed with type-level naturals, the \n   first index for all vectors is 0\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "FSVec",
          "package": "parameterized-data",
          "source": "src/Data-Param-FSVec.html#FSVec",
          "type": "data"
        },
        "index": {
          "description": "Fixed-Sized Vector data type indexed with type-level naturals the first index for all vectors is",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "FSVec",
          "package": "parameterized-data",
          "partial": "FSVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#t:FSVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess an element of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "(!)",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e i -\u003e a",
          "source": "src/Data-Param-FSVec.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Access an element of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "(!) !",
          "normalized": "FSVec a b-\u003ec-\u003eb",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ei-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate two vectors\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "(++)",
          "package": "parameterized-data",
          "signature": "FSVec s1 a -\u003e FSVec s2 a -\u003e FSVec s3 a",
          "source": "src/Data-Param-FSVec.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Concatenate two vectors",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "(++) ++",
          "normalized": "FSVec a b-\u003eFSVec a b-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s a-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCons operator, note it's not a constructor\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "(+\u003e)",
          "package": "parameterized-data",
          "signature": "a -\u003e FSVec s a -\u003e FSVec s' a",
          "source": "src/Data-Param-FSVec.html#%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Cons operator note it not constructor",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "(+\u003e) +\u003e",
          "normalized": "a-\u003eFSVec b a-\u003eFSVec c a",
          "package": "parameterized-data",
          "signature": "a-\u003eFSVec s a-\u003eFSVec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:-43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an element at the end of a vector. (Inverse of '(+\u003e)')         \n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "(\u003c+)",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e a -\u003e FSVec s' a",
          "source": "src/Data-Param-FSVec.html#%3C%2B",
          "type": "function"
        },
        "index": {
          "description": "add an element at the end of vector Inverse of",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "(\u003c+) \u003c+",
          "normalized": "FSVec a b-\u003eb-\u003eFSVec c b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ea-\u003eFSVec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:-60--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflatten a vector of vectors to a single vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "concat",
          "package": "parameterized-data",
          "signature": "FSVec s1 (FSVec s2 a) -\u003e FSVec s3 a",
          "source": "src/Data-Param-FSVec.html#concat",
          "type": "function"
        },
        "index": {
          "description": "flatten vector of vectors to single vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "concat",
          "normalized": "FSVec a(FSVec a b)-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s(FSVec s a)-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerates a vector with a given number of copies of the same element. \n\u003c/p\u003e\u003cpre\u003e FSVec\u003e copy d7 5 \n\u003c/pre\u003e\u003cpre\u003e \u003c5,5,5,5,5,5,5\u003e :: FSVec D7 Integer\n\u003c/pre\u003e",
          "module": "Data.Param.FSVec",
          "name": "copy",
          "package": "parameterized-data",
          "signature": "s -\u003e a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#copy",
          "type": "function"
        },
        "index": {
          "description": "generates vector with given number of copies of the same element FSVec copy d7 FSVec D7 Integer",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "copy",
          "normalized": "a-\u003eb-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "s-\u003ea-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the first i elements of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "drop",
          "package": "parameterized-data",
          "signature": "i -\u003e FSVec s a -\u003e FSVec s' a",
          "source": "src/Data-Param-FSVec.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Drop the first elements of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "drop",
          "normalized": "a-\u003eFSVec b c-\u003eFSVec d c",
          "package": "parameterized-data",
          "signature": "i-\u003eFSVec s a-\u003eFSVec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Param.FSVec",
          "name": "empty",
          "package": "parameterized-data",
          "signature": "FSVec D0 a",
          "source": "src/Data-Param-FSVec.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "empty",
          "package": "parameterized-data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolds a function from the right to the left  over a vector using an\n   initial value.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "foldl",
          "package": "parameterized-data",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e FSVec s b -\u003e a",
          "source": "src/Data-Param-FSVec.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Folds function from the right to the left over vector using an initial value",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eFSVec c b-\u003ea",
          "package": "parameterized-data",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eFSVec s b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolds a function from the left to the right over a vector using an \n   initial value.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "foldr",
          "package": "parameterized-data",
          "signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e FSVec s b -\u003e a",
          "source": "src/Data-Param-FSVec.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Folds function from the left to the right over vector using an initial value",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eFSVec c a-\u003eb",
          "package": "parameterized-data",
          "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003eFSVec s b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform Vector to a list\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "fromVector",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e [a]",
          "source": "src/Data-Param-FSVec.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Transform Vector to list",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "fromVector",
          "normalized": "FSVec a b-\u003e[b]",
          "package": "parameterized-data",
          "partial": "Vector",
          "signature": "FSVec s a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egenerate\u003c/a\u003e\u003c/code\u003e behaves in the same way as \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, but starts with the \n application of the supplied function to the supplied value. \n\u003c/p\u003e\u003cpre\u003e FSVec\u003e generate d5 (+1) 1\n\u003c/pre\u003e\u003cpre\u003e \u003c2,3,4,5,6\u003e :: Num a =\u003e FSVec  D5 a\n\u003c/pre\u003e",
          "module": "Data.Param.FSVec",
          "name": "generate",
          "package": "parameterized-data",
          "signature": "s -\u003e (a -\u003e a) -\u003e a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#generate",
          "type": "function"
        },
        "index": {
          "description": "generate behaves in the same way as iterate but starts with the application of the supplied function to the supplied value FSVec generate d5 Num FSVec D5",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "generate",
          "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "s-\u003e(a-\u003ea)-\u003ea-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric value-level length of a vector \n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "genericLength",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e n",
          "source": "src/Data-Param-FSVec.html#genericLength",
          "type": "function"
        },
        "index": {
          "description": "generic value-level length of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "genericLength",
          "normalized": "FSVec a b-\u003ec",
          "package": "parameterized-data",
          "partial": "Length",
          "signature": "FSVec s a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebreak a vector into subvectors of size n.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "group",
          "package": "parameterized-data",
          "signature": "n -\u003e FSVec s a -\u003e FSVec s' (FSVec n a)",
          "source": "src/Data-Param-FSVec.html#group",
          "type": "function"
        },
        "index": {
          "description": "break vector into subvectors of size",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "group",
          "normalized": "a-\u003eFSVec b c-\u003eFSVec d(FSVec a c)",
          "package": "parameterized-data",
          "signature": "n-\u003eFSVec s a-\u003eFSVec s'(FSVec n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first element of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "head",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e a",
          "source": "src/Data-Param-FSVec.html#head",
          "type": "function"
        },
        "index": {
          "description": "Take the first element of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "head",
          "normalized": "FSVec a b-\u003eb",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all but the last element of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "init",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e FSVec s' a",
          "source": "src/Data-Param-FSVec.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all but the last element of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "init",
          "normalized": "FSVec a b-\u003eFSVec c b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a vector with a given number of elements starting from an \n initial element using a supplied function for the generation of elements. \n\u003c/p\u003e\u003cpre\u003e FSVec\u003e iterate d5 (+1) 1\n\u003c/pre\u003e\u003cpre\u003e \u003c1,2,3,4,5\u003e :: Num a =\u003e FSVec D5 a\n\u003c/pre\u003e",
          "module": "Data.Param.FSVec",
          "name": "iterate",
          "package": "parameterized-data",
          "signature": "s -\u003e (a -\u003e a) -\u003e a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "generate vector with given number of elements starting from an initial element using supplied function for the generation of elements FSVec iterate d5 Num FSVec D5",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "iterate",
          "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "s-\u003e(a-\u003ea)-\u003ea-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the last element of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "last",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e a",
          "source": "src/Data-Param-FSVec.html#last",
          "type": "function"
        },
        "index": {
          "description": "Take the last element of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "last",
          "normalized": "FSVec a b-\u003eb",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue-level length of a vector \n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "length",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e Int",
          "source": "src/Data-Param-FSVec.html#length",
          "type": "function"
        },
        "index": {
          "description": "value-level length of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "length",
          "normalized": "FSVec a b-\u003eInt",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype-level version of length\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "lengthT",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e s",
          "source": "src/Data-Param-FSVec.html#lengthT",
          "type": "function"
        },
        "index": {
          "description": "type-level version of length",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "lengthT",
          "normalized": "FSVec a b-\u003ea",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:lengthT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function on all elements of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "map",
          "package": "parameterized-data",
          "signature": "(a -\u003e b) -\u003e FSVec s a -\u003e FSVec s b",
          "source": "src/Data-Param-FSVec.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply function on all elements of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eFSVec c a-\u003eFSVec c b",
          "package": "parameterized-data",
          "signature": "(a-\u003eb)-\u003eFSVec s a-\u003eFSVec s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a Vector is empty\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "null",
          "package": "parameterized-data",
          "signature": "FSVec D0 a -\u003e Bool",
          "source": "src/Data-Param-FSVec.html#null",
          "type": "function"
        },
        "index": {
          "description": "Check if Vector is empty",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "null",
          "normalized": "FSVec D a-\u003eBool",
          "package": "parameterized-data",
          "signature": "FSVec D a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a vector (Note the the size of \n   the vector string is checked to match the resulting type at runtime)\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "readFSVec",
          "package": "parameterized-data",
          "signature": "String -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#readFSVec",
          "type": "function"
        },
        "index": {
          "description": "Read vector Note the the size of the vector string is checked to match the resulting type at runtime",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "readFSVec",
          "normalized": "String-\u003eFSVec a b",
          "package": "parameterized-data",
          "partial": "FSVec",
          "signature": "String-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:readFSVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a vector, CPS version.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "readFSVecCPS",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e w) -\u003e w",
          "source": "src/Data-Param-FSVec.html#readFSVecCPS",
          "type": "function"
        },
        "index": {
          "description": "Read vector CPS version",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "readFSVecCPS",
          "normalized": "FSVec a b-\u003ec)-\u003ec",
          "package": "parameterized-data",
          "partial": "FSVec CPS",
          "signature": "FSVec s a-\u003ew)-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:readFSVecCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a vector from a list.  \n\u003c/p\u003e\u003cp\u003eUnlike unsafeVector, reallyunsafeVector doesn't have access to the \n  static size of the list and thus cannot not check it against its\n  dynamic size (which saves traversing the list at runtime to obtain \n  the dynamic length).\n\u003c/p\u003e\u003cp\u003eTherefore, reallyUnsafeVector (the name is that long on purspose)\n  can be used to gain some performance but may break the consistency\n  of the size parameter if not handled with care (i.e. the size\n  parameter can nolonger be checked statically and the fullfilment of\n  function constraints is left to the programmers judgement).\n\u003c/p\u003e\u003cp\u003eDo not use reallyUnsafeVector unless you know what you're doing!\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "reallyUnsafeVector",
          "package": "parameterized-data",
          "signature": "[a] -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#reallyUnsafeVector",
          "type": "function"
        },
        "index": {
          "description": "Build vector from list Unlike unsafeVector reallyunsafeVector doesn have access to the static size of the list and thus cannot not check it against its dynamic size which saves traversing the list at runtime to obtain the dynamic length Therefore reallyUnsafeVector the name is that long on purspose can be used to gain some performance but may break the consistency of the size parameter if not handled with care i.e the size parameter can nolonger be checked statically and the fullfilment of function constraints is left to the programmers judgement Do not use reallyUnsafeVector unless you know what you re doing",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "reallyUnsafeVector",
          "normalized": "[a]-\u003eFSVec b a",
          "package": "parameterized-data",
          "partial": "Unsafe Vector",
          "signature": "[a]-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:reallyUnsafeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace an element of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "replace",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e i -\u003e a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Replace an element of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "replace",
          "normalized": "FSVec a b-\u003ec-\u003eb-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ei-\u003ea-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereverse a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "reverse",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "reverse vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "reverse",
          "normalized": "FSVec a b-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector to the left. Note that this fuctions does not change the \n   size of a vector.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "rotl",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#rotl",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector to the left Note that this fuctions does not change the size of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "rotl",
          "normalized": "FSVec a b-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:rotl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector to the left. Note that this fuctions does not change the \n   size of a vector.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "rotr",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#rotr",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector to the left Note that this fuctions does not change the size of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "rotr",
          "normalized": "FSVec a b-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:rotr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e selects elements in the vector. The first argument\n gives the initial element, starting from zero, the second argument gives the\n stepsize between elements and the last argument gives the number of \n elements.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "select",
          "package": "parameterized-data",
          "signature": "f -\u003e s -\u003e n -\u003e FSVec i a -\u003e FSVec n a",
          "source": "src/Data-Param-FSVec.html#select",
          "type": "function"
        },
        "index": {
          "description": "The function select selects elements in the vector The first argument gives the initial element starting from zero the second argument gives the stepsize between elements and the last argument gives the number of elements",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "select",
          "normalized": "a-\u003eb-\u003ec-\u003eFSVec d e-\u003eFSVec c e",
          "package": "parameterized-data",
          "signature": "f-\u003es-\u003en-\u003eFSVec i a-\u003eFSVec n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshift a value from the left into a vector. \n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "shiftl",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#shiftl",
          "type": "function"
        },
        "index": {
          "description": "shift value from the left into vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "shiftl",
          "normalized": "FSVec a b-\u003eb-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ea-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:shiftl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshift a value from the left into a vector. \n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "shiftr",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e a -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#shiftr",
          "type": "function"
        },
        "index": {
          "description": "shift value from the left into vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "shiftr",
          "normalized": "FSVec a b-\u003eb-\u003eFSVec a b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003ea-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:shiftr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FSVec with a single element\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "singleton",
          "package": "parameterized-data",
          "signature": "a -\u003e FSVec D1 a",
          "source": "src/Data-Param-FSVec.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "FSVec with single element",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "singleton",
          "normalized": "a-\u003eFSVec D a",
          "package": "parameterized-data",
          "signature": "a-\u003eFSVec D a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all but the first element of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "tail",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e FSVec s' a",
          "source": "src/Data-Param-FSVec.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Return all but the first element of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "tail",
          "normalized": "FSVec a b-\u003eFSVec c b",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first i elements of a vector\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "take",
          "package": "parameterized-data",
          "signature": "i -\u003e FSVec s a -\u003e FSVec s' a",
          "source": "src/Data-Param-FSVec.html#take",
          "type": "function"
        },
        "index": {
          "description": "Take the first elements of vector",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "take",
          "normalized": "a-\u003eFSVec b c-\u003eFSVec d c",
          "package": "parameterized-data",
          "signature": "i-\u003eFSVec s a-\u003eFSVec s' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a vector from a list (unsafe version: The static/dynamic size of \n   the list is checked to match at runtime)\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "unsafeVector",
          "package": "parameterized-data",
          "signature": "s -\u003e [a] -\u003e FSVec s a",
          "source": "src/Data-Param-FSVec.html#unsafeVector",
          "type": "function"
        },
        "index": {
          "description": "Build vector from list unsafe version The static dynamic size of the list is checked to match at runtime",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "unsafeVector",
          "normalized": "a-\u003e[b]-\u003eFSVec a b",
          "package": "parameterized-data",
          "partial": "Vector",
          "signature": "s-\u003e[a]-\u003eFSVec s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:unsafeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunzip a vector of tuples into two vectors.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "unzip",
          "package": "parameterized-data",
          "signature": "FSVec s (a, b) -\u003e (FSVec s a, FSVec s b)",
          "source": "src/Data-Param-FSVec.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip vector of tuples into two vectors",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "unzip",
          "normalized": "FSVec a(b,c)-\u003e(FSVec a b,FSVec a c)",
          "package": "parameterized-data",
          "signature": "FSVec s(a,b)-\u003e(FSVec s a,FSVec s b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a vector from a list (CPS style)\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "vectorCPS",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e w) -\u003e w",
          "source": "src/Data-Param-FSVec.html#vectorCPS",
          "type": "function"
        },
        "index": {
          "description": "Build vector from list CPS style",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "vectorCPS",
          "normalized": "FSVec a b-\u003ec)-\u003ec",
          "package": "parameterized-data",
          "partial": "CPS",
          "signature": "FSVec s a-\u003ew)-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:vectorCPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a vector from a list (using Template Haskell)\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "vectorTH",
          "package": "parameterized-data",
          "signature": "[a] -\u003e ExpQ",
          "source": "src/Data-Param-FSVec.html#vectorTH",
          "type": "function"
        },
        "index": {
          "description": "Build vector from list using Template Haskell",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "vectorTH",
          "normalized": "[a]-\u003eExpQ",
          "package": "parameterized-data",
          "partial": "TH",
          "signature": "[a]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:vectorTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ezip two vectors into a vector of tuples.\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "zip",
          "package": "parameterized-data",
          "signature": "FSVec s a -\u003e FSVec s b -\u003e FSVec s (a, b)",
          "source": "src/Data-Param-FSVec.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip two vectors into vector of tuples",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "zip",
          "normalized": "FSVec a b-\u003eFSVec a c-\u003eFSVec a(b,c)",
          "package": "parameterized-data",
          "signature": "FSVec s a-\u003eFSVec s b-\u003eFSVec s(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies function pairwise on two vectors\n\u003c/p\u003e",
          "module": "Data.Param.FSVec",
          "name": "zipWith",
          "package": "parameterized-data",
          "signature": "(a -\u003e b -\u003e c) -\u003e FSVec s a -\u003e FSVec s b -\u003e FSVec s c",
          "source": "src/Data-Param-FSVec.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Applies function pairwise on two vectors",
          "hierarchy": "Data Param FSVec",
          "module": "Data.Param.FSVec",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eFSVec d a-\u003eFSVec d b-\u003eFSVec d c",
          "package": "parameterized-data",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eFSVec s a-\u003eFSVec s b-\u003eFSVec s c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param-FSVec.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a wrapper for all the publicly usable types and functions\n of the parameterized-data library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Param",
          "name": "Param",
          "package": "parameterized-data",
          "source": "src/Data-Param.html",
          "type": "module"
        },
        "index": {
          "description": "This module is wrapper for all the publicly usable types and functions of the parameterized-data library",
          "hierarchy": "Data Param",
          "module": "Data.Param",
          "name": "Param",
          "package": "parameterized-data",
          "partial": "Param",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parameterized-data/docs/Data-Param.html#"
      }
    }
  ]
]