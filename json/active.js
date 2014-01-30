[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInspired by the work of Kevin Matlage and Andy Gill (\u003cem\u003eEvery\u003c/em\u003e\n \u003cem\u003eAnimation Should Have a Beginning, a Middle, and an End\u003c/em\u003e, Trends\n in Functional Programming,\n 2010. \u003ca\u003ehttp://ittc.ku.edu/csdl/fpg/node/46\u003c/a\u003e), this module defines a\n simple abstraction for working with time-varying values.  A value\n of type \u003ccode\u003eActive a\u003c/code\u003e is either a constant value of type \u003ccode\u003ea\u003c/code\u003e, or a\n time-varying value of type \u003ccode\u003ea\u003c/code\u003e (\u003cem\u003ei.e.\u003c/em\u003e a function from time to\n \u003ccode\u003ea\u003c/code\u003e) with specific start and end times.  Since active values\n have start and end times, they can be aligned, sequenced,\n stretched, or reversed.\n\u003c/p\u003e\u003cp\u003eIn a sense, this is sort of like a stripped-down version of\n functional reactive programming (FRP), without the reactivity.\n\u003c/p\u003e\u003cp\u003eThe original motivating use for this library is to support making\n animations with the diagrams framework\n (\u003ca\u003ehttp://projects.haskell.org/diagrams\u003c/a\u003e), but the hope is that it\n may find more general utility.\n\u003c/p\u003e\u003cp\u003eThere are two basic ways to create an \u003ccode\u003eActive\u003c/code\u003e value.  The first is\n to use \u003ccode\u003e\u003ca\u003emkActive\u003c/a\u003e\u003c/code\u003e to create one directly, by specifying a start and\n end time and a function of time.  More indirectly, one can use the\n \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance together with the unit interval \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e, which\n takes on values from the unit interval from time 0 to time 1, or\n \u003ccode\u003e\u003ca\u003einterval\u003c/a\u003e\u003c/code\u003e, which creates an active over an arbitrary interval.\n\u003c/p\u003e\u003cp\u003eFor example, to create a value of type \u003ccode\u003eActive Double\u003c/code\u003e which\n represents one period of a sine wave starting at time 0 and ending\n at time 1, we could write\n\u003c/p\u003e\u003cpre\u003e mkActive 0 1 (\\t -\u003e sin (fromTime t * tau))\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e (sin . (*tau)) \u003c$\u003e ui\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e can also be used to create \u003ccode\u003eActive\u003c/code\u003e values which are\n constant and have no start or end time.  For example,\n\u003c/p\u003e\u003cpre\u003e mod \u003c$\u003e (floor \u003c$\u003e interval 0 100) \u003c*\u003e pure 7\n\u003c/pre\u003e\u003cp\u003ecycles repeatedly through the numbers 0-6.\n\u003c/p\u003e\u003cp\u003eNote that the \"idiom bracket\" notation supported by the SHE\n preprocessor (\u003ca\u003ehttp://personal.cis.strath.ac.uk/~conor/pub/she/\u003c/a\u003e,\n \u003ca\u003ehttp://hackage.haskell.org/package/she\u003c/a\u003e) can make for somewhat\n more readable \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e code.  For example, the above example\n can be rewritten using SHE as\n\u003c/p\u003e\u003cpre\u003e {-# OPTIONS_GHC -F -pgmF she #-}\n\n ... (| mod (| floor (interval 0 100) |) ~7 |)\n\u003c/pre\u003e\u003cp\u003eThere are many functions for transforming and composing active\n values; see the documentation below for more details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "module",
        "fct-source": "src/Data-Active.html",
        "fct-type": "module",
        "title": "Active"
      },
      "index": {
        "description": "Inspired by the work of Kevin Matlage and Andy Gill Every Animation Should Have Beginning Middle and an End Trends in Functional Programming http ittc.ku.edu csdl fpg node this module defines simple abstraction for working with time-varying values value of type Active is either constant value of type or time-varying value of type i.e function from time to with specific start and end times Since active values have start and end times they can be aligned sequenced stretched or reversed In sense this is sort of like stripped-down version of functional reactive programming FRP without the reactivity The original motivating use for this library is to support making animations with the diagrams framework http projects.haskell.org diagrams but the hope is that it may find more general utility There are two basic ways to create an Active value The first is to use mkActive to create one directly by specifying start and end time and function of time More indirectly one can use the Applicative instance together with the unit interval ui which takes on values from the unit interval from time to time or interval which creates an active over an arbitrary interval For example to create value of type Active Double which represents one period of sine wave starting at time and ending at time we could write mkActive sin fromTime tau or sin tau ui pure can also be used to create Active values which are constant and have no start or end time For example mod floor interval pure cycles repeatedly through the numbers Note that the idiom bracket notation supported by the SHE preprocessor http personal.cis.strath.ac.uk conor pub she http hackage.haskell.org package she can make for somewhat more readable Applicative code For example the above example can be rewritten using SHE as OPTIONS GHC pgmF she mod floor interval There are many functions for transforming and composing active values see the documentation below for more details",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Active",
        "normalized": "",
        "package": "active",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#t:Active",
      "description": {
        "fct-descr": "\u003cp\u003eThere are two types of \u003ccode\u003eActive\u003c/code\u003e values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e can simply be a \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e, that is, a time-varying\n     value with start and end times.\n\u003c/li\u003e\u003cli\u003e An \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value can also be a constant: a single value,\n     constant across time, with no start and end times.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe addition of constant values enable \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e\n   instances for \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "data",
        "fct-source": "src/Data-Active.html#Active",
        "fct-type": "data",
        "title": "Active"
      },
      "index": {
        "description": "There are two types of Active values An Active can simply be Dynamic that is time-varying value with start and end times An Active value can also be constant single value constant across time with no start and end times The addition of constant values enable Monoid and Applicative instances for Active",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Active",
        "normalized": "",
        "package": "active",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#t:Duration",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract type representing \u003cem\u003eelapsed time\u003c/em\u003e between two points\n   in time.  Note that durations can be negative. Literal numeric\n   values may be used as \u003ccode\u003eDuration\u003c/code\u003es thanks to the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e instances. \u003ccode\u003e\u003ca\u003etoDuration\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromDuration\u003c/a\u003e\u003c/code\u003e are also\n   provided for convenience in converting between \u003ccode\u003eDuration\u003c/code\u003es and\n   other numeric types.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "data",
        "fct-source": "src/Data-Active.html#Duration",
        "fct-type": "data",
        "title": "Duration"
      },
      "index": {
        "description": "An abstract type representing elapsed time between two points in time Note that durations can be negative Literal numeric values may be used as Duration thanks to the Num and Fractional instances toDuration and fromDuration are also provided for convenience in converting between Duration and other numeric types",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Duration",
        "normalized": "",
        "package": "active",
        "partial": "Duration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#t:Dynamic",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDynamic a\u003c/code\u003e can be thought of as an \u003ccode\u003ea\u003c/code\u003e value that changes over\n   the course of a particular \u003ccode\u003e\u003ca\u003eEra\u003c/a\u003e\u003c/code\u003e.  It's envisioned that \u003ccode\u003eDynamic\u003c/code\u003e\n   will be mostly an internal implementation detail and that\n   \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e will be most commonly used.  But you never know what\n   uses people might find for things.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "data",
        "fct-source": "src/Data-Active.html#Dynamic",
        "fct-type": "data",
        "title": "Dynamic"
      },
      "index": {
        "description": "Dynamic can be thought of as an value that changes over the course of particular Era It envisioned that Dynamic will be mostly an internal implementation detail and that Active will be most commonly used But you never know what uses people might find for things",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Dynamic",
        "normalized": "",
        "package": "active",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#t:Era",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eEra\u003c/code\u003e is a concrete span of time, that is, a pair of times\n   representing the start and end of the era. \u003ccode\u003eEra\u003c/code\u003es form a\n   semigroup: the combination of two \u003ccode\u003eEra\u003c/code\u003es is the smallest \u003ccode\u003eEra\u003c/code\u003e\n   which contains both.  They do not form a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, since there is\n   no \u003ccode\u003eEra\u003c/code\u003e which acts as the identity with respect to this\n   combining operation.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eEra\u003c/code\u003e is abstract. To construct \u003ccode\u003eEra\u003c/code\u003e values, use \u003ccode\u003e\u003ca\u003emkEra\u003c/a\u003e\u003c/code\u003e; to\n   deconstruct, use \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "data",
        "fct-source": "src/Data-Active.html#Era",
        "fct-type": "data",
        "title": "Era"
      },
      "index": {
        "description": "An Era is concrete span of time that is pair of times representing the start and end of the era Era form semigroup the combination of two Era is the smallest Era which contains both They do not form Monoid since there is no Era which acts as the identity with respect to this combining operation Era is abstract To construct Era values use mkEra to deconstruct use start and end",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Era",
        "normalized": "",
        "package": "active",
        "partial": "Era",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract type for representing \u003cem\u003epoints in time\u003c/em\u003e.  Note that\n   literal numeric values may be used as \u003ccode\u003eTime\u003c/code\u003es, thanks to the the\n   \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e instances.  \u003ccode\u003e\u003ca\u003etoTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromTime\u003c/a\u003e\u003c/code\u003e are\n   also provided for convenience in converting between \u003ccode\u003eTime\u003c/code\u003e and\n   other numeric types.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "data",
        "fct-source": "src/Data-Active.html#Time",
        "fct-type": "data",
        "title": "Time"
      },
      "index": {
        "description": "An abstract type for representing points in time Note that literal numeric values may be used as Time thanks to the the Num and Fractional instances toTime and fromTime are also provided for convenience in converting between Time and other numeric types",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Time",
        "normalized": "",
        "package": "active",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:-124--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\"Splice\" two \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e values together: shift the second to\n   start immediately after the first (using \u003ccode\u003e\u003ca\u003eafter\u003c/a\u003e\u003c/code\u003e), and produce\n   the value which acts like the first up to the common end/start\n   point, then like the second after that.  If both are constant,\n   return the first.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#%7C%3E%3E",
        "fct-type": "function",
        "title": "(|\u003e\u003e)"
      },
      "index": {
        "description": "Splice two Active values together shift the second to start immediately after the first using after and produce the value which acts like the first up to the common end start point then like the second after that If both are constant return the first",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "(|\u003e\u003e) |\u003e\u003e",
        "normalized": "Active a-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:-45--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence/overlay two \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e values: shift the second to start\n   immediately after the first (using \u003ccode\u003e\u003ca\u003eafter\u003c/a\u003e\u003c/code\u003e), then compose them\n   (using \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#-%3E%3E",
        "fct-type": "function",
        "title": "(-\u003e\u003e)"
      },
      "index": {
        "description": "Sequence overlay two Active values shift the second to start immediately after the first using after then compose them using",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "(-\u003e\u003e) -\u003e\u003e",
        "normalized": "Active a-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:Dynamic",
      "description": {
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Dynamic",
        "fct-source": "src/Data-Active.html#Dynamic",
        "fct-type": "function",
        "title": "Dynamic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "Dynamic",
        "normalized": "",
        "package": "active",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:activeEnd",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of an \u003ccode\u003eActive a\u003c/code\u003e at the end of its era.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e a",
        "fct-source": "src/Data-Active.html#activeEnd",
        "fct-type": "function",
        "title": "activeEnd"
      },
      "index": {
        "description": "Get the value of an Active at the end of its era",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "activeEnd",
        "normalized": "Active a-\u003ea",
        "package": "active",
        "partial": "End",
        "signature": "Active a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:activeEra",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eEra\u003c/a\u003e\u003c/code\u003e of an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value (or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is\n   a constant/pure value).\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Maybe Era",
        "fct-source": "src/Data-Active.html#activeEra",
        "fct-type": "function",
        "title": "activeEra"
      },
      "index": {
        "description": "Get the Era of an Active value or Nothing if it is constant pure value",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "activeEra",
        "normalized": "Active a-\u003eMaybe Era",
        "package": "active",
        "partial": "Era",
        "signature": "Active a-\u003eMaybe Era"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:activeStart",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of an \u003ccode\u003eActive a\u003c/code\u003e at the beginning of its era.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e a",
        "fct-source": "src/Data-Active.html#activeStart",
        "fct-type": "function",
        "title": "activeStart"
      },
      "index": {
        "description": "Get the value of an Active at the beginning of its era",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "activeStart",
        "normalized": "Active a-\u003ea",
        "package": "active",
        "partial": "Start",
        "signature": "Active a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:after",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea1 `after` a2\u003c/code\u003e produces an active that behaves like \u003ccode\u003ea1\u003c/code\u003e but is\n   shifted to start at the end time of \u003ccode\u003ea2\u003c/code\u003e.  If either \u003ccode\u003ea1\u003c/code\u003e or \u003ccode\u003ea2\u003c/code\u003e\n   are constant, \u003ccode\u003ea1\u003c/code\u003e is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#after",
        "fct-type": "function",
        "title": "after"
      },
      "index": {
        "description": "a1 after a2 produces an active that behaves like a1 but is shifted to start at the end time of a2 If either a1 or a2 are constant a1 is returned unchanged",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "after",
        "normalized": "Active a-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:atTime",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eatTime t a\u003c/code\u003e is an active value with the same behavior as \u003ccode\u003ea\u003c/code\u003e,\n   shifted so that it starts at time \u003ccode\u003et\u003c/code\u003e.  If \u003ccode\u003ea\u003c/code\u003e is constant it is\n   returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#atTime",
        "fct-type": "function",
        "title": "atTime"
      },
      "index": {
        "description": "atTime is an active value with the same behavior as shifted so that it starts at time If is constant it is returned unchanged",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "atTime",
        "normalized": "Time-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "Time",
        "signature": "Time-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:backwards",
      "description": {
        "fct-descr": "\u003cp\u003eReverse an active value so the start of its era gets mapped to\n   the end and vice versa.  For example, \u003ccode\u003ebackwards \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be\n   visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/backwards.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#backwards",
        "fct-type": "function",
        "title": "backwards"
      },
      "index": {
        "description": "Reverse an active value so the start of its era gets mapped to the end and vice versa For example backwards ui can be visualized as",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "backwards",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:clamp",
      "description": {
        "fct-descr": "\u003cp\u003e\"Clamp\" an active value so that it is constant before and after\n   its era.  Before the era, \u003ccode\u003eclamp a\u003c/code\u003e takes on the value of \u003ccode\u003ea\u003c/code\u003e at\n   the start of the era.  Likewise, after the era, \u003ccode\u003eclamp a\u003c/code\u003e takes\n   on the value of \u003ccode\u003ea\u003c/code\u003e at the end of the era. \u003ccode\u003eclamp\u003c/code\u003e has no effect\n   on constant values.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003eclamp \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/clamp.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eclampBefore\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eclampAfter\u003c/a\u003e\u003c/code\u003e, which clamp only before\n   or after the era, respectively.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#clamp",
        "fct-type": "function",
        "title": "clamp"
      },
      "index": {
        "description": "Clamp an active value so that it is constant before and after its era Before the era clamp takes on the value of at the start of the era Likewise after the era clamp takes on the value of at the end of the era clamp has no effect on constant values For example clamp ui can be visualized as See also clampBefore and clampAfter which clamp only before or after the era respectively",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "clamp",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:clampAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\"Clamp\" an active value so that it is constant after the end\n   of its era.  For example, \u003ccode\u003eclampBefore \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/clampAfter.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eSee the documentation of \u003ccode\u003e\u003ca\u003eclamp\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#clampAfter",
        "fct-type": "function",
        "title": "clampAfter"
      },
      "index": {
        "description": "Clamp an active value so that it is constant after the end of its era For example clampBefore ui can be visualized as See the documentation of clamp for more information",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "clampAfter",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "After",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:clampBefore",
      "description": {
        "fct-descr": "\u003cp\u003e\"Clamp\" an active value so that it is constant before the start\n   of its era. For example, \u003ccode\u003eclampBefore \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/clampBefore.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eSee the documentation of \u003ccode\u003e\u003ca\u003eclamp\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#clampBefore",
        "fct-type": "function",
        "title": "clampBefore"
      },
      "index": {
        "description": "Clamp an active value so that it is constant before the start of its era For example clampBefore ui can be visualized as See the documentation of clamp for more information",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "clampBefore",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "Before",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:discrete",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003eActive\u003c/code\u003e which takes on each value in the given list in\n   turn during the time \u003ccode\u003e[0,1]\u003c/code\u003e, with each value getting an equal\n   amount of time.  In other words, \u003ccode\u003ediscrete\u003c/code\u003e creates a \"slide\n   show\" that starts at time 0 and ends at time 1.  The first\n   element is used prior to time 0, and the last element is used\n   after time 1.\n\u003c/p\u003e\u003cp\u003eIt is an error to call \u003ccode\u003ediscrete\u003c/code\u003e on the empty list.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "[a] -\u003e Active a",
        "fct-source": "src/Data-Active.html#discrete",
        "fct-type": "function",
        "title": "discrete"
      },
      "index": {
        "description": "Create an Active which takes on each value in the given list in turn during the time with each value getting an equal amount of time In other words discrete creates slide show that starts at time and ends at time The first element is used prior to time and the last element is used after time It is an error to call discrete on the empty list",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "discrete",
        "normalized": "[a]-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "[a]-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:duration",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the \u003ccode\u003e\u003ca\u003eDuration\u003c/a\u003e\u003c/code\u003e of an \u003ccode\u003e\u003ca\u003eEra\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Era -\u003e Duration",
        "fct-source": "src/Data-Active.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "Compute the Duration of an Era",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "duration",
        "normalized": "Era-\u003eDuration",
        "package": "active",
        "partial": "",
        "signature": "Era-\u003eDuration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:during",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea1 `during` a2\u003c/code\u003e \u003ccode\u003e\u003ca\u003estretch\u003c/a\u003e\u003c/code\u003ees and \u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003es \u003ccode\u003ea1\u003c/code\u003e so that it has the\n   same era as \u003ccode\u003ea2\u003c/code\u003e.  Has no effect if either of \u003ccode\u003ea1\u003c/code\u003e or \u003ccode\u003ea2\u003c/code\u003e are constant.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#during",
        "fct-type": "function",
        "title": "during"
      },
      "index": {
        "description": "a1 during a2 stretch es and shift a1 so that it has the same era as a2 Has no effect if either of a1 or a2 are constant",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "during",
        "normalized": "Active a-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:end",
      "description": {
        "fct-descr": "\u003cp\u003eGet the end \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e of an \u003ccode\u003e\u003ca\u003eEra\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Era -\u003e Time",
        "fct-source": "src/Data-Active.html#end",
        "fct-type": "function",
        "title": "end"
      },
      "index": {
        "description": "Get the end Time of an Era",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "end",
        "normalized": "Era-\u003eTime",
        "package": "active",
        "partial": "",
        "signature": "Era-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:era",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Era",
        "fct-source": "src/Data-Active.html#Dynamic",
        "fct-type": "function",
        "title": "era"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "era",
        "normalized": "",
        "package": "active",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:fromDuration",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDuration\u003c/a\u003e\u003c/code\u003e to any other \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e type (such as\n   \u003ccode\u003eRational\u003c/code\u003e, \u003ccode\u003eFloat\u003c/code\u003e, or \u003ccode\u003eDouble\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Duration -\u003e a",
        "fct-source": "src/Data-Active.html#fromDuration",
        "fct-type": "function",
        "title": "fromDuration"
      },
      "index": {
        "description": "Convert Duration to any other Fractional type such as Rational Float or Double",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "fromDuration",
        "normalized": "Duration-\u003ea",
        "package": "active",
        "partial": "Duration",
        "signature": "Duration-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:fromDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value from a \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Dynamic a -\u003e Active a",
        "fct-source": "src/Data-Active.html#fromDynamic",
        "fct-type": "function",
        "title": "fromDynamic"
      },
      "index": {
        "description": "Create an Active value from Dynamic",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "fromDynamic",
        "normalized": "Dynamic a-\u003eActive a",
        "package": "active",
        "partial": "Dynamic",
        "signature": "Dynamic a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:fromTime",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e to a value of any \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e type (such as\n   \u003ccode\u003eRational\u003c/code\u003e, \u003ccode\u003eFloat\u003c/code\u003e, or \u003ccode\u003eDouble\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e a",
        "fct-source": "src/Data-Active.html#fromTime",
        "fct-type": "function",
        "title": "fromTime"
      },
      "index": {
        "description": "Convert Time to value of any Fractional type such as Rational Float or Double",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "fromTime",
        "normalized": "Time-\u003ea",
        "package": "active",
        "partial": "Time",
        "signature": "Time-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:interval",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einterval a b\u003c/code\u003e is an active value starting at time \u003ccode\u003ea\u003c/code\u003e, ending at\n   time \u003ccode\u003eb\u003c/code\u003e, and taking the value \u003ccode\u003et\u003c/code\u003e at time \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e Time -\u003e Active a",
        "fct-source": "src/Data-Active.html#interval",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "interval is an active value starting at time ending at time and taking the value at time",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "interval",
        "normalized": "Time-\u003eTime-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Time-\u003eTime-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:isConstant",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value is constant.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Bool",
        "fct-source": "src/Data-Active.html#isConstant",
        "fct-type": "function",
        "title": "isConstant"
      },
      "index": {
        "description": "Test whether an Active value is constant",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "isConstant",
        "normalized": "Active a-\u003eBool",
        "package": "active",
        "partial": "Constant",
        "signature": "Active a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:isDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Bool",
        "fct-source": "src/Data-Active.html#isDynamic",
        "fct-type": "function",
        "title": "isDynamic"
      },
      "index": {
        "description": "Test whether an Active value is Dynamic",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "isDynamic",
        "normalized": "Active a-\u003eBool",
        "package": "active",
        "partial": "Dynamic",
        "signature": "Active a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:mkActive",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a dynamic \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e from a start time, an end time, and a\n   time-varying value.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e Time -\u003e (Time -\u003e a) -\u003e Active a",
        "fct-source": "src/Data-Active.html#mkActive",
        "fct-type": "function",
        "title": "mkActive"
      },
      "index": {
        "description": "Create dynamic Active from start time an end time and time-varying value",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "mkActive",
        "normalized": "Time-\u003eTime-\u003e(Time-\u003ea)-\u003eActive a",
        "package": "active",
        "partial": "Active",
        "signature": "Time-\u003eTime-\u003e(Time-\u003ea)-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:mkDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e from a start time, an end time, and a\n   time-varying value.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e Time -\u003e (Time -\u003e a) -\u003e Dynamic a",
        "fct-source": "src/Data-Active.html#mkDynamic",
        "fct-type": "function",
        "title": "mkDynamic"
      },
      "index": {
        "description": "Create Dynamic from start time an end time and time-varying value",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "mkDynamic",
        "normalized": "Time-\u003eTime-\u003e(Time-\u003ea)-\u003eDynamic a",
        "package": "active",
        "partial": "Dynamic",
        "signature": "Time-\u003eTime-\u003e(Time-\u003ea)-\u003eDynamic a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:mkEra",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEra\u003c/a\u003e\u003c/code\u003e by specifying start and end \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e Time -\u003e Era",
        "fct-source": "src/Data-Active.html#mkEra",
        "fct-type": "function",
        "title": "mkEra"
      },
      "index": {
        "description": "Create an Era by specifying start and end Time",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "mkEra",
        "normalized": "Time-\u003eTime-\u003eEra",
        "package": "active",
        "partial": "Era",
        "signature": "Time-\u003eTime-\u003eEra"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:modActive",
      "description": {
        "fct-descr": "\u003cp\u003eModify an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value using a case analysis to see whether it\n   is constant or dynamic.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "(a -\u003e b) -\u003e (Dynamic a -\u003e Dynamic b) -\u003e Active a -\u003e Active b",
        "fct-source": "src/Data-Active.html#modActive",
        "fct-type": "function",
        "title": "modActive"
      },
      "index": {
        "description": "Modify an Active value using case analysis to see whether it is constant or dynamic",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "modActive",
        "normalized": "(a-\u003eb)-\u003e(Dynamic a-\u003eDynamic b)-\u003eActive a-\u003eActive b",
        "package": "active",
        "partial": "Active",
        "signature": "(a-\u003eb)-\u003e(Dynamic a-\u003eDynamic b)-\u003eActive a-\u003eActive b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:movie",
      "description": {
        "fct-descr": "\u003cp\u003eSplice together a list of active values using \u003ccode\u003e\u003ca\u003e|\u003e\u003e\u003c/a\u003e\u003c/code\u003e.  The list\n   must be nonempty.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "[Active a] -\u003e Active a",
        "fct-source": "src/Data-Active.html#movie",
        "fct-type": "function",
        "title": "movie"
      },
      "index": {
        "description": "Splice together list of active values using The list must be nonempty",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "movie",
        "normalized": "[Active a]-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "[Active a]-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:onActive",
      "description": {
        "fct-descr": "\u003cp\u003eFold for \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003es.  Process an 'Active a', given a function to\n   apply if it is a pure (constant) value, and a function to apply if\n   it is a \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "(a -\u003e b) -\u003e (Dynamic a -\u003e b) -\u003e Active a -\u003e b",
        "fct-source": "src/Data-Active.html#onActive",
        "fct-type": "function",
        "title": "onActive"
      },
      "index": {
        "description": "Fold for Active Process an Active given function to apply if it is pure constant value and function to apply if it is Dynamic",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "onActive",
        "normalized": "(a-\u003eb)-\u003e(Dynamic a-\u003eb)-\u003eActive a-\u003eb",
        "package": "active",
        "partial": "Active",
        "signature": "(a-\u003eb)-\u003e(Dynamic a-\u003eb)-\u003eActive a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:onDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eFold for \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "(Time -\u003e Time -\u003e (Time -\u003e a) -\u003e b) -\u003e Dynamic a -\u003e b",
        "fct-source": "src/Data-Active.html#onDynamic",
        "fct-type": "function",
        "title": "onDynamic"
      },
      "index": {
        "description": "Fold for Dynamic",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "onDynamic",
        "normalized": "(Time-\u003eTime-\u003e(Time-\u003ea)-\u003eb)-\u003eDynamic a-\u003eb",
        "package": "active",
        "partial": "Dynamic",
        "signature": "(Time-\u003eTime-\u003e(Time-\u003ea)-\u003eb)-\u003eDynamic a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:runActive",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value as a function from time.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Time -\u003e a",
        "fct-source": "src/Data-Active.html#runActive",
        "fct-type": "function",
        "title": "runActive"
      },
      "index": {
        "description": "Interpret an Active value as function from time",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "runActive",
        "normalized": "Active a-\u003eTime-\u003ea",
        "package": "active",
        "partial": "Active",
        "signature": "Active a-\u003eTime-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:runDynamic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e a",
        "fct-source": "src/Data-Active.html#Dynamic",
        "fct-type": "function",
        "title": "runDynamic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "runDynamic",
        "normalized": "Time-\u003ea",
        "package": "active",
        "partial": "Dynamic",
        "signature": "Time-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:setEra",
      "description": {
        "fct-descr": "\u003cp\u003eSet the era of an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value.  Note that this will change a\n   constant \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e into a dynamic one which happens to have the\n   same value at all times.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Era -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#setEra",
        "fct-type": "function",
        "title": "setEra"
      },
      "index": {
        "description": "Set the era of an Active value Note that this will change constant Active into dynamic one which happens to have the same value at all times",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "setEra",
        "normalized": "Era-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "Era",
        "signature": "Era-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:shift",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eshift d act\u003c/code\u003e shifts the start time of \u003ccode\u003eact\u003c/code\u003e by duration \u003ccode\u003ed\u003c/code\u003e.\n   Has no effect on constant values.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Duration -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "shift act shifts the start time of act by duration Has no effect on constant values",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "shift",
        "normalized": "Duration-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Duration-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:shiftDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eShift a \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e value by a certain duration.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Duration -\u003e Dynamic a -\u003e Dynamic a",
        "fct-source": "src/Data-Active.html#shiftDynamic",
        "fct-type": "function",
        "title": "shiftDynamic"
      },
      "index": {
        "description": "Shift Dynamic value by certain duration",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "shiftDynamic",
        "normalized": "Duration-\u003eDynamic a-\u003eDynamic a",
        "package": "active",
        "partial": "Dynamic",
        "signature": "Duration-\u003eDynamic a-\u003eDynamic a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esimulate r act\u003c/code\u003e simulates the \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value \u003ccode\u003eact\u003c/code\u003e, returning a\n   list of \"snapshots\" taken at regular intervals from the start\n   time to the end time.  The interval used is determined by the\n   rate \u003ccode\u003er\u003c/code\u003e, which denotes the \"frame rate\", that is, the number\n   of snapshots per unit time.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value is constant (and thus has no start or end\n   times), a list of length 1 is returned, containing the constant\n   value.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Rational -\u003e Active a -\u003e [a]",
        "fct-source": "src/Data-Active.html#simulate",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "simulate act simulates the Active value act returning list of snapshots taken at regular intervals from the start time to the end time The interval used is determined by the rate which denotes the frame rate that is the number of snapshots per unit time If the Active value is constant and thus has no start or end times list of length is returned containing the constant value",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "simulate",
        "normalized": "Rational-\u003eActive a-\u003e[a]",
        "package": "active",
        "partial": "",
        "signature": "Rational-\u003eActive a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \"snapshot\" of an active value at a particular time,\n   resulting in a constant value.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Time -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Take snapshot of an active value at particular time resulting in constant value",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "snapshot",
        "normalized": "Time-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Time-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003eGet the start \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e of an \u003ccode\u003e\u003ca\u003eEra\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Era -\u003e Time",
        "fct-source": "src/Data-Active.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "Get the start Time of an Era",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "start",
        "normalized": "Era-\u003eTime",
        "package": "active",
        "partial": "",
        "signature": "Era-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:stretch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estretch s act\u003c/code\u003e \"stretches\" the active \u003ccode\u003eact\u003c/code\u003e so that it takes\n   \u003ccode\u003es\u003c/code\u003e times as long (retaining the same start time).\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Rational -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#stretch",
        "fct-type": "function",
        "title": "stretch"
      },
      "index": {
        "description": "stretch act stretches the active act so that it takes times as long retaining the same start time",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "stretch",
        "normalized": "Rational-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Rational-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:stretchTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estretchTo d\u003c/code\u003e \u003ccode\u003e\u003ca\u003estretch\u003c/a\u003e\u003c/code\u003ees an \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e so it has duration \u003ccode\u003ed\u003c/code\u003e.\n   Has no effect if (1) \u003ccode\u003ed\u003c/code\u003e is non-positive, or (2) the \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e\n   value is constant, or (3) the \u003ccode\u003e\u003ca\u003eActive\u003c/a\u003e\u003c/code\u003e value has zero duration.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Duration -\u003e Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#stretchTo",
        "fct-type": "function",
        "title": "stretchTo"
      },
      "index": {
        "description": "stretchTo stretch es an Active so it has duration Has no effect if is non-positive or the Active value is constant or the Active value has zero duration",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "stretchTo",
        "normalized": "Duration-\u003eActive a-\u003eActive a",
        "package": "active",
        "partial": "To",
        "signature": "Duration-\u003eActive a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:toDuration",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any value of a \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e type (including \u003ccode\u003eInt\u003c/code\u003e, \u003ccode\u003eInteger\u003c/code\u003e,\n   \u003ccode\u003eRational\u003c/code\u003e, \u003ccode\u003eFloat\u003c/code\u003e, and \u003ccode\u003eDouble\u003c/code\u003e) to a \u003ccode\u003e\u003ca\u003eDuration\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "a -\u003e Duration",
        "fct-source": "src/Data-Active.html#toDuration",
        "fct-type": "function",
        "title": "toDuration"
      },
      "index": {
        "description": "Convert any value of Real type including Int Integer Rational Float and Double to Duration",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "toDuration",
        "normalized": "a-\u003eDuration",
        "package": "active",
        "partial": "Duration",
        "signature": "a-\u003eDuration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:toTime",
      "description": {
        "fct-descr": "\u003cp\u003eConvert any value of a \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e type (including \u003ccode\u003eInt\u003c/code\u003e, \u003ccode\u003eInteger\u003c/code\u003e,\n   \u003ccode\u003eRational\u003c/code\u003e, \u003ccode\u003eFloat\u003c/code\u003e, and \u003ccode\u003eDouble\u003c/code\u003e) to a \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "a -\u003e Time",
        "fct-source": "src/Data-Active.html#toTime",
        "fct-type": "function",
        "title": "toTime"
      },
      "index": {
        "description": "Convert any value of Real type including Int Integer Rational Float and Double to Time",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "toTime",
        "normalized": "a-\u003eTime",
        "package": "active",
        "partial": "Time",
        "signature": "a-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003e\"Trim\" an active value so that it is empty outside its era.\n   \u003ccode\u003etrim\u003c/code\u003e has no effect on constant values.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003etrim \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/trim.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eActually, \u003ccode\u003etrim ui\u003c/code\u003e is not well-typed, since it is not guaranteed\n   that \u003ccode\u003eui\u003c/code\u003e's values will be monoidal (and usually they won't be)!\n   But the above image still provides a good intuitive idea of what\n   \u003ccode\u003etrim\u003c/code\u003e is doing. To make this precise we could consider something\n   like \u003ccode\u003etrim (First . Just \u003ca\u003e$\u003c/a\u003e ui)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003etrimBefore\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003etrimActive\u003c/code\u003e, which trim only before or\n   after the era, respectively.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Trim an active value so that it is empty outside its era trim has no effect on constant values For example trim ui can be visualized as Actually trim ui is not well-typed since it is not guaranteed that ui values will be monoidal and usually they won be But the above image still provides good intuitive idea of what trim is doing To make this precise we could consider something like trim First Just ui See also trimBefore and trimActive which trim only before or after the era respectively",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "trim",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:trimAfter",
      "description": {
        "fct-descr": "\u003cp\u003e\"Trim\" an active value so that it is empty \u003cem\u003eafter\u003c/em\u003e the end\n   of its era.  For example, \u003ccode\u003etrimAfter \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/trimAfter.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eSee the documentation of \u003ccode\u003e\u003ca\u003etrim\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#trimAfter",
        "fct-type": "function",
        "title": "trimAfter"
      },
      "index": {
        "description": "Trim an active value so that it is empty after the end of its era For example trimAfter ui can be visualized as See the documentation of trim for more details",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "trimAfter",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "After",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:trimBefore",
      "description": {
        "fct-descr": "\u003cp\u003e\"Trim\" an active value so that it is empty \u003cem\u003ebefore\u003c/em\u003e the start\n   of its era. For example, \u003ccode\u003etrimBefore \u003ccode\u003e\u003ca\u003eui\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e can be visualized as\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/trimBefore.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eSee the documentation of \u003ccode\u003e\u003ca\u003etrim\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a -\u003e Active a",
        "fct-source": "src/Data-Active.html#trimBefore",
        "fct-type": "function",
        "title": "trimBefore"
      },
      "index": {
        "description": "Trim an active value so that it is empty before the start of its era For example trimBefore ui can be visualized as See the documentation of trim for more details",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "trimBefore",
        "normalized": "Active a-\u003eActive a",
        "package": "active",
        "partial": "Before",
        "signature": "Active a-\u003eActive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/active/docs/Data-Active.html#v:ui",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eui\u003c/code\u003e represents the \u003cem\u003eunit interval\u003c/em\u003e, which takes on the value \u003ccode\u003et\u003c/code\u003e\n   at time \u003ccode\u003et\u003c/code\u003e, and has as its era \u003ccode\u003e[0,1]\u003c/code\u003e. It is equivalent to\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003einterval\u003c/a\u003e\u003c/code\u003e 0 1\u003c/code\u003e, and can be visualized as follows:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.cis.upenn.edu/~byorgey/hosted/ui.png\"/\u003e\n\u003c/p\u003e\u003cp\u003eOn the x-axis is time, and the value that \u003ccode\u003eui\u003c/code\u003e takes on is on the\n   y-axis.  The shaded portion represents the era.  Note that the\n   value of \u003ccode\u003eui\u003c/code\u003e (as with any active) is still defined outside its\n   era, and this can make a difference when it is combined with\n   other active values with different eras.  Applying a function\n   with \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e affects all values, both inside and outside the era.\n   To manipulate values outside the era specifically, see \u003ccode\u003e\u003ca\u003eclamp\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003etrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTo alter the \u003cem\u003evalues\u003c/em\u003e that \u003ccode\u003eui\u003c/code\u003e takes on without altering its\n   era, use its \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instances.  For example,\n   \u003ccode\u003e(*2) \u003c$\u003e ui\u003c/code\u003e varies from \u003ccode\u003e0\u003c/code\u003e to \u003ccode\u003e2\u003c/code\u003e over the era \u003ccode\u003e[0,1]\u003c/code\u003e.  To\n   alter the era, you can use \u003ccode\u003e\u003ca\u003estretch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Active",
        "fct-package": "active",
        "fct-signature": "Active a",
        "fct-source": "src/Data-Active.html#ui",
        "fct-type": "function",
        "title": "ui"
      },
      "index": {
        "description": "ui represents the unit interval which takes on the value at time and has as its era It is equivalent to interval and can be visualized as follows On the x-axis is time and the value that ui takes on is on the y-axis The shaded portion represents the era Note that the value of ui as with any active is still defined outside its era and this can make difference when it is combined with other active values with different eras Applying function with fmap affects all values both inside and outside the era To manipulate values outside the era specifically see clamp and trim To alter the values that ui takes on without altering its era use its Functor and Applicative instances For example ui varies from to over the era To alter the era you can use stretch or shift",
        "hierarchy": "Data Active",
        "module": "Data.Active",
        "name": "ui",
        "normalized": "",
        "package": "active",
        "partial": "",
        "signature": ""
      }
    }
  }
]