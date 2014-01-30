[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#",
      "description": {
        "fct-module": "NIB.List",
        "fct-package": "not-in-base",
        "fct-signature": "module",
        "fct-source": "src/NIB-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB List",
        "module": "NIB.List",
        "name": "List",
        "normalized": "",
        "package": "not-in-base",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#v:convertFirst",
      "description": {
        "fct-descr": "\u003cp\u003eConvert first element in list\n\u003c/p\u003e\u003cpre\u003e convertFirst (toUpper) \"fO0\" == \"FO0\"\n\u003c/pre\u003e",
        "fct-module": "NIB.List",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/NIB-List.html#convertFirst",
        "fct-type": "function",
        "title": "convertFirst"
      },
      "index": {
        "description": "Convert first element in list convertFirst toUpper fO0 FO0",
        "hierarchy": "NIB List",
        "module": "NIB.List",
        "name": "convertFirst",
        "normalized": "(a-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "not-in-base",
        "partial": "First",
        "signature": "(a-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#v:splitBy",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a list \u003ccode\u003ex\u003c/code\u003e of \u003ccode\u003ea\u003c/code\u003e into a list of lists of \u003ccode\u003ea\u003c/code\u003e at every \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  \"splitBy \"foo,bar\" \"',' == [\"foo\",\"bar\"] ' \n\u003c/pre\u003e",
        "fct-module": "NIB.List",
        "fct-package": "not-in-base",
        "fct-signature": "a -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/NIB-List.html#splitBy",
        "fct-type": "function",
        "title": "splitBy"
      },
      "index": {
        "description": "Splits list of into list of lists of at every splitBy foo bar foo bar",
        "hierarchy": "NIB List",
        "module": "NIB.List",
        "name": "splitBy",
        "normalized": "a-\u003e[a]-\u003e[[a]]",
        "package": "not-in-base",
        "partial": "By",
        "signature": "a-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eTrims every element satisfying \u003ccode\u003ec\u003c/code\u003e from the beginning or end of the list.\n\u003c/p\u003e\u003cpre\u003e trim (==' ') \"  foo   \" == \"foo\"\n\u003c/pre\u003e",
        "fct-module": "NIB.List",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
        "fct-source": "src/NIB-List.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Trims every element satisfying from the beginning or end of the list trim foo foo",
        "hierarchy": "NIB List",
        "module": "NIB.List",
        "name": "trim",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#",
      "description": {
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "module",
        "fct-source": "src/NIB-Pointfree.html",
        "fct-type": "module",
        "title": "Pointfree"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "Pointfree",
        "normalized": "",
        "package": "not-in-base",
        "partial": "Pointfree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-124--124--42-",
      "description": {
        "fct-descr": "\u003cp\u003eLambdifies '(||)'.\n\u003c/p\u003e\u003cpre\u003e isBlankOrCommaChecker = (==' ') ||* (==',')\n isBlankOrComma = isBlankOrCommaChecker 'j'\n\u003c/pre\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e a -\u003e Bool",
        "fct-source": "src/NIB-Pointfree.html#%7C%7C%2A",
        "fct-type": "function",
        "title": "(||*)"
      },
      "index": {
        "description": "Lambdifies isBlankOrCommaChecker isBlankOrComma isBlankOrCommaChecker",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(||*) ||*",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-38--38--42-",
      "description": {
        "fct-descr": "\u003cp\u003eLambdifies '(&&)'.\n\u003c/p\u003e\u003cpre\u003e isInRangeChecker = (\u003e9) &&* (\u003c30)\n isInRange = isInRangeChecker 17\n\u003c/pre\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e a -\u003e Bool",
        "fct-source": "src/NIB-Pointfree.html#%26%26%2A",
        "fct-type": "function",
        "title": "(&&*)"
      },
      "index": {
        "description": "Lambdifies isInRangeChecker isInRange isInRangeChecker",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(&&*) &&*",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-62--62--42-",
      "description": {
        "fct-descr": "\u003cp\u003ePipes a monadic return through a non-monadic transformation function.\n | liftM with arguments flipped.\n\u003c/p\u003e\u003cpre\u003e readIO \u003e\u003e* toUpper\n\u003c/pre\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "m a -\u003e (a -\u003e b) -\u003e m b",
        "fct-source": "src/NIB-Pointfree.html#%3E%3E%2A",
        "fct-type": "function",
        "title": "(\u003e\u003e*)"
      },
      "index": {
        "description": "Pipes monadic return through non-monadic transformation function liftM with arguments flipped readIO toUpper",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(\u003e\u003e*) \u003e\u003e*",
        "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
        "package": "not-in-base",
        "partial": "",
        "signature": "m a-\u003e(a-\u003eb)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-94-..",
      "description": {
        "fct-descr": "\u003cp\u003e2-point-free operator. Similar to \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, but where\n | the second function takes two (2) arguments instead of one (1).\n\u003c/p\u003e\u003cpre\u003e multAndSquare (^2) .^.. (*)\n 36 == multAndSqare 2 3\n\u003c/pre\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
        "fct-source": "src/NIB-Pointfree.html#%5E..",
        "fct-type": "function",
        "title": "(^..)"
      },
      "index": {
        "description": "point-free operator Similar to but where the second function takes two arguments instead of one multAndSquare multAndSqare",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(^..) ^..",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
        "package": "not-in-base",
        "partial": "",
        "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-94-...",
      "description": {
        "fct-descr": "\u003cp\u003e3-point-free operator. See '(^..)'.\n\u003c/p\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
        "fct-source": "src/NIB-Pointfree.html#%5E...",
        "fct-type": "function",
        "title": "(^...)"
      },
      "index": {
        "description": "point-free operator See",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(^...) ^...",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
        "package": "not-in-base",
        "partial": "",
        "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:..-37-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a 2-tuple \u003ccode\u003ex\u003c/code\u003e into a 2-stack and pass it to \u003ccode\u003ef\u003c/code\u003e.\n | The same as uncurry.\n\u003c/p\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
        "fct-source": "src/NIB-Pointfree.html#..%25",
        "fct-type": "function",
        "title": "(..%)"
      },
      "index": {
        "description": "Split tuple into stack and pass it to The same as uncurry",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(..%) ..%",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:..-37-..",
      "description": {
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(c -\u003e d -\u003e e) -\u003e (a -\u003e b -\u003e (c, d)) -\u003e a -\u003e b -\u003e e",
        "fct-source": "src/NIB-Pointfree.html#..%25..",
        "fct-type": "function",
        "title": "(..%..)"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(..%..) ..%..",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003e(a,b))-\u003ed-\u003ee-\u003ec",
        "package": "not-in-base",
        "partial": "",
        "signature": "(c-\u003ed-\u003ee)-\u003e(a-\u003eb-\u003e(c,d))-\u003ea-\u003eb-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:..-64-",
      "description": {
        "fct-descr": "\u003cp\u003egives `(9, 21)`, i.e. `(2 + 9, 3 * 7)`.\n\u003c/p\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e b, a -\u003e c) -\u003e a -\u003e (b, c)",
        "fct-source": "src/NIB-Pointfree.html#..%40",
        "fct-type": "function",
        "title": "(..@)"
      },
      "index": {
        "description": "gives i.e",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(..@) ..@",
        "normalized": "(a-\u003eb,a-\u003ec)-\u003ea-\u003e(b,c)",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eb,a-\u003ec)-\u003ea-\u003e(b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:...-37-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a 3-tuple \u003ccode\u003ex\u003c/code\u003e into a 3-stack and pass it to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (a, b, c) -\u003e d",
        "fct-source": "src/NIB-Pointfree.html#...%25",
        "fct-type": "function",
        "title": "(...%)"
      },
      "index": {
        "description": "Split tuple into stack and pass it to",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(...%) ...%",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:...-64-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e..@\u003c/a\u003e\u003c/code\u003e, but with a 3-tuple. \n\u003c/p\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a -\u003e b, a -\u003e c, a -\u003e d) -\u003e a -\u003e (b, c, d)",
        "fct-source": "src/NIB-Pointfree.html#...%40",
        "fct-type": "function",
        "title": "(...@)"
      },
      "index": {
        "description": "Same as but with tuple",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "(...@) ...@",
        "normalized": "(a-\u003eb,a-\u003ec,a-\u003ed)-\u003ea-\u003e(b,c,d)",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a-\u003eb,a-\u003ec,a-\u003ed)-\u003ea-\u003e(b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:fst3",
      "description": {
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a, b, c) -\u003e a",
        "fct-source": "src/NIB-Pointfree.html#fst3",
        "fct-type": "function",
        "title": "fst3"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "fst3",
        "normalized": "(a,b,c)-\u003ea",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a,b,c)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:lambdify",
      "description": {
        "fct-descr": "\u003cp\u003eLambdifies a function. See '(||*)' and '(&&*)' for uses of \u003ccode\u003e\u003ca\u003elambdify\u003c/a\u003e\u003c/code\u003e.\n | Used in order to make operators capable of operating on functions that later on\n | are supplied some value that all functions operate on.\n\u003c/p\u003e\u003cpre\u003e (+*) = lambdify (+)\n fourTwo = (*4) +* (*2)\n 42 == fourTwo 7\n\u003c/pre\u003e",
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(x -\u003e y -\u003e z) -\u003e (t -\u003e x) -\u003e (t -\u003e y) -\u003e t -\u003e z",
        "fct-source": "src/NIB-Pointfree.html#lambdify",
        "fct-type": "function",
        "title": "lambdify"
      },
      "index": {
        "description": "Lambdifies function See and for uses of lambdify Used in order to make operators capable of operating on functions that later on are supplied some value that all functions operate on lambdify fourTwo fourTwo",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "lambdify",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
        "package": "not-in-base",
        "partial": "",
        "signature": "(x-\u003ey-\u003ez)-\u003e(t-\u003ex)-\u003e(t-\u003ey)-\u003et-\u003ez"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:snd3",
      "description": {
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a, b, c) -\u003e b",
        "fct-source": "src/NIB-Pointfree.html#snd3",
        "fct-type": "function",
        "title": "snd3"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "snd3",
        "normalized": "(a,b,c)-\u003eb",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a,b,c)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:trd3",
      "description": {
        "fct-module": "NIB.Pointfree",
        "fct-package": "not-in-base",
        "fct-signature": "(a, b, c) -\u003e c",
        "fct-source": "src/NIB-Pointfree.html#trd3",
        "fct-type": "function",
        "title": "trd3"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB Pointfree",
        "module": "NIB.Pointfree",
        "name": "trd3",
        "normalized": "(a,b,c)-\u003ec",
        "package": "not-in-base",
        "partial": "",
        "signature": "(a,b,c)-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains useful generic functions not found elsewhere.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "module",
        "fct-source": "src/NIB-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "Contains useful generic functions not found elsewhere",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "String",
        "normalized": "",
        "package": "not-in-base",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#t:ToString",
      "description": {
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "class",
        "fct-source": "src/NIB-String.html#ToString",
        "fct-type": "class",
        "title": "ToString"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "ToString",
        "normalized": "",
        "package": "not-in-base",
        "partial": "To String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:lowerFirst",
      "description": {
        "fct-descr": "\u003cp\u003eConvert first character in String to lower.\n\u003c/p\u003e\u003cpre\u003e lowerFirst \"Foo\" == \"foo\"\n lowerFirst \"BaR\" == \"baR\"\n lowerFirst \"g0O\" == \"g0O\".'\n\u003c/pre\u003e",
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/NIB-String.html#lowerFirst",
        "fct-type": "function",
        "title": "lowerFirst"
      },
      "index": {
        "description": "Convert first character in String to lower lowerFirst Foo foo lowerFirst BaR baR lowerFirst g0O g0O",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "lowerFirst",
        "normalized": "String-\u003eString",
        "package": "not-in-base",
        "partial": "First",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:removeBreak",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all line breaks in a string\n\u003c/p\u003e\u003cpre\u003e \"testtest\" == removeBreak \"test\\n\\rtest\\r\"\n\u003c/pre\u003e",
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/NIB-String.html#removeBreak",
        "fct-type": "function",
        "title": "removeBreak"
      },
      "index": {
        "description": "Remove all line breaks in string testtest removeBreak test rtest",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "removeBreak",
        "normalized": "String-\u003eString",
        "package": "not-in-base",
        "partial": "Break",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:spaceToBlank",
      "description": {
        "fct-descr": "\u003cp\u003eConvert every space (' ') in a string to a blank ('_') instead. \n\u003c/p\u003e\u003cpre\u003e spaceToBlank \" \" == \"_\"\n spaceToBlank \" foo  \" == \"_foo__\"\n spaceToBlank \"b a r\" == \"b_a_r\"\n\u003c/pre\u003e",
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/NIB-String.html#spaceToBlank",
        "fct-type": "function",
        "title": "spaceToBlank"
      },
      "index": {
        "description": "Convert every space in string to blank instead spaceToBlank spaceToBlank foo foo spaceToBlank",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "spaceToBlank",
        "normalized": "String-\u003eString",
        "package": "not-in-base",
        "partial": "To Blank",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:toString",
      "description": {
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/NIB-String.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "not-in-base",
        "partial": "String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:trimWs",
      "description": {
        "fct-descr": "\u003cp\u003eTrims whitespace from the beginning or end.\n\u003c/p\u003e\u003cpre\u003e trimWs \"  foo  \" == \"foo\"\n\u003c/pre\u003e",
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/NIB-String.html#trimWs",
        "fct-type": "function",
        "title": "trimWs"
      },
      "index": {
        "description": "Trims whitespace from the beginning or end trimWs foo foo",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "trimWs",
        "normalized": "String-\u003eString",
        "package": "not-in-base",
        "partial": "Ws",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:upperFirst",
      "description": {
        "fct-descr": "\u003cp\u003eConvert first character in String to upper.\n\u003c/p\u003e\u003cpre\u003e upperFirst \"foo\" == \"Foo\"\n upperFirst \"bAr\" == \"BAr\"\n upperFirst \"G0O\" == \"G0O\".'\n\u003c/pre\u003e",
        "fct-module": "NIB.String",
        "fct-package": "not-in-base",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/NIB-String.html#upperFirst",
        "fct-type": "function",
        "title": "upperFirst"
      },
      "index": {
        "description": "Convert first character in String to upper upperFirst foo Foo upperFirst bAr BAr upperFirst G0O G0O",
        "hierarchy": "NIB String",
        "module": "NIB.String",
        "name": "upperFirst",
        "normalized": "String-\u003eString",
        "package": "not-in-base",
        "partial": "First",
        "signature": "String-\u003eString"
      }
    }
  }
]