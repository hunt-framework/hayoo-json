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
        "word": "crypto-numbers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Basic",
          "name": "Basic",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Basic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Number Basic",
          "module": "Crypto.Number.Basic",
          "name": "Basic",
          "package": "crypto-numbers",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck if a list of integer are all even\n\u003c/p\u003e",
          "module": "Crypto.Number.Basic",
          "name": "areEven",
          "package": "crypto-numbers",
          "signature": "[Integer] -\u003e Bool",
          "source": "src/Crypto-Number-Basic.html#areEven",
          "type": "function"
        },
        "index": {
          "description": "check if list of integer are all even",
          "hierarchy": "Crypto Number Basic",
          "module": "Crypto.Number.Basic",
          "name": "areEven",
          "normalized": "[Integer]-\u003eBool",
          "package": "crypto-numbers",
          "partial": "Even",
          "signature": "[Integer]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Basic.html#v:areEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the extended GCD of two integer using integer divMod\n\u003c/p\u003e\u003cp\u003egcde \u003ccode\u003ea\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e find (x,y,gcd(a,b)) where ax + by = d\n\u003c/p\u003e",
          "module": "Crypto.Number.Basic",
          "name": "gcde",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e (Integer, Integer, Integer)",
          "source": "src/Crypto-Number-Basic.html#gcde",
          "type": "function"
        },
        "index": {
          "description": "get the extended GCD of two integer using integer divMod gcde find gcd where ax by",
          "hierarchy": "Crypto Number Basic",
          "module": "Crypto.Number.Basic",
          "name": "gcde",
          "normalized": "Integer-\u003eInteger-\u003e(Integer,Integer,Integer)",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003e(Integer,Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Basic.html#v:gcde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the extended GCD of two integer using the extended binary algorithm (HAC 14.61)\n get (x,y,d) where d = gcd(a,b) and x,y satisfying ax + by = d\n\u003c/p\u003e",
          "module": "Crypto.Number.Basic",
          "name": "gcde_binary",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e (Integer, Integer, Integer)",
          "source": "src/Crypto-Number-Basic.html#gcde_binary",
          "type": "function"
        },
        "index": {
          "description": "get the extended GCD of two integer using the extended binary algorithm HAC get where gcd and satisfying ax by",
          "hierarchy": "Crypto Number Basic",
          "module": "Crypto.Number.Basic",
          "name": "gcde_binary",
          "normalized": "Integer-\u003eInteger-\u003e(Integer,Integer,Integer)",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003e(Integer,Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Basic.html#v:gcde_binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esqrti returns two integer (l,b) so that l \u003c= sqrt i \u003c= b\n the implementation is quite naive, use an approximation for the first number\n and use a dichotomy algorithm to compute the bound relatively efficiently.\n\u003c/p\u003e",
          "module": "Crypto.Number.Basic",
          "name": "sqrti",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e (Integer, Integer)",
          "source": "src/Crypto-Number-Basic.html#sqrti",
          "type": "function"
        },
        "index": {
          "description": "sqrti returns two integer so that sqrt the implementation is quite naive use an approximation for the first number and use dichotomy algorithm to compute the bound relatively efficiently",
          "hierarchy": "Crypto Number Basic",
          "module": "Crypto.Number.Basic",
          "name": "sqrti",
          "normalized": "Integer-\u003e(Integer,Integer)",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Basic.html#v:sqrti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides basic arithmetic operations over F&#8322;m. Performance is not optimal and it doesn't provide protection against timing\n attacks. The \u003ccode\u003em\u003c/code\u003e parameter is implicitly derived from the irreducible\n polynomial where applicable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Number.F2m",
          "name": "F2m",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-F2m.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides basic arithmetic operations over Performance is not optimal and it doesn provide protection against timing attacks The parameter is implicitly derived from the irreducible polynomial where applicable",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "F2m",
          "package": "crypto-numbers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition over F&#8322;m. This is just a synonym of \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Number.F2m",
          "name": "addF2m",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Number-F2m.html#addF2m",
          "type": "function"
        },
        "index": {
          "description": "Addition over This is just synonym of xor",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "addF2m",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#v:addF2m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision over F&#8322;m. If the dividend does't have an inverse it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Number.F2m",
          "name": "divF2m",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e Maybe Integer",
          "type": "function"
        },
        "index": {
          "description": "Division over If the dividend does have an inverse it returns Nothing",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "divF2m",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eMaybe Integer",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#v:divF2m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInversion over  F&#8322;m using extended Euclidean algorithm.\u003c/p\u003e",
          "module": "Crypto.Number.F2m",
          "name": "invF2m",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Maybe Integer",
          "type": "function"
        },
        "index": {
          "description": "Inversion over using extended Euclidean algorithm",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "invF2m",
          "normalized": "Integer-\u003eInteger-\u003eMaybe Integer",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#v:invF2m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary polynomial reduction modulo using long division algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Number.F2m",
          "name": "modF2m",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Binary polynomial reduction modulo using long division algorithm",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "modF2m",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#v:modF2m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication over F&#8322;m.\u003c/p\u003e",
          "module": "Crypto.Number.F2m",
          "name": "mulF2m",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Multiplication over",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "mulF2m",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#v:mulF2m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSquaring over F&#8322;m. TODO: This is still slower than \u003ccode\u003emulF2m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Number.F2m",
          "name": "squareF2m",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Squaring over TODO This is still slower than mulF2m",
          "hierarchy": "Crypto Number F2m",
          "module": "Crypto.Number.F2m",
          "name": "squareF2m",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-F2m.html#v:squareF2m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Generate",
          "name": "Generate",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Generate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Number Generate",
          "module": "Crypto.Number.Generate",
          "name": "Generate",
          "package": "crypto-numbers",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a number between the inclusive bound [low,high].\n\u003c/p\u003e",
          "module": "Crypto.Number.Generate",
          "name": "generateBetween",
          "package": "crypto-numbers",
          "signature": "g -\u003e Integer -\u003e Integer -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Generate.html#generateBetween",
          "type": "function"
        },
        "index": {
          "description": "generate number between the inclusive bound low high",
          "hierarchy": "Crypto Number Generate",
          "module": "Crypto.Number.Generate",
          "name": "generateBetween",
          "normalized": "a-\u003eInteger-\u003eInteger-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Between",
          "signature": "g-\u003eInteger-\u003eInteger-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Generate.html#v:generateBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a positive integer x, s.t. 0 \u003c= x \u003c m\n\u003c/p\u003e\u003cp\u003eNote that depending on m value, the number distribution\n generated by this function is not necessarily uniform.\n\u003c/p\u003e",
          "module": "Crypto.Number.Generate",
          "name": "generateMax",
          "package": "crypto-numbers",
          "signature": "g -\u003e Integer -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Generate.html#generateMax",
          "type": "function"
        },
        "index": {
          "description": "generate positive integer s.t Note that depending on value the number distribution generated by this function is not necessarily uniform",
          "hierarchy": "Crypto Number Generate",
          "module": "Crypto.Number.Generate",
          "name": "generateMax",
          "normalized": "a-\u003eInteger-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Max",
          "signature": "g-\u003eInteger-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Generate.html#v:generateMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a positive integer of a specific size in bits.\n the number of bits need to be multiple of 8. It will always returns\n an integer that is close to 2^(1+bits/8) by setting the 2 highest bits to 1.\n\u003c/p\u003e",
          "module": "Crypto.Number.Generate",
          "name": "generateOfSize",
          "package": "crypto-numbers",
          "signature": "g -\u003e Int -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Generate.html#generateOfSize",
          "type": "function"
        },
        "index": {
          "description": "generate positive integer of specific size in bits the number of bits need to be multiple of It will always returns an integer that is close to bits by setting the highest bits to",
          "hierarchy": "Crypto Number Generate",
          "module": "Crypto.Number.Generate",
          "name": "generateOfSize",
          "normalized": "a-\u003eInt-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Of Size",
          "signature": "g-\u003eInt-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Generate.html#v:generateOfSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.ModArithmetic",
          "name": "ModArithmetic",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-ModArithmetic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "ModArithmetic",
          "package": "crypto-numbers",
          "partial": "Mod Arithmetic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the modular exponentiation of base^exponant using\n the fastest algorithm without any consideration for\n hiding parameters.\n\u003c/p\u003e\u003cp\u003eUse this function when all the parameters are public,\n otherwise \u003ccode\u003e\u003ca\u003eexpSafe\u003c/a\u003e\u003c/code\u003e should be prefered.\n\u003c/p\u003e",
          "module": "Crypto.Number.ModArithmetic",
          "name": "expFast",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Compute the modular exponentiation of base exponant using the fastest algorithm without any consideration for hiding parameters Use this function when all the parameters are public otherwise expSafe should be prefered",
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "expFast",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "partial": "Fast",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:expFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the modular exponentiation of base^exponant using\n algorithms design to avoid side channels and timing measurement\n\u003c/p\u003e\u003cp\u003eModulo need to be odd otherwise the normal fast modular exponentiation\n is used.\n\u003c/p\u003e\u003cp\u003eWhen used with integer-simple, this function is not different\n from expFast, and thus provide the same unstudied and dubious\n timing and side channels claims.\n\u003c/p\u003e",
          "module": "Crypto.Number.ModArithmetic",
          "name": "expSafe",
          "package": "crypto-numbers",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Compute the modular exponentiation of base exponant using algorithms design to avoid side channels and timing measurement Modulo need to be odd otherwise the normal fast modular exponentiation is used When used with integer-simple this function is not different from expFast and thus provide the same unstudied and dubious timing and side channels claims",
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "expSafe",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "partial": "Safe",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:expSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponantiation",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Number-ModArithmetic.html#exponantiation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponantiation",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:exponantiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponantiation_rtl_binary",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Number-ModArithmetic.html#exponantiation_rtl_binary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponantiation_rtl_binary",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:exponantiation_rtl_binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexponentiation computes modular exponentiation as b^e mod m\n using repetitive squaring.\n\u003c/p\u003e",
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponentiation",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Number-ModArithmetic.html#exponentiation",
          "type": "function"
        },
        "index": {
          "description": "exponentiation computes modular exponentiation as mod using repetitive squaring",
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponentiation",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:exponentiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexponentiation_rtl_binary computes modular exponentiation as b^e mod m\n using the right-to-left binary exponentiation algorithm (HAC 14.79)\n\u003c/p\u003e",
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponentiation_rtl_binary",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Number-ModArithmetic.html#exponentiation_rtl_binary",
          "type": "function"
        },
        "index": {
          "description": "exponentiation rtl binary computes modular exponentiation as mod using the right-to-left binary exponentiation algorithm HAC",
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "exponentiation_rtl_binary",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:exponentiation_rtl_binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einverse computes the modular inverse as in g^(-1) mod m\n\u003c/p\u003e",
          "module": "Crypto.Number.ModArithmetic",
          "name": "inverse",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Maybe Integer",
          "source": "src/Crypto-Number-ModArithmetic.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "inverse computes the modular inverse as in mod",
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "inverse",
          "normalized": "Integer-\u003eInteger-\u003eMaybe Integer",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eInteger-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the modular inverse of 2 coprime numbers.\n This is equivalent to inverse except that the result\n is known to exists.\n\u003c/p\u003e\u003cp\u003eif the numbers are not defined as coprime, this function\n will raise a CoprimesAssertionError.\n\u003c/p\u003e",
          "module": "Crypto.Number.ModArithmetic",
          "name": "inverseCoprimes",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Crypto-Number-ModArithmetic.html#inverseCoprimes",
          "type": "function"
        },
        "index": {
          "description": "Compute the modular inverse of coprime numbers This is equivalent to inverse except that the result is known to exists if the numbers are not defined as coprime this function will raise CoprimesAssertionError",
          "hierarchy": "Crypto Number ModArithmetic",
          "module": "Crypto.Number.ModArithmetic",
          "name": "inverseCoprimes",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "crypto-numbers",
          "partial": "Coprimes",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-ModArithmetic.html#v:inverseCoprimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "Polynomial",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Polynomial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "Polynomial",
          "package": "crypto-numbers",
          "partial": "Polynomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "Monomial",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Polynomial.html#Monomial",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "Monomial",
          "package": "crypto-numbers",
          "partial": "Monomial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#t:Monomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "Polynomial",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Polynomial.html#Polynomial",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "Polynomial",
          "package": "crypto-numbers",
          "partial": "Polynomial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#t:Polynomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "Monomial",
          "package": "crypto-numbers",
          "signature": "Monomial !Int !Integer",
          "source": "src/Crypto-Number-Polynomial.html#Monomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "Monomial",
          "package": "crypto-numbers",
          "partial": "Monomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:Monomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "addPoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Polynomial -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#addPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "addPoly",
          "normalized": "Polynomial-\u003ePolynomial-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003ePolynomial-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:addPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "divPoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Polynomial -\u003e (Polynomial, Polynomial)",
          "source": "src/Crypto-Number-Polynomial.html#divPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "divPoly",
          "normalized": "Polynomial-\u003ePolynomial-\u003e(Polynomial,Polynomial)",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003ePolynomial-\u003e(Polynomial,Polynomial)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:divPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "expPoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Integer -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#expPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "expPoly",
          "normalized": "Polynomial-\u003eInteger-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003eInteger-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:expPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "fromList",
          "package": "crypto-numbers",
          "signature": "[Monomial] -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "fromList",
          "normalized": "[Monomial]-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "List",
          "signature": "[Monomial]-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "mulPoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Polynomial -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#mulPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "mulPoly",
          "normalized": "Polynomial-\u003ePolynomial-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003ePolynomial-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:mulPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "negPoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#negPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "negPoly",
          "normalized": "Polynomial-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:negPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "squarePoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#squarePoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "squarePoly",
          "normalized": "Polynomial-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:squarePoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "subPoly",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e Polynomial -\u003e Polynomial",
          "source": "src/Crypto-Number-Polynomial.html#subPoly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "subPoly",
          "normalized": "Polynomial-\u003ePolynomial-\u003ePolynomial",
          "package": "crypto-numbers",
          "partial": "Poly",
          "signature": "Polynomial-\u003ePolynomial-\u003ePolynomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:subPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Polynomial",
          "name": "toList",
          "package": "crypto-numbers",
          "signature": "Polynomial -\u003e [Monomial]",
          "source": "src/Crypto-Number-Polynomial.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Number Polynomial",
          "module": "Crypto.Number.Polynomial",
          "name": "toList",
          "normalized": "Polynomial-\u003e[Monomial]",
          "package": "crypto-numbers",
          "partial": "List",
          "signature": "Polynomial-\u003e[Monomial]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Polynomial.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Number.Prime",
          "name": "Prime",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Prime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "Prime",
          "package": "crypto-numbers",
          "partial": "Prime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind a prime from a starting point with no specific property.\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "findPrimeFrom",
          "package": "crypto-numbers",
          "signature": "g -\u003e Integer -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Prime.html#findPrimeFrom",
          "type": "function"
        },
        "index": {
          "description": "find prime from starting point with no specific property",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "findPrimeFrom",
          "normalized": "a-\u003eInteger-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Prime From",
          "signature": "g-\u003eInteger-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:findPrimeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind a prime from a starting point where the property hold.\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "findPrimeFromWith",
          "package": "crypto-numbers",
          "signature": "g -\u003e (g -\u003e Integer -\u003e (Bool, g)) -\u003e Integer -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Prime.html#findPrimeFromWith",
          "type": "function"
        },
        "index": {
          "description": "find prime from starting point where the property hold",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "findPrimeFromWith",
          "normalized": "a-\u003e(a-\u003eInteger-\u003e(Bool,a))-\u003eInteger-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Prime From With",
          "signature": "g-\u003e(g-\u003eInteger-\u003e(Bool,g))-\u003eInteger-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:findPrimeFromWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a prime number of the required bitsize\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "generatePrime",
          "package": "crypto-numbers",
          "signature": "g -\u003e Int -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Prime.html#generatePrime",
          "type": "function"
        },
        "index": {
          "description": "generate prime number of the required bitsize",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "generatePrime",
          "normalized": "a-\u003eInt-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Prime",
          "signature": "g-\u003eInt-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:generatePrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a prime number of the form 2p+1 where p is also prime.\n it is also knowed as a Sophie Germaine prime or safe prime.\n\u003c/p\u003e\u003cp\u003eThe number of safe prime is significantly smaller to the number of prime,\n as such it shouldn't be used if this number is supposed to be kept safe.\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "generateSafePrime",
          "package": "crypto-numbers",
          "signature": "g -\u003e Int -\u003e (Integer, g)",
          "source": "src/Crypto-Number-Prime.html#generateSafePrime",
          "type": "function"
        },
        "index": {
          "description": "generate prime number of the form where is also prime it is also knowed as Sophie Germaine prime or safe prime The number of safe prime is significantly smaller to the number of prime as such it shouldn be used if this number is supposed to be kept safe",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "generateSafePrime",
          "normalized": "a-\u003eInt-\u003e(Integer,a)",
          "package": "crypto-numbers",
          "partial": "Safe Prime",
          "signature": "g-\u003eInt-\u003e(Integer,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:generateSafePrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest is two integer are coprime to each other\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "isCoprime",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Crypto-Number-Prime.html#isCoprime",
          "type": "function"
        },
        "index": {
          "description": "Test is two integer are coprime to each other",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "isCoprime",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "crypto-numbers",
          "partial": "Coprime",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:isCoprime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns if the number is probably prime.\n first a list of small primes are implicitely tested for divisibility,\n then a fermat primality test is used with arbitrary numbers and\n then the Miller Rabin algorithm is used with an accuracy of 30 recursions\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "isProbablyPrime",
          "package": "crypto-numbers",
          "signature": "g -\u003e Integer -\u003e (Bool, g)",
          "source": "src/Crypto-Number-Prime.html#isProbablyPrime",
          "type": "function"
        },
        "index": {
          "description": "returns if the number is probably prime first list of small primes are implicitely tested for divisibility then fermat primality test is used with arbitrary numbers and then the Miller Rabin algorithm is used with an accuracy of recursions",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "isProbablyPrime",
          "normalized": "a-\u003eInteger-\u003e(Bool,a)",
          "package": "crypto-numbers",
          "partial": "Probably Prime",
          "signature": "g-\u003eInteger-\u003e(Bool,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:isProbablyPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbabilitic Test using Fermat primility test.\n Beware of Carmichael numbers that are Fermat liars, i.e. this test\n is useless for them. always combines with some other test.\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "primalityTestFermat",
          "package": "crypto-numbers",
          "signature": "Int-\u003e Integer-\u003e Integer-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Probabilitic Test using Fermat primility test Beware of Carmichael numbers that are Fermat liars i.e this test is useless for them always combines with some other test",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "primalityTestFermat",
          "normalized": "Int-\u003eInteger-\u003eInteger-\u003eBool",
          "package": "crypto-numbers",
          "partial": "Test Fermat",
          "signature": "Int-\u003eInteger-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:primalityTestFermat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMiller Rabin algorithm return if the number is probably prime or composite.\n the tries parameter is the number of recursion, that determines the accuracy of the test.\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "primalityTestMillerRabin",
          "package": "crypto-numbers",
          "signature": "g -\u003e Int -\u003e Integer -\u003e (Bool, g)",
          "source": "src/Crypto-Number-Prime.html#primalityTestMillerRabin",
          "type": "function"
        },
        "index": {
          "description": "Miller Rabin algorithm return if the number is probably prime or composite the tries parameter is the number of recursion that determines the accuracy of the test",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "primalityTestMillerRabin",
          "normalized": "a-\u003eInt-\u003eInteger-\u003e(Bool,a)",
          "package": "crypto-numbers",
          "partial": "Test Miller Rabin",
          "signature": "g-\u003eInt-\u003eInteger-\u003e(Bool,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:primalityTestMillerRabin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest naively is integer is prime.\n while naive, we skip even number and stop iteration at i \u003e sqrt(n)\n\u003c/p\u003e",
          "module": "Crypto.Number.Prime",
          "name": "primalityTestNaive",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Bool",
          "source": "src/Crypto-Number-Prime.html#primalityTestNaive",
          "type": "function"
        },
        "index": {
          "description": "Test naively is integer is prime while naive we skip even number and stop iteration at sqrt",
          "hierarchy": "Crypto Number Prime",
          "module": "Crypto.Number.Prime",
          "name": "primalityTestNaive",
          "normalized": "Integer-\u003eBool",
          "package": "crypto-numbers",
          "partial": "Test Naive",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Prime.html#v:primalityTestNaive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003efast serialization primitives for integer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Number.Serialize",
          "name": "Serialize",
          "package": "crypto-numbers",
          "source": "src/Crypto-Number-Serialize.html",
          "type": "module"
        },
        "index": {
          "description": "fast serialization primitives for integer",
          "hierarchy": "Crypto Number Serialize",
          "module": "Crypto.Number.Serialize",
          "name": "Serialize",
          "package": "crypto-numbers",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Serialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ei2osp converts a positive integer into a byte string\n\u003c/p\u003e",
          "module": "Crypto.Number.Serialize",
          "name": "i2osp",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e ByteString",
          "source": "src/Crypto-Number-Serialize.html#i2osp",
          "type": "function"
        },
        "index": {
          "description": "i2osp converts positive integer into byte string",
          "hierarchy": "Crypto Number Serialize",
          "module": "Crypto.Number.Serialize",
          "name": "i2osp",
          "normalized": "Integer-\u003eByteString",
          "package": "crypto-numbers",
          "signature": "Integer-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Serialize.html#v:i2osp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust like i2osp, but take an extra parameter for size.\n if the number is too big to fit in \u003ccode\u003elen bytes, nothing is returned\n otherwise the number is padded with 0 to fit the \u003c/code\u003elen required.\n\u003c/p\u003e\u003cp\u003eFIXME: use unsafeCreate to fill the bytestring\n\u003c/p\u003e",
          "module": "Crypto.Number.Serialize",
          "name": "i2ospOf",
          "package": "crypto-numbers",
          "signature": "Int -\u003e Integer -\u003e Maybe ByteString",
          "source": "src/Crypto-Number-Serialize.html#i2ospOf",
          "type": "function"
        },
        "index": {
          "description": "just like i2osp but take an extra parameter for size if the number is too big to fit in len bytes nothing is returned otherwise the number is padded with to fit the len required FIXME use unsafeCreate to fill the bytestring",
          "hierarchy": "Crypto Number Serialize",
          "module": "Crypto.Number.Serialize",
          "name": "i2ospOf",
          "normalized": "Int-\u003eInteger-\u003eMaybe ByteString",
          "package": "crypto-numbers",
          "partial": "Of",
          "signature": "Int-\u003eInteger-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Serialize.html#v:i2ospOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust like i2ospOf except that it doesn't expect a failure: i.e.\n an integer larger than the number of output bytes requested\n\u003c/p\u003e\u003cp\u003efor example if you just took a modulo of the number that represent\n the size (example the RSA modulo n).\n\u003c/p\u003e",
          "module": "Crypto.Number.Serialize",
          "name": "i2ospOf_",
          "package": "crypto-numbers",
          "signature": "Int -\u003e Integer -\u003e ByteString",
          "source": "src/Crypto-Number-Serialize.html#i2ospOf_",
          "type": "function"
        },
        "index": {
          "description": "just like i2ospOf except that it doesn expect failure i.e an integer larger than the number of output bytes requested for example if you just took modulo of the number that represent the size example the RSA modulo",
          "hierarchy": "Crypto Number Serialize",
          "module": "Crypto.Number.Serialize",
          "name": "i2ospOf_",
          "normalized": "Int-\u003eInteger-\u003eByteString",
          "package": "crypto-numbers",
          "partial": "Of",
          "signature": "Int-\u003eInteger-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Serialize.html#v:i2ospOf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the number of bytes to store an integer with i2osp\n\u003c/p\u003e\u003cp\u003ewith integer-simple, this function is really slow.\n\u003c/p\u003e",
          "module": "Crypto.Number.Serialize",
          "name": "lengthBytes",
          "package": "crypto-numbers",
          "signature": "Integer -\u003e Int",
          "source": "src/Crypto-Number-Serialize.html#lengthBytes",
          "type": "function"
        },
        "index": {
          "description": "returns the number of bytes to store an integer with i2osp with integer-simple this function is really slow",
          "hierarchy": "Crypto Number Serialize",
          "module": "Crypto.Number.Serialize",
          "name": "lengthBytes",
          "normalized": "Integer-\u003eInt",
          "package": "crypto-numbers",
          "partial": "Bytes",
          "signature": "Integer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Serialize.html#v:lengthBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eos2ip converts a byte string into a positive integer\n\u003c/p\u003e",
          "module": "Crypto.Number.Serialize",
          "name": "os2ip",
          "package": "crypto-numbers",
          "signature": "ByteString -\u003e Integer",
          "source": "src/Crypto-Number-Serialize.html#os2ip",
          "type": "function"
        },
        "index": {
          "description": "os2ip converts byte string into positive integer",
          "hierarchy": "Crypto Number Serialize",
          "module": "Crypto.Number.Serialize",
          "name": "os2ip",
          "normalized": "ByteString-\u003eInteger",
          "package": "crypto-numbers",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-numbers/docs/Crypto-Number-Serialize.html#v:os2ip"
      }
    }
  ]
]