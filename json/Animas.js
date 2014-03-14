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
        "word": "Animas"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAffine space type relation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "AffineSpace",
          "package": "Animas",
          "source": "src/FRP-Animas-AffineSpace.html",
          "type": "module"
        },
        "index": {
          "description": "Affine space type relation",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "AffineSpace",
          "package": "Animas",
          "partial": "Affine Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for an Affine space.\n Minimal complete definition: \u003ccode\u003e\u003ca\u003eorigin\u003c/a\u003e\u003c/code\u003e, '(.+^)', '(.-.)' \n\u003c/p\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "AffineSpace",
          "package": "Animas",
          "source": "src/FRP-Animas-AffineSpace.html#AffineSpace",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for an Affine space Minimal complete definition origin",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "AffineSpace",
          "package": "Animas",
          "partial": "Affine Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#t:AffineSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a vector to a point, obtaining a new point.\n\u003c/p\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "(.+^)",
          "package": "Animas",
          "signature": "p -\u003e v -\u003e p",
          "source": "src/FRP-Animas-AffineSpace.html#.%2B%5E",
          "type": "method"
        },
        "index": {
          "description": "Add vector to point obtaining new point",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "(.+^) .+^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "Animas",
          "signature": "p-\u003ev-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#v:.-43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract a vector from a point, obtaining a new point.\n\u003c/p\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "(.-^)",
          "package": "Animas",
          "signature": "p -\u003e v -\u003e p",
          "source": "src/FRP-Animas-AffineSpace.html#.-%5E",
          "type": "method"
        },
        "index": {
          "description": "Subtract vector from point obtaining new point",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "(.-^) .-^",
          "normalized": "a-\u003eb-\u003ea",
          "package": "Animas",
          "signature": "p-\u003ev-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#v:.-45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the difference of two points, returning a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "(.-.)",
          "package": "Animas",
          "signature": "p -\u003e p -\u003e v",
          "source": "src/FRP-Animas-AffineSpace.html#.-.",
          "type": "method"
        },
        "index": {
          "description": "Take the difference of two points returning vector",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "(.-.) .-.",
          "normalized": "a-\u003ea-\u003eb",
          "package": "Animas",
          "signature": "p-\u003ep-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe scalar distance between two points.\n\u003c/p\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "distance",
          "package": "Animas",
          "signature": "p -\u003e p -\u003e a",
          "source": "src/FRP-Animas-AffineSpace.html#distance",
          "type": "method"
        },
        "index": {
          "description": "The scalar distance between two points",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "distance",
          "normalized": "a-\u003ea-\u003eb",
          "package": "Animas",
          "signature": "p-\u003ep-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin value of an affine space\n\u003c/p\u003e",
          "module": "FRP.Animas.AffineSpace",
          "name": "origin",
          "package": "Animas",
          "signature": "p",
          "source": "src/FRP-Animas-AffineSpace.html#origin",
          "type": "method"
        },
        "index": {
          "description": "The origin value of an affine space",
          "hierarchy": "FRP Animas AffineSpace",
          "module": "FRP.Animas.AffineSpace",
          "name": "origin",
          "package": "Animas",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-AffineSpace.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of Animas Event type and functions on that type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Event",
          "name": "Event",
          "package": "Animas",
          "source": "src/FRP-Animas-Event.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of Animas Event type and functions on that type",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "Event",
          "package": "Animas",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent type\n\u003c/p\u003e",
          "module": "FRP.Animas.Event",
          "name": "Event",
          "package": "Animas",
          "source": "src/FRP-Animas-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Event type",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "Event",
          "package": "Animas",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas.Internals\",\"FRP.Animas\"]",
          "name": "Event",
          "package": "Animas",
          "signature": "Event a",
          "source": "src/FRP-Animas-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:Event\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Internals.html#v:Event\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:Event\"]"
        },
        "index": {
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "Event",
          "package": "Animas",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas.Internals\",\"FRP.Animas\"]",
          "name": "NoEvent",
          "package": "Animas",
          "signature": "NoEvent",
          "source": "src/FRP-Animas-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:NoEvent\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Internals.html#v:NoEvent\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:NoEvent\"]"
        },
        "index": {
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "NoEvent",
          "package": "Animas",
          "partial": "No Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:NoEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePair a value with an event occurrence's value, creating a new\n event occurrence\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "attach",
          "package": "Animas",
          "signature": "Event a -\u003e b -\u003e Event (a, b)",
          "source": "src/FRP-Animas-Event.html#attach",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:attach\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:attach\"]"
        },
        "index": {
          "description": "Pair value with an event occurrence value creating new event occurrence",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "attach",
          "normalized": "Event a-\u003eb-\u003eEvent(a,b)",
          "package": "Animas",
          "signature": "Event a-\u003eb-\u003eEvent(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom a list of event sources\n produce an event occurence with a list of values of occurrences\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "catEvents",
          "package": "Animas",
          "signature": "[Event a] -\u003e Event [a]",
          "source": "src/FRP-Animas-Event.html#catEvents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:catEvents\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:catEvents\"]"
        },
        "index": {
          "description": "From list of event sources produce an event occurence with list of values of occurrences",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "catEvents",
          "normalized": "[Event a]-\u003eEvent[a]",
          "package": "Animas",
          "partial": "Events",
          "signature": "[Event a]-\u003eEvent[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:catEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to an event, or return a default value\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "event",
          "package": "Animas",
          "signature": "a-\u003e (b -\u003e a)-\u003e Event b-\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:event\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:event\"]"
        },
        "index": {
          "description": "Apply function to an event or return default value",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "event",
          "normalized": "a-\u003e(b-\u003ea)-\u003eEvent b-\u003ea",
          "package": "Animas",
          "signature": "a-\u003e(b-\u003ea)-\u003eEvent b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a predicate to event occurences and forward them only if\n it matches\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "filterE",
          "package": "Animas",
          "signature": "(a -\u003e Bool) -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#filterE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:filterE\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:filterE\"]"
        },
        "index": {
          "description": "Apply predicate to event occurences and forward them only if it matches",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "package": "Animas",
          "signature": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a value from an event. This function will produce an error if\n applied to a NoEvent function\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "fromEvent",
          "package": "Animas",
          "signature": "Event a -\u003e a",
          "source": "src/FRP-Animas-Event.html#fromEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:fromEvent\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:fromEvent\"]"
        },
        "index": {
          "description": "Extract value from an event This function will produce an error if applied to NoEvent function",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "fromEvent",
          "normalized": "Event a-\u003ea",
          "package": "Animas",
          "partial": "Event",
          "signature": "Event a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:fromEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly pass through events if some external condition is true.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "gate",
          "package": "Animas",
          "signature": "Event a -\u003e Bool -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#gate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:gate\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:gate\"]"
        },
        "index": {
          "description": "Only pass through events if some external condition is true",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "gate",
          "normalized": "Event a-\u003eBool-\u003eEvent a",
          "package": "Animas",
          "signature": "Event a-\u003eBool-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:gate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate: is a value an event occurence\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "isEvent",
          "package": "Animas",
          "signature": "Event a -\u003e Bool",
          "source": "src/FRP-Animas-Event.html#isEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:isEvent\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:isEvent\"]"
        },
        "index": {
          "description": "Predicate is value an event occurence",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "isEvent",
          "normalized": "Event a-\u003eBool",
          "package": "Animas",
          "partial": "Event",
          "signature": "Event a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:isEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate: is a value not an event occurence\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "isNoEvent",
          "package": "Animas",
          "signature": "Event a -\u003e Bool",
          "source": "src/FRP-Animas-Event.html#isNoEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:isNoEvent\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:isNoEvent\"]"
        },
        "index": {
          "description": "Predicate is value not an event occurence",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "isNoEvent",
          "normalized": "Event a-\u003eBool",
          "package": "Animas",
          "partial": "No Event",
          "signature": "Event a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:isNoEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there is an occurence from both sources, produce an occurence\n with both values.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "joinE",
          "package": "Animas",
          "signature": "Event a -\u003e Event b -\u003e Event (a, b)",
          "source": "src/FRP-Animas-Event.html#joinE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:joinE\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:joinE\"]"
        },
        "index": {
          "description": "If there is an occurence from both sources produce an occurence with both values",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "joinE",
          "normalized": "Event a-\u003eEvent b-\u003eEvent(a,b)",
          "package": "Animas",
          "signature": "Event a-\u003eEvent b-\u003eEvent(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:joinE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf both inputs are event occurrences, produce the left event.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "lMerge",
          "package": "Animas",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#lMerge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:lMerge\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:lMerge\"]"
        },
        "index": {
          "description": "If both inputs are event occurrences produce the left event",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "lMerge",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "Animas",
          "partial": "Merge",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:lMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e function to event occurences,\n producing events only for \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "mapFilterE",
          "package": "Animas",
          "signature": "(a -\u003e Maybe b) -\u003e Event a -\u003e Event b",
          "source": "src/FRP-Animas-Event.html#mapFilterE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mapFilterE\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:mapFilterE\"]"
        },
        "index": {
          "description": "Apply Maybe function to event occurences producing events only for Just values",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "mapFilterE",
          "normalized": "(a-\u003eMaybe b)-\u003eEvent a-\u003eEvent b",
          "package": "Animas",
          "partial": "Filter",
          "signature": "(a-\u003eMaybe b)-\u003eEvent a-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mapFilterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply functions to an event occurences from two sources\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "mapMerge",
          "package": "Animas",
          "signature": "(a -\u003e c)-\u003e (b -\u003e c)-\u003e (a -\u003e b -\u003e c)-\u003e Event a-\u003e Event b-\u003e Event c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mapMerge\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:mapMerge\"]"
        },
        "index": {
          "description": "Apply functions to an event occurences from two sources",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "mapMerge",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003eb)-\u003eEvent a-\u003eEvent c-\u003eEvent b",
          "package": "Animas",
          "partial": "Merge",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003eEvent a-\u003eEvent b-\u003eEvent c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mapMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal: Convert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value to an event\n\u003c/p\u003e",
          "module": "FRP.Animas.Event",
          "name": "maybeToEvent",
          "package": "Animas",
          "signature": "Maybe a -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#maybeToEvent",
          "type": "function"
        },
        "index": {
          "description": "Internal Convert Maybe value to an event",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "maybeToEvent",
          "normalized": "Maybe a-\u003eEvent a",
          "package": "Animas",
          "partial": "To Event",
          "signature": "Maybe a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:maybeToEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf both inputs are event occurences, produce an error.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "merge",
          "package": "Animas",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#merge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:merge\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:merge\"]"
        },
        "index": {
          "description": "If both inputs are event occurences produce an error",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "merge",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "Animas",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf both inputs are event occurences, merge them with the supplied\n function\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "mergeBy",
          "package": "Animas",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#mergeBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mergeBy\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:mergeBy\"]"
        },
        "index": {
          "description": "If both inputs are event occurences merge them with the supplied function",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "package": "Animas",
          "partial": "By",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the event occurence closest to the head of the list,\n if one exists.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "mergeEvents",
          "package": "Animas",
          "signature": "[Event a] -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#mergeEvents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mergeEvents\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:mergeEvents\"]"
        },
        "index": {
          "description": "Produce the event occurence closest to the head of the list if one exists",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "mergeEvents",
          "normalized": "[Event a]-\u003eEvent a",
          "package": "Animas",
          "partial": "Events",
          "signature": "[Event a]-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:mergeEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot an event\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "noEvent",
          "package": "Animas",
          "signature": "Event a",
          "source": "src/FRP-Animas-Event.html#noEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:noEvent\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:noEvent\"]"
        },
        "index": {
          "description": "Not an event",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "noEvent",
          "package": "Animas",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:noEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the first item of a pair to not be an event\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "noEventFst",
          "package": "Animas",
          "signature": "(Event a, b)-\u003e (Event c, b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:noEventFst\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:noEventFst\"]"
        },
        "index": {
          "description": "Force the first item of pair to not be an event",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "noEventFst",
          "normalized": "(Event a,b)-\u003e(Event c,b)",
          "package": "Animas",
          "partial": "Event Fst",
          "signature": "(Event a,b)-\u003e(Event c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:noEventFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the second item of a pair to not be an event\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "noEventSnd",
          "package": "Animas",
          "signature": "(a, Event b)-\u003e (a, Event c)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:noEventSnd\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:noEventSnd\"]"
        },
        "index": {
          "description": "Force the second item of pair to not be an event",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "noEventSnd",
          "normalized": "(a,Event b)-\u003e(a,Event c)",
          "package": "Animas",
          "partial": "Event Snd",
          "signature": "(a,Event b)-\u003e(a,Event c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:noEventSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf both inputs are event occurences, produce the right event.\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "rMerge",
          "package": "Animas",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Animas-Event.html#rMerge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:rMerge\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:rMerge\"]"
        },
        "index": {
          "description": "If both inputs are event occurences produce the right event",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "rMerge",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "Animas",
          "partial": "Merge",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:rMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pair of event occurences from a single event occurence\n with a pair of values\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "splitE",
          "package": "Animas",
          "signature": "Event (a, b) -\u003e (Event a, Event b)",
          "source": "src/FRP-Animas-Event.html#splitE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:splitE\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:splitE\"]"
        },
        "index": {
          "description": "Create pair of event occurences from single event occurence with pair of values",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "splitE",
          "normalized": "Event(a,b)-\u003e(Event a,Event b)",
          "package": "Animas",
          "signature": "Event(a,b)-\u003e(Event a,Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:splitE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a possible event occurence with a new occurence carrying a\n replacement value\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "tag",
          "package": "Animas",
          "signature": "Event a-\u003e b-\u003e Event b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:tag\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:tag\"]"
        },
        "index": {
          "description": "Replace possible event occurence with new occurence carrying replacement value",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "tag",
          "normalized": "Event a-\u003eb-\u003eEvent b",
          "package": "Animas",
          "signature": "Event a-\u003eb-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee above\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Event\",\"FRP.Animas\"]",
          "name": "tagWith",
          "package": "Animas",
          "signature": "b -\u003e Event a -\u003e Event b",
          "source": "src/FRP-Animas-Event.html#tagWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:tagWith\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:tagWith\"]"
        },
        "index": {
          "description": "See above",
          "hierarchy": "FRP Animas Event",
          "module": "FRP.Animas.Event",
          "name": "tagWith",
          "normalized": "a-\u003eEvent b-\u003eEvent a",
          "package": "Animas",
          "partial": "With",
          "signature": "b-\u003eEvent a-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Event.html#v:tagWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHyperstrict evaluation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Forceable",
          "name": "Forceable",
          "package": "Animas",
          "source": "src/FRP-Animas-Forceable.html",
          "type": "module"
        },
        "index": {
          "description": "Hyperstrict evaluation",
          "hierarchy": "FRP Animas Forceable",
          "module": "FRP.Animas.Forceable",
          "name": "Forceable",
          "package": "Animas",
          "partial": "Forceable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Forceable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for values whose entire structure may be made strict\n\u003c/p\u003e",
          "module": "FRP.Animas.Forceable",
          "name": "Forceable",
          "package": "Animas",
          "source": "src/FRP-Animas-Forceable.html#Forceable",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for values whose entire structure may be made strict",
          "hierarchy": "FRP Animas Forceable",
          "module": "FRP.Animas.Forceable",
          "name": "Forceable",
          "package": "Animas",
          "partial": "Forceable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Forceable.html#t:Forceable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces the value of an expression and returns it\n\u003c/p\u003e",
          "module": "FRP.Animas.Forceable",
          "name": "force",
          "package": "Animas",
          "signature": "a -\u003e a",
          "source": "src/FRP-Animas-Forceable.html#force",
          "type": "method"
        },
        "index": {
          "description": "Forces the value of an expression and returns it",
          "hierarchy": "FRP Animas Forceable",
          "module": "FRP.Animas.Forceable",
          "name": "force",
          "normalized": "a-\u003ea",
          "package": "Animas",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Forceable.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic geometrical abstractions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Geometry",
          "name": "Geometry",
          "package": "Animas",
          "source": "src/FRP-Animas-Geometry.html",
          "type": "module"
        },
        "index": {
          "description": "Basic geometrical abstractions",
          "hierarchy": "FRP Animas Geometry",
          "module": "FRP.Animas.Geometry",
          "name": "Geometry",
          "package": "Animas",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface giving access to some of the internal\n details of the Animas implementation.\n\u003c/p\u003e\u003cp\u003eThis interface is indended to be used when the need arises to break\n abstraction barriers, e.g. for interfacing Animas to the real world, for\n debugging purposes, or the like. Be aware that the internal details\n may change. Relying on this interface means that your code is not\n insulated against such changes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Internals",
          "name": "Internals",
          "package": "Animas",
          "source": "src/FRP-Animas-Internals.html",
          "type": "module"
        },
        "index": {
          "description": "An interface giving access to some of the internal details of the Animas implementation This interface is indended to be used when the need arises to break abstraction barriers e.g for interfacing Animas to the real world for debugging purposes or the like Be aware that the internal details may change Relying on this interface means that your code is not insulated against such changes",
          "hierarchy": "FRP Animas Internals",
          "module": "FRP.Animas.Internals",
          "name": "Internals",
          "package": "Animas",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent type\n\u003c/p\u003e",
          "module": "FRP.Animas.Internals",
          "name": "Event",
          "package": "Animas",
          "source": "src/FRP-Animas-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Event type",
          "hierarchy": "FRP Animas Internals",
          "module": "FRP.Animas.Internals",
          "name": "Event",
          "package": "Animas",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Internals.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFramework for record merging.\n\u003c/p\u003e\u003cp\u003eIdea:\n\u003c/p\u003e\u003cp\u003eMergeableRecord is intended to be a super class for classes providing\n update operations on records. The ADT induced by such a set of operations\n can be considered a \u003ca\u003emergeable record\u003c/a\u003e, which can be merged into larger\n mergeable records essentially by function composition. Finalization turns\n a mergeable record into a record.\n\u003c/p\u003e\u003cp\u003eTypical use:\n\u003c/p\u003e\u003cp\u003eGiven\n\u003c/p\u003e\u003cpre\u003e  data Foo = Foo {l1 :: T1, l2 :: T2}\n\u003c/pre\u003e\u003cp\u003eone define a mergeable record type (MR Foo) by the following instance:\n\u003c/p\u003e\u003cpre\u003e\n   instance MergeableRecord Foo where\n       mrDefault = Foo {l1 = v1_dflt, l2 = v2_dflt}\n\u003c/pre\u003e\u003cp\u003eTypically, one would also provide definitions for setting the fields,\n possibly (but not necessarily) overloaded:\n\u003c/p\u003e\u003cpre\u003e\n   instance HasL1 Foo where\n       setL1 v = mrMake (foo -\u003e foo {l1 = v})\n\u003c/pre\u003e\u003cp\u003eNow Foo records can be created as follows:\n\u003c/p\u003e\u003cpre\u003e\n   let foo1 = setL1 v1\n   ...\n   let foo2 = setL2 v2 ~+~ foo1\n   ...\n   let foo\u003ca\u003eN\u003c/a\u003e = setL1 vN ~+~ foo\u003ca\u003eN-1\u003c/a\u003e\n   let fooFinal = mrFinalize foo\u003ca\u003eN\u003c/a\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "MergeableRecord",
          "package": "Animas",
          "source": "src/FRP-Animas-MergeableRecord.html",
          "type": "module"
        },
        "index": {
          "description": "Framework for record merging Idea MergeableRecord is intended to be super class for classes providing update operations on records The ADT induced by such set of operations can be considered mergeable record which can be merged into larger mergeable records essentially by function composition Finalization turns mergeable record into record Typical use Given data Foo Foo l1 T1 l2 T2 one define mergeable record type MR Foo by the following instance instance MergeableRecord Foo where mrDefault Foo l1 v1 dflt l2 v2 dflt Typically one would also provide definitions for setting the fields possibly but not necessarily overloaded instance HasL1 Foo where setL1 mrMake foo foo l1 Now Foo records can be created as follows let foo1 setL1 v1 let foo2 setL2 v2 foo1 let foo setL1 vN foo N-1 let fooFinal mrFinalize foo",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "MergeableRecord",
          "package": "Animas",
          "partial": "Mergeable Record",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType constructor for mergeable records.\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "MR",
          "package": "Animas",
          "source": "src/FRP-Animas-MergeableRecord.html#MR",
          "type": "data"
        },
        "index": {
          "description": "Type constructor for mergeable records",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "MR",
          "package": "Animas",
          "partial": "MR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#t:MR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for mergeable records\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "MergeableRecord",
          "package": "Animas",
          "source": "src/FRP-Animas-MergeableRecord.html#MergeableRecord",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for mergeable records",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "MergeableRecord",
          "package": "Animas",
          "partial": "Mergeable Record",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#t:MergeableRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two mergeable records. Left \"overrides\" in case of conflict.\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "(~+~)",
          "package": "Animas",
          "signature": "MR a -\u003e MR a -\u003e MR a",
          "source": "src/FRP-Animas-MergeableRecord.html#~%2B~",
          "type": "function"
        },
        "index": {
          "description": "Merge two mergeable records Left overrides in case of conflict",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "(~+~) ~+~",
          "normalized": "MR a-\u003eMR a-\u003eMR a",
          "package": "Animas",
          "signature": "MR a-\u003eMR a-\u003eMR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#v:-126--43--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value of a record type\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrDefault",
          "package": "Animas",
          "signature": "a",
          "source": "src/FRP-Animas-MergeableRecord.html#mrDefault",
          "type": "method"
        },
        "index": {
          "description": "The default value of record type",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrDefault",
          "package": "Animas",
          "partial": "Default",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#v:mrDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalization: turn a mergeable record into a record.\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrFinalize",
          "package": "Animas",
          "signature": "MR a -\u003e a",
          "source": "src/FRP-Animas-MergeableRecord.html#mrFinalize",
          "type": "function"
        },
        "index": {
          "description": "Finalization turn mergeable record into record",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrFinalize",
          "normalized": "MR a-\u003ea",
          "package": "Animas",
          "partial": "Finalize",
          "signature": "MR a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#v:mrFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruction of a mergeable record.\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrMake",
          "package": "Animas",
          "signature": "(a -\u003e a) -\u003e MR a",
          "source": "src/FRP-Animas-MergeableRecord.html#mrMake",
          "type": "function"
        },
        "index": {
          "description": "Construction of mergeable record",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrMake",
          "normalized": "(a-\u003ea)-\u003eMR a",
          "package": "Animas",
          "partial": "Make",
          "signature": "(a-\u003ea)-\u003eMR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#v:mrMake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to '(~+~)' above.\n\u003c/p\u003e",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrMerge",
          "package": "Animas",
          "signature": "MR a -\u003e MR a -\u003e MR a",
          "source": "src/FRP-Animas-MergeableRecord.html#mrMerge",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to above",
          "hierarchy": "FRP Animas MergeableRecord",
          "module": "FRP.Animas.MergeableRecord",
          "name": "mrMerge",
          "normalized": "MR a-\u003eMR a-\u003eMR a",
          "package": "Animas",
          "partial": "Merge",
          "signature": "MR a-\u003eMR a-\u003eMR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-MergeableRecord.html#v:mrMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of entities that really should be part\n of the Haskell 98 prelude or simply have no better\n home.\n\u003c/p\u003e\u003cp\u003e!!! Reverse function composition should go.\n !!! Better to use \u003ccode\u003e\u003c\u003c\u003c\u003c/code\u003e and \u003ccode\u003e\u003e\u003e\u003e\u003c/code\u003e for, respectively,\n !!! function composition and reverse function composition.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "Miscellany",
          "package": "Animas",
          "source": "src/FRP-Animas-Miscellany.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of entities that really should be part of the Haskell prelude or simply have no better home Reverse function composition should go Better to use and for respectively function composition and reverse function composition",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "Miscellany",
          "package": "Animas",
          "partial": "Miscellany",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse composition\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Miscellany\",\"FRP.Animas\"]",
          "name": "(#)",
          "package": "Animas",
          "signature": "(a -\u003e b) -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/FRP-Animas-Miscellany.html#%23",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:-35-\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:-35-\"]"
        },
        "index": {
          "description": "Reverse composition",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "(#) #",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "Animas",
          "signature": "(a-\u003eb)-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate a value into a pair\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Miscellany\",\"FRP.Animas\"]",
          "name": "dup",
          "package": "Animas",
          "signature": "a -\u003e (a, a)",
          "source": "src/FRP-Animas-Miscellany.html#dup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:dup\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dup\"]"
        },
        "index": {
          "description": "Duplicate value into pair",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "dup",
          "normalized": "a-\u003e(a,a)",
          "package": "Animas",
          "signature": "a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhole integer quotient\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "fDiv",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Whole integer quotient",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "fDiv",
          "normalized": "a-\u003ea-\u003eInteger",
          "package": "Animas",
          "partial": "Div",
          "signature": "a-\u003ea-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:fDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhole integer quotient and remainder \n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "fDivMod",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e (Integer, a)",
          "type": "function"
        },
        "index": {
          "description": "Whole integer quotient and remainder",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "fDivMod",
          "normalized": "a-\u003ea-\u003e(Integer,a)",
          "package": "Animas",
          "partial": "Div Mod",
          "signature": "a-\u003ea-\u003e(Integer,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:fDivMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemainder after whole integer quotient\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "fMod",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Remainder after whole integer quotient",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "fMod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Animas",
          "partial": "Mod",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:fMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the first value in each pair in a list of pairs.\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "mapFst",
          "package": "Animas",
          "signature": "(a -\u003e b) -\u003e [(a, c)] -\u003e [(b, c)]",
          "source": "src/FRP-Animas-Miscellany.html#mapFst",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the first value in each pair in list of pairs",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "mapFst",
          "normalized": "(a-\u003eb)-\u003e[(a,c)]-\u003e[(b,c)]",
          "package": "Animas",
          "partial": "Fst",
          "signature": "(a-\u003eb)-\u003e[(a,c)]-\u003e[(b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:mapFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbove, but apply the function to the second value\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "mapSnd",
          "package": "Animas",
          "signature": "(a -\u003e b) -\u003e [(c, a)] -\u003e [(c, b)]",
          "source": "src/FRP-Animas-Miscellany.html#mapSnd",
          "type": "function"
        },
        "index": {
          "description": "Above but apply the function to the second value",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "mapSnd",
          "normalized": "(a-\u003eb)-\u003e[(c,a)]-\u003e[(c,b)]",
          "package": "Animas",
          "partial": "Snd",
          "signature": "(a-\u003eb)-\u003e[(c,a)]-\u003e[(c,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:mapSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst value of a triple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel3_1",
          "package": "Animas",
          "signature": "(a, b, c) -\u003e a",
          "source": "src/FRP-Animas-Miscellany.html#sel3_1",
          "type": "function"
        },
        "index": {
          "description": "First value of triple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel3_1",
          "normalized": "(a,b,c)-\u003ea",
          "package": "Animas",
          "signature": "(a,b,c)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel3_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond value of a triple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel3_2",
          "package": "Animas",
          "signature": "(a, b, c) -\u003e b",
          "source": "src/FRP-Animas-Miscellany.html#sel3_2",
          "type": "function"
        },
        "index": {
          "description": "Second value of triple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel3_2",
          "normalized": "(a,b,c)-\u003eb",
          "package": "Animas",
          "signature": "(a,b,c)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel3_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThird value of a triple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel3_3",
          "package": "Animas",
          "signature": "(a, b, c) -\u003e c",
          "source": "src/FRP-Animas-Miscellany.html#sel3_3",
          "type": "function"
        },
        "index": {
          "description": "Third value of triple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel3_3",
          "normalized": "(a,b,c)-\u003ec",
          "package": "Animas",
          "signature": "(a,b,c)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel3_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst value of a quadruple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_1",
          "package": "Animas",
          "signature": "(a, b, c, d) -\u003e a",
          "source": "src/FRP-Animas-Miscellany.html#sel4_1",
          "type": "function"
        },
        "index": {
          "description": "First value of quadruple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_1",
          "normalized": "(a,b,c,d)-\u003ea",
          "package": "Animas",
          "signature": "(a,b,c,d)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel4_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond value of a quadruple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_2",
          "package": "Animas",
          "signature": "(a, b, c, d) -\u003e b",
          "source": "src/FRP-Animas-Miscellany.html#sel4_2",
          "type": "function"
        },
        "index": {
          "description": "Second value of quadruple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_2",
          "normalized": "(a,b,c,d)-\u003eb",
          "package": "Animas",
          "signature": "(a,b,c,d)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel4_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThird value of a quadruple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_3",
          "package": "Animas",
          "signature": "(a, b, c, d) -\u003e c",
          "source": "src/FRP-Animas-Miscellany.html#sel4_3",
          "type": "function"
        },
        "index": {
          "description": "Third value of quadruple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_3",
          "normalized": "(a,b,c,d)-\u003ec",
          "package": "Animas",
          "signature": "(a,b,c,d)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel4_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFourth value of a quadruple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_4",
          "package": "Animas",
          "signature": "(a, b, c, d) -\u003e d",
          "source": "src/FRP-Animas-Miscellany.html#sel4_4",
          "type": "function"
        },
        "index": {
          "description": "Fourth value of quadruple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel4_4",
          "normalized": "(a,b,c,d)-\u003ed",
          "package": "Animas",
          "signature": "(a,b,c,d)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel4_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst value of a quintuple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_1",
          "package": "Animas",
          "signature": "(a, b, c, d, e) -\u003e a",
          "source": "src/FRP-Animas-Miscellany.html#sel5_1",
          "type": "function"
        },
        "index": {
          "description": "First value of quintuple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_1",
          "normalized": "(a,b,c,d,e)-\u003ea",
          "package": "Animas",
          "signature": "(a,b,c,d,e)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel5_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecond value of a quintuple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_2",
          "package": "Animas",
          "signature": "(a, b, c, d, e) -\u003e b",
          "source": "src/FRP-Animas-Miscellany.html#sel5_2",
          "type": "function"
        },
        "index": {
          "description": "Second value of quintuple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_2",
          "normalized": "(a,b,c,d,e)-\u003eb",
          "package": "Animas",
          "signature": "(a,b,c,d,e)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel5_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThird value of a quintuple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_3",
          "package": "Animas",
          "signature": "(a, b, c, d, e) -\u003e c",
          "source": "src/FRP-Animas-Miscellany.html#sel5_3",
          "type": "function"
        },
        "index": {
          "description": "Third value of quintuple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_3",
          "normalized": "(a,b,c,d,e)-\u003ec",
          "package": "Animas",
          "signature": "(a,b,c,d,e)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel5_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFourth value of a quintuple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_4",
          "package": "Animas",
          "signature": "(a, b, c, d, e) -\u003e d",
          "source": "src/FRP-Animas-Miscellany.html#sel5_4",
          "type": "function"
        },
        "index": {
          "description": "Fourth value of quintuple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_4",
          "normalized": "(a,b,c,d,e)-\u003ed",
          "package": "Animas",
          "signature": "(a,b,c,d,e)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel5_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFifth value of a quintuple\n\u003c/p\u003e",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_5",
          "package": "Animas",
          "signature": "(a, b, c, d, e) -\u003e e",
          "source": "src/FRP-Animas-Miscellany.html#sel5_5",
          "type": "function"
        },
        "index": {
          "description": "Fifth value of quintuple",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "sel5_5",
          "normalized": "(a,b,c,d,e)-\u003ee",
          "package": "Animas",
          "signature": "(a,b,c,d,e)-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:sel5_5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the values in a pair\n\u003c/p\u003e",
          "module": "[\"FRP.Animas.Miscellany\",\"FRP.Animas\"]",
          "name": "swap",
          "package": "Animas",
          "signature": "(a, b) -\u003e (b, a)",
          "source": "src/FRP-Animas-Miscellany.html#swap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:swap\",\"http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:swap\"]"
        },
        "index": {
          "description": "Swap the values in pair",
          "hierarchy": "FRP Animas Miscellany",
          "module": "FRP.Animas.Miscellany",
          "name": "swap",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "Animas",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Miscellany.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e2D point abstraction (R^2).\n\u003c/p\u003e\u003cp\u003eToDo: Deriving Show, or provide dedicated show instance?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Point2",
          "name": "Point2",
          "package": "Animas",
          "source": "src/FRP-Animas-Point2.html",
          "type": "module"
        },
        "index": {
          "description": "point abstraction ToDo Deriving Show or provide dedicated show instance",
          "hierarchy": "FRP Animas Point2",
          "module": "FRP.Animas.Point2",
          "name": "Point2",
          "package": "Animas",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-dimensional real-valued point\n\u003c/p\u003e",
          "module": "FRP.Animas.Point2",
          "name": "Point2",
          "package": "Animas",
          "source": "src/FRP-Animas-Point2.html#Point2",
          "type": "data"
        },
        "index": {
          "description": "Two-dimensional real-valued point",
          "hierarchy": "FRP Animas Point2",
          "module": "FRP.Animas.Point2",
          "name": "Point2",
          "package": "Animas",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point2.html#t:Point2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Point2",
          "name": "Point2",
          "package": "Animas",
          "signature": "Point2 !a !a",
          "source": "src/FRP-Animas-Point2.html#Point2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Point2",
          "module": "FRP.Animas.Point2",
          "name": "Point2",
          "package": "Animas",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point2.html#v:Point2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX coordinate\n\u003c/p\u003e",
          "module": "FRP.Animas.Point2",
          "name": "point2X",
          "package": "Animas",
          "signature": "Point2 a -\u003e a",
          "source": "src/FRP-Animas-Point2.html#point2X",
          "type": "function"
        },
        "index": {
          "description": "coordinate",
          "hierarchy": "FRP Animas Point2",
          "module": "FRP.Animas.Point2",
          "name": "point2X",
          "normalized": "Point a-\u003ea",
          "package": "Animas",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point2.html#v:point2X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY coordinate\n\u003c/p\u003e",
          "module": "FRP.Animas.Point2",
          "name": "point2Y",
          "package": "Animas",
          "signature": "Point2 a -\u003e a",
          "source": "src/FRP-Animas-Point2.html#point2Y",
          "type": "function"
        },
        "index": {
          "description": "coordinate",
          "hierarchy": "FRP Animas Point2",
          "module": "FRP.Animas.Point2",
          "name": "point2Y",
          "normalized": "Point a-\u003ea",
          "package": "Animas",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point2.html#v:point2Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e3D point abstraction (R^3).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Point3",
          "name": "Point3",
          "package": "Animas",
          "source": "src/FRP-Animas-Point3.html",
          "type": "module"
        },
        "index": {
          "description": "point abstraction",
          "hierarchy": "FRP Animas Point3",
          "module": "FRP.Animas.Point3",
          "name": "Point3",
          "package": "Animas",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3-dimensional, real-valued point\n\u003c/p\u003e",
          "module": "FRP.Animas.Point3",
          "name": "Point3",
          "package": "Animas",
          "source": "src/FRP-Animas-Point3.html#Point3",
          "type": "data"
        },
        "index": {
          "description": "dimensional real-valued point",
          "hierarchy": "FRP Animas Point3",
          "module": "FRP.Animas.Point3",
          "name": "Point3",
          "package": "Animas",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point3.html#t:Point3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Point3",
          "name": "Point3",
          "package": "Animas",
          "signature": "Point3 !a !a !a",
          "source": "src/FRP-Animas-Point3.html#Point3",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Point3",
          "module": "FRP.Animas.Point3",
          "name": "Point3",
          "package": "Animas",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point3.html#v:Point3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX coordinate\n\u003c/p\u003e",
          "module": "FRP.Animas.Point3",
          "name": "point3X",
          "package": "Animas",
          "signature": "Point3 a -\u003e a",
          "source": "src/FRP-Animas-Point3.html#point3X",
          "type": "function"
        },
        "index": {
          "description": "coordinate",
          "hierarchy": "FRP Animas Point3",
          "module": "FRP.Animas.Point3",
          "name": "point3X",
          "normalized": "Point a-\u003ea",
          "package": "Animas",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point3.html#v:point3X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY coordinate\n\u003c/p\u003e",
          "module": "FRP.Animas.Point3",
          "name": "point3Y",
          "package": "Animas",
          "signature": "Point3 a -\u003e a",
          "source": "src/FRP-Animas-Point3.html#point3Y",
          "type": "function"
        },
        "index": {
          "description": "coordinate",
          "hierarchy": "FRP Animas Point3",
          "module": "FRP.Animas.Point3",
          "name": "point3Y",
          "normalized": "Point a-\u003ea",
          "package": "Animas",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point3.html#v:point3Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZ coordinate\n\u003c/p\u003e",
          "module": "FRP.Animas.Point3",
          "name": "point3Z",
          "package": "Animas",
          "signature": "Point3 a -\u003e a",
          "source": "src/FRP-Animas-Point3.html#point3Z",
          "type": "function"
        },
        "index": {
          "description": "coordinate",
          "hierarchy": "FRP Animas Point3",
          "module": "FRP.Animas.Point3",
          "name": "point3Z",
          "normalized": "Point a-\u003ea",
          "package": "Animas",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Point3.html#v:point3Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTask abstraction on top of signal transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Task",
          "name": "Task",
          "package": "Animas",
          "source": "src/FRP-Animas-Task.html",
          "type": "module"
        },
        "index": {
          "description": "Task abstraction on top of signal transformers",
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "Task",
          "package": "Animas",
          "partial": "Task",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "Task",
          "package": "Animas",
          "source": "src/FRP-Animas-Task.html#Task",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "Task",
          "package": "Animas",
          "partial": "Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#t:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "abortWhen",
          "package": "Animas",
          "signature": "Task a b c -\u003e SF a (Event d) -\u003e Task a b (Either c d)",
          "source": "src/FRP-Animas-Task.html#abortWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "abortWhen",
          "normalized": "Task a b c-\u003eSF a(Event d)-\u003eTask a b(Either c d)",
          "package": "Animas",
          "partial": "When",
          "signature": "Task a b c-\u003eSF a(Event d)-\u003eTask a b(Either c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:abortWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "constT",
          "package": "Animas",
          "signature": "b -\u003e Task a b c",
          "source": "src/FRP-Animas-Task.html#constT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "constT",
          "normalized": "a-\u003eTask b a c",
          "package": "Animas",
          "signature": "b-\u003eTask a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:constT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "for",
          "package": "Animas",
          "signature": "a -\u003e (a -\u003e a) -\u003e (a -\u003e Bool) -\u003e m b -\u003e m ()",
          "source": "src/FRP-Animas-Task.html#for",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "for",
          "normalized": "a-\u003e(a-\u003ea)-\u003e(a-\u003eBool)-\u003eb c-\u003eb()",
          "package": "Animas",
          "signature": "a-\u003e(a-\u003ea)-\u003e(a-\u003eBool)-\u003em b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "forAll",
          "package": "Animas",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
          "source": "src/FRP-Animas-Task.html#forAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "forAll",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
          "package": "Animas",
          "partial": "All",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:forAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "forEver",
          "package": "Animas",
          "signature": "m a -\u003e m b",
          "source": "src/FRP-Animas-Task.html#forEver",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "forEver",
          "normalized": "a b-\u003ea c",
          "package": "Animas",
          "partial": "Ever",
          "signature": "m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:forEver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "mkTask",
          "package": "Animas",
          "signature": "SF a (b, Event c) -\u003e Task a b c",
          "source": "src/FRP-Animas-Task.html#mkTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "mkTask",
          "normalized": "SF a(b,Event c)-\u003eTask a b c",
          "package": "Animas",
          "partial": "Task",
          "signature": "SF a(b,Event c)-\u003eTask a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:mkTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "repeatUntil",
          "package": "Animas",
          "signature": "m a -\u003e (a -\u003e Bool) -\u003e m a",
          "source": "src/FRP-Animas-Task.html#repeatUntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "repeatUntil",
          "normalized": "a b-\u003e(b-\u003eBool)-\u003ea b",
          "package": "Animas",
          "partial": "Until",
          "signature": "m a-\u003e(a-\u003eBool)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:repeatUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "runTask",
          "package": "Animas",
          "signature": "Task a b c -\u003e SF a (Either b c)",
          "source": "src/FRP-Animas-Task.html#runTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "runTask",
          "normalized": "Task a b c-\u003eSF a(Either b c)",
          "package": "Animas",
          "partial": "Task",
          "signature": "Task a b c-\u003eSF a(Either b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:runTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "runTask_",
          "package": "Animas",
          "signature": "Task a b c -\u003e SF a b",
          "source": "src/FRP-Animas-Task.html#runTask_",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "runTask_",
          "normalized": "Task a b c-\u003eSF a b",
          "package": "Animas",
          "partial": "Task",
          "signature": "Task a b c-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:runTask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "sleepT",
          "package": "Animas",
          "signature": "Time -\u003e b -\u003e Task a b ()",
          "source": "src/FRP-Animas-Task.html#sleepT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "sleepT",
          "normalized": "Time-\u003ea-\u003eTask b a()",
          "package": "Animas",
          "signature": "Time-\u003eb-\u003eTask a b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:sleepT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "snapT",
          "package": "Animas",
          "signature": "Task a b a",
          "source": "src/FRP-Animas-Task.html#snapT",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "snapT",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:snapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "taskToSF",
          "package": "Animas",
          "signature": "Task a b c -\u003e SF a (b, Event c)",
          "source": "src/FRP-Animas-Task.html#taskToSF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "taskToSF",
          "normalized": "Task a b c-\u003eSF a(b,Event c)",
          "package": "Animas",
          "partial": "To SF",
          "signature": "Task a b c-\u003eSF a(b,Event c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:taskToSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Task",
          "name": "timeOut",
          "package": "Animas",
          "signature": "Task a b c -\u003e Time -\u003e Task a b (Maybe c)",
          "source": "src/FRP-Animas-Task.html#timeOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Task",
          "module": "FRP.Animas.Task",
          "name": "timeOut",
          "normalized": "Task a b c-\u003eTime-\u003eTask a b(Maybe c)",
          "package": "Animas",
          "partial": "Out",
          "signature": "Task a b c-\u003eTime-\u003eTask a b(Maybe c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Task.html#v:timeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDerived utility definitions.\n\u003c/p\u003e\u003cp\u003eToDo:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Possibly add\n       impulse :: VectorSpace a k =\u003e a -\u003e Event a\n   But to do that, we need access to Event, which we currently do not have.\n\u003c/li\u003e\u003cli\u003e The general arrow utilities should be moved to a module\n   FRP.Animas.Utilities.\n\u003c/li\u003e\u003cli\u003e I'm not sure structuring the Animas \"core\" according to what is\n   core functionality and what's not is all that useful. There are\n   many cases where we want to implement combinators that fairly\n   easily could be implemented in terms of others as primitives simply\n   because we expect that that implementation is going to be much more\n   efficient, and that the combinators are used sufficiently often to\n   warrant doing this. E.g. \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e should be a primitive, even though\n   it could be derived from \u003ccode\u003e\u003ca\u003epSwitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Reconsider \u003ccode\u003e\u003ca\u003erecur\u003c/a\u003e\u003c/code\u003e. If an event source has an immediate occurrence,\n   we'll get into a loop. For example: recur now. Maybe suppress\n   initial occurrences? Initial occurrences are rather pointless in this\n   case anyway.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "Utilities",
          "package": "Animas",
          "source": "src/FRP-Animas-Utilities.html",
          "type": "module"
        },
        "index": {
          "description": "Derived utility definitions ToDo Possibly add impulse VectorSpace Event But to do that we need access to Event which we currently do not have The general arrow utilities should be moved to module FRP.Animas.Utilities not sure structuring the Animas core according to what is core functionality and what not is all that useful There are many cases where we want to implement combinators that fairly easily could be implemented in terms of others as primitives simply because we expect that that implementation is going to be much more efficient and that the combinators are used sufficiently often to warrant doing this E.g switch should be primitive even though it could be derived from pSwitch Reconsider recur If an event source has an immediate occurrence we ll get into loop For example recur now Maybe suppress initial occurrences Initial occurrences are rather pointless in this case anyway",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "Utilities",
          "package": "Animas",
          "partial": "Utilities",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a second event source as soon as the first produces an event.\n (When used infix, andThen is right associative, so, for instance,\n x \u003ccode\u003e\u003ca\u003eandThen\u003c/a\u003e\u003c/code\u003e y \u003ccode\u003e\u003ca\u003eandThen\u003c/a\u003e\u003c/code\u003e z will produce the first event of x, then of y,\n then of z.\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "andThen",
          "package": "Animas",
          "signature": "SF a (Event b) -\u003e SF a (Event b) -\u003e SF a (Event b)",
          "source": "src/FRP-Animas-Utilities.html#andThen",
          "type": "function"
        },
        "index": {
          "description": "Start second event source as soon as the first produces an event When used infix andThen is right associative so for instance andThen andThen will produce the first event of then of then of",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "andThen",
          "normalized": "SF a(Event b)-\u003eSF a(Event b)-\u003eSF a(Event b)",
          "package": "Animas",
          "partial": "Then",
          "signature": "SF a(Event b)-\u003eSF a(Event b)-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:andThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "arr2",
          "package": "Animas",
          "signature": "(b -\u003e c -\u003e d) -\u003e a (b, c) d",
          "source": "src/FRP-Animas-Utilities.html#arr2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "arr2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed(a,b)c",
          "package": "Animas",
          "signature": "(b-\u003ec-\u003ed)-\u003ea(b,c)d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:arr2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "arr3",
          "package": "Animas",
          "signature": "(b -\u003e c -\u003e d -\u003e e) -\u003e a (b, c, d) e",
          "source": "src/FRP-Animas-Utilities.html#arr3",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "arr3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee(a,b,c)d",
          "package": "Animas",
          "signature": "(b-\u003ec-\u003ed-\u003ee)-\u003ea(b,c,d)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:arr3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "arr4",
          "package": "Animas",
          "signature": "(b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e a (b, c, d, e) f",
          "source": "src/FRP-Animas-Utilities.html#arr4",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "arr4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef(a,b,c,d)e",
          "package": "Animas",
          "signature": "(b-\u003ec-\u003ed-\u003ee-\u003ef)-\u003ea(b,c,d,e)f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:arr4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "arr5",
          "package": "Animas",
          "signature": "(b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e a (b, c, d, e, f) g",
          "source": "src/FRP-Animas-Utilities.html#arr5",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "arr5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eg(a,b,c,d,e)f",
          "package": "Animas",
          "signature": "(b-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ea(b,c,d,e,f)g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:arr5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of event occurences, producing a new event\n occurence with each updated count.\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "count",
          "package": "Animas",
          "signature": "SF (Event a) (Event b)",
          "source": "src/FRP-Animas-Utilities.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count the number of event occurences producing new event occurence with each updated count",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "count",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled track and hold: on occurence of a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e input,\n the \u003cem\u003enext\u003c/em\u003e output is the value of the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "dTrackAndHold",
          "package": "Animas",
          "signature": "a -\u003e SF (Maybe a) a",
          "source": "src/FRP-Animas-Utilities.html#dTrackAndHold",
          "type": "function"
        },
        "index": {
          "description": "Decoupled track and hold on occurence of Just input the next output is the value of the Just value",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "dTrackAndHold",
          "normalized": "a-\u003eSF(Maybe a)a",
          "package": "Animas",
          "partial": "Track And Hold",
          "signature": "a-\u003eSF(Maybe a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:dTrackAndHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "dpSwitchZ",
          "package": "Animas",
          "signature": "[SF a b] -\u003e SF ([a], [b]) (Event c) -\u003e ([SF a b] -\u003e c -\u003e SF [a] [b]) -\u003e SF [a] [b]",
          "source": "src/FRP-Animas-Utilities.html#dpSwitchZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "dpSwitchZ",
          "normalized": "[SF a b]-\u003eSF([a],[b])(Event c)-\u003e([SF a b]-\u003ec-\u003eSF[a][b])-\u003eSF[a][b]",
          "package": "Animas",
          "partial": "Switch",
          "signature": "[SF a b]-\u003eSF([a],[b])(Event c)-\u003e([SF a b]-\u003ec-\u003eSF[a][b])-\u003eSF[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:dpSwitchZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "drpSwitchZ",
          "package": "Animas",
          "signature": "[SF a b] -\u003e SF ([a], Event ([SF a b] -\u003e [SF a b])) [b]",
          "source": "src/FRP-Animas-Utilities.html#drpSwitchZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "drpSwitchZ",
          "normalized": "[SF a b]-\u003eSF([a],Event([SF a b]-\u003e[SF a b]))[b]",
          "package": "Animas",
          "partial": "Switch",
          "signature": "[SF a b]-\u003eSF([a],Event([SF a b]-\u003e[SF a b]))[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:drpSwitchZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "fby",
          "package": "Animas",
          "signature": "b -\u003e SF a b -\u003e SF a b",
          "source": "src/FRP-Animas-Utilities.html#fby",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "fby",
          "normalized": "a-\u003eSF b a-\u003eSF b a",
          "package": "Animas",
          "signature": "b-\u003eSF a b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:fby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "impulseIntegral",
          "package": "Animas",
          "signature": "SF (a, Event a) a",
          "source": "src/FRP-Animas-Utilities.html#impulseIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "impulseIntegral",
          "normalized": "SF(a,Event a)a",
          "package": "Animas",
          "partial": "Integral",
          "signature": "SF(a,Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:impulseIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "lift0",
          "package": "Animas",
          "signature": "c -\u003e a b c",
          "source": "src/FRP-Animas-Utilities.html#lift0",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "lift0",
          "normalized": "a-\u003eb c a",
          "package": "Animas",
          "signature": "c-\u003ea b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:lift0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "lift1",
          "package": "Animas",
          "signature": "(c -\u003e d) -\u003e a b c -\u003e a b d",
          "source": "src/FRP-Animas-Utilities.html#lift1",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "lift1",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "Animas",
          "signature": "(c-\u003ed)-\u003ea b c-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:lift1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "lift2",
          "package": "Animas",
          "signature": "(c -\u003e d -\u003e e) -\u003e a b c -\u003e a b d -\u003e a b e",
          "source": "src/FRP-Animas-Utilities.html#lift2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "lift2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed e a-\u003ed e b-\u003ed e c",
          "package": "Animas",
          "signature": "(c-\u003ed-\u003ee)-\u003ea b c-\u003ea b d-\u003ea b e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "lift3",
          "package": "Animas",
          "signature": "(c -\u003e d -\u003e e -\u003e f) -\u003e a b c -\u003e a b d -\u003e a b e -\u003e a b f",
          "source": "src/FRP-Animas-Utilities.html#lift3",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "lift3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee f a-\u003ee f b-\u003ee f c-\u003ee f d",
          "package": "Animas",
          "signature": "(c-\u003ed-\u003ee-\u003ef)-\u003ea b c-\u003ea b d-\u003ea b e-\u003ea b f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:lift3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "lift4",
          "package": "Animas",
          "signature": "(c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e a b c -\u003e a b d -\u003e a b e -\u003e a b f -\u003e a b g",
          "source": "src/FRP-Animas-Utilities.html#lift4",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "lift4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef g a-\u003ef g b-\u003ef g c-\u003ef g d-\u003ef g e",
          "package": "Animas",
          "signature": "(c-\u003ed-\u003ee-\u003ef-\u003eg)-\u003ea b c-\u003ea b d-\u003ea b e-\u003ea b f-\u003ea b g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:lift4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "lift5",
          "package": "Animas",
          "signature": "(c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e a b c -\u003e a b d -\u003e a b e -\u003e a b f -\u003e a b g -\u003e a b h",
          "source": "src/FRP-Animas-Utilities.html#lift5",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "lift5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eg h a-\u003eg h b-\u003eg h c-\u003eg h d-\u003eg h e-\u003eg h f",
          "package": "Animas",
          "signature": "(c-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003ea b c-\u003ea b d-\u003ea b e-\u003ea b f-\u003ea b g-\u003ea b h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:lift5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "old_accumHold",
          "package": "Animas",
          "signature": "a -\u003e SF (Event (a -\u003e a)) a",
          "source": "src/FRP-Animas-Utilities.html#old_accumHold",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "old_accumHold",
          "normalized": "a-\u003eSF(Event(a-\u003ea))a",
          "package": "Animas",
          "partial": "Hold",
          "signature": "a-\u003eSF(Event(a-\u003ea))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:old_accumHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "old_accumHoldBy",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e SF (Event a) b",
          "source": "src/FRP-Animas-Utilities.html#old_accumHoldBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "old_accumHoldBy",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF(Event b)a",
          "package": "Animas",
          "partial": "Hold By",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF(Event a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:old_accumHoldBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "old_dAccumHold",
          "package": "Animas",
          "signature": "a -\u003e SF (Event (a -\u003e a)) a",
          "source": "src/FRP-Animas-Utilities.html#old_dAccumHold",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "old_dAccumHold",
          "normalized": "a-\u003eSF(Event(a-\u003ea))a",
          "package": "Animas",
          "partial": "Accum Hold",
          "signature": "a-\u003eSF(Event(a-\u003ea))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:old_dAccumHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "old_dAccumHoldBy",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e SF (Event a) b",
          "source": "src/FRP-Animas-Utilities.html#old_dAccumHoldBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "old_dAccumHoldBy",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF(Event b)a",
          "package": "Animas",
          "partial": "Accum Hold By",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF(Event a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:old_dAccumHoldBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "old_dHold",
          "package": "Animas",
          "signature": "a -\u003e SF (Event a) a",
          "source": "src/FRP-Animas-Utilities.html#old_dHold",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "old_dHold",
          "normalized": "a-\u003eSF(Event a)a",
          "package": "Animas",
          "partial": "Hold",
          "signature": "a-\u003eSF(Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:old_dHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "old_impulseIntegral",
          "package": "Animas",
          "signature": "SF (a, Event a) a",
          "source": "src/FRP-Animas-Utilities.html#old_impulseIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "old_impulseIntegral",
          "normalized": "SF(a,Event a)a",
          "package": "Animas",
          "partial": "Integral",
          "signature": "SF(a,Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:old_impulseIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "pSwitchZ",
          "package": "Animas",
          "signature": "[SF a b] -\u003e SF ([a], [b]) (Event c) -\u003e ([SF a b] -\u003e c -\u003e SF [a] [b]) -\u003e SF [a] [b]",
          "source": "src/FRP-Animas-Utilities.html#pSwitchZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "pSwitchZ",
          "normalized": "[SF a b]-\u003eSF([a],[b])(Event c)-\u003e([SF a b]-\u003ec-\u003eSF[a][b])-\u003eSF[a][b]",
          "package": "Animas",
          "partial": "Switch",
          "signature": "[SF a b]-\u003eSF([a],[b])(Event c)-\u003e([SF a b]-\u003ec-\u003eSF[a][b])-\u003eSF[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:pSwitchZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "parZ",
          "package": "Animas",
          "signature": "[SF a b] -\u003e SF [a] [b]",
          "source": "src/FRP-Animas-Utilities.html#parZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "parZ",
          "normalized": "[SF a b]-\u003eSF[a][b]",
          "package": "Animas",
          "signature": "[SF a b]-\u003eSF[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:parZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun one SF if a predicate is true, otherwise run another SF.\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "provided",
          "package": "Animas",
          "signature": "(a -\u003e Bool)-\u003e SF a b-\u003e SF a b-\u003e SF a b",
          "type": "function"
        },
        "index": {
          "description": "Run one SF if predicate is true otherwise run another SF",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "provided",
          "normalized": "(a-\u003eBool)-\u003eSF a b-\u003eSF a b-\u003eSF a b",
          "package": "Animas",
          "signature": "(a-\u003eBool)-\u003eSF a b-\u003eSF a b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:provided"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestart an event source directly after its first event occurence\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "recur",
          "package": "Animas",
          "signature": "SF a (Event b) -\u003e SF a (Event b)",
          "source": "src/FRP-Animas-Utilities.html#recur",
          "type": "function"
        },
        "index": {
          "description": "Restart an event source directly after its first event occurence",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "recur",
          "normalized": "SF a(Event b)-\u003eSF a(Event b)",
          "package": "Animas",
          "signature": "SF a(Event b)-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:recur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "rpSwitchZ",
          "package": "Animas",
          "signature": "[SF a b] -\u003e SF ([a], Event ([SF a b] -\u003e [SF a b])) [b]",
          "source": "src/FRP-Animas-Utilities.html#rpSwitchZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "rpSwitchZ",
          "normalized": "[SF a b]-\u003eSF([a],Event([SF a b]-\u003e[SF a b]))[b]",
          "package": "Animas",
          "partial": "Switch",
          "signature": "[SF a b]-\u003eSF([a],Event([SF a b]-\u003e[SF a b]))[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:rpSwitchZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a signal at regular intervals.\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "sample",
          "package": "Animas",
          "signature": "Time -\u003e SF a (Event a)",
          "source": "src/FRP-Animas-Utilities.html#sample",
          "type": "function"
        },
        "index": {
          "description": "Sample signal at regular intervals",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "sample",
          "normalized": "Time-\u003eSF a(Event a)",
          "package": "Animas",
          "signature": "Time-\u003eSF a(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Utilities",
          "name": "sampleWindow",
          "package": "Animas",
          "signature": "Int -\u003e Time -\u003e SF a (Event [a])",
          "source": "src/FRP-Animas-Utilities.html#sampleWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "sampleWindow",
          "normalized": "Int-\u003eTime-\u003eSF a(Event[a])",
          "package": "Animas",
          "partial": "Window",
          "signature": "Int-\u003eTime-\u003eSF a(Event[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:sampleWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an event with the input value at time 0\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "snap",
          "package": "Animas",
          "signature": "SF a (Event a)",
          "source": "src/FRP-Animas-Utilities.html#snap",
          "type": "function"
        },
        "index": {
          "description": "Produce an event with the input value at time",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "snap",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:snap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an event with the input value at or as soon after the specified\n time delay.\n\u003c/p\u003e",
          "module": "FRP.Animas.Utilities",
          "name": "snapAfter",
          "package": "Animas",
          "signature": "Time -\u003e SF a (Event a)",
          "source": "src/FRP-Animas-Utilities.html#snapAfter",
          "type": "function"
        },
        "index": {
          "description": "Produce an event with the input value at or as soon after the specified time delay",
          "hierarchy": "FRP Animas Utilities",
          "module": "FRP.Animas.Utilities",
          "name": "snapAfter",
          "normalized": "Time-\u003eSF a(Event a)",
          "package": "Animas",
          "partial": "After",
          "signature": "Time-\u003eSF a(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Utilities.html#v:snapAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e2D vector abstraction (R^2).\n\u003c/p\u003e\u003cp\u003eToDo: Deriving Show, or provide dedicated show instance?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "Vector2",
          "package": "Animas",
          "source": "src/FRP-Animas-Vector2.html",
          "type": "module"
        },
        "index": {
          "description": "vector abstraction ToDo Deriving Show or provide dedicated show instance",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "Vector2",
          "package": "Animas",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2-dimensional vector type\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "Vector2",
          "package": "Animas",
          "source": "src/FRP-Animas-Vector2.html#Vector2",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector type",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "Vector2",
          "package": "Animas",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#t:Vector2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 2D vector\n\u003c/p\u003e\u003cp\u003eObtain the X-magnitude of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e Vector2 a",
          "type": "function"
        },
        "index": {
          "description": "Create vector Obtain the X-magnitude of vector",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2",
          "normalized": "a-\u003ea-\u003eVector a",
          "package": "Animas",
          "signature": "a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the magnitude of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Polar",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e Vector2 a",
          "type": "function"
        },
        "index": {
          "description": "Obtain the magnitude of vector",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Polar",
          "normalized": "a-\u003ea-\u003eVector a",
          "package": "Animas",
          "partial": "Polar",
          "signature": "a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2Polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the direction of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Rho",
          "package": "Animas",
          "signature": "Vector2 a -\u003e a",
          "source": "src/FRP-Animas-Vector2.html#vector2Rho",
          "type": "function"
        },
        "index": {
          "description": "Obtain the direction of vector",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Rho",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "partial": "Rho",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2Rho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Vector2",
          "name": "vector2RhoTheta",
          "package": "Animas",
          "signature": "Vector2 a-\u003e (a, a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2RhoTheta",
          "normalized": "Vector a-\u003e(a,a)",
          "package": "Animas",
          "partial": "Rho Theta",
          "signature": "Vector a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2RhoTheta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas.Vector2",
          "name": "vector2Rotate",
          "package": "Animas",
          "signature": "a-\u003e Vector2 a-\u003e Vector2 a",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Rotate",
          "normalized": "a-\u003eVector a-\u003eVector a",
          "package": "Animas",
          "partial": "Rotate",
          "signature": "a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the magnitude and direction of a vector as an ordered pair\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Theta",
          "package": "Animas",
          "signature": "Vector2 a -\u003e a",
          "source": "src/FRP-Animas-Vector2.html#vector2Theta",
          "type": "function"
        },
        "index": {
          "description": "Obtain the magnitude and direction of vector as an ordered pair",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Theta",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "partial": "Theta",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2Theta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the Y-magnitude of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2X",
          "package": "Animas",
          "signature": "Vector2 a -\u003e a",
          "source": "src/FRP-Animas-Vector2.html#vector2X",
          "type": "function"
        },
        "index": {
          "description": "Obtain the Y-magnitude of vector",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2X",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a vector from polar coordinates (magnitude\u003cem\u003erho, direction\u003c/em\u003etheta (radians))\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2XY",
          "package": "Animas",
          "signature": "Vector2 a-\u003e (a, a)",
          "type": "function"
        },
        "index": {
          "description": "Create vector from polar coordinates magnitude rho direction theta radians",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2XY",
          "normalized": "Vector a-\u003e(a,a)",
          "package": "Animas",
          "partial": "XY",
          "signature": "Vector a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2XY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the X and Y magnitudes of a vector as an ordered pair\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Y",
          "package": "Animas",
          "signature": "Vector2 a -\u003e a",
          "source": "src/FRP-Animas-Vector2.html#vector2Y",
          "type": "function"
        },
        "index": {
          "description": "Obtain the and magnitudes of vector as an ordered pair",
          "hierarchy": "FRP Animas Vector2",
          "module": "FRP.Animas.Vector2",
          "name": "vector2Y",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector2.html#v:vector2Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e3D vector abstraction (R^3).\n\u003c/p\u003e\u003cp\u003eToDo: Deriving Show, or provide dedicated show instance?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "Vector3",
          "package": "Animas",
          "source": "src/FRP-Animas-Vector3.html",
          "type": "module"
        },
        "index": {
          "description": "vector abstraction ToDo Deriving Show or provide dedicated show instance",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "Vector3",
          "package": "Animas",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3-dimensional vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "Vector3",
          "package": "Animas",
          "source": "src/FRP-Animas-Vector3.html#Vector3",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "Vector3",
          "package": "Animas",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#t:Vector3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a 3 dimensional vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e a-\u003e Vector3 a",
          "type": "function"
        },
        "index": {
          "description": "Construct dimensional vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3",
          "normalized": "a-\u003ea-\u003ea-\u003eVector a",
          "package": "Animas",
          "signature": "a-\u003ea-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhi-direction of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Phi",
          "package": "Animas",
          "signature": "Vector3 a -\u003e a",
          "source": "src/FRP-Animas-Vector3.html#vector3Phi",
          "type": "function"
        },
        "index": {
          "description": "Phi-direction of vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Phi",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "partial": "Phi",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMagnitude of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Rho",
          "package": "Animas",
          "signature": "Vector3 a -\u003e a",
          "source": "src/FRP-Animas-Vector3.html#vector3Rho",
          "type": "function"
        },
        "index": {
          "description": "Magnitude of vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Rho",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "partial": "Rho",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Rho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMagnitude and directions of a vector as an ordered triple\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3RhoThetaPhi",
          "package": "Animas",
          "signature": "Vector3 a-\u003e (a, a, a)",
          "type": "function"
        },
        "index": {
          "description": "Magnitude and directions of vector as an ordered triple",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3RhoThetaPhi",
          "normalized": "Vector a-\u003e(a,a,a)",
          "package": "Animas",
          "partial": "Rho Theta Phi",
          "signature": "Vector a-\u003e(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3RhoThetaPhi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Rotate",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e Vector3 a-\u003e Vector3 a",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Rotate",
          "normalized": "a-\u003ea-\u003eVector a-\u003eVector a",
          "package": "Animas",
          "partial": "Rotate",
          "signature": "a-\u003ea-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpherical coordinates to vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Spherical",
          "package": "Animas",
          "signature": "a-\u003e a-\u003e a-\u003e Vector3 a",
          "type": "function"
        },
        "index": {
          "description": "Spherical coordinates to vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Spherical",
          "normalized": "a-\u003ea-\u003ea-\u003eVector a",
          "package": "Animas",
          "partial": "Spherical",
          "signature": "a-\u003ea-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Spherical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheta-direction of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Theta",
          "package": "Animas",
          "signature": "Vector3 a -\u003e a",
          "source": "src/FRP-Animas-Vector3.html#vector3Theta",
          "type": "function"
        },
        "index": {
          "description": "Theta-direction of vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Theta",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "partial": "Theta",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Theta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX magnitude of the vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3X",
          "package": "Animas",
          "signature": "Vector3 a -\u003e a",
          "source": "src/FRP-Animas-Vector3.html#vector3X",
          "type": "function"
        },
        "index": {
          "description": "magnitude of the vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3X",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered pair of magnitudes of the vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3XYZ",
          "package": "Animas",
          "signature": "Vector3 a-\u003e (a, a, a)",
          "type": "function"
        },
        "index": {
          "description": "Ordered pair of magnitudes of the vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3XYZ",
          "normalized": "Vector a-\u003e(a,a,a)",
          "package": "Animas",
          "partial": "XYZ",
          "signature": "Vector a-\u003e(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3XYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eY magnitude of the vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Y",
          "package": "Animas",
          "signature": "Vector3 a -\u003e a",
          "source": "src/FRP-Animas-Vector3.html#vector3Y",
          "type": "function"
        },
        "index": {
          "description": "magnitude of the vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Y",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZ magnitude of the vector\n\u003c/p\u003e",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Z",
          "package": "Animas",
          "signature": "Vector3 a -\u003e a",
          "source": "src/FRP-Animas-Vector3.html#vector3Z",
          "type": "function"
        },
        "index": {
          "description": "magnitude of the vector",
          "hierarchy": "FRP Animas Vector3",
          "module": "FRP.Animas.Vector3",
          "name": "vector3Z",
          "normalized": "Vector a-\u003ea",
          "package": "Animas",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-Vector3.html#v:vector3Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVector space type relation and basic instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "VectorSpace",
          "package": "Animas",
          "source": "src/FRP-Animas-VectorSpace.html",
          "type": "module"
        },
        "index": {
          "description": "Vector space type relation and basic instances",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "VectorSpace",
          "package": "Animas",
          "partial": "Vector Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for a vector space\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "VectorSpace",
          "package": "Animas",
          "source": "src/FRP-Animas-VectorSpace.html#VectorSpace",
          "type": "class"
        },
        "index": {
          "description": "Type class for vector space",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "VectorSpace",
          "package": "Animas",
          "partial": "Vector Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#t:VectorSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the magnitude\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "(*^)",
          "package": "Animas",
          "signature": "a -\u003e v -\u003e v",
          "source": "src/FRP-Animas-VectorSpace.html#%2A%5E",
          "type": "method"
        },
        "index": {
          "description": "Scale the magnitude",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "(*^) *^",
          "normalized": "a-\u003eb-\u003eb",
          "package": "Animas",
          "signature": "a-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two vectors additively\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "(^+^)",
          "package": "Animas",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/FRP-Animas-VectorSpace.html#%5E%2B%5E",
          "type": "method"
        },
        "index": {
          "description": "Combine two vectors additively",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "(^+^) ^+^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Animas",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:-94--43--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract a vector from another\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "(^-^)",
          "package": "Animas",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/FRP-Animas-VectorSpace.html#%5E-%5E",
          "type": "method"
        },
        "index": {
          "description": "Subtract vector from another",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "(^-^) ^-^",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Animas",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:-94--45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDe-scale the magnitude\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "(^/)",
          "package": "Animas",
          "signature": "v -\u003e a -\u003e v",
          "source": "src/FRP-Animas-VectorSpace.html#%5E%2F",
          "type": "method"
        },
        "index": {
          "description": "De-scale the magnitude",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "(^/) ^/",
          "normalized": "a-\u003eb-\u003ea",
          "package": "Animas",
          "signature": "v-\u003ea-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:-94--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the dot-product of two vectors\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "dot",
          "package": "Animas",
          "signature": "v -\u003e v -\u003e a",
          "source": "src/FRP-Animas-VectorSpace.html#dot",
          "type": "method"
        },
        "index": {
          "description": "Take the dot-product of two vectors",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "dot",
          "normalized": "a-\u003ea-\u003eb",
          "package": "Animas",
          "signature": "v-\u003ev-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "negateVector",
          "package": "Animas",
          "signature": "v -\u003e v",
          "source": "src/FRP-Animas-VectorSpace.html#negateVector",
          "type": "method"
        },
        "index": {
          "description": "Negation",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "negateVector",
          "normalized": "a-\u003ea",
          "package": "Animas",
          "partial": "Vector",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:negateVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector norm\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "norm",
          "package": "Animas",
          "signature": "v -\u003e a",
          "source": "src/FRP-Animas-VectorSpace.html#norm",
          "type": "method"
        },
        "index": {
          "description": "Vector norm",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "norm",
          "normalized": "a-\u003eb",
          "package": "Animas",
          "signature": "v-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a unit vector in the direction of a vector\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "normalize",
          "package": "Animas",
          "signature": "v -\u003e v",
          "source": "src/FRP-Animas-VectorSpace.html#normalize",
          "type": "method"
        },
        "index": {
          "description": "Produce unit vector in the direction of vector",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "normalize",
          "normalized": "a-\u003ea",
          "package": "Animas",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector with no magnitude\n\u003c/p\u003e",
          "module": "FRP.Animas.VectorSpace",
          "name": "zeroVector",
          "package": "Animas",
          "signature": "v",
          "source": "src/FRP-Animas-VectorSpace.html#zeroVector",
          "type": "method"
        },
        "index": {
          "description": "Vector with no magnitude",
          "hierarchy": "FRP Animas VectorSpace",
          "module": "FRP.Animas.VectorSpace",
          "name": "zeroVector",
          "package": "Animas",
          "partial": "Vector",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas-VectorSpace.html#v:zeroVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "Animas",
          "package": "Animas",
          "source": "src/FRP-Animas.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "Animas",
          "package": "Animas",
          "partial": "Animas",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "DTime",
          "package": "Animas",
          "source": "src/FRP-Animas.html#DTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "DTime",
          "package": "Animas",
          "partial": "DTime",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:DTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent type\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "Event",
          "package": "Animas",
          "source": "src/FRP-Animas-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Event type",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "Event",
          "package": "Animas",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith a source of random number supply in hand, the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e class allows the\nprogrammer to extract random values of a variety of types.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "Random",
          "package": "Animas",
          "type": "class"
        },
        "index": {
          "description": "With source of random number supply in hand the Random class allows the programmer to extract random values of variety of types Minimal complete definition randomR and random",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "Random",
          "package": "Animas",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e provides a common interface to random number\n generators.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "RandomGen",
          "package": "Animas",
          "type": "class"
        },
        "index": {
          "description": "The class RandomGen provides common interface to random number generators Minimal complete definition next and split",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "RandomGen",
          "package": "Animas",
          "partial": "Random Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:RandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "ReactHandle",
          "package": "Animas",
          "source": "src/FRP-Animas.html#ReactHandle",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "ReactHandle",
          "package": "Animas",
          "partial": "React Handle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:ReactHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal function\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "SF",
          "package": "Animas",
          "source": "src/FRP-Animas.html#SF",
          "type": "data"
        },
        "index": {
          "description": "signal function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "SF",
          "package": "Animas",
          "partial": "SF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:SF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step in evaluating a signal function\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "Step",
          "package": "Animas",
          "source": "src/FRP-Animas.html#Step",
          "type": "data"
        },
        "index": {
          "description": "step in evaluating signal function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "Step",
          "package": "Animas",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime representation for signal functions\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "Time",
          "package": "Animas",
          "source": "src/FRP-Animas.html#Time",
          "type": "type"
        },
        "index": {
          "description": "Time representation for signal functions",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "Time",
          "package": "Animas",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the output value for a signal function\n at the first instant it is processed\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "(--\u003e)",
          "package": "Animas",
          "signature": "b -\u003e SF a b -\u003e SF a b",
          "source": "src/FRP-Animas.html#--%3E",
          "type": "function"
        },
        "index": {
          "description": "Override the output value for signal function at the first instant it is processed",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "(--\u003e) --\u003e",
          "normalized": "a-\u003eSF b a-\u003eSF b a",
          "package": "Animas",
          "signature": "b-\u003eSF a b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the output at the first instant of a signal function\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "(-=\u003e)",
          "package": "Animas",
          "signature": "(b -\u003e b) -\u003e SF a b -\u003e SF a b",
          "source": "src/FRP-Animas.html#-%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the output at the first instant of signal function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "(-=\u003e) -=\u003e",
          "normalized": "(a-\u003ea)-\u003eSF b a-\u003eSF b a",
          "package": "Animas",
          "signature": "(b-\u003eb)-\u003eSF a b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:-45--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the input value for a signal function at the\n first instant it is processed.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "(\u003e--)",
          "package": "Animas",
          "signature": "a -\u003e SF a b -\u003e SF a b",
          "source": "src/FRP-Animas.html#%3E--",
          "type": "function"
        },
        "index": {
          "description": "Override the input value for signal function at the first instant it is processed",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "(\u003e--) \u003e--",
          "normalized": "a-\u003eSF a b-\u003eSF a b",
          "package": "Animas",
          "signature": "a-\u003eSF a b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:-62--45--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the input at the first instant of a signal function\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "(\u003e=-)",
          "package": "Animas",
          "signature": "(a -\u003e a) -\u003e SF a b -\u003e SF a b",
          "source": "src/FRP-Animas.html#%3E%3D-",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the input at the first instant of signal function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "(\u003e=-) \u003e=-",
          "normalized": "(a-\u003ea)-\u003eSF a b-\u003eSF a b",
          "package": "Animas",
          "signature": "(a-\u003ea)-\u003eSF a b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:-62--61--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function carried by an event to an accumulator, producing\n an event with the new value of the accumulator.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "accum",
          "package": "Animas",
          "signature": "a-\u003e SF (Event (a -\u003e a)) (Event a)",
          "type": "function"
        },
        "index": {
          "description": "Apply function carried by an event to an accumulator producing an event with the new value of the accumulator",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "accum",
          "normalized": "a-\u003eSF(Event(a-\u003ea))(Event a)",
          "package": "Animas",
          "signature": "a-\u003eSF(Event(a-\u003ea))(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a function and initial accumulator to process events, produce\n each new accumulator vale as an event.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "accumBy",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b)-\u003e b-\u003e SF (Event a) (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Provide function and initial accumulator to process events produce each new accumulator vale as an event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "accumBy",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF(Event b)(Event a)",
          "package": "Animas",
          "partial": "By",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF(Event a)(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:accumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter events with an accumulator.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "accumFilter",
          "package": "Animas",
          "signature": "(c -\u003e a -\u003e (c, Maybe b))-\u003e c-\u003e SF (Event a) (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Filter events with an accumulator",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "accumFilter",
          "normalized": "(a-\u003eb-\u003e(a,Maybe c))-\u003ea-\u003eSF(Event b)(Event c)",
          "package": "Animas",
          "partial": "Filter",
          "signature": "(c-\u003ea-\u003e(c,Maybe b))-\u003ec-\u003eSF(Event a)(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:accumFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/code\u003e but output the value of the accumulator.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "accumHold",
          "package": "Animas",
          "signature": "a-\u003e SF (Event (a -\u003e a)) a",
          "type": "function"
        },
        "index": {
          "description": "As with accum but output the value of the accumulator",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "accumHold",
          "normalized": "a-\u003eSF(Event(a-\u003ea))a",
          "package": "Animas",
          "partial": "Hold",
          "signature": "a-\u003eSF(Event(a-\u003ea))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:accumHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs in \u003ccode\u003e\u003ca\u003eaccumBy\u003c/a\u003e\u003c/code\u003e but produce the accumulator value as a continuous signal.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "accumHoldBy",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e SF (Event a) b",
          "source": "src/FRP-Animas.html#accumHoldBy",
          "type": "function"
        },
        "index": {
          "description": "As in accumBy but produce the accumulator value as continuous signal",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "accumHoldBy",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF(Event b)a",
          "package": "Animas",
          "partial": "Hold By",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF(Event a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:accumHoldBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an event delayed by some time.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "after",
          "package": "Animas",
          "signature": "Time-\u003e b-\u003e SF a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Produce an event delayed by some time",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "after",
          "normalized": "Time-\u003ea-\u003eSF b(Event a)",
          "package": "Animas",
          "signature": "Time-\u003eb-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of time delays and values to a signal function\n producing events.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "afterEach",
          "package": "Animas",
          "signature": "[(Time, b)]-\u003e SF a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Takes list of time delays and values to signal function producing events",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "afterEach",
          "normalized": "[(Time,a)]-\u003eSF b(Event a)",
          "package": "Animas",
          "partial": "Each",
          "signature": "[(Time,b)]-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:afterEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "afterEachCat",
          "package": "Animas",
          "signature": "[(Time, b)] -\u003e SF a (Event [b])",
          "source": "src/FRP-Animas.html#afterEachCat",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "afterEachCat",
          "normalized": "[(Time,a)]-\u003eSF b(Event[a])",
          "package": "Animas",
          "partial": "Each Cat",
          "signature": "[(Time,b)]-\u003eSF a(Event[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:afterEachCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function with an event input to a pure signal function\n on events. Use \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e class, rather than this function.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "arrEPrim",
          "package": "Animas",
          "signature": "(Event a -\u003e b) -\u003e SF (Event a) b",
          "source": "src/FRP-Animas.html#arrEPrim",
          "type": "function"
        },
        "index": {
          "description": "Lifts function with an event input to pure signal function on events Use arr from the Arrow class rather than this function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "arrEPrim",
          "normalized": "(Event a-\u003eb)-\u003eSF(Event a)b",
          "package": "Animas",
          "partial": "EPrim",
          "signature": "(Event a-\u003eb)-\u003eSF(Event a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:arrEPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function to a pure signal function. Use \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e\n   class, rather than this function.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "arrPrim",
          "package": "Animas",
          "signature": "(a -\u003e b) -\u003e SF a b",
          "source": "src/FRP-Animas.html#arrPrim",
          "type": "function"
        },
        "index": {
          "description": "Lifts function to pure signal function Use arr from the Arrow class rather than this function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "arrPrim",
          "normalized": "(a-\u003eb)-\u003eSF a b",
          "package": "Animas",
          "partial": "Prim",
          "signature": "(a-\u003eb)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:arrPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant signal function. Use \n\u003c/p\u003e\u003cpre\u003e constant x\n\u003c/pre\u003e\u003cp\u003ein place of\n\u003c/p\u003e\u003cpre\u003e arr $ const x\n\u003c/pre\u003e",
          "module": "FRP.Animas",
          "name": "constant",
          "package": "Animas",
          "signature": "b -\u003e SF a b",
          "source": "src/FRP-Animas.html#constant",
          "type": "function"
        },
        "index": {
          "description": "The constant signal function Use constant in place of arr const",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "constant",
          "normalized": "a-\u003eSF b a",
          "package": "Animas",
          "signature": "b-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled version of \u003ccode\u003e\u003ca\u003eaccumHold\u003c/a\u003e\u003c/code\u003e. Updated accumulator values begin output \n at the instant \u003cem\u003eafter\u003c/em\u003e the updating event.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dAccumHold",
          "package": "Animas",
          "signature": "a -\u003e SF (Event (a -\u003e a)) a",
          "source": "src/FRP-Animas.html#dAccumHold",
          "type": "function"
        },
        "index": {
          "description": "Decoupled version of accumHold Updated accumulator values begin output at the instant after the updating event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dAccumHold",
          "normalized": "a-\u003eSF(Event(a-\u003ea))a",
          "package": "Animas",
          "partial": "Accum Hold",
          "signature": "a-\u003eSF(Event(a-\u003ea))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dAccumHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled version of \u003ccode\u003e\u003ca\u003eaccumHoldBy\u003c/a\u003e\u003c/code\u003e. Output signal changes at the instant\n \u003cem\u003eafter\u003c/em\u003e an event.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dAccumHoldBy",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e SF (Event a) b",
          "source": "src/FRP-Animas.html#dAccumHoldBy",
          "type": "function"
        },
        "index": {
          "description": "Decoupled version of accumHoldBy Output signal changes at the instant after an event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dAccumHoldBy",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF(Event b)a",
          "package": "Animas",
          "partial": "Accum Hold By",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF(Event a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dAccumHoldBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled version of \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e. Begins outputting event value the instant\n after the event occurence.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dHold",
          "package": "Animas",
          "signature": "a -\u003e SF (Event a) a",
          "source": "src/FRP-Animas.html#dHold",
          "type": "function"
        },
        "index": {
          "description": "Decoupled version of hold Begins outputting event value the instant after the event occurence",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dHold",
          "normalized": "a-\u003eSF(Event a)a",
          "package": "Animas",
          "partial": "Hold",
          "signature": "a-\u003eSF(Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled version of \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dSwitch",
          "package": "Animas",
          "signature": "SF a (b, Event c) -\u003e (c -\u003e SF a b) -\u003e SF a b",
          "source": "src/FRP-Animas.html#dSwitch",
          "type": "function"
        },
        "index": {
          "description": "Decoupled version of switch",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dSwitch",
          "normalized": "SF a(b,Event c)-\u003e(c-\u003eSF a b)-\u003eSF a b",
          "package": "Animas",
          "partial": "Switch",
          "signature": "SF a(b,Event c)-\u003e(c-\u003eSF a b)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay a (non-event) signal by a specific time offsent. For events please\n use \u003ccode\u003e\u003ca\u003edelayEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "delay",
          "package": "Animas",
          "signature": "Time-\u003e a-\u003e SF a a",
          "type": "function"
        },
        "index": {
          "description": "Delay non-event signal by specific time offsent For events please use delayEvent",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "delay",
          "normalized": "Time-\u003ea-\u003eSF a a",
          "package": "Animas",
          "signature": "Time-\u003ea-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay events passing through                        \n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "delayEvent",
          "package": "Animas",
          "signature": "Time-\u003e SF (Event a) (Event a)",
          "type": "function"
        },
        "index": {
          "description": "Delay events passing through",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "delayEvent",
          "normalized": "Time-\u003eSF(Event a)(Event a)",
          "package": "Animas",
          "partial": "Event",
          "signature": "Time-\u003eSF(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:delayEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "delayEventCat",
          "package": "Animas",
          "signature": "Time -\u003e SF (Event a) (Event [a])",
          "source": "src/FRP-Animas.html#delayEventCat",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "delayEventCat",
          "normalized": "Time-\u003eSF(Event a)(Event[a])",
          "package": "Animas",
          "partial": "Event Cat",
          "signature": "Time-\u003eSF(Event a)(Event[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:delayEventCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "deltaEncode",
          "package": "Animas",
          "signature": "DTime -\u003e [a] -\u003e (a, [(DTime, Maybe a)])",
          "source": "src/FRP-Animas.html#deltaEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "deltaEncode",
          "normalized": "DTime-\u003e[a]-\u003e(a,[(DTime,Maybe a)])",
          "package": "Animas",
          "partial": "Encode",
          "signature": "DTime-\u003e[a]-\u003e(a,[(DTime,Maybe a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:deltaEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "deltaEncodeBy",
          "package": "Animas",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e DTime -\u003e [a] -\u003e (a, [(DTime, Maybe a)])",
          "source": "src/FRP-Animas.html#deltaEncodeBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "deltaEncodeBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eDTime-\u003e[a]-\u003e(a,[(DTime,Maybe a)])",
          "package": "Animas",
          "partial": "Encode By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eDTime-\u003e[a]-\u003e(a,[(DTime,Maybe a)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:deltaEncodeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "derivative",
          "package": "Animas",
          "signature": "SF a a",
          "source": "src/FRP-Animas.html#derivative",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "derivative",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:derivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled version of \u003ccode\u003ekswitch\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dkSwitch",
          "package": "Animas",
          "signature": "SF a b -\u003e SF (a, b) (Event c) -\u003e (SF a b -\u003e c -\u003e SF a b) -\u003e SF a b",
          "source": "src/FRP-Animas.html#dkSwitch",
          "type": "function"
        },
        "index": {
          "description": "Decoupled version of kswitch",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dkSwitch",
          "normalized": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "package": "Animas",
          "partial": "Switch",
          "signature": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dkSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003epSwitch\u003c/a\u003e, but the output from the switched-in signal function is visible\n | in the sample frame after the event.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dpSwitch",
          "package": "Animas",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf)) -\u003e col (SF b c) -\u003e SF (a, col c) (Event d) -\u003e (col (SF b c) -\u003e d -\u003e SF a (col c)) -\u003e SF a (col c)",
          "source": "src/FRP-Animas.html#dpSwitch",
          "type": "function"
        },
        "index": {
          "description": "pSwitch but the output from the switched-in signal function is visible in the sample frame after the event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dpSwitch",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF(c,d g)(Event h)-\u003e(d(SF f g)-\u003eh-\u003eSF c(d g))-\u003eSF c(d g)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF(a,col c)(Event d)-\u003e(col(SF b c)-\u003ed-\u003eSF a(col c))-\u003eSF a(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dpSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003epSwitchB\u003c/a\u003e, but switched output is visible on the sample frame\n after the event occurs\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dpSwitchB",
          "package": "Animas",
          "signature": "col (SF a b) -\u003e SF (a, col b) (Event c) -\u003e (col (SF a b) -\u003e c -\u003e SF a (col b)) -\u003e SF a (col b)",
          "source": "src/FRP-Animas.html#dpSwitchB",
          "type": "function"
        },
        "index": {
          "description": "pSwitchB but switched output is visible on the sample frame after the event occurs",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dpSwitchB",
          "normalized": "a(SF b c)-\u003eSF(b,a c)(Event d)-\u003e(a(SF b c)-\u003ed-\u003eSF b(a c))-\u003eSF b(a c)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "col(SF a b)-\u003eSF(a,col b)(Event c)-\u003e(col(SF a b)-\u003ec-\u003eSF a(col b))-\u003eSF a(col b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dpSwitchB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoupled version of \u003ccode\u003erswitch\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "drSwitch",
          "package": "Animas",
          "signature": "SF a b -\u003e SF (a, Event (SF a b)) b",
          "source": "src/FRP-Animas.html#drSwitch",
          "type": "function"
        },
        "index": {
          "description": "Decoupled version of rswitch",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "drSwitch",
          "normalized": "SF a b-\u003eSF(a,Event(SF a b))b",
          "package": "Animas",
          "partial": "Switch",
          "signature": "SF a b-\u003eSF(a,Event(SF a b))b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:drSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppress a certain number of initial events\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "dropEvents",
          "package": "Animas",
          "signature": "Int-\u003e SF (Event a) (Event a)",
          "type": "function"
        },
        "index": {
          "description": "Suppress certain number of initial events",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "dropEvents",
          "normalized": "Int-\u003eSF(Event a)(Event a)",
          "package": "Animas",
          "partial": "Events",
          "signature": "Int-\u003eSF(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:dropEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003erpSwitch\u003c/a\u003e, but the output of a switched-in SF is visible in the sample\n frame after the switch\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "drpSwitch",
          "package": "Animas",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf)) -\u003e col (SF b c) -\u003e SF (a, Event (col (SF b c) -\u003e col (SF b c))) (col c)",
          "source": "src/FRP-Animas.html#drpSwitch",
          "type": "function"
        },
        "index": {
          "description": "rpSwitch but the output of switched-in SF is visible in the sample frame after the switch",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "drpSwitch",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF(c,Event(d(SF f g)-\u003ed(SF f g)))(d g)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF(a,Event(col(SF b c)-\u003ecol(SF b c)))(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:drpSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003erpSwitchB\u003c/a\u003e, but switched output is visible on the sample frame after\n the event occurs\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "drpSwitchB",
          "package": "Animas",
          "signature": "col (SF a b) -\u003e SF (a, Event (col (SF a b) -\u003e col (SF a b))) (col b)",
          "source": "src/FRP-Animas.html#drpSwitchB",
          "type": "function"
        },
        "index": {
          "description": "rpSwitchB but switched output is visible on the sample frame after the event occurs",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "drpSwitchB",
          "normalized": "a(SF b c)-\u003eSF(b,Event(a(SF b c)-\u003ea(SF b c)))(a c)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "col(SF a b)-\u003eSF(a,Event(col(SF a b)-\u003ecol(SF a b)))(col b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:drpSwitchB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an event whenever the input goes from \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "edge",
          "package": "Animas",
          "signature": "SF Bool (Event ())",
          "source": "src/FRP-Animas.html#edge",
          "type": "function"
        },
        "index": {
          "description": "Produce an event whenever the input goes from False to True",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "edge",
          "normalized": "SF Bool(Event())",
          "package": "Animas",
          "signature": "SF Bool(Event())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare the input at the current and previous instant \n and produce an event based on the comparison\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "edgeBy",
          "package": "Animas",
          "signature": "(a -\u003e a -\u003e Maybe b)-\u003e a-\u003e SF a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Compare the input at the current and previous instant and produce an event based on the comparison",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "edgeBy",
          "normalized": "(a-\u003ea-\u003eMaybe b)-\u003ea-\u003eSF a(Event b)",
          "package": "Animas",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eMaybe b)-\u003ea-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:edgeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the value carried by the Maybe whenever the input goes\n from \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "edgeJust",
          "package": "Animas",
          "signature": "SF (Maybe a) (Event a)",
          "source": "src/FRP-Animas.html#edgeJust",
          "type": "function"
        },
        "index": {
          "description": "Produce the value carried by the Maybe whenever the input goes from Nothing to Just",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "edgeJust",
          "package": "Animas",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:edgeJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an event carrying a specified value whenever\n the input goes from \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "edgeTag",
          "package": "Animas",
          "signature": "a-\u003e SF Bool (Event a)",
          "type": "function"
        },
        "index": {
          "description": "Produce an event carrying specified value whenever the input goes from False to True",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "edgeTag",
          "normalized": "a-\u003eSF Bool(Event a)",
          "package": "Animas",
          "partial": "Tag",
          "signature": "a-\u003eSF Bool(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:edgeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "embed",
          "package": "Animas",
          "signature": "SF a b -\u003e (a, [(DTime, Maybe a)]) -\u003e [b]",
          "source": "src/FRP-Animas.html#embed",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "embed",
          "normalized": "SF a b-\u003e(a,[(DTime,Maybe a)])-\u003e[b]",
          "package": "Animas",
          "signature": "SF a b-\u003e(a,[(DTime,Maybe a)])-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "embedSynch",
          "package": "Animas",
          "signature": "SF a b -\u003e (a, [(DTime, Maybe a)]) -\u003e SF Double b",
          "source": "src/FRP-Animas.html#embedSynch",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "embedSynch",
          "normalized": "SF a b-\u003e(a,[(DTime,Maybe a)])-\u003eSF Double b",
          "package": "Animas",
          "partial": "Synch",
          "signature": "SF a b-\u003e(a,[(DTime,Maybe a)])-\u003eSF Double b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:embedSynch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e operation yields the range of values returned by\n the generator.\n\u003c/p\u003e\u003cp\u003eIt is required that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003e(a,b) = \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e, then \u003ccode\u003ea \u003c b\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e always returns a pair of defined \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe second condition ensures that \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e cannot examine its\n argument, and hence the value it returns can be determined only by the\n instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.  That in turn allows an implementation to make\n a single call to \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e to establish a generator's range, without\n being concerned that the generator returned by (say) \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e might have\n a different range to the generator passed to \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition spans the full range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "genRange",
          "package": "Animas",
          "signature": "g -\u003e (Int, Int)",
          "type": "method"
        },
        "index": {
          "description": "The genRange operation yields the range of values returned by the generator It is required that If genRange then genRange always returns pair of defined Int The second condition ensures that genRange cannot examine its argument and hence the value it returns can be determined only by the instance of RandomGen That in turn allows an implementation to make single call to genRange to establish generator range without being concerned that the generator returned by say next might have different range to the generator passed to next The default definition spans the full range of Int",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "genRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "Animas",
          "partial": "Range",
          "signature": "g-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:genRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the initial value or the value of the last event.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "hold",
          "package": "Animas",
          "signature": "a-\u003e SF (Event a) a",
          "type": "function"
        },
        "index": {
          "description": "Output the initial value or the value of the last event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "hold",
          "normalized": "a-\u003eSF(Event a)a",
          "package": "Animas",
          "signature": "a-\u003eSF(Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "iEdge",
          "package": "Animas",
          "signature": "Bool -\u003e SF Bool (Event ())",
          "source": "src/FRP-Animas.html#iEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "iEdge",
          "normalized": "Bool-\u003eSF Bool(Event())",
          "package": "Animas",
          "partial": "Edge",
          "signature": "Bool-\u003eSF Bool(Event())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:iEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIniitialized one-instant delay\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "iPre",
          "package": "Animas",
          "signature": "a-\u003e SF a a",
          "type": "function"
        },
        "index": {
          "description": "Iniitialized one-instant delay",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "iPre",
          "normalized": "a-\u003eSF a a",
          "package": "Animas",
          "partial": "Pre",
          "signature": "a-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:iPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity signal function. Use in place of \n\u003c/p\u003e\u003cpre\u003e arr id\n\u003c/pre\u003e",
          "module": "FRP.Animas",
          "name": "identity",
          "package": "Animas",
          "signature": "SF a a",
          "source": "src/FRP-Animas.html#identity",
          "type": "function"
        },
        "index": {
          "description": "The identity signal function Use in place of arr id",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "identity",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "imIntegral",
          "package": "Animas",
          "signature": "a -\u003e SF a a",
          "source": "src/FRP-Animas.html#imIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "imIntegral",
          "normalized": "a-\u003eSF a a",
          "package": "Animas",
          "partial": "Integral",
          "signature": "a-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:imIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a signal function for stepping through\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "initStep",
          "package": "Animas",
          "signature": "a-\u003e SF a b-\u003e (b, Step a b)",
          "type": "function"
        },
        "index": {
          "description": "Initialize signal function for stepping through",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "initStep",
          "normalized": "a-\u003eSF a b-\u003e(b,Step a b)",
          "package": "Animas",
          "partial": "Step",
          "signature": "a-\u003eSF a b-\u003e(b,Step a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:initStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a value at the first instant, and forever after pass the input\n value through\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "initially",
          "package": "Animas",
          "signature": "a-\u003e SF a a",
          "type": "function"
        },
        "index": {
          "description": "Output value at the first instant and forever after pass the input value through",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "initially",
          "normalized": "a-\u003eSF a a",
          "package": "Animas",
          "signature": "a-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:initially"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrate a signal with respect to time.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "integral",
          "package": "Animas",
          "signature": "SF a a",
          "source": "src/FRP-Animas.html#integral",
          "type": "function"
        },
        "index": {
          "description": "Integrate signal with respect to time",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "integral",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinuation based switching (undocumented) \n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "kSwitch",
          "package": "Animas",
          "signature": "SF a b -\u003e SF (a, b) (Event c) -\u003e (SF a b -\u003e c -\u003e SF a b) -\u003e SF a b",
          "source": "src/FRP-Animas.html#kSwitch",
          "type": "function"
        },
        "index": {
          "description": "Continuation based switching undocumented",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "kSwitch",
          "normalized": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "package": "Animas",
          "partial": "Switch",
          "signature": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:kSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time of this part of the signal graph.\n Note that if a signal function is switched in,\n the time is relative to the moment of switching,\n not the moment that animation started.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "localTime",
          "package": "Animas",
          "signature": "SF a Time",
          "source": "src/FRP-Animas.html#localTime",
          "type": "function"
        },
        "index": {
          "description": "The time of this part of the signal graph Note that if signal function is switched in the time is relative to the moment of switching not the moment that animation started",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "localTime",
          "package": "Animas",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:localTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "loopIntegral",
          "package": "Animas",
          "signature": "SF (a, c) (b, c) -\u003e SF a b",
          "source": "src/FRP-Animas.html#loopIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "loopIntegral",
          "normalized": "SF(a,b)(c,b)-\u003eSF a c",
          "package": "Animas",
          "partial": "Integral",
          "signature": "SF(a,c)(b,c)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:loopIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "loopPre",
          "package": "Animas",
          "signature": "c -\u003e SF (a, c) (b, c) -\u003e SF a b",
          "source": "src/FRP-Animas.html#loopPre",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "loopPre",
          "normalized": "a-\u003eSF(b,a)(c,a)-\u003eSF b c",
          "package": "Animas",
          "partial": "Pre",
          "signature": "c-\u003eSF(a,c)(b,c)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:loopPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNever produce an event\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "never",
          "package": "Animas",
          "signature": "SF a (Event b)",
          "source": "src/FRP-Animas.html#never",
          "type": "function"
        },
        "index": {
          "description": "Never produce an event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "never",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e operation returns an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e that is uniformly distributed\n in the range returned by \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e (including both end points),\n and a new generator.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "next",
          "package": "Animas",
          "signature": "g -\u003e (Int, g)",
          "type": "method"
        },
        "index": {
          "description": "The next operation returns an Int that is uniformly distributed in the range returned by genRange including both end points and new generator",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "next",
          "normalized": "a-\u003e(Int,a)",
          "package": "Animas",
          "signature": "g-\u003e(Int,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "noise",
          "package": "Animas",
          "signature": "g -\u003e SF a b",
          "source": "src/FRP-Animas.html#noise",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "noise",
          "normalized": "a-\u003eSF b c",
          "package": "Animas",
          "signature": "g-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:noise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "noiseR",
          "package": "Animas",
          "signature": "(b, b) -\u003e g -\u003e SF a b",
          "source": "src/FRP-Animas.html#noiseR",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "noiseR",
          "normalized": "(a,a)-\u003eb-\u003eSF c a",
          "package": "Animas",
          "signature": "(b,b)-\u003eg-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:noiseR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppress a possible event at the instant of animation or switching in\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "notYet",
          "package": "Animas",
          "signature": "SF (Event a) (Event a)",
          "source": "src/FRP-Animas.html#notYet",
          "type": "function"
        },
        "index": {
          "description": "Suppress possible event at the instant of animation or switching in",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "notYet",
          "package": "Animas",
          "partial": "Yet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:notYet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an event immediately (at the moment of switching in or animation)\n and never again.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "now",
          "package": "Animas",
          "signature": "b-\u003e SF a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Produce an event immediately at the moment of switching in or animation and never again",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "now",
          "normalized": "a-\u003eSF b(Event a)",
          "package": "Animas",
          "signature": "b-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "occasionally",
          "package": "Animas",
          "signature": "g -\u003e Time -\u003e b -\u003e SF a (Event b)",
          "source": "src/FRP-Animas.html#occasionally",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "occasionally",
          "normalized": "a-\u003eTime-\u003eb-\u003eSF c(Event b)",
          "package": "Animas",
          "signature": "g-\u003eTime-\u003eb-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:occasionally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards compatability only.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "old_accum",
          "package": "Animas",
          "signature": "a -\u003e SF (Event (a -\u003e a)) (Event a)",
          "source": "src/FRP-Animas.html#old_accum",
          "type": "function"
        },
        "index": {
          "description": "For backwards compatability only",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "old_accum",
          "normalized": "a-\u003eSF(Event(a-\u003ea))(Event a)",
          "package": "Animas",
          "signature": "a-\u003eSF(Event(a-\u003ea))(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:old_accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards compatibility only.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "old_accumBy",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e SF (Event a) (Event b)",
          "source": "src/FRP-Animas.html#old_accumBy",
          "type": "function"
        },
        "index": {
          "description": "For backwards compatibility only",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "old_accumBy",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF(Event b)(Event a)",
          "package": "Animas",
          "partial": "By",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF(Event a)(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:old_accumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards compatibility only.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "old_accumFilter",
          "package": "Animas",
          "signature": "(c -\u003e a -\u003e (c, Maybe b)) -\u003e c -\u003e SF (Event a) (Event b)",
          "source": "src/FRP-Animas.html#old_accumFilter",
          "type": "function"
        },
        "index": {
          "description": "For backwards compatibility only",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "old_accumFilter",
          "normalized": "(a-\u003eb-\u003e(a,Maybe c))-\u003ea-\u003eSF(Event b)(Event c)",
          "package": "Animas",
          "partial": "Filter",
          "signature": "(c-\u003ea-\u003e(c,Maybe b))-\u003ec-\u003eSF(Event a)(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:old_accumFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards compatibility only.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "old_hold",
          "package": "Animas",
          "signature": "a -\u003e SF (Event a) a",
          "source": "src/FRP-Animas.html#old_hold",
          "type": "function"
        },
        "index": {
          "description": "For backwards compatibility only",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "old_hold",
          "normalized": "a-\u003eSF(Event a)a",
          "package": "Animas",
          "signature": "a-\u003eSF(Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:old_hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards compatibility only.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "old_iPre",
          "package": "Animas",
          "signature": "a -\u003e SF a a",
          "source": "src/FRP-Animas.html#old_iPre",
          "type": "function"
        },
        "index": {
          "description": "For backwards compatibility only",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "old_iPre",
          "normalized": "a-\u003eSF a a",
          "package": "Animas",
          "partial": "Pre",
          "signature": "a-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:old_iPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor backwards compatibility only.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "old_pre",
          "package": "Animas",
          "signature": "SF a a",
          "source": "src/FRP-Animas.html#old_pre",
          "type": "function"
        },
        "index": {
          "description": "For backwards compatibility only",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "old_pre",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:old_pre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppress all but the first event passing through\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "once",
          "package": "Animas",
          "signature": "SF (Event a) (Event a)",
          "source": "src/FRP-Animas.html#once",
          "type": "function"
        },
        "index": {
          "description": "Suppress all but the first event passing through",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "once",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ca\u003epar\u003c/a\u003e, but takes an extra SF which looks at the input and output\n of the parallel switching combinator and switches in a new SF at that point\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "pSwitch",
          "package": "Animas",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf))-\u003e col (SF b c)-\u003e SF (a, col c) (Event d)-\u003e (col (SF b c) -\u003e d -\u003e SF a (col c))-\u003e SF a (col c)",
          "type": "function"
        },
        "index": {
          "description": "Like par but takes an extra SF which looks at the input and output of the parallel switching combinator and switches in new SF at that point",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "pSwitch",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF(c,d g)(Event h)-\u003e(d(SF f g)-\u003eh-\u003eSF c(d g))-\u003eSF c(d g)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF(a,col c)(Event d)-\u003e(col(SF b c)-\u003ed-\u003eSF a(col c))-\u003eSF a(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:pSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a single input and broadcast it to a collection of functions,\n until an event is triggered, then switch into another SF producing a\n collection of outputs\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "pSwitchB",
          "package": "Animas",
          "signature": "col (SF a b)-\u003e SF (a, col b) (Event c)-\u003e (col (SF a b) -\u003e c -\u003e SF a (col b))-\u003e SF a (col b)",
          "type": "function"
        },
        "index": {
          "description": "Take single input and broadcast it to collection of functions until an event is triggered then switch into another SF producing collection of outputs",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "pSwitchB",
          "normalized": "a(SF b c)-\u003eSF(b,a c)(Event d)-\u003e(a(SF b c)-\u003ed-\u003eSF b(a c))-\u003eSF b(a c)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "col(SF a b)-\u003eSF(a,col b)(Event c)-\u003e(col(SF a b)-\u003ec-\u003eSF a(col b))-\u003eSF a(col b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:pSwitchB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute input to a static collection of signal functions\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "par",
          "package": "Animas",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf))-\u003e col (SF b c)-\u003e SF a (col c)",
          "type": "function"
        },
        "index": {
          "description": "Route input to static collection of signal functions",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "par",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF c(d g)",
          "package": "Animas",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF a(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast the same output to a collection of signal functions,\n producing a collection of outputs.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "parB",
          "package": "Animas",
          "signature": "col (SF a b) -\u003e SF a (col b)",
          "source": "src/FRP-Animas.html#parB",
          "type": "function"
        },
        "index": {
          "description": "Broadcast the same output to collection of signal functions producing collection of outputs",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "parB",
          "normalized": "a(SF b c)-\u003eSF b(a c)",
          "package": "Animas",
          "signature": "col(SF a b)-\u003eSF a(col b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:parB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUninitialized one-instant delay. \n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "pre",
          "package": "Animas",
          "signature": "SF a a",
          "source": "src/FRP-Animas.html#pre",
          "type": "function"
        },
        "index": {
          "description": "Uninitialized one-instant delay",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "pre",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:pre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitches in new signal functions carried by input events.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "rSwitch",
          "package": "Animas",
          "signature": "SF a b-\u003e SF (a, Event (SF a b)) b",
          "type": "function"
        },
        "index": {
          "description": "Switches in new signal functions carried by input events",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "rSwitch",
          "normalized": "SF a b-\u003eSF(a,Event(SF a b))b",
          "package": "Animas",
          "partial": "Switch",
          "signature": "SF a b-\u003eSF(a,Event(SF a b))b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:rSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, but using a default range determined by the type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For bounded types (instances of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e),\n   the range is normally the whole type.\n\u003c/li\u003e\u003cli\u003e For fractional types, the range is normally the semi-closed interval\n \u003ccode\u003e[0,1)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, the range is (arbitrarily) the range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Animas",
          "name": "random",
          "package": "Animas",
          "signature": "g -\u003e (a, g)",
          "type": "method"
        },
        "index": {
          "description": "The same as randomR but using default range determined by the type For bounded types instances of Bounded such as Char the range is normally the whole type For fractional types the range is normally the semi-closed interval For Integer the range is arbitrarily the range of Int",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "random",
          "normalized": "a-\u003e(b,a)",
          "package": "Animas",
          "signature": "g-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "randomIO",
          "package": "Animas",
          "signature": "IO a",
          "type": "method"
        },
        "index": {
          "description": "variant of random that uses the global random number generator see System.Random",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "randomIO",
          "package": "Animas",
          "partial": "IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:randomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a range \u003cem\u003e(lo,hi)\u003c/em\u003e and a random number generator\n \u003cem\u003eg\u003c/em\u003e, and returns a random value uniformly distributed in the closed\n interval \u003cem\u003e[lo,hi]\u003c/em\u003e, together with a new generator. It is unspecified\n what happens if \u003cem\u003elo\u003ehi\u003c/em\u003e. For continuous types there is no requirement\n that the values \u003cem\u003elo\u003c/em\u003e and \u003cem\u003ehi\u003c/em\u003e are ever produced, but they may be,\n depending on the implementation and the interval.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "randomR",
          "package": "Animas",
          "signature": "(a, a) -\u003e g -\u003e (a, g)",
          "type": "method"
        },
        "index": {
          "description": "Takes range lo hi and random number generator and returns random value uniformly distributed in the closed interval lo hi together with new generator It is unspecified what happens if lo hi For continuous types there is no requirement that the values lo and hi are ever produced but they may be depending on the implementation and the interval",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "randomR",
          "normalized": "(a,a)-\u003eb-\u003e(a,b)",
          "package": "Animas",
          "signature": "(a,a)-\u003eg-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "randomRIO",
          "package": "Animas",
          "signature": "(a, a) -\u003e IO a",
          "type": "method"
        },
        "index": {
          "description": "variant of randomR that uses the global random number generator see System.Random",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "randomRIO",
          "normalized": "(a,a)-\u003eIO a",
          "package": "Animas",
          "partial": "RIO",
          "signature": "(a,a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:randomRIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "randomRs",
          "package": "Animas",
          "signature": "(a, a) -\u003e g -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of randomR producing an infinite list of random values instead of returning new generator",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "randomRs",
          "normalized": "(a,a)-\u003eb-\u003e[a]",
          "package": "Animas",
          "partial": "Rs",
          "signature": "(a,a)-\u003eg-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "randoms",
          "package": "Animas",
          "signature": "g -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of random producing an infinite list of random values instead of returning new generator",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "randoms",
          "normalized": "a-\u003e[b]",
          "package": "Animas",
          "signature": "g-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "react",
          "package": "Animas",
          "signature": "ReactHandle a b -\u003e (DTime, Maybe a) -\u003e IO Bool",
          "source": "src/FRP-Animas.html#react",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "react",
          "normalized": "ReactHandle a b-\u003e(DTime,Maybe a)-\u003eIO Bool",
          "package": "Animas",
          "signature": "ReactHandle a b-\u003e(DTime,Maybe a)-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:react"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "reactInit",
          "package": "Animas",
          "signature": "IO a -\u003e (ReactHandle a b -\u003e Bool -\u003e b -\u003e IO Bool) -\u003e SF a b -\u003e IO (ReactHandle a b)",
          "source": "src/FRP-Animas.html#reactInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "reactInit",
          "normalized": "IO a-\u003e(ReactHandle a b-\u003eBool-\u003eb-\u003eIO Bool)-\u003eSF a b-\u003eIO(ReactHandle a b)",
          "package": "Animas",
          "partial": "Init",
          "signature": "IO a-\u003e(ReactHandle a b-\u003eBool-\u003eb-\u003eIO Bool)-\u003eSF a b-\u003eIO(ReactHandle a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:reactInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "reactimate",
          "package": "Animas",
          "signature": "IO a -\u003e (Bool -\u003e IO (DTime, Maybe a)) -\u003e (Bool -\u003e b -\u003e IO Bool) -\u003e SF a b -\u003e IO ()",
          "source": "src/FRP-Animas.html#reactimate",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "reactimate",
          "normalized": "IO a-\u003e(Bool-\u003eIO(DTime,Maybe a))-\u003e(Bool-\u003eb-\u003eIO Bool)-\u003eSF a b-\u003eIO()",
          "package": "Animas",
          "signature": "IO a-\u003e(Bool-\u003eIO(DTime,Maybe a))-\u003e(Bool-\u003eb-\u003eIO Bool)-\u003eSF a b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:reactimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce event every so often (but not immediately)\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "repeatedly",
          "package": "Animas",
          "signature": "Time-\u003e b-\u003e SF a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Produce event every so often but not immediately",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "repeatedly",
          "normalized": "Time-\u003ea-\u003eSF b(Event a)",
          "package": "Animas",
          "signature": "Time-\u003eb-\u003eSF a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:repeatedly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamic collections of signal functions with a routing function\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "rpSwitch",
          "package": "Animas",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf))-\u003e col (SF b c)-\u003e SF (a, Event (col (SF b c) -\u003e col (SF b c))) (col c)",
          "type": "function"
        },
        "index": {
          "description": "Dynamic collections of signal functions with routing function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "rpSwitch",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF(c,Event(d(SF f g)-\u003ed(SF f g)))(d g)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF(a,Event(col(SF b c)-\u003ecol(SF b c)))(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:rpSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroadcast intput to a collection of signal functions,\n and transform that collection with mutator functions carried in events\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "rpSwitchB",
          "package": "Animas",
          "signature": "col (SF a b)-\u003e SF (a, Event (col (SF a b) -\u003e col (SF a b))) (col b)",
          "type": "function"
        },
        "index": {
          "description": "Broadcast intput to collection of signal functions and transform that collection with mutator functions carried in events",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "rpSwitchB",
          "normalized": "a(SF b c)-\u003eSF(b,Event(a(SF b c)-\u003ea(SF b c)))(a c)",
          "package": "Animas",
          "partial": "Switch",
          "signature": "col(SF a b)-\u003eSF(a,Event(col(SF a b)-\u003ecol(SF a b)))(col b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:rpSwitchB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e operation allows one to obtain two distinct random number\n generators. This is very useful in functional programs (for example, when\n passing a random number generator down to recursive calls), but very\n little work has been done on statistically robust implementations of\n \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e ([\u003ca\u003eSystem.Random\u003c/a\u003e, \u003ca\u003eSystem.Random\u003c/a\u003e]\n are the only examples we know of).\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "split",
          "package": "Animas",
          "signature": "g -\u003e (g, g)",
          "type": "method"
        },
        "index": {
          "description": "The split operation allows one to obtain two distinct random number generators This is very useful in functional programs for example when passing random number generator down to recursive calls but very little work has been done on statistically robust implementations of split System.Random System.Random are the only examples we know of",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "split",
          "normalized": "a-\u003e(a,a)",
          "package": "Animas",
          "signature": "g-\u003e(g,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal function:\n apply a function to an accumulator at each instant. Note that \n the output value is the value of the accumulator at each instant.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "sscan",
          "package": "Animas",
          "signature": "(b -\u003e a -\u003e b)-\u003e b-\u003e SF a b",
          "type": "function"
        },
        "index": {
          "description": "Signal function apply function to an accumulator at each instant Note that the output value is the value of the accumulator at each instant",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "sscan",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF b a",
          "package": "Animas",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:sscan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Animas",
          "name": "sscanPrim",
          "package": "Animas",
          "signature": "(c -\u003e a -\u003e Maybe (c, b)) -\u003e c -\u003e b -\u003e SF a b",
          "source": "src/FRP-Animas.html#sscanPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "sscanPrim",
          "normalized": "(a-\u003eb-\u003eMaybe(a,c))-\u003ea-\u003ec-\u003eSF b c",
          "package": "Animas",
          "partial": "Prim",
          "signature": "(c-\u003ea-\u003eMaybe(c,b))-\u003ec-\u003eb-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:sscanPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to the next step of a signal function\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "step",
          "package": "Animas",
          "signature": "DTime-\u003e a-\u003e Step a b-\u003e (b, Step a b)",
          "type": "function"
        },
        "index": {
          "description": "Go to the next step of signal function",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "step",
          "normalized": "DTime-\u003ea-\u003eStep a b-\u003e(b,Step a b)",
          "package": "Animas",
          "signature": "DTime-\u003ea-\u003eStep a b-\u003e(b,Step a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch in a new signal function produced from an event, at the instant\n of that event.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "switch",
          "package": "Animas",
          "signature": "SF a (b, Event c)-\u003e (c -\u003e SF a b)-\u003e SF a b",
          "type": "function"
        },
        "index": {
          "description": "Switch in new signal function produced from an event at the instant of that event",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "switch",
          "normalized": "SF a(b,Event c)-\u003e(c-\u003eSF a b)-\u003eSF a b",
          "package": "Animas",
          "signature": "SF a(b,Event c)-\u003e(c-\u003eSF a b)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly permit a certain number of events\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "takeEvents",
          "package": "Animas",
          "signature": "Int-\u003e SF (Event a) (Event a)",
          "type": "function"
        },
        "index": {
          "description": "Only permit certain number of events",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "takeEvents",
          "normalized": "Int-\u003eSF(Event a)(Event a)",
          "package": "Animas",
          "partial": "Events",
          "signature": "Int-\u003eSF(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:takeEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentical to \u003ccode\u003e\u003ca\u003elocalTime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "time",
          "package": "Animas",
          "signature": "SF a Time",
          "source": "src/FRP-Animas.html#time",
          "type": "function"
        },
        "index": {
          "description": "identical to localTime",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "time",
          "package": "Animas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHold the value of a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e input.\n\u003c/p\u003e",
          "module": "FRP.Animas",
          "name": "trackAndHold",
          "package": "Animas",
          "signature": "a-\u003e SF (Maybe a) a",
          "type": "function"
        },
        "index": {
          "description": "Hold the value of Maybe input",
          "hierarchy": "FRP Animas",
          "module": "FRP.Animas",
          "name": "trackAndHold",
          "normalized": "a-\u003eSF(Maybe a)a",
          "package": "Animas",
          "partial": "And Hold",
          "signature": "a-\u003eSF(Maybe a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Animas/docs/FRP-Animas.html#v:trackAndHold"
      }
    }
  ]
]