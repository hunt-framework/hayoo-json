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
        "word": "sparsebit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library packages the functional peal paper\n   'Sparse Bitmaps for Pattern Match Coverage' submitted to ICFP 2009\n   by Ki Yung Ahn and Tim Sheard.\n   You can look up the tutorial-like paper and the talk slides,\n   which are availabel at:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://kyagrd.dyndns.org/wiki/SparseBitmapsForPatternMatchCoverage \u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAbstract:\n\u003c/p\u003e\u003cp\u003ePattern matching coverage over Algebraic Data Types(ADTs) has most often been studied in the context of pattern compilation algorithms. However, it is worth considering the pattern matching coverage problem in isolation, since general solutions will be independent of the specifics of any implementation or language.\n\u003c/p\u003e\u003cp\u003eWe define an intuitive and mathematically well-established bit masking semantics for pattern match coverage. We design and implement a sparse bitmap data structure, which realizes this semantics in a compact and flexible manner. This bitmap data structure supports computing coverage solutions of large programs incrementally from coverage solutions of sub-programs. It can also be used as a common data representation for pattern coverage shared between different tools (e.g., compilers, linting tools, software analysis tools) that need pattern match coverage information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SparseBIT",
          "name": "SparseBIT",
          "package": "sparsebit",
          "source": "src/Data-SparseBIT.html",
          "type": "module"
        },
        "index": {
          "description": "This library packages the functional peal paper Sparse Bitmaps for Pattern Match Coverage submitted to ICFP by Ki Yung Ahn and Tim Sheard You can look up the tutorial-like paper and the talk slides which are availabel at http kyagrd.dyndns.org wiki SparseBitmapsForPatternMatchCoverage Abstract Pattern matching coverage over Algebraic Data Types ADTs has most often been studied in the context of pattern compilation algorithms However it is worth considering the pattern matching coverage problem in isolation since general solutions will be independent of the specifics of any implementation or language We define an intuitive and mathematically well-established bit masking semantics for pattern match coverage We design and implement sparse bitmap data structure which realizes this semantics in compact and flexible manner This bitmap data structure supports computing coverage solutions of large programs incrementally from coverage solutions of sub-programs It can also be used as common data representation for pattern coverage shared between different tools e.g compilers linting tools software analysis tools that need pattern match coverage information",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "SparseBIT",
          "package": "sparsebit",
          "partial": "Sparse BIT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SparseBIT",
          "name": "BIT",
          "package": "sparsebit",
          "source": "src/Data-SparseBIT.html#BIT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "BIT",
          "package": "sparsebit",
          "partial": "BIT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#t:BIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SparseBIT",
          "name": "Expand",
          "package": "sparsebit",
          "source": "src/Data-SparseBIT.html#Expand",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "Expand",
          "package": "sparsebit",
          "partial": "Expand",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#t:Expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype product\n\u003c/p\u003e\u003cp\u003eType product of two types is usually a product type (or pair type).\n Conceptually, for example, \u003ccode\u003eInt *. Bool = (Int,Bool)\u003c/code\u003e.\n Note, (\u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e) have at least one identity \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e,\n and type product against such identities may not result in a prodcut type.\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "(*.)",
          "package": "sparsebit",
          "signature": "t -\u003e t -\u003e t",
          "source": "src/Data-SparseBIT.html#%2A.",
          "type": "method"
        },
        "index": {
          "description": "type product Type product of two types is usually product type or pair type Conceptually for example Int Bool Int Bool Note have at least one identity unit and type product against such identities may not result in prodcut type",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(*.) *.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "sparsebit",
          "signature": "t-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econgruence modulo \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "(=:=)",
          "package": "sparsebit",
          "signature": "BIT t -\u003e BIT t -\u003e Bool",
          "source": "src/Data-SparseBIT.html#%3D%3A%3D",
          "type": "function"
        },
        "index": {
          "description": "congruence modulo reduce",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(=:=) =:=",
          "normalized": "BIT a-\u003eBIT a-\u003eBool",
          "package": "sparsebit",
          "signature": "BIT t-\u003eBIT t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebitwise-or\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "(.|)",
          "package": "sparsebit",
          "signature": "BIT t -\u003e BIT t -\u003e BIT t",
          "source": "src/Data-SparseBIT.html#.%7C",
          "type": "function"
        },
        "index": {
          "description": "bitwise-or",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(.|) .|",
          "normalized": "BIT a-\u003eBIT a-\u003eBIT a",
          "package": "sparsebit",
          "signature": "BIT t-\u003eBIT t-\u003eBIT t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SparseBIT",
          "name": "(.|.)",
          "package": "sparsebit",
          "signature": "[BIT t] -\u003e [BIT t] -\u003e [BIT t]",
          "source": "src/Data-SparseBIT.html#.%7C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(.|.) .|.",
          "normalized": "[BIT a]-\u003e[BIT a]-\u003e[BIT a]",
          "package": "sparsebit",
          "signature": "[BIT t]-\u003e[BIT t]-\u003e[BIT t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebitwise-and\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "(.&)",
          "package": "sparsebit",
          "signature": "BIT t -\u003e BIT t -\u003e BIT t",
          "source": "src/Data-SparseBIT.html#.%26",
          "type": "function"
        },
        "index": {
          "description": "bitwise-and",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(.&) .&",
          "normalized": "BIT a-\u003eBIT a-\u003eBIT a",
          "package": "sparsebit",
          "signature": "BIT t-\u003eBIT t-\u003eBIT t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SparseBIT",
          "name": "(.&.)",
          "package": "sparsebit",
          "signature": "[BIT t] -\u003e [BIT t] -\u003e [BIT t]",
          "source": "src/Data-SparseBIT.html#.%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(.&.) .&.",
          "normalized": "[BIT a]-\u003e[BIT a]-\u003e[BIT a]",
          "package": "sparsebit",
          "signature": "[BIT t]-\u003e[BIT t]-\u003e[BIT t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etensor product\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "(.**)",
          "package": "sparsebit",
          "signature": "BIT t -\u003e BIT t -\u003e BIT t",
          "source": "src/Data-SparseBIT.html#.%2A%2A",
          "type": "function"
        },
        "index": {
          "description": "tensor product",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "(.**) .**",
          "normalized": "BIT a-\u003eBIT a-\u003eBIT a",
          "package": "sparsebit",
          "signature": "BIT t-\u003eBIT t-\u003eBIT t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:.-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esequence of bits (possibley nested)\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "Bs",
          "package": "sparsebit",
          "signature": "Bs [BIT t] t",
          "source": "src/Data-SparseBIT.html#BIT",
          "type": "function"
        },
        "index": {
          "description": "sequence of bits possibley nested",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "Bs",
          "normalized": "Bs[BIT a]a",
          "package": "sparsebit",
          "partial": "Bs",
          "signature": "Bs[BIT t]t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:Bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall 1 bits (identity on (\u003ccode\u003e\u003ca\u003e.&\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "I",
          "package": "sparsebit",
          "signature": "I t",
          "source": "src/Data-SparseBIT.html#BIT",
          "type": "function"
        },
        "index": {
          "description": "all bits identity on",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "I",
          "package": "sparsebit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall 0 bits (identity on (\u003ccode\u003e\u003ca\u003e.|\u003c/a\u003e\u003c/code\u003e))\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "O",
          "package": "sparsebit",
          "signature": "O t",
          "source": "src/Data-SparseBIT.html#BIT",
          "type": "function"
        },
        "index": {
          "description": "all bits identity on",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "O",
          "package": "sparsebit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype expansion rule\n\u003c/p\u003e\u003cp\u003eThe definition of expand summarizes the structure of algebraic data type.\n Conceptually, for example,\n\u003c/p\u003e\u003cpre\u003e expand unit = [] -- the non-expandable degenerate type\n expand Bool = [unit,unit]  -- True, False\n expand (Maybe a) = [unit, a] -- Nothing, Just a\n\u003c/pre\u003e",
          "module": "Data.SparseBIT",
          "name": "expand",
          "package": "sparsebit",
          "signature": "t -\u003e [t]",
          "source": "src/Data-SparseBIT.html#expand",
          "type": "method"
        },
        "index": {
          "description": "type expansion rule The definition of expand summarizes the structure of algebraic data type Conceptually for example expand unit the non-expandable degenerate type expand Bool unit unit True False expand Maybe unit Nothing Just",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "expand",
          "normalized": "a-\u003e[a]",
          "package": "sparsebit",
          "signature": "t-\u003e[t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebitwise negation\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "neg",
          "package": "sparsebit",
          "signature": "BIT t -\u003e BIT t",
          "source": "src/Data-SparseBIT.html#neg",
          "type": "function"
        },
        "index": {
          "description": "bitwise negation",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "neg",
          "normalized": "BIT a-\u003eBIT a",
          "package": "sparsebit",
          "signature": "BIT t-\u003eBIT t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprint a newline ended string produced from \u003ccode\u003e\u003ca\u003eshowB'\u003c/a\u003e\u003c/code\u003e on the standard output\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "printB",
          "package": "sparsebit",
          "signature": "BIT t -\u003e IO ()",
          "source": "src/Data-SparseBIT.html#printB",
          "type": "function"
        },
        "index": {
          "description": "print newline ended string produced from showB on the standard output",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "printB",
          "normalized": "BIT a-\u003eIO()",
          "package": "sparsebit",
          "signature": "BIT t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:printB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereduce \u003ccode\u003e\u003ca\u003eBIT\u003c/a\u003e\u003c/code\u003es to canonical forms\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "reduce",
          "package": "sparsebit",
          "signature": "BIT t -\u003e BIT t",
          "source": "src/Data-SparseBIT.html#reduce",
          "type": "function"
        },
        "index": {
          "description": "reduce BIT to canonical forms",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "reduce",
          "normalized": "BIT a-\u003eBIT a",
          "package": "sparsebit",
          "signature": "BIT t-\u003eBIT t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn bits into strings without the type information\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e showB (Bs [O unit,I unit] Bool) = \"[01]\"\n\u003c/pre\u003e",
          "module": "Data.SparseBIT",
          "name": "showB",
          "package": "sparsebit",
          "signature": "BIT t -\u003e String",
          "source": "src/Data-SparseBIT.html#showB",
          "type": "function"
        },
        "index": {
          "description": "turn bits into strings without the type information For example showB Bs unit unit Bool",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "showB",
          "normalized": "BIT a-\u003eString",
          "package": "sparsebit",
          "signature": "BIT t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:showB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003eshowB\u003c/a\u003e\u003c/code\u003e but takes off the outermost square bracket\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e showB' (Bs [O unit,I unit] Bool) = \"01\"\n\u003c/pre\u003e",
          "module": "Data.SparseBIT",
          "name": "showB'",
          "package": "sparsebit",
          "signature": "BIT t -\u003e String",
          "source": "src/Data-SparseBIT.html#showB%27",
          "type": "function"
        },
        "index": {
          "description": "same as showB but takes off the outermost square bracket For example showB Bs unit unit Bool",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "showB'",
          "normalized": "BIT a-\u003eString",
          "package": "sparsebit",
          "partial": "B'",
          "signature": "BIT t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:showB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract the type information of a given bit\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e typeof (O Bool) = Bool \n typeof (I Bool) = Int\n typeof (Bs [O unit,I unit] Bool) = Bool\n\u003c/pre\u003e",
          "module": "Data.SparseBIT",
          "name": "typeof",
          "package": "sparsebit",
          "signature": "BIT t -\u003e t",
          "source": "src/Data-SparseBIT.html#typeof",
          "type": "function"
        },
        "index": {
          "description": "extract the type information of given bit For example typeof Bool Bool typeof Bool Int typeof Bs unit unit Bool Bool",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "typeof",
          "normalized": "BIT a-\u003ea",
          "package": "sparsebit",
          "signature": "BIT t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:typeof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentity on (\u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cpre\u003e unit *. a = a = a *. unit\n\u003c/pre\u003e\u003cp\u003eNote, there can be other identities depending on how you define \u003ccode\u003e\u003ca\u003eexpand\u003c/a\u003e\u003c/code\u003e.\n Any type \u003ccode\u003ea\u003c/code\u003e that satisfy \u003ccode\u003enull(expand a)\u003c/code\u003e is an identity on (\u003ccode\u003e\u003ca\u003e*.\u003c/a\u003e\u003c/code\u003e).\n The \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e is the most simple and basic identity among them,\n which serves as a degenerate type for nullary data data constants.\n\u003c/p\u003e",
          "module": "Data.SparseBIT",
          "name": "unit",
          "package": "sparsebit",
          "signature": "t",
          "source": "src/Data-SparseBIT.html#unit",
          "type": "method"
        },
        "index": {
          "description": "identity on unit unit Note there can be other identities depending on how you define expand Any type that satisfy null expand is an identity on The unit is the most simple and basic identity among them which serves as degenerate type for nullary data data constants",
          "hierarchy": "Data SparseBIT",
          "module": "Data.SparseBIT",
          "name": "unit",
          "package": "sparsebit",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sparsebit/docs/Data-SparseBIT.html#v:unit"
      }
    }
  ]
]