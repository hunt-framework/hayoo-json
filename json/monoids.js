[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Monoids that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e,\n \u003ca\u003eData.Foldable\u003c/a\u003e, \u003ca\u003eControl.Monad\u003c/a\u003e or elsewhere. Intended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Generator.Combinators as Generator\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Generator-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Utilities for working with Monoids that conflict with names from the Prelude Data.Foldable Control.Monad or elsewhere Intended to be imported qualified import Data.Generator.Combinators as Generator",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "monoids",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if all of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e Bool) -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Generator-Combinators.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "Efficiently mapReduce any Generator checking to see if all of its values match the supplied predicate mapReduceWith getAll",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "all",
        "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eBool",
        "package": "monoids",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e Bool",
        "fct-source": "src/Data-Generator-Combinators.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Efficiently reduce Generator that contains values of type Bool reduceWith getAll",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "and",
        "normalized": "a-\u003eBool",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if any of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e Bool) -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Generator-Combinators.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "Efficiently mapReduce any Generator checking to see if any of its values match the supplied predicate mapReduceWith getAny",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "any",
        "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eBool",
        "package": "monoids",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:asum",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAlt\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e f a",
        "fct-source": "src/Data-Generator-Combinators.html#asum",
        "fct-type": "function",
        "title": "asum"
      },
      "index": {
        "description": "The sum of collection of actions generalizing concat reduceWith getAlt",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "asum",
        "normalized": "a-\u003eb c",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eType specialization of \u003ca\u003efoldMap\u003c/a\u003e above\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e [b]) -\u003e c -\u003e [b]",
        "fct-source": "src/Data-Generator-Combinators.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Type specialization of foldMap above",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "concatMap",
        "normalized": "(Elem a-\u003e[b])-\u003ea-\u003e[b]",
        "package": "monoids",
        "partial": "Map",
        "signature": "(Elem c-\u003e[b])-\u003ec-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to see if \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e matches the supplied value\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "Elem c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Generator-Combinators.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "Check to see if any member of the Generator matches the supplied value",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "elem",
        "normalized": "Elem a-\u003ea-\u003eBool",
        "package": "monoids",
        "partial": "",
        "signature": "Elem c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a subset of the elements in a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e Bool) -\u003e c -\u003e m",
        "fct-source": "src/Data-Generator-Combinators.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Efficiently mapReduce subset of the elements in Generator",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "filter",
        "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eb",
        "package": "monoids",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:filterWith",
      "description": {
        "fct-descr": "\u003cp\u003eAllows idiomatic specialization of filter by proving a function that will be used to transform the output\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(m -\u003e n) -\u003e (Elem c -\u003e Bool) -\u003e c -\u003e n",
        "fct-source": "src/Data-Generator-Combinators.html#filterWith",
        "fct-type": "function",
        "title": "filterWith"
      },
      "index": {
        "description": "Allows idiomatic specialization of filter by proving function that will be used to transform the output",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "filterWith",
        "normalized": "(a-\u003eb)-\u003e(Elem c-\u003eBool)-\u003ec-\u003eb",
        "package": "monoids",
        "partial": "With",
        "signature": "(m-\u003en)-\u003e(Elem c-\u003eBool)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eA specialization of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, analogous to \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003efilterWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetFirst\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e Bool) -\u003e c -\u003e Maybe (Elem c)",
        "fct-source": "src/Data-Generator-Combinators.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "specialization of filter using the First Monoid analogous to find filterWith getFirst",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "find",
        "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eMaybe(Elem a)",
        "package": "monoids",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003eMaybe(Elem c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e m",
        "fct-source": "src/Data-Generator-Combinators.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Efficiently reduce Generator using the Self monoid specialized version of its namesake from Data.Foldable reduceWith getSelf",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "fold",
        "normalized": "a-\u003eb",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e m) -\u003e c -\u003e m",
        "fct-source": "src/Data-Generator-Combinators.html#foldMap",
        "fct-type": "function",
        "title": "foldMap"
      },
      "index": {
        "description": "Efficiently mapReduce Generator using the Self monoid specialized version of its namesake from Data.Foldable mapReduceWith getSelf",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "foldMap",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003eb",
        "package": "monoids",
        "partial": "Map",
        "signature": "(Elem c-\u003em)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:forM_",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e (Elem c -\u003e m b) -\u003e m ()",
        "fct-source": "src/Data-Generator-Combinators.html#forM_",
        "fct-type": "function",
        "title": "forM_"
      },
      "index": {
        "description": "Convenience function as found in Data.Foldable and Control.Monad flip mapM",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "forM_",
        "normalized": "a-\u003e(Elem a-\u003eb c)-\u003eb()",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003e(Elem c-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:for_",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e (Elem c -\u003e f b) -\u003e f ()",
        "fct-source": "src/Data-Generator-Combinators.html#for_",
        "fct-type": "function",
        "title": "for_"
      },
      "index": {
        "description": "Convenience function as found in Data.Foldable flip traverse",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "for_",
        "normalized": "a-\u003e(Elem a-\u003eb c)-\u003eb()",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003e(Elem c-\u003ef b)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAction\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e m b) -\u003e c -\u003e m ()",
        "fct-source": "src/Data-Generator-Combinators.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Efficiently mapReduce Generator using the Action monoid specialized version of its namesake from Data.Foldable and Control.Monad mapReduceWith getAction",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "mapM_",
        "normalized": "(Elem a-\u003eb c)-\u003ea-\u003eb()",
        "package": "monoids",
        "partial": "",
        "signature": "(Elem c-\u003em b)-\u003ec-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:msum",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetMonadSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e m a",
        "fct-source": "src/Data-Generator-Combinators.html#msum",
        "fct-type": "function",
        "title": "msum"
      },
      "index": {
        "description": "The sum of collection of actions generalizing concat reduceWith getMonadSum",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "msum",
        "normalized": "a-\u003eb c",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to make sure that the supplied value is not a member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "Elem c -\u003e c -\u003e Bool",
        "fct-source": "src/Data-Generator-Combinators.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "Check to make sure that the supplied value is not member of the Generator",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "notElem",
        "normalized": "Elem a-\u003ea-\u003eBool",
        "package": "monoids",
        "partial": "Elem",
        "signature": "Elem c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e Bool",
        "fct-source": "src/Data-Generator-Combinators.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Efficiently reduce Generator that contains values of type Bool reduceWith getAny",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "or",
        "normalized": "a-\u003eBool",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently take the product of every member of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetProduct\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e Elem c",
        "fct-source": "src/Data-Generator-Combinators.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "Efficiently take the product of every member of Generator reduceWith getProduct",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "product",
        "normalized": "a-\u003eElem a",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003eElem c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently sum over the members of any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e Elem c",
        "fct-source": "src/Data-Generator-Combinators.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Efficiently sum over the members of any Generator reduceWith getSum",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "sum",
        "normalized": "a-\u003eElem a",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003eElem c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e to a list of its contents. Specialization of \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e [Elem c]",
        "fct-source": "src/Data-Generator-Combinators.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert any Generator to list of its contents Specialization of reduce",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "toList",
        "normalized": "a-\u003e[Elem a]",
        "package": "monoids",
        "partial": "List",
        "signature": "c-\u003e[Elem c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:traverse_",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetTraversal\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e f b) -\u003e c -\u003e f ()",
        "fct-source": "src/Data-Generator-Combinators.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "Efficiently mapReduce Generator using the Traversal monoid specialized version of its namesake from Data.Foldable mapReduce getTraversal",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "traverse_",
        "normalized": "(Elem a-\u003eb c)-\u003ea-\u003eb()",
        "package": "monoids",
        "partial": "",
        "signature": "(Elem c-\u003ef b)-\u003ec-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e is a possibly-specialized container, which contains values of \n type \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e, and which knows how to efficiently apply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to extract\n an answer.\n\u003c/p\u003e\u003cp\u003eSince a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is not polymorphic in its contents, it is more specialized\n than \u003ca\u003eData.Foldable.Foldable\u003c/a\u003e, and a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may supply efficient left-to-right\n and right-to-left reduction strategies that a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e may avail itself of.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Generator.html",
        "fct-type": "module",
        "title": "Generator"
      },
      "index": {
        "description": "Generator is possibly-specialized container which contains values of type Elem and which knows how to efficiently apply Reducer to extract an answer Since Generator is not polymorphic in its contents it is more specialized than Data.Foldable.Foldable and Reducer may supply efficient left-to-right and right-to-left reduction strategies that Generator may avail itself of",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Generator",
        "normalized": "",
        "package": "monoids",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Char8",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that treats \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n This lets you use a \u003ccode\u003eByteString\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e source without going through a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer like \u003ccode\u003eUTF8\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generator.html#Char8",
        "fct-type": "newtype",
        "title": "Char8"
      },
      "index": {
        "description": "Generator transformer that treats Word8 as Char This lets you use ByteString as Char source without going through Monoid transformer like UTF8",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Char8",
        "normalized": "",
        "package": "monoids",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Generator",
      "description": {
        "fct-descr": "\u003cp\u003eminimal definition \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Generator.html#Generator",
        "fct-type": "class",
        "title": "Generator"
      },
      "index": {
        "description": "minimal definition mapReduce or mapTo",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Generator",
        "normalized": "",
        "package": "monoids",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Keys",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the keys of an indexed container\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generator.html#Keys",
        "fct-type": "newtype",
        "title": "Keys"
      },
      "index": {
        "description": "Generator transformer that asks only for the keys of an indexed container",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Keys",
        "normalized": "",
        "package": "monoids",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Values",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the values contained in an indexed container\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Generator.html#Values",
        "fct-type": "newtype",
        "title": "Values"
      },
      "index": {
        "description": "Generator transformer that asks only for the values contained in an indexed container",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Values",
        "normalized": "",
        "package": "monoids",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:Char8",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "Char8",
        "fct-source": "src/Data-Generator.html#Char8",
        "fct-type": "function",
        "title": "Char8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Char8",
        "normalized": "",
        "package": "monoids",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:Keys",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "Keys",
        "fct-source": "src/Data-Generator.html#Keys",
        "fct-type": "function",
        "title": "Keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Keys",
        "normalized": "",
        "package": "monoids",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:Values",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "Values",
        "fct-source": "src/Data-Generator.html#Values",
        "fct-type": "function",
        "title": "Values"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "Values",
        "normalized": "",
        "package": "monoids",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:getChar8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "c",
        "fct-source": "src/Data-Generator.html#Char8",
        "fct-type": "function",
        "title": "getChar8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "getChar8",
        "normalized": "",
        "package": "monoids",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:getKeys",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "c",
        "fct-source": "src/Data-Generator.html#Keys",
        "fct-type": "function",
        "title": "getKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "getKeys",
        "normalized": "",
        "package": "monoids",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:getValues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "c",
        "fct-source": "src/Data-Generator.html#Values",
        "fct-type": "function",
        "title": "getValues"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "getValues",
        "normalized": "",
        "package": "monoids",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapFrom",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e e) -\u003e c -\u003e m -\u003e m",
        "fct-source": "src/Data-Generator.html#mapFrom",
        "fct-type": "method",
        "title": "mapFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "mapFrom",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec-\u003ec",
        "package": "monoids",
        "partial": "From",
        "signature": "(Elem c-\u003ee)-\u003ec-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapReduce",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e e) -\u003e c -\u003e m",
        "fct-source": "src/Data-Generator.html#mapReduce",
        "fct-type": "method",
        "title": "mapReduce"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "mapReduce",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec",
        "package": "monoids",
        "partial": "Reduce",
        "signature": "(Elem c-\u003ee)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapReduceWith",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "(m -\u003e n) -\u003e (Elem c -\u003e e) -\u003e c -\u003e n",
        "fct-source": "src/Data-Generator.html#mapReduceWith",
        "fct-type": "function",
        "title": "mapReduceWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "mapReduceWith",
        "normalized": "(a-\u003eb)-\u003e(Elem c-\u003ed)-\u003ec-\u003eb",
        "package": "monoids",
        "partial": "Reduce With",
        "signature": "(m-\u003en)-\u003e(Elem c-\u003ee)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapTo",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "(Elem c -\u003e e) -\u003e m -\u003e c -\u003e m",
        "fct-source": "src/Data-Generator.html#mapTo",
        "fct-type": "method",
        "title": "mapTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "mapTo",
        "normalized": "(Elem a-\u003eb)-\u003ec-\u003ea-\u003ec",
        "package": "monoids",
        "partial": "To",
        "signature": "(Elem c-\u003ee)-\u003em-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:reduce",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e directly to the elements of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e m",
        "fct-source": "src/Data-Generator.html#reduce",
        "fct-type": "function",
        "title": "reduce"
      },
      "index": {
        "description": "Apply Reducer directly to the elements of Generator",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "reduce",
        "normalized": "a-\u003eb",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:reduceWith",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "monoids",
        "fct-signature": "(m -\u003e n) -\u003e c -\u003e n",
        "fct-source": "src/Data-Generator.html#reduceWith",
        "fct-type": "function",
        "title": "reduceWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generator",
        "module": "Data.Generator",
        "name": "reduceWith",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "monoids",
        "partial": "With",
        "signature": "(m-\u003en)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Groups that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIntended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Group.Combinators as Group (replicate)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Group.Combinators",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Group-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Utilities for working with Groups that conflict with names from the Prelude Intended to be imported qualified import Data.Group.Combinators as Group replicate",
        "hierarchy": "Data Group Combinators",
        "module": "Data.Group.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "monoids",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Combinators.html#v:replicate",
      "description": {
        "fct-module": "Data.Group.Combinators",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e n -\u003e m",
        "fct-source": "src/Data-Group-Combinators.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Combinators",
        "module": "Data.Group.Combinators",
        "name": "replicate",
        "normalized": "a-\u003eb-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003en-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntactic sugar for working with groups that conflicts with names from the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding ((-), (+), (*), (/), (^), (^^), negate, subtract, recip)\n import Data.Group.Sugar\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Group-Sugar.html",
        "fct-type": "module",
        "title": "Sugar"
      },
      "index": {
        "description": "Syntactic sugar for working with groups that conflicts with names from the Prelude import Prelude hiding negate subtract recip import Data.Group.Sugar",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "Sugar",
        "normalized": "",
        "package": "monoids",
        "partial": "Sugar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:-45-",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "(-) -",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:-47-",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#%2F",
        "fct-type": "function",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "(/) /",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:-94--94-",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e Integer -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#%5E%5E",
        "fct-type": "function",
        "title": "(^^)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "(^^) ^^",
        "normalized": "a-\u003eInteger-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eInteger-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:.-92-.",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#.%5C.",
        "fct-type": "function",
        "title": "(.\\.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "(.\\.) .\\.",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:negate",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "negate",
        "normalized": "a-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:recip",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#recip",
        "fct-type": "function",
        "title": "recip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "recip",
        "normalized": "a-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:subtract",
      "description": {
        "fct-module": "Data.Group.Sugar",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g -\u003e g",
        "fct-source": "src/Data-Group-Sugar.html#subtract",
        "fct-type": "function",
        "title": "subtract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group Sugar",
        "module": "Data.Group.Sugar",
        "name": "subtract",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtends \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to support \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e operations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Group.html",
        "fct-type": "module",
        "title": "Group"
      },
      "index": {
        "description": "Extends Monoid to support Group operations",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "Group",
        "normalized": "",
        "package": "monoids",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#t:Group",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003egnegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eminus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Group.html#Group",
        "fct-type": "class",
        "title": "Group"
      },
      "index": {
        "description": "Minimal complete definition gnegate or minus",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "Group",
        "normalized": "",
        "package": "monoids",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#t:MultiplicativeGroup",
      "description": {
        "fct-descr": "\u003cp\u003eMinimal definition over or grecip\n\u003c/p\u003e",
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Group.html#MultiplicativeGroup",
        "fct-type": "class",
        "title": "MultiplicativeGroup"
      },
      "index": {
        "description": "Minimal definition over or grecip",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "MultiplicativeGroup",
        "normalized": "",
        "package": "monoids",
        "partial": "Multiplicative Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:gnegate",
      "description": {
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Group.html#gnegate",
        "fct-type": "method",
        "title": "gnegate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "gnegate",
        "normalized": "a-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:grecip",
      "description": {
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g",
        "fct-source": "src/Data-Group.html#grecip",
        "fct-type": "method",
        "title": "grecip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "grecip",
        "normalized": "a-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:gsubtract",
      "description": {
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Group.html#gsubtract",
        "fct-type": "method",
        "title": "gsubtract"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "gsubtract",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:minus",
      "description": {
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Group.html#minus",
        "fct-type": "method",
        "title": "minus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "minus",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:over",
      "description": {
        "fct-descr": "\u003cpre\u003ex / y\u003c/pre\u003e",
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g -\u003e g",
        "fct-source": "src/Data-Group.html#over",
        "fct-type": "method",
        "title": "over"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "over",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:under",
      "description": {
        "fct-descr": "\u003cpre\u003ex  y\u003c/pre\u003e",
        "fct-module": "Data.Group",
        "fct-package": "monoids",
        "fct-signature": "g -\u003e g -\u003e g",
        "fct-source": "src/Data-Group.html#under",
        "fct-type": "method",
        "title": "under"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Group",
        "module": "Data.Group",
        "name": "under",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "g-\u003eg-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Additive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMore easily understood aliases for \u003ca\u003emappend\u003c/a\u003e and \u003ca\u003emempty\u003c/a\u003e, chosen for\n symmetry with Data.Monoid.Multiplicative\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid.Additive\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Additive",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Additive.html",
        "fct-type": "module",
        "title": "Additive"
      },
      "index": {
        "description": "More easily understood aliases for mappend and mempty chosen for symmetry with Data.Monoid.Multiplicative import Data.Monoid.Additive",
        "hierarchy": "Data Monoid Additive",
        "module": "Data.Monoid.Additive",
        "name": "Additive",
        "normalized": "",
        "package": "monoids",
        "partial": "Additive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Additive.html#v:plus",
      "description": {
        "fct-module": "Data.Monoid.Additive",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Additive.html#plus",
        "fct-type": "function",
        "title": "plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Additive",
        "module": "Data.Monoid.Additive",
        "name": "plus",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Additive.html#v:zero",
      "description": {
        "fct-module": "Data.Monoid.Additive",
        "fct-package": "monoids",
        "fct-signature": "m",
        "fct-source": "src/Data-Monoid-Additive.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Additive",
        "module": "Data.Monoid.Additive",
        "name": "zero",
        "normalized": "",
        "package": "monoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonoids for working with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Applicative.html",
        "fct-type": "module",
        "title": "Applicative"
      },
      "index": {
        "description": "Monoids for working with an Applicative Functor",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "Applicative",
        "normalized": "",
        "package": "monoids",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#t:Alt",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n   It also provides a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e instance for an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functor wrapped around a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n   and asserts that any \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e forms a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e \n   under these operations.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Applicative.html#Alt",
        "fct-type": "newtype",
        "title": "Alt"
      },
      "index": {
        "description": "Alt turns any Alternative instance into Monoid It also provides Multiplicative instance for an Applicative functor wrapped around Monoid and asserts that any Alternative applied to Monoid forms RightSemiNearRing under these operations",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "Alt",
        "normalized": "",
        "package": "monoids",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#t:App",
      "description": {
        "fct-descr": "\u003cp\u003eif \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003ef \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e as well\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Applicative.html#App",
        "fct-type": "newtype",
        "title": "App"
      },
      "index": {
        "description": "if is Module over and is Applicative then App is Module over as well",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "App",
        "normalized": "",
        "package": "monoids",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#t:Traversal",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e uses an glues together \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e actions with (*\u003e)\n   in the manner of \u003ccode\u003etraverse_\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by \n   reduced actions are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Applicative.html#Traversal",
        "fct-type": "newtype",
        "title": "Traversal"
      },
      "index": {
        "description": "Traversal uses an glues together Applicative actions with in the manner of traverse from Data.Foldable Any values returned by reduced actions are discarded",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "Traversal",
        "normalized": "",
        "package": "monoids",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:Alt",
      "description": {
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "Alt",
        "fct-source": "src/Data-Monoid-Applicative.html#Alt",
        "fct-type": "function",
        "title": "Alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "Alt",
        "normalized": "",
        "package": "monoids",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:App",
      "description": {
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "App",
        "fct-source": "src/Data-Monoid-Applicative.html#App",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "App",
        "normalized": "",
        "package": "monoids",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:Traversal",
      "description": {
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "Traversal",
        "fct-source": "src/Data-Monoid-Applicative.html#Traversal",
        "fct-type": "function",
        "title": "Traversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "Traversal",
        "normalized": "",
        "package": "monoids",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:getAlt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Monoid-Applicative.html#Alt",
        "fct-type": "function",
        "title": "getAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "getAlt",
        "normalized": "",
        "package": "monoids",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:getApp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "f m",
        "fct-source": "src/Data-Monoid-Applicative.html#App",
        "fct-type": "function",
        "title": "getApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "getApp",
        "normalized": "",
        "package": "monoids",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:getTraversal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "f ()",
        "fct-source": "src/Data-Monoid-Applicative.html#Traversal",
        "fct-type": "function",
        "title": "getTraversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "getTraversal",
        "normalized": "a()",
        "package": "monoids",
        "partial": "Traversal",
        "signature": "f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:snocTraversal",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently avoid needlessly rebinding when using \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e on an action that already returns ()\n   A rewrite rule automatically applies this when possible\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Applicative",
        "fct-package": "monoids",
        "fct-signature": "Traversal f -\u003e f () -\u003e Traversal f",
        "fct-source": "src/Data-Monoid-Applicative.html#snocTraversal",
        "fct-type": "function",
        "title": "snocTraversal"
      },
      "index": {
        "description": "Efficiently avoid needlessly rebinding when using snoc on an action that already returns rewrite rule automatically applies this when possible",
        "hierarchy": "Data Monoid Applicative",
        "module": "Data.Monoid.Applicative",
        "name": "snocTraversal",
        "normalized": "Traversal a-\u003ea()-\u003eTraversal a",
        "package": "monoids",
        "partial": "Traversal",
        "signature": "Traversal f-\u003ef()-\u003eTraversal f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Monoids that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e,\n \u003ca\u003eData.Foldable\u003c/a\u003e, \u003ca\u003eControl.Monad\u003c/a\u003e or elsewhere. Intended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid.Combinators as Monoid \n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Combinators",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Utilities for working with Monoids that conflict with names from the Prelude Data.Foldable Control.Monad or elsewhere Intended to be imported qualified import Data.Monoid.Combinators as Monoid",
        "hierarchy": "Data Monoid Combinators",
        "module": "Data.Monoid.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "monoids",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#v:cycle",
      "description": {
        "fct-descr": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. May fail to terminate for some values in some monoids.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Combinators",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e m",
        "fct-source": "src/Data-Monoid-Combinators.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "generalization of cycle to an arbitrary Monoid May fail to terminate for some values in some monoids",
        "hierarchy": "Data Monoid Combinators",
        "module": "Data.Monoid.Combinators",
        "name": "cycle",
        "normalized": "a-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. May fail to terminate for some values in some monoids.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Combinators",
        "fct-package": "monoids",
        "fct-signature": "e -\u003e m",
        "fct-source": "src/Data-Monoid-Combinators.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "generalization of repeat to an arbitrary Monoid May fail to terminate for some values in some monoids",
        "hierarchy": "Data Monoid Combinators",
        "module": "Data.Monoid.Combinators",
        "name": "repeat",
        "normalized": "a-\u003eb",
        "package": "monoids",
        "partial": "",
        "signature": "e-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Adapted from \n \u003ca\u003ehttp://augustss.blogspot.com/2008/07/lost-and-found-if-i-write-108-in.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Combinators",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e n -\u003e m",
        "fct-source": "src/Data-Monoid-Combinators.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "generalization of replicate to an arbitrary Monoid Adapted from http augustss.blogspot.com lost-and-found-if-i-write-108-in.html",
        "hierarchy": "Data Monoid Combinators",
        "module": "Data.Monoid.Combinators",
        "name": "replicate",
        "normalized": "a-\u003eb-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003en-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances for working with a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Monoid instances for working with Monad",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "monoids",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e uses glues together \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e actions with (\u003e\u003e)\n   in the manner of \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by \n   reduced actions are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Monad.html#Action",
        "fct-type": "newtype",
        "title": "Action"
      },
      "index": {
        "description": "An Action uses glues together Monad actions with in the manner of mapM from Data.Foldable Any values returned by reduced actions are discarded",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "Action",
        "normalized": "",
        "package": "monoids",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#t:Mon",
      "description": {
        "fct-descr": "\u003cp\u003eif \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003ef \u003ccode\u003e\u003ca\u003eMon\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e as well\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Monad.html#Mon",
        "fct-type": "newtype",
        "title": "Mon"
      },
      "index": {
        "description": "if is Module over and is Monad then Mon is Module as well",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "Mon",
        "normalized": "",
        "package": "monoids",
        "partial": "Mon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#t:MonadSum",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadSum\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n   It also provides a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e instance for a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e wrapped around a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n   and asserts that any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e forms a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e \n   under these operations.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Monad.html#MonadSum",
        "fct-type": "newtype",
        "title": "MonadSum"
      },
      "index": {
        "description": "MonadSum turns any MonadPlus instance into Monoid It also provides Multiplicative instance for Monad wrapped around Monoid and asserts that any MonadPlus applied to Monoid forms RightSemiNearRing under these operations",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "MonadSum",
        "normalized": "",
        "package": "monoids",
        "partial": "Monad Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:Action",
      "description": {
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "Action",
        "fct-source": "src/Data-Monoid-Monad.html#Action",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "Action",
        "normalized": "",
        "package": "monoids",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:Mon",
      "description": {
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "Mon",
        "fct-source": "src/Data-Monoid-Monad.html#Mon",
        "fct-type": "function",
        "title": "Mon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "Mon",
        "normalized": "",
        "package": "monoids",
        "partial": "Mon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:MonadSum",
      "description": {
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "MonadSum",
        "fct-source": "src/Data-Monoid-Monad.html#MonadSum",
        "fct-type": "function",
        "title": "MonadSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "MonadSum",
        "normalized": "",
        "package": "monoids",
        "partial": "Monad Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:getAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "m ()",
        "fct-source": "src/Data-Monoid-Monad.html#Action",
        "fct-type": "function",
        "title": "getAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "getAction",
        "normalized": "a()",
        "package": "monoids",
        "partial": "Action",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:getMon",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "f m",
        "fct-source": "src/Data-Monoid-Monad.html#Mon",
        "fct-type": "function",
        "title": "getMon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "getMon",
        "normalized": "",
        "package": "monoids",
        "partial": "Mon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:getMonadSum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "m a",
        "fct-source": "src/Data-Monoid-Monad.html#MonadSum",
        "fct-type": "function",
        "title": "getMonadSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "getMonadSum",
        "normalized": "",
        "package": "monoids",
        "partial": "Monad Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:snocAction",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently avoid needlessly rebinding when using \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e on an action that already returns ()\n   A rewrite rule automatically applies this when possible\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Monad",
        "fct-package": "monoids",
        "fct-signature": "Action m -\u003e m () -\u003e Action m",
        "fct-source": "src/Data-Monoid-Monad.html#snocAction",
        "fct-type": "function",
        "title": "snocAction"
      },
      "index": {
        "description": "Efficiently avoid needlessly rebinding when using snoc on an action that already returns rewrite rule automatically applies this when possible",
        "hierarchy": "Data Monoid Monad",
        "module": "Data.Monoid.Monad",
        "name": "snocAction",
        "normalized": "Action a-\u003ea()-\u003eAction a",
        "package": "monoids",
        "partial": "Action",
        "signature": "Action m-\u003em()-\u003eAction m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen dealing with a \u003ccode\u003eRing\u003c/code\u003e or other structure, you often need a pair of \n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances that are closely related. Making a \u003ccode\u003enewtype\u003c/code\u003e for one\n is unsatisfying and yields an unnatural programming style. \n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e that is intended for use in a scenario\n that can be extended to have another \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e slot in for addition. This\n enables one to use common notation.\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e can be turned into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eLog\u003c/a\u003e\u003c/code\u003e wrapper.\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e can be turned into a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e wrapper.\n\u003c/p\u003e\u003cp\u003eInstances are supplied for common Monads of Monoids, in a fashion \n which can be extended if the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003eMonadPlus\u003c/code\u003e to yield a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInstances are also supplied for common Applicatives of Monoids, in a\n fashion which can be extended if the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e to\n yield a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Multiplicative.html",
        "fct-type": "module",
        "title": "Multiplicative"
      },
      "index": {
        "description": "When dealing with Ring or other structure you often need pair of Monoid instances that are closely related Making newtype for one is unsatisfying and yields an unnatural programming style Multiplicative is Monoid that is intended for use in scenario that can be extended to have another Monoid slot in for addition This enables one to use common notation Any Multiplicative can be turned into Monoid using the Log wrapper Any Monoid can be turned into Multiplicative using the Exp wrapper Instances are supplied for common Monads of Monoids in fashion which can be extended if the Monad is MonadPlus to yield RightSemiNearRing Instances are also supplied for common Applicatives of Monoids in fashion which can be extended if the Applicative is Alternative to yield RightSemiNearRing",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "Multiplicative",
        "normalized": "",
        "package": "monoids",
        "partial": "Multiplicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#t:Exp",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e. Mnemonic: \u003ccode\u003eExp a * Exp b = Exp (a + b)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Exp",
        "fct-type": "data",
        "title": "Exp"
      },
      "index": {
        "description": "Convert Monoid into Multiplicative Mnemonic Exp Exp Exp",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "Exp",
        "normalized": "",
        "package": "monoids",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#t:Log",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Mnemonic: \u003ccode\u003eLog a + Log b = Log (a * b)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "data",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Log",
        "fct-type": "data",
        "title": "Log"
      },
      "index": {
        "description": "Convert Multiplicative into Monoid Mnemonic Log Log Log",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "Log",
        "normalized": "",
        "package": "monoids",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#t:Multiplicative",
      "description": {
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Multiplicative",
        "fct-type": "class",
        "title": "Multiplicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "Multiplicative",
        "normalized": "",
        "package": "monoids",
        "partial": "Multiplicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:Exp",
      "description": {
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "Exp",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Exp",
        "fct-type": "function",
        "title": "Exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "Exp",
        "normalized": "",
        "package": "monoids",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:Log",
      "description": {
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "Log",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Log",
        "fct-type": "function",
        "title": "Log"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "Log",
        "normalized": "",
        "package": "monoids",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:getExp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "m",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Exp",
        "fct-type": "function",
        "title": "getExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "getExp",
        "normalized": "",
        "package": "monoids",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:getLog",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "m",
        "fct-source": "src/Data-Monoid-Multiplicative.html#Log",
        "fct-type": "function",
        "title": "getLog"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "getLog",
        "normalized": "",
        "package": "monoids",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:one",
      "description": {
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "m",
        "fct-source": "src/Data-Monoid-Multiplicative.html#one",
        "fct-type": "method",
        "title": "one"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "one",
        "normalized": "",
        "package": "monoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:times",
      "description": {
        "fct-module": "Data.Monoid.Multiplicative",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Multiplicative.html#times",
        "fct-type": "method",
        "title": "times"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Multiplicative",
        "module": "Data.Monoid.Multiplicative",
        "name": "times",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "monoids",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:Max",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Ord.html#Max",
        "fct-type": "newtype",
        "title": "Max"
      },
      "index": {
        "description": "The Monoid max minBound",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "Max",
        "normalized": "",
        "package": "monoids",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:MaxPriority",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e over \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is the bottom element\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Ord.html#MaxPriority",
        "fct-type": "newtype",
        "title": "MaxPriority"
      },
      "index": {
        "description": "The Monoid max Nothing over Maybe where Nothing is the bottom element",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "MaxPriority",
        "normalized": "",
        "package": "monoids",
        "partial": "Max Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:Min",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e given by \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Ord.html#Min",
        "fct-type": "newtype",
        "title": "Min"
      },
      "index": {
        "description": "The Monoid given by min maxBound",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "Min",
        "normalized": "",
        "package": "monoids",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:MinPriority",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e over \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is the top element\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Ord.html#MinPriority",
        "fct-type": "newtype",
        "title": "MinPriority"
      },
      "index": {
        "description": "The Monoid min Nothing over Maybe where Nothing is the top element",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "MinPriority",
        "normalized": "",
        "package": "monoids",
        "partial": "Min Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:Max",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "Max",
        "fct-source": "src/Data-Monoid-Ord.html#Max",
        "fct-type": "function",
        "title": "Max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "Max",
        "normalized": "",
        "package": "monoids",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:MaxPriority",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "MaxPriority",
        "fct-source": "src/Data-Monoid-Ord.html#MaxPriority",
        "fct-type": "function",
        "title": "MaxPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "MaxPriority",
        "normalized": "",
        "package": "monoids",
        "partial": "Max Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:Min",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "Min",
        "fct-source": "src/Data-Monoid-Ord.html#Min",
        "fct-type": "function",
        "title": "Min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "Min",
        "normalized": "",
        "package": "monoids",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:MinPriority",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "MinPriority",
        "fct-source": "src/Data-Monoid-Ord.html#MinPriority",
        "fct-type": "function",
        "title": "MinPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "MinPriority",
        "normalized": "",
        "package": "monoids",
        "partial": "Min Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "a",
        "fct-source": "src/Data-Monoid-Ord.html#Max",
        "fct-type": "function",
        "title": "getMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "getMax",
        "normalized": "",
        "package": "monoids",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMaxPriority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "Maybe a",
        "fct-source": "src/Data-Monoid-Ord.html#MaxPriority",
        "fct-type": "function",
        "title": "getMaxPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "getMaxPriority",
        "normalized": "",
        "package": "monoids",
        "partial": "Max Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "a",
        "fct-source": "src/Data-Monoid-Ord.html#Min",
        "fct-type": "function",
        "title": "getMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "getMin",
        "normalized": "",
        "package": "monoids",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMinPriority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "Maybe a",
        "fct-source": "src/Data-Monoid-Ord.html#MinPriority",
        "fct-type": "function",
        "title": "getMinPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "getMinPriority",
        "normalized": "",
        "package": "monoids",
        "partial": "Min Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:infinity",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "MinPriority a",
        "fct-source": "src/Data-Monoid-Ord.html#infinity",
        "fct-type": "function",
        "title": "infinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "infinity",
        "normalized": "",
        "package": "monoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:minfinity",
      "description": {
        "fct-module": "Data.Monoid.Ord",
        "fct-package": "monoids",
        "fct-signature": "MaxPriority a",
        "fct-source": "src/Data-Monoid-Ord.html#minfinity",
        "fct-type": "function",
        "title": "minfinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Ord",
        "module": "Data.Monoid.Ord",
        "name": "minfinity",
        "normalized": "",
        "package": "monoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e with a canonical mapping from \u003ccode\u003ec\u003c/code\u003e to the Monoid.\n This \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e acts in many ways like \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e but is limited\n to a single type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Reducer.html",
        "fct-type": "module",
        "title": "Reducer"
      },
      "index": {
        "description": "Reducer is Monoid with canonical mapping from to the Monoid This unit acts in many ways like return for Monad but is limited to single type",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "Reducer",
        "normalized": "",
        "package": "monoids",
        "partial": "Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#t:Reducer",
      "description": {
        "fct-descr": "\u003cp\u003eThis type may be best read infix. A \u003ccode\u003ec \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e that maps\n values of type \u003ccode\u003ec\u003c/code\u003e through \u003ccode\u003eunit\u003c/code\u003e to values of type \u003ccode\u003em\u003c/code\u003e. A \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may also\n supply operations which tack-on another \u003ccode\u003ec\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e on the left\n or right. These specialized reductions may be more efficient in some scenarios\n and are used when appropriate by a \u003ccode\u003eGenerator\u003c/code\u003e. The names \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e work\n by analogy to the synonymous operations in the list monoid.\n\u003c/p\u003e\u003cp\u003eThis class deliberately avoids functional-dependencies, so that () can be a \u003ccode\u003ec\u003c/code\u003e-Reducer\n for all \u003ccode\u003ec\u003c/code\u003e, and so many common reducers can work over multiple types, for instance,\n First and Last may reduce both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e. Since a \u003ccode\u003eGenerator\u003c/code\u003e has a fixed element\n type, the input to the reducer is generally known and extracting from the monoid usually\n is sufficient to fix the result type. Combinators are available for most scenarios where\n this is not the case, and the few remaining cases can be handled by using an explicit \n type annotation.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Reducer.html#Reducer",
        "fct-type": "class",
        "title": "Reducer"
      },
      "index": {
        "description": "This type may be best read infix Reducer is Monoid that maps values of type through unit to values of type Reducer may also supply operations which tack-on another to an existing Monoid on the left or right These specialized reductions may be more efficient in some scenarios and are used when appropriate by Generator The names cons and snoc work by analogy to the synonymous operations in the list monoid This class deliberately avoids functional-dependencies so that can be Reducer for all and so many common reducers can work over multiple types for instance First and Last may reduce both and Maybe Since Generator has fixed element type the input to the reducer is generally known and extracting from the monoid usually is sufficient to fix the result type Combinators are available for most scenarios where this is not the case and the few remaining cases can be handled by using an explicit type annotation Minimal definition unit or snoc",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "Reducer",
        "normalized": "",
        "package": "monoids",
        "partial": "Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend a value onto a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e for use during right-to-left reduction\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Reducer.html#cons",
        "fct-type": "method",
        "title": "cons"
      },
      "index": {
        "description": "Prepend value onto Monoid for use during right-to-left reduction",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eb",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:foldMapReduce",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container, after mapping the contents into a suitable form for reduction.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "(a -\u003e e) -\u003e f a -\u003e m",
        "fct-source": "src/Data-Monoid-Reducer.html#foldMapReduce",
        "fct-type": "function",
        "title": "foldMapReduce"
      },
      "index": {
        "description": "Apply Reducer to Foldable container after mapping the contents into suitable form for reduction",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "foldMapReduce",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ed",
        "package": "monoids",
        "partial": "Map Reduce",
        "signature": "(a-\u003ee)-\u003ef a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:foldReduce",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e mapping each element through \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "f e -\u003e m",
        "fct-source": "src/Data-Monoid-Reducer.html#foldReduce",
        "fct-type": "function",
        "title": "foldReduce"
      },
      "index": {
        "description": "Apply Reducer to Foldable mapping each element through unit",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "foldReduce",
        "normalized": "a b-\u003ec",
        "package": "monoids",
        "partial": "Reduce",
        "signature": "f e-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:pureUnit",
      "description": {
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e f n",
        "fct-source": "src/Data-Monoid-Reducer.html#pureUnit",
        "fct-type": "function",
        "title": "pureUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "pureUnit",
        "normalized": "a-\u003eb c",
        "package": "monoids",
        "partial": "Unit",
        "signature": "c-\u003ef n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:returnUnit",
      "description": {
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e m n",
        "fct-source": "src/Data-Monoid-Reducer.html#returnUnit",
        "fct-type": "function",
        "title": "returnUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "returnUnit",
        "normalized": "a-\u003eb c",
        "package": "monoids",
        "partial": "Unit",
        "signature": "c-\u003em n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a value to a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e for use in left-to-right reduction\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e c -\u003e m",
        "fct-source": "src/Data-Monoid-Reducer.html#snoc",
        "fct-type": "method",
        "title": "snoc"
      },
      "index": {
        "description": "Append value to Monoid for use in left-to-right reduction",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "snoc",
        "normalized": "a-\u003eb-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:unit",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Reducer",
        "fct-package": "monoids",
        "fct-signature": "c -\u003e m",
        "fct-source": "src/Data-Monoid-Reducer.html#unit",
        "fct-type": "method",
        "title": "unit"
      },
      "index": {
        "description": "Convert value into Monoid",
        "hierarchy": "Data Monoid Reducer",
        "module": "Data.Monoid.Reducer",
        "name": "unit",
        "normalized": "a-\u003eb",
        "package": "monoids",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer that takes a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m and produces a new \u003ccode\u003em\u003c/code\u003e-Reducer named \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is useful when you have a generator that already contains monoidal values or someone supplies\n the map to the monoid in the form of a function rather than as a \u003ca\u003eReducer\u003c/a\u003e instance. You can just\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003ereduce\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003emapReduce\u003c/code\u003e f\u003c/code\u003e in those scenarios. These behaviors are encapsulated \n into the \u003ccode\u003efold\u003c/code\u003e and \u003ccode\u003efoldMap\u003c/code\u003e combinators in \u003ca\u003eData.Monoid.Combinators\u003c/a\u003e respectively.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Self",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Self.html",
        "fct-type": "module",
        "title": "Self"
      },
      "index": {
        "description": "simple Monoid transformer that takes Monoid and produces new Reducer named Self This is useful when you have generator that already contains monoidal values or someone supplies the map to the monoid in the form of function rather than as Reducer instance You can just getSelf reduce or getSelf mapReduce in those scenarios These behaviors are encapsulated into the fold and foldMap combinators in Data.Monoid.Combinators respectively",
        "hierarchy": "Data Monoid Self",
        "module": "Data.Monoid.Self",
        "name": "Self",
        "normalized": "",
        "package": "monoids",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#t:Self",
      "description": {
        "fct-module": "Data.Monoid.Self",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Self.html#Self",
        "fct-type": "newtype",
        "title": "Self"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Self",
        "module": "Data.Monoid.Self",
        "name": "Self",
        "normalized": "",
        "package": "monoids",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#v:Self",
      "description": {
        "fct-module": "Data.Monoid.Self",
        "fct-package": "monoids",
        "fct-signature": "Self",
        "fct-source": "src/Data-Monoid-Self.html#Self",
        "fct-type": "function",
        "title": "Self"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Self",
        "module": "Data.Monoid.Self",
        "name": "Self",
        "normalized": "",
        "package": "monoids",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#v:getSelf",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Self",
        "fct-package": "monoids",
        "fct-signature": "m",
        "fct-source": "src/Data-Monoid-Self.html#Self",
        "fct-type": "function",
        "title": "getSelf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Self",
        "module": "Data.Monoid.Self",
        "name": "getSelf",
        "normalized": "",
        "package": "monoids",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntactic sugar for working with a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e instances \n that conflicts with names from the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding ((+),(*),(^))\n import Data.Monoid.Sugar\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Monoid.Sugar",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Sugar.html",
        "fct-type": "module",
        "title": "Sugar"
      },
      "index": {
        "description": "Syntactic sugar for working with Monoid and Multiplicative instances that conflicts with names from the Prelude import Prelude hiding import Data.Monoid.Sugar",
        "hierarchy": "Data Monoid Sugar",
        "module": "Data.Monoid.Sugar",
        "name": "Sugar",
        "normalized": "",
        "package": "monoids",
        "partial": "Sugar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#v:-42-",
      "description": {
        "fct-module": "Data.Monoid.Sugar",
        "fct-package": "monoids",
        "fct-signature": "r -\u003e r -\u003e r",
        "fct-source": "src/Data-Monoid-Sugar.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Sugar",
        "module": "Data.Monoid.Sugar",
        "name": "(*) *",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "r-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#v:-43-",
      "description": {
        "fct-module": "Data.Monoid.Sugar",
        "fct-package": "monoids",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Data-Monoid-Sugar.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Sugar",
        "module": "Data.Monoid.Sugar",
        "name": "(+) +",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#v:-94-",
      "description": {
        "fct-module": "Data.Monoid.Sugar",
        "fct-package": "monoids",
        "fct-signature": "r -\u003e b -\u003e r",
        "fct-source": "src/Data-Monoid-Sugar.html#%5E",
        "fct-type": "function",
        "title": "(^)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Sugar",
        "module": "Data.Monoid.Sugar",
        "name": "(^) ^",
        "normalized": "a-\u003eb-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "r-\u003eb-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "module",
        "fct-source": "src/Data-Monoid-Union.html",
        "fct-type": "module",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "Union",
        "normalized": "",
        "package": "monoids",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:HasUnion",
      "description": {
        "fct-descr": "\u003cp\u003eA Container suitable for the \u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Union.html#HasUnion",
        "fct-type": "class",
        "title": "HasUnion"
      },
      "index": {
        "description": "Container suitable for the Union Monoid",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "HasUnion",
        "normalized": "",
        "package": "monoids",
        "partial": "Has Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:HasUnionWith",
      "description": {
        "fct-descr": "\u003cp\u003ePolymorphic containers that we can supply an operation to handle unions with\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "class",
        "fct-source": "src/Data-Monoid-Union.html#HasUnionWith",
        "fct-type": "class",
        "title": "HasUnionWith"
      },
      "index": {
        "description": "Polymorphic containers that we can supply an operation to handle unions with",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "HasUnionWith",
        "normalized": "",
        "package": "monoids",
        "partial": "Has Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Union.html#Union",
        "fct-type": "newtype",
        "title": "Union"
      },
      "index": {
        "description": "The Monoid union empty",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "Union",
        "normalized": "",
        "package": "monoids",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:UnionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e('unionWith mappend',\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for containers full of monoids.\n\u003c/p\u003e",
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Monoid-Union.html#UnionWith",
        "fct-type": "newtype",
        "title": "UnionWith"
      },
      "index": {
        "description": "The Monoid unionWith mappend empty for containers full of monoids",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "UnionWith",
        "normalized": "",
        "package": "monoids",
        "partial": "Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:Union",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "Union",
        "fct-source": "src/Data-Monoid-Union.html#Union",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "Union",
        "normalized": "",
        "package": "monoids",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:UnionWith",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "UnionWith",
        "fct-source": "src/Data-Monoid-Union.html#UnionWith",
        "fct-type": "function",
        "title": "UnionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "UnionWith",
        "normalized": "",
        "package": "monoids",
        "partial": "Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:empty",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "f",
        "fct-source": "src/Data-Monoid-Union.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "empty",
        "normalized": "",
        "package": "monoids",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:emptyWith",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "f a",
        "fct-source": "src/Data-Monoid-Union.html#emptyWith",
        "fct-type": "method",
        "title": "emptyWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "emptyWith",
        "normalized": "",
        "package": "monoids",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:getUnion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "f",
        "fct-source": "src/Data-Monoid-Union.html#Union",
        "fct-type": "function",
        "title": "getUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "getUnion",
        "normalized": "",
        "package": "monoids",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:getUnionWith",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "f m",
        "fct-source": "src/Data-Monoid-Union.html#UnionWith",
        "fct-type": "function",
        "title": "getUnionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "getUnionWith",
        "normalized": "",
        "package": "monoids",
        "partial": "Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:union",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "f -\u003e f -\u003e f",
        "fct-source": "src/Data-Monoid-Union.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "union",
        "normalized": "a-\u003ea-\u003ea",
        "package": "monoids",
        "partial": "",
        "signature": "f-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:unionWith",
      "description": {
        "fct-module": "Data.Monoid.Union",
        "fct-package": "monoids",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Monoid-Union.html#unionWith",
        "fct-type": "method",
        "title": "unionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Monoid Union",
        "module": "Data.Monoid.Union",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
        "package": "monoids",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ef a-\u003ef a-\u003ef a"
      }
    }
  }
]