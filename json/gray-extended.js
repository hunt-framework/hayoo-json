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
        "word": "gray-extended"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGray encoding schemes. A Gray code is a list of values such that two\n successive values differ in only one digit. Usually the term /Gray\n code/ refers to the Binary Reflected Gray code (BRGC), but non-binary\n Gray codes have also been discovered. Some Gray codes are also\n \u003cem\u003ecyclic\u003c/em\u003e: the last and first values differ in only one digit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Gray",
          "name": "Gray",
          "package": "gray-extended",
          "source": "src/Codec-Gray.html",
          "type": "module"
        },
        "index": {
          "description": "Gray encoding schemes Gray code is list of values such that two successive values differ in only one digit Usually the term Gray code refers to the Binary Reflected Gray code BRGC but non-binary Gray codes have also been discovered Some Gray codes are also cyclic the last and first values differ in only one digit",
          "hierarchy": "Codec Gray",
          "module": "Codec.Gray",
          "name": "Gray",
          "package": "gray-extended",
          "partial": "Gray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gray-extended/docs/Codec-Gray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrayCodes\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e generates the list of Binary Reflected Gray Code\n   (BRGC) numbers of length k. This code is cyclic.\n\u003c/p\u003e",
          "module": "Codec.Gray",
          "name": "grayCodes",
          "package": "gray-extended",
          "signature": "Int -\u003e [[Bool]]",
          "source": "src/Codec-Gray.html#grayCodes",
          "type": "function"
        },
        "index": {
          "description": "grayCodes generates the list of Binary Reflected Gray Code BRGC numbers of length This code is cyclic",
          "hierarchy": "Codec Gray",
          "module": "Codec.Gray",
          "name": "grayCodes",
          "normalized": "Int-\u003e[[Bool]]",
          "package": "gray-extended",
          "partial": "Codes",
          "signature": "Int-\u003e[[Bool]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-extended/docs/Codec-Gray.html#v:grayCodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrayToIntegral\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e decodes \u003ccode\u003en\u003c/code\u003e using a BRGC, and returns the\n   resulting integer. For example, 25 is \u003ccode\u003e11001\u003c/code\u003e, which is the code\n   for 17. So \u003ccode\u003egrayToIntegral 25\u003c/code\u003e returns \u003ccode\u003e17\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Gray",
          "name": "grayToIntegral",
          "package": "gray-extended",
          "signature": "a -\u003e a",
          "source": "src/Codec-Gray.html#grayToIntegral",
          "type": "function"
        },
        "index": {
          "description": "grayToIntegral decodes using BRGC and returns the resulting integer For example is which is the code for So grayToIntegral returns",
          "hierarchy": "Codec Gray",
          "module": "Codec.Gray",
          "name": "grayToIntegral",
          "normalized": "a-\u003ea",
          "package": "gray-extended",
          "partial": "To Integral",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-extended/docs/Codec-Gray.html#v:grayToIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eintegralToGray\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e encodes \u003ccode\u003en\u003c/code\u003e using a BRGC, and returns the\n   resulting bits as an integer. For example, encoding \u003ccode\u003e17\u003c/code\u003e in BRGC\n   results in \u003ccode\u003e11001\u003c/code\u003e, or 25. So \u003ccode\u003eintegralToGray 17\u003c/code\u003e returns \u003ccode\u003e25\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Gray",
          "name": "integralToGray",
          "package": "gray-extended",
          "signature": "a -\u003e a",
          "source": "src/Codec-Gray.html#integralToGray",
          "type": "function"
        },
        "index": {
          "description": "integralToGray encodes using BRGC and returns the resulting bits as an integer For example encoding in BRGC results in or So integralToGray returns",
          "hierarchy": "Codec Gray",
          "module": "Codec.Gray",
          "name": "integralToGray",
          "normalized": "a-\u003ea",
          "package": "gray-extended",
          "partial": "To Gray",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-extended/docs/Codec-Gray.html#v:integralToGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enaryGrayCodes\u003c/a\u003e\u003c/code\u003e xs k\u003c/code\u003e generates a non-Boolean (or n-ary) Gray code\n   of length \u003ccode\u003ek\u003c/code\u003e using the elements of \u003ccode\u003exs\u003c/code\u003e as \"digits\". This code\n   is cyclic.\n\u003c/p\u003e\u003cp\u003eEx: \u003ccode\u003e\u003ccode\u003e\u003ca\u003enaryGrayCodes\u003c/a\u003e\u003c/code\u003e \"012\" 4\u003c/code\u003e generates a ternary Gray code that\n   is four digits long.\n\u003c/p\u003e",
          "module": "Codec.Gray",
          "name": "naryGrayCodes",
          "package": "gray-extended",
          "signature": "[a] -\u003e Int -\u003e [[a]]",
          "source": "src/Codec-Gray.html#naryGrayCodes",
          "type": "function"
        },
        "index": {
          "description": "naryGrayCodes xs generates non-Boolean or n-ary Gray code of length using the elements of xs as digits This code is cyclic Ex naryGrayCodes generates ternary Gray code that is four digits long",
          "hierarchy": "Codec Gray",
          "module": "Codec.Gray",
          "name": "naryGrayCodes",
          "normalized": "[a]-\u003eInt-\u003e[[a]]",
          "package": "gray-extended",
          "partial": "Gray Codes",
          "signature": "[a]-\u003eInt-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gray-extended/docs/Codec-Gray.html#v:naryGrayCodes"
      }
    }
  ]
]