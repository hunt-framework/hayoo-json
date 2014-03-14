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
        "word": "temporal-media"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for creating lists of constant time events related in time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Temporal.Media",
          "name": "Media",
          "package": "temporal-media",
          "source": "src/Temporal-Media.html",
          "type": "module"
        },
        "index": {
          "description": "library for creating lists of constant time events related in time",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "Media",
          "package": "temporal-media",
          "partial": "Media",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant time events. Value \u003ccode\u003ea\u003c/code\u003e starts at some time \n and lasts for some time.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "Event",
          "package": "temporal-media",
          "source": "src/Temporal-Media.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Constant time events Value starts at some time and lasts for some time",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "Event",
          "package": "temporal-media",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003e is a set of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e s. There is total duration\n of the track, but Events can go beyond the scope of total duration\n (as a result of \u003ccode\u003e\u003ca\u003emapEvents\u003c/a\u003e\u003c/code\u003e function). Total duration is used in sequent \n composition of tracks. \n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "Track",
          "package": "temporal-media",
          "source": "src/Temporal-Media.html#Track",
          "type": "data"
        },
        "index": {
          "description": "Track is set of Event There is total duration of the track but Events can go beyond the scope of total duration as result of mapEvents function Total duration is used in sequent composition of tracks",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "Track",
          "package": "temporal-media",
          "partial": "Track",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#t:Track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003estretch\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "(*|)",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Infix stretch function",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "(*|) *|",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003edel\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "(+|)",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#%2B%7C",
          "type": "function"
        },
        "index": {
          "description": "Infix del function",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "(+|) +|",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequent composition. Play first track then second.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "(+:+)",
          "package": "temporal-media",
          "signature": "Track t a -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#%2B%3A%2B",
          "type": "function"
        },
        "index": {
          "description": "Sequent composition Play first track then second",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "(+:+) +:+",
          "normalized": "Track a b-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "Track t a-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-43-:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurncating parallel composition. Total duration\n equals to minimum of the two tracks. All events\n that goes beyond the lmimt are dropped.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "(=:/)",
          "package": "temporal-media",
          "signature": "Track t a -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#%3D%3A%2F",
          "type": "function"
        },
        "index": {
          "description": "Turncating parallel composition Total duration equals to minimum of the two tracks All events that goes beyond the lmimt are dropped",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "(=:/) =:/",
          "normalized": "Track a b-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "Track t a-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-61-:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel composition. Play two tracks simultaneously.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "(=:=)",
          "package": "temporal-media",
          "signature": "Track t a -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#%3D%3A%3D",
          "type": "function"
        },
        "index": {
          "description": "Parallel composition Play two tracks simultaneously",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "(=:=) =:=",
          "normalized": "Track a b-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "Track t a-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporal.Media",
          "name": "Event",
          "package": "temporal-media",
          "signature": "Event",
          "source": "src/Temporal-Media.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "Event",
          "package": "temporal-media",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShifts all events so that minimal start time\n  equals to zero if first event has negative start time.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "alignByZero",
          "package": "temporal-media",
          "signature": "[Event t a] -\u003e [Event t a]",
          "source": "src/Temporal-Media.html#alignByZero",
          "type": "function"
        },
        "index": {
          "description": "Shifts all events so that minimal start time equals to zero if first event has negative start time",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "alignByZero",
          "normalized": "[Event a b]-\u003e[Event a b]",
          "package": "temporal-media",
          "partial": "By Zero",
          "signature": "[Event t a]-\u003e[Event t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:alignByZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use har\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003ehar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "chord",
          "package": "temporal-media",
          "signature": "[Track t a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#chord",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use har Deprecated in favour of har",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "chord",
          "normalized": "[Track a b]-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "[Track t a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelays all events by given duration. \n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "del",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#del",
          "type": "function"
        },
        "index": {
          "description": "Delays all events by given duration",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "del",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use del\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003edel\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "delay",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#delay",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use del Deprecated in favour of del",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "delay",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003edropT\u003c/a\u003e\u003c/code\u003e t m)\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e t (dur a) a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "dropT",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#dropT",
          "type": "function"
        },
        "index": {
          "description": "dropT is equivalent to slice dur",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "dropT",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:dropT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates track's duration.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "dur",
          "package": "temporal-media",
          "signature": "Track t a -\u003e t",
          "source": "src/Temporal-Media.html#dur",
          "type": "function"
        },
        "index": {
          "description": "Calculates track duration",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "dur",
          "normalized": "Track a b-\u003ea",
          "package": "temporal-media",
          "signature": "Track t a-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporal.Media",
          "name": "eventContent",
          "package": "temporal-media",
          "signature": "a",
          "source": "src/Temporal-Media.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "eventContent",
          "package": "temporal-media",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporal.Media",
          "name": "eventDur",
          "package": "temporal-media",
          "signature": "t",
          "source": "src/Temporal-Media.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "eventDur",
          "package": "temporal-media",
          "partial": "Dur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd point of event (start time plus duration).\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "eventEnd",
          "package": "temporal-media",
          "signature": "Event t a -\u003e t",
          "source": "src/Temporal-Media.html#eventEnd",
          "type": "function"
        },
        "index": {
          "description": "End point of event start time plus duration",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "eventEnd",
          "normalized": "Event a b-\u003ea",
          "package": "temporal-media",
          "partial": "End",
          "signature": "Event t a-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Temporal.Media",
          "name": "eventStart",
          "package": "temporal-media",
          "signature": "t",
          "source": "src/Temporal-Media.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "eventStart",
          "package": "temporal-media",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter track. \n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "filterEvents",
          "package": "temporal-media",
          "signature": "(Event t a -\u003e Bool) -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#filterEvents",
          "type": "function"
        },
        "index": {
          "description": "Filter track",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "filterEvents",
          "normalized": "(Event a b-\u003eBool)-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "partial": "Events",
          "signature": "(Event t a-\u003eBool)-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:filterEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel composition on list of tracks (short for harmony).\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "har",
          "package": "temporal-media",
          "signature": "[Track t a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#har",
          "type": "function"
        },
        "index": {
          "description": "Parallel composition on list of tracks short for harmony",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "har",
          "normalized": "[Track a b]-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "[Track t a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:har"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a sequence and then applies a har.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "harMap",
          "package": "temporal-media",
          "signature": "(a -\u003e Track t b) -\u003e [a] -\u003e Track t b",
          "source": "src/Temporal-Media.html#harMap",
          "type": "function"
        },
        "index": {
          "description": "Transforms sequence and then applies har",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "harMap",
          "normalized": "(a-\u003eTrack b c)-\u003e[a]-\u003eTrack b c",
          "package": "temporal-media",
          "partial": "Map",
          "signature": "(a-\u003eTrack t b)-\u003e[a]-\u003eTrack t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurncating parallel composition on list of tracks.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "harT",
          "package": "temporal-media",
          "signature": "[Track t a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#harT",
          "type": "function"
        },
        "index": {
          "description": "Turncating parallel composition on list of tracks",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "harT",
          "normalized": "[Track a b]-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "[Track t a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a sequence and then applies a harT.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "harTMap",
          "package": "temporal-media",
          "signature": "(a -\u003e Track t b) -\u003e [a] -\u003e Track t b",
          "source": "src/Temporal-Media.html#harTMap",
          "type": "function"
        },
        "index": {
          "description": "Transforms sequence and then applies harT",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "harTMap",
          "normalized": "(a-\u003eTrack b c)-\u003e[a]-\u003eTrack b c",
          "package": "temporal-media",
          "partial": "TMap",
          "signature": "(a-\u003eTrack t b)-\u003e[a]-\u003eTrack t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harTMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chord of events. Each of them lasts for one second.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "harTemp",
          "package": "temporal-media",
          "signature": "[a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#harTemp",
          "type": "function"
        },
        "index": {
          "description": "chord of events Each of them lasts for one second",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "harTemp",
          "normalized": "[a]-\u003eTrack b a",
          "package": "temporal-media",
          "partial": "Temp",
          "signature": "[a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use mel\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003emel\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "line",
          "package": "temporal-media",
          "signature": "[Track t a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#line",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use mel Deprecated in favour of mel",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "line",
          "normalized": "[Track a b]-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "[Track t a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear interpolation. Can be useful with \u003ccode\u003e\u003ca\u003emapEvents\u003c/a\u003e\u003c/code\u003e for \n envelope changes.\n\u003c/p\u003e\u003cpre\u003e linfun [a, da, b, db, c, ... ]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ea, b, c ...\u003c/code\u003e - values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eda, db, ...\u003c/code\u003e - duration of segments\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "linfun",
          "package": "temporal-media",
          "signature": "[t] -\u003e t -\u003e t",
          "source": "src/Temporal-Media.html#linfun",
          "type": "function"
        },
        "index": {
          "description": "Linear interpolation Can be useful with mapEvents for envelope changes linfun da db values da db duration of segments",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "linfun",
          "normalized": "[a]-\u003ea-\u003ea",
          "package": "temporal-media",
          "signature": "[t]-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:linfun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith \u003ccode\u003e\u003ca\u003elinfunRel\u003c/a\u003e\u003c/code\u003e you can make linear interpolation\n function that has equal distance between points.\n First argument gives total length of the interpolation function\n and second argument gives list of values. So call\n\u003c/p\u003e\u003cpre\u003e linfunRel dur [a1, a2, a3, ..., aN]\n\u003c/pre\u003e\u003cp\u003eis equivalent to:\n\u003c/p\u003e\u003cpre\u003e linfun [a1, dur/N, a2, dur/N, a3, ..., dur/N, aN]\n\u003c/pre\u003e",
          "module": "Temporal.Media",
          "name": "linfunRel",
          "package": "temporal-media",
          "signature": "t -\u003e [t] -\u003e t -\u003e t",
          "source": "src/Temporal-Media.html#linfunRel",
          "type": "function"
        },
        "index": {
          "description": "With linfunRel you can make linear interpolation function that has equal distance between points First argument gives total length of the interpolation function and second argument gives list of values So call linfunRel dur a1 a2 a3 aN is equivalent to linfun a1 dur a2 dur a3 dur aN",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "linfunRel",
          "normalized": "a-\u003e[a]-\u003ea-\u003ea",
          "package": "temporal-media",
          "partial": "Rel",
          "signature": "t-\u003e[t]-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:linfunRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalog of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e function for tracks. Replicated\n tracks are played sequentially.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "loop",
          "package": "temporal-media",
          "signature": "Int -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#loop",
          "type": "function"
        },
        "index": {
          "description": "Analog of replicate function for tracks Replicated tracks are played sequentially",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "loop",
          "normalized": "Int-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "Int-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral mapping. Mapps not only values but events. \n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "mapEvents",
          "package": "temporal-media",
          "signature": "(Event t a -\u003e Event t b) -\u003e Track t a -\u003e Track t b",
          "source": "src/Temporal-Media.html#mapEvents",
          "type": "function"
        },
        "index": {
          "description": "General mapping Mapps not only values but events",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "mapEvents",
          "normalized": "(Event a b-\u003eEvent a c)-\u003eTrack a b-\u003eTrack a c",
          "package": "temporal-media",
          "partial": "Events",
          "signature": "(Event t a-\u003eEvent t b)-\u003eTrack t a-\u003eTrack t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:mapEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequent composition on list of tracks (short for melody).\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "mel",
          "package": "temporal-media",
          "signature": "[Track t a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#mel",
          "type": "function"
        },
        "index": {
          "description": "Sequent composition on list of tracks short for melody",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "mel",
          "normalized": "[Track a b]-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "[Track t a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:mel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a sequence and then applies a mel.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "melMap",
          "package": "temporal-media",
          "signature": "(a -\u003e Track t b) -\u003e [a] -\u003e Track t b",
          "source": "src/Temporal-Media.html#melMap",
          "type": "function"
        },
        "index": {
          "description": "Transforms sequence and then applies mel",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "melMap",
          "normalized": "(a-\u003eTrack b c)-\u003e[a]-\u003eTrack b c",
          "package": "temporal-media",
          "partial": "Map",
          "signature": "(a-\u003eTrack t b)-\u003e[a]-\u003eTrack t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:melMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA melody of events. Each of them lasts for one second.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "melTemp",
          "package": "temporal-media",
          "signature": "[a] -\u003e Track t a",
          "source": "src/Temporal-Media.html#melTemp",
          "type": "function"
        },
        "index": {
          "description": "melody of events Each of them lasts for one second",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "melTemp",
          "normalized": "[a]-\u003eTrack b a",
          "package": "temporal-media",
          "partial": "Temp",
          "signature": "[a]-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:melTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for method \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "nil",
          "package": "temporal-media",
          "signature": "a",
          "source": "src/Temporal-Media.html#nil",
          "type": "function"
        },
        "index": {
          "description": "Synonym for method mempty",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "nil",
          "package": "temporal-media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReversing the tracks\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "reflect",
          "package": "temporal-media",
          "signature": "Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#reflect",
          "type": "function"
        },
        "index": {
          "description": "Reversing the tracks",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "reflect",
          "normalized": "Track a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "Track t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:reflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all events on recordered on the track. \n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "render",
          "package": "temporal-media",
          "signature": "Track t a -\u003e [Event t a]",
          "source": "src/Temporal-Media.html#render",
          "type": "function"
        },
        "index": {
          "description": "Get all events on recordered on the track",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "render",
          "normalized": "Track a b-\u003e[Event a b]",
          "package": "temporal-media",
          "signature": "Track t a-\u003e[Event t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty track that lasts for some time.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "rest",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a",
          "source": "src/Temporal-Media.html#rest",
          "type": "function"
        },
        "index": {
          "description": "Empty track that lasts for some time",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "rest",
          "normalized": "a-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e cuts piece of value within given time interval.\n for \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e t0 t1 m)\u003c/code\u003e, if \u003ccode\u003et1 \u003c t0\u003c/code\u003e result is reversed.\n If \u003ccode\u003et0\u003c/code\u003e is negative or \u003ccode\u003et1\u003c/code\u003e goes beyond \u003ccode\u003e\u003ccode\u003e\u003ca\u003edur\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e blocks of\n nothing inserted so that duration of result equals to \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (t0 - t1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "slice",
          "package": "temporal-media",
          "signature": "t -\u003e t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#slice",
          "type": "function"
        },
        "index": {
          "description": "slice cuts piece of value within given time interval for slice t0 t1 if t1 t0 result is reversed If t0 is negative or t1 goes beyond dur blocks of nothing inserted so that duration of result equals to abs t0 t1",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "slice",
          "normalized": "a-\u003ea-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003et-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts all events by start time.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "sortEvents",
          "package": "temporal-media",
          "signature": "[Event t a] -\u003e [Event t a]",
          "source": "src/Temporal-Media.html#sortEvents",
          "type": "function"
        },
        "index": {
          "description": "Sorts all events by start time",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "sortEvents",
          "normalized": "[Event a b]-\u003e[Event a b]",
          "package": "temporal-media",
          "partial": "Events",
          "signature": "[Event t a]-\u003e[Event t a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:sortEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStretches track in time domain.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "str",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#str",
          "type": "function"
        },
        "index": {
          "description": "Stretches track in time domain",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "str",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use str\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003estr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "stretch",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#stretch",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use str Deprecated in favour of str",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "stretch",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:stretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter this transformation events last longer\n by some constant amount of time.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "sustain",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#sustain",
          "type": "function"
        },
        "index": {
          "description": "After this transformation events last longer by some constant amount of time",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "sustain",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:sustain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProlongated events can not exceed total track duration.\n All event are sustained but those that are close to \n end of the track are sliceped. It resembles sustain on piano,\n when track ends you release the pedal.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "sustainT",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#sustainT",
          "type": "function"
        },
        "index": {
          "description": "Prolongated events can not exceed total track duration All event are sustained but those that are close to end of the track are sliceped It resembles sustain on piano when track ends you release the pedal",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "sustainT",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:sustainT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeT\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e 0 t)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "takeT",
          "package": "temporal-media",
          "signature": "t -\u003e Track t a -\u003e Track t a",
          "source": "src/Temporal-Media.html#takeT",
          "type": "function"
        },
        "index": {
          "description": "takeT is equivalent to slice",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "takeT",
          "normalized": "a-\u003eTrack a b-\u003eTrack a b",
          "package": "temporal-media",
          "signature": "t-\u003eTrack t a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:takeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etemp\u003c/a\u003e\u003c/code\u003e constructs just an event. \n Value of type a lasts for one time unit and starts at zero.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "temp",
          "package": "temporal-media",
          "signature": "a -\u003e Track t a",
          "source": "src/Temporal-Media.html#temp",
          "type": "function"
        },
        "index": {
          "description": "temp constructs just an event Value of type lasts for one time unit and starts at zero",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "temp",
          "normalized": "a-\u003eTrack b a",
          "package": "temporal-media",
          "signature": "a-\u003eTrack t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:temp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapps values and time stamps.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "tmap",
          "package": "temporal-media",
          "signature": "(Event t a -\u003e b) -\u003e Track t a -\u003e Track t b",
          "source": "src/Temporal-Media.html#tmap",
          "type": "function"
        },
        "index": {
          "description": "Mapps values and time stamps",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "tmap",
          "normalized": "(Event a b-\u003ec)-\u003eTrack a b-\u003eTrack a c",
          "package": "temporal-media",
          "signature": "(Event t a-\u003eb)-\u003eTrack t a-\u003eTrack t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:tmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative tmap. Time values are normalized by argument's duration. \n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "tmapRel",
          "package": "temporal-media",
          "signature": "(Event t a -\u003e b) -\u003e Track t a -\u003e Track t b",
          "source": "src/Temporal-Media.html#tmapRel",
          "type": "function"
        },
        "index": {
          "description": "Relative tmap Time values are normalized by argument duration",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "tmapRel",
          "normalized": "(Event a b-\u003ec)-\u003eTrack a b-\u003eTrack a c",
          "package": "temporal-media",
          "partial": "Rel",
          "signature": "(Event t a-\u003eb)-\u003eTrack t a-\u003eTrack t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:tmapRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if given \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e happens between two time stamps.\n\u003c/p\u003e",
          "module": "Temporal.Media",
          "name": "within",
          "package": "temporal-media",
          "signature": "t -\u003e t -\u003e Event t a -\u003e Bool",
          "source": "src/Temporal-Media.html#within",
          "type": "function"
        },
        "index": {
          "description": "Tests if given Event happens between two time stamps",
          "hierarchy": "Temporal Media",
          "module": "Temporal.Media",
          "name": "within",
          "normalized": "a-\u003ea-\u003eEvent a b-\u003eBool",
          "package": "temporal-media",
          "signature": "t-\u003et-\u003eEvent t a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:within"
      }
    }
  ]
]