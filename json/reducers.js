[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Monoids that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e,\n \u003ca\u003eData.Foldable\u003c/a\u003e, \u003ca\u003eControl.Monad\u003c/a\u003e or elsewhere. Intended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Generator.Combinators as Generator\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if all of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if any of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:asum",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003egetAlt\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eType specialization of \u003ca\u003efoldMap\u003c/a\u003e above\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Map",
        "signature": "(Elem c-\u003e[b])-\u003ec-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to see if \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e matches the supplied value\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "Elem c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a subset of the elements in a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "(Elem c-\u003eBool)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:filterWith",
      "description": {
        "fct-descr": "\u003cp\u003eAllows idiomatic specialization of filter by proving a function that will be used to transform the output\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "With",
        "signature": "(m-\u003en)-\u003e(Elem c-\u003eBool)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eWrappedMonoid\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunwrapMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
        "fct-signature": "c -\u003e m",
        "fct-source": "src/Data-Generator-Combinators.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Efficiently reduce Generator using the WrappedMonoid monoid specialized version of its namesake from Data.Foldable reduceWith unwrapMonoid",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "fold",
        "normalized": "a-\u003eb",
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eWrappedMonoid\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunwrapMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
        "fct-signature": "(Elem c -\u003e m) -\u003e c -\u003e m",
        "fct-source": "src/Data-Generator-Combinators.html#foldMap",
        "fct-type": "function",
        "title": "foldMap"
      },
      "index": {
        "description": "Efficiently mapReduce Generator using the WrappedMonoid monoid specialized version of its namesake from Data.Foldable mapReduceWith unwrapMonoid",
        "hierarchy": "Data Generator Combinators",
        "module": "Data.Generator.Combinators",
        "name": "foldMap",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003eb",
        "package": "reducers",
        "partial": "Map",
        "signature": "(Elem c-\u003em)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:forM_",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003e(Elem c-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:for_",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003e(Elem c-\u003ef b)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAction\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "(Elem c-\u003em b)-\u003ec-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:msum",
      "description": {
        "fct-descr": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetMonadSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:notElem",
      "description": {
        "fct-descr": "\u003cp\u003eCheck to make sure that the supplied value is not a member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Elem",
        "signature": "Elem c-\u003ec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:product",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently take the product of every member of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetProduct\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003eElem c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently sum over the members of any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003eElem c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e to a list of its contents. Specialization of \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "List",
        "signature": "c-\u003e[Elem c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:traverse_",
      "description": {
        "fct-descr": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetTraversal\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Generator.Combinators",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "(Elem c-\u003ef b)-\u003ec-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e is a possibly-specialized container, which contains values of \n type \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e, and which knows how to efficiently apply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to extract\n an answer.\n\u003c/p\u003e\u003cp\u003eSince a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is not polymorphic in its contents, it is more specialized\n than \u003ca\u003eData.Foldable.Foldable\u003c/a\u003e, and a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may supply efficient left-to-right\n and right-to-left reduction strategies that a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e may avail itself of.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Char8",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that treats \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n This lets you use a \u003ccode\u003eByteString\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e source without going through a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer like \u003ccode\u003eUTF8\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Generator",
      "description": {
        "fct-descr": "\u003cp\u003eminimal definition \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Keys",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the keys of an indexed container\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Values",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the values contained in an indexed container\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:Char8",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:Keys",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:Values",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:getChar8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:getKeys",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:getValues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapFrom",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "From",
        "signature": "(Elem c-\u003ee)-\u003ec-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapReduce",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Reduce",
        "signature": "(Elem c-\u003ee)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapReduceWith",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "Reduce With",
        "signature": "(m-\u003en)-\u003e(Elem c-\u003ee)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapTo",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "To",
        "signature": "(Elem c-\u003ee)-\u003em-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:reduce",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e directly to the elements of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:reduceWith",
      "description": {
        "fct-module": "Data.Generator",
        "fct-package": "reducers",
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
        "package": "reducers",
        "partial": "With",
        "signature": "(m-\u003en)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroup for working \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePlus\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Alt",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Alt.html",
        "fct-type": "module",
        "title": "Alt"
      },
      "index": {
        "description": "semigroup for working Alt or Plus",
        "hierarchy": "Data Semigroup Alt",
        "module": "Data.Semigroup.Alt",
        "name": "Alt",
        "normalized": "",
        "package": "reducers",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#t:Alter",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAlter\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Alt",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Alt.html#Alter",
        "fct-type": "newtype",
        "title": "Alter"
      },
      "index": {
        "description": "Alter turns any Alt instance into Semigroup",
        "hierarchy": "Data Semigroup Alt",
        "module": "Data.Semigroup.Alt",
        "name": "Alter",
        "normalized": "",
        "package": "reducers",
        "partial": "Alter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#v:Alter",
      "description": {
        "fct-module": "Data.Semigroup.Alt",
        "fct-package": "reducers",
        "fct-signature": "Alter",
        "fct-source": "src/Data-Semigroup-Alt.html#Alter",
        "fct-type": "function",
        "title": "Alter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Alt",
        "module": "Data.Semigroup.Alt",
        "name": "Alter",
        "normalized": "",
        "package": "reducers",
        "partial": "Alter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#v:getAlter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Alt",
        "fct-package": "reducers",
        "fct-signature": "f a",
        "fct-source": "src/Data-Semigroup-Alt.html#Alter",
        "fct-type": "function",
        "title": "getAlter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Alt",
        "module": "Data.Semigroup.Alt",
        "name": "getAlter",
        "normalized": "",
        "package": "reducers",
        "partial": "Alter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroup for working with \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Alternative",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Alternative.html",
        "fct-type": "module",
        "title": "Alternative"
      },
      "index": {
        "description": "semigroup for working with Alternative Functor",
        "hierarchy": "Data Semigroup Alternative",
        "module": "Data.Semigroup.Alternative",
        "name": "Alternative",
        "normalized": "",
        "package": "reducers",
        "partial": "Alternative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#t:Alternate",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAlternate\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Alternative",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Alternative.html#Alternate",
        "fct-type": "newtype",
        "title": "Alternate"
      },
      "index": {
        "description": "Alternate turns any Alternative instance into Monoid",
        "hierarchy": "Data Semigroup Alternative",
        "module": "Data.Semigroup.Alternative",
        "name": "Alternate",
        "normalized": "",
        "package": "reducers",
        "partial": "Alternate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#v:Alternate",
      "description": {
        "fct-module": "Data.Semigroup.Alternative",
        "fct-package": "reducers",
        "fct-signature": "Alternate",
        "fct-source": "src/Data-Semigroup-Alternative.html#Alternate",
        "fct-type": "function",
        "title": "Alternate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Alternative",
        "module": "Data.Semigroup.Alternative",
        "name": "Alternate",
        "normalized": "",
        "package": "reducers",
        "partial": "Alternate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#v:getAlternate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Alternative",
        "fct-package": "reducers",
        "fct-signature": "f a",
        "fct-source": "src/Data-Semigroup-Alternative.html#Alternate",
        "fct-type": "function",
        "title": "getAlternate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Alternative",
        "module": "Data.Semigroup.Alternative",
        "name": "getAlternate",
        "normalized": "",
        "package": "reducers",
        "partial": "Alternate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemigroups for working with \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Applicative.html",
        "fct-type": "module",
        "title": "Applicative"
      },
      "index": {
        "description": "Semigroups for working with Applicative Functor",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "Applicative",
        "normalized": "",
        "package": "reducers",
        "partial": "Applicative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#t:Ap",
      "description": {
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Applicative.html#Ap",
        "fct-type": "newtype",
        "title": "Ap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "Ap",
        "normalized": "",
        "package": "reducers",
        "partial": "Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#t:Traversal",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e uses an glues together \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e actions with (*\u003e)\n   in the manner of \u003ccode\u003etraverse_\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by \n   reduced actions are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Applicative.html#Traversal",
        "fct-type": "newtype",
        "title": "Traversal"
      },
      "index": {
        "description": "Traversal uses an glues together Applicative actions with in the manner of traverse from Data.Foldable Any values returned by reduced actions are discarded",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "Traversal",
        "normalized": "",
        "package": "reducers",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:Ap",
      "description": {
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "Ap",
        "fct-source": "src/Data-Semigroup-Applicative.html#Ap",
        "fct-type": "function",
        "title": "Ap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "Ap",
        "normalized": "",
        "package": "reducers",
        "partial": "Ap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:Traversal",
      "description": {
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "Traversal",
        "fct-source": "src/Data-Semigroup-Applicative.html#Traversal",
        "fct-type": "function",
        "title": "Traversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "Traversal",
        "normalized": "",
        "package": "reducers",
        "partial": "Traversal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:getApp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "f m",
        "fct-source": "src/Data-Semigroup-Applicative.html#Ap",
        "fct-type": "function",
        "title": "getApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "getApp",
        "normalized": "",
        "package": "reducers",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:getTraversal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Applicative",
        "fct-package": "reducers",
        "fct-signature": "f ()",
        "fct-source": "src/Data-Semigroup-Applicative.html#Traversal",
        "fct-type": "function",
        "title": "getTraversal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Applicative",
        "module": "Data.Semigroup.Applicative",
        "name": "getTraversal",
        "normalized": "a()",
        "package": "reducers",
        "partial": "Traversal",
        "signature": "f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemigroups for working with \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Apply.html",
        "fct-type": "module",
        "title": "Apply"
      },
      "index": {
        "description": "Semigroups for working with Apply",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "Apply",
        "normalized": "",
        "package": "reducers",
        "partial": "Apply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#t:App",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e wrapped around a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Apply.html#App",
        "fct-type": "newtype",
        "title": "App"
      },
      "index": {
        "description": "App turns any Apply wrapped around Semigroup into Semigroup",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "App",
        "normalized": "",
        "package": "reducers",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#t:Trav",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTrav\u003c/a\u003e\u003c/code\u003e uses an glues together \u003ccode\u003eApplicative\u003c/code\u003e actions with (*\u003e)\n   in the manner of \u003ccode\u003etraverse_\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by \n   reduced actions are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Apply.html#Trav",
        "fct-type": "newtype",
        "title": "Trav"
      },
      "index": {
        "description": "Trav uses an glues together Applicative actions with in the manner of traverse from Data.Foldable Any values returned by reduced actions are discarded",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "Trav",
        "normalized": "",
        "package": "reducers",
        "partial": "Trav",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:App",
      "description": {
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "App",
        "fct-source": "src/Data-Semigroup-Apply.html#App",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "App",
        "normalized": "",
        "package": "reducers",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:Trav",
      "description": {
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "Trav",
        "fct-source": "src/Data-Semigroup-Apply.html#Trav",
        "fct-type": "function",
        "title": "Trav"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "Trav",
        "normalized": "",
        "package": "reducers",
        "partial": "Trav",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:getApp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "f m",
        "fct-source": "src/Data-Semigroup-Apply.html#App",
        "fct-type": "function",
        "title": "getApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "getApp",
        "normalized": "",
        "package": "reducers",
        "partial": "App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:getTrav",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Apply",
        "fct-package": "reducers",
        "fct-signature": "f ()",
        "fct-source": "src/Data-Semigroup-Apply.html#Trav",
        "fct-type": "function",
        "title": "getTrav"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Apply",
        "module": "Data.Semigroup.Apply",
        "name": "getTrav",
        "normalized": "a()",
        "package": "reducers",
        "partial": "Trav",
        "signature": "f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator1\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e is a possibly-specialized container, which contains values of \n type \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e, and which knows how to efficiently apply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to extract\n an answer.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGenerator1\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eFoldable1\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003eFoldable\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Generator.html",
        "fct-type": "module",
        "title": "Generator"
      },
      "index": {
        "description": "Generator1 is possibly-specialized container which contains values of type Elem and which knows how to efficiently apply Reducer to extract an answer Generator1 is to Generator as Foldable1 is to Foldable",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "Generator",
        "normalized": "",
        "package": "reducers",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#t:Generator1",
      "description": {
        "fct-descr": "\u003cp\u003eminimal definition \u003ccode\u003e\u003ca\u003emapReduce1\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapTo1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Generator.html#Generator1",
        "fct-type": "class",
        "title": "Generator1"
      },
      "index": {
        "description": "minimal definition mapReduce1 or mapTo1",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "Generator1",
        "normalized": "",
        "package": "reducers",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapFrom1",
      "description": {
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "(Elem c -\u003e e) -\u003e c -\u003e m -\u003e m",
        "fct-source": "src/Data-Semigroup-Generator.html#mapFrom1",
        "fct-type": "method",
        "title": "mapFrom1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "mapFrom1",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec-\u003ec",
        "package": "reducers",
        "partial": "From",
        "signature": "(Elem c-\u003ee)-\u003ec-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapReduce1",
      "description": {
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "(Elem c -\u003e e) -\u003e c -\u003e m",
        "fct-source": "src/Data-Semigroup-Generator.html#mapReduce1",
        "fct-type": "method",
        "title": "mapReduce1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "mapReduce1",
        "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec",
        "package": "reducers",
        "partial": "Reduce",
        "signature": "(Elem c-\u003ee)-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapReduceWith1",
      "description": {
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "(m -\u003e n) -\u003e (Elem c -\u003e e) -\u003e c -\u003e n",
        "fct-source": "src/Data-Semigroup-Generator.html#mapReduceWith1",
        "fct-type": "function",
        "title": "mapReduceWith1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "mapReduceWith1",
        "normalized": "(a-\u003eb)-\u003e(Elem c-\u003ed)-\u003ec-\u003eb",
        "package": "reducers",
        "partial": "Reduce With",
        "signature": "(m-\u003en)-\u003e(Elem c-\u003ee)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapTo1",
      "description": {
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "(Elem c -\u003e e) -\u003e m -\u003e c -\u003e m",
        "fct-source": "src/Data-Semigroup-Generator.html#mapTo1",
        "fct-type": "method",
        "title": "mapTo1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "mapTo1",
        "normalized": "(Elem a-\u003eb)-\u003ec-\u003ea-\u003ec",
        "package": "reducers",
        "partial": "To",
        "signature": "(Elem c-\u003ee)-\u003em-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:reduce1",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e directly to the elements of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "c -\u003e m",
        "fct-source": "src/Data-Semigroup-Generator.html#reduce1",
        "fct-type": "function",
        "title": "reduce1"
      },
      "index": {
        "description": "Apply Reducer directly to the elements of Generator",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "reduce1",
        "normalized": "a-\u003eb",
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:reduceWith1",
      "description": {
        "fct-module": "Data.Semigroup.Generator",
        "fct-package": "reducers",
        "fct-signature": "(m -\u003e n) -\u003e c -\u003e n",
        "fct-source": "src/Data-Semigroup-Generator.html#reduceWith1",
        "fct-type": "function",
        "title": "reduceWith1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Generator",
        "module": "Data.Semigroup.Generator",
        "name": "reduceWith1",
        "normalized": "(a-\u003eb)-\u003ec-\u003eb",
        "package": "reducers",
        "partial": "With",
        "signature": "(m-\u003en)-\u003ec-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Instances.html#",
      "description": {
        "fct-module": "Data.Semigroup.Instances",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Instances",
        "module": "Data.Semigroup.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "reducers",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemigroups for working with \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Semigroups for working with Monad",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "reducers",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e uses an glues together monadic actions with (\u003e\u003e)\n   in the manner of \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by\n   reduced actions are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Monad.html#Action",
        "fct-type": "newtype",
        "title": "Action"
      },
      "index": {
        "description": "Action uses an glues together monadic actions with in the manner of mapM from Data.Foldable Any values returned by reduced actions are discarded",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "Action",
        "normalized": "",
        "package": "reducers",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#t:Mon",
      "description": {
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Monad.html#Mon",
        "fct-type": "newtype",
        "title": "Mon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "Mon",
        "normalized": "",
        "package": "reducers",
        "partial": "Mon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:Action",
      "description": {
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "Action",
        "fct-source": "src/Data-Semigroup-Monad.html#Action",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "Action",
        "normalized": "",
        "package": "reducers",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:Mon",
      "description": {
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "Mon",
        "fct-source": "src/Data-Semigroup-Monad.html#Mon",
        "fct-type": "function",
        "title": "Mon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "Mon",
        "normalized": "",
        "package": "reducers",
        "partial": "Mon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:getAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "f ()",
        "fct-source": "src/Data-Semigroup-Monad.html#Action",
        "fct-type": "function",
        "title": "getAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "getAction",
        "normalized": "a()",
        "package": "reducers",
        "partial": "Action",
        "signature": "f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:getMon",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Monad",
        "fct-package": "reducers",
        "fct-signature": "f m",
        "fct-source": "src/Data-Semigroup-Monad.html#Mon",
        "fct-type": "function",
        "title": "getMon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Monad",
        "module": "Data.Semigroup.Monad",
        "name": "getMon",
        "normalized": "",
        "package": "reducers",
        "partial": "Mon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroup for working with instances of \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.MonadPlus",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-MonadPlus.html",
        "fct-type": "module",
        "title": "MonadPlus"
      },
      "index": {
        "description": "semigroup for working with instances of MonadPlus",
        "hierarchy": "Data Semigroup MonadPlus",
        "module": "Data.Semigroup.MonadPlus",
        "name": "MonadPlus",
        "normalized": "",
        "package": "reducers",
        "partial": "Monad Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#t:MonadSum",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadSum\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.MonadPlus",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-MonadPlus.html#MonadSum",
        "fct-type": "newtype",
        "title": "MonadSum"
      },
      "index": {
        "description": "MonadSum turns any MonadPlus instance into Monoid",
        "hierarchy": "Data Semigroup MonadPlus",
        "module": "Data.Semigroup.MonadPlus",
        "name": "MonadSum",
        "normalized": "",
        "package": "reducers",
        "partial": "Monad Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#v:MonadSum",
      "description": {
        "fct-module": "Data.Semigroup.MonadPlus",
        "fct-package": "reducers",
        "fct-signature": "MonadSum",
        "fct-source": "src/Data-Semigroup-MonadPlus.html#MonadSum",
        "fct-type": "function",
        "title": "MonadSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup MonadPlus",
        "module": "Data.Semigroup.MonadPlus",
        "name": "MonadSum",
        "normalized": "",
        "package": "reducers",
        "partial": "Monad Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#v:getMonadSum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.MonadPlus",
        "fct-package": "reducers",
        "fct-signature": "f a",
        "fct-source": "src/Data-Semigroup-MonadPlus.html#MonadSum",
        "fct-type": "function",
        "title": "getMonadSum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup MonadPlus",
        "module": "Data.Semigroup.MonadPlus",
        "name": "getMonadSum",
        "normalized": "",
        "package": "reducers",
        "partial": "Monad Sum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#",
      "description": {
        "fct-module": "Data.Semigroup.Reducer.With",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Reducer-With.html",
        "fct-type": "module",
        "title": "With"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer With",
        "module": "Data.Semigroup.Reducer.With",
        "name": "With",
        "normalized": "",
        "package": "reducers",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#t:WithReducer",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003ec\u003c/code\u003e-\u003ca\u003eReducer\u003c/a\u003e, then m is \u003ccode\u003e(c \u003ccode\u003e\u003ca\u003eWithReducer\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e-\u003ca\u003eReducer\u003c/a\u003e\n   This can be used to quickly select a \u003ca\u003eReducer\u003c/a\u003e for use as a \u003ccode\u003e\u003ca\u003eFingerTree\u003c/a\u003e\u003c/code\u003e\n   \u003ccode\u003e\u003ca\u003emeasure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer.With",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Reducer-With.html#WithReducer",
        "fct-type": "newtype",
        "title": "WithReducer"
      },
      "index": {
        "description": "If is Reducer then is WithReducer Reducer This can be used to quickly select Reducer for use as FingerTree measure",
        "hierarchy": "Data Semigroup Reducer With",
        "module": "Data.Semigroup.Reducer.With",
        "name": "WithReducer",
        "normalized": "",
        "package": "reducers",
        "partial": "With Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#v:WithReducer",
      "description": {
        "fct-module": "Data.Semigroup.Reducer.With",
        "fct-package": "reducers",
        "fct-signature": "WithReducer",
        "fct-source": "src/Data-Semigroup-Reducer-With.html#WithReducer",
        "fct-type": "function",
        "title": "WithReducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer With",
        "module": "Data.Semigroup.Reducer.With",
        "name": "WithReducer",
        "normalized": "",
        "package": "reducers",
        "partial": "With Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#v:withoutReducer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Reducer.With",
        "fct-package": "reducers",
        "fct-signature": "c",
        "fct-source": "src/Data-Semigroup-Reducer-With.html#WithReducer",
        "fct-type": "function",
        "title": "withoutReducer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer With",
        "module": "Data.Semigroup.Reducer.With",
        "name": "withoutReducer",
        "normalized": "",
        "package": "reducers",
        "partial": "Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e with a canonical mapping from \u003ccode\u003ec\u003c/code\u003e to the Semigroup.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Reducer.html",
        "fct-type": "module",
        "title": "Reducer"
      },
      "index": {
        "description": "Reducer is Semigroup with canonical mapping from to the Semigroup",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "Reducer",
        "normalized": "",
        "package": "reducers",
        "partial": "Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#t:Count",
      "description": {
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Reducer.html#Count",
        "fct-type": "newtype",
        "title": "Count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "Count",
        "normalized": "",
        "package": "reducers",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#t:Reducer",
      "description": {
        "fct-descr": "\u003cp\u003eThis type may be best read infix. A \u003ccode\u003ec \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e that maps\n values of type \u003ccode\u003ec\u003c/code\u003e through \u003ccode\u003eunit\u003c/code\u003e to values of type \u003ccode\u003em\u003c/code\u003e. A \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may also\n supply operations which tack-on another \u003ccode\u003ec\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e on the left\n or right. These specialized reductions may be more efficient in some scenarios\n and are used when appropriate by a \u003ccode\u003eGenerator\u003c/code\u003e. The names \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e work\n by analogy to the synonymous operations in the list monoid.\n\u003c/p\u003e\u003cp\u003eThis class deliberately avoids functional-dependencies, so that () can be a \u003ccode\u003ec\u003c/code\u003e-Reducer\n for all \u003ccode\u003ec\u003c/code\u003e, and so many common reducers can work over multiple types, for instance,\n First and Last may reduce both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e. Since a \u003ccode\u003eGenerator\u003c/code\u003e has a fixed element\n type, the input to the reducer is generally known and extracting from the monoid usually\n is sufficient to fix the result type. Combinators are available for most scenarios where\n this is not the case, and the few remaining cases can be handled by using an explicit \n type annotation.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Reducer.html#Reducer",
        "fct-type": "class",
        "title": "Reducer"
      },
      "index": {
        "description": "This type may be best read infix Reducer is Semigroup that maps values of type through unit to values of type Reducer may also supply operations which tack-on another to an existing Monoid on the left or right These specialized reductions may be more efficient in some scenarios and are used when appropriate by Generator The names cons and snoc work by analogy to the synonymous operations in the list monoid This class deliberately avoids functional-dependencies so that can be Reducer for all and so many common reducers can work over multiple types for instance First and Last may reduce both and Maybe Since Generator has fixed element type the input to the reducer is generally known and extracting from the monoid usually is sufficient to fix the result type Combinators are available for most scenarios where this is not the case and the few remaining cases can be handled by using an explicit type annotation Minimal definition unit",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "Reducer",
        "normalized": "",
        "package": "reducers",
        "partial": "Reducer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:Count",
      "description": {
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "Count",
        "fct-source": "src/Data-Semigroup-Reducer.html#Count",
        "fct-type": "function",
        "title": "Count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "Count",
        "normalized": "",
        "package": "reducers",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend a value onto a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e for use during right-to-left reduction\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "c -\u003e m -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#cons",
        "fct-type": "method",
        "title": "cons"
      },
      "index": {
        "description": "Prepend value onto Semigroup for use during right-to-left reduction",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eb",
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldMapReduce",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container, after mapping the contents into a suitable form for reduction.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "(a -\u003e e) -\u003e f a -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#foldMapReduce",
        "fct-type": "function",
        "title": "foldMapReduce"
      },
      "index": {
        "description": "Apply Reducer to Foldable container after mapping the contents into suitable form for reduction",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "foldMapReduce",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ed",
        "package": "reducers",
        "partial": "Map Reduce",
        "signature": "(a-\u003ee)-\u003ef a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldMapReduce1",
      "description": {
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "(a -\u003e e) -\u003e f a -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#foldMapReduce1",
        "fct-type": "function",
        "title": "foldMapReduce1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "foldMapReduce1",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ed",
        "package": "reducers",
        "partial": "Map Reduce",
        "signature": "(a-\u003ee)-\u003ef a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldReduce",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e mapping each element through \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "f e -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#foldReduce",
        "fct-type": "function",
        "title": "foldReduce"
      },
      "index": {
        "description": "Apply Reducer to Foldable mapping each element through unit",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "foldReduce",
        "normalized": "a b-\u003ec",
        "package": "reducers",
        "partial": "Reduce",
        "signature": "f e-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldReduce1",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable1\u003c/a\u003e\u003c/code\u003e mapping each element through \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "f e -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#foldReduce1",
        "fct-type": "function",
        "title": "foldReduce1"
      },
      "index": {
        "description": "Apply Reducer to Foldable1 mapping each element through unit",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "foldReduce1",
        "normalized": "a b-\u003ec",
        "package": "reducers",
        "partial": "Reduce",
        "signature": "f e-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:getCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "Int",
        "fct-source": "src/Data-Semigroup-Reducer.html#Count",
        "fct-type": "function",
        "title": "getCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "getCount",
        "normalized": "",
        "package": "reducers",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:pureUnit",
      "description": {
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "c -\u003e f n",
        "fct-source": "src/Data-Semigroup-Reducer.html#pureUnit",
        "fct-type": "function",
        "title": "pureUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "pureUnit",
        "normalized": "a-\u003eb c",
        "package": "reducers",
        "partial": "Unit",
        "signature": "c-\u003ef n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:returnUnit",
      "description": {
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "c -\u003e m n",
        "fct-source": "src/Data-Semigroup-Reducer.html#returnUnit",
        "fct-type": "function",
        "title": "returnUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "returnUnit",
        "normalized": "a-\u003eb c",
        "package": "reducers",
        "partial": "Unit",
        "signature": "c-\u003em n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a value to a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e for use in left-to-right reduction\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "m -\u003e c -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#snoc",
        "fct-type": "method",
        "title": "snoc"
      },
      "index": {
        "description": "Append value to Semigroup for use in left-to-right reduction",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "snoc",
        "normalized": "a-\u003eb-\u003ea",
        "package": "reducers",
        "partial": "",
        "signature": "m-\u003ec-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:unit",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value into a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Reducer",
        "fct-package": "reducers",
        "fct-signature": "c -\u003e m",
        "fct-source": "src/Data-Semigroup-Reducer.html#unit",
        "fct-type": "method",
        "title": "unit"
      },
      "index": {
        "description": "Convert value into Semigroup",
        "hierarchy": "Data Semigroup Reducer",
        "module": "Data.Semigroup.Reducer",
        "name": "unit",
        "normalized": "a-\u003eb",
        "package": "reducers",
        "partial": "",
        "signature": "c-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer that takes a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m and produces a new \u003ccode\u003em\u003c/code\u003e-Reducer named \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is useful when you have a generator that already contains monoidal values or someone supplies\n the map to the monoid in the form of a function rather than as a \u003ca\u003eReducer\u003c/a\u003e instance. You can just\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003ereduce\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003emapReduce\u003c/code\u003e f\u003c/code\u003e in those scenarios. These behaviors are encapsulated\n into the \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e combinators in \u003ca\u003eData.Monoid.Combinators\u003c/a\u003e respectively.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Semigroup.Self",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Self.html",
        "fct-type": "module",
        "title": "Self"
      },
      "index": {
        "description": "simple Monoid transformer that takes Monoid and produces new Reducer named Self This is useful when you have generator that already contains monoidal values or someone supplies the map to the monoid in the form of function rather than as Reducer instance You can just getSelf reduce or getSelf mapReduce in those scenarios These behaviors are encapsulated into the fold and foldMap combinators in Data.Monoid.Combinators respectively",
        "hierarchy": "Data Semigroup Self",
        "module": "Data.Semigroup.Self",
        "name": "Self",
        "normalized": "",
        "package": "reducers",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#t:Self",
      "description": {
        "fct-module": "Data.Semigroup.Self",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Self.html#Self",
        "fct-type": "newtype",
        "title": "Self"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Self",
        "module": "Data.Semigroup.Self",
        "name": "Self",
        "normalized": "",
        "package": "reducers",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#v:Self",
      "description": {
        "fct-module": "Data.Semigroup.Self",
        "fct-package": "reducers",
        "fct-signature": "Self",
        "fct-source": "src/Data-Semigroup-Self.html#Self",
        "fct-type": "function",
        "title": "Self"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Self",
        "module": "Data.Semigroup.Self",
        "name": "Self",
        "normalized": "",
        "package": "reducers",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#v:getSelf",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Self",
        "fct-package": "reducers",
        "fct-signature": "m",
        "fct-source": "src/Data-Semigroup-Self.html#Self",
        "fct-type": "function",
        "title": "getSelf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Self",
        "module": "Data.Semigroup.Self",
        "name": "getSelf",
        "normalized": "",
        "package": "reducers",
        "partial": "Self",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "module",
        "fct-source": "src/Data-Semigroup-Union.html",
        "fct-type": "module",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "Union",
        "normalized": "",
        "package": "reducers",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnion",
      "description": {
        "fct-descr": "\u003cp\u003eA Container suitable for the \u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Union.html#HasUnion",
        "fct-type": "class",
        "title": "HasUnion"
      },
      "index": {
        "description": "Container suitable for the Union Monoid",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "HasUnion",
        "normalized": "",
        "package": "reducers",
        "partial": "Has Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnion0",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Union.html#HasUnion0",
        "fct-type": "class",
        "title": "HasUnion0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "HasUnion0",
        "normalized": "",
        "package": "reducers",
        "partial": "Has Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnionWith",
      "description": {
        "fct-descr": "\u003cp\u003ePolymorphic containers that we can supply an operation to handle unions with\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Union.html#HasUnionWith",
        "fct-type": "class",
        "title": "HasUnionWith"
      },
      "index": {
        "description": "Polymorphic containers that we can supply an operation to handle unions with",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "HasUnionWith",
        "normalized": "",
        "package": "reducers",
        "partial": "Has Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnionWith0",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "class",
        "fct-source": "src/Data-Semigroup-Union.html#HasUnionWith0",
        "fct-type": "class",
        "title": "HasUnionWith0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "HasUnionWith0",
        "normalized": "",
        "package": "reducers",
        "partial": "Has Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:Union",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Union.html#Union",
        "fct-type": "newtype",
        "title": "Union"
      },
      "index": {
        "description": "The Monoid union empty",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "Union",
        "normalized": "",
        "package": "reducers",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:UnionWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e('unionWith mappend',\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for containers full of monoids.\n\u003c/p\u003e",
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Semigroup-Union.html#UnionWith",
        "fct-type": "newtype",
        "title": "UnionWith"
      },
      "index": {
        "description": "The Monoid unionWith mappend empty for containers full of monoids",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "UnionWith",
        "normalized": "",
        "package": "reducers",
        "partial": "Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:Union",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "Union",
        "fct-source": "src/Data-Semigroup-Union.html#Union",
        "fct-type": "function",
        "title": "Union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "Union",
        "normalized": "",
        "package": "reducers",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:UnionWith",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "UnionWith",
        "fct-source": "src/Data-Semigroup-Union.html#UnionWith",
        "fct-type": "function",
        "title": "UnionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "UnionWith",
        "normalized": "",
        "package": "reducers",
        "partial": "Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:empty",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "f",
        "fct-source": "src/Data-Semigroup-Union.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "empty",
        "normalized": "",
        "package": "reducers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:emptyWith",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "f a",
        "fct-source": "src/Data-Semigroup-Union.html#emptyWith",
        "fct-type": "method",
        "title": "emptyWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "emptyWith",
        "normalized": "",
        "package": "reducers",
        "partial": "With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:getUnion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "f",
        "fct-source": "src/Data-Semigroup-Union.html#Union",
        "fct-type": "function",
        "title": "getUnion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "getUnion",
        "normalized": "",
        "package": "reducers",
        "partial": "Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:getUnionWith",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "f m",
        "fct-source": "src/Data-Semigroup-Union.html#UnionWith",
        "fct-type": "function",
        "title": "getUnionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "getUnionWith",
        "normalized": "",
        "package": "reducers",
        "partial": "Union With",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:union",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "f -\u003e f -\u003e f",
        "fct-source": "src/Data-Semigroup-Union.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "union",
        "normalized": "a-\u003ea-\u003ea",
        "package": "reducers",
        "partial": "",
        "signature": "f-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:unionWith",
      "description": {
        "fct-module": "Data.Semigroup.Union",
        "fct-package": "reducers",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Semigroup-Union.html#unionWith",
        "fct-type": "method",
        "title": "unionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Semigroup Union",
        "module": "Data.Semigroup.Union",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
        "package": "reducers",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ef a-\u003ef a-\u003ef a"
      }
    }
  }
]