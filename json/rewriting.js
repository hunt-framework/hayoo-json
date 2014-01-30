[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Base generic functions that are used for generic rewriting.\n This module simply reexports \u003ca\u003eGenerics.Regular.Functions\u003c/a\u003e, and is provided\n for backwards-compatibility only.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.Rewriting.Base",
        "fct-package": "rewriting",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-Rewriting-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Summary Base generic functions that are used for generic rewriting This module simply reexports Generics.Regular.Functions and is provided for backwards-compatibility only",
        "hierarchy": "Generics Regular Rewriting Base",
        "module": "Generics.Regular.Rewriting.Base",
        "name": "Base",
        "normalized": "",
        "package": "rewriting",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Core machinery for rewriting terms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.Rewriting.Machinery",
        "fct-package": "rewriting",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-Rewriting-Machinery.html",
        "fct-type": "module",
        "title": "Machinery"
      },
      "index": {
        "description": "Summary Core machinery for rewriting terms",
        "hierarchy": "Generics Regular Rewriting Machinery",
        "module": "Generics.Regular.Rewriting.Machinery",
        "name": "Machinery",
        "normalized": "",
        "package": "rewriting",
        "partial": "Machinery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#t:Rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eRewrite\u003c/code\u003e is a type class synonym, hiding some of the implementation\n details.\n\u003c/p\u003e\u003cp\u003eTo be able to use the rewriting functions, the user is required to provide\n an instance of this type class.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Machinery",
        "fct-package": "rewriting",
        "fct-signature": "class",
        "fct-source": "src/Generics-Regular-Rewriting-Machinery.html#Rewrite",
        "fct-type": "class",
        "title": "Rewrite"
      },
      "index": {
        "description": "The Rewrite is type class synonym hiding some of the implementation details To be able to use the rewriting functions the user is required to provide an instance of this type class",
        "hierarchy": "Generics Regular Rewriting Machinery",
        "module": "Generics.Regular.Rewriting.Machinery",
        "name": "Rewrite",
        "normalized": "",
        "package": "rewriting",
        "partial": "Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:applyRule",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a rule specification to a term, obtaining the original term \n when rewriting fails.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Machinery",
        "fct-package": "rewriting",
        "fct-signature": "r -\u003e Target r -\u003e Target r",
        "fct-source": "src/Generics-Regular-Rewriting-Machinery.html#applyRule",
        "fct-type": "function",
        "title": "applyRule"
      },
      "index": {
        "description": "Applies rule specification to term obtaining the original term when rewriting fails",
        "hierarchy": "Generics Regular Rewriting Machinery",
        "module": "Generics.Regular.Rewriting.Machinery",
        "name": "applyRule",
        "normalized": "a-\u003eTarget a-\u003eTarget a",
        "package": "rewriting",
        "partial": "Rule",
        "signature": "r-\u003eTarget r-\u003eTarget r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:applyRuleM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a rule specification to a term, obtaining a monadic value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Machinery",
        "fct-package": "rewriting",
        "fct-signature": "r -\u003e Target r -\u003e m (Target r)",
        "fct-source": "src/Generics-Regular-Rewriting-Machinery.html#applyRuleM",
        "fct-type": "function",
        "title": "applyRuleM"
      },
      "index": {
        "description": "Applies rule specification to term obtaining monadic value",
        "hierarchy": "Generics Regular Rewriting Machinery",
        "module": "Generics.Regular.Rewriting.Machinery",
        "name": "applyRuleM",
        "normalized": "a-\u003eTarget a-\u003eb(Target a)",
        "package": "rewriting",
        "partial": "Rule",
        "signature": "r-\u003eTarget r-\u003em(Target r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:rewrite",
      "description": {
        "fct-descr": "\u003cp\u003eRewrites a term, obtaining the original term when rewriting fails.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Machinery",
        "fct-package": "rewriting",
        "fct-signature": "Rule a -\u003e a -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Machinery.html#rewrite",
        "fct-type": "function",
        "title": "rewrite"
      },
      "index": {
        "description": "Rewrites term obtaining the original term when rewriting fails",
        "hierarchy": "Generics Regular Rewriting Machinery",
        "module": "Generics.Regular.Rewriting.Machinery",
        "name": "rewrite",
        "normalized": "Rule a-\u003ea-\u003ea",
        "package": "rewriting",
        "partial": "",
        "signature": "Rule a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:rewriteM",
      "description": {
        "fct-descr": "\u003cp\u003eRewrites a term, obtaining a monadic value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Machinery",
        "fct-package": "rewriting",
        "fct-signature": "Rule a -\u003e a -\u003e m a",
        "fct-source": "src/Generics-Regular-Rewriting-Machinery.html#rewriteM",
        "fct-type": "function",
        "title": "rewriteM"
      },
      "index": {
        "description": "Rewrites term obtaining monadic value",
        "hierarchy": "Generics Regular Rewriting Machinery",
        "module": "Generics.Regular.Rewriting.Machinery",
        "name": "rewriteM",
        "normalized": "Rule a-\u003ea-\u003eb a",
        "package": "rewriting",
        "partial": "",
        "signature": "Rule a-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Representations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Types for structural representation. This module simply reexports\n \u003ca\u003eGenerics.Regular.Base\u003c/a\u003e, and is provided for backwards-compatibility only.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.Rewriting.Representations",
        "fct-package": "rewriting",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-Rewriting-Representations.html",
        "fct-type": "module",
        "title": "Representations"
      },
      "index": {
        "description": "Summary Types for structural representation This module simply reexports Generics.Regular.Base and is provided for backwards-compatibility only",
        "hierarchy": "Generics Regular Rewriting Representations",
        "module": "Generics.Regular.Rewriting.Representations",
        "name": "Representations",
        "normalized": "",
        "package": "rewriting",
        "partial": "Representations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Functions for transforming a rule specification to a rule.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html",
        "fct-type": "module",
        "title": "Rules"
      },
      "index": {
        "description": "Summary Functions for transforming rule specification to rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "Rules",
        "normalized": "",
        "package": "rewriting",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:Builder",
      "description": {
        "fct-descr": "\u003cp\u003eThe type class \u003ccode\u003eBuilder\u003c/code\u003e captures the functions, that are defined by\n induction on the type argument, that construct appropriate \u003ccode\u003eleft\u003c/code\u003e and \n \u003ccode\u003eright\u003c/code\u003e values. These values are used to transform a rule specification\n to a rule.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "class",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#Builder",
        "fct-type": "class",
        "title": "Builder"
      },
      "index": {
        "description": "The type class Builder captures the functions that are defined by induction on the type argument that construct appropriate left and right values These values are used to transform rule specification to rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "Builder",
        "normalized": "",
        "package": "rewriting",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:Metavar",
      "description": {
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "type",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#Metavar",
        "fct-type": "type",
        "title": "Metavar"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "Metavar",
        "normalized": "",
        "package": "rewriting",
        "partial": "Metavar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:Rule",
      "description": {
        "fct-descr": "\u003cp\u003eAllows metavariables on either side of a rule.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "type",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#Rule",
        "fct-type": "type",
        "title": "Rule"
      },
      "index": {
        "description": "Allows metavariables on either side of rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "Rule",
        "normalized": "",
        "package": "rewriting",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:RuleSpec",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a rule as a value of a datatype.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "data",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#RuleSpec",
        "fct-type": "data",
        "title": "RuleSpec"
      },
      "index": {
        "description": "Specifies rule as value of datatype",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "RuleSpec",
        "normalized": "",
        "package": "rewriting",
        "partial": "Rule Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:SchemeOf",
      "description": {
        "fct-descr": "\u003cp\u003eExtends the pattern functor of a value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "type",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#SchemeOf",
        "fct-type": "type",
        "title": "SchemeOf"
      },
      "index": {
        "description": "Extends the pattern functor of value",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "SchemeOf",
        "normalized": "",
        "package": "rewriting",
        "partial": "Scheme Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:SchemeView",
      "description": {
        "fct-descr": "\u003cp\u003eA view on schemes to easily distinguish metavariables from\n pattern functor values.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "data",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#SchemeView",
        "fct-type": "data",
        "title": "SchemeView"
      },
      "index": {
        "description": "view on schemes to easily distinguish metavariables from pattern functor values",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "SchemeView",
        "normalized": "",
        "package": "rewriting",
        "partial": "Scheme View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v::-126--62-",
      "description": {
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "a :~\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#RuleSpec",
        "fct-type": "function",
        "title": ":~\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": ":~\u003e",
        "normalized": "",
        "package": "rewriting",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:Metavar",
      "description": {
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "Metavar Metavar",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#SchemeView",
        "fct-type": "function",
        "title": "Metavar"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "Metavar",
        "normalized": "",
        "package": "rewriting",
        "partial": "Metavar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:PF",
      "description": {
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "PF (f (Scheme f))",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#SchemeView",
        "fct-type": "function",
        "title": "PF"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "PF",
        "normalized": "",
        "package": "rewriting",
        "partial": "PF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:base",
      "description": {
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "a -\u003e RuleSpec (Target a)",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#base",
        "fct-type": "method",
        "title": "base"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "base",
        "normalized": "a-\u003eRuleSpec(Target a)",
        "package": "rewriting",
        "partial": "",
        "signature": "a-\u003eRuleSpec(Target a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:diag",
      "description": {
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "a -\u003e [RuleSpec (Target a)]",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#diag",
        "fct-type": "method",
        "title": "diag"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "diag",
        "normalized": "a-\u003e[RuleSpec(Target a)]",
        "package": "rewriting",
        "partial": "",
        "signature": "a-\u003e[RuleSpec(Target a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:foldScheme",
      "description": {
        "fct-descr": "\u003cp\u003eFolds a \u003ccode\u003eScheme\u003c/code\u003e value given a function to apply to metavariables and a\n function to apply to a pattern functor value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "(Metavar -\u003e a) -\u003e (f a -\u003e a) -\u003e Scheme f -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#foldScheme",
        "fct-type": "function",
        "title": "foldScheme"
      },
      "index": {
        "description": "Folds Scheme value given function to apply to metavariables and function to apply to pattern functor value",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "foldScheme",
        "normalized": "(Metavar-\u003ea)-\u003e(b a-\u003ea)-\u003eScheme b-\u003ea",
        "package": "rewriting",
        "partial": "Scheme",
        "signature": "(Metavar-\u003ea)-\u003e(f a-\u003ea)-\u003eScheme f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:lhsR",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the left-hand side of a rule.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "RuleSpec a -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#lhsR",
        "fct-type": "function",
        "title": "lhsR"
      },
      "index": {
        "description": "Returns the left-hand side of rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "lhsR",
        "normalized": "RuleSpec a-\u003ea",
        "package": "rewriting",
        "partial": "",
        "signature": "RuleSpec a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:metavar",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a metavariable.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "Metavar -\u003e Scheme f",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#metavar",
        "fct-type": "function",
        "title": "metavar"
      },
      "index": {
        "description": "Constructs metavariable",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "metavar",
        "normalized": "Metavar-\u003eScheme a",
        "package": "rewriting",
        "partial": "",
        "signature": "Metavar-\u003eScheme f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:pf",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a pattern functor value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "f (Scheme f) -\u003e Scheme f",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#pf",
        "fct-type": "function",
        "title": "pf"
      },
      "index": {
        "description": "Constructs pattern functor value",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "pf",
        "normalized": "a(Scheme a)-\u003eScheme a",
        "package": "rewriting",
        "partial": "",
        "signature": "f(Scheme f)-\u003eScheme f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:rhsR",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the right-hand side of a rule.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "RuleSpec a -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#rhsR",
        "fct-type": "function",
        "title": "rhsR"
      },
      "index": {
        "description": "Returns the right-hand side of rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "rhsR",
        "normalized": "RuleSpec a-\u003ea",
        "package": "rewriting",
        "partial": "",
        "signature": "RuleSpec a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:rule",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a rule specification to a rule and throws a runtime error if\n an unbound metavariable occurs in the right-hand side of the rule.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "r -\u003e Rule (Target r)",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#rule",
        "fct-type": "function",
        "title": "rule"
      },
      "index": {
        "description": "Transforms rule specification to rule and throws runtime error if an unbound metavariable occurs in the right-hand side of the rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "rule",
        "normalized": "a-\u003eRule(Target a)",
        "package": "rewriting",
        "partial": "",
        "signature": "r-\u003eRule(Target r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:ruleM",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a rule specification to a rule and returns \u003ccode\u003eNothing\u003c/code\u003e if\n an unbound metavariable occurs in the right-hand side of the rule.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "r -\u003e Maybe (Rule (Target r))",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#ruleM",
        "fct-type": "function",
        "title": "ruleM"
      },
      "index": {
        "description": "Transforms rule specification to rule and returns Nothing if an unbound metavariable occurs in the right-hand side of the rule",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "ruleM",
        "normalized": "a-\u003eMaybe(Rule(Target a))",
        "package": "rewriting",
        "partial": "",
        "signature": "r-\u003eMaybe(Rule(Target r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:schemeView",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the value corresponding to the \u003ccode\u003eSchemeView\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "Scheme f -\u003e SchemeView f",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#schemeView",
        "fct-type": "function",
        "title": "schemeView"
      },
      "index": {
        "description": "Returns the value corresponding to the SchemeView",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "schemeView",
        "normalized": "Scheme a-\u003eSchemeView a",
        "package": "rewriting",
        "partial": "View",
        "signature": "Scheme f-\u003eSchemeView f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:toScheme",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively converts a value to a \u003ccode\u003eSchemeOf\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Rules",
        "fct-package": "rewriting",
        "fct-signature": "a -\u003e SchemeOf a",
        "fct-source": "src/Generics-Regular-Rewriting-Rules.html#toScheme",
        "fct-type": "function",
        "title": "toScheme"
      },
      "index": {
        "description": "Recursively converts value to SchemeOf value",
        "hierarchy": "Generics Regular Rewriting Rules",
        "module": "Generics.Regular.Rewriting.Rules",
        "name": "toScheme",
        "normalized": "a-\u003eSchemeOf a",
        "package": "rewriting",
        "partial": "Scheme",
        "signature": "a-\u003eSchemeOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions for traversal strategies.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html",
        "fct-type": "module",
        "title": "Strategies"
      },
      "index": {
        "description": "Summary Generic functions for traversal strategies",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "Strategies",
        "normalized": "",
        "package": "rewriting",
        "partial": "Strategies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:bottomup",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function exhaustively in a bottom-up fashion\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#bottomup",
        "fct-type": "function",
        "title": "bottomup"
      },
      "index": {
        "description": "Applies function exhaustively in bottom-up fashion",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "bottomup",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:bottomupM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic function exhaustively in a bottom-up fashion.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#bottomupM",
        "fct-type": "function",
        "title": "bottomupM"
      },
      "index": {
        "description": "Applies monadic function exhaustively in bottom-up fashion",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "bottomupM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:compos",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to all the immediate children of a value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#compos",
        "fct-type": "function",
        "title": "compos"
      },
      "index": {
        "description": "Applies function to all the immediate children of value",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "compos",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:composM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic function to all the immediate children of a value.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#composM",
        "fct-type": "function",
        "title": "composM"
      },
      "index": {
        "description": "Applies monadic function to all the immediate children of value",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "composM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to the first subtree (possibly the tree itself) on which\n it succeeds, using a preorder traversal.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Applies function to the first subtree possibly the tree itself on which it succeeds using preorder traversal",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "once",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to the first immediate child of a value on which it succeeds.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "Applies function to the first immediate child of value on which it succeeds",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "one",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:topdown",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function exhaustively in a top-down fashion\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#topdown",
        "fct-type": "function",
        "title": "topdown"
      },
      "index": {
        "description": "Applies function exhaustively in top-down fashion",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "topdown",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:topdownM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic function exhaustively in a top-down fashion.\n\u003c/p\u003e",
        "fct-module": "Generics.Regular.Rewriting.Strategies",
        "fct-package": "rewriting",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e m a",
        "fct-source": "src/Generics-Regular-Rewriting-Strategies.html#topdownM",
        "fct-type": "function",
        "title": "topdownM"
      },
      "index": {
        "description": "Applies monadic function exhaustively in top-down fashion",
        "hierarchy": "Generics Regular Rewriting Strategies",
        "module": "Generics.Regular.Rewriting.Strategies",
        "name": "topdownM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
        "package": "rewriting",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBy importing this module, the user is able to use all the rewriting\n machinery. The user is only required to provide an instance of \n \u003ccode\u003eRegular\u003c/code\u003e and \u003ccode\u003eRewrite\u003c/code\u003e for the datatype.\n\u003c/p\u003e\u003cp\u003eConsider a datatype representing logical propositions:\n\u003c/p\u003e\u003cpre\u003e data Expr = Const Int | Expr :++: Expr | Expr :**: Expr deriving Show\n\n infixr 5 :++:\n infixr 6 :**:\n\u003c/pre\u003e\u003cp\u003eAn instance of \u003ccode\u003eRegular\u003c/code\u003e would look like:\n\u003c/p\u003e\u003cpre\u003e data Const\n data Plus\n data Times\n\n instance Constructor Const where conName _ = \"Const\"\n instance Constructor Plus where \n   conName _   = \"(:++:)\"\n   conFixity _ = Infix RightAssociative 5\n instance Constructor Times where \n   conName _   = \"(:**:)\"\n   conFixity _ = Infix RightAssociative 6\n\n type instance PF Expr =  C Const (K Int) \n                      :+: C Plus  (I :*: I) \n                      :+: C Times (I :*: I)\n\n instance Regular Expr where\n   from (Const n)    = L (C (K n))\n   from (e1 :++: e2) = R (L (C $ (I e1) :*: (I e2)))\n   from (e1 :**: e2) = R (R (C $ (I e1) :*: (I e2)))\n   to (L (C (K n)))                   = Const n\n   to (R (L (C ((I r1) :*: (I r2))))) = r1 :++: r2\n   to (R (R (C ((I r1) :*: (I r2))))) = r1 :**: r2\n\u003c/pre\u003e\u003cp\u003eAlternatively, the above code could be derived using Template Haskell:\n\u003c/p\u003e\u003cpre\u003e $(deriveConstructors ''Expr)\n $(deriveRegular ''Expr \"PFExpr\")\n type instance PF Expr = PFExpr\n\u003c/pre\u003e\u003cp\u003eAdditionally, the instance \u003ccode\u003eRewrite\u003c/code\u003e would look like:\n\u003c/p\u003e\u003cpre\u003e instance Rewrite Expr\n\u003c/pre\u003e\u003cp\u003eRules are built like this:\n\u003c/p\u003e\u003cpre\u003e rule1 :: Rule Expr\n rule1 = \n   rule $ \\x -\u003e x :++: Const 0 :~\u003e\n               x\n rule5 :: Rule Expr\n rule5 = \n   rule $ \\x y z -\u003e x :**: (y :++: z) :~\u003e\n                   (x :**: y) :++: (x :**: z)\n\u003c/pre\u003e\u003cp\u003eAnd applied as follows:\n\u003c/p\u003e\u003cpre\u003e test1 :: Maybe Expr\n test1 = rewriteM rule1 (Const 2 :++: Const 0)\n test10 :: Maybe Expr\n test10 = rewriteM rule5 ((Const 1) :**: ((Const 2) :++: (Const 3)))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Generics.Regular.Rewriting",
        "fct-package": "rewriting",
        "fct-signature": "module",
        "fct-source": "src/Generics-Regular-Rewriting.html",
        "fct-type": "module",
        "title": "Rewriting"
      },
      "index": {
        "description": "By importing this module the user is able to use all the rewriting machinery The user is only required to provide an instance of Regular and Rewrite for the datatype Consider datatype representing logical propositions data Expr Const Int Expr Expr Expr Expr deriving Show infixr infixr An instance of Regular would look like data Const data Plus data Times instance Constructor Const where conName Const instance Constructor Plus where conName conFixity Infix RightAssociative instance Constructor Times where conName conFixity Infix RightAssociative type instance PF Expr Const Int Plus Times instance Regular Expr where from Const from e1 e2 e1 e2 from e1 e2 e1 e2 to Const to r1 r2 r1 r2 to r1 r2 r1 r2 Alternatively the above code could be derived using Template Haskell deriveConstructors Expr deriveRegular Expr PFExpr type instance PF Expr PFExpr Additionally the instance Rewrite would look like instance Rewrite Expr Rules are built like this rule1 Rule Expr rule1 rule Const rule5 Rule Expr rule5 rule And applied as follows test1 Maybe Expr test1 rewriteM rule1 Const Const test10 Maybe Expr test10 rewriteM rule5 Const Const Const",
        "hierarchy": "Generics Regular Rewriting",
        "module": "Generics.Regular.Rewriting",
        "name": "Rewriting",
        "normalized": "",
        "package": "rewriting",
        "partial": "Rewriting",
        "signature": ""
      }
    }
  }
]