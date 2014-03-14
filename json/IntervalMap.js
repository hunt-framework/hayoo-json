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
        "word": "IntervalMap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA conservative implementation of Intervals, mostly for use as keys in\n a \u003ccode\u003e\u003ca\u003eIntervalMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis should really be a typeclass, so you could have a tuple be an instance\n of Interval, but that is currently not possible in standard Haskell.\n\u003c/p\u003e\u003cp\u003eThe contructor names of the half-open intervals seem somewhat clumsy,\n and I'm open to suggestions for better names.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "Interval",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Interval.html",
          "type": "module"
        },
        "index": {
          "description": "conservative implementation of Intervals mostly for use as keys in IntervalMap This should really be typeclass so you could have tuple be an instance of Interval but that is currently not possible in standard Haskell The contructor names of the half-open intervals seem somewhat clumsy and open to suggestions for better names",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "Interval",
          "package": "IntervalMap",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntervals with endpoints of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e use mathematical notation with square brackets for closed\n and parens for open intervals.\n This is better for human readability, but is not a valid Haskell expression.\n Closed intervals look like a list, open intervals look like a tuple,\n and half-open intervals look like mismatched parens.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "Interval",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Intervals with endpoints of type Read and Show use mathematical notation with square brackets for closed and parens for open intervals This is better for human readability but is not valid Haskell expression Closed intervals look like list open intervals look like tuple and half-open intervals look like mismatched parens",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "Interval",
          "package": "IntervalMap",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosed at both ends\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Interval\",\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "ClosedInterval",
          "package": "IntervalMap",
          "signature": "ClosedInterval !a !a",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:ClosedInterval\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:ClosedInterval\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:ClosedInterval\"]"
        },
        "index": {
          "description": "Closed at both ends",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "ClosedInterval",
          "package": "IntervalMap",
          "partial": "Closed Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:ClosedInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncluding lower bound, excluding upper\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Interval\",\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "IntervalCO",
          "package": "IntervalMap",
          "signature": "IntervalCO !a !a",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:IntervalCO\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:IntervalCO\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:IntervalCO\"]"
        },
        "index": {
          "description": "Including lower bound excluding upper",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "IntervalCO",
          "package": "IntervalMap",
          "partial": "Interval CO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:IntervalCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExcluding lower bound, including upper\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Interval\",\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "IntervalOC",
          "package": "IntervalMap",
          "signature": "IntervalOC !a !a",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:IntervalOC\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:IntervalOC\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:IntervalOC\"]"
        },
        "index": {
          "description": "Excluding lower bound including upper",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "IntervalOC",
          "package": "IntervalMap",
          "partial": "Interval OC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:IntervalOC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen at both ends\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Interval\",\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "OpenInterval",
          "package": "IntervalMap",
          "signature": "OpenInterval !a !a",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:OpenInterval\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:OpenInterval\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:OpenInterval\"]"
        },
        "index": {
          "description": "Open at both ends",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "OpenInterval",
          "package": "IntervalMap",
          "partial": "Open Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:OpenInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a point strictly greater than upper bound?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "above",
          "package": "IntervalMap",
          "signature": "a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#above",
          "type": "function"
        },
        "index": {
          "description": "Is point strictly greater than upper bound",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "above",
          "normalized": "a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval strictly after another?\n Same as 'flip before'.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "after",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#after",
          "type": "function"
        },
        "index": {
          "description": "Interval strictly after another Same as flip before",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "after",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval strictly before another?\n True if the upper bound of the first interval is below the lower bound of the second.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "before",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#before",
          "type": "function"
        },
        "index": {
          "description": "Interval strictly before another True if the upper bound of the first interval is below the lower bound of the second",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "before",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a point strictly less than lower bound?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "below",
          "package": "IntervalMap",
          "signature": "a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#below",
          "type": "function"
        },
        "index": {
          "description": "Is point strictly less than lower bound",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "below",
          "normalized": "a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e, but considering the upper bound first.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "compareByUpper",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Interval a -\u003e Ordering",
          "source": "src/Data-IntervalMap-Interval.html#compareByUpper",
          "type": "function"
        },
        "index": {
          "description": "Like compare but considering the upper bound first",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "compareByUpper",
          "normalized": "Interval a-\u003eInterval a-\u003eOrdering",
          "package": "IntervalMap",
          "partial": "By Upper",
          "signature": "Interval a-\u003eInterval a-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:compareByUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the interval contain a given point?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "inside",
          "package": "IntervalMap",
          "signature": "a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#inside",
          "type": "function"
        },
        "index": {
          "description": "Does the interval contain given point",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "inside",
          "normalized": "a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the interval empty?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "isEmpty",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Is the interval empty",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "isEmpty",
          "normalized": "Interval a-\u003eBool",
          "package": "IntervalMap",
          "partial": "Empty",
          "signature": "Interval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the interval include its lower bound?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "leftClosed",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#leftClosed",
          "type": "function"
        },
        "index": {
          "description": "Does the interval include its lower bound",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "leftClosed",
          "normalized": "Interval a-\u003eBool",
          "package": "IntervalMap",
          "partial": "Closed",
          "signature": "Interval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:leftClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the lower bound.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "lowerBound",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e a",
          "source": "src/Data-IntervalMap-Interval.html#lowerBound",
          "type": "function"
        },
        "index": {
          "description": "Get the lower bound",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "lowerBound",
          "normalized": "Interval a-\u003ea",
          "package": "IntervalMap",
          "partial": "Bound",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:lowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo the two intervals overlap?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "overlaps",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#overlaps",
          "type": "function"
        },
        "index": {
          "description": "Do the two intervals overlap",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "overlaps",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the interval include its upper bound?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "rightClosed",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#rightClosed",
          "type": "function"
        },
        "index": {
          "description": "Does the interval include its upper bound",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "rightClosed",
          "normalized": "Interval a-\u003eBool",
          "package": "IntervalMap",
          "partial": "Closed",
          "signature": "Interval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:rightClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the first interval completely contain the second?\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "subsumes",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e Interval a -\u003e Bool",
          "source": "src/Data-IntervalMap-Interval.html#subsumes",
          "type": "function"
        },
        "index": {
          "description": "Does the first interval completely contain the second",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "subsumes",
          "normalized": "Interval a-\u003eInterval a-\u003eBool",
          "package": "IntervalMap",
          "signature": "Interval a-\u003eInterval a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:subsumes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the upper bound.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Interval",
          "name": "upperBound",
          "package": "IntervalMap",
          "signature": "Interval a -\u003e a",
          "source": "src/Data-IntervalMap-Interval.html#upperBound",
          "type": "function"
        },
        "index": {
          "description": "Get the upper bound",
          "hierarchy": "Data IntervalMap Interval",
          "module": "Data.IntervalMap.Interval",
          "name": "upperBound",
          "normalized": "Interval a-\u003ea",
          "package": "IntervalMap",
          "partial": "Bound",
          "signature": "Interval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Interval.html#v:upperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of maps from intervals to values. The key intervals may\noverlap, and the implementation contains efficient search functions\nfor all keys containing a point or overlapping an interval.\nClosed, open, and half-open intervals can be contained in the same map.\n\u003c/p\u003e\u003cp\u003eThis module implements the same functions as \u003ca\u003eData.IntervalMap.Strict\u003c/a\u003e,\nbut with value-lazy semantics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "Lazy",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of maps from intervals to values The key intervals may overlap and the implementation contains efficient search functions for all keys containing point or overlapping an interval Closed open and half-open intervals can be contained in the same map This module implements the same functions as Data.IntervalMap.Strict but with value-lazy semantics",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "Lazy",
          "package": "IntervalMap",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntervals with endpoints of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e use mathematical notation with square brackets for closed\n and parens for open intervals.\n This is better for human readability, but is not a valid Haskell expression.\n Closed intervals look like a list, open intervals look like a tuple,\n and half-open intervals look like mismatched parens.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "Interval",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Intervals with endpoints of type Read and Show use mathematical notation with square brackets for closed and parens for open intervals This is better for human readability but is not valid Haskell expression Closed intervals look like list open intervals look like tuple and half-open intervals look like mismatched parens",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "Interval",
          "package": "IntervalMap",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from intervals with endpoints of type \u003ccode\u003ek\u003c/code\u003e to values of type \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "IntervalMap",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Base.html#IntervalMap",
          "type": "data"
        },
        "index": {
          "description": "map from intervals with endpoints of type to values of type",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "IntervalMap",
          "package": "IntervalMap",
          "partial": "Interval Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#t:IntervalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup value for given key. Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if the key is not in the map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "(!)",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Interval k -\u003e v",
          "source": "src/Data-IntervalMap-Base.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:-33-\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:-33-\"]"
        },
        "index": {
          "description": "log Lookup value for given key Calls error if the key is not in the map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "(!) !",
          "normalized": "IntervalMap a b-\u003eInterval a-\u003eb",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eInterval k-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "(\\\\)",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#%5C%5C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:-92--92-\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:-92--92-\"]"
        },
        "index": {
          "description": "Same as difference",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "(\\\\) \\\\",
          "normalized": "IntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "IntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update a value at a specific key with the result of the provided function.\n When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "adjust",
          "package": "IntervalMap",
          "signature": "(a -\u003e a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Update value at specific key with the result of the provided function When the key is not member of the map the original map is returned",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInterval b-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(a-\u003ea)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "adjustWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "adjustWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb)-\u003eInterval a-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003ea)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003eMap\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "alter",
          "package": "IntervalMap",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in Map In short lookup alter lookup",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eInterval b-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(Maybe a-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "assocs",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#assocs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:assocs\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:assocs\"]"
        },
        "index": {
          "description": "Same as toAscList",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "assocs",
          "normalized": "IntervalMap a b-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all key/value pairs where the key intervals contain the given point.\n The elements are returned in ascending key order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, since potentially all keys could contain the point.\n \u003cem\u003eO(log n)\u003c/em\u003e average case. This is also the worst case for maps containing no overlapping keys.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "containing",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e k -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#containing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:containing\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:containing\"]"
        },
        "index": {
          "description": "Return all key value pairs where the key intervals contain the given point The elements are returned in ascending key order since potentially all keys could contain the point log average case This is also the worst case for maps containing no overlapping keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "containing",
          "normalized": "IntervalMap a b-\u003ea-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003ek-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:containing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key from the map. If the map does not contain the key,\n it is returned unchanged.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "delete",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:delete\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:delete\"]"
        },
        "index": {
          "description": "log Delete key from the map If the map does not contain the key it is returned unchanged",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "delete",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "Interval k-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and return the largest key.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "deleteFindMax",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e ((Interval k, v), IntervalMap k v)",
          "source": "src/Data-IntervalMap-Base.html#deleteFindMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteFindMax\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:deleteFindMax\"]"
        },
        "index": {
          "description": "log Delete and return the largest key",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "deleteFindMax",
          "normalized": "IntervalMap a b-\u003e((Interval a,b),IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Find Max",
          "signature": "IntervalMap k v-\u003e((Interval k,v),IntervalMap k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete and return the smallest key.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "deleteFindMin",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e ((Interval k, v), IntervalMap k v)",
          "source": "src/Data-IntervalMap-Base.html#deleteFindMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteFindMin\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:deleteFindMin\"]"
        },
        "index": {
          "description": "log Delete and return the smallest key",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "deleteFindMin",
          "normalized": "IntervalMap a b-\u003e((Interval a,b),IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Find Min",
          "signature": "IntervalMap k v-\u003e((Interval k,v),IntervalMap k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Remove the largest key from the map. Return the empty map if the map is empty.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "deleteMax",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#deleteMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteMax\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:deleteMax\"]"
        },
        "index": {
          "description": "log Remove the largest key from the map Return the empty map if the map is empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "deleteMax",
          "normalized": "IntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Max",
          "signature": "IntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Remove the smallest key from the map. Return the empty map if the map is empty.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "deleteMin",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#deleteMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteMin\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:deleteMin\"]"
        },
        "index": {
          "description": "log Remove the smallest key from the map Return the empty map if the map is empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "deleteMin",
          "normalized": "IntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Min",
          "signature": "IntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two maps. \n Return elements of the first map not existing in the second map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "difference",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#difference",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:difference\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:difference\"]"
        },
        "index": {
          "description": "Difference of two maps Return elements of the first map not existing in the second map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "difference",
          "normalized": "IntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "IntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function. \n When two equal keys are\n encountered, the combining function is applied to the values of these keys.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference). If\n it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "differenceWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#differenceWith",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the values of these keys If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eIntervalMap c a-\u003eIntervalMap c b-\u003eIntervalMap c a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function. When two equal keys are\n encountered, the combining function is applied to the key and both values.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference). If\n it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "differenceWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b -\u003e Maybe a) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "differenceWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec-\u003eMaybe b)-\u003eIntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb-\u003eMaybe a)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. List of all values in the map, in ascending order of their keys.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "elems",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e [v]",
          "source": "src/Data-IntervalMap-Base.html#elems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:elems\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:elems\"]"
        },
        "index": {
          "description": "List of all values in the map in ascending order of their keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "elems",
          "normalized": "IntervalMap a b-\u003e[b]",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "empty",
          "package": "IntervalMap",
          "signature": "IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:empty\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:empty\"]"
        },
        "index": {
          "description": "The empty map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "empty",
          "package": "IntervalMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter values satisfying a predicate.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "filter",
          "package": "IntervalMap",
          "signature": "(a -\u003e Bool) -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:filter\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:filter\"]"
        },
        "index": {
          "description": "Filter values satisfying predicate",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(a-\u003eBool)-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Filter keys/values satisfying a predicate.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "filterWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Bool) -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#filterWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:filterWithKey\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:filterWithKey\"]"
        },
        "index": {
          "description": "Filter keys values satisfying predicate",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "filterWithKey",
          "normalized": "(Interval a-\u003eb-\u003eBool)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eBool)-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the interval with the largest endpoint.\n If there is more than one interval with that endpoint,\n return the rightmost.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, since all keys could have the same endpoint.\n \u003cem\u003eO(log n)\u003c/em\u003e average case.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "findLast",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e (Interval k, v)",
          "source": "src/Data-IntervalMap-Base.html#findLast",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findLast\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:findLast\"]"
        },
        "index": {
          "description": "Returns the interval with the largest endpoint If there is more than one interval with that endpoint return the rightmost since all keys could have the same endpoint log average case",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "findLast",
          "normalized": "IntervalMap a b-\u003e(Interval a,b)",
          "package": "IntervalMap",
          "partial": "Last",
          "signature": "IntervalMap k v-\u003e(Interval k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Returns the largest key and its associated value.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "findMax",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e (Interval k, v)",
          "source": "src/Data-IntervalMap-Base.html#findMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findMax\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:findMax\"]"
        },
        "index": {
          "description": "log Returns the largest key and its associated value Calls error if the map is empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "findMax",
          "normalized": "IntervalMap a b-\u003e(Interval a,b)",
          "package": "IntervalMap",
          "partial": "Max",
          "signature": "IntervalMap k v-\u003e(Interval k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Returns the smallest key and its associated value.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if the map is empty.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "findMin",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e (Interval k, v)",
          "source": "src/Data-IntervalMap-Base.html#findMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findMin\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:findMin\"]"
        },
        "index": {
          "description": "log Returns the smallest key and its associated value Calls error if the map is empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "findMin",
          "normalized": "IntervalMap a b-\u003e(Interval a,b)",
          "package": "IntervalMap",
          "partial": "Min",
          "signature": "IntervalMap k v-\u003e(Interval k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns default value \u003ccode\u003edef\u003c/code\u003e\n when the key is not in the map.\n\u003c/p\u003e\u003cpre\u003e findWithDefault 'x' 1 (fromList [(5,'a'), (3,'b')]) == 'x'\n findWithDefault 'x' 5 (fromList [(5,'a'), (3,'b')]) == 'a'\n\u003c/pre\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "findWithDefault",
          "package": "IntervalMap",
          "signature": "a -\u003e Interval k -\u003e IntervalMap k a -\u003e a",
          "source": "src/Data-IntervalMap-Base.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def map returns the value at key or returns default value def when the key is not in the map findWithDefault fromList findWithDefault fromList",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "findWithDefault",
          "normalized": "a-\u003eInterval b-\u003eIntervalMap b a-\u003ea",
          "package": "IntervalMap",
          "partial": "With Default",
          "signature": "a-\u003eInterval k-\u003eIntervalMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given left-associative\n binary operator, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "foldl",
          "package": "IntervalMap",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e IntervalMap k a -\u003e b",
          "source": "src/Data-IntervalMap-Base.html#foldl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldl\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:foldl\"]"
        },
        "index": {
          "description": "Fold the values in the map using the given left-associative binary operator such that foldl foldl elems",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIntervalMap c b-\u003ea",
          "package": "IntervalMap",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIntervalMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map using the given left-associative\n binary operator, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldlWithKey\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\\z' (kx, x) -\u003e f z' kx x) z . \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "foldlWithKey",
          "package": "IntervalMap",
          "signature": "(a -\u003e Interval k -\u003e v -\u003e a) -\u003e a -\u003e IntervalMap k v -\u003e a",
          "source": "src/Data-IntervalMap-Base.html#foldlWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldlWithKey\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:foldlWithKey\"]"
        },
        "index": {
          "description": "Fold the keys and values in the map using the given left-associative binary operator such that foldlWithKey foldl kx kx toAscList",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "foldlWithKey",
          "normalized": "(a-\u003eInterval b-\u003ec-\u003ea)-\u003ea-\u003eIntervalMap b c-\u003ea",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(a-\u003eInterval k-\u003ev-\u003ea)-\u003ea-\u003eIntervalMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given right-associative\n binary operator, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "foldr",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e IntervalMap k a -\u003e b",
          "source": "src/Data-IntervalMap-Base.html#foldr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldr\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:foldr\"]"
        },
        "index": {
          "description": "Fold the values in the map using the given right-associative binary operator such that foldr foldr elems",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eIntervalMap c a-\u003eb",
          "package": "IntervalMap",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eIntervalMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map using the given right-associative\n binary operator, such that\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e f) z . \u003ccode\u003e\u003ca\u003etoAscList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "foldrWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e IntervalMap k v -\u003e a",
          "source": "src/Data-IntervalMap-Base.html#foldrWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldrWithKey\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:foldrWithKey\"]"
        },
        "index": {
          "description": "Fold the keys and values in the map using the given right-associative binary operator such that foldrWithKey foldr uncurry toAscList",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "foldrWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eIntervalMap a b-\u003ec",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eIntervalMap k v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromAscList",
          "package": "IntervalMap",
          "signature": "[(Interval k, v)] -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromAscList",
          "normalized": "[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Asc List",
          "signature": "[(Interval k,v)]-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromAscListWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#fromAscListWith",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromAscListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Interval b,a)]-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Asc List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromAscListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromAscListWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromAscListWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003e[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Asc List With Key",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list of elements with distinct keys in linear time.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "fromDistinctAscList",
          "package": "IntervalMap",
          "signature": "[(Interval k, v)] -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#fromDistinctAscList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromDistinctAscList\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromDistinctAscList\"]"
        },
        "index": {
          "description": "Build map from an ascending list of elements with distinct keys in linear time The precondition is not checked",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromDistinctAscList",
          "normalized": "[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Distinct Asc List",
          "signature": "[(Interval k,v)]-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a map from a list of key/value pairs. See also \u003ccode\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/code\u003e.\n If the list contains more than one value for the same key, the last value\n for the key is retained.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromList",
          "package": "IntervalMap",
          "signature": "[(Interval k, v)] -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs See also fromAscList If the list contains more than one value for the same key the last value for the key is retained",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromList",
          "normalized": "[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "List",
          "signature": "[(Interval k,v)]-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ccode\u003e\u003ca\u003efromAscListWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromListWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWith",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Interval b,a)]-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ccode\u003e\u003ca\u003efromAscListWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromListWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWith",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "fromListWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003e[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "List With Key",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe height of the tree. For testing/debugging only.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "height",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Int",
          "source": "src/Data-IntervalMap-Base.html#height",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:height\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:height\"]"
        },
        "index": {
          "description": "The height of the tree For testing debugging only",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "height",
          "normalized": "IntervalMap a b-\u003eInt",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key/value pair. If the map already contains the key, its value is\n changed to the new value.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "insert",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e v -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert new key value pair If the map already contains the key its value is changed to the new value",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "insert",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "Interval k-\u003ev-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Combine insert with old values retrieval.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "insertLookupWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e v -\u003e v) -\u003e Interval k -\u003e v -\u003e IntervalMap k v -\u003e (Maybe v, IntervalMap k v)",
          "source": "src/Data-IntervalMap-Base.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Combine insert with old values retrieval",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "insertLookupWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eInterval a-\u003eb-\u003eIntervalMap a b-\u003e(Maybe b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Lookup With Key",
          "signature": "(Interval k-\u003ev-\u003ev-\u003ev)-\u003eInterval k-\u003ev-\u003eIntervalMap k v-\u003e(Maybe v,IntervalMap k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "insertWith",
          "package": "IntervalMap",
          "signature": "(v -\u003e v -\u003e v) -\u003e Interval k -\u003e v -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining new value and old value insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eInterval b-\u003ea-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eInterval k-\u003ev-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining key, new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f key new_value old_value)\u003c/code\u003e.\n Note that the key passed to f is the same key passed to \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "insertWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e v -\u003e v) -\u003e Interval k -\u003e v -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining key new value and old value insertWithKey key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key key new value old value Note that the key passed to is the same key passed to insertWithKey",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "insertWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eInterval a-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ev-\u003ev-\u003ev)-\u003eInterval k-\u003ev-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all key/value pairs where the key intervals overlap (intersect) the given interval.\n The elements are returned in ascending key order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, since potentially all keys could intersect the interval.\n \u003cem\u003eO(log n)\u003c/em\u003e average case, if few keys intersect the interval.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "intersecting",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Interval k -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#intersecting",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:intersecting\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:intersecting\"]"
        },
        "index": {
          "description": "Return all key value pairs where the key intervals overlap intersect the given interval The elements are returned in ascending key order since potentially all keys could intersect the interval log average case if few keys intersect the interval",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "intersecting",
          "normalized": "IntervalMap a b-\u003eInterval a-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eInterval k-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:intersecting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection of two maps.\n Return data in the first map for the keys existing in both maps.\n (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e m1 m2 == \u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e m1 m2\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "intersection",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#intersection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:intersection\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:intersection\"]"
        },
        "index": {
          "description": "Intersection of two maps Return data in the first map for the keys existing in both maps intersection m1 m2 intersectionWith const m1 m2",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "intersection",
          "normalized": "IntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "IntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "intersectionWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e c) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k c",
          "source": "src/Data-IntervalMap-Base.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "Intersection with combining function",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eIntervalMap d a-\u003eIntervalMap d b-\u003eIntervalMap d c",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "intersectionWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b -\u003e c) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k c",
          "source": "src/Data-IntervalMap-Base.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Intersection with combining function",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "intersectionWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec-\u003ed)-\u003eIntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a d",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb-\u003ec)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper submap? (ie. a submap but not equal). \n Defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOf\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e (==)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "isProperSubmapOf",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e IntervalMap k a -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#isProperSubmapOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isProperSubmapOf\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:isProperSubmapOf\"]"
        },
        "index": {
          "description": "Is this proper submap ie submap but not equal Defined as isProperSubmapOf isProperSubmapOfBy",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "isProperSubmapOf",
          "normalized": "IntervalMap a b-\u003eIntervalMap a b-\u003eBool",
          "package": "IntervalMap",
          "partial": "Proper Submap Of",
          "signature": "IntervalMap k a-\u003eIntervalMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isProperSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Is this a proper submap? (ie. a submap but not equal).\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisProperSubmapOfBy\u003c/a\u003e\u003c/code\u003e f m1 m2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n \u003ccode\u003em1\u003c/code\u003e and \u003ccode\u003em2\u003c/code\u003e are not equal,\n all keys in \u003ccode\u003em1\u003c/code\u003e are in \u003ccode\u003em2\u003c/code\u003e, and when \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective values.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "isProperSubmapOfBy",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#isProperSubmapOfBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isProperSubmapOfBy\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:isProperSubmapOfBy\"]"
        },
        "index": {
          "description": "Is this proper submap ie submap but not equal The expression isProperSubmapOfBy m1 m2 returns True when m1 and m2 are not equal all keys in m1 are in m2 and when returns True when applied to their respective values",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "isProperSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eIntervalMap c a-\u003eIntervalMap c b-\u003eBool",
          "package": "IntervalMap",
          "partial": "Proper Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isProperSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. This function is defined as (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOf\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e (==)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "isSubmapOf",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e IntervalMap k a -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#isSubmapOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isSubmapOf\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:isSubmapOf\"]"
        },
        "index": {
          "description": "This function is defined as isSubmapOf isSubmapOfBy",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "isSubmapOf",
          "normalized": "IntervalMap a b-\u003eIntervalMap a b-\u003eBool",
          "package": "IntervalMap",
          "partial": "Submap Of",
          "signature": "IntervalMap k a-\u003eIntervalMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisSubmapOfBy\u003c/a\u003e\u003c/code\u003e f t1 t2\u003c/code\u003e) returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n all keys in \u003ccode\u003et1\u003c/code\u003e are in tree \u003ccode\u003et2\u003c/code\u003e, and \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when\n applied to their respective values.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "isSubmapOfBy",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#isSubmapOfBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isSubmapOfBy\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:isSubmapOfBy\"]"
        },
        "index": {
          "description": "The expression isSubmapOfBy t1 t2 returns True if all keys in t1 are in tree t2 and returns True when applied to their respective values",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "isSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eIntervalMap c a-\u003eIntervalMap c b-\u003eBool",
          "package": "IntervalMap",
          "partial": "Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. List of all keys in the map, in ascending order.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "keys",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e [Interval k]",
          "source": "src/Data-IntervalMap-Base.html#keys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:keys\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:keys\"]"
        },
        "index": {
          "description": "List of all keys in the map in ascending order",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "keys",
          "normalized": "IntervalMap a b-\u003e[Interval a]",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003e[Interval k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Set of the keys.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "keysSet",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Set (Interval k)",
          "source": "src/Data-IntervalMap-Base.html#keysSet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:keysSet\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:keysSet\"]"
        },
        "index": {
          "description": "Set of the keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "keysSet",
          "normalized": "IntervalMap a b-\u003eSet(Interval a)",
          "package": "IntervalMap",
          "partial": "Set",
          "signature": "IntervalMap k v-\u003eSet(Interval k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:keysSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Look up the given key in the map, returning the value \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not in the map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "lookup",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e IntervalMap k v -\u003e Maybe v",
          "source": "src/Data-IntervalMap-Base.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:lookup\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:lookup\"]"
        },
        "index": {
          "description": "log Look up the given key in the map returning the value Just value or Nothing if the key is not in the map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "lookup",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003eMaybe b",
          "package": "IntervalMap",
          "signature": "Interval k-\u003eIntervalMap k v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "map",
          "package": "IntervalMap",
          "signature": "(a -\u003e b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Base.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eIntervalMap c a-\u003eIntervalMap c b",
          "package": "IntervalMap",
          "signature": "(a-\u003eb)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in ascending order of keys.\n\u003c/p\u003e\u003cpre\u003e let f a b = (a ++ b, b ++ \"X\")\n mapAccum f \"Everything: \" (fromList [(5,\"a\"), (3,\"b\")]) == (\"Everything: ba\", fromList [(3, \"bX\"), (5, \"aX\")])\n\u003c/pre\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapAccum",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e IntervalMap k b -\u003e (a, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Base.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccum threads an accumulating argument through the map in ascending order of keys let mapAccum Everything fromList Everything ba fromList bX aX",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap d b-\u003e(a,IntervalMap d c)",
          "package": "IntervalMap",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap k b-\u003e(a,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccumRWithKey\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in descending order of keys.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapAccumRWithKey",
          "package": "IntervalMap",
          "signature": "(a -\u003e Interval k -\u003e b -\u003e (a, c)) -\u003e a -\u003e IntervalMap k b -\u003e (a, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Base.html#mapAccumRWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumRWithKey threads an accumulating argument through the map in descending order of keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapAccumRWithKey",
          "normalized": "(a-\u003eInterval b-\u003ec-\u003e(a,d))-\u003ea-\u003eIntervalMap b c-\u003e(a,IntervalMap b d)",
          "package": "IntervalMap",
          "partial": "Accum RWith Key",
          "signature": "(a-\u003eInterval k-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap k b-\u003e(a,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapAccumRWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in ascending order of keys.\n\u003c/p\u003e\u003cpre\u003e let f a k b = (a ++ \" \" ++ (show k) ++ \"-\" ++ b, b ++ \"X\")\n mapAccumWithKey f \"Everything:\" (fromList [(5,\"a\"), (3,\"b\")]) == (\"Everything: 3-b 5-a\", fromList [(3, \"bX\"), (5, \"aX\")])\n\u003c/pre\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapAccumWithKey",
          "package": "IntervalMap",
          "signature": "(a -\u003e Interval k -\u003e b -\u003e (a, c)) -\u003e a -\u003e IntervalMap k b -\u003e (a, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Base.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumWithKey threads an accumulating argument through the map in ascending order of keys let show mapAccumWithKey Everything fromList Everything fromList bX aX",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003eInterval b-\u003ec-\u003e(a,d))-\u003ea-\u003eIntervalMap b c-\u003e(a,IntervalMap b d)",
          "package": "IntervalMap",
          "partial": "Accum With Key",
          "signature": "(a-\u003eInterval k-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap k b-\u003e(a,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapEither",
          "package": "IntervalMap",
          "signature": "(a -\u003e Either b c) -\u003e IntervalMap k a -\u003e (IntervalMap k b, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Base.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Map values and separate the Left and Right results",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eIntervalMap d a-\u003e(IntervalMap d b,IntervalMap d c)",
          "package": "IntervalMap",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eIntervalMap k a-\u003e(IntervalMap k b,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapEitherWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Either b c) -\u003e IntervalMap k a -\u003e (IntervalMap k b, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Base.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and separate the Left and Right results",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapEitherWithKey",
          "normalized": "(Interval a-\u003eb-\u003eEither c d)-\u003eIntervalMap a b-\u003e(IntervalMap a c,IntervalMap a d)",
          "package": "IntervalMap",
          "partial": "Either With Key",
          "signature": "(Interval k-\u003ea-\u003eEither b c)-\u003eIntervalMap k a-\u003e(IntervalMap k b,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e is the map obtained by applying \u003ccode\u003ef\u003c/code\u003e to each key of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe size of the result may be smaller if \u003ccode\u003ef\u003c/code\u003e maps two or more distinct\n keys to the same new key.  In this case the value at the smallest of\n these keys is retained.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "mapKeys",
          "package": "IntervalMap",
          "signature": "(Interval k1 -\u003e Interval k2) -\u003e IntervalMap k1 a -\u003e IntervalMap k2 a",
          "source": "src/Data-IntervalMap-Base.html#mapKeys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapKeys\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapKeys\"]"
        },
        "index": {
          "description": "log mapKeys is the map obtained by applying to each key of The size of the result may be smaller if maps two or more distinct keys to the same new key In this case the value at the smallest of these keys is retained",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapKeys",
          "normalized": "(Interval a-\u003eInterval a)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Keys",
          "signature": "(Interval k-\u003eInterval k)-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysMonotonic\u003c/a\u003e\u003c/code\u003e f s == \u003ccode\u003e\u003ca\u003emapKeys\u003c/a\u003e\u003c/code\u003e f s\u003c/code\u003e, but works only when \u003ccode\u003ef\u003c/code\u003e\n is strictly monotonic.\n That is, for any values \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e \u003c \u003ccode\u003ey\u003c/code\u003e then \u003ccode\u003ef x\u003c/code\u003e \u003c \u003ccode\u003ef y\u003c/code\u003e.\n \u003cem\u003eThe precondition is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "mapKeysMonotonic",
          "package": "IntervalMap",
          "signature": "(Interval k1 -\u003e Interval k2) -\u003e IntervalMap k1 a -\u003e IntervalMap k2 a",
          "source": "src/Data-IntervalMap-Base.html#mapKeysMonotonic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapKeysMonotonic\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapKeysMonotonic\"]"
        },
        "index": {
          "description": "log mapKeysMonotonic mapKeys but works only when is strictly monotonic That is for any values and if then The precondition is not checked",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapKeysMonotonic",
          "normalized": "(Interval a-\u003eInterval a)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Keys Monotonic",
          "signature": "(Interval k-\u003eInterval k)-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapKeysMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysWith\u003c/a\u003e\u003c/code\u003e c f s\u003c/code\u003e is the map obtained by applying \u003ccode\u003ef\u003c/code\u003e to each key of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe size of the result may be smaller if \u003ccode\u003ef\u003c/code\u003e maps two or more distinct\n keys to the same new key.  In this case the associated values will be\n combined using \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapKeysWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e (Interval k1 -\u003e Interval k2) -\u003e IntervalMap k1 a -\u003e IntervalMap k2 a",
          "source": "src/Data-IntervalMap-Base.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "description": "log mapKeysWith is the map obtained by applying to each key of The size of the result may be smaller if maps two or more distinct keys to the same new key In this case the associated values will be combined using",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(Interval b-\u003eInterval b)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(Interval k-\u003eInterval k)-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapMaybe",
          "package": "IntervalMap",
          "signature": "(a -\u003e Maybe b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Base.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Map values and collect the Just results",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eIntervalMap c a-\u003eIntervalMap c b",
          "package": "IntervalMap",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapMaybeWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Maybe b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Base.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and collect the Just results",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapMaybeWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe c)-\u003eIntervalMap a b-\u003eIntervalMap a c",
          "package": "IntervalMap",
          "partial": "Maybe With Key",
          "signature": "(Interval k-\u003ea-\u003eMaybe b)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Base.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "mapWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec)-\u003eIntervalMap a b-\u003eIntervalMap a c",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum height of a red-black tree with the given number of nodes.\n For testing/debugging only.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "maxHeight",
          "package": "IntervalMap",
          "signature": "Int -\u003e Int",
          "source": "src/Data-IntervalMap-Base.html#maxHeight",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:maxHeight\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:maxHeight\"]"
        },
        "index": {
          "description": "The maximum height of red-black tree with the given number of nodes For testing debugging only",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "maxHeight",
          "normalized": "Int-\u003eInt",
          "package": "IntervalMap",
          "partial": "Height",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:maxHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the value associated with maximal key of the\n map, and the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an\n empty map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "maxView",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e Maybe (a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#maxView",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:maxView\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:maxView\"]"
        },
        "index": {
          "description": "log Retrieves the value associated with maximal key of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "maxView",
          "normalized": "IntervalMap a b-\u003eMaybe(b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "View",
          "signature": "IntervalMap k a-\u003eMaybe(a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the maximal (key,value) pair of the map, and\n the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "maxViewWithKey",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e Maybe ((Interval k, a), IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#maxViewWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:maxViewWithKey\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:maxViewWithKey\"]"
        },
        "index": {
          "description": "log Retrieves the maximal key value pair of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "maxViewWithKey",
          "normalized": "IntervalMap a b-\u003eMaybe((Interval a,b),IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "View With Key",
          "signature": "IntervalMap k a-\u003eMaybe((Interval k,a),IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:maxViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Does the map contain the given key? See also \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "member",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e IntervalMap k v -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#member",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:member\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:member\"]"
        },
        "index": {
          "description": "log Does the map contain the given key See also notMember",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "member",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003eBool",
          "package": "IntervalMap",
          "signature": "Interval k-\u003eIntervalMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the value associated with minimal key of the\n map, and the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an\n empty map.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "minView",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e Maybe (a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#minView",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:minView\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:minView\"]"
        },
        "index": {
          "description": "log Retrieves the value associated with minimal key of the map and the map stripped of that element or Nothing if passed an empty map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "minView",
          "normalized": "IntervalMap a b-\u003eMaybe(b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "View",
          "signature": "IntervalMap k a-\u003eMaybe(a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Retrieves the minimal (key,value) pair of the map, and\n the map stripped of that element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if passed an empty map.\n\u003c/p\u003e\u003cpre\u003e minViewWithKey (fromList [(5,\"a\"), (3,\"b\")]) == Just ((3,\"b\"), singleton 5 \"a\")\n minViewWithKey empty == Nothing\n\u003c/pre\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "minViewWithKey",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e Maybe ((Interval k, a), IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#minViewWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:minViewWithKey\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:minViewWithKey\"]"
        },
        "index": {
          "description": "log Retrieves the minimal key value pair of the map and the map stripped of that element or Nothing if passed an empty map minViewWithKey fromList Just singleton minViewWithKey empty Nothing",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "minViewWithKey",
          "normalized": "IntervalMap a b-\u003eMaybe((Interval a,b),IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "View With Key",
          "signature": "IntervalMap k a-\u003eMaybe((Interval k,a),IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Does the map not contain the given key? See also \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "notMember",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e IntervalMap k v -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#notMember",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:notMember\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:notMember\"]"
        },
        "index": {
          "description": "log Does the map not contain the given key See also member",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "notMember",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003eBool",
          "package": "IntervalMap",
          "partial": "Member",
          "signature": "Interval k-\u003eIntervalMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "null",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:null\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:null\"]"
        },
        "index": {
          "description": "Is the map empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "null",
          "normalized": "IntervalMap a b-\u003eBool",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to a predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "partition",
          "package": "IntervalMap",
          "signature": "(a -\u003e Bool) -\u003e IntervalMap k a -\u003e (IntervalMap k a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#partition",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:partition\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:partition\"]"
        },
        "index": {
          "description": "Partition the map according to predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eIntervalMap b a-\u003e(IntervalMap b a,IntervalMap b a)",
          "package": "IntervalMap",
          "signature": "(a-\u003eBool)-\u003eIntervalMap k a-\u003e(IntervalMap k a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Partition the map according to a predicate. The first\n map contains all elements that satisfy the predicate, the second all\n elements that fail the predicate. See also \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "partitionWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Bool) -\u003e IntervalMap k a -\u003e (IntervalMap k a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#partitionWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:partitionWithKey\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:partitionWithKey\"]"
        },
        "index": {
          "description": "Partition the map according to predicate The first map contains all elements that satisfy the predicate the second all elements that fail the predicate See also split",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "partitionWithKey",
          "normalized": "(Interval a-\u003eb-\u003eBool)-\u003eIntervalMap a b-\u003e(IntervalMap a b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eBool)-\u003eIntervalMap k a-\u003e(IntervalMap k a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree statistics (size, height, maxHeight size).\n For testing/debugging only.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "showStats",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e (Int, Int, Int)",
          "source": "src/Data-IntervalMap-Base.html#showStats",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:showStats\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:showStats\"]"
        },
        "index": {
          "description": "Tree statistics size height maxHeight size For testing debugging only",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "showStats",
          "normalized": "IntervalMap a b-\u003e(Int,Int,Int)",
          "package": "IntervalMap",
          "partial": "Stats",
          "signature": "IntervalMap k a-\u003e(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:showStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with one entry.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "singleton",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "map with one entry",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "singleton",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "Interval k-\u003ev-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Number of keys in the map.\n\u003c/p\u003e\u003cp\u003eCaution: unlike \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e, which takes constant time, this is linear in the\n number of keys!\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "size",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Int",
          "source": "src/Data-IntervalMap-Base.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:size\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:size\"]"
        },
        "index": {
          "description": "Number of keys in the map Caution unlike size which takes constant time this is linear in the number of keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "size",
          "normalized": "IntervalMap a b-\u003eInt",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e) is a pair \u003ccode\u003e(map1,map2)\u003c/code\u003e where\n the keys in \u003ccode\u003emap1\u003c/code\u003e are smaller than \u003ccode\u003ek\u003c/code\u003e and the keys in \u003ccode\u003emap2\u003c/code\u003e larger than \u003ccode\u003ek\u003c/code\u003e.\n Any key equal to \u003ccode\u003ek\u003c/code\u003e is found in neither \u003ccode\u003emap1\u003c/code\u003e nor \u003ccode\u003emap2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "split",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e IntervalMap k a -\u003e (IntervalMap k a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#split",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:split\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:split\"]"
        },
        "index": {
          "description": "The expression split map is pair map1 map2 where the keys in map1 are smaller than and the keys in map2 larger than Any key equal to is found in neither map1 nor map2",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "split",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003e(IntervalMap a b,IntervalMap a b)",
          "package": "IntervalMap",
          "signature": "Interval k-\u003eIntervalMap k a-\u003e(IntervalMap k a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitLookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e) splits a map just\n like \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e but also returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k map\u003c/code\u003e.                               \n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "splitLookup",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e IntervalMap k a -\u003e (IntervalMap k a, Maybe a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#splitLookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:splitLookup\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:splitLookup\"]"
        },
        "index": {
          "description": "The expression splitLookup map splits map just like split but also returns lookup map",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "splitLookup",
          "normalized": "Interval a-\u003eIntervalMap a b-\u003e(IntervalMap a b,Maybe b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Lookup",
          "signature": "Interval k-\u003eIntervalMap k a-\u003e(IntervalMap k a,Maybe a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The list of all key/value pairs contained in the map, in ascending order of keys.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "toAscList",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#toAscList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:toAscList\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:toAscList\"]"
        },
        "index": {
          "description": "The list of all key value pairs contained in the map in ascending order of keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "toAscList",
          "normalized": "IntervalMap a b-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "partial": "Asc List",
          "signature": "IntervalMap k v-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The list of all key/value pairs contained in the map, in descending order of keys.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "toDescList",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#toDescList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:toDescList\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:toDescList\"]"
        },
        "index": {
          "description": "The list of all key value pairs contained in the map in descending order of keys",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "toDescList",
          "normalized": "IntervalMap a b-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "partial": "Desc List",
          "signature": "IntervalMap k v-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The list of all key/value pairs contained in the map, in no particular order.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "toList",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:toList\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:toList\"]"
        },
        "index": {
          "description": "The list of all key value pairs contained in the map in no particular order",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "toList",
          "normalized": "IntervalMap a b-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "partial": "List",
          "signature": "IntervalMap k v-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e) takes the left-biased union of \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e. \n It prefers \u003ccode\u003et1\u003c/code\u003e when duplicate keys are encountered,\n i.e. (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "union",
          "package": "IntervalMap",
          "signature": "IntervalMap k a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:union\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:union\"]"
        },
        "index": {
          "description": "The expression union t1 t2 takes the left-biased union of t1 and t2 It prefers t1 when duplicate keys are encountered i.e union unionWith const",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "union",
          "normalized": "IntervalMap a b-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "IntervalMap k a-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "unionWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e IntervalMap k a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "Union with combining function",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eIntervalMap b a-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eIntervalMap k a-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "unionWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e IntervalMap k a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Union with combining function",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "unionWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eIntervalMap a b-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003eIntervalMap k a-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "unions",
          "package": "IntervalMap",
          "signature": "[IntervalMap k a] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#unions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:unions\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:unions\"]"
        },
        "index": {
          "description": "The union of list of maps unions foldl union empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "unions",
          "normalized": "[IntervalMap a b]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "[IntervalMap k a]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps, with a combining operation:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e f == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e f) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "unionsWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [IntervalMap k a] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps with combining operation unionsWith foldl unionWith empty",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[IntervalMap b a]-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[IntervalMap k a]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "update",
          "package": "IntervalMap",
          "signature": "(a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#update",
          "type": "function"
        },
        "index": {
          "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eInterval b-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(a-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup and update. See also \u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e.\n The function returns changed value, if it is updated.\n Returns the original key value if the map entry is deleted.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateLookupWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e (Maybe a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Base.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Lookup and update See also updateWithKey The function returns changed value if it is updated Returns the original key value if the map entry is deleted",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateLookupWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eInterval a-\u003eIntervalMap a b-\u003e(Maybe b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Lookup With Key",
          "signature": "(Interval k-\u003ea-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003e(Maybe a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at maximum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMax",
          "package": "IntervalMap",
          "signature": "(v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#updateMax",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at maximum key",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMax",
          "normalized": "(a-\u003eMaybe a)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Max",
          "signature": "(v-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:updateMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at maximum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMaxWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#updateMaxWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at maximum key",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMaxWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Max With Key",
          "signature": "(Interval k-\u003ev-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:updateMaxWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at minimum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMin",
          "package": "IntervalMap",
          "signature": "(v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#updateMin",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at minimum key",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMin",
          "normalized": "(a-\u003eMaybe a)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Min",
          "signature": "(v-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:updateMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at minimum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMinWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Base.html#updateMinWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at minimum key",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateMinWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Min With Key",
          "signature": "(Interval k-\u003ev-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:updateMinWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Base.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "updateWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eInterval a-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck red-black-tree and interval search augmentation invariants.\n For testing/debugging only.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "valid",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Bool",
          "source": "src/Data-IntervalMap-Base.html#valid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:valid\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:valid\"]"
        },
        "index": {
          "description": "Check red-black-tree and interval search augmentation invariants For testing debugging only",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "valid",
          "normalized": "IntervalMap a b-\u003eBool",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all key/value pairs where the key intervals are completely inside the given interval.\n The elements are returned in ascending key order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, since potentially all keys could be inside the interval.\n \u003cem\u003eO(log n)\u003c/em\u003e average case, if few keys are inside the interval.\n\u003c/p\u003e",
          "module": "[\"Data.IntervalMap.Lazy\",\"Data.IntervalMap.Strict\"]",
          "name": "within",
          "package": "IntervalMap",
          "signature": "IntervalMap k v -\u003e Interval k -\u003e [(Interval k, v)]",
          "source": "src/Data-IntervalMap-Base.html#within",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:within\",\"http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:within\"]"
        },
        "index": {
          "description": "Return all key value pairs where the key intervals are completely inside the given interval The elements are returned in ascending key order since potentially all keys could be inside the interval log average case if few keys are inside the interval",
          "hierarchy": "Data IntervalMap Lazy",
          "module": "Data.IntervalMap.Lazy",
          "name": "within",
          "normalized": "IntervalMap a b-\u003eInterval a-\u003e[(Interval a,b)]",
          "package": "IntervalMap",
          "signature": "IntervalMap k v-\u003eInterval k-\u003e[(Interval k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Lazy.html#v:within"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of maps from intervals to values. The key intervals\nmay overlap, and the implementation contains efficient search\nfunctions for all keys containing a point or overlapping an\ninterval. Closed, open, and half-open intervals can be contained in\nthe same map.\n\u003c/p\u003e\u003cp\u003eThe functions in this module are strict in both the keys and the\nvalues.  If you need value-lazy maps, use \u003ca\u003eData.IntervalMap.Lazy\u003c/a\u003e\ninstead. The IntervalMap type itself is shared between the lazy and\nstrict modules, meaning that the same IntervalMap value can be passed\nto functions in both modules (although that is rarely needed).\n\u003c/p\u003e\u003cp\u003eAn IntervalMap cannot contain duplicate keys - if you need to map a\nkey to multiple values, use a collection as the value type, for\nexample: \u003ccode\u003eIntervalMap \u003cem\u003ek\u003c/em\u003e [\u003cem\u003ev\u003c/em\u003e]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is an error to insert an empty interval into a map. This\nprecondition is not checked by the various construction functions.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with \u003cem\u003ePrelude\u003c/em\u003e\nnames, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.IntervalMap (IvMap)\n  import qualified Data.IntervalMap as IvMap\n\u003c/pre\u003e\u003cp\u003eIt offers most of the same functions as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, but uses\n\u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e \u003cem\u003ek\u003c/em\u003e instead of just \u003cem\u003ek\u003c/em\u003e as the key type. Some of the\nfunctions need stricter type constraints to maintain the additional\ninformation for efficient interval searching, for example\n\u003ccode\u003e\u003ca\u003efromDistinctAscList\u003c/a\u003e\u003c/code\u003e needs an \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e \u003cem\u003ek\u003c/em\u003e constraint. Also, some\nfunctions differ in asymptotic performance (for example \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e) or\nhave not been tuned for efficiency as much as their equivalents in\n\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e (in particular the various set functions).\n\u003c/p\u003e\u003cp\u003eIn addition, there are functions specific to maps of intervals, for\nexample to search for all keys containing a given point or contained\nin a given interval.\n\u003c/p\u003e\u003cp\u003eTo stay compatible with standard Haskell, this implementation uses a\nfixed data type for intervals, and not a multi-parameter type\nclass. Thus, it's currently not possible to define e.g. a 2-tuple as\nan instance of interval and use that map key. Instead, you must\nconvert your keys to \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe implementation is a red-black tree augmented with the maximum\nupper bound of all keys.\n\u003c/p\u003e\u003cp\u003eParts of this implementation are based on code from the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\nimplementation, (c) Daan Leijen 2002, (c) Andriy Palamarchuk 2008. The\nred-black tree deletion is based on code from llrbtree by Kazu\nYamamoto. Of course, any errors are mine.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "Strict",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of maps from intervals to values The key intervals may overlap and the implementation contains efficient search functions for all keys containing point or overlapping an interval Closed open and half-open intervals can be contained in the same map The functions in this module are strict in both the keys and the values If you need value-lazy maps use Data.IntervalMap.Lazy instead The IntervalMap type itself is shared between the lazy and strict modules meaning that the same IntervalMap value can be passed to functions in both modules although that is rarely needed An IntervalMap cannot contain duplicate keys if you need to map key to multiple values use collection as the value type for example IntervalMap It is an error to insert an empty interval into map This precondition is not checked by the various construction functions Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.IntervalMap IvMap import qualified Data.IntervalMap as IvMap It offers most of the same functions as Map but uses Interval instead of just as the key type Some of the functions need stricter type constraints to maintain the additional information for efficient interval searching for example fromDistinctAscList needs an Ord constraint Also some functions differ in asymptotic performance for example size or have not been tuned for efficiency as much as their equivalents in Map in particular the various set functions In addition there are functions specific to maps of intervals for example to search for all keys containing given point or contained in given interval To stay compatible with standard Haskell this implementation uses fixed data type for intervals and not multi-parameter type class Thus it currently not possible to define e.g tuple as an instance of interval and use that map key Instead you must convert your keys to Interval The implementation is red-black tree augmented with the maximum upper bound of all keys Parts of this implementation are based on code from the Map implementation Daan Leijen Andriy Palamarchuk The red-black tree deletion is based on code from llrbtree by Kazu Yamamoto Of course any errors are mine",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "Strict",
          "package": "IntervalMap",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntervals with endpoints of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e use mathematical notation with square brackets for closed\n and parens for open intervals.\n This is better for human readability, but is not a valid Haskell expression.\n Closed intervals look like a list, open intervals look like a tuple,\n and half-open intervals look like mismatched parens.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "Interval",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Intervals with endpoints of type Read and Show use mathematical notation with square brackets for closed and parens for open intervals This is better for human readability but is not valid Haskell expression Closed intervals look like list open intervals look like tuple and half-open intervals look like mismatched parens",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "Interval",
          "package": "IntervalMap",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from intervals with endpoints of type \u003ccode\u003ek\u003c/code\u003e to values of type \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "IntervalMap",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap-Base.html#IntervalMap",
          "type": "data"
        },
        "index": {
          "description": "map from intervals with endpoints of type to values of type",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "IntervalMap",
          "package": "IntervalMap",
          "partial": "Interval Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#t:IntervalMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update a value at a specific key with the result of the provided function.\n When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "adjust",
          "package": "IntervalMap",
          "signature": "(a -\u003e a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "log Update value at specific key with the result of the provided function When the key is not member of the map the original map is returned",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInterval b-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(a-\u003ea)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Adjust a value at a specific key. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "adjustWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Adjust value at specific key When the key is not member of the map the original map is returned",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "adjustWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb)-\u003eInterval a-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003ea)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003eMap\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "alter",
          "package": "IntervalMap",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#alter",
          "type": "function"
        },
        "index": {
          "description": "log The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in Map In short lookup alter lookup",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eInterval b-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(Maybe a-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function. \n When two equal keys are\n encountered, the combining function is applied to the values of these keys.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference). If\n it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "differenceWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#differenceWith",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the values of these keys If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eIntervalMap c a-\u003eIntervalMap c b-\u003eIntervalMap c a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference with a combining function. When two equal keys are\n encountered, the combining function is applied to the key and both values.\n If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded (proper set difference). If\n it returns (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the element is updated with a new value \u003ccode\u003ey\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "differenceWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b -\u003e Maybe a) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "description": "Difference with combining function When two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded proper set difference If it returns Just the element is updated with new value",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "differenceWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec-\u003eMaybe b)-\u003eIntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb-\u003eMaybe a)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns default value \u003ccode\u003edef\u003c/code\u003e\n when the key is not in the map.\n\u003c/p\u003e\u003cpre\u003e findWithDefault 'x' 1 (fromList [(5,'a'), (3,'b')]) == 'x'\n findWithDefault 'x' 5 (fromList [(5,'a'), (3,'b')]) == 'a'\n\u003c/pre\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "findWithDefault",
          "package": "IntervalMap",
          "signature": "a -\u003e Interval k -\u003e IntervalMap k a -\u003e a",
          "source": "src/Data-IntervalMap-Strict.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def map returns the value at key or returns default value def when the key is not in the map findWithDefault fromList findWithDefault fromList",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "findWithDefault",
          "normalized": "a-\u003eInterval b-\u003eIntervalMap b a-\u003ea",
          "package": "IntervalMap",
          "partial": "With Default",
          "signature": "a-\u003eInterval k-\u003eIntervalMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "fromAscList",
          "package": "IntervalMap",
          "signature": "[(Interval k, v)] -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time The precondition input list is ascending is not checked",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "fromAscList",
          "normalized": "[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Asc List",
          "signature": "[(Interval k,v)]-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "fromAscListWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#fromAscListWith",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "fromAscListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Interval b,a)]-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Asc List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromAscListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a map from an ascending list in linear time with a combining function for equal keys.\n \u003cem\u003eThe precondition (input list is ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "fromAscListWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "description": "Build map from an ascending list in linear time with combining function for equal keys The precondition input list is ascending is not checked",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "fromAscListWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003e[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Asc List With Key",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a map from a list of key/value pairs. See also \u003ccode\u003e\u003ca\u003efromAscList\u003c/a\u003e\u003c/code\u003e.\n If the list contains more than one value for the same key, the last value\n for the key is retained.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "fromList",
          "package": "IntervalMap",
          "signature": "[(Interval k, v)] -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs See also fromAscList If the list contains more than one value for the same key the last value for the key is retained",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "fromList",
          "normalized": "[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "List",
          "signature": "[(Interval k,v)]-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ccode\u003e\u003ca\u003efromAscListWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "fromListWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWith",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Interval b,a)]-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. Build a map from a list of key/value pairs with a combining function. See also \u003ccode\u003e\u003ca\u003efromAscListWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "fromListWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e [(Interval k, a)] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of key value pairs with combining function See also fromAscListWith",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "fromListWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003e[(Interval a,b)]-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "List With Key",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003e[(Interval k,a)]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key/value pair. If the map already contains the key, its value is\n changed to the new value.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "insert",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e v -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert new key value pair If the map already contains the key its value is changed to the new value",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "insert",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "Interval k-\u003ev-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Combine insert with old values retrieval.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "insertLookupWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e v -\u003e v) -\u003e Interval k -\u003e v -\u003e IntervalMap k v -\u003e (Maybe v, IntervalMap k v)",
          "source": "src/Data-IntervalMap-Strict.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Combine insert with old values retrieval",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "insertLookupWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eInterval a-\u003eb-\u003eIntervalMap a b-\u003e(Maybe b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Lookup With Key",
          "signature": "(Interval k-\u003ev-\u003ev-\u003ev)-\u003eInterval k-\u003ev-\u003eIntervalMap k v-\u003e(Maybe v,IntervalMap k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "insertWith",
          "package": "IntervalMap",
          "signature": "(v -\u003e v -\u003e v) -\u003e Interval k -\u003e v -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining new value and old value insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eInterval b-\u003ea-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eInterval k-\u003ev-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining key, new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e \n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f key new_value old_value)\u003c/code\u003e.\n Note that the key passed to f is the same key passed to \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "insertWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e v -\u003e v) -\u003e Interval k -\u003e v -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function combining key new value and old value insertWithKey key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key key new value old value Note that the key passed to is the same key passed to insertWithKey",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "insertWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eInterval a-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ev-\u003ev-\u003ev)-\u003eInterval k-\u003ev-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "intersectionWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e c) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k c",
          "source": "src/Data-IntervalMap-Strict.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "description": "Intersection with combining function",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eIntervalMap d a-\u003eIntervalMap d b-\u003eIntervalMap d c",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "intersectionWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b -\u003e c) -\u003e IntervalMap k a -\u003e IntervalMap k b -\u003e IntervalMap k c",
          "source": "src/Data-IntervalMap-Strict.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Intersection with combining function",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "intersectionWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec-\u003ed)-\u003eIntervalMap a b-\u003eIntervalMap a c-\u003eIntervalMap a d",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb-\u003ec)-\u003eIntervalMap k a-\u003eIntervalMap k b-\u003eIntervalMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "map",
          "package": "IntervalMap",
          "signature": "(a -\u003e b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Strict.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eIntervalMap c a-\u003eIntervalMap c b",
          "package": "IntervalMap",
          "signature": "(a-\u003eb)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccum\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in ascending order of keys.\n\u003c/p\u003e\u003cpre\u003e let f a b = (a ++ b, b ++ \"X\")\n mapAccum f \"Everything: \" (fromList [(5,\"a\"), (3,\"b\")]) == (\"Everything: ba\", fromList [(3, \"bX\"), (5, \"aX\")])\n\u003c/pre\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapAccum",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e IntervalMap k b -\u003e (a, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Strict.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccum threads an accumulating argument through the map in ascending order of keys let mapAccum Everything fromList Everything ba fromList bX aX",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap d b-\u003e(a,IntervalMap d c)",
          "package": "IntervalMap",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap k b-\u003e(a,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccumRWithKey\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in descending order of keys.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapAccumRWithKey",
          "package": "IntervalMap",
          "signature": "(a -\u003e Interval k -\u003e b -\u003e (a, c)) -\u003e a -\u003e IntervalMap k b -\u003e (a, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Strict.html#mapAccumRWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumRWithKey threads an accumulating argument through the map in descending order of keys",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapAccumRWithKey",
          "normalized": "(a-\u003eInterval b-\u003ec-\u003e(a,d))-\u003ea-\u003eIntervalMap b c-\u003e(a,IntervalMap b d)",
          "package": "IntervalMap",
          "partial": "Accum RWith Key",
          "signature": "(a-\u003eInterval k-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap k b-\u003e(a,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapAccumRWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The function \u003ccode\u003e\u003ca\u003emapAccumWithKey\u003c/a\u003e\u003c/code\u003e threads an accumulating\n argument through the map in ascending order of keys.\n\u003c/p\u003e\u003cpre\u003e let f a k b = (a ++ \" \" ++ (show k) ++ \"-\" ++ b, b ++ \"X\")\n mapAccumWithKey f \"Everything:\" (fromList [(5,\"a\"), (3,\"b\")]) == (\"Everything: 3-b 5-a\", fromList [(3, \"bX\"), (5, \"aX\")])\n\u003c/pre\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapAccumWithKey",
          "package": "IntervalMap",
          "signature": "(a -\u003e Interval k -\u003e b -\u003e (a, c)) -\u003e a -\u003e IntervalMap k b -\u003e (a, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Strict.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "description": "The function mapAccumWithKey threads an accumulating argument through the map in ascending order of keys let show mapAccumWithKey Everything fromList Everything fromList bX aX",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003eInterval b-\u003ec-\u003e(a,d))-\u003ea-\u003eIntervalMap b c-\u003e(a,IntervalMap b d)",
          "package": "IntervalMap",
          "partial": "Accum With Key",
          "signature": "(a-\u003eInterval k-\u003eb-\u003e(a,c))-\u003ea-\u003eIntervalMap k b-\u003e(a,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapEither",
          "package": "IntervalMap",
          "signature": "(a -\u003e Either b c) -\u003e IntervalMap k a -\u003e (IntervalMap k b, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Strict.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "Map values and separate the Left and Right results",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eIntervalMap d a-\u003e(IntervalMap d b,IntervalMap d c)",
          "package": "IntervalMap",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eIntervalMap k a-\u003e(IntervalMap k b,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and separate the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapEitherWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Either b c) -\u003e IntervalMap k a -\u003e (IntervalMap k b, IntervalMap k c)",
          "source": "src/Data-IntervalMap-Strict.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and separate the Left and Right results",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapEitherWithKey",
          "normalized": "(Interval a-\u003eb-\u003eEither c d)-\u003eIntervalMap a b-\u003e(IntervalMap a c,IntervalMap a d)",
          "package": "IntervalMap",
          "partial": "Either With Key",
          "signature": "(Interval k-\u003ea-\u003eEither b c)-\u003eIntervalMap k a-\u003e(IntervalMap k b,IntervalMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e. \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapKeysWith\u003c/a\u003e\u003c/code\u003e c f s\u003c/code\u003e is the map obtained by applying \u003ccode\u003ef\u003c/code\u003e to each key of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe size of the result may be smaller if \u003ccode\u003ef\u003c/code\u003e maps two or more distinct\n keys to the same new key.  In this case the associated values will be\n combined using \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapKeysWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e (Interval k1 -\u003e Interval k2) -\u003e IntervalMap k1 a -\u003e IntervalMap k2 a",
          "source": "src/Data-IntervalMap-Strict.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "description": "log mapKeysWith is the map obtained by applying to each key of The size of the result may be smaller if maps two or more distinct keys to the same new key In this case the associated values will be combined using",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(Interval b-\u003eInterval b)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(Interval k-\u003eInterval k)-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapMaybe",
          "package": "IntervalMap",
          "signature": "(a -\u003e Maybe b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Strict.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "Map values and collect the Just results",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eIntervalMap c a-\u003eIntervalMap c b",
          "package": "IntervalMap",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map keys/values and collect the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapMaybeWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Maybe b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Strict.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map keys values and collect the Just results",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapMaybeWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe c)-\u003eIntervalMap a b-\u003eIntervalMap a c",
          "package": "IntervalMap",
          "partial": "Maybe With Key",
          "signature": "(Interval k-\u003ea-\u003eMaybe b)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map a function over all values in the map.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "mapWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b) -\u003e IntervalMap k a -\u003e IntervalMap k b",
          "source": "src/Data-IntervalMap-Strict.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "mapWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec)-\u003eIntervalMap a b-\u003eIntervalMap a c",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb)-\u003eIntervalMap k a-\u003eIntervalMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with one entry.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "singleton",
          "package": "IntervalMap",
          "signature": "Interval k -\u003e v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "map with one entry",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "singleton",
          "normalized": "Interval a-\u003eb-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "signature": "Interval k-\u003ev-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "unionWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e IntervalMap k a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "Union with combining function",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eIntervalMap b a-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eIntervalMap k a-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Union with a combining function.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "unionWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e IntervalMap k a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "description": "Union with combining function",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "unionWithKey",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eIntervalMap a b-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003eIntervalMap k a-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of a list of maps, with a combining operation:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e f == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e f) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "unionsWith",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e [IntervalMap k a] -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#unionsWith",
          "type": "function"
        },
        "index": {
          "description": "The union of list of maps with combining operation unionsWith foldl unionWith empty",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[IntervalMap b a]-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[IntervalMap k a]-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "update",
          "package": "IntervalMap",
          "signature": "(a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#update",
          "type": "function"
        },
        "index": {
          "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eInterval b-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "signature": "(a-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup and update. See also \u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e.\n The function returns changed value, if it is updated.\n Returns the original key value if the map entry is deleted.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "updateLookupWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e (Maybe a, IntervalMap k a)",
          "source": "src/Data-IntervalMap-Strict.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Lookup and update See also updateWithKey The function returns changed value if it is updated Returns the original key value if the map entry is deleted",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "updateLookupWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eInterval a-\u003eIntervalMap a b-\u003e(Maybe b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Lookup With Key",
          "signature": "(Interval k-\u003ea-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003e(Maybe a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at maximum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMax",
          "package": "IntervalMap",
          "signature": "(v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#updateMax",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at maximum key",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMax",
          "normalized": "(a-\u003eMaybe a)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Max",
          "signature": "(v-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:updateMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at maximum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMaxWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#updateMaxWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at maximum key",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMaxWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Max With Key",
          "signature": "(Interval k-\u003ev-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:updateMaxWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at minimum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMin",
          "package": "IntervalMap",
          "signature": "(v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#updateMin",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at minimum key",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMin",
          "normalized": "(a-\u003eMaybe a)-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "Min",
          "signature": "(v-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:updateMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update or delete value at minimum key.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMinWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e v -\u003e Maybe v) -\u003e IntervalMap k v -\u003e IntervalMap k v",
          "source": "src/Data-IntervalMap-Strict.html#updateMinWithKey",
          "type": "function"
        },
        "index": {
          "description": "log Update or delete value at minimum key",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "updateMinWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "Min With Key",
          "signature": "(Interval k-\u003ev-\u003eMaybe v)-\u003eIntervalMap k v-\u003eIntervalMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:updateMinWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdateWithKey\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the\n value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef k x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the element is deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound\n to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap.Strict",
          "name": "updateWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e Maybe a) -\u003e Interval k -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap-Strict.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "log The expression updateWithKey map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
          "hierarchy": "Data IntervalMap Strict",
          "module": "Data.IntervalMap.Strict",
          "name": "updateWithKey",
          "normalized": "(Interval a-\u003eb-\u003eMaybe b)-\u003eInterval a-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eMaybe a)-\u003eInterval k-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap-Strict.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of maps from intervals to values. The key intervals may\noverlap, and the implementation contains efficient search functions\nfor all keys containing a point or overlapping an interval.\nClosed, open, and half-open intervals can be contained in the same map.\n\u003c/p\u003e\u003cp\u003eThis module re-exports the value lazy \u003ca\u003eData.IntervalMap.Lazy\u003c/a\u003e API, plus\nseveral value strict functions from \u003ca\u003eData.IntervalMap.Strict\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IntervalMap",
          "name": "IntervalMap",
          "package": "IntervalMap",
          "source": "src/Data-IntervalMap.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of maps from intervals to values The key intervals may overlap and the implementation contains efficient search functions for all keys containing point or overlapping an interval Closed open and half-open intervals can be contained in the same map This module re-exports the value lazy Data.IntervalMap.Lazy API plus several value strict functions from Data.IntervalMap.Strict",
          "hierarchy": "Data IntervalMap",
          "module": "Data.IntervalMap",
          "name": "IntervalMap",
          "package": "IntervalMap",
          "partial": "Interval Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated.\u003c/em\u003e As of version 0.5, replaced by \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given right-associative\n binary operator. This function is an equivalent of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e and is present\n for compatibility only.\n\u003c/p\u003e",
          "module": "Data.IntervalMap",
          "name": "fold",
          "package": "IntervalMap",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e IntervalMap k a -\u003e b",
          "source": "src/Data-IntervalMap.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Deprecated As of version replaced by foldr Fold the values in the map using the given right-associative binary operator This function is an equivalent of foldr and is present for compatibility only",
          "hierarchy": "Data IntervalMap",
          "module": "Data.IntervalMap",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eIntervalMap c a-\u003eb",
          "package": "IntervalMap",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eIntervalMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated.\u003c/em\u003e As of version 0.3, replaced by \u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the keys and values in the map using the given right-associative\n binary operator. This function is an equivalent of \u003ccode\u003e\u003ca\u003efoldrWithKey\u003c/a\u003e\u003c/code\u003e and is present\n for compatibility only.\n\u003c/p\u003e",
          "module": "Data.IntervalMap",
          "name": "foldWithKey",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e IntervalMap k a -\u003e b",
          "source": "src/Data-IntervalMap.html#foldWithKey",
          "type": "function"
        },
        "index": {
          "description": "Deprecated As of version replaced by foldrWithKey Fold the keys and values in the map using the given right-associative binary operator This function is an equivalent of foldrWithKey and is present for compatibility only",
          "hierarchy": "Data IntervalMap",
          "module": "Data.IntervalMap",
          "name": "foldWithKey",
          "normalized": "(Interval a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eIntervalMap a b-\u003ec",
          "package": "IntervalMap",
          "partial": "With Key",
          "signature": "(Interval k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eIntervalMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated.\u003c/em\u003e As of version 0.3, replaced by\n \u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IntervalMap",
          "name": "insertLookupWithKey'",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e Interval k -\u003e a -\u003e IntervalMap k a -\u003e (Maybe a, IntervalMap k a)",
          "source": "src/Data-IntervalMap.html#insertLookupWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated As of version replaced by insertLookupWithKey log strict version of insertLookupWithKey",
          "hierarchy": "Data IntervalMap",
          "module": "Data.IntervalMap",
          "name": "insertLookupWithKey'",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eInterval a-\u003eb-\u003eIntervalMap a b-\u003e(Maybe b,IntervalMap a b)",
          "package": "IntervalMap",
          "partial": "Lookup With Key'",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003eInterval k-\u003ea-\u003eIntervalMap k a-\u003e(Maybe a,IntervalMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap.html#v:insertLookupWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated.\u003c/em\u003e As of version 0.3, replaced by \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Same as \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.  This is often the most desirable behavior.\n\u003c/p\u003e\u003cp\u003eFor example, to update a counter:\n\u003c/p\u003e\u003cpre\u003e insertWith' (+) k 1 m\n\u003c/pre\u003e",
          "module": "Data.IntervalMap",
          "name": "insertWith'",
          "package": "IntervalMap",
          "signature": "(a -\u003e a -\u003e a) -\u003e Interval k -\u003e a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated As of version replaced by insertWith log Same as insertWith but the combining function is applied strictly This is often the most desirable behavior For example to update counter insertWith",
          "hierarchy": "Data IntervalMap",
          "module": "Data.IntervalMap",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eInterval b-\u003ea-\u003eIntervalMap b a-\u003eIntervalMap b a",
          "package": "IntervalMap",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003eInterval k-\u003ea-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDeprecated.\u003c/em\u003e As of version 0.3, replaced by \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Same as \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e, but the combining function is\n applied strictly.\n\u003c/p\u003e",
          "module": "Data.IntervalMap",
          "name": "insertWithKey'",
          "package": "IntervalMap",
          "signature": "(Interval k -\u003e a -\u003e a -\u003e a) -\u003e Interval k -\u003e a -\u003e IntervalMap k a -\u003e IntervalMap k a",
          "source": "src/Data-IntervalMap.html#insertWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated As of version replaced by insertWithKey log Same as insertWithKey but the combining function is applied strictly",
          "hierarchy": "Data IntervalMap",
          "module": "Data.IntervalMap",
          "name": "insertWithKey'",
          "normalized": "(Interval a-\u003eb-\u003eb-\u003eb)-\u003eInterval a-\u003eb-\u003eIntervalMap a b-\u003eIntervalMap a b",
          "package": "IntervalMap",
          "partial": "With Key'",
          "signature": "(Interval k-\u003ea-\u003ea-\u003ea)-\u003eInterval k-\u003ea-\u003eIntervalMap k a-\u003eIntervalMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IntervalMap/docs/Data-IntervalMap.html#v:insertWithKey-39-"
      }
    }
  ]
]