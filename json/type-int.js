[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type-level binary numbers, positive and negative with infinite\n precision. This forms a nice commutative ring with multiplicative identity\n like we would expect from a representation for Z.\n\u003c/p\u003e\u003cp\u003eThe numbers are represented as a Boolean Ring over a countable set of\n variables, in which for every element in the set there exists an n in N\n and a b in {T,F} such that for all n'\u003e=n in N, x_i = b.\n\u003c/p\u003e\u003cp\u003eFor uniqueness we always choose the least such n when representing numbers\n this allows us to run most computations backwards. When we can't, and such\n a fundep would be implied, we obtain it by combining semi-operations that\n together yield the appropriate class fundep list.\n\u003c/p\u003e\u003cp\u003eReuses T and F from the Type.Boolean as the infinite tail of the 2s\n complement binary number. \n\u003c/p\u003e\u003cp\u003eTODO: TDivMod, TGCD\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Binary-Internals.html",
        "fct-type": "module",
        "title": "Internals"
      },
      "index": {
        "description": "Simple type-level binary numbers positive and negative with infinite precision This forms nice commutative ring with multiplicative identity like we would expect from representation for The numbers are represented as Boolean Ring over countable set of variables in which for every element in the set there exists an in and in such that for all in For uniqueness we always choose the least such when representing numbers this allows us to run most computations backwards When we can and such fundep would be implied we obtain it by combining semi-operations that together yield the appropriate class fundep list Reuses and from the Type.Boolean as the infinite tail of the complement binary number TODO TDivMod TGCD",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "Internals",
        "normalized": "",
        "package": "type-int",
        "partial": "Internals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:I",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Binary-Internals.html#I",
        "fct-type": "data",
        "title": "I"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "I",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:LSB",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the least significant bit of a as d and returns a'.\n Can also be used to prepend bit d onto a' obtaining a.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#LSB",
        "fct-type": "class",
        "title": "LSB"
      },
      "index": {
        "description": "Extracts the least significant bit of as and returns Can also be used to prepend bit onto obtaining",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "LSB",
        "normalized": "",
        "package": "type-int",
        "partial": "LSB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:Negative",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Sign.html#Negative",
        "fct-type": "data",
        "title": "Negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "Negative",
        "normalized": "",
        "package": "type-int",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:O",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Binary-Internals.html#O",
        "fct-type": "data",
        "title": "O"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "O",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:Positive",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Sign.html#Positive",
        "fct-type": "data",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "Positive",
        "normalized": "",
        "package": "type-int",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:SignZero",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Sign.html#SignZero",
        "fct-type": "data",
        "title": "SignZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "SignZero",
        "normalized": "",
        "package": "type-int",
        "partial": "Sign Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAbs",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the absolute value of a\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TAbs",
        "fct-type": "class",
        "title": "TAbs"
      },
      "index": {
        "description": "Return the absolute value of",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TAbs",
        "normalized": "",
        "package": "type-int",
        "partial": "TAbs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAdd",
      "description": {
        "fct-descr": "\u003cp\u003eReversible adder with extra fundeps.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TAdd",
        "fct-type": "class",
        "title": "TAdd"
      },
      "index": {
        "description": "Reversible adder with extra fundeps",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TAdd",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAdd-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNon-reversible addition. Kept for efficiency purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TAdd%27",
        "fct-type": "class",
        "title": "TAdd'"
      },
      "index": {
        "description": "Non-reversible addition Kept for efficiency purposes",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TAdd'",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TAddC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA symmetrical full adder, that does not yield normal form answers.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TAddC%27",
        "fct-type": "class",
        "title": "TAddC'"
      },
      "index": {
        "description": "symmetrical full adder that does not yield normal form answers",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TAddC'",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd C'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TBinary",
      "description": {
        "fct-descr": "\u003cp\u003eWe don't want to have to carry the closure parameter around explicitly everywhere, so we\n   shed it here.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TBinary",
        "fct-type": "class",
        "title": "TBinary"
      },
      "index": {
        "description": "We don want to have to carry the closure parameter around explicitly everywhere so we shed it here",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TBinary",
        "normalized": "",
        "package": "type-int",
        "partial": "TBinary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TCBinary",
      "description": {
        "fct-descr": "\u003cp\u003eOur set of digits is closed to retain the properties needed for most of the classes herein\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TCBinary",
        "fct-type": "class",
        "title": "TCBinary"
      },
      "index": {
        "description": "Our set of digits is closed to retain the properties needed for most of the classes herein",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TCBinary",
        "normalized": "",
        "package": "type-int",
        "partial": "TCBinary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TChangeBit",
      "description": {
        "fct-descr": "\u003cp\u003echange bit #b in a to c in {T,F}, yielding d.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TChangeBit",
        "fct-type": "class",
        "title": "TChangeBit"
      },
      "index": {
        "description": "change bit in to in yielding",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TChangeBit",
        "normalized": "",
        "package": "type-int",
        "partial": "TChange Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TComplementBit",
      "description": {
        "fct-descr": "\u003cp\u003etoggle the value of bit #b in a, yielding c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TComplementBit",
        "fct-type": "class",
        "title": "TComplementBit"
      },
      "index": {
        "description": "toggle the value of bit in yielding",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TComplementBit",
        "normalized": "",
        "package": "type-int",
        "partial": "TComplement Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TCountBits",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of bits set. Since we may have an infinite tail of 1s, we return\n a negative number in such cases indicating how many bits are NOT set.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TCountBits",
        "fct-type": "class",
        "title": "TCountBits"
      },
      "index": {
        "description": "Count the number of bits set Since we may have an infinite tail of we return negative number in such cases indicating how many bits are NOT set",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TCountBits",
        "normalized": "",
        "package": "type-int",
        "partial": "TCount Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TCountBits-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of bits set, but track whether the number is positive or negative\n to simplify casing. Since we may have an infinite tail of 1s, we return a negative\n number in such cases indicating how many bits are NOT set.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TCountBits%27",
        "fct-type": "class",
        "title": "TCountBits'"
      },
      "index": {
        "description": "Count the number of bits set but track whether the number is positive or negative to simplify casing Since we may have an infinite tail of we return negative number in such cases indicating how many bits are NOT set",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TCountBits'",
        "normalized": "",
        "package": "type-int",
        "partial": "TCount Bits'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TEven",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the lsb of the number is true\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TEven",
        "fct-type": "class",
        "title": "TEven"
      },
      "index": {
        "description": "Returns true if the lsb of the number is true",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TEven",
        "normalized": "",
        "package": "type-int",
        "partial": "TEven",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TGetBit",
      "description": {
        "fct-descr": "\u003cp\u003eget bit #b in a as c in {T,F}\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TGetBit",
        "fct-type": "class",
        "title": "TGetBit"
      },
      "index": {
        "description": "get bit in as in",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TGetBit",
        "normalized": "",
        "package": "type-int",
        "partial": "TGet Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TIsNegative",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the number is less than zero\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TIsNegative",
        "fct-type": "class",
        "title": "TIsNegative"
      },
      "index": {
        "description": "Returns true if the number is less than zero",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TIsNegative",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TIsPositive",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the number is greater than zero\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TIsPositive",
        "fct-type": "class",
        "title": "TIsPositive"
      },
      "index": {
        "description": "Returns true if the number is greater than zero",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TIsPositive",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TIsZero",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the number is equal to zero\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TIsZero",
        "fct-type": "class",
        "title": "TIsZero"
      },
      "index": {
        "description": "Returns true if the number is equal to zero",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TIsZero",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TMul",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication: a * b = c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TMul",
        "fct-type": "class",
        "title": "TMul"
      },
      "index": {
        "description": "Multiplication",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TMul",
        "normalized": "",
        "package": "type-int",
        "partial": "TMul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TNF",
      "description": {
        "fct-descr": "\u003cp\u003eShed the additional reduction parameter from TNF'\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TNF",
        "fct-type": "class",
        "title": "TNF"
      },
      "index": {
        "description": "Shed the additional reduction parameter from TNF",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TNF",
        "normalized": "",
        "package": "type-int",
        "partial": "TNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TNF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a number into normal form, but track whether further reductions\n may be necessary if this number is extended for efficiency.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TNF%27",
        "fct-type": "class",
        "title": "TNF'"
      },
      "index": {
        "description": "Transform number into normal form but track whether further reductions may be necessary if this number is extended for efficiency",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TNF'",
        "normalized": "",
        "package": "type-int",
        "partial": "TNF'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TNeg",
      "description": {
        "fct-descr": "\u003cp\u003eTNeg obtains the 2s complement of a number and is reversible\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TNeg",
        "fct-type": "class",
        "title": "TNeg"
      },
      "index": {
        "description": "TNeg obtains the complement of number and is reversible",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TNeg",
        "normalized": "",
        "package": "type-int",
        "partial": "TNeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TOdd",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the lsb of the number if false\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TOdd",
        "fct-type": "class",
        "title": "TOdd"
      },
      "index": {
        "description": "Returns true if the lsb of the number if false",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TOdd",
        "normalized": "",
        "package": "type-int",
        "partial": "TOdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TPow",
      "description": {
        "fct-descr": "\u003cp\u003eExponentiation: a^b = c (only defined for non-negative exponents)\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TPow",
        "fct-type": "class",
        "title": "TPow"
      },
      "index": {
        "description": "Exponentiation only defined for non-negative exponents",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TPow",
        "normalized": "",
        "package": "type-int",
        "partial": "TPow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TSetBit",
      "description": {
        "fct-descr": "\u003cp\u003eset bit #b in a to T, yielding c.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TSetBit",
        "fct-type": "class",
        "title": "TSetBit"
      },
      "index": {
        "description": "set bit in to yielding",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TSetBit",
        "normalized": "",
        "package": "type-int",
        "partial": "TSet Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TShift",
      "description": {
        "fct-descr": "\u003cp\u003eShift a right b places obtaining c in normal form.\n | If b is negative then we shift left.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TShift",
        "fct-type": "class",
        "title": "TShift"
      },
      "index": {
        "description": "Shift right places obtaining in normal form If is negative then we shift left",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TShift",
        "normalized": "",
        "package": "type-int",
        "partial": "TShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TShift-39-",
      "description": {
        "fct-descr": "\u003cp\u003eShift a right b places obtaining c. If b is negative then we shift left.\n | TShift' does not yield normal form answers.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TShift%27",
        "fct-type": "class",
        "title": "TShift'"
      },
      "index": {
        "description": "Shift right places obtaining If is negative then we shift left TShift does not yield normal form answers",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TShift'",
        "normalized": "",
        "package": "type-int",
        "partial": "TShift'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TSub-39-",
      "description": {
        "fct-descr": "\u003cp\u003eNon-reversible subtraction. Kept for efficiency purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TSub%27",
        "fct-type": "class",
        "title": "TSub'"
      },
      "index": {
        "description": "Non-reversible subtraction Kept for efficiency purposes",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TSub'",
        "normalized": "",
        "package": "type-int",
        "partial": "TSub'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TSucc",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the unique successor for any normalized binary number\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TSucc",
        "fct-type": "class",
        "title": "TSucc"
      },
      "index": {
        "description": "Finds the unique successor for any normalized binary number",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TSucc",
        "normalized": "",
        "package": "type-int",
        "partial": "TSucc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:TUnSetBit",
      "description": {
        "fct-descr": "\u003cp\u003eset bit #b in a to F, yielding c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#TUnSetBit",
        "fct-type": "class",
        "title": "TUnSetBit"
      },
      "index": {
        "description": "set bit in to yielding",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "TUnSetBit",
        "normalized": "",
        "package": "type-int",
        "partial": "TUn Set Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:XI",
      "description": {
        "fct-descr": "\u003cp\u003eassert 2n+1 != n\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#XI",
        "fct-type": "class",
        "title": "XI"
      },
      "index": {
        "description": "assert",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "XI",
        "normalized": "",
        "package": "type-int",
        "partial": "XI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#t:XO",
      "description": {
        "fct-descr": "\u003cp\u003eassert 2n != n\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Binary-Internals.html#XO",
        "fct-type": "class",
        "title": "XO"
      },
      "index": {
        "description": "assert",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "XO",
        "normalized": "",
        "package": "type-int",
        "partial": "XO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:fromTBinary",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#fromTBinary",
        "fct-type": "method",
        "title": "fromTBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "fromTBinary",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "TBinary",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:t2n",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#t2n",
        "fct-type": "function",
        "title": "t2n"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "t2n",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:t2np1",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#t2np1",
        "fct-type": "function",
        "title": "t2np1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "t2np1",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tAbs",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tAbs",
        "fct-type": "function",
        "title": "tAbs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tAbs",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Abs",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tAdd",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tAdd",
        "fct-type": "function",
        "title": "tAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tAdd",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Add",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tAdd-39-",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tAdd%27",
        "fct-type": "function",
        "title": "tAdd'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tAdd'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Add'",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tBSL",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a' -\u003e d -\u003e a",
        "fct-source": "src/Data-Type-Binary-Internals.html#tBSL",
        "fct-type": "function",
        "title": "tBSL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tBSL",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "BSL",
        "signature": "a'-\u003ed-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tChangeBit",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c -\u003e d",
        "fct-source": "src/Data-Type-Binary-Internals.html#tChangeBit",
        "fct-type": "function",
        "title": "tChangeBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tChangeBit",
        "normalized": "a-\u003eb-\u003ec-\u003ed",
        "package": "type-int",
        "partial": "Change Bit",
        "signature": "a-\u003eb-\u003ec-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tComplementBit",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tComplementBit",
        "fct-type": "function",
        "title": "tComplementBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tComplementBit",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Complement Bit",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tCountBits",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tCountBits",
        "fct-type": "function",
        "title": "tCountBits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tCountBits",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Count Bits",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tEven",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tEven",
        "fct-type": "function",
        "title": "tEven"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tEven",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Even",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tGetBit",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tGetBit",
        "fct-type": "function",
        "title": "tGetBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tGetBit",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Get Bit",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tIsNegative",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tIsNegative",
        "fct-type": "function",
        "title": "tIsNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tIsNegative",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Negative",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tIsPositive",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tIsPositive",
        "fct-type": "function",
        "title": "tIsPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tIsPositive",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Positive",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tIsZero",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tIsZero",
        "fct-type": "function",
        "title": "tIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tIsZero",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Zero",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tLSB",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e d -\u003e a'",
        "fct-source": "src/Data-Type-Binary-Internals.html#tLSB",
        "fct-type": "function",
        "title": "tLSB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tLSB",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "LSB",
        "signature": "a-\u003ed-\u003ea'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tMul",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tMul",
        "fct-type": "function",
        "title": "tMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tMul",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Mul",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tNF",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tNF",
        "fct-type": "function",
        "title": "tNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tNF",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "NF",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tNeg",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tNeg",
        "fct-type": "function",
        "title": "tNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tNeg",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Neg",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tOdd",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tOdd",
        "fct-type": "function",
        "title": "tOdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tOdd",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Odd",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tPow",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tPow",
        "fct-type": "function",
        "title": "tPow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tPow",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Pow",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tPred",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "m -\u003e n",
        "fct-source": "src/Data-Type-Binary-Internals.html#tPred",
        "fct-type": "function",
        "title": "tPred"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tPred",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Pred",
        "signature": "m-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSetBit",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tSetBit",
        "fct-type": "function",
        "title": "tSetBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tSetBit",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Set Bit",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tShift",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tShift",
        "fct-type": "function",
        "title": "tShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tShift",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Shift",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSub",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "c -\u003e a -\u003e b",
        "fct-source": "src/Data-Type-Binary-Internals.html#tSub",
        "fct-type": "function",
        "title": "tSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tSub",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Sub",
        "signature": "c-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSub-39-",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tSub%27",
        "fct-type": "function",
        "title": "tSub'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tSub'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Sub'",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tSucc",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e m",
        "fct-source": "src/Data-Type-Binary-Internals.html#tSucc",
        "fct-type": "function",
        "title": "tSucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tSucc",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Succ",
        "signature": "n-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-Internals.html#v:tUnSetBit",
      "description": {
        "fct-module": "Data.Type.Binary.Internals",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Binary-Internals.html#tUnSetBit",
        "fct-type": "function",
        "title": "tUnSetBit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Binary Internals",
        "module": "Data.Type.Binary.Internals",
        "name": "tUnSetBit",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Un Set Bit",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a simple way to construct type level binaries.\n $(binaryE 24) returns an undefined value with the same type as the \n Type.Binary with value 24.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Binary.TH",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Binary-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Provides simple way to construct type level binaries binaryE returns an undefined value with the same type as the Type.Binary with value",
        "hierarchy": "Data Type Binary TH",
        "module": "Data.Type.Binary.TH",
        "name": "TH",
        "normalized": "",
        "package": "type-int",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-TH.html#v:binaryE",
      "description": {
        "fct-descr": "\u003cp\u003e$(binaryE n) returns an undefined value of the appropriate TBinary instance\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.TH",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e ExpQ",
        "fct-source": "src/Data-Type-Binary-TH.html#binaryE",
        "fct-type": "function",
        "title": "binaryE"
      },
      "index": {
        "description": "binaryE returns an undefined value of the appropriate TBinary instance",
        "hierarchy": "Data Type Binary TH",
        "module": "Data.Type.Binary.TH",
        "name": "binaryE",
        "normalized": "a-\u003eExpQ",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary-TH.html#v:binaryT",
      "description": {
        "fct-descr": "\u003cp\u003e$(binaryT n) returns the appropriate TBinary instance\n\u003c/p\u003e",
        "fct-module": "Data.Type.Binary.TH",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e TypeQ",
        "fct-source": "src/Data-Type-Binary-TH.html#binaryT",
        "fct-type": "function",
        "title": "binaryT"
      },
      "index": {
        "description": "binaryT returns the appropriate TBinary instance",
        "hierarchy": "Data Type Binary TH",
        "module": "Data.Type.Binary.TH",
        "name": "binaryT",
        "normalized": "a-\u003eTypeQ",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type-level binary numbers, positive and negative with infinite\n precision. This forms a nice commutative ring with multiplicative identity\n like we would expect from a representation for Z.\n\u003c/p\u003e\u003cp\u003eThe numbers are represented as a Boolean Ring over a countable set of\n variables, in which for every element in the set there exists an n in N\n and a b in {T,F} such that forall n' \u003e= n in N, x_i = b.\n\u003c/p\u003e\u003cp\u003eFor uniqueness we always choose the least such n when representing numbers\n this allows us to run most computations backwards. When we can't, and such\n a fundep would be implied, we obtain it by combining semi-operations that\n together yield the appropriate class fundep list.\n\u003c/p\u003e\u003cp\u003eThe goal here was to pull together many of the good ideas I've seen from\n various sources, and sprinkle a two's complement negative number\n representation on top.\n\u003c/p\u003e\u003cp\u003eReuses T and F from the Type.Boolean as the infinite tail of the 2s\n complement binary number. I'm particularly fond of the symmetry exhibited\n in the full adder.\n\u003c/p\u003e\u003cp\u003eTODO: \u003ccode\u003eTDivMod, TImplies, TGCD, TBit, TComplementBit, TSetBit\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Binary",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "Simple type-level binary numbers positive and negative with infinite precision This forms nice commutative ring with multiplicative identity like we would expect from representation for The numbers are represented as Boolean Ring over countable set of variables in which for every element in the set there exists an in and in such that forall in For uniqueness we always choose the least such when representing numbers this allows us to run most computations backwards When we can and such fundep would be implied we obtain it by combining semi-operations that together yield the appropriate class fundep list The goal here was to pull together many of the good ideas ve seen from various sources and sprinkle two complement negative number representation on top Reuses and from the Type.Boolean as the infinite tail of the complement binary number particularly fond of the symmetry exhibited in the full adder TODO TDivMod TImplies TGCD TBit TComplementBit TSetBit",
        "hierarchy": "Data Type Binary",
        "module": "Data.Type.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "type-int",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple closed type-level booleans.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Boolean.html",
        "fct-type": "module",
        "title": "Boolean"
      },
      "index": {
        "description": "Simple closed type-level booleans",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "type-int",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:F",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Boolean.html#F",
        "fct-type": "data",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "F",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:T",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Boolean.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "T",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TAnd",
      "description": {
        "fct-descr": "\u003cp\u003eType-Level a \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e b = c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TAnd",
        "fct-type": "class",
        "title": "TAnd"
      },
      "index": {
        "description": "Type-Level and",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TAnd",
        "normalized": "",
        "package": "type-int",
        "partial": "TAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TBool",
      "description": {
        "fct-descr": "\u003cp\u003e...and every boolean is in that set.\n This lets us avoid carrying the closure parameter around\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TBool",
        "fct-type": "class",
        "title": "TBool"
      },
      "index": {
        "description": "and every boolean is in that set This lets us avoid carrying the closure parameter around",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TBool",
        "normalized": "",
        "package": "type-int",
        "partial": "TBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TIf",
      "description": {
        "fct-descr": "\u003cp\u003eType-Level: if t then x else y\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TIf",
        "fct-type": "class",
        "title": "TIf"
      },
      "index": {
        "description": "Type-Level if then else",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TIf",
        "normalized": "",
        "package": "type-int",
        "partial": "TIf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TImplies",
      "description": {
        "fct-descr": "\u003cp\u003eType-Level: a \u003ccode\u003eimplies\u003c/code\u003e b = c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TImplies",
        "fct-type": "class",
        "title": "TImplies"
      },
      "index": {
        "description": "Type-Level implies",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TImplies",
        "normalized": "",
        "package": "type-int",
        "partial": "TImplies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TNot",
      "description": {
        "fct-descr": "\u003cp\u003eType-Level: not a\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TNot",
        "fct-type": "class",
        "title": "TNot"
      },
      "index": {
        "description": "Type-Level not",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TNot",
        "normalized": "",
        "package": "type-int",
        "partial": "TNot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TOr",
      "description": {
        "fct-descr": "\u003cp\u003eType-Level a \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e b = c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TOr",
        "fct-type": "class",
        "title": "TOr"
      },
      "index": {
        "description": "Type-Level or",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TOr",
        "normalized": "",
        "package": "type-int",
        "partial": "TOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TXOr",
      "description": {
        "fct-descr": "\u003cp\u003eimplemented this way rather than directly so that Binary can extend it properly.\n otherwise the normal form restriction makes that nigh impossible.\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TXOr",
        "fct-type": "class",
        "title": "TXOr"
      },
      "index": {
        "description": "implemented this way rather than directly so that Binary can extend it properly otherwise the normal form restriction makes that nigh impossible",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TXOr",
        "normalized": "",
        "package": "type-int",
        "partial": "TXOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#t:TXOr-39-",
      "description": {
        "fct-descr": "\u003cp\u003eType-Level: a \u003ccode\u003exor\u003c/code\u003e b = c\n\u003c/p\u003e",
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Boolean.html#TXOr%27",
        "fct-type": "class",
        "title": "TXOr'"
      },
      "index": {
        "description": "Type-Level xor",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "TXOr'",
        "normalized": "",
        "package": "type-int",
        "partial": "TXOr'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tAnd",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Boolean.html#tAnd",
        "fct-type": "function",
        "title": "tAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tAnd",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "And",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tF",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "F",
        "fct-source": "src/Data-Type-Boolean.html#tF",
        "fct-type": "function",
        "title": "tF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tF",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tIf",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "t -\u003e x -\u003e y -\u003e z",
        "fct-source": "src/Data-Type-Boolean.html#tIf",
        "fct-type": "method",
        "title": "tIf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tIf",
        "normalized": "a-\u003eb-\u003ec-\u003ed",
        "package": "type-int",
        "partial": "If",
        "signature": "t-\u003ex-\u003ey-\u003ez"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tImplies",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Boolean.html#tImplies",
        "fct-type": "function",
        "title": "tImplies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tImplies",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Implies",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tNot",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Boolean.html#tNot",
        "fct-type": "function",
        "title": "tNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tNot",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Not",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tOr",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Boolean.html#tOr",
        "fct-type": "function",
        "title": "tOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tOr",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Or",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tT",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "T",
        "fct-source": "src/Data-Type-Boolean.html#tT",
        "fct-type": "function",
        "title": "tT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tT",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tXOr",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Boolean.html#tXOr",
        "fct-type": "function",
        "title": "tXOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tXOr",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "XOr",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Boolean.html#v:tXOr-39-",
      "description": {
        "fct-module": "Data.Type.Boolean",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Boolean.html#tXOr%27",
        "fct-type": "function",
        "title": "tXOr'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Boolean",
        "module": "Data.Type.Boolean",
        "name": "tXOr'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "XOr'",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStage1: Lay the ground work for all sorts of Template Haskell hackery \n in the later stages. Only a handful of class specifications in this file\n are for later public consumption, and none of those are fleshed out here.\n\u003c/p\u003e\u003cp\u003eThis multiple-stage implementation is necessitated by the way Template \n Haskell is implemented in GHC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Hex-Stage1.html",
        "fct-type": "module",
        "title": "Stage1"
      },
      "index": {
        "description": "Stage1 Lay the ground work for all sorts of Template Haskell hackery in the later stages Only handful of class specifications in this file are for later public consumption and none of those are fleshed out here This multiple-stage implementation is necessitated by the way Template Haskell is implemented in GHC",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "Stage1",
        "normalized": "",
        "package": "type-int",
        "partial": "Stage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:LSN",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#LSN",
        "fct-type": "class",
        "title": "LSN"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "LSN",
        "normalized": "",
        "package": "type-int",
        "partial": "LSN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:SHR1",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#SHR1",
        "fct-type": "class",
        "title": "SHR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "SHR1",
        "normalized": "",
        "package": "type-int",
        "partial": "SHR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TAddC-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#TAddC%27",
        "fct-type": "class",
        "title": "TAddC'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "TAddC'",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd C'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TEven",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#TEven",
        "fct-type": "class",
        "title": "TEven"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "TEven",
        "normalized": "",
        "package": "type-int",
        "partial": "TEven",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:THex",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#THex",
        "fct-type": "class",
        "title": "THex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "THex",
        "normalized": "",
        "package": "type-int",
        "partial": "THex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TNF-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#TNF%27",
        "fct-type": "class",
        "title": "TNF'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "TNF'",
        "normalized": "",
        "package": "type-int",
        "partial": "TNF'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:TSucc",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#TSucc",
        "fct-type": "class",
        "title": "TSucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "TSucc",
        "normalized": "",
        "package": "type-int",
        "partial": "TSucc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#t:Trichotomy",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage1.html#Trichotomy",
        "fct-type": "class",
        "title": "Trichotomy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "Trichotomy",
        "normalized": "",
        "package": "type-int",
        "partial": "Trichotomy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:a",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#a",
        "fct-type": "function",
        "title": "a"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "a",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:b",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#a",
        "fct-type": "function",
        "title": "b"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "b",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:c",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#a",
        "fct-type": "function",
        "title": "c"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "c",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:concatMapM",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "(a -\u003e m [b]) -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#concatMapM",
        "fct-type": "function",
        "title": "concatMapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "concatMapM",
        "normalized": "(a-\u003eb[c])-\u003e[a]-\u003eb[c]",
        "package": "type-int",
        "partial": "Map",
        "signature": "(a-\u003em[b])-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:d",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#a",
        "fct-type": "function",
        "title": "d"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "d",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:f",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#t",
        "fct-type": "function",
        "title": "f"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "f",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:fromTHex",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage1.html#fromTHex",
        "fct-type": "method",
        "title": "fromTHex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "fromTHex",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "THex",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:h",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#x",
        "fct-type": "function",
        "title": "h"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "h",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:h0",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#x0",
        "fct-type": "function",
        "title": "h0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "h0",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:hF",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xF",
        "fct-type": "function",
        "title": "hF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "hF",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:hex",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "String",
        "fct-source": "src/Data-Type-Hex-Stage1.html#hex",
        "fct-type": "function",
        "title": "hex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "hex",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:hn",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Name]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xn",
        "fct-type": "function",
        "title": "hn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "hn",
        "normalized": "[Name]",
        "package": "type-int",
        "partial": "",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:lsn",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "lsn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "lsn",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:mkHT",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name -\u003e Dec",
        "fct-source": "src/Data-Type-Hex-Stage1.html#mkHT",
        "fct-type": "function",
        "title": "mkHT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "mkHT",
        "normalized": "Name-\u003eDec",
        "package": "type-int",
        "partial": "HT",
        "signature": "Name-\u003eDec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:mkXT",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name -\u003e Dec",
        "fct-source": "src/Data-Type-Hex-Stage1.html#mkXT",
        "fct-type": "function",
        "title": "mkXT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "mkXT",
        "normalized": "Name-\u003eDec",
        "package": "type-int",
        "partial": "XT",
        "signature": "Name-\u003eDec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:negative",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#tnot",
        "fct-type": "function",
        "title": "negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "negative",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:positive",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#tnot",
        "fct-type": "function",
        "title": "positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "positive",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:shr1",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "shr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "shr1",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:signzero",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#tnot",
        "fct-type": "function",
        "title": "signzero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "signzero",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:t",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#t",
        "fct-type": "function",
        "title": "t"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "t",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:taddc-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "taddc'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "taddc'",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:teven",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "teven"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "teven",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:thex",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "thex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "thex",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:tnf-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "tnf'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "tnf'",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:tnot",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#tnot",
        "fct-type": "function",
        "title": "tnot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "tnot",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:trichotomy",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "trichotomy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "trichotomy",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:tsucc",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "Name",
        "fct-source": "src/Data-Type-Hex-Stage1.html#lsn",
        "fct-type": "function",
        "title": "tsucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "tsucc",
        "normalized": "",
        "package": "type-int",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:wrapI",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[a] -\u003e (a -\u003e Type) -\u003e [Dec]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#wrapI",
        "fct-type": "function",
        "title": "wrapI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "wrapI",
        "normalized": "[a]-\u003e(a-\u003eType)-\u003e[Dec]",
        "package": "type-int",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003eType)-\u003e[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:x",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#x",
        "fct-type": "function",
        "title": "x"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "x",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:x0",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#x0",
        "fct-type": "function",
        "title": "x0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "x0",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:x0F",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#x0F",
        "fct-type": "function",
        "title": "x0F"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "x0F",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xF",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Type]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xF",
        "fct-type": "function",
        "title": "xF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "xF",
        "normalized": "[Type]",
        "package": "type-int",
        "partial": "",
        "signature": "[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xh",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[(Type, Type)]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xh",
        "fct-type": "function",
        "title": "xh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "xh",
        "normalized": "[(Type,Type)]",
        "package": "type-int",
        "partial": "",
        "signature": "[(Type,Type)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xh0",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[(Type, Type)]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xh0",
        "fct-type": "function",
        "title": "xh0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "xh0",
        "normalized": "[(Type,Type)]",
        "package": "type-int",
        "partial": "",
        "signature": "[(Type,Type)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xhF",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[(Type, Type)]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xhF",
        "fct-type": "function",
        "title": "xhF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "xhF",
        "normalized": "[(Type,Type)]",
        "package": "type-int",
        "partial": "",
        "signature": "[(Type,Type)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage1.html#v:xn",
      "description": {
        "fct-module": "Data.Type.Hex.Stage1",
        "fct-package": "type-int",
        "fct-signature": "[Name]",
        "fct-source": "src/Data-Type-Hex-Stage1.html#xn",
        "fct-type": "function",
        "title": "xn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage1",
        "module": "Data.Type.Hex.Stage1",
        "name": "xn",
        "normalized": "[Name]",
        "package": "type-int",
        "partial": "",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage2.html",
      "description": {
        "title": ""
      },
      "index": {
        "description": "",
        "hierarchy": "getContentsFromDoc",
        "module": "getContentsFromDoc",
        "name": "",
        "normalized": "",
        "package": "",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStage3: Define everything else. The juicier bits are then exposed via \u003ca\u003eData.Type.Hex\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Hex-Stage3.html",
        "fct-type": "module",
        "title": "Stage3"
      },
      "index": {
        "description": "Stage3 Define everything else The juicier bits are then exposed via Data.Type.Hex",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "Stage3",
        "normalized": "",
        "package": "type-int",
        "partial": "Stage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TAdd",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TAdd",
        "fct-type": "class",
        "title": "TAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TAdd",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TAdd-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TAdd%27",
        "fct-type": "class",
        "title": "TAdd'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TAdd'",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TBinary2Hex",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TBinary2Hex",
        "fct-type": "class",
        "title": "TBinary2Hex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TBinary2Hex",
        "normalized": "",
        "package": "type-int",
        "partial": "TBinary Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:THex2Binary",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#THex2Binary",
        "fct-type": "class",
        "title": "THex2Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "THex2Binary",
        "normalized": "",
        "package": "type-int",
        "partial": "THex Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:THex2Binary-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#THex2Binary%27",
        "fct-type": "class",
        "title": "THex2Binary'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "THex2Binary'",
        "normalized": "",
        "package": "type-int",
        "partial": "THex Binary'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:THexBinary",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#THexBinary",
        "fct-type": "class",
        "title": "THexBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "THexBinary",
        "normalized": "",
        "package": "type-int",
        "partial": "THex Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TIsNegative",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TIsNegative",
        "fct-type": "class",
        "title": "TIsNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TIsNegative",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TIsPositive",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TIsPositive",
        "fct-type": "class",
        "title": "TIsPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TIsPositive",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TIsZero",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TIsZero",
        "fct-type": "class",
        "title": "TIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TIsZero",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TMul",
      "description": {
        "fct-descr": "\u003cp\u003eA simple peasant multiplier. TODO: exploit 2s complement and reverse the worst cases\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TMul",
        "fct-type": "class",
        "title": "TMul"
      },
      "index": {
        "description": "simple peasant multiplier TODO exploit complement and reverse the worst cases",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TMul",
        "normalized": "",
        "package": "type-int",
        "partial": "TMul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TNF",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TNF",
        "fct-type": "class",
        "title": "TNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TNF",
        "normalized": "",
        "package": "type-int",
        "partial": "TNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TNeg",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TNeg",
        "fct-type": "class",
        "title": "TNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TNeg",
        "normalized": "",
        "package": "type-int",
        "partial": "TNeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TPow",
      "description": {
        "fct-descr": "\u003cp\u003epeasant exponentiator\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TPow",
        "fct-type": "class",
        "title": "TPow"
      },
      "index": {
        "description": "peasant exponentiator",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TPow",
        "normalized": "",
        "package": "type-int",
        "partial": "TPow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TPow-39-",
      "description": {
        "fct-descr": "\u003cp\u003epeasant exponentiator with explicit binary exponent\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TPow%27",
        "fct-type": "class",
        "title": "TPow'"
      },
      "index": {
        "description": "peasant exponentiator with explicit binary exponent",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TPow'",
        "normalized": "",
        "package": "type-int",
        "partial": "TPow'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#t:TSub-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TSub%27",
        "fct-type": "class",
        "title": "TSub'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "TSub'",
        "normalized": "",
        "package": "type-int",
        "partial": "TSub'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:hexE",
      "description": {
        "fct-descr": "\u003cp\u003e$(hexE n) returns an undefined value of the appropriate THex instance\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e Exp",
        "fct-source": "src/Data-Type-Hex-Stage3.html#hexE",
        "fct-type": "function",
        "title": "hexE"
      },
      "index": {
        "description": "hexE returns an undefined value of the appropriate THex instance",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "hexE",
        "normalized": "a-\u003eExp",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:hexT",
      "description": {
        "fct-descr": "\u003cp\u003e$(hexT n) returns the appropriate THex instance\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e Type",
        "fct-source": "src/Data-Type-Hex-Stage3.html#hexT",
        "fct-type": "function",
        "title": "hexT"
      },
      "index": {
        "description": "hexT returns the appropriate THex instance",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "hexT",
        "normalized": "a-\u003eType",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAdd",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tAdd",
        "fct-type": "function",
        "title": "tAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tAdd",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Add",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAdd-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tAdd%27",
        "fct-type": "function",
        "title": "tAdd'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tAdd'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Add'",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAddC-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c -\u003e d",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tAddC%27",
        "fct-type": "function",
        "title": "tAddC'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tAddC'",
        "normalized": "a-\u003eb-\u003ec-\u003ed",
        "package": "type-int",
        "partial": "Add C'",
        "signature": "a-\u003eb-\u003ec-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tAddF-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e d",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tAddF%27",
        "fct-type": "function",
        "title": "tAddF'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tAddF'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Add F'",
        "signature": "a-\u003eb-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tBinary2Hex",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tBinary2Hex",
        "fct-type": "function",
        "title": "tBinary2Hex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tBinary2Hex",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Binary Hex",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tHex2Binary",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tHex2Binary",
        "fct-type": "function",
        "title": "tHex2Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tHex2Binary",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Hex Binary",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsNegative",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tIsNegative",
        "fct-type": "function",
        "title": "tIsNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tIsNegative",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Negative",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsPositive",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tIsPositive",
        "fct-type": "function",
        "title": "tIsPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tIsPositive",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Positive",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tIsZero",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tIsZero",
        "fct-type": "function",
        "title": "tIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tIsZero",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Zero",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tMul",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tMul",
        "fct-type": "function",
        "title": "tMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tMul",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Mul",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tNF",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tNF",
        "fct-type": "function",
        "title": "tNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tNF",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "NF",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tNeg",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tNeg",
        "fct-type": "function",
        "title": "tNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tNeg",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Neg",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tPow",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tPow",
        "fct-type": "function",
        "title": "tPow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tPow",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Pow",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tPred",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "m -\u003e n",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tPred",
        "fct-type": "function",
        "title": "tPred"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tPred",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Pred",
        "signature": "m-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSub",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "c -\u003e a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tSub",
        "fct-type": "function",
        "title": "tSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tSub",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Sub",
        "signature": "c-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSub-39-",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tSub%27",
        "fct-type": "function",
        "title": "tSub'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tSub'",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Sub'",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex-Stage3.html#v:tSucc",
      "description": {
        "fct-module": "Data.Type.Hex.Stage3",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e m",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tSucc",
        "fct-type": "function",
        "title": "tSucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex Stage3",
        "module": "Data.Type.Hex.Stage3",
        "name": "tSucc",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Succ",
        "signature": "n-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level hexadecimal numbers, positive and negative with infinite\n precision. Should work out to about 2^72 without changing the default\n context length limit in GHC.\n\u003c/p\u003e\u003cp\u003eTODO: TDivMod, TImplies, TGCD, T*Bit, and the boolean operators\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Hex.html",
        "fct-type": "module",
        "title": "Hex"
      },
      "index": {
        "description": "Type-level hexadecimal numbers positive and negative with infinite precision Should work out to about without changing the default context length limit in GHC TODO TDivMod TImplies TGCD Bit and the boolean operators",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "Hex",
        "normalized": "",
        "package": "type-int",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TAdd",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TAdd",
        "fct-type": "class",
        "title": "TAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TAdd",
        "normalized": "",
        "package": "type-int",
        "partial": "TAdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:THexBinary",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#THexBinary",
        "fct-type": "class",
        "title": "THexBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "THexBinary",
        "normalized": "",
        "package": "type-int",
        "partial": "THex Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TIsNegative",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TIsNegative",
        "fct-type": "class",
        "title": "TIsNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TIsNegative",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TIsPositive",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TIsPositive",
        "fct-type": "class",
        "title": "TIsPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TIsPositive",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TIsZero",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TIsZero",
        "fct-type": "class",
        "title": "TIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TIsZero",
        "normalized": "",
        "package": "type-int",
        "partial": "TIs Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TMul",
      "description": {
        "fct-descr": "\u003cp\u003eA simple peasant multiplier. TODO: exploit 2s complement and reverse the worst cases\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TMul",
        "fct-type": "class",
        "title": "TMul"
      },
      "index": {
        "description": "simple peasant multiplier TODO exploit complement and reverse the worst cases",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TMul",
        "normalized": "",
        "package": "type-int",
        "partial": "TMul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TNF",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TNF",
        "fct-type": "class",
        "title": "TNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TNF",
        "normalized": "",
        "package": "type-int",
        "partial": "TNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TNeg",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TNeg",
        "fct-type": "class",
        "title": "TNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TNeg",
        "normalized": "",
        "package": "type-int",
        "partial": "TNeg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#t:TPow",
      "description": {
        "fct-descr": "\u003cp\u003epeasant exponentiator\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Hex-Stage3.html#TPow",
        "fct-type": "class",
        "title": "TPow"
      },
      "index": {
        "description": "peasant exponentiator",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "TPow",
        "normalized": "",
        "package": "type-int",
        "partial": "TPow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:hexE",
      "description": {
        "fct-descr": "\u003cp\u003e$(hexE n) returns an undefined value of the appropriate THex instance\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e Exp",
        "fct-source": "src/Data-Type-Hex-Stage3.html#hexE",
        "fct-type": "function",
        "title": "hexE"
      },
      "index": {
        "description": "hexE returns an undefined value of the appropriate THex instance",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "hexE",
        "normalized": "a-\u003eExp",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:hexT",
      "description": {
        "fct-descr": "\u003cp\u003e$(hexT n) returns the appropriate THex instance\n\u003c/p\u003e",
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e Type",
        "fct-source": "src/Data-Type-Hex-Stage3.html#hexT",
        "fct-type": "function",
        "title": "hexT"
      },
      "index": {
        "description": "hexT returns the appropriate THex instance",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "hexT",
        "normalized": "a-\u003eType",
        "package": "type-int",
        "partial": "",
        "signature": "a-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tAdd",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tAdd",
        "fct-type": "function",
        "title": "tAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tAdd",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Add",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tIsNegative",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tIsNegative",
        "fct-type": "function",
        "title": "tIsNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tIsNegative",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Negative",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tIsPositive",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tIsPositive",
        "fct-type": "function",
        "title": "tIsPositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tIsPositive",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Positive",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tIsZero",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tIsZero",
        "fct-type": "function",
        "title": "tIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tIsZero",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Is Zero",
        "signature": "n-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tMul",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tMul",
        "fct-type": "function",
        "title": "tMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tMul",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Mul",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tNF",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tNF",
        "fct-type": "function",
        "title": "tNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tNF",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "NF",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tNeg",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tNeg",
        "fct-type": "function",
        "title": "tNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tNeg",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Neg",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tPow",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "a -\u003e b -\u003e c",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tPow",
        "fct-type": "function",
        "title": "tPow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tPow",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Pow",
        "signature": "a-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tPred",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "m -\u003e n",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tPred",
        "fct-type": "function",
        "title": "tPred"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tPred",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Pred",
        "signature": "m-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tSub",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "c -\u003e a -\u003e b",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tSub",
        "fct-type": "function",
        "title": "tSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tSub",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Sub",
        "signature": "c-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Hex.html#v:tSucc",
      "description": {
        "fct-module": "Data.Type.Hex",
        "fct-package": "type-int",
        "fct-signature": "n -\u003e m",
        "fct-source": "src/Data-Type-Hex-Stage3.html#tSucc",
        "fct-type": "function",
        "title": "tSucc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Hex",
        "module": "Data.Type.Hex",
        "name": "tSucc",
        "normalized": "a-\u003eb",
        "package": "type-int",
        "partial": "Succ",
        "signature": "n-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type-level Maybe w\u003cem\u003e Just\u003c/em\u003eNothing Types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Maybe.html",
        "fct-type": "module",
        "title": "Maybe"
      },
      "index": {
        "description": "Simple type-level Maybe Just Nothing Types",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "type-int",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#t:TJust",
      "description": {
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Maybe.html#TJust",
        "fct-type": "data",
        "title": "TJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "TJust",
        "normalized": "",
        "package": "type-int",
        "partial": "TJust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#t:TMaybe",
      "description": {
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Maybe.html#TMaybe",
        "fct-type": "class",
        "title": "TMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "TMaybe",
        "normalized": "",
        "package": "type-int",
        "partial": "TMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#t:TNothing",
      "description": {
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Maybe.html#TNothing",
        "fct-type": "data",
        "title": "TNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "TNothing",
        "normalized": "",
        "package": "type-int",
        "partial": "TNothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#v:tFromJust",
      "description": {
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "TJust t -\u003e t",
        "fct-source": "src/Data-Type-Maybe.html#tFromJust",
        "fct-type": "function",
        "title": "tFromJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "tFromJust",
        "normalized": "TJust a-\u003ea",
        "package": "type-int",
        "partial": "From Just",
        "signature": "TJust t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#v:tJust",
      "description": {
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "t -\u003e TJust t",
        "fct-source": "src/Data-Type-Maybe.html#tJust",
        "fct-type": "function",
        "title": "tJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "tJust",
        "normalized": "a-\u003eTJust a",
        "package": "type-int",
        "partial": "Just",
        "signature": "t-\u003eTJust t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Maybe.html#v:tNothing",
      "description": {
        "fct-module": "Data.Type.Maybe",
        "fct-package": "type-int",
        "fct-signature": "TNothing",
        "fct-source": "src/Data-Type-Maybe.html#tNothing",
        "fct-type": "function",
        "title": "tNothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Maybe",
        "module": "Data.Type.Maybe",
        "name": "tNothing",
        "normalized": "",
        "package": "type-int",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple equality and ordering for types.\n Extended to include common usage cases.\n\u003c/p\u003e\u003cp\u003eInstances should all really be decidable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "Simple equality and ordering for types Extended to include common usage cases Instances should all really be decidable",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "type-int",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TEq",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Ord.html#TEq",
        "fct-type": "class",
        "title": "TEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "TEq",
        "normalized": "",
        "package": "type-int",
        "partial": "TEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TGe",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Ord.html#TGe",
        "fct-type": "class",
        "title": "TGe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "TGe",
        "normalized": "",
        "package": "type-int",
        "partial": "TGe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TGt",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Ord.html#TGt",
        "fct-type": "class",
        "title": "TGt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "TGt",
        "normalized": "",
        "package": "type-int",
        "partial": "TGt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TLe",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Ord.html#TLe",
        "fct-type": "class",
        "title": "TLe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "TLe",
        "normalized": "",
        "package": "type-int",
        "partial": "TLe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#t:TLt",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Ord.html#TLt",
        "fct-type": "class",
        "title": "TLt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "TLt",
        "normalized": "",
        "package": "type-int",
        "partial": "TLt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tEq",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "x -\u003e y -\u003e b",
        "fct-source": "src/Data-Type-Ord.html#tEq",
        "fct-type": "function",
        "title": "tEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "tEq",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Eq",
        "signature": "x-\u003ey-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tGe",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "x -\u003e y -\u003e b",
        "fct-source": "src/Data-Type-Ord.html#tGe",
        "fct-type": "function",
        "title": "tGe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "tGe",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Ge",
        "signature": "x-\u003ey-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tGt",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "x -\u003e y -\u003e b",
        "fct-source": "src/Data-Type-Ord.html#tGt",
        "fct-type": "function",
        "title": "tGt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "tGt",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Gt",
        "signature": "x-\u003ey-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tLe",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "x -\u003e y -\u003e b",
        "fct-source": "src/Data-Type-Ord.html#tLe",
        "fct-type": "function",
        "title": "tLe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "tLe",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Le",
        "signature": "x-\u003ey-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Ord.html#v:tLt",
      "description": {
        "fct-module": "Data.Type.Ord",
        "fct-package": "type-int",
        "fct-signature": "x -\u003e y -\u003e b",
        "fct-source": "src/Data-Type-Ord.html#tLt",
        "fct-type": "function",
        "title": "tLt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Ord",
        "module": "Data.Type.Ord",
        "name": "tLt",
        "normalized": "a-\u003eb-\u003ec",
        "package": "type-int",
        "partial": "Lt",
        "signature": "x-\u003ey-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUsed to express trichotomy at the type level.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Type.Sign",
        "fct-package": "type-int",
        "fct-signature": "module",
        "fct-source": "src/Data-Type-Sign.html",
        "fct-type": "module",
        "title": "Sign"
      },
      "index": {
        "description": "Used to express trichotomy at the type level",
        "hierarchy": "Data Type Sign",
        "module": "Data.Type.Sign",
        "name": "Sign",
        "normalized": "",
        "package": "type-int",
        "partial": "Sign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:Negative",
      "description": {
        "fct-module": "Data.Type.Sign",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Sign.html#Negative",
        "fct-type": "data",
        "title": "Negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Sign",
        "module": "Data.Type.Sign",
        "name": "Negative",
        "normalized": "",
        "package": "type-int",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:Positive",
      "description": {
        "fct-module": "Data.Type.Sign",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Sign.html#Positive",
        "fct-type": "data",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Sign",
        "module": "Data.Type.Sign",
        "name": "Positive",
        "normalized": "",
        "package": "type-int",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:SignZero",
      "description": {
        "fct-module": "Data.Type.Sign",
        "fct-package": "type-int",
        "fct-signature": "data",
        "fct-source": "src/Data-Type-Sign.html#SignZero",
        "fct-type": "data",
        "title": "SignZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Sign",
        "module": "Data.Type.Sign",
        "name": "SignZero",
        "normalized": "",
        "package": "type-int",
        "partial": "Sign Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/type-int/docs/Data-Type-Sign.html#t:TSign",
      "description": {
        "fct-module": "Data.Type.Sign",
        "fct-package": "type-int",
        "fct-signature": "class",
        "fct-source": "src/Data-Type-Sign.html#TSign",
        "fct-type": "class",
        "title": "TSign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Type Sign",
        "module": "Data.Type.Sign",
        "name": "TSign",
        "normalized": "",
        "package": "type-int",
        "partial": "TSign",
        "signature": ""
      }
    }
  }
]