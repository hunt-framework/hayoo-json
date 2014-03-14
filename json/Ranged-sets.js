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
        "word": "Ranged-sets"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.Boundaries",
          "name": "Boundaries",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-Boundaries.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "Boundaries",
          "package": "Ranged-sets",
          "partial": "Boundaries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Boundary is a division of an ordered type into values above\nand below the boundary.  No value can sit on a boundary.\n\u003c/p\u003e\u003cp\u003eKnown bug: for Bounded types\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eBoundaryAbove maxBound \u003c BoundaryAboveAll\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eBoundaryBelow minBound \u003e BoundaryBelowAll\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis is incorrect because there are no possible values in\nbetween the left and right sides of these inequalities.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "Boundary",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-Boundaries.html#Boundary",
          "type": "data"
        },
        "index": {
          "description": "Boundary is division of an ordered type into values above and below the boundary No value can sit on boundary Known bug for Bounded types BoundaryAbove maxBound BoundaryAboveAll BoundaryBelow minBound BoundaryBelowAll This is incorrect because there are no possible values in between the left and right sides of these inequalities",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "Boundary",
          "package": "Ranged-sets",
          "partial": "Boundary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#t:Boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistinguish between dense and sparse ordered types.  A dense type is\none in which any two values \u003ccode\u003ev1 \u003c v2\u003c/code\u003e have a third value \u003ccode\u003ev3\u003c/code\u003e such that\n\u003ccode\u003ev1 \u003c v3 \u003c v2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn theory the floating types are dense, although in practice they can only have\nfinitely many values.  This class treats them as dense.\n\u003c/p\u003e\u003cp\u003eTuples up to 4 members are declared as instances.  Larger tuples may be added\nif necessary.\n\u003c/p\u003e\u003cp\u003eMost values of sparse types have an \u003ccode\u003eadjacentBelow\u003c/code\u003e, such that, for all x:\n\u003c/p\u003e\u003cpre\u003e case adjacentBelow x of\n    Just x1 -\u003e adjacent x1 x\n    Nothing -\u003e True\n\u003c/pre\u003e\u003cp\u003eThe exception is for bounded types when \u003ccode\u003ex == lowerBound\u003c/code\u003e.  For dense types\n\u003ccode\u003eadjacentBelow\u003c/code\u003e always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis approach was suggested by Ben Rudiak-Gould on comp.lang.functional.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "DiscreteOrdered",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-Boundaries.html#DiscreteOrdered",
          "type": "class"
        },
        "index": {
          "description": "Distinguish between dense and sparse ordered types dense type is one in which any two values v1 v2 have third value v3 such that v1 v3 v2 In theory the floating types are dense although in practice they can only have finitely many values This class treats them as dense Tuples up to members are declared as instances Larger tuples may be added if necessary Most values of sparse types have an adjacentBelow such that for all case adjacentBelow of Just x1 adjacent x1 Nothing True The exception is for bounded types when lowerBound For dense types adjacentBelow always returns Nothing This approach was suggested by Ben Rudiak-Gould on comp.lang.functional",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "DiscreteOrdered",
          "package": "Ranged-sets",
          "partial": "Discrete Ordered",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#t:DiscreteOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eabove\u003c/a\u003e\u003c/code\u003e, but with the arguments reversed for more intuitive infix\n usage.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "(/\u003e/)",
          "package": "Ranged-sets",
          "signature": "v -\u003e Boundary v -\u003e Bool",
          "source": "src/Data-Ranged-Boundaries.html#%2F%3E%2F",
          "type": "function"
        },
        "index": {
          "description": "Same as above but with the arguments reversed for more intuitive infix usage",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "(/\u003e/) /\u003e/",
          "normalized": "a-\u003eBoundary a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "v-\u003eBoundary v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:-47--62--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe argument is the highest value below the boundary.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryAbove",
          "package": "Ranged-sets",
          "signature": "BoundaryAbove a",
          "source": "src/Data-Ranged-Boundaries.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "The argument is the highest value below the boundary",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryAbove",
          "package": "Ranged-sets",
          "partial": "Boundary Above",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:BoundaryAbove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe boundary above all values.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryAboveAll",
          "package": "Ranged-sets",
          "signature": "BoundaryAboveAll",
          "source": "src/Data-Ranged-Boundaries.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "The boundary above all values",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryAboveAll",
          "package": "Ranged-sets",
          "partial": "Boundary Above All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:BoundaryAboveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe argument is the lowest value above the boundary.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryBelow",
          "package": "Ranged-sets",
          "signature": "BoundaryBelow a",
          "source": "src/Data-Ranged-Boundaries.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "The argument is the lowest value above the boundary",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryBelow",
          "package": "Ranged-sets",
          "partial": "Boundary Below",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:BoundaryBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe boundary below all values.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryBelowAll",
          "package": "Ranged-sets",
          "signature": "BoundaryBelowAll",
          "source": "src/Data-Ranged-Boundaries.html#Boundary",
          "type": "function"
        },
        "index": {
          "description": "The boundary below all values",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "BoundaryBelowAll",
          "package": "Ranged-sets",
          "partial": "Boundary Below All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:BoundaryBelowAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the value is above the boundary, false otherwise.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "above",
          "package": "Ranged-sets",
          "signature": "Boundary v -\u003e v -\u003e Bool",
          "source": "src/Data-Ranged-Boundaries.html#above",
          "type": "function"
        },
        "index": {
          "description": "True if the value is above the boundary false otherwise",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "above",
          "normalized": "Boundary a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "Boundary v-\u003ev-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo values \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e are adjacent if \u003ccode\u003ex \u003c y\u003c/code\u003e and there does not\n exist a third value between them.  Always \u003ccode\u003eFalse\u003c/code\u003e for dense types.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "adjacent",
          "package": "Ranged-sets",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Boundaries.html#adjacent",
          "type": "method"
        },
        "index": {
          "description": "Two values and are adjacent if and there does not exist third value between them Always False for dense types",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "adjacent",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:adjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value immediately below the argument, if it can be determined.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "adjacentBelow",
          "package": "Ranged-sets",
          "signature": "a -\u003e Maybe a",
          "source": "src/Data-Ranged-Boundaries.html#adjacentBelow",
          "type": "method"
        },
        "index": {
          "description": "The value immediately below the argument if it can be determined",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "adjacentBelow",
          "normalized": "a-\u003eMaybe a",
          "package": "Ranged-sets",
          "partial": "Below",
          "signature": "a-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:adjacentBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck adjacency, allowing for case where x = maxBound.  Use as the\n definition of \u003ca\u003eadjacent\u003c/a\u003e for bounded enumerated types such as Int and Char.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "boundedAdjacent",
          "package": "Ranged-sets",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Boundaries.html#boundedAdjacent",
          "type": "function"
        },
        "index": {
          "description": "Check adjacency allowing for case where maxBound Use as the definition of adjacent for bounded enumerated types such as Int and Char",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "boundedAdjacent",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Adjacent",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:boundedAdjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe usual implementation of \u003ccode\u003e\u003ca\u003eadjacentBelow\u003c/a\u003e\u003c/code\u003e for bounded enumerated types.\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "boundedBelow",
          "package": "Ranged-sets",
          "signature": "a -\u003e Maybe a",
          "source": "src/Data-Ranged-Boundaries.html#boundedBelow",
          "type": "function"
        },
        "index": {
          "description": "The usual implementation of adjacentBelow for bounded enumerated types",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "boundedBelow",
          "normalized": "a-\u003eMaybe a",
          "package": "Ranged-sets",
          "partial": "Below",
          "signature": "a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:boundedBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck adjacency for sparse enumerated types (i.e. where there\n is no value between \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003esucc x\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Ranged.Boundaries",
          "name": "enumAdjacent",
          "package": "Ranged-sets",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Boundaries.html#enumAdjacent",
          "type": "function"
        },
        "index": {
          "description": "Check adjacency for sparse enumerated types i.e where there is no value between and succ",
          "hierarchy": "Data Ranged Boundaries",
          "module": "Data.Ranged.Boundaries",
          "name": "enumAdjacent",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Adjacent",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Boundaries.html#v:enumAdjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "RangedSet",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-RangedSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "RangedSet",
          "package": "Ranged-sets",
          "partial": "Ranged Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RSet (for Ranged Set) is a list of ranges.  The ranges must be sorted\n and not overlap.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "RSet",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-RangedSet.html#RSet",
          "type": "data"
        },
        "index": {
          "description": "An RSet for Ranged Set is list of ranges The ranges must be sorted and not overlap",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "RSet",
          "package": "Ranged-sets",
          "partial": "RSet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#t:RSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet difference.  Infix precedence is left 6.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "(-!-)",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#-%21-",
          "type": "function"
        },
        "index": {
          "description": "Set difference Infix precedence is left",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "(-!-) -!-",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "signature": "RSet v-\u003eRSet v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:-45--33--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet intersection for ranged sets.  Infix precedence is left 7.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "(-/\\-)",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#-%2F%5C-",
          "type": "function"
        },
        "index": {
          "description": "Set intersection for ranged sets Infix precedence is left",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "(-/\\-) -/\\-",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "signature": "RSet v-\u003eRSet v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:-45--47--92--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the first argument is a strict subset of the second argument.\n\u003c/p\u003e\u003cp\u003eInfix precedence is left 5.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "(-\u003c-)",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#-%3C-",
          "type": "function"
        },
        "index": {
          "description": "True if the first argument is strict subset of the second argument Infix precedence is left",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "(-\u003c-) -\u003c-",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet v-\u003eRSet v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:-45--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the first argument is a subset of the second argument, or is\n equal.\n\u003c/p\u003e\u003cp\u003eInfix precedence is left 5.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "(-\u003c=-)",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#-%3C%3D-",
          "type": "function"
        },
        "index": {
          "description": "True if the first argument is subset of the second argument or is equal Infix precedence is left",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "(-\u003c=-) -\u003c=-",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet v-\u003eRSet v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:-45--60--61--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the value is within the ranged set.  Infix precedence is left 5.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "(-?-)",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#-%3F-",
          "type": "function"
        },
        "index": {
          "description": "True if the value is within the ranged set Infix precedence is left",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "(-?-) -?-",
          "normalized": "RSet a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet v-\u003ev-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:-45--63--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet union for ranged sets.  Infix precedence is left 6.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "(-\\/-)",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#-%5C%2F-",
          "type": "function"
        },
        "index": {
          "description": "Set union for ranged sets Infix precedence is left",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "(-\\/-) -\\/-",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "signature": "RSet v-\u003eRSet v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:-45--92--47--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Ranged Set from a list of ranges.  The list may contain\n ranges that overlap or are not in ascending order.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "makeRangedSet",
          "package": "Ranged-sets",
          "signature": "[Range v] -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#makeRangedSet",
          "type": "function"
        },
        "index": {
          "description": "Create new Ranged Set from list of ranges The list may contain ranges that overlap or are not in ascending order",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "makeRangedSet",
          "normalized": "[Range a]-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Ranged Set",
          "signature": "[Range v]-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:makeRangedSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRearrange and merge the ranges in the list so that they are in order and\n non-overlapping.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "normaliseRangeList",
          "package": "Ranged-sets",
          "signature": "[Range v] -\u003e [Range v]",
          "source": "src/Data-Ranged-RangedSet.html#normaliseRangeList",
          "type": "function"
        },
        "index": {
          "description": "Rearrange and merge the ranges in the list so that they are in order and non-overlapping",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "normaliseRangeList",
          "normalized": "[Range a]-\u003e[Range a]",
          "package": "Ranged-sets",
          "partial": "Range List",
          "signature": "[Range v]-\u003e[Range v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:normaliseRangeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDe Morgan's Law for Intersection.\n\u003c/p\u003e\u003cpre\u003e prop_de_morgan_intersection rs1 rs2 =\n    rSetNegation (rs1 -/\\- rs2) == (rSetNegation rs1 -\\/- rSetNegation rs2)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_de_morgan_intersection",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_de_morgan_intersection",
          "type": "function"
        },
        "index": {
          "description": "De Morgan Law for Intersection prop de morgan intersection rs1 rs2 rSetNegation rs1 rs2 rSetNegation rs1 rSetNegation rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_de_morgan_intersection",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_de_morgan_intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDe Morgan's Law for Union.\n\u003c/p\u003e\u003cpre\u003e prop_de_morgan_union rs1 rs2 =\n    rSetNegation (rs1 -\\/- rs2) == (rSetNegation rs1 -/\\- rSetNegation rs2)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_de_morgan_union",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_de_morgan_union",
          "type": "function"
        },
        "index": {
          "description": "De Morgan Law for Union prop de morgan union rs1 rs2 rSetNegation rs1 rs2 rSetNegation rs1 rSetNegation rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_de_morgan_union",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_de_morgan_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe difference of two sets intersected with the subtractand is empty.\n\u003c/p\u003e\u003cpre\u003e prop_diff_intersect rs1 rs2 =\n    rSetIsEmpty ((rs1 -!- rs2) -/\\- rs2)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_diff_intersect",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_diff_intersect",
          "type": "function"
        },
        "index": {
          "description": "The difference of two sets intersected with the subtractand is empty prop diff intersect rs1 rs2 rSetIsEmpty rs1 rs2 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_diff_intersect",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_diff_intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIff a value is in ranged set 1 and not in ranged set 2 then it is in the\n difference of the two.\n\u003c/p\u003e\u003cpre\u003e prop_difference rs1 rs2 v =\n    (rs1 -?- v && not (rs2 -?- v)) == ((rs1 -!- rs2) -?- v)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_difference",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_difference",
          "type": "function"
        },
        "index": {
          "description": "Iff value is in ranged set and not in ranged set then it is in the difference of the two prop difference rs1 rs2 rs1 not rs2 rs1 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_difference",
          "normalized": "RSet a-\u003eRSet a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty set has no members.\n\u003c/p\u003e\u003cpre\u003e prop_empty v = not (rSetEmpty -?- v)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_empty",
          "package": "Ranged-sets",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_empty",
          "type": "function"
        },
        "index": {
          "description": "The empty set has no members prop empty not rSetEmpty",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_empty",
          "normalized": "a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of a set with its negation is empty.\n\u003c/p\u003e\u003cpre\u003e prop_empty_intersection rs =\n    rSetIsEmpty (rs -/\\- rSetNegation rs)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_empty_intersection",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_empty_intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of set with its negation is empty prop empty intersection rs rSetIsEmpty rs rSetNegation rs",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_empty_intersection",
          "normalized": "RSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_empty_intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full set has every member.\n\u003c/p\u003e\u003cpre\u003e prop_full v = rSetFull -?- v\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_full",
          "package": "Ranged-sets",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_full",
          "type": "function"
        },
        "index": {
          "description": "The full set has every member prop full rSetFull",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_full",
          "normalized": "a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a set with its negation is full.\n\u003c/p\u003e\u003cpre\u003e prop_full_union rs v =\n    rSetIsFull (rs -\\/- rSetNegation rs)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_full_union",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_full_union",
          "type": "function"
        },
        "index": {
          "description": "The union of set with its negation is full prop full union rs rSetIsFull rs rSetNegation rs",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_full_union",
          "normalized": "RSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_full_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIff a value is in a range list then it is in a ranged set\n constructed from that list.\n\u003c/p\u003e\u003cpre\u003e prop_has ls v = (ls `rangeListHas` v) == makeRangedSet ls -?- v\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_has",
          "package": "Ranged-sets",
          "signature": "[Range a] -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_has",
          "type": "function"
        },
        "index": {
          "description": "Iff value is in range list then it is in ranged set constructed from that list prop has ls ls rangeListHas makeRangedSet ls",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_has",
          "normalized": "[Range a]-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "[Range a]-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_has"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIff a value is in both of two ranged sets then it is n the intersection\n of those two sets.\n\u003c/p\u003e\u003cpre\u003e prop_intersection rs1 rs2 v =\n    (rs1 -?- v && rs2 -?- v) == ((rs1 -/\\- rs2) -?- v)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_intersection",
          "type": "function"
        },
        "index": {
          "description": "Iff value is in both of two ranged sets then it is the intersection of those two sets prop intersection rs1 rs2 rs1 rs2 rs1 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection",
          "normalized": "RSet a-\u003eRSet a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection associates.\n\u003c/p\u003e\u003cpre\u003e prop_intersection_associates rs1 rs2 rs3 =\n    ((rs1 -/\\- rs2) -/\\- rs3) == (rs1 -/\\- (rs2 -/\\- rs3))\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection_associates",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_intersection_associates",
          "type": "function"
        },
        "index": {
          "description": "Intersection associates prop intersection associates rs1 rs2 rs3 rs1 rs2 rs3 rs1 rs2 rs3",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection_associates",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_intersection_associates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection commutes.\n\u003c/p\u003e\u003cpre\u003e prop_intersection_commutes rs1 rs2 = (rs1 -/\\- rs2) == (rs2 -/\\- rs1)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection_commutes",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_intersection_commutes",
          "type": "function"
        },
        "index": {
          "description": "Intersection commutes prop intersection commutes rs1 rs2 rs1 rs2 rs2 rs1",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection_commutes",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_intersection_commutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of two sets is the non-strict subset of both.\n\u003c/p\u003e\u003cpre\u003e prop_intersection_subset rs1 rs2 =\n    i -\u003c=- rs1 && i -\u003c=- rs2\n    where\n       i = rs1 -/\\- rs2\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection_subset",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_intersection_subset",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two sets is the non-strict subset of both prop intersection subset rs1 rs2 rs1 rs2 where rs1 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_intersection_subset",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_intersection_subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIff a value is not in a ranged set then it is in its negation.\n\u003c/p\u003e\u003cpre\u003e prop_negation rs v = rs -?- v == not (rSetNegation rs -?- v)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_negation",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_negation",
          "type": "function"
        },
        "index": {
          "description": "Iff value is not in ranged set then it is in its negation prop negation rs rs not rSetNegation rs",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_negation",
          "normalized": "RSet a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_negation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set that contains a value is not empty\n\u003c/p\u003e\u003cpre\u003e prop_not_empty rs v = (rs -?- v) ==\u003e not (rSetIsEmpty rs)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_not_empty",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e a -\u003e Property",
          "source": "src/Data-Ranged-RangedSet.html#prop_not_empty",
          "type": "function"
        },
        "index": {
          "description": "set that contains value is not empty prop not empty rs rs not rSetIsEmpty rs",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_not_empty",
          "normalized": "RSet a-\u003ea-\u003eProperty",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003ea-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_not_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set is not the strict subset of itself.\n\u003c/p\u003e\u003cpre\u003e prop_strict_subset rs = not (rs -\u003c- rs)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_strict_subset",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_strict_subset",
          "type": "function"
        },
        "index": {
          "description": "set is not the strict subset of itself prop strict subset rs not rs rs",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_strict_subset",
          "normalized": "RSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_strict_subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set is the non-strict subset of itself.\n\u003c/p\u003e\u003cpre\u003e prop_subset rs = rs -\u003c=- rs\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_subset",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_subset",
          "type": "function"
        },
        "index": {
          "description": "set is the non-strict subset of itself prop subset rs rs rs",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_subset",
          "normalized": "RSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_subset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifies the correct membership of a set containing all integers\n starting with the digit \"1\" up to 19999.\n\u003c/p\u003e\u003cpre\u003e prop_unfold = (v \u003c= 99999 && head (show v) == '1') == (initial1 -?- v)\n    where\n       initial1 = rSetUnfold (BoundaryBelow 1) addNines times10\n       addNines (BoundaryBelow n) = BoundaryAbove $ n * 2 - 1\n       times10 (BoundaryBelow n) =\n          if n \u003c= 1000 then Just $ BoundaryBelow $ n * 10 else Nothing\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_unfold",
          "package": "Ranged-sets",
          "signature": "Integer -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_unfold",
          "type": "function"
        },
        "index": {
          "description": "Verifies the correct membership of set containing all integers starting with the digit up to prop unfold head show initial1 where initial1 rSetUnfold BoundaryBelow addNines times10 addNines BoundaryBelow BoundaryAbove times10 BoundaryBelow if then Just BoundaryBelow else Nothing",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_unfold",
          "normalized": "Integer-\u003eBool",
          "package": "Ranged-sets",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIff a value is in either of two ranged sets then it is in the union of\n those two sets.\n\u003c/p\u003e\u003cpre\u003e prop_union rs1 rs2 v =\n    (rs1 -?- v || rs2 -?- v) == ((rs1 -\\/- rs2) -?- v)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_union",
          "type": "function"
        },
        "index": {
          "description": "Iff value is in either of two ranged sets then it is in the union of those two sets prop union rs1 rs2 rs1 rs2 rs1 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union",
          "normalized": "RSet a-\u003eRSet a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion associates.\n\u003c/p\u003e\u003cpre\u003e prop_union_associates rs1 rs2 rs3 =\n    ((rs1 -\\/- rs2) -\\/- rs3) == (rs1 -\\/- (rs2 -\\/- rs3))\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_associates",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_union_associates",
          "type": "function"
        },
        "index": {
          "description": "Union associates prop union associates rs1 rs2 rs3 rs1 rs2 rs3 rs1 rs2 rs3",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_associates",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_union_associates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion commutes.\n\u003c/p\u003e\u003cpre\u003e prop_union_commutes rs1 rs2 = (rs1 -\\/- rs2) == (rs2 -\\/- rs1)\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_commutes",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_union_commutes",
          "type": "function"
        },
        "index": {
          "description": "Union commutes prop union commutes rs1 rs2 rs1 rs2 rs2 rs1",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_commutes",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_union_commutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf rs1 - rs2 is not empty then the union of rs1 and rs2 will be a strict\n superset of rs2.\n\u003c/p\u003e\u003cpre\u003e prop_union_strict_superset rs1 rs2 =\n    (not $ rSetIsEmpty (rs1 -!- rs2))\n    ==\u003e (rs2 -\u003c- (rs1 -\\/- rs2))\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_strict_superset",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Property",
          "source": "src/Data-Ranged-RangedSet.html#prop_union_strict_superset",
          "type": "function"
        },
        "index": {
          "description": "If rs1 rs2 is not empty then the union of rs1 and rs2 will be strict superset of rs2 prop union strict superset rs1 rs2 not rSetIsEmpty rs1 rs2 rs2 rs1 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_strict_superset",
          "normalized": "RSet a-\u003eRSet a-\u003eProperty",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_union_strict_superset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of two sets is the non-strict superset of both.\n\u003c/p\u003e\u003cpre\u003e prop_union_superset rs1 rs2 =\n    rs1 -\u003c=- u && rs2 -\u003c=- u\n    where\n       u = rs1 -\\/- rs2\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_superset",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_union_superset",
          "type": "function"
        },
        "index": {
          "description": "The union of two sets is the non-strict superset of both prop union superset rs1 rs2 rs1 rs2 where rs1 rs2",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_union_superset",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "signature": "RSet a-\u003eRSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_union_superset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normalised range list is valid for unsafeRangedSet\n\u003c/p\u003e\u003cpre\u003e prop_validNormalised ls = validRangeList $ normaliseRangeList ls\n\u003c/pre\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_validNormalised",
          "package": "Ranged-sets",
          "signature": "[Range a] -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#prop_validNormalised",
          "type": "function"
        },
        "index": {
          "description": "normalised range list is valid for unsafeRangedSet prop validNormalised ls validRangeList normaliseRangeList ls",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "prop_validNormalised",
          "normalized": "[Range a]-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Normalised",
          "signature": "[Range a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:prop_validNormalised"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetDifference",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#rSetDifference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetDifference",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Set Difference",
          "signature": "RSet v-\u003eRSet v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetDifference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty set.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetEmpty",
          "package": "Ranged-sets",
          "signature": "RSet a",
          "source": "src/Data-Ranged-RangedSet.html#rSetEmpty",
          "type": "function"
        },
        "index": {
          "description": "The empty set",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetEmpty",
          "package": "Ranged-sets",
          "partial": "Set Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set that contains everything.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetFull",
          "package": "Ranged-sets",
          "signature": "RSet a",
          "source": "src/Data-Ranged-RangedSet.html#rSetFull",
          "type": "function"
        },
        "index": {
          "description": "The set that contains everything",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetFull",
          "package": "Ranged-sets",
          "partial": "Set Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetHas",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#rSetHas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetHas",
          "normalized": "RSet a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Set Has",
          "signature": "RSet v-\u003ev-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetHas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIntersection",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#rSetIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIntersection",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Set Intersection",
          "signature": "RSet v-\u003eRSet v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the set has no members.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsEmpty",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#rSetIsEmpty",
          "type": "function"
        },
        "index": {
          "description": "True if the set has no members",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsEmpty",
          "normalized": "RSet a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Set Is Empty",
          "signature": "RSet v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetIsEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the negation of the set has no members.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsFull",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#rSetIsFull",
          "type": "function"
        },
        "index": {
          "description": "True if the negation of the set has no members",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsFull",
          "normalized": "RSet a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Set Is Full",
          "signature": "RSet v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetIsFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsSubset",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#rSetIsSubset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsSubset",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Set Is Subset",
          "signature": "RSet v-\u003eRSet v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetIsSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsSubsetStrict",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#rSetIsSubsetStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetIsSubsetStrict",
          "normalized": "RSet a-\u003eRSet a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Set Is Subset Strict",
          "signature": "RSet v-\u003eRSet v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetIsSubsetStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet negation.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetNegation",
          "package": "Ranged-sets",
          "signature": "RSet a -\u003e RSet a",
          "source": "src/Data-Ranged-RangedSet.html#rSetNegation",
          "type": "function"
        },
        "index": {
          "description": "Set negation",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetNegation",
          "normalized": "RSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Set Negation",
          "signature": "RSet a-\u003eRSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetNegation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetRanges",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e [Range v]",
          "source": "src/Data-Ranged-RangedSet.html#rSetRanges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetRanges",
          "normalized": "RSet a-\u003e[Range a]",
          "package": "Ranged-sets",
          "partial": "Set Ranges",
          "signature": "RSet v-\u003e[Range v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a range set.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetUnfold",
          "package": "Ranged-sets",
          "signature": "Boundary a-\u003e (Boundary a -\u003e Boundary a)-\u003e (Boundary a -\u003e Maybe (Boundary a))-\u003e RSet a",
          "type": "function"
        },
        "index": {
          "description": "Construct range set",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetUnfold",
          "normalized": "Boundary a-\u003e(Boundary a-\u003eBoundary a)-\u003e(Boundary a-\u003eMaybe(Boundary a))-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Set Unfold",
          "signature": "Boundary a-\u003e(Boundary a-\u003eBoundary a)-\u003e(Boundary a-\u003eMaybe(Boundary a))-\u003eRSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetUnfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.RangedSet",
          "name": "rSetUnion",
          "package": "Ranged-sets",
          "signature": "RSet v -\u003e RSet v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#rSetUnion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSetUnion",
          "normalized": "RSet a-\u003eRSet a-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Set Union",
          "signature": "RSet v-\u003eRSet v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSetUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Ranged Set from a single element.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "rSingleton",
          "package": "Ranged-sets",
          "signature": "v -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#rSingleton",
          "type": "function"
        },
        "index": {
          "description": "Create Ranged Set from single element",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "rSingleton",
          "normalized": "a-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Singleton",
          "signature": "v-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:rSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Ranged Set from a list of ranges. \u003ccode\u003evalidRangeList ranges\u003c/code\u003e\n must return \u003ccode\u003eTrue\u003c/code\u003e.  This precondition is not checked.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "unsafeRangedSet",
          "package": "Ranged-sets",
          "signature": "[Range v] -\u003e RSet v",
          "source": "src/Data-Ranged-RangedSet.html#unsafeRangedSet",
          "type": "function"
        },
        "index": {
          "description": "Create new Ranged Set from list of ranges validRangeList ranges must return True This precondition is not checked",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "unsafeRangedSet",
          "normalized": "[Range a]-\u003eRSet a",
          "package": "Ranged-sets",
          "partial": "Ranged Set",
          "signature": "[Range v]-\u003eRSet v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:unsafeRangedSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if the ranges in the list are both in order and non-overlapping.\n If so then they are suitable input for the unsafeRangedSet function.\n\u003c/p\u003e",
          "module": "Data.Ranged.RangedSet",
          "name": "validRangeList",
          "package": "Ranged-sets",
          "signature": "[Range v] -\u003e Bool",
          "source": "src/Data-Ranged-RangedSet.html#validRangeList",
          "type": "function"
        },
        "index": {
          "description": "Determine if the ranges in the list are both in order and non-overlapping If so then they are suitable input for the unsafeRangedSet function",
          "hierarchy": "Data Ranged RangedSet",
          "module": "Data.Ranged.RangedSet",
          "name": "validRangeList",
          "normalized": "[Range a]-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range List",
          "signature": "[Range v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-RangedSet.html#v:validRangeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA range has an upper and lower boundary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "Ranges",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-Ranges.html",
          "type": "module"
        },
        "index": {
          "description": "range has an upper and lower boundary",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "Ranges",
          "package": "Ranged-sets",
          "partial": "Ranges",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Range has upper and lower boundaries.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "Range",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged-Ranges.html#Range",
          "type": "data"
        },
        "index": {
          "description": "Range has upper and lower boundaries",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "Range",
          "package": "Ranged-sets",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.Ranges",
          "name": "Range",
          "package": "Ranged-sets",
          "signature": "Range",
          "source": "src/Data-Ranged-Ranges.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "Range",
          "package": "Ranged-sets",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty range\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "emptyRange",
          "package": "Ranged-sets",
          "signature": "Range v",
          "source": "src/Data-Ranged-Ranges.html#emptyRange",
          "type": "function"
        },
        "index": {
          "description": "The empty range",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "emptyRange",
          "package": "Ranged-sets",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:emptyRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full range.  All values are within it.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "fullRange",
          "package": "Ranged-sets",
          "signature": "Range v",
          "source": "src/Data-Ranged-Ranges.html#fullRange",
          "type": "function"
        },
        "index": {
          "description": "The full range All values are within it",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "fullRange",
          "package": "Ranged-sets",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:fullRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe difference of two ranges has a value iff the first range has it and\n the second does not.\n\u003c/p\u003e\u003cpre\u003e prop_differenceRange r1 r2 n =\n    (r1 `rangeHas` n && not (r2 `rangeHas` n))\n    == (r1 `rangeDifference` r2) `rangeListHas` n\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_differenceRange",
          "package": "Ranged-sets",
          "signature": "Range a -\u003e Range a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_differenceRange",
          "type": "function"
        },
        "index": {
          "description": "The difference of two ranges has value iff the first range has it and the second does not prop differenceRange r1 r2 r1 rangeHas not r2 rangeHas r1 rangeDifference r2 rangeListHas",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_differenceRange",
          "normalized": "Range a-\u003eRange a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range",
          "signature": "Range a-\u003eRange a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_differenceRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty range is not a singleton.\n\u003c/p\u003e\u003cpre\u003e prop_emptyNonSingleton = rangeSingletonValue emptyRange == Nothing\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_emptyNonSingleton",
          "package": "Ranged-sets",
          "signature": "Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_emptyNonSingleton",
          "type": "function"
        },
        "index": {
          "description": "The empty range is not singleton prop emptyNonSingleton rangeSingletonValue emptyRange Nothing",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_emptyNonSingleton",
          "package": "Ranged-sets",
          "partial": "Non Singleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_emptyNonSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange enclosure makes union an identity function.\n\u003c/p\u003e\u003cpre\u003e prop_enclosureUnion r1 r2 =\n    rangeEncloses r1 r2 == (rangeUnion r1 r2 == [r1])\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_enclosureUnion",
          "package": "Ranged-sets",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_enclosureUnion",
          "type": "function"
        },
        "index": {
          "description": "Range enclosure makes union an identity function prop enclosureUnion r1 r2 rangeEncloses r1 r2 rangeUnion r1 r2 r1",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_enclosureUnion",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Union",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_enclosureUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full range is not a singleton.\n\u003c/p\u003e\u003cpre\u003e prop_fullNonSingleton = rangeSingletonValue fullRange == Nothing\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_fullNonSingleton",
          "package": "Ranged-sets",
          "signature": "Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_fullNonSingleton",
          "type": "function"
        },
        "index": {
          "description": "The full range is not singleton prop fullNonSingleton rangeSingletonValue fullRange Nothing",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_fullNonSingleton",
          "package": "Ranged-sets",
          "partial": "Non Singleton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_fullNonSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all integers x and y, any range formed from boundaries on either side\n of x and y is a singleton iff it contains exactly one integer.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_intSingleton",
          "package": "Ranged-sets",
          "signature": "Integer -\u003e Integer -\u003e Property",
          "source": "src/Data-Ranged-Ranges.html#prop_intSingleton",
          "type": "function"
        },
        "index": {
          "description": "For all integers and any range formed from boundaries on either side of and is singleton iff it contains exactly one integer",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_intSingleton",
          "normalized": "Integer-\u003eInteger-\u003eProperty",
          "package": "Ranged-sets",
          "partial": "Singleton",
          "signature": "Integer-\u003eInteger-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_intSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIff two ranges overlap then their intersection is non-empty.\n\u003c/p\u003e\u003cpre\u003e prop_intersectionOverlap r1 r2 =\n     (rangeIsEmpty $ rangeIntersection r1 r2) == (rangeOverlap r1 r2)\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_intersectionOverlap",
          "package": "Ranged-sets",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_intersectionOverlap",
          "type": "function"
        },
        "index": {
          "description": "Iff two ranges overlap then their intersection is non-empty prop intersectionOverlap r1 r2 rangeIsEmpty rangeIntersection r1 r2 rangeOverlap r1 r2",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_intersectionOverlap",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Overlap",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_intersectionOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of two ranges has a value iff both ranges have it.\n\u003c/p\u003e\u003cpre\u003e prop_intersectionRange r1 r2 n =\n    (r1 `rangeHas` n && r2 `rangeHas` n)\n    == (r1 `rangeIntersection` r2) `rangeHas` n\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_intersectionRange",
          "package": "Ranged-sets",
          "signature": "Range a -\u003e Range a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_intersectionRange",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two ranges has value iff both ranges have it prop intersectionRange r1 r2 r1 rangeHas r2 rangeHas r1 rangeIntersection r2 rangeHas",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_intersectionRange",
          "normalized": "Range a-\u003eRange a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range",
          "signature": "Range a-\u003eRange a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_intersectionRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor real x and y, \u003ccode\u003ex \u003c y\u003c/code\u003e implies that any range between them is a\n non-singleton.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_nonSingleton",
          "package": "Ranged-sets",
          "signature": "Double -\u003e Double -\u003e Property",
          "source": "src/Data-Ranged-Ranges.html#prop_nonSingleton",
          "type": "function"
        },
        "index": {
          "description": "For real and implies that any range between them is non-singleton",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_nonSingleton",
          "normalized": "Double-\u003eDouble-\u003eProperty",
          "package": "Ranged-sets",
          "partial": "Singleton",
          "signature": "Double-\u003eDouble-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_nonSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA singleton range can have its value extracted.\n\u003c/p\u003e\u003cpre\u003e prop_singletonRangeConverse v =\n    rangeSingletonValue (singletonRange v) == Just v\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_singletonRangeConverse",
          "package": "Ranged-sets",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_singletonRangeConverse",
          "type": "function"
        },
        "index": {
          "description": "singleton range can have its value extracted prop singletonRangeConverse rangeSingletonValue singletonRange Just",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_singletonRangeConverse",
          "normalized": "a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range Converse",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_singletonRangeConverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange Singleton has its member.\n\u003c/p\u003e\u003cpre\u003e prop_singletonRangeHas v = singletonRange v `rangeHas` v\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_singletonRangeHas",
          "package": "Ranged-sets",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_singletonRangeHas",
          "type": "function"
        },
        "index": {
          "description": "Range Singleton has its member prop singletonRangeHas singletonRange rangeHas",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_singletonRangeHas",
          "normalized": "a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range Has",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_singletonRangeHas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange Singleton has only its member.\n\u003c/p\u003e\u003cpre\u003e prop_singletonHasOnly v1 v2 =\n    (v1 == v2) == (singletonRange v1 `rangeHas` v2)\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_singletonRangeHasOnly",
          "package": "Ranged-sets",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_singletonRangeHasOnly",
          "type": "function"
        },
        "index": {
          "description": "Range Singleton has only its member prop singletonHasOnly v1 v2 v1 v2 singletonRange v1 rangeHas v2",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_singletonRangeHasOnly",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range Has Only",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_singletonRangeHasOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of two ranges has a value iff either range has it.\n\u003c/p\u003e\u003cpre\u003e prop_unionRange r1 r2 n =\n    (r1 `rangeHas` n || r2 `rangeHas` n)\n    == (r1 `rangeUnion` r2) `rangeListHas` n\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_unionRange",
          "package": "Ranged-sets",
          "signature": "Range a -\u003e Range a -\u003e a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_unionRange",
          "type": "function"
        },
        "index": {
          "description": "The union of two ranges has value iff either range has it prop unionRange r1 r2 r1 rangeHas r2 rangeHas r1 rangeUnion r2 rangeListHas",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_unionRange",
          "normalized": "Range a-\u003eRange a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range",
          "signature": "Range a-\u003eRange a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_unionRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of two ranges always contains one or two ranges.\n\u003c/p\u003e\u003cpre\u003e prop_unionRangeLength r1 r2 = (n == 1) || (n == 2)\n    where n = length $ rangeUnion r1 r2\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "prop_unionRangeLength",
          "package": "Ranged-sets",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#prop_unionRangeLength",
          "type": "function"
        },
        "index": {
          "description": "The union of two ranges always contains one or two ranges prop unionRangeLength r1 r2 where length rangeUnion r1 r2",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "prop_unionRangeLength",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Range Length",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:prop_unionRangeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erange1\u003c/code\u003e minus \u003ccode\u003erange2\u003c/code\u003e.  Returns zero, one or two results.  Multiple\n results are guaranteed to have non-empty gaps in between, but may not be in\n ascending order.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeDifference",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Range v -\u003e [Range v]",
          "source": "src/Data-Ranged-Ranges.html#rangeDifference",
          "type": "function"
        },
        "index": {
          "description": "range1 minus range2 Returns zero one or two results Multiple results are guaranteed to have non-empty gaps in between but may not be in ascending order",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeDifference",
          "normalized": "Range a-\u003eRange a-\u003e[Range a]",
          "package": "Ranged-sets",
          "partial": "Difference",
          "signature": "Range v-\u003eRange v-\u003e[Range v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeDifference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first range encloses the second if every value in the second range is\n also within the first range.  If the second range is empty then this is\n always true.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeEncloses",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Range v -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#rangeEncloses",
          "type": "function"
        },
        "index": {
          "description": "The first range encloses the second if every value in the second range is also within the first range If the second range is empty then this is always true",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeEncloses",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Encloses",
          "signature": "Range v-\u003eRange v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeEncloses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the value is within the range.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeHas",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e v -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#rangeHas",
          "type": "function"
        },
        "index": {
          "description": "True if the value is within the range",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeHas",
          "normalized": "Range a-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Has",
          "signature": "Range v-\u003ev-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeHas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection of two ranges, if any.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeIntersection",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Range v -\u003e Range v",
          "source": "src/Data-Ranged-Ranges.html#rangeIntersection",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two ranges if any",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeIntersection",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "Ranged-sets",
          "partial": "Intersection",
          "signature": "Range v-\u003eRange v-\u003eRange v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range is empty unless its upper boundary is greater than its lower\n boundary.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeIsEmpty",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#rangeIsEmpty",
          "type": "function"
        },
        "index": {
          "description": "range is empty unless its upper boundary is greater than its lower boundary",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeIsEmpty",
          "normalized": "Range a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Is Empty",
          "signature": "Range v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeIsEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range is full if it contains every possible value.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeIsFull",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#rangeIsFull",
          "type": "function"
        },
        "index": {
          "description": "range is full if it contains every possible value",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeIsFull",
          "normalized": "Range a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Is Full",
          "signature": "Range v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeIsFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the value is within one of the ranges.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeListHas",
          "package": "Ranged-sets",
          "signature": "[Range v] -\u003e v -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#rangeListHas",
          "type": "function"
        },
        "index": {
          "description": "True if the value is within one of the ranges",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeListHas",
          "normalized": "[Range a]-\u003ea-\u003eBool",
          "package": "Ranged-sets",
          "partial": "List Has",
          "signature": "[Range v]-\u003ev-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeListHas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.Ranges",
          "name": "rangeLower",
          "package": "Ranged-sets",
          "signature": "Boundary v",
          "source": "src/Data-Ranged-Ranges.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeLower",
          "package": "Ranged-sets",
          "partial": "Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo ranges overlap if their intersection is non-empty.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeOverlap",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Range v -\u003e Bool",
          "source": "src/Data-Ranged-Ranges.html#rangeOverlap",
          "type": "function"
        },
        "index": {
          "description": "Two ranges overlap if their intersection is non-empty",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeOverlap",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "Ranged-sets",
          "partial": "Overlap",
          "signature": "Range v-\u003eRange v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the range is a singleton, returns \u003ccode\u003eJust\u003c/code\u003e the value.  Otherwise returns\n \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eKnown bug: This always returns \u003ccode\u003eNothing\u003c/code\u003e for ranges including\n \u003ccode\u003eBoundaryBelowAll\u003c/code\u003e or \u003ccode\u003eBoundaryAboveAll\u003c/code\u003e.  For bounded types this can be\n incorrect.  For instance, the following range only contains one value:\n\u003c/p\u003e\u003cpre\u003e    Range (BoundaryBelow maxBound) BoundaryAboveAll\n\u003c/pre\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeSingletonValue",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Maybe v",
          "source": "src/Data-Ranged-Ranges.html#rangeSingletonValue",
          "type": "function"
        },
        "index": {
          "description": "If the range is singleton returns Just the value Otherwise returns Nothing Known bug This always returns Nothing for ranges including BoundaryBelowAll or BoundaryAboveAll For bounded types this can be incorrect For instance the following range only contains one value Range BoundaryBelow maxBound BoundaryAboveAll",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeSingletonValue",
          "normalized": "Range a-\u003eMaybe a",
          "package": "Ranged-sets",
          "partial": "Singleton Value",
          "signature": "Range v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeSingletonValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two ranges.  Returns one or two results.\n\u003c/p\u003e\u003cp\u003eIf there are two results then they are guaranteed to have a non-empty\n gap in between, but may not be in ascending order.\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "rangeUnion",
          "package": "Ranged-sets",
          "signature": "Range v -\u003e Range v -\u003e [Range v]",
          "source": "src/Data-Ranged-Ranges.html#rangeUnion",
          "type": "function"
        },
        "index": {
          "description": "Union of two ranges Returns one or two results If there are two results then they are guaranteed to have non-empty gap in between but may not be in ascending order",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeUnion",
          "normalized": "Range a-\u003eRange a-\u003e[Range a]",
          "package": "Ranged-sets",
          "partial": "Union",
          "signature": "Range v-\u003eRange v-\u003e[Range v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged.Ranges",
          "name": "rangeUpper",
          "package": "Ranged-sets",
          "signature": "Boundary v",
          "source": "src/Data-Ranged-Ranges.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "rangeUpper",
          "package": "Ranged-sets",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:rangeUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA range containing a single value\n\u003c/p\u003e",
          "module": "Data.Ranged.Ranges",
          "name": "singletonRange",
          "package": "Ranged-sets",
          "signature": "v -\u003e Range v",
          "source": "src/Data-Ranged-Ranges.html#singletonRange",
          "type": "function"
        },
        "index": {
          "description": "range containing single value",
          "hierarchy": "Data Ranged Ranges",
          "module": "Data.Ranged.Ranges",
          "name": "singletonRange",
          "normalized": "a-\u003eRange a",
          "package": "Ranged-sets",
          "partial": "Range",
          "signature": "v-\u003eRange v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged-Ranges.html#v:singletonRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ranged",
          "name": "Ranged",
          "package": "Ranged-sets",
          "source": "src/Data-Ranged.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ranged",
          "module": "Data.Ranged",
          "name": "Ranged",
          "package": "Ranged-sets",
          "partial": "Ranged",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Ranged-sets/docs/Data-Ranged.html#"
      }
    }
  ]
]