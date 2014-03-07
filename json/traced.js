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
        "word": "traced"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eTraced\u003c/a\u003e module provides a simple way of tracing expression evaluation.\n A value of type \u003ccode\u003eTraced a\u003c/code\u003e has both a value of type \u003ccode\u003ea\u003c/code\u003e and an expression tree\n that describes how the value was computed.\n\u003c/p\u003e\u003cp\u003eThere are instances for the \u003ccode\u003e\u003ca\u003eTraced\u003c/a\u003e\u003c/code\u003e type for all numeric classes to make\n it simple to trace numeric expressions.\n\u003c/p\u003e\u003cp\u003eThe expression tree associated with a traced value is exactly that: a tree.\n But evaluation of expressions in Haskell typically has sharing to avoid recomputation.\n This sharing can be recovered by the (impure) \u003ccode\u003e\u003ca\u003ereShare\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003e$examples\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debug.Traced",
          "name": "Traced",
          "package": "traced",
          "source": "src/Debug-Traced.html",
          "type": "module"
        },
        "index": {
          "description": "The Traced module provides simple way of tracing expression evaluation value of type Traced has both value of type and an expression tree that describes how the value was computed There are instances for the Traced type for all numeric classes to make it simple to trace numeric expressions The expression tree associated with traced value is exactly that tree But evaluation of expressions in Haskell typically has sharing to avoid recomputation This sharing can be recovered by the impure reShare function examples",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "Traced",
          "package": "traced",
          "partial": "Traced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "Liftable",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Liftable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "Liftable",
          "package": "traced",
          "partial": "Liftable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#t:Liftable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "Traceable",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Traceable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "Traceable",
          "package": "traced",
          "partial": "Traceable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#t:Traceable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraced values of some type.\n\u003c/p\u003e",
          "module": "Debug.Traced",
          "name": "Traced",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Traced",
          "type": "data"
        },
        "index": {
          "description": "Traced values of some type",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "Traced",
          "package": "traced",
          "partial": "Traced",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#t:Traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression tree for a traced value.\n\u003c/p\u003e",
          "module": "Debug.Traced",
          "name": "TracedD",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "data"
        },
        "index": {
          "description": "Expression tree for traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "TracedD",
          "package": "traced",
          "partial": "Traced",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#t:TracedD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for \u003ccode\u003e\u003ca\u003eTraced\u003c/a\u003e\u003c/code\u003e to show it with full details.\n\u003c/p\u003e",
          "module": "Debug.Traced",
          "name": "TracedExp",
          "package": "traced",
          "source": "src/Debug-Traced.html#TracedExp",
          "type": "data"
        },
        "index": {
          "description": "wrapper for Traced to show it with full details",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "TracedExp",
          "package": "traced",
          "partial": "Traced Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#t:TracedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%||)",
          "package": "traced",
          "signature": "Traced Bool -\u003e Traced Bool -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%||) %||",
          "normalized": "Traced Bool-\u003eTraced Bool-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced Bool-\u003eTraced Bool-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%&&)",
          "package": "traced",
          "signature": "Traced Bool -\u003e Traced Bool -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%&&) %&&",
          "normalized": "Traced Bool-\u003eTraced Bool-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced Bool-\u003eTraced Bool-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComparisons generating traced booleans.\n\u003c/p\u003e",
          "module": "Debug.Traced",
          "name": "(%/=)",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%2F%3D",
          "type": "function"
        },
        "index": {
          "description": "Comparisons generating traced booleans",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%/=) %/=",
          "normalized": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%\u003c)",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%\u003c) %\u003c",
          "normalized": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%\u003c=)",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%\u003c=) %\u003c=",
          "normalized": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%==)",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%==) %==",
          "normalized": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%\u003e)",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%\u003e) %\u003e",
          "normalized": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "(%\u003e=)",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#%25%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "(%\u003e=) %\u003e=",
          "normalized": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:-37--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraced version of \u003cem\u003eif\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Debug.Traced",
          "name": "ifT",
          "package": "traced",
          "signature": "Traced Bool -\u003e Traced a -\u003e Traced a -\u003e Traced a",
          "source": "src/Debug-Traced.html#ifT",
          "type": "function"
        },
        "index": {
          "description": "Traced version of if",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "ifT",
          "normalized": "Traced Bool-\u003eTraced a-\u003eTraced a-\u003eTraced a",
          "package": "traced",
          "signature": "Traced Bool-\u003eTraced a-\u003eTraced a-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:ifT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "liftFun",
          "package": "traced",
          "signature": "Name -\u003e a -\u003e b",
          "source": "src/Debug-TracedInternal.html#liftFun",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:liftFun\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:liftFun\"]"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "liftFun",
          "normalized": "Name-\u003ea-\u003eb",
          "package": "traced",
          "partial": "Fun",
          "signature": "Name-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:liftFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "liftT",
          "package": "traced",
          "signature": "Name -\u003e Fixity -\u003e a -\u003e b",
          "source": "src/Debug-TracedInternal.html#liftT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:liftT\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:liftT\"]"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "liftT",
          "normalized": "Name-\u003eFixity-\u003ea-\u003eb",
          "package": "traced",
          "signature": "Name-\u003eFixity-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a named to a traced value.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "nameTraced",
          "package": "traced",
          "signature": "String -\u003e Traced a -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#nameTraced",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:nameTraced\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:nameTraced\"]"
        },
        "index": {
          "description": "Add named to traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "nameTraced",
          "normalized": "String-\u003eTraced a-\u003eTraced a",
          "package": "traced",
          "partial": "Traced",
          "signature": "String-\u003eTraced a-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:nameTraced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a named traced value.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "named",
          "package": "traced",
          "signature": "String -\u003e a -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#named",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:named\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:named\"]"
        },
        "index": {
          "description": "Create named traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "named",
          "normalized": "String-\u003ea-\u003eTraced a",
          "package": "traced",
          "signature": "String-\u003ea-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "namedExp",
          "package": "traced",
          "signature": "String -\u003e a -\u003e TracedExp a",
          "source": "src/Debug-Traced.html#namedExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "namedExp",
          "normalized": "String-\u003ea-\u003eTracedExp a",
          "package": "traced",
          "partial": "Exp",
          "signature": "String-\u003ea-\u003eTracedExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:namedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "reShare",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#reShare",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:reShare\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:reShare\"]"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "reShare",
          "normalized": "Traced a-\u003eTraced a",
          "package": "traced",
          "partial": "Share",
          "signature": "Traced a-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:reShare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the expression tree of a traced value.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "showAsExp",
          "package": "traced",
          "signature": "Traced a -\u003e String",
          "source": "src/Debug-TracedInternal.html#showAsExp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:showAsExp\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:showAsExp\"]"
        },
        "index": {
          "description": "Show the expression tree of traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "showAsExp",
          "normalized": "Traced a-\u003eString",
          "package": "traced",
          "partial": "As Exp",
          "signature": "Traced a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:showAsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the expression tree of a traced value, also show the value of each variable.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "showAsExpFull",
          "package": "traced",
          "signature": "Traced a -\u003e String",
          "source": "src/Debug-TracedInternal.html#showAsExpFull",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:showAsExpFull\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:showAsExpFull\"]"
        },
        "index": {
          "description": "Show the expression tree of traced value also show the value of each variable",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "showAsExpFull",
          "normalized": "Traced a-\u003eString",
          "package": "traced",
          "partial": "As Exp Full",
          "signature": "Traced a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:showAsExpFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify an expression tree.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "simplify",
          "package": "traced",
          "signature": "Traced a -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#simplify",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:simplify\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:simplify\"]"
        },
        "index": {
          "description": "Simplify an expression tree",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "simplify",
          "normalized": "Traced a-\u003eTraced a",
          "package": "traced",
          "signature": "Traced a-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:simplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "tnot",
          "package": "traced",
          "signature": "Traced Bool -\u003e Traced Bool",
          "source": "src/Debug-Traced.html#tnot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "tnot",
          "normalized": "Traced Bool-\u003eTraced Bool",
          "package": "traced",
          "signature": "Traced Bool-\u003eTraced Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:tnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a traced value.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "traced",
          "package": "traced",
          "signature": "a -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#traced",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:traced\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:traced\"]"
        },
        "index": {
          "description": "Create traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "traced",
          "normalized": "a-\u003eTraced a",
          "package": "traced",
          "signature": "a-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the expression tree from a traced value.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "tracedD",
          "package": "traced",
          "signature": "Traced a -\u003e TracedD",
          "source": "src/Debug-TracedInternal.html#tracedD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:tracedD\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:tracedD\"]"
        },
        "index": {
          "description": "Extract the expression tree from traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "tracedD",
          "normalized": "Traced a-\u003eTracedD",
          "package": "traced",
          "signature": "Traced a-\u003eTracedD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:tracedD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Traced",
          "name": "tracedExp",
          "package": "traced",
          "signature": "a -\u003e TracedExp a",
          "source": "src/Debug-Traced.html#tracedExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "tracedExp",
          "normalized": "a-\u003eTracedExp a",
          "package": "traced",
          "partial": "Exp",
          "signature": "a-\u003eTracedExp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:tracedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the real value from a traced value.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "unTraced",
          "package": "traced",
          "signature": "Traced a -\u003e a",
          "source": "src/Debug-TracedInternal.html#unTraced",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:unTraced\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:unTraced\"]"
        },
        "index": {
          "description": "Extract the real value from traced value",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "unTraced",
          "normalized": "Traced a-\u003ea",
          "package": "traced",
          "partial": "Traced",
          "signature": "Traced a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:unTraced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an expression tree to a traced value, if the types are correct.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "unTracedD",
          "package": "traced",
          "signature": "TracedD -\u003e Maybe (Traced a)",
          "source": "src/Debug-TracedInternal.html#unTracedD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:unTracedD\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:unTracedD\"]"
        },
        "index": {
          "description": "Convert an expression tree to traced value if the types are correct",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "unTracedD",
          "normalized": "TracedD-\u003eMaybe(Traced a)",
          "package": "traced",
          "partial": "Traced",
          "signature": "TracedD-\u003eMaybe(Traced a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:unTracedD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a named thing with no value.  Cannot be used where a real value is needed.\n\u003c/p\u003e",
          "module": "[\"Debug.Traced\",\"Debug.TracedInternal\"]",
          "name": "unknown",
          "package": "traced",
          "signature": "String -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#unknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:unknown\",\"http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:unknown\"]"
        },
        "index": {
          "description": "Create named thing with no value Cannot be used where real value is needed",
          "hierarchy": "Debug Traced",
          "module": "Debug.Traced",
          "name": "unknown",
          "normalized": "String-\u003eTraced a",
          "package": "traced",
          "signature": "String-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-Traced.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "TracedInternal",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "TracedInternal",
          "package": "traced",
          "partial": "Traced Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixity for identifier.\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "Fixity",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Fixity",
          "type": "data"
        },
        "index": {
          "description": "Fixity for identifier",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Fixity",
          "package": "traced",
          "partial": "Fixity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#t:Fixity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "Liftable",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Liftable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Liftable",
          "package": "traced",
          "partial": "Liftable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#t:Liftable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "TraceLevel",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#TraceLevel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "TraceLevel",
          "package": "traced",
          "partial": "Trace Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#t:TraceLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "Traceable",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Traceable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Traceable",
          "package": "traced",
          "partial": "Traceable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#t:Traceable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraced values of some type.\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "Traced",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#Traced",
          "type": "data"
        },
        "index": {
          "description": "Traced values of some type",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Traced",
          "package": "traced",
          "partial": "Traced",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#t:Traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression tree for a traced value.\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "TracedD",
          "package": "traced",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "data"
        },
        "index": {
          "description": "Expression tree for traced value",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "TracedD",
          "package": "traced",
          "partial": "Traced",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#t:TracedD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplication\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "Apply",
          "package": "traced",
          "signature": "Apply a Name Fixity [TracedD]",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "function"
        },
        "index": {
          "description": "application",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Apply",
          "normalized": "Apply a Name Fixity[TracedD]",
          "package": "traced",
          "partial": "Apply",
          "signature": "Apply a Name Fixity[TracedD]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstant\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "Con",
          "package": "traced",
          "signature": "Con a",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "function"
        },
        "index": {
          "description": "constant",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Con",
          "package": "traced",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "Infix",
          "package": "traced",
          "signature": "Infix Int",
          "source": "src/Debug-TracedInternal.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Infix",
          "package": "traced",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "InfixL",
          "package": "traced",
          "signature": "InfixL Int",
          "source": "src/Debug-TracedInternal.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "InfixL",
          "package": "traced",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:InfixL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "InfixR",
          "package": "traced",
          "signature": "InfixR Int",
          "source": "src/Debug-TracedInternal.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "InfixR",
          "package": "traced",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:InfixR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(recovered) let expression\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "Let",
          "package": "traced",
          "signature": "forall a . Let [(Name, TracedD)] TracedD",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "function"
        },
        "index": {
          "description": "recovered let expression",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Let",
          "normalized": "a b Let[(Name,TracedD)]TracedD",
          "package": "traced",
          "partial": "Let",
          "signature": "forall a Let[(Name,TracedD)]TracedD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:Let"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue with a name\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "Name",
          "package": "traced",
          "signature": "forall a . Name Bool Name TracedD",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "function"
        },
        "index": {
          "description": "value with name",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Name",
          "package": "traced",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunknown value\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "NoValue",
          "package": "traced",
          "signature": "NoValue",
          "source": "src/Debug-TracedInternal.html#TracedD",
          "type": "function"
        },
        "index": {
          "description": "unknown value",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "NoValue",
          "package": "traced",
          "partial": "No Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:NoValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "Nonfix",
          "package": "traced",
          "signature": "Nonfix",
          "source": "src/Debug-TracedInternal.html#Fixity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "Nonfix",
          "package": "traced",
          "partial": "Nonfix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:Nonfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "TLExp",
          "package": "traced",
          "signature": "TLExp",
          "source": "src/Debug-TracedInternal.html#TraceLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "TLExp",
          "package": "traced",
          "partial": "TLExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:TLExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "TLFullExp",
          "package": "traced",
          "signature": "TLFullExp",
          "source": "src/Debug-TracedInternal.html#TraceLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "TLFullExp",
          "package": "traced",
          "partial": "TLFull Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:TLFullExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "TLValue",
          "package": "traced",
          "signature": "TLValue",
          "source": "src/Debug-TracedInternal.html#TraceLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "TLValue",
          "package": "traced",
          "partial": "TLValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:TLValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a traced value with an \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e expression tree.\n\u003c/p\u003e",
          "module": "Debug.TracedInternal",
          "name": "apply",
          "package": "traced",
          "signature": "a -\u003e Name -\u003e Fixity -\u003e [TracedD] -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Create traced value with an Apply expression tree",
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "apply",
          "normalized": "a-\u003eName-\u003eFixity-\u003e[TracedD]-\u003eTraced a",
          "package": "traced",
          "signature": "a-\u003eName-\u003eFixity-\u003e[TracedD]-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "baseLiftT",
          "package": "traced",
          "signature": "Name -\u003e Fixity -\u003e [TracedD] -\u003e a -\u003e Traced a",
          "source": "src/Debug-TracedInternal.html#baseLiftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "baseLiftT",
          "normalized": "Name-\u003eFixity-\u003e[TracedD]-\u003ea-\u003eTraced a",
          "package": "traced",
          "partial": "Lift",
          "signature": "Name-\u003eFixity-\u003e[TracedD]-\u003ea-\u003eTraced a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:baseLiftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "binOp",
          "package": "traced",
          "signature": "(a -\u003e b -\u003e c) -\u003e (String, Fixity) -\u003e Traced a -\u003e Traced b -\u003e Traced c",
          "source": "src/Debug-TracedInternal.html#binOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "binOp",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(String,Fixity)-\u003eTraced a-\u003eTraced b-\u003eTraced c",
          "package": "traced",
          "partial": "Op",
          "signature": "(a-\u003eb-\u003ec)-\u003e(String,Fixity)-\u003eTraced a-\u003eTraced b-\u003eTraced c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:binOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "liftT'",
          "package": "traced",
          "signature": "Name -\u003e Fixity -\u003e [TracedD] -\u003e a -\u003e b",
          "source": "src/Debug-TracedInternal.html#liftT%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "liftT'",
          "normalized": "Name-\u003eFixity-\u003e[TracedD]-\u003ea-\u003eb",
          "package": "traced",
          "partial": "T'",
          "signature": "Name-\u003eFixity-\u003e[TracedD]-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:liftT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "pPrintTraced",
          "package": "traced",
          "signature": "TraceLevel -\u003e Int -\u003e Traced a -\u003e Doc",
          "source": "src/Debug-TracedInternal.html#pPrintTraced",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "pPrintTraced",
          "normalized": "TraceLevel-\u003eInt-\u003eTraced a-\u003eDoc",
          "package": "traced",
          "partial": "Print Traced",
          "signature": "TraceLevel-\u003eInt-\u003eTraced a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:pPrintTraced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "trPPrint",
          "package": "traced",
          "signature": "TraceLevel -\u003e Int -\u003e a -\u003e Doc",
          "source": "src/Debug-TracedInternal.html#trPPrint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "trPPrint",
          "normalized": "TraceLevel-\u003eInt-\u003ea-\u003eDoc",
          "package": "traced",
          "partial": "PPrint",
          "signature": "TraceLevel-\u003eInt-\u003ea-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:trPPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.TracedInternal",
          "name": "unOp",
          "package": "traced",
          "signature": "(a -\u003e b) -\u003e String -\u003e Traced a -\u003e Traced b",
          "source": "src/Debug-TracedInternal.html#unOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug TracedInternal",
          "module": "Debug.TracedInternal",
          "name": "unOp",
          "normalized": "(a-\u003eb)-\u003eString-\u003eTraced a-\u003eTraced b",
          "package": "traced",
          "partial": "Op",
          "signature": "(a-\u003eb)-\u003eString-\u003eTraced a-\u003eTraced b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/traced/docs/Debug-TracedInternal.html#v:unOp"
      }
    }
  ]
]