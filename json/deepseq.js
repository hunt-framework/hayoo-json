[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq/docs/Control-DeepSeq.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an overloaded function, \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e, for fully\n evaluating data structures (that is, evaluating to \"Normal Form\").\n\u003c/p\u003e\u003cp\u003eA typical use is to prevent resource leaks in lazy IO programs, by\n forcing all characters from a file to be read. For example:\n\u003c/p\u003e\u003cpre\u003e import System.IO\n import Control.DeepSeq\n\n main = do\n     h \u003c- openFile \"f\" ReadMode\n     s \u003c- hGetContents h\n     s `deepseq` hClose h\n     return s\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e differs from \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e as it traverses data structures deeply,\n for example, \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e will evaluate only to the first constructor in\n the list:\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,undefined] `seq` 3\n 3\n\u003c/pre\u003e\u003cp\u003eWhile \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e will force evaluation of all the list elements:\n\u003c/p\u003e\u003cpre\u003e \u003e [1,2,undefined] `deepseq` 3\n *** Exception: Prelude.undefined\n\u003c/pre\u003e\u003cp\u003eAnother common use is to ensure any exceptions hidden within lazy\n fields of a data structure do not leak outside the scope of the\n exception handler, or to force evaluation of a data structure in one\n thread, before passing to another thread (preventing work moving to\n the wrong threads).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.1.0.0\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.DeepSeq",
        "fct-package": "deepseq",
        "fct-signature": "module",
        "fct-source": "src/Control-DeepSeq.html",
        "fct-type": "module",
        "title": "DeepSeq"
      },
      "index": {
        "description": "This module provides an overloaded function deepseq for fully evaluating data structures that is evaluating to Normal Form typical use is to prevent resource leaks in lazy IO programs by forcing all characters from file to be read For example import System.IO import Control.DeepSeq main do openFile ReadMode hGetContents deepseq hClose return deepseq differs from seq as it traverses data structures deeply for example seq will evaluate only to the first constructor in the list undefined seq While deepseq will force evaluation of all the list elements undefined deepseq Exception Prelude.undefined Another common use is to ensure any exceptions hidden within lazy fields of data structure do not leak outside the scope of the exception handler or to force evaluation of data structure in one thread before passing to another thread preventing work moving to the wrong threads Since",
        "hierarchy": "Control DeepSeq",
        "module": "Control.DeepSeq",
        "name": "DeepSeq",
        "normalized": "",
        "package": "deepseq",
        "partial": "Deep Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq/docs/Control-DeepSeq.html#t:NFData",
      "description": {
        "fct-descr": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.1.0.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq",
        "fct-package": "deepseq",
        "fct-signature": "class",
        "fct-source": "src/Control-DeepSeq.html#NFData",
        "fct-type": "class",
        "title": "NFData"
      },
      "index": {
        "description": "class of types that can be fully evaluated Since",
        "hierarchy": "Control DeepSeq",
        "module": "Control.DeepSeq",
        "name": "NFData",
        "normalized": "",
        "package": "deepseq",
        "partial": "NFData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq/docs/Control-DeepSeq.html#v:-36--33--33-",
      "description": {
        "fct-descr": "\u003cp\u003ethe deep analogue of \u003ccode\u003e\u003ca\u003e$!\u003c/a\u003e\u003c/code\u003e.  In the expression \u003ccode\u003ef $!! x\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e is\n fully evaluated before the function \u003ccode\u003ef\u003c/code\u003e is applied to it.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq",
        "fct-package": "deepseq",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-DeepSeq.html#%24%21%21",
        "fct-type": "function",
        "title": "($!!)"
      },
      "index": {
        "description": "the deep analogue of In the expression is fully evaluated before the function is applied to it Since",
        "hierarchy": "Control DeepSeq",
        "module": "Control.DeepSeq",
        "name": "($!!) $!!",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "deepseq",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq/docs/Control-DeepSeq.html#v:deepseq",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e: fully evaluates the first argument, before returning the\n second.\n\u003c/p\u003e\u003cp\u003eThe name \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e is used to illustrate the relationship to \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e:\n where \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e is shallow in the sense that it only evaluates the top\n level of its argument, \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e traverses the entire data structure\n evaluating it completely.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e can be useful for forcing pending exceptions,\n eradicating space leaks, or forcing lazy I/O to happen.  It is\n also useful in conjunction with parallel Strategies (see the\n \u003ccode\u003eparallel\u003c/code\u003e package).\n\u003c/p\u003e\u003cp\u003eThere is no guarantee about the ordering of evaluation.  The\n implementation may evaluate the components of the structure in\n any order or in parallel.  To impose an actual order on\n evaluation, use \u003ccode\u003epseq\u003c/code\u003e from \u003ca\u003eControl.Parallel\u003c/a\u003e in the\n \u003ccode\u003eparallel\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.1.0.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq",
        "fct-package": "deepseq",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Control-DeepSeq.html#deepseq",
        "fct-type": "function",
        "title": "deepseq"
      },
      "index": {
        "description": "deepseq fully evaluates the first argument before returning the second The name deepseq is used to illustrate the relationship to seq where seq is shallow in the sense that it only evaluates the top level of its argument deepseq traverses the entire data structure evaluating it completely deepseq can be useful for forcing pending exceptions eradicating space leaks or forcing lazy to happen It is also useful in conjunction with parallel Strategies see the parallel package There is no guarantee about the ordering of evaluation The implementation may evaluate the components of the structure in any order or in parallel To impose an actual order on evaluation use pseq from Control.Parallel in the parallel package Since",
        "hierarchy": "Control DeepSeq",
        "module": "Control.DeepSeq",
        "name": "deepseq",
        "normalized": "a-\u003eb-\u003eb",
        "package": "deepseq",
        "partial": "",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq/docs/Control-DeepSeq.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003ea variant of \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e that is useful in some circumstances:\n\u003c/p\u003e\u003cpre\u003e force x = x `deepseq` x\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eforce x\u003c/code\u003e fully evaluates \u003ccode\u003ex\u003c/code\u003e, and then returns it.  Note that\n \u003ccode\u003eforce x\u003c/code\u003e only performs evaluation when the value of \u003ccode\u003eforce x\u003c/code\u003e\n itself is demanded, so essentially it turns shallow evaluation into\n deep evaluation.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq",
        "fct-package": "deepseq",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Control-DeepSeq.html#force",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "variant of deepseq that is useful in some circumstances force deepseq force fully evaluates and then returns it Note that force only performs evaluation when the value of force itself is demanded so essentially it turns shallow evaluation into deep evaluation Since",
        "hierarchy": "Control DeepSeq",
        "module": "Control.DeepSeq",
        "name": "force",
        "normalized": "a-\u003ea",
        "package": "deepseq",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/deepseq/docs/Control-DeepSeq.html#v:rnf",
      "description": {
        "fct-descr": "\u003cp\u003ernf should reduce its argument to normal form (that is, fully\n evaluate all sub-components), and then return '()'.\n\u003c/p\u003e\u003cp\u003eThe default implementation of \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e is\n\u003c/p\u003e\u003cpre\u003e rnf a = a `seq` ()\n\u003c/pre\u003e\u003cp\u003ewhich may be convenient when defining instances for data types with\n no unevaluated fields (e.g. enumerations).\n\u003c/p\u003e",
        "fct-module": "Control.DeepSeq",
        "fct-package": "deepseq",
        "fct-signature": "a -\u003e ()",
        "fct-source": "src/Control-DeepSeq.html#rnf",
        "fct-type": "method",
        "title": "rnf"
      },
      "index": {
        "description": "rnf should reduce its argument to normal form that is fully evaluate all sub-components and then return The default implementation of rnf is rnf seq which may be convenient when defining instances for data types with no unevaluated fields e.g enumerations",
        "hierarchy": "Control DeepSeq",
        "module": "Control.DeepSeq",
        "name": "rnf",
        "normalized": "a-\u003e()",
        "package": "deepseq",
        "partial": "",
        "signature": "a-\u003e()"
      }
    }
  }
]