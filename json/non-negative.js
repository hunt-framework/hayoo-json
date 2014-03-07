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
        "word": "non-negative"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA lazy number type, which is a generalization of lazy Peano numbers.\nComparisons can be made lazy and\nthus computations are possible which are impossible with strict number types,\ne.g. you can compute \u003ccode\u003elet y = min (1+y) 2 in y\u003c/code\u003e.\nYou can even work with infinite values.\nHowever, depending on the granularity,\nthe memory consumption is higher than that for strict number types.\nThis number type is of interest for the merge operation of event lists,\nwhich allows for co-recursive merges.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.NonNegative.Chunky",
          "name": "Chunky",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Chunky.html",
          "type": "module"
        },
        "index": {
          "description": "lazy number type which is generalization of lazy Peano numbers Comparisons can be made lazy and thus computations are possible which are impossible with strict number types e.g you can compute let min in You can even work with infinite values However depending on the granularity the memory consumption is higher than that for strict number types This number type is of interest for the merge operation of event lists which allows for co-recursive merges",
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "Chunky",
          "package": "non-negative",
          "partial": "Chunky",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chunky non-negative number is a list of non-negative numbers.\nIt represents the sum of the list elements.\nIt is possible to represent a finite number with infinitely many chunks\nby using an infinite number of zeros.\n\u003c/p\u003e\u003cp\u003eNote the following problems:\n\u003c/p\u003e\u003cp\u003eAddition is commutative only for finite representations.\nE.g. \u003ccode\u003elet y = min (1+y) 2 in y\u003c/code\u003e is defined,\n\u003ccode\u003elet y = min (y+1) 2 in y\u003c/code\u003e is not.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Chunky",
          "name": "T",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#T",
          "type": "data"
        },
        "index": {
          "description": "chunky non-negative number is list of non-negative numbers It represents the sum of the list elements It is possible to represent finite number with infinitely many chunks by using an infinite number of zeros Note the following problems Addition is commutative only for finite representations E.g let min in is defined let min in is not",
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "T",
          "package": "non-negative",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "divModStrict",
          "package": "non-negative",
          "signature": "T a -\u003e a -\u003e (T a, a)",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#divModStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "divModStrict",
          "normalized": "T a-\u003ea-\u003e(T a,a)",
          "package": "non-negative",
          "partial": "Mod Strict",
          "signature": "T a-\u003ea-\u003e(T a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:divModStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "fromChunks",
          "package": "non-negative",
          "signature": "[a] -\u003e T a",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#fromChunks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "fromChunks",
          "normalized": "[a]-\u003eT a",
          "package": "non-negative",
          "partial": "Chunks",
          "signature": "[a]-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:fromChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "fromNumber",
          "package": "non-negative",
          "signature": "a -\u003e T a",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#fromNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "fromNumber",
          "normalized": "a-\u003eT a",
          "package": "non-negative",
          "partial": "Number",
          "signature": "a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:fromNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "isNull",
          "package": "non-negative",
          "signature": "T a -\u003e Bool",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#isNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "isNull",
          "normalized": "T a-\u003eBool",
          "package": "non-negative",
          "partial": "Null",
          "signature": "T a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "isPositive",
          "package": "non-negative",
          "signature": "T a -\u003e Bool",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#isPositive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "isPositive",
          "normalized": "T a-\u003eBool",
          "package": "non-negative",
          "partial": "Positive",
          "signature": "T a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:isPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove zero chunks.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Chunky",
          "name": "normalize",
          "package": "non-negative",
          "signature": "T a -\u003e T a",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "Remove zero chunks",
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "normalize",
          "normalized": "T a-\u003eT a",
          "package": "non-negative",
          "signature": "T a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis routine exposes the inner structure of the lazy number.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Chunky",
          "name": "toChunks",
          "package": "non-negative",
          "signature": "T a -\u003e [a]",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#toChunks",
          "type": "function"
        },
        "index": {
          "description": "This routine exposes the inner structure of the lazy number",
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "toChunks",
          "normalized": "T a-\u003e[a]",
          "package": "non-negative",
          "partial": "Chunks",
          "signature": "T a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:toChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "toNumber",
          "package": "non-negative",
          "signature": "T a -\u003e a",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#toNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "toNumber",
          "normalized": "T a-\u003ea",
          "package": "non-negative",
          "partial": "Number",
          "signature": "T a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:toNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Chunky",
          "name": "zero",
          "package": "non-negative",
          "signature": "T a",
          "source": "src/Numeric-NonNegative-ChunkyPrivate.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Chunky",
          "module": "Numeric.NonNegative.Chunky",
          "name": "zero",
          "package": "non-negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Chunky.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class for non-negative numbers.\nProminent instances are \u003ccode\u003eNumeric.NonNegative.Wrapper.T\u003c/code\u003e and peano numbers.\nThis class cannot do any checks,\nbut it let you show to the user what arguments your function expects.\nThus you must define class instances with care.\nIn fact many standard functions (\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, '(!!)', ...)\nshould have this type class constraint.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "Class",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Class.html",
          "type": "module"
        },
        "index": {
          "description": "type class for non-negative numbers Prominent instances are Numeric.NonNegative.Wrapper.T and peano numbers This class cannot do any checks but it let you show to the user what arguments your function expects Thus you must define class instances with care In fact many standard functions take should have this type class constraint",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "Class",
          "package": "non-negative",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of this class must ensure non-negative values.\nWe cannot enforce this by types, but the type class constraint \u003ccode\u003eNonNegative.C\u003c/code\u003e\navoids accidental usage of types which allow for negative numbers.\n\u003c/p\u003e\u003cp\u003eThe Monoid superclass contributes a zero and an addition.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "C",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Class.html#C",
          "type": "class"
        },
        "index": {
          "description": "Instances of this class must ensure non-negative values We cannot enforce this by types but the type class constraint NonNegative.C avoids accidental usage of types which allow for negative numbers The Monoid superclass contributes zero and an addition",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "C",
          "package": "non-negative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex -| y == max 0 (x-y)\u003c/pre\u003e\u003cp\u003eThe default implementation is not efficient,\nbecause it compares the values and then subtracts, again, if safe.\n\u003ccode\u003emax 0 (x-y)\u003c/code\u003e is more elegant and efficient\nbut not possible in the general case,\nsince \u003ccode\u003ex-y\u003c/code\u003e may already yield a negative number.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "(-|)",
          "package": "non-negative",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-NonNegative-Class.html#-%7C",
          "type": "function"
        },
        "index": {
          "description": "max x-y The default implementation is not efficient because it compares the values and then subtracts again if safe max x-y is more elegant and efficient but not possible in the general case since x-y may already yield negative number",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "(-|) -|",
          "normalized": "a-\u003ea-\u003ea",
          "package": "non-negative",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:-45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Class",
          "name": "add",
          "package": "non-negative",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-NonNegative-Class.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "add",
          "normalized": "a-\u003ea-\u003ea",
          "package": "non-negative",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft biased maximum of a list of numbers that can also be empty.\nIt holds\n\u003c/p\u003e\u003cpre\u003e maximum [] == zero\n\u003c/pre\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "maximum",
          "package": "non-negative",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-NonNegative-Class.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "Left biased maximum of list of numbers that can also be empty It holds maximum zero",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "maximum",
          "normalized": "[a]-\u003ea",
          "package": "non-negative",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esplit x y == (m,(b,d))\u003c/code\u003e means that\n   \u003ccode\u003eb == (x\u003c=y)\u003c/code\u003e,\n   \u003ccode\u003em == min x y\u003c/code\u003e,\n   \u003ccode\u003ed == max x y - min x y\u003c/code\u003e, that is \u003ccode\u003ed == abs(x-y)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe have chosen this function as base function,\n   since it provides comparison and subtraction in one go,\n   which is important for replacing common structures like\n\u003c/p\u003e\u003cpre\u003e if x\u003c=y\n   then f(x-y)\n   else g(y-x)\n\u003c/pre\u003e\u003cp\u003ethat lead to a memory leak for peano numbers.\n   We have choosen the simple check \u003ccode\u003ex\u003c=y\u003c/code\u003e\n   instead of a full-blown \u003ccode\u003ecompare\u003c/code\u003e,\n   since we want \u003ccode\u003eZero \u003c= undefined\u003c/code\u003e for peano numbers.\n   Because of undefined values \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e is in general\n   not commutative in the sense\n\u003c/p\u003e\u003cpre\u003e let (m0,(b0,d0)) = split x y\n     (m1,(b1,d1)) = split y x\n in  m0==m1 && d0==d1\n\u003c/pre\u003e\u003cp\u003eThe result values are in the order\n   in which they are generated for Peano numbers.\n   We have chosen the nested pair instead of a triple\n   in order to prevent a memory leak\n   that occurs if you only use \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ed\u003c/code\u003e and ignore \u003ccode\u003em\u003c/code\u003e.\n   This is demonstrated by test cases\n   Chunky.splitSpaceLeak3 and Chunky.splitSpaceLeak4.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "split",
          "package": "non-negative",
          "signature": "a -\u003e a -\u003e (a, (Bool, a))",
          "source": "src/Numeric-NonNegative-Class.html#split",
          "type": "method"
        },
        "index": {
          "description": "split means that min max min that is abs x-y We have chosen this function as base function since it provides comparison and subtraction in one go which is important for replacing common structures like if then x-y else y-x that lead to memory leak for peano numbers We have choosen the simple check instead of full-blown compare since we want Zero undefined for peano numbers Because of undefined values split is in general not commutative in the sense let m0 b0 d0 split m1 b1 d1 split in m0 m1 d0 d1 The result values are in the order in which they are generated for Peano numbers We have chosen the nested pair instead of triple in order to prevent memory leak that occurs if you only use and and ignore This is demonstrated by test cases Chunky.splitSpaceLeak3 and Chunky.splitSpaceLeak4",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "split",
          "normalized": "a-\u003ea-\u003e(a,(Bool,a))",
          "package": "non-negative",
          "signature": "a-\u003ea-\u003e(a,(Bool,a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation for wrapped types of \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "splitDefault",
          "package": "non-negative",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e a -\u003e a -\u003e (a, (Bool, a))",
          "source": "src/Numeric-NonNegative-Class.html#splitDefault",
          "type": "function"
        },
        "index": {
          "description": "Default implementation for wrapped types of Ord and Num class",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "splitDefault",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ea-\u003ea-\u003e(a,(Bool,a))",
          "package": "non-negative",
          "partial": "Default",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003ea-\u003ea-\u003e(a,(Bool,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:splitDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Class",
          "name": "sum",
          "package": "non-negative",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-NonNegative-Class.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "sum",
          "normalized": "[a]-\u003ea",
          "package": "non-negative",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn \u003ccode\u003eswitchDifferenceNegative x y branchXminusY branchYminusX\u003c/code\u003e\nthe function \u003ccode\u003ebranchXminusY\u003c/code\u003e is applied to \u003ccode\u003ex-y\u003c/code\u003e\nif this difference is non-negative,\notherwise \u003ccode\u003ebranchYminusX\u003c/code\u003e is applied to \u003ccode\u003ey-x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "switchDifferenceNegative",
          "package": "non-negative",
          "signature": "a -\u003e a -\u003e (a -\u003e b) -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Numeric-NonNegative-Class.html#switchDifferenceNegative",
          "type": "function"
        },
        "index": {
          "description": "In switchDifferenceNegative branchXminusY branchYminusX the function branchXminusY is applied to x-y if this difference is non-negative otherwise branchYminusX is applied to y-x",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "switchDifferenceNegative",
          "normalized": "a-\u003ea-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eb",
          "package": "non-negative",
          "partial": "Difference Negative",
          "signature": "a-\u003ea-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:switchDifferenceNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn \u003ccode\u003eswitchDifferenceOrdering x y branchZero branchXminusY branchYminusX\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Class",
          "name": "switchDifferenceOrdering",
          "package": "non-negative",
          "signature": "a -\u003e a -\u003e b -\u003e (a -\u003e b) -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Numeric-NonNegative-Class.html#switchDifferenceOrdering",
          "type": "function"
        },
        "index": {
          "description": "In switchDifferenceOrdering branchZero branchXminusY branchYminusX",
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "switchDifferenceOrdering",
          "normalized": "a-\u003ea-\u003eb-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eb",
          "package": "non-negative",
          "partial": "Difference Ordering",
          "signature": "a-\u003ea-\u003eb-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:switchDifferenceOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Class",
          "name": "zero",
          "package": "non-negative",
          "signature": "a",
          "source": "src/Numeric-NonNegative-Class.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Class",
          "module": "Numeric.NonNegative.Class",
          "name": "zero",
          "package": "non-negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Class.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type for non-negative numbers.\nIt performs a run-time check at construction time (i.e. at run-time)\nand is a member of the non-negative number type class\n\u003ccode\u003eNumeric.NonNegative.Class.C\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Wrapper",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html",
          "type": "module"
        },
        "index": {
          "description": "type for non-negative numbers It performs run-time check at construction time i.e at run-time and is member of the non-negative number type class Numeric.NonNegative.Class.C",
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Wrapper",
          "package": "non-negative",
          "partial": "Wrapper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Double",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#Double",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Double",
          "package": "non-negative",
          "partial": "Double",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Float",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#Float",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Float",
          "package": "non-negative",
          "partial": "Float",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Int",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#Int",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Int",
          "package": "non-negative",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Integer",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#Integer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Integer",
          "package": "non-negative",
          "partial": "Integer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Ratio",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#Ratio",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Ratio",
          "package": "non-negative",
          "partial": "Ratio",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:Ratio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Rational",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#Rational",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "Rational",
          "package": "non-negative",
          "partial": "Rational",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "T",
          "package": "non-negative",
          "source": "src/Numeric-NonNegative-Wrapper.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "T",
          "package": "non-negative",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a number to a non-negative number.\nIf a negative number is given, an error is raised.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumber",
          "package": "non-negative",
          "signature": "a -\u003e T a",
          "source": "src/Numeric-NonNegative-Wrapper.html#fromNumber",
          "type": "function"
        },
        "index": {
          "description": "Convert number to non-negative number If negative number is given an error is raised",
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumber",
          "normalized": "a-\u003eT a",
          "package": "non-negative",
          "partial": "Number",
          "signature": "a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#v:fromNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a number to a non-negative number.\nA negative number will be replaced by zero.\nUse this function with care since it may hide bugs.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumberClip",
          "package": "non-negative",
          "signature": "a -\u003e T a",
          "source": "src/Numeric-NonNegative-Wrapper.html#fromNumberClip",
          "type": "function"
        },
        "index": {
          "description": "Convert number to non-negative number negative number will be replaced by zero Use this function with care since it may hide bugs",
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumberClip",
          "normalized": "a-\u003eT a",
          "package": "non-negative",
          "partial": "Number Clip",
          "signature": "a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#v:fromNumberClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumberMsg",
          "package": "non-negative",
          "signature": "String-\u003e a-\u003e T a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumberMsg",
          "normalized": "String-\u003ea-\u003eT a",
          "package": "non-negative",
          "partial": "Number Msg",
          "signature": "String-\u003ea-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#v:fromNumberMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a number into a non-negative number without doing checks.\nThis routine exists entirely for efficiency reasons\nand must be used only in cases where you are absolutely sure,\nthat the input number is non-negative.\n\u003c/p\u003e",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumberUnsafe",
          "package": "non-negative",
          "signature": "a -\u003e T a",
          "source": "src/Numeric-NonNegative-Wrapper.html#fromNumberUnsafe",
          "type": "function"
        },
        "index": {
          "description": "Wrap number into non-negative number without doing checks This routine exists entirely for efficiency reasons and must be used only in cases where you are absolutely sure that the input number is non-negative",
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "fromNumberUnsafe",
          "normalized": "a-\u003eT a",
          "package": "non-negative",
          "partial": "Number Unsafe",
          "signature": "a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#v:fromNumberUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.NonNegative.Wrapper",
          "name": "toNumber",
          "package": "non-negative",
          "signature": "T a -\u003e a",
          "source": "src/Numeric-NonNegative-Wrapper.html#toNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric NonNegative Wrapper",
          "module": "Numeric.NonNegative.Wrapper",
          "name": "toNumber",
          "normalized": "T a-\u003ea",
          "package": "non-negative",
          "partial": "Number",
          "signature": "T a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/non-negative/docs/Numeric-NonNegative-Wrapper.html#v:toNumber"
      }
    }
  ]
]