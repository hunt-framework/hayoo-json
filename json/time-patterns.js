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
        "word": "time-patterns"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal stuff for time patterns\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "Internal",
          "package": "time-patterns",
          "source": "src/Data-Time-Patterns-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal stuff for time patterns",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "Internal",
          "package": "time-patterns",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence of intervals, starting from a point.\n If the argument to \u003ccode\u003enextInterval\u003c/code\u003e is part of an interval, then the result \n should be the interval containing it.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "IntervalSequence",
          "package": "time-patterns",
          "source": "src/Data-Time-Patterns-Internal.html#IntervalSequence",
          "type": "newtype"
        },
        "index": {
          "description": "sequence of intervals starting from point If the argument to nextInterval is part of an interval then the result should be the interval containing it",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "IntervalSequence",
          "package": "time-patterns",
          "partial": "Interval Sequence",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#t:IntervalSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntervalSequences that can be evaluated repeatedly.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "IntervalSequence'",
          "package": "time-patterns",
          "source": "src/Data-Time-Patterns-Internal.html#IntervalSequence%27",
          "type": "type"
        },
        "index": {
          "description": "IntervalSequences that can be evaluated repeatedly",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "IntervalSequence'",
          "package": "time-patterns",
          "partial": "Interval Sequence'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#t:IntervalSequence-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Patterns.Internal",
          "name": "IntervalSequence",
          "package": "time-patterns",
          "signature": "IntervalSequence",
          "source": "src/Data-Time-Patterns-Internal.html#IntervalSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "IntervalSequence",
          "package": "time-patterns",
          "partial": "Interval Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:IntervalSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend an interval to an interval sequence\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "andThen",
          "package": "time-patterns",
          "signature": "Interval s -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#andThen",
          "type": "function"
        },
        "index": {
          "description": "Prepend an interval to an interval sequence",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "andThen",
          "normalized": "Interval a-\u003eIntervalSequence b a-\u003eIntervalSequence b a",
          "package": "time-patterns",
          "partial": "Then",
          "signature": "Interval s-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:andThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop as soon as a result greater than or equal to the parameter\n   is produced\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "before",
          "package": "time-patterns",
          "signature": "Interval s -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#before",
          "type": "function"
        },
        "index": {
          "description": "Stop as soon as result greater than or equal to the parameter is produced",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "before",
          "normalized": "Interval a-\u003eIntervalSequence b a-\u003eIntervalSequence b a",
          "package": "time-patterns",
          "signature": "Interval s-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a point infinitely\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "cycle",
          "package": "time-patterns",
          "signature": "Interval s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "Repeat point infinitely",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "cycle",
          "normalized": "Interval a-\u003eIntervalSequence b a",
          "package": "time-patterns",
          "signature": "Interval s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two sequences into one by switching between them\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "diag",
          "package": "time-patterns",
          "signature": "IntervalSequence t s -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#diag",
          "type": "function"
        },
        "index": {
          "description": "Merge two sequences into one by switching between them",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "diag",
          "normalized": "IntervalSequence a b-\u003eIntervalSequence a b-\u003eIntervalSequence a b",
          "package": "time-patterns",
          "signature": "IntervalSequence t s-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a point is covered by an interval sequence\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "elementOf",
          "package": "time-patterns",
          "signature": "t -\u003e IntervalSequence' t -\u003e Bool",
          "source": "src/Data-Time-Patterns-Internal.html#elementOf",
          "type": "function"
        },
        "index": {
          "description": "Check if point is covered by an interval sequence",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "elementOf",
          "normalized": "a-\u003eIntervalSequence' a-\u003eBool",
          "package": "time-patterns",
          "partial": "Of",
          "signature": "t-\u003eIntervalSequence' t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:elementOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Patterns.Internal",
          "name": "elements",
          "package": "time-patterns",
          "signature": "Interval a -\u003e [a]",
          "source": "src/Data-Time-Patterns-Internal.html#elements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "elements",
          "normalized": "Interval a-\u003e[a]",
          "package": "time-patterns",
          "signature": "Interval a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElements covered by an interval sequence from an initial point.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "elementsFrom",
          "package": "time-patterns",
          "signature": "t -\u003e IntervalSequence' t -\u003e [t]",
          "source": "src/Data-Time-Patterns-Internal.html#elementsFrom",
          "type": "function"
        },
        "index": {
          "description": "Elements covered by an interval sequence from an initial point",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "elementsFrom",
          "normalized": "a-\u003eIntervalSequence' a-\u003e[a]",
          "package": "time-patterns",
          "partial": "From",
          "signature": "t-\u003eIntervalSequence' t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:elementsFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake every nth occurrence\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "every",
          "package": "time-patterns",
          "signature": "Int -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#every",
          "type": "function"
        },
        "index": {
          "description": "Take every nth occurrence",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "every",
          "normalized": "Int-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "signature": "Int-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:every"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over a point in the sequence. All occurrences of this\n   datum are removed.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "except",
          "package": "time-patterns",
          "signature": "t -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#except",
          "type": "function"
        },
        "index": {
          "description": "Skip over point in the sequence All occurrences of this datum are removed",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "except",
          "normalized": "a-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "signature": "t-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over all intervals which contain the parameter\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "except'",
          "package": "time-patterns",
          "signature": "Interval t -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#except%27",
          "type": "function"
        },
        "index": {
          "description": "Skip over all intervals which contain the parameter",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "except'",
          "normalized": "Interval a-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "signature": "Interval t-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:except-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept results which satisfy a condition\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "filter",
          "package": "time-patterns",
          "signature": "(Interval t -\u003e Bool) -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Accept results which satisfy condition",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "filter",
          "normalized": "(Interval a-\u003eBool)-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "signature": "(Interval t-\u003eBool)-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for the first result within the specified interval, starting from\n a point. \n\u003c/p\u003e\u003cp\u003eIf the intervals in the sequence are not ordered, then this function might\n not terminate.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "firstOccurrenceIn",
          "package": "time-patterns",
          "signature": "t -\u003e Interval t -\u003e IntervalSequence' t -\u003e Maybe (Interval t, IntervalSequence' t)",
          "source": "src/Data-Time-Patterns-Internal.html#firstOccurrenceIn",
          "type": "function"
        },
        "index": {
          "description": "Search for the first result within the specified interval starting from point If the intervals in the sequence are not ordered then this function might not terminate",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "firstOccurrenceIn",
          "normalized": "a-\u003eInterval a-\u003eIntervalSequence' a-\u003eMaybe(Interval a,IntervalSequence' a)",
          "package": "time-patterns",
          "partial": "Occurrence In",
          "signature": "t-\u003eInterval t-\u003eIntervalSequence' t-\u003eMaybe(Interval t,IntervalSequence' t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:firstOccurrenceIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn intervals that are exactly the same\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "intersect",
          "package": "time-patterns",
          "signature": "IntervalSequence' t -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "Return intervals that are exactly the same",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "intersect",
          "normalized": "IntervalSequence' a-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "signature": "IntervalSequence' t-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence with no occurrences\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "never",
          "package": "time-patterns",
          "signature": "IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#never",
          "type": "function"
        },
        "index": {
          "description": "sequence with no occurrences",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "never",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Patterns.Internal",
          "name": "nextInterval",
          "package": "time-patterns",
          "signature": "t -\u003e Maybe (Interval s, IntervalSequence t s)",
          "source": "src/Data-Time-Patterns-Internal.html#IntervalSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "nextInterval",
          "normalized": "a-\u003eMaybe(Interval b,IntervalSequence a b)",
          "package": "time-patterns",
          "partial": "Interval",
          "signature": "t-\u003eMaybe(Interval s,IntervalSequence t s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:nextInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence of occurrences from an initial point.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "occurrencesFrom",
          "package": "time-patterns",
          "signature": "t -\u003e IntervalSequence' t -\u003e [Interval t]",
          "source": "src/Data-Time-Patterns-Internal.html#occurrencesFrom",
          "type": "function"
        },
        "index": {
          "description": "The sequence of occurrences from an initial point",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "occurrencesFrom",
          "normalized": "a-\u003eIntervalSequence' a-\u003e[Interval a]",
          "package": "time-patterns",
          "partial": "From",
          "signature": "t-\u003eIntervalSequence' t-\u003e[Interval t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:occurrencesFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the first n occurrences of a sequence\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "skip",
          "package": "time-patterns",
          "signature": "Int -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip the first occurrences of sequence",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "skip",
          "normalized": "Int-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "signature": "Int-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip intervals until the infimum of the argument is reached.\n\u003c/p\u003e\u003cp\u003eIf the intervals in the sequence are not ordered, then this function might\n not terminate.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "skipUntil",
          "package": "time-patterns",
          "signature": "Interval t -\u003e IntervalSequence' t -\u003e IntervalSequence' t",
          "source": "src/Data-Time-Patterns-Internal.html#skipUntil",
          "type": "function"
        },
        "index": {
          "description": "Skip intervals until the infimum of the argument is reached If the intervals in the sequence are not ordered then this function might not terminate",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "skipUntil",
          "normalized": "Interval a-\u003eIntervalSequence' a-\u003eIntervalSequence' a",
          "package": "time-patterns",
          "partial": "Until",
          "signature": "Interval t-\u003eIntervalSequence' t-\u003eIntervalSequence' t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:skipUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake occurrences until an interval containing the argument is reached\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "stopAt",
          "package": "time-patterns",
          "signature": "Interval s -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#stopAt",
          "type": "function"
        },
        "index": {
          "description": "Take occurrences until an interval containing the argument is reached",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "stopAt",
          "normalized": "Interval a-\u003eIntervalSequence b a-\u003eIntervalSequence b a",
          "package": "time-patterns",
          "partial": "At",
          "signature": "Interval s-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:stopAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake occurrences until an interval whose supremum is greater than the\n argument is reached.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "stopAt'",
          "package": "time-patterns",
          "signature": "s -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#stopAt%27",
          "type": "function"
        },
        "index": {
          "description": "Take occurrences until an interval whose supremum is greater than the argument is reached",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "stopAt'",
          "normalized": "a-\u003eIntervalSequence b a-\u003eIntervalSequence b a",
          "package": "time-patterns",
          "partial": "At'",
          "signature": "s-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:stopAt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd a sequence after n occurrences\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "take",
          "package": "time-patterns",
          "signature": "Int -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#take",
          "type": "function"
        },
        "index": {
          "description": "End sequence after occurrences",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "take",
          "normalized": "Int-\u003eIntervalSequence a b-\u003eIntervalSequence a b",
          "package": "time-patterns",
          "signature": "Int-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurrences from both intervals. \n   The difference between \u003ccode\u003eunion\u003c/code\u003e and \u003ccode\u003ediag\u003c/code\u003e is that \u003ccode\u003eunion\u003c/code\u003e preserves\n   the order of the results\n\u003c/p\u003e",
          "module": "Data.Time.Patterns.Internal",
          "name": "union",
          "package": "time-patterns",
          "signature": "IntervalSequence t s -\u003e IntervalSequence t s -\u003e IntervalSequence t s",
          "source": "src/Data-Time-Patterns-Internal.html#union",
          "type": "function"
        },
        "index": {
          "description": "Occurrences from both intervals The difference between union and diag is that union preserves the order of the results",
          "hierarchy": "Data Time Patterns Internal",
          "module": "Data.Time.Patterns.Internal",
          "name": "union",
          "normalized": "IntervalSequence a b-\u003eIntervalSequence a b-\u003eIntervalSequence a b",
          "package": "time-patterns",
          "signature": "IntervalSequence t s-\u003eIntervalSequence t s-\u003eIntervalSequence t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns-Internal.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePatterns for recurring events. Use the \u003ccode\u003eDatePattern\u003c/code\u003e type to build up\n a pattern, and the functions \u003ccode\u003eelementOf\u003c/code\u003e, \u003ccode\u003einstancesFrom\u003c/code\u003e and \n \u003ccode\u003eintervalsFrom\u003c/code\u003e to evaluate it.\n Simple example:\n\u003c/p\u003e\u003cpre\u003e import Control.Lens\n import Data.Thyme.Calendar\n import Data.Time.Patterns\n import qualified Prelude as P\n Module Main where\n \n main = do\n   -- get the 6th of April for the next ten years\n   let april6 = (take 1 $ skip 5 day) `inEach` april\n   let today = (YearMonthDay 2013 12 01)^.from gregorian\n   print $ P.take 10 $ instancesFrom today april6\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eDatePattern\u003c/code\u003es can be combined using \u003ccode\u003eunion\u003c/code\u003e, \u003ccode\u003eintersect\u003c/code\u003e with their \n obvious meanings and \u003ccode\u003einEach\u003c/code\u003e which repeats one pattern inside another one.\n For example, \n\u003c/p\u003e\u003cpre\u003e ((take 1 day) `inEach` august) `intersect` sunday\n\u003c/pre\u003e\u003cp\u003ewill give the 1st of August in years when it falls on a Sunday.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Patterns",
          "name": "Patterns",
          "package": "time-patterns",
          "source": "src/Data-Time-Patterns.html",
          "type": "module"
        },
        "index": {
          "description": "Patterns for recurring events Use the DatePattern type to build up pattern and the functions elementOf instancesFrom and intervalsFrom to evaluate it Simple example import Control.Lens import Data.Thyme.Calendar import Data.Time.Patterns import qualified Prelude as Module Main where main do get the th of April for the next ten years let april6 take skip day inEach april let today YearMonthDay from gregorian print P.take instancesFrom today april6 DatePattern can be combined using union intersect with their obvious meanings and inEach which repeats one pattern inside another one For example take day inEach august intersect sunday will give the st of August in years when it falls on Sunday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "Patterns",
          "package": "time-patterns",
          "partial": "Patterns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DatePattern describes a sequence of intervals of type Data.Thyme.Day.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "DatePattern",
          "package": "time-patterns",
          "source": "src/Data-Time-Patterns.html#DatePattern",
          "type": "type"
        },
        "index": {
          "description": "DatePattern describes sequence of intervals of type Data.Thyme.Day",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "DatePattern",
          "package": "time-patterns",
          "partial": "Date Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#t:DatePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery April.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "april",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#april",
          "type": "function"
        },
        "index": {
          "description": "Every April",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "april",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:april"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery August.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "august",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#august",
          "type": "function"
        },
        "index": {
          "description": "Every August",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "august",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:august"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that occurs every day.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "day",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#day",
          "type": "function"
        },
        "index": {
          "description": "An event that occurs every day",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "day",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:day"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery December.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "december",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#december",
          "type": "function"
        },
        "index": {
          "description": "Every December",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "december",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:december"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a date is covered by a DatePattern\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "elementOf",
          "package": "time-patterns",
          "signature": "Day -\u003e DatePattern -\u003e Bool",
          "source": "src/Data-Time-Patterns.html#elementOf",
          "type": "function"
        },
        "index": {
          "description": "Check if date is covered by DatePattern",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "elementOf",
          "normalized": "Day-\u003eDatePattern-\u003eBool",
          "package": "time-patterns",
          "partial": "Of",
          "signature": "Day-\u003eDatePattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:elementOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake every nth occurrence\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "every",
          "package": "time-patterns",
          "signature": "Int -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#every",
          "type": "function"
        },
        "index": {
          "description": "Take every nth occurrence",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "every",
          "normalized": "Int-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "signature": "Int-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:every"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip over all occurrences of a day.\n   If the pattern describes a  period longer\n   than a day, the entire period will be\n   skipped.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "except",
          "package": "time-patterns",
          "signature": "Day -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#except",
          "type": "function"
        },
        "index": {
          "description": "Skip over all occurrences of day If the pattern describes period longer than day the entire period will be skipped",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "except",
          "normalized": "Day-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "signature": "Day-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery February.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "february",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#february",
          "type": "function"
        },
        "index": {
          "description": "Every February",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "february",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:february"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Friday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "friday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#friday",
          "type": "function"
        },
        "index": {
          "description": "Every Friday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "friday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:friday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first pattern repeated for each interval of the\n   second pattern. E.g.:\n\u003c/p\u003e\u003cpre\u003e (take 3 $ every 4 monday) `inEach` year\n\u003c/pre\u003e\u003cp\u003ewill give the fourth, eighth and twelveth Monday in each year\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "inEach",
          "package": "time-patterns",
          "signature": "DatePattern -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#inEach",
          "type": "function"
        },
        "index": {
          "description": "The first pattern repeated for each interval of the second pattern E.g take every monday inEach year will give the fourth eighth and twelveth Monday in each year",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "inEach",
          "normalized": "DatePattern-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "partial": "Each",
          "signature": "DatePattern-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:inEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet occurrences of an event starting with a given day\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "instancesFrom",
          "package": "time-patterns",
          "signature": "Day -\u003e DatePattern -\u003e [Day]",
          "source": "src/Data-Time-Patterns.html#instancesFrom",
          "type": "function"
        },
        "index": {
          "description": "Get occurrences of an event starting with given day",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "instancesFrom",
          "normalized": "Day-\u003eDatePattern-\u003e[Day]",
          "package": "time-patterns",
          "partial": "From",
          "signature": "Day-\u003eDatePattern-\u003e[Day]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:instancesFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn only occurrences that are present in both patterns\n\u003c/p\u003e\u003cpre\u003e let myBirthday = (take 1 day) `inEach` august\n let s = intersect myBirthday sunday\n\u003c/pre\u003e\u003cp\u003eWill return August 1 in years when it falls on a Sunday\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "intersect",
          "package": "time-patterns",
          "signature": "DatePattern -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "Return only occurrences that are present in both patterns let myBirthday take day inEach august let intersect myBirthday sunday Will return August in years when it falls on Sunday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "intersect",
          "normalized": "DatePattern-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "signature": "DatePattern-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the date intervals described by the pattern, starting\n   from the specified date. \n\u003c/p\u003e\u003cp\u003eThe intervals range from the first\n   day included by the pattern to the first day after it, so\n   a single day \u003ccode\u003ed\u003c/code\u003e would be described as \u003ccode\u003e(d ... succ d)\u003c/code\u003e and\n   the interval for a month will go from the 1st of the month\n   to the 1st of the next month.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "intervalsFrom",
          "package": "time-patterns",
          "signature": "Day -\u003e DatePattern -\u003e [Interval Day]",
          "source": "src/Data-Time-Patterns.html#intervalsFrom",
          "type": "function"
        },
        "index": {
          "description": "Get the date intervals described by the pattern starting from the specified date The intervals range from the first day included by the pattern to the first day after it so single day would be described as succ and the interval for month will go from the st of the month to the st of the next month",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "intervalsFrom",
          "normalized": "Day-\u003eDatePattern-\u003e[Interval Day]",
          "package": "time-patterns",
          "partial": "From",
          "signature": "Day-\u003eDatePattern-\u003e[Interval Day]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:intervalsFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery January.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "january",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#january",
          "type": "function"
        },
        "index": {
          "description": "Every January",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "january",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:january"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery July.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "july",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#july",
          "type": "function"
        },
        "index": {
          "description": "Every July",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "july",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:july"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery June.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "june",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#june",
          "type": "function"
        },
        "index": {
          "description": "Every June",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "june",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:june"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery March.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "march",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#march",
          "type": "function"
        },
        "index": {
          "description": "Every March",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "march",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:march"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery May.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "may",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#may",
          "type": "function"
        },
        "index": {
          "description": "Every May",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "may",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:may"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Monday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "monday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#monday",
          "type": "function"
        },
        "index": {
          "description": "Every Monday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "monday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:monday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeeks, starting on Monday\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "mondayWeek",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#mondayWeek",
          "type": "function"
        },
        "index": {
          "description": "Weeks starting on Monday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "mondayWeek",
          "package": "time-patterns",
          "partial": "Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:mondayWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that occurs every month.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "month",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#month",
          "type": "function"
        },
        "index": {
          "description": "An event that occurs every month",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "month",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that never occurs\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "never",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#never",
          "type": "function"
        },
        "index": {
          "description": "An event that never occurs",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "never",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery November.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "november",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#november",
          "type": "function"
        },
        "index": {
          "description": "Every November",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "november",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:november"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery October.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "october",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#october",
          "type": "function"
        },
        "index": {
          "description": "Every October",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "october",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:october"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Saturday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "saturday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#saturday",
          "type": "function"
        },
        "index": {
          "description": "Every Saturday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "saturday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:saturday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery September.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "september",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#september",
          "type": "function"
        },
        "index": {
          "description": "Every September",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "september",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:september"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift all the results by a number of day\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "shiftBy",
          "package": "time-patterns",
          "signature": "Days -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#shiftBy",
          "type": "function"
        },
        "index": {
          "description": "Shift all the results by number of day",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "shiftBy",
          "normalized": "Days-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "partial": "By",
          "signature": "Days-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:shiftBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the first n occurrences\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "skip",
          "package": "time-patterns",
          "signature": "Int -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip the first occurrences",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "skip",
          "normalized": "Int-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "signature": "Int-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Sunday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "sunday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#sunday",
          "type": "function"
        },
        "index": {
          "description": "Every Sunday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "sunday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:sunday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeeks, starting on Sunday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "sundayWeek",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#sundayWeek",
          "type": "function"
        },
        "index": {
          "description": "Weeks starting on Sunday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "sundayWeek",
          "package": "time-patterns",
          "partial": "Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:sundayWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop after n occurrences\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "take",
          "package": "time-patterns",
          "signature": "Int -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#take",
          "type": "function"
        },
        "index": {
          "description": "Stop after occurrences",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "take",
          "normalized": "Int-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "signature": "Int-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Thursday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "thursday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#thursday",
          "type": "function"
        },
        "index": {
          "description": "Every Thursday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "thursday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:thursday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Tuesday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "tuesday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#tuesday",
          "type": "function"
        },
        "index": {
          "description": "Every Tuesday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "tuesday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:tuesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurrences of both patterns.\n\u003c/p\u003e\u003cpre\u003e union april june\n\u003c/pre\u003e\u003cp\u003eWill return the months April and June in each year\n\u003c/p\u003e\u003cpre\u003e let fifteenth = (take 1 $ skip 14 day) `inEach` month\n let third = (take 1 $ skip 2 day) `inEach` month\n union fifteenth third\n\u003c/pre\u003e\u003cp\u003eWill return the 3rd and the 15th of each month\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "union",
          "package": "time-patterns",
          "signature": "DatePattern -\u003e DatePattern -\u003e DatePattern",
          "source": "src/Data-Time-Patterns.html#union",
          "type": "function"
        },
        "index": {
          "description": "Occurrences of both patterns union april june Will return the months April and June in each year let fifteenth take skip day inEach month let third take skip day inEach month union fifteenth third Will return the rd and the th of each month",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "union",
          "normalized": "DatePattern-\u003eDatePattern-\u003eDatePattern",
          "package": "time-patterns",
          "signature": "DatePattern-\u003eDatePattern-\u003eDatePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery Wednesday.\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "wednesday",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#wednesday",
          "type": "function"
        },
        "index": {
          "description": "Every Wednesday",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "wednesday",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:wednesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYears, starting from Jan. 1\n\u003c/p\u003e",
          "module": "Data.Time.Patterns",
          "name": "year",
          "package": "time-patterns",
          "signature": "DatePattern",
          "source": "src/Data-Time-Patterns.html#year",
          "type": "function"
        },
        "index": {
          "description": "Years starting from Jan",
          "hierarchy": "Data Time Patterns",
          "module": "Data.Time.Patterns",
          "name": "year",
          "package": "time-patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/time-patterns/docs/Data-Time-Patterns.html#v:year"
      }
    }
  ]
]