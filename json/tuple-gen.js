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
        "word": "tuple-gen"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "Enum",
          "package": "tuple-gen",
          "source": "src/Data-Tuple-Enum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "Enum",
          "package": "tuple-gen",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
          "module": "Data.Tuple.Enum",
          "name": "Enum",
          "package": "tuple-gen",
          "type": "class"
        },
        "index": {
          "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "Enum",
          "package": "tuple-gen",
          "partial": "Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#t:Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 10-tuples (of enumerable values) so that the sum of the 10 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all10s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i, j)]",
          "source": "src/Data-Tuple-Enum.html#all10s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all10s",
          "normalized": "[(a,b,c,d,e,f,g,h,i,j)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i,j)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all10s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 11-tuples (of enumerable values) so that the sum of the 11 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all11s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i, j, k)]",
          "source": "src/Data-Tuple-Enum.html#all11s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all11s",
          "normalized": "[(a,b,c,d,e,f,g,h,i,j,k)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i,j,k)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all11s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 12-tuples (of enumerable values) so that the sum of the 12 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all12s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i, j, k, l)]",
          "source": "src/Data-Tuple-Enum.html#all12s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all12s",
          "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all12s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 13-tuples (of enumerable values) so that the sum of the 13 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all13s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i, j, k, l, m)]",
          "source": "src/Data-Tuple-Enum.html#all13s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all13s",
          "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l,m)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l,m)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all13s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 14-tuples (of enumerable values) so that the sum of the 14 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all14s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i, j, k, l, m, n)]",
          "source": "src/Data-Tuple-Enum.html#all14s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all14s",
          "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all14s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 15-tuples (of enumerable values) so that the sum of the 15 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all15s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)]",
          "source": "src/Data-Tuple-Enum.html#all15s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all15s",
          "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all15s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 2-tuples (of enumerable values) so that the sum of the 2 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all2s",
          "package": "tuple-gen",
          "signature": "[(a, b)]",
          "source": "src/Data-Tuple-Enum.html#all2s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all2s",
          "normalized": "[(a,b)]",
          "package": "tuple-gen",
          "signature": "[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all2s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 3-tuples (of enumerable values) so that the sum of the 3 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all3s",
          "package": "tuple-gen",
          "signature": "[(a, b, c)]",
          "source": "src/Data-Tuple-Enum.html#all3s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all3s",
          "normalized": "[(a,b,c)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all3s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 4-tuples (of enumerable values) so that the sum of the 4 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all4s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d)]",
          "source": "src/Data-Tuple-Enum.html#all4s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all4s",
          "normalized": "[(a,b,c,d)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all4s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 5-tuples (of enumerable values) so that the sum of the 5 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all5s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e)]",
          "source": "src/Data-Tuple-Enum.html#all5s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all5s",
          "normalized": "[(a,b,c,d,e)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all5s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 6-tuples (of enumerable values) so that the sum of the 6 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all6s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f)]",
          "source": "src/Data-Tuple-Enum.html#all6s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all6s",
          "normalized": "[(a,b,c,d,e,f)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all6s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 7-tuples (of enumerable values) so that the sum of the 7 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all7s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g)]",
          "source": "src/Data-Tuple-Enum.html#all7s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all7s",
          "normalized": "[(a,b,c,d,e,f,g)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all7s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 8-tuples (of enumerable values) so that the sum of the 8 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all8s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h)]",
          "source": "src/Data-Tuple-Enum.html#all8s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all8s",
          "normalized": "[(a,b,c,d,e,f,g,h)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all8s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate all 9-tuples (of enumerable values) so that the sum of the 9 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "all9s",
          "package": "tuple-gen",
          "signature": "[(a, b, c, d, e, f, g, h, i)]",
          "source": "src/Data-Tuple-Enum.html#all9s",
          "type": "function"
        },
        "index": {
          "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "all9s",
          "normalized": "[(a,b,c,d,e,f,g,h,i)]",
          "package": "tuple-gen",
          "signature": "[(a,b,c,d,e,f,g,h,i)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all9s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "enumFrom",
          "package": "tuple-gen",
          "signature": "a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "enumFrom",
          "normalized": "a-\u003e[a]",
          "package": "tuple-gen",
          "partial": "From",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "enumFromThen",
          "package": "tuple-gen",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "enumFromThen",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "tuple-gen",
          "partial": "From Then",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFromThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "enumFromThenTo",
          "package": "tuple-gen",
          "signature": "a -\u003e a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]",
          "package": "tuple-gen",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "enumFromTo",
          "package": "tuple-gen",
          "signature": "a -\u003e a -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Used in Haskell translation of n..m",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "tuple-gen",
          "partial": "From To",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "fe",
          "package": "tuple-gen",
          "signature": "[Int] -\u003e Int",
          "source": "src/Data-Tuple-Enum.html#fe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "fe",
          "normalized": "[Int]-\u003eInt",
          "package": "tuple-gen",
          "signature": "[Int]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:fe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from10Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9) -\u003e (((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9)",
          "source": "src/Data-Tuple-Enum.html#from10Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from10Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from10Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from11Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) -\u003e ((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10)",
          "source": "src/Data-Tuple-Enum.html#from11Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from11Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from11Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from12Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) -\u003e (((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11)",
          "source": "src/Data-Tuple-Enum.html#from12Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from12Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from12Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from13Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) -\u003e ((((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11), J a12)",
          "source": "src/Data-Tuple-Enum.html#from13Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from13Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from13Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from14Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) -\u003e (((((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11), J a12), J a13)",
          "source": "src/Data-Tuple-Enum.html#from14Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from14Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from14Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from15Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) -\u003e ((((((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11), J a12), J a13), J a14)",
          "source": "src/Data-Tuple-Enum.html#from15Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from15Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from15Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from2Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1) -\u003e (J a, J a1)",
          "source": "src/Data-Tuple-Enum.html#from2Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from2Tuple",
          "normalized": "(a,a)-\u003e(J a,J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a)-\u003e(J a,J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from2Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from3Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2) -\u003e ((J a, J a1), J a2)",
          "source": "src/Data-Tuple-Enum.html#from3Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from3Tuple",
          "normalized": "(a,a,a)-\u003e((J a,J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a)-\u003e((J a,J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from3Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from4Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3) -\u003e (((J a, J a1), J a2), J a3)",
          "source": "src/Data-Tuple-Enum.html#from4Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from4Tuple",
          "normalized": "(a,a,a,a)-\u003e(((J a,J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a)-\u003e(((J a,J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from4Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from5Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4) -\u003e ((((J a, J a1), J a2), J a3), J a4)",
          "source": "src/Data-Tuple-Enum.html#from5Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from5Tuple",
          "normalized": "(a,a,a,a,a)-\u003e((((J a,J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a)-\u003e((((J a,J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from5Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from6Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5) -\u003e (((((J a, J a1), J a2), J a3), J a4), J a5)",
          "source": "src/Data-Tuple-Enum.html#from6Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from6Tuple",
          "normalized": "(a,a,a,a,a,a)-\u003e(((((J a,J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a)-\u003e(((((J a,J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from6Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from7Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6) -\u003e ((((((J a, J a1), J a2), J a3), J a4), J a5), J a6)",
          "source": "src/Data-Tuple-Enum.html#from7Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from7Tuple",
          "normalized": "(a,a,a,a,a,a,a)-\u003e((((((J a,J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a)-\u003e((((((J a,J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from7Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from8Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7) -\u003e (((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7)",
          "source": "src/Data-Tuple-Enum.html#from8Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from8Tuple",
          "normalized": "(a,a,a,a,a,a,a,a)-\u003e(((((((J a,J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a)-\u003e(((((((J a,J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from8Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "from9Tuple",
          "package": "tuple-gen",
          "signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8) -\u003e ((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8)",
          "source": "src/Data-Tuple-Enum.html#from9Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "from9Tuple",
          "normalized": "(a,a,a,a,a,a,a,a,a)-\u003e((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(a,a,a,a,a,a,a,a,a)-\u003e((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from9Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "fromEnum",
          "package": "tuple-gen",
          "signature": "a -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "fromEnum",
          "normalized": "a-\u003eInt",
          "package": "tuple-gen",
          "partial": "Enum",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:fromEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "hyperplaneSize",
          "package": "tuple-gen",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Tuple-Enum.html#hyperplaneSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "hyperplaneSize",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "tuple-gen",
          "partial": "Size",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:hyperplaneSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "pred",
          "package": "tuple-gen",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the predecessor of value For numeric types pred subtracts",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "pred",
          "normalized": "a-\u003ea",
          "package": "tuple-gen",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "succ",
          "package": "tuple-gen",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "the successor of value For numeric types succ adds",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "succ",
          "normalized": "a-\u003ea",
          "package": "tuple-gen",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "te",
          "package": "tuple-gen",
          "signature": "Int -\u003e Int -\u003e [Int]",
          "source": "src/Data-Tuple-Enum.html#te",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "te",
          "normalized": "Int-\u003eInt-\u003e[Int]",
          "package": "tuple-gen",
          "signature": "Int-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:te"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to10Tuple",
          "package": "tuple-gen",
          "signature": "(((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9)",
          "source": "src/Data-Tuple-Enum.html#to10Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to10Tuple",
          "normalized": "(((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to10Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to11Tuple",
          "package": "tuple-gen",
          "signature": "((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10)",
          "source": "src/Data-Tuple-Enum.html#to11Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to11Tuple",
          "normalized": "((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to11Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to12Tuple",
          "package": "tuple-gen",
          "signature": "(((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11)",
          "source": "src/Data-Tuple-Enum.html#to12Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to12Tuple",
          "normalized": "(((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to12Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to13Tuple",
          "package": "tuple-gen",
          "signature": "((((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11), J t12) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12)",
          "source": "src/Data-Tuple-Enum.html#to13Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to13Tuple",
          "normalized": "((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to13Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to14Tuple",
          "package": "tuple-gen",
          "signature": "(((((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11), J t12), J t13) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13)",
          "source": "src/Data-Tuple-Enum.html#to14Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to14Tuple",
          "normalized": "(((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(((((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to14Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to15Tuple",
          "package": "tuple-gen",
          "signature": "((((((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11), J t12), J t13), J t14) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14)",
          "source": "src/Data-Tuple-Enum.html#to15Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to15Tuple",
          "normalized": "((((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((((((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to15Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to2Tuple",
          "package": "tuple-gen",
          "signature": "(J t, J t1) -\u003e (t, t1)",
          "source": "src/Data-Tuple-Enum.html#to2Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to2Tuple",
          "normalized": "(J a,J a)-\u003e(a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(J t,J t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to2Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to3Tuple",
          "package": "tuple-gen",
          "signature": "((J t, J t1), J t2) -\u003e (t, t1, t2)",
          "source": "src/Data-Tuple-Enum.html#to3Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to3Tuple",
          "normalized": "((J a,J a),J a)-\u003e(a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((J t,J t),J t)-\u003e(t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to3Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to4Tuple",
          "package": "tuple-gen",
          "signature": "(((J t, J t1), J t2), J t3) -\u003e (t, t1, t2, t3)",
          "source": "src/Data-Tuple-Enum.html#to4Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to4Tuple",
          "normalized": "(((J a,J a),J a),J a)-\u003e(a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(((J t,J t),J t),J t)-\u003e(t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to4Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to5Tuple",
          "package": "tuple-gen",
          "signature": "((((J t, J t1), J t2), J t3), J t4) -\u003e (t, t1, t2, t3, t4)",
          "source": "src/Data-Tuple-Enum.html#to5Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to5Tuple",
          "normalized": "((((J a,J a),J a),J a),J a)-\u003e(a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((((J t,J t),J t),J t),J t)-\u003e(t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to5Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to6Tuple",
          "package": "tuple-gen",
          "signature": "(((((J t, J t1), J t2), J t3), J t4), J t5) -\u003e (t, t1, t2, t3, t4, t5)",
          "source": "src/Data-Tuple-Enum.html#to6Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to6Tuple",
          "normalized": "(((((J a,J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(((((J t,J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to6Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to7Tuple",
          "package": "tuple-gen",
          "signature": "((((((J t, J t1), J t2), J t3), J t4), J t5), J t6) -\u003e (t, t1, t2, t3, t4, t5, t6)",
          "source": "src/Data-Tuple-Enum.html#to7Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to7Tuple",
          "normalized": "((((((J a,J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((((((J t,J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to7Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to8Tuple",
          "package": "tuple-gen",
          "signature": "(((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7) -\u003e (t, t1, t2, t3, t4, t5, t6, t7)",
          "source": "src/Data-Tuple-Enum.html#to8Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to8Tuple",
          "normalized": "(((((((J a,J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "(((((((J t,J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to8Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Enum",
          "name": "to9Tuple",
          "package": "tuple-gen",
          "signature": "((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8)",
          "source": "src/Data-Tuple-Enum.html#to9Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "to9Tuple",
          "normalized": "((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a)",
          "package": "tuple-gen",
          "partial": "Tuple",
          "signature": "((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to9Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tuple.Enum",
          "name": "toEnum",
          "package": "tuple-gen",
          "signature": "Int -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Convert from an Int",
          "hierarchy": "Data Tuple Enum",
          "module": "Data.Tuple.Enum",
          "name": "toEnum",
          "normalized": "Int-\u003ea",
          "package": "tuple-gen",
          "partial": "Enum",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:toEnum"
      }
    }
  ]
]