[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures and functions for creating and stepping animations. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Animation.html",
        "fct-type": "module",
        "title": "Animation"
      },
      "index": {
        "description": "Contains all data structures and functions for creating and stepping animations",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Animation",
        "normalized": "",
        "package": "helm",
        "partial": "Animation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#t:Animation",
      "description": {
        "fct-descr": "\u003cp\u003eA type describing an animation consisting of a list of frames. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Animation.html#Animation",
        "fct-type": "type",
        "title": "Animation"
      },
      "index": {
        "description": "type describing an animation consisting of list of frames",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Animation",
        "normalized": "",
        "package": "helm",
        "partial": "Animation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#t:Frame",
      "description": {
        "fct-descr": "\u003cp\u003eA type describing a single frame in an animation. A frame consists of a time at\n    which the frame takes place in an animation and the form which is how the frame\n    actually looks when rendered. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Animation.html#Frame",
        "fct-type": "type",
        "title": "Frame"
      },
      "index": {
        "description": "type describing single frame in an animation frame consists of time at which the frame takes place in an animation and the form which is how the frame actually looks when rendered",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Frame",
        "normalized": "",
        "package": "helm",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#t:Status",
      "description": {
        "fct-descr": "\u003cp\u003eThis type tells of the state an animation is in.\n    Continue: A continued animation plays through its frames as specified in the Animation.\n    Pause: A paused animation does not change its current frame and time.\n    Stop: A stopped animation is set to its first frame and time 0.\n    Frame: The Frame constructor can be used to choose a specific frame of the animation\n           where time is set to the first millisecond of that chosen frame. (Indexing starts at 1. 'first frame', not 'zero frame')\n    Time: The Time constructor sets the current time (in milliseconds) in the animation to the specified value.   \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Animation.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "This type tells of the state an animation is in Continue continued animation plays through its frames as specified in the Animation Pause paused animation does not change its current frame and time Stop stopped animation is set to its first frame and time Frame The Frame constructor can be used to choose specific frame of the animation where time is set to the first millisecond of that chosen frame Indexing starts at first frame not zero frame Time The Time constructor sets the current time in milliseconds in the animation to the specified value",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Status",
        "normalized": "",
        "package": "helm",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Continue",
      "description": {
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Continue",
        "fct-source": "src/FRP-Helm-Animation.html#Status",
        "fct-type": "function",
        "title": "Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Continue",
        "normalized": "",
        "package": "helm",
        "partial": "Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Frame",
      "description": {
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Frame Int",
        "fct-source": "src/FRP-Helm-Animation.html#Status",
        "fct-type": "function",
        "title": "Frame"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Frame",
        "normalized": "",
        "package": "helm",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Pause",
      "description": {
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Pause",
        "fct-source": "src/FRP-Helm-Animation.html#Status",
        "fct-type": "function",
        "title": "Pause"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Pause",
        "normalized": "",
        "package": "helm",
        "partial": "Pause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Stop",
      "description": {
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Stop",
        "fct-source": "src/FRP-Helm-Animation.html#Status",
        "fct-type": "function",
        "title": "Stop"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Stop",
        "normalized": "",
        "package": "helm",
        "partial": "Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Time",
      "description": {
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Time Time",
        "fct-source": "src/FRP-Helm-Animation.html#Status",
        "fct-type": "function",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "Time",
        "normalized": "",
        "package": "helm",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:absolute",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an animation from a list of frames. The time value in each frame\n    is absolute to the entire animation, i.e. each time value is the time\n    at which the frame takes place relative to the starting time of the animation.\n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "[Frame] -\u003e Animation",
        "fct-source": "src/FRP-Helm-Animation.html#absolute",
        "fct-type": "function",
        "title": "absolute"
      },
      "index": {
        "description": "Creates an animation from list of frames The time value in each frame is absolute to the entire animation i.e each time value is the time at which the frame takes place relative to the starting time of the animation",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "absolute",
        "normalized": "[Frame]-\u003eAnimation",
        "package": "helm",
        "partial": "",
        "signature": "[Frame]-\u003eAnimation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:animate",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signal contained in a generator that returns the current form in the animation when sampled from\n    a specific animation. The second argument is a signal generator containing a signal that\n    returns the time to setup the animation forward when sampled. The third argument is a\n    signal generator containing a signal that returns true to continue animating\n    or false to stop animating when sampled. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Animation -\u003e SignalGen (Signal Time) -\u003e SignalGen (Signal Status) -\u003e SignalGen (Signal Form)",
        "fct-source": "src/FRP-Helm-Animation.html#animate",
        "fct-type": "function",
        "title": "animate"
      },
      "index": {
        "description": "Creates signal contained in generator that returns the current form in the animation when sampled from specific animation The second argument is signal generator containing signal that returns the time to setup the animation forward when sampled The third argument is signal generator containing signal that returns true to continue animating or false to stop animating when sampled",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "animate",
        "normalized": "Animation-\u003eSignalGen(Signal Time)-\u003eSignalGen(Signal Status)-\u003eSignalGen(Signal Form)",
        "package": "helm",
        "partial": "",
        "signature": "Animation-\u003eSignalGen(Signal Time)-\u003eSignalGen(Signal Status)-\u003eSignalGen(Signal Form)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:formAt",
      "description": {
        "fct-descr": "\u003cp\u003eThe form that will be rendered for a specific time in an animation. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Animation -\u003e Time -\u003e Maybe Form",
        "fct-source": "src/FRP-Helm-Animation.html#formAt",
        "fct-type": "function",
        "title": "formAt"
      },
      "index": {
        "description": "The form that will be rendered for specific time in an animation",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "formAt",
        "normalized": "Animation-\u003eTime-\u003eMaybe Form",
        "package": "helm",
        "partial": "At",
        "signature": "Animation-\u003eTime-\u003eMaybe Form"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of time one cycle of the animation takes. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "Animation -\u003e Time",
        "fct-source": "src/FRP-Helm-Animation.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "The amount of time one cycle of the animation takes",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "length",
        "normalized": "Animation-\u003eTime",
        "package": "helm",
        "partial": "",
        "signature": "Animation-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:relative",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an animation from a list of frames. The time value in each frame\n    is relative to other frames, i.e. each time value is the difference\n    in time from the last frame.\n\u003c/p\u003e\u003cpre\u003e relative [(100, picture1), (100, picture2), (300, picture3)] == absolute [(100, picture1), (200, picture2), (500, picture3)]\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Animation",
        "fct-package": "helm",
        "fct-signature": "[Frame] -\u003e Animation",
        "fct-source": "src/FRP-Helm-Animation.html#relative",
        "fct-type": "function",
        "title": "relative"
      },
      "index": {
        "description": "Creates an animation from list of frames The time value in each frame is relative to other frames i.e each time value is the difference in time from the last frame relative picture1 picture2 picture3 absolute picture1 picture2 picture3",
        "hierarchy": "FRP Helm Animation",
        "module": "FRP.Helm.Animation",
        "name": "relative",
        "normalized": "[Frame]-\u003eAnimation",
        "package": "helm",
        "partial": "",
        "signature": "[Frame]-\u003eAnimation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures and functions for composing, calculating and creating automatons. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Automaton.html",
        "fct-type": "module",
        "title": "Automaton"
      },
      "index": {
        "description": "Contains all data structures and functions for composing calculating and creating automatons",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "Automaton",
        "normalized": "",
        "package": "helm",
        "partial": "Automaton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#t:Automaton",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing an automaton.\n    An automaton is essentially a high-level way to package piped behavior\n    between an input signal and an output signal. Automatons can also\n    be composed, allowing you to connect one automaton to another\n    and pipe data between them. Automatons are an easy and powerful way\n    to create composable dynamic behavior, like animation systems. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Automaton.html#Automaton",
        "fct-type": "data",
        "title": "Automaton"
      },
      "index": {
        "description": "data structure describing an automaton An automaton is essentially high-level way to package piped behavior between an input signal and an output signal Automatons can also be composed allowing you to connect one automaton to another and pipe data between them Automatons are an easy and powerful way to create composable dynamic behavior like animation systems",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "Automaton",
        "normalized": "",
        "package": "helm",
        "partial": "Automaton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:Step",
      "description": {
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "Step (a -\u003e (Automaton a b, b))",
        "fct-source": "src/FRP-Helm-Automaton.html#Automaton",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "Step",
        "normalized": "Step(a-\u003e(Automaton a b,b))",
        "package": "helm",
        "partial": "Step",
        "signature": "Step(a-\u003e(Automaton a b,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a list of automatons that take some input\n    and turns it into an automaton that takes\n    the same input and outputs a list of all outputs\n    from each separate automaton. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "[Automaton a b] -\u003e Automaton a [b]",
        "fct-source": "src/FRP-Helm-Automaton.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "Combines list of automatons that take some input and turns it into an automaton that takes the same input and outputs list of all outputs from each separate automaton",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "combine",
        "normalized": "[Automaton a b]-\u003eAutomaton a[b]",
        "package": "helm",
        "partial": "",
        "signature": "[Automaton a b]-\u003eAutomaton a[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:counter",
      "description": {
        "fct-descr": "\u003cp\u003eA useful automaton that outputs the amount of times it has been stepped,\n    discarding its input value. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "Automaton a Int",
        "fct-source": "src/FRP-Helm-Automaton.html#counter",
        "fct-type": "function",
        "title": "counter"
      },
      "index": {
        "description": "useful automaton that outputs the amount of times it has been stepped discarding its input value",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "counter",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:pure",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a pure automaton that has no accumulated state. It applies input to\n    a function at each step. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b) -\u003e Automaton a b",
        "fct-source": "src/FRP-Helm-Automaton.html#pure",
        "fct-type": "function",
        "title": "pure"
      },
      "index": {
        "description": "Creates pure automaton that has no accumulated state It applies input to function at each step",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "pure",
        "normalized": "(a-\u003eb)-\u003eAutomaton a b",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eAutomaton a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an automaton with an initial output value and input signal generator\n    and creates an output signal generator that contains a signal that can be\n    sampled for the output value. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "Automaton a b -\u003e b -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
        "fct-source": "src/FRP-Helm-Automaton.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Runs an automaton with an initial output value and input signal generator and creates an output signal generator that contains signal that can be sampled for the output value",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "run",
        "normalized": "Automaton a b-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
        "package": "helm",
        "partial": "",
        "signature": "Automaton a b-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:stateful",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an automaton that has an initial and accumulated state. It applies\n    input and the last state to a function at each step. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "b -\u003e (a -\u003e b -\u003e b) -\u003e Automaton a b",
        "fct-source": "src/FRP-Helm-Automaton.html#stateful",
        "fct-type": "function",
        "title": "stateful"
      },
      "index": {
        "description": "Creates an automaton that has an initial and accumulated state It applies input and the last state to function at each step",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "stateful",
        "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eAutomaton b a",
        "package": "helm",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb-\u003eb)-\u003eAutomaton a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:step",
      "description": {
        "fct-descr": "\u003cp\u003eSteps an automaton forward, returning the next automaton to step\n    and output of the step in a tuple. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Automaton",
        "fct-package": "helm",
        "fct-signature": "a -\u003e Automaton a b -\u003e (Automaton a b, b)",
        "fct-source": "src/FRP-Helm-Automaton.html#step",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "Steps an automaton forward returning the next automaton to step and output of the step in tuple",
        "hierarchy": "FRP Helm Automaton",
        "module": "FRP.Helm.Automaton",
        "name": "step",
        "normalized": "a-\u003eAutomaton a b-\u003e(Automaton a b,b)",
        "package": "helm",
        "partial": "",
        "signature": "a-\u003eAutomaton a b-\u003e(Automaton a b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures and functions for composing colors. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Color.html",
        "fct-type": "module",
        "title": "Color"
      },
      "index": {
        "description": "Contains all data structures and functions for composing colors",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "Color",
        "normalized": "",
        "package": "helm",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a color. It is represented interally as an RGBA\n    color, but the utility functions \u003ccode\u003e\u003ca\u003ehsva\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsv\u003c/a\u003e\u003c/code\u003e, etc. can be used to convert\n    from other popular formats to this structure. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Color.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "data structure describing color It is represented interally as an RGBA color but the utility functions hsva hsv etc can be used to convert from other popular formats to this structure",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "Color",
        "normalized": "",
        "package": "helm",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#t:Gradient",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a gradient. There are two types of gradients:\n    radial and linear. Radial gradients are based on a set of colors transitioned\n    over certain radii in an arc pattern. Linear gradients are a set of colors\n    transitioned in a straight line. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Color.html#Gradient",
        "fct-type": "data",
        "title": "Gradient"
      },
      "index": {
        "description": "data structure describing gradient There are two types of gradients radial and linear Radial gradients are based on set of colors transitioned over certain radii in an arc pattern Linear gradients are set of colors transitioned in straight line",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "Gradient",
        "normalized": "",
        "package": "helm",
        "partial": "Gradient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:Color",
      "description": {
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color Double Double Double Double",
        "fct-source": "src/FRP-Helm-Color.html#Color",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "Color",
        "normalized": "",
        "package": "helm",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:Linear",
      "description": {
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Linear (Double, Double) (Double, Double) [(Double, Color)]",
        "fct-source": "src/FRP-Helm-Color.html#Gradient",
        "fct-type": "function",
        "title": "Linear"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "Linear",
        "normalized": "Linear(Double,Double)(Double,Double)[(Double,Color)]",
        "package": "helm",
        "partial": "Linear",
        "signature": "Linear(Double,Double)(Double,Double)[(Double,Color)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:Radial",
      "description": {
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Radial (Double, Double) Double (Double, Double) Double [(Double, Color)]",
        "fct-source": "src/FRP-Helm-Color.html#Gradient",
        "fct-type": "function",
        "title": "Radial"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "Radial",
        "normalized": "Radial(Double,Double)Double(Double,Double)Double[(Double,Color)]",
        "package": "helm",
        "partial": "Radial",
        "signature": "Radial(Double,Double)Double(Double,Double)Double[(Double,Color)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:black",
      "description": {
        "fct-descr": "\u003cp\u003eA black color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#black",
        "fct-type": "function",
        "title": "black"
      },
      "index": {
        "description": "black color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "black",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:blend",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of colors and turns it into a single color by\n    averaging the color components. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "[Color] -\u003e Color",
        "fct-source": "src/FRP-Helm-Color.html#blend",
        "fct-type": "function",
        "title": "blend"
      },
      "index": {
        "description": "Takes list of colors and turns it into single color by averaging the color components",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "blend",
        "normalized": "[Color]-\u003eColor",
        "package": "helm",
        "partial": "",
        "signature": "[Color]-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:blue",
      "description": {
        "fct-descr": "\u003cp\u003eA bright blue color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#blue",
        "fct-type": "function",
        "title": "blue"
      },
      "index": {
        "description": "bright blue color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "blue",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:complement",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a complementary color for a provided color. Useful for outlining\n    a filled shape in a color clearly distinguishable from the fill color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color -\u003e Color",
        "fct-source": "src/FRP-Helm-Color.html#complement",
        "fct-type": "function",
        "title": "complement"
      },
      "index": {
        "description": "Calculate complementary color for provided color Useful for outlining filled shape in color clearly distinguishable from the fill color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "complement",
        "normalized": "Color-\u003eColor",
        "package": "helm",
        "partial": "",
        "signature": "Color-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:cyan",
      "description": {
        "fct-descr": "\u003cp\u003eA cyan color, combined from bright green and blue. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#cyan",
        "fct-type": "function",
        "title": "cyan"
      },
      "index": {
        "description": "cyan color combined from bright green and blue",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "cyan",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:forestGreen",
      "description": {
        "fct-descr": "\u003cp\u003eA dark green color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#forestGreen",
        "fct-type": "function",
        "title": "forestGreen"
      },
      "index": {
        "description": "dark green color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "forestGreen",
        "normalized": "",
        "package": "helm",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:gray",
      "description": {
        "fct-descr": "\u003cp\u003eA gray color, exactly halfway between black and white. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#gray",
        "fct-type": "function",
        "title": "gray"
      },
      "index": {
        "description": "gray color exactly halfway between black and white",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "gray",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:green",
      "description": {
        "fct-descr": "\u003cp\u003eA medium green color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#green",
        "fct-type": "function",
        "title": "green"
      },
      "index": {
        "description": "medium green color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "green",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:grey",
      "description": {
        "fct-descr": "\u003cp\u003eCommon alternative spelling of \u003ccode\u003e\u003ca\u003egray\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#grey",
        "fct-type": "function",
        "title": "grey"
      },
      "index": {
        "description": "Common alternative spelling of gray",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "grey",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:hsv",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an RGB color from HSV values. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Color",
        "fct-source": "src/FRP-Helm-Color.html#hsv",
        "fct-type": "function",
        "title": "hsv"
      },
      "index": {
        "description": "Create an RGB color from HSV values",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "hsv",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eColor",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:hsva",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an RGBA color from HSVA values. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Color",
        "fct-source": "src/FRP-Helm-Color.html#hsva",
        "fct-type": "function",
        "title": "hsva"
      },
      "index": {
        "description": "Create an RGBA color from HSVA values",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "hsva",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:lime",
      "description": {
        "fct-descr": "\u003cp\u003eA bright green color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#lime",
        "fct-type": "function",
        "title": "lime"
      },
      "index": {
        "description": "bright green color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "lime",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:linear",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a linear gradient. Takes a starting position, ending position and a list\n    of color stops (which are colors combined with a floating value between \u003cem\u003e0.0\u003c/em\u003e and \u003cem\u003e1.0\u003c/em\u003e\n    that describes at what step along the line between the starting position\n    and ending position the paired color should be transitioned to).\n\u003c/p\u003e\u003cpre\u003e linear (0, 0) (100, 100) [(0, black), (1, white)]\n\u003c/pre\u003e\u003cp\u003eThe above example creates a gradient that starts at \u003cem\u003e(0, 0)\u003c/em\u003e\n\tand ends at \u003cem\u003e(100, 100)\u003c/em\u003e. In other words, it's a diagonal gradient, transitioning from the top-left\n\tto the bottom-right. The provided color stops result in the gradient transitioning from\n\tblack to white.\n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "(Double, Double) -\u003e (Double, Double) -\u003e [(Double, Color)] -\u003e Gradient",
        "fct-source": "src/FRP-Helm-Color.html#linear",
        "fct-type": "function",
        "title": "linear"
      },
      "index": {
        "description": "Creates linear gradient Takes starting position ending position and list of color stops which are colors combined with floating value between and that describes at what step along the line between the starting position and ending position the paired color should be transitioned to linear black white The above example creates gradient that starts at and ends at In other words it diagonal gradient transitioning from the top-left to the bottom-right The provided color stops result in the gradient transitioning from black to white",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "linear",
        "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e[(Double,Color)]-\u003eGradient",
        "package": "helm",
        "partial": "",
        "signature": "(Double,Double)-\u003e(Double,Double)-\u003e[(Double,Color)]-\u003eGradient"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:magenta",
      "description": {
        "fct-descr": "\u003cp\u003eA magenta color, combined from bright red and blue. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#magenta",
        "fct-type": "function",
        "title": "magenta"
      },
      "index": {
        "description": "magenta color combined from bright red and blue",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "magenta",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:maroon",
      "description": {
        "fct-descr": "\u003cp\u003eA medium red color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#maroon",
        "fct-type": "function",
        "title": "maroon"
      },
      "index": {
        "description": "medium red color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "maroon",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:navy",
      "description": {
        "fct-descr": "\u003cp\u003eA medium blue color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#navy",
        "fct-type": "function",
        "title": "navy"
      },
      "index": {
        "description": "medium blue color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "navy",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:purple",
      "description": {
        "fct-descr": "\u003cp\u003eA purple color, combined from medium red and blue. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#purple",
        "fct-type": "function",
        "title": "purple"
      },
      "index": {
        "description": "purple color combined from medium red and blue",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "purple",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:radial",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a radial gradient. Takes a starting position and radius, ending position and radius\n    and a list of color stops. See the document for \u003ccode\u003e\u003ca\u003elinear\u003c/a\u003e\u003c/code\u003e for more information on color stops. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "(Double, Double) -\u003e Double -\u003e (Double, Double) -\u003e Double -\u003e [(Double, Color)] -\u003e Gradient",
        "fct-source": "src/FRP-Helm-Color.html#radial",
        "fct-type": "function",
        "title": "radial"
      },
      "index": {
        "description": "Creates radial gradient Takes starting position and radius ending position and radius and list of color stops See the document for linear for more information on color stops",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "radial",
        "normalized": "(Double,Double)-\u003eDouble-\u003e(Double,Double)-\u003eDouble-\u003e[(Double,Color)]-\u003eGradient",
        "package": "helm",
        "partial": "",
        "signature": "(Double,Double)-\u003eDouble-\u003e(Double,Double)-\u003eDouble-\u003e[(Double,Color)]-\u003eGradient"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:red",
      "description": {
        "fct-descr": "\u003cp\u003eA bright red color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#red",
        "fct-type": "function",
        "title": "red"
      },
      "index": {
        "description": "bright red color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "red",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:rgb",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an RGB color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Color",
        "fct-source": "src/FRP-Helm-Color.html#rgb",
        "fct-type": "function",
        "title": "rgb"
      },
      "index": {
        "description": "Creates an RGB color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "rgb",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eColor",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:rgba",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an RGB color, with transparency. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Color",
        "fct-source": "src/FRP-Helm-Color.html#rgba",
        "fct-type": "function",
        "title": "rgba"
      },
      "index": {
        "description": "Creates an RGB color with transparency",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "rgba",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:teal",
      "description": {
        "fct-descr": "\u003cp\u003eA teal color, combined from medium green and blue. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#teal",
        "fct-type": "function",
        "title": "teal"
      },
      "index": {
        "description": "teal color combined from medium green and blue",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "teal",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:violet",
      "description": {
        "fct-descr": "\u003cp\u003eA violet color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#violet",
        "fct-type": "function",
        "title": "violet"
      },
      "index": {
        "description": "violet color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "violet",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:white",
      "description": {
        "fct-descr": "\u003cp\u003eA white color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#white",
        "fct-type": "function",
        "title": "white"
      },
      "index": {
        "description": "white color",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "white",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:yellow",
      "description": {
        "fct-descr": "\u003cp\u003eA yellow color, made from combining red and green. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Color",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Color.html#yellow",
        "fct-type": "function",
        "title": "yellow"
      },
      "index": {
        "description": "yellow color made from combining red and green",
        "hierarchy": "FRP Helm Color",
        "module": "FRP.Helm.Color",
        "name": "yellow",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all the data structures and functions for composing\n    and rendering graphics. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Graphics.html",
        "fct-type": "module",
        "title": "Graphics"
      },
      "index": {
        "description": "Contains all the data structures and functions for composing and rendering graphics",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Graphics",
        "normalized": "",
        "package": "helm",
        "partial": "Graphics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Element",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing something that can be rendered\n    to the screen. Elements are the most important structure\n    in Helm. Games essentially feed the engine a stream\n    of elements which are then rendered directly to the screen.\n    The usual way to render art in a Helm game is to call\n    off to the \u003ccode\u003e\u003ca\u003ecollage\u003c/a\u003e\u003c/code\u003e function, which essentially\n    renders a collection of forms together. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#Element",
        "fct-type": "data",
        "title": "Element"
      },
      "index": {
        "description": "data structure describing something that can be rendered to the screen Elements are the most important structure in Helm Games essentially feed the engine stream of elements which are then rendered directly to the screen The usual way to render art in Helm game is to call off to the collage function which essentially renders collection of forms together",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Element",
        "normalized": "",
        "package": "helm",
        "partial": "Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FillStyle",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing how a shape or path looks when filled. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#FillStyle",
        "fct-type": "data",
        "title": "FillStyle"
      },
      "index": {
        "description": "data structure describing how shape or path looks when filled",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "FillStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Fill Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FontStyle",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing the style of of a piece of font. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#FontStyle",
        "fct-type": "data",
        "title": "FontStyle"
      },
      "index": {
        "description": "data structure describing the style of of piece of font",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "FontStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Font Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FontWeight",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing the weight of a piece of font. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#FontWeight",
        "fct-type": "data",
        "title": "FontWeight"
      },
      "index": {
        "description": "data structure describing the weight of piece of font",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "FontWeight",
        "normalized": "",
        "package": "helm",
        "partial": "Font Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Form",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a form. A form is essentially a notion of a transformed\n    graphic, whether it be an element or shape. See \u003ccode\u003e\u003ca\u003eFormStyle\u003c/a\u003e\u003c/code\u003e for an insight\n    into what sort of graphics can be wrapped in a form. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "data",
        "title": "Form"
      },
      "index": {
        "description": "data structure describing form form is essentially notion of transformed graphic whether it be an element or shape See FormStyle for an insight into what sort of graphics can be wrapped in form",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Form",
        "normalized": "",
        "package": "helm",
        "partial": "Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FormStyle",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a few ways that graphics that can be wrapped in a form\n    and hence transformed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#FormStyle",
        "fct-type": "data",
        "title": "FormStyle"
      },
      "index": {
        "description": "data structure describing few ways that graphics that can be wrapped in form and hence transformed",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "FormStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Form Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:LineCap",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing the shape of the ends of a line. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#LineCap",
        "fct-type": "data",
        "title": "LineCap"
      },
      "index": {
        "description": "data structure describing the shape of the ends of line",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "LineCap",
        "normalized": "",
        "package": "helm",
        "partial": "Line Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:LineJoin",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing the shape of the join of a line, i.e.\n    where separate line segments join. The \u003ccode\u003eSharp\u003c/code\u003e variant takes\n    an argument to limit the length of the join. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#LineJoin",
        "fct-type": "data",
        "title": "LineJoin"
      },
      "index": {
        "description": "data structure describing the shape of the join of line i.e where separate line segments join The Sharp variant takes an argument to limit the length of the join",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "LineJoin",
        "normalized": "",
        "package": "helm",
        "partial": "Line Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:LineStyle",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing how a shape or path looks when stroked. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "data",
        "title": "LineStyle"
      },
      "index": {
        "description": "data structure describing how shape or path looks when stroked",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "LineStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Line Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA data type made up a collection of points that form a path when joined. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Graphics.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "data type made up collection of points that form path when joined",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Path",
        "normalized": "",
        "package": "helm",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Shape",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a some sort of graphically representable object,\n    such as a polygon formed from a list of points or a rectangle. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#Shape",
        "fct-type": "data",
        "title": "Shape"
      },
      "index": {
        "description": "data structure describing some sort of graphically representable object such as polygon formed from list of points or rectangle",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Shape",
        "normalized": "",
        "package": "helm",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Text",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a piece of formatted text. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "data structure describing piece of formatted text",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Text",
        "normalized": "",
        "package": "helm",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ArcShape",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ArcShape (Double, Double) Double Double Double (Double, Double)",
        "fct-source": "src/FRP-Helm-Graphics.html#Shape",
        "fct-type": "function",
        "title": "ArcShape"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ArcShape",
        "normalized": "ArcShape(Double,Double)Double Double Double(Double,Double)",
        "package": "helm",
        "partial": "Arc Shape",
        "signature": "ArcShape(Double,Double)Double Double Double(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:BoldWeight",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "BoldWeight",
        "fct-source": "src/FRP-Helm-Graphics.html#FontWeight",
        "fct-type": "function",
        "title": "BoldWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "BoldWeight",
        "normalized": "",
        "package": "helm",
        "partial": "Bold Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ClippedJoin",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ClippedJoin",
        "fct-source": "src/FRP-Helm-Graphics.html#LineJoin",
        "fct-type": "function",
        "title": "ClippedJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ClippedJoin",
        "normalized": "",
        "package": "helm",
        "partial": "Clipped Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:CollageElement",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "CollageElement Int Int (Maybe (Double, Double)) [Form]",
        "fct-source": "src/FRP-Helm-Graphics.html#Element",
        "fct-type": "function",
        "title": "CollageElement"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "CollageElement",
        "normalized": "CollageElement Int Int(Maybe(Double,Double))[Form]",
        "package": "helm",
        "partial": "Collage Element",
        "signature": "CollageElement Int Int(Maybe(Double,Double))[Form]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ElementForm",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ElementForm Element",
        "fct-source": "src/FRP-Helm-Graphics.html#FormStyle",
        "fct-type": "function",
        "title": "ElementForm"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ElementForm",
        "normalized": "",
        "package": "helm",
        "partial": "Element Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:FlatCap",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "FlatCap",
        "fct-source": "src/FRP-Helm-Graphics.html#LineCap",
        "fct-type": "function",
        "title": "FlatCap"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "FlatCap",
        "normalized": "",
        "package": "helm",
        "partial": "Flat Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Form",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Form",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "function",
        "title": "Form"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Form",
        "normalized": "",
        "package": "helm",
        "partial": "Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Gradient",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Gradient Gradient",
        "fct-source": "src/FRP-Helm-Graphics.html#FillStyle",
        "fct-type": "function",
        "title": "Gradient"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Gradient",
        "normalized": "",
        "package": "helm",
        "partial": "Gradient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:GroupForm",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "GroupForm (Maybe Matrix) [Form]",
        "fct-source": "src/FRP-Helm-Graphics.html#FormStyle",
        "fct-type": "function",
        "title": "GroupForm"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "GroupForm",
        "normalized": "GroupForm(Maybe Matrix)[Form]",
        "package": "helm",
        "partial": "Group Form",
        "signature": "GroupForm(Maybe Matrix)[Form]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ImageElement",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ImageElement (Int, Int) Int Int FilePath Bool",
        "fct-source": "src/FRP-Helm-Graphics.html#Element",
        "fct-type": "function",
        "title": "ImageElement"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ImageElement",
        "normalized": "ImageElement(Int,Int)Int Int FilePath Bool",
        "package": "helm",
        "partial": "Image Element",
        "signature": "ImageElement(Int,Int)Int Int FilePath Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ItalicStyle",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ItalicStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#FontStyle",
        "fct-type": "function",
        "title": "ItalicStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ItalicStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Italic Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:LightWeight",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LightWeight",
        "fct-source": "src/FRP-Helm-Graphics.html#FontWeight",
        "fct-type": "function",
        "title": "LightWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "LightWeight",
        "normalized": "",
        "package": "helm",
        "partial": "Light Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:LineStyle",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LineStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "LineStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "LineStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Line Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:NormalStyle",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "NormalStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#FontStyle",
        "fct-type": "function",
        "title": "NormalStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "NormalStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Normal Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:NormalWeight",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "NormalWeight",
        "fct-source": "src/FRP-Helm-Graphics.html#FontWeight",
        "fct-type": "function",
        "title": "NormalWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "NormalWeight",
        "normalized": "",
        "package": "helm",
        "partial": "Normal Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ObliqueStyle",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ObliqueStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#FontStyle",
        "fct-type": "function",
        "title": "ObliqueStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ObliqueStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Oblique Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:PaddedCap",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "PaddedCap",
        "fct-source": "src/FRP-Helm-Graphics.html#LineCap",
        "fct-type": "function",
        "title": "PaddedCap"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "PaddedCap",
        "normalized": "",
        "package": "helm",
        "partial": "Padded Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:PathForm",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "PathForm LineStyle Path",
        "fct-source": "src/FRP-Helm-Graphics.html#FormStyle",
        "fct-type": "function",
        "title": "PathForm"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "PathForm",
        "normalized": "",
        "package": "helm",
        "partial": "Path Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:PolygonShape",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "PolygonShape Path",
        "fct-source": "src/FRP-Helm-Graphics.html#Shape",
        "fct-type": "function",
        "title": "PolygonShape"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "PolygonShape",
        "normalized": "",
        "package": "helm",
        "partial": "Polygon Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:RectangleShape",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "RectangleShape (Double, Double)",
        "fct-source": "src/FRP-Helm-Graphics.html#Shape",
        "fct-type": "function",
        "title": "RectangleShape"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "RectangleShape",
        "normalized": "RectangleShape(Double,Double)",
        "package": "helm",
        "partial": "Rectangle Shape",
        "signature": "RectangleShape(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:RoundCap",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "RoundCap",
        "fct-source": "src/FRP-Helm-Graphics.html#LineCap",
        "fct-type": "function",
        "title": "RoundCap"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "RoundCap",
        "normalized": "",
        "package": "helm",
        "partial": "Round Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ShapeForm",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "ShapeForm (Either LineStyle FillStyle) Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#FormStyle",
        "fct-type": "function",
        "title": "ShapeForm"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ShapeForm",
        "normalized": "",
        "package": "helm",
        "partial": "Shape Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:SharpJoin",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "SharpJoin Double",
        "fct-source": "src/FRP-Helm-Graphics.html#LineJoin",
        "fct-type": "function",
        "title": "SharpJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "SharpJoin",
        "normalized": "",
        "package": "helm",
        "partial": "Sharp Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:SmoothJoin",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "SmoothJoin",
        "fct-source": "src/FRP-Helm-Graphics.html#LineJoin",
        "fct-type": "function",
        "title": "SmoothJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "SmoothJoin",
        "normalized": "",
        "package": "helm",
        "partial": "Smooth Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Solid",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Solid Color",
        "fct-source": "src/FRP-Helm-Graphics.html#FillStyle",
        "fct-type": "function",
        "title": "Solid"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Solid",
        "normalized": "",
        "package": "helm",
        "partial": "Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Text",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Text",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Text",
        "normalized": "",
        "package": "helm",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:TextElement",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "TextElement Text",
        "fct-source": "src/FRP-Helm-Graphics.html#Element",
        "fct-type": "function",
        "title": "TextElement"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "TextElement",
        "normalized": "",
        "package": "helm",
        "partial": "Text Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Texture",
      "description": {
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Texture String",
        "fct-source": "src/FRP-Helm-Graphics.html#FillStyle",
        "fct-type": "function",
        "title": "Texture"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "Texture",
        "normalized": "",
        "package": "helm",
        "partial": "Texture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:blank",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a empty form, useful for having forms rendered only at some state. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Form",
        "fct-source": "src/FRP-Helm-Graphics.html#blank",
        "fct-type": "function",
        "title": "blank"
      },
      "index": {
        "description": "Creates empty form useful for having forms rendered only at some state",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "blank",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:centeredCollage",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecollage\u003c/a\u003e\u003c/code\u003e, but it centers the forms within the supplied dimensions. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Int -\u003e [Form] -\u003e Element",
        "fct-source": "src/FRP-Helm-Graphics.html#centeredCollage",
        "fct-type": "function",
        "title": "centeredCollage"
      },
      "index": {
        "description": "Like collage but it centers the forms within the supplied dimensions",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "centeredCollage",
        "normalized": "Int-\u003eInt-\u003e[Form]-\u003eElement",
        "package": "helm",
        "partial": "Collage",
        "signature": "Int-\u003eInt-\u003e[Form]-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:circle",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a circle shape with a radius. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#circle",
        "fct-type": "function",
        "title": "circle"
      },
      "index": {
        "description": "Creates circle shape with radius",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "circle",
        "normalized": "Double-\u003eShape",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eShape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:collage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an element from a collection of forms, with width and height arguments.\n    All forms are centered and clipped within the supplied dimensions.\n    It is generally used to directly render a collection of forms.\n\u003c/p\u003e\u003cpre\u003e collage 800 600 [move (100, 100) $ filled red $ square 100,\n                  move (100, 100) $ outlined (solid white) $ circle 50]\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Int -\u003e [Form] -\u003e Element",
        "fct-source": "src/FRP-Helm-Graphics.html#collage",
        "fct-type": "function",
        "title": "collage"
      },
      "index": {
        "description": "Create an element from collection of forms with width and height arguments All forms are centered and clipped within the supplied dimensions It is generally used to directly render collection of forms collage move filled red square move outlined solid white circle",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "collage",
        "normalized": "Int-\u003eInt-\u003e[Form]-\u003eElement",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e[Form]-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:croppedImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an element from an image by cropping it with a certain position, width, height\n    and image file path. This can be used to divide a single image up into smaller ones. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "(Int, Int) -\u003e Int -\u003e Int -\u003e FilePath -\u003e Element",
        "fct-source": "src/FRP-Helm-Graphics.html#croppedImage",
        "fct-type": "function",
        "title": "croppedImage"
      },
      "index": {
        "description": "Create an element from an image by cropping it with certain position width height and image file path This can be used to divide single image up into smaller ones",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "croppedImage",
        "normalized": "(Int,Int)-\u003eInt-\u003eInt-\u003eFilePath-\u003eElement",
        "package": "helm",
        "partial": "Image",
        "signature": "(Int,Int)-\u003eInt-\u003eInt-\u003eFilePath-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:dashed",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a dashed line style with a color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Color -\u003e LineStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#dashed",
        "fct-type": "function",
        "title": "dashed"
      },
      "index": {
        "description": "Create dashed line style with color",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "dashed",
        "normalized": "Color-\u003eLineStyle",
        "package": "helm",
        "partial": "",
        "signature": "Color-\u003eLineStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:defaultLine",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the default line style. By default, the line is black with a width of 1,\n    flat caps and regular sharp joints. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LineStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#defaultLine",
        "fct-type": "function",
        "title": "defaultLine"
      },
      "index": {
        "description": "Creates the default line style By default the line is black with width of flat caps and regular sharp joints",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "defaultLine",
        "normalized": "",
        "package": "helm",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:dotted",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a dotted line style with a color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Color -\u003e LineStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#dotted",
        "fct-type": "function",
        "title": "dotted"
      },
      "index": {
        "description": "Create dotted line style with color",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "dotted",
        "normalized": "Color-\u003eLineStyle",
        "package": "helm",
        "partial": "",
        "signature": "Color-\u003eLineStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:filled",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from a shape by filling it with a specific color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Color -\u003e Shape -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#filled",
        "fct-type": "function",
        "title": "filled"
      },
      "index": {
        "description": "Creates form from shape by filling it with specific color",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "filled",
        "normalized": "Color-\u003eShape-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Color-\u003eShape-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:fittedImage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an element from an image with a given width, height and image file path.\n    If the image dimensions are not the same as given, then it will only use the relevant pixels\n    (i.e. cut out the given dimensions instead of scaling). If the given dimensions are bigger than\n    the actual image, than irrelevant pixels are ignored. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Int -\u003e FilePath -\u003e Element",
        "fct-source": "src/FRP-Helm-Graphics.html#fittedImage",
        "fct-type": "function",
        "title": "fittedImage"
      },
      "index": {
        "description": "Create an element from an image with given width height and image file path If the image dimensions are not the same as given then it will only use the relevant pixels i.e cut out the given dimensions instead of scaling If the given dimensions are bigger than the actual image than irrelevant pixels are ignored",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "fittedImage",
        "normalized": "Int-\u003eInt-\u003eFilePath-\u003eElement",
        "package": "helm",
        "partial": "Image",
        "signature": "Int-\u003eInt-\u003eFilePath-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:fixedCollage",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecenteredCollage\u003c/a\u003e\u003c/code\u003e, but it centers the forms around a specific point. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Int -\u003e (Double, Double) -\u003e [Form] -\u003e Element",
        "fct-source": "src/FRP-Helm-Graphics.html#fixedCollage",
        "fct-type": "function",
        "title": "fixedCollage"
      },
      "index": {
        "description": "Like centeredCollage but it centers the forms around specific point",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "fixedCollage",
        "normalized": "Int-\u003eInt-\u003e(Double,Double)-\u003e[Form]-\u003eElement",
        "package": "helm",
        "partial": "Collage",
        "signature": "Int-\u003eInt-\u003e(Double,Double)-\u003e[Form]-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formScale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "function",
        "title": "formScale"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "formScale",
        "normalized": "",
        "package": "helm",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formStyle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "FormStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "function",
        "title": "formStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "formStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formTheta",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "function",
        "title": "formTheta"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "formTheta",
        "normalized": "",
        "package": "helm",
        "partial": "Theta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formX",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "function",
        "title": "formX"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "formX",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#Form",
        "fct-type": "function",
        "title": "formY"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "formY",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:gradient",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from a shape filled with a gradient. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Gradient -\u003e Shape -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#gradient",
        "fct-type": "function",
        "title": "gradient"
      },
      "index": {
        "description": "Creates form from shape filled with gradient",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "gradient",
        "normalized": "Gradient-\u003eShape-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Gradient-\u003eShape-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eGroups a collection of forms into a single one. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "[Form] -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Groups collection of forms into single one",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "group",
        "normalized": "[Form]-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "[Form]-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:groupTransform",
      "description": {
        "fct-descr": "\u003cp\u003eGroups a collection of forms into a single one, also applying a matrix transformation. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Matrix -\u003e [Form] -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#groupTransform",
        "fct-type": "function",
        "title": "groupTransform"
      },
      "index": {
        "description": "Groups collection of forms into single one also applying matrix transformation",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "groupTransform",
        "normalized": "Matrix-\u003e[Form]-\u003eForm",
        "package": "helm",
        "partial": "Transform",
        "signature": "Matrix-\u003e[Form]-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:image",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an element from an image with a given width, height and image file path.\n    If the image dimensions are not the same as given, then it will stretch/shrink to fit.\n    Only PNG files are supported currently. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Int -\u003e FilePath -\u003e Element",
        "fct-source": "src/FRP-Helm-Graphics.html#image",
        "fct-type": "function",
        "title": "image"
      },
      "index": {
        "description": "Create an element from an image with given width height and image file path If the image dimensions are not the same as given then it will stretch shrink to fit Only PNG files are supported currently",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "image",
        "normalized": "Int-\u003eInt-\u003eFilePath-\u003eElement",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eFilePath-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineCap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LineCap",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "lineCap"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "lineCap",
        "normalized": "",
        "package": "helm",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "lineColor"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "lineColor",
        "normalized": "",
        "package": "helm",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineDashOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "lineDashOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "lineDashOffset",
        "normalized": "",
        "package": "helm",
        "partial": "Dash Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineDashing",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "[Double]",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "lineDashing"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "lineDashing",
        "normalized": "[Double]",
        "package": "helm",
        "partial": "Dashing",
        "signature": "[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineJoin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LineJoin",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "lineJoin"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "lineJoin",
        "normalized": "",
        "package": "helm",
        "partial": "Join",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#LineStyle",
        "fct-type": "function",
        "title": "lineWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "lineWidth",
        "normalized": "",
        "package": "helm",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:move",
      "description": {
        "fct-descr": "\u003cp\u003eMoves a form relative to its current position. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "(Double, Double) -\u003e Form -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#move",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "Moves form relative to its current position",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "move",
        "normalized": "(Double,Double)-\u003eForm-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "(Double,Double)-\u003eForm-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:moveX",
      "description": {
        "fct-descr": "\u003cp\u003eMoves a form's x-coordinate relative to its current position. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Form -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#moveX",
        "fct-type": "function",
        "title": "moveX"
      },
      "index": {
        "description": "Moves form x-coordinate relative to its current position",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "moveX",
        "normalized": "Double-\u003eForm-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eForm-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:moveY",
      "description": {
        "fct-descr": "\u003cp\u003eMoves a form's y-coordinate relative to its current position. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Form -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#moveY",
        "fct-type": "function",
        "title": "moveY"
      },
      "index": {
        "description": "Moves form y-coordinate relative to its current position",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "moveY",
        "normalized": "Double-\u003eForm-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eForm-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ngon",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a generic n-sided polygon (e.g. octagon, pentagon, etc) with\n    an amount of sides and radius. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Double -\u003e Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#ngon",
        "fct-type": "function",
        "title": "ngon"
      },
      "index": {
        "description": "Creates generic n-sided polygon e.g octagon pentagon etc with an amount of sides and radius",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "ngon",
        "normalized": "Int-\u003eDouble-\u003eShape",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eDouble-\u003eShape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:outlined",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from a shape by outlining it with a specific line style. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LineStyle -\u003e Shape -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#outlined",
        "fct-type": "function",
        "title": "outlined"
      },
      "index": {
        "description": "Creates form from shape by outlining it with specific line style",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "outlined",
        "normalized": "LineStyle-\u003eShape-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "LineStyle-\u003eShape-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:oval",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an oval shape with a width and height. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double -\u003e Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#oval",
        "fct-type": "function",
        "title": "oval"
      },
      "index": {
        "description": "Creates an oval shape with width and height",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "oval",
        "normalized": "Double-\u003eDouble-\u003eShape",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eShape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:path",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a path for a collection of points. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "[(Double, Double)] -\u003e Path",
        "fct-source": "src/FRP-Helm-Graphics.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "Creates path for collection of points",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "path",
        "normalized": "[(Double,Double)]-\u003ePath",
        "package": "helm",
        "partial": "",
        "signature": "[(Double,Double)]-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:polygon",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a shape from a path (a list of points). \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Path -\u003e Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#polygon",
        "fct-type": "function",
        "title": "polygon"
      },
      "index": {
        "description": "Creates shape from path list of points",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "polygon",
        "normalized": "Path-\u003eShape",
        "package": "helm",
        "partial": "",
        "signature": "Path-\u003eShape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:rect",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a rectangular shape with a width and height. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double -\u003e Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#rect",
        "fct-type": "function",
        "title": "rect"
      },
      "index": {
        "description": "Creates rectangular shape with width and height",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "rect",
        "normalized": "Double-\u003eDouble-\u003eShape",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eShape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotates a form by an amount (in radians). \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Form -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "Rotates form by an amount in radians",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "rotate",
        "normalized": "Double-\u003eForm-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eForm-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eScales a form by an amount, e.g. scaling by \u003cem\u003e2.0\u003c/em\u003e will double the size. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Form -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#scale",
        "fct-type": "function",
        "title": "scale"
      },
      "index": {
        "description": "Scales form by an amount e.g scaling by will double the size",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "scale",
        "normalized": "Double-\u003eForm-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eForm-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:segment",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a path from a line segment, i.e. a start and end point. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "(Double, Double) -\u003e (Double, Double) -\u003e Path",
        "fct-source": "src/FRP-Helm-Graphics.html#segment",
        "fct-type": "function",
        "title": "segment"
      },
      "index": {
        "description": "Creates path from line segment i.e start and end point",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "segment",
        "normalized": "(Double,Double)-\u003e(Double,Double)-\u003ePath",
        "package": "helm",
        "partial": "",
        "signature": "(Double,Double)-\u003e(Double,Double)-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:solid",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a solid line style with a color. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Color -\u003e LineStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#solid",
        "fct-type": "function",
        "title": "solid"
      },
      "index": {
        "description": "Create solid line style with color",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "solid",
        "normalized": "Color-\u003eLineStyle",
        "package": "helm",
        "partial": "",
        "signature": "Color-\u003eLineStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:sprite",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from a image file path with additional position, width and height arguments.\n    Allows you to splice smaller parts from a single image. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Int -\u003e (Int, Int) -\u003e FilePath -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#sprite",
        "fct-type": "function",
        "title": "sprite"
      },
      "index": {
        "description": "Creates form from image file path with additional position width and height arguments Allows you to splice smaller parts from single image",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "sprite",
        "normalized": "Int-\u003eInt-\u003e(Int,Int)-\u003eFilePath-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e(Int,Int)-\u003eFilePath-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:square",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a square shape with a side length. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Shape",
        "fct-source": "src/FRP-Helm-Graphics.html#square",
        "fct-type": "function",
        "title": "square"
      },
      "index": {
        "description": "Creates square shape with side length",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "square",
        "normalized": "Double-\u003eShape",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eShape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Color",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "textColor"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textColor",
        "normalized": "",
        "package": "helm",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Double",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "textHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textHeight",
        "normalized": "",
        "package": "helm",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textStyle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "FontStyle",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "textStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textStyle",
        "normalized": "",
        "package": "helm",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textTypeface",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "String",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "textTypeface"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textTypeface",
        "normalized": "",
        "package": "helm",
        "partial": "Typeface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textUTF8",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "String",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "textUTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textUTF8",
        "normalized": "",
        "package": "helm",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textWeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "FontWeight",
        "fct-source": "src/FRP-Helm-Graphics.html#Text",
        "fct-type": "function",
        "title": "textWeight"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textWeight",
        "normalized": "",
        "package": "helm",
        "partial": "Weight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textured",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from a shape with a tiled texture and image file path. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "String -\u003e Shape -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#textured",
        "fct-type": "function",
        "title": "textured"
      },
      "index": {
        "description": "Creates form from shape with tiled texture and image file path",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "textured",
        "normalized": "String-\u003eShape-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "String-\u003eShape-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:toForm",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from an element. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "Element -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#toForm",
        "fct-type": "function",
        "title": "toForm"
      },
      "index": {
        "description": "Creates form from an element",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "toForm",
        "normalized": "Element-\u003eForm",
        "package": "helm",
        "partial": "Form",
        "signature": "Element-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:traced",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a form from a path by tracing it with a specific line style. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Graphics",
        "fct-package": "helm",
        "fct-signature": "LineStyle -\u003e Path -\u003e Form",
        "fct-source": "src/FRP-Helm-Graphics.html#traced",
        "fct-type": "function",
        "title": "traced"
      },
      "index": {
        "description": "Creates form from path by tracing it with specific line style",
        "hierarchy": "FRP Helm Graphics",
        "module": "FRP.Helm.Graphics",
        "name": "traced",
        "normalized": "LineStyle-\u003ePath-\u003eForm",
        "package": "helm",
        "partial": "",
        "signature": "LineStyle-\u003ePath-\u003eForm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from joysticks. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Joystick.html",
        "fct-type": "module",
        "title": "Joystick"
      },
      "index": {
        "description": "Contains signals that sample input from joysticks",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "Joystick",
        "normalized": "",
        "package": "helm",
        "partial": "Joystick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#t:Joystick",
      "description": {
        "fct-descr": "\u003cp\u003eA type describing a joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Joystick.html#Joystick",
        "fct-type": "type",
        "title": "Joystick"
      },
      "index": {
        "description": "type describing joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "Joystick",
        "normalized": "",
        "package": "helm",
        "partial": "Joystick",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:available",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of joysticks available. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#available",
        "fct-type": "function",
        "title": "available"
      },
      "index": {
        "description": "The amount of joysticks available",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "available",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableAxes",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of axes available for a joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#availableAxes",
        "fct-type": "function",
        "title": "availableAxes"
      },
      "index": {
        "description": "The amount of axes available for joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "availableAxes",
        "normalized": "Joystick-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "Axes",
        "signature": "Joystick-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableBalls",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of balls available for a joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#availableBalls",
        "fct-type": "function",
        "title": "availableBalls"
      },
      "index": {
        "description": "The amount of balls available for joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "availableBalls",
        "normalized": "Joystick-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "Balls",
        "signature": "Joystick-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableButtons",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of buttons available for a joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#availableButtons",
        "fct-type": "function",
        "title": "availableButtons"
      },
      "index": {
        "description": "The amount of buttons available for joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "availableButtons",
        "normalized": "Joystick-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "Buttons",
        "signature": "Joystick-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableHats",
      "description": {
        "fct-descr": "\u003cp\u003eThe amount of hats available for a joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#availableHats",
        "fct-type": "function",
        "title": "availableHats"
      },
      "index": {
        "description": "The amount of hats available for joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "availableHats",
        "normalized": "Joystick-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "Hats",
        "signature": "Joystick-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:axis",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state of the axis of the joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e Int -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#axis",
        "fct-type": "function",
        "title": "axis"
      },
      "index": {
        "description": "The current state of the axis of the joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "axis",
        "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "",
        "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:ball",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state of the ball of the joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e Int -\u003e SignalGen (Signal (Int, Int))",
        "fct-source": "src/FRP-Helm-Joystick.html#ball",
        "fct-type": "function",
        "title": "ball"
      },
      "index": {
        "description": "The current state of the ball of the joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "ball",
        "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))",
        "package": "helm",
        "partial": "",
        "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state of the button of the joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e Int -\u003e SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Joystick.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "The current state of the button of the joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "button",
        "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal Bool)",
        "package": "helm",
        "partial": "",
        "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:hat",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state of the hat of the joystick, returned\n    as a directional tuple. For example, up is \u003cem\u003e(0, -1)\u003c/em\u003e,\n    left \u003cem\u003e(-1, 0)\u003c/em\u003e, bottom-right is \u003cem\u003e(1, 1)\u003c/em\u003e, etc. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e Int -\u003e SignalGen (Signal (Int, Int))",
        "fct-source": "src/FRP-Helm-Joystick.html#hat",
        "fct-type": "function",
        "title": "hat"
      },
      "index": {
        "description": "The current state of the hat of the joystick returned as directional tuple For example up is left bottom-right is etc",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "hat",
        "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))",
        "package": "helm",
        "partial": "",
        "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eThe index of a joystick. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Joystick -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Joystick.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "The index of joystick",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "index",
        "normalized": "Joystick-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "",
        "signature": "Joystick-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a joystick. Can throw an exception when sampled if the joystick index is invalid. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e SignalGen (Signal String)",
        "fct-source": "src/FRP-Helm-Joystick.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "The name of joystick Can throw an exception when sampled if the joystick index is invalid",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "name",
        "normalized": "Int-\u003eSignalGen(Signal String)",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eSignalGen(Signal String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eThe joystick at a certain slot. Can throw an exception when sampled if the joystick index is invalid. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Joystick",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e SignalGen (Signal Joystick)",
        "fct-source": "src/FRP-Helm-Joystick.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "The joystick at certain slot Can throw an exception when sampled if the joystick index is invalid",
        "hierarchy": "FRP Helm Joystick",
        "module": "FRP.Helm.Joystick",
        "name": "open",
        "normalized": "Int-\u003eSignalGen(Signal Joystick)",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eSignalGen(Signal Joystick)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from the keyboard. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Keyboard.html",
        "fct-type": "module",
        "title": "Keyboard"
      },
      "index": {
        "description": "Contains signals that sample input from the keyboard",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Keyboard",
        "normalized": "",
        "package": "helm",
        "partial": "Keyboard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a physical key on a keyboard. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "data structure describing physical key on keyboard",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "AKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "AKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "AKey",
        "normalized": "",
        "package": "helm",
        "partial": "AKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AmpersandKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "AmpersandKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "AmpersandKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "AmpersandKey",
        "normalized": "",
        "package": "helm",
        "partial": "Ampersand Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AsteriskKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "AsteriskKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "AsteriskKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "AsteriskKey",
        "normalized": "",
        "package": "helm",
        "partial": "Asterisk Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AtKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "AtKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "AtKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "AtKey",
        "normalized": "",
        "package": "helm",
        "partial": "At Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "BKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "BKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "BKey",
        "normalized": "",
        "package": "helm",
        "partial": "BKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BackquoteKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "BackquoteKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "BackquoteKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "BackquoteKey",
        "normalized": "",
        "package": "helm",
        "partial": "Backquote Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BackslashKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "BackslashKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "BackslashKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "BackslashKey",
        "normalized": "",
        "package": "helm",
        "partial": "Backslash Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BackspaceKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "BackspaceKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "BackspaceKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "BackspaceKey",
        "normalized": "",
        "package": "helm",
        "partial": "Backspace Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BreakKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "BreakKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "BreakKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "BreakKey",
        "normalized": "",
        "package": "helm",
        "partial": "Break Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "CKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "CKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "CKey",
        "normalized": "",
        "package": "helm",
        "partial": "CKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CapsLockKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "CapsLockKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "CapsLockKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "CapsLockKey",
        "normalized": "",
        "package": "helm",
        "partial": "Caps Lock Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CaretKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "CaretKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "CaretKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "CaretKey",
        "normalized": "",
        "package": "helm",
        "partial": "Caret Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ClearKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ClearKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ClearKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ClearKey",
        "normalized": "",
        "package": "helm",
        "partial": "Clear Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ColonKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ColonKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ColonKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ColonKey",
        "normalized": "",
        "package": "helm",
        "partial": "Colon Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CommaKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "CommaKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "CommaKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "CommaKey",
        "normalized": "",
        "package": "helm",
        "partial": "Comma Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ComposeKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ComposeKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ComposeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ComposeKey",
        "normalized": "",
        "package": "helm",
        "partial": "Compose Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "DKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "DKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "DKey",
        "normalized": "",
        "package": "helm",
        "partial": "DKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DeleteKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "DeleteKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "DeleteKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "DeleteKey",
        "normalized": "",
        "package": "helm",
        "partial": "Delete Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DollarKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "DollarKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "DollarKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "DollarKey",
        "normalized": "",
        "package": "helm",
        "partial": "Dollar Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DownKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "DownKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "DownKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "DownKey",
        "normalized": "",
        "package": "helm",
        "partial": "Down Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "EKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "EKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "EKey",
        "normalized": "",
        "package": "helm",
        "partial": "EKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EndKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "EndKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "EndKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "EndKey",
        "normalized": "",
        "package": "helm",
        "partial": "End Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EnterKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "EnterKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "EnterKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "EnterKey",
        "normalized": "",
        "package": "helm",
        "partial": "Enter Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EqualsKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "EqualsKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "EqualsKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "EqualsKey",
        "normalized": "",
        "package": "helm",
        "partial": "Equals Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EscapeKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "EscapeKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "EscapeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "EscapeKey",
        "normalized": "",
        "package": "helm",
        "partial": "Escape Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EuroKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "EuroKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "EuroKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "EuroKey",
        "normalized": "",
        "package": "helm",
        "partial": "Euro Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ExclaimKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ExclaimKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ExclaimKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ExclaimKey",
        "normalized": "",
        "package": "helm",
        "partial": "Exclaim Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F10Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F10Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F10Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F10Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F11Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F11Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F11Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F11Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F12Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F12Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F12Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F12Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F13Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F13Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F13Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F13Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F14Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F14Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F14Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F14Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F15Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F15Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F15Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F15Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F1Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F1Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F1Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F1Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F2Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F2Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F2Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F2Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F3Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F3Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F3Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F3Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F4Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F4Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F4Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F4Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F5Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F5Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F5Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F5Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F6Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F6Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F6Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F6Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F7Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F7Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F7Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F7Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F8Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F8Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F8Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F8Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F9Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "F9Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "F9Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "F9Key",
        "normalized": "",
        "package": "helm",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:FKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "FKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "FKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "FKey",
        "normalized": "",
        "package": "helm",
        "partial": "FKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:GKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "GKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "GKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "GKey",
        "normalized": "",
        "package": "helm",
        "partial": "GKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:GreaterKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "GreaterKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "GreaterKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "GreaterKey",
        "normalized": "",
        "package": "helm",
        "partial": "Greater Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "HKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "HKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "HKey",
        "normalized": "",
        "package": "helm",
        "partial": "HKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HashKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "HashKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "HashKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "HashKey",
        "normalized": "",
        "package": "helm",
        "partial": "Hash Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HelpKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "HelpKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "HelpKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "HelpKey",
        "normalized": "",
        "package": "helm",
        "partial": "Help Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HomeKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "HomeKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "HomeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "HomeKey",
        "normalized": "",
        "package": "helm",
        "partial": "Home Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:IKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "IKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "IKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "IKey",
        "normalized": "",
        "package": "helm",
        "partial": "IKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:InsertKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "InsertKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "InsertKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "InsertKey",
        "normalized": "",
        "package": "helm",
        "partial": "Insert Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:JKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "JKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "JKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "JKey",
        "normalized": "",
        "package": "helm",
        "partial": "JKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KKey",
        "normalized": "",
        "package": "helm",
        "partial": "KKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadDivideKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadDivideKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadDivideKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadDivideKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Divide Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadEnterKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadEnterKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadEnterKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadEnterKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Enter Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadEqualsKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadEqualsKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadEqualsKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadEqualsKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Equals Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadMinusKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadMinusKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadMinusKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadMinusKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Minus Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadMultiplyKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadMultiplyKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadMultiplyKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadMultiplyKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Multiply Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum0Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum0Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum0Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum0Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum1Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum1Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum1Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum1Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum2Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum2Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum2Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum2Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum3Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum3Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum3Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum3Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum4Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum4Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum4Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum4Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum5Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum5Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum5Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum5Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum6Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum6Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum6Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum6Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum7Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum7Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum7Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum7Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum8Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum8Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum8Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum8Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum9Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadNum9Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadNum9Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadNum9Key",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadPeriodKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadPeriodKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadPeriodKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadPeriodKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Period Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadPlusKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "KeypadPlusKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "KeypadPlusKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "KeypadPlusKey",
        "normalized": "",
        "package": "helm",
        "partial": "Keypad Plus Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LAltKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LAltKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LAltKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LAltKey",
        "normalized": "",
        "package": "helm",
        "partial": "LAlt Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LCtrlKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LCtrlKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LCtrlKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LCtrlKey",
        "normalized": "",
        "package": "helm",
        "partial": "LCtrl Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LKey",
        "normalized": "",
        "package": "helm",
        "partial": "LKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LMetaKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LMetaKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LMetaKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LMetaKey",
        "normalized": "",
        "package": "helm",
        "partial": "LMeta Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LShiftKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LShiftKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LShiftKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LShiftKey",
        "normalized": "",
        "package": "helm",
        "partial": "LShift Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LSuperKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LSuperKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LSuperKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LSuperKey",
        "normalized": "",
        "package": "helm",
        "partial": "LSuper Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LeftBracketKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LeftBracketKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LeftBracketKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LeftBracketKey",
        "normalized": "",
        "package": "helm",
        "partial": "Left Bracket Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LeftKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LeftKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LeftKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LeftKey",
        "normalized": "",
        "package": "helm",
        "partial": "Left Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LeftParenKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LeftParenKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LeftParenKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LeftParenKey",
        "normalized": "",
        "package": "helm",
        "partial": "Left Paren Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LessKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "LessKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "LessKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "LessKey",
        "normalized": "",
        "package": "helm",
        "partial": "Less Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:MKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "MKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "MKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "MKey",
        "normalized": "",
        "package": "helm",
        "partial": "MKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:MenuKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "MenuKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "MenuKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "MenuKey",
        "normalized": "",
        "package": "helm",
        "partial": "Menu Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:MinusKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "MinusKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "MinusKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "MinusKey",
        "normalized": "",
        "package": "helm",
        "partial": "Minus Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ModeKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ModeKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ModeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ModeKey",
        "normalized": "",
        "package": "helm",
        "partial": "Mode Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:NKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "NKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "NKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "NKey",
        "normalized": "",
        "package": "helm",
        "partial": "NKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num0Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num0Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num0Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num0Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num1Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num1Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num1Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num1Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num2Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num2Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num2Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num2Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num3Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num3Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num3Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num3Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num4Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num4Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num4Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num4Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num5Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num5Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num5Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num5Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num6Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num6Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num6Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num6Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num7Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num7Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num7Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num7Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num8Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num8Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num8Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num8Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num9Key",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Num9Key",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "Num9Key"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "Num9Key",
        "normalized": "",
        "package": "helm",
        "partial": "Num Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:NumLockKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "NumLockKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "NumLockKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "NumLockKey",
        "normalized": "",
        "package": "helm",
        "partial": "Num Lock Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:OKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "OKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "OKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "OKey",
        "normalized": "",
        "package": "helm",
        "partial": "OKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PKey",
        "normalized": "",
        "package": "helm",
        "partial": "PKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PageDownKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PageDownKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PageDownKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PageDownKey",
        "normalized": "",
        "package": "helm",
        "partial": "Page Down Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PageUpKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PageUpKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PageUpKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PageUpKey",
        "normalized": "",
        "package": "helm",
        "partial": "Page Up Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PauseKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PauseKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PauseKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PauseKey",
        "normalized": "",
        "package": "helm",
        "partial": "Pause Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PeriodKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PeriodKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PeriodKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PeriodKey",
        "normalized": "",
        "package": "helm",
        "partial": "Period Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PlusKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PlusKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PlusKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PlusKey",
        "normalized": "",
        "package": "helm",
        "partial": "Plus Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PowerKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PowerKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PowerKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PowerKey",
        "normalized": "",
        "package": "helm",
        "partial": "Power Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PrintKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "PrintKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "PrintKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "PrintKey",
        "normalized": "",
        "package": "helm",
        "partial": "Print Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "QKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "QKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "QKey",
        "normalized": "",
        "package": "helm",
        "partial": "QKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QuestionKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "QuestionKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "QuestionKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "QuestionKey",
        "normalized": "",
        "package": "helm",
        "partial": "Question Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QuoteKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "QuoteKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "QuoteKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "QuoteKey",
        "normalized": "",
        "package": "helm",
        "partial": "Quote Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QuotedBlKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "QuotedBlKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "QuotedBlKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "QuotedBlKey",
        "normalized": "",
        "package": "helm",
        "partial": "Quoted Bl Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RAltKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RAltKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RAltKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RAltKey",
        "normalized": "",
        "package": "helm",
        "partial": "RAlt Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RCtrlKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RCtrlKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RCtrlKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RCtrlKey",
        "normalized": "",
        "package": "helm",
        "partial": "RCtrl Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RKey",
        "normalized": "",
        "package": "helm",
        "partial": "RKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RMetaKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RMetaKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RMetaKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RMetaKey",
        "normalized": "",
        "package": "helm",
        "partial": "RMeta Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RShiftKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RShiftKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RShiftKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RShiftKey",
        "normalized": "",
        "package": "helm",
        "partial": "RShift Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RSuperKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RSuperKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RSuperKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RSuperKey",
        "normalized": "",
        "package": "helm",
        "partial": "RSuper Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RightBracketKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RightBracketKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RightBracketKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RightBracketKey",
        "normalized": "",
        "package": "helm",
        "partial": "Right Bracket Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RightKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RightKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RightKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RightKey",
        "normalized": "",
        "package": "helm",
        "partial": "Right Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RightParenKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "RightParenKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "RightParenKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "RightParenKey",
        "normalized": "",
        "package": "helm",
        "partial": "Right Paren Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "SKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "SKey",
        "normalized": "",
        "package": "helm",
        "partial": "SKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ScrollLockKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ScrollLockKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ScrollLockKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ScrollLockKey",
        "normalized": "",
        "package": "helm",
        "partial": "Scroll Lock Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SemicolonKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SemicolonKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "SemicolonKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "SemicolonKey",
        "normalized": "",
        "package": "helm",
        "partial": "Semicolon Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SlashKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SlashKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "SlashKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "SlashKey",
        "normalized": "",
        "package": "helm",
        "partial": "Slash Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SpaceKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SpaceKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "SpaceKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "SpaceKey",
        "normalized": "",
        "package": "helm",
        "partial": "Space Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SysReqKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SysReqKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "SysReqKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "SysReqKey",
        "normalized": "",
        "package": "helm",
        "partial": "Sys Req Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:TKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "TKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "TKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "TKey",
        "normalized": "",
        "package": "helm",
        "partial": "TKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:TabKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "TabKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "TabKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "TabKey",
        "normalized": "",
        "package": "helm",
        "partial": "Tab Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "UKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "UKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "UKey",
        "normalized": "",
        "package": "helm",
        "partial": "UKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UnderscoreKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "UnderscoreKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "UnderscoreKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "UnderscoreKey",
        "normalized": "",
        "package": "helm",
        "partial": "Underscore Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UndoKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "UndoKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "UndoKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "UndoKey",
        "normalized": "",
        "package": "helm",
        "partial": "Undo Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UpKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "UpKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "UpKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "UpKey",
        "normalized": "",
        "package": "helm",
        "partial": "Up Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:VKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "VKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "VKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "VKey",
        "normalized": "",
        "package": "helm",
        "partial": "VKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:WKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "WKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "WKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "WKey",
        "normalized": "",
        "package": "helm",
        "partial": "WKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:XKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "XKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "XKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "XKey",
        "normalized": "",
        "package": "helm",
        "partial": "XKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:YKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "YKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "YKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "YKey",
        "normalized": "",
        "package": "helm",
        "partial": "YKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ZKey",
      "description": {
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "ZKey",
        "fct-source": "src/FRP-Helm-Keyboard.html#Key",
        "fct-type": "function",
        "title": "ZKey"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ZKey",
        "normalized": "",
        "package": "helm",
        "partial": "ZKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:arrows",
      "description": {
        "fct-descr": "\u003cp\u003eA directional tuple combined from the arrow keys. When none of the arrow keys\n    are being pressed this signal samples to \u003cem\u003e(0, 0)\u003c/em\u003e, otherwise it samples to a\n    direction based on which keys are pressed. For example, pressing the left key\n    results in \u003cem\u003e(-1, 0)\u003c/em\u003e, the down key \u003cem\u003e(0, 1)\u003c/em\u003e, up and right \u003cem\u003e(1, -1)\u003c/em\u003e, etc. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal (Int, Int))",
        "fct-source": "src/FRP-Helm-Keyboard.html#arrows",
        "fct-type": "function",
        "title": "arrows"
      },
      "index": {
        "description": "directional tuple combined from the arrow keys When none of the arrow keys are being pressed this signal samples to otherwise it samples to direction based on which keys are pressed For example pressing the left key results in the down key up and right etc",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "arrows",
        "normalized": "SignalGen(Signal(Int,Int))",
        "package": "helm",
        "partial": "",
        "signature": "SignalGen(Signal(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ctrl",
      "description": {
        "fct-descr": "\u003cp\u003eWhether either control key is pressed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Keyboard.html#ctrl",
        "fct-type": "function",
        "title": "ctrl"
      },
      "index": {
        "description": "Whether either control key is pressed",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "ctrl",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:enter",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the enter (a.k.a. return) key is pressed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Keyboard.html#enter",
        "fct-type": "function",
        "title": "enter"
      },
      "index": {
        "description": "Whether the enter a.k.a return key is pressed",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "enter",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:isDown",
      "description": {
        "fct-descr": "\u003cp\u003eWhether a key is pressed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "Key -\u003e SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Keyboard.html#isDown",
        "fct-type": "function",
        "title": "isDown"
      },
      "index": {
        "description": "Whether key is pressed",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "isDown",
        "normalized": "Key-\u003eSignalGen(Signal Bool)",
        "package": "helm",
        "partial": "Down",
        "signature": "Key-\u003eSignalGen(Signal Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:keysDown",
      "description": {
        "fct-descr": "\u003cp\u003eA list of keys that are currently being pressed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal [Key])",
        "fct-source": "src/FRP-Helm-Keyboard.html#keysDown",
        "fct-type": "function",
        "title": "keysDown"
      },
      "index": {
        "description": "list of keys that are currently being pressed",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "keysDown",
        "normalized": "SignalGen(Signal[Key])",
        "package": "helm",
        "partial": "Down",
        "signature": "SignalGen(Signal[Key])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:shift",
      "description": {
        "fct-descr": "\u003cp\u003eWhether either shift key is pressed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Keyboard.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "Whether either shift key is pressed",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "shift",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the space key is pressed. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Keyboard.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "Whether the space key is pressed",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "space",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:wasd",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to the \u003ccode\u003e\u003ca\u003earrows\u003c/a\u003e\u003c/code\u003e signal, but uses the popular WASD movement controls instead. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Keyboard",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal (Int, Int))",
        "fct-source": "src/FRP-Helm-Keyboard.html#wasd",
        "fct-type": "function",
        "title": "wasd"
      },
      "index": {
        "description": "Similar to the arrows signal but uses the popular WASD movement controls instead",
        "hierarchy": "FRP Helm Keyboard",
        "module": "FRP.Helm.Keyboard",
        "name": "wasd",
        "normalized": "SignalGen(Signal(Int,Int))",
        "package": "helm",
        "partial": "",
        "signature": "SignalGen(Signal(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from the mouse. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Mouse.html",
        "fct-type": "module",
        "title": "Mouse"
      },
      "index": {
        "description": "Contains signals that sample input from the mouse",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "Mouse",
        "normalized": "",
        "package": "helm",
        "partial": "Mouse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#t:Mouse",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing a button on a mouse. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Mouse.html#Mouse",
        "fct-type": "data",
        "title": "Mouse"
      },
      "index": {
        "description": "data structure describing button on mouse",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "Mouse",
        "normalized": "",
        "package": "helm",
        "partial": "Mouse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:LeftMouse",
      "description": {
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "LeftMouse",
        "fct-source": "src/FRP-Helm-Mouse.html#Mouse",
        "fct-type": "function",
        "title": "LeftMouse"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "LeftMouse",
        "normalized": "",
        "package": "helm",
        "partial": "Left Mouse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:MiddleMouse",
      "description": {
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "MiddleMouse",
        "fct-source": "src/FRP-Helm-Mouse.html#Mouse",
        "fct-type": "function",
        "title": "MiddleMouse"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "MiddleMouse",
        "normalized": "",
        "package": "helm",
        "partial": "Middle Mouse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:RightMouse",
      "description": {
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "RightMouse",
        "fct-source": "src/FRP-Helm-Mouse.html#Mouse",
        "fct-type": "function",
        "title": "RightMouse"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "RightMouse",
        "normalized": "",
        "package": "helm",
        "partial": "Right Mouse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:isDown",
      "description": {
        "fct-descr": "\u003cp\u003eThe current state of a certain mouse button.\n    True if the mouse is down, false otherwise. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "Mouse -\u003e SignalGen (Signal Bool)",
        "fct-source": "src/FRP-Helm-Mouse.html#isDown",
        "fct-type": "function",
        "title": "isDown"
      },
      "index": {
        "description": "The current state of certain mouse button True if the mouse is down false otherwise",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "isDown",
        "normalized": "Mouse-\u003eSignalGen(Signal Bool)",
        "package": "helm",
        "partial": "Down",
        "signature": "Mouse-\u003eSignalGen(Signal Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:position",
      "description": {
        "fct-descr": "\u003cp\u003eThe current position of the mouse. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal (Int, Int))",
        "fct-source": "src/FRP-Helm-Mouse.html#position",
        "fct-type": "function",
        "title": "position"
      },
      "index": {
        "description": "The current position of the mouse",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "position",
        "normalized": "SignalGen(Signal(Int,Int))",
        "package": "helm",
        "partial": "",
        "signature": "SignalGen(Signal(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:x",
      "description": {
        "fct-descr": "\u003cp\u003eThe current x-coordinate of the mouse. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Mouse.html#x",
        "fct-type": "function",
        "title": "x"
      },
      "index": {
        "description": "The current x-coordinate of the mouse",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "x",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:y",
      "description": {
        "fct-descr": "\u003cp\u003eThe current y-coordinate of the mouse. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Mouse",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Mouse.html#y",
        "fct-type": "function",
        "title": "y"
      },
      "index": {
        "description": "The current y-coordinate of the mouse",
        "hierarchy": "FRP Helm Mouse",
        "module": "FRP.Helm.Mouse",
        "name": "y",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all the data structures and functions for composing\n    pieces of formatted text. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Contains all the data structures and functions for composing pieces of formatted text",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "Text",
        "normalized": "",
        "package": "helm",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:asText",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a text element from any showable type, defaulting to\n    the monospace typeface. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "a -\u003e Element",
        "fct-source": "src/FRP-Helm-Text.html#asText",
        "fct-type": "function",
        "title": "asText"
      },
      "index": {
        "description": "Creates text element from any showable type defaulting to the monospace typeface",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "asText",
        "normalized": "a-\u003eElement",
        "package": "helm",
        "partial": "Text",
        "signature": "a-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:bold",
      "description": {
        "fct-descr": "\u003cp\u003eSets the weight of a piece of text to bold. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#bold",
        "fct-type": "function",
        "title": "bold"
      },
      "index": {
        "description": "Sets the weight of piece of text to bold",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "bold",
        "normalized": "Text-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:color",
      "description": {
        "fct-descr": "\u003cp\u003eSets the color of a piece of text. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Color -\u003e Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#color",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "Sets the color of piece of text",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "color",
        "normalized": "Color-\u003eText-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Color-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:defaultText",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the default text. By default the text is black sans-serif\n    with a height of 14pt. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text",
        "fct-source": "src/FRP-Helm-Text.html#defaultText",
        "fct-type": "function",
        "title": "defaultText"
      },
      "index": {
        "description": "Creates the default text By default the text is black sans-serif with height of pt",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "defaultText",
        "normalized": "",
        "package": "helm",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:header",
      "description": {
        "fct-descr": "\u003cp\u003eSets the size of a text noticeably large. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "Sets the size of text noticeably large",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "header",
        "normalized": "Text-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:height",
      "description": {
        "fct-descr": "\u003cp\u003eSets the size of a piece of text. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "Sets the size of piece of text",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "height",
        "normalized": "Double-\u003eText-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:italic",
      "description": {
        "fct-descr": "\u003cp\u003eSets the slant of a piece of text to italic. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#italic",
        "fct-type": "function",
        "title": "italic"
      },
      "index": {
        "description": "Sets the slant of piece of text to italic",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "italic",
        "normalized": "Text-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:light",
      "description": {
        "fct-descr": "\u003cp\u003eSets the weight of a piece of text to light. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#light",
        "fct-type": "function",
        "title": "light"
      },
      "index": {
        "description": "Sets the weight of piece of text to light",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "light",
        "normalized": "Text-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:monospace",
      "description": {
        "fct-descr": "\u003cp\u003eSets the typeface of the text to monospace. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#monospace",
        "fct-type": "function",
        "title": "monospace"
      },
      "index": {
        "description": "Sets the typeface of the text to monospace",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "monospace",
        "normalized": "Text-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:oblique",
      "description": {
        "fct-descr": "\u003cp\u003eSets the slant of a piece of text to oblique. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#oblique",
        "fct-type": "function",
        "title": "oblique"
      },
      "index": {
        "description": "Sets the slant of piece of text to oblique",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "oblique",
        "normalized": "Text-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:plainText",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a text element from a string. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "String -\u003e Element",
        "fct-source": "src/FRP-Helm-Text.html#plainText",
        "fct-type": "function",
        "title": "plainText"
      },
      "index": {
        "description": "Creates text element from string",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "plainText",
        "normalized": "String-\u003eElement",
        "package": "helm",
        "partial": "Text",
        "signature": "String-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an element from a text. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "Text -\u003e Element",
        "fct-source": "src/FRP-Helm-Text.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Creates an element from text",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "text",
        "normalized": "Text-\u003eElement",
        "package": "helm",
        "partial": "",
        "signature": "Text-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:toText",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a text from a string. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "String -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#toText",
        "fct-type": "function",
        "title": "toText"
      },
      "index": {
        "description": "Creates text from string",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "toText",
        "normalized": "String-\u003eText",
        "package": "helm",
        "partial": "Text",
        "signature": "String-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:typeface",
      "description": {
        "fct-descr": "\u003cp\u003eSets the typeface of the text. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Text",
        "fct-package": "helm",
        "fct-signature": "String -\u003e Text -\u003e Text",
        "fct-source": "src/FRP-Helm-Text.html#typeface",
        "fct-type": "function",
        "title": "typeface"
      },
      "index": {
        "description": "Sets the typeface of the text",
        "hierarchy": "FRP Helm Text",
        "module": "FRP.Helm.Text",
        "name": "typeface",
        "normalized": "String-\u003eText-\u003eText",
        "package": "helm",
        "partial": "",
        "signature": "String-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains functions for composing units of time and signals that sample from the game clock. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Time.html",
        "fct-type": "module",
        "title": "Time"
      },
      "index": {
        "description": "Contains functions for composing units of time and signals that sample from the game clock",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "Time",
        "normalized": "",
        "package": "helm",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eA type describing an amount of time in an arbitary unit. Use the time composing/converting functions to manipulate\n    time values. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Time.html#Time",
        "fct-type": "type",
        "title": "Time"
      },
      "index": {
        "description": "type describing an amount of time in an arbitary unit Use the time composing converting functions to manipulate time values",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "Time",
        "normalized": "",
        "package": "helm",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eA signal that blocks the game thread for a certain amount of time when sampled and then returns the\n    amount of time it blocked for. Please note that delaying by values smaller than 1 millisecond can have\n    platform-specific results. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time -\u003e SignalGen (Signal Time)",
        "fct-source": "src/FRP-Helm-Time.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "signal that blocks the game thread for certain amount of time when sampled and then returns the amount of time it blocked for Please note that delaying by values smaller than millisecond can have platform-specific results",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "delay",
        "normalized": "Time-\u003eSignalGen(Signal Time)",
        "package": "helm",
        "partial": "",
        "signature": "Time-\u003eSignalGen(Signal Time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:delta",
      "description": {
        "fct-descr": "\u003cp\u003eA signal that returns the time since it was last sampled when sampled. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Time)",
        "fct-source": "src/FRP-Helm-Time.html#delta",
        "fct-type": "function",
        "title": "delta"
      },
      "index": {
        "description": "signal that returns the time since it was last sampled when sampled",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "delta",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:fps",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a frames-per-second value into a time value. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Int -\u003e Time",
        "fct-source": "src/FRP-Helm-Time.html#fps",
        "fct-type": "function",
        "title": "fps"
      },
      "index": {
        "description": "Converts frames-per-second value into time value",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "fps",
        "normalized": "Int-\u003eTime",
        "package": "helm",
        "partial": "",
        "signature": "Int-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:hour",
      "description": {
        "fct-descr": "\u003cp\u003eA time value representing one hour. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time",
        "fct-source": "src/FRP-Helm-Time.html#hour",
        "fct-type": "function",
        "title": "hour"
      },
      "index": {
        "description": "time value representing one hour",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "hour",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inHours",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a time value to a fractional value, in hours. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time -\u003e Double",
        "fct-source": "src/FRP-Helm-Time.html#inHours",
        "fct-type": "function",
        "title": "inHours"
      },
      "index": {
        "description": "Converts time value to fractional value in hours",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "inHours",
        "normalized": "Time-\u003eDouble",
        "package": "helm",
        "partial": "Hours",
        "signature": "Time-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inMilliseconds",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a time value to a fractional value, in milliseconds. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time -\u003e Double",
        "fct-source": "src/FRP-Helm-Time.html#inMilliseconds",
        "fct-type": "function",
        "title": "inMilliseconds"
      },
      "index": {
        "description": "Converts time value to fractional value in milliseconds",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "inMilliseconds",
        "normalized": "Time-\u003eDouble",
        "package": "helm",
        "partial": "Milliseconds",
        "signature": "Time-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inMinutes",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a time value to a fractional value, in minutes. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time -\u003e Double",
        "fct-source": "src/FRP-Helm-Time.html#inMinutes",
        "fct-type": "function",
        "title": "inMinutes"
      },
      "index": {
        "description": "Converts time value to fractional value in minutes",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "inMinutes",
        "normalized": "Time-\u003eDouble",
        "package": "helm",
        "partial": "Minutes",
        "signature": "Time-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inSeconds",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a time value to a fractional value, in seconds. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time -\u003e Double",
        "fct-source": "src/FRP-Helm-Time.html#inSeconds",
        "fct-type": "function",
        "title": "inSeconds"
      },
      "index": {
        "description": "Converts time value to fractional value in seconds",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "inSeconds",
        "normalized": "Time-\u003eDouble",
        "package": "helm",
        "partial": "Seconds",
        "signature": "Time-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:millisecond",
      "description": {
        "fct-descr": "\u003cp\u003eA time value representing one millisecond. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time",
        "fct-source": "src/FRP-Helm-Time.html#millisecond",
        "fct-type": "function",
        "title": "millisecond"
      },
      "index": {
        "description": "time value representing one millisecond",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "millisecond",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:minute",
      "description": {
        "fct-descr": "\u003cp\u003eA time value representing one minute. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time",
        "fct-source": "src/FRP-Helm-Time.html#minute",
        "fct-type": "function",
        "title": "minute"
      },
      "index": {
        "description": "time value representing one minute",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "minute",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:running",
      "description": {
        "fct-descr": "\u003cp\u003eA signal that returns the time that the game has been running for when sampled. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Time)",
        "fct-source": "src/FRP-Helm-Time.html#running",
        "fct-type": "function",
        "title": "running"
      },
      "index": {
        "description": "signal that returns the time that the game has been running for when sampled",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "running",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:second",
      "description": {
        "fct-descr": "\u003cp\u003eA time value representing one second. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Time",
        "fct-package": "helm",
        "fct-signature": "Time",
        "fct-source": "src/FRP-Helm-Time.html#second",
        "fct-type": "function",
        "title": "second"
      },
      "index": {
        "description": "time value representing one second",
        "hierarchy": "FRP Helm Time",
        "module": "FRP.Helm.Time",
        "name": "second",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures for describing transitions, composing and animating them. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Transition.html",
        "fct-type": "module",
        "title": "Transition"
      },
      "index": {
        "description": "Contains all data structures for describing transitions composing and animating them",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Transition",
        "normalized": "",
        "package": "helm",
        "partial": "Transition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#t:Interpolate",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a value that can be interpolated. An example instance of this class follows:\n\u003c/p\u003e\u003cpre\u003e data YourDataType = YourDataConstructor SomeInterpolableType SomeOtherInterpolableType deriving Generic\n\n instance Interpolate YourDataType\n   interpolate 0.5 (YourDataConstructor 3 5) (YourDataConstructor 5 7) == YourDataConstructor 4 6\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "class",
        "fct-source": "src/FRP-Helm-Transition.html#Interpolate",
        "fct-type": "class",
        "title": "Interpolate"
      },
      "index": {
        "description": "Defines value that can be interpolated An example instance of this class follows data YourDataType YourDataConstructor SomeInterpolableType SomeOtherInterpolableType deriving Generic instance Interpolate YourDataType interpolate YourDataConstructor YourDataConstructor YourDataConstructor",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Interpolate",
        "normalized": "",
        "package": "helm",
        "partial": "Interpolate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#t:Transition",
      "description": {
        "fct-descr": "\u003cp\u003eA type describing a combosable transition. The writer keeps record of all the frames in the transition.\n    The state holds the current value of the transition. This allows you to easily compose transitions using do notation. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Transition.html#Transition",
        "fct-type": "type",
        "title": "Transition"
      },
      "index": {
        "description": "type describing combosable transition The writer keeps record of all the frames in the transition The state holds the current value of the transition This allows you to easily compose transitions using do notation",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Transition",
        "normalized": "",
        "package": "helm",
        "partial": "Transition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#t:TransitionStatus",
      "description": {
        "fct-descr": "\u003cp\u003eA variety of statuses that can be used to control a transition. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm-Transition.html#TransitionStatus",
        "fct-type": "data",
        "title": "TransitionStatus"
      },
      "index": {
        "description": "variety of statuses that can be used to control transition",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "TransitionStatus",
        "normalized": "",
        "package": "helm",
        "partial": "Transition Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Cycle",
      "description": {
        "fct-descr": "\u003cp\u003eThe transition will repeat forever.\n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "Cycle",
        "fct-source": "src/FRP-Helm-Transition.html#TransitionStatus",
        "fct-type": "function",
        "title": "Cycle"
      },
      "index": {
        "description": "The transition will repeat forever",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Cycle",
        "normalized": "",
        "package": "helm",
        "partial": "Cycle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Once",
      "description": {
        "fct-descr": "\u003cp\u003eThe transition is cycled once and then stops.\n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "Once",
        "fct-source": "src/FRP-Helm-Transition.html#TransitionStatus",
        "fct-type": "function",
        "title": "Once"
      },
      "index": {
        "description": "The transition is cycled once and then stops",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Once",
        "normalized": "",
        "package": "helm",
        "partial": "Once",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Pause",
      "description": {
        "fct-descr": "\u003cp\u003eThe transition will be paused and won't changed until resumed.\n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "Pause",
        "fct-source": "src/FRP-Helm-Transition.html#TransitionStatus",
        "fct-type": "function",
        "title": "Pause"
      },
      "index": {
        "description": "The transition will be paused and won changed until resumed",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Pause",
        "normalized": "",
        "package": "helm",
        "partial": "Pause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Set",
      "description": {
        "fct-descr": "\u003cp\u003eThe transition will reset to a certain point in time.\n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "Set Time",
        "fct-source": "src/FRP-Helm-Transition.html#TransitionStatus",
        "fct-type": "function",
        "title": "Set"
      },
      "index": {
        "description": "The transition will reset to certain point in time",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "Set",
        "normalized": "",
        "package": "helm",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list of tuples describing a waypoint value and time into a transition.\n    The first element in the list is the starting value and time of the transition.\n\u003c/p\u003e\u003cpre\u003e color = transition (constant $ Time.fps 60) (constant Cycle) $ fromList [(white, 0), (green, 2), (red, 5), (black, 1), (yellow, 2)] \n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "[(a, Time)] -\u003e InternalTransition a",
        "fct-source": "src/FRP-Helm-Transition.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Converts list of tuples describing waypoint value and time into transition The first element in the list is the starting value and time of the transition color transition constant Time.fps constant Cycle fromList white green red black yellow",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "fromList",
        "normalized": "[(a,Time)]-\u003eInternalTransition a",
        "package": "helm",
        "partial": "List",
        "signature": "[(a,Time)]-\u003eInternalTransition a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:interpolate",
      "description": {
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/FRP-Helm-Transition.html#interpolate",
        "fct-type": "method",
        "title": "interpolate"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "interpolate",
        "normalized": "Double-\u003ea-\u003ea-\u003ea",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eHow long it takes for the provided transition to end.  \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "InternalTransition a -\u003e Double",
        "fct-source": "src/FRP-Helm-Transition.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "How long it takes for the provided transition to end",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "length",
        "normalized": "InternalTransition a-\u003eDouble",
        "package": "helm",
        "partial": "",
        "signature": "InternalTransition a-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:startWith",
      "description": {
        "fct-descr": "\u003cp\u003eStarts a transition with an initial value. \n\u003c/p\u003e\u003cpre\u003e color = transition (constant $ Time.fps 60) (constant Cycle) $ startWith white $ do\n   waypoint green 2\n   waypoint red 5\n   waypoint black 1\n   waypoint yellow 2\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "a -\u003e Transition a b -\u003e InternalTransition a",
        "fct-source": "src/FRP-Helm-Transition.html#startWith",
        "fct-type": "function",
        "title": "startWith"
      },
      "index": {
        "description": "Starts transition with an initial value color transition constant Time.fps constant Cycle startWith white do waypoint green waypoint red waypoint black waypoint yellow",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "startWith",
        "normalized": "a-\u003eTransition a b-\u003eInternalTransition a",
        "package": "helm",
        "partial": "With",
        "signature": "a-\u003eTransition a b-\u003eInternalTransition a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:transition",
      "description": {
        "fct-descr": "\u003cp\u003eTurns the internal representation of a transition into a signal.\n    The provided time signal acts as the inner clock of the transition.\n    The status signal can be used to control the transition, deciding whether\n    the transition should cycle, go to a specific time, pause, stop or run once. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Time) -\u003e SignalGen (Signal TransitionStatus) -\u003e InternalTransition a -\u003e SignalGen (Signal a)",
        "fct-source": "src/FRP-Helm-Transition.html#transition",
        "fct-type": "function",
        "title": "transition"
      },
      "index": {
        "description": "Turns the internal representation of transition into signal The provided time signal acts as the inner clock of the transition The status signal can be used to control the transition deciding whether the transition should cycle go to specific time pause stop or run once",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "transition",
        "normalized": "SignalGen(Signal Time)-\u003eSignalGen(Signal TransitionStatus)-\u003eInternalTransition a-\u003eSignalGen(Signal a)",
        "package": "helm",
        "partial": "",
        "signature": "SignalGen(Signal Time)-\u003eSignalGen(Signal TransitionStatus)-\u003eInternalTransition a-\u003eSignalGen(Signal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:waypoint",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a value to the transition monad that will be the next point in the transition. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Transition",
        "fct-package": "helm",
        "fct-signature": "a -\u003e Time -\u003e Transition a a",
        "fct-source": "src/FRP-Helm-Transition.html#waypoint",
        "fct-type": "function",
        "title": "waypoint"
      },
      "index": {
        "description": "Adds value to the transition monad that will be the next point in the transition",
        "hierarchy": "FRP Helm Transition",
        "module": "FRP.Helm.Transition",
        "name": "waypoint",
        "normalized": "a-\u003eTime-\u003eTransition a a",
        "package": "helm",
        "partial": "",
        "signature": "a-\u003eTime-\u003eTransition a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains miscellaneous utility functions such as functions for working with signals and signal generators. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Utilities.html",
        "fct-type": "module",
        "title": "Utilities"
      },
      "index": {
        "description": "Contains miscellaneous utility functions such as functions for working with signals and signal generators",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "Utilities",
        "normalized": "",
        "package": "helm",
        "partial": "Utilities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eForward function application, think of it as a inverted '($)'. Provided for easy porting from Elm. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "a -\u003e (a -\u003e b) -\u003e b",
        "fct-source": "src/FRP-Helm-Utilities.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "Forward function application think of it as inverted Provided for easy porting from Elm",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "(|\u003e) |\u003e",
        "normalized": "a-\u003e(a-\u003eb)-\u003eb",
        "package": "helm",
        "partial": "",
        "signature": "a-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-126--126-",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function within a signal to a signal. This is a wrapper around the builtin \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e operator\n    that automatically binds the input signal out of the signal generator.\n\u003c/p\u003e\u003cpre\u003e render \u003c~ Window.dimensions ~~ Window.position\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal (a -\u003e b)) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
        "fct-source": "src/FRP-Helm-Utilities.html#~~",
        "fct-type": "function",
        "title": "(~~)"
      },
      "index": {
        "description": "Applies function within signal to signal This is wrapper around the builtin operator that automatically binds the input signal out of the signal generator render Window.dimensions Window.position",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "(~~) ~~",
        "normalized": "SignalGen(Signal(a-\u003eb))-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
        "package": "helm",
        "partial": "",
        "signature": "SignalGen(Signal(a-\u003eb))-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-60--124-",
      "description": {
        "fct-descr": "\u003cp\u003eExactly the same as '($)', only there to make code using '(|\u003e)'\n    more consistent. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/FRP-Helm-Utilities.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "Exactly the same as only there to make code using more consistent",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "(\u003c|) \u003c|",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-60--126-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
        "fct-source": "src/FRP-Helm-Utilities.html#%3C~",
        "fct-type": "function",
        "title": "(\u003c~)"
      },
      "index": {
        "description": "An alias for lift",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "(\u003c~) \u003c~",
        "normalized": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a list of signals into a signal of lists. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "[SignalGen (Signal a)] -\u003e SignalGen (Signal [a])",
        "fct-source": "src/FRP-Helm-Utilities.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "Combines list of signals into signal of lists",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "combine",
        "normalized": "[SignalGen(Signal a)]-\u003eSignalGen(Signal[a])",
        "package": "helm",
        "partial": "",
        "signature": "[SignalGen(Signal a)]-\u003eSignalGen(Signal[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:constant",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signal that never changes. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "a -\u003e SignalGen (Signal a)",
        "fct-source": "src/FRP-Helm-Utilities.html#constant",
        "fct-type": "function",
        "title": "constant"
      },
      "index": {
        "description": "Creates signal that never changes",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "constant",
        "normalized": "a-\u003eSignalGen(Signal a)",
        "package": "helm",
        "partial": "",
        "signature": "a-\u003eSignalGen(Signal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signal that counts the amount of times it has been sampled. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Utilities.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Creates signal that counts the amount of times it has been sampled",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "count",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:countIf",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signal that counts the amount of times an input signal has passed\n    a predicate when sampled. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e Bool) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Utilities.html#countIf",
        "fct-type": "function",
        "title": "countIf"
      },
      "index": {
        "description": "Creates signal that counts the amount of times an input signal has passed predicate when sampled",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "countIf",
        "normalized": "(a-\u003eBool)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal Int)",
        "package": "helm",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:degrees",
      "description": {
        "fct-descr": "\u003cp\u003eConverts degrees into the standard angle measurement (radians). \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/FRP-Helm-Utilities.html#degrees",
        "fct-type": "function",
        "title": "degrees"
      },
      "index": {
        "description": "Converts degrees into the standard angle measurement radians",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "degrees",
        "normalized": "Double-\u003eDouble",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:foldp",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a past-dependent signal that depends on another signal. This is a\n    wrapper around the \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e function that automatically binds the input\n    signal out of the signal generator. This function is useful for making a render\n    function that depends on some accumulated state. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
        "fct-source": "src/FRP-Helm-Utilities.html#foldp",
        "fct-type": "function",
        "title": "foldp"
      },
      "index": {
        "description": "Creates past-dependent signal that depends on another signal This is wrapper around the transfer function that automatically binds the input signal out of the signal generator This function is useful for making render function that depends on some accumulated state",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "foldp",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to a signal producing a new signal. This is a wrapper around the builtin\n    \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e function that automatically binds the input signal out of the signal generator.\n\u003c/p\u003e\u003cpre\u003e render \u003c~ Window.dimensions\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "Applies function to signal producing new signal This is wrapper around the builtin fmap function that automatically binds the input signal out of the signal generator render Window.dimensions",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift",
        "normalized": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift2",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to two signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift2",
        "fct-type": "function",
        "title": "lift2"
      },
      "index": {
        "description": "Applies function to two signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift3",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to three signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift3",
        "fct-type": "function",
        "title": "lift3"
      },
      "index": {
        "description": "Applies function to three signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift4",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to four signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift4",
        "fct-type": "function",
        "title": "lift4"
      },
      "index": {
        "description": "Applies function to four signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift5",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to five signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift5",
        "fct-type": "function",
        "title": "lift5"
      },
      "index": {
        "description": "Applies function to five signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift6",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to six signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f) -\u003e SignalGen (Signal g)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift6",
        "fct-type": "function",
        "title": "lift6"
      },
      "index": {
        "description": "Applies function to six signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift7",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to seven signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f) -\u003e SignalGen (Signal g) -\u003e SignalGen (Signal h)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift7",
        "fct-type": "function",
        "title": "lift7"
      },
      "index": {
        "description": "Applies function to seven signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift8",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a function to eight signals. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f) -\u003e SignalGen (Signal g) -\u003e SignalGen (Signal h) -\u003e SignalGen (Signal i)",
        "fct-source": "src/FRP-Helm-Utilities.html#lift8",
        "fct-type": "function",
        "title": "lift8"
      },
      "index": {
        "description": "Applies function to eight signals",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "lift8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)-\u003eSignalGen(Signal i)",
        "package": "helm",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)-\u003eSignalGen(Signal i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:radians",
      "description": {
        "fct-descr": "\u003cp\u003eConverts radians into the standard angle measurement (radians). \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/FRP-Helm-Utilities.html#radians",
        "fct-type": "function",
        "title": "radians"
      },
      "index": {
        "description": "Converts radians into the standard angle measurement radians",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "radians",
        "normalized": "Double-\u003eDouble",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:random",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signal of a random number. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal a)",
        "fct-source": "src/FRP-Helm-Utilities.html#random",
        "fct-type": "function",
        "title": "random"
      },
      "index": {
        "description": "Creates signal of random number",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "random",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:randomR",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a signal of a random number based on the given range. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "(a, a) -\u003e SignalGen (Signal a)",
        "fct-source": "src/FRP-Helm-Utilities.html#randomR",
        "fct-type": "function",
        "title": "randomR"
      },
      "index": {
        "description": "Creates signal of random number based on the given range",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "randomR",
        "normalized": "(a,a)-\u003eSignalGen(Signal a)",
        "package": "helm",
        "partial": "",
        "signature": "(a,a)-\u003eSignalGen(Signal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:turns",
      "description": {
        "fct-descr": "\u003cp\u003eConverts turns into the standard angle measurement (radians).\n    Turns are essentially full revolutions of the unit circle. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Utilities",
        "fct-package": "helm",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/FRP-Helm-Utilities.html#turns",
        "fct-type": "function",
        "title": "turns"
      },
      "index": {
        "description": "Converts turns into the standard angle measurement radians Turns are essentially full revolutions of the unit circle",
        "hierarchy": "FRP Helm Utilities",
        "module": "FRP.Helm.Utilities",
        "name": "turns",
        "normalized": "Double-\u003eDouble",
        "package": "helm",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from the game window. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm.Window",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm-Window.html",
        "fct-type": "module",
        "title": "Window"
      },
      "index": {
        "description": "Contains signals that sample input from the game window",
        "hierarchy": "FRP Helm Window",
        "module": "FRP.Helm.Window",
        "name": "Window",
        "normalized": "",
        "package": "helm",
        "partial": "Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#v:dimensions",
      "description": {
        "fct-descr": "\u003cp\u003eThe current dimensions of the window. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Window",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal (Int, Int))",
        "fct-source": "src/FRP-Helm-Window.html#dimensions",
        "fct-type": "function",
        "title": "dimensions"
      },
      "index": {
        "description": "The current dimensions of the window",
        "hierarchy": "FRP Helm Window",
        "module": "FRP.Helm.Window",
        "name": "dimensions",
        "normalized": "SignalGen(Signal(Int,Int))",
        "package": "helm",
        "partial": "",
        "signature": "SignalGen(Signal(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#v:height",
      "description": {
        "fct-descr": "\u003cp\u003eThe current height of the window. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Window",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Window.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "The current height of the window",
        "hierarchy": "FRP Helm Window",
        "module": "FRP.Helm.Window",
        "name": "height",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#v:width",
      "description": {
        "fct-descr": "\u003cp\u003eThe current width of the window. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm.Window",
        "fct-package": "helm",
        "fct-signature": "SignalGen (Signal Int)",
        "fct-source": "src/FRP-Helm-Window.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "The current width of the window",
        "hierarchy": "FRP Helm Window",
        "module": "FRP.Helm.Window",
        "name": "width",
        "normalized": "",
        "package": "helm",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains miscellaneous utility functions and the main\n    functions for interfacing with the engine. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "module",
        "fct-source": "src/FRP-Helm.html",
        "fct-type": "module",
        "title": "Helm"
      },
      "index": {
        "description": "Contains miscellaneous utility functions and the main functions for interfacing with the engine",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "Helm",
        "normalized": "",
        "package": "helm",
        "partial": "Helm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#t:EngineConfig",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure describing miscellaneous initial configurations of the game window and engine. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "data",
        "fct-source": "src/FRP-Helm.html#EngineConfig",
        "fct-type": "data",
        "title": "EngineConfig"
      },
      "index": {
        "description": "data structure describing miscellaneous initial configurations of the game window and engine",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "EngineConfig",
        "normalized": "",
        "package": "helm",
        "partial": "Engine Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eA type describing an amount of time in an arbitary unit. Use the time composing/converting functions to manipulate\n    time values. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "type",
        "fct-source": "src/FRP-Helm-Time.html#Time",
        "fct-type": "type",
        "title": "Time"
      },
      "index": {
        "description": "type describing an amount of time in an arbitary unit Use the time composing converting functions to manipulate time values",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "Time",
        "normalized": "",
        "package": "helm",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:EngineConfig",
      "description": {
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "EngineConfig",
        "fct-source": "src/FRP-Helm.html#EngineConfig",
        "fct-type": "function",
        "title": "EngineConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "EngineConfig",
        "normalized": "",
        "package": "helm",
        "partial": "Engine Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the default configuration for the engine. You should change the fields where necessary before passing it to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "EngineConfig",
        "fct-source": "src/FRP-Helm.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "Creates the default configuration for the engine You should change the fields where necessary before passing it to run",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "defaultConfig",
        "normalized": "",
        "package": "helm",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eInitializes and runs the game engine. The supplied signal generator is\n    constantly sampled for an element to render until the user quits.\n\u003c/p\u003e\u003cpre\u003e import FRP.Helm\n import qualified FRP.Helm.Window as Window\n\n render :: (Int, Int) -\u003e Element\n render (w, h) = collage w h [rect (fromIntegral w) (fromIntegral h) |\u003e filled red]\n\n main :: IO ()\n main = run defaultConfig $ lift render Window.dimensions\n\u003c/pre\u003e",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "EngineConfig -\u003e SignalGen (Signal Element) -\u003e IO ()",
        "fct-source": "src/FRP-Helm.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Initializes and runs the game engine The supplied signal generator is constantly sampled for an element to render until the user quits import FRP.Helm import qualified FRP.Helm.Window as Window render Int Int Element render collage rect fromIntegral fromIntegral filled red main IO main run defaultConfig lift render Window.dimensions",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "run",
        "normalized": "EngineConfig-\u003eSignalGen(Signal Element)-\u003eIO()",
        "package": "helm",
        "partial": "",
        "signature": "EngineConfig-\u003eSignalGen(Signal Element)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowDimensions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "(Int, Int)",
        "fct-source": "src/FRP-Helm.html#EngineConfig",
        "fct-type": "function",
        "title": "windowDimensions"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "windowDimensions",
        "normalized": "(Int,Int)",
        "package": "helm",
        "partial": "Dimensions",
        "signature": "(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowIsFullscreen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "Bool",
        "fct-source": "src/FRP-Helm.html#EngineConfig",
        "fct-type": "function",
        "title": "windowIsFullscreen"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "windowIsFullscreen",
        "normalized": "",
        "package": "helm",
        "partial": "Is Fullscreen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowIsResizable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "Bool",
        "fct-source": "src/FRP-Helm.html#EngineConfig",
        "fct-type": "function",
        "title": "windowIsResizable"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "windowIsResizable",
        "normalized": "",
        "package": "helm",
        "partial": "Is Resizable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Helm",
        "fct-package": "helm",
        "fct-signature": "String",
        "fct-source": "src/FRP-Helm.html#EngineConfig",
        "fct-type": "function",
        "title": "windowTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Helm",
        "module": "FRP.Helm",
        "name": "windowTitle",
        "normalized": "",
        "package": "helm",
        "partial": "Title",
        "signature": ""
      }
    }
  }
]