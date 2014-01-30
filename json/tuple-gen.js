[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "module",
        "fct-source": "src/Data-Tuple-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "tuple-gen",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#t:Enum",
      "description": {
        "fct-descr": "\u003cp\u003eClass \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e defines operations on sequentially ordered types.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eenumFrom\u003c/code\u003e... methods are used in Haskell's translation of\n arithmetic sequences.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e may be derived for any enumeration type (types\n whose constructors have no fields).  The nullary constructors are\n assumed to be numbered left-to-right by \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e0\u003c/code\u003e through \u003ccode\u003en-1\u003c/code\u003e.\n See Chapter 10 of the \u003cem\u003eHaskell Report\u003c/em\u003e for more details.\n\u003c/p\u003e\u003cp\u003eFor any type that is an instance of class \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e as well as \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e,\n the following should hold:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The calls \u003ccode\u003e\u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should result in\n   a runtime error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e should give a runtime error if the \n   result value is not representable in the result type.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e 7 :: \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is an error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eenumFrom\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFromThen\u003c/a\u003e\u003c/code\u003e should be defined with an implicit bound,\n   thus:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e    enumFrom     x   = enumFromTo     x maxBound\n    enumFromThen x y = enumFromThenTo x y bound\n      where\n        bound | fromEnum y \u003e= fromEnum x = maxBound\n              | otherwise                = minBound\n\u003c/pre\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Enum"
      },
      "index": {
        "description": "Class Enum defines operations on sequentially ordered types The enumFrom methods are used in Haskell translation of arithmetic sequences Instances of Enum may be derived for any enumeration type types whose constructors have no fields The nullary constructors are assumed to be numbered left-to-right by fromEnum from through n-1 See Chapter of the Haskell Report for more details For any type that is an instance of class Bounded as well as Enum the following should hold The calls succ maxBound and pred minBound should result in runtime error fromEnum and toEnum should give runtime error if the result value is not representable in the result type For example toEnum Bool is an error enumFrom and enumFromThen should be defined with an implicit bound thus enumFrom enumFromTo maxBound enumFromThen enumFromThenTo bound where bound fromEnum fromEnum maxBound otherwise minBound",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "tuple-gen",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all10s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 10-tuples (of enumerable values) so that the sum of the 10 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i, j)]",
        "fct-source": "src/Data-Tuple-Enum.html#all10s",
        "fct-type": "function",
        "title": "all10s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all10s",
        "normalized": "[(a,b,c,d,e,f,g,h,i,j)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i,j)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all11s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 11-tuples (of enumerable values) so that the sum of the 11 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i, j, k)]",
        "fct-source": "src/Data-Tuple-Enum.html#all11s",
        "fct-type": "function",
        "title": "all11s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all11s",
        "normalized": "[(a,b,c,d,e,f,g,h,i,j,k)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i,j,k)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all12s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 12-tuples (of enumerable values) so that the sum of the 12 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i, j, k, l)]",
        "fct-source": "src/Data-Tuple-Enum.html#all12s",
        "fct-type": "function",
        "title": "all12s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all12s",
        "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all13s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 13-tuples (of enumerable values) so that the sum of the 13 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i, j, k, l, m)]",
        "fct-source": "src/Data-Tuple-Enum.html#all13s",
        "fct-type": "function",
        "title": "all13s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all13s",
        "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l,m)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l,m)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all14s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 14-tuples (of enumerable values) so that the sum of the 14 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i, j, k, l, m, n)]",
        "fct-source": "src/Data-Tuple-Enum.html#all14s",
        "fct-type": "function",
        "title": "all14s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all14s",
        "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all15s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 15-tuples (of enumerable values) so that the sum of the 15 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)]",
        "fct-source": "src/Data-Tuple-Enum.html#all15s",
        "fct-type": "function",
        "title": "all15s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all15s",
        "normalized": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all2s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 2-tuples (of enumerable values) so that the sum of the 2 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b)]",
        "fct-source": "src/Data-Tuple-Enum.html#all2s",
        "fct-type": "function",
        "title": "all2s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all2s",
        "normalized": "[(a,b)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all3s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 3-tuples (of enumerable values) so that the sum of the 3 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c)]",
        "fct-source": "src/Data-Tuple-Enum.html#all3s",
        "fct-type": "function",
        "title": "all3s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all3s",
        "normalized": "[(a,b,c)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all4s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 4-tuples (of enumerable values) so that the sum of the 4 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d)]",
        "fct-source": "src/Data-Tuple-Enum.html#all4s",
        "fct-type": "function",
        "title": "all4s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all4s",
        "normalized": "[(a,b,c,d)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all5s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 5-tuples (of enumerable values) so that the sum of the 5 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e)]",
        "fct-source": "src/Data-Tuple-Enum.html#all5s",
        "fct-type": "function",
        "title": "all5s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all5s",
        "normalized": "[(a,b,c,d,e)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all6s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 6-tuples (of enumerable values) so that the sum of the 6 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f)]",
        "fct-source": "src/Data-Tuple-Enum.html#all6s",
        "fct-type": "function",
        "title": "all6s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all6s",
        "normalized": "[(a,b,c,d,e,f)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all7s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 7-tuples (of enumerable values) so that the sum of the 7 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g)]",
        "fct-source": "src/Data-Tuple-Enum.html#all7s",
        "fct-type": "function",
        "title": "all7s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all7s",
        "normalized": "[(a,b,c,d,e,f,g)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all8s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 8-tuples (of enumerable values) so that the sum of the 8 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h)]",
        "fct-source": "src/Data-Tuple-Enum.html#all8s",
        "fct-type": "function",
        "title": "all8s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all8s",
        "normalized": "[(a,b,c,d,e,f,g,h)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:all9s",
      "description": {
        "fct-descr": "\u003cp\u003egenerate all 9-tuples (of enumerable values) so that the sum of the 9 fromEnum-values is monotonic increasing\n   fromEnum :: a -\u003e Int\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[(a, b, c, d, e, f, g, h, i)]",
        "fct-source": "src/Data-Tuple-Enum.html#all9s",
        "fct-type": "function",
        "title": "all9s"
      },
      "index": {
        "description": "generate all tuples of enumerable values so that the sum of the fromEnum-values is monotonic increasing fromEnum Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "all9s",
        "normalized": "[(a,b,c,d,e,f,g,h,i)]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[(a,b,c,d,e,f,g,h,i)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFrom",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFrom"
      },
      "index": {
        "description": "Used in Haskell translation of",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "enumFrom",
        "normalized": "a-\u003e[a]",
        "package": "tuple-gen",
        "partial": "From",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFromThen",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFromThen"
      },
      "index": {
        "description": "Used in Haskell translation of",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "enumFromThen",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "tuple-gen",
        "partial": "From Then",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFromThenTo",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n,n'..m]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e a -\u003e a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFromThenTo"
      },
      "index": {
        "description": "Used in Haskell translation of",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "enumFromThenTo",
        "normalized": "a-\u003ea-\u003ea-\u003e[a]",
        "package": "tuple-gen",
        "partial": "From Then To",
        "signature": "a-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in Haskell's translation of \u003ccode\u003e[n..m]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e a -\u003e [a]",
        "fct-type": "method",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Used in Haskell translation of n..m",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003e[a]",
        "package": "tuple-gen",
        "partial": "From To",
        "signature": "a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:fe",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "[Int] -\u003e Int",
        "fct-source": "src/Data-Tuple-Enum.html#fe",
        "fct-type": "function",
        "title": "fe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "fe",
        "normalized": "[Int]-\u003eInt",
        "package": "tuple-gen",
        "partial": "",
        "signature": "[Int]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from10Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9) -\u003e (((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9)",
        "fct-source": "src/Data-Tuple-Enum.html#from10Tuple",
        "fct-type": "function",
        "title": "from10Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from10Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from11Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) -\u003e ((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10)",
        "fct-source": "src/Data-Tuple-Enum.html#from11Tuple",
        "fct-type": "function",
        "title": "from11Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from11Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from12Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) -\u003e (((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11)",
        "fct-source": "src/Data-Tuple-Enum.html#from12Tuple",
        "fct-type": "function",
        "title": "from12Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from12Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from13Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) -\u003e ((((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11), J a12)",
        "fct-source": "src/Data-Tuple-Enum.html#from13Tuple",
        "fct-type": "function",
        "title": "from13Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from13Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from14Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) -\u003e (((((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11), J a12), J a13)",
        "fct-source": "src/Data-Tuple-Enum.html#from14Tuple",
        "fct-type": "function",
        "title": "from14Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from14Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e(((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from15Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) -\u003e ((((((((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8), J a9), J a10), J a11), J a12), J a13), J a14)",
        "fct-source": "src/Data-Tuple-Enum.html#from15Tuple",
        "fct-type": "function",
        "title": "from15Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from15Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)-\u003e((((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from2Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1) -\u003e (J a, J a1)",
        "fct-source": "src/Data-Tuple-Enum.html#from2Tuple",
        "fct-type": "function",
        "title": "from2Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from2Tuple",
        "normalized": "(a,a)-\u003e(J a,J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a)-\u003e(J a,J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from3Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2) -\u003e ((J a, J a1), J a2)",
        "fct-source": "src/Data-Tuple-Enum.html#from3Tuple",
        "fct-type": "function",
        "title": "from3Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from3Tuple",
        "normalized": "(a,a,a)-\u003e((J a,J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a)-\u003e((J a,J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from4Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3) -\u003e (((J a, J a1), J a2), J a3)",
        "fct-source": "src/Data-Tuple-Enum.html#from4Tuple",
        "fct-type": "function",
        "title": "from4Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from4Tuple",
        "normalized": "(a,a,a,a)-\u003e(((J a,J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a)-\u003e(((J a,J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from5Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4) -\u003e ((((J a, J a1), J a2), J a3), J a4)",
        "fct-source": "src/Data-Tuple-Enum.html#from5Tuple",
        "fct-type": "function",
        "title": "from5Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from5Tuple",
        "normalized": "(a,a,a,a,a)-\u003e((((J a,J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a)-\u003e((((J a,J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from6Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5) -\u003e (((((J a, J a1), J a2), J a3), J a4), J a5)",
        "fct-source": "src/Data-Tuple-Enum.html#from6Tuple",
        "fct-type": "function",
        "title": "from6Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from6Tuple",
        "normalized": "(a,a,a,a,a,a)-\u003e(((((J a,J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a)-\u003e(((((J a,J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from7Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6) -\u003e ((((((J a, J a1), J a2), J a3), J a4), J a5), J a6)",
        "fct-source": "src/Data-Tuple-Enum.html#from7Tuple",
        "fct-type": "function",
        "title": "from7Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from7Tuple",
        "normalized": "(a,a,a,a,a,a,a)-\u003e((((((J a,J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a)-\u003e((((((J a,J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from8Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7) -\u003e (((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7)",
        "fct-source": "src/Data-Tuple-Enum.html#from8Tuple",
        "fct-type": "function",
        "title": "from8Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from8Tuple",
        "normalized": "(a,a,a,a,a,a,a,a)-\u003e(((((((J a,J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a)-\u003e(((((((J a,J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:from9Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(a, a1, a2, a3, a4, a5, a6, a7, a8) -\u003e ((((((((J a, J a1), J a2), J a3), J a4), J a5), J a6), J a7), J a8)",
        "fct-source": "src/Data-Tuple-Enum.html#from9Tuple",
        "fct-type": "function",
        "title": "from9Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "from9Tuple",
        "normalized": "(a,a,a,a,a,a,a,a,a)-\u003e((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(a,a,a,a,a,a,a,a,a)-\u003e((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:fromEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is implementation-dependent what \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e returns when\n applied to a value that is too large to fit in an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e Int",
        "fct-type": "method",
        "title": "fromEnum"
      },
      "index": {
        "description": "Convert to an Int It is implementation-dependent what fromEnum returns when applied to value that is too large to fit in an Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "fromEnum",
        "normalized": "a-\u003eInt",
        "package": "tuple-gen",
        "partial": "Enum",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:hyperplaneSize",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Tuple-Enum.html#hyperplaneSize",
        "fct-type": "function",
        "title": "hyperplaneSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "hyperplaneSize",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "tuple-gen",
        "partial": "Size",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:pred",
      "description": {
        "fct-descr": "\u003cp\u003ethe predecessor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e subtracts 1.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "pred"
      },
      "index": {
        "description": "the predecessor of value For numeric types pred subtracts",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "pred",
        "normalized": "a-\u003ea",
        "package": "tuple-gen",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:succ",
      "description": {
        "fct-descr": "\u003cp\u003ethe successor of a value.  For numeric types, \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e adds 1.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "a -\u003e a",
        "fct-type": "method",
        "title": "succ"
      },
      "index": {
        "description": "the successor of value For numeric types succ adds",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "succ",
        "normalized": "a-\u003ea",
        "package": "tuple-gen",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:te",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "Int -\u003e Int -\u003e [Int]",
        "fct-source": "src/Data-Tuple-Enum.html#te",
        "fct-type": "function",
        "title": "te"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "te",
        "normalized": "Int-\u003eInt-\u003e[Int]",
        "package": "tuple-gen",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to10Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9)",
        "fct-source": "src/Data-Tuple-Enum.html#to10Tuple",
        "fct-type": "function",
        "title": "to10Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to10Tuple",
        "normalized": "(((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to11Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10)",
        "fct-source": "src/Data-Tuple-Enum.html#to11Tuple",
        "fct-type": "function",
        "title": "to11Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to11Tuple",
        "normalized": "((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to12Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11)",
        "fct-source": "src/Data-Tuple-Enum.html#to12Tuple",
        "fct-type": "function",
        "title": "to12Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to12Tuple",
        "normalized": "(((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to13Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11), J t12) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12)",
        "fct-source": "src/Data-Tuple-Enum.html#to13Tuple",
        "fct-type": "function",
        "title": "to13Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to13Tuple",
        "normalized": "((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to14Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(((((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11), J t12), J t13) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13)",
        "fct-source": "src/Data-Tuple-Enum.html#to14Tuple",
        "fct-type": "function",
        "title": "to14Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to14Tuple",
        "normalized": "(((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(((((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to15Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((((((((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8), J t9), J t10), J t11), J t12), J t13), J t14) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14)",
        "fct-source": "src/Data-Tuple-Enum.html#to15Tuple",
        "fct-type": "function",
        "title": "to15Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to15Tuple",
        "normalized": "((((((((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((((((((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to2Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(J t, J t1) -\u003e (t, t1)",
        "fct-source": "src/Data-Tuple-Enum.html#to2Tuple",
        "fct-type": "function",
        "title": "to2Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to2Tuple",
        "normalized": "(J a,J a)-\u003e(a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(J t,J t)-\u003e(t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to3Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((J t, J t1), J t2) -\u003e (t, t1, t2)",
        "fct-source": "src/Data-Tuple-Enum.html#to3Tuple",
        "fct-type": "function",
        "title": "to3Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to3Tuple",
        "normalized": "((J a,J a),J a)-\u003e(a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((J t,J t),J t)-\u003e(t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to4Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(((J t, J t1), J t2), J t3) -\u003e (t, t1, t2, t3)",
        "fct-source": "src/Data-Tuple-Enum.html#to4Tuple",
        "fct-type": "function",
        "title": "to4Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to4Tuple",
        "normalized": "(((J a,J a),J a),J a)-\u003e(a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(((J t,J t),J t),J t)-\u003e(t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to5Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((((J t, J t1), J t2), J t3), J t4) -\u003e (t, t1, t2, t3, t4)",
        "fct-source": "src/Data-Tuple-Enum.html#to5Tuple",
        "fct-type": "function",
        "title": "to5Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to5Tuple",
        "normalized": "((((J a,J a),J a),J a),J a)-\u003e(a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((((J t,J t),J t),J t),J t)-\u003e(t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to6Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(((((J t, J t1), J t2), J t3), J t4), J t5) -\u003e (t, t1, t2, t3, t4, t5)",
        "fct-source": "src/Data-Tuple-Enum.html#to6Tuple",
        "fct-type": "function",
        "title": "to6Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to6Tuple",
        "normalized": "(((((J a,J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(((((J t,J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to7Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((((((J t, J t1), J t2), J t3), J t4), J t5), J t6) -\u003e (t, t1, t2, t3, t4, t5, t6)",
        "fct-source": "src/Data-Tuple-Enum.html#to7Tuple",
        "fct-type": "function",
        "title": "to7Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to7Tuple",
        "normalized": "((((((J a,J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((((((J t,J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to8Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "(((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7) -\u003e (t, t1, t2, t3, t4, t5, t6, t7)",
        "fct-source": "src/Data-Tuple-Enum.html#to8Tuple",
        "fct-type": "function",
        "title": "to8Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to8Tuple",
        "normalized": "(((((((J a,J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "(((((((J t,J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:to9Tuple",
      "description": {
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "((((((((J t, J t1), J t2), J t3), J t4), J t5), J t6), J t7), J t8) -\u003e (t, t1, t2, t3, t4, t5, t6, t7, t8)",
        "fct-source": "src/Data-Tuple-Enum.html#to9Tuple",
        "fct-type": "function",
        "title": "to9Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "to9Tuple",
        "normalized": "((((((((J a,J a),J a),J a),J a),J a),J a),J a),J a)-\u003e(a,a,a,a,a,a,a,a,a)",
        "package": "tuple-gen",
        "partial": "Tuple",
        "signature": "((((((((J t,J t),J t),J t),J t),J t),J t),J t),J t)-\u003e(t,t,t,t,t,t,t,t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tuple-gen/docs/Data-Tuple-Enum.html#v:toEnum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tuple.Enum",
        "fct-package": "tuple-gen",
        "fct-signature": "Int -\u003e a",
        "fct-type": "method",
        "title": "toEnum"
      },
      "index": {
        "description": "Convert from an Int",
        "hierarchy": "Data Tuple Enum",
        "module": "Data.Tuple.Enum",
        "name": "toEnum",
        "normalized": "Int-\u003ea",
        "package": "tuple-gen",
        "partial": "Enum",
        "signature": "Int-\u003ea"
      }
    }
  }
]