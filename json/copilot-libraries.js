[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library that generates new clocks based on a base period.\n Usage, supposing \u003ccode\u003ev\u003c/code\u003e is a Copilot variable, then\n \u003ccode\u003e\n clk ( period 3 ) ( phase 1 )\n \u003c/code\u003e\n is equivalent to a stream of values like:\n \u003ccode\u003e\n cycle [False, True, False]\n \u003c/code\u003e\n that generates a stream of values\n \u003ccode\u003e\n False True False False True False False True False ...\n 0     1    2     3     4    5     6     7    8\n \u003c/code\u003e\n That is true every 3 ticks (the period) starting on the 1st tick (the phase).\n Constraints:\n The period must be greater than 0.\n The phase must be greater than or equal to 0.\n The phase must be less than the period.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.Clocks",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-Clocks.html",
        "fct-type": "module",
        "title": "Clocks"
      },
      "index": {
        "description": "library that generates new clocks based on base period Usage supposing is Copilot variable then clk period phase is equivalent to stream of values like cycle False True False that generates stream of values False True False False True False False True False That is true every ticks the period starting on the st tick the phase Constraints The period must be greater than The phase must be greater than or equal to The phase must be less than the period",
        "hierarchy": "Copilot Library Clocks",
        "module": "Copilot.Library.Clocks",
        "name": "Clocks",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Clocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:clk",
      "description": {
        "fct-module": "Copilot.Library.Clocks",
        "fct-package": "copilot-libraries",
        "fct-signature": "Period a -\u003e Phase a -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-Clocks.html#clk",
        "fct-type": "function",
        "title": "clk"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Clocks",
        "module": "Copilot.Library.Clocks",
        "name": "clk",
        "normalized": "Period a-\u003ePhase a-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Period a-\u003ePhase a-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:clk1",
      "description": {
        "fct-module": "Copilot.Library.Clocks",
        "fct-package": "copilot-libraries",
        "fct-signature": "Period a -\u003e Phase a -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-Clocks.html#clk1",
        "fct-type": "function",
        "title": "clk1"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Clocks",
        "module": "Copilot.Library.Clocks",
        "name": "clk1",
        "normalized": "Period a-\u003ePhase a-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Period a-\u003ePhase a-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:period",
      "description": {
        "fct-module": "Copilot.Library.Clocks",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Period a",
        "fct-source": "src/Copilot-Library-Clocks.html#period",
        "fct-type": "function",
        "title": "period"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Clocks",
        "module": "Copilot.Library.Clocks",
        "name": "period",
        "normalized": "a-\u003ePeriod a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003ePeriod a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Clocks.html#v:phase",
      "description": {
        "fct-module": "Copilot.Library.Clocks",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Phase a",
        "fct-source": "src/Copilot-Library-Clocks.html#phase",
        "fct-type": "function",
        "title": "phase"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Clocks",
        "module": "Copilot.Library.Clocks",
        "name": "phase",
        "normalized": "a-\u003ePhase a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003ePhase a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBounded Linear Temporal Logic (LTL) operators.  For a bound \u003ccode\u003en\u003c/code\u003e, a property\n \u003ccode\u003ep\u003c/code\u003e holds if it holds on the next \u003ccode\u003en\u003c/code\u003e transitions (between periods).  If\n \u003ccode\u003en == 0\u003c/code\u003e, then the trace includes only the current period.  For example,\n \u003ccode\u003e\n eventually 3 p\n \u003c/code\u003e\n holds if \u003ccode\u003ep\u003c/code\u003e holds at least once every four periods (3 transitions).\n\u003c/p\u003e\u003cp\u003eInterface: see Examples/LTLExamples.hs You can embed an LTL specification\n within a Copilot specification using the form:\n \u003ccode\u003e\n   operator spec\n \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor some properties, stream dependencies may not allow their specification.\n In particular, you cannot determine the \u003ca\u003efuture\u003c/a\u003e value of an external\n variable.  In general, the ptLTL library is probaby more useful.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.LTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-LTL.html",
        "fct-type": "module",
        "title": "LTL"
      },
      "index": {
        "description": "Bounded Linear Temporal Logic LTL operators For bound property holds if it holds on the next transitions between periods If then the trace includes only the current period For example eventually holds if holds at least once every four periods transitions Interface see Examples LTLExamples.hs You can embed an LTL specification within Copilot specification using the form operator spec For some properties stream dependencies may not allow their specification In particular you cannot determine the future value of an external variable In general the ptLTL library is probaby more useful",
        "hierarchy": "Copilot Library LTL",
        "module": "Copilot.Library.LTL",
        "name": "LTL",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "LTL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eProperty \u003ccode\u003es\u003c/code\u003e holds for the next \u003ccode\u003en\u003c/code\u003e periods.  We require \u003ccode\u003en \u003e= 0\u003c/code\u003e. If \u003ccode\u003en ==\n 0\u003c/code\u003e, then \u003ccode\u003es\u003c/code\u003e holds in the current period.  E.g., if \u003ccode\u003ep = always 2 s\u003c/code\u003e, then we\n have the following relationship between the streams generated:\n \u003ccode\u003e\n      0 1 2 3 4 5 6 7\n s =\u003e T T T F T T T T ...\n p =\u003e T F F F T T ...\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.LTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-LTL.html#always",
        "fct-type": "function",
        "title": "always"
      },
      "index": {
        "description": "Property holds for the next periods We require If then holds in the current period E.g if always then we have the following relationship between the streams generated",
        "hierarchy": "Copilot Library LTL",
        "module": "Copilot.Library.LTL",
        "name": "always",
        "normalized": "a-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:eventually",
      "description": {
        "fct-descr": "\u003cp\u003eProperty \u003ccode\u003es\u003c/code\u003e holds at some period in the next \u003ccode\u003en\u003c/code\u003e periods.  If \u003ccode\u003en == 0\u003c/code\u003e,\n then \u003ccode\u003es\u003c/code\u003e holds in the current period.  We require \u003ccode\u003en \u003e= 0\u003c/code\u003e.  E.g., if \u003ccode\u003ep =\n eventually 2 s\u003c/code\u003e, then we have the following relationship between the streams\n generated:\n \u003ccode\u003e\n s =\u003e F F F T F F F T ...\n p =\u003e F T T T F T T T ...\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.LTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-LTL.html#eventually",
        "fct-type": "function",
        "title": "eventually"
      },
      "index": {
        "description": "Property holds at some period in the next periods If then holds in the current period We require E.g if eventually then we have the following relationship between the streams generated",
        "hierarchy": "Copilot Library LTL",
        "module": "Copilot.Library.LTL",
        "name": "eventually",
        "normalized": "a-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eProperty \u003ccode\u003es\u003c/code\u003e holds at the next period.  For example:\n \u003ccode\u003e\n           0 1 2 3 4 5 6 7\n s      =\u003e F F F T F F T F ...\n next s =\u003e F F T F F T F ...\n \u003c/code\u003e\n Note: s must have sufficient history to drop a value from it.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.LTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-LTL.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Property holds at the next period For example next Note must have sufficient history to drop value from it",
        "hierarchy": "Copilot Library LTL",
        "module": "Copilot.Library.LTL",
        "name": "next",
        "normalized": "Stream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Stream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erelease n s0 s1\u003c/code\u003e means that either \u003ccode\u003ealways n s1\u003c/code\u003e, or \u003ccode\u003es1\u003c/code\u003e holds up to and\n including the period at which \u003ccode\u003es0\u003c/code\u003e becomes true.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.LTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-LTL.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "release s0 s1 means that either always s1 or s1 holds up to and including the period at which s0 becomes true",
        "hierarchy": "Copilot Library LTL",
        "module": "Copilot.Library.LTL",
        "name": "release",
        "normalized": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-LTL.html#v:until",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003euntil n s0 s1\u003c/code\u003e means that \u003ccode\u003eeventually n s1\u003c/code\u003e, and up until at least the\n period before \u003ccode\u003es1\u003c/code\u003e holds, \u003ccode\u003es0\u003c/code\u003e continuously holds.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.LTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-LTL.html#until",
        "fct-type": "function",
        "title": "until"
      },
      "index": {
        "description": "until s0 s1 means that eventually s1 and up until at least the period before s1 holds s0 continuously holds",
        "hierarchy": "Copilot Library LTL",
        "module": "Copilot.Library.LTL",
        "name": "until",
        "normalized": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eStream Bool-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Libraries.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain import module for the front-end lanugage.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.Libraries",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-Libraries.html",
        "fct-type": "module",
        "title": "Libraries"
      },
      "index": {
        "description": "Main import module for the front-end lanugage",
        "hierarchy": "Copilot Library Libraries",
        "module": "Copilot.Library.Libraries",
        "name": "Libraries",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Libraries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides past-time linear-temporal logic (ptLTL operators).\n\u003c/p\u003e\u003cp\u003eInterface: see Examples/PTLTLExamples.hs.\n You can embed a ptLTL specification within a Copilot specification using\n the form:\n \u003ccode\u003e\n   operator stream\n \u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.PTLTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-PTLTL.html",
        "fct-type": "module",
        "title": "PTLTL"
      },
      "index": {
        "description": "Provides past-time linear-temporal logic ptLTL operators Interface see Examples PTLTLExamples.hs You can embed ptLTL specification within Copilot specification using the form operator stream",
        "hierarchy": "Copilot Library PTLTL",
        "module": "Copilot.Library.PTLTL",
        "name": "PTLTL",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "PTLTL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:alwaysBeen",
      "description": {
        "fct-descr": "\u003cp\u003eHas \u003ccode\u003es\u003c/code\u003e always held (up to and including the current state)?\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.PTLTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-PTLTL.html#alwaysBeen",
        "fct-type": "function",
        "title": "alwaysBeen"
      },
      "index": {
        "description": "Has always held up to and including the current state",
        "hierarchy": "Copilot Library PTLTL",
        "module": "Copilot.Library.PTLTL",
        "name": "alwaysBeen",
        "normalized": "Stream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "Been",
        "signature": "Stream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:eventuallyPrev",
      "description": {
        "fct-descr": "\u003cp\u003eDid \u003ccode\u003es\u003c/code\u003e hold at some time in the past (including the current state)?\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.PTLTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-PTLTL.html#eventuallyPrev",
        "fct-type": "function",
        "title": "eventuallyPrev"
      },
      "index": {
        "description": "Did hold at some time in the past including the current state",
        "hierarchy": "Copilot Library PTLTL",
        "module": "Copilot.Library.PTLTL",
        "name": "eventuallyPrev",
        "normalized": "Stream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "Prev",
        "signature": "Stream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:previous",
      "description": {
        "fct-descr": "\u003cp\u003eDid \u003ccode\u003es\u003c/code\u003e hold in the previous period?\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.PTLTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-PTLTL.html#previous",
        "fct-type": "function",
        "title": "previous"
      },
      "index": {
        "description": "Did hold in the previous period",
        "hierarchy": "Copilot Library PTLTL",
        "module": "Copilot.Library.PTLTL",
        "name": "previous",
        "normalized": "Stream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Stream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-PTLTL.html#v:since",
      "description": {
        "fct-descr": "\u003cp\u003eOnce \u003ccode\u003es2\u003c/code\u003e holds, in the following state (period), does \u003ccode\u003es1\u003c/code\u003e continuously hold?\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.PTLTL",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-PTLTL.html#since",
        "fct-type": "function",
        "title": "since"
      },
      "index": {
        "description": "Once s2 holds in the following state period does s1 continuously hold",
        "hierarchy": "Copilot Library PTLTL",
        "module": "Copilot.Library.PTLTL",
        "name": "since",
        "normalized": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Stream Bool-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-RegExp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular expression librariy.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.RegExp",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-RegExp.html",
        "fct-type": "module",
        "title": "RegExp"
      },
      "index": {
        "description": "regular expression librariy",
        "hierarchy": "Copilot Library RegExp",
        "module": "Copilot.Library.RegExp",
        "name": "RegExp",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Reg Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-RegExp.html#v:copilotRegexp",
      "description": {
        "fct-module": "Copilot.Library.RegExp",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream t -\u003e SourceName -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-RegExp.html#copilotRegexp",
        "fct-type": "function",
        "title": "copilotRegexp"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library RegExp",
        "module": "Copilot.Library.RegExp",
        "name": "copilotRegexp",
        "normalized": "Stream a-\u003eSourceName-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "Regexp",
        "signature": "Stream t-\u003eSourceName-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-RegExp.html#v:copilotRegexpB",
      "description": {
        "fct-module": "Copilot.Library.RegExp",
        "fct-package": "copilot-libraries",
        "fct-signature": "SourceName -\u003e [(StreamName, Stream Bool)] -\u003e Stream Bool -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-RegExp.html#copilotRegexpB",
        "fct-type": "function",
        "title": "copilotRegexpB"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library RegExp",
        "module": "Copilot.Library.RegExp",
        "name": "copilotRegexpB",
        "normalized": "SourceName-\u003e[(StreamName,Stream Bool)]-\u003eStream Bool-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "Regexp",
        "signature": "SourceName-\u003e[(StreamName,Stream Bool)]-\u003eStream Bool-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Stacks.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStack machine.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.Stacks",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-Stacks.html",
        "fct-type": "module",
        "title": "Stacks"
      },
      "index": {
        "description": "Stack machine",
        "hierarchy": "Copilot Library Stacks",
        "module": "Copilot.Library.Stacks",
        "name": "Stacks",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Stacks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Stacks.html#v:stack",
      "description": {
        "fct-module": "Copilot.Library.Stacks",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e b -\u003e PopSignal -\u003e PushSignal -\u003e PushStream b -\u003e StackTop b",
        "fct-source": "src/Copilot-Library-Stacks.html#stack",
        "fct-type": "function",
        "title": "stack"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Stacks",
        "module": "Copilot.Library.Stacks",
        "name": "stack",
        "normalized": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Stacks.html#v:stack-39-",
      "description": {
        "fct-module": "Copilot.Library.Stacks",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e b -\u003e PopSignal -\u003e PushSignal -\u003e PushStream b -\u003e StackTop b",
        "fct-source": "src/Copilot-Library-Stacks.html#stack%27",
        "fct-type": "function",
        "title": "stack'"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Stacks",
        "module": "Copilot.Library.Stacks",
        "name": "stack'",
        "normalized": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eb-\u003ePopSignal-\u003ePushSignal-\u003ePushStream b-\u003eStackTop b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic bounded statistics.  In the following, a bound \u003ccode\u003en\u003c/code\u003e is given stating\n the number of periods over which to compute the statistic (\u003ccode\u003en == 1\u003c/code\u003e computes\n it only over the current period).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.Statistics",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-Statistics.html",
        "fct-type": "module",
        "title": "Statistics"
      },
      "index": {
        "description": "Basic bounded statistics In the following bound is given stating the number of periods over which to compute the statistic computes it only over the current period",
        "hierarchy": "Copilot Library Statistics",
        "module": "Copilot.Library.Statistics",
        "name": "Statistics",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Statistics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:max",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum value.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Statistics",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Statistics.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "Maximum value",
        "hierarchy": "Copilot Library Statistics",
        "module": "Copilot.Library.Statistics",
        "name": "max",
        "normalized": "Int-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:mean",
      "description": {
        "fct-descr": "\u003cp\u003eMean value.  \u003ccode\u003en\u003c/code\u003e must not overflow\n for word size \u003ccode\u003ea\u003c/code\u003e for streams over which computation is peformed.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Statistics",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Statistics.html#mean",
        "fct-type": "function",
        "title": "mean"
      },
      "index": {
        "description": "Mean value must not overflow for word size for streams over which computation is peformed",
        "hierarchy": "Copilot Library Statistics",
        "module": "Copilot.Library.Statistics",
        "name": "mean",
        "normalized": "Int-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:meanNow",
      "description": {
        "fct-descr": "\u003cp\u003eMean value over the current set of streams passed in.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Statistics",
        "fct-package": "copilot-libraries",
        "fct-signature": "[Stream a] -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Statistics.html#meanNow",
        "fct-type": "function",
        "title": "meanNow"
      },
      "index": {
        "description": "Mean value over the current set of streams passed in",
        "hierarchy": "Copilot Library Statistics",
        "module": "Copilot.Library.Statistics",
        "name": "meanNow",
        "normalized": "[Stream a]-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "Now",
        "signature": "[Stream a]-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:min",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum value.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Statistics",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Statistics.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "Minimum value",
        "hierarchy": "Copilot Library Statistics",
        "module": "Copilot.Library.Statistics",
        "name": "min",
        "normalized": "Int-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Statistics.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eSummation.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Statistics",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Statistics.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Summation",
        "hierarchy": "Copilot Library Statistics",
        "module": "Copilot.Library.Statistics",
        "name": "sum",
        "normalized": "Int-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility bounded-list functions (e.g., folds, scans, etc.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Utility bounded-list functions e.g folds scans etc",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:-33--33-",
      "description": {
        "fct-descr": "\u003cp\u003eIndex.  WARNING: very expensive!  Consider using this only for very short lists.\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "[Stream a] -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Utils.html#%21%21",
        "fct-type": "function",
        "title": "(!!)"
      },
      "index": {
        "description": "Index WARNING very expensive Consider using this only for very short lists",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "(!!) !!",
        "normalized": "[Stream a]-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "[Stream a]-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:case-39-",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "[Stream Bool] -\u003e [Stream a] -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Utils.html#case%27",
        "fct-type": "function",
        "title": "case'"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "case'",
        "normalized": "[Stream Bool]-\u003e[Stream a]-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "[Stream Bool]-\u003e[Stream a]-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:cycle",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "[a] -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Utils.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "cycle",
        "normalized": "[a]-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "[a]-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldl",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream a) -\u003e Stream a -\u003e Stream b -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Utils.html#nfoldl",
        "fct-type": "function",
        "title": "nfoldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nfoldl",
        "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldl1",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Utils.html#nfoldl1",
        "fct-type": "function",
        "title": "nfoldl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nfoldl1",
        "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldr",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream b) -\u003e Stream b -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Copilot-Library-Utils.html#nfoldr",
        "fct-type": "function",
        "title": "nfoldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nfoldr",
        "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003eStream b",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nfoldr1",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Utils.html#nfoldr1",
        "fct-type": "function",
        "title": "nfoldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nfoldr1",
        "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanl",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream a) -\u003e Stream a -\u003e Stream b -\u003e [Stream a]",
        "fct-source": "src/Copilot-Library-Utils.html#nscanl",
        "fct-type": "function",
        "title": "nscanl"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nscanl",
        "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003e[Stream a]",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream a)-\u003eStream a-\u003eStream b-\u003e[Stream a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanl1",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e [Stream a]",
        "fct-source": "src/Copilot-Library-Utils.html#nscanl1",
        "fct-type": "function",
        "title": "nscanl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nscanl1",
        "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanr",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream b -\u003e Stream b) -\u003e Stream b -\u003e Stream a -\u003e [Stream b]",
        "fct-source": "src/Copilot-Library-Utils.html#nscanr",
        "fct-type": "function",
        "title": "nscanr"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nscanr",
        "normalized": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003e[Stream b]",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream b-\u003eStream b)-\u003eStream b-\u003eStream a-\u003e[Stream b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:nscanr1",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Int -\u003e (Stream a -\u003e Stream a -\u003e Stream a) -\u003e Stream a -\u003e [Stream a]",
        "fct-source": "src/Copilot-Library-Utils.html#nscanr1",
        "fct-type": "function",
        "title": "nscanr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "nscanr1",
        "normalized": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Int-\u003e(Stream a-\u003eStream a-\u003eStream a)-\u003eStream a-\u003e[Stream a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:tails",
      "description": {
        "fct-descr": "\u003cp\u003efunctions similar to the Prelude functions on lists\n\u003c/p\u003e",
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "Stream a -\u003e [Stream a]",
        "fct-source": "src/Copilot-Library-Utils.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "functions similar to the Prelude functions on lists",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "tails",
        "normalized": "Stream a-\u003e[Stream a]",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "Stream a-\u003e[Stream a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Utils.html#v:take",
      "description": {
        "fct-module": "Copilot.Library.Utils",
        "fct-package": "copilot-libraries",
        "fct-signature": "a -\u003e Stream b -\u003e [Stream b]",
        "fct-source": "src/Copilot-Library-Utils.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Utils",
        "module": "Copilot.Library.Utils",
        "name": "take",
        "normalized": "a-\u003eStream b-\u003e[Stream b]",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "a-\u003eStream b-\u003e[Stream b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Voting.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the Boyer-Moore Majority Vote Algorithm for Copilot.\n\u003c/p\u003e\u003cp\u003eFor details of the Boyer-Moore Majority Vote Algorithm see the following\n papers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Wim H. Hesselink,\n \"The Boyer-Moore Majority Vote Algorithm\", 2005\n\u003c/li\u003e\u003cli\u003e Robert S. Boyer and J Strother Moore,\n \"MJRTY - A Fast Majority Vote Algorithm\", 1982\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Copilot.Library.Voting",
        "fct-package": "copilot-libraries",
        "fct-signature": "module",
        "fct-source": "src/Copilot-Library-Voting.html",
        "fct-type": "module",
        "title": "Voting"
      },
      "index": {
        "description": "An implementation of the Boyer-Moore Majority Vote Algorithm for Copilot For details of the Boyer-Moore Majority Vote Algorithm see the following papers Wim Hesselink The Boyer-Moore Majority Vote Algorithm Robert Boyer and Strother Moore MJRTY Fast Majority Vote Algorithm",
        "hierarchy": "Copilot Library Voting",
        "module": "Copilot.Library.Voting",
        "name": "Voting",
        "normalized": "",
        "package": "copilot-libraries",
        "partial": "Voting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Voting.html#v:aMajority",
      "description": {
        "fct-module": "Copilot.Library.Voting",
        "fct-package": "copilot-libraries",
        "fct-signature": "[Stream a] -\u003e Stream a -\u003e Stream Bool",
        "fct-source": "src/Copilot-Library-Voting.html#aMajority",
        "fct-type": "function",
        "title": "aMajority"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Voting",
        "module": "Copilot.Library.Voting",
        "name": "aMajority",
        "normalized": "[Stream a]-\u003eStream a-\u003eStream Bool",
        "package": "copilot-libraries",
        "partial": "Majority",
        "signature": "[Stream a]-\u003eStream a-\u003eStream Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/copilot-libraries/docs/Copilot-Library-Voting.html#v:majority",
      "description": {
        "fct-module": "Copilot.Library.Voting",
        "fct-package": "copilot-libraries",
        "fct-signature": "[Stream a] -\u003e Stream a",
        "fct-source": "src/Copilot-Library-Voting.html#majority",
        "fct-type": "function",
        "title": "majority"
      },
      "index": {
        "description": "",
        "hierarchy": "Copilot Library Voting",
        "module": "Copilot.Library.Voting",
        "name": "majority",
        "normalized": "[Stream a]-\u003eStream a",
        "package": "copilot-libraries",
        "partial": "",
        "signature": "[Stream a]-\u003eStream a"
      }
    }
  }
]