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
        "word": "jsmw"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDOM extensions specific to JSMW\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DOM.JSMWExt",
          "name": "JSMWExt",
          "package": "jsmw",
          "source": "src/Data-DOM-JSMWExt.html",
          "type": "module"
        },
        "index": {
          "description": "DOM extensions specific to JSMW",
          "hierarchy": "Data DOM JSMWExt",
          "module": "Data.DOM.JSMWExt",
          "name": "JSMWExt",
          "package": "jsmw",
          "partial": "JSMWExt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-DOM-JSMWExt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd multiple children to a node. Unlike \u003ccode\u003e\u003ca\u003eaddChild\u003c/a\u003e\u003c/code\u003e, this function\n returns the parent element.\n\u003c/p\u003e",
          "module": "Data.DOM.JSMWExt",
          "name": "addChildren",
          "package": "jsmw",
          "signature": "[Expression c] -\u003e Expression p -\u003e JSMW e (Expression p)",
          "source": "src/Data-DOM-JSMWExt.html#addChildren",
          "type": "function"
        },
        "index": {
          "description": "Add multiple children to node Unlike addChild this function returns the parent element",
          "hierarchy": "Data DOM JSMWExt",
          "module": "Data.DOM.JSMWExt",
          "name": "addChildren",
          "normalized": "[Expression a]-\u003eExpression b-\u003eJSMW c(Expression b)",
          "package": "jsmw",
          "partial": "Children",
          "signature": "[Expression c]-\u003eExpression p-\u003eJSMW e(Expression p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-DOM-JSMWExt.html#v:addChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop up an alert window.\n\u003c/p\u003e",
          "module": "Data.DOM.JSMWExt",
          "name": "alert",
          "package": "jsmw",
          "signature": "Expression String -\u003e JSMW e (Expression ())",
          "source": "src/Data-DOM-JSMWExt.html#alert",
          "type": "function"
        },
        "index": {
          "description": "Pop up an alert window",
          "hierarchy": "Data DOM JSMWExt",
          "module": "Data.DOM.JSMWExt",
          "name": "alert",
          "normalized": "Expression String-\u003eJSMW a(Expression())",
          "package": "jsmw",
          "signature": "Expression String-\u003eJSMW e(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-DOM-JSMWExt.html#v:alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate window status line.\n\u003c/p\u003e",
          "module": "Data.DOM.JSMWExt",
          "name": "status",
          "package": "jsmw",
          "signature": "Expression String -\u003e JSMW e (Expression ())",
          "source": "src/Data-DOM-JSMWExt.html#status",
          "type": "function"
        },
        "index": {
          "description": "Update window status line",
          "hierarchy": "Data DOM JSMWExt",
          "module": "Data.DOM.JSMWExt",
          "name": "status",
          "normalized": "Expression String-\u003eJSMW a(Expression())",
          "package": "jsmw",
          "signature": "Expression String-\u003eJSMW e(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-DOM-JSMWExt.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable Javascript reference objects\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.JSRef",
          "name": "JSRef",
          "package": "jsmw",
          "source": "src/Data-JSRef.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable Javascript reference objects",
          "hierarchy": "Data JSRef",
          "module": "Data.JSRef",
          "name": "JSRef",
          "package": "jsmw",
          "partial": "JSRef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-JSRef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque data type parameterized by the type of the stored value.\n\u003c/p\u003e",
          "module": "Data.JSRef",
          "name": "JSRef",
          "package": "jsmw",
          "source": "src/Data-JSRef.html#JSRef",
          "type": "data"
        },
        "index": {
          "description": "An opaque data type parameterized by the type of the stored value",
          "hierarchy": "Data JSRef",
          "module": "Data.JSRef",
          "name": "JSRef",
          "package": "jsmw",
          "partial": "JSRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-JSRef.html#t:JSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a mutable Javascript reference object and initialize it.\n\u003c/p\u003e",
          "module": "Data.JSRef",
          "name": "newJSRef",
          "package": "jsmw",
          "signature": "Expression a -\u003e JSMW e (Expression (JSRef a))",
          "source": "src/Data-JSRef.html#newJSRef",
          "type": "function"
        },
        "index": {
          "description": "Create mutable Javascript reference object and initialize it",
          "hierarchy": "Data JSRef",
          "module": "Data.JSRef",
          "name": "newJSRef",
          "normalized": "Expression a-\u003eJSMW b(Expression(JSRef a))",
          "package": "jsmw",
          "partial": "JSRef",
          "signature": "Expression a-\u003eJSMW e(Expression(JSRef a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-JSRef.html#v:newJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a value from a mutable Javascript reference object.\n\u003c/p\u003e",
          "module": "Data.JSRef",
          "name": "readJSRef",
          "package": "jsmw",
          "signature": "Expression (JSRef a) -\u003e JSMW e (Expression a)",
          "source": "src/Data-JSRef.html#readJSRef",
          "type": "function"
        },
        "index": {
          "description": "Retrieve value from mutable Javascript reference object",
          "hierarchy": "Data JSRef",
          "module": "Data.JSRef",
          "name": "readJSRef",
          "normalized": "Expression(JSRef a)-\u003eJSMW b(Expression a)",
          "package": "jsmw",
          "partial": "JSRef",
          "signature": "Expression(JSRef a)-\u003eJSMW e(Expression a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-JSRef.html#v:readJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a value in a mutable Javascript reference object.\n\u003c/p\u003e",
          "module": "Data.JSRef",
          "name": "writeJSRef",
          "package": "jsmw",
          "signature": "Expression (JSRef a) -\u003e Expression a -\u003e JSMW e (Expression (JSRef a))",
          "source": "src/Data-JSRef.html#writeJSRef",
          "type": "function"
        },
        "index": {
          "description": "Store value in mutable Javascript reference object",
          "hierarchy": "Data JSRef",
          "module": "Data.JSRef",
          "name": "writeJSRef",
          "normalized": "Expression(JSRef a)-\u003eExpression a-\u003eJSMW b(Expression(JSRef a))",
          "package": "jsmw",
          "partial": "JSRef",
          "signature": "Expression(JSRef a)-\u003eExpression a-\u003eJSMW e(Expression(JSRef a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Data-JSRef.html#v:writeJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding of Javascript arithmetic and mathematic operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.JSMW.Arith",
          "name": "Arith",
          "package": "jsmw",
          "source": "src/Language-JSMW-Arith.html",
          "type": "module"
        },
        "index": {
          "description": "Encoding of Javascript arithmetic and mathematic operations",
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "Arith",
          "package": "jsmw",
          "partial": "Arith",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "(=/=)",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#%3D%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "(=/=) =/=",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:-61--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "(===)",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "(===) ===",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "eq",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#eq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "eq",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "ge",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#ge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "ge",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "gt",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#gt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "gt",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a given value is a number.\n\u003c/p\u003e",
          "module": "Language.JSMW.Arith",
          "name": "isNAN",
          "package": "jsmw",
          "signature": "Expression Double -\u003e JSMW e (Expression Bool)",
          "source": "src/Language-JSMW-Arith.html#isNAN",
          "type": "function"
        },
        "index": {
          "description": "Test if given value is number",
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "isNAN",
          "normalized": "Expression Double-\u003eJSMW a(Expression Bool)",
          "package": "jsmw",
          "partial": "NAN",
          "signature": "Expression Double-\u003eJSMW e(Expression Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:isNAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "land",
          "package": "jsmw",
          "signature": "Expression Bool -\u003e Expression Bool -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#land",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "land",
          "normalized": "Expression Bool-\u003eExpression Bool-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression Bool-\u003eExpression Bool-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:land"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "le",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "le",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "lor",
          "package": "jsmw",
          "signature": "Expression Bool -\u003e Expression Bool -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#lor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "lor",
          "normalized": "Expression Bool-\u003eExpression Bool-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression Bool-\u003eExpression Bool-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:lor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "lt",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#lt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "lt",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Arith",
          "name": "ne",
          "package": "jsmw",
          "signature": "Expression a -\u003e Expression a -\u003e Expression Bool",
          "source": "src/Language-JSMW-Arith.html#ne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "ne",
          "normalized": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "package": "jsmw",
          "signature": "Expression a-\u003eExpression a-\u003eExpression Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a floating point number.\n\u003c/p\u003e",
          "module": "Language.JSMW.Arith",
          "name": "parseFloat",
          "package": "jsmw",
          "signature": "Expression String -\u003e JSMW e (Expression Double)",
          "source": "src/Language-JSMW-Arith.html#parseFloat",
          "type": "function"
        },
        "index": {
          "description": "Parse floating point number",
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "parseFloat",
          "normalized": "Expression String-\u003eJSMW a(Expression Double)",
          "package": "jsmw",
          "partial": "Float",
          "signature": "Expression String-\u003eJSMW e(Expression Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:parseFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an integer.\n\u003c/p\u003e",
          "module": "Language.JSMW.Arith",
          "name": "parseInt",
          "package": "jsmw",
          "signature": "Expression String -\u003e Expression Double -\u003e JSMW e (Expression Double)",
          "source": "src/Language-JSMW-Arith.html#parseInt",
          "type": "function"
        },
        "index": {
          "description": "Parse an integer",
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "parseInt",
          "normalized": "Expression String-\u003eExpression Double-\u003eJSMW a(Expression Double)",
          "package": "jsmw",
          "partial": "Int",
          "signature": "Expression String-\u003eExpression Double-\u003eJSMW e(Expression Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:parseInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a string representation of an arbitrary Javascript expression.\n\u003c/p\u003e",
          "module": "Language.JSMW.Arith",
          "name": "toString",
          "package": "jsmw",
          "signature": "Expression a -\u003e JSMW e (Expression String)",
          "source": "src/Language-JSMW-Arith.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Obtain string representation of an arbitrary Javascript expression",
          "hierarchy": "Language JSMW Arith",
          "module": "Language.JSMW.Arith",
          "name": "toString",
          "normalized": "Expression a-\u003eJSMW b(Expression String)",
          "package": "jsmw",
          "partial": "String",
          "signature": "Expression a-\u003eJSMW e(Expression String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Arith.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding of Javascript conditionals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.JSMW.Cond",
          "name": "Cond",
          "package": "jsmw",
          "source": "src/Language-JSMW-Cond.html",
          "type": "module"
        },
        "index": {
          "description": "Encoding of Javascript conditionals",
          "hierarchy": "Language JSMW Cond",
          "module": "Language.JSMW.Cond",
          "name": "Cond",
          "package": "jsmw",
          "partial": "Cond",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Cond.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a case label. The first (left) argument is a literal describing\n the value of the label. Note that the left argument must be a Haskell\n literal, not a Javascript expression. In other words, for boolean labels,\n use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e. The second (right) argument is a JSMW monadic\n expression matching the label. \u003ccode\u003eBreak\u003c/code\u003e statements are inserted automatically\n (that is, fall-through case labels are not permitted).\n\u003c/p\u003e",
          "module": "Language.JSMW.Cond",
          "name": "(--\u003e)",
          "package": "jsmw",
          "signature": "s -\u003e JSMW c (Expression e) -\u003e Switch s r c e ()",
          "source": "src/Language-JSMW-Cond.html#--%3E",
          "type": "function"
        },
        "index": {
          "description": "Encode case label The first left argument is literal describing the value of the label Note that the left argument must be Haskell literal not Javascript expression In other words for boolean labels use True rather than true The second right argument is JSMW monadic expression matching the label Break statements are inserted automatically that is fall-through case labels are not permitted",
          "hierarchy": "Language JSMW Cond",
          "module": "Language.JSMW.Cond",
          "name": "(--\u003e) --\u003e",
          "normalized": "a-\u003eJSMW b(Expression c)-\u003eSwitch a d b c()",
          "package": "jsmw",
          "signature": "s-\u003eJSMW c(Expression e)-\u003eSwitch s r c e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Cond.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003edefault:\u003c/code\u003e case label, that is, what action should be taken if none\n of the case labels matches the scrutinee.\n\u003c/p\u003e\u003cp\u003eIn both \u003ccode\u003e\u003ca\u003enone\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e--\u003e\u003c/a\u003e\u003c/code\u003e, JSMW monadic expression should be of the same type.\n Also note that if no case label matches the scrutinee value, and no default\n label has been defined, an exception will be thrown showing the scrutinee\n name that did not match.\n\u003c/p\u003e",
          "module": "Language.JSMW.Cond",
          "name": "none",
          "package": "jsmw",
          "signature": "JSMW c (Expression e) -\u003e Switch s r c e ()",
          "source": "src/Language-JSMW-Cond.html#none",
          "type": "function"
        },
        "index": {
          "description": "Encode default case label that is what action should be taken if none of the case labels matches the scrutinee In both none and JSMW monadic expression should be of the same type Also note that if no case label matches the scrutinee value and no default label has been defined an exception will be thrown showing the scrutinee name that did not match",
          "hierarchy": "Language JSMW Cond",
          "module": "Language.JSMW.Cond",
          "name": "none",
          "normalized": "JSMW a(Expression b)-\u003eSwitch c d a b()",
          "package": "jsmw",
          "signature": "JSMW c(Expression e)-\u003eSwitch s r c e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Cond.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003eswitch\u003c/code\u003e statement.\n\u003c/p\u003e",
          "module": "Language.JSMW.Cond",
          "name": "switch",
          "package": "jsmw",
          "signature": "Expression r -\u003e Switch s r c e a -\u003e JSMW c (Expression e)",
          "source": "src/Language-JSMW-Cond.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Encode switch statement",
          "hierarchy": "Language JSMW Cond",
          "module": "Language.JSMW.Cond",
          "name": "switch",
          "normalized": "Expression a-\u003eSwitch b a c d e-\u003eJSMW c(Expression d)",
          "package": "jsmw",
          "signature": "Expression r-\u003eSwitch s r c e a-\u003eJSMW c(Expression e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Cond.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA special monad: the core of the Writer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.JSMW.Monad",
          "name": "Monad",
          "package": "jsmw",
          "source": "src/Language-JSMW-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "special monad the core of the Writer",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "Monad",
          "package": "jsmw",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for building inline style assignment expressions.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "CSSDeco",
          "package": "jsmw",
          "source": "src/Language-JSMW-Monad.html#CSSDeco",
          "type": "data"
        },
        "index": {
          "description": "Data type for building inline style assignment expressions",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "CSSDeco",
          "package": "jsmw",
          "partial": "CSSDeco",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#t:CSSDeco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of a function creating HTML elements, e. g. \u003ccode\u003emkButton\u003c/code\u003e, \u003ccode\u003emkDiv\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "ECRF",
          "package": "jsmw",
          "source": "src/Language-JSMW-Monad.html#ECRF",
          "type": "type"
        },
        "index": {
          "description": "Type of function creating HTML elements mkButton mkDiv",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "ECRF",
          "package": "jsmw",
          "partial": "ECRF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#t:ECRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of the writer: based on the \u003ccode\u003e\u003ca\u003eRWS\u003c/a\u003e\u003c/code\u003e Monad. The Reader part holds an expression\n to reference the curent HTML container element. The Writer part is the list of Javascript\n statements being formed. Container may be any DOM Element, but not a Text node \n or anything else.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "JSMW",
          "package": "jsmw",
          "source": "src/Language-JSMW-Monad.html#JSMW",
          "type": "type"
        },
        "index": {
          "description": "type of the writer based on the RWS Monad The Reader part holds an expression to reference the curent HTML container element The Writer part is the list of Javascript statements being formed Container may be any DOM Element but not Text node or anything else",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "JSMW",
          "package": "jsmw",
          "partial": "JSMW",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#t:JSMW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for a on-style event handler. It represents a function which\n takes an event and returns a boolean.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "OnHandler",
          "package": "jsmw",
          "source": "src/Language-JSMW-Monad.html#OnHandler",
          "type": "type"
        },
        "index": {
          "description": "type for on-style event handler It represents function which takes an event and returns boolean",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "OnHandler",
          "package": "jsmw",
          "partial": "On Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#t:OnHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JSMW.Monad",
          "name": ":=",
          "package": "jsmw",
          "signature": "String := String",
          "source": "src/Language-JSMW-Monad.html#CSSDeco",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": ":=",
          "package": "jsmw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "ask",
          "package": "jsmw",
          "signature": "m r",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "ask",
          "package": "jsmw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Javascript boolean literal out of a Boolean, monadic version.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "boolM",
          "package": "jsmw",
          "signature": "Bool -\u003e JSMW e (Expression Bool)",
          "source": "src/Language-JSMW-Monad.html#boolM",
          "type": "function"
        },
        "index": {
          "description": "Create Javascript boolean literal out of Boolean monadic version",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "boolM",
          "normalized": "Bool-\u003eJSMW a(Expression Bool)",
          "package": "jsmw",
          "signature": "Bool-\u003eJSMW e(Expression Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:boolM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a new container that in nested into the current one. As long as the container\n is active, all subsequently defined elements will be inserted into it. \n\u003c/p\u003e\u003cp\u003eExample: a Button with two text labels separated with a newline:\n\u003c/p\u003e\u003cpre\u003e\n   mkButton `container` (do\n     passive (mkText $ string \"Hello\") \n     passive mkBr\n     passive (mkText $ string \"GoodBye\"))\n\u003c/pre\u003e\u003cp\u003eEverything defined within a \u003ccode\u003edo\u003c/code\u003e expression is inserted into the button\n which is the new container.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "container",
          "package": "jsmw",
          "signature": "ECRF e n-\u003e JSMW n (Expression x)-\u003e JSMW e (Expression ())",
          "type": "function"
        },
        "index": {
          "description": "Specify new container that in nested into the current one As long as the container is active all subsequently defined elements will be inserted into it Example Button with two text labels separated with newline mkButton container do passive mkText string Hello passive mkBr passive mkText string GoodBye Everything defined within do expression is inserted into the button which is the new container",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "container",
          "normalized": "ECRF a b-\u003eJSMW b(Expression c)-\u003eJSMW a(Expression())",
          "package": "jsmw",
          "signature": "ECRF e n-\u003eJSMW n(Expression x)-\u003eJSMW e(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody of the current document: use it to start the toplevel instance\n of the Writer as a container for \u003ccode\u003e\u003ca\u003erunJSMWWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "currDocBody",
          "package": "jsmw",
          "signature": "Expression THTMLBodyElement",
          "source": "src/Language-JSMW-Monad.html#currDocBody",
          "type": "function"
        },
        "index": {
          "description": "Body of the current document use it to start the toplevel instance of the Writer as container for runJSMWWith",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "currDocBody",
          "package": "jsmw",
          "partial": "Doc Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:currDocBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a block statement from the result of \u003ccode\u003erunJSWM\u003c/code\u003e. The last expression\n forms a 'return' statement, so the resulting block may be used as a function's body.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "getBlock",
          "package": "jsmw",
          "signature": "(Expression a, Int, [Statement ()]) -\u003e Statement ()",
          "source": "src/Language-JSMW-Monad.html#getBlock",
          "type": "function"
        },
        "index": {
          "description": "Obtain block statement from the result of runJSWM The last expression forms return statement so the resulting block may be used as function body",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "getBlock",
          "normalized": "(Expression a,Int,[Statement()])-\u003eStatement()",
          "package": "jsmw",
          "partial": "Block",
          "signature": "(Expression a,Int,[Statement()])-\u003eStatement()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:getBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEssentially same as \u003ccode\u003e\u003ca\u003econtainer\u003c/a\u003e\u003c/code\u003e except that a reference to an element\n has to be supplied rather than an element creation function. Another\n difference from \u003ccode\u003e\u003ca\u003econtainer\u003c/a\u003e\u003c/code\u003e: element referenced is not added as a child to\n the current container.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "inside",
          "package": "jsmw",
          "signature": "Expression n-\u003e JSMW n (Expression x)-\u003e JSMW e (Expression ())",
          "type": "function"
        },
        "index": {
          "description": "Essentially same as container except that reference to an element has to be supplied rather than an element creation function Another difference from container element referenced is not added as child to the current container",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "inside",
          "normalized": "Expression a-\u003eJSMW a(Expression b)-\u003eJSMW c(Expression())",
          "package": "jsmw",
          "signature": "Expression n-\u003eJSMW n(Expression x)-\u003eJSMW e(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a unique variable name. This function increments the internal state of the\n monad and produces a string consisting of the letter 'v' and a unique number.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "mkNewVar",
          "package": "jsmw",
          "signature": "JSMW e String",
          "source": "src/Language-JSMW-Monad.html#mkNewVar",
          "type": "function"
        },
        "index": {
          "description": "Create unique variable name This function increments the internal state of the monad and produces string consisting of the letter and unique number",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "mkNewVar",
          "package": "jsmw",
          "partial": "New Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:mkNewVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNest an element inside another element via monadic composition.\n Example usage: \n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e \u003e\u003e= \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e \u003ccode\u003emkButton\u003c/code\u003e \u003e\u003e= \u003ccode\u003e\u003ca\u003enest\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emkText\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e \"Foo\")\u003c/pre\u003e\u003cp\u003einserts a button with text \"Foo\" into the current container.\n\u003c/p\u003e\u003cp\u003eThe type system makes sure that only an instance of a DOM Element\n can nest other elements, e. g. \n\u003c/p\u003e\u003cpre\u003e ... mkText (string \"Foo\") \u003e\u003e= nest mkDiv\u003c/pre\u003e\u003cp\u003ewould not typecheck.\n\u003c/p\u003e\u003cp\u003eExample: a text, a newline, and two buttons: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e retrieves the current\n container.\n\u003c/p\u003e\u003cpre\u003e\n q = do\n   passive (mkText $ string \"Hello\")\n   passive mkBr\n   ask \u003e\u003e= nest mkButton \u003e\u003e= nest (mkText $ string \"Foo\")\n   ask \u003e\u003e= nest mkButton \u003e\u003e= nest (mkText $ string \"Bar\")\n\u003c/pre\u003e",
          "module": "Language.JSMW.Monad",
          "name": "nest",
          "package": "jsmw",
          "signature": "ECRF e n-\u003e Expression p-\u003e JSMW e (Expression n)",
          "type": "function"
        },
        "index": {
          "description": "Nest an element inside another element via monadic composition Example usage ask nest mkButton nest mkText string Foo inserts button with text Foo into the current container The type system makes sure that only an instance of DOM Element can nest other elements mkText string Foo nest mkDiv would not typecheck Example text newline and two buttons ask retrieves the current container do passive mkText string Hello passive mkBr ask nest mkButton nest mkText string Foo ask nest mkButton nest mkText string Bar",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "nest",
          "normalized": "ECRF a b-\u003eExpression c-\u003eJSMW a(Expression b)",
          "package": "jsmw",
          "signature": "ECRF e n-\u003eExpression p-\u003eJSMW e(Expression n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Javascript numeric literal out of a numeric value, monadic version.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "numberM",
          "package": "jsmw",
          "signature": "n -\u003e JSMW e (Expression Double)",
          "source": "src/Language-JSMW-Monad.html#numberM",
          "type": "function"
        },
        "index": {
          "description": "Create Javascript numeric literal out of numeric value monadic version",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "numberM",
          "normalized": "a-\u003eJSMW b(Expression Double)",
          "package": "jsmw",
          "signature": "n-\u003eJSMW e(Expression Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:numberM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSMW code consists of monadic smart constructors forming Javascript\n method calls. These constructors are inlined each time they are referenced.\n The \u003ca\u003eonce\u003c/a\u003e combinator causes a variable assignment statement to be formed\n with the variable assigned to the expression returned. All future references\n will be to the variable rather than to the expression. Since the expression\n will be evaluated when assigned to the variable, referencing the variable\n will reference the result, and possible effect will not be repeated.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "once",
          "package": "jsmw",
          "signature": "Expression a -\u003e JSMW e (Expression a)",
          "source": "src/Language-JSMW-Monad.html#once",
          "type": "function"
        },
        "index": {
          "description": "The JSMW code consists of monadic smart constructors forming Javascript method calls These constructors are inlined each time they are referenced The once combinator causes variable assignment statement to be formed with the variable assigned to the expression returned All future references will be to the variable rather than to the expression Since the expression will be evaluated when assigned to the variable referencing the variable will reference the result and possible effect will not be repeated",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "once",
          "normalized": "Expression a-\u003eJSMW b(Expression a)",
          "package": "jsmw",
          "signature": "Expression a-\u003eJSMW e(Expression a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a passive element into the current container. \n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "passive",
          "package": "jsmw",
          "signature": "ECRF e n-\u003e JSMW e (Expression ())",
          "type": "function"
        },
        "index": {
          "description": "Insert passive element into the current container",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "passive",
          "normalized": "ECRF a b-\u003eJSMW a(Expression())",
          "package": "jsmw",
          "signature": "ECRF e n-\u003eJSMW e(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:passive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an element for future use, and return a reference to it.\n The element may be inserted into a container different from one it was\n created with (when \u003ccode\u003e\u003ca\u003eref\u003c/a\u003e\u003c/code\u003e was called). But it should be used within the same\n document it was created inside.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "ref",
          "package": "jsmw",
          "signature": "ECRF e n -\u003e JSMW e (Expression n)",
          "source": "src/Language-JSMW-Monad.html#ref",
          "type": "function"
        },
        "index": {
          "description": "Create an element for future use and return reference to it The element may be inserted into container different from one it was created with when ref was called But it should be used within the same document it was created inside",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "ref",
          "normalized": "ECRF a b-\u003eJSMW a(Expression b)",
          "package": "jsmw",
          "signature": "ECRF e n-\u003eJSMW e(Expression n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn an element reference into element creation function. It can be useful\n when an element created earlier has to be used as a container, or a passive element,\n or nested. The type signature of \u003ccode\u003e\u003ca\u003eref2ecrf\u003c/a\u003e\u003c/code\u003e reflects the fact that the element\n was created when one container was current, but may be used with another container.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "ref2ecrf",
          "package": "jsmw",
          "signature": "Expression n -\u003e JSMW e1 (ECRF e2 n)",
          "source": "src/Language-JSMW-Monad.html#ref2ecrf",
          "type": "function"
        },
        "index": {
          "description": "Turn an element reference into element creation function It can be useful when an element created earlier has to be used as container or passive element or nested The type signature of ref2ecrf reflects the fact that the element was created when one container was current but may be used with another container",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "ref2ecrf",
          "normalized": "Expression a-\u003eJSMW b(ECRF b a)",
          "package": "jsmw",
          "signature": "Expression n-\u003eJSMW e(ECRF e n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:ref2ecrf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the code writer (raw way, returns both state and log). Container will be\n initialized into the body of the current HTML document. Same as\n \u003ccode\u003e \u003ccode\u003e\u003ca\u003erunJSMWWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecurrDocBody\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "runJSMW",
          "package": "jsmw",
          "signature": "Int-\u003e JSMW THTMLBodyElement (Expression a)-\u003e (Expression a, Int, [Statement ()])",
          "type": "function"
        },
        "index": {
          "description": "Run the code writer raw way returns both state and log Container will be initialized into the body of the current HTML document Same as runJSMWWith currDocBody",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "runJSMW",
          "normalized": "Int-\u003eJSMW THTMLBodyElement(Expression a)-\u003e(Expression a,Int,[Statement()])",
          "package": "jsmw",
          "partial": "JSMW",
          "signature": "Int-\u003eJSMW THTMLBodyElement(Expression a)-\u003e(Expression a,Int,[Statement()])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:runJSMW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the code writer (raw way, returns both state and log) with explicitly\n specified container.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "runJSMWWith",
          "package": "jsmw",
          "signature": "Expression e-\u003e Int-\u003e JSMW e (Expression a)-\u003e (Expression a, Int, [Statement ()])",
          "type": "function"
        },
        "index": {
          "description": "Run the code writer raw way returns both state and log with explicitly specified container",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "runJSMWWith",
          "normalized": "Expression a-\u003eInt-\u003eJSMW a(Expression b)-\u003e(Expression b,Int,[Statement()])",
          "package": "jsmw",
          "partial": "JSMWWith",
          "signature": "Expression e-\u003eInt-\u003eJSMW e(Expression a)-\u003e(Expression a,Int,[Statement()])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:runJSMWWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a on-style (e. g. onclick) event handler on the current container.\n\u003c/p\u003e\u003cp\u003eExample: a button with a click handler which shows the X coordinate of the click.\n\u003c/p\u003e\u003cpre\u003e\n  mkButton `container` (do\n    passive (mkText $ string \"Click Me\")\n    setHandler \"click\" clickHandler)\n  ...\n  clickHandler :: OnHandler TMouseEvent THTMLButtonElement\n  clickHandler e = do\n    getm'clientX e \u003e\u003e= toString \u003e\u003e= alert\n    return true\n\u003c/pre\u003e\u003cp\u003eA handler function has one argument which gets the reference to the event caught.\n The handler function also may implicitly address the container it was set on by\n calling \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003epassive\u003c/a\u003e\u003c/code\u003e. For example, calling \u003ccode\u003epassive (mkText $ string \"x\")\u003c/code\u003e\n within a handler will result in a text node being added to the container.\n\u003c/p\u003e\u003cp\u003eAlso note that the \u003ccode\u003e\u003ca\u003eOnHandler\u003c/a\u003e\u003c/code\u003e type may be parameterized by the type of containers\n it can be set on. In the example above, the handler may only be set on buttons.\n\u003c/p\u003e\u003cp\u003eThe MSIE-specific code to obtain event from the static attribute of the current\n window is inserted in the beginning of the handler automatically.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "setHandler",
          "package": "jsmw",
          "signature": "String -\u003e OnHandler e c -\u003e JSMW c (Expression ())",
          "source": "src/Language-JSMW-Monad.html#setHandler",
          "type": "function"
        },
        "index": {
          "description": "Set on-style onclick event handler on the current container Example button with click handler which shows the coordinate of the click mkButton container do passive mkText string Click Me setHandler click clickHandler clickHandler OnHandler TMouseEvent THTMLButtonElement clickHandler do getm clientX toString alert return true handler function has one argument which gets the reference to the event caught The handler function also may implicitly address the container it was set on by calling ask or passive For example calling passive mkText string within handler will result in text node being added to the container Also note that the OnHandler type may be parameterized by the type of containers it can be set on In the example above the handler may only be set on buttons The MSIE-specific code to obtain event from the static attribute of the current window is inserted in the beginning of the handler automatically",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "setHandler",
          "normalized": "String-\u003eOnHandler a b-\u003eJSMW b(Expression())",
          "package": "jsmw",
          "partial": "Handler",
          "signature": "String-\u003eOnHandler e c-\u003eJSMW c(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:setHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to use within a container to update its inline style.\n \u003ccode\u003e\u003ca\u003esetStyle\u003c/a\u003e\u003c/code\u003e called with an empty list does not change the inline\n style. Note that style settings are compile-time only.\n\u003c/p\u003e\u003cp\u003eExample: a DIV element with style settings applied and a text:\n\u003c/p\u003e\u003cpre\u003e\n   mkDiv `container` (do\n     setStyle [\"display\" := \"inline\"\n              ,\"float\" := \"right\"\n              ,\"width\" := \"45%\"\n              ,\"text-align\" := \"center\"\n              ,\"background-color\" := \"green\"\n              ,\"color\" := \"white\"\n              ,\"font-weight\" := \"bold\"]\n     passive (mkText $ string \"Styled\"))\n\u003c/pre\u003e",
          "module": "Language.JSMW.Monad",
          "name": "setStyle",
          "package": "jsmw",
          "signature": "[CSSDeco] -\u003e JSMW e (Expression ())",
          "source": "src/Language-JSMW-Monad.html#setStyle",
          "type": "function"
        },
        "index": {
          "description": "An action to use within container to update its inline style setStyle called with an empty list does not change the inline style Note that style settings are compile-time only Example DIV element with style settings applied and text mkDiv container do setStyle display inline float right width text-align center background-color green color white font-weight bold passive mkText string Styled",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "setStyle",
          "normalized": "[CSSDeco]-\u003eJSMW a(Expression())",
          "package": "jsmw",
          "partial": "Style",
          "signature": "[CSSDeco]-\u003eJSMW e(Expression())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:setStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Javascript string literal out of a string, monadic version.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "stringM",
          "package": "jsmw",
          "signature": "String -\u003e JSMW e (Expression String)",
          "source": "src/Language-JSMW-Monad.html#stringM",
          "type": "function"
        },
        "index": {
          "description": "Create Javascript string literal out of string monadic version",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "stringM",
          "normalized": "String-\u003eJSMW a(Expression String)",
          "package": "jsmw",
          "signature": "String-\u003eJSMW e(Expression String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:stringM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out a statement. This function utilizes the Writer part of the monad, and\n adds the Javascript statement provided to the Writer's log.\n\u003c/p\u003e",
          "module": "Language.JSMW.Monad",
          "name": "writeStmt",
          "package": "jsmw",
          "signature": "Statement () -\u003e JSMW e ()",
          "source": "src/Language-JSMW-Monad.html#writeStmt",
          "type": "function"
        },
        "index": {
          "description": "Write out statement This function utilizes the Writer part of the monad and adds the Javascript statement provided to the Writer log",
          "hierarchy": "Language JSMW Monad",
          "module": "Language.JSMW.Monad",
          "name": "writeStmt",
          "normalized": "Statement()-\u003eJSMW a()",
          "package": "jsmw",
          "partial": "Stmt",
          "signature": "Statement()-\u003eJSMW e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW-Monad.html#v:writeStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-export commonly used modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.JSMW",
          "name": "JSMW",
          "package": "jsmw",
          "source": "src/Language-JSMW.html",
          "type": "module"
        },
        "index": {
          "description": "Re-export commonly used modules",
          "hierarchy": "Language JSMW",
          "module": "Language.JSMW",
          "name": "JSMW",
          "package": "jsmw",
          "partial": "JSMW",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jsmw/docs/Language-JSMW.html#"
      }
    }
  ]
]