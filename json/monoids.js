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
        "word": "monoids"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Monoids that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e,\n \u003ca\u003eData.Foldable\u003c/a\u003e, \u003ca\u003eControl.Monad\u003c/a\u003e or elsewhere. Intended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Generator.Combinators as Generator\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generator.Combinators",
          "name": "Combinators",
          "package": "monoids",
          "source": "src/Data-Generator-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with Monoids that conflict with names from the Prelude Data.Foldable Control.Monad or elsewhere Intended to be imported qualified import Data.Generator.Combinators as Generator",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "Combinators",
          "package": "monoids",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if all of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "all",
          "package": "monoids",
          "signature": "(Elem c -\u003e Bool) -\u003e c -\u003e Bool",
          "source": "src/Data-Generator-Combinators.html#all",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce any Generator checking to see if all of its values match the supplied predicate mapReduceWith getAll",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "all",
          "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eBool",
          "package": "monoids",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "and",
          "package": "monoids",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Generator-Combinators.html#and",
          "type": "function"
        },
        "index": {
          "description": "Efficiently reduce Generator that contains values of type Bool reduceWith getAll",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "and",
          "normalized": "a-\u003eBool",
          "package": "monoids",
          "signature": "c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if any of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "any",
          "package": "monoids",
          "signature": "(Elem c -\u003e Bool) -\u003e c -\u003e Bool",
          "source": "src/Data-Generator-Combinators.html#any",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce any Generator checking to see if any of its values match the supplied predicate mapReduceWith getAny",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "any",
          "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eBool",
          "package": "monoids",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAlt\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "asum",
          "package": "monoids",
          "signature": "c -\u003e f a",
          "source": "src/Data-Generator-Combinators.html#asum",
          "type": "function"
        },
        "index": {
          "description": "The sum of collection of actions generalizing concat reduceWith getAlt",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "asum",
          "normalized": "a-\u003eb c",
          "package": "monoids",
          "signature": "c-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:asum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialization of \u003ca\u003efoldMap\u003c/a\u003e above\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "concatMap",
          "package": "monoids",
          "signature": "(Elem c -\u003e [b]) -\u003e c -\u003e [b]",
          "source": "src/Data-Generator-Combinators.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Type specialization of foldMap above",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "concatMap",
          "normalized": "(Elem a-\u003e[b])-\u003ea-\u003e[b]",
          "package": "monoids",
          "partial": "Map",
          "signature": "(Elem c-\u003e[b])-\u003ec-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e matches the supplied value\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "elem",
          "package": "monoids",
          "signature": "Elem c -\u003e c -\u003e Bool",
          "source": "src/Data-Generator-Combinators.html#elem",
          "type": "function"
        },
        "index": {
          "description": "Check to see if any member of the Generator matches the supplied value",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "elem",
          "normalized": "Elem a-\u003ea-\u003eBool",
          "package": "monoids",
          "signature": "Elem c-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a subset of the elements in a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "filter",
          "package": "monoids",
          "signature": "(Elem c -\u003e Bool) -\u003e c -\u003e m",
          "source": "src/Data-Generator-Combinators.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce subset of the elements in Generator",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "filter",
          "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eb",
          "package": "monoids",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows idiomatic specialization of filter by proving a function that will be used to transform the output\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "filterWith",
          "package": "monoids",
          "signature": "(m -\u003e n) -\u003e (Elem c -\u003e Bool) -\u003e c -\u003e n",
          "source": "src/Data-Generator-Combinators.html#filterWith",
          "type": "function"
        },
        "index": {
          "description": "Allows idiomatic specialization of filter by proving function that will be used to transform the output",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "filterWith",
          "normalized": "(a-\u003eb)-\u003e(Elem c-\u003eBool)-\u003ec-\u003eb",
          "package": "monoids",
          "partial": "With",
          "signature": "(m-\u003en)-\u003e(Elem c-\u003eBool)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:filterWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialization of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, analogous to \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003efilterWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetFirst\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "find",
          "package": "monoids",
          "signature": "(Elem c -\u003e Bool) -\u003e c -\u003e Maybe (Elem c)",
          "source": "src/Data-Generator-Combinators.html#find",
          "type": "function"
        },
        "index": {
          "description": "specialization of filter using the First Monoid analogous to find filterWith getFirst",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "find",
          "normalized": "(Elem a-\u003eBool)-\u003ea-\u003eMaybe(Elem a)",
          "package": "monoids",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003eMaybe(Elem c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "fold",
          "package": "monoids",
          "signature": "c -\u003e m",
          "source": "src/Data-Generator-Combinators.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Efficiently reduce Generator using the Self monoid specialized version of its namesake from Data.Foldable reduceWith getSelf",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "fold",
          "normalized": "a-\u003eb",
          "package": "monoids",
          "signature": "c-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "foldMap",
          "package": "monoids",
          "signature": "(Elem c -\u003e m) -\u003e c -\u003e m",
          "source": "src/Data-Generator-Combinators.html#foldMap",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce Generator using the Self monoid specialized version of its namesake from Data.Foldable mapReduceWith getSelf",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "foldMap",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003eb",
          "package": "monoids",
          "partial": "Map",
          "signature": "(Elem c-\u003em)-\u003ec-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "forM_",
          "package": "monoids",
          "signature": "c -\u003e (Elem c -\u003e m b) -\u003e m ()",
          "source": "src/Data-Generator-Combinators.html#forM_",
          "type": "function"
        },
        "index": {
          "description": "Convenience function as found in Data.Foldable and Control.Monad flip mapM",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "forM_",
          "normalized": "a-\u003e(Elem a-\u003eb c)-\u003eb()",
          "package": "monoids",
          "signature": "c-\u003e(Elem c-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "for_",
          "package": "monoids",
          "signature": "c -\u003e (Elem c -\u003e f b) -\u003e f ()",
          "source": "src/Data-Generator-Combinators.html#for_",
          "type": "function"
        },
        "index": {
          "description": "Convenience function as found in Data.Foldable flip traverse",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "for_",
          "normalized": "a-\u003e(Elem a-\u003eb c)-\u003eb()",
          "package": "monoids",
          "signature": "c-\u003e(Elem c-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:for_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAction\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "mapM_",
          "package": "monoids",
          "signature": "(Elem c -\u003e m b) -\u003e c -\u003e m ()",
          "source": "src/Data-Generator-Combinators.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce Generator using the Action monoid specialized version of its namesake from Data.Foldable and Control.Monad mapReduceWith getAction",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "mapM_",
          "normalized": "(Elem a-\u003eb c)-\u003ea-\u003eb()",
          "package": "monoids",
          "signature": "(Elem c-\u003em b)-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetMonadSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "msum",
          "package": "monoids",
          "signature": "c -\u003e m a",
          "source": "src/Data-Generator-Combinators.html#msum",
          "type": "function"
        },
        "index": {
          "description": "The sum of collection of actions generalizing concat reduceWith getMonadSum",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "msum",
          "normalized": "a-\u003eb c",
          "package": "monoids",
          "signature": "c-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to make sure that the supplied value is not a member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "notElem",
          "package": "monoids",
          "signature": "Elem c -\u003e c -\u003e Bool",
          "source": "src/Data-Generator-Combinators.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "Check to make sure that the supplied value is not member of the Generator",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "notElem",
          "normalized": "Elem a-\u003ea-\u003eBool",
          "package": "monoids",
          "partial": "Elem",
          "signature": "Elem c-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "or",
          "package": "monoids",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Generator-Combinators.html#or",
          "type": "function"
        },
        "index": {
          "description": "Efficiently reduce Generator that contains values of type Bool reduceWith getAny",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "or",
          "normalized": "a-\u003eBool",
          "package": "monoids",
          "signature": "c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently take the product of every member of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetProduct\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "product",
          "package": "monoids",
          "signature": "c -\u003e Elem c",
          "source": "src/Data-Generator-Combinators.html#product",
          "type": "function"
        },
        "index": {
          "description": "Efficiently take the product of every member of Generator reduceWith getProduct",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "product",
          "normalized": "a-\u003eElem a",
          "package": "monoids",
          "signature": "c-\u003eElem c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently sum over the members of any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "sum",
          "package": "monoids",
          "signature": "c -\u003e Elem c",
          "source": "src/Data-Generator-Combinators.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Efficiently sum over the members of any Generator reduceWith getSum",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "sum",
          "normalized": "a-\u003eElem a",
          "package": "monoids",
          "signature": "c-\u003eElem c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e to a list of its contents. Specialization of \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "toList",
          "package": "monoids",
          "signature": "c -\u003e [Elem c]",
          "source": "src/Data-Generator-Combinators.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert any Generator to list of its contents Specialization of reduce",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "toList",
          "normalized": "a-\u003e[Elem a]",
          "package": "monoids",
          "partial": "List",
          "signature": "c-\u003e[Elem c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetTraversal\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "traverse_",
          "package": "monoids",
          "signature": "(Elem c -\u003e f b) -\u003e c -\u003e f ()",
          "source": "src/Data-Generator-Combinators.html#traverse_",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce Generator using the Traversal monoid specialized version of its namesake from Data.Foldable mapReduce getTraversal",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "traverse_",
          "normalized": "(Elem a-\u003eb c)-\u003ea-\u003eb()",
          "package": "monoids",
          "signature": "(Elem c-\u003ef b)-\u003ec-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator-Combinators.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e is a possibly-specialized container, which contains values of \n type \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e, and which knows how to efficiently apply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to extract\n an answer.\n\u003c/p\u003e\u003cp\u003eSince a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is not polymorphic in its contents, it is more specialized\n than \u003ca\u003eData.Foldable.Foldable\u003c/a\u003e, and a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may supply efficient left-to-right\n and right-to-left reduction strategies that a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e may avail itself of.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "monoids",
          "source": "src/Data-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "Generator is possibly-specialized container which contains values of type Elem and which knows how to efficiently apply Reducer to extract an answer Since Generator is not polymorphic in its contents it is more specialized than Data.Foldable.Foldable and Reducer may supply efficient left-to-right and right-to-left reduction strategies that Generator may avail itself of",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "monoids",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that treats \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n This lets you use a \u003ccode\u003eByteString\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e source without going through a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer like \u003ccode\u003eUTF8\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Char8",
          "package": "monoids",
          "source": "src/Data-Generator.html#Char8",
          "type": "newtype"
        },
        "index": {
          "description": "Generator transformer that treats Word8 as Char This lets you use ByteString as Char source without going through Monoid transformer like UTF8",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Char8",
          "package": "monoids",
          "partial": "Char",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimal definition \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "monoids",
          "source": "src/Data-Generator.html#Generator",
          "type": "class"
        },
        "index": {
          "description": "minimal definition mapReduce or mapTo",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "monoids",
          "partial": "Generator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the keys of an indexed container\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Keys",
          "package": "monoids",
          "source": "src/Data-Generator.html#Keys",
          "type": "newtype"
        },
        "index": {
          "description": "Generator transformer that asks only for the keys of an indexed container",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Keys",
          "package": "monoids",
          "partial": "Keys",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the values contained in an indexed container\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Values",
          "package": "monoids",
          "source": "src/Data-Generator.html#Values",
          "type": "newtype"
        },
        "index": {
          "description": "Generator transformer that asks only for the values contained in an indexed container",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Values",
          "package": "monoids",
          "partial": "Values",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#t:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "Char8",
          "package": "monoids",
          "signature": "Char8",
          "source": "src/Data-Generator.html#Char8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Char8",
          "package": "monoids",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:Char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "Keys",
          "package": "monoids",
          "signature": "Keys",
          "source": "src/Data-Generator.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Keys",
          "package": "monoids",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "Values",
          "package": "monoids",
          "signature": "Values",
          "source": "src/Data-Generator.html#Values",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Values",
          "package": "monoids",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "getChar8",
          "package": "monoids",
          "signature": "c",
          "source": "src/Data-Generator.html#Char8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "getChar8",
          "package": "monoids",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:getChar8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "getKeys",
          "package": "monoids",
          "signature": "c",
          "source": "src/Data-Generator.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "getKeys",
          "package": "monoids",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:getKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "getValues",
          "package": "monoids",
          "signature": "c",
          "source": "src/Data-Generator.html#Values",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "getValues",
          "package": "monoids",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:getValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapFrom",
          "package": "monoids",
          "signature": "(Elem c -\u003e e) -\u003e c -\u003e m -\u003e m",
          "source": "src/Data-Generator.html#mapFrom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapFrom",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec-\u003ec",
          "package": "monoids",
          "partial": "From",
          "signature": "(Elem c-\u003ee)-\u003ec-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapReduce",
          "package": "monoids",
          "signature": "(Elem c -\u003e e) -\u003e c -\u003e m",
          "source": "src/Data-Generator.html#mapReduce",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapReduce",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec",
          "package": "monoids",
          "partial": "Reduce",
          "signature": "(Elem c-\u003ee)-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapReduceWith",
          "package": "monoids",
          "signature": "(m -\u003e n) -\u003e (Elem c -\u003e e) -\u003e c -\u003e n",
          "source": "src/Data-Generator.html#mapReduceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapReduceWith",
          "normalized": "(a-\u003eb)-\u003e(Elem c-\u003ed)-\u003ec-\u003eb",
          "package": "monoids",
          "partial": "Reduce With",
          "signature": "(m-\u003en)-\u003e(Elem c-\u003ee)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapReduceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapTo",
          "package": "monoids",
          "signature": "(Elem c -\u003e e) -\u003e m -\u003e c -\u003e m",
          "source": "src/Data-Generator.html#mapTo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapTo",
          "normalized": "(Elem a-\u003eb)-\u003ec-\u003ea-\u003ec",
          "package": "monoids",
          "partial": "To",
          "signature": "(Elem c-\u003ee)-\u003em-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:mapTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e directly to the elements of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "reduce",
          "package": "monoids",
          "signature": "c -\u003e m",
          "source": "src/Data-Generator.html#reduce",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer directly to the elements of Generator",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "reduce",
          "normalized": "a-\u003eb",
          "package": "monoids",
          "signature": "c-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "reduceWith",
          "package": "monoids",
          "signature": "(m -\u003e n) -\u003e c -\u003e n",
          "source": "src/Data-Generator.html#reduceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "reduceWith",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "monoids",
          "partial": "With",
          "signature": "(m-\u003en)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Generator.html#v:reduceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Groups that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIntended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Group.Combinators as Group (replicate)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Group.Combinators",
          "name": "Combinators",
          "package": "monoids",
          "source": "src/Data-Group-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with Groups that conflict with names from the Prelude Intended to be imported qualified import Data.Group.Combinators as Group replicate",
          "hierarchy": "Data Group Combinators",
          "module": "Data.Group.Combinators",
          "name": "Combinators",
          "package": "monoids",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Combinators",
          "name": "replicate",
          "package": "monoids",
          "signature": "m -\u003e n -\u003e m",
          "source": "src/Data-Group-Combinators.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Combinators",
          "module": "Data.Group.Combinators",
          "name": "replicate",
          "normalized": "a-\u003eb-\u003ea",
          "package": "monoids",
          "signature": "m-\u003en-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Combinators.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntactic sugar for working with groups that conflicts with names from the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding ((-), (+), (*), (/), (^), (^^), negate, subtract, recip)\n import Data.Group.Sugar\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Group.Sugar",
          "name": "Sugar",
          "package": "monoids",
          "source": "src/Data-Group-Sugar.html",
          "type": "module"
        },
        "index": {
          "description": "Syntactic sugar for working with groups that conflicts with names from the Prelude import Prelude hiding negate subtract recip import Data.Group.Sugar",
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "Sugar",
          "package": "monoids",
          "partial": "Sugar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "(-)",
          "package": "monoids",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Group-Sugar.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "(-) -",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "(/)",
          "package": "monoids",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Group-Sugar.html#%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "(/) /",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "(^^)",
          "package": "monoids",
          "signature": "g -\u003e Integer -\u003e g",
          "source": "src/Data-Group-Sugar.html#%5E%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "(^^) ^^",
          "normalized": "a-\u003eInteger-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eInteger-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:-94--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "(.\\.)",
          "package": "monoids",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Group-Sugar.html#.%5C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "(.\\.) .\\.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:.-92-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "negate",
          "package": "monoids",
          "signature": "g -\u003e g",
          "source": "src/Data-Group-Sugar.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "negate",
          "normalized": "a-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "recip",
          "package": "monoids",
          "signature": "g -\u003e g",
          "source": "src/Data-Group-Sugar.html#recip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "recip",
          "normalized": "a-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group.Sugar",
          "name": "subtract",
          "package": "monoids",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Group-Sugar.html#subtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Group Sugar",
          "module": "Data.Group.Sugar",
          "name": "subtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group-Sugar.html#v:subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtends \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to support \u003ccode\u003e\u003ca\u003eGroup\u003c/a\u003e\u003c/code\u003e operations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Group",
          "name": "Group",
          "package": "monoids",
          "source": "src/Data-Group.html",
          "type": "module"
        },
        "index": {
          "description": "Extends Monoid to support Group operations",
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "Group",
          "package": "monoids",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003egnegate\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eminus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Group",
          "name": "Group",
          "package": "monoids",
          "source": "src/Data-Group.html#Group",
          "type": "class"
        },
        "index": {
          "description": "Minimal complete definition gnegate or minus",
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "Group",
          "package": "monoids",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimal definition over or grecip\n\u003c/p\u003e",
          "module": "Data.Group",
          "name": "MultiplicativeGroup",
          "package": "monoids",
          "source": "src/Data-Group.html#MultiplicativeGroup",
          "type": "class"
        },
        "index": {
          "description": "Minimal definition over or grecip",
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "MultiplicativeGroup",
          "package": "monoids",
          "partial": "Multiplicative Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#t:MultiplicativeGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group",
          "name": "gnegate",
          "package": "monoids",
          "signature": "a -\u003e a",
          "source": "src/Data-Group.html#gnegate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "gnegate",
          "normalized": "a-\u003ea",
          "package": "monoids",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:gnegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group",
          "name": "grecip",
          "package": "monoids",
          "signature": "g -\u003e g",
          "source": "src/Data-Group.html#grecip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "grecip",
          "normalized": "a-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:grecip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group",
          "name": "gsubtract",
          "package": "monoids",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Group.html#gsubtract",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "gsubtract",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:gsubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Group",
          "name": "minus",
          "package": "monoids",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Group.html#minus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "minus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex / y\u003c/pre\u003e",
          "module": "Data.Group",
          "name": "over",
          "package": "monoids",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Group.html#over",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "over",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:over"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex  y\u003c/pre\u003e",
          "module": "Data.Group",
          "name": "under",
          "package": "monoids",
          "signature": "g -\u003e g -\u003e g",
          "source": "src/Data-Group.html#under",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Group",
          "module": "Data.Group",
          "name": "under",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "g-\u003eg-\u003eg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Group.html#v:under"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMore easily understood aliases for \u003ca\u003emappend\u003c/a\u003e and \u003ca\u003emempty\u003c/a\u003e, chosen for\n symmetry with Data.Monoid.Multiplicative\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid.Additive\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Additive",
          "name": "Additive",
          "package": "monoids",
          "source": "src/Data-Monoid-Additive.html",
          "type": "module"
        },
        "index": {
          "description": "More easily understood aliases for mappend and mempty chosen for symmetry with Data.Monoid.Multiplicative import Data.Monoid.Additive",
          "hierarchy": "Data Monoid Additive",
          "module": "Data.Monoid.Additive",
          "name": "Additive",
          "package": "monoids",
          "partial": "Additive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Additive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Additive",
          "name": "plus",
          "package": "monoids",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Data-Monoid-Additive.html#plus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Additive",
          "module": "Data.Monoid.Additive",
          "name": "plus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Additive.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Additive",
          "name": "zero",
          "package": "monoids",
          "signature": "m",
          "source": "src/Data-Monoid-Additive.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Additive",
          "module": "Data.Monoid.Additive",
          "name": "zero",
          "package": "monoids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Additive.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonoids for working with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Applicative",
          "name": "Applicative",
          "package": "monoids",
          "source": "src/Data-Monoid-Applicative.html",
          "type": "module"
        },
        "index": {
          "description": "Monoids for working with an Applicative Functor",
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "Applicative",
          "package": "monoids",
          "partial": "Applicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n   It also provides a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e instance for an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functor wrapped around a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n   and asserts that any \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e forms a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e \n   under these operations.\n\u003c/p\u003e",
          "module": "Data.Monoid.Applicative",
          "name": "Alt",
          "package": "monoids",
          "source": "src/Data-Monoid-Applicative.html#Alt",
          "type": "newtype"
        },
        "index": {
          "description": "Alt turns any Alternative instance into Monoid It also provides Multiplicative instance for an Applicative functor wrapped around Monoid and asserts that any Alternative applied to Monoid forms RightSemiNearRing under these operations",
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "Alt",
          "package": "monoids",
          "partial": "Alt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#t:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003ef \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e as well\n\u003c/p\u003e",
          "module": "Data.Monoid.Applicative",
          "name": "App",
          "package": "monoids",
          "source": "src/Data-Monoid-Applicative.html#App",
          "type": "newtype"
        },
        "index": {
          "description": "if is Module over and is Applicative then App is Module over as well",
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "App",
          "package": "monoids",
          "partial": "App",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e uses an glues together \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e actions with (*\u003e)\n   in the manner of \u003ccode\u003etraverse_\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by \n   reduced actions are discarded.\n\u003c/p\u003e",
          "module": "Data.Monoid.Applicative",
          "name": "Traversal",
          "package": "monoids",
          "source": "src/Data-Monoid-Applicative.html#Traversal",
          "type": "newtype"
        },
        "index": {
          "description": "Traversal uses an glues together Applicative actions with in the manner of traverse from Data.Foldable Any values returned by reduced actions are discarded",
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "Traversal",
          "package": "monoids",
          "partial": "Traversal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#t:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Applicative",
          "name": "Alt",
          "package": "monoids",
          "signature": "Alt",
          "source": "src/Data-Monoid-Applicative.html#Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "Alt",
          "package": "monoids",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Applicative",
          "name": "App",
          "package": "monoids",
          "signature": "App",
          "source": "src/Data-Monoid-Applicative.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "App",
          "package": "monoids",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Applicative",
          "name": "Traversal",
          "package": "monoids",
          "signature": "Traversal",
          "source": "src/Data-Monoid-Applicative.html#Traversal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "Traversal",
          "package": "monoids",
          "partial": "Traversal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Applicative",
          "name": "getAlt",
          "package": "monoids",
          "signature": "f a",
          "source": "src/Data-Monoid-Applicative.html#Alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "getAlt",
          "package": "monoids",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:getAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Applicative",
          "name": "getApp",
          "package": "monoids",
          "signature": "f m",
          "source": "src/Data-Monoid-Applicative.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "getApp",
          "package": "monoids",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:getApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Applicative",
          "name": "getTraversal",
          "package": "monoids",
          "signature": "f ()",
          "source": "src/Data-Monoid-Applicative.html#Traversal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "getTraversal",
          "normalized": "a()",
          "package": "monoids",
          "partial": "Traversal",
          "signature": "f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:getTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently avoid needlessly rebinding when using \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e on an action that already returns ()\n   A rewrite rule automatically applies this when possible\n\u003c/p\u003e",
          "module": "Data.Monoid.Applicative",
          "name": "snocTraversal",
          "package": "monoids",
          "signature": "Traversal f -\u003e f () -\u003e Traversal f",
          "source": "src/Data-Monoid-Applicative.html#snocTraversal",
          "type": "function"
        },
        "index": {
          "description": "Efficiently avoid needlessly rebinding when using snoc on an action that already returns rewrite rule automatically applies this when possible",
          "hierarchy": "Data Monoid Applicative",
          "module": "Data.Monoid.Applicative",
          "name": "snocTraversal",
          "normalized": "Traversal a-\u003ea()-\u003eTraversal a",
          "package": "monoids",
          "partial": "Traversal",
          "signature": "Traversal f-\u003ef()-\u003eTraversal f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Applicative.html#v:snocTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with Monoids that conflict with names from the \u003ca\u003ePrelude\u003c/a\u003e,\n \u003ca\u003eData.Foldable\u003c/a\u003e, \u003ca\u003eControl.Monad\u003c/a\u003e or elsewhere. Intended to be imported qualified.\n\u003c/p\u003e\u003cpre\u003e import Data.Monoid.Combinators as Monoid \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Combinators",
          "name": "Combinators",
          "package": "monoids",
          "source": "src/Data-Monoid-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with Monoids that conflict with names from the Prelude Data.Foldable Control.Monad or elsewhere Intended to be imported qualified import Data.Monoid.Combinators as Monoid",
          "hierarchy": "Data Monoid Combinators",
          "module": "Data.Monoid.Combinators",
          "name": "Combinators",
          "package": "monoids",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. May fail to terminate for some values in some monoids.\n\u003c/p\u003e",
          "module": "Data.Monoid.Combinators",
          "name": "cycle",
          "package": "monoids",
          "signature": "m -\u003e m",
          "source": "src/Data-Monoid-Combinators.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "generalization of cycle to an arbitrary Monoid May fail to terminate for some values in some monoids",
          "hierarchy": "Data Monoid Combinators",
          "module": "Data.Monoid.Combinators",
          "name": "cycle",
          "normalized": "a-\u003ea",
          "package": "monoids",
          "signature": "m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. May fail to terminate for some values in some monoids.\n\u003c/p\u003e",
          "module": "Data.Monoid.Combinators",
          "name": "repeat",
          "package": "monoids",
          "signature": "e -\u003e m",
          "source": "src/Data-Monoid-Combinators.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "generalization of repeat to an arbitrary Monoid May fail to terminate for some values in some monoids",
          "hierarchy": "Data Monoid Combinators",
          "module": "Data.Monoid.Combinators",
          "name": "repeat",
          "normalized": "a-\u003eb",
          "package": "monoids",
          "signature": "e-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Adapted from \n \u003ca\u003ehttp://augustss.blogspot.com/2008/07/lost-and-found-if-i-write-108-in.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Combinators",
          "name": "replicate",
          "package": "monoids",
          "signature": "m -\u003e n -\u003e m",
          "source": "src/Data-Monoid-Combinators.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "generalization of replicate to an arbitrary Monoid Adapted from http augustss.blogspot.com lost-and-found-if-i-write-108-in.html",
          "hierarchy": "Data Monoid Combinators",
          "module": "Data.Monoid.Combinators",
          "name": "replicate",
          "normalized": "a-\u003eb-\u003ea",
          "package": "monoids",
          "signature": "m-\u003en-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Combinators.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances for working with a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Monad",
          "name": "Monad",
          "package": "monoids",
          "source": "src/Data-Monoid-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monoid instances for working with Monad",
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "Monad",
          "package": "monoids",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e uses glues together \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e actions with (\u003e\u003e)\n   in the manner of \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by \n   reduced actions are discarded.\n\u003c/p\u003e",
          "module": "Data.Monoid.Monad",
          "name": "Action",
          "package": "monoids",
          "source": "src/Data-Monoid-Monad.html#Action",
          "type": "newtype"
        },
        "index": {
          "description": "An Action uses glues together Monad actions with in the manner of mapM from Data.Foldable Any values returned by reduced actions are discarded",
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "Action",
          "package": "monoids",
          "partial": "Action",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e over \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003ef \u003ccode\u003e\u003ca\u003eMon\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003eModule\u003c/code\u003e as well\n\u003c/p\u003e",
          "module": "Data.Monoid.Monad",
          "name": "Mon",
          "package": "monoids",
          "source": "src/Data-Monoid-Monad.html#Mon",
          "type": "newtype"
        },
        "index": {
          "description": "if is Module over and is Monad then Mon is Module as well",
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "Mon",
          "package": "monoids",
          "partial": "Mon",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#t:Mon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadSum\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n   It also provides a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e instance for a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e wrapped around a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n   and asserts that any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e applied to a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e forms a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e \n   under these operations.\n\u003c/p\u003e",
          "module": "Data.Monoid.Monad",
          "name": "MonadSum",
          "package": "monoids",
          "source": "src/Data-Monoid-Monad.html#MonadSum",
          "type": "newtype"
        },
        "index": {
          "description": "MonadSum turns any MonadPlus instance into Monoid It also provides Multiplicative instance for Monad wrapped around Monoid and asserts that any MonadPlus applied to Monoid forms RightSemiNearRing under these operations",
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "MonadSum",
          "package": "monoids",
          "partial": "Monad Sum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#t:MonadSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Monad",
          "name": "Action",
          "package": "monoids",
          "signature": "Action",
          "source": "src/Data-Monoid-Monad.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "Action",
          "package": "monoids",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Monad",
          "name": "Mon",
          "package": "monoids",
          "signature": "Mon",
          "source": "src/Data-Monoid-Monad.html#Mon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "Mon",
          "package": "monoids",
          "partial": "Mon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:Mon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Monad",
          "name": "MonadSum",
          "package": "monoids",
          "signature": "MonadSum",
          "source": "src/Data-Monoid-Monad.html#MonadSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "MonadSum",
          "package": "monoids",
          "partial": "Monad Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:MonadSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Monad",
          "name": "getAction",
          "package": "monoids",
          "signature": "m ()",
          "source": "src/Data-Monoid-Monad.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "getAction",
          "normalized": "a()",
          "package": "monoids",
          "partial": "Action",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:getAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Monad",
          "name": "getMon",
          "package": "monoids",
          "signature": "f m",
          "source": "src/Data-Monoid-Monad.html#Mon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "getMon",
          "package": "monoids",
          "partial": "Mon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:getMon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Monad",
          "name": "getMonadSum",
          "package": "monoids",
          "signature": "m a",
          "source": "src/Data-Monoid-Monad.html#MonadSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "getMonadSum",
          "package": "monoids",
          "partial": "Monad Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:getMonadSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently avoid needlessly rebinding when using \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e on an action that already returns ()\n   A rewrite rule automatically applies this when possible\n\u003c/p\u003e",
          "module": "Data.Monoid.Monad",
          "name": "snocAction",
          "package": "monoids",
          "signature": "Action m -\u003e m () -\u003e Action m",
          "source": "src/Data-Monoid-Monad.html#snocAction",
          "type": "function"
        },
        "index": {
          "description": "Efficiently avoid needlessly rebinding when using snoc on an action that already returns rewrite rule automatically applies this when possible",
          "hierarchy": "Data Monoid Monad",
          "module": "Data.Monoid.Monad",
          "name": "snocAction",
          "normalized": "Action a-\u003ea()-\u003eAction a",
          "package": "monoids",
          "partial": "Action",
          "signature": "Action m-\u003em()-\u003eAction m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Monad.html#v:snocAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen dealing with a \u003ccode\u003eRing\u003c/code\u003e or other structure, you often need a pair of \n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instances that are closely related. Making a \u003ccode\u003enewtype\u003c/code\u003e for one\n is unsatisfying and yields an unnatural programming style. \n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e that is intended for use in a scenario\n that can be extended to have another \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e slot in for addition. This\n enables one to use common notation.\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e can be turned into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eLog\u003c/a\u003e\u003c/code\u003e wrapper.\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e can be turned into a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e wrapper.\n\u003c/p\u003e\u003cp\u003eInstances are supplied for common Monads of Monoids, in a fashion \n which can be extended if the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003eMonadPlus\u003c/code\u003e to yield a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInstances are also supplied for common Applicatives of Monoids, in a\n fashion which can be extended if the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e to\n yield a \u003ccode\u003eRightSemiNearRing\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Multiplicative",
          "name": "Multiplicative",
          "package": "monoids",
          "source": "src/Data-Monoid-Multiplicative.html",
          "type": "module"
        },
        "index": {
          "description": "When dealing with Ring or other structure you often need pair of Monoid instances that are closely related Making newtype for one is unsatisfying and yields an unnatural programming style Multiplicative is Monoid that is intended for use in scenario that can be extended to have another Monoid slot in for addition This enables one to use common notation Any Multiplicative can be turned into Monoid using the Log wrapper Any Monoid can be turned into Multiplicative using the Exp wrapper Instances are supplied for common Monads of Monoids in fashion which can be extended if the Monad is MonadPlus to yield RightSemiNearRing Instances are also supplied for common Applicatives of Monoids in fashion which can be extended if the Applicative is Alternative to yield RightSemiNearRing",
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "Multiplicative",
          "package": "monoids",
          "partial": "Multiplicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e. Mnemonic: \u003ccode\u003eExp a * Exp b = Exp (a + b)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Multiplicative",
          "name": "Exp",
          "package": "monoids",
          "source": "src/Data-Monoid-Multiplicative.html#Exp",
          "type": "data"
        },
        "index": {
          "description": "Convert Monoid into Multiplicative Mnemonic Exp Exp Exp",
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "Exp",
          "package": "monoids",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Mnemonic: \u003ccode\u003eLog a + Log b = Log (a * b)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Multiplicative",
          "name": "Log",
          "package": "monoids",
          "source": "src/Data-Monoid-Multiplicative.html#Log",
          "type": "data"
        },
        "index": {
          "description": "Convert Multiplicative into Monoid Mnemonic Log Log Log",
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "Log",
          "package": "monoids",
          "partial": "Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#t:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "Multiplicative",
          "package": "monoids",
          "source": "src/Data-Monoid-Multiplicative.html#Multiplicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "Multiplicative",
          "package": "monoids",
          "partial": "Multiplicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#t:Multiplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "Exp",
          "package": "monoids",
          "signature": "Exp",
          "source": "src/Data-Monoid-Multiplicative.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "Exp",
          "package": "monoids",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "Log",
          "package": "monoids",
          "signature": "Log",
          "source": "src/Data-Monoid-Multiplicative.html#Log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "Log",
          "package": "monoids",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "getExp",
          "package": "monoids",
          "signature": "m",
          "source": "src/Data-Monoid-Multiplicative.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "getExp",
          "package": "monoids",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:getExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "getLog",
          "package": "monoids",
          "signature": "m",
          "source": "src/Data-Monoid-Multiplicative.html#Log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "getLog",
          "package": "monoids",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:getLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "one",
          "package": "monoids",
          "signature": "m",
          "source": "src/Data-Monoid-Multiplicative.html#one",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "one",
          "package": "monoids",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Multiplicative",
          "name": "times",
          "package": "monoids",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Data-Monoid-Multiplicative.html#times",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Monoid Multiplicative",
          "module": "Data.Monoid.Multiplicative",
          "name": "times",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "m-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Multiplicative.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "Ord",
          "package": "monoids",
          "source": "src/Data-Monoid-Ord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "Ord",
          "package": "monoids",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Ord",
          "name": "Max",
          "package": "monoids",
          "source": "src/Data-Monoid-Ord.html#Max",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid max minBound",
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "Max",
          "package": "monoids",
          "partial": "Max",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e over \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is the bottom element\n\u003c/p\u003e",
          "module": "Data.Monoid.Ord",
          "name": "MaxPriority",
          "package": "monoids",
          "source": "src/Data-Monoid-Ord.html#MaxPriority",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid max Nothing over Maybe where Nothing is the bottom element",
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "MaxPriority",
          "package": "monoids",
          "partial": "Max Priority",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:MaxPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e given by \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Ord",
          "name": "Min",
          "package": "monoids",
          "source": "src/Data-Monoid-Ord.html#Min",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid given by min maxBound",
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "Min",
          "package": "monoids",
          "partial": "Min",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e over \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is the top element\n\u003c/p\u003e",
          "module": "Data.Monoid.Ord",
          "name": "MinPriority",
          "package": "monoids",
          "source": "src/Data-Monoid-Ord.html#MinPriority",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid min Nothing over Maybe where Nothing is the top element",
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "MinPriority",
          "package": "monoids",
          "partial": "Min Priority",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#t:MinPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "Max",
          "package": "monoids",
          "signature": "Max",
          "source": "src/Data-Monoid-Ord.html#Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "Max",
          "package": "monoids",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "MaxPriority",
          "package": "monoids",
          "signature": "MaxPriority",
          "source": "src/Data-Monoid-Ord.html#MaxPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "MaxPriority",
          "package": "monoids",
          "partial": "Max Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:MaxPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "Min",
          "package": "monoids",
          "signature": "Min",
          "source": "src/Data-Monoid-Ord.html#Min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "Min",
          "package": "monoids",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "MinPriority",
          "package": "monoids",
          "signature": "MinPriority",
          "source": "src/Data-Monoid-Ord.html#MinPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "MinPriority",
          "package": "monoids",
          "partial": "Min Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:MinPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "getMax",
          "package": "monoids",
          "signature": "a",
          "source": "src/Data-Monoid-Ord.html#Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "getMax",
          "package": "monoids",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "getMaxPriority",
          "package": "monoids",
          "signature": "Maybe a",
          "source": "src/Data-Monoid-Ord.html#MaxPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "getMaxPriority",
          "package": "monoids",
          "partial": "Max Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMaxPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "getMin",
          "package": "monoids",
          "signature": "a",
          "source": "src/Data-Monoid-Ord.html#Min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "getMin",
          "package": "monoids",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "getMinPriority",
          "package": "monoids",
          "signature": "Maybe a",
          "source": "src/Data-Monoid-Ord.html#MinPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "getMinPriority",
          "package": "monoids",
          "partial": "Min Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:getMinPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "infinity",
          "package": "monoids",
          "signature": "MinPriority a",
          "source": "src/Data-Monoid-Ord.html#infinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "infinity",
          "package": "monoids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Ord",
          "name": "minfinity",
          "package": "monoids",
          "signature": "MaxPriority a",
          "source": "src/Data-Monoid-Ord.html#minfinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Ord",
          "module": "Data.Monoid.Ord",
          "name": "minfinity",
          "package": "monoids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Ord.html#v:minfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e with a canonical mapping from \u003ccode\u003ec\u003c/code\u003e to the Monoid.\n This \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e acts in many ways like \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e but is limited\n to a single type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "Reducer",
          "package": "monoids",
          "source": "src/Data-Monoid-Reducer.html",
          "type": "module"
        },
        "index": {
          "description": "Reducer is Monoid with canonical mapping from to the Monoid This unit acts in many ways like return for Monad but is limited to single type",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "Reducer",
          "package": "monoids",
          "partial": "Reducer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type may be best read infix. A \u003ccode\u003ec \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e that maps\n values of type \u003ccode\u003ec\u003c/code\u003e through \u003ccode\u003eunit\u003c/code\u003e to values of type \u003ccode\u003em\u003c/code\u003e. A \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may also\n supply operations which tack-on another \u003ccode\u003ec\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e on the left\n or right. These specialized reductions may be more efficient in some scenarios\n and are used when appropriate by a \u003ccode\u003eGenerator\u003c/code\u003e. The names \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e work\n by analogy to the synonymous operations in the list monoid.\n\u003c/p\u003e\u003cp\u003eThis class deliberately avoids functional-dependencies, so that () can be a \u003ccode\u003ec\u003c/code\u003e-Reducer\n for all \u003ccode\u003ec\u003c/code\u003e, and so many common reducers can work over multiple types, for instance,\n First and Last may reduce both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e. Since a \u003ccode\u003eGenerator\u003c/code\u003e has a fixed element\n type, the input to the reducer is generally known and extracting from the monoid usually\n is sufficient to fix the result type. Combinators are available for most scenarios where\n this is not the case, and the few remaining cases can be handled by using an explicit \n type annotation.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "Reducer",
          "package": "monoids",
          "source": "src/Data-Monoid-Reducer.html#Reducer",
          "type": "class"
        },
        "index": {
          "description": "This type may be best read infix Reducer is Monoid that maps values of type through unit to values of type Reducer may also supply operations which tack-on another to an existing Monoid on the left or right These specialized reductions may be more efficient in some scenarios and are used when appropriate by Generator The names cons and snoc work by analogy to the synonymous operations in the list monoid This class deliberately avoids functional-dependencies so that can be Reducer for all and so many common reducers can work over multiple types for instance First and Last may reduce both and Maybe Since Generator has fixed element type the input to the reducer is generally known and extracting from the monoid usually is sufficient to fix the result type Combinators are available for most scenarios where this is not the case and the few remaining cases can be handled by using an explicit type annotation Minimal definition unit or snoc",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "Reducer",
          "package": "monoids",
          "partial": "Reducer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#t:Reducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a value onto a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e for use during right-to-left reduction\n\u003c/p\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "cons",
          "package": "monoids",
          "signature": "c -\u003e m -\u003e m",
          "source": "src/Data-Monoid-Reducer.html#cons",
          "type": "method"
        },
        "index": {
          "description": "Prepend value onto Monoid for use during right-to-left reduction",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "monoids",
          "signature": "c-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container, after mapping the contents into a suitable form for reduction.\n\u003c/p\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "foldMapReduce",
          "package": "monoids",
          "signature": "(a -\u003e e) -\u003e f a -\u003e m",
          "source": "src/Data-Monoid-Reducer.html#foldMapReduce",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer to Foldable container after mapping the contents into suitable form for reduction",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "foldMapReduce",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ed",
          "package": "monoids",
          "partial": "Map Reduce",
          "signature": "(a-\u003ee)-\u003ef a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:foldMapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e mapping each element through \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "foldReduce",
          "package": "monoids",
          "signature": "f e -\u003e m",
          "source": "src/Data-Monoid-Reducer.html#foldReduce",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer to Foldable mapping each element through unit",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "foldReduce",
          "normalized": "a b-\u003ec",
          "package": "monoids",
          "partial": "Reduce",
          "signature": "f e-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:foldReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Reducer",
          "name": "pureUnit",
          "package": "monoids",
          "signature": "c -\u003e f n",
          "source": "src/Data-Monoid-Reducer.html#pureUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "pureUnit",
          "normalized": "a-\u003eb c",
          "package": "monoids",
          "partial": "Unit",
          "signature": "c-\u003ef n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:pureUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Reducer",
          "name": "returnUnit",
          "package": "monoids",
          "signature": "c -\u003e m n",
          "source": "src/Data-Monoid-Reducer.html#returnUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "returnUnit",
          "normalized": "a-\u003eb c",
          "package": "monoids",
          "partial": "Unit",
          "signature": "c-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:returnUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a value to a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e for use in left-to-right reduction\n\u003c/p\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "snoc",
          "package": "monoids",
          "signature": "m -\u003e c -\u003e m",
          "source": "src/Data-Monoid-Reducer.html#snoc",
          "type": "method"
        },
        "index": {
          "description": "Append value to Monoid for use in left-to-right reduction",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "snoc",
          "normalized": "a-\u003eb-\u003ea",
          "package": "monoids",
          "signature": "m-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Reducer",
          "name": "unit",
          "package": "monoids",
          "signature": "c -\u003e m",
          "source": "src/Data-Monoid-Reducer.html#unit",
          "type": "method"
        },
        "index": {
          "description": "Convert value into Monoid",
          "hierarchy": "Data Monoid Reducer",
          "module": "Data.Monoid.Reducer",
          "name": "unit",
          "normalized": "a-\u003eb",
          "package": "monoids",
          "signature": "c-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Reducer.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer that takes a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m and produces a new \u003ccode\u003em\u003c/code\u003e-Reducer named \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is useful when you have a generator that already contains monoidal values or someone supplies\n the map to the monoid in the form of a function rather than as a \u003ca\u003eReducer\u003c/a\u003e instance. You can just\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003ereduce\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003emapReduce\u003c/code\u003e f\u003c/code\u003e in those scenarios. These behaviors are encapsulated \n into the \u003ccode\u003efold\u003c/code\u003e and \u003ccode\u003efoldMap\u003c/code\u003e combinators in \u003ca\u003eData.Monoid.Combinators\u003c/a\u003e respectively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Self",
          "name": "Self",
          "package": "monoids",
          "source": "src/Data-Monoid-Self.html",
          "type": "module"
        },
        "index": {
          "description": "simple Monoid transformer that takes Monoid and produces new Reducer named Self This is useful when you have generator that already contains monoidal values or someone supplies the map to the monoid in the form of function rather than as Reducer instance You can just getSelf reduce or getSelf mapReduce in those scenarios These behaviors are encapsulated into the fold and foldMap combinators in Data.Monoid.Combinators respectively",
          "hierarchy": "Data Monoid Self",
          "module": "Data.Monoid.Self",
          "name": "Self",
          "package": "monoids",
          "partial": "Self",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Self",
          "name": "Self",
          "package": "monoids",
          "source": "src/Data-Monoid-Self.html#Self",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Monoid Self",
          "module": "Data.Monoid.Self",
          "name": "Self",
          "package": "monoids",
          "partial": "Self",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#t:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Self",
          "name": "Self",
          "package": "monoids",
          "signature": "Self",
          "source": "src/Data-Monoid-Self.html#Self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Self",
          "module": "Data.Monoid.Self",
          "name": "Self",
          "package": "monoids",
          "partial": "Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#v:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Self",
          "name": "getSelf",
          "package": "monoids",
          "signature": "m",
          "source": "src/Data-Monoid-Self.html#Self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Self",
          "module": "Data.Monoid.Self",
          "name": "getSelf",
          "package": "monoids",
          "partial": "Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Self.html#v:getSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntactic sugar for working with a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMultiplicative\u003c/a\u003e\u003c/code\u003e instances \n that conflicts with names from the \u003ca\u003ePrelude\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e import Prelude hiding ((+),(*),(^))\n import Data.Monoid.Sugar\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Monoid.Sugar",
          "name": "Sugar",
          "package": "monoids",
          "source": "src/Data-Monoid-Sugar.html",
          "type": "module"
        },
        "index": {
          "description": "Syntactic sugar for working with Monoid and Multiplicative instances that conflicts with names from the Prelude import Prelude hiding import Data.Monoid.Sugar",
          "hierarchy": "Data Monoid Sugar",
          "module": "Data.Monoid.Sugar",
          "name": "Sugar",
          "package": "monoids",
          "partial": "Sugar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Sugar",
          "name": "(*)",
          "package": "monoids",
          "signature": "r -\u003e r -\u003e r",
          "source": "src/Data-Monoid-Sugar.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Sugar",
          "module": "Data.Monoid.Sugar",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "r-\u003er-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Sugar",
          "name": "(+)",
          "package": "monoids",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Data-Monoid-Sugar.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Sugar",
          "module": "Data.Monoid.Sugar",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Sugar",
          "name": "(^)",
          "package": "monoids",
          "signature": "r -\u003e b -\u003e r",
          "source": "src/Data-Monoid-Sugar.html#%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Sugar",
          "module": "Data.Monoid.Sugar",
          "name": "(^) ^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "monoids",
          "signature": "r-\u003eb-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Sugar.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "Union",
          "package": "monoids",
          "source": "src/Data-Monoid-Union.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "Union",
          "package": "monoids",
          "partial": "Union",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Container suitable for the \u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Union",
          "name": "HasUnion",
          "package": "monoids",
          "source": "src/Data-Monoid-Union.html#HasUnion",
          "type": "class"
        },
        "index": {
          "description": "Container suitable for the Union Monoid",
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "HasUnion",
          "package": "monoids",
          "partial": "Has Union",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:HasUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic containers that we can supply an operation to handle unions with\n\u003c/p\u003e",
          "module": "Data.Monoid.Union",
          "name": "HasUnionWith",
          "package": "monoids",
          "source": "src/Data-Monoid-Union.html#HasUnionWith",
          "type": "class"
        },
        "index": {
          "description": "Polymorphic containers that we can supply an operation to handle unions with",
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "HasUnionWith",
          "package": "monoids",
          "partial": "Has Union With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:HasUnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Monoid.Union",
          "name": "Union",
          "package": "monoids",
          "source": "src/Data-Monoid-Union.html#Union",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid union empty",
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "Union",
          "package": "monoids",
          "partial": "Union",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e('unionWith mappend',\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for containers full of monoids.\n\u003c/p\u003e",
          "module": "Data.Monoid.Union",
          "name": "UnionWith",
          "package": "monoids",
          "source": "src/Data-Monoid-Union.html#UnionWith",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid unionWith mappend empty for containers full of monoids",
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "UnionWith",
          "package": "monoids",
          "partial": "Union With",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#t:UnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "Union",
          "package": "monoids",
          "signature": "Union",
          "source": "src/Data-Monoid-Union.html#Union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "Union",
          "package": "monoids",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "UnionWith",
          "package": "monoids",
          "signature": "UnionWith",
          "source": "src/Data-Monoid-Union.html#UnionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "UnionWith",
          "package": "monoids",
          "partial": "Union With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:UnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "empty",
          "package": "monoids",
          "signature": "f",
          "source": "src/Data-Monoid-Union.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "empty",
          "package": "monoids",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "emptyWith",
          "package": "monoids",
          "signature": "f a",
          "source": "src/Data-Monoid-Union.html#emptyWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "emptyWith",
          "package": "monoids",
          "partial": "With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:emptyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "getUnion",
          "package": "monoids",
          "signature": "f",
          "source": "src/Data-Monoid-Union.html#Union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "getUnion",
          "package": "monoids",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:getUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "getUnionWith",
          "package": "monoids",
          "signature": "f m",
          "source": "src/Data-Monoid-Union.html#UnionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "getUnionWith",
          "package": "monoids",
          "partial": "Union With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:getUnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "union",
          "package": "monoids",
          "signature": "f -\u003e f -\u003e f",
          "source": "src/Data-Monoid-Union.html#union",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "monoids",
          "signature": "f-\u003ef-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Monoid.Union",
          "name": "unionWith",
          "package": "monoids",
          "signature": "(a -\u003e a -\u003e a) -\u003e f a -\u003e f a -\u003e f a",
          "source": "src/Data-Monoid-Union.html#unionWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Monoid Union",
          "module": "Data.Monoid.Union",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "monoids",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ef a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monoids/docs/Data-Monoid-Union.html#v:unionWith"
      }
    }
  ]
]