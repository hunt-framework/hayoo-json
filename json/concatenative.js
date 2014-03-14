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
        "word": "concatenative"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eControl.Concatenative brings concatenative combinators in the style of factor\n    (see \u003ca\u003ehttp://docs.factorcode.org/content/article-dataflow-combinators.html\u003c/a\u003e)\n    to haskell in a variety of interfaces, allowing a terse, pointfree style. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concatenative",
          "name": "Concatenative",
          "package": "concatenative",
          "source": "src/Control-Concatenative.html",
          "type": "module"
        },
        "index": {
          "description": "Control.Concatenative brings concatenative combinators in the style of factor see http docs.factorcode.org content article-dataflow-combinators.html to haskell in variety of interfaces allowing terse pointfree style",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "Concatenative",
          "package": "concatenative",
          "partial": "Concatenative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenative continuation\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "Concatenative",
          "package": "concatenative",
          "source": "src/Control-Concatenative.html#Concatenative",
          "type": "newtype"
        },
        "index": {
          "description": "Concatenative continuation",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "Concatenative",
          "package": "concatenative",
          "partial": "Concatenative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#t:Concatenative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft associative version of \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(&&.)",
          "package": "concatenative",
          "signature": "a b c -\u003e a b c' -\u003e a b (c, c')",
          "source": "src/Control-Concatenative.html#%26%26.",
          "type": "function"
        },
        "index": {
          "description": "Left associative version of",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(&&.) &&.",
          "normalized": "a b c-\u003ea b d-\u003ea b(c,d)",
          "package": "concatenative",
          "signature": "a b c-\u003ea b c'-\u003ea b(c,c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for cleaving\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(&.)",
          "package": "concatenative",
          "signature": "(a -\u003e b) -\u003e (a -\u003e e) -\u003e Concatenative a b (e -\u003e c) c",
          "source": "src/Control-Concatenative.html#%26.",
          "type": "function"
        },
        "index": {
          "description": "Lift function and add it to Concatenative for cleaving",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(&.) &.",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003eConcatenative a b(c-\u003ed)d",
          "package": "concatenative",
          "signature": "(a-\u003eb)-\u003e(a-\u003ee)-\u003eConcatenative a b(e-\u003ec)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft associative version of \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(**.)",
          "package": "concatenative",
          "signature": "a b c -\u003e a b' c' -\u003e a (b, b') (c, c')",
          "source": "src/Control-Concatenative.html#%2A%2A.",
          "type": "function"
        },
        "index": {
          "description": "Left associative version of",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(**.) **.",
          "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
          "package": "concatenative",
          "signature": "a b c-\u003ea b' c'-\u003ea(b,b')(c,c')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-42--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(*.)",
          "package": "concatenative",
          "signature": "(t -\u003e b) -\u003e (a -\u003e b1) -\u003e Concatenative a b (b1 -\u003e c) (t -\u003e c)",
          "source": "src/Control-Concatenative.html#%2A.",
          "type": "function"
        },
        "index": {
          "description": "Lift function and add it to Concatenative for spreading",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(*.) *.",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eConcatenative c b(b-\u003ed)(a-\u003ed)",
          "package": "concatenative",
          "signature": "(t-\u003eb)-\u003e(a-\u003eb)-\u003eConcatenative a b(b-\u003ec)(t-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine with a binary function\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(\u003e\u003e@)",
          "package": "concatenative",
          "signature": "a b (x, y) -\u003e (x -\u003e y -\u003e z) -\u003e a b z",
          "source": "src/Control-Concatenative.html#%3E%3E%40",
          "type": "function"
        },
        "index": {
          "description": "Combine with binary function",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(\u003e\u003e@) \u003e\u003e@",
          "normalized": "a b(c,d)-\u003e(c-\u003ed-\u003ee)-\u003ea b e",
          "package": "concatenative",
          "signature": "a b(x,y)-\u003e(x-\u003ey-\u003ez)-\u003ea b z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-62--62--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft associative version of \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(\u003e\u003e.)",
          "package": "concatenative",
          "signature": "a b c -\u003e a c d -\u003e a b d",
          "source": "src/Control-Concatenative.html#%3E%3E.",
          "type": "function"
        },
        "index": {
          "description": "Left associative version of",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(\u003e\u003e.) \u003e\u003e.",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "concatenative",
          "signature": "a b c-\u003ea c d-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-62--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for cleaving\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(.&.)",
          "package": "concatenative",
          "signature": "Concatenative a b c d -\u003e (a -\u003e e) -\u003e Concatenative a b (e -\u003e c) d",
          "source": "src/Control-Concatenative.html#.%26.",
          "type": "function"
        },
        "index": {
          "description": "Construct Concatenative for cleaving",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(.&.) .&.",
          "normalized": "Concatenative a b c d-\u003e(a-\u003ee)-\u003eConcatenative a b(e-\u003ec)d",
          "package": "concatenative",
          "signature": "Concatenative a b c d-\u003e(a-\u003ee)-\u003eConcatenative a b(e-\u003ec)d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "(.*.)",
          "package": "concatenative",
          "signature": "Concatenative a b c d -\u003e (e -\u003e f) -\u003e Concatenative e b (f -\u003e c) (a -\u003e d)",
          "source": "src/Control-Concatenative.html#.%2A.",
          "type": "function"
        },
        "index": {
          "description": "Construct Concatenative for spreading",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "(.*.) .*.",
          "normalized": "Concatenative a b c d-\u003e(e-\u003ef)-\u003eConcatenative e b(f-\u003ec)(a-\u003ed)",
          "package": "concatenative",
          "signature": "Concatenative a b c d-\u003e(e-\u003ef)-\u003eConcatenative e b(f-\u003ec)(a-\u003ed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concatenative",
          "name": "Concatenative",
          "package": "concatenative",
          "signature": "Concatenative",
          "source": "src/Control-Concatenative.html#Concatenative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "Concatenative",
          "package": "concatenative",
          "partial": "Concatenative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:Concatenative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for applying a monadic function n times\n\u003c/p\u003e\u003cpre\u003e biApM (+1)\n\u003c/pre\u003e\u003cp\u003etranslates to\n\u003c/p\u003e\u003cpre\u003e $(apM 2) (+1)\n\u003c/pre\u003e",
          "module": "Control.Concatenative",
          "name": "apM",
          "package": "concatenative",
          "signature": "Int -\u003e Q Exp",
          "source": "src/Control-Concatenative.html#apM",
          "type": "function"
        },
        "index": {
          "description": "Create Concatenative for applying monadic function times biApM translates to apM",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "apM",
          "normalized": "Int-\u003eQ Exp",
          "package": "concatenative",
          "signature": "Int-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:apM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience synonym for \u003ccode\u003e\u003ca\u003ereplicateM_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "apM_",
          "package": "concatenative",
          "signature": "Int -\u003e m a -\u003e m ()",
          "source": "src/Control-Concatenative.html#apM_",
          "type": "function"
        },
        "index": {
          "description": "Convenience synonym for replicateM",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "apM_",
          "normalized": "Int-\u003ea b-\u003ea()",
          "package": "concatenative",
          "signature": "Int-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:apM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for applying a function n times\n\u003c/p\u003e\u003cpre\u003e biAp (+1)\n\u003c/pre\u003e\u003cp\u003etranslates to\n\u003c/p\u003e\u003cpre\u003e $(apN 2) (+1)\n\u003c/pre\u003e",
          "module": "Control.Concatenative",
          "name": "apN",
          "package": "concatenative",
          "signature": "Int -\u003e Q Exp",
          "source": "src/Control-Concatenative.html#apN",
          "type": "function"
        },
        "index": {
          "description": "Create Concatenative for applying function times biAp translates to apN",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "apN",
          "normalized": "Int-\u003eQ Exp",
          "package": "concatenative",
          "signature": "Int-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:apN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply both arguments to a and combine the results\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "bi",
          "package": "concatenative",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e (b -\u003e c -\u003e d) -\u003e a -\u003e d",
          "source": "src/Control-Concatenative.html#bi",
          "type": "function"
        },
        "index": {
          "description": "Apply both arguments to and combine the results",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "bi",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(b-\u003ec-\u003ed)-\u003ea-\u003ed",
          "package": "concatenative",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(b-\u003ec-\u003ed)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:bi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to two values and combine the results\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biAp",
          "package": "concatenative",
          "signature": "(t -\u003e t1) -\u003e (t1 -\u003e t1 -\u003e t2) -\u003e t -\u003e t -\u003e t2",
          "source": "src/Control-Concatenative.html#biAp",
          "type": "function"
        },
        "index": {
          "description": "Apply function to two values and combine the results",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biAp",
          "normalized": "(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea",
          "package": "concatenative",
          "partial": "Ap",
          "signature": "(t-\u003et)-\u003e(t-\u003et-\u003et)-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiAp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biApM",
          "package": "concatenative",
          "signature": "(t -\u003e m t1) -\u003e (t1 -\u003e t1 -\u003e m t2) -\u003e t -\u003e t -\u003e m t2",
          "source": "src/Control-Concatenative.html#biApM",
          "type": "function"
        },
        "index": {
          "description": "Like biAp but functions can return monadic values",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biApM",
          "normalized": "(a-\u003eb a)-\u003e(a-\u003ea-\u003eb a)-\u003ea-\u003ea-\u003eb a",
          "package": "concatenative",
          "partial": "Ap",
          "signature": "(t-\u003em t)-\u003e(t-\u003et-\u003em t)-\u003et-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biApM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiApM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biApM_",
          "package": "concatenative",
          "signature": "(t -\u003e m t1) -\u003e t -\u003e t -\u003e m ()",
          "source": "src/Control-Concatenative.html#biApM_",
          "type": "function"
        },
        "index": {
          "description": "Like biApM but throws away the end result",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biApM_",
          "normalized": "(a-\u003eb a)-\u003ea-\u003ea-\u003eb()",
          "package": "concatenative",
          "partial": "Ap",
          "signature": "(t-\u003em t)-\u003et-\u003et-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biApM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebi\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biM",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e (b -\u003e c -\u003e m d) -\u003e a -\u003e m d",
          "source": "src/Control-Concatenative.html#biM",
          "type": "function"
        },
        "index": {
          "description": "Like bi but functions can return monadic values",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biM",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(c-\u003ed-\u003eb e)-\u003ea-\u003eb e",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003e(b-\u003ec-\u003em d)-\u003ea-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biM_",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e a -\u003e m ()",
          "source": "src/Control-Concatenative.html#biM_",
          "type": "function"
        },
        "index": {
          "description": "Like biM but throws away the end result",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biM_",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003ea-\u003eb()",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the first argument to a, the second to b, and combine the results\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biSp",
          "package": "concatenative",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e (c -\u003e d -\u003e e) -\u003e a -\u003e b -\u003e e",
          "source": "src/Control-Concatenative.html#biSp",
          "type": "function"
        },
        "index": {
          "description": "Apply the first argument to the second to and combine the results",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biSp",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(b-\u003ed-\u003ee)-\u003ea-\u003ec-\u003ee",
          "package": "concatenative",
          "partial": "Sp",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(c-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biSp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiSp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "biSpM",
          "package": "concatenative",
          "signature": "(a -\u003e m c) -\u003e (b -\u003e m d) -\u003e (c -\u003e d -\u003e m e) -\u003e a -\u003e b -\u003e m e",
          "source": "src/Control-Concatenative.html#biSpM",
          "type": "function"
        },
        "index": {
          "description": "Like biSp but functions can return monadic values",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "biSpM",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(c-\u003ee-\u003eb f)-\u003ea-\u003ed-\u003eb f",
          "package": "concatenative",
          "partial": "Sp",
          "signature": "(a-\u003em c)-\u003e(b-\u003em d)-\u003e(c-\u003ed-\u003em e)-\u003ea-\u003eb-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biSpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow version of \u003ccode\u003e\u003ca\u003ebiAp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "both",
          "package": "concatenative",
          "signature": "a b c -\u003e a (b, b) (c, c)",
          "source": "src/Control-Concatenative.html#both",
          "type": "function"
        },
        "index": {
          "description": "Arrow version of biAp",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "both",
          "normalized": "a b c-\u003ea(b,b)(c,c)",
          "package": "concatenative",
          "signature": "a b c-\u003ea(b,b)(c,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function into \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "cat",
          "package": "concatenative",
          "signature": "(a -\u003e b) -\u003e Concatenative a b c c",
          "source": "src/Control-Concatenative.html#cat",
          "type": "function"
        },
        "index": {
          "description": "Lifts function into Concatenative",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "cat",
          "normalized": "(a-\u003eb)-\u003eConcatenative a b c c",
          "package": "concatenative",
          "signature": "(a-\u003eb)-\u003eConcatenative a b c c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monadic function to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "catM",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e Concatenative a b (m c) (m c)",
          "source": "src/Control-Concatenative.html#catM",
          "type": "function"
        },
        "index": {
          "description": "Lift monadic function to Concatenative",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "catM",
          "normalized": "(a-\u003eb c)-\u003eConcatenative a c(b d)(b d)",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003eConcatenative a b(m c)(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:catM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monadic function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for cleaving\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "cl",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m e) -\u003e Concatenative a b (e -\u003e m d) (m d)",
          "source": "src/Control-Concatenative.html#cl",
          "type": "function"
        },
        "index": {
          "description": "Lift monadic function and add it to Concatenative for cleaving",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "cl",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003eConcatenative a c(d-\u003eb e)(b e)",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003e(a-\u003em e)-\u003eConcatenative a b(e-\u003em d)(m d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:cl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading monadic functions\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "clM",
          "package": "concatenative",
          "signature": "Concatenative a b c (m d) -\u003e (a -\u003e m e) -\u003e Concatenative a b (e -\u003e c) (m d)",
          "source": "src/Control-Concatenative.html#clM",
          "type": "function"
        },
        "index": {
          "description": "Construct Concatenative for spreading monadic functions",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "clM",
          "normalized": "Concatenative a b c(d e)-\u003e(a-\u003ed f)-\u003eConcatenative a b(f-\u003ec)(d e)",
          "package": "concatenative",
          "signature": "Concatenative a b c(m d)-\u003e(a-\u003em e)-\u003eConcatenative a b(e-\u003ec)(m d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:clM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concatenative",
          "name": "dup",
          "package": "concatenative",
          "signature": "a b (b, b)",
          "source": "src/Control-Concatenative.html#dup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "dup",
          "normalized": "a b(b,b)",
          "package": "concatenative",
          "signature": "a b(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "first",
          "package": "concatenative",
          "signature": "forall b c d.  a b c -\u003e a (b, d) (c, d)",
          "type": "function"
        },
        "index": {
          "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "first",
          "normalized": "a b c d e b c-\u003ee(b,f)(c,f)",
          "package": "concatenative",
          "signature": "forall b c d. a b c-\u003ea(b,d)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concatenative",
          "name": "ifte",
          "package": "concatenative",
          "signature": "(a -\u003e Bool)-\u003e (a -\u003e b)-\u003e (a -\u003e b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "ifte",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "concatenative",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:ifte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "second",
          "package": "concatenative",
          "signature": "forall b c d.  a b c -\u003e a (d, b) (d, c)",
          "type": "function"
        },
        "index": {
          "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "second",
          "normalized": "a b c d e b c-\u003ee(f,b)(f,c)",
          "package": "concatenative",
          "signature": "forall b c d. a b c-\u003ea(d,b)(d,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a monadic function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "sp",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (e -\u003e m f) -\u003e Concatenative e b (f -\u003e m d) (a -\u003e m d)",
          "source": "src/Control-Concatenative.html#sp",
          "type": "function"
        },
        "index": {
          "description": "Lift monadic function and add it to Concatenative for spreading",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "sp",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eConcatenative d c(e-\u003eb f)(a-\u003eb f)",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003e(e-\u003em f)-\u003eConcatenative e b(f-\u003em d)(a-\u003em d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading monadic functions\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "spM",
          "package": "concatenative",
          "signature": "Concatenative a b c (m d) -\u003e (e -\u003e m f) -\u003e Concatenative e b (f -\u003e c) (a -\u003e m d)",
          "source": "src/Control-Concatenative.html#spM",
          "type": "function"
        },
        "index": {
          "description": "Construct Concatenative for spreading monadic functions",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "spM",
          "normalized": "Concatenative a b c(d e)-\u003e(f-\u003ed g)-\u003eConcatenative f b(g-\u003ec)(a-\u003ed e)",
          "package": "concatenative",
          "signature": "Concatenative a b c(m d)-\u003e(e-\u003em f)-\u003eConcatenative e b(f-\u003ec)(a-\u003em d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:spM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concatenative",
          "name": "swap",
          "package": "concatenative",
          "signature": "a (x, y) (y, x)",
          "source": "src/Control-Concatenative.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "swap",
          "normalized": "a(b,c)(c,b)",
          "package": "concatenative",
          "signature": "a(x,y)(y,x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply each of three arguments to a and combine the results\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "tri",
          "package": "concatenative",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e (a -\u003e d) -\u003e (b -\u003e c -\u003e d -\u003e e) -\u003e a -\u003e e",
          "source": "src/Control-Concatenative.html#tri",
          "type": "function"
        },
        "index": {
          "description": "Apply each of three arguments to and combine the results",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "tri",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003e(b-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ee",
          "package": "concatenative",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003e(b-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:tri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to three values and combine the results\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triAp",
          "package": "concatenative",
          "signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e b -\u003e c) -\u003e a -\u003e a -\u003e a -\u003e c",
          "source": "src/Control-Concatenative.html#triAp",
          "type": "function"
        },
        "index": {
          "description": "Apply function to three values and combine the results",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triAp",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb-\u003ec)-\u003ea-\u003ea-\u003ea-\u003ec",
          "package": "concatenative",
          "partial": "Ap",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb-\u003ec)-\u003ea-\u003ea-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triAp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriAp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triApM",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e b -\u003e m c) -\u003e a -\u003e a -\u003e a -\u003e m c",
          "source": "src/Control-Concatenative.html#triApM",
          "type": "function"
        },
        "index": {
          "description": "Like triAp but functions can return monadic values",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triApM",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003ec-\u003eb d)-\u003ea-\u003ea-\u003ea-\u003eb d",
          "package": "concatenative",
          "partial": "Ap",
          "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003eb-\u003em c)-\u003ea-\u003ea-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triApM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriApM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triApM_",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e a -\u003e a -\u003e a -\u003e m ()",
          "source": "src/Control-Concatenative.html#triApM_",
          "type": "function"
        },
        "index": {
          "description": "Like triApM but throws away the end result",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triApM_",
          "normalized": "(a-\u003eb c)-\u003ea-\u003ea-\u003ea-\u003eb()",
          "package": "concatenative",
          "partial": "Ap",
          "signature": "(a-\u003em b)-\u003ea-\u003ea-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triApM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etri\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triM",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e (a -\u003e m d) -\u003e (b -\u003e c -\u003e d -\u003e m e) -\u003e a -\u003e m e",
          "source": "src/Control-Concatenative.html#triM",
          "type": "function"
        },
        "index": {
          "description": "Like tri but functions can return monadic values",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triM",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(a-\u003eb e)-\u003e(c-\u003ed-\u003ee-\u003eb f)-\u003ea-\u003eb f",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003e(a-\u003em d)-\u003e(b-\u003ec-\u003ed-\u003em e)-\u003ea-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triM_",
          "package": "concatenative",
          "signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e (a -\u003e m d) -\u003e a -\u003e m ()",
          "source": "src/Control-Concatenative.html#triM_",
          "type": "function"
        },
        "index": {
          "description": "Like triM but throws away the end result",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triM_",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(a-\u003eb e)-\u003ea-\u003eb()",
          "package": "concatenative",
          "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003e(a-\u003em d)-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the first argument to a, the second to b, and the third to c, combining the results\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triSp",
          "package": "concatenative",
          "signature": "(a -\u003e d) -\u003e (b -\u003e e) -\u003e (c -\u003e f) -\u003e (d -\u003e e -\u003e f -\u003e g) -\u003e a -\u003e b -\u003e c -\u003e g",
          "source": "src/Control-Concatenative.html#triSp",
          "type": "function"
        },
        "index": {
          "description": "Apply the first argument to the second to and the third to combining the results",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triSp",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e-\u003ef)-\u003e(b-\u003ed-\u003ef-\u003eg)-\u003ea-\u003ec-\u003ee-\u003eg",
          "package": "concatenative",
          "partial": "Sp",
          "signature": "(a-\u003ed)-\u003e(b-\u003ee)-\u003e(c-\u003ef)-\u003e(d-\u003ee-\u003ef-\u003eg)-\u003ea-\u003eb-\u003ec-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triSp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriSp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
          "module": "Control.Concatenative",
          "name": "triSpM",
          "package": "concatenative",
          "signature": "(a -\u003e m d) -\u003e (b -\u003e m e) -\u003e (c -\u003e m f) -\u003e (d -\u003e e -\u003e f -\u003e m g) -\u003e a -\u003e b -\u003e c -\u003e m g",
          "source": "src/Control-Concatenative.html#triSpM",
          "type": "function"
        },
        "index": {
          "description": "Like triSp but functions can return monadic values",
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "triSpM",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(f-\u003eb g)-\u003e(c-\u003ee-\u003eg-\u003eb h)-\u003ea-\u003ed-\u003ef-\u003eb h",
          "package": "concatenative",
          "partial": "Sp",
          "signature": "(a-\u003em d)-\u003e(b-\u003em e)-\u003e(c-\u003em f)-\u003e(d-\u003ee-\u003ef-\u003em g)-\u003ea-\u003eb-\u003ec-\u003em g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triSpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concatenative",
          "name": "with",
          "package": "concatenative",
          "signature": "(b -\u003e c) -\u003e a -\u003e d",
          "source": "src/Control-Concatenative.html#Concatenative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concatenative",
          "module": "Control.Concatenative",
          "name": "with",
          "normalized": "(a-\u003eb)-\u003ec-\u003ed",
          "package": "concatenative",
          "signature": "(b-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:with"
      }
    }
  ]
]