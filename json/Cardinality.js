[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo main assumptions (and constraints) of this module:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Cardinality can't be negative.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e construction it is always refined by growing. F.e.,\n if \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (7, ref_f_1)\u003c/code\u003e refines to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (x, ref_f_2)\u003c/code\u003e, then\n \u003ccode\u003ex\u003c/code\u003e SHOULD NEVER be less then \u003ccode\u003e7\u003c/code\u003e.\n On this assumption relies heavily functions \u003ccode\u003e\u003ccode\u003e\u003ca\u003elazyIsZeroLC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elazyCompare2LCs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddLCToLC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and also almost every refinement routine.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-Cardinality-Cardinality.html",
        "fct-type": "module",
        "title": "Cardinality"
      },
      "index": {
        "description": "Two main assumptions and constraints of this module Cardinality can be negative For refinableC construction it is always refined by growing F.e if refinableC ref refines to refinableC ref then SHOULD NEVER be less then On this assumption relies heavily functions lazyIsZeroLC lazyCompare2LCs addLCToLC and also almost every refinement routine",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "Cardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:BoundaryPreciseCardinality",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-Cardinality.html#BoundaryPreciseCardinality",
        "fct-type": "type",
        "title": "BoundaryPreciseCardinality"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "BoundaryPreciseCardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Boundary Precise Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:CardinalityRefinementState",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-Cardinality.html#CardinalityRefinementState",
        "fct-type": "type",
        "title": "CardinalityRefinementState"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "CardinalityRefinementState",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality Refinement State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:ContinueCounting_DoWe",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-Cardinality.html#ContinueCounting_DoWe",
        "fct-type": "type",
        "title": "ContinueCounting_DoWe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "ContinueCounting_DoWe",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Continue Counting Do We",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:ContinueRefiningCardinalityUntil",
      "description": {
        "fct-descr": "\u003cp\u003eAn example of this is \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength2\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-Cardinality.html#ContinueRefiningCardinalityUntil",
        "fct-type": "type",
        "title": "ContinueRefiningCardinalityUntil"
      },
      "index": {
        "description": "An example of this is length2 function",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "ContinueRefiningCardinalityUntil",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Continue Refining Cardinality Until",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:CurrentNotFinalPreciseCardinality",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-Cardinality.html#CurrentNotFinalPreciseCardinality",
        "fct-type": "type",
        "title": "CurrentNotFinalPreciseCardinality"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "CurrentNotFinalPreciseCardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Current Not Final Precise Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:HasCard",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasCard\u003c/code\u003e = \"Has cardinality\". In other words, \"it's possible to measure\n current count of elements for this container\"\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Cardinality-Cardinality.html#HasCard",
        "fct-type": "class",
        "title": "HasCard"
      },
      "index": {
        "description": "HasCard Has cardinality In other words it possible to measure current count of elements for this container",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "HasCard",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Has Card",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:HasCardT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasCardT\u003c/code\u003e = \"Has cardinality (for container types of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\".\n In other words, \"it's possible to measure\n current count of elements for this container (for container types of\n kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\"\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Cardinality-Cardinality.html#HasCardT",
        "fct-type": "class",
        "title": "HasCardT"
      },
      "index": {
        "description": "HasCardT Has cardinality for container types of kind In other words it possible to measure current count of elements for this container for container types of kind",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "HasCardT",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Has Card",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:LazyCardinality",
      "description": {
        "fct-descr": "\u003cp\u003eIn other words: count of elements in a container,\n with an opportunity not to refine the whole content of the container\n (and the container's structure).\n\u003c/p\u003e\u003cp\u003eConstructors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePreciseCardinality\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCardinalityRefinementState\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Cardinality-Cardinality.html#LazyCardinality",
        "fct-type": "data",
        "title": "LazyCardinality"
      },
      "index": {
        "description": "In other words count of elements in container with an opportunity not to refine the whole content of the container and the container structure Constructors infiniteC preciseC PreciseCardinality refinableC CardinalityRefinementState",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "LazyCardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Lazy Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#t:PreciseCardinality",
      "description": {
        "fct-descr": "\u003cp\u003eCount of elements in container. It's always positive or zero.\n\u003c/p\u003e\u003cp\u003eIt would be best here to use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead, however, with \u003ccode\u003eInteger\u003c/code\u003e\n it's easier to catch the error of going down below zero (in case\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e 0-1==4294967295\u003c/code\u003e ).\n\u003c/p\u003e\u003cp\u003eHowever it is decided not to allow the direct use of \u003ccode\u003e\u003ccode\u003ePreciseC\u003c/code\u003e\u003c/code\u003e data\n constructor, but to wrap it into function \u003ccode\u003e\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, which guards from\n the attemts to conctruct negative cardinality (by throwing an error).\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-Cardinality.html#PreciseCardinality",
        "fct-type": "type",
        "title": "PreciseCardinality"
      },
      "index": {
        "description": "Count of elements in container It always positive or zero It would be best here to use Word32 instead however with Integer it easier to catch the error of going down below zero in case of Word32 However it is decided not to allow the direct use of PreciseC data constructor but to wrap it into function preciseC which guards from the attemts to conctruct negative cardinality by throwing an error",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "PreciseCardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Precise Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:addLCToLC",
      "description": {
        "fct-descr": "\u003cp\u003eFor case when adding up 2 refinables, if both of them sooner or later\n refines to \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, then one that returns infinity earlier is\n recommended to put as a first term. Infinity + any LazyCardinality\n = infinity. Another recommendation would be to put\n refinable that's easier to compute as a first term.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e LazyCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#addLCToLC",
        "fct-type": "function",
        "title": "addLCToLC"
      },
      "index": {
        "description": "For case when adding up refinables if both of them sooner or later refines to infiniteC then one that returns infinity earlier is recommended to put as first term Infinity any LazyCardinality infinity Another recommendation would be to put refinable that easier to compute as first term",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "addLCToLC",
        "normalized": "LazyCardinality-\u003eLazyCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "LCTo LC",
        "signature": "LazyCardinality-\u003eLazyCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:addPCToLC",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "PreciseCardinality -\u003e LazyCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#addPCToLC",
        "fct-type": "function",
        "title": "addPCToLC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "addPCToLC",
        "normalized": "PreciseCardinality-\u003eLazyCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "PCTo LC",
        "signature": "PreciseCardinality-\u003eLazyCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:almostStrictCompare2LCs",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for instance of Ord typeclass.\n\u003c/p\u003e\u003cp\u003eTogether with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e returns also probably refined cardinalities\n for reuse.\n\u003c/p\u003e\u003cp\u003eWARNING!!! When comparing \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n , it results in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (less than)!\n While comparing \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e `almostStrictCompare2LCs` \u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e ==\n \u003ccode\u003e\u003ca\u003eEQ\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n That's the reason for an \u003cem\u003ealmost-\u003c/em\u003e prefix in function name.\n If there is a probability that refinement of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e may evaluate to \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and it's important to you,\n that infinities are equal, then before comparing this refinable,\n use \u003ccode\u003e\u003ca\u003erefineCRS_TillEnd\u003c/a\u003e\u003c/code\u003e on it. That's laziness.\n\u003c/p\u003e\u003cp\u003eTrying to compare 2 \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003es that are actually infinite, but don't\n use \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e will hang\n the system (the same as if you try to determine length of an infinite\n list).\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e LazyCardinality -\u003e (Ordering, LazyCardinality, LazyCardinality)",
        "fct-source": "src/Data-Cardinality-Cardinality.html#almostStrictCompare2LCs",
        "fct-type": "function",
        "title": "almostStrictCompare2LCs"
      },
      "index": {
        "description": "Used for instance of Ord typeclass Together with Ordering returns also probably refined cardinalities for reuse WARNING When comparing refinableC with infiniteC it results in LT less than While comparing infiniteC almostStrictCompare2LCs infiniteC EQ That the reason for an almost prefix in function name If there is probability that refinement of refinableC may evaluate to infiniteC and it important to you that infinities are equal then before comparing this refinable use refineCRS TillEnd on it That laziness Trying to compare refinableC that are actually infinite but don use infiniteC will hang the system the same as if you try to determine length of an infinite list",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "almostStrictCompare2LCs",
        "normalized": "LazyCardinality-\u003eLazyCardinality-\u003e(Ordering,LazyCardinality,LazyCardinality)",
        "package": "Cardinality",
        "partial": "Strict Compare LCs",
        "signature": "LazyCardinality-\u003eLazyCardinality-\u003e(Ordering,LazyCardinality,LazyCardinality)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "a -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf",
        "fct-type": "method",
        "title": "cardOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf",
        "normalized": "a-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of",
        "signature": "a-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOfT",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "t elem -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOfT",
        "fct-type": "method",
        "title": "cardOfT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOfT",
        "normalized": "a b-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of",
        "signature": "t elem-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_EmptySet",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "EmptySet a -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_EmptySet",
        "fct-type": "function",
        "title": "cardOf_EmptySet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_EmptySet",
        "normalized": "EmptySet a-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of Empty Set",
        "signature": "EmptySet a-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Identity1",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "Identity a -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_Identity1",
        "fct-type": "function",
        "title": "cardOf_Identity1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_Identity1",
        "normalized": "Identity a-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of Identity",
        "signature": "Identity a-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_List",
      "description": {
        "fct-descr": "\u003cp\u003eRefinable starting from 0, uses \u003ccode\u003e\u003ccode\u003e\u003ca\u003elength2\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "[a] -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_List",
        "fct-type": "function",
        "title": "cardOf_List"
      },
      "index": {
        "description": "Refinable starting from uses length2",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_List",
        "normalized": "[a]-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of List",
        "signature": "[a]-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Map",
      "description": {
        "fct-descr": "\u003cp\u003eNot refinable, since \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a strict structure.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "Map k e -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_Map",
        "fct-type": "function",
        "title": "cardOf_Map"
      },
      "index": {
        "description": "Not refinable since Map is strict structure",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_Map",
        "normalized": "Map a b-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of Map",
        "signature": "Map k e-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Maybe",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "Maybe a -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_Maybe",
        "fct-type": "function",
        "title": "cardOf_Maybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_Maybe",
        "normalized": "Maybe a-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of Maybe",
        "signature": "Maybe a-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_NeverEmptyList",
      "description": {
        "fct-descr": "\u003cp\u003eRefinable starting from 1.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "NeverEmptyList k -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_NeverEmptyList",
        "fct-type": "function",
        "title": "cardOf_NeverEmptyList"
      },
      "index": {
        "description": "Refinable starting from",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_NeverEmptyList",
        "normalized": "NeverEmptyList a-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of Never Empty List",
        "signature": "NeverEmptyList k-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:cardOf_Unity",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "() -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#cardOf_Unity",
        "fct-type": "function",
        "title": "cardOf_Unity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "cardOf_Unity",
        "normalized": "()-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Of Unity",
        "signature": "()-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:compare2Refinements",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e CardinalityRefinementState -\u003e (Ordering, LazyCardinality, LazyCardinality)",
        "fct-source": "src/Data-Cardinality-Cardinality.html#compare2Refinements",
        "fct-type": "function",
        "title": "compare2Refinements"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "compare2Refinements",
        "normalized": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(Ordering,LazyCardinality,LazyCardinality)",
        "package": "Cardinality",
        "partial": "Refinements",
        "signature": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(Ordering,LazyCardinality,LazyCardinality)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:crsRefinementStep",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#crsRefinementStep",
        "fct-type": "function",
        "title": "crsRefinementStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "crsRefinementStep",
        "normalized": "CardinalityRefinementState-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Refinement Step",
        "signature": "CardinalityRefinementState-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:equalize2Refinements",
      "description": {
        "fct-descr": "\u003cp\u003eFor \u003ccode\u003eequalize2Refinements (m, ref_f_1) (n, ref_f_2)\u003c/code\u003e finishes when m == n.\n Else refines them. Another termination condition is when in result of\n refinement one of cardinalities becomes final (not \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e CardinalityRefinementState -\u003e (LazyCardinality, LazyCardinality)",
        "fct-source": "src/Data-Cardinality-Cardinality.html#equalize2Refinements",
        "fct-type": "function",
        "title": "equalize2Refinements"
      },
      "index": {
        "description": "For equalize2Refinements ref ref finishes when Else refines them Another termination condition is when in result of refinement one of cardinalities becomes final not refinableC",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "equalize2Refinements",
        "normalized": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(LazyCardinality,LazyCardinality)",
        "package": "Cardinality",
        "partial": "Refinements",
        "signature": "CardinalityRefinementState-\u003eCardinalityRefinementState-\u003e(LazyCardinality,LazyCardinality)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:infiniteC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eF.e., \u003ccode\u003e[1..]\u003c/code\u003e list has such cardinality.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#infiniteC",
        "fct-type": "function",
        "title": "infiniteC"
      },
      "index": {
        "description": "LazyCardinality constructor F.e list has such cardinality",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "infiniteC",
        "normalized": "",
        "package": "Cardinality",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:lazyCompare2LCs",
      "description": {
        "fct-descr": "\u003cp\u003eWon't refine refinables. According to 2nd assumption of the module:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (m, _) `lazyCompare2LCs` \u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e n\u003c/pre\u003e\u003cp\u003eequals to \u003ccode\u003eJust GT\u003c/code\u003e if \u003ccode\u003em \u003e n\u003c/code\u003e , and \u003ccode\u003eNothing\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e LazyCardinality -\u003e Maybe Ordering",
        "fct-source": "src/Data-Cardinality-Cardinality.html#lazyCompare2LCs",
        "fct-type": "function",
        "title": "lazyCompare2LCs"
      },
      "index": {
        "description": "Won refine refinables According to nd assumption of the module refinableC lazyCompare2LCs preciseC equals to Just GT if and Nothing otherwise",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "lazyCompare2LCs",
        "normalized": "LazyCardinality-\u003eLazyCardinality-\u003eMaybe Ordering",
        "package": "Cardinality",
        "partial": "Compare LCs",
        "signature": "LazyCardinality-\u003eLazyCardinality-\u003eMaybe Ordering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:lazyIsZeroLC",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eNothing\u003c/code\u003e, ONLY if LC is \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e (0, _)\u003c/code\u003e\n (according to 2nd assumption of the module). Returns \u003ccode\u003eJust True\u003c/code\u003e\n only for \u003ccode\u003e\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e Maybe Bool",
        "fct-source": "src/Data-Cardinality-Cardinality.html#lazyIsZeroLC",
        "fct-type": "function",
        "title": "lazyIsZeroLC"
      },
      "index": {
        "description": "Returns Nothing ONLY if LC is refinableC according to nd assumption of the module Returns Just True only for preciseC",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "lazyIsZeroLC",
        "normalized": "LazyCardinality-\u003eMaybe Bool",
        "package": "Cardinality",
        "partial": "Is Zero LC",
        "signature": "LazyCardinality-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:length2",
      "description": {
        "fct-descr": "\u003cp\u003eList length of controlable greediness.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "[a] -\u003e ContinueRefiningCardinalityUntil",
        "fct-source": "src/Data-Cardinality-Cardinality.html#length2",
        "fct-type": "function",
        "title": "length2"
      },
      "index": {
        "description": "List length of controlable greediness",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "length2",
        "normalized": "[a]-\u003eContinueRefiningCardinalityUntil",
        "package": "Cardinality",
        "partial": "",
        "signature": "[a]-\u003eContinueRefiningCardinalityUntil"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:preciseC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e constructor. If given negative value, raises error.\n\u003c/p\u003e\u003cp\u003eF.e., the tuple \u003ccode\u003e(5,6)\u003c/code\u003e has a precise cardinality 2.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "PreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#preciseC",
        "fct-type": "function",
        "title": "preciseC"
      },
      "index": {
        "description": "LazyCardinality constructor If given negative value raises error F.e the tuple has precise cardinality",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "preciseC",
        "normalized": "PreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "",
        "signature": "PreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refinableC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003cp\u003eFor lists it happens, that we do not want to count all the elements\n of a container,\n but want to count them until some lower boundary. For example,\n I do not want to know the length of the list (which involves taking\n each element of it, and counting it in) to reason about whether\n it's content fit into the \u003ccode\u003e(,,)\u003c/code\u003e data constructor. For this\n case I only need to count till 3rd element and check, if list is\n continued. It's actual especially, when dealing with infinite lists\n or with lists, whose reading may block.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e(refinableC (x0, refine_f))\u003c/code\u003e important rules:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If \u003ccode\u003e(refine_f x0 (\u003c= 5))\u003c/code\u003e evaluates to another \u003ccode\u003erefinableC\u003c/code\u003e, then\n it is not fully refined, but (at least) \u003ccode\u003e5\u003c/code\u003e is achieved (the precise\n cardinality is \u003ccode\u003e\u003e= 5\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003ex0\u003c/code\u003e is \u003ccode\u003e10\u003c/code\u003e and \u003ccode\u003e(refine_f 10 (\u003c= 15))\u003c/code\u003e returned\n \u003ccode\u003e(refinableC (17, refine_f_2))\u003c/code\u003e, then it is known, that precise\n cardinality is already \u003e= \u003ccode\u003e10 + 7\u003c/code\u003e. In sight of \u003ccode\u003erefine_f\u003c/code\u003e there\n SHOULD be everything except for what's already counted in \u003ccode\u003ex0\u003c/code\u003e\n (which is \u003ccode\u003e10\u003c/code\u003e), and in sight of \u003ccode\u003erefine_f_2\u003c/code\u003e there should be even\n less by \u003ccode\u003e7\u003c/code\u003e elements comparing to \u003ccode\u003erefine_f\u003c/code\u003e. So if total cardinality was\n \u003ccode\u003e25\u003c/code\u003e, then \u003ccode\u003e(refine_f_2 17 (\u003c= 30))\u003c/code\u003e MUST return \u003ccode\u003epreciseC 25\u003c/code\u003e, to make\n \u003ccode\u003e10 + 7 + 8 = 25\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The theatment of the first argument of refinement function \u003ccode\u003erefine_f\u003c/code\u003e\n must be relative. For example, given total count of elements \u003ccode\u003e= 25\u003c/code\u003e ,\n and \u003ccode\u003ex0 = 20\u003c/code\u003e - these 20 elements are already counted, and in sight of\n \u003ccode\u003erefine_f\u003c/code\u003e there are only 5 last elements.\n Then \u003ccode\u003erefine_f 20 (\u003c= 26)\u003c/code\u003e will result in \u003ccode\u003epreciseC 25\u003c/code\u003e, but(!)\n \u003ccode\u003erefine_f 10 (\u003c= 16)\u003c/code\u003e MUST result in \u003ccode\u003epreciseC 15\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eRecomendations:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e If subject has infinite cardinality, it's best to determine\n it's cardinality as \u003ccode\u003e\u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e at early stages and\n avoid using \u003ccode\u003erefinableC\u003c/code\u003e for it.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refinableC",
        "fct-type": "function",
        "title": "refinableC"
      },
      "index": {
        "description": "LazyCardinality constructor For lists it happens that we do not want to count all the elements of container but want to count them until some lower boundary For example do not want to know the length of the list which involves taking each element of it and counting it in to reason about whether it content fit into the data constructor For this case only need to count till rd element and check if list is continued It actual especially when dealing with infinite lists or with lists whose reading may block For refinableC x0 refine important rules If refine x0 evaluates to another refinableC then it is not fully refined but at least is achieved the precise cardinality is If x0 is and refine returned refinableC refine then it is known that precise cardinality is already In sight of refine there SHOULD be everything except for what already counted in x0 which is and in sight of refine there should be even less by elements comparing to refine So if total cardinality was then refine MUST return preciseC to make The theatment of the first argument of refinement function refine must be relative For example given total count of elements and x0 these elements are already counted and in sight of refine there are only last elements Then refine will result in preciseC but refine MUST result in preciseC Recomendations If subject has infinite cardinality it best to determine it cardinality as infiniteC at early stages and avoid using refinableC for it",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refinableC",
        "normalized": "CardinalityRefinementState-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "",
        "signature": "CardinalityRefinementState-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_Till",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineCRS_Till",
        "fct-type": "function",
        "title": "refineCRS_Till"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineCRS_Till",
        "normalized": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "CRS Till",
        "signature": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_TillEnd",
      "description": {
        "fct-descr": "\u003cp\u003eDon't use it on infinite refinables not measured with \u003ccode\u003e\u003ca\u003einfiniteC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineCRS_TillEnd",
        "fct-type": "function",
        "title": "refineCRS_TillEnd"
      },
      "index": {
        "description": "Don use it on infinite refinables not measured with infiniteC",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineCRS_TillEnd",
        "normalized": "CardinalityRefinementState-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "CRS Till End",
        "signature": "CardinalityRefinementState-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_TillOneAbove",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineCRS_TillOneAbove",
        "fct-type": "function",
        "title": "refineCRS_TillOneAbove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineCRS_TillOneAbove",
        "normalized": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "CRS Till One Above",
        "signature": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineCRS_TillOneBelow",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRefinementState -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineCRS_TillOneBelow",
        "fct-type": "function",
        "title": "refineCRS_TillOneBelow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineCRS_TillOneBelow",
        "normalized": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "CRS Till One Below",
        "signature": "CardinalityRefinementState-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTill",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineCRS_Till\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineTill",
        "fct-type": "function",
        "title": "refineTill"
      },
      "index": {
        "description": "Wrapper around refineCRS Till",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineTill",
        "normalized": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Till",
        "signature": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTillEnd",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineCRS_TillEnd\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineTillEnd",
        "fct-type": "function",
        "title": "refineTillEnd"
      },
      "index": {
        "description": "Wrapper around refineCRS TillEnd",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineTillEnd",
        "normalized": "LazyCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Till End",
        "signature": "LazyCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTillOneAbove",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineTillOneAbove\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineTillOneAbove",
        "fct-type": "function",
        "title": "refineTillOneAbove"
      },
      "index": {
        "description": "Wrapper around refineTillOneAbove",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineTillOneAbove",
        "normalized": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Till One Above",
        "signature": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refineTillOneBelow",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefineTillOneBelow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e BoundaryPreciseCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refineTillOneBelow",
        "fct-type": "function",
        "title": "refineTillOneBelow"
      },
      "index": {
        "description": "Wrapper around refineTillOneBelow",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refineTillOneBelow",
        "normalized": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Till One Below",
        "signature": "LazyCardinality-\u003eBoundaryPreciseCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refinementState",
      "description": {
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e Maybe CardinalityRefinementState",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refinementState",
        "fct-type": "function",
        "title": "refinementState"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refinementState",
        "normalized": "LazyCardinality-\u003eMaybe CardinalityRefinementState",
        "package": "Cardinality",
        "partial": "State",
        "signature": "LazyCardinality-\u003eMaybe CardinalityRefinementState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:refinementStep",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecrsRefinementStep\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#refinementStep",
        "fct-type": "function",
        "title": "refinementStep"
      },
      "index": {
        "description": "Wrapper around crsRefinementStep",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "refinementStep",
        "normalized": "LazyCardinality-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "Step",
        "signature": "LazyCardinality-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:showLazy",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for Show typeclass instaniation. Here \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e isn't refined.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e String",
        "fct-source": "src/Data-Cardinality-Cardinality.html#showLazy",
        "fct-type": "function",
        "title": "showLazy"
      },
      "index": {
        "description": "Used for Show typeclass instaniation Here refinableC isn refined",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "showLazy",
        "normalized": "LazyCardinality-\u003eString",
        "package": "Cardinality",
        "partial": "Lazy",
        "signature": "LazyCardinality-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:showStrict",
      "description": {
        "fct-descr": "\u003cp\u003eHere \u003ccode\u003e \u003ccode\u003e\u003ca\u003erefineCRS_TillEnd\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is applied to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e String",
        "fct-source": "src/Data-Cardinality-Cardinality.html#showStrict",
        "fct-type": "function",
        "title": "showStrict"
      },
      "index": {
        "description": "Here refineCRS TillEnd is applied to refinableC argument",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "showStrict",
        "normalized": "LazyCardinality-\u003eString",
        "package": "Cardinality",
        "partial": "Strict",
        "signature": "LazyCardinality-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-Cardinality.html#v:sumLCs",
      "description": {
        "fct-descr": "\u003cpre\u003efoldl \u003ccode\u003e\u003ca\u003eaddLCToLC\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eSee recommendations by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eaddLCToLC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "[LazyCardinality] -\u003e LazyCardinality",
        "fct-source": "src/Data-Cardinality-Cardinality.html#sumLCs",
        "fct-type": "function",
        "title": "sumLCs"
      },
      "index": {
        "description": "foldl addLCToLC See recommendations by addLCToLC",
        "hierarchy": "Data Cardinality Cardinality",
        "module": "Data.Cardinality.Cardinality",
        "name": "sumLCs",
        "normalized": "[LazyCardinality]-\u003eLazyCardinality",
        "package": "Cardinality",
        "partial": "LCs",
        "signature": "[LazyCardinality]-\u003eLazyCardinality"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html",
        "fct-type": "module",
        "title": "CardinalityRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "CardinalityRange",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:CardinalityRange",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor: \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecardinalityRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCardinalityRange_From\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCardinalityRange_To\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#CardinalityRange",
        "fct-type": "data",
        "title": "CardinalityRange"
      },
      "index": {
        "description": "Constructor cardinalityRange CardinalityRange From CardinalityRange To",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "CardinalityRange",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:CardinalityRange_From",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#CardinalityRange_From",
        "fct-type": "type",
        "title": "CardinalityRange_From"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "CardinalityRange_From",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality Range From",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:CardinalityRange_To",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#CardinalityRange_To",
        "fct-type": "type",
        "title": "CardinalityRange_To"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "CardinalityRange_To",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality Range To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:Compare2CRsError",
      "description": {
        "fct-descr": "\u003cp\u003eError, that may occur, when performing \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecompare2CRs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#Compare2CRsError",
        "fct-type": "data",
        "title": "Compare2CRsError"
      },
      "index": {
        "description": "Error that may occur when performing compare2CRs",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "Compare2CRsError",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Compare CRs Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#t:FirstOrSecond",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCompare2CRsError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#FirstOrSecond",
        "fct-type": "data",
        "title": "FirstOrSecond"
      },
      "index": {
        "description": "Used in Compare2CRsError",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "FirstOrSecond",
        "normalized": "",
        "package": "Cardinality",
        "partial": "First Or Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:First",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "First",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#FirstOrSecond",
        "fct-type": "function",
        "title": "First"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "First",
        "normalized": "",
        "package": "Cardinality",
        "partial": "First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:LowerBoundaryAfterHigher",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "LowerBoundaryAfterHigher FirstOrSecond CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#Compare2CRsError",
        "fct-type": "function",
        "title": "LowerBoundaryAfterHigher"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "LowerBoundaryAfterHigher",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Lower Boundary After Higher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:Second",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "Second",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#FirstOrSecond",
        "fct-type": "function",
        "title": "Second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "Second",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cFitsInCR",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eLazyCardinality\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e fits in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCardinalityRange\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e?\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e CardinalityRange -\u003e Bool",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cFitsInCR",
        "fct-type": "function",
        "title": "cFitsInCR"
      },
      "index": {
        "description": "LazyCardinality fits in CardinalityRange",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cFitsInCR",
        "normalized": "LazyCardinality-\u003eCardinalityRange-\u003eBool",
        "package": "Cardinality",
        "partial": "Fits In CR",
        "signature": "LazyCardinality-\u003eCardinalityRange-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cFitsInCR_Proto",
      "description": {
        "fct-descr": "\u003cp\u003eRoot prototype for all subsequent \"FitsIn\" functions. Returns probably\n refined cardinality and range, which is useful for reuse.\n If returns \u003ccode\u003eEQ\u003c/code\u003e then subject cardinality\n is between boundaries (including) of cardinality range.\n\u003c/p\u003e\u003cp\u003eUses \u003ccode\u003e\u003ccode\u003e\u003ca\u003ealmostStrictCompare2LCs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e CardinalityRange -\u003e (Ordering, LazyCardinality, CardinalityRange)",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cFitsInCR_Proto",
        "fct-type": "function",
        "title": "cFitsInCR_Proto"
      },
      "index": {
        "description": "Root prototype for all subsequent FitsIn functions Returns probably refined cardinality and range which is useful for reuse If returns EQ then subject cardinality is between boundaries including of cardinality range Uses almostStrictCompare2LCs function",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cFitsInCR_Proto",
        "normalized": "LazyCardinality-\u003eCardinalityRange-\u003e(Ordering,LazyCardinality,CardinalityRange)",
        "package": "Cardinality",
        "partial": "Fits In CR Proto",
        "signature": "LazyCardinality-\u003eCardinalityRange-\u003e(Ordering,LazyCardinality,CardinalityRange)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cardinalityRange",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCardinalityRange\u003c/code\u003e data constructor. The range is always including it's\n boundaries. F.e., range\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCardinalityRange\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e 1) (\u003ccode\u003e\u003ca\u003epreciseC\u003c/a\u003e\u003c/code\u003e 4)\u003c/code\u003e contains\n cardinalities [1,2,3,4].\n First cardinality MUST always be less or equal to second one. However,\n we do not fully guard from such type of error - we do not refine\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003erefinableC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, if it participates in the constriction.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange_From -\u003e CardinalityRange_To -\u003e CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cardinalityRange",
        "fct-type": "function",
        "title": "cardinalityRange"
      },
      "index": {
        "description": "CardinalityRange data constructor The range is always including it boundaries F.e range CardinalityRange preciseC preciseC contains cardinalities First cardinality MUST always be less or equal to second one However we do not fully guard from such type of error we do not refine refinableC if it participates in the constriction",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cardinalityRange",
        "normalized": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eCardinalityRange",
        "package": "Cardinality",
        "partial": "Range",
        "signature": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eCardinalityRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:compare2CRs",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is made hard, but fast. It tends to make minimal amount\n of comparisons, reusing refinements.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange -\u003e CardinalityRange -\u003e (Either Compare2CRsError (SetsFit CardinalityRange), CardinalityRange, CardinalityRange)",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#compare2CRs",
        "fct-type": "function",
        "title": "compare2CRs"
      },
      "index": {
        "description": "This function is made hard but fast It tends to make minimal amount of comparisons reusing refinements",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "compare2CRs",
        "normalized": "CardinalityRange-\u003eCardinalityRange-\u003e(Either Compare CRsError(SetsFit CardinalityRange),CardinalityRange,CardinalityRange)",
        "package": "Cardinality",
        "partial": "CRs",
        "signature": "CardinalityRange-\u003eCardinalityRange-\u003e(Either Compare CRsError(SetsFit CardinalityRange),CardinalityRange,CardinalityRange)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr0",
      "description": {
        "fct-descr": "\u003cp\u003eOnly zero elements.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cr0",
        "fct-type": "function",
        "title": "cr0"
      },
      "index": {
        "description": "Only zero elements",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cr0",
        "normalized": "",
        "package": "Cardinality",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr0_1",
      "description": {
        "fct-descr": "\u003cp\u003eZero or one element.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cr0_1",
        "fct-type": "function",
        "title": "cr0_1"
      },
      "index": {
        "description": "Zero or one element",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cr0_1",
        "normalized": "",
        "package": "Cardinality",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr0_Inf",
      "description": {
        "fct-descr": "\u003cp\u003eAny count of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cr0_Inf",
        "fct-type": "function",
        "title": "cr0_Inf"
      },
      "index": {
        "description": "Any count of elements",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cr0_Inf",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr1",
      "description": {
        "fct-descr": "\u003cp\u003eOnly one element.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cr1",
        "fct-type": "function",
        "title": "cr1"
      },
      "index": {
        "description": "Only one element",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cr1",
        "normalized": "",
        "package": "Cardinality",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr1_Inf",
      "description": {
        "fct-descr": "\u003cp\u003eAny nonzero count of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cr1_Inf",
        "fct-type": "function",
        "title": "cr1_Inf"
      },
      "index": {
        "description": "Any nonzero count of elements",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cr1_Inf",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:cr2Tuple",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange -\u003e (CardinalityRange_From, CardinalityRange_From)",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#cr2Tuple",
        "fct-type": "function",
        "title": "cr2Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "cr2Tuple",
        "normalized": "CardinalityRange-\u003e(CardinalityRange_From,CardinalityRange_From)",
        "package": "Cardinality",
        "partial": "Tuple",
        "signature": "CardinalityRange-\u003e(CardinalityRange_From,CardinalityRange_From)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crFitsInCR",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetFits\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e of typeclass \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIntersectable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange -\u003e CardinalityRange -\u003e SetsFit CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#crFitsInCR",
        "fct-type": "function",
        "title": "crFitsInCR"
      },
      "index": {
        "description": "Wrapper around setFits of typeclass Intersectable",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "crFitsInCR",
        "normalized": "CardinalityRange-\u003eCardinalityRange-\u003eSetsFit CardinalityRange",
        "package": "Cardinality",
        "partial": "Fits In CR",
        "signature": "CardinalityRange-\u003eCardinalityRange-\u003eSetsFit CardinalityRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crNoConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecr0_Inf\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#crNoConstraint",
        "fct-type": "function",
        "title": "crNoConstraint"
      },
      "index": {
        "description": "Same as cr0 Inf",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "crNoConstraint",
        "normalized": "",
        "package": "Cardinality",
        "partial": "No Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crX",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete count of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "PreciseCardinality -\u003e CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#crX",
        "fct-type": "function",
        "title": "crX"
      },
      "index": {
        "description": "Concrete count of elements",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "crX",
        "normalized": "PreciseCardinality-\u003eCardinalityRange",
        "package": "Cardinality",
        "partial": "",
        "signature": "PreciseCardinality-\u003eCardinalityRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:crXY",
      "description": {
        "fct-descr": "\u003cp\u003eA concrete range.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "PreciseCardinality -\u003e PreciseCardinality -\u003e CardinalityRange",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#crXY",
        "fct-type": "function",
        "title": "crXY"
      },
      "index": {
        "description": "concrete range",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "crXY",
        "normalized": "PreciseCardinality-\u003ePreciseCardinality-\u003eCardinalityRange",
        "package": "Cardinality",
        "partial": "XY",
        "signature": "PreciseCardinality-\u003ePreciseCardinality-\u003eCardinalityRange"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:fitsInCR",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "a -\u003e CardinalityRange -\u003e Bool",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#fitsInCR",
        "fct-type": "function",
        "title": "fitsInCR"
      },
      "index": {
        "description": "Wrapper around cFitsInCR",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "fitsInCR",
        "normalized": "a-\u003eCardinalityRange-\u003eBool",
        "package": "Cardinality",
        "partial": "In CR",
        "signature": "a-\u003eCardinalityRange-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:fitsInCR_T",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "c a -\u003e CardinalityRange -\u003e Bool",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#fitsInCR_T",
        "fct-type": "function",
        "title": "fitsInCR_T"
      },
      "index": {
        "description": "Wrapper around cFitsInCR",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "fitsInCR_T",
        "normalized": "a b-\u003eCardinalityRange-\u003eBool",
        "package": "Cardinality",
        "partial": "In CR",
        "signature": "c a-\u003eCardinalityRange-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-CardinalityRange.html#v:lazyVerfyCR",
      "description": {
        "fct-module": "Data.Cardinality.CardinalityRange",
        "fct-package": "Cardinality",
        "fct-signature": "CardinalityRange_From -\u003e CardinalityRange_To -\u003e Maybe Bool",
        "fct-source": "src/Data-Cardinality-CardinalityRange.html#lazyVerfyCR",
        "fct-type": "function",
        "title": "lazyVerfyCR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality CardinalityRange",
        "module": "Data.Cardinality.CardinalityRange",
        "name": "lazyVerfyCR",
        "normalized": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eMaybe Bool",
        "package": "Cardinality",
        "partial": "Verfy CR",
        "signature": "CardinalityRange_From-\u003eCardinalityRange_To-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-Cardinality-ContTrans.html",
        "fct-type": "module",
        "title": "ContTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "ContTrans",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:CardinalityConstraint",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-ContTrans.html#CardinalityConstraint",
        "fct-type": "type",
        "title": "CardinalityConstraint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "CardinalityConstraint",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:ContTransError",
      "description": {
        "fct-descr": "\u003cp\u003eFor container transformation we might use more informative error feedback.\n The \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOrdering\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e in the middle is a relation between subject\n \u003ccode\u003eFrom_LazyCardinality\u003c/code\u003e and \u003ccode\u003eTo_CardinalityConstraint\u003c/code\u003e. It's never EQ (and\n that's the reason for the error).\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Cardinality-ContTrans.html#ContTransError",
        "fct-type": "data",
        "title": "ContTransError"
      },
      "index": {
        "description": "For container transformation we might use more informative error feedback The Ordering in the middle is relation between subject From LazyCardinality and To CardinalityConstraint It never EQ and that the reason for the error",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "ContTransError",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cont Trans Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:ContainerOrder",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContTransError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. The kind of container.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Cardinality-ContTrans.html#ContainerOrder",
        "fct-type": "data",
        "title": "ContainerOrder"
      },
      "index": {
        "description": "Used in ContTransError The kind of container",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "ContainerOrder",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Container Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:From_LazyCardinality",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContTransError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-ContTrans.html#From_LazyCardinality",
        "fct-type": "type",
        "title": "From_LazyCardinality"
      },
      "index": {
        "description": "Used in ContTransError",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "From_LazyCardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "From Lazy Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardConstr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasCardConstr\u003c/code\u003e = \"Has cardinality constraint\". In other words, \"there\n is a capacity constraint for this container\".\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Cardinality-ContTrans.html#HasCardConstr",
        "fct-type": "class",
        "title": "HasCardConstr"
      },
      "index": {
        "description": "HasCardConstr Has cardinality constraint In other words there is capacity constraint for this container",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "HasCardConstr",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Has Card Constr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardConstrT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasCardConstrT\u003c/code\u003e = \"Has cardinality constraint (for container types of\n kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\".\n In other words, \"there is a capacity constraint for this container type\n of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Cardinality-ContTrans.html#HasCardConstrT",
        "fct-type": "class",
        "title": "HasCardConstrT"
      },
      "index": {
        "description": "HasCardConstrT Has cardinality constraint for container types of kind In other words there is capacity constraint for this container type of kind",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "HasCardConstrT",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Has Card Constr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardUCT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasCardUCT\u003c/code\u003e = \"Has cardinality-unsafe container transform\".\n Define transform that may thow an error, if contents of \u003ccode\u003efrom\u003c/code\u003e don't fit\n in \u003ccode\u003eto\u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Cardinality-ContTrans.html#HasCardUCT",
        "fct-type": "class",
        "title": "HasCardUCT"
      },
      "index": {
        "description": "HasCardUCT Has cardinality-unsafe container transform Define transform that may thow an error if contents of from don fit in to",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "HasCardUCT",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Has Card UCT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:HasCardUCT_T",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHasCardUCT_T\u003c/code\u003e = \"Has cardinality-unsafe container\n transform (for container types of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e)\".\n Same thing as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but for containers of kind \u003ccode\u003e(* -\u003e *)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Cardinality-ContTrans.html#HasCardUCT_T",
        "fct-type": "class",
        "title": "HasCardUCT_T"
      },
      "index": {
        "description": "HasCardUCT Has cardinality-unsafe container transform for container types of kind Same thing as HasCardUCT but for containers of kind",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "HasCardUCT_T",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Has Card UCT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:To_CardinalityConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContTransError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-ContTrans.html#To_CardinalityConstraint",
        "fct-type": "type",
        "title": "To_CardinalityConstraint"
      },
      "index": {
        "description": "Used in ContTransError",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "To_CardinalityConstraint",
        "normalized": "",
        "package": "Cardinality",
        "partial": "To Cardinality Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:TransformError_Details",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-ContTrans.html#TransformError_Details",
        "fct-type": "type",
        "title": "TransformError_Details"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "TransformError_Details",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Transform Error Details",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:TransformError_FromTypeName",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-ContTrans.html#TransformError_FromTypeName",
        "fct-type": "type",
        "title": "TransformError_FromTypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "TransformError_FromTypeName",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Transform Error From Type Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#t:TransformError_ToTypeName",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "type",
        "fct-source": "src/Data-Cardinality-ContTrans.html#TransformError_ToTypeName",
        "fct-type": "type",
        "title": "TransformError_ToTypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "TransformError_ToTypeName",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Transform Error To Type Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:ContTransError",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "ContTransError From_LazyCardinality Ordering To_CardinalityConstraint ContainerOrder",
        "fct-source": "src/Data-Cardinality-ContTrans.html#ContTransError",
        "fct-type": "function",
        "title": "ContTransError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "ContTransError",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cont Trans Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cFitsIn",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e b -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#cFitsIn",
        "fct-type": "function",
        "title": "cFitsIn"
      },
      "index": {
        "description": "Wrapper around cFitsInCC",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "cFitsIn",
        "normalized": "LazyCardinality-\u003ea-\u003eBool",
        "package": "Cardinality",
        "partial": "Fits In",
        "signature": "LazyCardinality-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cFitsInCC",
      "description": {
        "fct-descr": "\u003cpre\u003ecFitsInCC = \u003ccode\u003e\u003ca\u003ecFitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eDefined to satisfy abbreviation.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e CardinalityConstraint -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#cFitsInCC",
        "fct-type": "function",
        "title": "cFitsInCC"
      },
      "index": {
        "description": "cFitsInCC cFitsInCR Defined to satisfy abbreviation",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "cFitsInCC",
        "normalized": "LazyCardinality-\u003eCardinalityConstraint-\u003eBool",
        "package": "Cardinality",
        "partial": "Fits In CC",
        "signature": "LazyCardinality-\u003eCardinalityConstraint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cFitsInT",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "LazyCardinality -\u003e c b -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#cFitsInT",
        "fct-type": "function",
        "title": "cFitsInT"
      },
      "index": {
        "description": "Wrapper around cFitsInCC",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "cFitsInT",
        "normalized": "LazyCardinality-\u003ea b-\u003eBool",
        "package": "Cardinality",
        "partial": "Fits In",
        "signature": "LazyCardinality-\u003ec b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cardinalityConstraintOf",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "a -\u003e CardinalityConstraint",
        "fct-source": "src/Data-Cardinality-ContTrans.html#cardinalityConstraintOf",
        "fct-type": "method",
        "title": "cardinalityConstraintOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "cardinalityConstraintOf",
        "normalized": "a-\u003eCardinalityConstraint",
        "package": "Cardinality",
        "partial": "Constraint Of",
        "signature": "a-\u003eCardinalityConstraint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:cardinalityConstraintOfT",
      "description": {
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "c a -\u003e CardinalityConstraint",
        "fct-source": "src/Data-Cardinality-ContTrans.html#cardinalityConstraintOfT",
        "fct-type": "method",
        "title": "cardinalityConstraintOfT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "cardinalityConstraintOfT",
        "normalized": "a b-\u003eCardinalityConstraint",
        "package": "Cardinality",
        "partial": "Constraint Of",
        "signature": "c a-\u003eCardinalityConstraint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsIn",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "a -\u003e b -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#fitsIn",
        "fct-type": "function",
        "title": "fitsIn"
      },
      "index": {
        "description": "Wrapper around cFitsInCC",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "fitsIn",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "Cardinality",
        "partial": "In",
        "signature": "a-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsInCC",
      "description": {
        "fct-descr": "\u003cpre\u003efitsInCC = \u003ccode\u003e\u003ca\u003efitsInCR\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eDefined to satisfy abbreviation.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "a -\u003e CardinalityConstraint -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#fitsInCC",
        "fct-type": "function",
        "title": "fitsInCC"
      },
      "index": {
        "description": "fitsInCC fitsInCR Defined to satisfy abbreviation",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "fitsInCC",
        "normalized": "a-\u003eCardinalityConstraint-\u003eBool",
        "package": "Cardinality",
        "partial": "In CC",
        "signature": "a-\u003eCardinalityConstraint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsInCC_T",
      "description": {
        "fct-descr": "\u003cpre\u003efitsInCC = \u003ccode\u003e\u003ca\u003efitsInCR_T\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eDefined to satisfy abbreviation.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "c a -\u003e CardinalityConstraint -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#fitsInCC_T",
        "fct-type": "function",
        "title": "fitsInCC_T"
      },
      "index": {
        "description": "fitsInCC fitsInCR Defined to satisfy abbreviation",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "fitsInCC_T",
        "normalized": "a b-\u003eCardinalityConstraint-\u003eBool",
        "package": "Cardinality",
        "partial": "In CC",
        "signature": "c a-\u003eCardinalityConstraint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:fitsInT",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecFitsInCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "c a -\u003e d b -\u003e Bool",
        "fct-source": "src/Data-Cardinality-ContTrans.html#fitsInT",
        "fct-type": "function",
        "title": "fitsInT"
      },
      "index": {
        "description": "Wrapper around cFitsInCC",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "fitsInT",
        "normalized": "a b-\u003ec d-\u003eBool",
        "package": "Cardinality",
        "partial": "In",
        "signature": "c a-\u003ed b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTrans",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Contrary to it, where \"u-\" prefix stands\n for \"unsafe-\", here \"s-\" prefix stands for \"safe-\".\n This is aimed to localize and exclude case, when contents of \u003ccode\u003efrom\u003c/code\u003e don't\n fit in \u003ccode\u003eto\u003c/code\u003e If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instaniated\n correctly, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should never allow\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be called by subject instance. It should return \u003ccode\u003eNothing\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "from -\u003e Maybe to",
        "fct-source": "src/Data-Cardinality-ContTrans.html#sContTrans",
        "fct-type": "function",
        "title": "sContTrans"
      },
      "index": {
        "description": "wrapper around uContTrans Contrary to it where prefix stands for unsafe here prefix stands for safe This is aimed to localize and exclude case when contents of from don fit in to If HasCardUCT instaniated correctly then sContTrans should never allow uContError to be called by subject instance It should return Nothing instead",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "sContTrans",
        "normalized": "a-\u003eMaybe b",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": "from-\u003eMaybe to"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTransT",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Contrary to it, where \"u-\" prefix stands\n for \"unsafe-\", here \"s-\" prefix stands for \"safe-\".\n This is aimed to localize and exclude case, when contents of \u003ccode\u003e(from a)\u003c/code\u003e don't\n fit in \u003ccode\u003e(to a)\u003c/code\u003e . If \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT_T\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instaniated\n correctly, then \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e should never allow\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContErrorT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be called by subject instance. It should return \u003ccode\u003eNothing\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "from a -\u003e Maybe (to a)",
        "fct-source": "src/Data-Cardinality-ContTrans.html#sContTransT",
        "fct-type": "function",
        "title": "sContTransT"
      },
      "index": {
        "description": "wrapper around uContTransT Contrary to it where prefix stands for unsafe here prefix stands for safe This is aimed to localize and exclude case when contents of from don fit in to If HasCardUCT instaniated correctly then sContTransT should never allow uContErrorT to be called by subject instance It should return Nothing instead",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "sContTransT",
        "normalized": "a b-\u003eMaybe(c b)",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": "from a-\u003eMaybe(to a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTransT_E",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogue to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Herre, in case of cardinality error, a more\n informative data structure is returned instead of \u003ccode\u003eNothing\u003c/code\u003e (as was\n in \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTransT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "from a -\u003e Either ContTransError (to a)",
        "fct-source": "src/Data-Cardinality-ContTrans.html#sContTransT_E",
        "fct-type": "function",
        "title": "sContTransT_E"
      },
      "index": {
        "description": "Analogue to sContTransT Herre in case of cardinality error more informative data structure is returned instead of Nothing as was in sContTransT",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "sContTransT_E",
        "normalized": "a b-\u003eEither ContTransError(c b)",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": "from a-\u003eEither ContTransError(to a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:sContTrans_E",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogue to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Herre, in case of cardinality error, a more\n informative data structure is returned instead of \u003ccode\u003eNothing\u003c/code\u003e (as was\n in \u003ccode\u003e\u003ccode\u003e\u003ca\u003esContTrans\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "from -\u003e Either ContTransError to",
        "fct-source": "src/Data-Cardinality-ContTrans.html#sContTrans_E",
        "fct-type": "function",
        "title": "sContTrans_E"
      },
      "index": {
        "description": "Analogue to sContTrans Herre in case of cardinality error more informative data structure is returned instead of Nothing as was in sContTrans",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "sContTrans_E",
        "normalized": "a-\u003eEither ContTransError b",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": "from-\u003eEither ContTransError to"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContError",
      "description": {
        "fct-descr": "\u003cp\u003eThis error is used by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n typeclass instances in cases when \u003ccode\u003efrom\u003c/code\u003e container's contents\n don't fit in \u003ccode\u003eto\u003c/code\u003e container.\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "TransformError_FromTypeName -\u003e TransformError_ToTypeName -\u003e TransformError_Details -\u003e a",
        "fct-source": "src/Data-Cardinality-ContTrans.html#uContError",
        "fct-type": "function",
        "title": "uContError"
      },
      "index": {
        "description": "This error is used by HasCardUCT typeclass instances in cases when from container contents don fit in to container",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "uContError",
        "normalized": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea",
        "package": "Cardinality",
        "partial": "Cont Error",
        "signature": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContErrorT",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003euContError\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but for use in\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHasCardUCT_T\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e typeclass instances\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "TransformError_FromTypeName -\u003e TransformError_ToTypeName -\u003e TransformError_Details -\u003e a",
        "fct-source": "src/Data-Cardinality-ContTrans.html#uContErrorT",
        "fct-type": "function",
        "title": "uContErrorT"
      },
      "index": {
        "description": "Same as uContError but for use in HasCardUCT typeclass instances",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "uContErrorT",
        "normalized": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea",
        "package": "Cardinality",
        "partial": "Cont Error",
        "signature": "TransformError_FromTypeName-\u003eTransformError_ToTypeName-\u003eTransformError_Details-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContTrans",
      "description": {
        "fct-descr": "\u003cp\u003e\"u-\" prefix stands for \"unsafe-\"\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "from -\u003e to",
        "fct-source": "src/Data-Cardinality-ContTrans.html#uContTrans",
        "fct-type": "method",
        "title": "uContTrans"
      },
      "index": {
        "description": "prefix stands for unsafe",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "uContTrans",
        "normalized": "a-\u003eb",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": "from-\u003eto"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality-ContTrans.html#v:uContTransT",
      "description": {
        "fct-descr": "\u003cp\u003e\"u-\" prefix stands for \"unsafe-\"\n\u003c/p\u003e",
        "fct-module": "Data.Cardinality.ContTrans",
        "fct-package": "Cardinality",
        "fct-signature": "from a -\u003e to a",
        "fct-source": "src/Data-Cardinality-ContTrans.html#uContTransT",
        "fct-type": "method",
        "title": "uContTransT"
      },
      "index": {
        "description": "prefix stands for unsafe",
        "hierarchy": "Data Cardinality ContTrans",
        "module": "Data.Cardinality.ContTrans",
        "name": "uContTransT",
        "normalized": "a b-\u003ec b",
        "package": "Cardinality",
        "partial": "Cont Trans",
        "signature": "from a-\u003eto a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Cardinality.html#",
      "description": {
        "fct-module": "Data.Cardinality",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-Cardinality.html",
        "fct-type": "module",
        "title": "Cardinality"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cardinality",
        "module": "Data.Cardinality",
        "name": "Cardinality",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Cardinality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-EmptySet.html#",
      "description": {
        "fct-module": "Data.EmptySet",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-EmptySet.html",
        "fct-type": "module",
        "title": "EmptySet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EmptySet",
        "module": "Data.EmptySet",
        "name": "EmptySet",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Empty Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-EmptySet.html#t:EmptySet",
      "description": {
        "fct-module": "Data.EmptySet",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-EmptySet.html#EmptySet",
        "fct-type": "data",
        "title": "EmptySet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EmptySet",
        "module": "Data.EmptySet",
        "name": "EmptySet",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Empty Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-EmptySet.html#v:EmptySet",
      "description": {
        "fct-module": "Data.EmptySet",
        "fct-package": "Cardinality",
        "fct-signature": "EmptySet",
        "fct-source": "src/Data-EmptySet.html#EmptySet",
        "fct-type": "function",
        "title": "EmptySet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EmptySet",
        "module": "Data.EmptySet",
        "name": "EmptySet",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Empty Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-Intersectable.html",
        "fct-type": "module",
        "title": "Intersectable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "Intersectable",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Intersectable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#t:Intersectable",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "class",
        "fct-source": "src/Data-Intersectable.html#Intersectable",
        "fct-type": "class",
        "title": "Intersectable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "Intersectable",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Intersectable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#t:SetsFit",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-Intersectable.html#SetsFit",
        "fct-type": "data",
        "title": "SetsFit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "SetsFit",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Sets Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:EqualSets",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "EqualSets",
        "fct-source": "src/Data-Intersectable.html#SetsFit",
        "fct-type": "function",
        "title": "EqualSets"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "EqualSets",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Equal Sets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:FirstInSecond",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "FirstInSecond",
        "fct-source": "src/Data-Intersectable.html#SetsFit",
        "fct-type": "function",
        "title": "FirstInSecond"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "FirstInSecond",
        "normalized": "",
        "package": "Cardinality",
        "partial": "First In Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:Intersection",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "Intersection set",
        "fct-source": "src/Data-Intersectable.html#SetsFit",
        "fct-type": "function",
        "title": "Intersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "Intersection",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Intersection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:NoIntersection",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "NoIntersection",
        "fct-source": "src/Data-Intersectable.html#SetsFit",
        "fct-type": "function",
        "title": "NoIntersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "NoIntersection",
        "normalized": "",
        "package": "Cardinality",
        "partial": "No Intersection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:SecondInFirst",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "SecondInFirst",
        "fct-source": "src/Data-Intersectable.html#SetsFit",
        "fct-type": "function",
        "title": "SecondInFirst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "SecondInFirst",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Second In First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-Intersectable.html#v:setFits",
      "description": {
        "fct-module": "Data.Intersectable",
        "fct-package": "Cardinality",
        "fct-signature": "set -\u003e set -\u003e SetsFit set",
        "fct-source": "src/Data-Intersectable.html#setFits",
        "fct-type": "method",
        "title": "setFits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Intersectable",
        "module": "Data.Intersectable",
        "name": "setFits",
        "normalized": "a-\u003ea-\u003eSetsFit a",
        "package": "Cardinality",
        "partial": "Fits",
        "signature": "set-\u003eset-\u003eSetsFit set"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#",
      "description": {
        "fct-module": "Data.NeverEmptyList",
        "fct-package": "Cardinality",
        "fct-signature": "module",
        "fct-source": "src/Data-NeverEmptyList.html",
        "fct-type": "module",
        "title": "NeverEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NeverEmptyList",
        "module": "Data.NeverEmptyList",
        "name": "NeverEmptyList",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Never Empty List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#t:NeverEmptyList",
      "description": {
        "fct-module": "Data.NeverEmptyList",
        "fct-package": "Cardinality",
        "fct-signature": "data",
        "fct-source": "src/Data-NeverEmptyList.html#NeverEmptyList",
        "fct-type": "data",
        "title": "NeverEmptyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NeverEmptyList",
        "module": "Data.NeverEmptyList",
        "name": "NeverEmptyList",
        "normalized": "",
        "package": "Cardinality",
        "partial": "Never Empty List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:NEL",
      "description": {
        "fct-module": "Data.NeverEmptyList",
        "fct-package": "Cardinality",
        "fct-signature": "NEL a [a]",
        "fct-source": "src/Data-NeverEmptyList.html#NeverEmptyList",
        "fct-type": "function",
        "title": "NEL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NeverEmptyList",
        "module": "Data.NeverEmptyList",
        "name": "NEL",
        "normalized": "NEL a[a]",
        "package": "Cardinality",
        "partial": "NEL",
        "signature": "NEL a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:list2nel",
      "description": {
        "fct-descr": "\u003cpre\u003elist2NeverEmptyList [] = Nothing\u003c/pre\u003e\u003cpre\u003elist2NeverEmptyList (h:t) = Just (NEL h t)\u003c/pre\u003e",
        "fct-module": "Data.NeverEmptyList",
        "fct-package": "Cardinality",
        "fct-signature": "[a] -\u003e Maybe (NeverEmptyList a)",
        "fct-source": "src/Data-NeverEmptyList.html#list2nel",
        "fct-type": "function",
        "title": "list2nel"
      },
      "index": {
        "description": "list2NeverEmptyList Nothing list2NeverEmptyList Just NEL",
        "hierarchy": "Data NeverEmptyList",
        "module": "Data.NeverEmptyList",
        "name": "list2nel",
        "normalized": "[a]-\u003eMaybe(NeverEmptyList a)",
        "package": "Cardinality",
        "partial": "",
        "signature": "[a]-\u003eMaybe(NeverEmptyList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:nel2List",
      "description": {
        "fct-descr": "\u003cpre\u003eneverEmptyList2List (NEL h t) = h:t\u003c/pre\u003e",
        "fct-module": "Data.NeverEmptyList",
        "fct-package": "Cardinality",
        "fct-signature": "NeverEmptyList a -\u003e [a]",
        "fct-source": "src/Data-NeverEmptyList.html#nel2List",
        "fct-type": "function",
        "title": "nel2List"
      },
      "index": {
        "description": "neverEmptyList2List NEL",
        "hierarchy": "Data NeverEmptyList",
        "module": "Data.NeverEmptyList",
        "name": "nel2List",
        "normalized": "NeverEmptyList a-\u003e[a]",
        "package": "Cardinality",
        "partial": "List",
        "signature": "NeverEmptyList a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Cardinality/docs/Data-NeverEmptyList.html#v:nelSingleton",
      "description": {
        "fct-module": "Data.NeverEmptyList",
        "fct-package": "Cardinality",
        "fct-signature": "a -\u003e NeverEmptyList a",
        "fct-source": "src/Data-NeverEmptyList.html#nelSingleton",
        "fct-type": "function",
        "title": "nelSingleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NeverEmptyList",
        "module": "Data.NeverEmptyList",
        "name": "nelSingleton",
        "normalized": "a-\u003eNeverEmptyList a",
        "package": "Cardinality",
        "partial": "Singleton",
        "signature": "a-\u003eNeverEmptyList a"
      }
    }
  }
]