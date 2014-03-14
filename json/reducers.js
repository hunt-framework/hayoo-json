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
        "word": "reducers"
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
          "package": "reducers",
          "source": "src/Data-Generator-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with Monoids that conflict with names from the Prelude Data.Foldable Control.Monad or elsewhere Intended to be imported qualified import Data.Generator.Combinators as Generator",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "Combinators",
          "package": "reducers",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if all of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "all",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAll\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "and",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e checking to see if any of its values match the supplied predicate\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "any",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003egetAlt\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "asum",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:asum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType specialization of \u003ca\u003efoldMap\u003c/a\u003e above\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "concatMap",
          "package": "reducers",
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
          "package": "reducers",
          "partial": "Map",
          "signature": "(Elem c-\u003e[b])-\u003ec-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to see if \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e matches the supplied value\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "elem",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "Elem c-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a subset of the elements in a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "filter",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "(Elem c-\u003eBool)-\u003ec-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows idiomatic specialization of filter by proving a function that will be used to transform the output\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "filterWith",
          "package": "reducers",
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
          "package": "reducers",
          "partial": "With",
          "signature": "(m-\u003en)-\u003e(Elem c-\u003eBool)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:filterWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eWrappedMonoid\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunwrapMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "fold",
          "package": "reducers",
          "signature": "c -\u003e m",
          "source": "src/Data-Generator-Combinators.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Efficiently reduce Generator using the WrappedMonoid monoid specialized version of its namesake from Data.Foldable reduceWith unwrapMonoid",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "fold",
          "normalized": "a-\u003eb",
          "package": "reducers",
          "signature": "c-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eWrappedMonoid\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunwrapMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "foldMap",
          "package": "reducers",
          "signature": "(Elem c -\u003e m) -\u003e c -\u003e m",
          "source": "src/Data-Generator-Combinators.html#foldMap",
          "type": "function"
        },
        "index": {
          "description": "Efficiently mapReduce Generator using the WrappedMonoid monoid specialized version of its namesake from Data.Foldable mapReduceWith unwrapMonoid",
          "hierarchy": "Data Generator Combinators",
          "module": "Data.Generator.Combinators",
          "name": "foldMap",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003eb",
          "package": "reducers",
          "partial": "Map",
          "signature": "(Elem c-\u003em)-\u003ec-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "forM_",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003e(Elem c-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function as found in \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "for_",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003e(Elem c-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:for_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e and \u003ca\u003eControl.Monad\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003emapReduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAction\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "mapM_",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "(Elem c-\u003em b)-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of a collection of actions, generalizing \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetMonadSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "msum",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck to make sure that the supplied value is not a member of the \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "notElem",
          "package": "reducers",
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
          "package": "reducers",
          "partial": "Elem",
          "signature": "Elem c-\u003ec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e that contains values of type \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetAny\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "or",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently take the product of every member of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetProduct\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "product",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003eElem c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently sum over the members of any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ereduceWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetSum\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "sum",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003eElem c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert any \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e to a list of its contents. Specialization of \u003ccode\u003e\u003ca\u003ereduce\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator.Combinators",
          "name": "toList",
          "package": "reducers",
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
          "package": "reducers",
          "partial": "List",
          "signature": "c-\u003e[Elem c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e using the \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e monoid. A specialized version of its namesake from \u003ca\u003eData.Foldable\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003egetTraversal\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Generator.Combinators",
          "name": "traverse_",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "(Elem c-\u003ef b)-\u003ec-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator-Combinators.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e is a possibly-specialized container, which contains values of\n type \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e, and which knows how to efficiently apply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to extract\n an answer.\n\u003c/p\u003e\u003cp\u003eSince a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e is not polymorphic in its contents, it is more specialized\n than \u003ca\u003eData.Foldable.Foldable\u003c/a\u003e, and a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may supply efficient left-to-right\n and right-to-left reduction strategies that a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e may avail itself of.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "reducers",
          "source": "src/Data-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "Generator is possibly-specialized container which contains values of type Elem and which knows how to efficiently apply Reducer to extract an answer Since Generator is not polymorphic in its contents it is more specialized than Data.Foldable.Foldable and Reducer may supply efficient left-to-right and right-to-left reduction strategies that Generator may avail itself of",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "reducers",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that treats \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n This lets you use a \u003ccode\u003eByteString\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e source without going through a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer like \u003ccode\u003eUTF8\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Char8",
          "package": "reducers",
          "source": "src/Data-Generator.html#Char8",
          "type": "newtype"
        },
        "index": {
          "description": "Generator transformer that treats Word8 as Char This lets you use ByteString as Char source without going through Monoid transformer like UTF8",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Char8",
          "package": "reducers",
          "partial": "Char",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimal definition \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "reducers",
          "source": "src/Data-Generator.html#Generator",
          "type": "class"
        },
        "index": {
          "description": "minimal definition mapReduce or mapTo",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Generator",
          "package": "reducers",
          "partial": "Generator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the keys of an indexed container\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Keys",
          "package": "reducers",
          "source": "src/Data-Generator.html#Keys",
          "type": "newtype"
        },
        "index": {
          "description": "Generator transformer that asks only for the keys of an indexed container",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Keys",
          "package": "reducers",
          "partial": "Keys",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e transformer that asks only for the values contained in an indexed container\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "Values",
          "package": "reducers",
          "source": "src/Data-Generator.html#Values",
          "type": "newtype"
        },
        "index": {
          "description": "Generator transformer that asks only for the values contained in an indexed container",
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Values",
          "package": "reducers",
          "partial": "Values",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#t:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "Char8",
          "package": "reducers",
          "signature": "Char8",
          "source": "src/Data-Generator.html#Char8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Char8",
          "package": "reducers",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:Char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "Keys",
          "package": "reducers",
          "signature": "Keys",
          "source": "src/Data-Generator.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Keys",
          "package": "reducers",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "Values",
          "package": "reducers",
          "signature": "Values",
          "source": "src/Data-Generator.html#Values",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "Values",
          "package": "reducers",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "getChar8",
          "package": "reducers",
          "signature": "c",
          "source": "src/Data-Generator.html#Char8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "getChar8",
          "package": "reducers",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:getChar8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "getKeys",
          "package": "reducers",
          "signature": "c",
          "source": "src/Data-Generator.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "getKeys",
          "package": "reducers",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:getKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "getValues",
          "package": "reducers",
          "signature": "c",
          "source": "src/Data-Generator.html#Values",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "getValues",
          "package": "reducers",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:getValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapFrom",
          "package": "reducers",
          "signature": "(Elem c -\u003e e) -\u003e c -\u003e m -\u003e m",
          "source": "src/Data-Generator.html#mapFrom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapFrom",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec-\u003ec",
          "package": "reducers",
          "partial": "From",
          "signature": "(Elem c-\u003ee)-\u003ec-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapReduce",
          "package": "reducers",
          "signature": "(Elem c -\u003e e) -\u003e c -\u003e m",
          "source": "src/Data-Generator.html#mapReduce",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapReduce",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec",
          "package": "reducers",
          "partial": "Reduce",
          "signature": "(Elem c-\u003ee)-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapReduceWith",
          "package": "reducers",
          "signature": "(m -\u003e n) -\u003e (Elem c -\u003e e) -\u003e c -\u003e n",
          "source": "src/Data-Generator.html#mapReduceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapReduceWith",
          "normalized": "(a-\u003eb)-\u003e(Elem c-\u003ed)-\u003ec-\u003eb",
          "package": "reducers",
          "partial": "Reduce With",
          "signature": "(m-\u003en)-\u003e(Elem c-\u003ee)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapReduceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "mapTo",
          "package": "reducers",
          "signature": "(Elem c -\u003e e) -\u003e m -\u003e c -\u003e m",
          "source": "src/Data-Generator.html#mapTo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "mapTo",
          "normalized": "(Elem a-\u003eb)-\u003ec-\u003ea-\u003ec",
          "package": "reducers",
          "partial": "To",
          "signature": "(Elem c-\u003ee)-\u003em-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:mapTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e directly to the elements of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Generator",
          "name": "reduce",
          "package": "reducers",
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
          "package": "reducers",
          "signature": "c-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:reduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generator",
          "name": "reduceWith",
          "package": "reducers",
          "signature": "(m -\u003e n) -\u003e c -\u003e n",
          "source": "src/Data-Generator.html#reduceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generator",
          "module": "Data.Generator",
          "name": "reduceWith",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "reducers",
          "partial": "With",
          "signature": "(m-\u003en)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Generator.html#v:reduceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroup for working \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePlus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Alt",
          "name": "Alt",
          "package": "reducers",
          "source": "src/Data-Semigroup-Alt.html",
          "type": "module"
        },
        "index": {
          "description": "semigroup for working Alt or Plus",
          "hierarchy": "Data Semigroup Alt",
          "module": "Data.Semigroup.Alt",
          "name": "Alt",
          "package": "reducers",
          "partial": "Alt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAlter\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eAlt\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Alt",
          "name": "Alter",
          "package": "reducers",
          "source": "src/Data-Semigroup-Alt.html#Alter",
          "type": "newtype"
        },
        "index": {
          "description": "Alter turns any Alt instance into Semigroup",
          "hierarchy": "Data Semigroup Alt",
          "module": "Data.Semigroup.Alt",
          "name": "Alter",
          "package": "reducers",
          "partial": "Alter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#t:Alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Alt",
          "name": "Alter",
          "package": "reducers",
          "signature": "Alter",
          "source": "src/Data-Semigroup-Alt.html#Alter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Alt",
          "module": "Data.Semigroup.Alt",
          "name": "Alter",
          "package": "reducers",
          "partial": "Alter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#v:Alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Alt",
          "name": "getAlter",
          "package": "reducers",
          "signature": "f a",
          "source": "src/Data-Semigroup-Alt.html#Alter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Alt",
          "module": "Data.Semigroup.Alt",
          "name": "getAlter",
          "package": "reducers",
          "partial": "Alter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alt.html#v:getAlter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroup for working with \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Alternative",
          "name": "Alternative",
          "package": "reducers",
          "source": "src/Data-Semigroup-Alternative.html",
          "type": "module"
        },
        "index": {
          "description": "semigroup for working with Alternative Functor",
          "hierarchy": "Data Semigroup Alternative",
          "module": "Data.Semigroup.Alternative",
          "name": "Alternative",
          "package": "reducers",
          "partial": "Alternative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAlternate\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Alternative",
          "name": "Alternate",
          "package": "reducers",
          "source": "src/Data-Semigroup-Alternative.html#Alternate",
          "type": "newtype"
        },
        "index": {
          "description": "Alternate turns any Alternative instance into Monoid",
          "hierarchy": "Data Semigroup Alternative",
          "module": "Data.Semigroup.Alternative",
          "name": "Alternate",
          "package": "reducers",
          "partial": "Alternate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#t:Alternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Alternative",
          "name": "Alternate",
          "package": "reducers",
          "signature": "Alternate",
          "source": "src/Data-Semigroup-Alternative.html#Alternate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Alternative",
          "module": "Data.Semigroup.Alternative",
          "name": "Alternate",
          "package": "reducers",
          "partial": "Alternate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#v:Alternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Alternative",
          "name": "getAlternate",
          "package": "reducers",
          "signature": "f a",
          "source": "src/Data-Semigroup-Alternative.html#Alternate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Alternative",
          "module": "Data.Semigroup.Alternative",
          "name": "getAlternate",
          "package": "reducers",
          "partial": "Alternate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Alternative.html#v:getAlternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemigroups for working with \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Applicative",
          "name": "Applicative",
          "package": "reducers",
          "source": "src/Data-Semigroup-Applicative.html",
          "type": "module"
        },
        "index": {
          "description": "Semigroups for working with Applicative Functor",
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "Applicative",
          "package": "reducers",
          "partial": "Applicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Applicative",
          "name": "Ap",
          "package": "reducers",
          "source": "src/Data-Semigroup-Applicative.html#Ap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "Ap",
          "package": "reducers",
          "partial": "Ap",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#t:Ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e uses an glues together \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e actions with (*\u003e)\n   in the manner of \u003ccode\u003etraverse_\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by\n   reduced actions are discarded.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Applicative",
          "name": "Traversal",
          "package": "reducers",
          "source": "src/Data-Semigroup-Applicative.html#Traversal",
          "type": "newtype"
        },
        "index": {
          "description": "Traversal uses an glues together Applicative actions with in the manner of traverse from Data.Foldable Any values returned by reduced actions are discarded",
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "Traversal",
          "package": "reducers",
          "partial": "Traversal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#t:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Applicative",
          "name": "Ap",
          "package": "reducers",
          "signature": "Ap",
          "source": "src/Data-Semigroup-Applicative.html#Ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "Ap",
          "package": "reducers",
          "partial": "Ap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:Ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Applicative",
          "name": "Traversal",
          "package": "reducers",
          "signature": "Traversal",
          "source": "src/Data-Semigroup-Applicative.html#Traversal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "Traversal",
          "package": "reducers",
          "partial": "Traversal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Applicative",
          "name": "getApp",
          "package": "reducers",
          "signature": "f m",
          "source": "src/Data-Semigroup-Applicative.html#Ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "getApp",
          "package": "reducers",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:getApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Applicative",
          "name": "getTraversal",
          "package": "reducers",
          "signature": "f ()",
          "source": "src/Data-Semigroup-Applicative.html#Traversal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Applicative",
          "module": "Data.Semigroup.Applicative",
          "name": "getTraversal",
          "normalized": "a()",
          "package": "reducers",
          "partial": "Traversal",
          "signature": "f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Applicative.html#v:getTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemigroups for working with \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Apply",
          "name": "Apply",
          "package": "reducers",
          "source": "src/Data-Semigroup-Apply.html",
          "type": "module"
        },
        "index": {
          "description": "Semigroups for working with Apply",
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "Apply",
          "package": "reducers",
          "partial": "Apply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eApp\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eApply\u003c/a\u003e\u003c/code\u003e wrapped around a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Apply",
          "name": "App",
          "package": "reducers",
          "source": "src/Data-Semigroup-Apply.html#App",
          "type": "newtype"
        },
        "index": {
          "description": "App turns any Apply wrapped around Semigroup into Semigroup",
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "App",
          "package": "reducers",
          "partial": "App",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#t:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTrav\u003c/a\u003e\u003c/code\u003e uses an glues together \u003ccode\u003eApplicative\u003c/code\u003e actions with (*\u003e)\n   in the manner of \u003ccode\u003etraverse_\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by\n   reduced actions are discarded.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Apply",
          "name": "Trav",
          "package": "reducers",
          "source": "src/Data-Semigroup-Apply.html#Trav",
          "type": "newtype"
        },
        "index": {
          "description": "Trav uses an glues together Applicative actions with in the manner of traverse from Data.Foldable Any values returned by reduced actions are discarded",
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "Trav",
          "package": "reducers",
          "partial": "Trav",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#t:Trav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Apply",
          "name": "App",
          "package": "reducers",
          "signature": "App",
          "source": "src/Data-Semigroup-Apply.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "App",
          "package": "reducers",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Apply",
          "name": "Trav",
          "package": "reducers",
          "signature": "Trav",
          "source": "src/Data-Semigroup-Apply.html#Trav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "Trav",
          "package": "reducers",
          "partial": "Trav",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:Trav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Apply",
          "name": "getApp",
          "package": "reducers",
          "signature": "f m",
          "source": "src/Data-Semigroup-Apply.html#App",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "getApp",
          "package": "reducers",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:getApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Apply",
          "name": "getTrav",
          "package": "reducers",
          "signature": "f ()",
          "source": "src/Data-Semigroup-Apply.html#Trav",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Apply",
          "module": "Data.Semigroup.Apply",
          "name": "getTrav",
          "normalized": "a()",
          "package": "reducers",
          "partial": "Trav",
          "signature": "f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Apply.html#v:getTrav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGenerator1\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e is a possibly-specialized container, which contains values of\n type \u003ccode\u003e\u003ca\u003eElem\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e, and which knows how to efficiently apply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to extract\n an answer.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGenerator1\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eFoldable1\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003eFoldable\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Generator",
          "name": "Generator",
          "package": "reducers",
          "source": "src/Data-Semigroup-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "Generator1 is possibly-specialized container which contains values of type Elem and which knows how to efficiently apply Reducer to extract an answer Generator1 is to Generator as Foldable1 is to Foldable",
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "Generator",
          "package": "reducers",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimal definition \u003ccode\u003e\u003ca\u003emapReduce1\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapTo1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Generator",
          "name": "Generator1",
          "package": "reducers",
          "source": "src/Data-Semigroup-Generator.html#Generator1",
          "type": "class"
        },
        "index": {
          "description": "minimal definition mapReduce1 or mapTo1",
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "Generator1",
          "package": "reducers",
          "partial": "Generator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#t:Generator1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Generator",
          "name": "mapFrom1",
          "package": "reducers",
          "signature": "(Elem c -\u003e e) -\u003e c -\u003e m -\u003e m",
          "source": "src/Data-Semigroup-Generator.html#mapFrom1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "mapFrom1",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec-\u003ec",
          "package": "reducers",
          "partial": "From",
          "signature": "(Elem c-\u003ee)-\u003ec-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapFrom1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Generator",
          "name": "mapReduce1",
          "package": "reducers",
          "signature": "(Elem c -\u003e e) -\u003e c -\u003e m",
          "source": "src/Data-Semigroup-Generator.html#mapReduce1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "mapReduce1",
          "normalized": "(Elem a-\u003eb)-\u003ea-\u003ec",
          "package": "reducers",
          "partial": "Reduce",
          "signature": "(Elem c-\u003ee)-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapReduce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Generator",
          "name": "mapReduceWith1",
          "package": "reducers",
          "signature": "(m -\u003e n) -\u003e (Elem c -\u003e e) -\u003e c -\u003e n",
          "source": "src/Data-Semigroup-Generator.html#mapReduceWith1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "mapReduceWith1",
          "normalized": "(a-\u003eb)-\u003e(Elem c-\u003ed)-\u003ec-\u003eb",
          "package": "reducers",
          "partial": "Reduce With",
          "signature": "(m-\u003en)-\u003e(Elem c-\u003ee)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapReduceWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Generator",
          "name": "mapTo1",
          "package": "reducers",
          "signature": "(Elem c -\u003e e) -\u003e m -\u003e c -\u003e m",
          "source": "src/Data-Semigroup-Generator.html#mapTo1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "mapTo1",
          "normalized": "(Elem a-\u003eb)-\u003ec-\u003ea-\u003ec",
          "package": "reducers",
          "partial": "To",
          "signature": "(Elem c-\u003ee)-\u003em-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:mapTo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e directly to the elements of a \u003ccode\u003e\u003ca\u003eGenerator\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Generator",
          "name": "reduce1",
          "package": "reducers",
          "signature": "c -\u003e m",
          "source": "src/Data-Semigroup-Generator.html#reduce1",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer directly to the elements of Generator",
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "reduce1",
          "normalized": "a-\u003eb",
          "package": "reducers",
          "signature": "c-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:reduce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Generator",
          "name": "reduceWith1",
          "package": "reducers",
          "signature": "(m -\u003e n) -\u003e c -\u003e n",
          "source": "src/Data-Semigroup-Generator.html#reduceWith1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Generator",
          "module": "Data.Semigroup.Generator",
          "name": "reduceWith1",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "reducers",
          "partial": "With",
          "signature": "(m-\u003en)-\u003ec-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Generator.html#v:reduceWith1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Instances",
          "name": "Instances",
          "package": "reducers",
          "source": "src/Data-Semigroup-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Instances",
          "module": "Data.Semigroup.Instances",
          "name": "Instances",
          "package": "reducers",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSemigroups for working with \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Monad",
          "name": "Monad",
          "package": "reducers",
          "source": "src/Data-Semigroup-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Semigroups for working with Monad",
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "Monad",
          "package": "reducers",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e uses an glues together monadic actions with (\u003e\u003e)\n   in the manner of \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Foldable\u003c/a\u003e. Any values returned by\n   reduced actions are discarded.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Monad",
          "name": "Action",
          "package": "reducers",
          "source": "src/Data-Semigroup-Monad.html#Action",
          "type": "newtype"
        },
        "index": {
          "description": "Action uses an glues together monadic actions with in the manner of mapM from Data.Foldable Any values returned by reduced actions are discarded",
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "Action",
          "package": "reducers",
          "partial": "Action",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Monad",
          "name": "Mon",
          "package": "reducers",
          "source": "src/Data-Semigroup-Monad.html#Mon",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "Mon",
          "package": "reducers",
          "partial": "Mon",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#t:Mon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Monad",
          "name": "Action",
          "package": "reducers",
          "signature": "Action",
          "source": "src/Data-Semigroup-Monad.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "Action",
          "package": "reducers",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Monad",
          "name": "Mon",
          "package": "reducers",
          "signature": "Mon",
          "source": "src/Data-Semigroup-Monad.html#Mon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "Mon",
          "package": "reducers",
          "partial": "Mon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:Mon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Monad",
          "name": "getAction",
          "package": "reducers",
          "signature": "f ()",
          "source": "src/Data-Semigroup-Monad.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "getAction",
          "normalized": "a()",
          "package": "reducers",
          "partial": "Action",
          "signature": "f()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:getAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Monad",
          "name": "getMon",
          "package": "reducers",
          "signature": "f m",
          "source": "src/Data-Semigroup-Monad.html#Mon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Monad",
          "module": "Data.Semigroup.Monad",
          "name": "getMon",
          "package": "reducers",
          "partial": "Mon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Monad.html#v:getMon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA semigroup for working with instances of \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.MonadPlus",
          "name": "MonadPlus",
          "package": "reducers",
          "source": "src/Data-Semigroup-MonadPlus.html",
          "type": "module"
        },
        "index": {
          "description": "semigroup for working with instances of MonadPlus",
          "hierarchy": "Data Semigroup MonadPlus",
          "module": "Data.Semigroup.MonadPlus",
          "name": "MonadPlus",
          "package": "reducers",
          "partial": "Monad Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadSum\u003c/a\u003e\u003c/code\u003e turns any \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance into a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup.MonadPlus",
          "name": "MonadSum",
          "package": "reducers",
          "source": "src/Data-Semigroup-MonadPlus.html#MonadSum",
          "type": "newtype"
        },
        "index": {
          "description": "MonadSum turns any MonadPlus instance into Monoid",
          "hierarchy": "Data Semigroup MonadPlus",
          "module": "Data.Semigroup.MonadPlus",
          "name": "MonadSum",
          "package": "reducers",
          "partial": "Monad Sum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#t:MonadSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.MonadPlus",
          "name": "MonadSum",
          "package": "reducers",
          "signature": "MonadSum",
          "source": "src/Data-Semigroup-MonadPlus.html#MonadSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup MonadPlus",
          "module": "Data.Semigroup.MonadPlus",
          "name": "MonadSum",
          "package": "reducers",
          "partial": "Monad Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#v:MonadSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.MonadPlus",
          "name": "getMonadSum",
          "package": "reducers",
          "signature": "f a",
          "source": "src/Data-Semigroup-MonadPlus.html#MonadSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup MonadPlus",
          "module": "Data.Semigroup.MonadPlus",
          "name": "getMonadSum",
          "package": "reducers",
          "partial": "Monad Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-MonadPlus.html#v:getMonadSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer.With",
          "name": "With",
          "package": "reducers",
          "source": "src/Data-Semigroup-Reducer-With.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer With",
          "module": "Data.Semigroup.Reducer.With",
          "name": "With",
          "package": "reducers",
          "partial": "With",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003em\u003c/code\u003e is a \u003ccode\u003ec\u003c/code\u003e-\u003ca\u003eReducer\u003c/a\u003e, then m is \u003ccode\u003e(c \u003ccode\u003e\u003ca\u003eWithReducer\u003c/a\u003e\u003c/code\u003e m)\u003c/code\u003e-\u003ca\u003eReducer\u003c/a\u003e\n   This can be used to quickly select a \u003ca\u003eReducer\u003c/a\u003e for use as a \u003ccode\u003e\u003ca\u003eFingerTree\u003c/a\u003e\u003c/code\u003e\n   \u003ccode\u003e\u003ca\u003emeasure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer.With",
          "name": "WithReducer",
          "package": "reducers",
          "source": "src/Data-Semigroup-Reducer-With.html#WithReducer",
          "type": "newtype"
        },
        "index": {
          "description": "If is Reducer then is WithReducer Reducer This can be used to quickly select Reducer for use as FingerTree measure",
          "hierarchy": "Data Semigroup Reducer With",
          "module": "Data.Semigroup.Reducer.With",
          "name": "WithReducer",
          "package": "reducers",
          "partial": "With Reducer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#t:WithReducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer.With",
          "name": "WithReducer",
          "package": "reducers",
          "signature": "WithReducer",
          "source": "src/Data-Semigroup-Reducer-With.html#WithReducer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer With",
          "module": "Data.Semigroup.Reducer.With",
          "name": "WithReducer",
          "package": "reducers",
          "partial": "With Reducer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#v:WithReducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer.With",
          "name": "withoutReducer",
          "package": "reducers",
          "signature": "c",
          "source": "src/Data-Semigroup-Reducer-With.html#WithReducer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer With",
          "module": "Data.Semigroup.Reducer.With",
          "name": "withoutReducer",
          "package": "reducers",
          "partial": "Reducer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer-With.html#v:withoutReducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e with a canonical mapping from \u003ccode\u003ec\u003c/code\u003e to the Semigroup.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "Reducer",
          "package": "reducers",
          "source": "src/Data-Semigroup-Reducer.html",
          "type": "module"
        },
        "index": {
          "description": "Reducer is Semigroup with canonical mapping from to the Semigroup",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "Reducer",
          "package": "reducers",
          "partial": "Reducer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer",
          "name": "Count",
          "package": "reducers",
          "source": "src/Data-Semigroup-Reducer.html#Count",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "Count",
          "package": "reducers",
          "partial": "Count",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#t:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type may be best read infix. A \u003ccode\u003ec \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e that maps\n values of type \u003ccode\u003ec\u003c/code\u003e through \u003ccode\u003eunit\u003c/code\u003e to values of type \u003ccode\u003em\u003c/code\u003e. A \u003ccode\u003ec\u003c/code\u003e-\u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e may also\n supply operations which tack-on another \u003ccode\u003ec\u003c/code\u003e to an existing \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e on the left\n or right. These specialized reductions may be more efficient in some scenarios\n and are used when appropriate by a \u003ccode\u003eGenerator\u003c/code\u003e. The names \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esnoc\u003c/a\u003e\u003c/code\u003e work\n by analogy to the synonymous operations in the list monoid.\n\u003c/p\u003e\u003cp\u003eThis class deliberately avoids functional-dependencies, so that () can be a \u003ccode\u003ec\u003c/code\u003e-Reducer\n for all \u003ccode\u003ec\u003c/code\u003e, and so many common reducers can work over multiple types, for instance,\n First and Last may reduce both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e. Since a \u003ccode\u003eGenerator\u003c/code\u003e has a fixed element\n type, the input to the reducer is generally known and extracting from the monoid usually\n is sufficient to fix the result type. Combinators are available for most scenarios where\n this is not the case, and the few remaining cases can be handled by using an explicit\n type annotation.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "Reducer",
          "package": "reducers",
          "source": "src/Data-Semigroup-Reducer.html#Reducer",
          "type": "class"
        },
        "index": {
          "description": "This type may be best read infix Reducer is Semigroup that maps values of type through unit to values of type Reducer may also supply operations which tack-on another to an existing Monoid on the left or right These specialized reductions may be more efficient in some scenarios and are used when appropriate by Generator The names cons and snoc work by analogy to the synonymous operations in the list monoid This class deliberately avoids functional-dependencies so that can be Reducer for all and so many common reducers can work over multiple types for instance First and Last may reduce both and Maybe Since Generator has fixed element type the input to the reducer is generally known and extracting from the monoid usually is sufficient to fix the result type Combinators are available for most scenarios where this is not the case and the few remaining cases can be handled by using an explicit type annotation Minimal definition unit",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "Reducer",
          "package": "reducers",
          "partial": "Reducer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#t:Reducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer",
          "name": "Count",
          "package": "reducers",
          "signature": "Count",
          "source": "src/Data-Semigroup-Reducer.html#Count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "Count",
          "package": "reducers",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a value onto a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e for use during right-to-left reduction\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "cons",
          "package": "reducers",
          "signature": "c -\u003e m -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#cons",
          "type": "method"
        },
        "index": {
          "description": "Prepend value onto Semigroup for use during right-to-left reduction",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "reducers",
          "signature": "c-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container, after mapping the contents into a suitable form for reduction.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "foldMapReduce",
          "package": "reducers",
          "signature": "(a -\u003e e) -\u003e f a -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#foldMapReduce",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer to Foldable container after mapping the contents into suitable form for reduction",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "foldMapReduce",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ed",
          "package": "reducers",
          "partial": "Map Reduce",
          "signature": "(a-\u003ee)-\u003ef a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldMapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer",
          "name": "foldMapReduce1",
          "package": "reducers",
          "signature": "(a -\u003e e) -\u003e f a -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#foldMapReduce1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "foldMapReduce1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ed",
          "package": "reducers",
          "partial": "Map Reduce",
          "signature": "(a-\u003ee)-\u003ef a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldMapReduce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e mapping each element through \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "foldReduce",
          "package": "reducers",
          "signature": "f e -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#foldReduce",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer to Foldable mapping each element through unit",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "foldReduce",
          "normalized": "a b-\u003ec",
          "package": "reducers",
          "partial": "Reduce",
          "signature": "f e-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eReducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eFoldable1\u003c/a\u003e\u003c/code\u003e mapping each element through \u003ccode\u003e\u003ca\u003eunit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "foldReduce1",
          "package": "reducers",
          "signature": "f e -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#foldReduce1",
          "type": "function"
        },
        "index": {
          "description": "Apply Reducer to Foldable1 mapping each element through unit",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "foldReduce1",
          "normalized": "a b-\u003ec",
          "package": "reducers",
          "partial": "Reduce",
          "signature": "f e-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:foldReduce1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer",
          "name": "getCount",
          "package": "reducers",
          "signature": "Int",
          "source": "src/Data-Semigroup-Reducer.html#Count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "getCount",
          "package": "reducers",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:getCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer",
          "name": "pureUnit",
          "package": "reducers",
          "signature": "c -\u003e f n",
          "source": "src/Data-Semigroup-Reducer.html#pureUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "pureUnit",
          "normalized": "a-\u003eb c",
          "package": "reducers",
          "partial": "Unit",
          "signature": "c-\u003ef n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:pureUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Reducer",
          "name": "returnUnit",
          "package": "reducers",
          "signature": "c -\u003e m n",
          "source": "src/Data-Semigroup-Reducer.html#returnUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "returnUnit",
          "normalized": "a-\u003eb c",
          "package": "reducers",
          "partial": "Unit",
          "signature": "c-\u003em n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:returnUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a value to a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e for use in left-to-right reduction\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "snoc",
          "package": "reducers",
          "signature": "m -\u003e c -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#snoc",
          "type": "method"
        },
        "index": {
          "description": "Append value to Semigroup for use in left-to-right reduction",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "snoc",
          "normalized": "a-\u003eb-\u003ea",
          "package": "reducers",
          "signature": "m-\u003ec-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value into a \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Reducer",
          "name": "unit",
          "package": "reducers",
          "signature": "c -\u003e m",
          "source": "src/Data-Semigroup-Reducer.html#unit",
          "type": "method"
        },
        "index": {
          "description": "Convert value into Semigroup",
          "hierarchy": "Data Semigroup Reducer",
          "module": "Data.Semigroup.Reducer",
          "name": "unit",
          "normalized": "a-\u003eb",
          "package": "reducers",
          "signature": "c-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Reducer.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e transformer that takes a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m and produces a new \u003ccode\u003em\u003c/code\u003e-Reducer named \u003ccode\u003e\u003ca\u003eSelf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is useful when you have a generator that already contains monoidal values or someone supplies\n the map to the monoid in the form of a function rather than as a \u003ca\u003eReducer\u003c/a\u003e instance. You can just\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003ereduce\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003egetSelf\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003emapReduce\u003c/code\u003e f\u003c/code\u003e in those scenarios. These behaviors are encapsulated\n into the \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e combinators in \u003ca\u003eData.Monoid.Combinators\u003c/a\u003e respectively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Semigroup.Self",
          "name": "Self",
          "package": "reducers",
          "source": "src/Data-Semigroup-Self.html",
          "type": "module"
        },
        "index": {
          "description": "simple Monoid transformer that takes Monoid and produces new Reducer named Self This is useful when you have generator that already contains monoidal values or someone supplies the map to the monoid in the form of function rather than as Reducer instance You can just getSelf reduce or getSelf mapReduce in those scenarios These behaviors are encapsulated into the fold and foldMap combinators in Data.Monoid.Combinators respectively",
          "hierarchy": "Data Semigroup Self",
          "module": "Data.Semigroup.Self",
          "name": "Self",
          "package": "reducers",
          "partial": "Self",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Self",
          "name": "Self",
          "package": "reducers",
          "source": "src/Data-Semigroup-Self.html#Self",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroup Self",
          "module": "Data.Semigroup.Self",
          "name": "Self",
          "package": "reducers",
          "partial": "Self",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#t:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Self",
          "name": "Self",
          "package": "reducers",
          "signature": "Self",
          "source": "src/Data-Semigroup-Self.html#Self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Self",
          "module": "Data.Semigroup.Self",
          "name": "Self",
          "package": "reducers",
          "partial": "Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#v:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Self",
          "name": "getSelf",
          "package": "reducers",
          "signature": "m",
          "source": "src/Data-Semigroup-Self.html#Self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Self",
          "module": "Data.Semigroup.Self",
          "name": "getSelf",
          "package": "reducers",
          "partial": "Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Self.html#v:getSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "Union",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "Union",
          "package": "reducers",
          "partial": "Union",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Container suitable for the \u003ccode\u003e\u003ca\u003eUnion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Union",
          "name": "HasUnion",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html#HasUnion",
          "type": "class"
        },
        "index": {
          "description": "Container suitable for the Union Monoid",
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "HasUnion",
          "package": "reducers",
          "partial": "Has Union",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "HasUnion0",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html#HasUnion0",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "HasUnion0",
          "package": "reducers",
          "partial": "Has Union",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnion0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic containers that we can supply an operation to handle unions with\n\u003c/p\u003e",
          "module": "Data.Semigroup.Union",
          "name": "HasUnionWith",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html#HasUnionWith",
          "type": "class"
        },
        "index": {
          "description": "Polymorphic containers that we can supply an operation to handle unions with",
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "HasUnionWith",
          "package": "reducers",
          "partial": "Has Union With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "HasUnionWith0",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html#HasUnionWith0",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "HasUnionWith0",
          "package": "reducers",
          "partial": "Has Union With",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:HasUnionWith0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup.Union",
          "name": "Union",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html#Union",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid union empty",
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "Union",
          "package": "reducers",
          "partial": "Union",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e('unionWith mappend',\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for containers full of monoids.\n\u003c/p\u003e",
          "module": "Data.Semigroup.Union",
          "name": "UnionWith",
          "package": "reducers",
          "source": "src/Data-Semigroup-Union.html#UnionWith",
          "type": "newtype"
        },
        "index": {
          "description": "The Monoid unionWith mappend empty for containers full of monoids",
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "UnionWith",
          "package": "reducers",
          "partial": "Union With",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#t:UnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "Union",
          "package": "reducers",
          "signature": "Union",
          "source": "src/Data-Semigroup-Union.html#Union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "Union",
          "package": "reducers",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "UnionWith",
          "package": "reducers",
          "signature": "UnionWith",
          "source": "src/Data-Semigroup-Union.html#UnionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "UnionWith",
          "package": "reducers",
          "partial": "Union With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:UnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "empty",
          "package": "reducers",
          "signature": "f",
          "source": "src/Data-Semigroup-Union.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "empty",
          "package": "reducers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "emptyWith",
          "package": "reducers",
          "signature": "f a",
          "source": "src/Data-Semigroup-Union.html#emptyWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "emptyWith",
          "package": "reducers",
          "partial": "With",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:emptyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "getUnion",
          "package": "reducers",
          "signature": "f",
          "source": "src/Data-Semigroup-Union.html#Union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "getUnion",
          "package": "reducers",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:getUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "getUnionWith",
          "package": "reducers",
          "signature": "f m",
          "source": "src/Data-Semigroup-Union.html#UnionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "getUnionWith",
          "package": "reducers",
          "partial": "Union With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:getUnionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "union",
          "package": "reducers",
          "signature": "f -\u003e f -\u003e f",
          "source": "src/Data-Semigroup-Union.html#union",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "reducers",
          "signature": "f-\u003ef-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup.Union",
          "name": "unionWith",
          "package": "reducers",
          "signature": "(a -\u003e a -\u003e a) -\u003e f a -\u003e f a -\u003e f a",
          "source": "src/Data-Semigroup-Union.html#unionWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Semigroup Union",
          "module": "Data.Semigroup.Union",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "reducers",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ef a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reducers/docs/Data-Semigroup-Union.html#v:unionWith"
      }
    }
  ]
]