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
        "word": "CSPM-FiringRules"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBrute-force computation of all possible transitions of a process.\n Enumerates all events in \u003ccode\u003e\u003ca\u003eSigma\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "EnumerateEvents",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-EnumerateEvents.html",
          "type": "module"
        },
        "index": {
          "description": "Brute-force computation of all possible transitions of process Enumerates all events in Sigma",
          "hierarchy": "CSPM FiringRules EnumerateEvents",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "EnumerateEvents",
          "package": "CSPM-FiringRules",
          "partial": "Enumerate Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEvents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all possible transitions (via an event from Sigma) for a process.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "computeTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e Search (Rule i)",
          "source": "src/CSPM-FiringRules-EnumerateEvents.html#computeTransitions",
          "type": "function"
        },
        "index": {
          "description": "Compute all possible transitions via an event from Sigma for process",
          "hierarchy": "CSPM FiringRules EnumerateEvents",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "computeTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003eSearch(Rule a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003eSearch(Rule i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEvents.html#v:computeTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "eventTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e Search (RuleEvent i)",
          "source": "src/CSPM-FiringRules-EnumerateEvents.html#eventTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules EnumerateEvents",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "eventTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003eSearch(RuleEvent a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003eSearch(RuleEvent i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEvents.html#v:eventTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "tauTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e Search (RuleTau i)",
          "source": "src/CSPM-FiringRules-EnumerateEvents.html#tauTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules EnumerateEvents",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "tauTransitions",
          "normalized": "Process a-\u003eSearch(RuleTau a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003eSearch(RuleTau i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEvents.html#v:tauTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "tickTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e Search (RuleTick i)",
          "source": "src/CSPM-FiringRules-EnumerateEvents.html#tickTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules EnumerateEvents",
          "module": "CSPM.FiringRules.EnumerateEvents",
          "name": "tickTransitions",
          "normalized": "Process a-\u003eSearch(RuleTick a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003eSearch(RuleTick i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEvents.html#v:tickTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexport of the functions from EnumerateEvents with a List interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "EnumerateEventsList",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-EnumerateEventsList.html",
          "type": "module"
        },
        "index": {
          "description": "Reexport of the functions from EnumerateEvents with List interface",
          "hierarchy": "CSPM FiringRules EnumerateEventsList",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "EnumerateEventsList",
          "package": "CSPM-FiringRules",
          "partial": "Enumerate Events List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEventsList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all possible transitions (via an event from Sigma) for a Process.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "computeTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e [Rule i]",
          "source": "src/CSPM-FiringRules-EnumerateEventsList.html#computeTransitions",
          "type": "function"
        },
        "index": {
          "description": "Compute all possible transitions via an event from Sigma for Process",
          "hierarchy": "CSPM FiringRules EnumerateEventsList",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "computeTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003e[Rule a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003e[Rule i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEventsList.html#v:computeTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "eventTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e [RuleEvent i]",
          "source": "src/CSPM-FiringRules-EnumerateEventsList.html#eventTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules EnumerateEventsList",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "eventTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003e[RuleEvent a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003e[RuleEvent i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEventsList.html#v:eventTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "tauTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e [RuleTau i]",
          "source": "src/CSPM-FiringRules-EnumerateEventsList.html#tauTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules EnumerateEventsList",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "tauTransitions",
          "normalized": "Process a-\u003e[RuleTau a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003e[RuleTau i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEventsList.html#v:tauTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "tickTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e [RuleTick i]",
          "source": "src/CSPM-FiringRules-EnumerateEventsList.html#tickTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules EnumerateEventsList",
          "module": "CSPM.FiringRules.EnumerateEventsList",
          "name": "tickTransitions",
          "normalized": "Process a-\u003e[RuleTick a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003e[RuleTick i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-EnumerateEventsList.html#v:tickTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexport of the functions from FieldConstraintsSearch with a List interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "FieldConstraints",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-FieldConstraints.html",
          "type": "module"
        },
        "index": {
          "description": "Reexport of the functions from FieldConstraintsSearch with List interface",
          "hierarchy": "CSPM FiringRules FieldConstraints",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "FieldConstraints",
          "package": "CSPM-FiringRules",
          "partial": "Field Constraints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all possible transitions of the process.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "computeTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e [Rule i]",
          "source": "src/CSPM-FiringRules-FieldConstraints.html#computeTransitions",
          "type": "function"
        },
        "index": {
          "description": "Compute all possible transitions of the process",
          "hierarchy": "CSPM FiringRules FieldConstraints",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "computeTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003e[Rule a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003e[Rule i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraints.html#v:computeTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all (event)- transitions of the process.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "eventTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e [RuleEvent i]",
          "source": "src/CSPM-FiringRules-FieldConstraints.html#eventTransitions",
          "type": "function"
        },
        "index": {
          "description": "Compute all event transitions of the process",
          "hierarchy": "CSPM FiringRules FieldConstraints",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "eventTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003e[RuleEvent a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003e[RuleEvent i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraints.html#v:eventTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all tau-transitions of the process\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "tauTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e [RuleTau i]",
          "source": "src/CSPM-FiringRules-FieldConstraints.html#tauTransitions",
          "type": "function"
        },
        "index": {
          "description": "Compute all tau-transitions of the process",
          "hierarchy": "CSPM FiringRules FieldConstraints",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "tauTransitions",
          "normalized": "Process a-\u003e[RuleTau a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003e[RuleTau i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraints.html#v:tauTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute all tick-transitions of the process\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "tickTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e [RuleTick i]",
          "source": "src/CSPM-FiringRules-FieldConstraints.html#tickTransitions",
          "type": "function"
        },
        "index": {
          "description": "Compute all tick-transitions of the process",
          "hierarchy": "CSPM FiringRules FieldConstraints",
          "module": "CSPM.FiringRules.FieldConstraints",
          "name": "tickTransitions",
          "normalized": "Process a-\u003e[RuleTick a]",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003e[RuleTick i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraints.html#v:tickTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eField-wise generation of transitions.\n Uses some kind of abstract interpretation/constraint propagation to avoid\n enumeration of \u003ccode\u003eSigma\u003c/code\u003e in some cases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "FieldConstraintsSearch",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-FieldConstraintsSearch.html",
          "type": "module"
        },
        "index": {
          "description": "Field-wise generation of transitions Uses some kind of abstract interpretation constraint propagation to avoid enumeration of Sigma in some cases",
          "hierarchy": "CSPM FiringRules FieldConstraintsSearch",
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "FieldConstraintsSearch",
          "package": "CSPM-FiringRules",
          "partial": "Field Constraints Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraintsSearch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "computeTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e Search (Rule i)",
          "source": "src/CSPM-FiringRules-FieldConstraintsSearch.html#computeTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules FieldConstraintsSearch",
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "computeTransitions",
          "normalized": "Sigma a-\u003eProcess a-\u003eSearch(Rule a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Sigma i-\u003eProcess i-\u003eSearch(Rule i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraintsSearch.html#v:computeTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "eventTransitions",
          "package": "CSPM-FiringRules",
          "signature": "EventSet i -\u003e Process i -\u003e Search (RuleEvent i)",
          "source": "src/CSPM-FiringRules-FieldConstraintsSearch.html#eventTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules FieldConstraintsSearch",
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "eventTransitions",
          "normalized": "EventSet a-\u003eProcess a-\u003eSearch(RuleEvent a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "EventSet i-\u003eProcess i-\u003eSearch(RuleEvent i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraintsSearch.html#v:eventTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "tauTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e Search (RuleTau i)",
          "source": "src/CSPM-FiringRules-FieldConstraintsSearch.html#tauTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules FieldConstraintsSearch",
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "tauTransitions",
          "normalized": "Process a-\u003eSearch(RuleTau a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003eSearch(RuleTau i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraintsSearch.html#v:tauTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "tickTransitions",
          "package": "CSPM-FiringRules",
          "signature": "Process i -\u003e Search (RuleTick i)",
          "source": "src/CSPM-FiringRules-FieldConstraintsSearch.html#tickTransitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules FieldConstraintsSearch",
          "module": "CSPM.FiringRules.FieldConstraintsSearch",
          "name": "tickTransitions",
          "normalized": "Process a-\u003eSearch(RuleTick a)",
          "package": "CSPM-FiringRules",
          "partial": "Transitions",
          "signature": "Process i-\u003eSearch(RuleTick i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-FieldConstraintsSearch.html#v:tickTransitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helper classes.\n (Might be deleted or moved somewhere else some time.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "HelperClasses",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-HelperClasses.html",
          "type": "module"
        },
        "index": {
          "description": "Some helper classes Might be deleted or moved somewhere else some time",
          "hierarchy": "CSPM FiringRules HelperClasses",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "HelperClasses",
          "package": "CSPM-FiringRules",
          "partial": "Helper Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-HelperClasses.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCSP1\u003c/a\u003e\u003c/code\u003e means that implementation i supports the base language.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "CSP1",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-HelperClasses.html#CSP1",
          "type": "class"
        },
        "index": {
          "description": "CSP1 means that implementation supports the base language",
          "hierarchy": "CSPM FiringRules HelperClasses",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "CSP1",
          "package": "CSPM-FiringRules",
          "partial": "CSP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-HelperClasses.html#t:CSP1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCSP2\u003c/a\u003e\u003c/code\u003e means that implementation i supports the base language and multi-field events.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "CSP2",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-HelperClasses.html#CSP2",
          "type": "class"
        },
        "index": {
          "description": "CSP2 means that implementation supports the base language and multi-field events",
          "hierarchy": "CSPM FiringRules HelperClasses",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "CSP2",
          "package": "CSPM-FiringRules",
          "partial": "CSP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-HelperClasses.html#t:CSP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation i supports \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "EqOrd",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-HelperClasses.html#EqOrd",
          "type": "class"
        },
        "index": {
          "description": "Implementation supports Eq and Ord",
          "hierarchy": "CSPM FiringRules HelperClasses",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "EqOrd",
          "package": "CSPM-FiringRules",
          "partial": "Eq Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-HelperClasses.html#t:EqOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation i supports \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "FShow",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-HelperClasses.html#FShow",
          "type": "class"
        },
        "index": {
          "description": "Implementation supports Show",
          "hierarchy": "CSPM FiringRules HelperClasses",
          "module": "CSPM.FiringRules.HelperClasses",
          "name": "FShow",
          "package": "CSPM-FiringRules",
          "partial": "FShow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-HelperClasses.html#t:FShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines data types for (CSP) proof trees.\n A proof tree shows that a particular transition is valid\n with respect to the firing rules semantics.\n\u003c/p\u003e\u003cp\u003e(For more info on the firing rule semantics \n see: The Theory and Practice of Concurrency A.W. Roscoe 1999.)\n\u003c/p\u003e\u003cp\u003eWe use three separate data types:\n \u003ccode\u003e\u003ca\u003eRuleTau\u003c/a\u003e\u003c/code\u003e stores a proof tree for a tau rule,\n \u003ccode\u003e\u003ca\u003eRuleTick\u003c/a\u003e\u003c/code\u003e stores a proof tree for a tick rule and\n \u003ccode\u003e\u003ca\u003eRuleEvent\u003c/a\u003e\u003c/code\u003e stores a proof tree for an event from Sigma.\n\u003c/p\u003e\u003cp\u003eThere is a one-to-one correspondence between\n each constructor of the data types \u003ccode\u003e\u003ca\u003eRuleTau\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRuleTick\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRuleEvent\u003c/a\u003e\u003c/code\u003e\n and one fireing rule.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.Rules",
          "name": "Rules",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Rules.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines data types for CSP proof trees proof tree shows that particular transition is valid with respect to the firing rules semantics For more info on the firing rule semantics see The Theory and Practice of Concurrency A.W Roscoe We use three separate data types RuleTau stores proof tree for tau rule RuleTick stores proof tree for tick rule and RuleEvent stores proof tree for an event from Sigma There is one-to-one correspondence between each constructor of the data types RuleTau RuleTick RuleEvent and one fireing rule",
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "Rules",
          "package": "CSPM-FiringRules",
          "partial": "Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "EventRepAPart",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Rules.html#EventRepAPart",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "EventRepAPart",
          "package": "CSPM-FiringRules",
          "partial": "Event Rep APart",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#t:EventRepAPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sum-type for tau, tick and regular proof trees.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Rules",
          "name": "Rule",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Rules.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "sum-type for tau tick and regular proof trees",
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "Rule",
          "package": "CSPM-FiringRules",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of regular proof trees.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Rules",
          "name": "RuleEvent",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "data"
        },
        "index": {
          "description": "Representation of regular proof trees",
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RuleEvent",
          "package": "CSPM-FiringRules",
          "partial": "Rule Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#t:RuleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of tau proof trees.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Rules",
          "name": "RuleTau",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "data"
        },
        "index": {
          "description": "Representation of tau proof trees",
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RuleTau",
          "package": "CSPM-FiringRules",
          "partial": "Rule Tau",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#t:RuleTau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of tick proof trees.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Rules",
          "name": "RuleTick",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "data"
        },
        "index": {
          "description": "Representation of tick proof trees",
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RuleTick",
          "package": "CSPM-FiringRules",
          "partial": "Rule Tick",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#t:RuleTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelBoth",
          "package": "CSPM-FiringRules",
          "signature": "AParallelBoth (EventSet i) (EventSet i) (RuleEvent i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelBoth",
          "package": "CSPM-FiringRules",
          "partial": "AParallel Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelL",
          "package": "CSPM-FiringRules",
          "signature": "AParallelL (EventSet i) (EventSet i) (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelL",
          "package": "CSPM-FiringRules",
          "partial": "AParallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelOmega",
          "package": "CSPM-FiringRules",
          "signature": "AParallelOmega (EventSet i) (EventSet i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelOmega",
          "package": "CSPM-FiringRules",
          "partial": "AParallel Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelOmega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelR",
          "package": "CSPM-FiringRules",
          "signature": "AParallelR (EventSet i) (EventSet i) (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelR",
          "package": "CSPM-FiringRules",
          "partial": "AParallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTauL",
          "package": "CSPM-FiringRules",
          "signature": "AParallelTauL (EventSet i) (EventSet i) (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTauL",
          "package": "CSPM-FiringRules",
          "partial": "AParallel Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTauR",
          "package": "CSPM-FiringRules",
          "signature": "AParallelTauR (EventSet i) (EventSet i) (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTauR",
          "package": "CSPM-FiringRules",
          "partial": "AParallel Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTickL",
          "package": "CSPM-FiringRules",
          "signature": "AParallelTickL (EventSet i) (EventSet i) (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTickL",
          "package": "CSPM-FiringRules",
          "partial": "AParallel Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelTickL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTickR",
          "package": "CSPM-FiringRules",
          "signature": "AParallelTickR (EventSet i) (EventSet i) (Process i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "AParallelTickR",
          "package": "CSPM-FiringRules",
          "partial": "AParallel Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:AParallelTickR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ChaosEvent",
          "package": "CSPM-FiringRules",
          "signature": "ChaosEvent (EventSet i) (Event i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ChaosEvent",
          "package": "CSPM-FiringRules",
          "partial": "Chaos Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ChaosEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ChaosStop",
          "package": "CSPM-FiringRules",
          "signature": "ChaosStop (EventSet i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ChaosStop",
          "package": "CSPM-FiringRules",
          "partial": "Chaos Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ChaosStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "EventRule",
          "package": "CSPM-FiringRules",
          "signature": "EventRule (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "EventRule",
          "package": "CSPM-FiringRules",
          "partial": "Event Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:EventRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExceptionOccurs",
          "package": "CSPM-FiringRules",
          "signature": "ExceptionOccurs (EventSet i) (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExceptionOccurs",
          "package": "CSPM-FiringRules",
          "partial": "Exception Occurs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExceptionOccurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExceptionTauL",
          "package": "CSPM-FiringRules",
          "signature": "ExceptionTauL (EventSet i) (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExceptionTauL",
          "package": "CSPM-FiringRules",
          "partial": "Exception Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExceptionTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExceptionTauR",
          "package": "CSPM-FiringRules",
          "signature": "ExceptionTauR (EventSet i) (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExceptionTauR",
          "package": "CSPM-FiringRules",
          "partial": "Exception Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExceptionTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceL",
          "package": "CSPM-FiringRules",
          "signature": "ExtChoiceL (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceL",
          "package": "CSPM-FiringRules",
          "partial": "Ext Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExtChoiceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceR",
          "package": "CSPM-FiringRules",
          "signature": "ExtChoiceR (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceR",
          "package": "CSPM-FiringRules",
          "partial": "Ext Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExtChoiceR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTauL",
          "package": "CSPM-FiringRules",
          "signature": "ExtChoiceTauL (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTauL",
          "package": "CSPM-FiringRules",
          "partial": "Ext Choice Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExtChoiceTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTauR",
          "package": "CSPM-FiringRules",
          "signature": "ExtChoiceTauR (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTauR",
          "package": "CSPM-FiringRules",
          "partial": "Ext Choice Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExtChoiceTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTickL",
          "package": "CSPM-FiringRules",
          "signature": "ExtChoiceTickL (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTickL",
          "package": "CSPM-FiringRules",
          "partial": "Ext Choice Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExtChoiceTickL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTickR",
          "package": "CSPM-FiringRules",
          "signature": "ExtChoiceTickR (Process i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ExtChoiceTickR",
          "package": "CSPM-FiringRules",
          "partial": "Ext Choice Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ExtChoiceTickR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "HPrefix",
          "package": "CSPM-FiringRules",
          "signature": "HPrefix (Event i) (Prefix i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "HPrefix",
          "package": "CSPM-FiringRules",
          "partial": "HPrefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:HPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "Hidden",
          "package": "CSPM-FiringRules",
          "signature": "Hidden (EventSet i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "Hidden",
          "package": "CSPM-FiringRules",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:Hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "HiddenTick",
          "package": "CSPM-FiringRules",
          "signature": "HiddenTick (EventSet i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "HiddenTick",
          "package": "CSPM-FiringRules",
          "partial": "Hidden Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:HiddenTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "HideTau",
          "package": "CSPM-FiringRules",
          "signature": "HideTau (EventSet i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "HideTau",
          "package": "CSPM-FiringRules",
          "partial": "Hide Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:HideTau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveL",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveL (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveL",
          "package": "CSPM-FiringRules",
          "partial": "Interleave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveOmega",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveOmega",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveOmega",
          "package": "CSPM-FiringRules",
          "partial": "Interleave Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveOmega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveR",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveR (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveR",
          "package": "CSPM-FiringRules",
          "partial": "Interleave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTauL",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveTauL (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTauL",
          "package": "CSPM-FiringRules",
          "partial": "Interleave Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTauR",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveTauR (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTauR",
          "package": "CSPM-FiringRules",
          "partial": "Interleave Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTickL",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveTickL (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTickL",
          "package": "CSPM-FiringRules",
          "partial": "Interleave Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveTickL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTickR",
          "package": "CSPM-FiringRules",
          "signature": "InterleaveTickR (Process i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterleaveTickR",
          "package": "CSPM-FiringRules",
          "partial": "Interleave Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterleaveTickR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InternalChoiceL",
          "package": "CSPM-FiringRules",
          "signature": "InternalChoiceL (Process i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InternalChoiceL",
          "package": "CSPM-FiringRules",
          "partial": "Internal Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InternalChoiceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InternalChoiceR",
          "package": "CSPM-FiringRules",
          "signature": "InternalChoiceR (Process i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InternalChoiceR",
          "package": "CSPM-FiringRules",
          "partial": "Internal Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InternalChoiceR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptOccurs",
          "package": "CSPM-FiringRules",
          "signature": "InterruptOccurs (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptOccurs",
          "package": "CSPM-FiringRules",
          "partial": "Interrupt Occurs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterruptOccurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptTauL",
          "package": "CSPM-FiringRules",
          "signature": "InterruptTauL (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptTauL",
          "package": "CSPM-FiringRules",
          "partial": "Interrupt Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterruptTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptTauR",
          "package": "CSPM-FiringRules",
          "signature": "InterruptTauR (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptTauR",
          "package": "CSPM-FiringRules",
          "partial": "Interrupt Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterruptTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptTick",
          "package": "CSPM-FiringRules",
          "signature": "InterruptTick (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "InterruptTick",
          "package": "CSPM-FiringRules",
          "partial": "Interrupt Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:InterruptTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkEventL",
          "package": "CSPM-FiringRules",
          "signature": "LinkEventL (RenamingRelation i) (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkEventL",
          "package": "CSPM-FiringRules",
          "partial": "Link Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkEventL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkEventR",
          "package": "CSPM-FiringRules",
          "signature": "LinkEventR (RenamingRelation i) (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkEventR",
          "package": "CSPM-FiringRules",
          "partial": "Link Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkEventR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkLinked",
          "package": "CSPM-FiringRules",
          "signature": "LinkLinked (RenamingRelation i) (RuleEvent i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkLinked",
          "package": "CSPM-FiringRules",
          "partial": "Link Linked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkLinked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkParallelTick",
          "package": "CSPM-FiringRules",
          "signature": "LinkParallelTick (RenamingRelation i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkParallelTick",
          "package": "CSPM-FiringRules",
          "partial": "Link Parallel Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkParallelTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTauL",
          "package": "CSPM-FiringRules",
          "signature": "LinkTauL (RenamingRelation i) (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTauL",
          "package": "CSPM-FiringRules",
          "partial": "Link Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTauR",
          "package": "CSPM-FiringRules",
          "signature": "LinkTauR (RenamingRelation i) (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTauR",
          "package": "CSPM-FiringRules",
          "partial": "Link Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTickL",
          "package": "CSPM-FiringRules",
          "signature": "LinkTickL (RenamingRelation i) (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTickL",
          "package": "CSPM-FiringRules",
          "partial": "Link Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkTickL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTickR",
          "package": "CSPM-FiringRules",
          "signature": "LinkTickR (RenamingRelation i) (Process i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "LinkTickR",
          "package": "CSPM-FiringRules",
          "partial": "Link Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:LinkTickR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "NoException",
          "package": "CSPM-FiringRules",
          "signature": "NoException (EventSet i) (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "NoException",
          "package": "CSPM-FiringRules",
          "partial": "No Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:NoException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "NoInterrupt",
          "package": "CSPM-FiringRules",
          "signature": "NoInterrupt (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "NoInterrupt",
          "package": "CSPM-FiringRules",
          "partial": "No Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:NoInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "NotHidden",
          "package": "CSPM-FiringRules",
          "signature": "NotHidden (EventSet i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "NotHidden",
          "package": "CSPM-FiringRules",
          "partial": "Not Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:NotHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "NotShareL",
          "package": "CSPM-FiringRules",
          "signature": "NotShareL (EventSet i) (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "NotShareL",
          "package": "CSPM-FiringRules",
          "partial": "Not Share",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:NotShareL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "NotShareR",
          "package": "CSPM-FiringRules",
          "signature": "NotShareR (EventSet i) (Process i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "NotShareR",
          "package": "CSPM-FiringRules",
          "partial": "Not Share",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:NotShareR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "Rename",
          "package": "CSPM-FiringRules",
          "signature": "Rename (RenamingRelation i) (Event i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "Rename",
          "package": "CSPM-FiringRules",
          "partial": "Rename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:Rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "RenameNotInDomain",
          "package": "CSPM-FiringRules",
          "signature": "RenameNotInDomain (RenamingRelation i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RenameNotInDomain",
          "package": "CSPM-FiringRules",
          "partial": "Rename Not In Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:RenameNotInDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "RenamingTau",
          "package": "CSPM-FiringRules",
          "signature": "RenamingTau (RenamingRelation i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RenamingTau",
          "package": "CSPM-FiringRules",
          "partial": "Renaming Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:RenamingTau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "RenamingTick",
          "package": "CSPM-FiringRules",
          "signature": "RenamingTick (RenamingRelation i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RenamingTick",
          "package": "CSPM-FiringRules",
          "partial": "Renaming Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:RenamingTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "RepAParallelEvent",
          "package": "CSPM-FiringRules",
          "signature": "RepAParallelEvent [EventRepAPart i]",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RepAParallelEvent",
          "normalized": "RepAParallelEvent[EventRepAPart a]",
          "package": "CSPM-FiringRules",
          "partial": "Rep AParallel Event",
          "signature": "RepAParallelEvent[EventRepAPart i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:RepAParallelEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "RepAParallelOmega",
          "package": "CSPM-FiringRules",
          "signature": "RepAParallelOmega [EventSet i]",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "RepAParallelOmega",
          "normalized": "RepAParallelOmega[EventSet a]",
          "package": "CSPM-FiringRules",
          "partial": "Rep AParallel Omega",
          "signature": "RepAParallelOmega[EventSet i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:RepAParallelOmega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "SeqNormal",
          "package": "CSPM-FiringRules",
          "signature": "SeqNormal (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "SeqNormal",
          "package": "CSPM-FiringRules",
          "partial": "Seq Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:SeqNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "SeqTau",
          "package": "CSPM-FiringRules",
          "signature": "SeqTau (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "SeqTau",
          "package": "CSPM-FiringRules",
          "partial": "Seq Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:SeqTau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "SeqTick",
          "package": "CSPM-FiringRules",
          "signature": "SeqTick (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "SeqTick",
          "package": "CSPM-FiringRules",
          "partial": "Seq Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:SeqTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareOmega",
          "package": "CSPM-FiringRules",
          "signature": "ShareOmega (EventSet i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareOmega",
          "package": "CSPM-FiringRules",
          "partial": "Share Omega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ShareOmega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTauL",
          "package": "CSPM-FiringRules",
          "signature": "ShareTauL (EventSet i) (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTauL",
          "package": "CSPM-FiringRules",
          "partial": "Share Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ShareTauL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTauR",
          "package": "CSPM-FiringRules",
          "signature": "ShareTauR (EventSet i) (Process i) (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTauR",
          "package": "CSPM-FiringRules",
          "partial": "Share Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ShareTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTickL",
          "package": "CSPM-FiringRules",
          "signature": "ShareTickL (EventSet i) (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTickL",
          "package": "CSPM-FiringRules",
          "partial": "Share Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ShareTickL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTickR",
          "package": "CSPM-FiringRules",
          "signature": "ShareTickR (EventSet i) (Process i) (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "ShareTickR",
          "package": "CSPM-FiringRules",
          "partial": "Share Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:ShareTickR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "Shared",
          "package": "CSPM-FiringRules",
          "signature": "Shared (EventSet i) (RuleEvent i) (RuleEvent i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "Shared",
          "package": "CSPM-FiringRules",
          "partial": "Shared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:Shared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "SkipTick",
          "package": "CSPM-FiringRules",
          "signature": "SkipTick",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "SkipTick",
          "package": "CSPM-FiringRules",
          "partial": "Skip Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:SkipTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TauRepAParallel",
          "package": "CSPM-FiringRules",
          "signature": "TauRepAParallel [Either (EventSet i, Process i) (EventSet i, RuleTau i)]",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TauRepAParallel",
          "normalized": "TauRepAParallel[Either(EventSet a,Process a)(EventSet a,RuleTau a)]",
          "package": "CSPM-FiringRules",
          "partial": "Tau Rep AParallel",
          "signature": "TauRepAParallel[Either(EventSet i,Process i)(EventSet i,RuleTau i)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TauRepAParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TauRule",
          "package": "CSPM-FiringRules",
          "signature": "TauRule (RuleTau i)",
          "source": "src/CSPM-FiringRules-Rules.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TauRule",
          "package": "CSPM-FiringRules",
          "partial": "Tau Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TauRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TickRule",
          "package": "CSPM-FiringRules",
          "signature": "TickRule (RuleTick i)",
          "source": "src/CSPM-FiringRules-Rules.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TickRule",
          "package": "CSPM-FiringRules",
          "partial": "Tick Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TickRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutNo",
          "package": "CSPM-FiringRules",
          "signature": "TimeoutNo (RuleEvent i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutNo",
          "package": "CSPM-FiringRules",
          "partial": "Timeout No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TimeoutNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutOccurs",
          "package": "CSPM-FiringRules",
          "signature": "TimeoutOccurs (Process i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutOccurs",
          "package": "CSPM-FiringRules",
          "partial": "Timeout Occurs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TimeoutOccurs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutTauR",
          "package": "CSPM-FiringRules",
          "signature": "TimeoutTauR (RuleTau i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutTauR",
          "package": "CSPM-FiringRules",
          "partial": "Timeout Tau",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TimeoutTauR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutTick",
          "package": "CSPM-FiringRules",
          "signature": "TimeoutTick (RuleTick i) (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTick",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TimeoutTick",
          "package": "CSPM-FiringRules",
          "partial": "Timeout Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TimeoutTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Rules",
          "name": "TraceSwitchOn",
          "package": "CSPM-FiringRules",
          "signature": "TraceSwitchOn (Process i)",
          "source": "src/CSPM-FiringRules-Rules.html#RuleTau",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "TraceSwitchOn",
          "package": "CSPM-FiringRules",
          "partial": "Trace Switch On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:TraceSwitchOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this a proof tree for a tau-transition ?\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Rules",
          "name": "isTauRule",
          "package": "CSPM-FiringRules",
          "signature": "Rule i -\u003e Bool",
          "source": "src/CSPM-FiringRules-Rules.html#isTauRule",
          "type": "function"
        },
        "index": {
          "description": "Is this proof tree for tau-transition",
          "hierarchy": "CSPM FiringRules Rules",
          "module": "CSPM.FiringRules.Rules",
          "name": "isTauRule",
          "normalized": "Rule a-\u003eBool",
          "package": "CSPM-FiringRules",
          "partial": "Tau Rule",
          "signature": "Rule i-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Rules.html#v:isTauRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of the Search Monad.\n Currently just a small wrapper around the tree-monad package\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.Search",
          "name": "Search",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Search.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of the Search Monad Currently just small wrapper around the tree-monad package",
          "hierarchy": "CSPM FiringRules Search",
          "module": "CSPM.FiringRules.Search",
          "name": "Search",
          "package": "CSPM-FiringRules",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.FiringRules.Search",
          "name": "Search",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Search.html#Search",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM FiringRules Search",
          "module": "CSPM.FiringRules.Search",
          "name": "Search",
          "package": "CSPM-FiringRules",
          "partial": "Search",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Search.html#t:Search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a list to the search monad.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Search",
          "name": "anyOf",
          "package": "CSPM-FiringRules",
          "signature": "[a] -\u003e Search a",
          "source": "src/CSPM-FiringRules-Search.html#anyOf",
          "type": "function"
        },
        "index": {
          "description": "Lift list to the search monad",
          "hierarchy": "CSPM FiringRules Search",
          "module": "CSPM.FiringRules.Search",
          "name": "anyOf",
          "normalized": "[a]-\u003eSearch a",
          "package": "CSPM-FiringRules",
          "partial": "Of",
          "signature": "[a]-\u003eSearch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Search.html#v:anyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the search monad.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Search",
          "name": "runSearch",
          "package": "CSPM-FiringRules",
          "signature": "Search a -\u003e [a]",
          "source": "src/CSPM-FiringRules-Search.html#runSearch",
          "type": "function"
        },
        "index": {
          "description": "Run the search monad",
          "hierarchy": "CSPM FiringRules Search",
          "module": "CSPM.FiringRules.Search",
          "name": "runSearch",
          "normalized": "Search a-\u003e[a]",
          "package": "CSPM-FiringRules",
          "partial": "Search",
          "signature": "Search a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Search.html#v:runSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickCheck tests for the proof tree generators in\n module CSPM.FiringRules.EnumerateEvents and\n CSPM.FiringRules.FieldConstraints.\n These QuickCheck properties check for soundness, completeness\n and that both proof tree generators yield the same result.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.Test.Test",
          "name": "Test",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Test-Test.html",
          "type": "module"
        },
        "index": {
          "description": "QuickCheck tests for the proof tree generators in module CSPM.FiringRules.EnumerateEvents and CSPM.FiringRules.FieldConstraints These QuickCheck properties check for soundness completeness and that both proof tree generators yield the same result",
          "hierarchy": "CSPM FiringRules Test Test",
          "module": "CSPM.FiringRules.Test.Test",
          "name": "Test",
          "package": "CSPM-FiringRules",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Test-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a number of QuickCheck tests (with fixed seed).\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Test.Test",
          "name": "main",
          "package": "CSPM-FiringRules",
          "signature": "IO ()",
          "source": "src/CSPM-FiringRules-Test-Test.html#main",
          "type": "function"
        },
        "index": {
          "description": "Run number of QuickCheck tests with fixed seed",
          "hierarchy": "CSPM FiringRules Test Test",
          "module": "CSPM.FiringRules.Test.Test",
          "name": "main",
          "normalized": "IO()",
          "package": "CSPM-FiringRules",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Test-Test.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA very rudimentary process tracer for debugging and testing.\n Prints the current process and the possible transitions to stdout\n and lets the user select a transition by typing to stdin.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.Trace",
          "name": "Trace",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "very rudimentary process tracer for debugging and testing Prints the current process and the possible transitions to stdout and lets the user select transition by typing to stdin",
          "hierarchy": "CSPM FiringRules Trace",
          "module": "CSPM.FiringRules.Trace",
          "name": "Trace",
          "package": "CSPM-FiringRules",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simplistic interactive CSP-M tracer.\n It prints all events offered by a Proccess to stdout and\n promts the user for the event to perform.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Trace",
          "name": "trace",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i -\u003e Process i -\u003e IO ()",
          "source": "src/CSPM-FiringRules-Trace.html#trace",
          "type": "function"
        },
        "index": {
          "description": "simplistic interactive CSP-M tracer It prints all events offered by Proccess to stdout and promts the user for the event to perform",
          "hierarchy": "CSPM FiringRules Trace",
          "module": "CSPM.FiringRules.Trace",
          "name": "trace",
          "normalized": "Sigma a-\u003eProcess a-\u003eIO()",
          "package": "CSPM-FiringRules",
          "signature": "Sigma i-\u003eProcess i-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Trace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA checker for the firing rules semantics of CSPM.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eviewRuleMaybe\u003c/a\u003e\u003c/code\u003e checks that a proof tree is valid\n with respect to the firing rules semantics of CSPM.\n It checks that the proof tree is syntactically valid\n and that all side conditions hold.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e data type stores proof trees in a compressed form.\n \u003ccode\u003e\u003ca\u003eviewRuleMaybe\u003c/a\u003e\u003c/code\u003e constructs an explicit representation of the transition.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eviewRule\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003eviewRuleMaybe\u003c/a\u003e\u003c/code\u003e and throws an exception if\n the proof tree was not valid.\n The proof tree generators in this package only generate valid proof trees.\n \u003ccode\u003e\u003ca\u003eviewRule\u003c/a\u003e\u003c/code\u003e is used to check that assertion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "Verifier",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Verifier.html",
          "type": "module"
        },
        "index": {
          "description": "checker for the firing rules semantics of CSPM viewRuleMaybe checks that proof tree is valid with respect to the firing rules semantics of CSPM It checks that the proof tree is syntactically valid and that all side conditions hold The Rule data type stores proof trees in compressed form viewRuleMaybe constructs an explicit representation of the transition viewRule calls viewRuleMaybe and throws an exception if the proof tree was not valid The proof tree generators in this package only generate valid proof trees viewRule is used to check that assertion",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "Verifier",
          "package": "CSPM-FiringRules",
          "partial": "Verifier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eviewRule\u003c/a\u003e\u003c/code\u003e but just return the event.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewEvent",
          "package": "CSPM-FiringRules",
          "signature": "Rule i -\u003e TTE i",
          "source": "src/CSPM-FiringRules-Verifier.html#viewEvent",
          "type": "function"
        },
        "index": {
          "description": "Like viewRule but just return the event",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewEvent",
          "normalized": "Rule a-\u003eTTE a",
          "package": "CSPM-FiringRules",
          "partial": "Event",
          "signature": "Rule i-\u003eTTE i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eviewRule\u003c/a\u003e\u003c/code\u003e but just return the successor process.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewProcAfter",
          "package": "CSPM-FiringRules",
          "signature": "Rule i -\u003e Process i",
          "source": "src/CSPM-FiringRules-Verifier.html#viewProcAfter",
          "type": "function"
        },
        "index": {
          "description": "Like viewRule but just return the successor process",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewProcAfter",
          "normalized": "Rule a-\u003eProcess a",
          "package": "CSPM-FiringRules",
          "partial": "Proc After",
          "signature": "Rule i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewProcAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eviewRule\u003c/a\u003e\u003c/code\u003e but just return the predecessor process.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewProcBefore",
          "package": "CSPM-FiringRules",
          "signature": "Rule i -\u003e Process i",
          "source": "src/CSPM-FiringRules-Verifier.html#viewProcBefore",
          "type": "function"
        },
        "index": {
          "description": "Like viewRule but just return the predecessor process",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewProcBefore",
          "normalized": "Rule a-\u003eProcess a",
          "package": "CSPM-FiringRules",
          "partial": "Proc Before",
          "signature": "Rule i-\u003eProcess i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewProcBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function constructs an explict representation of the transition\n  from the proof tree of the transition.\n  The transition as a triple\n  (predecessor \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e, Event, successor \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e).\n  If the proof tree is invalid it throws an exception.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRule",
          "package": "CSPM-FiringRules",
          "signature": "Rule i -\u003e (Process i, TTE i, Process i)",
          "source": "src/CSPM-FiringRules-Verifier.html#viewRule",
          "type": "function"
        },
        "index": {
          "description": "This function constructs an explict representation of the transition from the proof tree of the transition The transition as triple predecessor Process Event successor Process If the proof tree is invalid it throws an exception",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRule",
          "normalized": "Rule a-\u003e(Process a,TTE a,Process a)",
          "package": "CSPM-FiringRules",
          "partial": "Rule",
          "signature": "Rule i-\u003e(Process i,TTE i,Process i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck a regular rule\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleEvent",
          "package": "CSPM-FiringRules",
          "signature": "RuleEvent i -\u003e Maybe (Process i, Event i, Process i)",
          "source": "src/CSPM-FiringRules-Verifier.html#viewRuleEvent",
          "type": "function"
        },
        "index": {
          "description": "Check regular rule",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleEvent",
          "normalized": "RuleEvent a-\u003eMaybe(Process a,Event a,Process a)",
          "package": "CSPM-FiringRules",
          "partial": "Rule Event",
          "signature": "RuleEvent i-\u003eMaybe(Process i,Event i,Process i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewRuleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eviewRule\u003c/a\u003e\u003c/code\u003e but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in case of an invalid proof tree.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleMaybe",
          "package": "CSPM-FiringRules",
          "signature": "Rule i -\u003e Maybe (Process i, TTE i, Process i)",
          "source": "src/CSPM-FiringRules-Verifier.html#viewRuleMaybe",
          "type": "function"
        },
        "index": {
          "description": "Like viewRule but returns Nothing in case of an invalid proof tree",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleMaybe",
          "normalized": "Rule a-\u003eMaybe(Process a,TTE a,Process a)",
          "package": "CSPM-FiringRules",
          "partial": "Rule Maybe",
          "signature": "Rule i-\u003eMaybe(Process i,TTE i,Process i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewRuleMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck a tau rule.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleTau",
          "package": "CSPM-FiringRules",
          "signature": "RuleTau i -\u003e Maybe (Process i, Process i)",
          "source": "src/CSPM-FiringRules-Verifier.html#viewRuleTau",
          "type": "function"
        },
        "index": {
          "description": "Check tau rule",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleTau",
          "normalized": "RuleTau a-\u003eMaybe(Process a,Process a)",
          "package": "CSPM-FiringRules",
          "partial": "Rule Tau",
          "signature": "RuleTau i-\u003eMaybe(Process i,Process i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewRuleTau"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck a tick rule.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleTick",
          "package": "CSPM-FiringRules",
          "signature": "RuleTick i -\u003e Maybe (Process i)",
          "source": "src/CSPM-FiringRules-Verifier.html#viewRuleTick",
          "type": "function"
        },
        "index": {
          "description": "Check tick rule",
          "hierarchy": "CSPM FiringRules Verifier",
          "module": "CSPM.FiringRules.Verifier",
          "name": "viewRuleTick",
          "normalized": "RuleTick a-\u003eMaybe(Process a)",
          "package": "CSPM-FiringRules",
          "partial": "Rule Tick",
          "signature": "RuleTick i-\u003eMaybe(Process i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Verifier.html#v:viewRuleTick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReflect the version number of this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.FiringRules.Version",
          "name": "Version",
          "package": "CSPM-FiringRules",
          "source": "src/CSPM-FiringRules-Version.html",
          "type": "module"
        },
        "index": {
          "description": "Reflect the version number of this library",
          "hierarchy": "CSPM FiringRules Version",
          "module": "CSPM.FiringRules.Version",
          "name": "Version",
          "package": "CSPM-FiringRules",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Version.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the CSPM-FiringRules library.\n\u003c/p\u003e",
          "module": "CSPM.FiringRules.Version",
          "name": "firingRulesVersion",
          "package": "CSPM-FiringRules",
          "signature": "Version",
          "source": "src/CSPM-FiringRules-Version.html#firingRulesVersion",
          "type": "function"
        },
        "index": {
          "description": "The version of the CSPM-FiringRules library",
          "hierarchy": "CSPM FiringRules Version",
          "module": "CSPM.FiringRules.Version",
          "name": "firingRulesVersion",
          "package": "CSPM-FiringRules",
          "partial": "Rules Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-FiringRules/docs/CSPM-FiringRules-Version.html#v:firingRulesVersion"
      }
    }
  ]
]