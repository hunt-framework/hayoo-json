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
        "word": "Cardinality"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo main assumptions (and constraints) of this module:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Cardinality can't be negative.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e construction it is always refined by growing. F.e.,\n if \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (7, ref_f_1)\u003c/code\u003e refines to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (x, ref_f_2)\u003c/code\u003e, then\n \u003ccode\u003ex\u003c/code\u003e SHOULD NEVER be less then \u003ccode\u003e7\u003c/code\u003e.\n On this assumption relies heavily functions \u003ccode\u003e\u003ccode\u003e\u003ca\u003elazyIsZeroLC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elazyCompare2LCs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddLCToLC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and also almost every refinement routine.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "Cardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html",
          "type": "module"
        },
        "index": {
          "description": "Two main assumptions and constraints of this module Cardinality can be negative For refinableC construction it is always refined by growing F.e if refinableC ref refines to refinableC ref then SHOULD NEVER be less then On this assumption relies heavily functions lazyIsZeroLC lazyCompare2LCs addLCToLC and also almost every refinement routine",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "Cardinality",
          "package": "Cardinality",
          "partial": "Cardinality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "BoundaryPreciseCardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#BoundaryPreciseCardinality",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "BoundaryPreciseCardinality",
          "package": "Cardinality",
          "partial": "Boundary Precise Cardinality",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:BoundaryPreciseCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "CardinalityRefinementState",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#CardinalityRefinementState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "CardinalityRefinementState",
          "package": "Cardinality",
          "partial": "Cardinality Refinement State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:CardinalityRefinementState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "ContinueCounting_DoWe",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#ContinueCounting_DoWe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "ContinueCounting_DoWe",
          "package": "Cardinality",
          "partial": "Continue Counting Do We",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:ContinueCounting_DoWe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn example of this is \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength2\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "ContinueRefiningCardinalityUntil",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#ContinueRefiningCardinalityUntil",
          "type": "type"
        },
        "index": {
          "description": "An example of this is length2 function",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "ContinueRefiningCardinalityUntil",
          "package": "Cardinality",
          "partial": "Continue Refining Cardinality Until",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:ContinueRefiningCardinalityUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "CurrentNotFinalPreciseCardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#CurrentNotFinalPreciseCardinality",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "CurrentNotFinalPreciseCardinality",
          "package": "Cardinality",
          "partial": "Current Not Final Precise Cardinality",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:CurrentNotFinalPreciseCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasCard\u003c/code\u003e = \"Has cardinality\". In other words, \"it's possible to measure\n current count of elements for this container\"\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "HasCard",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#HasCard",
          "type": "class"
        },
        "index": {
          "description": "HasCard Has cardinality In other words it possible to measure current count of elements for this container",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "HasCard",
          "package": "Cardinality",
          "partial": "Has Card",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:HasCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasCardT\u003c/code\u003e = \"Has cardinality (for container types of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\".\n In other words, \"it's possible to measure\n current count of elements for this container (for container types of\n kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\"\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "HasCardT",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#HasCardT",
          "type": "class"
        },
        "index": {
          "description": "HasCardT Has cardinality for container types of kind In other words it possible to measure current count of elements for this container for container types of kind",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "HasCardT",
          "package": "Cardinality",
          "partial": "Has Card",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:HasCardT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn other words: count of elements in a container,\n with an opportunity not to refine the whole content of the container\n (and the container's structure).\n\u003c/p\u003e\u003cp\u003eConstructors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePreciseCardinality\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCardinalityRefinementState\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "LazyCardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#LazyCardinality",
          "type": "data"
        },
        "index": {
          "description": "In other words count of elements in container with an opportunity not to refine the whole content of the container and the container structure Constructors infiniteC preciseC PreciseCardinality refinableC CardinalityRefinementState",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "LazyCardinality",
          "package": "Cardinality",
          "partial": "Lazy Cardinality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:LazyCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount of elements in container. It's always positive or zero.\n\u003c/p\u003e\u003cp\u003eIt would be best here to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead, however, with \u003ccode\u003eInteger\u003c/code\u003e\n it's easier to catch the error of going down below zero (in case\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e 0-1==4294967295\u003c/code\u003e ).\n\u003c/p\u003e\u003cp\u003eHowever it is decided not to allow the direct use of \u003ccode\u003e\u003ccode\u003ePreciseC\u003c/code\u003e\u003c/code\u003e data\n constructor, but to wrap it into function \u003ccode\u003e\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which guards from\n the attemts to conctruct negative cardinality (by throwing an error).\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "PreciseCardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-Cardinality.html#PreciseCardinality",
          "type": "type"
        },
        "index": {
          "description": "Count of elements in container It always positive or zero It would be best here to use Word32 instead however with Integer it easier to catch the error of going down below zero in case of Word32 However it is decided not to allow the direct use of PreciseC data constructor but to wrap it into function preciseC which guards from the attemts to conctruct negative cardinality by throwing an error",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "PreciseCardinality",
          "package": "Cardinality",
          "partial": "Precise Cardinality",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:PreciseCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor case when adding up 2 refinables, if both of them sooner or later\n refines to \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, then one that returns infinity earlier is\n recommended to put as a first term. Infinity + any LazyCardinality\n = infinity. Another recommendation would be to put\n refinable that's easier to compute as a first term.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "addLCToLC",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e LazyCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#addLCToLC",
          "type": "function"
        },
        "index": {
          "description": "For case when adding up refinables if both of them sooner or later refines to infiniteC then one that returns infinity earlier is recommended to put as first term Infinity any LazyCardinality infinity Another recommendation would be to put refinable that easier to compute as first term",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "addLCToLC",
          "normalized": "LazyCardinality-\u003eLazyCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "LCTo LC",
          "signature": "LazyCardinality-\u003eLazyCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:addLCToLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "addPCToLC",
          "package": "Cardinality",
          "signature": "PreciseCardinality -\u003e LazyCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#addPCToLC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "addPCToLC",
          "normalized": "PreciseCardinality-\u003eLazyCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "PCTo LC",
          "signature": "PreciseCardinality-\u003eLazyCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:addPCToLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for instance of Ord typeclass.\n\u003c/p\u003e\u003cp\u003eTogether with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e returns also probably refined cardinalities\n for reuse.\n\u003c/p\u003e\u003cp\u003eWARNING!!! When comparing \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n , it results in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (less than)!\n While comparing \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e `almostStrictCompare2LCs` \u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e ==\n \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n That's the reason for an \u003cem\u003ealmost-\u003c/em\u003e prefix in function name.\n If there is a probability that refinement of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e may evaluate to \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and it's important to you,\n that infinities are equal, then before comparing this refinable,\n use \u003ccode\u003e\u003ca\u003erefineCRS_TillEnd\u003c/a\u003e\u003c/code\u003e on it. That's laziness.\n\u003c/p\u003e\u003cp\u003eTrying to compare 2 \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es that are actually infinite, but don't\n use \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e will hang\n the system (the same as if you try to determine length of an infinite\n list).\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "almostStrictCompare2LCs",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e LazyCardinality -\u003e (Ordering, LazyCardinality, LazyCardinality)",
          "source": "src/Data-Cardinality-Cardinality.html#almostStrictCompare2LCs",
          "type": "function"
        },
        "index": {
          "description": "Used for instance of Ord typeclass Together with Ordering returns also probably refined cardinalities for reuse WARNING When comparing refinableC with infiniteC it results in LT less than While comparing infiniteC almostStrictCompare2LCs infiniteC EQ That the reason for an almost prefix in function name If there is probability that refinement of refinableC may evaluate to infiniteC and it important to you that infinities are equal then before comparing this refinable use refineCRS TillEnd on it That laziness Trying to compare refinableC that are actually infinite but don use infiniteC will hang the system the same as if you try to determine length of an infinite list",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "almostStrictCompare2LCs",
          "normalized": "LazyCardinality-\u003eLazyCardinality-\u003e(Ordering,LazyCardinality,LazyCardinality)",
          "package": "Cardinality",
          "partial": "Strict Compare LCs",
          "signature": "LazyCardinality-\u003eLazyCardinality-\u003e(Ordering,LazyCardinality,LazyCardinality)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:almostStrictCompare2LCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf",
          "package": "Cardinality",
          "signature": "a -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf",
          "normalized": "a-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of",
          "signature": "a-\u003eLazyCardinality",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOfT",
          "package": "Cardinality",
          "signature": "t elem -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOfT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOfT",
          "normalized": "a b-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of",
          "signature": "t elem-\u003eLazyCardinality",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOfT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_EmptySet",
          "package": "Cardinality",
          "signature": "EmptySet a -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_EmptySet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_EmptySet",
          "normalized": "EmptySet a-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of Empty Set",
          "signature": "EmptySet a-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_EmptySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Identity1",
          "package": "Cardinality",
          "signature": "Identity a -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_Identity1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Identity1",
          "normalized": "Identity a-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of Identity",
          "signature": "Identity a-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Identity1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefinable starting from 0, uses \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength2\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_List",
          "package": "Cardinality",
          "signature": "[a] -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_List",
          "type": "function"
        },
        "index": {
          "description": "Refinable starting from uses length2",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_List",
          "normalized": "[a]-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of List",
          "signature": "[a]-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot refinable, since \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a strict structure.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Map",
          "package": "Cardinality",
          "signature": "Map k e -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_Map",
          "type": "function"
        },
        "index": {
          "description": "Not refinable since Map is strict structure",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Map",
          "normalized": "Map a b-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of Map",
          "signature": "Map k e-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Maybe",
          "package": "Cardinality",
          "signature": "Maybe a -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_Maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Maybe",
          "normalized": "Maybe a-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of Maybe",
          "signature": "Maybe a-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefinable starting from 1.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_NeverEmptyList",
          "package": "Cardinality",
          "signature": "NeverEmptyList k -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_NeverEmptyList",
          "type": "function"
        },
        "index": {
          "description": "Refinable starting from",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_NeverEmptyList",
          "normalized": "NeverEmptyList a-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of Never Empty List",
          "signature": "NeverEmptyList k-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_NeverEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Unity",
          "package": "Cardinality",
          "signature": "() -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#cardOf_Unity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "cardOf_Unity",
          "normalized": "()-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Of Unity",
          "signature": "()-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Unity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "compare2Refinements",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e CardinalityRefinementState -\u003e (Ordering, LazyCardinality, LazyCardinality)",
          "source": "src/Data-Cardinality-Cardinality.html#compare2Refinements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "compare2Refinements",
          "normalized": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(Ordering,LazyCardinality,LazyCardinality)",
          "package": "Cardinality",
          "partial": "Refinements",
          "signature": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(Ordering,LazyCardinality,LazyCardinality)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:compare2Refinements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "crsRefinementStep",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#crsRefinementStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "crsRefinementStep",
          "normalized": "CardinalityRefinementState-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Refinement Step",
          "signature": "CardinalityRefinementState-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:crsRefinementStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor \u003ccode\u003eequalize2Refinements (m, ref_f_1) (n, ref_f_2)\u003c/code\u003e finishes when m == n.\n Else refines them. Another termination condition is when in result of\n refinement one of cardinalities becomes final (not \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "equalize2Refinements",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e CardinalityRefinementState -\u003e (LazyCardinality, LazyCardinality)",
          "source": "src/Data-Cardinality-Cardinality.html#equalize2Refinements",
          "type": "function"
        },
        "index": {
          "description": "For equalize2Refinements ref ref finishes when Else refines them Another termination condition is when in result of refinement one of cardinalities becomes final not refinableC",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "equalize2Refinements",
          "normalized": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(LazyCardinality,LazyCardinality)",
          "package": "Cardinality",
          "partial": "Refinements",
          "signature": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(LazyCardinality,LazyCardinality)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:equalize2Refinements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eF.e., \u003ccode\u003e[1..]\u003c/code\u003e list has such cardinality.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "infiniteC",
          "package": "Cardinality",
          "signature": "LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#infiniteC",
          "type": "function"
        },
        "index": {
          "description": "LazyCardinality constructor F.e list has such cardinality",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "infiniteC",
          "package": "Cardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:infiniteC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWon't refine refinables. According to 2nd assumption of the module:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (m, _) `lazyCompare2LCs` \u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e n\u003c/pre\u003e\u003cp\u003eequals to \u003ccode\u003eJust GT\u003c/code\u003e if \u003ccode\u003em \u003e n\u003c/code\u003e , and \u003ccode\u003eNothing\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "lazyCompare2LCs",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e LazyCardinality -\u003e Maybe Ordering",
          "source": "src/Data-Cardinality-Cardinality.html#lazyCompare2LCs",
          "type": "function"
        },
        "index": {
          "description": "Won refine refinables According to nd assumption of the module refinableC lazyCompare2LCs preciseC equals to Just GT if and Nothing otherwise",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "lazyCompare2LCs",
          "normalized": "LazyCardinality-\u003eLazyCardinality-\u003eMaybe Ordering",
          "package": "Cardinality",
          "partial": "Compare LCs",
          "signature": "LazyCardinality-\u003eLazyCardinality-\u003eMaybe Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:lazyCompare2LCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eNothing\u003c/code\u003e, ONLY if LC is \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (0, _)\u003c/code\u003e\n (according to 2nd assumption of the module). Returns \u003ccode\u003eJust True\u003c/code\u003e\n only for \u003ccode\u003e\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "lazyIsZeroLC",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e Maybe Bool",
          "source": "src/Data-Cardinality-Cardinality.html#lazyIsZeroLC",
          "type": "function"
        },
        "index": {
          "description": "Returns Nothing ONLY if LC is refinableC according to nd assumption of the module Returns Just True only for preciseC",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "lazyIsZeroLC",
          "normalized": "LazyCardinality-\u003eMaybe Bool",
          "package": "Cardinality",
          "partial": "Is Zero LC",
          "signature": "LazyCardinality-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:lazyIsZeroLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList length of controlable greediness.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "length2",
          "package": "Cardinality",
          "signature": "[a] -\u003e ContinueRefiningCardinalityUntil",
          "source": "src/Data-Cardinality-Cardinality.html#length2",
          "type": "function"
        },
        "index": {
          "description": "List length of controlable greediness",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "length2",
          "normalized": "[a]-\u003eContinueRefiningCardinalityUntil",
          "package": "Cardinality",
          "signature": "[a]-\u003eContinueRefiningCardinalityUntil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:length2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e constructor. If given negative value, raises error.\n\u003c/p\u003e\u003cp\u003eF.e., the tuple \u003ccode\u003e(5,6)\u003c/code\u003e has a precise cardinality 2.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "preciseC",
          "package": "Cardinality",
          "signature": "PreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#preciseC",
          "type": "function"
        },
        "index": {
          "description": "LazyCardinality constructor If given negative value raises error F.e the tuple has precise cardinality",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "preciseC",
          "normalized": "PreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "signature": "PreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:preciseC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eFor lists it happens, that we do not want to count all the elements\n of a container,\n but want to count them until some lower boundary. For example,\n I do not want to know the length of the list (which involves taking\n each element of it, and counting it in) to reason about whether\n it's content fit into the \u003ccode\u003e(,,)\u003c/code\u003e data constructor. For this\n case I only need to count till 3rd element and check, if list is\n continued. It's actual especially, when dealing with infinite lists\n or with lists, whose reading may block.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e(refinableC (x0, refine_f))\u003c/code\u003e important rules:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If \u003ccode\u003e(refine_f x0 (\u003c= 5))\u003c/code\u003e evaluates to another \u003ccode\u003erefinableC\u003c/code\u003e, then\n it is not fully refined, but (at least) \u003ccode\u003e5\u003c/code\u003e is achieved (the precise\n cardinality is \u003ccode\u003e\u003e= 5\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ex0\u003c/code\u003e is \u003ccode\u003e10\u003c/code\u003e and \u003ccode\u003e(refine_f 10 (\u003c= 15))\u003c/code\u003e returned\n \u003ccode\u003e(refinableC (17, refine_f_2))\u003c/code\u003e, then it is known, that precise\n cardinality is already \u003e= \u003ccode\u003e10 + 7\u003c/code\u003e. In sight of \u003ccode\u003erefine_f\u003c/code\u003e there\n SHOULD be everything except for what's already counted in \u003ccode\u003ex0\u003c/code\u003e\n (which is \u003ccode\u003e10\u003c/code\u003e), and in sight of \u003ccode\u003erefine_f_2\u003c/code\u003e there should be even\n less by \u003ccode\u003e7\u003c/code\u003e elements comparing to \u003ccode\u003erefine_f\u003c/code\u003e. So if total cardinality was\n \u003ccode\u003e25\u003c/code\u003e, then \u003ccode\u003e(refine_f_2 17 (\u003c= 30))\u003c/code\u003e MUST return \u003ccode\u003epreciseC 25\u003c/code\u003e, to make\n \u003ccode\u003e10 + 7 + 8 = 25\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The theatment of the first argument of refinement function \u003ccode\u003erefine_f\u003c/code\u003e\n must be relative. For example, given total count of elements \u003ccode\u003e= 25\u003c/code\u003e ,\n and \u003ccode\u003ex0 = 20\u003c/code\u003e - these 20 elements are already counted, and in sight of\n \u003ccode\u003erefine_f\u003c/code\u003e there are only 5 last elements.\n Then \u003ccode\u003erefine_f 20 (\u003c= 26)\u003c/code\u003e will result in \u003ccode\u003epreciseC 25\u003c/code\u003e, but(!)\n \u003ccode\u003erefine_f 10 (\u003c= 16)\u003c/code\u003e MUST result in \u003ccode\u003epreciseC 15\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eRecomendations:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If subject has infinite cardinality, it's best to determine\n it's cardinality as \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e at early stages and\n avoid using \u003ccode\u003erefinableC\u003c/code\u003e for it.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refinableC",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refinableC",
          "type": "function"
        },
        "index": {
          "description": "LazyCardinality constructor For lists it happens that we do not want to count all the elements of container but want to count them until some lower boundary For example do not want to know the length of the list which involves taking each element of it and counting it in to reason about whether it content fit into the data constructor For this case only need to count till rd element and check if list is continued It actual especially when dealing with infinite lists or with lists whose reading may block For refinableC x0 refine important rules If refine x0 evaluates to another refinableC then it is not fully refined but at least is achieved the precise cardinality is If x0 is and refine returned refinableC refine then it is known that precise cardinality is already In sight of refine there SHOULD be everything except for what already counted in x0 which is and in sight of refine there should be even less by elements comparing to refine So if total cardinality was then refine MUST return preciseC to make The theatment of the first argument of refinement function refine must be relative For example given total count of elements and x0 these elements are already counted and in sight of refine there are only last elements Then refine will result in preciseC but refine MUST result in preciseC Recomendations If subject has infinite cardinality it best to determine it cardinality as infiniteC at early stages and avoid using refinableC for it",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refinableC",
          "normalized": "CardinalityRefinementState-\u003eLazyCardinality",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refinableC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_Till",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineCRS_Till",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_Till",
          "normalized": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "CRS Till",
          "signature": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_Till"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't use it on infinite refinables not measured with \u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_TillEnd",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineCRS_TillEnd",
          "type": "function"
        },
        "index": {
          "description": "Don use it on infinite refinables not measured with infiniteC",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_TillEnd",
          "normalized": "CardinalityRefinementState-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "CRS Till End",
          "signature": "CardinalityRefinementState-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_TillEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_TillOneAbove",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineCRS_TillOneAbove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_TillOneAbove",
          "normalized": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "CRS Till One Above",
          "signature": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_TillOneAbove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_TillOneBelow",
          "package": "Cardinality",
          "signature": "CardinalityRefinementState -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineCRS_TillOneBelow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineCRS_TillOneBelow",
          "normalized": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "CRS Till One Below",
          "signature": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_TillOneBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineCRS_Till\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTill",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineTill",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around refineCRS Till",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTill",
          "normalized": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Till",
          "signature": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineCRS_TillEnd\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTillEnd",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineTillEnd",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around refineCRS TillEnd",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTillEnd",
          "normalized": "LazyCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Till End",
          "signature": "LazyCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTillEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineTillOneAbove\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTillOneAbove",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineTillOneAbove",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around refineTillOneAbove",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTillOneAbove",
          "normalized": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Till One Above",
          "signature": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTillOneAbove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineTillOneBelow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTillOneBelow",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refineTillOneBelow",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around refineTillOneBelow",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refineTillOneBelow",
          "normalized": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Till One Below",
          "signature": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTillOneBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.Cardinality",
          "name": "refinementState",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e Maybe CardinalityRefinementState",
          "source": "src/Data-Cardinality-Cardinality.html#refinementState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refinementState",
          "normalized": "LazyCardinality-\u003eMaybe CardinalityRefinementState",
          "package": "Cardinality",
          "partial": "State",
          "signature": "LazyCardinality-\u003eMaybe CardinalityRefinementState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refinementState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecrsRefinementStep\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "refinementStep",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#refinementStep",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around crsRefinementStep",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "refinementStep",
          "normalized": "LazyCardinality-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "Step",
          "signature": "LazyCardinality-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refinementStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for Show typeclass instaniation. Here \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e isn't refined.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "showLazy",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e String",
          "source": "src/Data-Cardinality-Cardinality.html#showLazy",
          "type": "function"
        },
        "index": {
          "description": "Used for Show typeclass instaniation Here refinableC isn refined",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "showLazy",
          "normalized": "LazyCardinality-\u003eString",
          "package": "Cardinality",
          "partial": "Lazy",
          "signature": "LazyCardinality-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:showLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHere \u003ccode\u003e \u003ccode\u003e\u003ca\u003erefineCRS_TillEnd\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is applied to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "showStrict",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e String",
          "source": "src/Data-Cardinality-Cardinality.html#showStrict",
          "type": "function"
        },
        "index": {
          "description": "Here refineCRS TillEnd is applied to refinableC argument",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "showStrict",
          "normalized": "LazyCardinality-\u003eString",
          "package": "Cardinality",
          "partial": "Strict",
          "signature": "LazyCardinality-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:showStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efoldl \u003ccode\u003e\u003ca\u003eaddLCToLC\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eSee recommendations by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddLCToLC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.Cardinality",
          "name": "sumLCs",
          "package": "Cardinality",
          "signature": "[LazyCardinality] -\u003e LazyCardinality",
          "source": "src/Data-Cardinality-Cardinality.html#sumLCs",
          "type": "function"
        },
        "index": {
          "description": "foldl addLCToLC See recommendations by addLCToLC",
          "hierarchy": "Data Cardinality Cardinality",
          "module": "Data.Cardinality.Cardinality",
          "name": "sumLCs",
          "normalized": "[LazyCardinality]-\u003eLazyCardinality",
          "package": "Cardinality",
          "partial": "LCs",
          "signature": "[LazyCardinality]-\u003eLazyCardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:sumLCs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-CardinalityRange.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange",
          "package": "Cardinality",
          "partial": "Cardinality Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor: \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecardinalityRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCardinalityRange_From\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCardinalityRange_To\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-CardinalityRange.html#CardinalityRange",
          "type": "data"
        },
        "index": {
          "description": "Constructor cardinalityRange CardinalityRange From CardinalityRange To",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange",
          "package": "Cardinality",
          "partial": "Cardinality Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:CardinalityRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange_From",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-CardinalityRange.html#CardinalityRange_From",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange_From",
          "package": "Cardinality",
          "partial": "Cardinality Range From",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:CardinalityRange_From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange_To",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-CardinalityRange.html#CardinalityRange_To",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "CardinalityRange_To",
          "package": "Cardinality",
          "partial": "Cardinality Range To",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:CardinalityRange_To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError, that may occur, when performing \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecompare2CRs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "Compare2CRsError",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-CardinalityRange.html#Compare2CRsError",
          "type": "data"
        },
        "index": {
          "description": "Error that may occur when performing compare2CRs",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "Compare2CRsError",
          "package": "Cardinality",
          "partial": "Compare CRs Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:Compare2CRsError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCompare2CRsError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "FirstOrSecond",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-CardinalityRange.html#FirstOrSecond",
          "type": "data"
        },
        "index": {
          "description": "Used in Compare2CRsError",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "FirstOrSecond",
          "package": "Cardinality",
          "partial": "First Or Second",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:FirstOrSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "First",
          "package": "Cardinality",
          "signature": "First",
          "source": "src/Data-Cardinality-CardinalityRange.html#FirstOrSecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "First",
          "package": "Cardinality",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "LowerBoundaryAfterHigher",
          "package": "Cardinality",
          "signature": "LowerBoundaryAfterHigher FirstOrSecond CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#Compare2CRsError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "LowerBoundaryAfterHigher",
          "package": "Cardinality",
          "partial": "Lower Boundary After Higher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:LowerBoundaryAfterHigher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "Second",
          "package": "Cardinality",
          "signature": "Second",
          "source": "src/Data-Cardinality-CardinalityRange.html#FirstOrSecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "Second",
          "package": "Cardinality",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e fits in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCardinalityRange\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e?\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cFitsInCR",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e CardinalityRange -\u003e Bool",
          "source": "src/Data-Cardinality-CardinalityRange.html#cFitsInCR",
          "type": "function"
        },
        "index": {
          "description": "LazyCardinality fits in CardinalityRange",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cFitsInCR",
          "normalized": "LazyCardinality-\u003eCardinalityRange-\u003eBool",
          "package": "Cardinality",
          "partial": "Fits In CR",
          "signature": "LazyCardinality-\u003eCardinalityRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cFitsInCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot prototype for all subsequent \"FitsIn\" functions. Returns probably\n refined cardinality and range, which is useful for reuse.\n If returns \u003ccode\u003eEQ\u003c/code\u003e then subject cardinality\n is between boundaries (including) of cardinality range.\n\u003c/p\u003e\u003cp\u003eUses \u003ccode\u003e\u003ccode\u003e\u003ca\u003ealmostStrictCompare2LCs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cFitsInCR_Proto",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e CardinalityRange -\u003e (Ordering, LazyCardinality, CardinalityRange)",
          "source": "src/Data-Cardinality-CardinalityRange.html#cFitsInCR_Proto",
          "type": "function"
        },
        "index": {
          "description": "Root prototype for all subsequent FitsIn functions Returns probably refined cardinality and range which is useful for reuse If returns EQ then subject cardinality is between boundaries including of cardinality range Uses almostStrictCompare2LCs function",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cFitsInCR_Proto",
          "normalized": "LazyCardinality-\u003eCardinalityRange-\u003e(Ordering,LazyCardinality,CardinalityRange)",
          "package": "Cardinality",
          "partial": "Fits In CR Proto",
          "signature": "LazyCardinality-\u003eCardinalityRange-\u003e(Ordering,LazyCardinality,CardinalityRange)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cFitsInCR_Proto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCardinalityRange\u003c/code\u003e data constructor. The range is always including it's\n boundaries. F.e., range\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCardinalityRange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e 1) (\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e 4)\u003c/code\u003e contains\n cardinalities [1,2,3,4].\n First cardinality MUST always be less or equal to second one. However,\n we do not fully guard from such type of error - we do not refine\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, if it participates in the constriction.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cardinalityRange",
          "package": "Cardinality",
          "signature": "CardinalityRange_From -\u003e CardinalityRange_To -\u003e CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#cardinalityRange",
          "type": "function"
        },
        "index": {
          "description": "CardinalityRange data constructor The range is always including it boundaries F.e range CardinalityRange preciseC preciseC contains cardinalities First cardinality MUST always be less or equal to second one However we do not fully guard from such type of error we do not refine refinableC if it participates in the constriction",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cardinalityRange",
          "normalized": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eCardinalityRange",
          "package": "Cardinality",
          "partial": "Range",
          "signature": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eCardinalityRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cardinalityRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is made hard, but fast. It tends to make minimal amount\n of comparisons, reusing refinements.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "compare2CRs",
          "package": "Cardinality",
          "signature": "CardinalityRange -\u003e CardinalityRange -\u003e (Either Compare2CRsError (SetsFit CardinalityRange), CardinalityRange, CardinalityRange)",
          "source": "src/Data-Cardinality-CardinalityRange.html#compare2CRs",
          "type": "function"
        },
        "index": {
          "description": "This function is made hard but fast It tends to make minimal amount of comparisons reusing refinements",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "compare2CRs",
          "normalized": "CardinalityRange-\u003eCardinalityRange-\u003e(Either Compare CRsError(SetsFit CardinalityRange),CardinalityRange,CardinalityRange)",
          "package": "Cardinality",
          "partial": "CRs",
          "signature": "CardinalityRange-\u003eCardinalityRange-\u003e(Either Compare CRsError(SetsFit CardinalityRange),CardinalityRange,CardinalityRange)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:compare2CRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly zero elements.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr0",
          "package": "Cardinality",
          "signature": "CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#cr0",
          "type": "function"
        },
        "index": {
          "description": "Only zero elements",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr0",
          "package": "Cardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or one element.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr0_1",
          "package": "Cardinality",
          "signature": "CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#cr0_1",
          "type": "function"
        },
        "index": {
          "description": "Zero or one element",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr0_1",
          "package": "Cardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr0_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny count of elements.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr0_Inf",
          "package": "Cardinality",
          "signature": "CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#cr0_Inf",
          "type": "function"
        },
        "index": {
          "description": "Any count of elements",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr0_Inf",
          "package": "Cardinality",
          "partial": "Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr0_Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly one element.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr1",
          "package": "Cardinality",
          "signature": "CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#cr1",
          "type": "function"
        },
        "index": {
          "description": "Only one element",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr1",
          "package": "Cardinality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny nonzero count of elements.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr1_Inf",
          "package": "Cardinality",
          "signature": "CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#cr1_Inf",
          "type": "function"
        },
        "index": {
          "description": "Any nonzero count of elements",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr1_Inf",
          "package": "Cardinality",
          "partial": "Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr1_Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr2Tuple",
          "package": "Cardinality",
          "signature": "CardinalityRange -\u003e (CardinalityRange_From, CardinalityRange_From)",
          "source": "src/Data-Cardinality-CardinalityRange.html#cr2Tuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "cr2Tuple",
          "normalized": "CardinalityRange-\u003e(CardinalityRange_From,CardinalityRange_From)",
          "package": "Cardinality",
          "partial": "Tuple",
          "signature": "CardinalityRange-\u003e(CardinalityRange_From,CardinalityRange_From)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr2Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFits\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e of typeclass \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIntersectable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crFitsInCR",
          "package": "Cardinality",
          "signature": "CardinalityRange -\u003e CardinalityRange -\u003e SetsFit CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#crFitsInCR",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around setFits of typeclass Intersectable",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crFitsInCR",
          "normalized": "CardinalityRange-\u003eCardinalityRange-\u003eSetsFit CardinalityRange",
          "package": "Cardinality",
          "partial": "Fits In CR",
          "signature": "CardinalityRange-\u003eCardinalityRange-\u003eSetsFit CardinalityRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crFitsInCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecr0_Inf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crNoConstraint",
          "package": "Cardinality",
          "signature": "CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#crNoConstraint",
          "type": "function"
        },
        "index": {
          "description": "Same as cr0 Inf",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crNoConstraint",
          "package": "Cardinality",
          "partial": "No Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crNoConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete count of elements.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crX",
          "package": "Cardinality",
          "signature": "PreciseCardinality -\u003e CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#crX",
          "type": "function"
        },
        "index": {
          "description": "Concrete count of elements",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crX",
          "normalized": "PreciseCardinality-\u003eCardinalityRange",
          "package": "Cardinality",
          "signature": "PreciseCardinality-\u003eCardinalityRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete range.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crXY",
          "package": "Cardinality",
          "signature": "PreciseCardinality -\u003e PreciseCardinality -\u003e CardinalityRange",
          "source": "src/Data-Cardinality-CardinalityRange.html#crXY",
          "type": "function"
        },
        "index": {
          "description": "concrete range",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "crXY",
          "normalized": "PreciseCardinality-\u003ePreciseCardinality-\u003eCardinalityRange",
          "package": "Cardinality",
          "partial": "XY",
          "signature": "PreciseCardinality-\u003ePreciseCardinality-\u003eCardinalityRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "fitsInCR",
          "package": "Cardinality",
          "signature": "a -\u003e CardinalityRange -\u003e Bool",
          "source": "src/Data-Cardinality-CardinalityRange.html#fitsInCR",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around cFitsInCR",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "fitsInCR",
          "normalized": "a-\u003eCardinalityRange-\u003eBool",
          "package": "Cardinality",
          "partial": "In CR",
          "signature": "a-\u003eCardinalityRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:fitsInCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "fitsInCR_T",
          "package": "Cardinality",
          "signature": "c a -\u003e CardinalityRange -\u003e Bool",
          "source": "src/Data-Cardinality-CardinalityRange.html#fitsInCR_T",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around cFitsInCR",
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "fitsInCR_T",
          "normalized": "a b-\u003eCardinalityRange-\u003eBool",
          "package": "Cardinality",
          "partial": "In CR",
          "signature": "c a-\u003eCardinalityRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:fitsInCR_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.CardinalityRange",
          "name": "lazyVerfyCR",
          "package": "Cardinality",
          "signature": "CardinalityRange_From -\u003e CardinalityRange_To -\u003e Maybe Bool",
          "source": "src/Data-Cardinality-CardinalityRange.html#lazyVerfyCR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality CardinalityRange",
          "module": "Data.Cardinality.CardinalityRange",
          "name": "lazyVerfyCR",
          "normalized": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eMaybe Bool",
          "package": "Cardinality",
          "partial": "Verfy CR",
          "signature": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:lazyVerfyCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "ContTrans",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "ContTrans",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "CardinalityConstraint",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#CardinalityConstraint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "CardinalityConstraint",
          "package": "Cardinality",
          "partial": "Cardinality Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:CardinalityConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor container transformation we might use more informative error feedback.\n The \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in the middle is a relation between subject\n \u003ccode\u003eFrom_LazyCardinality\u003c/code\u003e and \u003ccode\u003eTo_CardinalityConstraint\u003c/code\u003e. It's never EQ (and\n that's the reason for the error).\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "ContTransError",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#ContTransError",
          "type": "data"
        },
        "index": {
          "description": "For container transformation we might use more informative error feedback The Ordering in the middle is relation between subject From LazyCardinality and To CardinalityConstraint It never EQ and that the reason for the error",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "ContTransError",
          "package": "Cardinality",
          "partial": "Cont Trans Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:ContTransError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContTransError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The kind of container.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "ContainerOrder",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#ContainerOrder",
          "type": "data"
        },
        "index": {
          "description": "Used in ContTransError The kind of container",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "ContainerOrder",
          "package": "Cardinality",
          "partial": "Container Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:ContainerOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContTransError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "From_LazyCardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#From_LazyCardinality",
          "type": "type"
        },
        "index": {
          "description": "Used in ContTransError",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "From_LazyCardinality",
          "package": "Cardinality",
          "partial": "From Lazy Cardinality",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:From_LazyCardinality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasCardConstr\u003c/code\u003e = \"Has cardinality constraint\". In other words, \"there\n is a capacity constraint for this container\".\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardConstr",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#HasCardConstr",
          "type": "class"
        },
        "index": {
          "description": "HasCardConstr Has cardinality constraint In other words there is capacity constraint for this container",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardConstr",
          "package": "Cardinality",
          "partial": "Has Card Constr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardConstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasCardConstrT\u003c/code\u003e = \"Has cardinality constraint (for container types of\n kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\".\n In other words, \"there is a capacity constraint for this container type\n of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardConstrT",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#HasCardConstrT",
          "type": "class"
        },
        "index": {
          "description": "HasCardConstrT Has cardinality constraint for container types of kind In other words there is capacity constraint for this container type of kind",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardConstrT",
          "package": "Cardinality",
          "partial": "Has Card Constr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardConstrT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasCardUCT\u003c/code\u003e = \"Has cardinality-unsafe container transform\".\n Define transform that may thow an error, if contents of \u003ccode\u003efrom\u003c/code\u003e don't fit\n in \u003ccode\u003eto\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardUCT",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#HasCardUCT",
          "type": "class"
        },
        "index": {
          "description": "HasCardUCT Has cardinality-unsafe container transform Define transform that may thow an error if contents of from don fit in to",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardUCT",
          "package": "Cardinality",
          "partial": "Has Card UCT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardUCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHasCardUCT_T\u003c/code\u003e = \"Has cardinality-unsafe container\n transform (for container types of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\".\n Same thing as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but for containers of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardUCT_T",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#HasCardUCT_T",
          "type": "class"
        },
        "index": {
          "description": "HasCardUCT Has cardinality-unsafe container transform for container types of kind Same thing as HasCardUCT but for containers of kind",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "HasCardUCT_T",
          "package": "Cardinality",
          "partial": "Has Card UCT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardUCT_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContTransError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "To_CardinalityConstraint",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#To_CardinalityConstraint",
          "type": "type"
        },
        "index": {
          "description": "Used in ContTransError",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "To_CardinalityConstraint",
          "package": "Cardinality",
          "partial": "To Cardinality Constraint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:To_CardinalityConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "TransformError_Details",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#TransformError_Details",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "TransformError_Details",
          "package": "Cardinality",
          "partial": "Transform Error Details",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:TransformError_Details"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "TransformError_FromTypeName",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#TransformError_FromTypeName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "TransformError_FromTypeName",
          "package": "Cardinality",
          "partial": "Transform Error From Type Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:TransformError_FromTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "TransformError_ToTypeName",
          "package": "Cardinality",
          "source": "src/Data-Cardinality-ContTrans.html#TransformError_ToTypeName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "TransformError_ToTypeName",
          "package": "Cardinality",
          "partial": "Transform Error To Type Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:TransformError_ToTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "ContTransError",
          "package": "Cardinality",
          "signature": "ContTransError From_LazyCardinality Ordering To_CardinalityConstraint ContainerOrder",
          "source": "src/Data-Cardinality-ContTrans.html#ContTransError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "ContTransError",
          "package": "Cardinality",
          "partial": "Cont Trans Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:ContTransError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "cFitsIn",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e b -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#cFitsIn",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around cFitsInCC",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "cFitsIn",
          "normalized": "LazyCardinality-\u003ea-\u003eBool",
          "package": "Cardinality",
          "partial": "Fits In",
          "signature": "LazyCardinality-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cFitsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecFitsInCC = \u003ccode\u003e\u003ca\u003ecFitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eDefined to satisfy abbreviation.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "cFitsInCC",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e CardinalityConstraint -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#cFitsInCC",
          "type": "function"
        },
        "index": {
          "description": "cFitsInCC cFitsInCR Defined to satisfy abbreviation",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "cFitsInCC",
          "normalized": "LazyCardinality-\u003eCardinalityConstraint-\u003eBool",
          "package": "Cardinality",
          "partial": "Fits In CC",
          "signature": "LazyCardinality-\u003eCardinalityConstraint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cFitsInCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "cFitsInT",
          "package": "Cardinality",
          "signature": "LazyCardinality -\u003e c b -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#cFitsInT",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around cFitsInCC",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "cFitsInT",
          "normalized": "LazyCardinality-\u003ea b-\u003eBool",
          "package": "Cardinality",
          "partial": "Fits In",
          "signature": "LazyCardinality-\u003ec b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cFitsInT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "cardinalityConstraintOf",
          "package": "Cardinality",
          "signature": "a -\u003e CardinalityConstraint",
          "source": "src/Data-Cardinality-ContTrans.html#cardinalityConstraintOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "cardinalityConstraintOf",
          "normalized": "a-\u003eCardinalityConstraint",
          "package": "Cardinality",
          "partial": "Constraint Of",
          "signature": "a-\u003eCardinalityConstraint",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cardinalityConstraintOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality.ContTrans",
          "name": "cardinalityConstraintOfT",
          "package": "Cardinality",
          "signature": "c a -\u003e CardinalityConstraint",
          "source": "src/Data-Cardinality-ContTrans.html#cardinalityConstraintOfT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "cardinalityConstraintOfT",
          "normalized": "a b-\u003eCardinalityConstraint",
          "package": "Cardinality",
          "partial": "Constraint Of",
          "signature": "c a-\u003eCardinalityConstraint",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cardinalityConstraintOfT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsIn",
          "package": "Cardinality",
          "signature": "a -\u003e b -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#fitsIn",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around cFitsInCC",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsIn",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "Cardinality",
          "partial": "In",
          "signature": "a-\u003eb-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efitsInCC = \u003ccode\u003e\u003ca\u003efitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eDefined to satisfy abbreviation.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsInCC",
          "package": "Cardinality",
          "signature": "a -\u003e CardinalityConstraint -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#fitsInCC",
          "type": "function"
        },
        "index": {
          "description": "fitsInCC fitsInCR Defined to satisfy abbreviation",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsInCC",
          "normalized": "a-\u003eCardinalityConstraint-\u003eBool",
          "package": "Cardinality",
          "partial": "In CC",
          "signature": "a-\u003eCardinalityConstraint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsInCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efitsInCC = \u003ccode\u003e\u003ca\u003efitsInCR_T\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eDefined to satisfy abbreviation.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsInCC_T",
          "package": "Cardinality",
          "signature": "c a -\u003e CardinalityConstraint -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#fitsInCC_T",
          "type": "function"
        },
        "index": {
          "description": "fitsInCC fitsInCR Defined to satisfy abbreviation",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsInCC_T",
          "normalized": "a b-\u003eCardinalityConstraint-\u003eBool",
          "package": "Cardinality",
          "partial": "In CC",
          "signature": "c a-\u003eCardinalityConstraint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsInCC_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsInT",
          "package": "Cardinality",
          "signature": "c a -\u003e d b -\u003e Bool",
          "source": "src/Data-Cardinality-ContTrans.html#fitsInT",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around cFitsInCC",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "fitsInT",
          "normalized": "a b-\u003ec d-\u003eBool",
          "package": "Cardinality",
          "partial": "In",
          "signature": "c a-\u003ed b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsInT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Contrary to it, where \"u-\" prefix stands\n for \"unsafe-\", here \"s-\" prefix stands for \"safe-\".\n This is aimed to localize and exclude case, when contents of \u003ccode\u003efrom\u003c/code\u003e don't\n fit in \u003ccode\u003eto\u003c/code\u003e If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instaniated\n correctly, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should never allow\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be called by subject instance. It should return \u003ccode\u003eNothing\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTrans",
          "package": "Cardinality",
          "signature": "from -\u003e Maybe to",
          "source": "src/Data-Cardinality-ContTrans.html#sContTrans",
          "type": "function"
        },
        "index": {
          "description": "wrapper around uContTrans Contrary to it where prefix stands for unsafe here prefix stands for safe This is aimed to localize and exclude case when contents of from don fit in to If HasCardUCT instaniated correctly then sContTrans should never allow uContError to be called by subject instance It should return Nothing instead",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTrans",
          "normalized": "a-\u003eMaybe b",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "signature": "from-\u003eMaybe to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Contrary to it, where \"u-\" prefix stands\n for \"unsafe-\", here \"s-\" prefix stands for \"safe-\".\n This is aimed to localize and exclude case, when contents of \u003ccode\u003e(from a)\u003c/code\u003e don't\n fit in \u003ccode\u003e(to a)\u003c/code\u003e . If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT_T\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instaniated\n correctly, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should never allow\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContErrorT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be called by subject instance. It should return \u003ccode\u003eNothing\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTransT",
          "package": "Cardinality",
          "signature": "from a -\u003e Maybe (to a)",
          "source": "src/Data-Cardinality-ContTrans.html#sContTransT",
          "type": "function"
        },
        "index": {
          "description": "wrapper around uContTransT Contrary to it where prefix stands for unsafe here prefix stands for safe This is aimed to localize and exclude case when contents of from don fit in to If HasCardUCT instaniated correctly then sContTransT should never allow uContErrorT to be called by subject instance It should return Nothing instead",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTransT",
          "normalized": "a b-\u003eMaybe(c b)",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "signature": "from a-\u003eMaybe(to a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTransT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogue to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Herre, in case of cardinality error, a more\n informative data structure is returned instead of \u003ccode\u003eNothing\u003c/code\u003e (as was\n in \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTransT_E",
          "package": "Cardinality",
          "signature": "from a -\u003e Either ContTransError (to a)",
          "source": "src/Data-Cardinality-ContTrans.html#sContTransT_E",
          "type": "function"
        },
        "index": {
          "description": "Analogue to sContTransT Herre in case of cardinality error more informative data structure is returned instead of Nothing as was in sContTransT",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTransT_E",
          "normalized": "a b-\u003eEither ContTransError(c b)",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "signature": "from a-\u003eEither ContTransError(to a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTransT_E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogue to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Herre, in case of cardinality error, a more\n informative data structure is returned instead of \u003ccode\u003eNothing\u003c/code\u003e (as was\n in \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTrans_E",
          "package": "Cardinality",
          "signature": "from -\u003e Either ContTransError to",
          "source": "src/Data-Cardinality-ContTrans.html#sContTrans_E",
          "type": "function"
        },
        "index": {
          "description": "Analogue to sContTrans Herre in case of cardinality error more informative data structure is returned instead of Nothing as was in sContTrans",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "sContTrans_E",
          "normalized": "a-\u003eEither ContTransError b",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "signature": "from-\u003eEither ContTransError to",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTrans_E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error is used by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n typeclass instances in cases when \u003ccode\u003efrom\u003c/code\u003e container's contents\n don't fit in \u003ccode\u003eto\u003c/code\u003e container.\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContError",
          "package": "Cardinality",
          "signature": "TransformError_FromTypeName -\u003e TransformError_ToTypeName -\u003e TransformError_Details -\u003e a",
          "source": "src/Data-Cardinality-ContTrans.html#uContError",
          "type": "function"
        },
        "index": {
          "description": "This error is used by HasCardUCT typeclass instances in cases when from container contents don fit in to container",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContError",
          "normalized": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea",
          "package": "Cardinality",
          "partial": "Cont Error",
          "signature": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but for use in\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT_T\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e typeclass instances\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContErrorT",
          "package": "Cardinality",
          "signature": "TransformError_FromTypeName -\u003e TransformError_ToTypeName -\u003e TransformError_Details -\u003e a",
          "source": "src/Data-Cardinality-ContTrans.html#uContErrorT",
          "type": "function"
        },
        "index": {
          "description": "Same as uContError but for use in HasCardUCT typeclass instances",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContErrorT",
          "normalized": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea",
          "package": "Cardinality",
          "partial": "Cont Error",
          "signature": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContErrorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"u-\" prefix stands for \"unsafe-\"\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContTrans",
          "package": "Cardinality",
          "signature": "from -\u003e to",
          "source": "src/Data-Cardinality-ContTrans.html#uContTrans",
          "type": "method"
        },
        "index": {
          "description": "prefix stands for unsafe",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContTrans",
          "normalized": "a-\u003eb",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "signature": "from-\u003eto",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"u-\" prefix stands for \"unsafe-\"\n\u003c/p\u003e",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContTransT",
          "package": "Cardinality",
          "signature": "from a -\u003e to a",
          "source": "src/Data-Cardinality-ContTrans.html#uContTransT",
          "type": "method"
        },
        "index": {
          "description": "prefix stands for unsafe",
          "hierarchy": "Data Cardinality ContTrans",
          "module": "Data.Cardinality.ContTrans",
          "name": "uContTransT",
          "normalized": "a b-\u003ec b",
          "package": "Cardinality",
          "partial": "Cont Trans",
          "signature": "from a-\u003eto a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContTransT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Cardinality",
          "name": "Cardinality",
          "package": "Cardinality",
          "source": "src/Data-Cardinality.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Cardinality",
          "module": "Data.Cardinality",
          "name": "Cardinality",
          "package": "Cardinality",
          "partial": "Cardinality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EmptySet",
          "name": "EmptySet",
          "package": "Cardinality",
          "source": "src/Data-EmptySet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EmptySet",
          "module": "Data.EmptySet",
          "name": "EmptySet",
          "package": "Cardinality",
          "partial": "Empty Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-EmptySet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EmptySet",
          "name": "EmptySet",
          "package": "Cardinality",
          "source": "src/Data-EmptySet.html#EmptySet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EmptySet",
          "module": "Data.EmptySet",
          "name": "EmptySet",
          "package": "Cardinality",
          "partial": "Empty Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-EmptySet.html#t:EmptySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EmptySet",
          "name": "EmptySet",
          "package": "Cardinality",
          "signature": "EmptySet",
          "source": "src/Data-EmptySet.html#EmptySet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EmptySet",
          "module": "Data.EmptySet",
          "name": "EmptySet",
          "package": "Cardinality",
          "partial": "Empty Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-EmptySet.html#v:EmptySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "Intersectable",
          "package": "Cardinality",
          "source": "src/Data-Intersectable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "Intersectable",
          "package": "Cardinality",
          "partial": "Intersectable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "Intersectable",
          "package": "Cardinality",
          "source": "src/Data-Intersectable.html#Intersectable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "Intersectable",
          "package": "Cardinality",
          "partial": "Intersectable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#t:Intersectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "SetsFit",
          "package": "Cardinality",
          "source": "src/Data-Intersectable.html#SetsFit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "SetsFit",
          "package": "Cardinality",
          "partial": "Sets Fit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#t:SetsFit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "EqualSets",
          "package": "Cardinality",
          "signature": "EqualSets",
          "source": "src/Data-Intersectable.html#SetsFit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "EqualSets",
          "package": "Cardinality",
          "partial": "Equal Sets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:EqualSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "FirstInSecond",
          "package": "Cardinality",
          "signature": "FirstInSecond",
          "source": "src/Data-Intersectable.html#SetsFit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "FirstInSecond",
          "package": "Cardinality",
          "partial": "First In Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:FirstInSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "Intersection",
          "package": "Cardinality",
          "signature": "Intersection set",
          "source": "src/Data-Intersectable.html#SetsFit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "Intersection",
          "package": "Cardinality",
          "partial": "Intersection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:Intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "NoIntersection",
          "package": "Cardinality",
          "signature": "NoIntersection",
          "source": "src/Data-Intersectable.html#SetsFit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "NoIntersection",
          "package": "Cardinality",
          "partial": "No Intersection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:NoIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "SecondInFirst",
          "package": "Cardinality",
          "signature": "SecondInFirst",
          "source": "src/Data-Intersectable.html#SetsFit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "SecondInFirst",
          "package": "Cardinality",
          "partial": "Second In First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:SecondInFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Intersectable",
          "name": "setFits",
          "package": "Cardinality",
          "signature": "set -\u003e set -\u003e SetsFit set",
          "source": "src/Data-Intersectable.html#setFits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Intersectable",
          "module": "Data.Intersectable",
          "name": "setFits",
          "normalized": "a-\u003ea-\u003eSetsFit a",
          "package": "Cardinality",
          "partial": "Fits",
          "signature": "set-\u003eset-\u003eSetsFit set",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:setFits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NeverEmptyList",
          "name": "NeverEmptyList",
          "package": "Cardinality",
          "source": "src/Data-NeverEmptyList.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data NeverEmptyList",
          "module": "Data.NeverEmptyList",
          "name": "NeverEmptyList",
          "package": "Cardinality",
          "partial": "Never Empty List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NeverEmptyList",
          "name": "NeverEmptyList",
          "package": "Cardinality",
          "source": "src/Data-NeverEmptyList.html#NeverEmptyList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data NeverEmptyList",
          "module": "Data.NeverEmptyList",
          "name": "NeverEmptyList",
          "package": "Cardinality",
          "partial": "Never Empty List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#t:NeverEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NeverEmptyList",
          "name": "NEL",
          "package": "Cardinality",
          "signature": "NEL a [a]",
          "source": "src/Data-NeverEmptyList.html#NeverEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NeverEmptyList",
          "module": "Data.NeverEmptyList",
          "name": "NEL",
          "normalized": "NEL a[a]",
          "package": "Cardinality",
          "partial": "NEL",
          "signature": "NEL a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:NEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003elist2NeverEmptyList [] = Nothing\u003c/pre\u003e\u003cpre\u003elist2NeverEmptyList (h:t) = Just (NEL h t)\u003c/pre\u003e",
          "module": "Data.NeverEmptyList",
          "name": "list2nel",
          "package": "Cardinality",
          "signature": "[a] -\u003e Maybe (NeverEmptyList a)",
          "source": "src/Data-NeverEmptyList.html#list2nel",
          "type": "function"
        },
        "index": {
          "description": "list2NeverEmptyList Nothing list2NeverEmptyList Just NEL",
          "hierarchy": "Data NeverEmptyList",
          "module": "Data.NeverEmptyList",
          "name": "list2nel",
          "normalized": "[a]-\u003eMaybe(NeverEmptyList a)",
          "package": "Cardinality",
          "signature": "[a]-\u003eMaybe(NeverEmptyList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:list2nel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eneverEmptyList2List (NEL h t) = h:t\u003c/pre\u003e",
          "module": "Data.NeverEmptyList",
          "name": "nel2List",
          "package": "Cardinality",
          "signature": "NeverEmptyList a -\u003e [a]",
          "source": "src/Data-NeverEmptyList.html#nel2List",
          "type": "function"
        },
        "index": {
          "description": "neverEmptyList2List NEL",
          "hierarchy": "Data NeverEmptyList",
          "module": "Data.NeverEmptyList",
          "name": "nel2List",
          "normalized": "NeverEmptyList a-\u003e[a]",
          "package": "Cardinality",
          "partial": "List",
          "signature": "NeverEmptyList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:nel2List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NeverEmptyList",
          "name": "nelSingleton",
          "package": "Cardinality",
          "signature": "a -\u003e NeverEmptyList a",
          "source": "src/Data-NeverEmptyList.html#nelSingleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NeverEmptyList",
          "module": "Data.NeverEmptyList",
          "name": "nelSingleton",
          "normalized": "a-\u003eNeverEmptyList a",
          "package": "Cardinality",
          "partial": "Singleton",
          "signature": "a-\u003eNeverEmptyList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:nelSingleton"
      }
    }
  ]
]