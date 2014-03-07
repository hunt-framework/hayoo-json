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
        "word": "not-in-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.List",
          "name": "List",
          "package": "not-in-base",
          "source": "src/NIB-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NIB List",
          "module": "NIB.List",
          "name": "List",
          "package": "not-in-base",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert first element in list\n\u003c/p\u003e\u003cpre\u003e convertFirst (toUpper) \"fO0\" == \"FO0\"\n\u003c/pre\u003e",
          "module": "NIB.List",
          "name": "convertFirst",
          "package": "not-in-base",
          "signature": "(a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/NIB-List.html#convertFirst",
          "type": "function"
        },
        "index": {
          "description": "Convert first element in list convertFirst toUpper fO0 FO0",
          "hierarchy": "NIB List",
          "module": "NIB.List",
          "name": "convertFirst",
          "normalized": "(a-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "not-in-base",
          "partial": "First",
          "signature": "(a-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#v:convertFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a list \u003ccode\u003ex\u003c/code\u003e of \u003ccode\u003ea\u003c/code\u003e into a list of lists of \u003ccode\u003ea\u003c/code\u003e at every \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  \"splitBy \"foo,bar\" \"',' == [\"foo\",\"bar\"] ' \n\u003c/pre\u003e",
          "module": "NIB.List",
          "name": "splitBy",
          "package": "not-in-base",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/NIB-List.html#splitBy",
          "type": "function"
        },
        "index": {
          "description": "Splits list of into list of lists of at every splitBy foo bar foo bar",
          "hierarchy": "NIB List",
          "module": "NIB.List",
          "name": "splitBy",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "not-in-base",
          "partial": "By",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#v:splitBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrims every element satisfying \u003ccode\u003ec\u003c/code\u003e from the beginning or end of the list.\n\u003c/p\u003e\u003cpre\u003e trim (==' ') \"  foo   \" == \"foo\"\n\u003c/pre\u003e",
          "module": "NIB.List",
          "name": "trim",
          "package": "not-in-base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/NIB-List.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Trims every element satisfying from the beginning or end of the list trim foo foo",
          "hierarchy": "NIB List",
          "module": "NIB.List",
          "name": "trim",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "not-in-base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-List.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.Pointfree",
          "name": "Pointfree",
          "package": "not-in-base",
          "source": "src/NIB-Pointfree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "Pointfree",
          "package": "not-in-base",
          "partial": "Pointfree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLambdifies '(||)'.\n\u003c/p\u003e\u003cpre\u003e isBlankOrCommaChecker = (==' ') ||* (==',')\n isBlankOrComma = isBlankOrCommaChecker 'j'\n\u003c/pre\u003e",
          "module": "NIB.Pointfree",
          "name": "(||*)",
          "package": "not-in-base",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/NIB-Pointfree.html#%7C%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "Lambdifies isBlankOrCommaChecker isBlankOrComma isBlankOrCommaChecker",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(||*) ||*",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
          "package": "not-in-base",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-124--124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLambdifies '(&&)'.\n\u003c/p\u003e\u003cpre\u003e isInRangeChecker = (\u003e9) &&* (\u003c30)\n isInRange = isInRangeChecker 17\n\u003c/pre\u003e",
          "module": "NIB.Pointfree",
          "name": "(&&*)",
          "package": "not-in-base",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e a -\u003e Bool",
          "source": "src/NIB-Pointfree.html#%26%26%2A",
          "type": "function"
        },
        "index": {
          "description": "Lambdifies isInRangeChecker isInRange isInRangeChecker",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(&&*) &&*",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
          "package": "not-in-base",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-38--38--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePipes a monadic return through a non-monadic transformation function.\n | liftM with arguments flipped.\n\u003c/p\u003e\u003cpre\u003e readIO \u003e\u003e* toUpper\n\u003c/pre\u003e",
          "module": "NIB.Pointfree",
          "name": "(\u003e\u003e*)",
          "package": "not-in-base",
          "signature": "m a -\u003e (a -\u003e b) -\u003e m b",
          "source": "src/NIB-Pointfree.html#%3E%3E%2A",
          "type": "function"
        },
        "index": {
          "description": "Pipes monadic return through non-monadic transformation function liftM with arguments flipped readIO toUpper",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(\u003e\u003e*) \u003e\u003e*",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "not-in-base",
          "signature": "m a-\u003e(a-\u003eb)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-62--62--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2-point-free operator. Similar to \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, but where\n | the second function takes two (2) arguments instead of one (1).\n\u003c/p\u003e\u003cpre\u003e multAndSquare (^2) .^.. (*)\n 36 == multAndSqare 2 3\n\u003c/pre\u003e",
          "module": "NIB.Pointfree",
          "name": "(^..)",
          "package": "not-in-base",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/NIB-Pointfree.html#%5E..",
          "type": "function"
        },
        "index": {
          "description": "point-free operator Similar to but where the second function takes two arguments instead of one multAndSquare multAndSqare",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(^..) ^..",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "not-in-base",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-94-.."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3-point-free operator. See '(^..)'.\n\u003c/p\u003e",
          "module": "NIB.Pointfree",
          "name": "(^...)",
          "package": "not-in-base",
          "signature": "(d -\u003e e) -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e e",
          "source": "src/NIB-Pointfree.html#%5E...",
          "type": "function"
        },
        "index": {
          "description": "point-free operator See",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(^...) ^...",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ee-\u003ea)-\u003ec-\u003ed-\u003ee-\u003eb",
          "package": "not-in-base",
          "signature": "(d-\u003ee)-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:-94-..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a 2-tuple \u003ccode\u003ex\u003c/code\u003e into a 2-stack and pass it to \u003ccode\u003ef\u003c/code\u003e.\n | The same as uncurry.\n\u003c/p\u003e",
          "module": "NIB.Pointfree",
          "name": "(..%)",
          "package": "not-in-base",
          "signature": "(a -\u003e b -\u003e c) -\u003e (a, b) -\u003e c",
          "source": "src/NIB-Pointfree.html#..%25",
          "type": "function"
        },
        "index": {
          "description": "Split tuple into stack and pass it to The same as uncurry",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(..%) ..%",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "package": "not-in-base",
          "signature": "(a-\u003eb-\u003ec)-\u003e(a,b)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:..-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.Pointfree",
          "name": "(..%..)",
          "package": "not-in-base",
          "signature": "(c -\u003e d -\u003e e) -\u003e (a -\u003e b -\u003e (c, d)) -\u003e a -\u003e b -\u003e e",
          "source": "src/NIB-Pointfree.html#..%25..",
          "type": "function"
        },
        "index": {
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(..%..) ..%..",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ee-\u003e(a,b))-\u003ed-\u003ee-\u003ec",
          "package": "not-in-base",
          "signature": "(c-\u003ed-\u003ee)-\u003e(a-\u003eb-\u003e(c,d))-\u003ea-\u003eb-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:..-37-.."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egives `(9, 21)`, i.e. `(2 + 9, 3 * 7)`.\n\u003c/p\u003e",
          "module": "NIB.Pointfree",
          "name": "(..@)",
          "package": "not-in-base",
          "signature": "(a -\u003e b, a -\u003e c) -\u003e a -\u003e (b, c)",
          "source": "src/NIB-Pointfree.html#..%40",
          "type": "function"
        },
        "index": {
          "description": "gives i.e",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(..@) ..@",
          "normalized": "(a-\u003eb,a-\u003ec)-\u003ea-\u003e(b,c)",
          "package": "not-in-base",
          "signature": "(a-\u003eb,a-\u003ec)-\u003ea-\u003e(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:..-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a 3-tuple \u003ccode\u003ex\u003c/code\u003e into a 3-stack and pass it to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NIB.Pointfree",
          "name": "(...%)",
          "package": "not-in-base",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (a, b, c) -\u003e d",
          "source": "src/NIB-Pointfree.html#...%25",
          "type": "function"
        },
        "index": {
          "description": "Split tuple into stack and pass it to",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(...%) ...%",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed",
          "package": "not-in-base",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:...-37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e..@\u003c/a\u003e\u003c/code\u003e, but with a 3-tuple. \n\u003c/p\u003e",
          "module": "NIB.Pointfree",
          "name": "(...@)",
          "package": "not-in-base",
          "signature": "(a -\u003e b, a -\u003e c, a -\u003e d) -\u003e a -\u003e (b, c, d)",
          "source": "src/NIB-Pointfree.html#...%40",
          "type": "function"
        },
        "index": {
          "description": "Same as but with tuple",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "(...@) ...@",
          "normalized": "(a-\u003eb,a-\u003ec,a-\u003ed)-\u003ea-\u003e(b,c,d)",
          "package": "not-in-base",
          "signature": "(a-\u003eb,a-\u003ec,a-\u003ed)-\u003ea-\u003e(b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:...-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.Pointfree",
          "name": "fst3",
          "package": "not-in-base",
          "signature": "(a, b, c) -\u003e a",
          "source": "src/NIB-Pointfree.html#fst3",
          "type": "function"
        },
        "index": {
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "fst3",
          "normalized": "(a,b,c)-\u003ea",
          "package": "not-in-base",
          "signature": "(a,b,c)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:fst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLambdifies a function. See '(||*)' and '(&&*)' for uses of \u003ccode\u003e\u003ca\u003elambdify\u003c/a\u003e\u003c/code\u003e.\n | Used in order to make operators capable of operating on functions that later on\n | are supplied some value that all functions operate on.\n\u003c/p\u003e\u003cpre\u003e (+*) = lambdify (+)\n fourTwo = (*4) +* (*2)\n 42 == fourTwo 7\n\u003c/pre\u003e",
          "module": "NIB.Pointfree",
          "name": "lambdify",
          "package": "not-in-base",
          "signature": "(x -\u003e y -\u003e z) -\u003e (t -\u003e x) -\u003e (t -\u003e y) -\u003e t -\u003e z",
          "source": "src/NIB-Pointfree.html#lambdify",
          "type": "function"
        },
        "index": {
          "description": "Lambdifies function See and for uses of lambdify Used in order to make operators capable of operating on functions that later on are supplied some value that all functions operate on lambdify fourTwo fourTwo",
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "lambdify",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "not-in-base",
          "signature": "(x-\u003ey-\u003ez)-\u003e(t-\u003ex)-\u003e(t-\u003ey)-\u003et-\u003ez",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:lambdify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.Pointfree",
          "name": "snd3",
          "package": "not-in-base",
          "signature": "(a, b, c) -\u003e b",
          "source": "src/NIB-Pointfree.html#snd3",
          "type": "function"
        },
        "index": {
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "snd3",
          "normalized": "(a,b,c)-\u003eb",
          "package": "not-in-base",
          "signature": "(a,b,c)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:snd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.Pointfree",
          "name": "trd3",
          "package": "not-in-base",
          "signature": "(a, b, c) -\u003e c",
          "source": "src/NIB-Pointfree.html#trd3",
          "type": "function"
        },
        "index": {
          "hierarchy": "NIB Pointfree",
          "module": "NIB.Pointfree",
          "name": "trd3",
          "normalized": "(a,b,c)-\u003ec",
          "package": "not-in-base",
          "signature": "(a,b,c)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-Pointfree.html#v:trd3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains useful generic functions not found elsewhere.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NIB.String",
          "name": "String",
          "package": "not-in-base",
          "source": "src/NIB-String.html",
          "type": "module"
        },
        "index": {
          "description": "Contains useful generic functions not found elsewhere",
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "String",
          "package": "not-in-base",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.String",
          "name": "ToString",
          "package": "not-in-base",
          "source": "src/NIB-String.html#ToString",
          "type": "class"
        },
        "index": {
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "ToString",
          "package": "not-in-base",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert first character in String to lower.\n\u003c/p\u003e\u003cpre\u003e lowerFirst \"Foo\" == \"foo\"\n lowerFirst \"BaR\" == \"baR\"\n lowerFirst \"g0O\" == \"g0O\".'\n\u003c/pre\u003e",
          "module": "NIB.String",
          "name": "lowerFirst",
          "package": "not-in-base",
          "signature": "String -\u003e String",
          "source": "src/NIB-String.html#lowerFirst",
          "type": "function"
        },
        "index": {
          "description": "Convert first character in String to lower lowerFirst Foo foo lowerFirst BaR baR lowerFirst g0O g0O",
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "lowerFirst",
          "normalized": "String-\u003eString",
          "package": "not-in-base",
          "partial": "First",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:lowerFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all line breaks in a string\n\u003c/p\u003e\u003cpre\u003e \"testtest\" == removeBreak \"test\\n\\rtest\\r\"\n\u003c/pre\u003e",
          "module": "NIB.String",
          "name": "removeBreak",
          "package": "not-in-base",
          "signature": "String -\u003e String",
          "source": "src/NIB-String.html#removeBreak",
          "type": "function"
        },
        "index": {
          "description": "Remove all line breaks in string testtest removeBreak test rtest",
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "removeBreak",
          "normalized": "String-\u003eString",
          "package": "not-in-base",
          "partial": "Break",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:removeBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert every space (' ') in a string to a blank ('_') instead. \n\u003c/p\u003e\u003cpre\u003e spaceToBlank \" \" == \"_\"\n spaceToBlank \" foo  \" == \"_foo__\"\n spaceToBlank \"b a r\" == \"b_a_r\"\n\u003c/pre\u003e",
          "module": "NIB.String",
          "name": "spaceToBlank",
          "package": "not-in-base",
          "signature": "String -\u003e String",
          "source": "src/NIB-String.html#spaceToBlank",
          "type": "function"
        },
        "index": {
          "description": "Convert every space in string to blank instead spaceToBlank spaceToBlank foo foo spaceToBlank",
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "spaceToBlank",
          "normalized": "String-\u003eString",
          "package": "not-in-base",
          "partial": "To Blank",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:spaceToBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NIB.String",
          "name": "toString",
          "package": "not-in-base",
          "signature": "a -\u003e String",
          "source": "src/NIB-String.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "not-in-base",
          "partial": "String",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrims whitespace from the beginning or end.\n\u003c/p\u003e\u003cpre\u003e trimWs \"  foo  \" == \"foo\"\n\u003c/pre\u003e",
          "module": "NIB.String",
          "name": "trimWs",
          "package": "not-in-base",
          "signature": "String -\u003e String",
          "source": "src/NIB-String.html#trimWs",
          "type": "function"
        },
        "index": {
          "description": "Trims whitespace from the beginning or end trimWs foo foo",
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "trimWs",
          "normalized": "String-\u003eString",
          "package": "not-in-base",
          "partial": "Ws",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:trimWs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert first character in String to upper.\n\u003c/p\u003e\u003cpre\u003e upperFirst \"foo\" == \"Foo\"\n upperFirst \"bAr\" == \"BAr\"\n upperFirst \"G0O\" == \"G0O\".'\n\u003c/pre\u003e",
          "module": "NIB.String",
          "name": "upperFirst",
          "package": "not-in-base",
          "signature": "String -\u003e String",
          "source": "src/NIB-String.html#upperFirst",
          "type": "function"
        },
        "index": {
          "description": "Convert first character in String to upper upperFirst foo Foo upperFirst bAr BAr upperFirst G0O G0O",
          "hierarchy": "NIB String",
          "module": "NIB.String",
          "name": "upperFirst",
          "normalized": "String-\u003eString",
          "package": "not-in-base",
          "partial": "First",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/not-in-base/docs/NIB-String.html#v:upperFirst"
      }
    }
  ]
]