[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Data-AEq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class for approximate and exact equalilty comparisons and instances\n for common data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AEq",
        "fct-package": "ieee",
        "fct-signature": "module",
        "fct-source": "src/Data-AEq.html",
        "fct-type": "module",
        "title": "AEq"
      },
      "index": {
        "description": "type class for approximate and exact equalilty comparisons and instances for common data types",
        "hierarchy": "Data AEq",
        "module": "Data.AEq",
        "name": "AEq",
        "normalized": "",
        "package": "ieee",
        "partial": "AEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Data-AEq.html#t:AEq",
      "description": {
        "fct-descr": "\u003cp\u003eTypes with approximate and exact equality comparisons.\n\u003c/p\u003e",
        "fct-module": "Data.AEq",
        "fct-package": "ieee",
        "fct-signature": "class",
        "fct-source": "src/Data-AEq.html#AEq",
        "fct-type": "class",
        "title": "AEq"
      },
      "index": {
        "description": "Types with approximate and exact equality comparisons",
        "hierarchy": "Data AEq",
        "module": "Data.AEq",
        "name": "AEq",
        "normalized": "",
        "package": "ieee",
        "partial": "AEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Data-AEq.html#v:-126--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAn approximate equality comparison operator.\n\u003c/p\u003e\u003cp\u003eFor real \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are approximately equal in the\n following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e at least half of their significand bits agree;\n\u003c/li\u003e\u003cli\u003e both values are less than \u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor complex \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are approximately equal in the\n followiing cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e their magnitudes are approximately equal and the angle between\n     them is less than \u003ccode\u003e32*\u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both magnitudes are less than \u003ccode\u003e\u003ca\u003eepsilon\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both have a \u003ccode\u003eNaN\u003c/code\u003e real or imaginary part.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAdmitedly, the \u003ccode\u003e32\u003c/code\u003e is a bit of a hack.  Future versions of the\n library may switch to a more principled test of the angle.\n\u003c/p\u003e",
        "fct-module": "Data.AEq",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-AEq.html#~%3D%3D",
        "fct-type": "method",
        "title": "(~==)"
      },
      "index": {
        "description": "An approximate equality comparison operator For real IEEE types two values are approximately equal in the following cases at least half of their significand bits agree both values are less than epsilon both values are NaN For complex IEEE types two values are approximately equal in the followiing cases their magnitudes are approximately equal and the angle between them is less than epsilon both magnitudes are less than epsilon both have NaN real or imaginary part Admitedly the is bit of hack Future versions of the library may switch to more principled test of the angle",
        "hierarchy": "Data AEq",
        "module": "Data.AEq",
        "name": "(~==) ~==",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ieee",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Data-AEq.html#v:-61--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAn exact equality comparison.\n\u003c/p\u003e\u003cp\u003eFor real \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are equivalent in the\n following cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e both values are \u003ccode\u003e+0\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both values are \u003ccode\u003e-0\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e both values are nonzero and equal to each other\n     (according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e);\n\u003c/li\u003e\u003cli\u003e both values are \u003ccode\u003eNaN\u003c/code\u003e with the same payload and sign.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor complex \u003ccode\u003e\u003ca\u003eIEEE\u003c/a\u003e\u003c/code\u003e types, two values are equivalent if their\n real and imaginary parts are equivalent.\n\u003c/p\u003e",
        "fct-module": "Data.AEq",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-AEq.html#%3D%3D%3D",
        "fct-type": "method",
        "title": "(===)"
      },
      "index": {
        "description": "An exact equality comparison For real IEEE types two values are equivalent in the following cases both values are both values are both values are nonzero and equal to each other according to both values are NaN with the same payload and sign For complex IEEE types two values are equivalent if their real and imaginary parts are equivalent",
        "hierarchy": "Data AEq",
        "module": "Data.AEq",
        "name": "(===) ===",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ieee",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on IEEE floating point numbers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "module",
        "fct-source": "src/Numeric-IEEE.html",
        "fct-type": "module",
        "title": "IEEE"
      },
      "index": {
        "description": "Operations on IEEE floating point numbers",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "IEEE",
        "normalized": "",
        "package": "ieee",
        "partial": "IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#t:IEEE",
      "description": {
        "fct-descr": "\u003cp\u003eIEEE floating point types.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "class",
        "fct-source": "src/Numeric-IEEE.html#IEEE",
        "fct-type": "class",
        "title": "IEEE"
      },
      "index": {
        "description": "IEEE floating point types",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "IEEE",
        "normalized": "",
        "package": "ieee",
        "partial": "IEEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:bisectIEEE",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two values with the same sign, return the value halfway\n between them on the IEEE number line.  If the signs of the values\n differ or either is \u003ccode\u003eNaN\u003c/code\u003e, the value is undefined.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#bisectIEEE",
        "fct-type": "method",
        "title": "bisectIEEE"
      },
      "index": {
        "description": "Given two values with the same sign return the value halfway between them on the IEEE number line If the signs of the values differ or either is NaN the value is undefined",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "bisectIEEE",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ieee",
        "partial": "IEEE",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:copySign",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecopySign x y\u003c/code\u003e returns \u003ccode\u003ex\u003c/code\u003e with its sign changed to \u003ccode\u003ey\u003c/code\u003e's.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#copySign",
        "fct-type": "method",
        "title": "copySign"
      },
      "index": {
        "description": "copySign returns with its sign changed to",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "copySign",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ieee",
        "partial": "Sign",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:epsilon",
      "description": {
        "fct-descr": "\u003cp\u003eThe smallest representalbe positive value \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003e1 + x /= 1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a",
        "fct-source": "src/Numeric-IEEE.html#epsilon",
        "fct-type": "method",
        "title": "epsilon"
      },
      "index": {
        "description": "The smallest representalbe positive value such that",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "epsilon",
        "normalized": "",
        "package": "ieee",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:identicalIEEE",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if two values are \u003cem\u003eexactly\u003c/em\u003e (bitwise) equal.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Numeric-IEEE.html#identicalIEEE",
        "fct-type": "method",
        "title": "identicalIEEE"
      },
      "index": {
        "description": "Return True if two values are exactly bitwise equal",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "identicalIEEE",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "ieee",
        "partial": "IEEE",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:infinity",
      "description": {
        "fct-descr": "\u003cp\u003eInfinity value.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a",
        "fct-source": "src/Numeric-IEEE.html#infinity",
        "fct-type": "method",
        "title": "infinity"
      },
      "index": {
        "description": "Infinity value",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "infinity",
        "normalized": "",
        "package": "ieee",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:maxFinite",
      "description": {
        "fct-descr": "\u003cp\u003eThe largest representable finite value.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a",
        "fct-source": "src/Numeric-IEEE.html#maxFinite",
        "fct-type": "method",
        "title": "maxFinite"
      },
      "index": {
        "description": "The largest representable finite value",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "maxFinite",
        "normalized": "",
        "package": "ieee",
        "partial": "Finite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:maxNaN",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the maximum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return it.\n Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#maxNaN",
        "fct-type": "function",
        "title": "maxNaN"
      },
      "index": {
        "description": "Return the maximum of two values if one value is NaN return it Prefer the first if both values are NaN",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "maxNaN",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ieee",
        "partial": "Na",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:maxNaNPayload",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum \u003ccode\u003eNaN\u003c/code\u003e payload for type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e Word64",
        "fct-source": "src/Numeric-IEEE.html#maxNaNPayload",
        "fct-type": "method",
        "title": "maxNaNPayload"
      },
      "index": {
        "description": "Maximum NaN payload for type",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "maxNaNPayload",
        "normalized": "a-\u003eWord",
        "package": "ieee",
        "partial": "Na NPayload",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:maxNum",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the maximum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return the\n other.  Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#maxNum",
        "fct-type": "function",
        "title": "maxNum"
      },
      "index": {
        "description": "Return the maximum of two values if one value is NaN return the other Prefer the first if both values are NaN",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "maxNum",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ieee",
        "partial": "Num",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:minNaN",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the minimum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return it.\n Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#minNaN",
        "fct-type": "function",
        "title": "minNaN"
      },
      "index": {
        "description": "Return the minimum of two values if one value is NaN return it Prefer the first if both values are NaN",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "minNaN",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ieee",
        "partial": "Na",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:minNormal",
      "description": {
        "fct-descr": "\u003cp\u003eThe smallest representable positive normalized value.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a",
        "fct-source": "src/Numeric-IEEE.html#minNormal",
        "fct-type": "method",
        "title": "minNormal"
      },
      "index": {
        "description": "The smallest representable positive normalized value",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "minNormal",
        "normalized": "",
        "package": "ieee",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:minNum",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the minimum of two values; if one value is \u003ccode\u003eNaN\u003c/code\u003e, return the\n other.  Prefer the first if both values are \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#minNum",
        "fct-type": "function",
        "title": "minNum"
      },
      "index": {
        "description": "Return the minimum of two values if one value is NaN return the other Prefer the first if both values are NaN",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "minNum",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ieee",
        "partial": "Num",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:nan",
      "description": {
        "fct-descr": "\u003cp\u003eDefault \u003ccode\u003eNaN\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a",
        "fct-source": "src/Numeric-IEEE.html#nan",
        "fct-type": "method",
        "title": "nan"
      },
      "index": {
        "description": "Default NaN value",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "nan",
        "normalized": "",
        "package": "ieee",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:nanPayload",
      "description": {
        "fct-descr": "\u003cp\u003eThe payload stored in a \u003ccode\u003eNaN\u003c/code\u003e value.  Undefined if the argument\n is not \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e Word64",
        "fct-source": "src/Numeric-IEEE.html#nanPayload",
        "fct-type": "method",
        "title": "nanPayload"
      },
      "index": {
        "description": "The payload stored in NaN value Undefined if the argument is not NaN",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "nanPayload",
        "normalized": "a-\u003eWord",
        "package": "ieee",
        "partial": "Payload",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:nanWithPayload",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eNaN\u003c/code\u003e value with a positive integer payload.  Payload must be\n ess than \u003ccode\u003e\u003ca\u003emaxNaNPayload\u003c/a\u003e\u003c/code\u003e.  Beware that while some platforms allow\n using \u003ccode\u003e0\u003c/code\u003e as a payload, this behavior is not portable.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "Word64 -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#nanWithPayload",
        "fct-type": "method",
        "title": "nanWithPayload"
      },
      "index": {
        "description": "NaN value with positive integer payload Payload must be ess than maxNaNPayload Beware that while some platforms allow using as payload this behavior is not portable",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "nanWithPayload",
        "normalized": "Word-\u003ea",
        "package": "ieee",
        "partial": "With Payload",
        "signature": "Word-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:predIEEE",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next smallest IEEE value (\u003ccode\u003e-Infinity\u003c/code\u003e and \u003ccode\u003eNaN\u003c/code\u003e are\n unchanged).\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#predIEEE",
        "fct-type": "method",
        "title": "predIEEE"
      },
      "index": {
        "description": "Return the next smallest IEEE value Infinity and NaN are unchanged",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "predIEEE",
        "normalized": "a-\u003ea",
        "package": "ieee",
        "partial": "IEEE",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:sameSignificandBits",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of significand bits which are equal in the two arguments\n (equivalent to \u003ccode\u003efeqrel\u003c/code\u003e from the Tango Math library).  The result is\n between \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a -\u003e Int",
        "fct-source": "src/Numeric-IEEE.html#sameSignificandBits",
        "fct-type": "method",
        "title": "sameSignificandBits"
      },
      "index": {
        "description": "The number of significand bits which are equal in the two arguments equivalent to feqrel from the Tango Math library The result is between and floatDigits",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "sameSignificandBits",
        "normalized": "a-\u003ea-\u003eInt",
        "package": "ieee",
        "partial": "Significand Bits",
        "signature": "a-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ieee/docs/Numeric-IEEE.html#v:succIEEE",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next largest IEEE value (\u003ccode\u003eInfinity\u003c/code\u003e and \u003ccode\u003eNaN\u003c/code\u003e are\n unchanged).\n\u003c/p\u003e",
        "fct-module": "Numeric.IEEE",
        "fct-package": "ieee",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Numeric-IEEE.html#succIEEE",
        "fct-type": "method",
        "title": "succIEEE"
      },
      "index": {
        "description": "Return the next largest IEEE value Infinity and NaN are unchanged",
        "hierarchy": "Numeric IEEE",
        "module": "Numeric.IEEE",
        "name": "succIEEE",
        "normalized": "a-\u003ea",
        "package": "ieee",
        "partial": "IEEE",
        "signature": "a-\u003ea"
      }
    }
  }
]