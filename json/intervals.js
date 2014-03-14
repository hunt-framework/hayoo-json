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
        "word": "intervals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterval arithmetic\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Interval",
          "name": "Interval",
          "package": "intervals",
          "source": "src/Numeric-Interval.html",
          "type": "module"
        },
        "index": {
          "description": "Interval arithmetic",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "Interval",
          "package": "intervals",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Interval",
          "name": "Interval",
          "package": "intervals",
          "source": "src/Numeric-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "Interval",
          "package": "intervals",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c! (20 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c! (10 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 30 :: Interval Double) \u003c! (5 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003c!)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3C%21",
          "type": "function"
        },
        "index": {
          "description": "For all in in Interval Double Interval Double True Interval Double Interval Double False Interval Double Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003c!) \u003c!",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c=! (20 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) \u003c=! (10 ... 30 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 30 :: Interval Double) \u003c=! (5 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003c=!)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3C%3D%21",
          "type": "function"
        },
        "index": {
          "description": "For all in in Interval Double Interval Double True Interval Double Interval Double True Interval Double Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003c=!) \u003c=!",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003c=?)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3C%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Does there exist an in in such that",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003c=?) \u003c=?",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003c?)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3C%3F",
          "type": "function"
        },
        "index": {
          "description": "Does there exist an in in such that",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003c?) \u003c?",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-60--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eOnly singleton intervals return true\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(singleton 5 :: Interval Double) ==! (singleton 5 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 10 :: Interval Double) ==! (5 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "(==!)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3D%3D%21",
          "type": "function"
        },
        "index": {
          "description": "For all in in Only singleton intervals return true singleton Interval Double singleton Interval Double True Interval Double Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(==!) ==!",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-61--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "(==?)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3D%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Does there exist an in in such that",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(==?) ==?",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-61--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) \u003e! (10 ... 19 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 20 :: Interval Double) \u003e! (15 ... 40 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003e!)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3E%21",
          "type": "function"
        },
        "index": {
          "description": "For all in in Interval Double Interval Double True Interval Double Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003e!) \u003e!",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) \u003e=! (10 ... 20 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(5 ... 20 :: Interval Double) \u003e=! (15 ... 40 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003e=!)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3E%3D%21",
          "type": "function"
        },
        "index": {
          "description": "For all in in Interval Double Interval Double True Interval Double Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003e=!) \u003e=!",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003e=?)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3E%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Does there exist an in in such that",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003e=?) \u003e=?",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "(\u003e?)",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#%3E%3F",
          "type": "function"
        },
        "index": {
          "description": "Does there exist an in in such that",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(\u003e?) \u003e?",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:-62--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rule of thumb is you should only use this to construct using values\n that you took out of the interval. Otherwise, use I, to force rounding\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "(...)",
          "package": "intervals",
          "signature": "a -\u003e a -\u003e Interval a",
          "source": "src/Numeric-Interval.html#...",
          "type": "function"
        },
        "index": {
          "description": "The rule of thumb is you should only use this to construct using values that you took out of the interval Otherwise use to force rounding",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "(...) ...",
          "normalized": "a-\u003ea-\u003eInterval a",
          "package": "intervals",
          "signature": "a-\u003ea-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Interval",
          "name": "I",
          "package": "intervals",
          "signature": "I !a !a",
          "source": "src/Numeric-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "I",
          "package": "intervals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBisect an interval at its midpoint.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebisection (10.0 ... 20.0)\n\u003c/code\u003e\u003c/strong\u003e(10.0 ... 15.0,15.0 ... 20.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebisection (singleton 5.0)\n\u003c/code\u003e\u003c/strong\u003e(5.0 ... 5.0,5.0 ... 5.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebisection empty\n\u003c/code\u003e\u003c/strong\u003e(NaN ... NaN,NaN ... NaN)\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "bisection",
          "package": "intervals",
          "signature": "Interval a -\u003e (Interval a, Interval a)",
          "source": "src/Numeric-Interval.html#bisection",
          "type": "function"
        },
        "index": {
          "description": "Bisect an interval at its midpoint bisection bisection singleton bisection empty NaN NaN NaN NaN",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "bisection",
          "normalized": "Interval a-\u003e(Interval a,Interval a)",
          "package": "intervals",
          "signature": "Interval a-\u003e(Interval a,Interval a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:bisection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e. \u003ccode\u003ex \u003ccode\u003eop\u003c/code\u003e y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "certainly",
          "package": "intervals",
          "signature": "b -\u003e b -\u003e Bool) -\u003e Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#certainly",
          "type": "function"
        },
        "index": {
          "description": "For all in in op",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "certainly",
          "normalized": "a-\u003ea-\u003eBool)-\u003eInterval b-\u003eInterval b-\u003eBool",
          "package": "intervals",
          "signature": "b-\u003eb-\u003eBool)-\u003eInterval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:certainly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if interval \u003ccode\u003eX\u003c/code\u003e totally contains interval \u003ccode\u003eY\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) `contains` (25 ... 35 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) `contains` (15 ... 35 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "contains",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Check if interval totally contains interval Interval Double contains Interval Double True Interval Double contains Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "contains",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a point is in the interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 3.2 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 5 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 1 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 8 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eelem 5 empty\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "elem",
          "package": "intervals",
          "signature": "a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#elem",
          "type": "function"
        },
        "index": {
          "description": "Determine if point is in the interval elem True elem True elem True elem False elem empty False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "elem",
          "normalized": "a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "signature": "a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eempty\n\u003c/code\u003e\u003c/strong\u003eNaN ... NaN\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "empty",
          "package": "intervals",
          "signature": "Interval a",
          "source": "src/Numeric-Interval.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty interval empty NaN NaN",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "empty",
          "package": "intervals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the convex hull of two intervals\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehull (0 ... 10 :: Interval Double) (5 ... 15 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003e0.0 ... 15.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehull (15 ... 85 :: Interval Double) (0 ... 10 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003e0.0 ... 85.0\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "hull",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Interval a",
          "source": "src/Numeric-Interval.html#hull",
          "type": "function"
        },
        "index": {
          "description": "Calculate the convex hull of two intervals hull Interval Double Interval Double hull Interval Double Interval Double",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "hull",
          "normalized": "Interval a-\u003eInterval a-\u003eInterval a",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:hull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid function. Useful for type specification\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t idouble (1 ... 3)\n\u003c/code\u003e\u003c/strong\u003eidouble (1 ... 3) :: Interval Double\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "idouble",
          "package": "intervals",
          "signature": "Interval Double -\u003e Interval Double",
          "source": "src/Numeric-Interval.html#idouble",
          "type": "function"
        },
        "index": {
          "description": "id function Useful for type specification idouble idouble Interval Double",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "idouble",
          "normalized": "Interval Double-\u003eInterval Double",
          "package": "intervals",
          "signature": "Interval Double-\u003eInterval Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:idouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid function. Useful for type specification\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t ifloat (1 ... 3)\n\u003c/code\u003e\u003c/strong\u003eifloat (1 ... 3) :: Interval Float\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "ifloat",
          "package": "intervals",
          "signature": "Interval Float -\u003e Interval Float",
          "source": "src/Numeric-Interval.html#ifloat",
          "type": "function"
        },
        "index": {
          "description": "id function Useful for type specification ifloat ifloat Interval Float",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "ifloat",
          "normalized": "Interval Float-\u003eInterval Float",
          "package": "intervals",
          "signature": "Interval Float-\u003eInterval Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:ifloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe infinumum (lower bound) of an interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003einf (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "inf",
          "package": "intervals",
          "signature": "Interval a -\u003e a",
          "source": "src/Numeric-Interval.html#inf",
          "type": "function"
        },
        "index": {
          "description": "The infinumum lower bound of an interval inf",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "inf",
          "normalized": "Interval a-\u003ea",
          "package": "intervals",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the intersection of two intervals.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintersection (1 ... 10 :: Interval Double) (5 ... 15 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003e5.0 ... 10.0\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "intersection",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Interval a",
          "source": "src/Numeric-Interval.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Calculate the intersection of two intervals intersection Interval Double Interval Double",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "intersection",
          "normalized": "Interval a-\u003eInterval a-\u003eInterval a",
          "package": "intervals",
          "signature": "Interval a-\u003eInterval a-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipped version of \u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e. Check if interval \u003ccode\u003eX\u003c/code\u003e a subset of interval \u003ccode\u003eY\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(25 ... 35 :: Interval Double) `isSubsetOf` (20 ... 40 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(20 ... 40 :: Interval Double) `isSubsetOf` (15 ... 35 :: Interval Double)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "isSubsetOf",
          "package": "intervals",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "description": "Flipped version of contains Check if interval subset of interval Interval Double isSubsetOf Interval Double True Interval Double isSubsetOf Interval Double False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "isSubsetOf",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "partial": "Subset Of",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMagnitude\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emagnitude (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e20\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emagnitude (-20 ... 10)\n\u003c/code\u003e\u003c/strong\u003e20\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emagnitude (singleton 5)\n\u003c/code\u003e\u003c/strong\u003e5\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "magnitude",
          "package": "intervals",
          "signature": "Interval a -\u003e a",
          "source": "src/Numeric-Interval.html#magnitude",
          "type": "function"
        },
        "index": {
          "description": "Magnitude magnitude magnitude magnitude singleton",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "magnitude",
          "normalized": "Interval a-\u003ea",
          "package": "intervals",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNearest point to the midpoint of the interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emidpoint (10.0 ... 20.0)\n\u003c/code\u003e\u003c/strong\u003e15.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emidpoint (singleton 5.0)\n\u003c/code\u003e\u003c/strong\u003e5.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emidpoint empty\n\u003c/code\u003e\u003c/strong\u003eNaN\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "midpoint",
          "package": "intervals",
          "signature": "Interval a -\u003e a",
          "source": "src/Numeric-Interval.html#midpoint",
          "type": "function"
        },
        "index": {
          "description": "Nearest point to the midpoint of the interval midpoint midpoint singleton midpoint empty NaN",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "midpoint",
          "normalized": "Interval a-\u003ea",
          "package": "intervals",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:midpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"mignitude\"\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emignitude (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emignitude (-20 ... 10)\n\u003c/code\u003e\u003c/strong\u003e10\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emignitude (singleton 5)\n\u003c/code\u003e\u003c/strong\u003e5\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "mignitude",
          "package": "intervals",
          "signature": "Interval a -\u003e a",
          "source": "src/Numeric-Interval.html#mignitude",
          "type": "function"
        },
        "index": {
          "description": "mignitude mignitude mignitude mignitude singleton",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "mignitude",
          "normalized": "Interval a-\u003ea",
          "package": "intervals",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:mignitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a point is not included in the interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enotElem 8 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enotElem 1.4 (1.0 ... 5.0)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cp\u003eAnd of course, nothing is a member of the empty interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enotElem 5 empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "notElem",
          "package": "intervals",
          "signature": "a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "Determine if point is not included in the interval notElem True notElem False And of course nothing is member of the empty interval notElem empty True",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "notElem",
          "normalized": "a-\u003eInterval a-\u003eBool",
          "package": "intervals",
          "partial": "Elem",
          "signature": "a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enegation handles NaN properly\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull (1 ... 5)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull (1 ... 1)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enull empty\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "null",
          "package": "intervals",
          "signature": "Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#null",
          "type": "function"
        },
        "index": {
          "description": "negation handles NaN properly null False null False null empty True",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "null",
          "normalized": "Interval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes there exist an \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003eX\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003eY\u003c/code\u003e such that \u003ccode\u003ex \u003ccode\u003eop\u003c/code\u003e y\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Numeric.Interval",
          "name": "possibly",
          "package": "intervals",
          "signature": "b -\u003e b -\u003e Bool) -\u003e Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#possibly",
          "type": "function"
        },
        "index": {
          "description": "Does there exist an in in such that op",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "possibly",
          "normalized": "a-\u003ea-\u003eBool)-\u003eInterval b-\u003eInterval b-\u003eBool",
          "package": "intervals",
          "signature": "b-\u003eb-\u003eBool)-\u003eInterval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:possibly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA singleton point\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingleton 1\n\u003c/code\u003e\u003c/strong\u003e1 ... 1\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "singleton",
          "package": "intervals",
          "signature": "a -\u003e Interval a",
          "source": "src/Numeric-Interval.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "singleton point singleton",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "singleton",
          "normalized": "a-\u003eInterval a",
          "package": "intervals",
          "signature": "a-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the interval a singleton point?\n N.B. This is fairly fragile and likely will not hold after\n even a few operations that only involve singletons\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingular (singleton 1)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esingular (1.0 ... 20.0)\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "singular",
          "package": "intervals",
          "signature": "Interval a -\u003e Bool",
          "source": "src/Numeric-Interval.html#singular",
          "type": "function"
        },
        "index": {
          "description": "Is the interval singleton point N.B This is fairly fragile and likely will not hold after even few operations that only involve singletons singular singleton True singular False",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "singular",
          "normalized": "Interval a-\u003eBool",
          "package": "intervals",
          "signature": "Interval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:singular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supremum (upper bound) of an interval\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esup (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e20\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "sup",
          "package": "intervals",
          "signature": "Interval a -\u003e a",
          "source": "src/Numeric-Interval.html#sup",
          "type": "function"
        },
        "index": {
          "description": "The supremum upper bound of an interval sup",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "sup",
          "normalized": "Interval a-\u003ea",
          "package": "intervals",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe whole real number line\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewhole\n\u003c/code\u003e\u003c/strong\u003e-Infinity ... Infinity\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "whole",
          "package": "intervals",
          "signature": "Interval a",
          "source": "src/Numeric-Interval.html#whole",
          "type": "function"
        },
        "index": {
          "description": "The whole real number line whole Infinity Infinity",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "whole",
          "package": "intervals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:whole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the width of an interval.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewidth (1 ... 20)\n\u003c/code\u003e\u003c/strong\u003e19\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewidth (singleton 1)\n\u003c/code\u003e\u003c/strong\u003e0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewidth empty\n\u003c/code\u003e\u003c/strong\u003eNaN\n\u003c/pre\u003e",
          "module": "Numeric.Interval",
          "name": "width",
          "package": "intervals",
          "signature": "Interval a -\u003e a",
          "source": "src/Numeric-Interval.html#width",
          "type": "function"
        },
        "index": {
          "description": "Calculate the width of an interval width width singleton width empty NaN",
          "hierarchy": "Numeric Interval",
          "module": "Numeric.Interval",
          "name": "width",
          "normalized": "Interval a-\u003ea",
          "package": "intervals",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/intervals/docs/Numeric-Interval.html#v:width"
      }
    }
  ]
]