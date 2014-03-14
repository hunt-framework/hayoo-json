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
        "word": "gray-code"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGray code is a binary numeral system where two successive numbers\n differ in only one bit.\n\u003c/p\u003e\u003cp\u003eThis module provides an interface to encode/decode \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e types.\n\u003c/p\u003e\u003cp\u003eAlgorithm:\n   Haupt, R.L. and Haupt, S.E., Practical Genetic Algorithms,\n   Second ed. (2004),  5.4. Gray Codes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Gray.Bits",
          "name": "Bits",
          "package": "gray-code",
          "source": "src/Codec-Binary-Gray-Bits.html",
          "type": "module"
        },
        "index": {
          "description": "Gray code is binary numeral system where two successive numbers differ in only one bit This module provides an interface to encode decode Bits types Algorithm Haupt R.L and Haupt S.E Practical Genetic Algorithms Second ed Gray Codes",
          "hierarchy": "Codec Binary Gray Bits",
          "module": "Codec.Binary.Gray.Bits",
          "name": "Bits",
          "package": "gray-code",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an integer number from Gray code to binary.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebinary\u003c/a\u003e\u003c/code\u003e is undefined for types that do not have fixed bitsize,\n e.g. for \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.Bits",
          "name": "binary",
          "package": "gray-code",
          "signature": "a -\u003e a",
          "source": "src/Codec-Binary-Gray-Bits.html#binary",
          "type": "function"
        },
        "index": {
          "description": "Convert an integer number from Gray code to binary binary is undefined for types that do not have fixed bitsize e.g for Integer",
          "hierarchy": "Codec Binary Gray Bits",
          "module": "Codec.Binary.Gray.Bits",
          "name": "binary",
          "normalized": "a-\u003ea",
          "package": "gray-code",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-Bits.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an integer number from binary to Gray code.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egray\u003c/a\u003e\u003c/code\u003e is undefined for negative numbers of types that do not have\n fixed bitsize, e.g. for negative \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.Bits",
          "name": "gray",
          "package": "gray-code",
          "signature": "a -\u003e a",
          "source": "src/Codec-Binary-Gray-Bits.html#gray",
          "type": "function"
        },
        "index": {
          "description": "Convert an integer number from binary to Gray code gray is undefined for negative numbers of types that do not have fixed bitsize e.g for negative Integer",
          "hierarchy": "Codec Binary Gray Bits",
          "module": "Codec.Binary.Gray.Bits",
          "name": "gray",
          "normalized": "a-\u003ea",
          "package": "gray-code",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-Bits.html#v:gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender binary code as a string of \u003ccode\u003e0\u003c/code\u003es and \u003ccode\u003e1\u003c/code\u003es.\n For example, \u003ccode\u003e(42::Int8)\u003c/code\u003e is formatted as \u003ccode\u003e101010\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.Bits",
          "name": "showBits",
          "package": "gray-code",
          "signature": "a -\u003e String",
          "source": "src/Codec-Binary-Gray-Bits.html#showBits",
          "type": "function"
        },
        "index": {
          "description": "Render binary code as string of and For example Int8 is formatted as",
          "hierarchy": "Codec Binary Gray Bits",
          "module": "Codec.Binary.Gray.Bits",
          "name": "showBits",
          "normalized": "a-\u003eString",
          "package": "gray-code",
          "partial": "Bits",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-Bits.html#v:showBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGray code is a binary numeral system where two successive numbers\n differ in only one bit.\n\u003c/p\u003e\u003cp\u003eThis module provides an interface to encode/decode numbers\n represented as lists of \u003ccode\u003eBool\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlgorithm:\n   Haupt, R.L. and Haupt, S.E., Practical Genetic Algorithms,\n   Second ed. (2004),  5.4. Gray Codes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "List",
          "package": "gray-code",
          "source": "src/Codec-Binary-Gray-List.html",
          "type": "module"
        },
        "index": {
          "description": "Gray code is binary numeral system where two successive numbers differ in only one bit This module provides an interface to encode decode numbers represented as lists of Bool Algorithm Haupt R.L and Haupt S.E Practical Genetic Algorithms Second ed Gray Codes",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "List",
          "package": "gray-code",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of bits in Gray code and convert them to binary encoding\n (most significant bit last).\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "binary",
          "package": "gray-code",
          "signature": "[Bool] -\u003e [Bool]",
          "source": "src/Codec-Binary-Gray-List.html#binary",
          "type": "function"
        },
        "index": {
          "description": "Take list of bits in Gray code and convert them to binary encoding most significant bit last",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "binary",
          "normalized": "[Bool]-\u003e[Bool]",
          "package": "gray-code",
          "signature": "[Bool]-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of bits in binary encoding to a number.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "fromList",
          "package": "gray-code",
          "signature": "[Bool] -\u003e b",
          "source": "src/Codec-Binary-Gray-List.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list of bits in binary encoding to number",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "fromList",
          "normalized": "[Bool]-\u003ea",
          "package": "gray-code",
          "partial": "List",
          "signature": "[Bool]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of bits (most significant last) in binary encoding\n and convert them to Gray code.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "gray",
          "package": "gray-code",
          "signature": "[Bool] -\u003e [Bool]",
          "source": "src/Codec-Binary-Gray-List.html#gray",
          "type": "function"
        },
        "index": {
          "description": "Take list of bits most significant last in binary encoding and convert them to Gray code",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "gray",
          "normalized": "[Bool]-\u003e[Bool]",
          "package": "gray-code",
          "signature": "[Bool]-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#v:gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a list of bits as a string of \u003ccode\u003e0\u003c/code\u003es and \u003ccode\u003e1\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "showBits",
          "package": "gray-code",
          "signature": "[Bool] -\u003e String",
          "source": "src/Codec-Binary-Gray-List.html#showBits",
          "type": "function"
        },
        "index": {
          "description": "Render list of bits as string of and",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "showBits",
          "normalized": "[Bool]-\u003eString",
          "package": "gray-code",
          "partial": "Bits",
          "signature": "[Bool]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#v:showBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a number to a list of bits in usual binary encoding (most\n significant bit last). Truncates unset major bits.\n\u003c/p\u003e\u003cp\u003eThis function is undefined for negative numbers of types that do not\n have fixed bitsize, like \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "toList",
          "package": "gray-code",
          "signature": "b -\u003e [Bool]",
          "source": "src/Codec-Binary-Gray-List.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert number to list of bits in usual binary encoding most significant bit last Truncates unset major bits This function is undefined for negative numbers of types that do not have fixed bitsize like Integer",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "toList",
          "normalized": "a-\u003e[Bool]",
          "package": "gray-code",
          "partial": "List",
          "signature": "b-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a number to a list of bits in usual binary encoding (most\n significant bit last).\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, but returns all unset major bits too. So the length\n of the output is always the same length as \u003ccode\u003ebitSize i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Gray.List",
          "name": "toList'",
          "package": "gray-code",
          "signature": "b -\u003e [Bool]",
          "source": "src/Codec-Binary-Gray-List.html#toList%27",
          "type": "function"
        },
        "index": {
          "description": "Convert number to list of bits in usual binary encoding most significant bit last Like toList but returns all unset major bits too So the length of the output is always the same length as bitSize",
          "hierarchy": "Codec Binary Gray List",
          "module": "Codec.Binary.Gray.List",
          "name": "toList'",
          "normalized": "a-\u003e[Bool]",
          "package": "gray-code",
          "partial": "List'",
          "signature": "b-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray-List.html#v:toList-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Gray",
          "name": "Gray",
          "package": "gray-code",
          "source": "src/Codec-Binary-Gray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Binary Gray",
          "module": "Codec.Binary.Gray",
          "name": "Gray",
          "package": "gray-code",
          "partial": "Gray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gray-code/docs/Codec-Binary-Gray.html#"
      }
    }
  ]
]