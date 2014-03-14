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
        "word": "type-int"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type-level binary numbers, positive and negative with infinite\n precision. This forms a nice commutative ring with multiplicative identity\n like we would expect from a representation for Z.\n\u003c/p\u003e\u003cp\u003eThe numbers are represented as a Boolean Ring over a countable set of\n variables, in which for every element in the set there exists an n in N\n and a b in {T,F} such that for all n'\u003e=n in N, x_i = b.\n\u003c/p\u003e\u003cp\u003eFor uniqueness we always choose the least such n when representing numbers\n this allows us to run most computations backwards. When we can't, and such\n a fundep would be implied, we obtain it by combining semi-operations that\n together yield the appropriate class fundep list.\n\u003c/p\u003e\u003cp\u003eReuses T and F from the Type.Boolean as the infinite tail of the 2s\n complement binary number. \n\u003c/p\u003e\u003cp\u003eTODO: TDivMod, TGCD\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "Internals",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html",
          "type": "module"
        },
        "index": {
          "description": "Simple type-level binary numbers positive and negative with infinite precision This forms nice commutative ring with multiplicative identity like we would expect from representation for The numbers are represented as Boolean Ring over countable set of variables in which for every element in the set there exists an in and in such that for all in For uniqueness we always choose the least such when representing numbers this allows us to run most computations backwards When we can and such fundep would be implied we obtain it by combining semi-operations that together yield the appropriate class fundep list Reuses and from the Type.Boolean as the infinite tail of the complement binary number TODO TDivMod TGCD",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "Internals",
          "package": "type-int",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "I",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#I",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "I",
          "package": "type-int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the least significant bit of a as d and returns a'.\n Can also be used to prepend bit d onto a' obtaining a.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "LSB",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#LSB",
          "type": "class"
        },
        "index": {
          "description": "Extracts the least significant bit of as and returns Can also be used to prepend bit onto obtaining",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "LSB",
          "package": "type-int",
          "partial": "LSB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:LSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "Negative",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#Negative",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "Negative",
          "package": "type-int",
          "partial": "Negative",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "O",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#O",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "O",
          "package": "type-int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "Positive",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#Positive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "Positive",
          "package": "type-int",
          "partial": "Positive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "SignZero",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#SignZero",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "SignZero",
          "package": "type-int",
          "partial": "Sign Zero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:SignZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the absolute value of a\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TAbs",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TAbs",
          "type": "class"
        },
        "index": {
          "description": "Return the absolute value of",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TAbs",
          "package": "type-int",
          "partial": "TAbs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReversible adder with extra fundeps.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TAdd",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TAdd",
          "type": "class"
        },
        "index": {
          "description": "Reversible adder with extra fundeps",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TAdd",
          "package": "type-int",
          "partial": "TAdd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-reversible addition. Kept for efficiency purposes.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TAdd'",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TAdd%27",
          "type": "class"
        },
        "index": {
          "description": "Non-reversible addition Kept for efficiency purposes",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TAdd'",
          "package": "type-int",
          "partial": "TAdd'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAdd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symmetrical full adder, that does not yield normal form answers.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TAddC'",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TAddC%27",
          "type": "class"
        },
        "index": {
          "description": "symmetrical full adder that does not yield normal form answers",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TAddC'",
          "package": "type-int",
          "partial": "TAdd C'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAddC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe don't want to have to carry the closure parameter around explicitly everywhere, so we\n   shed it here.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TBinary",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TBinary",
          "type": "class"
        },
        "index": {
          "description": "We don want to have to carry the closure parameter around explicitly everywhere so we shed it here",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TBinary",
          "package": "type-int",
          "partial": "TBinary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur set of digits is closed to retain the properties needed for most of the classes herein\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TCBinary",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TCBinary",
          "type": "class"
        },
        "index": {
          "description": "Our set of digits is closed to retain the properties needed for most of the classes herein",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TCBinary",
          "package": "type-int",
          "partial": "TCBinary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TCBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange bit #b in a to c in {T,F}, yielding d.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TChangeBit",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TChangeBit",
          "type": "class"
        },
        "index": {
          "description": "change bit in to in yielding",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TChangeBit",
          "package": "type-int",
          "partial": "TChange Bit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TChangeBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoggle the value of bit #b in a, yielding c\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TComplementBit",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TComplementBit",
          "type": "class"
        },
        "index": {
          "description": "toggle the value of bit in yielding",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TComplementBit",
          "package": "type-int",
          "partial": "TComplement Bit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TComplementBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of bits set. Since we may have an infinite tail of 1s, we return\n a negative number in such cases indicating how many bits are NOT set.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TCountBits",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TCountBits",
          "type": "class"
        },
        "index": {
          "description": "Count the number of bits set Since we may have an infinite tail of we return negative number in such cases indicating how many bits are NOT set",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TCountBits",
          "package": "type-int",
          "partial": "TCount Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TCountBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of bits set, but track whether the number is positive or negative\n to simplify casing. Since we may have an infinite tail of 1s, we return a negative\n number in such cases indicating how many bits are NOT set.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TCountBits'",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TCountBits%27",
          "type": "class"
        },
        "index": {
          "description": "Count the number of bits set but track whether the number is positive or negative to simplify casing Since we may have an infinite tail of we return negative number in such cases indicating how many bits are NOT set",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TCountBits'",
          "package": "type-int",
          "partial": "TCount Bits'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TCountBits-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the lsb of the number is true\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TEven",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TEven",
          "type": "class"
        },
        "index": {
          "description": "Returns true if the lsb of the number is true",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TEven",
          "package": "type-int",
          "partial": "TEven",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget bit #b in a as c in {T,F}\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TGetBit",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TGetBit",
          "type": "class"
        },
        "index": {
          "description": "get bit in as in",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TGetBit",
          "package": "type-int",
          "partial": "TGet Bit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TGetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the number is less than zero\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TIsNegative",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TIsNegative",
          "type": "class"
        },
        "index": {
          "description": "Returns true if the number is less than zero",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TIsNegative",
          "package": "type-int",
          "partial": "TIs Negative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TIsNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the number is greater than zero\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TIsPositive",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TIsPositive",
          "type": "class"
        },
        "index": {
          "description": "Returns true if the number is greater than zero",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TIsPositive",
          "package": "type-int",
          "partial": "TIs Positive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TIsPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the number is equal to zero\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TIsZero",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TIsZero",
          "type": "class"
        },
        "index": {
          "description": "Returns true if the number is equal to zero",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TIsZero",
          "package": "type-int",
          "partial": "TIs Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TIsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication: a * b = c\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TMul",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TMul",
          "type": "class"
        },
        "index": {
          "description": "Multiplication",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TMul",
          "package": "type-int",
          "partial": "TMul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShed the additional reduction parameter from TNF'\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TNF",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TNF",
          "type": "class"
        },
        "index": {
          "description": "Shed the additional reduction parameter from TNF",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TNF",
          "package": "type-int",
          "partial": "TNF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a number into normal form, but track whether further reductions\n may be necessary if this number is extended for efficiency.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TNF'",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TNF%27",
          "type": "class"
        },
        "index": {
          "description": "Transform number into normal form but track whether further reductions may be necessary if this number is extended for efficiency",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TNF'",
          "package": "type-int",
          "partial": "TNF'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TNF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTNeg obtains the 2s complement of a number and is reversible\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TNeg",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TNeg",
          "type": "class"
        },
        "index": {
          "description": "TNeg obtains the complement of number and is reversible",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TNeg",
          "package": "type-int",
          "partial": "TNeg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the lsb of the number if false\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TOdd",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TOdd",
          "type": "class"
        },
        "index": {
          "description": "Returns true if the lsb of the number if false",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TOdd",
          "package": "type-int",
          "partial": "TOdd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TOdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponentiation: a^b = c (only defined for non-negative exponents)\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TPow",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TPow",
          "type": "class"
        },
        "index": {
          "description": "Exponentiation only defined for non-negative exponents",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TPow",
          "package": "type-int",
          "partial": "TPow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset bit #b in a to T, yielding c.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TSetBit",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TSetBit",
          "type": "class"
        },
        "index": {
          "description": "set bit in to yielding",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TSetBit",
          "package": "type-int",
          "partial": "TSet Bit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TSetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift a right b places obtaining c in normal form.\n | If b is negative then we shift left.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TShift",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TShift",
          "type": "class"
        },
        "index": {
          "description": "Shift right places obtaining in normal form If is negative then we shift left",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TShift",
          "package": "type-int",
          "partial": "TShift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift a right b places obtaining c. If b is negative then we shift left.\n | TShift' does not yield normal form answers.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TShift'",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TShift%27",
          "type": "class"
        },
        "index": {
          "description": "Shift right places obtaining If is negative then we shift left TShift does not yield normal form answers",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TShift'",
          "package": "type-int",
          "partial": "TShift'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TShift-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-reversible subtraction. Kept for efficiency purposes.\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TSub'",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TSub%27",
          "type": "class"
        },
        "index": {
          "description": "Non-reversible subtraction Kept for efficiency purposes",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TSub'",
          "package": "type-int",
          "partial": "TSub'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TSub-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the unique successor for any normalized binary number\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TSucc",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TSucc",
          "type": "class"
        },
        "index": {
          "description": "Finds the unique successor for any normalized binary number",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TSucc",
          "package": "type-int",
          "partial": "TSucc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset bit #b in a to F, yielding c\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "TUnSetBit",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#TUnSetBit",
          "type": "class"
        },
        "index": {
          "description": "set bit in to yielding",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "TUnSetBit",
          "package": "type-int",
          "partial": "TUn Set Bit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TUnSetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassert 2n+1 != n\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "XI",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#XI",
          "type": "class"
        },
        "index": {
          "description": "assert",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "XI",
          "package": "type-int",
          "partial": "XI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:XI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eassert 2n != n\n\u003c/p\u003e",
          "module": "Data.Type.Binary.Internals",
          "name": "XO",
          "package": "type-int",
          "source": "src/Data-Type-Binary-Internals.html#XO",
          "type": "class"
        },
        "index": {
          "description": "assert",
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "XO",
          "package": "type-int",
          "partial": "XO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:XO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "fromTBinary",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#fromTBinary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "fromTBinary",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "TBinary",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:fromTBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "t2n",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#t2n",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "t2n",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:t2n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "t2np1",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#t2np1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "t2np1",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:t2np1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tAbs",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tAbs",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Abs",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tAdd",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tAdd",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Add",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tAdd'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tAdd%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tAdd'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Add'",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tAdd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tBSL",
          "package": "type-int",
          "signature": "a' -\u003e d -\u003e a",
          "source": "src/Data-Type-Binary-Internals.html#tBSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tBSL",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "BSL",
          "signature": "a'-\u003ed-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tBSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tChangeBit",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Type-Binary-Internals.html#tChangeBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tChangeBit",
          "normalized": "a-\u003eb-\u003ec-\u003ed",
          "package": "type-int",
          "partial": "Change Bit",
          "signature": "a-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tChangeBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tComplementBit",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tComplementBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tComplementBit",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Complement Bit",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tComplementBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tCountBits",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tCountBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tCountBits",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Count Bits",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tCountBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tEven",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tEven",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tEven",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Even",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tGetBit",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tGetBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tGetBit",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Get Bit",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tGetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tIsNegative",
          "package": "type-int",
          "signature": "n -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tIsNegative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tIsNegative",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Is Negative",
          "signature": "n-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tIsNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tIsPositive",
          "package": "type-int",
          "signature": "n -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tIsPositive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tIsPositive",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Is Positive",
          "signature": "n-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tIsPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tIsZero",
          "package": "type-int",
          "signature": "n -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tIsZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tIsZero",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Is Zero",
          "signature": "n-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tIsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tLSB",
          "package": "type-int",
          "signature": "a -\u003e d -\u003e a'",
          "source": "src/Data-Type-Binary-Internals.html#tLSB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tLSB",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "LSB",
          "signature": "a-\u003ed-\u003ea'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tLSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tMul",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tMul",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Mul",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tNF",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tNF",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "NF",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tNeg",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tNeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tNeg",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Neg",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tOdd",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tOdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tOdd",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Odd",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tOdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tPow",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tPow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tPow",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Pow",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tPred",
          "package": "type-int",
          "signature": "m -\u003e n",
          "source": "src/Data-Type-Binary-Internals.html#tPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tPred",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Pred",
          "signature": "m-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tSetBit",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tSetBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tSetBit",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Set Bit",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tShift",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tShift",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Shift",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tSub",
          "package": "type-int",
          "signature": "c -\u003e a -\u003e b",
          "source": "src/Data-Type-Binary-Internals.html#tSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tSub",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Sub",
          "signature": "c-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tSub'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tSub%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tSub'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Sub'",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSub-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tSucc",
          "package": "type-int",
          "signature": "n -\u003e m",
          "source": "src/Data-Type-Binary-Internals.html#tSucc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tSucc",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Succ",
          "signature": "n-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Binary.Internals",
          "name": "tUnSetBit",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Binary-Internals.html#tUnSetBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Binary Internals",
          "module": "Data.Type.Binary.Internals",
          "name": "tUnSetBit",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Un Set Bit",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tUnSetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a simple way to construct type level binaries.\n $(binaryE 24) returns an undefined value with the same type as the \n Type.Binary with value 24.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Binary.TH",
          "name": "TH",
          "package": "type-int",
          "source": "src/Data-Type-Binary-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Provides simple way to construct type level binaries binaryE returns an undefined value with the same type as the Type.Binary with value",
          "hierarchy": "Data Type Binary TH",
          "module": "Data.Type.Binary.TH",
          "name": "TH",
          "package": "type-int",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e$(binaryE n) returns an undefined value of the appropriate TBinary instance\n\u003c/p\u003e",
          "module": "Data.Type.Binary.TH",
          "name": "binaryE",
          "package": "type-int",
          "signature": "a -\u003e ExpQ",
          "source": "src/Data-Type-Binary-TH.html#binaryE",
          "type": "function"
        },
        "index": {
          "description": "binaryE returns an undefined value of the appropriate TBinary instance",
          "hierarchy": "Data Type Binary TH",
          "module": "Data.Type.Binary.TH",
          "name": "binaryE",
          "normalized": "a-\u003eExpQ",
          "package": "type-int",
          "signature": "a-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-TH.html#v:binaryE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e$(binaryT n) returns the appropriate TBinary instance\n\u003c/p\u003e",
          "module": "Data.Type.Binary.TH",
          "name": "binaryT",
          "package": "type-int",
          "signature": "a -\u003e TypeQ",
          "source": "src/Data-Type-Binary-TH.html#binaryT",
          "type": "function"
        },
        "index": {
          "description": "binaryT returns the appropriate TBinary instance",
          "hierarchy": "Data Type Binary TH",
          "module": "Data.Type.Binary.TH",
          "name": "binaryT",
          "normalized": "a-\u003eTypeQ",
          "package": "type-int",
          "signature": "a-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-TH.html#v:binaryT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type-level binary numbers, positive and negative with infinite\n precision. This forms a nice commutative ring with multiplicative identity\n like we would expect from a representation for Z.\n\u003c/p\u003e\u003cp\u003eThe numbers are represented as a Boolean Ring over a countable set of\n variables, in which for every element in the set there exists an n in N\n and a b in {T,F} such that forall n' \u003e= n in N, x_i = b.\n\u003c/p\u003e\u003cp\u003eFor uniqueness we always choose the least such n when representing numbers\n this allows us to run most computations backwards. When we can't, and such\n a fundep would be implied, we obtain it by combining semi-operations that\n together yield the appropriate class fundep list.\n\u003c/p\u003e\u003cp\u003eThe goal here was to pull together many of the good ideas I've seen from\n various sources, and sprinkle a two's complement negative number\n representation on top.\n\u003c/p\u003e\u003cp\u003eReuses T and F from the Type.Boolean as the infinite tail of the 2s\n complement binary number. I'm particularly fond of the symmetry exhibited\n in the full adder.\n\u003c/p\u003e\u003cp\u003eTODO: \u003ccode\u003eTDivMod, TImplies, TGCD, TBit, TComplementBit, TSetBit\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Binary",
          "name": "Binary",
          "package": "type-int",
          "source": "src/Data-Type-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Simple type-level binary numbers positive and negative with infinite precision This forms nice commutative ring with multiplicative identity like we would expect from representation for The numbers are represented as Boolean Ring over countable set of variables in which for every element in the set there exists an in and in such that forall in For uniqueness we always choose the least such when representing numbers this allows us to run most computations backwards When we can and such fundep would be implied we obtain it by combining semi-operations that together yield the appropriate class fundep list The goal here was to pull together many of the good ideas ve seen from various sources and sprinkle two complement negative number representation on top Reuses and from the Type.Boolean as the infinite tail of the complement binary number particularly fond of the symmetry exhibited in the full adder TODO TDivMod TImplies TGCD TBit TComplementBit TSetBit",
          "hierarchy": "Data Type Binary",
          "module": "Data.Type.Binary",
          "name": "Binary",
          "package": "type-int",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple closed type-level booleans.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Boolean",
          "name": "Boolean",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html",
          "type": "module"
        },
        "index": {
          "description": "Simple closed type-level booleans",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "Boolean",
          "package": "type-int",
          "partial": "Boolean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "F",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#F",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "F",
          "package": "type-int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "T",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "T",
          "package": "type-int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-Level a \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e b = c\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TAnd",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TAnd",
          "type": "class"
        },
        "index": {
          "description": "Type-Level and",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TAnd",
          "package": "type-int",
          "partial": "TAnd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e...and every boolean is in that set.\n This lets us avoid carrying the closure parameter around\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TBool",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TBool",
          "type": "class"
        },
        "index": {
          "description": "and every boolean is in that set This lets us avoid carrying the closure parameter around",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TBool",
          "package": "type-int",
          "partial": "TBool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-Level: if t then x else y\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TIf",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TIf",
          "type": "class"
        },
        "index": {
          "description": "Type-Level if then else",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TIf",
          "package": "type-int",
          "partial": "TIf",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-Level: a \u003ccode\u003eimplies\u003c/code\u003e b = c\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TImplies",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TImplies",
          "type": "class"
        },
        "index": {
          "description": "Type-Level implies",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TImplies",
          "package": "type-int",
          "partial": "TImplies",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TImplies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-Level: not a\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TNot",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TNot",
          "type": "class"
        },
        "index": {
          "description": "Type-Level not",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TNot",
          "package": "type-int",
          "partial": "TNot",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-Level a \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e b = c\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TOr",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TOr",
          "type": "class"
        },
        "index": {
          "description": "Type-Level or",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TOr",
          "package": "type-int",
          "partial": "TOr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimplemented this way rather than directly so that Binary can extend it properly.\n otherwise the normal form restriction makes that nigh impossible.\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TXOr",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TXOr",
          "type": "class"
        },
        "index": {
          "description": "implemented this way rather than directly so that Binary can extend it properly otherwise the normal form restriction makes that nigh impossible",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TXOr",
          "package": "type-int",
          "partial": "TXOr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TXOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-Level: a \u003ccode\u003exor\u003c/code\u003e b = c\n\u003c/p\u003e",
          "module": "Data.Type.Boolean",
          "name": "TXOr'",
          "package": "type-int",
          "source": "src/Data-Type-Boolean.html#TXOr%27",
          "type": "class"
        },
        "index": {
          "description": "Type-Level xor",
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "TXOr'",
          "package": "type-int",
          "partial": "TXOr'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TXOr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tAnd",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Boolean.html#tAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tAnd",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "And",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tF",
          "package": "type-int",
          "signature": "F",
          "source": "src/Data-Type-Boolean.html#tF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tF",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tIf",
          "package": "type-int",
          "signature": "t -\u003e x -\u003e y -\u003e z",
          "source": "src/Data-Type-Boolean.html#tIf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tIf",
          "normalized": "a-\u003eb-\u003ec-\u003ed",
          "package": "type-int",
          "partial": "If",
          "signature": "t-\u003ex-\u003ey-\u003ez",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tImplies",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Boolean.html#tImplies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tImplies",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Implies",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tImplies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tNot",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Boolean.html#tNot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tNot",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Not",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tOr",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Boolean.html#tOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tOr",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Or",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tT",
          "package": "type-int",
          "signature": "T",
          "source": "src/Data-Type-Boolean.html#tT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tT",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tXOr",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Boolean.html#tXOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tXOr",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "XOr",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tXOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Boolean",
          "name": "tXOr'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Boolean.html#tXOr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Boolean",
          "module": "Data.Type.Boolean",
          "name": "tXOr'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "XOr'",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tXOr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStage1: Lay the ground work for all sorts of Template Haskell hackery \n in the later stages. Only a handful of class specifications in this file\n are for later public consumption, and none of those are fleshed out here.\n\u003c/p\u003e\u003cp\u003eThis multiple-stage implementation is necessitated by the way Template \n Haskell is implemented in GHC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Hex.Stage1",
          "name": "Stage1",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html",
          "type": "module"
        },
        "index": {
          "description": "Stage1 Lay the ground work for all sorts of Template Haskell hackery in the later stages Only handful of class specifications in this file are for later public consumption and none of those are fleshed out here This multiple-stage implementation is necessitated by the way Template Haskell is implemented in GHC",
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "Stage1",
          "package": "type-int",
          "partial": "Stage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "LSN",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#LSN",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "LSN",
          "package": "type-int",
          "partial": "LSN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:LSN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "SHR1",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#SHR1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "SHR1",
          "package": "type-int",
          "partial": "SHR",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:SHR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "TAddC'",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#TAddC%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "TAddC'",
          "package": "type-int",
          "partial": "TAdd C'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TAddC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "TEven",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#TEven",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "TEven",
          "package": "type-int",
          "partial": "TEven",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "THex",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#THex",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "THex",
          "package": "type-int",
          "partial": "THex",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:THex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "TNF'",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#TNF%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "TNF'",
          "package": "type-int",
          "partial": "TNF'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TNF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "TSucc",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#TSucc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "TSucc",
          "package": "type-int",
          "partial": "TSucc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "Trichotomy",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage1.html#Trichotomy",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "Trichotomy",
          "package": "type-int",
          "partial": "Trichotomy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:Trichotomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "a",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "a",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "b",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "b",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "c",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "c",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "concatMapM",
          "package": "type-int",
          "signature": "(a -\u003e m [b]) -\u003e [a] -\u003e m [b]",
          "source": "src/Data-Type-Hex-Stage1.html#concatMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "concatMapM",
          "normalized": "(a-\u003eb[c])-\u003e[a]-\u003eb[c]",
          "package": "type-int",
          "partial": "Map",
          "signature": "(a-\u003em[b])-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "d",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "d",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "f",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "f",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "fromTHex",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Hex-Stage1.html#fromTHex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "fromTHex",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "THex",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:fromTHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "h",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#x",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "h",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:h"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "h0",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#x0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "h0",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:h0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "hF",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#xF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "hF",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:hF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "hex",
          "package": "type-int",
          "signature": "String",
          "source": "src/Data-Type-Hex-Stage1.html#hex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "hex",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "hn",
          "package": "type-int",
          "signature": "[Name]",
          "source": "src/Data-Type-Hex-Stage1.html#xn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "hn",
          "normalized": "[Name]",
          "package": "type-int",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:hn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "lsn",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "lsn",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:lsn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "mkHT",
          "package": "type-int",
          "signature": "Name -\u003e Dec",
          "source": "src/Data-Type-Hex-Stage1.html#mkHT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "mkHT",
          "normalized": "Name-\u003eDec",
          "package": "type-int",
          "partial": "HT",
          "signature": "Name-\u003eDec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:mkHT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "mkXT",
          "package": "type-int",
          "signature": "Name -\u003e Dec",
          "source": "src/Data-Type-Hex-Stage1.html#mkXT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "mkXT",
          "normalized": "Name-\u003eDec",
          "package": "type-int",
          "partial": "XT",
          "signature": "Name-\u003eDec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:mkXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "negative",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#tnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "negative",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "positive",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#tnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "positive",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "shr1",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "shr1",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:shr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "signzero",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#tnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "signzero",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:signzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "t",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "t",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "taddc'",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "taddc'",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:taddc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "teven",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "teven",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:teven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "thex",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "thex",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:thex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "tnf'",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "tnf'",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:tnf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "tnot",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#tnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "tnot",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:tnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "trichotomy",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "trichotomy",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:trichotomy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "tsucc",
          "package": "type-int",
          "signature": "Name",
          "source": "src/Data-Type-Hex-Stage1.html#lsn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "tsucc",
          "package": "type-int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:tsucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "wrapI",
          "package": "type-int",
          "signature": "[a] -\u003e (a -\u003e Type) -\u003e [Dec]",
          "source": "src/Data-Type-Hex-Stage1.html#wrapI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "wrapI",
          "normalized": "[a]-\u003e(a-\u003eType)-\u003e[Dec]",
          "package": "type-int",
          "signature": "[a]-\u003e(a-\u003eType)-\u003e[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:wrapI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "x",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#x",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "x",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "x0",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#x0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "x0",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:x0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "x0F",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#x0F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "x0F",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:x0F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "xF",
          "package": "type-int",
          "signature": "[Type]",
          "source": "src/Data-Type-Hex-Stage1.html#xF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "xF",
          "normalized": "[Type]",
          "package": "type-int",
          "signature": "[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "xh",
          "package": "type-int",
          "signature": "[(Type, Type)]",
          "source": "src/Data-Type-Hex-Stage1.html#xh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "xh",
          "normalized": "[(Type,Type)]",
          "package": "type-int",
          "signature": "[(Type,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "xh0",
          "package": "type-int",
          "signature": "[(Type, Type)]",
          "source": "src/Data-Type-Hex-Stage1.html#xh0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "xh0",
          "normalized": "[(Type,Type)]",
          "package": "type-int",
          "signature": "[(Type,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xh0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "xhF",
          "package": "type-int",
          "signature": "[(Type, Type)]",
          "source": "src/Data-Type-Hex-Stage1.html#xhF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "xhF",
          "normalized": "[(Type,Type)]",
          "package": "type-int",
          "signature": "[(Type,Type)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xhF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage1",
          "name": "xn",
          "package": "type-int",
          "signature": "[Name]",
          "source": "src/Data-Type-Hex-Stage1.html#xn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage1",
          "module": "Data.Type.Hex.Stage1",
          "name": "xn",
          "normalized": "[Name]",
          "package": "type-int",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {},
        "index": {
          "hierarchy": "getContentsFromDoc",
          "module": "getContentsFromDoc"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage2.html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStage3: Define everything else. The juicier bits are then exposed via \u003ca\u003eData.Type.Hex\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Hex.Stage3",
          "name": "Stage3",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html",
          "type": "module"
        },
        "index": {
          "description": "Stage3 Define everything else The juicier bits are then exposed via Data.Type.Hex",
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "Stage3",
          "package": "type-int",
          "partial": "Stage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TAdd",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TAdd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TAdd",
          "package": "type-int",
          "partial": "TAdd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TAdd'",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TAdd%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TAdd'",
          "package": "type-int",
          "partial": "TAdd'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TAdd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TBinary2Hex",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TBinary2Hex",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TBinary2Hex",
          "package": "type-int",
          "partial": "TBinary Hex",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TBinary2Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "THex2Binary",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#THex2Binary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "THex2Binary",
          "package": "type-int",
          "partial": "THex Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:THex2Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "THex2Binary'",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#THex2Binary%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "THex2Binary'",
          "package": "type-int",
          "partial": "THex Binary'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:THex2Binary-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "THexBinary",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#THexBinary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "THexBinary",
          "package": "type-int",
          "partial": "THex Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:THexBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TIsNegative",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TIsNegative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TIsNegative",
          "package": "type-int",
          "partial": "TIs Negative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TIsNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TIsPositive",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TIsPositive",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TIsPositive",
          "package": "type-int",
          "partial": "TIs Positive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TIsPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TIsZero",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TIsZero",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TIsZero",
          "package": "type-int",
          "partial": "TIs Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TIsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple peasant multiplier. TODO: exploit 2s complement and reverse the worst cases\n\u003c/p\u003e",
          "module": "Data.Type.Hex.Stage3",
          "name": "TMul",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TMul",
          "type": "class"
        },
        "index": {
          "description": "simple peasant multiplier TODO exploit complement and reverse the worst cases",
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TMul",
          "package": "type-int",
          "partial": "TMul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TNF",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TNF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TNF",
          "package": "type-int",
          "partial": "TNF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TNeg",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TNeg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TNeg",
          "package": "type-int",
          "partial": "TNeg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epeasant exponentiator\n\u003c/p\u003e",
          "module": "Data.Type.Hex.Stage3",
          "name": "TPow",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TPow",
          "type": "class"
        },
        "index": {
          "description": "peasant exponentiator",
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TPow",
          "package": "type-int",
          "partial": "TPow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epeasant exponentiator with explicit binary exponent\n\u003c/p\u003e",
          "module": "Data.Type.Hex.Stage3",
          "name": "TPow'",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TPow%27",
          "type": "class"
        },
        "index": {
          "description": "peasant exponentiator with explicit binary exponent",
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TPow'",
          "package": "type-int",
          "partial": "TPow'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TPow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "TSub'",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TSub%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "TSub'",
          "package": "type-int",
          "partial": "TSub'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TSub-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e$(hexE n) returns an undefined value of the appropriate THex instance\n\u003c/p\u003e",
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "hexE",
          "package": "type-int",
          "signature": "a -\u003e Exp",
          "source": "src/Data-Type-Hex-Stage3.html#hexE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:hexE\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:hexE\"]"
        },
        "index": {
          "description": "hexE returns an undefined value of the appropriate THex instance",
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "hexE",
          "normalized": "a-\u003eExp",
          "package": "type-int",
          "signature": "a-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:hexE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e$(hexT n) returns the appropriate THex instance\n\u003c/p\u003e",
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "hexT",
          "package": "type-int",
          "signature": "a -\u003e Type",
          "source": "src/Data-Type-Hex-Stage3.html#hexT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:hexT\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:hexT\"]"
        },
        "index": {
          "description": "hexT returns the appropriate THex instance",
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "hexT",
          "normalized": "a-\u003eType",
          "package": "type-int",
          "signature": "a-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:hexT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tAdd",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Hex-Stage3.html#tAdd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAdd\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tAdd\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tAdd",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Add",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "tAdd'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Hex-Stage3.html#tAdd%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tAdd'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Add'",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAdd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "tAddC'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Type-Hex-Stage3.html#tAddC%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tAddC'",
          "normalized": "a-\u003eb-\u003ec-\u003ed",
          "package": "type-int",
          "partial": "Add C'",
          "signature": "a-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAddC-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "tAddF'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e d",
          "source": "src/Data-Type-Hex-Stage3.html#tAddF%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tAddF'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Add F'",
          "signature": "a-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAddF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "tBinary2Hex",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tBinary2Hex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tBinary2Hex",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Binary Hex",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tBinary2Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "tHex2Binary",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tHex2Binary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tHex2Binary",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Hex Binary",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tHex2Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tIsNegative",
          "package": "type-int",
          "signature": "n -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tIsNegative",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsNegative\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tIsNegative\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tIsNegative",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Is Negative",
          "signature": "n-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tIsPositive",
          "package": "type-int",
          "signature": "n -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tIsPositive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsPositive\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tIsPositive\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tIsPositive",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Is Positive",
          "signature": "n-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tIsZero",
          "package": "type-int",
          "signature": "n -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tIsZero",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsZero\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tIsZero\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tIsZero",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Is Zero",
          "signature": "n-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tMul",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Hex-Stage3.html#tMul",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tMul\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tMul\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tMul",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Mul",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tNF",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tNF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tNF\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tNF\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tNF",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "NF",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tNeg",
          "package": "type-int",
          "signature": "a -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tNeg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tNeg\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tNeg\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tNeg",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Neg",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tPow",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Hex-Stage3.html#tPow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tPow\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tPow\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tPow",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Pow",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tPred",
          "package": "type-int",
          "signature": "m -\u003e n",
          "source": "src/Data-Type-Hex-Stage3.html#tPred",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tPred\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tPred\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tPred",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Pred",
          "signature": "m-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tSub",
          "package": "type-int",
          "signature": "c -\u003e a -\u003e b",
          "source": "src/Data-Type-Hex-Stage3.html#tSub",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSub\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tSub\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tSub",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Sub",
          "signature": "c-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex.Stage3",
          "name": "tSub'",
          "package": "type-int",
          "signature": "a -\u003e b -\u003e c",
          "source": "src/Data-Type-Hex-Stage3.html#tSub%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tSub'",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Sub'",
          "signature": "a-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSub-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Type.Hex.Stage3\",\"Data.Type.Hex\"]",
          "name": "tSucc",
          "package": "type-int",
          "signature": "n -\u003e m",
          "source": "src/Data-Type-Hex-Stage3.html#tSucc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSucc\",\"http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tSucc\"]"
        },
        "index": {
          "hierarchy": "Data Type Hex Stage3",
          "module": "Data.Type.Hex.Stage3",
          "name": "tSucc",
          "normalized": "a-\u003eb",
          "package": "type-int",
          "partial": "Succ",
          "signature": "n-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level hexadecimal numbers, positive and negative with infinite\n precision. Should work out to about 2^72 without changing the default\n context length limit in GHC.\n\u003c/p\u003e\u003cp\u003eTODO: TDivMod, TImplies, TGCD, T*Bit, and the boolean operators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Hex",
          "name": "Hex",
          "package": "type-int",
          "source": "src/Data-Type-Hex.html",
          "type": "module"
        },
        "index": {
          "description": "Type-level hexadecimal numbers positive and negative with infinite precision Should work out to about without changing the default context length limit in GHC TODO TDivMod TImplies TGCD Bit and the boolean operators",
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "Hex",
          "package": "type-int",
          "partial": "Hex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "TAdd",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TAdd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TAdd",
          "package": "type-int",
          "partial": "TAdd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "THexBinary",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#THexBinary",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "THexBinary",
          "package": "type-int",
          "partial": "THex Binary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:THexBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "TIsNegative",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TIsNegative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TIsNegative",
          "package": "type-int",
          "partial": "TIs Negative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TIsNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "TIsPositive",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TIsPositive",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TIsPositive",
          "package": "type-int",
          "partial": "TIs Positive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TIsPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "TIsZero",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TIsZero",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TIsZero",
          "package": "type-int",
          "partial": "TIs Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TIsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple peasant multiplier. TODO: exploit 2s complement and reverse the worst cases\n\u003c/p\u003e",
          "module": "Data.Type.Hex",
          "name": "TMul",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TMul",
          "type": "class"
        },
        "index": {
          "description": "simple peasant multiplier TODO exploit complement and reverse the worst cases",
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TMul",
          "package": "type-int",
          "partial": "TMul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "TNF",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TNF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TNF",
          "package": "type-int",
          "partial": "TNF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Hex",
          "name": "TNeg",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TNeg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TNeg",
          "package": "type-int",
          "partial": "TNeg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epeasant exponentiator\n\u003c/p\u003e",
          "module": "Data.Type.Hex",
          "name": "TPow",
          "package": "type-int",
          "source": "src/Data-Type-Hex-Stage3.html#TPow",
          "type": "class"
        },
        "index": {
          "description": "peasant exponentiator",
          "hierarchy": "Data Type Hex",
          "module": "Data.Type.Hex",
          "name": "TPow",
          "package": "type-int",
          "partial": "TPow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TPow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type-level Maybe w\u003cem\u003e Just\u003c/em\u003eNothing Types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Maybe",
          "name": "Maybe",
          "package": "type-int",
          "source": "src/Data-Type-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "Simple type-level Maybe Just Nothing Types",
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "Maybe",
          "package": "type-int",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Maybe",
          "name": "TJust",
          "package": "type-int",
          "source": "src/Data-Type-Maybe.html#TJust",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "TJust",
          "package": "type-int",
          "partial": "TJust",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#t:TJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Maybe",
          "name": "TMaybe",
          "package": "type-int",
          "source": "src/Data-Type-Maybe.html#TMaybe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "TMaybe",
          "package": "type-int",
          "partial": "TMaybe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#t:TMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Maybe",
          "name": "TNothing",
          "package": "type-int",
          "source": "src/Data-Type-Maybe.html#TNothing",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "TNothing",
          "package": "type-int",
          "partial": "TNothing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#t:TNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Maybe",
          "name": "tFromJust",
          "package": "type-int",
          "signature": "TJust t -\u003e t",
          "source": "src/Data-Type-Maybe.html#tFromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "tFromJust",
          "normalized": "TJust a-\u003ea",
          "package": "type-int",
          "partial": "From Just",
          "signature": "TJust t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#v:tFromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Maybe",
          "name": "tJust",
          "package": "type-int",
          "signature": "t -\u003e TJust t",
          "source": "src/Data-Type-Maybe.html#tJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "tJust",
          "normalized": "a-\u003eTJust a",
          "package": "type-int",
          "partial": "Just",
          "signature": "t-\u003eTJust t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#v:tJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Maybe",
          "name": "tNothing",
          "package": "type-int",
          "signature": "TNothing",
          "source": "src/Data-Type-Maybe.html#tNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Maybe",
          "module": "Data.Type.Maybe",
          "name": "tNothing",
          "package": "type-int",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#v:tNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple equality and ordering for types.\n Extended to include common usage cases.\n\u003c/p\u003e\u003cp\u003eInstances should all really be decidable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Ord",
          "name": "Ord",
          "package": "type-int",
          "source": "src/Data-Type-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "Simple equality and ordering for types Extended to include common usage cases Instances should all really be decidable",
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "Ord",
          "package": "type-int",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "TEq",
          "package": "type-int",
          "source": "src/Data-Type-Ord.html#TEq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "TEq",
          "package": "type-int",
          "partial": "TEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "TGe",
          "package": "type-int",
          "source": "src/Data-Type-Ord.html#TGe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "TGe",
          "package": "type-int",
          "partial": "TGe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TGe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "TGt",
          "package": "type-int",
          "source": "src/Data-Type-Ord.html#TGt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "TGt",
          "package": "type-int",
          "partial": "TGt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "TLe",
          "package": "type-int",
          "source": "src/Data-Type-Ord.html#TLe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "TLe",
          "package": "type-int",
          "partial": "TLe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TLe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "TLt",
          "package": "type-int",
          "source": "src/Data-Type-Ord.html#TLt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "TLt",
          "package": "type-int",
          "partial": "TLt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "tEq",
          "package": "type-int",
          "signature": "x -\u003e y -\u003e b",
          "source": "src/Data-Type-Ord.html#tEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "tEq",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Eq",
          "signature": "x-\u003ey-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "tGe",
          "package": "type-int",
          "signature": "x -\u003e y -\u003e b",
          "source": "src/Data-Type-Ord.html#tGe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "tGe",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Ge",
          "signature": "x-\u003ey-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tGe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "tGt",
          "package": "type-int",
          "signature": "x -\u003e y -\u003e b",
          "source": "src/Data-Type-Ord.html#tGt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "tGt",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Gt",
          "signature": "x-\u003ey-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tGt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "tLe",
          "package": "type-int",
          "signature": "x -\u003e y -\u003e b",
          "source": "src/Data-Type-Ord.html#tLe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "tLe",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Le",
          "signature": "x-\u003ey-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tLe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Ord",
          "name": "tLt",
          "package": "type-int",
          "signature": "x -\u003e y -\u003e b",
          "source": "src/Data-Type-Ord.html#tLt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Ord",
          "module": "Data.Type.Ord",
          "name": "tLt",
          "normalized": "a-\u003eb-\u003ec",
          "package": "type-int",
          "partial": "Lt",
          "signature": "x-\u003ey-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tLt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed to express trichotomy at the type level.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Sign",
          "name": "Sign",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html",
          "type": "module"
        },
        "index": {
          "description": "Used to express trichotomy at the type level",
          "hierarchy": "Data Type Sign",
          "module": "Data.Type.Sign",
          "name": "Sign",
          "package": "type-int",
          "partial": "Sign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Sign",
          "name": "Negative",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#Negative",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Sign",
          "module": "Data.Type.Sign",
          "name": "Negative",
          "package": "type-int",
          "partial": "Negative",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Sign",
          "name": "Positive",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#Positive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Sign",
          "module": "Data.Type.Sign",
          "name": "Positive",
          "package": "type-int",
          "partial": "Positive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Sign",
          "name": "SignZero",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#SignZero",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Type Sign",
          "module": "Data.Type.Sign",
          "name": "SignZero",
          "package": "type-int",
          "partial": "Sign Zero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:SignZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Sign",
          "name": "TSign",
          "package": "type-int",
          "source": "src/Data-Type-Sign.html#TSign",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Type Sign",
          "module": "Data.Type.Sign",
          "name": "TSign",
          "package": "type-int",
          "partial": "TSign",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:TSign"
      }
    }
  ]
]