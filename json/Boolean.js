[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalized version of the class hirarchy for numbers. All\n functions that would break a potential deep embedding are removed\n or generalized to support deep embeddings.\n\u003c/p\u003e\u003cp\u003eThe class hirarchy for numeric types keeps as close as possible to the \n \u003ccode\u003ePrelude\u003c/code\u003e hirarchy. A great part of the default implementation and comments\n are copied and adopted from \u003ccode\u003ePrelude\u003c/code\u003e.\n -----------------------------------------------------------------------\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "module",
        "fct-source": "src/Data-Boolean-Numbers.html",
        "fct-type": "module",
        "title": "Numbers"
      },
      "index": {
        "description": "generalized version of the class hirarchy for numbers All functions that would break potential deep embedding are removed or generalized to support deep embeddings The class hirarchy for numeric types keeps as close as possible to the Prelude hirarchy great part of the default implementation and comments are copied and adopted from Prelude",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "Numbers",
        "normalized": "",
        "package": "Boolean",
        "partial": "Numbers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#t:IntegralB",
      "description": {
        "fct-descr": "\u003cp\u003eA deep embedded version of \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e.\n   Integral numbers, supporting integer division.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition is either \u003ccode\u003e\u003ca\u003equotRem\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edivMod\u003c/a\u003e\u003c/code\u003e\n   or the other four functions. Besides that \u003ccode\u003e\u003ca\u003etoIntegerB\u003c/a\u003e\u003c/code\u003e always\n   has to be implemented.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean-Numbers.html#IntegralB",
        "fct-type": "class",
        "title": "IntegralB"
      },
      "index": {
        "description": "deep embedded version of Integral Integral numbers supporting integer division Minimal complete definition is either quotRem and divMod or the other four functions Besides that toIntegerB always has to be implemented",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "IntegralB",
        "normalized": "",
        "package": "Boolean",
        "partial": "Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#t:NumB",
      "description": {
        "fct-descr": "\u003cp\u003eAn extension of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e that supplies the integer type of a \n   given number type and a way to create that number from the \n   integer.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean-Numbers.html#NumB",
        "fct-type": "class",
        "title": "NumB"
      },
      "index": {
        "description": "An extension of Num that supplies the integer type of given number type and way to create that number from the integer",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "NumB",
        "normalized": "",
        "package": "Boolean",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#t:RealFloatB",
      "description": {
        "fct-descr": "\u003cp\u003eDeep embedded version of \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e.\n   Efficient, machine-independent access to the components of a\n   floating-point number.\n\u003c/p\u003e\u003cp\u003eA complete definition has to define all functions.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean-Numbers.html#RealFloatB",
        "fct-type": "class",
        "title": "RealFloatB"
      },
      "index": {
        "description": "Deep embedded version of RealFloat Efficient machine-independent access to the components of floating-point number complete definition has to define all functions",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "RealFloatB",
        "normalized": "",
        "package": "Boolean",
        "partial": "Real Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#t:RealFracB",
      "description": {
        "fct-descr": "\u003cp\u003eDeep embedded version of \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e.\n   Extracting components of fractions.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e, \n   \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean-Numbers.html#RealFracB",
        "fct-type": "class",
        "title": "RealFracB"
      },
      "index": {
        "description": "Deep embedded version of RealFloat Extracting components of fractions Minimal complete definition properFraction round floor and ceiling",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "RealFracB",
        "normalized": "",
        "package": "Boolean",
        "partial": "Real Frac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:atan2",
      "description": {
        "fct-descr": "\u003cp\u003ea version of arctangent taking two real floating-point arguments.\n   For real floating \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e computes the angle\n   (from the positive x-axis) of the vector from the origin to the\n   point \u003ccode\u003e(x,y)\u003c/code\u003e.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y x\u003c/code\u003e returns a value in the range [\u003ccode\u003e-pi\u003c/code\u003e,\n   \u003ccode\u003epi\u003c/code\u003e].  It follows the Common Lisp semantics for the origin when\n   signed zeroes are supported.  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e y 1\u003c/code\u003e, with \u003ccode\u003ey\u003c/code\u003e in a type\n   that is \u003ccode\u003e\u003ca\u003eRealFloatB\u003c/a\u003e\u003c/code\u003e, should return the same value as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Numbers.html#atan2",
        "fct-type": "method",
        "title": "atan2"
      },
      "index": {
        "description": "version of arctangent taking two real floating-point arguments For real floating and atan2 computes the angle from the positive x-axis of the vector from the origin to the point atan2 returns value in the range pi pi It follows the Common Lisp semantics for the origin when signed zeroes are supported atan2 with in type that is RealFloatB should return the same value as atan",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "atan2",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:ceiling",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the least integer not less than \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Boolean-Numbers.html#ceiling",
        "fct-type": "method",
        "title": "ceiling"
      },
      "index": {
        "description": "ceiling returns the least integer not less than",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "ceiling",
        "normalized": "a-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:div",
      "description": {
        "fct-descr": "\u003cp\u003eInteger division truncated toward negative infinity.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Numbers.html#div",
        "fct-type": "method",
        "title": "div"
      },
      "index": {
        "description": "Integer division truncated toward negative infinity",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "div",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:divMod",
      "description": {
        "fct-descr": "\u003cp\u003eSimultaneous \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Boolean-Numbers.html#divMod",
        "fct-type": "method",
        "title": "divMod"
      },
      "index": {
        "description": "Simultaneous div and mod",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "divMod",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "Boolean",
        "partial": "Mod",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:evenB",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eeven\u003c/a\u003e\u003c/code\u003e for generalized booleans.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#evenB",
        "fct-type": "function",
        "title": "evenB"
      },
      "index": {
        "description": "Variant of even for generalized booleans",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "evenB",
        "normalized": "a-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:floor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the greatest integer not greater than \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Boolean-Numbers.html#floor",
        "fct-type": "method",
        "title": "floor"
      },
      "index": {
        "description": "floor returns the greatest integer not greater than",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "floor",
        "normalized": "a-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:fromIntegerB",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the number from the associated integer.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "IntegerOf a -\u003e a",
        "fct-source": "src/Data-Boolean-Numbers.html#fromIntegerB",
        "fct-type": "method",
        "title": "fromIntegerB"
      },
      "index": {
        "description": "Construct the number from the associated integer",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "fromIntegerB",
        "normalized": "IntegerOf a-\u003ea",
        "package": "Boolean",
        "partial": "Integer",
        "signature": "IntegerOf a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:fromIntegralB",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e for generalized booleans.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Boolean-Numbers.html#fromIntegralB",
        "fct-type": "function",
        "title": "fromIntegralB"
      },
      "index": {
        "description": "Variant of fromIntegral for generalized booleans",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "fromIntegralB",
        "normalized": "a-\u003eb",
        "package": "Boolean",
        "partial": "Integral",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:isIEEE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE floating point number.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#isIEEE",
        "fct-type": "method",
        "title": "isIEEE"
      },
      "index": {
        "description": "true if the argument is an IEEE floating point number",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "isIEEE",
        "normalized": "a-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "IEEE",
        "signature": "a-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:isInfinite",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE infinity or negative infinity.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#isInfinite",
        "fct-type": "method",
        "title": "isInfinite"
      },
      "index": {
        "description": "true if the argument is an IEEE infinity or negative infinity",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "isInfinite",
        "normalized": "a-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "Infinite",
        "signature": "a-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:isNaN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE \"not-a-number\" (NaN) value.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#isNaN",
        "fct-type": "method",
        "title": "isNaN"
      },
      "index": {
        "description": "true if the argument is an IEEE not-a-number NaN value",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "isNaN",
        "normalized": "a-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "Na",
        "signature": "a-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:isNegativeZero",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e if the argument is an IEEE negative zero.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#isNegativeZero",
        "fct-type": "method",
        "title": "isNegativeZero"
      },
      "index": {
        "description": "true if the argument is an IEEE negative zero",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "isNegativeZero",
        "normalized": "a-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "Negative Zero",
        "signature": "a-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:mod",
      "description": {
        "fct-descr": "\u003cp\u003eInteger modulus, satisfying:\n   \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e y) * y + (x \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e y) == x\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Numbers.html#mod",
        "fct-type": "method",
        "title": "mod"
      },
      "index": {
        "description": "Integer modulus satisfying div mod",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "mod",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:oddB",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eodd\u003c/a\u003e\u003c/code\u003e for generalized booleans.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#oddB",
        "fct-type": "function",
        "title": "oddB"
      },
      "index": {
        "description": "Variant of odd for generalized booleans",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "oddB",
        "normalized": "a-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:properFraction",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e takes a real fractional number \u003ccode\u003ex\u003c/code\u003e\n and returns a pair \u003ccode\u003e(n,f)\u003c/code\u003e such that \u003ccode\u003ex = n+f\u003c/code\u003e, and:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is an integral number with the same sign as \u003ccode\u003ex\u003c/code\u003e; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ef\u003c/code\u003e is a fraction with the same type and sign as \u003ccode\u003ex\u003c/code\u003e,\n   and with absolute value less than \u003ccode\u003e1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe default definitions of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e functions are in terms of \u003ccode\u003e\u003ca\u003eproperFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e (b, a)",
        "fct-source": "src/Data-Boolean-Numbers.html#properFraction",
        "fct-type": "method",
        "title": "properFraction"
      },
      "index": {
        "description": "The function properFraction takes real fractional number and returns pair such that and is an integral number with the same sign as and is fraction with the same type and sign as and with absolute value less than The default definitions of the ceiling floor truncate and round functions are in terms of properFraction",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "properFraction",
        "normalized": "a-\u003e(b,a)",
        "package": "Boolean",
        "partial": "Fraction",
        "signature": "a-\u003e(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:quot",
      "description": {
        "fct-descr": "\u003cp\u003eInteger division truncated towards zero.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Numbers.html#quot",
        "fct-type": "method",
        "title": "quot"
      },
      "index": {
        "description": "Integer division truncated towards zero",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "quot",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:quotRem",
      "description": {
        "fct-descr": "\u003cp\u003eSimultaneous \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e (a, a)",
        "fct-source": "src/Data-Boolean-Numbers.html#quotRem",
        "fct-type": "method",
        "title": "quotRem"
      },
      "index": {
        "description": "Simultaneous quot and rem",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "quotRem",
        "normalized": "a-\u003ea-\u003e(a,a)",
        "package": "Boolean",
        "partial": "Rem",
        "signature": "a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:rem",
      "description": {
        "fct-descr": "\u003cp\u003eInteger reminder, satisfying:\n   \u003ccode\u003e(x \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e y) * y + (x \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e y) == x\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Numbers.html#rem",
        "fct-type": "method",
        "title": "rem"
      },
      "index": {
        "description": "Integer reminder satisfying quot rem",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "rem",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:round",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the nearest integer to \u003ccode\u003ex\u003c/code\u003e;\n   the even integer if \u003ccode\u003ex\u003c/code\u003e is equidistant between two integers\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Boolean-Numbers.html#round",
        "fct-type": "method",
        "title": "round"
      },
      "index": {
        "description": "round returns the nearest integer to the even integer if is equidistant between two integers",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "round",
        "normalized": "a-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:toIntegerB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a integer from this integral.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e IntegerOf a",
        "fct-source": "src/Data-Boolean-Numbers.html#toIntegerB",
        "fct-type": "method",
        "title": "toIntegerB"
      },
      "index": {
        "description": "Create integer from this integral",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "toIntegerB",
        "normalized": "a-\u003eIntegerOf a",
        "package": "Boolean",
        "partial": "Integer",
        "signature": "a-\u003eIntegerOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Numbers.html#v:truncate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etruncate\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns the integer nearest \u003ccode\u003ex\u003c/code\u003e between zero and \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Boolean.Numbers",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-Boolean-Numbers.html#truncate",
        "fct-type": "method",
        "title": "truncate"
      },
      "index": {
        "description": "truncate returns the integer nearest between zero and",
        "hierarchy": "Data Boolean Numbers",
        "module": "Data.Boolean.Numbers",
        "name": "truncate",
        "normalized": "a-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "module",
        "fct-source": "src/Data-Boolean-Overload.html",
        "fct-type": "module",
        "title": "Overload"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "Overload",
        "normalized": "",
        "package": "Boolean",
        "partial": "Overload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-124--124-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Overload.html#%7C%7C",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(||) ||",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-38--38-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Overload.html#%26%26",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(&&) &&",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Overload.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(/=) /=",
        "normalized": "a-\u003ea-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-60-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Overload.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(\u003c) \u003c",
        "normalized": "a-\u003ea-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Overload.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(\u003c=) \u003c=",
        "normalized": "a-\u003ea-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Overload.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(==) ==",
        "normalized": "a-\u003ea-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-62-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Overload.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(\u003e) \u003e",
        "normalized": "a-\u003ea-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e BooleanOf a",
        "fct-source": "src/Data-Boolean-Overload.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "(\u003e=) \u003e=",
        "normalized": "a-\u003ea-\u003eBooleanOf a",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003eBooleanOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:ifThenElse",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "BooleanOf a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Overload.html#ifThenElse",
        "fct-type": "function",
        "title": "ifThenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "ifThenElse",
        "normalized": "BooleanOf a-\u003ea-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "Then Else",
        "signature": "BooleanOf a-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:max",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Overload.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "max",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:min",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean-Overload.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "min",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean-Overload.html#v:not",
      "description": {
        "fct-module": "Data.Boolean.Overload",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Boolean-Overload.html#not",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean Overload",
        "module": "Data.Boolean.Overload",
        "name": "not",
        "normalized": "a-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome classes for generalized boolean operations.\n\u003c/p\u003e\u003cp\u003eIn this design, for if-then-else, equality and inequality tests, the\n boolean type depends on the value type.\n\u003c/p\u003e\u003cp\u003eI also tried using a unary type constructor class.  The class doesn't work\n for regular booleans, so generality is lost.  Also, we'd probably have\n to wire class constraints in like: \u003ccode\u003e(==*) :: Eq a =\u003e f Bool -\u003e f a -\u003e f\n a -\u003e f a\u003c/code\u003e, which disallows situations needing additional constraints,\n e.g., Show.\n\u003c/p\u003e\u003cp\u003eStarting with 0.1.0, this package uses type families.\n Up to version 0.0.2, it used MPTCs with functional dependencies.\n My thanks to Andy Gill for suggesting & helping with the change.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "module",
        "fct-source": "src/Data-Boolean.html",
        "fct-type": "module",
        "title": "Boolean"
      },
      "index": {
        "description": "Some classes for generalized boolean operations In this design for if-then-else equality and inequality tests the boolean type depends on the value type also tried using unary type constructor class The class doesn work for regular booleans so generality is lost Also we probably have to wire class constraints in like Eq Bool which disallows situations needing additional constraints e.g Show Starting with this package uses type families Up to version it used MPTCs with functional dependencies My thanks to Andy Gill for suggesting helping with the change",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "Boolean",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#t:Boolean",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized boolean class\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean.html#Boolean",
        "fct-type": "class",
        "title": "Boolean"
      },
      "index": {
        "description": "Generalized boolean class",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "Boolean",
        "normalized": "",
        "package": "Boolean",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#t:BooleanOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBooleanOf\u003c/a\u003e\u003c/code\u003e computed the boolean analog of a specific type.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "BooleanOf",
        "fct-type": "function",
        "title": "BooleanOf"
      },
      "index": {
        "description": "BooleanOf computed the boolean analog of specific type",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "BooleanOf",
        "normalized": "",
        "package": "Boolean",
        "partial": "Boolean Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#t:EqB",
      "description": {
        "fct-descr": "\u003cp\u003eTypes with equality.  Minimum definition: '(==*)'.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean.html#EqB",
        "fct-type": "class",
        "title": "EqB"
      },
      "index": {
        "description": "Types with equality Minimum definition",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "EqB",
        "normalized": "",
        "package": "Boolean",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#t:IfB",
      "description": {
        "fct-descr": "\u003cp\u003eTypes with conditionals\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean.html#IfB",
        "fct-type": "class",
        "title": "IfB"
      },
      "index": {
        "description": "Types with conditionals",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "IfB",
        "normalized": "",
        "package": "Boolean",
        "partial": "If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#t:OrdB",
      "description": {
        "fct-descr": "\u003cp\u003eTypes with inequality.  Minimum definition: '(\u003c*)'.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "class",
        "fct-source": "src/Data-Boolean.html#OrdB",
        "fct-type": "class",
        "title": "OrdB"
      },
      "index": {
        "description": "Types with inequality Minimum definition",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "OrdB",
        "normalized": "",
        "package": "Boolean",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:-38--38--42-",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "b -\u003e b -\u003e b",
        "fct-source": "src/Data-Boolean.html#%26%26%2A",
        "fct-type": "method",
        "title": "(&&*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "(&&*) &&*",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "b-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:-60--42-",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e bool",
        "fct-source": "src/Data-Boolean.html#%3C%2A",
        "fct-type": "method",
        "title": "(\u003c*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "(\u003c*) \u003c*",
        "normalized": "a-\u003ea-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ebool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:-61--61--42-",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e bool",
        "fct-source": "src/Data-Boolean.html#%3D%3D%2A",
        "fct-type": "method",
        "title": "(==*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "(==*) ==*",
        "normalized": "a-\u003ea-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ebool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:boolean",
      "description": {
        "fct-descr": "\u003cp\u003eExpression-lifted conditional with condition last\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e bool -\u003e a",
        "fct-source": "src/Data-Boolean.html#boolean",
        "fct-type": "function",
        "title": "boolean"
      },
      "index": {
        "description": "Expression-lifted conditional with condition last",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "boolean",
        "normalized": "a-\u003ea-\u003eb-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ebool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:caseB",
      "description": {
        "fct-descr": "\u003cp\u003eA generalized version of a case like control structure.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e [(a -\u003e bool, b)] -\u003e b -\u003e b",
        "fct-source": "src/Data-Boolean.html#caseB",
        "fct-type": "function",
        "title": "caseB"
      },
      "index": {
        "description": "generalized version of case like control structure",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "caseB",
        "normalized": "a-\u003e[(a-\u003eb,c)]-\u003ec-\u003ec",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003e[(a-\u003ebool,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003ePoint-wise conditional\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "f bool -\u003e f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Boolean.html#cond",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "Point-wise conditional",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "cond",
        "normalized": "a b-\u003ea c-\u003ea c-\u003ea c",
        "package": "Boolean",
        "partial": "",
        "signature": "f bool-\u003ef a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:crop",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized cropping, filling in \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e where the test yields false.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "f bool -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Boolean.html#crop",
        "fct-type": "function",
        "title": "crop"
      },
      "index": {
        "description": "Generalized cropping filling in mempty where the test yields false",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "crop",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "Boolean",
        "partial": "",
        "signature": "f bool-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:guardedB",
      "description": {
        "fct-descr": "\u003cp\u003eA generalized replacement for guards and chained ifs.\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "bool -\u003e [(bool, b)] -\u003e b -\u003e b",
        "fct-source": "src/Data-Boolean.html#guardedB",
        "fct-type": "function",
        "title": "guardedB"
      },
      "index": {
        "description": "generalized replacement for guards and chained ifs",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "guardedB",
        "normalized": "a-\u003e[(a,b)]-\u003eb-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "bool-\u003e[(bool,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:ifB",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "bool -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean.html#ifB",
        "fct-type": "method",
        "title": "ifB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "ifB",
        "normalized": "a-\u003eb-\u003eb-\u003eb",
        "package": "Boolean",
        "partial": "",
        "signature": "bool-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:maxB",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eifB\u003c/a\u003e\u003c/code\u003e and '(\u003e=*)'\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean.html#maxB",
        "fct-type": "function",
        "title": "maxB"
      },
      "index": {
        "description": "Variant of max using ifB and",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "maxB",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:minB",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eifB\u003c/a\u003e\u003c/code\u003e and '(\u003c=*)'\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Boolean.html#minB",
        "fct-type": "function",
        "title": "minB"
      },
      "index": {
        "description": "Variant of min using ifB and",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "minB",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:notB",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "b -\u003e b",
        "fct-source": "src/Data-Boolean.html#notB",
        "fct-type": "method",
        "title": "notB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "notB",
        "normalized": "a-\u003ea",
        "package": "Boolean",
        "partial": "",
        "signature": "b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:sort2B",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eifB\u003c/a\u003e\u003c/code\u003e and '(\u003c=*)'\n\u003c/p\u003e",
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "(a, a) -\u003e (a, a)",
        "fct-source": "src/Data-Boolean.html#sort2B",
        "fct-type": "function",
        "title": "sort2B"
      },
      "index": {
        "description": "Variant of min and max using ifB and",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "sort2B",
        "normalized": "(a,a)-\u003e(a,a)",
        "package": "Boolean",
        "partial": "",
        "signature": "(a,a)-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Boolean/docs/Data-Boolean.html#v:true",
      "description": {
        "fct-module": "Data.Boolean",
        "fct-package": "Boolean",
        "fct-signature": "b",
        "fct-source": "src/Data-Boolean.html#true",
        "fct-type": "method",
        "title": "true"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Boolean",
        "module": "Data.Boolean",
        "name": "true",
        "normalized": "",
        "package": "Boolean",
        "partial": "",
        "signature": ""
      }
    }
  }
]