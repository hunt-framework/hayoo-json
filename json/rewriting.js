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
        "word": "rewriting"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Base generic functions that are used for generic rewriting.\n This module simply reexports \u003ca\u003eGenerics.Regular.Functions\u003c/a\u003e, and is provided\n for backwards-compatibility only.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Rewriting.Base",
          "name": "Base",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Base generic functions that are used for generic rewriting This module simply reexports Generics.Regular.Functions and is provided for backwards-compatibility only",
          "hierarchy": "Generics Regular Rewriting Base",
          "module": "Generics.Regular.Rewriting.Base",
          "name": "Base",
          "package": "rewriting",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Core machinery for rewriting terms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "Machinery",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Machinery.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Core machinery for rewriting terms",
          "hierarchy": "Generics Regular Rewriting Machinery",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "Machinery",
          "package": "rewriting",
          "partial": "Machinery",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eRewrite\u003c/code\u003e is a type class synonym, hiding some of the implementation\n details.\n\u003c/p\u003e\u003cp\u003eTo be able to use the rewriting functions, the user is required to provide\n an instance of this type class.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "Rewrite",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Machinery.html#Rewrite",
          "type": "class"
        },
        "index": {
          "description": "The Rewrite is type class synonym hiding some of the implementation details To be able to use the rewriting functions the user is required to provide an instance of this type class",
          "hierarchy": "Generics Regular Rewriting Machinery",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "Rewrite",
          "package": "rewriting",
          "partial": "Rewrite",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#t:Rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a rule specification to a term, obtaining the original term \n when rewriting fails.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "applyRule",
          "package": "rewriting",
          "signature": "r -\u003e Target r -\u003e Target r",
          "source": "src/Generics-Regular-Rewriting-Machinery.html#applyRule",
          "type": "function"
        },
        "index": {
          "description": "Applies rule specification to term obtaining the original term when rewriting fails",
          "hierarchy": "Generics Regular Rewriting Machinery",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "applyRule",
          "normalized": "a-\u003eTarget a-\u003eTarget a",
          "package": "rewriting",
          "partial": "Rule",
          "signature": "r-\u003eTarget r-\u003eTarget r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:applyRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a rule specification to a term, obtaining a monadic value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "applyRuleM",
          "package": "rewriting",
          "signature": "r -\u003e Target r -\u003e m (Target r)",
          "source": "src/Generics-Regular-Rewriting-Machinery.html#applyRuleM",
          "type": "function"
        },
        "index": {
          "description": "Applies rule specification to term obtaining monadic value",
          "hierarchy": "Generics Regular Rewriting Machinery",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "applyRuleM",
          "normalized": "a-\u003eTarget a-\u003eb(Target a)",
          "package": "rewriting",
          "partial": "Rule",
          "signature": "r-\u003eTarget r-\u003em(Target r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:applyRuleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrites a term, obtaining the original term when rewriting fails.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "rewrite",
          "package": "rewriting",
          "signature": "Rule a -\u003e a -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Machinery.html#rewrite",
          "type": "function"
        },
        "index": {
          "description": "Rewrites term obtaining the original term when rewriting fails",
          "hierarchy": "Generics Regular Rewriting Machinery",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "rewrite",
          "normalized": "Rule a-\u003ea-\u003ea",
          "package": "rewriting",
          "signature": "Rule a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrites a term, obtaining a monadic value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "rewriteM",
          "package": "rewriting",
          "signature": "Rule a -\u003e a -\u003e m a",
          "source": "src/Generics-Regular-Rewriting-Machinery.html#rewriteM",
          "type": "function"
        },
        "index": {
          "description": "Rewrites term obtaining monadic value",
          "hierarchy": "Generics Regular Rewriting Machinery",
          "module": "Generics.Regular.Rewriting.Machinery",
          "name": "rewriteM",
          "normalized": "Rule a-\u003ea-\u003eb a",
          "package": "rewriting",
          "signature": "Rule a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Machinery.html#v:rewriteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Types for structural representation. This module simply reexports\n \u003ca\u003eGenerics.Regular.Base\u003c/a\u003e, and is provided for backwards-compatibility only.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Rewriting.Representations",
          "name": "Representations",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Representations.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Types for structural representation This module simply reexports Generics.Regular.Base and is provided for backwards-compatibility only",
          "hierarchy": "Generics Regular Rewriting Representations",
          "module": "Generics.Regular.Rewriting.Representations",
          "name": "Representations",
          "package": "rewriting",
          "partial": "Representations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Representations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Functions for transforming a rule specification to a rule.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Rules",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Functions for transforming rule specification to rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Rules",
          "package": "rewriting",
          "partial": "Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class \u003ccode\u003eBuilder\u003c/code\u003e captures the functions, that are defined by\n induction on the type argument, that construct appropriate \u003ccode\u003eleft\u003c/code\u003e and \n \u003ccode\u003eright\u003c/code\u003e values. These values are used to transform a rule specification\n to a rule.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Builder",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html#Builder",
          "type": "class"
        },
        "index": {
          "description": "The type class Builder captures the functions that are defined by induction on the type argument that construct appropriate left and right values These values are used to transform rule specification to rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Builder",
          "package": "rewriting",
          "partial": "Builder",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Metavar",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html#Metavar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Metavar",
          "package": "rewriting",
          "partial": "Metavar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:Metavar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows metavariables on either side of a rule.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Rule",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html#Rule",
          "type": "type"
        },
        "index": {
          "description": "Allows metavariables on either side of rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Rule",
          "package": "rewriting",
          "partial": "Rule",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a rule as a value of a datatype.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "RuleSpec",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html#RuleSpec",
          "type": "data"
        },
        "index": {
          "description": "Specifies rule as value of datatype",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "RuleSpec",
          "package": "rewriting",
          "partial": "Rule Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:RuleSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends the pattern functor of a value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "SchemeOf",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html#SchemeOf",
          "type": "type"
        },
        "index": {
          "description": "Extends the pattern functor of value",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "SchemeOf",
          "package": "rewriting",
          "partial": "Scheme Of",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:SchemeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view on schemes to easily distinguish metavariables from\n pattern functor values.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "SchemeView",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Rules.html#SchemeView",
          "type": "data"
        },
        "index": {
          "description": "view on schemes to easily distinguish metavariables from pattern functor values",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "SchemeView",
          "package": "rewriting",
          "partial": "Scheme View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#t:SchemeView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Rewriting.Rules",
          "name": ":~\u003e",
          "package": "rewriting",
          "signature": "a :~\u003e a",
          "source": "src/Generics-Regular-Rewriting-Rules.html#RuleSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": ":~\u003e",
          "package": "rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Metavar",
          "package": "rewriting",
          "signature": "Metavar Metavar",
          "source": "src/Generics-Regular-Rewriting-Rules.html#SchemeView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "Metavar",
          "package": "rewriting",
          "partial": "Metavar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:Metavar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "PF",
          "package": "rewriting",
          "signature": "PF (f (Scheme f))",
          "source": "src/Generics-Regular-Rewriting-Rules.html#SchemeView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "PF",
          "package": "rewriting",
          "partial": "PF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:PF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "base",
          "package": "rewriting",
          "signature": "a -\u003e RuleSpec (Target a)",
          "source": "src/Generics-Regular-Rewriting-Rules.html#base",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "base",
          "normalized": "a-\u003eRuleSpec(Target a)",
          "package": "rewriting",
          "signature": "a-\u003eRuleSpec(Target a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "diag",
          "package": "rewriting",
          "signature": "a -\u003e [RuleSpec (Target a)]",
          "source": "src/Generics-Regular-Rewriting-Rules.html#diag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "diag",
          "normalized": "a-\u003e[RuleSpec(Target a)]",
          "package": "rewriting",
          "signature": "a-\u003e[RuleSpec(Target a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolds a \u003ccode\u003eScheme\u003c/code\u003e value given a function to apply to metavariables and a\n function to apply to a pattern functor value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "foldScheme",
          "package": "rewriting",
          "signature": "(Metavar -\u003e a) -\u003e (f a -\u003e a) -\u003e Scheme f -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Rules.html#foldScheme",
          "type": "function"
        },
        "index": {
          "description": "Folds Scheme value given function to apply to metavariables and function to apply to pattern functor value",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "foldScheme",
          "normalized": "(Metavar-\u003ea)-\u003e(b a-\u003ea)-\u003eScheme b-\u003ea",
          "package": "rewriting",
          "partial": "Scheme",
          "signature": "(Metavar-\u003ea)-\u003e(f a-\u003ea)-\u003eScheme f-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:foldScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the left-hand side of a rule.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "lhsR",
          "package": "rewriting",
          "signature": "RuleSpec a -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Rules.html#lhsR",
          "type": "function"
        },
        "index": {
          "description": "Returns the left-hand side of rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "lhsR",
          "normalized": "RuleSpec a-\u003ea",
          "package": "rewriting",
          "signature": "RuleSpec a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:lhsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a metavariable.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "metavar",
          "package": "rewriting",
          "signature": "Metavar -\u003e Scheme f",
          "source": "src/Generics-Regular-Rewriting-Rules.html#metavar",
          "type": "function"
        },
        "index": {
          "description": "Constructs metavariable",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "metavar",
          "normalized": "Metavar-\u003eScheme a",
          "package": "rewriting",
          "signature": "Metavar-\u003eScheme f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:metavar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a pattern functor value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "pf",
          "package": "rewriting",
          "signature": "f (Scheme f) -\u003e Scheme f",
          "source": "src/Generics-Regular-Rewriting-Rules.html#pf",
          "type": "function"
        },
        "index": {
          "description": "Constructs pattern functor value",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "pf",
          "normalized": "a(Scheme a)-\u003eScheme a",
          "package": "rewriting",
          "signature": "f(Scheme f)-\u003eScheme f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:pf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the right-hand side of a rule.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "rhsR",
          "package": "rewriting",
          "signature": "RuleSpec a -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Rules.html#rhsR",
          "type": "function"
        },
        "index": {
          "description": "Returns the right-hand side of rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "rhsR",
          "normalized": "RuleSpec a-\u003ea",
          "package": "rewriting",
          "signature": "RuleSpec a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:rhsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a rule specification to a rule and throws a runtime error if\n an unbound metavariable occurs in the right-hand side of the rule.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "rule",
          "package": "rewriting",
          "signature": "r -\u003e Rule (Target r)",
          "source": "src/Generics-Regular-Rewriting-Rules.html#rule",
          "type": "function"
        },
        "index": {
          "description": "Transforms rule specification to rule and throws runtime error if an unbound metavariable occurs in the right-hand side of the rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "rule",
          "normalized": "a-\u003eRule(Target a)",
          "package": "rewriting",
          "signature": "r-\u003eRule(Target r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a rule specification to a rule and returns \u003ccode\u003eNothing\u003c/code\u003e if\n an unbound metavariable occurs in the right-hand side of the rule.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "ruleM",
          "package": "rewriting",
          "signature": "r -\u003e Maybe (Rule (Target r))",
          "source": "src/Generics-Regular-Rewriting-Rules.html#ruleM",
          "type": "function"
        },
        "index": {
          "description": "Transforms rule specification to rule and returns Nothing if an unbound metavariable occurs in the right-hand side of the rule",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "ruleM",
          "normalized": "a-\u003eMaybe(Rule(Target a))",
          "package": "rewriting",
          "signature": "r-\u003eMaybe(Rule(Target r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:ruleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value corresponding to the \u003ccode\u003eSchemeView\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "schemeView",
          "package": "rewriting",
          "signature": "Scheme f -\u003e SchemeView f",
          "source": "src/Generics-Regular-Rewriting-Rules.html#schemeView",
          "type": "function"
        },
        "index": {
          "description": "Returns the value corresponding to the SchemeView",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "schemeView",
          "normalized": "Scheme a-\u003eSchemeView a",
          "package": "rewriting",
          "partial": "View",
          "signature": "Scheme f-\u003eSchemeView f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:schemeView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively converts a value to a \u003ccode\u003eSchemeOf\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "toScheme",
          "package": "rewriting",
          "signature": "a -\u003e SchemeOf a",
          "source": "src/Generics-Regular-Rewriting-Rules.html#toScheme",
          "type": "function"
        },
        "index": {
          "description": "Recursively converts value to SchemeOf value",
          "hierarchy": "Generics Regular Rewriting Rules",
          "module": "Generics.Regular.Rewriting.Rules",
          "name": "toScheme",
          "normalized": "a-\u003eSchemeOf a",
          "package": "rewriting",
          "partial": "Scheme",
          "signature": "a-\u003eSchemeOf a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Rules.html#v:toScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Generic functions for traversal strategies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "Strategies",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting-Strategies.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Generic functions for traversal strategies",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "Strategies",
          "package": "rewriting",
          "partial": "Strategies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function exhaustively in a bottom-up fashion\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "bottomup",
          "package": "rewriting",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#bottomup",
          "type": "function"
        },
        "index": {
          "description": "Applies function exhaustively in bottom-up fashion",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "bottomup",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "rewriting",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:bottomup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic function exhaustively in a bottom-up fashion.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "bottomupM",
          "package": "rewriting",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#bottomupM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic function exhaustively in bottom-up fashion",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "bottomupM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "rewriting",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:bottomupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to all the immediate children of a value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "compos",
          "package": "rewriting",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#compos",
          "type": "function"
        },
        "index": {
          "description": "Applies function to all the immediate children of value",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "compos",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "rewriting",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:compos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic function to all the immediate children of a value.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "composM",
          "package": "rewriting",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#composM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic function to all the immediate children of value",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "composM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "rewriting",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:composM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to the first subtree (possibly the tree itself) on which\n it succeeds, using a preorder traversal.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "once",
          "package": "rewriting",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#once",
          "type": "function"
        },
        "index": {
          "description": "Applies function to the first subtree possibly the tree itself on which it succeeds using preorder traversal",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "once",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "rewriting",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to the first immediate child of a value on which it succeeds.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "one",
          "package": "rewriting",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#one",
          "type": "function"
        },
        "index": {
          "description": "Applies function to the first immediate child of value on which it succeeds",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "one",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "rewriting",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function exhaustively in a top-down fashion\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "topdown",
          "package": "rewriting",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#topdown",
          "type": "function"
        },
        "index": {
          "description": "Applies function exhaustively in top-down fashion",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "topdown",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "rewriting",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:topdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic function exhaustively in a top-down fashion.\n\u003c/p\u003e",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "topdownM",
          "package": "rewriting",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m a",
          "source": "src/Generics-Regular-Rewriting-Strategies.html#topdownM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic function exhaustively in top-down fashion",
          "hierarchy": "Generics Regular Rewriting Strategies",
          "module": "Generics.Regular.Rewriting.Strategies",
          "name": "topdownM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb a",
          "package": "rewriting",
          "signature": "(a-\u003em a)-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting-Strategies.html#v:topdownM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBy importing this module, the user is able to use all the rewriting\n machinery. The user is only required to provide an instance of \n \u003ccode\u003eRegular\u003c/code\u003e and \u003ccode\u003eRewrite\u003c/code\u003e for the datatype.\n\u003c/p\u003e\u003cp\u003eConsider a datatype representing logical propositions:\n\u003c/p\u003e\u003cpre\u003e data Expr = Const Int | Expr :++: Expr | Expr :**: Expr deriving Show\n\n infixr 5 :++:\n infixr 6 :**:\n\u003c/pre\u003e\u003cp\u003eAn instance of \u003ccode\u003eRegular\u003c/code\u003e would look like:\n\u003c/p\u003e\u003cpre\u003e data Const\n data Plus\n data Times\n\n instance Constructor Const where conName _ = \"Const\"\n instance Constructor Plus where \n   conName _   = \"(:++:)\"\n   conFixity _ = Infix RightAssociative 5\n instance Constructor Times where \n   conName _   = \"(:**:)\"\n   conFixity _ = Infix RightAssociative 6\n\n type instance PF Expr =  C Const (K Int) \n                      :+: C Plus  (I :*: I) \n                      :+: C Times (I :*: I)\n\n instance Regular Expr where\n   from (Const n)    = L (C (K n))\n   from (e1 :++: e2) = R (L (C $ (I e1) :*: (I e2)))\n   from (e1 :**: e2) = R (R (C $ (I e1) :*: (I e2)))\n   to (L (C (K n)))                   = Const n\n   to (R (L (C ((I r1) :*: (I r2))))) = r1 :++: r2\n   to (R (R (C ((I r1) :*: (I r2))))) = r1 :**: r2\n\u003c/pre\u003e\u003cp\u003eAlternatively, the above code could be derived using Template Haskell:\n\u003c/p\u003e\u003cpre\u003e $(deriveConstructors ''Expr)\n $(deriveRegular ''Expr \"PFExpr\")\n type instance PF Expr = PFExpr\n\u003c/pre\u003e\u003cp\u003eAdditionally, the instance \u003ccode\u003eRewrite\u003c/code\u003e would look like:\n\u003c/p\u003e\u003cpre\u003e instance Rewrite Expr\n\u003c/pre\u003e\u003cp\u003eRules are built like this:\n\u003c/p\u003e\u003cpre\u003e rule1 :: Rule Expr\n rule1 = \n   rule $ \\x -\u003e x :++: Const 0 :~\u003e\n               x\n rule5 :: Rule Expr\n rule5 = \n   rule $ \\x y z -\u003e x :**: (y :++: z) :~\u003e\n                   (x :**: y) :++: (x :**: z)\n\u003c/pre\u003e\u003cp\u003eAnd applied as follows:\n\u003c/p\u003e\u003cpre\u003e test1 :: Maybe Expr\n test1 = rewriteM rule1 (Const 2 :++: Const 0)\n test10 :: Maybe Expr\n test10 = rewriteM rule5 ((Const 1) :**: ((Const 2) :++: (Const 3)))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Generics.Regular.Rewriting",
          "name": "Rewriting",
          "package": "rewriting",
          "source": "src/Generics-Regular-Rewriting.html",
          "type": "module"
        },
        "index": {
          "description": "By importing this module the user is able to use all the rewriting machinery The user is only required to provide an instance of Regular and Rewrite for the datatype Consider datatype representing logical propositions data Expr Const Int Expr Expr Expr Expr deriving Show infixr infixr An instance of Regular would look like data Const data Plus data Times instance Constructor Const where conName Const instance Constructor Plus where conName conFixity Infix RightAssociative instance Constructor Times where conName conFixity Infix RightAssociative type instance PF Expr Const Int Plus Times instance Regular Expr where from Const from e1 e2 e1 e2 from e1 e2 e1 e2 to Const to r1 r2 r1 r2 to r1 r2 r1 r2 Alternatively the above code could be derived using Template Haskell deriveConstructors Expr deriveRegular Expr PFExpr type instance PF Expr PFExpr Additionally the instance Rewrite would look like instance Rewrite Expr Rules are built like this rule1 Rule Expr rule1 rule Const rule5 Rule Expr rule5 rule And applied as follows test1 Maybe Expr test1 rewriteM rule1 Const Const test10 Maybe Expr test10 rewriteM rule5 Const Const Const",
          "hierarchy": "Generics Regular Rewriting",
          "module": "Generics.Regular.Rewriting",
          "name": "Rewriting",
          "package": "rewriting",
          "partial": "Rewriting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rewriting/docs/Generics-Regular-Rewriting.html#"
      }
    }
  ]
]