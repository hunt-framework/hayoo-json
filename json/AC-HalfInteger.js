[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient \u003cem\u003ehalf-integers\u003c/em\u003e. That is,\n  normal integers and integers plus or minus 1/2. These are\n  sometimes useful for when a value can be an integer, or midway\n  between two integers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "module",
        "fct-source": "src/Data-HalfInteger.html",
        "fct-type": "module",
        "title": "HalfInteger"
      },
      "index": {
        "description": "This module provides efficient half-integers That is normal integers and integers plus or minus These are sometimes useful for when value can be an integer or midway between two integers",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "HalfInteger",
        "normalized": "",
        "package": "AC-HalfInteger",
        "partial": "Half Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#t:HalfInteger",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of half-integers. The bounds are determined by the type\n  variable. For example, \u003ccode\u003eHalfInteger Int\u003c/code\u003e has a range half as large\n  as \u003ccode\u003eInt\u003c/code\u003e itself. (The \u003ccode\u003eBounded\u003c/code\u003e instance correctly reflects this.)\n  Note that \u003ccode\u003eHalfInteger Integer\u003c/code\u003e is unbounded, like \u003ccode\u003eInteger\u003c/code\u003e\n  itself.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eHalfInteger\u003c/code\u003e values can be constructed as numeric literals\n  (e.g., \u003ccode\u003e5 :: HalfInteger Int\u003c/code\u003e), by conversions such as\n  \u003ccode\u003efromInteger\u003c/code\u003e or \u003ccode\u003efromIntegral\u003c/code\u003e, or by several functions in this\n  module. Another common pattern is to write (say) \u003ccode\u003e5 + half\u003c/code\u003e to\n  represent 5 1/2. Indeed, the \u003ccode\u003eShow\u003c/code\u003e instance represents values\n  in this way.\n\u003c/p\u003e\u003cp\u003eBeware: The half-integers are \u003cem\u003enot\u003c/em\u003e closed under multiplication!\n  For example, \u003ccode\u003ehalf * half\u003c/code\u003e should yield 1/4, which is not a valid\n  \u003ccode\u003eHalfInteger\u003c/code\u003e. (Currently it yields zero.) Addition and\n  subtraction, however, \u003cem\u003eare\u003c/em\u003e closed, and thus yield exact results.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "data",
        "fct-source": "src/Data-HalfInteger.html#HalfInteger",
        "fct-type": "data",
        "title": "HalfInteger"
      },
      "index": {
        "description": "The type of half-integers The bounds are determined by the type variable For example HalfInteger Int has range half as large as Int itself The Bounded instance correctly reflects this Note that HalfInteger Integer is unbounded like Integer itself HalfInteger values can be constructed as numeric literals e.g HalfInteger Int by conversions such as fromInteger or fromIntegral or by several functions in this module Another common pattern is to write say half to represent Indeed the Show instance represents values in this way Beware The half-integers are not closed under multiplication For example half half should yield which is not valid HalfInteger Currently it yields zero Addition and subtraction however are closed and thus yield exact results",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "HalfInteger",
        "normalized": "",
        "package": "AC-HalfInteger",
        "partial": "Half Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#v:double",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003eHalfInteger\u003c/code\u003e and double its value, yielding a normal integer.\n  This conversion is always exact, and \u003ccode\u003edouble . halve == id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "HalfInteger i -\u003e i",
        "fct-source": "src/Data-HalfInteger.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "Take HalfInteger and double its value yielding normal integer This conversion is always exact and double halve id",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "double",
        "normalized": "HalfInteger a-\u003ea",
        "package": "AC-HalfInteger",
        "partial": "",
        "signature": "HalfInteger i-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#v:fromHalfInteger",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003eHalfInteger\u003c/code\u003e into some other kind of number.\n  This conversion is always exact.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "HalfInteger i -\u003e x",
        "fct-source": "src/Data-HalfInteger.html#fromHalfInteger",
        "fct-type": "function",
        "title": "fromHalfInteger"
      },
      "index": {
        "description": "Convert HalfInteger into some other kind of number This conversion is always exact",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "fromHalfInteger",
        "normalized": "HalfInteger a-\u003eb",
        "package": "AC-HalfInteger",
        "partial": "Half Integer",
        "signature": "HalfInteger i-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#v:half",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents 1/2 as a \u003ccode\u003eHalfInteger\u003c/code\u003e. You can add this to integral\n  \u003ccode\u003eHalfInteger\u003c/code\u003e values created in various ways to get the\n  half-part in.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "HalfInteger i",
        "fct-source": "src/Data-HalfInteger.html#half",
        "fct-type": "function",
        "title": "half"
      },
      "index": {
        "description": "Represents as HalfInteger You can add this to integral HalfInteger values created in various ways to get the half-part in",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "half",
        "normalized": "",
        "package": "AC-HalfInteger",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#v:halve",
      "description": {
        "fct-descr": "\u003cp\u003eTake an integer and halve its value, yielding a \u003ccode\u003eHalfInteger\u003c/code\u003e.\n  This conversion is always exact, and \u003ccode\u003ehalve . double == id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "i -\u003e HalfInteger i",
        "fct-source": "src/Data-HalfInteger.html#halve",
        "fct-type": "function",
        "title": "halve"
      },
      "index": {
        "description": "Take an integer and halve its value yielding HalfInteger This conversion is always exact and halve double id",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "halve",
        "normalized": "a-\u003eHalfInteger a",
        "package": "AC-HalfInteger",
        "partial": "",
        "signature": "i-\u003eHalfInteger i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#v:isInteger",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if this \u003ccode\u003eHalfInteger\u003c/code\u003e can be exactly represented\n  as an ordinary integer, and \u003ccode\u003eFalse\u003c/code\u003e if there is a half offset.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "HalfInteger i -\u003e Bool",
        "fct-source": "src/Data-HalfInteger.html#isInteger",
        "fct-type": "function",
        "title": "isInteger"
      },
      "index": {
        "description": "Returns True if this HalfInteger can be exactly represented as an ordinary integer and False if there is half offset",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "isInteger",
        "normalized": "HalfInteger a-\u003eBool",
        "package": "AC-HalfInteger",
        "partial": "Integer",
        "signature": "HalfInteger i-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-HalfInteger/docs/Data-HalfInteger.html#v:toHalfInteger",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any number into a \u003ccode\u003eHalfInteger\u003c/code\u003e. The rounding is somewhat\n  unpredictable, but any value exactly representable as a half integer\n  will be converted exactly.\n\u003c/p\u003e",
        "fct-module": "Data.HalfInteger",
        "fct-package": "AC-HalfInteger",
        "fct-signature": "x -\u003e HalfInteger i",
        "fct-source": "src/Data-HalfInteger.html#toHalfInteger",
        "fct-type": "function",
        "title": "toHalfInteger"
      },
      "index": {
        "description": "Convert any number into HalfInteger The rounding is somewhat unpredictable but any value exactly representable as half integer will be converted exactly",
        "hierarchy": "Data HalfInteger",
        "module": "Data.HalfInteger",
        "name": "toHalfInteger",
        "normalized": "a-\u003eHalfInteger b",
        "package": "AC-HalfInteger",
        "partial": "Half Integer",
        "signature": "x-\u003eHalfInteger i"
      }
    }
  }
]