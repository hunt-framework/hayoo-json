[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandProc.hs - a Haskell library for working with random processes in a mathematically rigorous way\n\u003c/p\u003e\u003cp\u003e(Concepts taken from \u003cem\u003eRandom Processes - a Mathematical Approach for Engineers\u003c/em\u003e by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Robert M. Gray\n\u003c/li\u003e\u003cli\u003e Lee D. Davisson\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ePrentice-Hall Information and System Sciences Series, Thomas Kailath, Series Editor)\n\u003c/p\u003e\u003cp\u003e$Id: RandProc.hs 31 2011-06-22 13:49:48Z dbanas $\n\u003c/p\u003e\u003cp\u003eDavid Banas\n\u003c/p\u003e\u003cp\u003e12 March 2011\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2011 by David Banas; All rights reserved World wide.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eRevision History:\u003c/em\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eDate      SVN #\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Description\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-03-13    3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Data structures stabilized. \u003ccode\u003eisSigma\u003c/code\u003e working under minimal,\n                      discrete sample testing.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-03-18    4\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Added \u003ccode\u003eisProbMeas\u003c/code\u003e, as well as monadic debugging versions of\n                      both it and \u003ccode\u003eisSigma\u003c/code\u003e.\n                      Added an example probability space representing a fair die.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-03-29    7\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Custom intersection functions added and briefly tested.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-04-02    8\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Custom union functions added and briefly tested.\n                      Solution is crude: it is O(N^2), and requires 2 passes over\n                      the sample list every time a join is successful. Perhaps, a\n                      pre-sort?\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-06    9\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Attempted fix of \u003ccode\u003e\u003ca\u003egetCompEvent\u003c/a\u003e\u003c/code\u003e\n                      Added \u003ccode\u003e\u003ca\u003esmplComp\u003c/a\u003e\u003c/code\u003e function, as helper to revised \u003ccode\u003e\u003ca\u003egetCompEvent\u003c/a\u003e\u003c/code\u003e.\n                      Changed \u003ccode\u003ePoint\u003c/code\u003e to accept Double.\n                      Moved all sample spaces to new file, \u003ccode\u003eMain.hs\u003c/code\u003e.\n                      Added input sorting to \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e.\n                      Changed Ranges to be open intervals, in order to allow for\n                      complementing out a Point from them.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-11   10\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Major re-write.\n                      \u003ccode\u003e\u003ca\u003egetCompEvent\u003c/a\u003e\u003c/code\u003e fixed. All 5 test spaces checking out ok.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-18   21\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Removed sample set order dependency from \u003ccode\u003e\u003ca\u003echeckSigma\u003c/a\u003e\u003c/code\u003e.\n                      All 7 test spaces checking out ok.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-19   22\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Added 'union of events is an event' test to \u003ccode\u003e\u003ca\u003echeckSigma\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-20   23\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Changed \u003ccode\u003eEvent\u003c/code\u003e from data constructor to type alias, in order\n                      to eliminate many instances of 'Event . f . getSamps' code.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-20   25\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Modified \u003ccode\u003esmpsSetInt\u003c/code\u003e to use a fold.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-20   26\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Defined public interface.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-21   27\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Modified comments for Haddock, and generated HTML docs.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-22   31\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Moved into \u003ccode\u003eData\u003c/code\u003e directory.\n\u003c/dd\u003e\u003cdt\u003eEnd of Subversion revision history\u003c/dt\u003e\u003cdd\u003e This source has been moved to darcs.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-27\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Made \u003ccode\u003e\u003ca\u003esmplSetUnion\u003c/a\u003e\u003c/code\u003e more efficient, and tuned remaining\n                 performance bottlenecks.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003cem\u003eTo Do:\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "module",
        "fct-source": "src/Data-RandProc.html",
        "fct-type": "module",
        "title": "RandProc"
      },
      "index": {
        "description": "RandProc.hs Haskell library for working with random processes in mathematically rigorous way Concepts taken from Random Processes Mathematical Approach for Engineers by Robert Gray Lee Davisson Prentice-Hall Information and System Sciences Series Thomas Kailath Series Editor Id RandProc.hs dbanas David Banas March Copyright by David Banas All rights reserved World wide Revision History Date SVN Description Data structures stabilized isSigma working under minimal discrete sample testing Added isProbMeas as well as monadic debugging versions of both it and isSigma Added an example probability space representing fair die Custom intersection functions added and briefly tested Custom union functions added and briefly tested Solution is crude it is and requires passes over the sample list every time join is successful Perhaps pre-sort Attempted fix of getCompEvent Added smplComp function as helper to revised getCompEvent Changed Point to accept Double Moved all sample spaces to new file Main.hs Added input sorting to range Changed Ranges to be open intervals in order to allow for complementing out Point from them Major re-write getCompEvent fixed All test spaces checking out ok Removed sample set order dependency from checkSigma All test spaces checking out ok Added union of events is an event test to checkSigma Changed Event from data constructor to type alias in order to eliminate many instances of Event getSamps code Modified smpsSetInt to use fold Defined public interface Modified comments for Haddock and generated HTML docs Moved into Data directory End of Subversion revision history This source has been moved to darcs Made smplSetUnion more efficient and tuned remaining performance bottlenecks To Do",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "RandProc",
        "normalized": "",
        "package": "randproc",
        "partial": "Rand Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:ErrType",
      "description": {
        "fct-descr": "\u003cp\u003eCustom data type for reporting different errors\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "data",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "data",
        "title": "ErrType"
      },
      "index": {
        "description": "Custom data type for reporting different errors",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "ErrType",
        "normalized": "",
        "package": "randproc",
        "partial": "Err Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:Measure",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eMeasure\u003c/em\u003e has 2 fields:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eevent\u003c/em\u003e - a list of samples from the space, and\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eprob\u003c/em\u003e  - a number between 0 and 1 giving the events probability of\n             occurence.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "data",
        "fct-source": "src/Data-RandProc.html#Measure",
        "fct-type": "data",
        "title": "Measure"
      },
      "index": {
        "description": "Measure has fields event list of samples from the space and prob number between and giving the events probability of occurence",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "Measure",
        "normalized": "",
        "package": "randproc",
        "partial": "Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:ProbSpace",
      "description": {
        "fct-descr": "\u003cp\u003eWe take a probability space to consist of the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e an 'abstract space' composed of either discrete or continuous (or a mix) samples\n\u003c/li\u003e\u003cli\u003e an 'event space', which must be a Sigma field defined over the abstract space\n\u003c/li\u003e\u003cli\u003e a 'probability measure' defined over the event space\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003eNote:\u003c/dt\u003e\u003cdd\u003e For the sake of efficient coding, the \u003cem\u003eevent space\u003c/em\u003e and the\n         \u003cem\u003eprobability measure\u003c/em\u003e are combined in the Haskell data structure,\n         below. This is permissable, because there has to be a 1:1\n         correspondance between them anyway. And it is preferable, because it:\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e keeps the probabilities more closely associated w/ the events, and\n\u003c/li\u003e\u003cli\u003e avoids duplication of code (i.e. - the list of events).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "data",
        "fct-source": "src/Data-RandProc.html#ProbSpace",
        "fct-type": "data",
        "title": "ProbSpace"
      },
      "index": {
        "description": "We take probability space to consist of the following an abstract space composed of either discrete or continuous or mix samples an event space which must be Sigma field defined over the abstract space probability measure defined over the event space Note For the sake of efficient coding the event space and the probability measure are combined in the Haskell data structure below This is permissable because there has to be correspondance between them anyway And it is preferable because it keeps the probabilities more closely associated the events and avoids duplication of code i.e the list of events",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "ProbSpace",
        "normalized": "",
        "package": "randproc",
        "partial": "Prob Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:ProbSpaceTest",
      "description": {
        "fct-descr": "\u003cp\u003eCustom data structure, used for constructing individual test cases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFields:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ps - a pointer to the ProbSpace being tested\n\u003c/li\u003e\u003cli\u003e res - the expected result\n\u003c/li\u003e\u003cli\u003e name - a label for identifying this test\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "data",
        "fct-source": "src/Data-RandProc.html#ProbSpaceTest",
        "fct-type": "data",
        "title": "ProbSpaceTest"
      },
      "index": {
        "description": "Custom data structure used for constructing individual test cases Fields ps pointer to the ProbSpace being tested res the expected result name label for identifying this test",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "ProbSpaceTest",
        "normalized": "",
        "package": "randproc",
        "partial": "Prob Space Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:Sample",
      "description": {
        "fct-descr": "\u003cp\u003eThis is our abstract data type, which represents a sample in the abstract space.\n\u003c/p\u003e\u003cp\u003eIt has a constructor representing every possible element in the abstract space\nwe're modeling. (Currently, just points and ranges of \u003cem\u003eDouble\u003c/em\u003es.)\n\u003c/p\u003e\u003cp\u003eNormally, none of the constructors of this type will be called directly.\nInstead, helper functions are provided, such as \u003ccode\u003e\u003ca\u003epoint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e, which\nhide the implementation details from the user, and present a stable interface.\n\u003c/p\u003e\u003cp\u003eCurrently, the sole exception to the above is the \u003cem\u003eEmpty\u003c/em\u003e constructor, which is\nreally just a hack intended to put off the job of making the functions in this\nlibrary more intelligent, with regard to their handling of empty lists.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "data",
        "fct-source": "src/Data-RandProc.html#Sample",
        "fct-type": "data",
        "title": "Sample"
      },
      "index": {
        "description": "This is our abstract data type which represents sample in the abstract space It has constructor representing every possible element in the abstract space we re modeling Currently just points and ranges of Double Normally none of the constructors of this type will be called directly Instead helper functions are provided such as point and range which hide the implementation details from the user and present stable interface Currently the sole exception to the above is the Empty constructor which is really just hack intended to put off the job of making the functions in this library more intelligent with regard to their handling of empty lists",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "Sample",
        "normalized": "",
        "package": "randproc",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:TestResult",
      "description": {
        "fct-descr": "\u003cp\u003eCustom data type used for test results and error reporting.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "data",
        "fct-source": "src/Data-RandProc.html#TestResult",
        "fct-type": "data",
        "title": "TestResult"
      },
      "index": {
        "description": "Custom data type used for test results and error reporting",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "TestResult",
        "normalized": "",
        "package": "randproc",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:BadEventSamples",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "BadEventSamples",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "BadEventSamples"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "BadEventSamples",
        "normalized": "",
        "package": "randproc",
        "partial": "Bad Event Samples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:CertainEventNonUnityProb",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "CertainEventNonUnityProb",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "CertainEventNonUnityProb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "CertainEventNonUnityProb",
        "normalized": "",
        "package": "randproc",
        "partial": "Certain Event Non Unity Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:DupEventsInMeas",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "DupEventsInMeas",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "DupEventsInMeas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "DupEventsInMeas",
        "normalized": "",
        "package": "randproc",
        "partial": "Dup Events In Meas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Empty",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Empty",
        "fct-source": "src/Data-RandProc.html#Sample",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "Empty",
        "normalized": "",
        "package": "randproc",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EmptyEventSpace",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "EmptyEventSpace",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "EmptyEventSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "EmptyEventSpace",
        "normalized": "",
        "package": "randproc",
        "partial": "Empty Event Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EmptySampleSpace",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "EmptySampleSpace",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "EmptySampleSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "EmptySampleSpace",
        "normalized": "",
        "package": "randproc",
        "partial": "Empty Sample Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EventAndCompNoSumOne",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "EventAndCompNoSumOne",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "EventAndCompNoSumOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "EventAndCompNoSumOne",
        "normalized": "",
        "package": "randproc",
        "partial": "Event And Comp No Sum One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EventMeasLenMismatch",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "EventMeasLenMismatch",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "EventMeasLenMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "EventMeasLenMismatch",
        "normalized": "",
        "package": "randproc",
        "partial": "Event Meas Len Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Fail",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Fail",
        "fct-source": "src/Data-RandProc.html#TestResult",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "Fail",
        "normalized": "",
        "package": "randproc",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Measure",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Measure Event Double",
        "fct-source": "src/Data-RandProc.html#Measure",
        "fct-type": "function",
        "title": "Measure"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "Measure",
        "normalized": "",
        "package": "randproc",
        "partial": "Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingCertainEvent",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "MissingCertainEvent",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "MissingCertainEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "MissingCertainEvent",
        "normalized": "",
        "package": "randproc",
        "partial": "Missing Certain Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingCompEvent",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "MissingCompEvent",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "MissingCompEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "MissingCompEvent",
        "normalized": "",
        "package": "randproc",
        "partial": "Missing Comp Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingEventsInMeas",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "MissingEventsInMeas",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "MissingEventsInMeas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "MissingEventsInMeas",
        "normalized": "",
        "package": "randproc",
        "partial": "Missing Events In Meas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingNullEvent",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "MissingNullEvent",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "MissingNullEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "MissingNullEvent",
        "normalized": "",
        "package": "randproc",
        "partial": "Missing Null Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingUnionEvent",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "MissingUnionEvent",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "MissingUnionEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "MissingUnionEvent",
        "normalized": "",
        "package": "randproc",
        "partial": "Missing Union Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:NullEventNonZeroProb",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "NullEventNonZeroProb",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "NullEventNonZeroProb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "NullEventNonZeroProb",
        "normalized": "",
        "package": "randproc",
        "partial": "Null Event Non Zero Prob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Pass",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Pass",
        "fct-source": "src/Data-RandProc.html#TestResult",
        "fct-type": "function",
        "title": "Pass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "Pass",
        "normalized": "",
        "package": "randproc",
        "partial": "Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:ProbSpace",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "ProbSpace [Sample] [Measure]",
        "fct-source": "src/Data-RandProc.html#ProbSpace",
        "fct-type": "function",
        "title": "ProbSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "ProbSpace",
        "normalized": "ProbSpace[Sample][Measure]",
        "package": "randproc",
        "partial": "Prob Space",
        "signature": "ProbSpace[Sample][Measure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:ProbSpaceTest",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "ProbSpaceTest ProbSpace TestResult String",
        "fct-source": "src/Data-RandProc.html#ProbSpaceTest",
        "fct-type": "function",
        "title": "ProbSpaceTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "ProbSpaceTest",
        "normalized": "",
        "package": "randproc",
        "partial": "Prob Space Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:UnknownErr",
      "description": {
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "UnknownErr",
        "fct-source": "src/Data-RandProc.html#ErrType",
        "fct-type": "function",
        "title": "UnknownErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "UnknownErr",
        "normalized": "",
        "package": "randproc",
        "partial": "Unknown Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:checkProbMeas",
      "description": {
        "fct-descr": "\u003cp\u003eChecks a value of type \u003ccode\u003e\u003ca\u003eProbSpace\u003c/a\u003e\u003c/code\u003e for correctness, and returns a value of\n type \u003ccode\u003e\u003ca\u003eTestResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "ProbSpace -\u003e TestResult",
        "fct-source": "src/Data-RandProc.html#checkProbMeas",
        "fct-type": "function",
        "title": "checkProbMeas"
      },
      "index": {
        "description": "Checks value of type ProbSpace for correctness and returns value of type TestResult",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "checkProbMeas",
        "normalized": "ProbSpace-\u003eTestResult",
        "package": "randproc",
        "partial": "Prob Meas",
        "signature": "ProbSpace-\u003eTestResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:checkSigma",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether event space is actually a Sigma field over the sample space.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "ProbSpace -\u003e TestResult",
        "fct-source": "src/Data-RandProc.html#checkSigma",
        "fct-type": "function",
        "title": "checkSigma"
      },
      "index": {
        "description": "Checks whether event space is actually Sigma field over the sample space",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "checkSigma",
        "normalized": "ProbSpace-\u003eTestResult",
        "package": "randproc",
        "partial": "Sigma",
        "signature": "ProbSpace-\u003eTestResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:checkSpace",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a test case and returns a string indicating the result of the test.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "ProbSpaceTest -\u003e IO Bool",
        "fct-source": "src/Data-RandProc.html#checkSpace",
        "fct-type": "function",
        "title": "checkSpace"
      },
      "index": {
        "description": "Takes test case and returns string indicating the result of the test",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "checkSpace",
        "normalized": "ProbSpaceTest-\u003eIO Bool",
        "package": "randproc",
        "partial": "Space",
        "signature": "ProbSpaceTest-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:err",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "ErrType",
        "fct-source": "src/Data-RandProc.html#TestResult",
        "fct-type": "function",
        "title": "err"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "err",
        "normalized": "",
        "package": "randproc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:eventInt",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the intersection of 2 events (i.e. - list of samples).\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Event -\u003e Event -\u003e Event",
        "fct-source": "src/Data-RandProc.html#eventInt",
        "fct-type": "function",
        "title": "eventInt"
      },
      "index": {
        "description": "Calculates the intersection of events i.e list of samples",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "eventInt",
        "normalized": "Event-\u003eEvent-\u003eEvent",
        "package": "randproc",
        "partial": "Int",
        "signature": "Event-\u003eEvent-\u003eEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getCompEvent",
      "description": {
        "fct-descr": "\u003cp\u003eGet the complement of an event from the sample space.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[Sample] -\u003e Event -\u003e Event",
        "fct-source": "src/Data-RandProc.html#getCompEvent",
        "fct-type": "function",
        "title": "getCompEvent"
      },
      "index": {
        "description": "Get the complement of an event from the sample space",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "getCompEvent",
        "normalized": "[Sample]-\u003eEvent-\u003eEvent",
        "package": "randproc",
        "partial": "Comp Event",
        "signature": "[Sample]-\u003eEvent-\u003eEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getEvent",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the Event from a Measure.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Measure -\u003e Event",
        "fct-source": "src/Data-RandProc.html#getEvent",
        "fct-type": "function",
        "title": "getEvent"
      },
      "index": {
        "description": "Extracts the Event from Measure",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "getEvent",
        "normalized": "Measure-\u003eEvent",
        "package": "randproc",
        "partial": "Event",
        "signature": "Measure-\u003eEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getProb",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the probability from a Measure.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Measure -\u003e Double",
        "fct-source": "src/Data-RandProc.html#getProb",
        "fct-type": "function",
        "title": "getProb"
      },
      "index": {
        "description": "Extracts the probability from Measure",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "getProb",
        "normalized": "Measure-\u003eDouble",
        "package": "randproc",
        "partial": "Prob",
        "signature": "Measure-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getRsltStr",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a value of type \u003cem\u003eTestResult\u003c/em\u003e into a human readable string.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "TestResult -\u003e String",
        "fct-source": "src/Data-RandProc.html#getRsltStr",
        "fct-type": "function",
        "title": "getRsltStr"
      },
      "index": {
        "description": "Turns value of type TestResult into human readable string",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "getRsltStr",
        "normalized": "TestResult-\u003eString",
        "package": "randproc",
        "partial": "Rslt Str",
        "signature": "TestResult-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:isElem",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine if a sample is an element of a space.\n\u003c/p\u003e\u003cp\u003e(Need this, as opposed to just using \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e, in order to accomodate ranges.)\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[Sample] -\u003e Sample -\u003e Bool",
        "fct-source": "src/Data-RandProc.html#isElem",
        "fct-type": "function",
        "title": "isElem"
      },
      "index": {
        "description": "Determine if sample is an element of space Need this as opposed to just using elem in order to accomodate ranges",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "isElem",
        "normalized": "[Sample]-\u003eSample-\u003eBool",
        "package": "randproc",
        "partial": "Elem",
        "signature": "[Sample]-\u003eSample-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:makeProbSpace",
      "description": {
        "fct-descr": "\u003cp\u003eThis helper function generates a complete and valid probability space,\n  given a discrete sample space and set of probabilities.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[(Sample, Double)] -\u003e ProbSpace",
        "fct-source": "src/Data-RandProc.html#makeProbSpace",
        "fct-type": "function",
        "title": "makeProbSpace"
      },
      "index": {
        "description": "This helper function generates complete and valid probability space given discrete sample space and set of probabilities",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "makeProbSpace",
        "normalized": "[(Sample,Double)]-\u003eProbSpace",
        "package": "randproc",
        "partial": "Prob Space",
        "signature": "[(Sample,Double)]-\u003eProbSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:noDupEvents",
      "description": {
        "fct-descr": "\u003cp\u003eChecks a list of measures against duplicate events.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[Measure] -\u003e Bool",
        "fct-source": "src/Data-RandProc.html#noDupEvents",
        "fct-type": "function",
        "title": "noDupEvents"
      },
      "index": {
        "description": "Checks list of measures against duplicate events",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "noDupEvents",
        "normalized": "[Measure]-\u003eBool",
        "package": "randproc",
        "partial": "Dup Events",
        "signature": "[Measure]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:point",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the helper function intended to be used for constructing a point sample.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Double -\u003e Sample",
        "fct-source": "src/Data-RandProc.html#point",
        "fct-type": "function",
        "title": "point"
      },
      "index": {
        "description": "This is the helper function intended to be used for constructing point sample",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "point",
        "normalized": "Double-\u003eSample",
        "package": "randproc",
        "partial": "",
        "signature": "Double-\u003eSample"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:range",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the helper function intended to be used for constructing a range sample.\n The range is considered \u003cem\u003eopen\u003c/em\u003e. That is, its end points are not included.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "(Double, Double) -\u003e Sample",
        "fct-source": "src/Data-RandProc.html#range",
        "fct-type": "function",
        "title": "range"
      },
      "index": {
        "description": "This is the helper function intended to be used for constructing range sample The range is considered open That is its end points are not included",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "range",
        "normalized": "(Double,Double)-\u003eSample",
        "package": "randproc",
        "partial": "",
        "signature": "(Double,Double)-\u003eSample"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:rangeBegin",
      "description": {
        "fct-descr": "\u003cp\u003eGets the beginning point of a range, which is \u003cem\u003enot\u003c/em\u003e included in the range,\n since ranges are considered to be open.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Sample -\u003e Double",
        "fct-source": "src/Data-RandProc.html#rangeBegin",
        "fct-type": "function",
        "title": "rangeBegin"
      },
      "index": {
        "description": "Gets the beginning point of range which is not included in the range since ranges are considered to be open",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "rangeBegin",
        "normalized": "Sample-\u003eDouble",
        "package": "randproc",
        "partial": "Begin",
        "signature": "Sample-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:rangeEnd",
      "description": {
        "fct-descr": "\u003cp\u003eGets the ending point of a range, which is \u003cem\u003enot\u003c/em\u003e included in the range,\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Sample -\u003e Double",
        "fct-source": "src/Data-RandProc.html#rangeEnd",
        "fct-type": "function",
        "title": "rangeEnd"
      },
      "index": {
        "description": "Gets the ending point of range which is not included in the range",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "rangeEnd",
        "normalized": "Sample-\u003eDouble",
        "package": "randproc",
        "partial": "End",
        "signature": "Sample-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplComp",
      "description": {
        "fct-descr": "\u003cp\u003eReturns that portion of the first sample that is disjoint from the second.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Sample -\u003e Sample -\u003e [Sample]",
        "fct-source": "src/Data-RandProc.html#smplComp",
        "fct-type": "function",
        "title": "smplComp"
      },
      "index": {
        "description": "Returns that portion of the first sample that is disjoint from the second",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "smplComp",
        "normalized": "Sample-\u003eSample-\u003e[Sample]",
        "package": "randproc",
        "partial": "Comp",
        "signature": "Sample-\u003eSample-\u003e[Sample]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplInt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the intersection between 2 samples.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Sample -\u003e Sample -\u003e Sample",
        "fct-source": "src/Data-RandProc.html#smplInt",
        "fct-type": "function",
        "title": "smplInt"
      },
      "index": {
        "description": "Returns the intersection between samples",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "smplInt",
        "normalized": "Sample-\u003eSample-\u003eSample",
        "package": "randproc",
        "partial": "Int",
        "signature": "Sample-\u003eSample-\u003eSample"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplSetInt",
      "description": {
        "fct-descr": "\u003cp\u003eReduces a list of samples to a single sample representing their intersection.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[Sample] -\u003e Sample",
        "fct-source": "src/Data-RandProc.html#smplSetInt",
        "fct-type": "function",
        "title": "smplSetInt"
      },
      "index": {
        "description": "Reduces list of samples to single sample representing their intersection",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "smplSetInt",
        "normalized": "[Sample]-\u003eSample",
        "package": "randproc",
        "partial": "Set Int",
        "signature": "[Sample]-\u003eSample"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplSetUnion",
      "description": {
        "fct-descr": "\u003cp\u003eCollapses a list of samples down to the maximally reduced set, which still\n composes a proper union of the input.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[Sample] -\u003e [Sample]",
        "fct-source": "src/Data-RandProc.html#smplSetUnion",
        "fct-type": "function",
        "title": "smplSetUnion"
      },
      "index": {
        "description": "Collapses list of samples down to the maximally reduced set which still composes proper union of the input",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "smplSetUnion",
        "normalized": "[Sample]-\u003e[Sample]",
        "package": "randproc",
        "partial": "Set Union",
        "signature": "[Sample]-\u003e[Sample]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplUnion",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the union of 2 samples.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003esmplInt\u003c/a\u003e\u003c/code\u003e, \u003cem\u003esmplUnion\u003c/em\u003e must return a list since, if the 2 input\n samples aren't adjacent or overlapping, the union of them is a list\n containing both.\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "Sample -\u003e Sample -\u003e [Sample]",
        "fct-source": "src/Data-RandProc.html#smplUnion",
        "fct-type": "function",
        "title": "smplUnion"
      },
      "index": {
        "description": "Returns the union of samples Unlike smplInt smplUnion must return list since if the input samples aren adjacent or overlapping the union of them is list containing both",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "smplUnion",
        "normalized": "Sample-\u003eSample-\u003e[Sample]",
        "package": "randproc",
        "partial": "Union",
        "signature": "Sample-\u003eSample-\u003e[Sample]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:subs",
      "description": {
        "fct-descr": "\u003cp\u003ePower set generator\n\u003c/p\u003e",
        "fct-module": "Data.RandProc",
        "fct-package": "randproc",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Data-RandProc.html#subs",
        "fct-type": "function",
        "title": "subs"
      },
      "index": {
        "description": "Power set generator",
        "hierarchy": "Data RandProc",
        "module": "Data.RandProc",
        "name": "subs",
        "normalized": "[a]-\u003e[[a]]",
        "package": "randproc",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  }
]