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
        "word": "Dflow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReal Time Stream Processors are used to describe pipelines that process events in real time.  An event is described as a\n(Time, Value) pair. When an RTSP receives an event it can respond by emitting zero or more events at any time at or after the\nreceipt of the original event. Further incoming events may influence the stream of emitted events.\n\u003c/p\u003e\u003cp\u003ePiplelines of RTSPs can be built up using the '(.)' operator from the Category instance, or alternatively the '(\u003e\u003e\u003e)' operator \n(which is merely dot with its arguments swapped).  RTSPs can be run in parallel with their outputs merged using \u003ca\u003emappend\u003c/a\u003e \nfrom the Monoid instance. \n\u003c/p\u003e\u003cp\u003eWithin the RTSP implementation all notions of \"delay\" and \"time\" merely refer to the time component of events, and are used\nfor event ordering. Only the \u003ccode\u003e\u003ca\u003eexecRTSP\u003c/a\u003e\u003c/code\u003e function, which runs in the IO monad, executes any actual real-time delay.\n\u003c/p\u003e\u003cp\u003eThe main data types for the application programmer are:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A value that occurs at a certain time.  For instance an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e Char\u003c/code\u003e might represent a key press.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eRTSP\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The Real Time Stream Processor.  A value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRTSP\u003c/a\u003e\u003c/code\u003e x y\u003c/code\u003e takes in events of type \u003ccode\u003ex\u003c/code\u003e and emits events of type \u003ccode\u003ey\u003c/code\u003e.  \nRTSPs can be strung together into pipelines using \u003ccode\u003e(.)\u003c/code\u003e (or \u003ccode\u003e(\u003e\u003e\u003e)\u003c/code\u003e if you prefer your data to flow left-to-right). RTSPs are also \nmonoids, so you can fork your data through two parallel RTSPs and then merge the results.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003ca\u003eRTA\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A monad for building stateful RTSPs.  Convert an \u003ccode\u003e\u003ca\u003eRTA\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eRTSP\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eexecRTA\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaccumulateRTA\u003c/a\u003e\u003c/code\u003e depending what you \nwant to do with pending output events when a new input event arrives.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eYou can test an RTSP in \"fast time\" (that is, without waiting for real-time delays) by using \u003ccode\u003e\u003ca\u003esimulateRTSP\u003c/a\u003e\u003c/code\u003e. Then you can \nexecute the RTSP in real time using \u003ccode\u003e\u003ca\u003eexecRTSP\u003c/a\u003e\u003c/code\u003e and be confident that the real time behaviour will match the fast-time behaviour.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSimultaneous Events\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe handling of logically simultaneous events in discrete event simulation is a long-standing problem. The three basic approaches\nare:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Impose an arbitrary but deterministic order on \"simultaneous\" events.\n\u003c/li\u003e\u003cli\u003e Collect the simultaneous events and pass them to the application, on the basis that the application programmer can then\n   impose the appropriate semantics.\n\u003c/li\u003e\u003cli\u003e Simulate all possible orderings.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThis library takes the first approach. Option 2 would force each RTSP to wait for the next event to see if it was\nsimultaneous, which is possible in a simulator but not in a real time system. In a real time system option 3 is not feasible,\nand would still leave the problem of which ordering to present to the outside world as the \"real\" one.\n\u003c/p\u003e\u003cp\u003eWhen two simultaneous events arrive at an RTSP, the current implementation uses the following rules: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Simultaneous output events retain the order of the input events that triggered them. Hence simultaneous events never \"overtake\".\n\u003c/li\u003e\u003cli\u003e In the case of \u003ccode\u003e(id `mappend` stream (+ 1))\u003c/code\u003e the output alternates the left and right expressions, starting with the left.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHowever these properties interact in ways that are complex, hard to define formally and not guaranteed to be stable. Code\nthat depends on the ordering of simultaneous events should therefore be avoided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.RTSP",
          "name": "RTSP",
          "package": "Dflow",
          "source": "src/Control-RTSP.html",
          "type": "module"
        },
        "index": {
          "description": "Real Time Stream Processors are used to describe pipelines that process events in real time An event is described as Time Value pair When an RTSP receives an event it can respond by emitting zero or more events at any time at or after the receipt of the original event Further incoming events may influence the stream of emitted events Piplelines of RTSPs can be built up using the operator from the Category instance or alternatively the operator which is merely dot with its arguments swapped RTSPs can be run in parallel with their outputs merged using mappend from the Monoid instance Within the RTSP implementation all notions of delay and time merely refer to the time component of events and are used for event ordering Only the execRTSP function which runs in the IO monad executes any actual real-time delay The main data types for the application programmer are Event value that occurs at certain time For instance an Event Char might represent key press RTSP The Real Time Stream Processor value of type RTSP takes in events of type and emits events of type RTSPs can be strung together into pipelines using or if you prefer your data to flow left-to-right RTSPs are also monoids so you can fork your data through two parallel RTSPs and then merge the results RTA monad for building stateful RTSPs Convert an RTA into an RTSP using execRTA or accumulateRTA depending what you want to do with pending output events when new input event arrives You can test an RTSP in fast time that is without waiting for real-time delays by using simulateRTSP Then you can execute the RTSP in real time using execRTSP and be confident that the real time behaviour will match the fast-time behaviour Simultaneous Events The handling of logically simultaneous events in discrete event simulation is long-standing problem The three basic approaches are Impose an arbitrary but deterministic order on simultaneous events Collect the simultaneous events and pass them to the application on the basis that the application programmer can then impose the appropriate semantics Simulate all possible orderings This library takes the first approach Option would force each RTSP to wait for the next event to see if it was simultaneous which is possible in simulator but not in real time system In real time system option is not feasible and would still leave the problem of which ordering to present to the outside world as the real one When two simultaneous events arrive at an RTSP the current implementation uses the following rules Simultaneous output events retain the order of the input events that triggered them Hence simultaneous events never overtake In the case of id mappend stream the output alternates the left and right expressions starting with the left However these properties interact in ways that are complex hard to define formally and not guaranteed to be stable Code that depends on the ordering of simultaneous events should therefore be avoided",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "RTSP",
          "package": "Dflow",
          "partial": "RTSP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conditional stream: events matching the predicate will be passed to the stream.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "Cond",
          "package": "Dflow",
          "source": "src/Control-RTSP.html#Cond",
          "type": "type"
        },
        "index": {
          "description": "conditional stream events matching the predicate will be passed to the stream",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "Cond",
          "package": "Dflow",
          "partial": "Cond",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#t:Cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal time events.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "Event",
          "package": "Dflow",
          "source": "src/Control-RTSP.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Real time events",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "Event",
          "package": "Dflow",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA real-time event stream cannot be described without reference to\nunknown future inputs. Hence \u003ccode\u003eEventStream\u003c/code\u003e embodies two possible futures:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An \u003ccode\u003eEvent c\u003c/code\u003e will be emitted at some time in the future, with a new\n  \u003ccode\u003eEventStream\u003c/code\u003e representing the future after that event. \n\u003c/li\u003e\u003cli\u003e An incoming \u003ccode\u003eEvent b\u003c/code\u003e will arrive before the next \u003ccode\u003eEvent c\u003c/code\u003e is emitted,\n  creating a new \u003ccode\u003eEventStream\u003c/code\u003e representing the response to that event. The\n  old \u003ccode\u003eEvent c\u003c/code\u003e may or may not be part of the new \u003ccode\u003eEventStream\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are also two degenerate cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Wait: no event is scheduled to be emitted, and the \u003ccode\u003eEventStream\u003c/code\u003e \n  just waits for an incoming event.\n\u003c/li\u003e\u003cli\u003e Finish: no event will ever be emitted, regardless of incoming events.\n  This is explicitly distinguished so that complex RTSP expressions\n  can be GC'd if they can be proven to be finished.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eEvent streams are like the Mirror of Galadriel, for they show things that\nwere, things that are, and things that yet may be.  But which it is that he\nsees, even the wisest cannot always tell.\n\u003c/p\u003e\u003cp\u003eSeeing is both good and perilous.  An event stream may be modified by\nnew events, but exceptions or inconsistent results will occur if the incoming\nevents are not in increasing order of time.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "EventStream",
          "package": "Dflow",
          "source": "src/Control-RTSP.html#EventStream",
          "type": "data"
        },
        "index": {
          "description": "real-time event stream cannot be described without reference to unknown future inputs Hence EventStream embodies two possible futures An Event will be emitted at some time in the future with new EventStream representing the future after that event An incoming Event will arrive before the next Event is emitted creating new EventStream representing the response to that event The old Event may or may not be part of the new EventStream There are also two degenerate cases Wait no event is scheduled to be emitted and the EventStream just waits for an incoming event Finish no event will ever be emitted regardless of incoming events This is explicitly distinguished so that complex RTSP expressions can be GC if they can be proven to be finished Event streams are like the Mirror of Galadriel for they show things that were things that are and things that yet may be But which it is that he sees even the wisest cannot always tell Seeing is both good and perilous An event stream may be modified by new events but exceptions or inconsistent results will occur if the incoming events are not in increasing order of time",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "EventStream",
          "package": "Dflow",
          "partial": "Event Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#t:EventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal-time Actions.  This monad is used to build sequential processors that can be turned into stream processors.\n An RTA emits zero or more events in response to each input event, and has a state that persists from one event to the next.\n In particular, state changes made after a \u003ca\u003epause\u003c/a\u003e will be visible to the next event regardless of the relative times.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "RTA",
          "package": "Dflow",
          "source": "src/Control-RTSP.html#RTA",
          "type": "data"
        },
        "index": {
          "description": "Real-time Actions This monad is used to build sequential processors that can be turned into stream processors An RTA emits zero or more events in response to each input event and has state that persists from one event to the next In particular state changes made after pause will be visible to the next event regardless of the relative times",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "RTA",
          "package": "Dflow",
          "partial": "RTA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#t:RTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal Time Stream Processor (RTSP)\n\u003c/p\u003e\u003cp\u003eAn EventStream cannot exist independently of some event that caused it to start. Hence the only way to\n create an EventStream is through an RTSP.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003emempty\u003c/a\u003e is the event sink: it never emits an event.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003emappend\u003c/a\u003e runs its arguments in parallel and merges their outputs.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eid\u003c/a\u003e is the null operation: events are passed through unchanged.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003e(.)\u003c/a\u003e is sequential composition: events emitted by the second argument are passed to the first argument.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.RTSP",
          "name": "RTSP",
          "package": "Dflow",
          "source": "src/Control-RTSP.html#RTSP",
          "type": "newtype"
        },
        "index": {
          "description": "Real Time Stream Processor RTSP An EventStream cannot exist independently of some event that caused it to start Hence the only way to create an EventStream is through an RTSP mempty is the event sink it never emits an event mappend runs its arguments in parallel and merges their outputs id is the null operation events are passed through unchanged is sequential composition events emitted by the second argument are passed to the first argument",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "RTSP",
          "package": "Dflow",
          "partial": "RTSP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#t:RTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RTSP",
          "name": "Event",
          "package": "Dflow",
          "signature": "Event",
          "source": "src/Control-RTSP.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "Event",
          "package": "Dflow",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RTSP",
          "name": "RTSP",
          "package": "Dflow",
          "signature": "RTSP",
          "source": "src/Control-RTSP.html#RTSP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "RTSP",
          "package": "Dflow",
          "partial": "RTSP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:RTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a new input event is delivered to an RTSP it causes any future output events to be dropped in favour of the new\n events. \u003ccode\u003eaccumulate\u003c/code\u003e instead keeps the events from previous inputs interleaved with the new ones. If you use\n this unnecessarily then you will get duplicated events.\n\u003c/p\u003e\u003cp\u003eIf there are \u003ccode\u003en\u003c/code\u003e output events due to be emitted before an input event then this will require O(n) time for the input.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "accumulate",
          "package": "Dflow",
          "signature": "RTSP b c -\u003e RTSP b c",
          "source": "src/Control-RTSP.html#accumulate",
          "type": "function"
        },
        "index": {
          "description": "When new input event is delivered to an RTSP it causes any future output events to be dropped in favour of the new events accumulate instead keeps the events from previous inputs interleaved with the new ones If you use this unnecessarily then you will get duplicated events If there are output events due to be emitted before an input event then this will require time for the input",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "accumulate",
          "normalized": "RTSP a b-\u003eRTSP a b",
          "package": "Dflow",
          "signature": "RTSP b c-\u003eRTSP b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:accumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ca\u003eexecRTA\u003c/a\u003e, except that output events are accumulated.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "accumulateRTA",
          "package": "Dflow",
          "signature": "s -\u003e (b -\u003e RTA s c Bool) -\u003e RTSP b c",
          "source": "src/Control-RTSP.html#accumulateRTA",
          "type": "function"
        },
        "index": {
          "description": "Like execRTA except that output events are accumulated",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "accumulateRTA",
          "normalized": "a-\u003e(b-\u003eRTA a c Bool)-\u003eRTSP b c",
          "package": "Dflow",
          "partial": "RTA",
          "signature": "s-\u003e(b-\u003eRTA s c Bool)-\u003eRTSP b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:accumulateRTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend each event to all the streams that accept it.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "cond",
          "package": "Dflow",
          "signature": "[Cond a b] -\u003e RTSP a b",
          "source": "src/Control-RTSP.html#cond",
          "type": "function"
        },
        "index": {
          "description": "Send each event to all the streams that accept it",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "cond",
          "normalized": "[Cond a b]-\u003eRTSP a b",
          "package": "Dflow",
          "signature": "[Cond a b]-\u003eRTSP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend each event to the first stream that accepts it, if any.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "cond1",
          "package": "Dflow",
          "signature": "[Cond a b] -\u003e RTSP a b",
          "source": "src/Control-RTSP.html#cond1",
          "type": "function"
        },
        "index": {
          "description": "Send each event to the first stream that accepts it if any",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "cond1",
          "normalized": "[Cond a b]-\u003eRTSP a b",
          "package": "Dflow",
          "signature": "[Cond a b]-\u003eRTSP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:cond1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay input events by the specified time.\n\u003c/p\u003e\u003cp\u003eUnfortunately this requires O(n) time when there are \u003ccode\u003en\u003c/code\u003e events queued up due to the use of \u003ca\u003eaccumulate\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "delay",
          "package": "Dflow",
          "signature": "NominalDiffTime -\u003e RTSP b b",
          "source": "src/Control-RTSP.html#delay",
          "type": "function"
        },
        "index": {
          "description": "Delay input events by the specified time Unfortunately this requires time when there are events queued up due to the use of accumulate",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "delay",
          "normalized": "NominalDiffTime-\u003eRTSP a a",
          "package": "Dflow",
          "signature": "NominalDiffTime-\u003eRTSP b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay input events by the specified time, but given an event stream \u003ccode\u003e{ev1, ev2, ev3...}\u003c/code\u003e, if ev2 arrives before\n ev1 has been emitted then ev1 will be lost.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "delay0",
          "package": "Dflow",
          "signature": "NominalDiffTime -\u003e RTSP b b",
          "source": "src/Control-RTSP.html#delay0",
          "type": "function"
        },
        "index": {
          "description": "Delay input events by the specified time but given an event stream ev1 ev2 ev3 if ev2 arrives before ev1 has been emitted then ev1 will be lost",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "delay0",
          "normalized": "NominalDiffTime-\u003eRTSP a a",
          "package": "Dflow",
          "signature": "NominalDiffTime-\u003eRTSP b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:delay0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a value as an event.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "emit",
          "package": "Dflow",
          "signature": "c -\u003e RTA s c ()",
          "source": "src/Control-RTSP.html#emit",
          "type": "function"
        },
        "index": {
          "description": "Emit value as an event",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "emit",
          "normalized": "a-\u003eRTA b a()",
          "package": "Dflow",
          "signature": "c-\u003eRTA s c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the first argument is scheduled to emit an event before the second. This makes \u003ccode\u003eEventStream\u003c/code\u003e a poset \n (partially ordered set).  Infix priority 4.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "emitsBefore",
          "package": "Dflow",
          "signature": "EventStream b1 c1 -\u003e EventStream b2 c2 -\u003e Bool",
          "source": "src/Control-RTSP.html#emitsBefore",
          "type": "function"
        },
        "index": {
          "description": "True if the first argument is scheduled to emit an event before the second This makes EventStream poset partially ordered set Infix priority",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "emitsBefore",
          "normalized": "EventStream a b-\u003eEventStream a b-\u003eBool",
          "package": "Dflow",
          "partial": "Before",
          "signature": "EventStream b c-\u003eEventStream b c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:emitsBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the event stream is guaranteed not to emit any future events, regardless of input.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "esFinished",
          "package": "Dflow",
          "signature": "EventStream b c -\u003e Bool",
          "source": "src/Control-RTSP.html#esFinished",
          "type": "function"
        },
        "index": {
          "description": "True if the event stream is guaranteed not to emit any future events regardless of input",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "esFinished",
          "normalized": "EventStream a b-\u003eBool",
          "package": "Dflow",
          "partial": "Finished",
          "signature": "EventStream b c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:esFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the possible futures of the event stream.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "esFutures",
          "package": "Dflow",
          "signature": "EventStream b c -\u003e [(Event c, EventStream b c)]",
          "source": "src/Control-RTSP.html#esFutures",
          "type": "function"
        },
        "index": {
          "description": "All the possible futures of the event stream",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "esFutures",
          "normalized": "EventStream a b-\u003e[(Event b,EventStream a b)]",
          "package": "Dflow",
          "partial": "Futures",
          "signature": "EventStream b c-\u003e[(Event c,EventStream b c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:esFutures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge the outputs of two event streams.  Input events are delivered\n to both streams.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "esMerge",
          "package": "Dflow",
          "signature": "EventStream b c -\u003e EventStream b c -\u003e EventStream b c",
          "source": "src/Control-RTSP.html#esMerge",
          "type": "function"
        },
        "index": {
          "description": "Merge the outputs of two event streams Input events are delivered to both streams",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "esMerge",
          "normalized": "EventStream a b-\u003eEventStream a b-\u003eEventStream a b",
          "package": "Dflow",
          "partial": "Merge",
          "signature": "EventStream b c-\u003eEventStream b c-\u003eEventStream b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:esMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeek at the events that will be emitted by this EventStream if no incoming event interrupts them.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "esPeek",
          "package": "Dflow",
          "signature": "EventStream b c -\u003e [Event c]",
          "source": "src/Control-RTSP.html#esPeek",
          "type": "function"
        },
        "index": {
          "description": "Peek at the events that will be emitted by this EventStream if no incoming event interrupts them",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "esPeek",
          "normalized": "EventStream a b-\u003e[Event b]",
          "package": "Dflow",
          "partial": "Peek",
          "signature": "EventStream b c-\u003e[Event c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:esPeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a new input event to an existing event stream, this returns the modified event stream. When \u003ccode\u003eesProcess\u003c/code\u003e \n is called on the result the Event argument to the second call must not occur before the first (they can be\n simultaneous).  More formally, if\n\u003c/p\u003e\u003cpre\u003e  esOut = esProcess (esProcess esIn ev1) ev2\n\u003c/pre\u003e\u003cp\u003ethen \u003ccode\u003enot (ev2 \u003ccode\u003e\u003ca\u003eisBefore\u003c/a\u003e\u003c/code\u003e ev1)\u003c/code\u003e. This precondition is not checked. \n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "esProcess",
          "package": "Dflow",
          "signature": "Event b -\u003e EventStream b c -\u003e EventStream b c",
          "source": "src/Control-RTSP.html#esProcess",
          "type": "function"
        },
        "index": {
          "description": "Given new input event to an existing event stream this returns the modified event stream When esProcess is called on the result the Event argument to the second call must not occur before the first they can be simultaneous More formally if esOut esProcess esProcess esIn ev1 ev2 then not ev2 isBefore ev1 This precondition is not checked",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "esProcess",
          "normalized": "Event a-\u003eEventStream a b-\u003eEventStream a b",
          "package": "Dflow",
          "partial": "Process",
          "signature": "Event b-\u003eEventStream b c-\u003eEventStream b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:esProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RTSP",
          "name": "eventTime",
          "package": "Dflow",
          "signature": "UTCTime",
          "source": "src/Control-RTSP.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "eventTime",
          "package": "Dflow",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:eventTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RTSP",
          "name": "eventValue",
          "package": "Dflow",
          "signature": "a",
          "source": "src/Control-RTSP.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "eventValue",
          "package": "Dflow",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:eventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an RTA as part of a real time stream processor. \n\u003c/p\u003e\u003cp\u003eWhen a new event arrives any pending output events will be lost.  However any state changes are immediately visible to the \n next event, even if they occured \"after\" the lost events.  For instance, consider this:\n\u003c/p\u003e\u003cpre\u003e   execRTA 1 $ \\_ -\u003e do\n      n \u003c- get\n      pause 10\n      emit n\n      put (n+1)\n      return True\n\u003c/pre\u003e\u003cp\u003eIf this receives events at \u003ccode\u003et=[0,1,3,20]\u003c/code\u003e then it will emit \u003ccode\u003e[Event 13 3, Event 30 4]\u003c/code\u003e. The events that would have been emitted\n at \u003ccode\u003et=[10,11]\u003c/code\u003e have been lost, but the state change still occured immediately, regardless of the output schedule.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "execRTA",
          "package": "Dflow",
          "signature": "s-\u003e (b -\u003e RTA s c Bool)-\u003e RTSP b c",
          "type": "function"
        },
        "index": {
          "description": "Execute an RTA as part of real time stream processor When new event arrives any pending output events will be lost However any state changes are immediately visible to the next event even if they occured after the lost events For instance consider this execRTA do get pause emit put return True If this receives events at then it will emit Event Event The events that would have been emitted at have been lost but the state change still occured immediately regardless of the output schedule",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "execRTA",
          "normalized": "a-\u003e(b-\u003eRTA a c Bool)-\u003eRTSP b c",
          "package": "Dflow",
          "partial": "RTA",
          "signature": "s-\u003e(b-\u003eRTA s c Bool)-\u003eRTSP b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:execRTA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an RTSP in the IO monad. The function returns immediately with an action for pushing events into the RTSP.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "execRTSP",
          "package": "Dflow",
          "signature": "RTSP b (IO ())-\u003e IO (b -\u003e IO ())",
          "type": "function"
        },
        "index": {
          "description": "Execute an RTSP in the IO monad The function returns immediately with an action for pushing events into the RTSP",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "execRTSP",
          "normalized": "RTSP a(IO())-\u003eIO(a-\u003eIO())",
          "package": "Dflow",
          "partial": "RTSP",
          "signature": "RTSP b(IO())-\u003eIO(b-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:execRTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current state.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "get",
          "package": "Dflow",
          "signature": "RTA s c s",
          "source": "src/Control-RTSP.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the current state",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "get",
          "package": "Dflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend each event to the conditional stream if it accepts it, otherwise send it to the second argument.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eifThenElse (p, rThen) rElse\u003c/code\u003e is equivalent to\n\u003c/p\u003e\u003cpre\u003e  streamFilter (p, rThen) `mappend` streamFilter (not . p, rElse)\n\u003c/pre\u003e\u003cp\u003eHowever \u003ccode\u003eifThenElse\u003c/code\u003e only evaluates \u003ccode\u003ep\u003c/code\u003e once for each input event.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "ifThenElse",
          "package": "Dflow",
          "signature": "Cond a b -\u003e RTSP a b -\u003e RTSP a b",
          "source": "src/Control-RTSP.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "description": "Send each event to the conditional stream if it accepts it otherwise send it to the second argument ifThenElse rThen rElse is equivalent to streamFilter rThen mappend streamFilter not rElse However ifThenElse only evaluates once for each input event",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "ifThenElse",
          "normalized": "Cond a b-\u003eRTSP a b-\u003eRTSP a b",
          "package": "Dflow",
          "partial": "Then Else",
          "signature": "Cond a b-\u003eRTSP a b-\u003eRTSP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the first event occurs strictly before the second.  This makes \u003ccode\u003eEvent\u003c/code\u003e a poset (partially ordered set).\n Infix priority 4 (the same as other comparison operators).\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "isBefore",
          "package": "Dflow",
          "signature": "Event a -\u003e Event b -\u003e Bool",
          "source": "src/Control-RTSP.html#isBefore",
          "type": "function"
        },
        "index": {
          "description": "True if the first event occurs strictly before the second This makes Event poset partially ordered set Infix priority the same as other comparison operators",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "isBefore",
          "normalized": "Event a-\u003eEvent b-\u003eBool",
          "package": "Dflow",
          "partial": "Before",
          "signature": "Event a-\u003eEvent b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:isBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the current state.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "modify",
          "package": "Dflow",
          "signature": "(s -\u003e s) -\u003e RTA s c ()",
          "source": "src/Control-RTSP.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the current state",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eRTA a b()",
          "package": "Dflow",
          "signature": "(s-\u003es)-\u003eRTA s c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current time. This is the event time plus any pauses.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "now",
          "package": "Dflow",
          "signature": "RTA s c UTCTime",
          "source": "src/Control-RTSP.html#now",
          "type": "function"
        },
        "index": {
          "description": "Get the current time This is the event time plus any pauses",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "now",
          "package": "Dflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event stream that never generates anything.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "nullStream",
          "package": "Dflow",
          "signature": "EventStream b c",
          "source": "src/Control-RTSP.html#nullStream",
          "type": "function"
        },
        "index": {
          "description": "An event stream that never generates anything",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "nullStream",
          "package": "Dflow",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:nullStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause before the next step. This does not actually delay processing; it merely increments the time of any emitted events.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "pause",
          "package": "Dflow",
          "signature": "NominalDiffTime -\u003e RTA s c ()",
          "source": "src/Control-RTSP.html#pause",
          "type": "function"
        },
        "index": {
          "description": "Pause before the next step This does not actually delay processing it merely increments the time of any emitted events",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "pause",
          "normalized": "NominalDiffTime-\u003eRTA a b()",
          "package": "Dflow",
          "signature": "NominalDiffTime-\u003eRTA s c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the current state.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "put",
          "package": "Dflow",
          "signature": "s -\u003e RTA s c ()",
          "source": "src/Control-RTSP.html#put",
          "type": "function"
        },
        "index": {
          "description": "Put the current state",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "put",
          "normalized": "a-\u003eRTA a b()",
          "package": "Dflow",
          "signature": "s-\u003eRTA s c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat each input event after the specified delays until a new event arrives, at which point the sequence begins again\n with the new event value. The list of delays must not be negative and must be in ascending order. All the delays are\n relative to the first event.\n\u003c/p\u003e\u003cp\u003eBe careful when using list comprehensions to create the argument. A list like \n\u003c/p\u003e\u003cpre\u003e [1..5] :: NominalDiffTime\n\u003c/pre\u003e\u003cp\u003ewill count up in picoseconds rather than seconds, which is probably not what is wanted. Instead use\n\u003c/p\u003e\u003cpre\u003e map fromInteger [1..5] :: NominalDiffTime\n\u003c/pre\u003e",
          "module": "Control.RTSP",
          "name": "repeatEvent",
          "package": "Dflow",
          "signature": "[NominalDiffTime] -\u003e RTSP b b",
          "source": "src/Control-RTSP.html#repeatEvent",
          "type": "function"
        },
        "index": {
          "description": "Repeat each input event after the specified delays until new event arrives at which point the sequence begins again with the new event value The list of delays must not be negative and must be in ascending order All the delays are relative to the first event Be careful when using list comprehensions to create the argument list like NominalDiffTime will count up in picoseconds rather than seconds which is probably not what is wanted Instead use map fromInteger NominalDiffTime",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "repeatEvent",
          "normalized": "[NominalDiffTime]-\u003eRTSP a a",
          "package": "Dflow",
          "partial": "Event",
          "signature": "[NominalDiffTime]-\u003eRTSP b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:repeatEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.RTSP",
          "name": "runRTSP",
          "package": "Dflow",
          "signature": "Event b -\u003e EventStream b c",
          "source": "src/Control-RTSP.html#RTSP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "runRTSP",
          "normalized": "Event a-\u003eEventStream a b",
          "package": "Dflow",
          "partial": "RTSP",
          "signature": "Event b-\u003eEventStream b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:runRTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an RTSP against a list of events. Useful for testing.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "simulateRTSP",
          "package": "Dflow",
          "signature": "RTSP b c-\u003e [Event b]-\u003e [Event c]",
          "type": "function"
        },
        "index": {
          "description": "Execute an RTSP against list of events Useful for testing",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "simulateRTSP",
          "normalized": "RTSP a b-\u003e[Event a]-\u003e[Event b]",
          "package": "Dflow",
          "partial": "RTSP",
          "signature": "RTSP b c-\u003e[Event b]-\u003e[Event c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:simulateRTSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure function converted into a stream processor\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "stream",
          "package": "Dflow",
          "signature": "(b -\u003e c) -\u003e RTSP b c",
          "source": "src/Control-RTSP.html#stream",
          "type": "function"
        },
        "index": {
          "description": "pure function converted into stream processor",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "stream",
          "normalized": "(a-\u003eb)-\u003eRTSP a b",
          "package": "Dflow",
          "signature": "(b-\u003ec)-\u003eRTSP b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional stream execution: only certain events will be accepted.\n\u003c/p\u003e",
          "module": "Control.RTSP",
          "name": "streamFilter",
          "package": "Dflow",
          "signature": "Cond a b -\u003e RTSP a b",
          "source": "src/Control-RTSP.html#streamFilter",
          "type": "function"
        },
        "index": {
          "description": "Conditional stream execution only certain events will be accepted",
          "hierarchy": "Control RTSP",
          "module": "Control.RTSP",
          "name": "streamFilter",
          "normalized": "Cond a b-\u003eRTSP a b",
          "package": "Dflow",
          "partial": "Filter",
          "signature": "Cond a b-\u003eRTSP a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Dflow/docs/Control-RTSP.html#v:streamFilter"
      }
    }
  ]
]