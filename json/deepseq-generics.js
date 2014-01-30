[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote: Beyond the primary scope of providing the \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e\n       helper, this module also re-exports the definitions from\n       \u003ca\u003eControl.DeepSeq\u003c/a\u003e for convenience. If this poses any\n       problems, just use qualified or explicit import statements\n       (see code usage example in the \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e description)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "module",
        "fct-source": "src/Control-DeepSeq-Generics.html",
        "fct-type": "module",
        "title": "Generics"
      },
      "index": {
        "description": "Note Beyond the primary scope of providing the genericRnf helper this module also re-exports the definitions from Control.DeepSeq for convenience If this poses any problems just use qualified or explicit import statements see code usage example in the genericRnf description",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "Generics",
        "normalized": "",
        "package": "deepseq-generics",
        "partial": "Generics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#t:NFData",
      "description": {
        "fct-descr": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "NFData"
      },
      "index": {
        "description": "class of types that can be fully evaluated",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "NFData",
        "normalized": "",
        "package": "deepseq-generics",
        "partial": "NFData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#v:-36--33--33-",
      "description": {
        "fct-descr": "\u003cp\u003ethe deep analogue of \u003ccode\u003e\u003ca\u003e$!\u003c/a\u003e\u003c/code\u003e.  In the expression \u003ccode\u003ef $!! x\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e is\n fully evaluated before the function \u003ccode\u003ef\u003c/code\u003e is applied to it.\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-type": "function",
        "title": "($!!)"
      },
      "index": {
        "description": "the deep analogue of In the expression is fully evaluated before the function is applied to it",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "($!!) $!!",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "deepseq-generics",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#v:deepseq",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e: fully evaluates the first argument, before returning the\n second.\n\u003c/p\u003e\u003cp\u003eThe name \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e is used to illustrate the relationship to \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e:\n where \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e is shallow in the sense that it only evaluates the top\n level of its argument, \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e traverses the entire data structure\n evaluating it completely.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e can be useful for forcing pending exceptions,\n eradicating space leaks, or forcing lazy I/O to happen.  It is\n also useful in conjunction with parallel Strategies (see the\n \u003ccode\u003eparallel\u003c/code\u003e package).\n\u003c/p\u003e\u003cp\u003eThere is no guarantee about the ordering of evaluation.  The\n implementation may evaluate the components of the structure in\n any order or in parallel.  To impose an actual order on\n evaluation, use \u003ccode\u003epseq\u003c/code\u003e from \u003ca\u003eControl.Parallel\u003c/a\u003e in the\n \u003ccode\u003eparallel\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-type": "function",
        "title": "deepseq"
      },
      "index": {
        "description": "deepseq fully evaluates the first argument before returning the second The name deepseq is used to illustrate the relationship to seq where seq is shallow in the sense that it only evaluates the top level of its argument deepseq traverses the entire data structure evaluating it completely deepseq can be useful for forcing pending exceptions eradicating space leaks or forcing lazy to happen It is also useful in conjunction with parallel Strategies see the parallel package There is no guarantee about the ordering of evaluation The implementation may evaluate the components of the structure in any order or in parallel To impose an actual order on evaluation use pseq from Control.Parallel in the parallel package",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "deepseq",
        "normalized": "a-\u003eb-\u003eb",
        "package": "deepseq-generics",
        "partial": "",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003ea variant of \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e that is useful in some circumstances:\n\u003c/p\u003e\u003cpre\u003e force x = x `deepseq` x\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eforce x\u003c/code\u003e fully evaluates \u003ccode\u003ex\u003c/code\u003e, and then returns it.  Note that\n \u003ccode\u003eforce x\u003c/code\u003e only performs evaluation when the value of \u003ccode\u003eforce x\u003c/code\u003e\n itself is demanded, so essentially it turns shallow evaluation into\n deep evaluation.\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "a -\u003e a",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "variant of deepseq that is useful in some circumstances force deepseq force fully evaluates and then returns it Note that force only performs evaluation when the value of force itself is demanded so essentially it turns shallow evaluation into deep evaluation",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "force",
        "normalized": "a-\u003ea",
        "package": "deepseq-generics",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#v:genericRnf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003eGHC.Generics\u003c/a\u003e-based \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e implementation\n\u003c/p\u003e\u003cp\u003eThis provides a generic \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e implementation for one type at a\n time. If the type of the value \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e is asked to reduce to\n NF contains values of other types, those types have to provide\n \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instances. This also means that recursive types can only\n be used with \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e if a \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance has been defined\n as well (see examples below).\n\u003c/p\u003e\u003cp\u003eThe typical usage for \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e is for reducing boilerplate code\n when defining \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instances for ordinary algebraic\n datatypes. See the code below for some simple usage examples:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n import Control.DeepSeq\n import Control.DeepSeq.Generics (genericRnf)\n import GHC.Generics\n\n -- simple record\n data Foo = Foo AccountId Name Address\n          deriving Generic\n\n type Address      = [String]\n type Name         = String\n newtype AccountId = AccountId Int\n\n instance NFData AccountId\n instance NFData Foo where rnf = genericRnf\n\n -- recursive list-like type\n data N = Z | S N deriving Generic\n\n instance NFData N where rnf = genericRnf\n\n -- parametric & recursive type\n data Bar a = Bar0 | Bar1 a | Bar2 (Bar a)\n            deriving Generic\n\n instance NFData a =\u003e NFData (Bar a) where rnf = genericRnf\n\u003c/pre\u003e\u003cp\u003eNote: The \u003ccode\u003eGNFData\u003c/code\u003e type-class showing up in the type-signature is\n       used internally and not exported on purpose currently.\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "a -\u003e ()",
        "fct-source": "src/Control-DeepSeq-Generics.html#genericRnf",
        "fct-type": "function",
        "title": "genericRnf"
      },
      "index": {
        "description": "GHC.Generics based rnf implementation This provides generic rnf implementation for one type at time If the type of the value genericRnf is asked to reduce to NF contains values of other types those types have to provide NFData instances This also means that recursive types can only be used with genericRnf if NFData instance has been defined as well see examples below The typical usage for genericRnf is for reducing boilerplate code when defining NFData instances for ordinary algebraic datatypes See the code below for some simple usage examples LANGUAGE DeriveGeneric import Control.DeepSeq import Control.DeepSeq.Generics genericRnf import GHC.Generics simple record data Foo Foo AccountId Name Address deriving Generic type Address String type Name String newtype AccountId AccountId Int instance NFData AccountId instance NFData Foo where rnf genericRnf recursive list-like type data deriving Generic instance NFData where rnf genericRnf parametric recursive type data Bar Bar0 Bar1 Bar2 Bar deriving Generic instance NFData NFData Bar where rnf genericRnf Note The GNFData type-class showing up in the type-signature is used internally and not exported on purpose currently",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "genericRnf",
        "normalized": "a-\u003e()",
        "package": "deepseq-generics",
        "partial": "Rnf",
        "signature": "a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#v:genericRnfV1",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e which supports derivation for uninhabited types.\n\u003c/p\u003e\u003cp\u003eFor instance, the type\n\u003c/p\u003e\u003cpre\u003e data TagFoo deriving Generic\n\u003c/pre\u003e\u003cp\u003ewould cause a compile-time error with \u003ccode\u003e\u003ca\u003egenericRnf\u003c/a\u003e\u003c/code\u003e, but with\n \u003ccode\u003e\u003ca\u003egenericRnfV1\u003c/a\u003e\u003c/code\u003e the error is deferred to run-time:\n\u003c/p\u003e\u003cpre\u003e Prelude\u003e genericRnf (undefined :: TagFoo)\n\n \u003cinteractive\u003e:1:1:\n     No instance for (GNFData V1) arising from a use of `genericRnf'\n     Possible fix: add an instance declaration for (GNFData V1)\n     In the expression: genericRnf (undefined :: TagFoo)\n     In an equation for `it': it = genericRnf (undefined :: TagFoo)\n\n Prelude\u003e genericRnfV1 (undefined :: TagFoo)\n *** Exception: Control.DeepSeq.Generics.genericRnfV1: NF not defined for uninhabited types\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eSince: 0.1.1.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "a -\u003e ()",
        "fct-source": "src/Control-DeepSeq-Generics.html#genericRnfV1",
        "fct-type": "function",
        "title": "genericRnfV1"
      },
      "index": {
        "description": "Variant of genericRnf which supports derivation for uninhabited types For instance the type data TagFoo deriving Generic would cause compile-time error with genericRnf but with genericRnfV1 the error is deferred to run-time Prelude genericRnf undefined TagFoo interactive No instance for GNFData V1 arising from use of genericRnf Possible fix add an instance declaration for GNFData V1 In the expression genericRnf undefined TagFoo In an equation for it it genericRnf undefined TagFoo Prelude genericRnfV1 undefined TagFoo Exception Control.DeepSeq.Generics.genericRnfV1 NF not defined for uninhabited types Since",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "genericRnfV1",
        "normalized": "a-\u003e()",
        "package": "deepseq-generics",
        "partial": "Rnf",
        "signature": "a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq-generics/docs/Control-DeepSeq-Generics.html#v:rnf",
      "description": {
        "fct-descr": "\u003cp\u003ernf should reduce its argument to normal form (that is, fully\n evaluate all sub-components), and then return '()'.\n\u003c/p\u003e\u003cp\u003eThe default implementation of \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e is \n\u003c/p\u003e\u003cpre\u003e rnf a = a `seq` ()\n\u003c/pre\u003e\u003cp\u003ewhich may be convenient when defining instances for data types with\n no unevaluated fields (e.g. enumerations).\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq.Generics",
        "fct-package": "deepseq-generics",
        "fct-signature": "a -\u003e ()",
        "fct-type": "method",
        "title": "rnf"
      },
      "index": {
        "description": "rnf should reduce its argument to normal form that is fully evaluate all sub-components and then return The default implementation of rnf is rnf seq which may be convenient when defining instances for data types with no unevaluated fields e.g enumerations",
        "hierarchy": "Control DeepSeq Generics",
        "module": "Control.DeepSeq.Generics",
        "name": "rnf",
        "normalized": "a-\u003e()",
        "package": "deepseq-generics",
        "partial": "",
        "signature": "a-\u003e()"
      }
    }
  }
]