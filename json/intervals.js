[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterval arithmetic\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Interval.html",
        "fct-type": "module",
        "title": "Interval"
      },
      "index": {
        "description": "Interval arithmetic",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "Interval",
        "normalized": "",
        "package": "intervals",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#t:Interval",
      "description": {
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Interval.html#Interval",
        "fct-type": "data",
        "title": "Interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "Interval",
        "normalized": "",
        "package": "intervals",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--33-",
      "description": {
        "fct-descr": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c! (20 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c! (10 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 30 :: Interval Double) \u003c! (5 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3C%21",
        "fct-type": "function",
        "title": "(\u003c!)"
      },
      "index": {
        "description": "For all in in Interval Double Interval Double True Interval Double Interval Double False Interval Double Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003c!) \u003c!",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--61--33-",
      "description": {
        "fct-descr": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c=! (20 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c=! (10 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 30 :: Interval Double) \u003c=! (5 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3C%3D%21",
        "fct-type": "function",
        "title": "(\u003c=!)"
      },
      "index": {
        "description": "For all in in Interval Double Interval Double True Interval Double Interval Double True Interval Double Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003c=!) \u003c=!",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3C%3D%3F",
        "fct-type": "function",
        "title": "(\u003c=?)"
      },
      "index": {
        "description": "Does there exist an in in such that",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003c=?) \u003c=?",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--63-",
      "description": {
        "fct-descr": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3C%3F",
        "fct-type": "function",
        "title": "(\u003c?)"
      },
      "index": {
        "description": "Does there exist an in in such that",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003c?) \u003c?",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-61--61--33-",
      "description": {
        "fct-descr": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eOnly singleton intervals return true\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(singleton 5 :: Interval Double) ==! (singleton 5 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) ==! (5 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3D%3D%21",
        "fct-type": "function",
        "title": "(==!)"
      },
      "index": {
        "description": "For all in in Only singleton intervals return true singleton Interval Double singleton Interval Double True Interval Double Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(==!) ==!",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-61--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3D%3D%3F",
        "fct-type": "function",
        "title": "(==?)"
      },
      "index": {
        "description": "Does there exist an in in such that",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(==?) ==?",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--33-",
      "description": {
        "fct-descr": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) \u003e! (10 ... 19 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 20 :: Interval Double) \u003e! (15 ... 40 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3E%21",
        "fct-type": "function",
        "title": "(\u003e!)"
      },
      "index": {
        "description": "For all in in Interval Double Interval Double True Interval Double Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003e!) \u003e!",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--61--33-",
      "description": {
        "fct-descr": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) \u003e=! (10 ... 20 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 20 :: Interval Double) \u003e=! (15 ... 40 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3E%3D%21",
        "fct-type": "function",
        "title": "(\u003e=!)"
      },
      "index": {
        "description": "For all in in Interval Double Interval Double True Interval Double Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003e=!) \u003e=!",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3E%3D%3F",
        "fct-type": "function",
        "title": "(\u003e=?)"
      },
      "index": {
        "description": "Does there exist an in in such that",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003e=?) \u003e=?",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--63-",
      "description": {
        "fct-descr": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#%3E%3F",
        "fct-type": "function",
        "title": "(\u003e?)"
      },
      "index": {
        "description": "Does there exist an in in such that",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(\u003e?) \u003e?",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:...",
      "description": {
        "fct-descr": "\u003cp\u003eThe rule of thumb is you should only use this to construct using values\n that you took out of the interval. Otherwise, use I, to force rounding\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "a -\u003e a -\u003e Interval a",
        "fct-source": "src/Numeric-Interval.html#...",
        "fct-type": "function",
        "title": "(...)"
      },
      "index": {
        "description": "The rule of thumb is you should only use this to construct using values that you took out of the interval Otherwise use to force rounding",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "(...) ...",
        "normalized": "a-\u003ea-\u003eInterval a",
        "package": "intervals",
        "partial": "",
        "signature": "a-\u003ea-\u003eInterval a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:I",
      "description": {
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "I !a !a",
        "fct-source": "src/Numeric-Interval.html#Interval",
        "fct-type": "function",
        "title": "I"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "I",
        "normalized": "",
        "package": "intervals",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:bisection",
      "description": {
        "fct-descr": "\u003cp\u003eBisect an interval at its midpoint.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebisection (10.0 ... 20.0)\n\u003c/code\u003e\u003c/strong\u003e(10.0 ... 15.0,15.0 ... 20.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebisection (singleton 5.0)\n\u003c/code\u003e\u003c/strong\u003e(5.0 ... 5.0,5.0 ... 5.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebisection empty\n\u003c/code\u003e\u003c/strong\u003e(NaN ... NaN,NaN ... NaN)\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e (Interval a, Interval a)",
        "fct-source": "src/Numeric-Interval.html#bisection",
        "fct-type": "function",
        "title": "bisection"
      },
      "index": {
        "description": "Bisect an interval at its midpoint bisection bisection singleton bisection empty NaN NaN NaN NaN",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "bisection",
        "normalized": "Interval a-\u003e(Interval a,Interval a)",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003e(Interval a,Interval a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:certainly",
      "description": {
        "fct-descr": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003eop\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "b -\u003e b -\u003e Bool) -\u003e Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#certainly",
        "fct-type": "function",
        "title": "certainly"
      },
      "index": {
        "description": "For all in in op",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "certainly",
        "normalized": "a-\u003ea-\u003eBool)-\u003eInterval b-\u003eInterval b-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "b-\u003eb-\u003eBool)-\u003eInterval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if interval \u003ccode\u003eX\u003c/code\u003e totally contains interval \u003ccode\u003eY\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) `contains` (25 ... 35 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) `contains` (15 ... 35 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#contains",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "Check if interval totally contains interval Interval Double contains Interval Double True Interval Double contains Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "contains",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a point is in the interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 3.2 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 5 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 1 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 8 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 5 empty\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "Determine if point is in the interval elem True elem True elem True elem False elem empty False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "elem",
        "normalized": "a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty\n\u003c/code\u003e\u003c/strong\u003eNaN ... NaN\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a",
        "fct-source": "src/Numeric-Interval.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty interval empty NaN NaN",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "empty",
        "normalized": "",
        "package": "intervals",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:hull",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the convex hull of two intervals\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehull (0 ... 10 :: Interval Double) (5 ... 15 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003e0.0 ... 15.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehull (15 ... 85 :: Interval Double) (0 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003e0.0 ... 85.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Interval a",
        "fct-source": "src/Numeric-Interval.html#hull",
        "fct-type": "function",
        "title": "hull"
      },
      "index": {
        "description": "Calculate the convex hull of two intervals hull Interval Double Interval Double hull Interval Double Interval Double",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "hull",
        "normalized": "Interval a-\u003eInterval a-\u003eInterval a",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eInterval a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:idouble",
      "description": {
        "fct-descr": "\u003cp\u003eid function. Useful for type specification\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t idouble (1 ... 3)\n\u003c/code\u003e\u003c/strong\u003eidouble (1 ... 3) :: Interval Double\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval Double -\u003e Interval Double",
        "fct-source": "src/Numeric-Interval.html#idouble",
        "fct-type": "function",
        "title": "idouble"
      },
      "index": {
        "description": "id function Useful for type specification idouble idouble Interval Double",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "idouble",
        "normalized": "Interval Double-\u003eInterval Double",
        "package": "intervals",
        "partial": "",
        "signature": "Interval Double-\u003eInterval Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:ifloat",
      "description": {
        "fct-descr": "\u003cp\u003eid function. Useful for type specification\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t ifloat (1 ... 3)\n\u003c/code\u003e\u003c/strong\u003eifloat (1 ... 3) :: Interval Float\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval Float -\u003e Interval Float",
        "fct-source": "src/Numeric-Interval.html#ifloat",
        "fct-type": "function",
        "title": "ifloat"
      },
      "index": {
        "description": "id function Useful for type specification ifloat ifloat Interval Float",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "ifloat",
        "normalized": "Interval Float-\u003eInterval Float",
        "package": "intervals",
        "partial": "",
        "signature": "Interval Float-\u003eInterval Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:inf",
      "description": {
        "fct-descr": "\u003cp\u003eThe infinumum (lower bound) of an interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einf (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e a",
        "fct-source": "src/Numeric-Interval.html#inf",
        "fct-type": "function",
        "title": "inf"
      },
      "index": {
        "description": "The infinumum lower bound of an interval inf",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "inf",
        "normalized": "Interval a-\u003ea",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the intersection of two intervals.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (1 ... 10 :: Interval Double) (5 ... 15 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003e5.0 ... 10.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Interval a",
        "fct-source": "src/Numeric-Interval.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Calculate the intersection of two intervals intersection Interval Double Interval Double",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "intersection",
        "normalized": "Interval a-\u003eInterval a-\u003eInterval a",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eInterval a-\u003eInterval a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:isSubsetOf",
      "description": {
        "fct-descr": "\u003cp\u003eFlipped version of \u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e. Check if interval \u003ccode\u003eX\u003c/code\u003e a subset of interval \u003ccode\u003eY\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(25 ... 35 :: Interval Double) `isSubsetOf` (20 ... 40 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) `isSubsetOf` (15 ... 35 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "Flipped version of contains Check if interval subset of interval Interval Double isSubsetOf Interval Double True Interval Double isSubsetOf Interval Double False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "isSubsetOf",
        "normalized": "Interval a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "Subset Of",
        "signature": "Interval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:magnitude",
      "description": {
        "fct-descr": "\u003cp\u003eMagnitude\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emagnitude (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e20\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emagnitude (-20 ... 10)\n\u003c/code\u003e\u003c/strong\u003e20\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emagnitude (singleton 5)\n\u003c/code\u003e\u003c/strong\u003e5\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e a",
        "fct-source": "src/Numeric-Interval.html#magnitude",
        "fct-type": "function",
        "title": "magnitude"
      },
      "index": {
        "description": "Magnitude magnitude magnitude magnitude singleton",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "magnitude",
        "normalized": "Interval a-\u003ea",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:midpoint",
      "description": {
        "fct-descr": "\u003cp\u003eNearest point to the midpoint of the interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emidpoint (10.0 ... 20.0)\n\u003c/code\u003e\u003c/strong\u003e15.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emidpoint (singleton 5.0)\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emidpoint empty\n\u003c/code\u003e\u003c/strong\u003eNaN\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e a",
        "fct-source": "src/Numeric-Interval.html#midpoint",
        "fct-type": "function",
        "title": "midpoint"
      },
      "index": {
        "description": "Nearest point to the midpoint of the interval midpoint midpoint singleton midpoint empty NaN",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "midpoint",
        "normalized": "Interval a-\u003ea",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:mignitude",
      "description": {
        "fct-descr": "\u003cp\u003e\"mignitude\"\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emignitude (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emignitude (-20 ... 10)\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emignitude (singleton 5)\n\u003c/code\u003e\u003c/strong\u003e5\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e a",
        "fct-source": "src/Numeric-Interval.html#mignitude",
        "fct-type": "function",
        "title": "mignitude"
      },
      "index": {
        "description": "mignitude mignitude mignitude mignitude singleton",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "mignitude",
        "normalized": "Interval a-\u003ea",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a point is not included in the interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enotElem 8 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enotElem 1.4 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cp\u003eAnd of course, nothing is a member of the empty interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enotElem 5 empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "Determine if point is not included in the interval notElem True notElem False And of course nothing is member of the empty interval notElem empty True",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "notElem",
        "normalized": "a-\u003eInterval a-\u003eBool",
        "package": "intervals",
        "partial": "Elem",
        "signature": "a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003enegation handles NaN properly\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull (1 ... 5)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull (1 ... 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "negation handles NaN properly null False null False null empty True",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "null",
        "normalized": "Interval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:possibly",
      "description": {
        "fct-descr": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003eop\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "b -\u003e b -\u003e Bool) -\u003e Interval a -\u003e Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#possibly",
        "fct-type": "function",
        "title": "possibly"
      },
      "index": {
        "description": "Does there exist an in in such that op",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "possibly",
        "normalized": "a-\u003ea-\u003eBool)-\u003eInterval b-\u003eInterval b-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "b-\u003eb-\u003eBool)-\u003eInterval a-\u003eInterval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eA singleton point\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 1\n\u003c/code\u003e\u003c/strong\u003e1 ... 1\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "a -\u003e Interval a",
        "fct-source": "src/Numeric-Interval.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "singleton point singleton",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "singleton",
        "normalized": "a-\u003eInterval a",
        "package": "intervals",
        "partial": "",
        "signature": "a-\u003eInterval a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:singular",
      "description": {
        "fct-descr": "\u003cp\u003eIs the interval a singleton point?\n N.B. This is fairly fragile and likely will not hold after\n even a few operations that only involve singletons\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingular (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingular (1.0 ... 20.0)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e Bool",
        "fct-source": "src/Numeric-Interval.html#singular",
        "fct-type": "function",
        "title": "singular"
      },
      "index": {
        "description": "Is the interval singleton point N.B This is fairly fragile and likely will not hold after even few operations that only involve singletons singular singleton True singular False",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "singular",
        "normalized": "Interval a-\u003eBool",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:sup",
      "description": {
        "fct-descr": "\u003cp\u003eThe supremum (upper bound) of an interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esup (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e20\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e a",
        "fct-source": "src/Numeric-Interval.html#sup",
        "fct-type": "function",
        "title": "sup"
      },
      "index": {
        "description": "The supremum upper bound of an interval sup",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "sup",
        "normalized": "Interval a-\u003ea",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:whole",
      "description": {
        "fct-descr": "\u003cp\u003eThe whole real number line\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewhole\n\u003c/code\u003e\u003c/strong\u003e-Infinity ... Infinity\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a",
        "fct-source": "src/Numeric-Interval.html#whole",
        "fct-type": "function",
        "title": "whole"
      },
      "index": {
        "description": "The whole real number line whole Infinity Infinity",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "whole",
        "normalized": "",
        "package": "intervals",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:width",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the width of an interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewidth (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e19\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewidth (singleton 1)\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewidth empty\n\u003c/code\u003e\u003c/strong\u003eNaN\n\u003c/pre\u003e",
        "fct-module": "Numeric.Interval",
        "fct-package": "intervals",
        "fct-signature": "Interval a -\u003e a",
        "fct-source": "src/Numeric-Interval.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "Calculate the width of an interval width width singleton width empty NaN",
        "hierarchy": "Numeric Interval",
        "module": "Numeric.Interval",
        "name": "width",
        "normalized": "Interval a-\u003ea",
        "package": "intervals",
        "partial": "",
        "signature": "Interval a-\u003ea"
      }
    }
  }
]