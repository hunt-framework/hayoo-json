[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for creating lists of constant time events related in time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "module",
        "fct-source": "src/Temporal-Media.html",
        "fct-type": "module",
        "title": "Media"
      },
      "index": {
        "description": "library for creating lists of constant time events related in time",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "Media",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Media",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eConstant time events. Value \u003ccode\u003ea\u003c/code\u003e starts at some time \n and lasts for some time.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "data",
        "fct-source": "src/Temporal-Media.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Constant time events Value starts at some time and lasts for some time",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "Event",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#t:Track",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrack\u003c/a\u003e\u003c/code\u003e is a set of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e s. There is total duration\n of the track, but Events can go beyond the scope of total duration\n (as a result of \u003ccode\u003e\u003ca\u003emapEvents\u003c/a\u003e\u003c/code\u003e function). Total duration is used in sequent \n composition of tracks. \n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "data",
        "fct-source": "src/Temporal-Media.html#Track",
        "fct-type": "data",
        "title": "Track"
      },
      "index": {
        "description": "Track is set of Event There is total duration of the track but Events can go beyond the scope of total duration as result of mapEvents function Total duration is used in sequent composition of tracks",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "Track",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Track",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-42--124-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003estretch\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#%2A%7C",
        "fct-type": "function",
        "title": "(*|)"
      },
      "index": {
        "description": "Infix stretch function",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "(*|) *|",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-43--124-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix \u003ccode\u003e\u003ca\u003edel\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#%2B%7C",
        "fct-type": "function",
        "title": "(+|)"
      },
      "index": {
        "description": "Infix del function",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "(+|) +|",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-43-:-43-",
      "description": {
        "fct-descr": "\u003cp\u003eSequent composition. Play first track then second.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Track t a -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#%2B%3A%2B",
        "fct-type": "function",
        "title": "(+:+)"
      },
      "index": {
        "description": "Sequent composition Play first track then second",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "(+:+) +:+",
        "normalized": "Track a b-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "Track t a-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-61-:-47-",
      "description": {
        "fct-descr": "\u003cp\u003eTurncating parallel composition. Total duration\n equals to minimum of the two tracks. All events\n that goes beyond the lmimt are dropped.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Track t a -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#%3D%3A%2F",
        "fct-type": "function",
        "title": "(=:/)"
      },
      "index": {
        "description": "Turncating parallel composition Total duration equals to minimum of the two tracks All events that goes beyond the lmimt are dropped",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "(=:/) =:/",
        "normalized": "Track a b-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "Track t a-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:-61-:-61-",
      "description": {
        "fct-descr": "\u003cp\u003eParallel composition. Play two tracks simultaneously.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Track t a -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#%3D%3A%3D",
        "fct-type": "function",
        "title": "(=:=)"
      },
      "index": {
        "description": "Parallel composition Play two tracks simultaneously",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "(=:=) =:=",
        "normalized": "Track a b-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "Track t a-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:Event",
      "description": {
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Event",
        "fct-source": "src/Temporal-Media.html#Event",
        "fct-type": "function",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "Event",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:alignByZero",
      "description": {
        "fct-descr": "\u003cp\u003eShifts all events so that minimal start time\n  equals to zero if first event has negative start time.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Event t a] -\u003e [Event t a]",
        "fct-source": "src/Temporal-Media.html#alignByZero",
        "fct-type": "function",
        "title": "alignByZero"
      },
      "index": {
        "description": "Shifts all events so that minimal start time equals to zero if first event has negative start time",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "alignByZero",
        "normalized": "[Event a b]-\u003e[Event a b]",
        "package": "temporal-media",
        "partial": "By Zero",
        "signature": "[Event t a]-\u003e[Event t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:chord",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use har\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003ehar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Track t a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#chord",
        "fct-type": "function",
        "title": "chord"
      },
      "index": {
        "description": "Deprecated Use har Deprecated in favour of har",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "chord",
        "normalized": "[Track a b]-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "[Track t a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:del",
      "description": {
        "fct-descr": "\u003cp\u003eDelays all events by given duration. \n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#del",
        "fct-type": "function",
        "title": "del"
      },
      "index": {
        "description": "Delays all events by given duration",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "del",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:delay",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use del\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003edel\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "Deprecated Use del Deprecated in favour of del",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "delay",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:dropT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003edropT\u003c/a\u003e\u003c/code\u003e t m)\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e t (dur a) a)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#dropT",
        "fct-type": "function",
        "title": "dropT"
      },
      "index": {
        "description": "dropT is equivalent to slice dur",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "dropT",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:dur",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates track's duration.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Track t a -\u003e t",
        "fct-source": "src/Temporal-Media.html#dur",
        "fct-type": "function",
        "title": "dur"
      },
      "index": {
        "description": "Calculates track duration",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "dur",
        "normalized": "Track a b-\u003ea",
        "package": "temporal-media",
        "partial": "",
        "signature": "Track t a-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "a",
        "fct-source": "src/Temporal-Media.html#Event",
        "fct-type": "function",
        "title": "eventContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "eventContent",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventDur",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t",
        "fct-source": "src/Temporal-Media.html#Event",
        "fct-type": "function",
        "title": "eventDur"
      },
      "index": {
        "description": "",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "eventDur",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Dur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventEnd",
      "description": {
        "fct-descr": "\u003cp\u003eEnd point of event (start time plus duration).\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Event t a -\u003e t",
        "fct-source": "src/Temporal-Media.html#eventEnd",
        "fct-type": "function",
        "title": "eventEnd"
      },
      "index": {
        "description": "End point of event start time plus duration",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "eventEnd",
        "normalized": "Event a b-\u003ea",
        "package": "temporal-media",
        "partial": "End",
        "signature": "Event t a-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:eventStart",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t",
        "fct-source": "src/Temporal-Media.html#Event",
        "fct-type": "function",
        "title": "eventStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "eventStart",
        "normalized": "",
        "package": "temporal-media",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:filterEvents",
      "description": {
        "fct-descr": "\u003cp\u003eFilter track. \n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(Event t a -\u003e Bool) -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#filterEvents",
        "fct-type": "function",
        "title": "filterEvents"
      },
      "index": {
        "description": "Filter track",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "filterEvents",
        "normalized": "(Event a b-\u003eBool)-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "Events",
        "signature": "(Event t a-\u003eBool)-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:har",
      "description": {
        "fct-descr": "\u003cp\u003eParallel composition on list of tracks (short for harmony).\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Track t a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#har",
        "fct-type": "function",
        "title": "har"
      },
      "index": {
        "description": "Parallel composition on list of tracks short for harmony",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "har",
        "normalized": "[Track a b]-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "[Track t a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harMap",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a sequence and then applies a har.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(a -\u003e Track t b) -\u003e [a] -\u003e Track t b",
        "fct-source": "src/Temporal-Media.html#harMap",
        "fct-type": "function",
        "title": "harMap"
      },
      "index": {
        "description": "Transforms sequence and then applies har",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "harMap",
        "normalized": "(a-\u003eTrack b c)-\u003e[a]-\u003eTrack b c",
        "package": "temporal-media",
        "partial": "Map",
        "signature": "(a-\u003eTrack t b)-\u003e[a]-\u003eTrack t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harT",
      "description": {
        "fct-descr": "\u003cp\u003eTurncating parallel composition on list of tracks.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Track t a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#harT",
        "fct-type": "function",
        "title": "harT"
      },
      "index": {
        "description": "Turncating parallel composition on list of tracks",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "harT",
        "normalized": "[Track a b]-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "[Track t a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harTMap",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a sequence and then applies a harT.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(a -\u003e Track t b) -\u003e [a] -\u003e Track t b",
        "fct-source": "src/Temporal-Media.html#harTMap",
        "fct-type": "function",
        "title": "harTMap"
      },
      "index": {
        "description": "Transforms sequence and then applies harT",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "harTMap",
        "normalized": "(a-\u003eTrack b c)-\u003e[a]-\u003eTrack b c",
        "package": "temporal-media",
        "partial": "TMap",
        "signature": "(a-\u003eTrack t b)-\u003e[a]-\u003eTrack t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:harTemp",
      "description": {
        "fct-descr": "\u003cp\u003eA chord of events. Each of them lasts for one second.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#harTemp",
        "fct-type": "function",
        "title": "harTemp"
      },
      "index": {
        "description": "chord of events Each of them lasts for one second",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "harTemp",
        "normalized": "[a]-\u003eTrack b a",
        "package": "temporal-media",
        "partial": "Temp",
        "signature": "[a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:line",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use mel\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003emel\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Track t a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "Deprecated Use mel Deprecated in favour of mel",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "line",
        "normalized": "[Track a b]-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "[Track t a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:linfun",
      "description": {
        "fct-descr": "\u003cp\u003eLinear interpolation. Can be useful with \u003ccode\u003e\u003ca\u003emapEvents\u003c/a\u003e\u003c/code\u003e for \n envelope changes.\n\u003c/p\u003e\u003cpre\u003e linfun [a, da, b, db, c, ... ]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ea, b, c ...\u003c/code\u003e - values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eda, db, ...\u003c/code\u003e - duration of segments\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[t] -\u003e t -\u003e t",
        "fct-source": "src/Temporal-Media.html#linfun",
        "fct-type": "function",
        "title": "linfun"
      },
      "index": {
        "description": "Linear interpolation Can be useful with mapEvents for envelope changes linfun da db values da db duration of segments",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "linfun",
        "normalized": "[a]-\u003ea-\u003ea",
        "package": "temporal-media",
        "partial": "",
        "signature": "[t]-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:linfunRel",
      "description": {
        "fct-descr": "\u003cp\u003eWith \u003ccode\u003e\u003ca\u003elinfunRel\u003c/a\u003e\u003c/code\u003e you can make linear interpolation\n function that has equal distance between points.\n First argument gives total length of the interpolation function\n and second argument gives list of values. So call\n\u003c/p\u003e\u003cpre\u003e linfunRel dur [a1, a2, a3, ..., aN]\n\u003c/pre\u003e\u003cp\u003eis equivalent to:\n\u003c/p\u003e\u003cpre\u003e linfun [a1, dur/N, a2, dur/N, a3, ..., dur/N, aN]\n\u003c/pre\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e [t] -\u003e t -\u003e t",
        "fct-source": "src/Temporal-Media.html#linfunRel",
        "fct-type": "function",
        "title": "linfunRel"
      },
      "index": {
        "description": "With linfunRel you can make linear interpolation function that has equal distance between points First argument gives total length of the interpolation function and second argument gives list of values So call linfunRel dur a1 a2 a3 aN is equivalent to linfun a1 dur a2 dur a3 dur aN",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "linfunRel",
        "normalized": "a-\u003e[a]-\u003ea-\u003ea",
        "package": "temporal-media",
        "partial": "Rel",
        "signature": "t-\u003e[t]-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eAnalog of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e function for tracks. Replicated\n tracks are played sequentially.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Int -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "Analog of replicate function for tracks Replicated tracks are played sequentially",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "loop",
        "normalized": "Int-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "Int-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:mapEvents",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral mapping. Mapps not only values but events. \n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(Event t a -\u003e Event t b) -\u003e Track t a -\u003e Track t b",
        "fct-source": "src/Temporal-Media.html#mapEvents",
        "fct-type": "function",
        "title": "mapEvents"
      },
      "index": {
        "description": "General mapping Mapps not only values but events",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "mapEvents",
        "normalized": "(Event a b-\u003eEvent a c)-\u003eTrack a b-\u003eTrack a c",
        "package": "temporal-media",
        "partial": "Events",
        "signature": "(Event t a-\u003eEvent t b)-\u003eTrack t a-\u003eTrack t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:mel",
      "description": {
        "fct-descr": "\u003cp\u003eSequent composition on list of tracks (short for melody).\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Track t a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#mel",
        "fct-type": "function",
        "title": "mel"
      },
      "index": {
        "description": "Sequent composition on list of tracks short for melody",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "mel",
        "normalized": "[Track a b]-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "[Track t a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:melMap",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a sequence and then applies a mel.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(a -\u003e Track t b) -\u003e [a] -\u003e Track t b",
        "fct-source": "src/Temporal-Media.html#melMap",
        "fct-type": "function",
        "title": "melMap"
      },
      "index": {
        "description": "Transforms sequence and then applies mel",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "melMap",
        "normalized": "(a-\u003eTrack b c)-\u003e[a]-\u003eTrack b c",
        "package": "temporal-media",
        "partial": "Map",
        "signature": "(a-\u003eTrack t b)-\u003e[a]-\u003eTrack t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:melTemp",
      "description": {
        "fct-descr": "\u003cp\u003eA melody of events. Each of them lasts for one second.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[a] -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#melTemp",
        "fct-type": "function",
        "title": "melTemp"
      },
      "index": {
        "description": "melody of events Each of them lasts for one second",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "melTemp",
        "normalized": "[a]-\u003eTrack b a",
        "package": "temporal-media",
        "partial": "Temp",
        "signature": "[a]-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:nil",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for method \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "a",
        "fct-source": "src/Temporal-Media.html#nil",
        "fct-type": "function",
        "title": "nil"
      },
      "index": {
        "description": "Synonym for method mempty",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "nil",
        "normalized": "",
        "package": "temporal-media",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:reflect",
      "description": {
        "fct-descr": "\u003cp\u003eReversing the tracks\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#reflect",
        "fct-type": "function",
        "title": "reflect"
      },
      "index": {
        "description": "Reversing the tracks",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "reflect",
        "normalized": "Track a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "Track t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eGet all events on recordered on the track. \n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "Track t a -\u003e [Event t a]",
        "fct-source": "src/Temporal-Media.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Get all events on recordered on the track",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "render",
        "normalized": "Track a b-\u003e[Event a b]",
        "package": "temporal-media",
        "partial": "",
        "signature": "Track t a-\u003e[Event t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:rest",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty track that lasts for some time.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#rest",
        "fct-type": "function",
        "title": "rest"
      },
      "index": {
        "description": "Empty track that lasts for some time",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "rest",
        "normalized": "a-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e cuts piece of value within given time interval.\n for \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e t0 t1 m)\u003c/code\u003e, if \u003ccode\u003et1 \u003c t0\u003c/code\u003e result is reversed.\n If \u003ccode\u003et0\u003c/code\u003e is negative or \u003ccode\u003et1\u003c/code\u003e goes beyond \u003ccode\u003e\u003ccode\u003e\u003ca\u003edur\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e blocks of\n nothing inserted so that duration of result equals to \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e (t0 - t1)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "slice cuts piece of value within given time interval for slice t0 t1 if t1 t0 result is reversed If t0 is negative or t1 goes beyond dur blocks of nothing inserted so that duration of result equals to abs t0 t1",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "slice",
        "normalized": "a-\u003ea-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003et-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:sortEvents",
      "description": {
        "fct-descr": "\u003cp\u003eSorts all events by start time.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "[Event t a] -\u003e [Event t a]",
        "fct-source": "src/Temporal-Media.html#sortEvents",
        "fct-type": "function",
        "title": "sortEvents"
      },
      "index": {
        "description": "Sorts all events by start time",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "sortEvents",
        "normalized": "[Event a b]-\u003e[Event a b]",
        "package": "temporal-media",
        "partial": "Events",
        "signature": "[Event t a]-\u003e[Event t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:str",
      "description": {
        "fct-descr": "\u003cp\u003eStretches track in time domain.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "Stretches track in time domain",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "str",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:stretch",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use str\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in favour of \u003ccode\u003estr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#stretch",
        "fct-type": "function",
        "title": "stretch"
      },
      "index": {
        "description": "Deprecated Use str Deprecated in favour of str",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "stretch",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:sustain",
      "description": {
        "fct-descr": "\u003cp\u003eAfter this transformation events last longer\n by some constant amount of time.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#sustain",
        "fct-type": "function",
        "title": "sustain"
      },
      "index": {
        "description": "After this transformation events last longer by some constant amount of time",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "sustain",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:sustainT",
      "description": {
        "fct-descr": "\u003cp\u003eProlongated events can not exceed total track duration.\n All event are sustained but those that are close to \n end of the track are sliceped. It resembles sustain on piano,\n when track ends you release the pedal.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#sustainT",
        "fct-type": "function",
        "title": "sustainT"
      },
      "index": {
        "description": "Prolongated events can not exceed total track duration All event are sustained but those that are close to end of the track are sliceped It resembles sustain on piano when track ends you release the pedal",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "sustainT",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:takeT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeT\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e 0 t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e Track t a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#takeT",
        "fct-type": "function",
        "title": "takeT"
      },
      "index": {
        "description": "takeT is equivalent to slice",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "takeT",
        "normalized": "a-\u003eTrack a b-\u003eTrack a b",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003eTrack t a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:temp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etemp\u003c/a\u003e\u003c/code\u003e constructs just an event. \n Value of type a lasts for one time unit and starts at zero.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "a -\u003e Track t a",
        "fct-source": "src/Temporal-Media.html#temp",
        "fct-type": "function",
        "title": "temp"
      },
      "index": {
        "description": "temp constructs just an event Value of type lasts for one time unit and starts at zero",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "temp",
        "normalized": "a-\u003eTrack b a",
        "package": "temporal-media",
        "partial": "",
        "signature": "a-\u003eTrack t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:tmap",
      "description": {
        "fct-descr": "\u003cp\u003eMapps values and time stamps.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(Event t a -\u003e b) -\u003e Track t a -\u003e Track t b",
        "fct-source": "src/Temporal-Media.html#tmap",
        "fct-type": "function",
        "title": "tmap"
      },
      "index": {
        "description": "Mapps values and time stamps",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "tmap",
        "normalized": "(Event a b-\u003ec)-\u003eTrack a b-\u003eTrack a c",
        "package": "temporal-media",
        "partial": "",
        "signature": "(Event t a-\u003eb)-\u003eTrack t a-\u003eTrack t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:tmapRel",
      "description": {
        "fct-descr": "\u003cp\u003eRelative tmap. Time values are normalized by argument's duration. \n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "(Event t a -\u003e b) -\u003e Track t a -\u003e Track t b",
        "fct-source": "src/Temporal-Media.html#tmapRel",
        "fct-type": "function",
        "title": "tmapRel"
      },
      "index": {
        "description": "Relative tmap Time values are normalized by argument duration",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "tmapRel",
        "normalized": "(Event a b-\u003ec)-\u003eTrack a b-\u003eTrack a c",
        "package": "temporal-media",
        "partial": "Rel",
        "signature": "(Event t a-\u003eb)-\u003eTrack t a-\u003eTrack t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/temporal-media/docs/Temporal-Media.html#v:within",
      "description": {
        "fct-descr": "\u003cp\u003eTests if given \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e happens between two time stamps.\n\u003c/p\u003e",
        "fct-module": "Temporal.Media",
        "fct-package": "temporal-media",
        "fct-signature": "t -\u003e t -\u003e Event t a -\u003e Bool",
        "fct-source": "src/Temporal-Media.html#within",
        "fct-type": "function",
        "title": "within"
      },
      "index": {
        "description": "Tests if given Event happens between two time stamps",
        "hierarchy": "Temporal Media",
        "module": "Temporal.Media",
        "name": "within",
        "normalized": "a-\u003ea-\u003eEvent a b-\u003eBool",
        "package": "temporal-media",
        "partial": "",
        "signature": "t-\u003et-\u003eEvent t a-\u003eBool"
      }
    }
  }
]