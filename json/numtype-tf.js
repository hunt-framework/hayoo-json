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
        "word": "numtype-tf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Module provides unary type-level representations, hereafter\n  referred to as \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es, of the (positive and negative) integers\n  and basic operations (addition, subtraction, multiplication, division)\n  on these. While functions are provided for the operations \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es\n  exist solely at the type level and their only value is \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere are similarities with the HNats of the HList library,\n  which was indeed a source of inspiration. Occasionally references\n  are made to the HNats. The main addition in this module is negative\n  numbers.\n\u003c/p\u003e\u003cp\u003eThe practical size of the \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es is limited by the type checker\n  stack. If the \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es grow too large (which can happen quickly\n  with multiplication) an error message similar to the following will\n  be emitted:\n\u003c/p\u003e\u003cpre\u003e\n  Context reduction stack overflow; size = 20\n  Use -fcontext-stack=N to increase stack size to N\n\u003c/pre\u003e\u003cp\u003eThis situation could concievably be mitigated significantly by using\n  e.g. a binary representation of integers rather than Peano numbers.\n\u003c/p\u003e\u003cp\u003ePlease refer to the literate Haskell code for a narrative of \n  the implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.NumType.TF",
          "name": "TF",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html",
          "type": "module"
        },
        "index": {
          "description": "This Module provides unary type-level representations hereafter referred to as NumType of the positive and negative integers and basic operations addition subtraction multiplication division on these While functions are provided for the operations NumType exist solely at the type level and their only value is undefined There are similarities with the HNats of the HList library which was indeed source of inspiration Occasionally references are made to the HNats The main addition in this module is negative numbers The practical size of the NumType is limited by the type checker stack If the NumType grow too large which can happen quickly with multiplication an error message similar to the following will be emitted Context reduction stack overflow size Use fcontext-stack to increase stack size to This situation could concievably be mitigated significantly by using e.g binary representation of integers rather than Peano numbers Please refer to the literate Haskell code for narrative of the implementation",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "TF",
          "package": "numtype-tf",
          "partial": "TF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition (\u003ccode\u003ea + b\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "Add",
          "package": "numtype-tf",
          "signature": "Add",
          "type": "function"
        },
        "index": {
          "description": "Addition",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Add",
          "package": "numtype-tf",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision (\u003ccode\u003ea / b\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "Div",
          "package": "numtype-tf",
          "signature": "Div",
          "type": "function"
        },
        "index": {
          "description": "Division",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Div",
          "package": "numtype-tf",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication (\u003ccode\u003ea * b\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "Mul",
          "package": "numtype-tf",
          "signature": "Mul",
          "type": "function"
        },
        "index": {
          "description": "Multiplication",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Mul",
          "package": "numtype-tf",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation type, used to represent negative numbers by negating\n type level naturals.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "N",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#N",
          "type": "data"
        },
        "index": {
          "description": "Negation type used to represent negative numbers by negating type level naturals",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "N",
          "package": "numtype-tf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Neg1",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Neg1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Neg1",
          "package": "numtype-tf",
          "partial": "Neg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Neg2",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Neg2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Neg2",
          "package": "numtype-tf",
          "partial": "Neg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Neg3",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Neg3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Neg3",
          "package": "numtype-tf",
          "partial": "Neg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Neg4",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Neg4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Neg4",
          "package": "numtype-tf",
          "partial": "Neg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Neg5",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Neg5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Neg5",
          "package": "numtype-tf",
          "partial": "Neg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass encompassing all valid type level integers.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "NumType",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#NumType",
          "type": "class"
        },
        "index": {
          "description": "Class encompassing all valid type level integers",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "NumType",
          "package": "numtype-tf",
          "partial": "Num Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:NumType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Pos1",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Pos1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Pos1",
          "package": "numtype-tf",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Pos2",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Pos2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Pos2",
          "package": "numtype-tf",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Pos3",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Pos3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Pos3",
          "package": "numtype-tf",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Pos4",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Pos4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Pos4",
          "package": "numtype-tf",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Pos5",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Pos5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Pos5",
          "package": "numtype-tf",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessor type for building type level natural numbers.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "S",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#S",
          "type": "data"
        },
        "index": {
          "description": "Successor type for building type level natural numbers",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "S",
          "package": "numtype-tf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction (\u003ccode\u003ea - b\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "Sub",
          "package": "numtype-tf",
          "signature": "Sub",
          "type": "function"
        },
        "index": {
          "description": "Subtraction",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Sub",
          "package": "numtype-tf",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level zero.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "Z",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Z",
          "type": "data"
        },
        "index": {
          "description": "Type level zero",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Z",
          "package": "numtype-tf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "Zero",
          "package": "numtype-tf",
          "source": "src/Numeric-NumType-TF.html#Zero",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "Zero",
          "package": "numtype-tf",
          "partial": "Zero",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "(*)",
          "package": "numtype-tf",
          "signature": "a -\u003e b -\u003e Mul a b",
          "source": "src/Numeric-NumType-TF.html#%2A",
          "type": "function"
        },
        "index": {
          "description": "Multiply two NumType",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "(*) *",
          "normalized": "a-\u003eb-\u003eMul a b",
          "package": "numtype-tf",
          "signature": "a-\u003eb-\u003eMul a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "(+)",
          "package": "numtype-tf",
          "signature": "a -\u003e b -\u003e Add a b",
          "source": "src/Numeric-NumType-TF.html#%2B",
          "type": "function"
        },
        "index": {
          "description": "Add two NumType",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "(+) +",
          "normalized": "a-\u003eb-\u003eAdd a b",
          "package": "numtype-tf",
          "signature": "a-\u003eb-\u003eAdd a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract the second \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e from the first.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "(-)",
          "package": "numtype-tf",
          "signature": "a -\u003e b -\u003e Sub a b",
          "source": "src/Numeric-NumType-TF.html#-",
          "type": "function"
        },
        "index": {
          "description": "Subtract the second NumType from the first",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "(-) -",
          "normalized": "a-\u003eb-\u003eSub a b",
          "package": "numtype-tf",
          "signature": "a-\u003eb-\u003eSub a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide the first \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e by the second.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "(/)",
          "package": "numtype-tf",
          "signature": "a -\u003e b -\u003e Div a b",
          "source": "src/Numeric-NumType-TF.html#%2F",
          "type": "function"
        },
        "index": {
          "description": "Divide the first NumType by the second",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "(/) /",
          "normalized": "a-\u003eb-\u003eDiv a b",
          "package": "numtype-tf",
          "signature": "a-\u003eb-\u003eDiv a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement a \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e by one.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "decr",
          "package": "numtype-tf",
          "signature": "a -\u003e Pred a",
          "source": "src/Numeric-NumType-TF.html#decr",
          "type": "function"
        },
        "index": {
          "description": "Decrement NumType by one",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "decr",
          "normalized": "a-\u003ePred a",
          "package": "numtype-tf",
          "signature": "a-\u003ePred a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement a \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e by one.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "incr",
          "package": "numtype-tf",
          "signature": "a -\u003e Succ a",
          "source": "src/Numeric-NumType-TF.html#incr",
          "type": "function"
        },
        "index": {
          "description": "Increment NumType by one",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "incr",
          "normalized": "a-\u003eSucc a",
          "package": "numtype-tf",
          "signature": "a-\u003eSucc a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "neg1",
          "package": "numtype-tf",
          "signature": "Neg1",
          "source": "src/Numeric-NumType-TF.html#neg1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "neg1",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "neg2",
          "package": "numtype-tf",
          "signature": "Neg2",
          "source": "src/Numeric-NumType-TF.html#neg2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "neg2",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "neg3",
          "package": "numtype-tf",
          "signature": "Neg3",
          "source": "src/Numeric-NumType-TF.html#neg3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "neg3",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "neg4",
          "package": "numtype-tf",
          "signature": "Neg4",
          "source": "src/Numeric-NumType-TF.html#neg4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "neg4",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "neg5",
          "package": "numtype-tf",
          "signature": "Neg5",
          "source": "src/Numeric-NumType-TF.html#neg5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "neg5",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate a \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "negate",
          "package": "numtype-tf",
          "signature": "a -\u003e Negate a",
          "source": "src/Numeric-NumType-TF.html#negate",
          "type": "function"
        },
        "index": {
          "description": "Negate NumType",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "negate",
          "normalized": "a-\u003eNegate a",
          "package": "numtype-tf",
          "signature": "a-\u003eNegate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "pos1",
          "package": "numtype-tf",
          "signature": "Pos1",
          "source": "src/Numeric-NumType-TF.html#pos1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "pos1",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "pos2",
          "package": "numtype-tf",
          "signature": "Pos2",
          "source": "src/Numeric-NumType-TF.html#pos2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "pos2",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "pos3",
          "package": "numtype-tf",
          "signature": "Pos3",
          "source": "src/Numeric-NumType-TF.html#pos3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "pos3",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "pos4",
          "package": "numtype-tf",
          "signature": "Pos4",
          "source": "src/Numeric-NumType-TF.html#pos4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "pos4",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "pos5",
          "package": "numtype-tf",
          "signature": "Pos5",
          "source": "src/Numeric-NumType-TF.html#pos5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "pos5",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a type level integer to an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.NumType.TF",
          "name": "toNum",
          "package": "numtype-tf",
          "signature": "n -\u003e a",
          "source": "src/Numeric-NumType-TF.html#toNum",
          "type": "function"
        },
        "index": {
          "description": "Convert type level integer to an instance of Num",
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "toNum",
          "normalized": "a-\u003eb",
          "package": "numtype-tf",
          "partial": "Num",
          "signature": "n-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:toNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NumType.TF",
          "name": "zero",
          "package": "numtype-tf",
          "signature": "Z",
          "source": "src/Numeric-NumType-TF.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NumType TF",
          "module": "Numeric.NumType.TF",
          "name": "zero",
          "package": "numtype-tf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:zero"
      }
    }
  ]
]