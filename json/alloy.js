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
        "word": "alloy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module containing the AlloyA type-class for working with effectful functions\n (of the type \u003ccode\u003ea -\u003e m a\u003c/code\u003e).  This module is an analogue to \u003ca\u003eData.Generics.Alloy.Pure\u003c/a\u003e\n that supports functions that result in a monadic or applicative functor type.\n\u003c/p\u003e\u003cp\u003eAll the functions in this module have versions for \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e and for\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.  They have the same behaviour, and technically only the\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e version is necessary, but since not all monads have\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instances, the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e versions are provided for convenience.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "Effect",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html",
          "type": "module"
        },
        "index": {
          "description": "The module containing the AlloyA type-class for working with effectful functions of the type This module is an analogue to Data.Generics.Alloy.Pure that supports functions that result in monadic or applicative functor type All the functions in this module have versions for Applicative and for Monad They have the same behaviour and technically only the Applicative version is necessary but since not all monads have Applicative instances the Monad versions are provided for convenience",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "Effect",
          "package": "alloy",
          "partial": "Effect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type that extends an opset (opT) in the given\n monad/applicative-functor (m) to be applied to the given type (t).  This is\n for use with the \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e class.  A set of operations that operates\n on \u003ccode\u003eFoo\u003c/code\u003e, \u003ccode\u003eBar\u003c/code\u003e and \u003ccode\u003eBaz\u003c/code\u003e in the IO monad can be constructed so:\n\u003c/p\u003e\u003cpre\u003e ops :: (Foo :-* Bar :-* Baz :-* BaseOpA) IO\n ops = doFoo :-* doBar :-* doBaz :-* baseOpA\n\n doFoo :: Foo -\u003e IO Foo\n doBar :: Bar -\u003e IO Bar\n doBaz :: Baz -\u003e IO Baz\n\u003c/pre\u003e\u003cp\u003eThe monad/functor parameter needs to be given when declaring an actual opset,\n but must be omitted when using the opset as part of a type-class constraint\n such as:\n\u003c/p\u003e\u003cpre\u003e f :: AlloyA a (Foo :-* Bar :-* Baz :-* BaseOpA) BaseOpA =\u003e a -\u003e IO a\n f = makeRecurse ops\n\u003c/pre\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": ":-*",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#%3A-%2A",
          "type": "data"
        },
        "index": {
          "description": "The type that extends an opset opT in the given monad applicative-functor to be applied to the given type This is for use with the AlloyA class set of operations that operates on Foo Bar and Baz in the IO monad can be constructed so ops Foo Bar Baz BaseOpA IO ops doFoo doBar doBaz baseOpA doFoo Foo IO Foo doBar Bar IO Bar doBaz Baz IO Baz The monad functor parameter needs to be given when declaring an actual opset but must be omitted when using the opset as part of type-class constraint such as AlloyA Foo Bar Baz BaseOpA BaseOpA IO makeRecurse ops",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": ":-*",
          "package": "alloy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t::-45--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Alloy type-class for effectful functions, to be used with sets of\n operations constructed from \u003ccode\u003e\u003ca\u003eBaseOpA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:-*\u003c/a\u003e\u003c/code\u003e.  You are unlikely to need to\n use \u003ccode\u003etransform\u003c/code\u003e directly; instead use 'makeRecurseA'\\/'makeRecurseM' and 'makeDescendA'\\/'makeDescendM'.\n\u003c/p\u003e\u003cp\u003eThe first parameter to the type-class is the type currently being operated\n on, the second parameter is the set of operations to perform directly on\n the type, and the third parameter is the set of operations to perform on\n its children (if none of the second parameter operations can be applied).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "AlloyA",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#AlloyA",
          "type": "class"
        },
        "index": {
          "description": "The Alloy type-class for effectful functions to be used with sets of operations constructed from BaseOpA and You are unlikely to need to use transform directly instead use makeRecurseA makeRecurseM and makeDescendA makeDescendM The first parameter to the type-class is the type currently being operated on the second parameter is the set of operations to perform directly on the type and the third parameter is the set of operations to perform on its children if none of the second parameter operations can be applied",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "AlloyA",
          "package": "alloy",
          "partial": "Alloy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t:AlloyA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe terminator for effectful opsets.  Note that all effectful opsets are the\n same, and both can be used with the applicative functions or monad functions\n in this module.  Whereas there is, for example, both \u003ccode\u003e\u003ca\u003emakeRecurseA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emakeRecurseM\u003c/a\u003e\u003c/code\u003e,\n there is only one terminator for the opsets, \u003ccode\u003e\u003ca\u003eBaseOpA\u003c/a\u003e\u003c/code\u003e, which should be used\n regardless of whether you use \u003ccode\u003e\u003ca\u003emakeRecurseA\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emakeRecurseM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "BaseOpA",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#BaseOpA",
          "type": "data"
        },
        "index": {
          "description": "The terminator for effectful opsets Note that all effectful opsets are the same and both can be used with the applicative functions or monad functions in this module Whereas there is for example both makeRecurseA and makeRecurseM there is only one terminator for the opsets BaseOpA which should be used regardless of whether you use makeRecurseA or makeRecurseM",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "BaseOpA",
          "package": "alloy",
          "partial": "Base Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t:BaseOpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing a monadic/applicative functor modifier function that\n applies the given ops (opT) in the given monad/functor (f) to the children of the\n given type (t).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "DescendA",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#DescendA",
          "type": "type"
        },
        "index": {
          "description": "type representing monadic applicative functor modifier function that applies the given ops opT in the given monad functor to the children of the given type",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "DescendA",
          "package": "alloy",
          "partial": "Descend",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t:DescendA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy synonym for a monadic/applicative opset with only one item, to use with \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "OneOpA",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#OneOpA",
          "type": "type"
        },
        "index": {
          "description": "handy synonym for monadic applicative opset with only one item to use with AlloyA",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "OneOpA",
          "package": "alloy",
          "partial": "One Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t:OneOpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing a monadic/applicative functor modifier function that\n applies the given ops (opT) in the given monad/functor (f) directly to the\n given type (t).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "RecurseA",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#RecurseA",
          "type": "type"
        },
        "index": {
          "description": "type representing monadic applicative functor modifier function that applies the given ops opT in the given monad functor directly to the given type",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "RecurseA",
          "package": "alloy",
          "partial": "Recurse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t:RecurseA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy synonym for a monadic/applicative opset with only two items, to use with \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "TwoOpA",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Effect.html#TwoOpA",
          "type": "type"
        },
        "index": {
          "description": "handy synonym for monadic applicative opset with only two items to use with AlloyA",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "TwoOpA",
          "package": "alloy",
          "partial": "Two Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#t:TwoOpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Effect",
          "name": ":-*",
          "package": "alloy",
          "signature": "(t -\u003e m t) :-* (opT m)",
          "source": "src/Data-Generics-Alloy-Effect.html#%3A-%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": ":-*",
          "normalized": "(a-\u003eb a)*(c b)",
          "package": "alloy",
          "signature": "(t-\u003em t)*(opT m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v::-45--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Effect",
          "name": "BaseOpA",
          "package": "alloy",
          "signature": "BaseOpA",
          "source": "src/Data-Generics-Alloy-Effect.html#BaseOpA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "BaseOpA",
          "package": "alloy",
          "partial": "Base Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:BaseOpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function to give you an item of type \u003ccode\u003e\u003ca\u003eBaseOpA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "baseOpA",
          "package": "alloy",
          "signature": "BaseOpA m",
          "source": "src/Data-Generics-Alloy-Effect.html#baseOpA",
          "type": "function"
        },
        "index": {
          "description": "The function to give you an item of type BaseOpA",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "baseOpA",
          "package": "alloy",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:baseOpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of operations, makes a descent modifier function that applies\n the operation to the type's children, and further down, until it has been applied\n to all the largest instances of that type.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeDescendA",
          "package": "alloy",
          "signature": "opT f -\u003e DescendA f opT",
          "source": "src/Data-Generics-Alloy-Effect.html#makeDescendA",
          "type": "function"
        },
        "index": {
          "description": "Given set of operations makes descent modifier function that applies the operation to the type children and further down until it has been applied to all the largest instances of that type",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeDescendA",
          "normalized": "a b-\u003eDescendA b a",
          "package": "alloy",
          "partial": "Descend",
          "signature": "opT f-\u003eDescendA f opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:makeDescendA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful equivalent of \u003ccode\u003e\u003ca\u003emakeDescendA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeDescendM",
          "package": "alloy",
          "signature": "opT m -\u003e DescendA m opT",
          "source": "src/Data-Generics-Alloy-Effect.html#makeDescendM",
          "type": "function"
        },
        "index": {
          "description": "Useful equivalent of makeDescendA",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeDescendM",
          "normalized": "a b-\u003eDescendA b a",
          "package": "alloy",
          "partial": "Descend",
          "signature": "opT m-\u003eDescendA m opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:makeDescendM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of operations (as described in the \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e type-class),\n makes a recursive modifier function that applies the operations directly to\n the given type, and then to its children, until it has been applied to all\n the largest instances of that type.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeRecurseA",
          "package": "alloy",
          "signature": "opT f -\u003e RecurseA f opT",
          "source": "src/Data-Generics-Alloy-Effect.html#makeRecurseA",
          "type": "function"
        },
        "index": {
          "description": "Given set of operations as described in the AlloyA type-class makes recursive modifier function that applies the operations directly to the given type and then to its children until it has been applied to all the largest instances of that type",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeRecurseA",
          "normalized": "a b-\u003eRecurseA b a",
          "package": "alloy",
          "partial": "Recurse",
          "signature": "opT f-\u003eRecurseA f opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:makeRecurseA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful equivalent of \u003ccode\u003e\u003ca\u003emakeRecurseA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeRecurseM",
          "package": "alloy",
          "signature": "opT m -\u003e RecurseA m opT",
          "source": "src/Data-Generics-Alloy-Effect.html#makeRecurseM",
          "type": "function"
        },
        "index": {
          "description": "Useful equivalent of makeRecurseA",
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "makeRecurseM",
          "normalized": "a b-\u003eRecurseA b a",
          "package": "alloy",
          "partial": "Recurse",
          "signature": "opT m-\u003eRecurseA m opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:makeRecurseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Effect",
          "name": "transformA",
          "package": "alloy",
          "signature": "o f -\u003e o' f -\u003e t -\u003e f t",
          "source": "src/Data-Generics-Alloy-Effect.html#transformA",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "transformA",
          "normalized": "a b-\u003ec b-\u003ed-\u003eb d",
          "package": "alloy",
          "signature": "o f-\u003eo' f-\u003et-\u003ef t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:transformA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Effect",
          "name": "transformM",
          "package": "alloy",
          "signature": "o m -\u003e o' m -\u003e t -\u003e m t",
          "source": "src/Data-Generics-Alloy-Effect.html#transformM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Effect",
          "module": "Data.Generics.Alloy.Effect",
          "name": "transformM",
          "normalized": "a b-\u003ec b-\u003ed-\u003eb d",
          "package": "alloy",
          "signature": "o m-\u003eo' m-\u003et-\u003em t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Effect.html#v:transformM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing code to generate instances of the Alloy class for\n you.\n\u003c/p\u003e\u003cp\u003eGenerating Alloy instances by hand would be laborious, complex and error-prone.\n  This module provides instance generation, based on the Scrap Your Boilerplate (\u003ca\u003eData.Generics\u003c/a\u003e)\n generics that have built-in support in GHC.  So you should just need to add\n\u003c/p\u003e\u003cpre\u003e deriving (Data, Typeable)\n\u003c/pre\u003e\u003cp\u003eafter all your data-types, then use the functions in this module to generate\n some Haskell code with instances of the Alloy classes.  The simplest functions\n for doing this are \u003ccode\u003e\u003ca\u003ewriteInstances\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteInstancesTo\u003c/a\u003e\u003c/code\u003e.  The tutorial has\n examples of using this module.\n\u003c/p\u003e\u003cp\u003eYou do not even have to modify the definitions of your data-types if you are\n using GHC 6.8.2 or later, you can simply add these lines in your module for\n generating the instances (assuming the data-type is not hidden during import):\n\u003c/p\u003e\u003cpre\u003e deriving instance Typeable Foo\n deriving instance Data Foo\n\u003c/pre\u003e\u003cp\u003eThat technique, and in fact this module as a whole generates orphan instances.\n  This is generally advised against in Haskell, but it should not cause any problems\n here.\n\u003c/p\u003e\u003cp\u003eThe primary drawback of Alloy's approach is that it can generate a lot of\n type-class instances (generally, the square of the number of types).  There\n are two ways to control this explosion.  Using \u003ccode\u003e\u003ca\u003eGenWithOverlapped\u003c/a\u003e\u003c/code\u003e tends to\n halve the number of instances, at the cost of using a GHC extension.  If\n you need instances for more than one of \u003ccode\u003eAlloy\u003c/code\u003e, \u003ccode\u003eAlloyA\u003c/code\u003e and\n \u003ccode\u003eAlloyARoute\u003c/code\u003e, it is possible to define one based on another, and thus\n avoid an entire set of instances altogether.  See the alloy-proxy-fd\n package on Hackage for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstances",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-GenInstances.html",
          "type": "module"
        },
        "index": {
          "description": "module containing code to generate instances of the Alloy class for you Generating Alloy instances by hand would be laborious complex and error-prone This module provides instance generation based on the Scrap Your Boilerplate Data.Generics generics that have built-in support in GHC So you should just need to add deriving Data Typeable after all your data-types then use the functions in this module to generate some Haskell code with instances of the Alloy classes The simplest functions for doing this are writeInstances and writeInstancesTo The tutorial has examples of using this module You do not even have to modify the definitions of your data-types if you are using GHC or later you can simply add these lines in your module for generating the instances assuming the data-type is not hidden during import deriving instance Typeable Foo deriving instance Data Foo That technique and in fact this module as whole generates orphan instances This is generally advised against in Haskell but it should not cause any problems here The primary drawback of Alloy approach is that it can generate lot of type-class instances generally the square of the number of types There are two ways to control this explosion Using GenWithOverlapped tends to halve the number of instances at the cost of using GHC extension If you need instances for more than one of Alloy AlloyA and AlloyARoute it is possible to define one based on another and thus avoid an entire set of instances altogether See the alloy-proxy-fd package on Hackage for more details",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstances",
          "package": "alloy",
          "partial": "Gen Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor now, this option has only one setting.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenClassOption",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenClassOption",
          "type": "data"
        },
        "index": {
          "description": "For now this option has only one setting",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenClassOption",
          "package": "alloy",
          "partial": "Gen Class Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#t:GenClassOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that represents a generator for instances of a set of types.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstance",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstance",
          "type": "data"
        },
        "index": {
          "description": "type that represents generator for instances of set of types",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstance",
          "package": "alloy",
          "partial": "Gen Instance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#t:GenInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstanceConfig",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstanceConfig",
          "package": "alloy",
          "partial": "Gen Instance Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#t:GenInstanceConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe option controlling whether the generated instances can be overlapped.\n  If you choose \u003ccode\u003e\u003ca\u003eGenWithOverlapped\u003c/a\u003e\u003c/code\u003e many less instances (around half, in our\n  experience) will be generated, but you must enable the\n  overlapping-instances flag in GHC (-XOverlappingInstances in GHC 6.8 and\n  6.10) when compiling the instances.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenOverlappedOption",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenOverlappedOption",
          "type": "data"
        },
        "index": {
          "description": "The option controlling whether the generated instances can be overlapped If you choose GenWithOverlapped many less instances around half in our experience will be generated but you must enable the overlapping-instances flag in GHC XOverlappingInstances in GHC and when compiling the instances",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenOverlappedOption",
          "package": "alloy",
          "partial": "Gen Overlapped Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#t:GenOverlappedOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstanceConfig",
          "package": "alloy",
          "signature": "GenInstanceConfig",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenInstanceConfig",
          "package": "alloy",
          "partial": "Gen Instance Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:GenInstanceConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenOneClass",
          "package": "alloy",
          "signature": "GenOneClass",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenClassOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenOneClass",
          "package": "alloy",
          "partial": "Gen One Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:GenOneClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenWithOverlapped",
          "package": "alloy",
          "signature": "GenWithOverlapped",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenOverlappedOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenWithOverlapped",
          "package": "alloy",
          "partial": "Gen With Overlapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:GenWithOverlapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenWithoutOverlapped",
          "package": "alloy",
          "signature": "GenWithoutOverlapped",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenOverlappedOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "GenWithoutOverlapped",
          "package": "alloy",
          "partial": "Gen Without Overlapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:GenWithoutOverlapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs instances for all the type-classes: \u003ccode\u003eAlloy\u003c/code\u003e, \u003ccode\u003eAlloyA\u003c/code\u003e and \u003ccode\u003eAlloyARoute\u003c/code\u003e.\n  This may be quite a lot, see the documentation at the top of this file.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "allInstances",
          "package": "alloy",
          "signature": "GenOverlappedOption -\u003e GenInstanceConfig",
          "source": "src/Data-Generics-Alloy-GenInstances.html#allInstances",
          "type": "function"
        },
        "index": {
          "description": "Constructs instances for all the type-classes Alloy AlloyA and AlloyARoute This may be quite lot see the documentation at the top of this file",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "allInstances",
          "normalized": "GenOverlappedOption-\u003eGenInstanceConfig",
          "package": "alloy",
          "partial": "Instances",
          "signature": "GenOverlappedOption-\u003eGenInstanceConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:allInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genClass",
          "package": "alloy",
          "signature": "GenClassOption",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genClass",
          "package": "alloy",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genEffect",
          "package": "alloy",
          "signature": "Bool",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genEffect",
          "package": "alloy",
          "partial": "Effect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates instances for all types within the given type.  Therefore you should\n only need one or two of these calls to cover all of a complex data structure,\n by calling this on the largest types in your structure.  The function is non-strict\n in its argument, so the easiest way to call it is:\n\u003c/p\u003e\u003cpre\u003e genInstance (undefined :: MyType)\n\u003c/pre\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genInstance",
          "package": "alloy",
          "signature": "t -\u003e GenInstance",
          "source": "src/Data-Generics-Alloy-GenInstances.html#genInstance",
          "type": "function"
        },
        "index": {
          "description": "Generates instances for all types within the given type Therefore you should only need one or two of these calls to cover all of complex data structure by calling this on the largest types in your structure The function is non-strict in its argument so the easiest way to call it is genInstance undefined MyType",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genInstance",
          "normalized": "a-\u003eGenInstance",
          "package": "alloy",
          "partial": "Instance",
          "signature": "t-\u003eGenInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates all the given instances (eliminating any duplicates)\n with the given options.  The return is a list of lines of code.  This should\n then be written to a Haskell module with the appropriate header.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genInstances",
          "package": "alloy",
          "signature": "GenInstanceConfig -\u003e [GenInstance] -\u003e IO [String]",
          "source": "src/Data-Generics-Alloy-GenInstances.html#genInstances",
          "type": "function"
        },
        "index": {
          "description": "Generates all the given instances eliminating any duplicates with the given options The return is list of lines of code This should then be written to Haskell module with the appropriate header",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genInstances",
          "normalized": "GenInstanceConfig-\u003e[GenInstance]-\u003eIO[String]",
          "package": "alloy",
          "partial": "Instances",
          "signature": "GenInstanceConfig-\u003e[GenInstance]-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an instance for the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e type.  Map is a difficult type\n because its instance of Data hides its implementation, so we can't actually\n use the Data instance to work out what the children are (as we can do for other\n algebraic data types).  So for every different Map that you want to process\n (or that you have inside other types you want to process), you must also call\n this function to effectively notify the generation-functions of the existence\n of your map.  We wish there was an easier, non-hacky way but we can't see one.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genMapInstance",
          "package": "alloy",
          "signature": "k -\u003e v -\u003e GenInstance",
          "source": "src/Data-Generics-Alloy-GenInstances.html#genMapInstance",
          "type": "function"
        },
        "index": {
          "description": "Generates an instance for the Map type Map is difficult type because its instance of Data hides its implementation so we can actually use the Data instance to work out what the children are as we can do for other algebraic data types So for every different Map that you want to process or that you have inside other types you want to process you must also call this function to effectively notify the generation-functions of the existence of your map We wish there was an easier non-hacky way but we can see one",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genMapInstance",
          "normalized": "a-\u003eb-\u003eGenInstance",
          "package": "alloy",
          "partial": "Map Instance",
          "signature": "k-\u003ev-\u003eGenInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genMapInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genOverlapped",
          "package": "alloy",
          "signature": "GenOverlappedOption",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genOverlapped",
          "package": "alloy",
          "partial": "Overlapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genOverlapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genPure",
          "package": "alloy",
          "signature": "Bool",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genPure",
          "package": "alloy",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genRoute",
          "package": "alloy",
          "signature": "Bool",
          "source": "src/Data-Generics-Alloy-GenInstances.html#GenInstanceConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genRoute",
          "package": "alloy",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an instance for the \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e type.  See \u003ccode\u003e\u003ca\u003egenMapInstance\u003c/a\u003e\u003c/code\u003e for\n an explanation.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genSetInstance",
          "package": "alloy",
          "signature": "a -\u003e GenInstance",
          "source": "src/Data-Generics-Alloy-GenInstances.html#genSetInstance",
          "type": "function"
        },
        "index": {
          "description": "Generates an instance for the Set type See genMapInstance for an explanation",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genSetInstance",
          "normalized": "a-\u003eGenInstance",
          "package": "alloy",
          "partial": "Set Instance",
          "signature": "a-\u003eGenInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genSetInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates an instance for the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e type. Like\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, the Data instance for Vector hides its representation.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genVectorInstance",
          "package": "alloy",
          "signature": "v -\u003e GenInstance",
          "source": "src/Data-Generics-Alloy-GenInstances.html#genVectorInstance",
          "type": "function"
        },
        "index": {
          "description": "Generates an instance for the Vector type Like Map the Data instance for Vector hides its representation",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "genVectorInstance",
          "normalized": "a-\u003eGenInstance",
          "package": "alloy",
          "partial": "Vector Instance",
          "signature": "v-\u003eGenInstance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:genVectorInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lines in the header that form the import statements necessary for the\n Alloy instances.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "instanceImports",
          "package": "alloy",
          "signature": "[String]",
          "source": "src/Data-Generics-Alloy-GenInstances.html#instanceImports",
          "type": "function"
        },
        "index": {
          "description": "The lines in the header that form the import statements necessary for the Alloy instances",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "instanceImports",
          "normalized": "[String]",
          "package": "alloy",
          "partial": "Imports",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:instanceImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einstanceImports\u003c/a\u003e\u003c/code\u003e but also adds the lines needed for maps and sets.\n If you use \u003ccode\u003e\u003ca\u003egenMapInstance\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egenSetInstance\u003c/a\u003e\u003c/code\u003e, use this function, otherwise\n \u003ccode\u003e\u003ca\u003einstanceImports\u003c/a\u003e\u003c/code\u003e will suffice.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "instanceImportsMapSet",
          "package": "alloy",
          "signature": "[String]",
          "source": "src/Data-Generics-Alloy-GenInstances.html#instanceImportsMapSet",
          "type": "function"
        },
        "index": {
          "description": "Like instanceImports but also adds the lines needed for maps and sets If you use genMapInstance or genSetInstance use this function otherwise instanceImports will suffice",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "instanceImportsMapSet",
          "normalized": "[String]",
          "package": "alloy",
          "partial": "Imports Map Set",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:instanceImportsMapSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einstanceImportsMapSet\u003c/a\u003e\u003c/code\u003e but for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "instanceImportsVector",
          "package": "alloy",
          "signature": "[String]",
          "source": "src/Data-Generics-Alloy-GenInstances.html#instanceImportsVector",
          "type": "function"
        },
        "index": {
          "description": "Like instanceImportsMapSet but for Vector",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "instanceImportsVector",
          "normalized": "[String]",
          "package": "alloy",
          "partial": "Imports Vector",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:instanceImportsVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a configuration that just generates instances for the \u003ccode\u003eAlloy\u003c/code\u003e type-class\n (not \u003ccode\u003eAlloyA\u003c/code\u003e or \u003ccode\u003eAlloyARoute\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "justPure",
          "package": "alloy",
          "signature": "GenOverlappedOption -\u003e GenInstanceConfig",
          "source": "src/Data-Generics-Alloy-GenInstances.html#justPure",
          "type": "function"
        },
        "index": {
          "description": "Constructs configuration that just generates instances for the Alloy type-class not AlloyA or AlloyARoute",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "justPure",
          "normalized": "GenOverlappedOption-\u003eGenInstanceConfig",
          "package": "alloy",
          "partial": "Pure",
          "signature": "GenOverlappedOption-\u003eGenInstanceConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:justPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe line with a LANGUAGE pragma detailed all the extensions needed.  This\n is automatically written by \u003ccode\u003e\u003ca\u003ewriteInstances\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriteInstancesTo\u003c/a\u003e\u003c/code\u003e at the top\n of the file, but you may want to use it if you are using \u003ccode\u003e\u003ca\u003egenInstances\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "languageExtras",
          "package": "alloy",
          "signature": "GenOverlappedOption -\u003e String",
          "source": "src/Data-Generics-Alloy-GenInstances.html#languageExtras",
          "type": "function"
        },
        "index": {
          "description": "The line with LANGUAGE pragma detailed all the extensions needed This is automatically written by writeInstances and writeInstancesTo at the top of the file but you may want to use it if you are using genInstances",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "languageExtras",
          "normalized": "GenOverlappedOption-\u003eString",
          "package": "alloy",
          "partial": "Extras",
          "signature": "GenOverlappedOption-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:languageExtras"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the instances according to the options and writes it to stdout with\n the given header (the header is a list of lines without newline characters).\n\u003c/p\u003e\u003cp\u003eThe configuration can be obtained from \u003ccode\u003e\u003ca\u003ejustPure\u003c/a\u003e\u003c/code\u003e (for example) or constructing\n the configuration yourself.  The list of \u003ccode\u003e\u003ca\u003eGenInstance\u003c/a\u003e\u003c/code\u003e can be obtained through\n \u003ccode\u003e\u003ca\u003egenInstance\u003c/a\u003e\u003c/code\u003e.  The header will generally be something like:\n\u003c/p\u003e\u003cpre\u003e \"module FooInstances where\" : \"import qualified Foo\" : instanceImports\n\u003c/pre\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "writeInstances",
          "package": "alloy",
          "signature": "GenInstanceConfig -\u003e [GenInstance] -\u003e [String] -\u003e IO ()",
          "source": "src/Data-Generics-Alloy-GenInstances.html#writeInstances",
          "type": "function"
        },
        "index": {
          "description": "Generates the instances according to the options and writes it to stdout with the given header the header is list of lines without newline characters The configuration can be obtained from justPure for example or constructing the configuration yourself The list of GenInstance can be obtained through genInstance The header will generally be something like module FooInstances where import qualified Foo instanceImports",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "writeInstances",
          "normalized": "GenInstanceConfig-\u003e[GenInstance]-\u003e[String]-\u003eIO()",
          "package": "alloy",
          "partial": "Instances",
          "signature": "GenInstanceConfig-\u003e[GenInstance]-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:writeInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the instances according to the options and writes it to the given filename with\n the given header (the header is a list of lines without newline characters).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "writeInstancesTo",
          "package": "alloy",
          "signature": "GenInstanceConfig -\u003e [GenInstance] -\u003e [String] -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-Generics-Alloy-GenInstances.html#writeInstancesTo",
          "type": "function"
        },
        "index": {
          "description": "Generates the instances according to the options and writes it to the given filename with the given header the header is list of lines without newline characters",
          "hierarchy": "Data Generics Alloy GenInstances",
          "module": "Data.Generics.Alloy.GenInstances",
          "name": "writeInstancesTo",
          "normalized": "GenInstanceConfig-\u003e[GenInstance]-\u003e[String]-\u003eFilePath-\u003eIO()",
          "package": "alloy",
          "partial": "Instances To",
          "signature": "GenInstanceConfig-\u003e[GenInstance]-\u003e[String]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-GenInstances.html#v:writeInstancesTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module containing the Alloy type-class for working with pure functions\n (of the type \u003ccode\u003ea -\u003e a\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Pure",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html",
          "type": "module"
        },
        "index": {
          "description": "The module containing the Alloy type-class for working with pure functions of the type",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Pure",
          "package": "alloy",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type that extends an opset (opT) to be applied to the given type (t).\n This is for use with the \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e type-class.  A set of operations that operates\n on \u003ccode\u003eFoo\u003c/code\u003e, \u003ccode\u003eBar\u003c/code\u003e and \u003ccode\u003eBaz\u003c/code\u003e can be constructed so:\n\u003c/p\u003e\u003cpre\u003e ops :: Foo :- Bar :- Baz :- BaseOp\n ops = doFoo :- doBar :- doBaz :- baseOp\n\n doFoo :: Foo -\u003e Foo\n doBar :: Bar -\u003e Bar\n doBaz :: Baz -\u003e Baz\n\u003c/pre\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": ":-",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#%3A-",
          "type": "data"
        },
        "index": {
          "description": "The type that extends an opset opT to be applied to the given type This is for use with the Alloy type-class set of operations that operates on Foo Bar and Baz can be constructed so ops Foo Bar Baz BaseOp ops doFoo doBar doBaz baseOp doFoo Foo Foo doBar Bar Bar doBaz Baz Baz",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": ":-",
          "package": "alloy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Alloy type-class for pure functions, to be used with sets of\n operations constructed from \u003ccode\u003e\u003ca\u003eBaseOp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:-\u003c/a\u003e\u003c/code\u003e.  You are unlikely to need to\n use \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e directly; instead use \u003ccode\u003e\u003ca\u003emakeRecurse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emakeDescend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe first parameter to the type-class is the type currently being operated\n on, the second parameter is the set of operations to perform directly on\n the type, and the third parameter is the set of operations to perform on\n its children (if none of the second parameter operations can be applied).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Alloy",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#Alloy",
          "type": "class"
        },
        "index": {
          "description": "The Alloy type-class for pure functions to be used with sets of operations constructed from BaseOp and You are unlikely to need to use transform directly instead use makeRecurse and makeDescend The first parameter to the type-class is the type currently being operated on the second parameter is the set of operations to perform directly on the type and the third parameter is the set of operations to perform on its children if none of the second parameter operations can be applied",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Alloy",
          "package": "alloy",
          "partial": "Alloy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t:Alloy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the empty set of pure operations.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "BaseOp",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#BaseOp",
          "type": "data"
        },
        "index": {
          "description": "The type of the empty set of pure operations",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "BaseOp",
          "package": "alloy",
          "partial": "Base Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t:BaseOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing a modifier function that applies the given ops\n (opT) to the children of the given type (t).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Descend",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#Descend",
          "type": "type"
        },
        "index": {
          "description": "type representing modifier function that applies the given ops opT to the children of the given type",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Descend",
          "package": "alloy",
          "partial": "Descend",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t:Descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy synonym for an opset with only one item, to use with \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "OneOp",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#OneOp",
          "type": "type"
        },
        "index": {
          "description": "handy synonym for an opset with only one item to use with Alloy",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "OneOp",
          "package": "alloy",
          "partial": "One Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t:OneOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing a modifier function that applies the given ops\n (opT) directly to the given type (t).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Recurse",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#Recurse",
          "type": "type"
        },
        "index": {
          "description": "type representing modifier function that applies the given ops opT directly to the given type",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "Recurse",
          "package": "alloy",
          "partial": "Recurse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t:Recurse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy synonym for an opset with only two items, to use with \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "TwoOp",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Pure.html#TwoOp",
          "type": "type"
        },
        "index": {
          "description": "handy synonym for an opset with only two items to use with Alloy",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "TwoOp",
          "package": "alloy",
          "partial": "Two Op",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#t:TwoOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Pure",
          "name": ":-",
          "package": "alloy",
          "signature": "(t -\u003e t) :- opT",
          "source": "src/Data-Generics-Alloy-Pure.html#%3A-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": ":-",
          "normalized": "(a-\u003ea)b",
          "package": "alloy",
          "signature": "(t-\u003et)opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#v::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Pure",
          "name": "BaseOp",
          "package": "alloy",
          "signature": "BaseOp",
          "source": "src/Data-Generics-Alloy-Pure.html#BaseOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "BaseOp",
          "package": "alloy",
          "partial": "Base Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#v:BaseOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function giving the empty set of pure operations.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "baseOp",
          "package": "alloy",
          "signature": "BaseOp",
          "source": "src/Data-Generics-Alloy-Pure.html#baseOp",
          "type": "function"
        },
        "index": {
          "description": "The function giving the empty set of pure operations",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "baseOp",
          "package": "alloy",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#v:baseOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of operations, makes a descent modifier function that applies\n the operation to the type's children, and further down, until it has been applied\n to all the largest instances of that type.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "makeDescend",
          "package": "alloy",
          "signature": "opT -\u003e Descend opT",
          "source": "src/Data-Generics-Alloy-Pure.html#makeDescend",
          "type": "function"
        },
        "index": {
          "description": "Given set of operations makes descent modifier function that applies the operation to the type children and further down until it has been applied to all the largest instances of that type",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "makeDescend",
          "normalized": "a-\u003eDescend a",
          "package": "alloy",
          "partial": "Descend",
          "signature": "opT-\u003eDescend opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#v:makeDescend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of operations, makes a modifier function that applies the\n operations directly to the given type, and then to its children, until it\n has been applied to all the largest instances of that type.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Pure",
          "name": "makeRecurse",
          "package": "alloy",
          "signature": "opT -\u003e Recurse opT",
          "source": "src/Data-Generics-Alloy-Pure.html#makeRecurse",
          "type": "function"
        },
        "index": {
          "description": "Given set of operations makes modifier function that applies the operations directly to the given type and then to its children until it has been applied to all the largest instances of that type",
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "makeRecurse",
          "normalized": "a-\u003eRecurse a",
          "package": "alloy",
          "partial": "Recurse",
          "signature": "opT-\u003eRecurse opT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#v:makeRecurse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Pure",
          "name": "transform",
          "package": "alloy",
          "signature": "o -\u003e o' -\u003e t -\u003e t",
          "source": "src/Data-Generics-Alloy-Pure.html#transform",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Pure",
          "module": "Data.Generics.Alloy.Pure",
          "name": "transform",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "alloy",
          "signature": "o-\u003eo'-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Pure.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA slightly experimental add-on for Alloy involving the idea of routes to a\n particular part of a tree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "Route",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html",
          "type": "module"
        },
        "index": {
          "description": "slightly experimental add-on for Alloy involving the idea of routes to particular part of tree",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "Route",
          "package": "alloy",
          "partial": "Route",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type that extends an applicative/monadic opset (opT) in the given\n functor/monad (m) to be applied to the given type (t) with routes to the\n outer type (outer).  This is for use with the \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": ":-@",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html#%3A-%40",
          "type": "data"
        },
        "index": {
          "description": "The type that extends an applicative monadic opset opT in the given functor monad to be applied to the given type with routes to the outer type outer This is for use with the AlloyARoute class",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": ":-@",
          "package": "alloy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#t::-45--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003eAlloyA\u003c/code\u003e that adds in \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003es.  The opsets are now parameterised\n over both the monad/functor, and the outer-type of the route.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "AlloyARoute",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html#AlloyARoute",
          "type": "class"
        },
        "index": {
          "description": "An extension to AlloyA that adds in Route The opsets are now parameterised over both the monad functor and the outer-type of the route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "AlloyARoute",
          "package": "alloy",
          "partial": "Alloy ARoute",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#t:AlloyARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe terminator for opsets with \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "BaseOpARoute",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html#BaseOpARoute",
          "type": "data"
        },
        "index": {
          "description": "The terminator for opsets with AlloyARoute",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "BaseOpARoute",
          "package": "alloy",
          "partial": "Base Op ARoute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#t:BaseOpARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy synonym for a monadic/applicative opset with only one item, to use with \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "OneOpARoute",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html#OneOpARoute",
          "type": "type"
        },
        "index": {
          "description": "handy synonym for monadic applicative opset with only one item to use with AlloyARoute",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "OneOpARoute",
          "package": "alloy",
          "partial": "One Op ARoute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#t:OneOpARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Route is a way of navigating to a particular node in a tree structure.\n\u003c/p\u003e\u003cp\u003eLet's say that you have some binary tree structure:\n\u003c/p\u003e\u003cpre\u003e data BinTree a = Leaf a | Branch (BinTree a) (BinTree a)\n\u003c/pre\u003e\u003cp\u003eSuppose you then have a big binary tree of integers, potentially with duplicate values,\n and you want to be able to modify a particular integer.  You can't modify in-place,\n because this is a functional language.  So you instead want to be able to apply\n a modify function to the whole tree that really just modifies the particular\n integer, deep within the tree.\n\u003c/p\u003e\u003cp\u003eTo do this you can use a route:\n\u003c/p\u003e\u003cpre\u003e myRoute :: Route Int (BinTree Int)\n\u003c/pre\u003e\u003cp\u003eYou apply it as follows (for example, to increment the integer):\n\u003c/p\u003e\u003cpre\u003e routeModify myRoute (+1) myTree\n\u003c/pre\u003e\u003cp\u003eThis will only work if the route is valid on the given tree.\n\u003c/p\u003e\u003cp\u003eThe usual way that you get routes is via the traversal functions in the module.\n\u003c/p\u003e\u003cp\u003eAnother useful aspect is composition.  If your tree was in a tree of trees:\n\u003c/p\u003e\u003cpre\u003e routeToInnerTree :: Route (BinTree Int) (BinTree (BinTree Int))\n\u003c/pre\u003e\u003cp\u003eYou could compose this with the earlier route:\n\u003c/p\u003e\u003cpre\u003e routeToInnerTree @-\u003e myRoute :: Route Int (BinTree (BinTree Int))\n\u003c/pre\u003e\u003cp\u003eThese routes are a little like zippers, but rather than building a new data\n type to contain the zipped version and the re-use aspect, this is just a\n simple add-on to apply a modification function in a particular part of the\n tree.  Multiple routes can be used to modify the same tree, which is also\n useful.\n\u003c/p\u003e\u003cp\u003eRoutes support Eq, Show and Ord.  All these instances represent a route as a\n list of integers: a route-map.  [0,2,1] means first child (zero-based), then\n third child, then second child of the given data-type.  Routes are ordered using\n the standard list ordering (lexicographic) over this representation.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "Route",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html#Route",
          "type": "data"
        },
        "index": {
          "description": "Route is way of navigating to particular node in tree structure Let say that you have some binary tree structure data BinTree Leaf Branch BinTree BinTree Suppose you then have big binary tree of integers potentially with duplicate values and you want to be able to modify particular integer You can modify in-place because this is functional language So you instead want to be able to apply modify function to the whole tree that really just modifies the particular integer deep within the tree To do this you can use route myRoute Route Int BinTree Int You apply it as follows for example to increment the integer routeModify myRoute myTree This will only work if the route is valid on the given tree The usual way that you get routes is via the traversal functions in the module Another useful aspect is composition If your tree was in tree of trees routeToInnerTree Route BinTree Int BinTree BinTree Int You could compose this with the earlier route routeToInnerTree myRoute Route Int BinTree BinTree Int These routes are little like zippers but rather than building new data type to contain the zipped version and the re-use aspect this is just simple add-on to apply modification function in particular part of the tree Multiple routes can be used to modify the same tree which is also useful Routes support Eq Show and Ord All these instances represent route as list of integers route-map means first child zero-based then third child then second child of the given data-type Routes are ordered using the standard list ordering lexicographic over this representation",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "Route",
          "package": "alloy",
          "partial": "Route",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#t:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handy synonym for a monadic/applicative opset with only two items, to use with \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "TwoOpARoute",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Route.html#TwoOpARoute",
          "type": "type"
        },
        "index": {
          "description": "handy synonym for monadic applicative opset with only two items to use with AlloyARoute",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "TwoOpARoute",
          "package": "alloy",
          "partial": "Two Op ARoute",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#t:TwoOpARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposes two routes together.  The outer-to-mid route goes on the left hand\n side, and the mid-to-inner goes on the right hand side to form an outer-to-inner\n route.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "(@-\u003e)",
          "package": "alloy",
          "signature": "Route mid outer -\u003e Route inner mid -\u003e Route inner outer",
          "source": "src/Data-Generics-Alloy-Route.html#%40-%3E",
          "type": "function"
        },
        "index": {
          "description": "Composes two routes together The outer-to-mid route goes on the left hand side and the mid-to-inner goes on the right hand side to form an outer-to-inner route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "(@-\u003e) @-\u003e",
          "normalized": "Route a b-\u003eRoute c a-\u003eRoute c b",
          "package": "alloy",
          "signature": "Route mid outer-\u003eRoute inner mid-\u003eRoute inner outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:-64--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Route",
          "name": ":-@",
          "package": "alloy",
          "signature": "((t, Route t outer) -\u003e m t) :-@ (opT m outer)",
          "source": "src/Data-Generics-Alloy-Route.html#%3A-%40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": ":-@",
          "normalized": "((a,Route a b)-\u003ec a)(d c b)",
          "package": "alloy",
          "signature": "((t,Route t outer)-\u003em t)(opT m outer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v::-45--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Route",
          "name": "BaseOpARoute",
          "package": "alloy",
          "signature": "BaseOpARoute",
          "source": "src/Data-Generics-Alloy-Route.html#BaseOpARoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "BaseOpARoute",
          "package": "alloy",
          "partial": "Base Op ARoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:BaseOpARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003ebaseOpA\u003c/code\u003e but for \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "baseOpARoute",
          "package": "alloy",
          "signature": "BaseOpARoute m outer",
          "source": "src/Data-Generics-Alloy-Route.html#baseOpARoute",
          "type": "function"
        },
        "index": {
          "description": "Like baseOpA but for AlloyARoute",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "baseOpARoute",
          "package": "alloy",
          "partial": "Op ARoute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:baseOpARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity route.  This has various obvious properties:\n\u003c/p\u003e\u003cpre\u003e routeGet identityRoute == id\n routeSet identityRoute == const\n routeModify identityRoute == id\n identityRoute @-\u003e route == route\n route @-\u003e identityRoute == route\n\u003c/pre\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "identityRoute",
          "package": "alloy",
          "signature": "Route a a",
          "source": "src/Data-Generics-Alloy-Route.html#identityRoute",
          "type": "function"
        },
        "index": {
          "description": "The identity route This has various obvious properties routeGet identityRoute id routeSet identityRoute const routeModify identityRoute id identityRoute route route route identityRoute route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "identityRoute",
          "package": "alloy",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:identityRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the integer list of identifiers and the modification function, forms\n a Route.  It is up to you to make sure that the integer list is valid as described\n in the documentation of \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e, otherwise routes constructed this way and via\n the Alloy functions may exhibit strange behaviours when compared.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "makeRoute",
          "package": "alloy",
          "signature": "(inner -\u003e m inner) -\u003e outer -\u003e m outer) -\u003e Route inner outer",
          "source": "src/Data-Generics-Alloy-Route.html#makeRoute",
          "type": "function"
        },
        "index": {
          "description": "Given the integer list of identifiers and the modification function forms Route It is up to you to make sure that the integer list is valid as described in the documentation of Route otherwise routes constructed this way and via the Alloy functions may exhibit strange behaviours when compared",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "makeRoute",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c)-\u003eRoute a c",
          "package": "alloy",
          "partial": "Route",
          "signature": "(inner-\u003em inner)-\u003eouter-\u003em outer)-\u003eRoute inner outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:makeRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Route to the key-value pair at the given index (zero-based) in\n the ordered map.  Routes involving maps are difficult because Map hides its\n internal representation.  This route secretly boxes the Map into a list of pairs\n and back again when used.  The identifiers for map entries (as used in the integer\n list) are simply the index into the map as passed to this function.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeDataMap",
          "package": "alloy",
          "signature": "Int -\u003e Route (k, v) (Map k v)",
          "source": "src/Data-Generics-Alloy-Route.html#routeDataMap",
          "type": "function"
        },
        "index": {
          "description": "Constructs Route to the key-value pair at the given index zero-based in the ordered map Routes involving maps are difficult because Map hides its internal representation This route secretly boxes the Map into list of pairs and back again when used The identifiers for map entries as used in the integer list are simply the index into the map as passed to this function",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeDataMap",
          "normalized": "Int-\u003eRoute(a,b)(Map a b)",
          "package": "alloy",
          "partial": "Data Map",
          "signature": "Int-\u003eRoute(k,v)(Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeDataMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Route to the value at the given index (zero-based) in the ordered\n set.  See the documentation for \u003ccode\u003e\u003ca\u003erouteDataMap\u003c/a\u003e\u003c/code\u003e, which is nearly identical to\n this function.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeDataSet",
          "package": "alloy",
          "signature": "Int -\u003e Route k (Set k)",
          "source": "src/Data-Generics-Alloy-Route.html#routeDataSet",
          "type": "function"
        },
        "index": {
          "description": "Constructs Route to the value at the given index zero-based in the ordered set See the documentation for routeDataMap which is nearly identical to this function",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeDataSet",
          "normalized": "Int-\u003eRoute a(Set a)",
          "package": "alloy",
          "partial": "Data Set",
          "signature": "Int-\u003eRoute k(Set k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeDataSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a route, gets the value in the large data structure that is pointed\n to by that route.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeGet",
          "package": "alloy",
          "signature": "Route inner outer -\u003e outer -\u003e inner",
          "source": "src/Data-Generics-Alloy-Route.html#routeGet",
          "type": "function"
        },
        "index": {
          "description": "Given route gets the value in the large data structure that is pointed to by that route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeGet",
          "normalized": "Route a b-\u003eb-\u003ea",
          "package": "alloy",
          "partial": "Get",
          "signature": "Route inner outer-\u003eouter-\u003einner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the integer-list version of a route.  See the documentation of \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeId",
          "package": "alloy",
          "signature": "Route inner outer -\u003e [Int]",
          "source": "src/Data-Generics-Alloy-Route.html#routeId",
          "type": "function"
        },
        "index": {
          "description": "Gets the integer-list version of route See the documentation of Route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeId",
          "normalized": "Route a b-\u003e[Int]",
          "package": "alloy",
          "partial": "Id",
          "signature": "Route inner outer-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an index (zero is the first item), forms a route to that index item\n in the list.  So for example:\n\u003c/p\u003e\u003cpre\u003e routeModify (routeList 3) (*10) [0,1,2,3,4,5] == [0,1,2,30,4,5]\n\u003c/pre\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeList",
          "package": "alloy",
          "signature": "Int -\u003e Route a [a]",
          "source": "src/Data-Generics-Alloy-Route.html#routeList",
          "type": "function"
        },
        "index": {
          "description": "Given an index zero is the first item forms route to that index item in the list So for example routeModify routeList",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeList",
          "normalized": "Int-\u003eRoute a[a]",
          "package": "alloy",
          "partial": "List",
          "signature": "Int-\u003eRoute a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a pure modification function using the given route.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeModify",
          "package": "alloy",
          "signature": "Route inner outer -\u003e (inner -\u003e inner) -\u003e outer -\u003e outer",
          "source": "src/Data-Generics-Alloy-Route.html#routeModify",
          "type": "function"
        },
        "index": {
          "description": "Applies pure modification function using the given route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeModify",
          "normalized": "Route a b-\u003e(a-\u003ea)-\u003eb-\u003eb",
          "package": "alloy",
          "partial": "Modify",
          "signature": "Route inner outer-\u003e(inner-\u003einner)-\u003eouter-\u003eouter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic modification function using the given route.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeModifyM",
          "package": "alloy",
          "signature": "Route inner outer -\u003e (inner -\u003e m inner) -\u003e outer -\u003e m outer",
          "source": "src/Data-Generics-Alloy-Route.html#routeModifyM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic modification function using the given route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeModifyM",
          "normalized": "Route a b-\u003e(a-\u003ec a)-\u003eb-\u003ec b",
          "package": "alloy",
          "partial": "Modify",
          "signature": "Route inner outer-\u003e(inner-\u003em inner)-\u003eouter-\u003em outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeModifyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a route, sets the value in the large data structure that is pointed\n to by that route.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeSet",
          "package": "alloy",
          "signature": "Route inner outer -\u003e inner -\u003e outer -\u003e outer",
          "source": "src/Data-Generics-Alloy-Route.html#routeSet",
          "type": "function"
        },
        "index": {
          "description": "Given route sets the value in the large data structure that is pointed to by that route",
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "routeSet",
          "normalized": "Route a b-\u003ea-\u003eb-\u003eb",
          "package": "alloy",
          "partial": "Set",
          "signature": "Route inner outer-\u003einner-\u003eouter-\u003eouter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:routeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Route",
          "name": "transformARoute",
          "package": "alloy",
          "signature": "o f outer -\u003e o' f outer -\u003e (t, Route t outer) -\u003e f t",
          "source": "src/Data-Generics-Alloy-Route.html#transformARoute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "transformARoute",
          "normalized": "a b c-\u003ed b c-\u003e(e,Route e c)-\u003eb e",
          "package": "alloy",
          "partial": "ARoute",
          "signature": "o f outer-\u003eo' f outer-\u003e(t,Route t outer)-\u003ef t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:transformARoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Route",
          "name": "transformMRoute",
          "package": "alloy",
          "signature": "o m outer -\u003e o' m outer -\u003e (t, Route t outer) -\u003e m t",
          "source": "src/Data-Generics-Alloy-Route.html#transformMRoute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Route",
          "module": "Data.Generics.Alloy.Route",
          "name": "transformMRoute",
          "normalized": "a b c-\u003ed b c-\u003e(e,Route e c)-\u003eb e",
          "package": "alloy",
          "partial": "MRoute",
          "signature": "o m outer-\u003eo' m outer-\u003e(t,Route t outer)-\u003em t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Route.html#v:transformMRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module of helper functions for use with Alloy.  Most of the functions\n have versions for pure functions (without suffix), applicative functors (A\n suffix) and monads (M suffix) and sometimes the monadic version again with routes.\n Generally, only the pure version is documented.  The key functions you are likely\n to need (or their suffixed versions) are \u003ccode\u003e\u003ca\u003eapplyBottomUp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eapplyBottomUp2\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003elistifyDepth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "Schemes",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy-Schemes.html",
          "type": "module"
        },
        "index": {
          "description": "module of helper functions for use with Alloy Most of the functions have versions for pure functions without suffix applicative functors suffix and monads suffix and sometimes the monadic version again with routes Generally only the pure version is documented The key functions you are likely to need or their suffixed versions are applyBottomUp and applyBottomUp2 and listifyDepth",
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "Schemes",
          "package": "alloy",
          "partial": "Schemes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function that applies to a particular type (\u003ccode\u003es\u003c/code\u003e), automatically\n applies that function to every instance of \u003ccode\u003es\u003c/code\u003e in a larger structure of\n type \u003ccode\u003et\u003c/code\u003e, performing the transformations in a bottom-up fashion.  It does a\n depth first traversal in order of a constructor's children, descending\n first and applying the function afterwards on the way back up.\n\u003c/p\u003e\u003cp\u003eThis is equivalent to SYB's everywhere function, as it applies the function\n everywhere it can throughout the data structure.  The function will not be applied\n to the results of your transformation, so the function cannot end up in infinite\n loop (unless the value you apply the function to is infinite!).\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUp",
          "package": "alloy",
          "signature": "(s -\u003e s) -\u003e t -\u003e t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUp",
          "type": "function"
        },
        "index": {
          "description": "Given function that applies to particular type automatically applies that function to every instance of in larger structure of type performing the transformations in bottom-up fashion It does depth first traversal in order of constructor children descending first and applying the function afterwards on the way back up This is equivalent to SYB everywhere function as it applies the function everywhere it can throughout the data structure The function will not be applied to the results of your transformation so the function cannot end up in infinite loop unless the value you apply the function to is infinite",
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUp",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "(s-\u003es)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eapplyBottomUp\u003c/a\u003e\u003c/code\u003e, but applies both functions whereever it can in the\n data structure.  It is very important that \u003ccode\u003esA\u003c/code\u003e is not the same type as\n \u003ccode\u003esB\u003c/code\u003e -- odd results will occur if they are the same type.  It is perfectly\n valid for \u003ccode\u003esA\u003c/code\u003e to contain \u003ccode\u003esB\u003c/code\u003e or vice versa; in this case, the smaller\n type will be processed first (as this is a bottom-up traversal) and the\n larger type processed later on in the ascent (towards the root) of the\n tree.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUp2",
          "package": "alloy",
          "signature": "(sA -\u003e sA) -\u003e (sB -\u003e sB) -\u003e t -\u003e t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUp2",
          "type": "function"
        },
        "index": {
          "description": "As applyBottomUp but applies both functions whereever it can in the data structure It is very important that sA is not the same type as sB odd results will occur if they are the same type It is perfectly valid for sA to contain sB or vice versa in this case the smaller type will be processed first as this is bottom-up traversal and the larger type processed later on in the ascent towards the root of the tree",
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUp2",
          "normalized": "(a-\u003ea)-\u003e(b-\u003eb)-\u003ec-\u003ec",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "(sA-\u003esA)-\u003e(sB-\u003esB)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpA",
          "package": "alloy",
          "signature": "f (s -\u003e s) -\u003e t -\u003e f t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUpA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpA",
          "normalized": "a(b-\u003eb)-\u003ec-\u003ea c",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "f(s-\u003es)-\u003et-\u003ef t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpA2",
          "package": "alloy",
          "signature": "f (sA -\u003e sA) -\u003e f (sB -\u003e sB) -\u003e t -\u003e f t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUpA2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpA2",
          "normalized": "a(b-\u003eb)-\u003ea(c-\u003ec)-\u003ed-\u003ea d",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "f(sA-\u003esA)-\u003ef(sB-\u003esB)-\u003et-\u003ef t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUpA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpM",
          "package": "alloy",
          "signature": "(s -\u003e m s) -\u003e t -\u003e m t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUpM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "(s-\u003em s)-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpM2",
          "package": "alloy",
          "signature": "(sA -\u003e m sA) -\u003e (sB -\u003e m sB) -\u003e t -\u003e m t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUpM2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpM2",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003ed-\u003eb d",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "(sA-\u003em sA)-\u003e(sB-\u003em sB)-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUpM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpMRoute",
          "package": "alloy",
          "signature": "((s, Route s t) -\u003e m s) -\u003e t -\u003e m t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUpMRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpMRoute",
          "normalized": "((a,Route a b)-\u003ec a)-\u003eb-\u003ec b",
          "package": "alloy",
          "partial": "Bottom Up MRoute",
          "signature": "((s,Route s t)-\u003em s)-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUpMRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpMRoute2",
          "package": "alloy",
          "signature": "((sA, Route sA t) -\u003e m sA) -\u003e ((sB, Route sB t) -\u003e m sB) -\u003e t -\u003e m t",
          "source": "src/Data-Generics-Alloy-Schemes.html#applyBottomUpMRoute2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "applyBottomUpMRoute2",
          "normalized": "((a,Route a b)-\u003ec a)-\u003e((d,Route d b)-\u003ec d)-\u003eb-\u003ec b",
          "package": "alloy",
          "partial": "Bottom Up MRoute",
          "signature": "((sA,Route sA t)-\u003em sA)-\u003e((sB,Route sB t)-\u003em sB)-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:applyBottomUpMRoute2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a monadic function that operates on items of type \u003ccode\u003es\u003c/code\u003e (without modifying\n them), applies the function to all items of types \u003ccode\u003es\u003c/code\u003e within an item of type\n \u003ccode\u003et\u003c/code\u003e, in depth-first order.\n\u003c/p\u003e\u003cp\u003eThis can be used, for example, to perform checks on items in an error monad,\n or to accumulate information in a state monad, or to print out the structure\n in a writer or IO monad.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "checkDepthM",
          "package": "alloy",
          "signature": "(s -\u003e m ()) -\u003e t -\u003e m ()",
          "source": "src/Data-Generics-Alloy-Schemes.html#checkDepthM",
          "type": "function"
        },
        "index": {
          "description": "Given monadic function that operates on items of type without modifying them applies the function to all items of types within an item of type in depth-first order This can be used for example to perform checks on items in an error monad or to accumulate information in state monad or to print out the structure in writer or IO monad",
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "checkDepthM",
          "normalized": "(a-\u003eb())-\u003ec-\u003eb()",
          "package": "alloy",
          "partial": "Depth",
          "signature": "(s-\u003em())-\u003et-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:checkDepthM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "checkDepthM2",
          "package": "alloy",
          "signature": "(r -\u003e m ()) -\u003e (s -\u003e m ()) -\u003e t -\u003e m ()",
          "source": "src/Data-Generics-Alloy-Schemes.html#checkDepthM2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "checkDepthM2",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003ed-\u003eb()",
          "package": "alloy",
          "partial": "Depth",
          "signature": "(r-\u003em())-\u003e(s-\u003em())-\u003et-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:checkDepthM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function that examines a type \u003ccode\u003es\u003c/code\u003e and gives an answer (True to include\n the item in the list, False to drop it), finds all items of type \u003ccode\u003es\u003c/code\u003e in some\n larger item (of type \u003ccode\u003et\u003c/code\u003e) that satisfy this function, listed in depth-first\n order.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "listifyDepth",
          "package": "alloy",
          "signature": "(s -\u003e Bool) -\u003e t -\u003e [s]",
          "source": "src/Data-Generics-Alloy-Schemes.html#listifyDepth",
          "type": "function"
        },
        "index": {
          "description": "Given function that examines type and gives an answer True to include the item in the list False to drop it finds all items of type in some larger item of type that satisfy this function listed in depth-first order",
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "listifyDepth",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e[a]",
          "package": "alloy",
          "partial": "Depth",
          "signature": "(s-\u003eBool)-\u003et-\u003e[s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:listifyDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "listifyDepthRoute",
          "package": "alloy",
          "signature": "((s, Route s t) -\u003e Bool) -\u003e t -\u003e [(s, Route s t)]",
          "source": "src/Data-Generics-Alloy-Schemes.html#listifyDepthRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "listifyDepthRoute",
          "normalized": "((a,Route a b)-\u003eBool)-\u003eb-\u003e[(a,Route a b)]",
          "package": "alloy",
          "partial": "Depth Route",
          "signature": "((s,Route s t)-\u003eBool)-\u003et-\u003e[(s,Route s t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:listifyDepthRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of operations and a modifier function, augments that modifier\n function to first descend into the value before then applying the modifier function.\n  This can be used to perform a bottom-up depth-first traversal of a structure\n (see the implementation of \u003ccode\u003e\u003ca\u003eapplyBottomUp\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eYou are unlikely to need these functions much yourself; either use \u003ccode\u003e\u003ca\u003eapplyBottomUp\u003c/a\u003e\u003c/code\u003e\n and similar to apply a function everywhere, or if you need more fine-grained\n control over the descent, it is usually better to handle the descent in your\n own functions.\n\u003c/p\u003e",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUp",
          "package": "alloy",
          "signature": "opT -\u003e (t -\u003e t) -\u003e t -\u003e t",
          "source": "src/Data-Generics-Alloy-Schemes.html#makeBottomUp",
          "type": "function"
        },
        "index": {
          "description": "Given set of operations and modifier function augments that modifier function to first descend into the value before then applying the modifier function This can be used to perform bottom-up depth-first traversal of structure see the implementation of applyBottomUp You are unlikely to need these functions much yourself either use applyBottomUp and similar to apply function everywhere or if you need more fine-grained control over the descent it is usually better to handle the descent in your own functions",
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUp",
          "normalized": "a-\u003e(b-\u003eb)-\u003eb-\u003eb",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "opT-\u003e(t-\u003et)-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:makeBottomUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUpA",
          "package": "alloy",
          "signature": "opT f -\u003e f (t -\u003e t) -\u003e t -\u003e f t",
          "source": "src/Data-Generics-Alloy-Schemes.html#makeBottomUpA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUpA",
          "normalized": "a b-\u003eb(c-\u003ec)-\u003ec-\u003eb c",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "opT f-\u003ef(t-\u003et)-\u003et-\u003ef t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:makeBottomUpA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUpM",
          "package": "alloy",
          "signature": "opT m -\u003e (t -\u003e m t) -\u003e t -\u003e m t",
          "source": "src/Data-Generics-Alloy-Schemes.html#makeBottomUpM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUpM",
          "normalized": "a b-\u003e(c-\u003eb c)-\u003ec-\u003eb c",
          "package": "alloy",
          "partial": "Bottom Up",
          "signature": "opT m-\u003e(t-\u003em t)-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:makeBottomUpM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUpMRoute",
          "package": "alloy",
          "signature": "opT m outer -\u003e ((t, Route t outer) -\u003e m t) -\u003e (t, Route t outer) -\u003e m t",
          "source": "src/Data-Generics-Alloy-Schemes.html#makeBottomUpMRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Generics Alloy Schemes",
          "module": "Data.Generics.Alloy.Schemes",
          "name": "makeBottomUpMRoute",
          "normalized": "a b c-\u003e((d,Route d c)-\u003eb d)-\u003e(d,Route d c)-\u003eb d",
          "package": "alloy",
          "partial": "Bottom Up MRoute",
          "signature": "opT m outer-\u003e((t,Route t outer)-\u003em t)-\u003e(t,Route t outer)-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy-Schemes.html#v:makeBottomUpMRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlloy is a generic programming system for automatically traversing data\n structures, operating on specific types within that structure.\n\u003c/p\u003e\u003cp\u003eTo use the Alloy module, you can either use the helper functions from the\n \u003ca\u003eData.Generics.Alloy.Schemes\u003c/a\u003e module or the lower-level functions from\n \u003ca\u003eData.Generics.Alloy.Pure\u003c/a\u003e and \u003ca\u003eData.Generics.Alloy.Effect\u003c/a\u003e.  The tutorial\n (\u003ca\u003ehttp://twistedsquare.com/Alloy-Tutorial.pdf\u003c/a\u003e) provides examples of each\n of these.  The tutorial also explains how to use the \u003ca\u003eData.Generics.Alloy.GenInstances\u003c/a\u003e\n module to generate the instances that Alloy needs for your data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy",
          "name": "Alloy",
          "package": "alloy",
          "source": "src/Data-Generics-Alloy.html",
          "type": "module"
        },
        "index": {
          "description": "Alloy is generic programming system for automatically traversing data structures operating on specific types within that structure To use the Alloy module you can either use the helper functions from the Data.Generics.Alloy.Schemes module or the lower-level functions from Data.Generics.Alloy.Pure and Data.Generics.Alloy.Effect The tutorial http twistedsquare.com Alloy-Tutorial.pdf provides examples of each of these The tutorial also explains how to use the Data.Generics.Alloy.GenInstances module to generate the instances that Alloy needs for your data",
          "hierarchy": "Data Generics Alloy",
          "module": "Data.Generics.Alloy",
          "name": "Alloy",
          "package": "alloy",
          "partial": "Alloy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy/docs/Data-Generics-Alloy.html#"
      }
    }
  ]
]