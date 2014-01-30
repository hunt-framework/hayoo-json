[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eControl.Concatenative brings concatenative combinators in the style of factor\n    (see \u003ca\u003ehttp://docs.factorcode.org/content/article-dataflow-combinators.html\u003c/a\u003e)\n    to haskell in a variety of interfaces, allowing a terse, pointfree style. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "module",
        "fct-source": "src/Control-Concatenative.html",
        "fct-type": "module",
        "title": "Concatenative"
      },
      "index": {
        "description": "Control.Concatenative brings concatenative combinators in the style of factor see http docs.factorcode.org content article-dataflow-combinators.html to haskell in variety of interfaces allowing terse pointfree style",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "Concatenative",
        "normalized": "",
        "package": "concatenative",
        "partial": "Concatenative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#t:Concatenative",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenative continuation\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concatenative.html#Concatenative",
        "fct-type": "newtype",
        "title": "Concatenative"
      },
      "index": {
        "description": "Concatenative continuation",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "Concatenative",
        "normalized": "",
        "package": "concatenative",
        "partial": "Concatenative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-38--38-.",
      "description": {
        "fct-descr": "\u003cp\u003eLeft associative version of \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a b c -\u003e a b c' -\u003e a b (c, c')",
        "fct-source": "src/Control-Concatenative.html#%26%26.",
        "fct-type": "function",
        "title": "(&&.)"
      },
      "index": {
        "description": "Left associative version of",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(&&.) &&.",
        "normalized": "a b c-\u003ea b d-\u003ea b(c,d)",
        "package": "concatenative",
        "partial": "",
        "signature": "a b c-\u003ea b c'-\u003ea b(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-38-.",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for cleaving\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e b) -\u003e (a -\u003e e) -\u003e Concatenative a b (e -\u003e c) c",
        "fct-source": "src/Control-Concatenative.html#%26.",
        "fct-type": "function",
        "title": "(&.)"
      },
      "index": {
        "description": "Lift function and add it to Concatenative for cleaving",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(&.) &.",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003eConcatenative a b(c-\u003ed)d",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a-\u003ee)-\u003eConcatenative a b(e-\u003ec)c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-42--42-.",
      "description": {
        "fct-descr": "\u003cp\u003eLeft associative version of \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a b c -\u003e a b' c' -\u003e a (b, b') (c, c')",
        "fct-source": "src/Control-Concatenative.html#%2A%2A.",
        "fct-type": "function",
        "title": "(**.)"
      },
      "index": {
        "description": "Left associative version of",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(**.) **.",
        "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
        "package": "concatenative",
        "partial": "",
        "signature": "a b c-\u003ea b' c'-\u003ea(b,b')(c,c')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(t -\u003e b) -\u003e (a -\u003e b1) -\u003e Concatenative a b (b1 -\u003e c) (t -\u003e c)",
        "fct-source": "src/Control-Concatenative.html#%2A.",
        "fct-type": "function",
        "title": "(*.)"
      },
      "index": {
        "description": "Lift function and add it to Concatenative for spreading",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(*.) *.",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eConcatenative c b(b-\u003ed)(a-\u003ed)",
        "package": "concatenative",
        "partial": "",
        "signature": "(t-\u003eb)-\u003e(a-\u003eb)-\u003eConcatenative a b(b-\u003ec)(t-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-62--62--64-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine with a binary function\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a b (x, y) -\u003e (x -\u003e y -\u003e z) -\u003e a b z",
        "fct-source": "src/Control-Concatenative.html#%3E%3E%40",
        "fct-type": "function",
        "title": "(\u003e\u003e@)"
      },
      "index": {
        "description": "Combine with binary function",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(\u003e\u003e@) \u003e\u003e@",
        "normalized": "a b(c,d)-\u003e(c-\u003ed-\u003ee)-\u003ea b e",
        "package": "concatenative",
        "partial": "",
        "signature": "a b(x,y)-\u003e(x-\u003ey-\u003ez)-\u003ea b z"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:-62--62-.",
      "description": {
        "fct-descr": "\u003cp\u003eLeft associative version of \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a b c -\u003e a c d -\u003e a b d",
        "fct-source": "src/Control-Concatenative.html#%3E%3E.",
        "fct-type": "function",
        "title": "(\u003e\u003e.)"
      },
      "index": {
        "description": "Left associative version of",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(\u003e\u003e.) \u003e\u003e.",
        "normalized": "a b c-\u003ea c d-\u003ea b d",
        "package": "concatenative",
        "partial": "",
        "signature": "a b c-\u003ea c d-\u003ea b d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:.-38-.",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for cleaving\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Concatenative a b c d -\u003e (a -\u003e e) -\u003e Concatenative a b (e -\u003e c) d",
        "fct-source": "src/Control-Concatenative.html#.%26.",
        "fct-type": "function",
        "title": "(.&.)"
      },
      "index": {
        "description": "Construct Concatenative for cleaving",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(.&.) .&.",
        "normalized": "Concatenative a b c d-\u003e(a-\u003ee)-\u003eConcatenative a b(e-\u003ec)d",
        "package": "concatenative",
        "partial": "",
        "signature": "Concatenative a b c d-\u003e(a-\u003ee)-\u003eConcatenative a b(e-\u003ec)d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:.-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Concatenative a b c d -\u003e (e -\u003e f) -\u003e Concatenative e b (f -\u003e c) (a -\u003e d)",
        "fct-source": "src/Control-Concatenative.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "Construct Concatenative for spreading",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "(.*.) .*.",
        "normalized": "Concatenative a b c d-\u003e(e-\u003ef)-\u003eConcatenative e b(f-\u003ec)(a-\u003ed)",
        "package": "concatenative",
        "partial": "",
        "signature": "Concatenative a b c d-\u003e(e-\u003ef)-\u003eConcatenative e b(f-\u003ec)(a-\u003ed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:Concatenative",
      "description": {
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Concatenative",
        "fct-source": "src/Control-Concatenative.html#Concatenative",
        "fct-type": "function",
        "title": "Concatenative"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "Concatenative",
        "normalized": "",
        "package": "concatenative",
        "partial": "Concatenative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:apM",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for applying a monadic function n times\n\u003c/p\u003e\u003cpre\u003e biApM (+1)\n\u003c/pre\u003e\u003cp\u003etranslates to\n\u003c/p\u003e\u003cpre\u003e $(apM 2) (+1)\n\u003c/pre\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Int -\u003e Q Exp",
        "fct-source": "src/Control-Concatenative.html#apM",
        "fct-type": "function",
        "title": "apM"
      },
      "index": {
        "description": "Create Concatenative for applying monadic function times biApM translates to apM",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "apM",
        "normalized": "Int-\u003eQ Exp",
        "package": "concatenative",
        "partial": "",
        "signature": "Int-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:apM_",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience synonym for \u003ccode\u003e\u003ca\u003ereplicateM_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Int -\u003e m a -\u003e m ()",
        "fct-source": "src/Control-Concatenative.html#apM_",
        "fct-type": "function",
        "title": "apM_"
      },
      "index": {
        "description": "Convenience synonym for replicateM",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "apM_",
        "normalized": "Int-\u003ea b-\u003ea()",
        "package": "concatenative",
        "partial": "",
        "signature": "Int-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:apN",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for applying a function n times\n\u003c/p\u003e\u003cpre\u003e biAp (+1)\n\u003c/pre\u003e\u003cp\u003etranslates to\n\u003c/p\u003e\u003cpre\u003e $(apN 2) (+1)\n\u003c/pre\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Int -\u003e Q Exp",
        "fct-source": "src/Control-Concatenative.html#apN",
        "fct-type": "function",
        "title": "apN"
      },
      "index": {
        "description": "Create Concatenative for applying function times biAp translates to apN",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "apN",
        "normalized": "Int-\u003eQ Exp",
        "package": "concatenative",
        "partial": "",
        "signature": "Int-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:bi",
      "description": {
        "fct-descr": "\u003cp\u003eApply both arguments to a and combine the results\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e (b -\u003e c -\u003e d) -\u003e a -\u003e d",
        "fct-source": "src/Control-Concatenative.html#bi",
        "fct-type": "function",
        "title": "bi"
      },
      "index": {
        "description": "Apply both arguments to and combine the results",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "bi",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(b-\u003ec-\u003ed)-\u003ea-\u003ed",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(b-\u003ec-\u003ed)-\u003ea-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biAp",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to two values and combine the results\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(t -\u003e t1) -\u003e (t1 -\u003e t1 -\u003e t2) -\u003e t -\u003e t -\u003e t2",
        "fct-source": "src/Control-Concatenative.html#biAp",
        "fct-type": "function",
        "title": "biAp"
      },
      "index": {
        "description": "Apply function to two values and combine the results",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biAp",
        "normalized": "(a-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea",
        "package": "concatenative",
        "partial": "Ap",
        "signature": "(t-\u003et)-\u003e(t-\u003et-\u003et)-\u003et-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biApM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiAp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(t -\u003e m t1) -\u003e (t1 -\u003e t1 -\u003e m t2) -\u003e t -\u003e t -\u003e m t2",
        "fct-source": "src/Control-Concatenative.html#biApM",
        "fct-type": "function",
        "title": "biApM"
      },
      "index": {
        "description": "Like biAp but functions can return monadic values",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biApM",
        "normalized": "(a-\u003eb a)-\u003e(a-\u003ea-\u003eb a)-\u003ea-\u003ea-\u003eb a",
        "package": "concatenative",
        "partial": "Ap",
        "signature": "(t-\u003em t)-\u003e(t-\u003et-\u003em t)-\u003et-\u003et-\u003em t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biApM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiApM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(t -\u003e m t1) -\u003e t -\u003e t -\u003e m ()",
        "fct-source": "src/Control-Concatenative.html#biApM_",
        "fct-type": "function",
        "title": "biApM_"
      },
      "index": {
        "description": "Like biApM but throws away the end result",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biApM_",
        "normalized": "(a-\u003eb a)-\u003ea-\u003ea-\u003eb()",
        "package": "concatenative",
        "partial": "Ap",
        "signature": "(t-\u003em t)-\u003et-\u003et-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebi\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e (b -\u003e c -\u003e m d) -\u003e a -\u003e m d",
        "fct-source": "src/Control-Concatenative.html#biM",
        "fct-type": "function",
        "title": "biM"
      },
      "index": {
        "description": "Like bi but functions can return monadic values",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biM",
        "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(c-\u003ed-\u003eb e)-\u003ea-\u003eb e",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003e(b-\u003ec-\u003em d)-\u003ea-\u003em d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concatenative.html#biM_",
        "fct-type": "function",
        "title": "biM_"
      },
      "index": {
        "description": "Like biM but throws away the end result",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biM_",
        "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003ea-\u003eb()",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biSp",
      "description": {
        "fct-descr": "\u003cp\u003eApply the first argument to a, the second to b, and combine the results\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e (c -\u003e d -\u003e e) -\u003e a -\u003e b -\u003e e",
        "fct-source": "src/Control-Concatenative.html#biSp",
        "fct-type": "function",
        "title": "biSp"
      },
      "index": {
        "description": "Apply the first argument to the second to and combine the results",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biSp",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(b-\u003ed-\u003ee)-\u003ea-\u003ec-\u003ee",
        "package": "concatenative",
        "partial": "Sp",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(c-\u003ed-\u003ee)-\u003ea-\u003eb-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:biSpM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebiSp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m c) -\u003e (b -\u003e m d) -\u003e (c -\u003e d -\u003e m e) -\u003e a -\u003e b -\u003e m e",
        "fct-source": "src/Control-Concatenative.html#biSpM",
        "fct-type": "function",
        "title": "biSpM"
      },
      "index": {
        "description": "Like biSp but functions can return monadic values",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "biSpM",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(c-\u003ee-\u003eb f)-\u003ea-\u003ed-\u003eb f",
        "package": "concatenative",
        "partial": "Sp",
        "signature": "(a-\u003em c)-\u003e(b-\u003em d)-\u003e(c-\u003ed-\u003em e)-\u003ea-\u003eb-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:both",
      "description": {
        "fct-descr": "\u003cp\u003eArrow version of \u003ccode\u003e\u003ca\u003ebiAp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a b c -\u003e a (b, b) (c, c)",
        "fct-source": "src/Control-Concatenative.html#both",
        "fct-type": "function",
        "title": "both"
      },
      "index": {
        "description": "Arrow version of biAp",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "both",
        "normalized": "a b c-\u003ea(b,b)(c,c)",
        "package": "concatenative",
        "partial": "",
        "signature": "a b c-\u003ea(b,b)(c,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a function into \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e b) -\u003e Concatenative a b c c",
        "fct-source": "src/Control-Concatenative.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Lifts function into Concatenative",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "cat",
        "normalized": "(a-\u003eb)-\u003eConcatenative a b c c",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eConcatenative a b c c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:catM",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monadic function to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e Concatenative a b (m c) (m c)",
        "fct-source": "src/Control-Concatenative.html#catM",
        "fct-type": "function",
        "title": "catM"
      },
      "index": {
        "description": "Lift monadic function to Concatenative",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "catM",
        "normalized": "(a-\u003eb c)-\u003eConcatenative a c(b d)(b d)",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eConcatenative a b(m c)(m c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:cl",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monadic function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for cleaving\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (a -\u003e m e) -\u003e Concatenative a b (e -\u003e m d) (m d)",
        "fct-source": "src/Control-Concatenative.html#cl",
        "fct-type": "function",
        "title": "cl"
      },
      "index": {
        "description": "Lift monadic function and add it to Concatenative for cleaving",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "cl",
        "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003eConcatenative a c(d-\u003eb e)(b e)",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(a-\u003em e)-\u003eConcatenative a b(e-\u003em d)(m d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:clM",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading monadic functions\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Concatenative a b c (m d) -\u003e (a -\u003e m e) -\u003e Concatenative a b (e -\u003e c) (m d)",
        "fct-source": "src/Control-Concatenative.html#clM",
        "fct-type": "function",
        "title": "clM"
      },
      "index": {
        "description": "Construct Concatenative for spreading monadic functions",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "clM",
        "normalized": "Concatenative a b c(d e)-\u003e(a-\u003ed f)-\u003eConcatenative a b(f-\u003ec)(d e)",
        "package": "concatenative",
        "partial": "",
        "signature": "Concatenative a b c(m d)-\u003e(a-\u003em e)-\u003eConcatenative a b(e-\u003ec)(m d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:dup",
      "description": {
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a b (b, b)",
        "fct-source": "src/Control-Concatenative.html#dup",
        "fct-type": "function",
        "title": "dup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "dup",
        "normalized": "a b(b,b)",
        "package": "concatenative",
        "partial": "",
        "signature": "a b(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:first",
      "description": {
        "fct-descr": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "forall b c d.  a b c -\u003e a (b, d) (c, d)",
        "fct-type": "function",
        "title": "first"
      },
      "index": {
        "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "first",
        "normalized": "a b c d e b c-\u003ee(b,f)(c,f)",
        "package": "concatenative",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(b,d)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:ifte",
      "description": {
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e Bool)-\u003e (a -\u003e b)-\u003e (a -\u003e b)-\u003e a-\u003e b",
        "fct-type": "function",
        "title": "ifte"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "ifte",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "forall b c d.  a b c -\u003e a (d, b) (d, c)",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "second",
        "normalized": "a b c d e b c-\u003ee(f,b)(f,c)",
        "package": "concatenative",
        "partial": "",
        "signature": "forall b c d. a b c-\u003ea(d,b)(d,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:sp",
      "description": {
        "fct-descr": "\u003cp\u003eLift a monadic function and add it to a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (e -\u003e m f) -\u003e Concatenative e b (f -\u003e m d) (a -\u003e m d)",
        "fct-source": "src/Control-Concatenative.html#sp",
        "fct-type": "function",
        "title": "sp"
      },
      "index": {
        "description": "Lift monadic function and add it to Concatenative for spreading",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "sp",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eConcatenative d c(e-\u003eb f)(a-\u003eb f)",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(e-\u003em f)-\u003eConcatenative e b(f-\u003em d)(a-\u003em d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:spM",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eConcatenative\u003c/a\u003e\u003c/code\u003e for spreading monadic functions\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "Concatenative a b c (m d) -\u003e (e -\u003e m f) -\u003e Concatenative e b (f -\u003e c) (a -\u003e m d)",
        "fct-source": "src/Control-Concatenative.html#spM",
        "fct-type": "function",
        "title": "spM"
      },
      "index": {
        "description": "Construct Concatenative for spreading monadic functions",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "spM",
        "normalized": "Concatenative a b c(d e)-\u003e(f-\u003ed g)-\u003eConcatenative f b(g-\u003ec)(a-\u003ed e)",
        "package": "concatenative",
        "partial": "",
        "signature": "Concatenative a b c(m d)-\u003e(e-\u003em f)-\u003eConcatenative e b(f-\u003ec)(a-\u003em d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:swap",
      "description": {
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "a (x, y) (y, x)",
        "fct-source": "src/Control-Concatenative.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "swap",
        "normalized": "a(b,c)(c,b)",
        "package": "concatenative",
        "partial": "",
        "signature": "a(x,y)(y,x)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:tri",
      "description": {
        "fct-descr": "\u003cp\u003eApply each of three arguments to a and combine the results\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e (a -\u003e d) -\u003e (b -\u003e c -\u003e d -\u003e e) -\u003e a -\u003e e",
        "fct-source": "src/Control-Concatenative.html#tri",
        "fct-type": "function",
        "title": "tri"
      },
      "index": {
        "description": "Apply each of three arguments to and combine the results",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "tri",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003e(b-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ee",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003e(a-\u003ed)-\u003e(b-\u003ec-\u003ed-\u003ee)-\u003ea-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triAp",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to three values and combine the results\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e b -\u003e b -\u003e c) -\u003e a -\u003e a -\u003e a -\u003e c",
        "fct-source": "src/Control-Concatenative.html#triAp",
        "fct-type": "function",
        "title": "triAp"
      },
      "index": {
        "description": "Apply function to three values and combine the results",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triAp",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb-\u003ec)-\u003ea-\u003ea-\u003ea-\u003ec",
        "package": "concatenative",
        "partial": "Ap",
        "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb-\u003ec)-\u003ea-\u003ea-\u003ea-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triApM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriAp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (b -\u003e b -\u003e b -\u003e m c) -\u003e a -\u003e a -\u003e a -\u003e m c",
        "fct-source": "src/Control-Concatenative.html#triApM",
        "fct-type": "function",
        "title": "triApM"
      },
      "index": {
        "description": "Like triAp but functions can return monadic values",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triApM",
        "normalized": "(a-\u003eb c)-\u003e(c-\u003ec-\u003ec-\u003eb d)-\u003ea-\u003ea-\u003ea-\u003eb d",
        "package": "concatenative",
        "partial": "Ap",
        "signature": "(a-\u003em b)-\u003e(b-\u003eb-\u003eb-\u003em c)-\u003ea-\u003ea-\u003ea-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triApM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriApM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e a -\u003e a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concatenative.html#triApM_",
        "fct-type": "function",
        "title": "triApM_"
      },
      "index": {
        "description": "Like triApM but throws away the end result",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triApM_",
        "normalized": "(a-\u003eb c)-\u003ea-\u003ea-\u003ea-\u003eb()",
        "package": "concatenative",
        "partial": "Ap",
        "signature": "(a-\u003em b)-\u003ea-\u003ea-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etri\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e (a -\u003e m d) -\u003e (b -\u003e c -\u003e d -\u003e m e) -\u003e a -\u003e m e",
        "fct-source": "src/Control-Concatenative.html#triM",
        "fct-type": "function",
        "title": "triM"
      },
      "index": {
        "description": "Like tri but functions can return monadic values",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triM",
        "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(a-\u003eb e)-\u003e(c-\u003ed-\u003ee-\u003eb f)-\u003ea-\u003eb f",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003e(a-\u003em d)-\u003e(b-\u003ec-\u003ed-\u003em e)-\u003ea-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriM\u003c/a\u003e\u003c/code\u003e, but throws away the end result\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m b) -\u003e (a -\u003e m c) -\u003e (a -\u003e m d) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concatenative.html#triM_",
        "fct-type": "function",
        "title": "triM_"
      },
      "index": {
        "description": "Like triM but throws away the end result",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triM_",
        "normalized": "(a-\u003eb c)-\u003e(a-\u003eb d)-\u003e(a-\u003eb e)-\u003ea-\u003eb()",
        "package": "concatenative",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e(a-\u003em c)-\u003e(a-\u003em d)-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triSp",
      "description": {
        "fct-descr": "\u003cp\u003eApply the first argument to a, the second to b, and the third to c, combining the results\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e d) -\u003e (b -\u003e e) -\u003e (c -\u003e f) -\u003e (d -\u003e e -\u003e f -\u003e g) -\u003e a -\u003e b -\u003e c -\u003e g",
        "fct-source": "src/Control-Concatenative.html#triSp",
        "fct-type": "function",
        "title": "triSp"
      },
      "index": {
        "description": "Apply the first argument to the second to and the third to combining the results",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triSp",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(e-\u003ef)-\u003e(b-\u003ed-\u003ef-\u003eg)-\u003ea-\u003ec-\u003ee-\u003eg",
        "package": "concatenative",
        "partial": "Sp",
        "signature": "(a-\u003ed)-\u003e(b-\u003ee)-\u003e(c-\u003ef)-\u003e(d-\u003ee-\u003ef-\u003eg)-\u003ea-\u003eb-\u003ec-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:triSpM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etriSp\u003c/a\u003e\u003c/code\u003e, but functions can return monadic values\n\u003c/p\u003e",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(a -\u003e m d) -\u003e (b -\u003e m e) -\u003e (c -\u003e m f) -\u003e (d -\u003e e -\u003e f -\u003e m g) -\u003e a -\u003e b -\u003e c -\u003e m g",
        "fct-source": "src/Control-Concatenative.html#triSpM",
        "fct-type": "function",
        "title": "triSpM"
      },
      "index": {
        "description": "Like triSp but functions can return monadic values",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "triSpM",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003e(f-\u003eb g)-\u003e(c-\u003ee-\u003eg-\u003eb h)-\u003ea-\u003ed-\u003ef-\u003eb h",
        "package": "concatenative",
        "partial": "Sp",
        "signature": "(a-\u003em d)-\u003e(b-\u003em e)-\u003e(c-\u003em f)-\u003e(d-\u003ee-\u003ef-\u003em g)-\u003ea-\u003eb-\u003ec-\u003em g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concatenative/docs/Control-Concatenative.html#v:with",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concatenative",
        "fct-package": "concatenative",
        "fct-signature": "(b -\u003e c) -\u003e a -\u003e d",
        "fct-source": "src/Control-Concatenative.html#Concatenative",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concatenative",
        "module": "Control.Concatenative",
        "name": "with",
        "normalized": "(a-\u003eb)-\u003ec-\u003ed",
        "package": "concatenative",
        "partial": "",
        "signature": "(b-\u003ec)-\u003ea-\u003ed"
      }
    }
  }
]