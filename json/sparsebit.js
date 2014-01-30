[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library packages the functional peal paper\n   'Sparse Bitmaps for Pattern Match Coverage' submitted to ICFP 2009\n   by Ki Yung Ahn and Tim Sheard.\n   You can look up the tutorial-like paper and the talk slides,\n   which are availabel at:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://kyagrd.dyndns.org/wiki/SparseBitmapsForPatternMatchCoverage \u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAbstract:\n\u003c/p\u003e\u003cp\u003ePattern matching coverage over Algebraic Data Types(ADTs) has most often been studied in the context of pattern compilation algorithms. However, it is worth considering the pattern matching coverage problem in isolation, since general solutions will be independent of the specifics of any implementation or language.\n\u003c/p\u003e\u003cp\u003eWe define an intuitive and mathematically well-established bit masking semantics for pattern match coverage. We design and implement a sparse bitmap data structure, which realizes this semantics in a compact and flexible manner. This bitmap data structure supports computing coverage solutions of large programs incrementally from coverage solutions of sub-programs. It can also be used as a common data representation for pattern coverage shared between different tools (e.g., compilers, linting tools, software analysis tools) that need pattern match coverage information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "module",
        "fct-source": "src/Data-SparseBIT.html",
        "fct-type": "module",
        "title": "SparseBIT"
      },
      "index": {
        "description": "This library packages the functional peal paper Sparse Bitmaps for Pattern Match Coverage submitted to ICFP by Ki Yung Ahn and Tim Sheard You can look up the tutorial-like paper and the talk slides which are availabel at http kyagrd.dyndns.org wiki SparseBitmapsForPatternMatchCoverage Abstract Pattern matching coverage over Algebraic Data Types ADTs has most often been studied in the context of pattern compilation algorithms However it is worth considering the pattern matching coverage problem in isolation since general solutions will be independent of the specifics of any implementation or language We define an intuitive and mathematically well-established bit masking semantics for pattern match coverage We design and implement sparse bitmap data structure which realizes this semantics in compact and flexible manner This bitmap data structure supports computing coverage solutions of large programs incrementally from coverage solutions of sub-programs It can also be used as common data representation for pattern coverage shared between different tools e.g compilers linting tools software analysis tools that need pattern match coverage information",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "SparseBIT",
        "normalized": "",
        "package": "sparsebit",
        "partial": "Sparse BIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#t:BIT",
      "description": {
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "data",
        "fct-source": "src/Data-SparseBIT.html#BIT",
        "fct-type": "data",
        "title": "BIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "BIT",
        "normalized": "",
        "package": "sparsebit",
        "partial": "BIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#t:Expand",
      "description": {
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "class",
        "fct-source": "src/Data-SparseBIT.html#Expand",
        "fct-type": "class",
        "title": "Expand"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "Expand",
        "normalized": "",
        "package": "sparsebit",
        "partial": "Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:-42-.",
      "description": {
        "fct-descr": "\u003cp\u003etype product\n\u003c/p\u003e\u003cp\u003eType product of two types is usually a product type (or pair type).\n Conceptually, for example, \u003ccode\u003eInt *. Bool = (Int,Bool)\u003c/code\u003e.\n Note, (\u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e) have at least one identity \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e,\n and type product against such identities may not result in a prodcut type.\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "t -\u003e t -\u003e t",
        "fct-source": "src/Data-SparseBIT.html#%2A.",
        "fct-type": "method",
        "title": "(*.)"
      },
      "index": {
        "description": "type product Type product of two types is usually product type or pair type Conceptually for example Int Bool Int Bool Note have at least one identity unit and type product against such identities may not result in prodcut type",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(*.) *.",
        "normalized": "a-\u003ea-\u003ea",
        "package": "sparsebit",
        "partial": "",
        "signature": "t-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:-61-:-61-",
      "description": {
        "fct-descr": "\u003cp\u003econgruence modulo \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e BIT t -\u003e Bool",
        "fct-source": "src/Data-SparseBIT.html#%3D%3A%3D",
        "fct-type": "function",
        "title": "(=:=)"
      },
      "index": {
        "description": "congruence modulo reduce",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(=:=) =:=",
        "normalized": "BIT a-\u003eBIT a-\u003eBool",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eBIT t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-124-",
      "description": {
        "fct-descr": "\u003cp\u003ebitwise-or\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e BIT t -\u003e BIT t",
        "fct-source": "src/Data-SparseBIT.html#.%7C",
        "fct-type": "function",
        "title": "(.|)"
      },
      "index": {
        "description": "bitwise-or",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(.|) .|",
        "normalized": "BIT a-\u003eBIT a-\u003eBIT a",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eBIT t-\u003eBIT t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-124-.",
      "description": {
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "[BIT t] -\u003e [BIT t] -\u003e [BIT t]",
        "fct-source": "src/Data-SparseBIT.html#.%7C.",
        "fct-type": "function",
        "title": "(.|.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(.|.) .|.",
        "normalized": "[BIT a]-\u003e[BIT a]-\u003e[BIT a]",
        "package": "sparsebit",
        "partial": "",
        "signature": "[BIT t]-\u003e[BIT t]-\u003e[BIT t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-38-",
      "description": {
        "fct-descr": "\u003cp\u003ebitwise-and\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e BIT t -\u003e BIT t",
        "fct-source": "src/Data-SparseBIT.html#.%26",
        "fct-type": "function",
        "title": "(.&)"
      },
      "index": {
        "description": "bitwise-and",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(.&) .&",
        "normalized": "BIT a-\u003eBIT a-\u003eBIT a",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eBIT t-\u003eBIT t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-38-.",
      "description": {
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "[BIT t] -\u003e [BIT t] -\u003e [BIT t]",
        "fct-source": "src/Data-SparseBIT.html#.%26.",
        "fct-type": "function",
        "title": "(.&.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(.&.) .&.",
        "normalized": "[BIT a]-\u003e[BIT a]-\u003e[BIT a]",
        "package": "sparsebit",
        "partial": "",
        "signature": "[BIT t]-\u003e[BIT t]-\u003e[BIT t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-42--42-",
      "description": {
        "fct-descr": "\u003cp\u003etensor product\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e BIT t -\u003e BIT t",
        "fct-source": "src/Data-SparseBIT.html#.%2A%2A",
        "fct-type": "function",
        "title": "(.**)"
      },
      "index": {
        "description": "tensor product",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "(.**) .**",
        "normalized": "BIT a-\u003eBIT a-\u003eBIT a",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eBIT t-\u003eBIT t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:Bs",
      "description": {
        "fct-descr": "\u003cp\u003esequence of bits (possibley nested)\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "Bs [BIT t] t",
        "fct-source": "src/Data-SparseBIT.html#BIT",
        "fct-type": "function",
        "title": "Bs"
      },
      "index": {
        "description": "sequence of bits possibley nested",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "Bs",
        "normalized": "Bs[BIT a]a",
        "package": "sparsebit",
        "partial": "Bs",
        "signature": "Bs[BIT t]t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:I",
      "description": {
        "fct-descr": "\u003cp\u003eall 1 bits (identity on (\u003ccode\u003e\u003ca\u003e.&\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "I t",
        "fct-source": "src/Data-SparseBIT.html#BIT",
        "fct-type": "function",
        "title": "I"
      },
      "index": {
        "description": "all bits identity on",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "I",
        "normalized": "",
        "package": "sparsebit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:O",
      "description": {
        "fct-descr": "\u003cp\u003eall 0 bits (identity on (\u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "O t",
        "fct-source": "src/Data-SparseBIT.html#BIT",
        "fct-type": "function",
        "title": "O"
      },
      "index": {
        "description": "all bits identity on",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "O",
        "normalized": "",
        "package": "sparsebit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:expand",
      "description": {
        "fct-descr": "\u003cp\u003etype expansion rule\n\u003c/p\u003e\u003cp\u003eThe definition of expand summarizes the structure of algebraic data type.\n Conceptually, for example,\n\u003c/p\u003e\u003cpre\u003e expand unit = [] -- the non-expandable degenerate type\n expand Bool = [unit,unit]  -- True, False\n expand (Maybe a) = [unit, a] -- Nothing, Just a\n\u003c/pre\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "t -\u003e [t]",
        "fct-source": "src/Data-SparseBIT.html#expand",
        "fct-type": "method",
        "title": "expand"
      },
      "index": {
        "description": "type expansion rule The definition of expand summarizes the structure of algebraic data type Conceptually for example expand unit the non-expandable degenerate type expand Bool unit unit True False expand Maybe unit Nothing Just",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "expand",
        "normalized": "a-\u003e[a]",
        "package": "sparsebit",
        "partial": "",
        "signature": "t-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:neg",
      "description": {
        "fct-descr": "\u003cp\u003ebitwise negation\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e BIT t",
        "fct-source": "src/Data-SparseBIT.html#neg",
        "fct-type": "function",
        "title": "neg"
      },
      "index": {
        "description": "bitwise negation",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "neg",
        "normalized": "BIT a-\u003eBIT a",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eBIT t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:printB",
      "description": {
        "fct-descr": "\u003cp\u003eprint a newline ended string produced from \u003ccode\u003e\u003ca\u003eshowB'\u003c/a\u003e\u003c/code\u003e on the standard output\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e IO ()",
        "fct-source": "src/Data-SparseBIT.html#printB",
        "fct-type": "function",
        "title": "printB"
      },
      "index": {
        "description": "print newline ended string produced from showB on the standard output",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "printB",
        "normalized": "BIT a-\u003eIO()",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:reduce",
      "description": {
        "fct-descr": "\u003cp\u003ereduce \u003ccode\u003e\u003ca\u003eBIT\u003c/a\u003e\u003c/code\u003es to canonical forms\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e BIT t",
        "fct-source": "src/Data-SparseBIT.html#reduce",
        "fct-type": "function",
        "title": "reduce"
      },
      "index": {
        "description": "reduce BIT to canonical forms",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "reduce",
        "normalized": "BIT a-\u003eBIT a",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eBIT t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:showB",
      "description": {
        "fct-descr": "\u003cp\u003eturn bits into strings without the type information\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e showB (Bs [O unit,I unit] Bool) = \"[01]\"\n\u003c/pre\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e String",
        "fct-source": "src/Data-SparseBIT.html#showB",
        "fct-type": "function",
        "title": "showB"
      },
      "index": {
        "description": "turn bits into strings without the type information For example showB Bs unit unit Bool",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "showB",
        "normalized": "BIT a-\u003eString",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:showB-39-",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003eshowB\u003c/a\u003e\u003c/code\u003e but takes off the outermost square bracket\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e showB' (Bs [O unit,I unit] Bool) = \"01\"\n\u003c/pre\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e String",
        "fct-source": "src/Data-SparseBIT.html#showB%27",
        "fct-type": "function",
        "title": "showB'"
      },
      "index": {
        "description": "same as showB but takes off the outermost square bracket For example showB Bs unit unit Bool",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "showB'",
        "normalized": "BIT a-\u003eString",
        "package": "sparsebit",
        "partial": "B'",
        "signature": "BIT t-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:typeof",
      "description": {
        "fct-descr": "\u003cp\u003eextract the type information of a given bit\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e typeof (O Bool) = Bool \n typeof (I Bool) = Int\n typeof (Bs [O unit,I unit] Bool) = Bool\n\u003c/pre\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "BIT t -\u003e t",
        "fct-source": "src/Data-SparseBIT.html#typeof",
        "fct-type": "function",
        "title": "typeof"
      },
      "index": {
        "description": "extract the type information of given bit For example typeof Bool Bool typeof Bool Int typeof Bs unit unit Bool Bool",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "typeof",
        "normalized": "BIT a-\u003ea",
        "package": "sparsebit",
        "partial": "",
        "signature": "BIT t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:unit",
      "description": {
        "fct-descr": "\u003cp\u003eidentity on (\u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e unit *. a = a = a *. unit\n\u003c/pre\u003e\u003cp\u003eNote, there can be other identities depending on how you define \u003ccode\u003e\u003ca\u003eexpand\u003c/a\u003e\u003c/code\u003e.\n Any type \u003ccode\u003ea\u003c/code\u003e that satisfy \u003ccode\u003enull(expand a)\u003c/code\u003e is an identity on (\u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e).\n The \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e is the most simple and basic identity among them,\n which serves as a degenerate type for nullary data data constants.\n\u003c/p\u003e",
        "fct-module": "Data.SparseBIT",
        "fct-package": "sparsebit",
        "fct-signature": "t",
        "fct-source": "src/Data-SparseBIT.html#unit",
        "fct-type": "method",
        "title": "unit"
      },
      "index": {
        "description": "identity on unit unit Note there can be other identities depending on how you define expand Any type that satisfy null expand is an identity on The unit is the most simple and basic identity among them which serves as degenerate type for nullary data data constants",
        "hierarchy": "Data SparseBIT",
        "module": "Data.SparseBIT",
        "name": "unit",
        "normalized": "",
        "package": "sparsebit",
        "partial": "",
        "signature": ""
      }
    }
  }
]