[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Module provides unary type-level representations, hereafter\n  referred to as \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es, of the (positive and negative) integers\n  and basic operations (addition, subtraction, multiplication, division)\n  on these. While functions are provided for the operations \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es\n  exist solely at the type level and their only value is \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere are similarities with the HNats of the HList library,\n  which was indeed a source of inspiration. Occasionally references\n  are made to the HNats. The main addition in this module is negative\n  numbers.\n\u003c/p\u003e\u003cp\u003eThe practical size of the \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es is limited by the type checker\n  stack. If the \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es grow too large (which can happen quickly\n  with multiplication) an error message similar to the following will\n  be emitted:\n\u003c/p\u003e\u003cpre\u003e\n  Context reduction stack overflow; size = 20\n  Use -fcontext-stack=N to increase stack size to N\n\u003c/pre\u003e\u003cp\u003eThis situation could concievably be mitigated significantly by using\n  e.g. a binary representation of integers rather than Peano numbers.\n\u003c/p\u003e\u003cp\u003ePlease refer to the literate Haskell code for a narrative of \n  the implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "module",
        "fct-source": "src/Numeric-NumType-TF.html",
        "fct-type": "module",
        "title": "TF"
      },
      "index": {
        "description": "This Module provides unary type-level representations hereafter referred to as NumType of the positive and negative integers and basic operations addition subtraction multiplication division on these While functions are provided for the operations NumType exist solely at the type level and their only value is undefined There are similarities with the HNats of the HList library which was indeed source of inspiration Occasionally references are made to the HNats The main addition in this module is negative numbers The practical size of the NumType is limited by the type checker stack If the NumType grow too large which can happen quickly with multiplication an error message similar to the following will be emitted Context reduction stack overflow size Use fcontext-stack to increase stack size to This situation could concievably be mitigated significantly by using e.g binary representation of integers rather than Peano numbers Please refer to the literate Haskell code for narrative of the implementation",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "TF",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "TF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Add",
      "description": {
        "fct-descr": "\u003cp\u003eAddition (\u003ccode\u003ea + b\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Add",
        "fct-type": "function",
        "title": "Add"
      },
      "index": {
        "description": "Addition",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Add",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Div",
      "description": {
        "fct-descr": "\u003cp\u003eDivision (\u003ccode\u003ea / b\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Div",
        "fct-type": "function",
        "title": "Div"
      },
      "index": {
        "description": "Division",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Div",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Mul",
      "description": {
        "fct-descr": "\u003cp\u003eMultiplication (\u003ccode\u003ea * b\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Mul",
        "fct-type": "function",
        "title": "Mul"
      },
      "index": {
        "description": "Multiplication",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Mul",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:N",
      "description": {
        "fct-descr": "\u003cp\u003eNegation type, used to represent negative numbers by negating\n type level naturals.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "data",
        "fct-source": "src/Numeric-NumType-TF.html#N",
        "fct-type": "data",
        "title": "N"
      },
      "index": {
        "description": "Negation type used to represent negative numbers by negating type level naturals",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "N",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg1",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Neg1",
        "fct-type": "type",
        "title": "Neg1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Neg1",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg2",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Neg2",
        "fct-type": "type",
        "title": "Neg2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Neg2",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg3",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Neg3",
        "fct-type": "type",
        "title": "Neg3"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Neg3",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg4",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Neg4",
        "fct-type": "type",
        "title": "Neg4"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Neg4",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Neg5",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Neg5",
        "fct-type": "type",
        "title": "Neg5"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Neg5",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:NumType",
      "description": {
        "fct-descr": "\u003cp\u003eClass encompassing all valid type level integers.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "class",
        "fct-source": "src/Numeric-NumType-TF.html#NumType",
        "fct-type": "class",
        "title": "NumType"
      },
      "index": {
        "description": "Class encompassing all valid type level integers",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "NumType",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Num Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos1",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Pos1",
        "fct-type": "type",
        "title": "Pos1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Pos1",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos2",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Pos2",
        "fct-type": "type",
        "title": "Pos2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Pos2",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos3",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Pos3",
        "fct-type": "type",
        "title": "Pos3"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Pos3",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos4",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Pos4",
        "fct-type": "type",
        "title": "Pos4"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Pos4",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Pos5",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Pos5",
        "fct-type": "type",
        "title": "Pos5"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Pos5",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:S",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessor type for building type level natural numbers.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "data",
        "fct-source": "src/Numeric-NumType-TF.html#S",
        "fct-type": "data",
        "title": "S"
      },
      "index": {
        "description": "Successor type for building type level natural numbers",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "S",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Sub",
      "description": {
        "fct-descr": "\u003cp\u003eSubtraction (\u003ccode\u003ea - b\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Sub",
        "fct-type": "function",
        "title": "Sub"
      },
      "index": {
        "description": "Subtraction",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Sub",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Z",
      "description": {
        "fct-descr": "\u003cp\u003eType level zero.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "data",
        "fct-source": "src/Numeric-NumType-TF.html#Z",
        "fct-type": "data",
        "title": "Z"
      },
      "index": {
        "description": "Type level zero",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Z",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#t:Zero",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "type",
        "fct-source": "src/Numeric-NumType-TF.html#Zero",
        "fct-type": "type",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "Zero",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-42-",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply two \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e b -\u003e Mul a b",
        "fct-source": "src/Numeric-NumType-TF.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "Multiply two NumType",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "(*) *",
        "normalized": "a-\u003eb-\u003eMul a b",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003eb-\u003eMul a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-43-",
      "description": {
        "fct-descr": "\u003cp\u003eAdd two \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e b -\u003e Add a b",
        "fct-source": "src/Numeric-NumType-TF.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "Add two NumType",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "(+) +",
        "normalized": "a-\u003eb-\u003eAdd a b",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003eb-\u003eAdd a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-45-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtract the second \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e from the first.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e b -\u003e Sub a b",
        "fct-source": "src/Numeric-NumType-TF.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "Subtract the second NumType from the first",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "(-) -",
        "normalized": "a-\u003eb-\u003eSub a b",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003eb-\u003eSub a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:-47-",
      "description": {
        "fct-descr": "\u003cp\u003eDivide the first \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e by the second.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e b -\u003e Div a b",
        "fct-source": "src/Numeric-NumType-TF.html#%2F",
        "fct-type": "function",
        "title": "(/)"
      },
      "index": {
        "description": "Divide the first NumType by the second",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "(/) /",
        "normalized": "a-\u003eb-\u003eDiv a b",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003eb-\u003eDiv a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:decr",
      "description": {
        "fct-descr": "\u003cp\u003eDecrement a \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e by one.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e Pred a",
        "fct-source": "src/Numeric-NumType-TF.html#decr",
        "fct-type": "function",
        "title": "decr"
      },
      "index": {
        "description": "Decrement NumType by one",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "decr",
        "normalized": "a-\u003ePred a",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003ePred a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:incr",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement a \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e by one.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e Succ a",
        "fct-source": "src/Numeric-NumType-TF.html#incr",
        "fct-type": "function",
        "title": "incr"
      },
      "index": {
        "description": "Increment NumType by one",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "incr",
        "normalized": "a-\u003eSucc a",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003eSucc a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg1",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Neg1",
        "fct-source": "src/Numeric-NumType-TF.html#neg1",
        "fct-type": "function",
        "title": "neg1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "neg1",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg2",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Neg2",
        "fct-source": "src/Numeric-NumType-TF.html#neg2",
        "fct-type": "function",
        "title": "neg2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "neg2",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg3",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Neg3",
        "fct-source": "src/Numeric-NumType-TF.html#neg3",
        "fct-type": "function",
        "title": "neg3"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "neg3",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg4",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Neg4",
        "fct-source": "src/Numeric-NumType-TF.html#neg4",
        "fct-type": "function",
        "title": "neg4"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "neg4",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:neg5",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Neg5",
        "fct-source": "src/Numeric-NumType-TF.html#neg5",
        "fct-type": "function",
        "title": "neg5"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "neg5",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:negate",
      "description": {
        "fct-descr": "\u003cp\u003eNegate a \u003ccode\u003e\u003ca\u003eNumType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "a -\u003e Negate a",
        "fct-source": "src/Numeric-NumType-TF.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "Negate NumType",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "negate",
        "normalized": "a-\u003eNegate a",
        "package": "numtype-tf",
        "partial": "",
        "signature": "a-\u003eNegate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos1",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Pos1",
        "fct-source": "src/Numeric-NumType-TF.html#pos1",
        "fct-type": "function",
        "title": "pos1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "pos1",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos2",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Pos2",
        "fct-source": "src/Numeric-NumType-TF.html#pos2",
        "fct-type": "function",
        "title": "pos2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "pos2",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos3",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Pos3",
        "fct-source": "src/Numeric-NumType-TF.html#pos3",
        "fct-type": "function",
        "title": "pos3"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "pos3",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos4",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Pos4",
        "fct-source": "src/Numeric-NumType-TF.html#pos4",
        "fct-type": "function",
        "title": "pos4"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "pos4",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:pos5",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Pos5",
        "fct-source": "src/Numeric-NumType-TF.html#pos5",
        "fct-type": "function",
        "title": "pos5"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "pos5",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:toNum",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a type level integer to an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "n -\u003e a",
        "fct-source": "src/Numeric-NumType-TF.html#toNum",
        "fct-type": "function",
        "title": "toNum"
      },
      "index": {
        "description": "Convert type level integer to an instance of Num",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "toNum",
        "normalized": "a-\u003eb",
        "package": "numtype-tf",
        "partial": "Num",
        "signature": "n-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/numtype-tf/docs/Numeric-NumType-TF.html#v:zero",
      "description": {
        "fct-module": "Numeric.NumType.TF",
        "fct-package": "numtype-tf",
        "fct-signature": "Z",
        "fct-source": "src/Numeric-NumType-TF.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric NumType TF",
        "module": "Numeric.NumType.TF",
        "name": "zero",
        "normalized": "",
        "package": "numtype-tf",
        "partial": "",
        "signature": ""
      }
    }
  }
]