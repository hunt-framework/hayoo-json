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
        "word": "ieee754"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class for approximate and exact equalilty comparisons and instances\n for common data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AEq",
          "name": "AEq",
          "package": "ieee754",
          "source": "src/Data-AEq.html",
          "type": "module"
        },
        "index": {
          "description": "type class for approximate and exact equalilty comparisons and instances for common data types",
          "hierarchy": "Data AEq",
          "module": "Data.AEq",
          "name": "AEq",
          "package": "ieee754",
          "partial": "AEq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Data-AEq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with approximate and exact equality comparisons.\n\u003c/p\u003e",
          "module": "Data.AEq",
          "name": "AEq",
          "package": "ieee754",
          "source": "src/Data-AEq.html#AEq",
          "type": "class"
        },
        "index": {
          "description": "Types with approximate and exact equality comparisons",
          "hierarchy": "Data AEq",
          "module": "Data.AEq",
          "name": "AEq",
          "package": "ieee754",
          "partial": "AEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Data-AEq.html#t:AEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn approximate equality comparison operator.\n\u003c/p\u003e\u003cp\u003eFor real \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are approximately equal in the\n following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e at least half of their significand bits agree;\n\u003c/li\u003e\u003cli\u003e both values are less than \u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor complex \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are approximately equal in the\n followiing cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e their magnitudes are approximately equal and the angle between\n     them is less than \u003ccode\u003e32*\u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both magnitudes are less than \u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both have a \u003ccode\u003eNaN\u003c/code\u003e real or imaginary part.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAdmitedly, the \u003ccode\u003e32\u003c/code\u003e is a bit of a hack.  Future versions of the\n library may switch to a more principled test of the angle.\n\u003c/p\u003e",
          "module": "Data.AEq",
          "name": "(~==)",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-AEq.html#~%3D%3D",
          "type": "method"
        },
        "index": {
          "description": "An approximate equality comparison operator For real IEEE types two values are approximately equal in the following cases at least half of their significand bits agree both values are less than epsilon both values are NaN For complex IEEE types two values are approximately equal in the followiing cases their magnitudes are approximately equal and the angle between them is less than epsilon both magnitudes are less than epsilon both have NaN real or imaginary part Admitedly the is bit of hack Future versions of the library may switch to more principled test of the angle",
          "hierarchy": "Data AEq",
          "module": "Data.AEq",
          "name": "(~==) ~==",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ieee754",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Data-AEq.html#v:-126--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exact equality comparison.\n\u003c/p\u003e\u003cp\u003eFor real \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are equivalent in the\n following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e both values are \u003ccode\u003e+0\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both values are \u003ccode\u003e-0\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both values are nonzero and equal to each other\n     (according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e);\n\u003c/li\u003e\u003cli\u003e both values are \u003ccode\u003eNaN\u003c/code\u003e with the same payload and sign.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor complex \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are equivalent if their\n real and imaginary parts are equivalent.\n\u003c/p\u003e",
          "module": "Data.AEq",
          "name": "(===)",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-AEq.html#%3D%3D%3D",
          "type": "method"
        },
        "index": {
          "description": "An exact equality comparison For real IEEE types two values are equivalent in the following cases both values are both values are both values are nonzero and equal to each other according to both values are NaN with the same payload and sign For complex IEEE types two values are equivalent if their real and imaginary parts are equivalent",
          "hierarchy": "Data AEq",
          "module": "Data.AEq",
          "name": "(===) ===",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ieee754",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Data-AEq.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on IEEE floating point numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.IEEE",
          "name": "IEEE",
          "package": "ieee754",
          "source": "src/Numeric-IEEE.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on IEEE floating point numbers",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "IEEE",
          "package": "ieee754",
          "partial": "IEEE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIEEE floating point types.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "IEEE",
          "package": "ieee754",
          "source": "src/Numeric-IEEE.html#IEEE",
          "type": "class"
        },
        "index": {
          "description": "IEEE floating point types",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "IEEE",
          "package": "ieee754",
          "partial": "IEEE",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#t:IEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two values with the same sign, return the value halfway\n between them on the IEEE number line.  If the signs of the values\n differ or either is \u003ccode\u003eNaN\u003c/code\u003e, the value is undefined.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "bisectIEEE",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-IEEE.html#bisectIEEE",
          "type": "method"
        },
        "index": {
          "description": "Given two values with the same sign return the value halfway between them on the IEEE number line If the signs of the values differ or either is NaN the value is undefined",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "bisectIEEE",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ieee754",
          "partial": "IEEE",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:bisectIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopySign x y\u003c/code\u003e returns \u003ccode\u003ex\u003c/code\u003e with its sign changed to \u003ccode\u003ey\u003c/code\u003e's.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "copySign",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-IEEE.html#copySign",
          "type": "method"
        },
        "index": {
          "description": "copySign returns with its sign changed to",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "copySign",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ieee754",
          "partial": "Sign",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:copySign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe smallest representalbe positive value \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003e1 + x /= 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "epsilon",
          "package": "ieee754",
          "signature": "a",
          "source": "src/Numeric-IEEE.html#epsilon",
          "type": "method"
        },
        "index": {
          "description": "The smallest representalbe positive value such that",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "epsilon",
          "package": "ieee754",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if two values are \u003cem\u003eexactly\u003c/em\u003e (bitwise) equal.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "identicalIEEE",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-IEEE.html#identicalIEEE",
          "type": "method"
        },
        "index": {
          "description": "Return True if two values are exactly bitwise equal",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "identicalIEEE",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ieee754",
          "partial": "IEEE",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:identicalIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinity value.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "infinity",
          "package": "ieee754",
          "signature": "a",
          "source": "src/Numeric-IEEE.html#infinity",
          "type": "method"
        },
        "index": {
          "description": "Infinity value",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "infinity",
          "package": "ieee754",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe largest representable finite value.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "maxFinite",
          "package": "ieee754",
          "signature": "a",
          "source": "src/Numeric-IEEE.html#maxFinite",
          "type": "method"
        },
        "index": {
          "description": "The largest representable finite value",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "maxFinite",
          "package": "ieee754",
          "partial": "Finite",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:maxFinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return it.\n Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "maxNaN",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-IEEE.html#maxNaN",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum of two values if one value is NaN return it Prefer the first if both values are NaN",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "maxNaN",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ieee754",
          "partial": "Na",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:maxNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum \u003ccode\u003eNaN\u003c/code\u003e payload for type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "maxNaNPayload",
          "package": "ieee754",
          "signature": "a -\u003e Word64",
          "source": "src/Numeric-IEEE.html#maxNaNPayload",
          "type": "method"
        },
        "index": {
          "description": "Maximum NaN payload for type",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "maxNaNPayload",
          "normalized": "a-\u003eWord",
          "package": "ieee754",
          "partial": "Na NPayload",
          "signature": "a-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:maxNaNPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return the\n other.  Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "maxNum",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-IEEE.html#maxNum",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum of two values if one value is NaN return the other Prefer the first if both values are NaN",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "maxNum",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ieee754",
          "partial": "Num",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:maxNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return it.\n Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "minNaN",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-IEEE.html#minNaN",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum of two values if one value is NaN return it Prefer the first if both values are NaN",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "minNaN",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ieee754",
          "partial": "Na",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:minNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe smallest representable positive normalized value.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "minNormal",
          "package": "ieee754",
          "signature": "a",
          "source": "src/Numeric-IEEE.html#minNormal",
          "type": "method"
        },
        "index": {
          "description": "The smallest representable positive normalized value",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "minNormal",
          "package": "ieee754",
          "partial": "Normal",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:minNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return the\n other.  Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "minNum",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-IEEE.html#minNum",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum of two values if one value is NaN return the other Prefer the first if both values are NaN",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "minNum",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ieee754",
          "partial": "Num",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:minNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003eNaN\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "nan",
          "package": "ieee754",
          "signature": "a",
          "source": "src/Numeric-IEEE.html#nan",
          "type": "method"
        },
        "index": {
          "description": "Default NaN value",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "nan",
          "package": "ieee754",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:nan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe payload stored in a \u003ccode\u003eNaN\u003c/code\u003e value.  Undefined if the argument\n is not \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "nanPayload",
          "package": "ieee754",
          "signature": "a -\u003e Word64",
          "source": "src/Numeric-IEEE.html#nanPayload",
          "type": "method"
        },
        "index": {
          "description": "The payload stored in NaN value Undefined if the argument is not NaN",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "nanPayload",
          "normalized": "a-\u003eWord",
          "package": "ieee754",
          "partial": "Payload",
          "signature": "a-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:nanPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuiet \u003ccode\u003eNaN\u003c/code\u003e value with a positive integer payload.  Payload must be\n less than \u003ccode\u003e\u003ca\u003emaxNaNPayload\u003c/a\u003e\u003c/code\u003e.  Beware that while some platforms allow\n using \u003ccode\u003e0\u003c/code\u003e as a payload, this behavior is not portable.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "nanWithPayload",
          "package": "ieee754",
          "signature": "Word64 -\u003e a",
          "source": "src/Numeric-IEEE.html#nanWithPayload",
          "type": "method"
        },
        "index": {
          "description": "Quiet NaN value with positive integer payload Payload must be less than maxNaNPayload Beware that while some platforms allow using as payload this behavior is not portable",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "nanWithPayload",
          "normalized": "Word-\u003ea",
          "package": "ieee754",
          "partial": "With Payload",
          "signature": "Word-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:nanWithPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next smallest IEEE value (\u003ccode\u003e-Infinity\u003c/code\u003e and \u003ccode\u003eNaN\u003c/code\u003e are\n unchanged).\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "predIEEE",
          "package": "ieee754",
          "signature": "a -\u003e a",
          "source": "src/Numeric-IEEE.html#predIEEE",
          "type": "method"
        },
        "index": {
          "description": "Return the next smallest IEEE value Infinity and NaN are unchanged",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "predIEEE",
          "normalized": "a-\u003ea",
          "package": "ieee754",
          "partial": "IEEE",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:predIEEE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of significand bits which are equal in the two arguments\n (equivalent to \u003ccode\u003efeqrel\u003c/code\u003e from the Tango Math library).  The result is\n between \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "sameSignificandBits",
          "package": "ieee754",
          "signature": "a -\u003e a -\u003e Int",
          "source": "src/Numeric-IEEE.html#sameSignificandBits",
          "type": "method"
        },
        "index": {
          "description": "The number of significand bits which are equal in the two arguments equivalent to feqrel from the Tango Math library The result is between and floatDigits",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "sameSignificandBits",
          "normalized": "a-\u003ea-\u003eInt",
          "package": "ieee754",
          "partial": "Significand Bits",
          "signature": "a-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:sameSignificandBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next largest IEEE value (\u003ccode\u003eInfinity\u003c/code\u003e and \u003ccode\u003eNaN\u003c/code\u003e are\n unchanged).\n\u003c/p\u003e",
          "module": "Numeric.IEEE",
          "name": "succIEEE",
          "package": "ieee754",
          "signature": "a -\u003e a",
          "source": "src/Numeric-IEEE.html#succIEEE",
          "type": "method"
        },
        "index": {
          "description": "Return the next largest IEEE value Infinity and NaN are unchanged",
          "hierarchy": "Numeric IEEE",
          "module": "Numeric.IEEE",
          "name": "succIEEE",
          "normalized": "a-\u003ea",
          "package": "ieee754",
          "partial": "IEEE",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ieee754/docs/Numeric-IEEE.html#v:succIEEE"
      }
    }
  ]
]