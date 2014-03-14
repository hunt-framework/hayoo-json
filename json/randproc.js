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
        "word": "randproc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandProc.hs - a Haskell library for working with random processes in a mathematically rigorous way\n\u003c/p\u003e\u003cp\u003e(Concepts taken from \u003cem\u003eRandom Processes - a Mathematical Approach for Engineers\u003c/em\u003e by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Robert M. Gray\n\u003c/li\u003e\u003cli\u003e Lee D. Davisson\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ePrentice-Hall Information and System Sciences Series, Thomas Kailath, Series Editor)\n\u003c/p\u003e\u003cp\u003e$Id: RandProc.hs 31 2011-06-22 13:49:48Z dbanas $\n\u003c/p\u003e\u003cp\u003eDavid Banas\n\u003c/p\u003e\u003cp\u003e12 March 2011\n\u003c/p\u003e\u003cp\u003eCopyright (c) 2011 by David Banas; All rights reserved World wide.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eRevision History:\u003c/em\u003e\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eDate      SVN #\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Description\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-03-13    3\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Data structures stabilized. \u003ccode\u003eisSigma\u003c/code\u003e working under minimal,\n                      discrete sample testing.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-03-18    4\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Added \u003ccode\u003eisProbMeas\u003c/code\u003e, as well as monadic debugging versions of\n                      both it and \u003ccode\u003eisSigma\u003c/code\u003e.\n                      Added an example probability space representing a fair die.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-03-29    7\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Custom intersection functions added and briefly tested.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-04-02    8\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Custom union functions added and briefly tested.\n                      Solution is crude: it is O(N^2), and requires 2 passes over\n                      the sample list every time a join is successful. Perhaps, a\n                      pre-sort?\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-06    9\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Attempted fix of \u003ccode\u003e\u003ca\u003egetCompEvent\u003c/a\u003e\u003c/code\u003e\n                      Added \u003ccode\u003e\u003ca\u003esmplComp\u003c/a\u003e\u003c/code\u003e function, as helper to revised \u003ccode\u003e\u003ca\u003egetCompEvent\u003c/a\u003e\u003c/code\u003e.\n                      Changed \u003ccode\u003ePoint\u003c/code\u003e to accept Double.\n                      Moved all sample spaces to new file, \u003ccode\u003eMain.hs\u003c/code\u003e.\n                      Added input sorting to \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e.\n                      Changed Ranges to be open intervals, in order to allow for\n                      complementing out a Point from them.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-11   10\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Major re-write.\n                      \u003ccode\u003e\u003ca\u003egetCompEvent\u003c/a\u003e\u003c/code\u003e fixed. All 5 test spaces checking out ok.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-18   21\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Removed sample set order dependency from \u003ccode\u003e\u003ca\u003echeckSigma\u003c/a\u003e\u003c/code\u003e.\n                      All 7 test spaces checking out ok.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-19   22\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Added 'union of events is an event' test to \u003ccode\u003e\u003ca\u003echeckSigma\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-20   23\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Changed \u003ccode\u003eEvent\u003c/code\u003e from data constructor to type alias, in order\n                      to eliminate many instances of 'Event . f . getSamps' code.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-20   25\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Modified \u003ccode\u003esmpsSetInt\u003c/code\u003e to use a fold.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-20   26\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Defined public interface.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-21   27\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Modified comments for Haddock, and generated HTML docs.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-22   31\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Moved into \u003ccode\u003eData\u003c/code\u003e directory.\n\u003c/dd\u003e\u003cdt\u003eEnd of Subversion revision history\u003c/dt\u003e\u003cdd\u003e This source has been moved to darcs.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e2011-06-27\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Made \u003ccode\u003e\u003ca\u003esmplSetUnion\u003c/a\u003e\u003c/code\u003e more efficient, and tuned remaining\n                 performance bottlenecks.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e\u003cem\u003eTo Do:\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RandProc",
          "name": "RandProc",
          "package": "randproc",
          "source": "src/Data-RandProc.html",
          "type": "module"
        },
        "index": {
          "description": "RandProc.hs Haskell library for working with random processes in mathematically rigorous way Concepts taken from Random Processes Mathematical Approach for Engineers by Robert Gray Lee Davisson Prentice-Hall Information and System Sciences Series Thomas Kailath Series Editor Id RandProc.hs dbanas David Banas March Copyright by David Banas All rights reserved World wide Revision History Date SVN Description Data structures stabilized isSigma working under minimal discrete sample testing Added isProbMeas as well as monadic debugging versions of both it and isSigma Added an example probability space representing fair die Custom intersection functions added and briefly tested Custom union functions added and briefly tested Solution is crude it is and requires passes over the sample list every time join is successful Perhaps pre-sort Attempted fix of getCompEvent Added smplComp function as helper to revised getCompEvent Changed Point to accept Double Moved all sample spaces to new file Main.hs Added input sorting to range Changed Ranges to be open intervals in order to allow for complementing out Point from them Major re-write getCompEvent fixed All test spaces checking out ok Removed sample set order dependency from checkSigma All test spaces checking out ok Added union of events is an event test to checkSigma Changed Event from data constructor to type alias in order to eliminate many instances of Event getSamps code Modified smpsSetInt to use fold Defined public interface Modified comments for Haddock and generated HTML docs Moved into Data directory End of Subversion revision history This source has been moved to darcs Made smplSetUnion more efficient and tuned remaining performance bottlenecks To Do",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "RandProc",
          "package": "randproc",
          "partial": "Rand Proc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom data type for reporting different errors\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "ErrType",
          "package": "randproc",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "data"
        },
        "index": {
          "description": "Custom data type for reporting different errors",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "ErrType",
          "package": "randproc",
          "partial": "Err Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:ErrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eMeasure\u003c/em\u003e has 2 fields:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eevent\u003c/em\u003e - a list of samples from the space, and\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eprob\u003c/em\u003e  - a number between 0 and 1 giving the events probability of\n             occurence.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.RandProc",
          "name": "Measure",
          "package": "randproc",
          "source": "src/Data-RandProc.html#Measure",
          "type": "data"
        },
        "index": {
          "description": "Measure has fields event list of samples from the space and prob number between and giving the events probability of occurence",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "Measure",
          "package": "randproc",
          "partial": "Measure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe take a probability space to consist of the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e an 'abstract space' composed of either discrete or continuous (or a mix) samples\n\u003c/li\u003e\u003cli\u003e an 'event space', which must be a Sigma field defined over the abstract space\n\u003c/li\u003e\u003cli\u003e a 'probability measure' defined over the event space\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003eNote:\u003c/dt\u003e\u003cdd\u003e For the sake of efficient coding, the \u003cem\u003eevent space\u003c/em\u003e and the\n         \u003cem\u003eprobability measure\u003c/em\u003e are combined in the Haskell data structure,\n         below. This is permissable, because there has to be a 1:1\n         correspondance between them anyway. And it is preferable, because it:\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e keeps the probabilities more closely associated w/ the events, and\n\u003c/li\u003e\u003cli\u003e avoids duplication of code (i.e. - the list of events).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.RandProc",
          "name": "ProbSpace",
          "package": "randproc",
          "source": "src/Data-RandProc.html#ProbSpace",
          "type": "data"
        },
        "index": {
          "description": "We take probability space to consist of the following an abstract space composed of either discrete or continuous or mix samples an event space which must be Sigma field defined over the abstract space probability measure defined over the event space Note For the sake of efficient coding the event space and the probability measure are combined in the Haskell data structure below This is permissable because there has to be correspondance between them anyway And it is preferable because it keeps the probabilities more closely associated the events and avoids duplication of code i.e the list of events",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "ProbSpace",
          "package": "randproc",
          "partial": "Prob Space",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:ProbSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom data structure, used for constructing individual test cases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFields:\u003c/em\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e ps - a pointer to the ProbSpace being tested\n\u003c/li\u003e\u003cli\u003e res - the expected result\n\u003c/li\u003e\u003cli\u003e name - a label for identifying this test\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.RandProc",
          "name": "ProbSpaceTest",
          "package": "randproc",
          "source": "src/Data-RandProc.html#ProbSpaceTest",
          "type": "data"
        },
        "index": {
          "description": "Custom data structure used for constructing individual test cases Fields ps pointer to the ProbSpace being tested res the expected result name label for identifying this test",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "ProbSpaceTest",
          "package": "randproc",
          "partial": "Prob Space Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:ProbSpaceTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is our abstract data type, which represents a sample in the abstract space.\n\u003c/p\u003e\u003cp\u003eIt has a constructor representing every possible element in the abstract space\nwe're modeling. (Currently, just points and ranges of \u003cem\u003eDouble\u003c/em\u003es.)\n\u003c/p\u003e\u003cp\u003eNormally, none of the constructors of this type will be called directly.\nInstead, helper functions are provided, such as \u003ccode\u003e\u003ca\u003epoint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erange\u003c/a\u003e\u003c/code\u003e, which\nhide the implementation details from the user, and present a stable interface.\n\u003c/p\u003e\u003cp\u003eCurrently, the sole exception to the above is the \u003cem\u003eEmpty\u003c/em\u003e constructor, which is\nreally just a hack intended to put off the job of making the functions in this\nlibrary more intelligent, with regard to their handling of empty lists.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "Sample",
          "package": "randproc",
          "source": "src/Data-RandProc.html#Sample",
          "type": "data"
        },
        "index": {
          "description": "This is our abstract data type which represents sample in the abstract space It has constructor representing every possible element in the abstract space we re modeling Currently just points and ranges of Double Normally none of the constructors of this type will be called directly Instead helper functions are provided such as point and range which hide the implementation details from the user and present stable interface Currently the sole exception to the above is the Empty constructor which is really just hack intended to put off the job of making the functions in this library more intelligent with regard to their handling of empty lists",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "Sample",
          "package": "randproc",
          "partial": "Sample",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom data type used for test results and error reporting.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "TestResult",
          "package": "randproc",
          "source": "src/Data-RandProc.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "Custom data type used for test results and error reporting",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "TestResult",
          "package": "randproc",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "BadEventSamples",
          "package": "randproc",
          "signature": "BadEventSamples",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "BadEventSamples",
          "package": "randproc",
          "partial": "Bad Event Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:BadEventSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "CertainEventNonUnityProb",
          "package": "randproc",
          "signature": "CertainEventNonUnityProb",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "CertainEventNonUnityProb",
          "package": "randproc",
          "partial": "Certain Event Non Unity Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:CertainEventNonUnityProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "DupEventsInMeas",
          "package": "randproc",
          "signature": "DupEventsInMeas",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "DupEventsInMeas",
          "package": "randproc",
          "partial": "Dup Events In Meas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:DupEventsInMeas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "Empty",
          "package": "randproc",
          "signature": "Empty",
          "source": "src/Data-RandProc.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "Empty",
          "package": "randproc",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "EmptyEventSpace",
          "package": "randproc",
          "signature": "EmptyEventSpace",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "EmptyEventSpace",
          "package": "randproc",
          "partial": "Empty Event Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EmptyEventSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "EmptySampleSpace",
          "package": "randproc",
          "signature": "EmptySampleSpace",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "EmptySampleSpace",
          "package": "randproc",
          "partial": "Empty Sample Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EmptySampleSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "EventAndCompNoSumOne",
          "package": "randproc",
          "signature": "EventAndCompNoSumOne",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "EventAndCompNoSumOne",
          "package": "randproc",
          "partial": "Event And Comp No Sum One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EventAndCompNoSumOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "EventMeasLenMismatch",
          "package": "randproc",
          "signature": "EventMeasLenMismatch",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "EventMeasLenMismatch",
          "package": "randproc",
          "partial": "Event Meas Len Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:EventMeasLenMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "Fail",
          "package": "randproc",
          "signature": "Fail",
          "source": "src/Data-RandProc.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "Fail",
          "package": "randproc",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "Measure",
          "package": "randproc",
          "signature": "Measure Event Double",
          "source": "src/Data-RandProc.html#Measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "Measure",
          "package": "randproc",
          "partial": "Measure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "MissingCertainEvent",
          "package": "randproc",
          "signature": "MissingCertainEvent",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "MissingCertainEvent",
          "package": "randproc",
          "partial": "Missing Certain Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingCertainEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "MissingCompEvent",
          "package": "randproc",
          "signature": "MissingCompEvent",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "MissingCompEvent",
          "package": "randproc",
          "partial": "Missing Comp Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingCompEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "MissingEventsInMeas",
          "package": "randproc",
          "signature": "MissingEventsInMeas",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "MissingEventsInMeas",
          "package": "randproc",
          "partial": "Missing Events In Meas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingEventsInMeas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "MissingNullEvent",
          "package": "randproc",
          "signature": "MissingNullEvent",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "MissingNullEvent",
          "package": "randproc",
          "partial": "Missing Null Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingNullEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "MissingUnionEvent",
          "package": "randproc",
          "signature": "MissingUnionEvent",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "MissingUnionEvent",
          "package": "randproc",
          "partial": "Missing Union Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:MissingUnionEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "NullEventNonZeroProb",
          "package": "randproc",
          "signature": "NullEventNonZeroProb",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "NullEventNonZeroProb",
          "package": "randproc",
          "partial": "Null Event Non Zero Prob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:NullEventNonZeroProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "Pass",
          "package": "randproc",
          "signature": "Pass",
          "source": "src/Data-RandProc.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "Pass",
          "package": "randproc",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:Pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "ProbSpace",
          "package": "randproc",
          "signature": "ProbSpace [Sample] [Measure]",
          "source": "src/Data-RandProc.html#ProbSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "ProbSpace",
          "normalized": "ProbSpace[Sample][Measure]",
          "package": "randproc",
          "partial": "Prob Space",
          "signature": "ProbSpace[Sample][Measure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:ProbSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "ProbSpaceTest",
          "package": "randproc",
          "signature": "ProbSpaceTest ProbSpace TestResult String",
          "source": "src/Data-RandProc.html#ProbSpaceTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "ProbSpaceTest",
          "package": "randproc",
          "partial": "Prob Space Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:ProbSpaceTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "UnknownErr",
          "package": "randproc",
          "signature": "UnknownErr",
          "source": "src/Data-RandProc.html#ErrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "UnknownErr",
          "package": "randproc",
          "partial": "Unknown Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:UnknownErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks a value of type \u003ccode\u003e\u003ca\u003eProbSpace\u003c/a\u003e\u003c/code\u003e for correctness, and returns a value of\n type \u003ccode\u003e\u003ca\u003eTestResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "checkProbMeas",
          "package": "randproc",
          "signature": "ProbSpace -\u003e TestResult",
          "source": "src/Data-RandProc.html#checkProbMeas",
          "type": "function"
        },
        "index": {
          "description": "Checks value of type ProbSpace for correctness and returns value of type TestResult",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "checkProbMeas",
          "normalized": "ProbSpace-\u003eTestResult",
          "package": "randproc",
          "partial": "Prob Meas",
          "signature": "ProbSpace-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:checkProbMeas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether event space is actually a Sigma field over the sample space.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "checkSigma",
          "package": "randproc",
          "signature": "ProbSpace -\u003e TestResult",
          "source": "src/Data-RandProc.html#checkSigma",
          "type": "function"
        },
        "index": {
          "description": "Checks whether event space is actually Sigma field over the sample space",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "checkSigma",
          "normalized": "ProbSpace-\u003eTestResult",
          "package": "randproc",
          "partial": "Sigma",
          "signature": "ProbSpace-\u003eTestResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:checkSigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a test case and returns a string indicating the result of the test.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "checkSpace",
          "package": "randproc",
          "signature": "ProbSpaceTest -\u003e IO Bool",
          "source": "src/Data-RandProc.html#checkSpace",
          "type": "function"
        },
        "index": {
          "description": "Takes test case and returns string indicating the result of the test",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "checkSpace",
          "normalized": "ProbSpaceTest-\u003eIO Bool",
          "package": "randproc",
          "partial": "Space",
          "signature": "ProbSpaceTest-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:checkSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RandProc",
          "name": "err",
          "package": "randproc",
          "signature": "ErrType",
          "source": "src/Data-RandProc.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "err",
          "package": "randproc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the intersection of 2 events (i.e. - list of samples).\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "eventInt",
          "package": "randproc",
          "signature": "Event -\u003e Event -\u003e Event",
          "source": "src/Data-RandProc.html#eventInt",
          "type": "function"
        },
        "index": {
          "description": "Calculates the intersection of events i.e list of samples",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "eventInt",
          "normalized": "Event-\u003eEvent-\u003eEvent",
          "package": "randproc",
          "partial": "Int",
          "signature": "Event-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:eventInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the complement of an event from the sample space.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "getCompEvent",
          "package": "randproc",
          "signature": "[Sample] -\u003e Event -\u003e Event",
          "source": "src/Data-RandProc.html#getCompEvent",
          "type": "function"
        },
        "index": {
          "description": "Get the complement of an event from the sample space",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "getCompEvent",
          "normalized": "[Sample]-\u003eEvent-\u003eEvent",
          "package": "randproc",
          "partial": "Comp Event",
          "signature": "[Sample]-\u003eEvent-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getCompEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the Event from a Measure.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "getEvent",
          "package": "randproc",
          "signature": "Measure -\u003e Event",
          "source": "src/Data-RandProc.html#getEvent",
          "type": "function"
        },
        "index": {
          "description": "Extracts the Event from Measure",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "getEvent",
          "normalized": "Measure-\u003eEvent",
          "package": "randproc",
          "partial": "Event",
          "signature": "Measure-\u003eEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the probability from a Measure.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "getProb",
          "package": "randproc",
          "signature": "Measure -\u003e Double",
          "source": "src/Data-RandProc.html#getProb",
          "type": "function"
        },
        "index": {
          "description": "Extracts the probability from Measure",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "getProb",
          "normalized": "Measure-\u003eDouble",
          "package": "randproc",
          "partial": "Prob",
          "signature": "Measure-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a value of type \u003cem\u003eTestResult\u003c/em\u003e into a human readable string.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "getRsltStr",
          "package": "randproc",
          "signature": "TestResult -\u003e String",
          "source": "src/Data-RandProc.html#getRsltStr",
          "type": "function"
        },
        "index": {
          "description": "Turns value of type TestResult into human readable string",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "getRsltStr",
          "normalized": "TestResult-\u003eString",
          "package": "randproc",
          "partial": "Rslt Str",
          "signature": "TestResult-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:getRsltStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a sample is an element of a space.\n\u003c/p\u003e\u003cp\u003e(Need this, as opposed to just using \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e, in order to accomodate ranges.)\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "isElem",
          "package": "randproc",
          "signature": "[Sample] -\u003e Sample -\u003e Bool",
          "source": "src/Data-RandProc.html#isElem",
          "type": "function"
        },
        "index": {
          "description": "Determine if sample is an element of space Need this as opposed to just using elem in order to accomodate ranges",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "isElem",
          "normalized": "[Sample]-\u003eSample-\u003eBool",
          "package": "randproc",
          "partial": "Elem",
          "signature": "[Sample]-\u003eSample-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:isElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis helper function generates a complete and valid probability space,\n  given a discrete sample space and set of probabilities.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "makeProbSpace",
          "package": "randproc",
          "signature": "[(Sample, Double)] -\u003e ProbSpace",
          "source": "src/Data-RandProc.html#makeProbSpace",
          "type": "function"
        },
        "index": {
          "description": "This helper function generates complete and valid probability space given discrete sample space and set of probabilities",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "makeProbSpace",
          "normalized": "[(Sample,Double)]-\u003eProbSpace",
          "package": "randproc",
          "partial": "Prob Space",
          "signature": "[(Sample,Double)]-\u003eProbSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:makeProbSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks a list of measures against duplicate events.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "noDupEvents",
          "package": "randproc",
          "signature": "[Measure] -\u003e Bool",
          "source": "src/Data-RandProc.html#noDupEvents",
          "type": "function"
        },
        "index": {
          "description": "Checks list of measures against duplicate events",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "noDupEvents",
          "normalized": "[Measure]-\u003eBool",
          "package": "randproc",
          "partial": "Dup Events",
          "signature": "[Measure]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:noDupEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the helper function intended to be used for constructing a point sample.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "point",
          "package": "randproc",
          "signature": "Double -\u003e Sample",
          "source": "src/Data-RandProc.html#point",
          "type": "function"
        },
        "index": {
          "description": "This is the helper function intended to be used for constructing point sample",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "point",
          "normalized": "Double-\u003eSample",
          "package": "randproc",
          "signature": "Double-\u003eSample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the helper function intended to be used for constructing a range sample.\n The range is considered \u003cem\u003eopen\u003c/em\u003e. That is, its end points are not included.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "range",
          "package": "randproc",
          "signature": "(Double, Double) -\u003e Sample",
          "source": "src/Data-RandProc.html#range",
          "type": "function"
        },
        "index": {
          "description": "This is the helper function intended to be used for constructing range sample The range is considered open That is its end points are not included",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "range",
          "normalized": "(Double,Double)-\u003eSample",
          "package": "randproc",
          "signature": "(Double,Double)-\u003eSample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the beginning point of a range, which is \u003cem\u003enot\u003c/em\u003e included in the range,\n since ranges are considered to be open.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "rangeBegin",
          "package": "randproc",
          "signature": "Sample -\u003e Double",
          "source": "src/Data-RandProc.html#rangeBegin",
          "type": "function"
        },
        "index": {
          "description": "Gets the beginning point of range which is not included in the range since ranges are considered to be open",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "rangeBegin",
          "normalized": "Sample-\u003eDouble",
          "package": "randproc",
          "partial": "Begin",
          "signature": "Sample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:rangeBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the ending point of a range, which is \u003cem\u003enot\u003c/em\u003e included in the range,\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "rangeEnd",
          "package": "randproc",
          "signature": "Sample -\u003e Double",
          "source": "src/Data-RandProc.html#rangeEnd",
          "type": "function"
        },
        "index": {
          "description": "Gets the ending point of range which is not included in the range",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "rangeEnd",
          "normalized": "Sample-\u003eDouble",
          "package": "randproc",
          "partial": "End",
          "signature": "Sample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:rangeEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns that portion of the first sample that is disjoint from the second.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "smplComp",
          "package": "randproc",
          "signature": "Sample -\u003e Sample -\u003e [Sample]",
          "source": "src/Data-RandProc.html#smplComp",
          "type": "function"
        },
        "index": {
          "description": "Returns that portion of the first sample that is disjoint from the second",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "smplComp",
          "normalized": "Sample-\u003eSample-\u003e[Sample]",
          "package": "randproc",
          "partial": "Comp",
          "signature": "Sample-\u003eSample-\u003e[Sample]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the intersection between 2 samples.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "smplInt",
          "package": "randproc",
          "signature": "Sample -\u003e Sample -\u003e Sample",
          "source": "src/Data-RandProc.html#smplInt",
          "type": "function"
        },
        "index": {
          "description": "Returns the intersection between samples",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "smplInt",
          "normalized": "Sample-\u003eSample-\u003eSample",
          "package": "randproc",
          "partial": "Int",
          "signature": "Sample-\u003eSample-\u003eSample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a list of samples to a single sample representing their intersection.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "smplSetInt",
          "package": "randproc",
          "signature": "[Sample] -\u003e Sample",
          "source": "src/Data-RandProc.html#smplSetInt",
          "type": "function"
        },
        "index": {
          "description": "Reduces list of samples to single sample representing their intersection",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "smplSetInt",
          "normalized": "[Sample]-\u003eSample",
          "package": "randproc",
          "partial": "Set Int",
          "signature": "[Sample]-\u003eSample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplSetInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollapses a list of samples down to the maximally reduced set, which still\n composes a proper union of the input.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "smplSetUnion",
          "package": "randproc",
          "signature": "[Sample] -\u003e [Sample]",
          "source": "src/Data-RandProc.html#smplSetUnion",
          "type": "function"
        },
        "index": {
          "description": "Collapses list of samples down to the maximally reduced set which still composes proper union of the input",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "smplSetUnion",
          "normalized": "[Sample]-\u003e[Sample]",
          "package": "randproc",
          "partial": "Set Union",
          "signature": "[Sample]-\u003e[Sample]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplSetUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the union of 2 samples.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003esmplInt\u003c/a\u003e\u003c/code\u003e, \u003cem\u003esmplUnion\u003c/em\u003e must return a list since, if the 2 input\n samples aren't adjacent or overlapping, the union of them is a list\n containing both.\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "smplUnion",
          "package": "randproc",
          "signature": "Sample -\u003e Sample -\u003e [Sample]",
          "source": "src/Data-RandProc.html#smplUnion",
          "type": "function"
        },
        "index": {
          "description": "Returns the union of samples Unlike smplInt smplUnion must return list since if the input samples aren adjacent or overlapping the union of them is list containing both",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "smplUnion",
          "normalized": "Sample-\u003eSample-\u003e[Sample]",
          "package": "randproc",
          "partial": "Union",
          "signature": "Sample-\u003eSample-\u003e[Sample]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:smplUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower set generator\n\u003c/p\u003e",
          "module": "Data.RandProc",
          "name": "subs",
          "package": "randproc",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-RandProc.html#subs",
          "type": "function"
        },
        "index": {
          "description": "Power set generator",
          "hierarchy": "Data RandProc",
          "module": "Data.RandProc",
          "name": "subs",
          "normalized": "[a]-\u003e[[a]]",
          "package": "randproc",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/randproc/docs/Data-RandProc.html#v:subs"
      }
    }
  ]
]