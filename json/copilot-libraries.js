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
        "word": "copilot-libraries"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library that generates new clocks based on a base period.\n Usage, supposing \u003ccode\u003ev\u003c/code\u003e is a Copilot variable, then\n \u003ccode\u003e\n clk ( period 3 ) ( phase 1 )\n \u003c/code\u003e\n is equivalent to a stream of values like:\n \u003ccode\u003e\n cycle [False, True, False]\n \u003c/code\u003e\n that generates a stream of values\n \u003ccode\u003e\n False True False False True False False True False ...\n 0     1    2     3     4    5     6     7    8\n \u003c/code\u003e\n That is true every 3 ticks (the period) starting on the 1st tick (the phase).\n Constraints:\n The period must be greater than 0.\n The phase must be greater than or equal to 0.\n The phase must be less than the period.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.Clocks",
          "name": "Clocks",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-Clocks.html",
          "type": "module"
        },
        "index": {
          "description": "library that generates new clocks based on base period Usage supposing is Copilot variable then clk period phase is equivalent to stream of values like cycle False True False that generates stream of values False True False False True False False True False That is true every ticks the period starting on the st tick the phase Constraints The period must be greater than The phase must be greater than or equal to The phase must be less than the period",
          "hierarchy": "Copilot Library Clocks",
          "module": "Copilot.Library.Clocks",
          "name": "Clocks",
          "package": "copilot-libraries",
          "partial": "Clocks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Clocks",
          "name": "clk",
          "package": "copilot-libraries",
          "signature": "Period a -\u003e Phase a -\u003e Stream Bool",
          "source": "src/Copilot-Library-Clocks.html#clk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Clocks",
          "module": "Copilot.Library.Clocks",
          "name": "clk",
          "normalized": "Period a-\u003ePhase a-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "Period a-\u003ePhase a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:clk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Clocks",
          "name": "clk1",
          "package": "copilot-libraries",
          "signature": "Period a -\u003e Phase a -\u003e Stream Bool",
          "source": "src/Copilot-Library-Clocks.html#clk1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Clocks",
          "module": "Copilot.Library.Clocks",
          "name": "clk1",
          "normalized": "Period a-\u003ePhase a-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "Period a-\u003ePhase a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:clk1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Clocks",
          "name": "period",
          "package": "copilot-libraries",
          "signature": "a -\u003e Period a",
          "source": "src/Copilot-Library-Clocks.html#period",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Clocks",
          "module": "Copilot.Library.Clocks",
          "name": "period",
          "normalized": "a-\u003ePeriod a",
          "package": "copilot-libraries",
          "signature": "a-\u003ePeriod a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Clocks",
          "name": "phase",
          "package": "copilot-libraries",
          "signature": "a -\u003e Phase a",
          "source": "src/Copilot-Library-Clocks.html#phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Clocks",
          "module": "Copilot.Library.Clocks",
          "name": "phase",
          "normalized": "a-\u003ePhase a",
          "package": "copilot-libraries",
          "signature": "a-\u003ePhase a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBounded Linear Temporal Logic (LTL) operators.  For a bound \u003ccode\u003en\u003c/code\u003e, a property\n \u003ccode\u003ep\u003c/code\u003e holds if it holds on the next \u003ccode\u003en\u003c/code\u003e transitions (between periods).  If\n \u003ccode\u003en == 0\u003c/code\u003e, then the trace includes only the current period.  For example,\n \u003ccode\u003e\n eventually 3 p\n \u003c/code\u003e\n holds if \u003ccode\u003ep\u003c/code\u003e holds at least once every four periods (3 transitions).\n\u003c/p\u003e\u003cp\u003eInterface: see Examples/LTLExamples.hs You can embed an LTL specification\n within a Copilot specification using the form:\n \u003ccode\u003e\n   operator spec\n \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor some properties, stream dependencies may not allow their specification.\n In particular, you cannot determine the \u003ca\u003efuture\u003c/a\u003e value of an external\n variable.  In general, the ptLTL library is probaby more useful.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.LTL",
          "name": "LTL",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-LTL.html",
          "type": "module"
        },
        "index": {
          "description": "Bounded Linear Temporal Logic LTL operators For bound property holds if it holds on the next transitions between periods If then the trace includes only the current period For example eventually holds if holds at least once every four periods transitions Interface see Examples LTLExamples.hs You can embed an LTL specification within Copilot specification using the form operator spec For some properties stream dependencies may not allow their specification In particular you cannot determine the future value of an external variable In general the ptLTL library is probaby more useful",
          "hierarchy": "Copilot Library LTL",
          "module": "Copilot.Library.LTL",
          "name": "LTL",
          "package": "copilot-libraries",
          "partial": "LTL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty \u003ccode\u003es\u003c/code\u003e holds for the next \u003ccode\u003en\u003c/code\u003e periods.  We require \u003ccode\u003en \u003e= 0\u003c/code\u003e. If \u003ccode\u003en ==\n 0\u003c/code\u003e, then \u003ccode\u003es\u003c/code\u003e holds in the current period.  E.g., if \u003ccode\u003ep = always 2 s\u003c/code\u003e, then we\n have the following relationship between the streams generated:\n \u003ccode\u003e\n      0 1 2 3 4 5 6 7\n s =\u003e T T T F T T T T ...\n p =\u003e T F F F T T ...\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Copilot.Library.LTL",
          "name": "always",
          "package": "copilot-libraries",
          "signature": "a -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-LTL.html#always",
          "type": "function"
        },
        "index": {
          "description": "Property holds for the next periods We require If then holds in the current period E.g if always then we have the following relationship between the streams generated",
          "hierarchy": "Copilot Library LTL",
          "module": "Copilot.Library.LTL",
          "name": "always",
          "normalized": "a-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "a-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty \u003ccode\u003es\u003c/code\u003e holds at some period in the next \u003ccode\u003en\u003c/code\u003e periods.  If \u003ccode\u003en == 0\u003c/code\u003e,\n then \u003ccode\u003es\u003c/code\u003e holds in the current period.  We require \u003ccode\u003en \u003e= 0\u003c/code\u003e.  E.g., if \u003ccode\u003ep =\n eventually 2 s\u003c/code\u003e, then we have the following relationship between the streams\n generated:\n \u003ccode\u003e\n s =\u003e F F F T F F F T ...\n p =\u003e F T T T F T T T ...\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Copilot.Library.LTL",
          "name": "eventually",
          "package": "copilot-libraries",
          "signature": "a -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-LTL.html#eventually",
          "type": "function"
        },
        "index": {
          "description": "Property holds at some period in the next periods If then holds in the current period We require E.g if eventually then we have the following relationship between the streams generated",
          "hierarchy": "Copilot Library LTL",
          "module": "Copilot.Library.LTL",
          "name": "eventually",
          "normalized": "a-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "a-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:eventually"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty \u003ccode\u003es\u003c/code\u003e holds at the next period.  For example:\n \u003ccode\u003e\n           0 1 2 3 4 5 6 7\n s      =\u003e F F F T F F T F ...\n next s =\u003e F F T F F T F ...\n \u003c/code\u003e\n Note: s must have sufficient history to drop a value from it.\n\u003c/p\u003e",
          "module": "Copilot.Library.LTL",
          "name": "next",
          "package": "copilot-libraries",
          "signature": "Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-LTL.html#next",
          "type": "function"
        },
        "index": {
          "description": "Property holds at the next period For example next Note must have sufficient history to drop value from it",
          "hierarchy": "Copilot Library LTL",
          "module": "Copilot.Library.LTL",
          "name": "next",
          "normalized": "Stream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "Stream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erelease n s0 s1\u003c/code\u003e means that either \u003ccode\u003ealways n s1\u003c/code\u003e, or \u003ccode\u003es1\u003c/code\u003e holds up to and\n including the period at which \u003ccode\u003es0\u003c/code\u003e becomes true.\n\u003c/p\u003e",
          "module": "Copilot.Library.LTL",
          "name": "release",
          "package": "copilot-libraries",
          "signature": "a -\u003e Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-LTL.html#release",
          "type": "function"
        },
        "index": {
          "description": "release s0 s1 means that either always s1 or s1 holds up to and including the period at which s0 becomes true",
          "hierarchy": "Copilot Library LTL",
          "module": "Copilot.Library.LTL",
          "name": "release",
          "normalized": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euntil n s0 s1\u003c/code\u003e means that \u003ccode\u003eeventually n s1\u003c/code\u003e, and up until at least the\n period before \u003ccode\u003es1\u003c/code\u003e holds, \u003ccode\u003es0\u003c/code\u003e continuously holds.\n\u003c/p\u003e",
          "module": "Copilot.Library.LTL",
          "name": "until",
          "package": "copilot-libraries",
          "signature": "a -\u003e Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-LTL.html#until",
          "type": "function"
        },
        "index": {
          "description": "until s0 s1 means that eventually s1 and up until at least the period before s1 holds s0 continuously holds",
          "hierarchy": "Copilot Library LTL",
          "module": "Copilot.Library.LTL",
          "name": "until",
          "normalized": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain import module for the front-end lanugage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.Libraries",
          "name": "Libraries",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-Libraries.html",
          "type": "module"
        },
        "index": {
          "description": "Main import module for the front-end lanugage",
          "hierarchy": "Copilot Library Libraries",
          "module": "Copilot.Library.Libraries",
          "name": "Libraries",
          "package": "copilot-libraries",
          "partial": "Libraries",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Libraries.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides past-time linear-temporal logic (ptLTL operators).\n\u003c/p\u003e\u003cp\u003eInterface: see Examples/PTLTLExamples.hs.\n You can embed a ptLTL specification within a Copilot specification using\n the form:\n \u003ccode\u003e\n   operator stream\n \u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.PTLTL",
          "name": "PTLTL",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-PTLTL.html",
          "type": "module"
        },
        "index": {
          "description": "Provides past-time linear-temporal logic ptLTL operators Interface see Examples PTLTLExamples.hs You can embed ptLTL specification within Copilot specification using the form operator stream",
          "hierarchy": "Copilot Library PTLTL",
          "module": "Copilot.Library.PTLTL",
          "name": "PTLTL",
          "package": "copilot-libraries",
          "partial": "PTLTL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas \u003ccode\u003es\u003c/code\u003e always held (up to and including the current state)?\n\u003c/p\u003e",
          "module": "Copilot.Library.PTLTL",
          "name": "alwaysBeen",
          "package": "copilot-libraries",
          "signature": "Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-PTLTL.html#alwaysBeen",
          "type": "function"
        },
        "index": {
          "description": "Has always held up to and including the current state",
          "hierarchy": "Copilot Library PTLTL",
          "module": "Copilot.Library.PTLTL",
          "name": "alwaysBeen",
          "normalized": "Stream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "partial": "Been",
          "signature": "Stream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:alwaysBeen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDid \u003ccode\u003es\u003c/code\u003e hold at some time in the past (including the current state)?\n\u003c/p\u003e",
          "module": "Copilot.Library.PTLTL",
          "name": "eventuallyPrev",
          "package": "copilot-libraries",
          "signature": "Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-PTLTL.html#eventuallyPrev",
          "type": "function"
        },
        "index": {
          "description": "Did hold at some time in the past including the current state",
          "hierarchy": "Copilot Library PTLTL",
          "module": "Copilot.Library.PTLTL",
          "name": "eventuallyPrev",
          "normalized": "Stream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "partial": "Prev",
          "signature": "Stream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:eventuallyPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDid \u003ccode\u003es\u003c/code\u003e hold in the previous period?\n\u003c/p\u003e",
          "module": "Copilot.Library.PTLTL",
          "name": "previous",
          "package": "copilot-libraries",
          "signature": "Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-PTLTL.html#previous",
          "type": "function"
        },
        "index": {
          "description": "Did hold in the previous period",
          "hierarchy": "Copilot Library PTLTL",
          "module": "Copilot.Library.PTLTL",
          "name": "previous",
          "normalized": "Stream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "Stream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:previous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnce \u003ccode\u003es2\u003c/code\u003e holds, in the following state (period), does \u003ccode\u003es1\u003c/code\u003e continuously hold?\n\u003c/p\u003e",
          "module": "Copilot.Library.PTLTL",
          "name": "since",
          "package": "copilot-libraries",
          "signature": "Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-PTLTL.html#since",
          "type": "function"
        },
        "index": {
          "description": "Once s2 holds in the following state period does s1 continuously hold",
          "hierarchy": "Copilot Library PTLTL",
          "module": "Copilot.Library.PTLTL",
          "name": "since",
          "normalized": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "signature": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:since"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular expression librariy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.RegExp",
          "name": "RegExp",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-RegExp.html",
          "type": "module"
        },
        "index": {
          "description": "regular expression librariy",
          "hierarchy": "Copilot Library RegExp",
          "module": "Copilot.Library.RegExp",
          "name": "RegExp",
          "package": "copilot-libraries",
          "partial": "Reg Exp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-RegExp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.RegExp",
          "name": "copilotRegexp",
          "package": "copilot-libraries",
          "signature": "Stream t -\u003e SourceName -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-RegExp.html#copilotRegexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library RegExp",
          "module": "Copilot.Library.RegExp",
          "name": "copilotRegexp",
          "normalized": "Stream a-\u003eSourceName-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "partial": "Regexp",
          "signature": "Stream t-\u003eSourceName-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-RegExp.html#v:copilotRegexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.RegExp",
          "name": "copilotRegexpB",
          "package": "copilot-libraries",
          "signature": "SourceName -\u003e [(StreamName, Stream Bool)] -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Library-RegExp.html#copilotRegexpB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library RegExp",
          "module": "Copilot.Library.RegExp",
          "name": "copilotRegexpB",
          "normalized": "SourceName-\u003e[(StreamName,Stream Bool)]-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-libraries",
          "partial": "Regexp",
          "signature": "SourceName-\u003e[(StreamName,Stream Bool)]-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-RegExp.html#v:copilotRegexpB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStack machine.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.Stacks",
          "name": "Stacks",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-Stacks.html",
          "type": "module"
        },
        "index": {
          "description": "Stack machine",
          "hierarchy": "Copilot Library Stacks",
          "module": "Copilot.Library.Stacks",
          "name": "Stacks",
          "package": "copilot-libraries",
          "partial": "Stacks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Stacks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Stacks",
          "name": "stack",
          "package": "copilot-libraries",
          "signature": "a -\u003e b -\u003e PopSignal -\u003e PushSignal -\u003e PushStream b -\u003e StackTop b",
          "source": "src/Copilot-Library-Stacks.html#stack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Stacks",
          "module": "Copilot.Library.Stacks",
          "name": "stack",
          "normalized": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b",
          "package": "copilot-libraries",
          "signature": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Stacks.html#v:stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Stacks",
          "name": "stack'",
          "package": "copilot-libraries",
          "signature": "a -\u003e b -\u003e PopSignal -\u003e PushSignal -\u003e PushStream b -\u003e StackTop b",
          "source": "src/Copilot-Library-Stacks.html#stack%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Stacks",
          "module": "Copilot.Library.Stacks",
          "name": "stack'",
          "normalized": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b",
          "package": "copilot-libraries",
          "signature": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Stacks.html#v:stack-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic bounded statistics.  In the following, a bound \u003ccode\u003en\u003c/code\u003e is given stating\n the number of periods over which to compute the statistic (\u003ccode\u003en == 1\u003c/code\u003e computes\n it only over the current period).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.Statistics",
          "name": "Statistics",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-Statistics.html",
          "type": "module"
        },
        "index": {
          "description": "Basic bounded statistics In the following bound is given stating the number of periods over which to compute the statistic computes it only over the current period",
          "hierarchy": "Copilot Library Statistics",
          "module": "Copilot.Library.Statistics",
          "name": "Statistics",
          "package": "copilot-libraries",
          "partial": "Statistics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum value.\n\u003c/p\u003e",
          "module": "Copilot.Library.Statistics",
          "name": "max",
          "package": "copilot-libraries",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Statistics.html#max",
          "type": "function"
        },
        "index": {
          "description": "Maximum value",
          "hierarchy": "Copilot Library Statistics",
          "module": "Copilot.Library.Statistics",
          "name": "max",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMean value.  \u003ccode\u003en\u003c/code\u003e must not overflow\n for word size \u003ccode\u003ea\u003c/code\u003e for streams over which computation is peformed.\n\u003c/p\u003e",
          "module": "Copilot.Library.Statistics",
          "name": "mean",
          "package": "copilot-libraries",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Statistics.html#mean",
          "type": "function"
        },
        "index": {
          "description": "Mean value must not overflow for word size for streams over which computation is peformed",
          "hierarchy": "Copilot Library Statistics",
          "module": "Copilot.Library.Statistics",
          "name": "mean",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMean value over the current set of streams passed in.\n\u003c/p\u003e",
          "module": "Copilot.Library.Statistics",
          "name": "meanNow",
          "package": "copilot-libraries",
          "signature": "[Stream a] -\u003e Stream a",
          "source": "src/Copilot-Library-Statistics.html#meanNow",
          "type": "function"
        },
        "index": {
          "description": "Mean value over the current set of streams passed in",
          "hierarchy": "Copilot Library Statistics",
          "module": "Copilot.Library.Statistics",
          "name": "meanNow",
          "normalized": "[Stream a]-\u003eStream a",
          "package": "copilot-libraries",
          "partial": "Now",
          "signature": "[Stream a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:meanNow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum value.\n\u003c/p\u003e",
          "module": "Copilot.Library.Statistics",
          "name": "min",
          "package": "copilot-libraries",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Statistics.html#min",
          "type": "function"
        },
        "index": {
          "description": "Minimum value",
          "hierarchy": "Copilot Library Statistics",
          "module": "Copilot.Library.Statistics",
          "name": "min",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummation.\n\u003c/p\u003e",
          "module": "Copilot.Library.Statistics",
          "name": "sum",
          "package": "copilot-libraries",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Statistics.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Summation",
          "hierarchy": "Copilot Library Statistics",
          "module": "Copilot.Library.Statistics",
          "name": "sum",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility bounded-list functions (e.g., folds, scans, etc.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Library.Utils",
          "name": "Utils",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utility bounded-list functions e.g folds scans etc",
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "Utils",
          "package": "copilot-libraries",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex.  WARNING: very expensive!  Consider using this only for very short lists.\n\u003c/p\u003e",
          "module": "Copilot.Library.Utils",
          "name": "(!!)",
          "package": "copilot-libraries",
          "signature": "[Stream a] -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Utils.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "Index WARNING very expensive Consider using this only for very short lists",
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "(!!) !!",
          "normalized": "[Stream a]-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "[Stream a]-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "case'",
          "package": "copilot-libraries",
          "signature": "[Stream Bool] -\u003e [Stream a] -\u003e Stream a",
          "source": "src/Copilot-Library-Utils.html#case%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "case'",
          "normalized": "[Stream Bool]-\u003e[Stream a]-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "[Stream Bool]-\u003e[Stream a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:case-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "cycle",
          "package": "copilot-libraries",
          "signature": "[a] -\u003e Stream a",
          "source": "src/Copilot-Library-Utils.html#cycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "cycle",
          "normalized": "[a]-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nfoldl",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream a) -\u003e Stream a -\u003e Stream b -\u003e Stream a",
          "source": "src/Copilot-Library-Utils.html#nfoldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nfoldl",
          "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nfoldl1",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Utils.html#nfoldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nfoldl1",
          "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nfoldr",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream b) -\u003e Stream b -\u003e Stream a -\u003e Stream b",
          "source": "src/Copilot-Library-Utils.html#nfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nfoldr",
          "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003eStream b",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nfoldr1",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Library-Utils.html#nfoldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nfoldr1",
          "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nscanl",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream a) -\u003e Stream a -\u003e Stream b -\u003e [Stream a]",
          "source": "src/Copilot-Library-Utils.html#nscanl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nscanl",
          "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003e[Stream a]",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003e[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nscanl1",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e [Stream a]",
          "source": "src/Copilot-Library-Utils.html#nscanl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nscanl1",
          "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nscanr",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream b) -\u003e Stream b -\u003e Stream a -\u003e [Stream b]",
          "source": "src/Copilot-Library-Utils.html#nscanr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nscanr",
          "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003e[Stream b]",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003e[Stream b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "nscanr1",
          "package": "copilot-libraries",
          "signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e [Stream a]",
          "source": "src/Copilot-Library-Utils.html#nscanr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "nscanr1",
          "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]",
          "package": "copilot-libraries",
          "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctions similar to the Prelude functions on lists\n\u003c/p\u003e",
          "module": "Copilot.Library.Utils",
          "name": "tails",
          "package": "copilot-libraries",
          "signature": "Stream a -\u003e [Stream a]",
          "source": "src/Copilot-Library-Utils.html#tails",
          "type": "function"
        },
        "index": {
          "description": "functions similar to the Prelude functions on lists",
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "tails",
          "normalized": "Stream a-\u003e[Stream a]",
          "package": "copilot-libraries",
          "signature": "Stream a-\u003e[Stream a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Utils",
          "name": "take",
          "package": "copilot-libraries",
          "signature": "a -\u003e Stream b -\u003e [Stream b]",
          "source": "src/Copilot-Library-Utils.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Utils",
          "module": "Copilot.Library.Utils",
          "name": "take",
          "normalized": "a-\u003eStream b-\u003e[Stream b]",
          "package": "copilot-libraries",
          "signature": "a-\u003eStream b-\u003e[Stream b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the Boyer-Moore Majority Vote Algorithm for Copilot.\n\u003c/p\u003e\u003cp\u003eFor details of the Boyer-Moore Majority Vote Algorithm see the following\n papers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Wim H. Hesselink,\n \"The Boyer-Moore Majority Vote Algorithm\", 2005\n\u003c/li\u003e\u003cli\u003e Robert S. Boyer and J Strother Moore,\n \"MJRTY - A Fast Majority Vote Algorithm\", 1982\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Copilot.Library.Voting",
          "name": "Voting",
          "package": "copilot-libraries",
          "source": "src/Copilot-Library-Voting.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the Boyer-Moore Majority Vote Algorithm for Copilot For details of the Boyer-Moore Majority Vote Algorithm see the following papers Wim Hesselink The Boyer-Moore Majority Vote Algorithm Robert Boyer and Strother Moore MJRTY Fast Majority Vote Algorithm",
          "hierarchy": "Copilot Library Voting",
          "module": "Copilot.Library.Voting",
          "name": "Voting",
          "package": "copilot-libraries",
          "partial": "Voting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Voting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Voting",
          "name": "aMajority",
          "package": "copilot-libraries",
          "signature": "[Stream a] -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Library-Voting.html#aMajority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Voting",
          "module": "Copilot.Library.Voting",
          "name": "aMajority",
          "normalized": "[Stream a]-\u003eStream a-\u003eStream Bool",
          "package": "copilot-libraries",
          "partial": "Majority",
          "signature": "[Stream a]-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Voting.html#v:aMajority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Library.Voting",
          "name": "majority",
          "package": "copilot-libraries",
          "signature": "[Stream a] -\u003e Stream a",
          "source": "src/Copilot-Library-Voting.html#majority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Library Voting",
          "module": "Copilot.Library.Voting",
          "name": "majority",
          "normalized": "[Stream a]-\u003eStream a",
          "package": "copilot-libraries",
          "signature": "[Stream a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Voting.html#v:majority"
      }
    }
  ]
]