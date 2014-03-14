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
        "word": "helm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures and functions for creating and stepping animations. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Animation",
          "name": "Animation",
          "package": "helm",
          "source": "src/FRP-Helm-Animation.html",
          "type": "module"
        },
        "index": {
          "description": "Contains all data structures and functions for creating and stepping animations",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Animation",
          "package": "helm",
          "partial": "Animation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type describing an animation consisting of a list of frames. \n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "Animation",
          "package": "helm",
          "source": "src/FRP-Helm-Animation.html#Animation",
          "type": "type"
        },
        "index": {
          "description": "type describing an animation consisting of list of frames",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Animation",
          "package": "helm",
          "partial": "Animation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#t:Animation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type describing a single frame in an animation. A frame consists of a time at\n    which the frame takes place in an animation and the form which is how the frame\n    actually looks when rendered. \n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "Frame",
          "package": "helm",
          "source": "src/FRP-Helm-Animation.html#Frame",
          "type": "type"
        },
        "index": {
          "description": "type describing single frame in an animation frame consists of time at which the frame takes place in an animation and the form which is how the frame actually looks when rendered",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Frame",
          "package": "helm",
          "partial": "Frame",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type tells of the state an animation is in.\n    Continue: A continued animation plays through its frames as specified in the Animation.\n    Pause: A paused animation does not change its current frame and time.\n    Stop: A stopped animation is set to its first frame and time 0.\n    Frame: The Frame constructor can be used to choose a specific frame of the animation\n           where time is set to the first millisecond of that chosen frame. (Indexing starts at 1. 'first frame', not 'zero frame')\n    Time: The Time constructor sets the current time (in milliseconds) in the animation to the specified value.   \n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "Status",
          "package": "helm",
          "source": "src/FRP-Helm-Animation.html#Status",
          "type": "data"
        },
        "index": {
          "description": "This type tells of the state an animation is in Continue continued animation plays through its frames as specified in the Animation Pause paused animation does not change its current frame and time Stop stopped animation is set to its first frame and time Frame The Frame constructor can be used to choose specific frame of the animation where time is set to the first millisecond of that chosen frame Indexing starts at first frame not zero frame Time The Time constructor sets the current time in milliseconds in the animation to the specified value",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Status",
          "package": "helm",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Animation",
          "name": "Continue",
          "package": "helm",
          "signature": "Continue",
          "source": "src/FRP-Helm-Animation.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Continue",
          "package": "helm",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Animation",
          "name": "Frame",
          "package": "helm",
          "signature": "Frame Int",
          "source": "src/FRP-Helm-Animation.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Frame",
          "package": "helm",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Animation",
          "name": "Pause",
          "package": "helm",
          "signature": "Pause",
          "source": "src/FRP-Helm-Animation.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Pause",
          "package": "helm",
          "partial": "Pause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Animation",
          "name": "Stop",
          "package": "helm",
          "signature": "Stop",
          "source": "src/FRP-Helm-Animation.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Stop",
          "package": "helm",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Animation",
          "name": "Time",
          "package": "helm",
          "signature": "Time Time",
          "source": "src/FRP-Helm-Animation.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "Time",
          "package": "helm",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an animation from a list of frames. The time value in each frame\n    is absolute to the entire animation, i.e. each time value is the time\n    at which the frame takes place relative to the starting time of the animation.\n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "absolute",
          "package": "helm",
          "signature": "[Frame] -\u003e Animation",
          "source": "src/FRP-Helm-Animation.html#absolute",
          "type": "function"
        },
        "index": {
          "description": "Creates an animation from list of frames The time value in each frame is absolute to the entire animation i.e each time value is the time at which the frame takes place relative to the starting time of the animation",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "absolute",
          "normalized": "[Frame]-\u003eAnimation",
          "package": "helm",
          "signature": "[Frame]-\u003eAnimation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:absolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal contained in a generator that returns the current form in the animation when sampled from\n    a specific animation. The second argument is a signal generator containing a signal that\n    returns the time to setup the animation forward when sampled. The third argument is a\n    signal generator containing a signal that returns true to continue animating\n    or false to stop animating when sampled. \n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "animate",
          "package": "helm",
          "signature": "Animation -\u003e SignalGen (Signal Time) -\u003e SignalGen (Signal Status) -\u003e SignalGen (Signal Form)",
          "source": "src/FRP-Helm-Animation.html#animate",
          "type": "function"
        },
        "index": {
          "description": "Creates signal contained in generator that returns the current form in the animation when sampled from specific animation The second argument is signal generator containing signal that returns the time to setup the animation forward when sampled The third argument is signal generator containing signal that returns true to continue animating or false to stop animating when sampled",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "animate",
          "normalized": "Animation-\u003eSignalGen(Signal Time)-\u003eSignalGen(Signal Status)-\u003eSignalGen(Signal Form)",
          "package": "helm",
          "signature": "Animation-\u003eSignalGen(Signal Time)-\u003eSignalGen(Signal Status)-\u003eSignalGen(Signal Form)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:animate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe form that will be rendered for a specific time in an animation. \n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "formAt",
          "package": "helm",
          "signature": "Animation -\u003e Time -\u003e Maybe Form",
          "source": "src/FRP-Helm-Animation.html#formAt",
          "type": "function"
        },
        "index": {
          "description": "The form that will be rendered for specific time in an animation",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "formAt",
          "normalized": "Animation-\u003eTime-\u003eMaybe Form",
          "package": "helm",
          "partial": "At",
          "signature": "Animation-\u003eTime-\u003eMaybe Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:formAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of time one cycle of the animation takes. \n\u003c/p\u003e",
          "module": "FRP.Helm.Animation",
          "name": "length",
          "package": "helm",
          "signature": "Animation -\u003e Time",
          "source": "src/FRP-Helm-Animation.html#length",
          "type": "function"
        },
        "index": {
          "description": "The amount of time one cycle of the animation takes",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "length",
          "normalized": "Animation-\u003eTime",
          "package": "helm",
          "signature": "Animation-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an animation from a list of frames. The time value in each frame\n    is relative to other frames, i.e. each time value is the difference\n    in time from the last frame.\n\u003c/p\u003e\u003cpre\u003e relative [(100, picture1), (100, picture2), (300, picture3)] == absolute [(100, picture1), (200, picture2), (500, picture3)]\n\u003c/pre\u003e",
          "module": "FRP.Helm.Animation",
          "name": "relative",
          "package": "helm",
          "signature": "[Frame] -\u003e Animation",
          "source": "src/FRP-Helm-Animation.html#relative",
          "type": "function"
        },
        "index": {
          "description": "Creates an animation from list of frames The time value in each frame is relative to other frames i.e each time value is the difference in time from the last frame relative picture1 picture2 picture3 absolute picture1 picture2 picture3",
          "hierarchy": "FRP Helm Animation",
          "module": "FRP.Helm.Animation",
          "name": "relative",
          "normalized": "[Frame]-\u003eAnimation",
          "package": "helm",
          "signature": "[Frame]-\u003eAnimation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Animation.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures and functions for composing, calculating and creating automatons. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "Automaton",
          "package": "helm",
          "source": "src/FRP-Helm-Automaton.html",
          "type": "module"
        },
        "index": {
          "description": "Contains all data structures and functions for composing calculating and creating automatons",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "Automaton",
          "package": "helm",
          "partial": "Automaton",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing an automaton.\n    An automaton is essentially a high-level way to package piped behavior\n    between an input signal and an output signal. Automatons can also\n    be composed, allowing you to connect one automaton to another\n    and pipe data between them. Automatons are an easy and powerful way\n    to create composable dynamic behavior, like animation systems. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "Automaton",
          "package": "helm",
          "source": "src/FRP-Helm-Automaton.html#Automaton",
          "type": "data"
        },
        "index": {
          "description": "data structure describing an automaton An automaton is essentially high-level way to package piped behavior between an input signal and an output signal Automatons can also be composed allowing you to connect one automaton to another and pipe data between them Automatons are an easy and powerful way to create composable dynamic behavior like animation systems",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "Automaton",
          "package": "helm",
          "partial": "Automaton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#t:Automaton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Automaton",
          "name": "Step",
          "package": "helm",
          "signature": "Step (a -\u003e (Automaton a b, b))",
          "source": "src/FRP-Helm-Automaton.html#Automaton",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "Step",
          "normalized": "Step(a-\u003e(Automaton a b,b))",
          "package": "helm",
          "partial": "Step",
          "signature": "Step(a-\u003e(Automaton a b,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a list of automatons that take some input\n    and turns it into an automaton that takes\n    the same input and outputs a list of all outputs\n    from each separate automaton. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "combine",
          "package": "helm",
          "signature": "[Automaton a b] -\u003e Automaton a [b]",
          "source": "src/FRP-Helm-Automaton.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combines list of automatons that take some input and turns it into an automaton that takes the same input and outputs list of all outputs from each separate automaton",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "combine",
          "normalized": "[Automaton a b]-\u003eAutomaton a[b]",
          "package": "helm",
          "signature": "[Automaton a b]-\u003eAutomaton a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful automaton that outputs the amount of times it has been stepped,\n    discarding its input value. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "counter",
          "package": "helm",
          "signature": "Automaton a Int",
          "source": "src/FRP-Helm-Automaton.html#counter",
          "type": "function"
        },
        "index": {
          "description": "useful automaton that outputs the amount of times it has been stepped discarding its input value",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "counter",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a pure automaton that has no accumulated state. It applies input to\n    a function at each step. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "pure",
          "package": "helm",
          "signature": "(a -\u003e b) -\u003e Automaton a b",
          "source": "src/FRP-Helm-Automaton.html#pure",
          "type": "function"
        },
        "index": {
          "description": "Creates pure automaton that has no accumulated state It applies input to function at each step",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "pure",
          "normalized": "(a-\u003eb)-\u003eAutomaton a b",
          "package": "helm",
          "signature": "(a-\u003eb)-\u003eAutomaton a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an automaton with an initial output value and input signal generator\n    and creates an output signal generator that contains a signal that can be\n    sampled for the output value. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "run",
          "package": "helm",
          "signature": "Automaton a b -\u003e b -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
          "source": "src/FRP-Helm-Automaton.html#run",
          "type": "function"
        },
        "index": {
          "description": "Runs an automaton with an initial output value and input signal generator and creates an output signal generator that contains signal that can be sampled for the output value",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "run",
          "normalized": "Automaton a b-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "package": "helm",
          "signature": "Automaton a b-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an automaton that has an initial and accumulated state. It applies\n    input and the last state to a function at each step. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "stateful",
          "package": "helm",
          "signature": "b -\u003e (a -\u003e b -\u003e b) -\u003e Automaton a b",
          "source": "src/FRP-Helm-Automaton.html#stateful",
          "type": "function"
        },
        "index": {
          "description": "Creates an automaton that has an initial and accumulated state It applies input and the last state to function at each step",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "stateful",
          "normalized": "a-\u003e(b-\u003ea-\u003ea)-\u003eAutomaton b a",
          "package": "helm",
          "signature": "b-\u003e(a-\u003eb-\u003eb)-\u003eAutomaton a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSteps an automaton forward, returning the next automaton to step\n    and output of the step in a tuple. \n\u003c/p\u003e",
          "module": "FRP.Helm.Automaton",
          "name": "step",
          "package": "helm",
          "signature": "a -\u003e Automaton a b -\u003e (Automaton a b, b)",
          "source": "src/FRP-Helm-Automaton.html#step",
          "type": "function"
        },
        "index": {
          "description": "Steps an automaton forward returning the next automaton to step and output of the step in tuple",
          "hierarchy": "FRP Helm Automaton",
          "module": "FRP.Helm.Automaton",
          "name": "step",
          "normalized": "a-\u003eAutomaton a b-\u003e(Automaton a b,b)",
          "package": "helm",
          "signature": "a-\u003eAutomaton a b-\u003e(Automaton a b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Automaton.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures and functions for composing colors. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Color",
          "name": "Color",
          "package": "helm",
          "source": "src/FRP-Helm-Color.html",
          "type": "module"
        },
        "index": {
          "description": "Contains all data structures and functions for composing colors",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "Color",
          "package": "helm",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a color. It is represented interally as an RGBA\n    color, but the utility functions \u003ccode\u003e\u003ca\u003ehsva\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehsv\u003c/a\u003e\u003c/code\u003e, etc. can be used to convert\n    from other popular formats to this structure. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "Color",
          "package": "helm",
          "source": "src/FRP-Helm-Color.html#Color",
          "type": "data"
        },
        "index": {
          "description": "data structure describing color It is represented interally as an RGBA color but the utility functions hsva hsv etc can be used to convert from other popular formats to this structure",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "Color",
          "package": "helm",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a gradient. There are two types of gradients:\n    radial and linear. Radial gradients are based on a set of colors transitioned\n    over certain radii in an arc pattern. Linear gradients are a set of colors\n    transitioned in a straight line. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "Gradient",
          "package": "helm",
          "source": "src/FRP-Helm-Color.html#Gradient",
          "type": "data"
        },
        "index": {
          "description": "data structure describing gradient There are two types of gradients radial and linear Radial gradients are based on set of colors transitioned over certain radii in an arc pattern Linear gradients are set of colors transitioned in straight line",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "Gradient",
          "package": "helm",
          "partial": "Gradient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#t:Gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Color",
          "name": "Color",
          "package": "helm",
          "signature": "Color Double Double Double Double",
          "source": "src/FRP-Helm-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "Color",
          "package": "helm",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Color",
          "name": "Linear",
          "package": "helm",
          "signature": "Linear (Double, Double) (Double, Double) [(Double, Color)]",
          "source": "src/FRP-Helm-Color.html#Gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "Linear",
          "normalized": "Linear(Double,Double)(Double,Double)[(Double,Color)]",
          "package": "helm",
          "partial": "Linear",
          "signature": "Linear(Double,Double)(Double,Double)[(Double,Color)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Color",
          "name": "Radial",
          "package": "helm",
          "signature": "Radial (Double, Double) Double (Double, Double) Double [(Double, Color)]",
          "source": "src/FRP-Helm-Color.html#Gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "Radial",
          "normalized": "Radial(Double,Double)Double(Double,Double)Double[(Double,Color)]",
          "package": "helm",
          "partial": "Radial",
          "signature": "Radial(Double,Double)Double(Double,Double)Double[(Double,Color)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:Radial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA black color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "black",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#black",
          "type": "function"
        },
        "index": {
          "description": "black color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "black",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of colors and turns it into a single color by\n    averaging the color components. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "blend",
          "package": "helm",
          "signature": "[Color] -\u003e Color",
          "source": "src/FRP-Helm-Color.html#blend",
          "type": "function"
        },
        "index": {
          "description": "Takes list of colors and turns it into single color by averaging the color components",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "blend",
          "normalized": "[Color]-\u003eColor",
          "package": "helm",
          "signature": "[Color]-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:blend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bright blue color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "blue",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#blue",
          "type": "function"
        },
        "index": {
          "description": "bright blue color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "blue",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a complementary color for a provided color. Useful for outlining\n    a filled shape in a color clearly distinguishable from the fill color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "complement",
          "package": "helm",
          "signature": "Color -\u003e Color",
          "source": "src/FRP-Helm-Color.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Calculate complementary color for provided color Useful for outlining filled shape in color clearly distinguishable from the fill color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "complement",
          "normalized": "Color-\u003eColor",
          "package": "helm",
          "signature": "Color-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cyan color, combined from bright green and blue. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "cyan",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#cyan",
          "type": "function"
        },
        "index": {
          "description": "cyan color combined from bright green and blue",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "cyan",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dark green color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "forestGreen",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#forestGreen",
          "type": "function"
        },
        "index": {
          "description": "dark green color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "forestGreen",
          "package": "helm",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:forestGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA gray color, exactly halfway between black and white. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "gray",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#gray",
          "type": "function"
        },
        "index": {
          "description": "gray color exactly halfway between black and white",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "gray",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA medium green color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "green",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#green",
          "type": "function"
        },
        "index": {
          "description": "medium green color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "green",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon alternative spelling of \u003ccode\u003e\u003ca\u003egray\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "grey",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#grey",
          "type": "function"
        },
        "index": {
          "description": "Common alternative spelling of gray",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "grey",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an RGB color from HSV values. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "hsv",
          "package": "helm",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Color",
          "source": "src/FRP-Helm-Color.html#hsv",
          "type": "function"
        },
        "index": {
          "description": "Create an RGB color from HSV values",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "hsv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eColor",
          "package": "helm",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:hsv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an RGBA color from HSVA values. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "hsva",
          "package": "helm",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Color",
          "source": "src/FRP-Helm-Color.html#hsva",
          "type": "function"
        },
        "index": {
          "description": "Create an RGBA color from HSVA values",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "hsva",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor",
          "package": "helm",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:hsva"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bright green color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "lime",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#lime",
          "type": "function"
        },
        "index": {
          "description": "bright green color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "lime",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:lime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a linear gradient. Takes a starting position, ending position and a list\n    of color stops (which are colors combined with a floating value between \u003cem\u003e0.0\u003c/em\u003e and \u003cem\u003e1.0\u003c/em\u003e\n    that describes at what step along the line between the starting position\n    and ending position the paired color should be transitioned to).\n\u003c/p\u003e\u003cpre\u003e linear (0, 0) (100, 100) [(0, black), (1, white)]\n\u003c/pre\u003e\u003cp\u003eThe above example creates a gradient that starts at \u003cem\u003e(0, 0)\u003c/em\u003e\n\tand ends at \u003cem\u003e(100, 100)\u003c/em\u003e. In other words, it's a diagonal gradient, transitioning from the top-left\n\tto the bottom-right. The provided color stops result in the gradient transitioning from\n\tblack to white.\n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "linear",
          "package": "helm",
          "signature": "(Double, Double) -\u003e (Double, Double) -\u003e [(Double, Color)] -\u003e Gradient",
          "source": "src/FRP-Helm-Color.html#linear",
          "type": "function"
        },
        "index": {
          "description": "Creates linear gradient Takes starting position ending position and list of color stops which are colors combined with floating value between and that describes at what step along the line between the starting position and ending position the paired color should be transitioned to linear black white The above example creates gradient that starts at and ends at In other words it diagonal gradient transitioning from the top-left to the bottom-right The provided color stops result in the gradient transitioning from black to white",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "linear",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e[(Double,Color)]-\u003eGradient",
          "package": "helm",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e[(Double,Color)]-\u003eGradient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA magenta color, combined from bright red and blue. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "magenta",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#magenta",
          "type": "function"
        },
        "index": {
          "description": "magenta color combined from bright red and blue",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "magenta",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA medium red color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "maroon",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#maroon",
          "type": "function"
        },
        "index": {
          "description": "medium red color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "maroon",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:maroon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA medium blue color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "navy",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#navy",
          "type": "function"
        },
        "index": {
          "description": "medium blue color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "navy",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:navy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA purple color, combined from medium red and blue. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "purple",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#purple",
          "type": "function"
        },
        "index": {
          "description": "purple color combined from medium red and blue",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "purple",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a radial gradient. Takes a starting position and radius, ending position and radius\n    and a list of color stops. See the document for \u003ccode\u003e\u003ca\u003elinear\u003c/a\u003e\u003c/code\u003e for more information on color stops. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "radial",
          "package": "helm",
          "signature": "(Double, Double) -\u003e Double -\u003e (Double, Double) -\u003e Double -\u003e [(Double, Color)] -\u003e Gradient",
          "source": "src/FRP-Helm-Color.html#radial",
          "type": "function"
        },
        "index": {
          "description": "Creates radial gradient Takes starting position and radius ending position and radius and list of color stops See the document for linear for more information on color stops",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "radial",
          "normalized": "(Double,Double)-\u003eDouble-\u003e(Double,Double)-\u003eDouble-\u003e[(Double,Color)]-\u003eGradient",
          "package": "helm",
          "signature": "(Double,Double)-\u003eDouble-\u003e(Double,Double)-\u003eDouble-\u003e[(Double,Color)]-\u003eGradient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:radial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bright red color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "red",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#red",
          "type": "function"
        },
        "index": {
          "description": "bright red color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "red",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an RGB color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "rgb",
          "package": "helm",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Color",
          "source": "src/FRP-Helm-Color.html#rgb",
          "type": "function"
        },
        "index": {
          "description": "Creates an RGB color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "rgb",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eColor",
          "package": "helm",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an RGB color, with transparency. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "rgba",
          "package": "helm",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Color",
          "source": "src/FRP-Helm-Color.html#rgba",
          "type": "function"
        },
        "index": {
          "description": "Creates an RGB color with transparency",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "rgba",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor",
          "package": "helm",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:rgba"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA teal color, combined from medium green and blue. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "teal",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#teal",
          "type": "function"
        },
        "index": {
          "description": "teal color combined from medium green and blue",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "teal",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:teal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA violet color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "violet",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#violet",
          "type": "function"
        },
        "index": {
          "description": "violet color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "violet",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA white color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "white",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#white",
          "type": "function"
        },
        "index": {
          "description": "white color",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "white",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA yellow color, made from combining red and green. \n\u003c/p\u003e",
          "module": "FRP.Helm.Color",
          "name": "yellow",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Color.html#yellow",
          "type": "function"
        },
        "index": {
          "description": "yellow color made from combining red and green",
          "hierarchy": "FRP Helm Color",
          "module": "FRP.Helm.Color",
          "name": "yellow",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Color.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all the data structures and functions for composing\n    and rendering graphics. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "Graphics",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html",
          "type": "module"
        },
        "index": {
          "description": "Contains all the data structures and functions for composing and rendering graphics",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Graphics",
          "package": "helm",
          "partial": "Graphics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing something that can be rendered\n    to the screen. Elements are the most important structure\n    in Helm. Games essentially feed the engine a stream\n    of elements which are then rendered directly to the screen.\n    The usual way to render art in a Helm game is to call\n    off to the \u003ccode\u003e\u003ca\u003ecollage\u003c/a\u003e\u003c/code\u003e function, which essentially\n    renders a collection of forms together. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "Element",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#Element",
          "type": "data"
        },
        "index": {
          "description": "data structure describing something that can be rendered to the screen Elements are the most important structure in Helm Games essentially feed the engine stream of elements which are then rendered directly to the screen The usual way to render art in Helm game is to call off to the collage function which essentially renders collection of forms together",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Element",
          "package": "helm",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing how a shape or path looks when filled. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "FillStyle",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#FillStyle",
          "type": "data"
        },
        "index": {
          "description": "data structure describing how shape or path looks when filled",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "FillStyle",
          "package": "helm",
          "partial": "Fill Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FillStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing the style of of a piece of font. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "FontStyle",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#FontStyle",
          "type": "data"
        },
        "index": {
          "description": "data structure describing the style of of piece of font",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "FontStyle",
          "package": "helm",
          "partial": "Font Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing the weight of a piece of font. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "FontWeight",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#FontWeight",
          "type": "data"
        },
        "index": {
          "description": "data structure describing the weight of piece of font",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "FontWeight",
          "package": "helm",
          "partial": "Font Weight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a form. A form is essentially a notion of a transformed\n    graphic, whether it be an element or shape. See \u003ccode\u003e\u003ca\u003eFormStyle\u003c/a\u003e\u003c/code\u003e for an insight\n    into what sort of graphics can be wrapped in a form. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "Form",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "data"
        },
        "index": {
          "description": "data structure describing form form is essentially notion of transformed graphic whether it be an element or shape See FormStyle for an insight into what sort of graphics can be wrapped in form",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Form",
          "package": "helm",
          "partial": "Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a few ways that graphics that can be wrapped in a form\n    and hence transformed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "FormStyle",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#FormStyle",
          "type": "data"
        },
        "index": {
          "description": "data structure describing few ways that graphics that can be wrapped in form and hence transformed",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "FormStyle",
          "package": "helm",
          "partial": "Form Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:FormStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing the shape of the ends of a line. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "LineCap",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#LineCap",
          "type": "data"
        },
        "index": {
          "description": "data structure describing the shape of the ends of line",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "LineCap",
          "package": "helm",
          "partial": "Line Cap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:LineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing the shape of the join of a line, i.e.\n    where separate line segments join. The \u003ccode\u003eSharp\u003c/code\u003e variant takes\n    an argument to limit the length of the join. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "LineJoin",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#LineJoin",
          "type": "data"
        },
        "index": {
          "description": "data structure describing the shape of the join of line i.e where separate line segments join The Sharp variant takes an argument to limit the length of the join",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "LineJoin",
          "package": "helm",
          "partial": "Line Join",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:LineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing how a shape or path looks when stroked. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "LineStyle",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "data"
        },
        "index": {
          "description": "data structure describing how shape or path looks when stroked",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "LineStyle",
          "package": "helm",
          "partial": "Line Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:LineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type made up a collection of points that form a path when joined. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "Path",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#Path",
          "type": "type"
        },
        "index": {
          "description": "data type made up collection of points that form path when joined",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Path",
          "package": "helm",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a some sort of graphically representable object,\n    such as a polygon formed from a list of points or a rectangle. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "Shape",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#Shape",
          "type": "data"
        },
        "index": {
          "description": "data structure describing some sort of graphically representable object such as polygon formed from list of points or rectangle",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Shape",
          "package": "helm",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a piece of formatted text. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "Text",
          "package": "helm",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "data"
        },
        "index": {
          "description": "data structure describing piece of formatted text",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Text",
          "package": "helm",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ArcShape",
          "package": "helm",
          "signature": "ArcShape (Double, Double) Double Double Double (Double, Double)",
          "source": "src/FRP-Helm-Graphics.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ArcShape",
          "normalized": "ArcShape(Double,Double)Double Double Double(Double,Double)",
          "package": "helm",
          "partial": "Arc Shape",
          "signature": "ArcShape(Double,Double)Double Double Double(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ArcShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "BoldWeight",
          "package": "helm",
          "signature": "BoldWeight",
          "source": "src/FRP-Helm-Graphics.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "BoldWeight",
          "package": "helm",
          "partial": "Bold Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:BoldWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ClippedJoin",
          "package": "helm",
          "signature": "ClippedJoin",
          "source": "src/FRP-Helm-Graphics.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ClippedJoin",
          "package": "helm",
          "partial": "Clipped Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ClippedJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "CollageElement",
          "package": "helm",
          "signature": "CollageElement Int Int (Maybe (Double, Double)) [Form]",
          "source": "src/FRP-Helm-Graphics.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "CollageElement",
          "normalized": "CollageElement Int Int(Maybe(Double,Double))[Form]",
          "package": "helm",
          "partial": "Collage Element",
          "signature": "CollageElement Int Int(Maybe(Double,Double))[Form]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:CollageElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ElementForm",
          "package": "helm",
          "signature": "ElementForm Element",
          "source": "src/FRP-Helm-Graphics.html#FormStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ElementForm",
          "package": "helm",
          "partial": "Element Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ElementForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "FlatCap",
          "package": "helm",
          "signature": "FlatCap",
          "source": "src/FRP-Helm-Graphics.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "FlatCap",
          "package": "helm",
          "partial": "Flat Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:FlatCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "Form",
          "package": "helm",
          "signature": "Form",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Form",
          "package": "helm",
          "partial": "Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "Gradient",
          "package": "helm",
          "signature": "Gradient Gradient",
          "source": "src/FRP-Helm-Graphics.html#FillStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Gradient",
          "package": "helm",
          "partial": "Gradient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "GroupForm",
          "package": "helm",
          "signature": "GroupForm (Maybe Matrix) [Form]",
          "source": "src/FRP-Helm-Graphics.html#FormStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "GroupForm",
          "normalized": "GroupForm(Maybe Matrix)[Form]",
          "package": "helm",
          "partial": "Group Form",
          "signature": "GroupForm(Maybe Matrix)[Form]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:GroupForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ImageElement",
          "package": "helm",
          "signature": "ImageElement (Int, Int) Int Int FilePath Bool",
          "source": "src/FRP-Helm-Graphics.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ImageElement",
          "normalized": "ImageElement(Int,Int)Int Int FilePath Bool",
          "package": "helm",
          "partial": "Image Element",
          "signature": "ImageElement(Int,Int)Int Int FilePath Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ImageElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ItalicStyle",
          "package": "helm",
          "signature": "ItalicStyle",
          "source": "src/FRP-Helm-Graphics.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ItalicStyle",
          "package": "helm",
          "partial": "Italic Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ItalicStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "LightWeight",
          "package": "helm",
          "signature": "LightWeight",
          "source": "src/FRP-Helm-Graphics.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "LightWeight",
          "package": "helm",
          "partial": "Light Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:LightWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "LineStyle",
          "package": "helm",
          "signature": "LineStyle",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "LineStyle",
          "package": "helm",
          "partial": "Line Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:LineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "NormalStyle",
          "package": "helm",
          "signature": "NormalStyle",
          "source": "src/FRP-Helm-Graphics.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "NormalStyle",
          "package": "helm",
          "partial": "Normal Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:NormalStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "NormalWeight",
          "package": "helm",
          "signature": "NormalWeight",
          "source": "src/FRP-Helm-Graphics.html#FontWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "NormalWeight",
          "package": "helm",
          "partial": "Normal Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:NormalWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ObliqueStyle",
          "package": "helm",
          "signature": "ObliqueStyle",
          "source": "src/FRP-Helm-Graphics.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ObliqueStyle",
          "package": "helm",
          "partial": "Oblique Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ObliqueStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "PaddedCap",
          "package": "helm",
          "signature": "PaddedCap",
          "source": "src/FRP-Helm-Graphics.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "PaddedCap",
          "package": "helm",
          "partial": "Padded Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:PaddedCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "PathForm",
          "package": "helm",
          "signature": "PathForm LineStyle Path",
          "source": "src/FRP-Helm-Graphics.html#FormStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "PathForm",
          "package": "helm",
          "partial": "Path Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:PathForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "PolygonShape",
          "package": "helm",
          "signature": "PolygonShape Path",
          "source": "src/FRP-Helm-Graphics.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "PolygonShape",
          "package": "helm",
          "partial": "Polygon Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:PolygonShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "RectangleShape",
          "package": "helm",
          "signature": "RectangleShape (Double, Double)",
          "source": "src/FRP-Helm-Graphics.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "RectangleShape",
          "normalized": "RectangleShape(Double,Double)",
          "package": "helm",
          "partial": "Rectangle Shape",
          "signature": "RectangleShape(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:RectangleShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "RoundCap",
          "package": "helm",
          "signature": "RoundCap",
          "source": "src/FRP-Helm-Graphics.html#LineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "RoundCap",
          "package": "helm",
          "partial": "Round Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:RoundCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "ShapeForm",
          "package": "helm",
          "signature": "ShapeForm (Either LineStyle FillStyle) Shape",
          "source": "src/FRP-Helm-Graphics.html#FormStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ShapeForm",
          "package": "helm",
          "partial": "Shape Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ShapeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "SharpJoin",
          "package": "helm",
          "signature": "SharpJoin Double",
          "source": "src/FRP-Helm-Graphics.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "SharpJoin",
          "package": "helm",
          "partial": "Sharp Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:SharpJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "SmoothJoin",
          "package": "helm",
          "signature": "SmoothJoin",
          "source": "src/FRP-Helm-Graphics.html#LineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "SmoothJoin",
          "package": "helm",
          "partial": "Smooth Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:SmoothJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "Solid",
          "package": "helm",
          "signature": "Solid Color",
          "source": "src/FRP-Helm-Graphics.html#FillStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Solid",
          "package": "helm",
          "partial": "Solid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "Text",
          "package": "helm",
          "signature": "Text",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Text",
          "package": "helm",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "TextElement",
          "package": "helm",
          "signature": "TextElement Text",
          "source": "src/FRP-Helm-Graphics.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "TextElement",
          "package": "helm",
          "partial": "Text Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:TextElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "Texture",
          "package": "helm",
          "signature": "Texture String",
          "source": "src/FRP-Helm-Graphics.html#FillStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "Texture",
          "package": "helm",
          "partial": "Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a empty form, useful for having forms rendered only at some state. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "blank",
          "package": "helm",
          "signature": "Form",
          "source": "src/FRP-Helm-Graphics.html#blank",
          "type": "function"
        },
        "index": {
          "description": "Creates empty form useful for having forms rendered only at some state",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "blank",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecollage\u003c/a\u003e\u003c/code\u003e, but it centers the forms within the supplied dimensions. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "centeredCollage",
          "package": "helm",
          "signature": "Int -\u003e Int -\u003e [Form] -\u003e Element",
          "source": "src/FRP-Helm-Graphics.html#centeredCollage",
          "type": "function"
        },
        "index": {
          "description": "Like collage but it centers the forms within the supplied dimensions",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "centeredCollage",
          "normalized": "Int-\u003eInt-\u003e[Form]-\u003eElement",
          "package": "helm",
          "partial": "Collage",
          "signature": "Int-\u003eInt-\u003e[Form]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:centeredCollage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a circle shape with a radius. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "circle",
          "package": "helm",
          "signature": "Double -\u003e Shape",
          "source": "src/FRP-Helm-Graphics.html#circle",
          "type": "function"
        },
        "index": {
          "description": "Creates circle shape with radius",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "circle",
          "normalized": "Double-\u003eShape",
          "package": "helm",
          "signature": "Double-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an element from a collection of forms, with width and height arguments.\n    All forms are centered and clipped within the supplied dimensions.\n    It is generally used to directly render a collection of forms.\n\u003c/p\u003e\u003cpre\u003e collage 800 600 [move (100, 100) $ filled red $ square 100,\n                  move (100, 100) $ outlined (solid white) $ circle 50]\n\u003c/pre\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "collage",
          "package": "helm",
          "signature": "Int -\u003e Int -\u003e [Form] -\u003e Element",
          "source": "src/FRP-Helm-Graphics.html#collage",
          "type": "function"
        },
        "index": {
          "description": "Create an element from collection of forms with width and height arguments All forms are centered and clipped within the supplied dimensions It is generally used to directly render collection of forms collage move filled red square move outlined solid white circle",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "collage",
          "normalized": "Int-\u003eInt-\u003e[Form]-\u003eElement",
          "package": "helm",
          "signature": "Int-\u003eInt-\u003e[Form]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:collage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an element from an image by cropping it with a certain position, width, height\n    and image file path. This can be used to divide a single image up into smaller ones. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "croppedImage",
          "package": "helm",
          "signature": "(Int, Int) -\u003e Int -\u003e Int -\u003e FilePath -\u003e Element",
          "source": "src/FRP-Helm-Graphics.html#croppedImage",
          "type": "function"
        },
        "index": {
          "description": "Create an element from an image by cropping it with certain position width height and image file path This can be used to divide single image up into smaller ones",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "croppedImage",
          "normalized": "(Int,Int)-\u003eInt-\u003eInt-\u003eFilePath-\u003eElement",
          "package": "helm",
          "partial": "Image",
          "signature": "(Int,Int)-\u003eInt-\u003eInt-\u003eFilePath-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:croppedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a dashed line style with a color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "dashed",
          "package": "helm",
          "signature": "Color -\u003e LineStyle",
          "source": "src/FRP-Helm-Graphics.html#dashed",
          "type": "function"
        },
        "index": {
          "description": "Create dashed line style with color",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "dashed",
          "normalized": "Color-\u003eLineStyle",
          "package": "helm",
          "signature": "Color-\u003eLineStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:dashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the default line style. By default, the line is black with a width of 1,\n    flat caps and regular sharp joints. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "defaultLine",
          "package": "helm",
          "signature": "LineStyle",
          "source": "src/FRP-Helm-Graphics.html#defaultLine",
          "type": "function"
        },
        "index": {
          "description": "Creates the default line style By default the line is black with width of flat caps and regular sharp joints",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "defaultLine",
          "package": "helm",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:defaultLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a dotted line style with a color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "dotted",
          "package": "helm",
          "signature": "Color -\u003e LineStyle",
          "source": "src/FRP-Helm-Graphics.html#dotted",
          "type": "function"
        },
        "index": {
          "description": "Create dotted line style with color",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "dotted",
          "normalized": "Color-\u003eLineStyle",
          "package": "helm",
          "signature": "Color-\u003eLineStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:dotted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from a shape by filling it with a specific color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "filled",
          "package": "helm",
          "signature": "Color -\u003e Shape -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#filled",
          "type": "function"
        },
        "index": {
          "description": "Creates form from shape by filling it with specific color",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "filled",
          "normalized": "Color-\u003eShape-\u003eForm",
          "package": "helm",
          "signature": "Color-\u003eShape-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:filled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an element from an image with a given width, height and image file path.\n    If the image dimensions are not the same as given, then it will only use the relevant pixels\n    (i.e. cut out the given dimensions instead of scaling). If the given dimensions are bigger than\n    the actual image, than irrelevant pixels are ignored. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "fittedImage",
          "package": "helm",
          "signature": "Int -\u003e Int -\u003e FilePath -\u003e Element",
          "source": "src/FRP-Helm-Graphics.html#fittedImage",
          "type": "function"
        },
        "index": {
          "description": "Create an element from an image with given width height and image file path If the image dimensions are not the same as given then it will only use the relevant pixels i.e cut out the given dimensions instead of scaling If the given dimensions are bigger than the actual image than irrelevant pixels are ignored",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "fittedImage",
          "normalized": "Int-\u003eInt-\u003eFilePath-\u003eElement",
          "package": "helm",
          "partial": "Image",
          "signature": "Int-\u003eInt-\u003eFilePath-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:fittedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecenteredCollage\u003c/a\u003e\u003c/code\u003e, but it centers the forms around a specific point. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "fixedCollage",
          "package": "helm",
          "signature": "Int -\u003e Int -\u003e (Double, Double) -\u003e [Form] -\u003e Element",
          "source": "src/FRP-Helm-Graphics.html#fixedCollage",
          "type": "function"
        },
        "index": {
          "description": "Like centeredCollage but it centers the forms around specific point",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "fixedCollage",
          "normalized": "Int-\u003eInt-\u003e(Double,Double)-\u003e[Form]-\u003eElement",
          "package": "helm",
          "partial": "Collage",
          "signature": "Int-\u003eInt-\u003e(Double,Double)-\u003e[Form]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:fixedCollage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "formScale",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "formScale",
          "package": "helm",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "formStyle",
          "package": "helm",
          "signature": "FormStyle",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "formStyle",
          "package": "helm",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "formTheta",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "formTheta",
          "package": "helm",
          "partial": "Theta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formTheta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "formX",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "formX",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "formY",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "formY",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:formY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from a shape filled with a gradient. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "gradient",
          "package": "helm",
          "signature": "Gradient -\u003e Shape -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#gradient",
          "type": "function"
        },
        "index": {
          "description": "Creates form from shape filled with gradient",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "gradient",
          "normalized": "Gradient-\u003eShape-\u003eForm",
          "package": "helm",
          "signature": "Gradient-\u003eShape-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroups a collection of forms into a single one. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "group",
          "package": "helm",
          "signature": "[Form] -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#group",
          "type": "function"
        },
        "index": {
          "description": "Groups collection of forms into single one",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "group",
          "normalized": "[Form]-\u003eForm",
          "package": "helm",
          "signature": "[Form]-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroups a collection of forms into a single one, also applying a matrix transformation. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "groupTransform",
          "package": "helm",
          "signature": "Matrix -\u003e [Form] -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#groupTransform",
          "type": "function"
        },
        "index": {
          "description": "Groups collection of forms into single one also applying matrix transformation",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "groupTransform",
          "normalized": "Matrix-\u003e[Form]-\u003eForm",
          "package": "helm",
          "partial": "Transform",
          "signature": "Matrix-\u003e[Form]-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:groupTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an element from an image with a given width, height and image file path.\n    If the image dimensions are not the same as given, then it will stretch/shrink to fit.\n    Only PNG files are supported currently. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "image",
          "package": "helm",
          "signature": "Int -\u003e Int -\u003e FilePath -\u003e Element",
          "source": "src/FRP-Helm-Graphics.html#image",
          "type": "function"
        },
        "index": {
          "description": "Create an element from an image with given width height and image file path If the image dimensions are not the same as given then it will stretch shrink to fit Only PNG files are supported currently",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "image",
          "normalized": "Int-\u003eInt-\u003eFilePath-\u003eElement",
          "package": "helm",
          "signature": "Int-\u003eInt-\u003eFilePath-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "lineCap",
          "package": "helm",
          "signature": "LineCap",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "lineCap",
          "package": "helm",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "lineColor",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "lineColor",
          "package": "helm",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "lineDashOffset",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "lineDashOffset",
          "package": "helm",
          "partial": "Dash Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineDashOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "lineDashing",
          "package": "helm",
          "signature": "[Double]",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "lineDashing",
          "normalized": "[Double]",
          "package": "helm",
          "partial": "Dashing",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineDashing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "lineJoin",
          "package": "helm",
          "signature": "LineJoin",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "lineJoin",
          "package": "helm",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "lineWidth",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "lineWidth",
          "package": "helm",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:lineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a form relative to its current position. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "move",
          "package": "helm",
          "signature": "(Double, Double) -\u003e Form -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#move",
          "type": "function"
        },
        "index": {
          "description": "Moves form relative to its current position",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "move",
          "normalized": "(Double,Double)-\u003eForm-\u003eForm",
          "package": "helm",
          "signature": "(Double,Double)-\u003eForm-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a form's x-coordinate relative to its current position. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "moveX",
          "package": "helm",
          "signature": "Double -\u003e Form -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#moveX",
          "type": "function"
        },
        "index": {
          "description": "Moves form x-coordinate relative to its current position",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "moveX",
          "normalized": "Double-\u003eForm-\u003eForm",
          "package": "helm",
          "signature": "Double-\u003eForm-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:moveX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a form's y-coordinate relative to its current position. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "moveY",
          "package": "helm",
          "signature": "Double -\u003e Form -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#moveY",
          "type": "function"
        },
        "index": {
          "description": "Moves form y-coordinate relative to its current position",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "moveY",
          "normalized": "Double-\u003eForm-\u003eForm",
          "package": "helm",
          "signature": "Double-\u003eForm-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:moveY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a generic n-sided polygon (e.g. octagon, pentagon, etc) with\n    an amount of sides and radius. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "ngon",
          "package": "helm",
          "signature": "Int -\u003e Double -\u003e Shape",
          "source": "src/FRP-Helm-Graphics.html#ngon",
          "type": "function"
        },
        "index": {
          "description": "Creates generic n-sided polygon e.g octagon pentagon etc with an amount of sides and radius",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "ngon",
          "normalized": "Int-\u003eDouble-\u003eShape",
          "package": "helm",
          "signature": "Int-\u003eDouble-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:ngon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from a shape by outlining it with a specific line style. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "outlined",
          "package": "helm",
          "signature": "LineStyle -\u003e Shape -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#outlined",
          "type": "function"
        },
        "index": {
          "description": "Creates form from shape by outlining it with specific line style",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "outlined",
          "normalized": "LineStyle-\u003eShape-\u003eForm",
          "package": "helm",
          "signature": "LineStyle-\u003eShape-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:outlined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an oval shape with a width and height. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "oval",
          "package": "helm",
          "signature": "Double -\u003e Double -\u003e Shape",
          "source": "src/FRP-Helm-Graphics.html#oval",
          "type": "function"
        },
        "index": {
          "description": "Creates an oval shape with width and height",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "oval",
          "normalized": "Double-\u003eDouble-\u003eShape",
          "package": "helm",
          "signature": "Double-\u003eDouble-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:oval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a path for a collection of points. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "path",
          "package": "helm",
          "signature": "[(Double, Double)] -\u003e Path",
          "source": "src/FRP-Helm-Graphics.html#path",
          "type": "function"
        },
        "index": {
          "description": "Creates path for collection of points",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "path",
          "normalized": "[(Double,Double)]-\u003ePath",
          "package": "helm",
          "signature": "[(Double,Double)]-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a shape from a path (a list of points). \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "polygon",
          "package": "helm",
          "signature": "Path -\u003e Shape",
          "source": "src/FRP-Helm-Graphics.html#polygon",
          "type": "function"
        },
        "index": {
          "description": "Creates shape from path list of points",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "polygon",
          "normalized": "Path-\u003eShape",
          "package": "helm",
          "signature": "Path-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a rectangular shape with a width and height. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "rect",
          "package": "helm",
          "signature": "Double -\u003e Double -\u003e Shape",
          "source": "src/FRP-Helm-Graphics.html#rect",
          "type": "function"
        },
        "index": {
          "description": "Creates rectangular shape with width and height",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "rect",
          "normalized": "Double-\u003eDouble-\u003eShape",
          "package": "helm",
          "signature": "Double-\u003eDouble-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotates a form by an amount (in radians). \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "rotate",
          "package": "helm",
          "signature": "Double -\u003e Form -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotates form by an amount in radians",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "rotate",
          "normalized": "Double-\u003eForm-\u003eForm",
          "package": "helm",
          "signature": "Double-\u003eForm-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales a form by an amount, e.g. scaling by \u003cem\u003e2.0\u003c/em\u003e will double the size. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "scale",
          "package": "helm",
          "signature": "Double -\u003e Form -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Scales form by an amount e.g scaling by will double the size",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "scale",
          "normalized": "Double-\u003eForm-\u003eForm",
          "package": "helm",
          "signature": "Double-\u003eForm-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a path from a line segment, i.e. a start and end point. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "segment",
          "package": "helm",
          "signature": "(Double, Double) -\u003e (Double, Double) -\u003e Path",
          "source": "src/FRP-Helm-Graphics.html#segment",
          "type": "function"
        },
        "index": {
          "description": "Creates path from line segment i.e start and end point",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "segment",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003ePath",
          "package": "helm",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a solid line style with a color. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "solid",
          "package": "helm",
          "signature": "Color -\u003e LineStyle",
          "source": "src/FRP-Helm-Graphics.html#solid",
          "type": "function"
        },
        "index": {
          "description": "Create solid line style with color",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "solid",
          "normalized": "Color-\u003eLineStyle",
          "package": "helm",
          "signature": "Color-\u003eLineStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from a image file path with additional position, width and height arguments.\n    Allows you to splice smaller parts from a single image. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "sprite",
          "package": "helm",
          "signature": "Int -\u003e Int -\u003e (Int, Int) -\u003e FilePath -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#sprite",
          "type": "function"
        },
        "index": {
          "description": "Creates form from image file path with additional position width and height arguments Allows you to splice smaller parts from single image",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "sprite",
          "normalized": "Int-\u003eInt-\u003e(Int,Int)-\u003eFilePath-\u003eForm",
          "package": "helm",
          "signature": "Int-\u003eInt-\u003e(Int,Int)-\u003eFilePath-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:sprite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a square shape with a side length. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "square",
          "package": "helm",
          "signature": "Double -\u003e Shape",
          "source": "src/FRP-Helm-Graphics.html#square",
          "type": "function"
        },
        "index": {
          "description": "Creates square shape with side length",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "square",
          "normalized": "Double-\u003eShape",
          "package": "helm",
          "signature": "Double-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "textColor",
          "package": "helm",
          "signature": "Color",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textColor",
          "package": "helm",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "textHeight",
          "package": "helm",
          "signature": "Double",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textHeight",
          "package": "helm",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "textStyle",
          "package": "helm",
          "signature": "FontStyle",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textStyle",
          "package": "helm",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "textTypeface",
          "package": "helm",
          "signature": "String",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textTypeface",
          "package": "helm",
          "partial": "Typeface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textTypeface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "textUTF8",
          "package": "helm",
          "signature": "String",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textUTF8",
          "package": "helm",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Graphics",
          "name": "textWeight",
          "package": "helm",
          "signature": "FontWeight",
          "source": "src/FRP-Helm-Graphics.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textWeight",
          "package": "helm",
          "partial": "Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from a shape with a tiled texture and image file path. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "textured",
          "package": "helm",
          "signature": "String -\u003e Shape -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#textured",
          "type": "function"
        },
        "index": {
          "description": "Creates form from shape with tiled texture and image file path",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "textured",
          "normalized": "String-\u003eShape-\u003eForm",
          "package": "helm",
          "signature": "String-\u003eShape-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:textured"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from an element. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "toForm",
          "package": "helm",
          "signature": "Element -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#toForm",
          "type": "function"
        },
        "index": {
          "description": "Creates form from an element",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "toForm",
          "normalized": "Element-\u003eForm",
          "package": "helm",
          "partial": "Form",
          "signature": "Element-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:toForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a form from a path by tracing it with a specific line style. \n\u003c/p\u003e",
          "module": "FRP.Helm.Graphics",
          "name": "traced",
          "package": "helm",
          "signature": "LineStyle -\u003e Path -\u003e Form",
          "source": "src/FRP-Helm-Graphics.html#traced",
          "type": "function"
        },
        "index": {
          "description": "Creates form from path by tracing it with specific line style",
          "hierarchy": "FRP Helm Graphics",
          "module": "FRP.Helm.Graphics",
          "name": "traced",
          "normalized": "LineStyle-\u003ePath-\u003eForm",
          "package": "helm",
          "signature": "LineStyle-\u003ePath-\u003eForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Graphics.html#v:traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from joysticks. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "Joystick",
          "package": "helm",
          "source": "src/FRP-Helm-Joystick.html",
          "type": "module"
        },
        "index": {
          "description": "Contains signals that sample input from joysticks",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "Joystick",
          "package": "helm",
          "partial": "Joystick",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type describing a joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "Joystick",
          "package": "helm",
          "source": "src/FRP-Helm-Joystick.html#Joystick",
          "type": "type"
        },
        "index": {
          "description": "type describing joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "Joystick",
          "package": "helm",
          "partial": "Joystick",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#t:Joystick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of joysticks available. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "available",
          "package": "helm",
          "signature": "SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#available",
          "type": "function"
        },
        "index": {
          "description": "The amount of joysticks available",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "available",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:available"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of axes available for a joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "availableAxes",
          "package": "helm",
          "signature": "Joystick -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#availableAxes",
          "type": "function"
        },
        "index": {
          "description": "The amount of axes available for joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "availableAxes",
          "normalized": "Joystick-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "partial": "Axes",
          "signature": "Joystick-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of balls available for a joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "availableBalls",
          "package": "helm",
          "signature": "Joystick -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#availableBalls",
          "type": "function"
        },
        "index": {
          "description": "The amount of balls available for joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "availableBalls",
          "normalized": "Joystick-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "partial": "Balls",
          "signature": "Joystick-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableBalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of buttons available for a joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "availableButtons",
          "package": "helm",
          "signature": "Joystick -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#availableButtons",
          "type": "function"
        },
        "index": {
          "description": "The amount of buttons available for joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "availableButtons",
          "normalized": "Joystick-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "partial": "Buttons",
          "signature": "Joystick-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableButtons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe amount of hats available for a joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "availableHats",
          "package": "helm",
          "signature": "Joystick -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#availableHats",
          "type": "function"
        },
        "index": {
          "description": "The amount of hats available for joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "availableHats",
          "normalized": "Joystick-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "partial": "Hats",
          "signature": "Joystick-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:availableHats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of the axis of the joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "axis",
          "package": "helm",
          "signature": "Joystick -\u003e Int -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#axis",
          "type": "function"
        },
        "index": {
          "description": "The current state of the axis of the joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "axis",
          "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of the ball of the joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "ball",
          "package": "helm",
          "signature": "Joystick -\u003e Int -\u003e SignalGen (Signal (Int, Int))",
          "source": "src/FRP-Helm-Joystick.html#ball",
          "type": "function"
        },
        "index": {
          "description": "The current state of the ball of the joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "ball",
          "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))",
          "package": "helm",
          "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:ball"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of the button of the joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "button",
          "package": "helm",
          "signature": "Joystick -\u003e Int -\u003e SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Joystick.html#button",
          "type": "function"
        },
        "index": {
          "description": "The current state of the button of the joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "button",
          "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal Bool)",
          "package": "helm",
          "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of the hat of the joystick, returned\n    as a directional tuple. For example, up is \u003cem\u003e(0, -1)\u003c/em\u003e,\n    left \u003cem\u003e(-1, 0)\u003c/em\u003e, bottom-right is \u003cem\u003e(1, 1)\u003c/em\u003e, etc. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "hat",
          "package": "helm",
          "signature": "Joystick -\u003e Int -\u003e SignalGen (Signal (Int, Int))",
          "source": "src/FRP-Helm-Joystick.html#hat",
          "type": "function"
        },
        "index": {
          "description": "The current state of the hat of the joystick returned as directional tuple For example up is left bottom-right is etc",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "hat",
          "normalized": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))",
          "package": "helm",
          "signature": "Joystick-\u003eInt-\u003eSignalGen(Signal(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:hat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index of a joystick. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "index",
          "package": "helm",
          "signature": "Joystick -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Joystick.html#index",
          "type": "function"
        },
        "index": {
          "description": "The index of joystick",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "index",
          "normalized": "Joystick-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "signature": "Joystick-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a joystick. Can throw an exception when sampled if the joystick index is invalid. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "name",
          "package": "helm",
          "signature": "Int -\u003e SignalGen (Signal String)",
          "source": "src/FRP-Helm-Joystick.html#name",
          "type": "function"
        },
        "index": {
          "description": "The name of joystick Can throw an exception when sampled if the joystick index is invalid",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "name",
          "normalized": "Int-\u003eSignalGen(Signal String)",
          "package": "helm",
          "signature": "Int-\u003eSignalGen(Signal String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe joystick at a certain slot. Can throw an exception when sampled if the joystick index is invalid. \n\u003c/p\u003e",
          "module": "FRP.Helm.Joystick",
          "name": "open",
          "package": "helm",
          "signature": "Int -\u003e SignalGen (Signal Joystick)",
          "source": "src/FRP-Helm-Joystick.html#open",
          "type": "function"
        },
        "index": {
          "description": "The joystick at certain slot Can throw an exception when sampled if the joystick index is invalid",
          "hierarchy": "FRP Helm Joystick",
          "module": "FRP.Helm.Joystick",
          "name": "open",
          "normalized": "Int-\u003eSignalGen(Signal Joystick)",
          "package": "helm",
          "signature": "Int-\u003eSignalGen(Signal Joystick)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Joystick.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from the keyboard. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "Keyboard",
          "package": "helm",
          "source": "src/FRP-Helm-Keyboard.html",
          "type": "module"
        },
        "index": {
          "description": "Contains signals that sample input from the keyboard",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Keyboard",
          "package": "helm",
          "partial": "Keyboard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a physical key on a keyboard. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "Key",
          "package": "helm",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "data"
        },
        "index": {
          "description": "data structure describing physical key on keyboard",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Key",
          "package": "helm",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "AKey",
          "package": "helm",
          "signature": "AKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "AKey",
          "package": "helm",
          "partial": "AKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "AmpersandKey",
          "package": "helm",
          "signature": "AmpersandKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "AmpersandKey",
          "package": "helm",
          "partial": "Ampersand Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AmpersandKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "AsteriskKey",
          "package": "helm",
          "signature": "AsteriskKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "AsteriskKey",
          "package": "helm",
          "partial": "Asterisk Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AsteriskKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "AtKey",
          "package": "helm",
          "signature": "AtKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "AtKey",
          "package": "helm",
          "partial": "At Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:AtKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "BKey",
          "package": "helm",
          "signature": "BKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "BKey",
          "package": "helm",
          "partial": "BKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "BackquoteKey",
          "package": "helm",
          "signature": "BackquoteKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "BackquoteKey",
          "package": "helm",
          "partial": "Backquote Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BackquoteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "BackslashKey",
          "package": "helm",
          "signature": "BackslashKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "BackslashKey",
          "package": "helm",
          "partial": "Backslash Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BackslashKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "BackspaceKey",
          "package": "helm",
          "signature": "BackspaceKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "BackspaceKey",
          "package": "helm",
          "partial": "Backspace Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BackspaceKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "BreakKey",
          "package": "helm",
          "signature": "BreakKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "BreakKey",
          "package": "helm",
          "partial": "Break Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:BreakKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "CKey",
          "package": "helm",
          "signature": "CKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "CKey",
          "package": "helm",
          "partial": "CKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "CapsLockKey",
          "package": "helm",
          "signature": "CapsLockKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "CapsLockKey",
          "package": "helm",
          "partial": "Caps Lock Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CapsLockKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "CaretKey",
          "package": "helm",
          "signature": "CaretKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "CaretKey",
          "package": "helm",
          "partial": "Caret Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CaretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ClearKey",
          "package": "helm",
          "signature": "ClearKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ClearKey",
          "package": "helm",
          "partial": "Clear Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ClearKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ColonKey",
          "package": "helm",
          "signature": "ColonKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ColonKey",
          "package": "helm",
          "partial": "Colon Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ColonKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "CommaKey",
          "package": "helm",
          "signature": "CommaKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "CommaKey",
          "package": "helm",
          "partial": "Comma Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:CommaKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ComposeKey",
          "package": "helm",
          "signature": "ComposeKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ComposeKey",
          "package": "helm",
          "partial": "Compose Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ComposeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "DKey",
          "package": "helm",
          "signature": "DKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "DKey",
          "package": "helm",
          "partial": "DKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "DeleteKey",
          "package": "helm",
          "signature": "DeleteKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "DeleteKey",
          "package": "helm",
          "partial": "Delete Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DeleteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "DollarKey",
          "package": "helm",
          "signature": "DollarKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "DollarKey",
          "package": "helm",
          "partial": "Dollar Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DollarKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "DownKey",
          "package": "helm",
          "signature": "DownKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "DownKey",
          "package": "helm",
          "partial": "Down Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:DownKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "EKey",
          "package": "helm",
          "signature": "EKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "EKey",
          "package": "helm",
          "partial": "EKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "EndKey",
          "package": "helm",
          "signature": "EndKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "EndKey",
          "package": "helm",
          "partial": "End Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EndKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "EnterKey",
          "package": "helm",
          "signature": "EnterKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "EnterKey",
          "package": "helm",
          "partial": "Enter Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EnterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "EqualsKey",
          "package": "helm",
          "signature": "EqualsKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "EqualsKey",
          "package": "helm",
          "partial": "Equals Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EqualsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "EscapeKey",
          "package": "helm",
          "signature": "EscapeKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "EscapeKey",
          "package": "helm",
          "partial": "Escape Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EscapeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "EuroKey",
          "package": "helm",
          "signature": "EuroKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "EuroKey",
          "package": "helm",
          "partial": "Euro Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:EuroKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ExclaimKey",
          "package": "helm",
          "signature": "ExclaimKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ExclaimKey",
          "package": "helm",
          "partial": "Exclaim Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ExclaimKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F10Key",
          "package": "helm",
          "signature": "F10Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F10Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F10Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F11Key",
          "package": "helm",
          "signature": "F11Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F11Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F11Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F12Key",
          "package": "helm",
          "signature": "F12Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F12Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F12Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F13Key",
          "package": "helm",
          "signature": "F13Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F13Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F13Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F14Key",
          "package": "helm",
          "signature": "F14Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F14Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F14Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F15Key",
          "package": "helm",
          "signature": "F15Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F15Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F15Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F1Key",
          "package": "helm",
          "signature": "F1Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F1Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F1Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F2Key",
          "package": "helm",
          "signature": "F2Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F2Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F2Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F3Key",
          "package": "helm",
          "signature": "F3Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F3Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F3Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F4Key",
          "package": "helm",
          "signature": "F4Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F4Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F4Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F5Key",
          "package": "helm",
          "signature": "F5Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F5Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F5Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F6Key",
          "package": "helm",
          "signature": "F6Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F6Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F6Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F7Key",
          "package": "helm",
          "signature": "F7Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F7Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F7Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F8Key",
          "package": "helm",
          "signature": "F8Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F8Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F8Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "F9Key",
          "package": "helm",
          "signature": "F9Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "F9Key",
          "package": "helm",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:F9Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "FKey",
          "package": "helm",
          "signature": "FKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "FKey",
          "package": "helm",
          "partial": "FKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:FKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "GKey",
          "package": "helm",
          "signature": "GKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "GKey",
          "package": "helm",
          "partial": "GKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:GKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "GreaterKey",
          "package": "helm",
          "signature": "GreaterKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "GreaterKey",
          "package": "helm",
          "partial": "Greater Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:GreaterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "HKey",
          "package": "helm",
          "signature": "HKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "HKey",
          "package": "helm",
          "partial": "HKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "HashKey",
          "package": "helm",
          "signature": "HashKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "HashKey",
          "package": "helm",
          "partial": "Hash Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HashKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "HelpKey",
          "package": "helm",
          "signature": "HelpKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "HelpKey",
          "package": "helm",
          "partial": "Help Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HelpKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "HomeKey",
          "package": "helm",
          "signature": "HomeKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "HomeKey",
          "package": "helm",
          "partial": "Home Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:HomeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "IKey",
          "package": "helm",
          "signature": "IKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "IKey",
          "package": "helm",
          "partial": "IKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:IKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "InsertKey",
          "package": "helm",
          "signature": "InsertKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "InsertKey",
          "package": "helm",
          "partial": "Insert Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:InsertKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "JKey",
          "package": "helm",
          "signature": "JKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "JKey",
          "package": "helm",
          "partial": "JKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:JKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KKey",
          "package": "helm",
          "signature": "KKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KKey",
          "package": "helm",
          "partial": "KKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadDivideKey",
          "package": "helm",
          "signature": "KeypadDivideKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadDivideKey",
          "package": "helm",
          "partial": "Keypad Divide Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadDivideKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadEnterKey",
          "package": "helm",
          "signature": "KeypadEnterKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadEnterKey",
          "package": "helm",
          "partial": "Keypad Enter Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadEnterKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadEqualsKey",
          "package": "helm",
          "signature": "KeypadEqualsKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadEqualsKey",
          "package": "helm",
          "partial": "Keypad Equals Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadEqualsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadMinusKey",
          "package": "helm",
          "signature": "KeypadMinusKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadMinusKey",
          "package": "helm",
          "partial": "Keypad Minus Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadMinusKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadMultiplyKey",
          "package": "helm",
          "signature": "KeypadMultiplyKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadMultiplyKey",
          "package": "helm",
          "partial": "Keypad Multiply Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadMultiplyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum0Key",
          "package": "helm",
          "signature": "KeypadNum0Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum0Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum0Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum1Key",
          "package": "helm",
          "signature": "KeypadNum1Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum1Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum1Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum2Key",
          "package": "helm",
          "signature": "KeypadNum2Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum2Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum2Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum3Key",
          "package": "helm",
          "signature": "KeypadNum3Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum3Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum3Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum4Key",
          "package": "helm",
          "signature": "KeypadNum4Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum4Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum4Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum5Key",
          "package": "helm",
          "signature": "KeypadNum5Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum5Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum5Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum6Key",
          "package": "helm",
          "signature": "KeypadNum6Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum6Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum6Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum7Key",
          "package": "helm",
          "signature": "KeypadNum7Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum7Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum7Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum8Key",
          "package": "helm",
          "signature": "KeypadNum8Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum8Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum8Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum9Key",
          "package": "helm",
          "signature": "KeypadNum9Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadNum9Key",
          "package": "helm",
          "partial": "Keypad Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadNum9Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadPeriodKey",
          "package": "helm",
          "signature": "KeypadPeriodKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadPeriodKey",
          "package": "helm",
          "partial": "Keypad Period Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadPeriodKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadPlusKey",
          "package": "helm",
          "signature": "KeypadPlusKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "KeypadPlusKey",
          "package": "helm",
          "partial": "Keypad Plus Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:KeypadPlusKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LAltKey",
          "package": "helm",
          "signature": "LAltKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LAltKey",
          "package": "helm",
          "partial": "LAlt Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LAltKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LCtrlKey",
          "package": "helm",
          "signature": "LCtrlKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LCtrlKey",
          "package": "helm",
          "partial": "LCtrl Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LCtrlKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LKey",
          "package": "helm",
          "signature": "LKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LKey",
          "package": "helm",
          "partial": "LKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LMetaKey",
          "package": "helm",
          "signature": "LMetaKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LMetaKey",
          "package": "helm",
          "partial": "LMeta Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LMetaKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LShiftKey",
          "package": "helm",
          "signature": "LShiftKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LShiftKey",
          "package": "helm",
          "partial": "LShift Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LShiftKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LSuperKey",
          "package": "helm",
          "signature": "LSuperKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LSuperKey",
          "package": "helm",
          "partial": "LSuper Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LSuperKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LeftBracketKey",
          "package": "helm",
          "signature": "LeftBracketKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LeftBracketKey",
          "package": "helm",
          "partial": "Left Bracket Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LeftBracketKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LeftKey",
          "package": "helm",
          "signature": "LeftKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LeftKey",
          "package": "helm",
          "partial": "Left Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LeftKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LeftParenKey",
          "package": "helm",
          "signature": "LeftParenKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LeftParenKey",
          "package": "helm",
          "partial": "Left Paren Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LeftParenKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "LessKey",
          "package": "helm",
          "signature": "LessKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "LessKey",
          "package": "helm",
          "partial": "Less Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:LessKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "MKey",
          "package": "helm",
          "signature": "MKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "MKey",
          "package": "helm",
          "partial": "MKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:MKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "MenuKey",
          "package": "helm",
          "signature": "MenuKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "MenuKey",
          "package": "helm",
          "partial": "Menu Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:MenuKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "MinusKey",
          "package": "helm",
          "signature": "MinusKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "MinusKey",
          "package": "helm",
          "partial": "Minus Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:MinusKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ModeKey",
          "package": "helm",
          "signature": "ModeKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ModeKey",
          "package": "helm",
          "partial": "Mode Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ModeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "NKey",
          "package": "helm",
          "signature": "NKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "NKey",
          "package": "helm",
          "partial": "NKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:NKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num0Key",
          "package": "helm",
          "signature": "Num0Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num0Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num0Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num1Key",
          "package": "helm",
          "signature": "Num1Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num1Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num1Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num2Key",
          "package": "helm",
          "signature": "Num2Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num2Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num2Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num3Key",
          "package": "helm",
          "signature": "Num3Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num3Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num3Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num4Key",
          "package": "helm",
          "signature": "Num4Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num4Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num4Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num5Key",
          "package": "helm",
          "signature": "Num5Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num5Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num5Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num6Key",
          "package": "helm",
          "signature": "Num6Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num6Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num6Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num7Key",
          "package": "helm",
          "signature": "Num7Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num7Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num7Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num8Key",
          "package": "helm",
          "signature": "Num8Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num8Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num8Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "Num9Key",
          "package": "helm",
          "signature": "Num9Key",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "Num9Key",
          "package": "helm",
          "partial": "Num Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:Num9Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "NumLockKey",
          "package": "helm",
          "signature": "NumLockKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "NumLockKey",
          "package": "helm",
          "partial": "Num Lock Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:NumLockKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "OKey",
          "package": "helm",
          "signature": "OKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "OKey",
          "package": "helm",
          "partial": "OKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:OKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PKey",
          "package": "helm",
          "signature": "PKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PKey",
          "package": "helm",
          "partial": "PKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PageDownKey",
          "package": "helm",
          "signature": "PageDownKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PageDownKey",
          "package": "helm",
          "partial": "Page Down Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PageDownKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PageUpKey",
          "package": "helm",
          "signature": "PageUpKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PageUpKey",
          "package": "helm",
          "partial": "Page Up Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PageUpKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PauseKey",
          "package": "helm",
          "signature": "PauseKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PauseKey",
          "package": "helm",
          "partial": "Pause Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PauseKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PeriodKey",
          "package": "helm",
          "signature": "PeriodKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PeriodKey",
          "package": "helm",
          "partial": "Period Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PeriodKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PlusKey",
          "package": "helm",
          "signature": "PlusKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PlusKey",
          "package": "helm",
          "partial": "Plus Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PlusKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PowerKey",
          "package": "helm",
          "signature": "PowerKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PowerKey",
          "package": "helm",
          "partial": "Power Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PowerKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "PrintKey",
          "package": "helm",
          "signature": "PrintKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "PrintKey",
          "package": "helm",
          "partial": "Print Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:PrintKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "QKey",
          "package": "helm",
          "signature": "QKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "QKey",
          "package": "helm",
          "partial": "QKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "QuestionKey",
          "package": "helm",
          "signature": "QuestionKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "QuestionKey",
          "package": "helm",
          "partial": "Question Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QuestionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "QuoteKey",
          "package": "helm",
          "signature": "QuoteKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "QuoteKey",
          "package": "helm",
          "partial": "Quote Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QuoteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "QuotedBlKey",
          "package": "helm",
          "signature": "QuotedBlKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "QuotedBlKey",
          "package": "helm",
          "partial": "Quoted Bl Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:QuotedBlKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RAltKey",
          "package": "helm",
          "signature": "RAltKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RAltKey",
          "package": "helm",
          "partial": "RAlt Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RAltKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RCtrlKey",
          "package": "helm",
          "signature": "RCtrlKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RCtrlKey",
          "package": "helm",
          "partial": "RCtrl Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RCtrlKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RKey",
          "package": "helm",
          "signature": "RKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RKey",
          "package": "helm",
          "partial": "RKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RMetaKey",
          "package": "helm",
          "signature": "RMetaKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RMetaKey",
          "package": "helm",
          "partial": "RMeta Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RMetaKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RShiftKey",
          "package": "helm",
          "signature": "RShiftKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RShiftKey",
          "package": "helm",
          "partial": "RShift Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RShiftKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RSuperKey",
          "package": "helm",
          "signature": "RSuperKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RSuperKey",
          "package": "helm",
          "partial": "RSuper Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RSuperKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RightBracketKey",
          "package": "helm",
          "signature": "RightBracketKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RightBracketKey",
          "package": "helm",
          "partial": "Right Bracket Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RightBracketKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RightKey",
          "package": "helm",
          "signature": "RightKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RightKey",
          "package": "helm",
          "partial": "Right Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RightKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "RightParenKey",
          "package": "helm",
          "signature": "RightParenKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "RightParenKey",
          "package": "helm",
          "partial": "Right Paren Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:RightParenKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "SKey",
          "package": "helm",
          "signature": "SKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "SKey",
          "package": "helm",
          "partial": "SKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ScrollLockKey",
          "package": "helm",
          "signature": "ScrollLockKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ScrollLockKey",
          "package": "helm",
          "partial": "Scroll Lock Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ScrollLockKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "SemicolonKey",
          "package": "helm",
          "signature": "SemicolonKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "SemicolonKey",
          "package": "helm",
          "partial": "Semicolon Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SemicolonKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "SlashKey",
          "package": "helm",
          "signature": "SlashKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "SlashKey",
          "package": "helm",
          "partial": "Slash Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SlashKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "SpaceKey",
          "package": "helm",
          "signature": "SpaceKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "SpaceKey",
          "package": "helm",
          "partial": "Space Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SpaceKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "SysReqKey",
          "package": "helm",
          "signature": "SysReqKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "SysReqKey",
          "package": "helm",
          "partial": "Sys Req Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:SysReqKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "TKey",
          "package": "helm",
          "signature": "TKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "TKey",
          "package": "helm",
          "partial": "TKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:TKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "TabKey",
          "package": "helm",
          "signature": "TabKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "TabKey",
          "package": "helm",
          "partial": "Tab Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:TabKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "UKey",
          "package": "helm",
          "signature": "UKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "UKey",
          "package": "helm",
          "partial": "UKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "UnderscoreKey",
          "package": "helm",
          "signature": "UnderscoreKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "UnderscoreKey",
          "package": "helm",
          "partial": "Underscore Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UnderscoreKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "UndoKey",
          "package": "helm",
          "signature": "UndoKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "UndoKey",
          "package": "helm",
          "partial": "Undo Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UndoKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "UpKey",
          "package": "helm",
          "signature": "UpKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "UpKey",
          "package": "helm",
          "partial": "Up Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:UpKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "VKey",
          "package": "helm",
          "signature": "VKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "VKey",
          "package": "helm",
          "partial": "VKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:VKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "WKey",
          "package": "helm",
          "signature": "WKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "WKey",
          "package": "helm",
          "partial": "WKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:WKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "XKey",
          "package": "helm",
          "signature": "XKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "XKey",
          "package": "helm",
          "partial": "XKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:XKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "YKey",
          "package": "helm",
          "signature": "YKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "YKey",
          "package": "helm",
          "partial": "YKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:YKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Keyboard",
          "name": "ZKey",
          "package": "helm",
          "signature": "ZKey",
          "source": "src/FRP-Helm-Keyboard.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ZKey",
          "package": "helm",
          "partial": "ZKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ZKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directional tuple combined from the arrow keys. When none of the arrow keys\n    are being pressed this signal samples to \u003cem\u003e(0, 0)\u003c/em\u003e, otherwise it samples to a\n    direction based on which keys are pressed. For example, pressing the left key\n    results in \u003cem\u003e(-1, 0)\u003c/em\u003e, the down key \u003cem\u003e(0, 1)\u003c/em\u003e, up and right \u003cem\u003e(1, -1)\u003c/em\u003e, etc. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "arrows",
          "package": "helm",
          "signature": "SignalGen (Signal (Int, Int))",
          "source": "src/FRP-Helm-Keyboard.html#arrows",
          "type": "function"
        },
        "index": {
          "description": "directional tuple combined from the arrow keys When none of the arrow keys are being pressed this signal samples to otherwise it samples to direction based on which keys are pressed For example pressing the left key results in the down key up and right etc",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "arrows",
          "normalized": "SignalGen(Signal(Int,Int))",
          "package": "helm",
          "signature": "SignalGen(Signal(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:arrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether either control key is pressed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "ctrl",
          "package": "helm",
          "signature": "SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Keyboard.html#ctrl",
          "type": "function"
        },
        "index": {
          "description": "Whether either control key is pressed",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "ctrl",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:ctrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the enter (a.k.a. return) key is pressed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "enter",
          "package": "helm",
          "signature": "SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Keyboard.html#enter",
          "type": "function"
        },
        "index": {
          "description": "Whether the enter a.k.a return key is pressed",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "enter",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether a key is pressed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "isDown",
          "package": "helm",
          "signature": "Key -\u003e SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Keyboard.html#isDown",
          "type": "function"
        },
        "index": {
          "description": "Whether key is pressed",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "isDown",
          "normalized": "Key-\u003eSignalGen(Signal Bool)",
          "package": "helm",
          "partial": "Down",
          "signature": "Key-\u003eSignalGen(Signal Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:isDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of keys that are currently being pressed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "keysDown",
          "package": "helm",
          "signature": "SignalGen (Signal [Key])",
          "source": "src/FRP-Helm-Keyboard.html#keysDown",
          "type": "function"
        },
        "index": {
          "description": "list of keys that are currently being pressed",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "keysDown",
          "normalized": "SignalGen(Signal[Key])",
          "package": "helm",
          "partial": "Down",
          "signature": "SignalGen(Signal[Key])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:keysDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether either shift key is pressed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "shift",
          "package": "helm",
          "signature": "SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Keyboard.html#shift",
          "type": "function"
        },
        "index": {
          "description": "Whether either shift key is pressed",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "shift",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the space key is pressed. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "space",
          "package": "helm",
          "signature": "SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Keyboard.html#space",
          "type": "function"
        },
        "index": {
          "description": "Whether the space key is pressed",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "space",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the \u003ccode\u003e\u003ca\u003earrows\u003c/a\u003e\u003c/code\u003e signal, but uses the popular WASD movement controls instead. \n\u003c/p\u003e",
          "module": "FRP.Helm.Keyboard",
          "name": "wasd",
          "package": "helm",
          "signature": "SignalGen (Signal (Int, Int))",
          "source": "src/FRP-Helm-Keyboard.html#wasd",
          "type": "function"
        },
        "index": {
          "description": "Similar to the arrows signal but uses the popular WASD movement controls instead",
          "hierarchy": "FRP Helm Keyboard",
          "module": "FRP.Helm.Keyboard",
          "name": "wasd",
          "normalized": "SignalGen(Signal(Int,Int))",
          "package": "helm",
          "signature": "SignalGen(Signal(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Keyboard.html#v:wasd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from the mouse. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Mouse",
          "name": "Mouse",
          "package": "helm",
          "source": "src/FRP-Helm-Mouse.html",
          "type": "module"
        },
        "index": {
          "description": "Contains signals that sample input from the mouse",
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "Mouse",
          "package": "helm",
          "partial": "Mouse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing a button on a mouse. \n\u003c/p\u003e",
          "module": "FRP.Helm.Mouse",
          "name": "Mouse",
          "package": "helm",
          "source": "src/FRP-Helm-Mouse.html#Mouse",
          "type": "data"
        },
        "index": {
          "description": "data structure describing button on mouse",
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "Mouse",
          "package": "helm",
          "partial": "Mouse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#t:Mouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Mouse",
          "name": "LeftMouse",
          "package": "helm",
          "signature": "LeftMouse",
          "source": "src/FRP-Helm-Mouse.html#Mouse",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "LeftMouse",
          "package": "helm",
          "partial": "Left Mouse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:LeftMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Mouse",
          "name": "MiddleMouse",
          "package": "helm",
          "signature": "MiddleMouse",
          "source": "src/FRP-Helm-Mouse.html#Mouse",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "MiddleMouse",
          "package": "helm",
          "partial": "Middle Mouse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:MiddleMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Mouse",
          "name": "RightMouse",
          "package": "helm",
          "signature": "RightMouse",
          "source": "src/FRP-Helm-Mouse.html#Mouse",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "RightMouse",
          "package": "helm",
          "partial": "Right Mouse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:RightMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of a certain mouse button.\n    True if the mouse is down, false otherwise. \n\u003c/p\u003e",
          "module": "FRP.Helm.Mouse",
          "name": "isDown",
          "package": "helm",
          "signature": "Mouse -\u003e SignalGen (Signal Bool)",
          "source": "src/FRP-Helm-Mouse.html#isDown",
          "type": "function"
        },
        "index": {
          "description": "The current state of certain mouse button True if the mouse is down false otherwise",
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "isDown",
          "normalized": "Mouse-\u003eSignalGen(Signal Bool)",
          "package": "helm",
          "partial": "Down",
          "signature": "Mouse-\u003eSignalGen(Signal Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:isDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current position of the mouse. \n\u003c/p\u003e",
          "module": "FRP.Helm.Mouse",
          "name": "position",
          "package": "helm",
          "signature": "SignalGen (Signal (Int, Int))",
          "source": "src/FRP-Helm-Mouse.html#position",
          "type": "function"
        },
        "index": {
          "description": "The current position of the mouse",
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "position",
          "normalized": "SignalGen(Signal(Int,Int))",
          "package": "helm",
          "signature": "SignalGen(Signal(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current x-coordinate of the mouse. \n\u003c/p\u003e",
          "module": "FRP.Helm.Mouse",
          "name": "x",
          "package": "helm",
          "signature": "SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Mouse.html#x",
          "type": "function"
        },
        "index": {
          "description": "The current x-coordinate of the mouse",
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "x",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current y-coordinate of the mouse. \n\u003c/p\u003e",
          "module": "FRP.Helm.Mouse",
          "name": "y",
          "package": "helm",
          "signature": "SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Mouse.html#y",
          "type": "function"
        },
        "index": {
          "description": "The current y-coordinate of the mouse",
          "hierarchy": "FRP Helm Mouse",
          "module": "FRP.Helm.Mouse",
          "name": "y",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Mouse.html#v:y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all the data structures and functions for composing\n    pieces of formatted text. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Text",
          "name": "Text",
          "package": "helm",
          "source": "src/FRP-Helm-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Contains all the data structures and functions for composing pieces of formatted text",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "Text",
          "package": "helm",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a text element from any showable type, defaulting to\n    the monospace typeface. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "asText",
          "package": "helm",
          "signature": "a -\u003e Element",
          "source": "src/FRP-Helm-Text.html#asText",
          "type": "function"
        },
        "index": {
          "description": "Creates text element from any showable type defaulting to the monospace typeface",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "asText",
          "normalized": "a-\u003eElement",
          "package": "helm",
          "partial": "Text",
          "signature": "a-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:asText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the weight of a piece of text to bold. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "bold",
          "package": "helm",
          "signature": "Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#bold",
          "type": "function"
        },
        "index": {
          "description": "Sets the weight of piece of text to bold",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "bold",
          "normalized": "Text-\u003eText",
          "package": "helm",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the color of a piece of text. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "color",
          "package": "helm",
          "signature": "Color -\u003e Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#color",
          "type": "function"
        },
        "index": {
          "description": "Sets the color of piece of text",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "color",
          "normalized": "Color-\u003eText-\u003eText",
          "package": "helm",
          "signature": "Color-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the default text. By default the text is black sans-serif\n    with a height of 14pt. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "defaultText",
          "package": "helm",
          "signature": "Text",
          "source": "src/FRP-Helm-Text.html#defaultText",
          "type": "function"
        },
        "index": {
          "description": "Creates the default text By default the text is black sans-serif with height of pt",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "defaultText",
          "package": "helm",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:defaultText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the size of a text noticeably large. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "header",
          "package": "helm",
          "signature": "Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#header",
          "type": "function"
        },
        "index": {
          "description": "Sets the size of text noticeably large",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "header",
          "normalized": "Text-\u003eText",
          "package": "helm",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the size of a piece of text. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "height",
          "package": "helm",
          "signature": "Double -\u003e Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#height",
          "type": "function"
        },
        "index": {
          "description": "Sets the size of piece of text",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "height",
          "normalized": "Double-\u003eText-\u003eText",
          "package": "helm",
          "signature": "Double-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the slant of a piece of text to italic. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "italic",
          "package": "helm",
          "signature": "Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#italic",
          "type": "function"
        },
        "index": {
          "description": "Sets the slant of piece of text to italic",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "italic",
          "normalized": "Text-\u003eText",
          "package": "helm",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the weight of a piece of text to light. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "light",
          "package": "helm",
          "signature": "Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#light",
          "type": "function"
        },
        "index": {
          "description": "Sets the weight of piece of text to light",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "light",
          "normalized": "Text-\u003eText",
          "package": "helm",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the typeface of the text to monospace. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "monospace",
          "package": "helm",
          "signature": "Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#monospace",
          "type": "function"
        },
        "index": {
          "description": "Sets the typeface of the text to monospace",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "monospace",
          "normalized": "Text-\u003eText",
          "package": "helm",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:monospace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the slant of a piece of text to oblique. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "oblique",
          "package": "helm",
          "signature": "Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#oblique",
          "type": "function"
        },
        "index": {
          "description": "Sets the slant of piece of text to oblique",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "oblique",
          "normalized": "Text-\u003eText",
          "package": "helm",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:oblique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a text element from a string. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "plainText",
          "package": "helm",
          "signature": "String -\u003e Element",
          "source": "src/FRP-Helm-Text.html#plainText",
          "type": "function"
        },
        "index": {
          "description": "Creates text element from string",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "plainText",
          "normalized": "String-\u003eElement",
          "package": "helm",
          "partial": "Text",
          "signature": "String-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:plainText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an element from a text. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "text",
          "package": "helm",
          "signature": "Text -\u003e Element",
          "source": "src/FRP-Helm-Text.html#text",
          "type": "function"
        },
        "index": {
          "description": "Creates an element from text",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "text",
          "normalized": "Text-\u003eElement",
          "package": "helm",
          "signature": "Text-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a text from a string. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "toText",
          "package": "helm",
          "signature": "String -\u003e Text",
          "source": "src/FRP-Helm-Text.html#toText",
          "type": "function"
        },
        "index": {
          "description": "Creates text from string",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "toText",
          "normalized": "String-\u003eText",
          "package": "helm",
          "partial": "Text",
          "signature": "String-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:toText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the typeface of the text. \n\u003c/p\u003e",
          "module": "FRP.Helm.Text",
          "name": "typeface",
          "package": "helm",
          "signature": "String -\u003e Text -\u003e Text",
          "source": "src/FRP-Helm-Text.html#typeface",
          "type": "function"
        },
        "index": {
          "description": "Sets the typeface of the text",
          "hierarchy": "FRP Helm Text",
          "module": "FRP.Helm.Text",
          "name": "typeface",
          "normalized": "String-\u003eText-\u003eText",
          "package": "helm",
          "signature": "String-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Text.html#v:typeface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains functions for composing units of time and signals that sample from the game clock. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Time",
          "name": "Time",
          "package": "helm",
          "source": "src/FRP-Helm-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Contains functions for composing units of time and signals that sample from the game clock",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "Time",
          "package": "helm",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type describing an amount of time in an arbitary unit. Use the time composing/converting functions to manipulate\n    time values. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "Time",
          "package": "helm",
          "source": "src/FRP-Helm-Time.html#Time",
          "type": "type"
        },
        "index": {
          "description": "type describing an amount of time in an arbitary unit Use the time composing converting functions to manipulate time values",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "Time",
          "package": "helm",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that blocks the game thread for a certain amount of time when sampled and then returns the\n    amount of time it blocked for. Please note that delaying by values smaller than 1 millisecond can have\n    platform-specific results. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "delay",
          "package": "helm",
          "signature": "Time -\u003e SignalGen (Signal Time)",
          "source": "src/FRP-Helm-Time.html#delay",
          "type": "function"
        },
        "index": {
          "description": "signal that blocks the game thread for certain amount of time when sampled and then returns the amount of time it blocked for Please note that delaying by values smaller than millisecond can have platform-specific results",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "delay",
          "normalized": "Time-\u003eSignalGen(Signal Time)",
          "package": "helm",
          "signature": "Time-\u003eSignalGen(Signal Time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that returns the time since it was last sampled when sampled. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "delta",
          "package": "helm",
          "signature": "SignalGen (Signal Time)",
          "source": "src/FRP-Helm-Time.html#delta",
          "type": "function"
        },
        "index": {
          "description": "signal that returns the time since it was last sampled when sampled",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "delta",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a frames-per-second value into a time value. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "fps",
          "package": "helm",
          "signature": "Int -\u003e Time",
          "source": "src/FRP-Helm-Time.html#fps",
          "type": "function"
        },
        "index": {
          "description": "Converts frames-per-second value into time value",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "fps",
          "normalized": "Int-\u003eTime",
          "package": "helm",
          "signature": "Int-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:fps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time value representing one hour. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "hour",
          "package": "helm",
          "signature": "Time",
          "source": "src/FRP-Helm-Time.html#hour",
          "type": "function"
        },
        "index": {
          "description": "time value representing one hour",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "hour",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a time value to a fractional value, in hours. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "inHours",
          "package": "helm",
          "signature": "Time -\u003e Double",
          "source": "src/FRP-Helm-Time.html#inHours",
          "type": "function"
        },
        "index": {
          "description": "Converts time value to fractional value in hours",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "inHours",
          "normalized": "Time-\u003eDouble",
          "package": "helm",
          "partial": "Hours",
          "signature": "Time-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a time value to a fractional value, in milliseconds. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "inMilliseconds",
          "package": "helm",
          "signature": "Time -\u003e Double",
          "source": "src/FRP-Helm-Time.html#inMilliseconds",
          "type": "function"
        },
        "index": {
          "description": "Converts time value to fractional value in milliseconds",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "inMilliseconds",
          "normalized": "Time-\u003eDouble",
          "package": "helm",
          "partial": "Milliseconds",
          "signature": "Time-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inMilliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a time value to a fractional value, in minutes. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "inMinutes",
          "package": "helm",
          "signature": "Time -\u003e Double",
          "source": "src/FRP-Helm-Time.html#inMinutes",
          "type": "function"
        },
        "index": {
          "description": "Converts time value to fractional value in minutes",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "inMinutes",
          "normalized": "Time-\u003eDouble",
          "package": "helm",
          "partial": "Minutes",
          "signature": "Time-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a time value to a fractional value, in seconds. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "inSeconds",
          "package": "helm",
          "signature": "Time -\u003e Double",
          "source": "src/FRP-Helm-Time.html#inSeconds",
          "type": "function"
        },
        "index": {
          "description": "Converts time value to fractional value in seconds",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "inSeconds",
          "normalized": "Time-\u003eDouble",
          "package": "helm",
          "partial": "Seconds",
          "signature": "Time-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:inSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time value representing one millisecond. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "millisecond",
          "package": "helm",
          "signature": "Time",
          "source": "src/FRP-Helm-Time.html#millisecond",
          "type": "function"
        },
        "index": {
          "description": "time value representing one millisecond",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "millisecond",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:millisecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time value representing one minute. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "minute",
          "package": "helm",
          "signature": "Time",
          "source": "src/FRP-Helm-Time.html#minute",
          "type": "function"
        },
        "index": {
          "description": "time value representing one minute",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "minute",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal that returns the time that the game has been running for when sampled. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "running",
          "package": "helm",
          "signature": "SignalGen (Signal Time)",
          "source": "src/FRP-Helm-Time.html#running",
          "type": "function"
        },
        "index": {
          "description": "signal that returns the time that the game has been running for when sampled",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "running",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time value representing one second. \n\u003c/p\u003e",
          "module": "FRP.Helm.Time",
          "name": "second",
          "package": "helm",
          "signature": "Time",
          "source": "src/FRP-Helm-Time.html#second",
          "type": "function"
        },
        "index": {
          "description": "time value representing one second",
          "hierarchy": "FRP Helm Time",
          "module": "FRP.Helm.Time",
          "name": "second",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Time.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains all data structures for describing transitions, composing and animating them. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Transition",
          "package": "helm",
          "source": "src/FRP-Helm-Transition.html",
          "type": "module"
        },
        "index": {
          "description": "Contains all data structures for describing transitions composing and animating them",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Transition",
          "package": "helm",
          "partial": "Transition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a value that can be interpolated. An example instance of this class follows:\n\u003c/p\u003e\u003cpre\u003e data YourDataType = YourDataConstructor SomeInterpolableType SomeOtherInterpolableType deriving Generic\n\n instance Interpolate YourDataType\n   interpolate 0.5 (YourDataConstructor 3 5) (YourDataConstructor 5 7) == YourDataConstructor 4 6\n\u003c/pre\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Interpolate",
          "package": "helm",
          "source": "src/FRP-Helm-Transition.html#Interpolate",
          "type": "class"
        },
        "index": {
          "description": "Defines value that can be interpolated An example instance of this class follows data YourDataType YourDataConstructor SomeInterpolableType SomeOtherInterpolableType deriving Generic instance Interpolate YourDataType interpolate YourDataConstructor YourDataConstructor YourDataConstructor",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Interpolate",
          "package": "helm",
          "partial": "Interpolate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#t:Interpolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type describing a combosable transition. The writer keeps record of all the frames in the transition.\n    The state holds the current value of the transition. This allows you to easily compose transitions using do notation. \n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Transition",
          "package": "helm",
          "source": "src/FRP-Helm-Transition.html#Transition",
          "type": "type"
        },
        "index": {
          "description": "type describing combosable transition The writer keeps record of all the frames in the transition The state holds the current value of the transition This allows you to easily compose transitions using do notation",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Transition",
          "package": "helm",
          "partial": "Transition",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#t:Transition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of statuses that can be used to control a transition. \n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "TransitionStatus",
          "package": "helm",
          "source": "src/FRP-Helm-Transition.html#TransitionStatus",
          "type": "data"
        },
        "index": {
          "description": "variety of statuses that can be used to control transition",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "TransitionStatus",
          "package": "helm",
          "partial": "Transition Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#t:TransitionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transition will repeat forever.\n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Cycle",
          "package": "helm",
          "signature": "Cycle",
          "source": "src/FRP-Helm-Transition.html#TransitionStatus",
          "type": "function"
        },
        "index": {
          "description": "The transition will repeat forever",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Cycle",
          "package": "helm",
          "partial": "Cycle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transition is cycled once and then stops.\n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Once",
          "package": "helm",
          "signature": "Once",
          "source": "src/FRP-Helm-Transition.html#TransitionStatus",
          "type": "function"
        },
        "index": {
          "description": "The transition is cycled once and then stops",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Once",
          "package": "helm",
          "partial": "Once",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transition will be paused and won't changed until resumed.\n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Pause",
          "package": "helm",
          "signature": "Pause",
          "source": "src/FRP-Helm-Transition.html#TransitionStatus",
          "type": "function"
        },
        "index": {
          "description": "The transition will be paused and won changed until resumed",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Pause",
          "package": "helm",
          "partial": "Pause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe transition will reset to a certain point in time.\n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "Set",
          "package": "helm",
          "signature": "Set Time",
          "source": "src/FRP-Helm-Transition.html#TransitionStatus",
          "type": "function"
        },
        "index": {
          "description": "The transition will reset to certain point in time",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "Set",
          "package": "helm",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of tuples describing a waypoint value and time into a transition.\n    The first element in the list is the starting value and time of the transition.\n\u003c/p\u003e\u003cpre\u003e color = transition (constant $ Time.fps 60) (constant Cycle) $ fromList [(white, 0), (green, 2), (red, 5), (black, 1), (yellow, 2)] \n\u003c/pre\u003e",
          "module": "FRP.Helm.Transition",
          "name": "fromList",
          "package": "helm",
          "signature": "[(a, Time)] -\u003e InternalTransition a",
          "source": "src/FRP-Helm-Transition.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Converts list of tuples describing waypoint value and time into transition The first element in the list is the starting value and time of the transition color transition constant Time.fps constant Cycle fromList white green red black yellow",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "fromList",
          "normalized": "[(a,Time)]-\u003eInternalTransition a",
          "package": "helm",
          "partial": "List",
          "signature": "[(a,Time)]-\u003eInternalTransition a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm.Transition",
          "name": "interpolate",
          "package": "helm",
          "signature": "Double -\u003e a -\u003e a -\u003e a",
          "source": "src/FRP-Helm-Transition.html#interpolate",
          "type": "method"
        },
        "index": {
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "interpolate",
          "normalized": "Double-\u003ea-\u003ea-\u003ea",
          "package": "helm",
          "signature": "Double-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:interpolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long it takes for the provided transition to end.  \n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "length",
          "package": "helm",
          "signature": "InternalTransition a -\u003e Double",
          "source": "src/FRP-Helm-Transition.html#length",
          "type": "function"
        },
        "index": {
          "description": "How long it takes for the provided transition to end",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "length",
          "normalized": "InternalTransition a-\u003eDouble",
          "package": "helm",
          "signature": "InternalTransition a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a transition with an initial value. \n\u003c/p\u003e\u003cpre\u003e color = transition (constant $ Time.fps 60) (constant Cycle) $ startWith white $ do\n   waypoint green 2\n   waypoint red 5\n   waypoint black 1\n   waypoint yellow 2\n\u003c/pre\u003e",
          "module": "FRP.Helm.Transition",
          "name": "startWith",
          "package": "helm",
          "signature": "a -\u003e Transition a b -\u003e InternalTransition a",
          "source": "src/FRP-Helm-Transition.html#startWith",
          "type": "function"
        },
        "index": {
          "description": "Starts transition with an initial value color transition constant Time.fps constant Cycle startWith white do waypoint green waypoint red waypoint black waypoint yellow",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "startWith",
          "normalized": "a-\u003eTransition a b-\u003eInternalTransition a",
          "package": "helm",
          "partial": "With",
          "signature": "a-\u003eTransition a b-\u003eInternalTransition a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:startWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns the internal representation of a transition into a signal.\n    The provided time signal acts as the inner clock of the transition.\n    The status signal can be used to control the transition, deciding whether\n    the transition should cycle, go to a specific time, pause, stop or run once. \n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "transition",
          "package": "helm",
          "signature": "SignalGen (Signal Time) -\u003e SignalGen (Signal TransitionStatus) -\u003e InternalTransition a -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Helm-Transition.html#transition",
          "type": "function"
        },
        "index": {
          "description": "Turns the internal representation of transition into signal The provided time signal acts as the inner clock of the transition The status signal can be used to control the transition deciding whether the transition should cycle go to specific time pause stop or run once",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "transition",
          "normalized": "SignalGen(Signal Time)-\u003eSignalGen(Signal TransitionStatus)-\u003eInternalTransition a-\u003eSignalGen(Signal a)",
          "package": "helm",
          "signature": "SignalGen(Signal Time)-\u003eSignalGen(Signal TransitionStatus)-\u003eInternalTransition a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:transition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a value to the transition monad that will be the next point in the transition. \n\u003c/p\u003e",
          "module": "FRP.Helm.Transition",
          "name": "waypoint",
          "package": "helm",
          "signature": "a -\u003e Time -\u003e Transition a a",
          "source": "src/FRP-Helm-Transition.html#waypoint",
          "type": "function"
        },
        "index": {
          "description": "Adds value to the transition monad that will be the next point in the transition",
          "hierarchy": "FRP Helm Transition",
          "module": "FRP.Helm.Transition",
          "name": "waypoint",
          "normalized": "a-\u003eTime-\u003eTransition a a",
          "package": "helm",
          "signature": "a-\u003eTime-\u003eTransition a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Transition.html#v:waypoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains miscellaneous utility functions such as functions for working with signals and signal generators. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "Utilities",
          "package": "helm",
          "source": "src/FRP-Helm-Utilities.html",
          "type": "module"
        },
        "index": {
          "description": "Contains miscellaneous utility functions such as functions for working with signals and signal generators",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "Utilities",
          "package": "helm",
          "partial": "Utilities",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward function application, think of it as a inverted '($)'. Provided for easy porting from Elm. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "(|\u003e)",
          "package": "helm",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/FRP-Helm-Utilities.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Forward function application think of it as inverted Provided for easy porting from Elm",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "(|\u003e) |\u003e",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "helm",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function within a signal to a signal. This is a wrapper around the builtin \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e operator\n    that automatically binds the input signal out of the signal generator.\n\u003c/p\u003e\u003cpre\u003e render \u003c~ Window.dimensions ~~ Window.position\n\u003c/pre\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "(~~)",
          "package": "helm",
          "signature": "SignalGen (Signal (a -\u003e b)) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
          "source": "src/FRP-Helm-Utilities.html#~~",
          "type": "function"
        },
        "index": {
          "description": "Applies function within signal to signal This is wrapper around the builtin operator that automatically binds the input signal out of the signal generator render Window.dimensions Window.position",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "(~~) ~~",
          "normalized": "SignalGen(Signal(a-\u003eb))-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "package": "helm",
          "signature": "SignalGen(Signal(a-\u003eb))-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly the same as '($)', only there to make code using '(|\u003e)'\n    more consistent. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "(\u003c|)",
          "package": "helm",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/FRP-Helm-Utilities.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Exactly the same as only there to make code using more consistent",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "(\u003c|) \u003c|",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "helm",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "(\u003c~)",
          "package": "helm",
          "signature": "(a -\u003e b) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
          "source": "src/FRP-Helm-Utilities.html#%3C~",
          "type": "function"
        },
        "index": {
          "description": "An alias for lift",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "(\u003c~) \u003c~",
          "normalized": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "package": "helm",
          "signature": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a list of signals into a signal of lists. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "combine",
          "package": "helm",
          "signature": "[SignalGen (Signal a)] -\u003e SignalGen (Signal [a])",
          "source": "src/FRP-Helm-Utilities.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combines list of signals into signal of lists",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "combine",
          "normalized": "[SignalGen(Signal a)]-\u003eSignalGen(Signal[a])",
          "package": "helm",
          "signature": "[SignalGen(Signal a)]-\u003eSignalGen(Signal[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal that never changes. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "constant",
          "package": "helm",
          "signature": "a -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Helm-Utilities.html#constant",
          "type": "function"
        },
        "index": {
          "description": "Creates signal that never changes",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "constant",
          "normalized": "a-\u003eSignalGen(Signal a)",
          "package": "helm",
          "signature": "a-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal that counts the amount of times it has been sampled. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "count",
          "package": "helm",
          "signature": "SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Utilities.html#count",
          "type": "function"
        },
        "index": {
          "description": "Creates signal that counts the amount of times it has been sampled",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "count",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal that counts the amount of times an input signal has passed\n    a predicate when sampled. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "countIf",
          "package": "helm",
          "signature": "(a -\u003e Bool) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Utilities.html#countIf",
          "type": "function"
        },
        "index": {
          "description": "Creates signal that counts the amount of times an input signal has passed predicate when sampled",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "countIf",
          "normalized": "(a-\u003eBool)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal Int)",
          "package": "helm",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:countIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts degrees into the standard angle measurement (radians). \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "degrees",
          "package": "helm",
          "signature": "Double -\u003e Double",
          "source": "src/FRP-Helm-Utilities.html#degrees",
          "type": "function"
        },
        "index": {
          "description": "Converts degrees into the standard angle measurement radians",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "degrees",
          "normalized": "Double-\u003eDouble",
          "package": "helm",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:degrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a past-dependent signal that depends on another signal. This is a\n    wrapper around the \u003ccode\u003e\u003ca\u003etransfer\u003c/a\u003e\u003c/code\u003e function that automatically binds the input\n    signal out of the signal generator. This function is useful for making a render\n    function that depends on some accumulated state. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "foldp",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
          "source": "src/FRP-Helm-Utilities.html#foldp",
          "type": "function"
        },
        "index": {
          "description": "Creates past-dependent signal that depends on another signal This is wrapper around the transfer function that automatically binds the input signal out of the signal generator This function is useful for making render function that depends on some accumulated state",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "foldp",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:foldp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to a signal producing a new signal. This is a wrapper around the builtin\n    \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e function that automatically binds the input signal out of the signal generator.\n\u003c/p\u003e\u003cpre\u003e render \u003c~ Window.dimensions\n\u003c/pre\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift",
          "package": "helm",
          "signature": "(a -\u003e b) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b)",
          "source": "src/FRP-Helm-Utilities.html#lift",
          "type": "function"
        },
        "index": {
          "description": "Applies function to signal producing new signal This is wrapper around the builtin fmap function that automatically binds the input signal out of the signal generator render Window.dimensions",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift",
          "normalized": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "package": "helm",
          "signature": "(a-\u003eb)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to two signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift2",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c)",
          "source": "src/FRP-Helm-Utilities.html#lift2",
          "type": "function"
        },
        "index": {
          "description": "Applies function to two signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to three signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift3",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d)",
          "source": "src/FRP-Helm-Utilities.html#lift3",
          "type": "function"
        },
        "index": {
          "description": "Applies function to three signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to four signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift4",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e)",
          "source": "src/FRP-Helm-Utilities.html#lift4",
          "type": "function"
        },
        "index": {
          "description": "Applies function to four signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to five signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift5",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f)",
          "source": "src/FRP-Helm-Utilities.html#lift5",
          "type": "function"
        },
        "index": {
          "description": "Applies function to five signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to six signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift6",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f) -\u003e SignalGen (Signal g)",
          "source": "src/FRP-Helm-Utilities.html#lift6",
          "type": "function"
        },
        "index": {
          "description": "Applies function to six signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to seven signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift7",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f) -\u003e SignalGen (Signal g) -\u003e SignalGen (Signal h)",
          "source": "src/FRP-Helm-Utilities.html#lift7",
          "type": "function"
        },
        "index": {
          "description": "Applies function to seven signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a function to eight signals. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "lift8",
          "package": "helm",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e SignalGen (Signal a) -\u003e SignalGen (Signal b) -\u003e SignalGen (Signal c) -\u003e SignalGen (Signal d) -\u003e SignalGen (Signal e) -\u003e SignalGen (Signal f) -\u003e SignalGen (Signal g) -\u003e SignalGen (Signal h) -\u003e SignalGen (Signal i)",
          "source": "src/FRP-Helm-Utilities.html#lift8",
          "type": "function"
        },
        "index": {
          "description": "Applies function to eight signals",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "lift8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)-\u003eSignalGen(Signal i)",
          "package": "helm",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eSignalGen(Signal a)-\u003eSignalGen(Signal b)-\u003eSignalGen(Signal c)-\u003eSignalGen(Signal d)-\u003eSignalGen(Signal e)-\u003eSignalGen(Signal f)-\u003eSignalGen(Signal g)-\u003eSignalGen(Signal h)-\u003eSignalGen(Signal i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:lift8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts radians into the standard angle measurement (radians). \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "radians",
          "package": "helm",
          "signature": "Double -\u003e Double",
          "source": "src/FRP-Helm-Utilities.html#radians",
          "type": "function"
        },
        "index": {
          "description": "Converts radians into the standard angle measurement radians",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "radians",
          "normalized": "Double-\u003eDouble",
          "package": "helm",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:radians"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal of a random number. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "random",
          "package": "helm",
          "signature": "SignalGen (Signal a)",
          "source": "src/FRP-Helm-Utilities.html#random",
          "type": "function"
        },
        "index": {
          "description": "Creates signal of random number",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "random",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal of a random number based on the given range. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "randomR",
          "package": "helm",
          "signature": "(a, a) -\u003e SignalGen (Signal a)",
          "source": "src/FRP-Helm-Utilities.html#randomR",
          "type": "function"
        },
        "index": {
          "description": "Creates signal of random number based on the given range",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "randomR",
          "normalized": "(a,a)-\u003eSignalGen(Signal a)",
          "package": "helm",
          "signature": "(a,a)-\u003eSignalGen(Signal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts turns into the standard angle measurement (radians).\n    Turns are essentially full revolutions of the unit circle. \n\u003c/p\u003e",
          "module": "FRP.Helm.Utilities",
          "name": "turns",
          "package": "helm",
          "signature": "Double -\u003e Double",
          "source": "src/FRP-Helm-Utilities.html#turns",
          "type": "function"
        },
        "index": {
          "description": "Converts turns into the standard angle measurement radians Turns are essentially full revolutions of the unit circle",
          "hierarchy": "FRP Helm Utilities",
          "module": "FRP.Helm.Utilities",
          "name": "turns",
          "normalized": "Double-\u003eDouble",
          "package": "helm",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Utilities.html#v:turns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains signals that sample input from the game window. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm.Window",
          "name": "Window",
          "package": "helm",
          "source": "src/FRP-Helm-Window.html",
          "type": "module"
        },
        "index": {
          "description": "Contains signals that sample input from the game window",
          "hierarchy": "FRP Helm Window",
          "module": "FRP.Helm.Window",
          "name": "Window",
          "package": "helm",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current dimensions of the window. \n\u003c/p\u003e",
          "module": "FRP.Helm.Window",
          "name": "dimensions",
          "package": "helm",
          "signature": "SignalGen (Signal (Int, Int))",
          "source": "src/FRP-Helm-Window.html#dimensions",
          "type": "function"
        },
        "index": {
          "description": "The current dimensions of the window",
          "hierarchy": "FRP Helm Window",
          "module": "FRP.Helm.Window",
          "name": "dimensions",
          "normalized": "SignalGen(Signal(Int,Int))",
          "package": "helm",
          "signature": "SignalGen(Signal(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#v:dimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current height of the window. \n\u003c/p\u003e",
          "module": "FRP.Helm.Window",
          "name": "height",
          "package": "helm",
          "signature": "SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Window.html#height",
          "type": "function"
        },
        "index": {
          "description": "The current height of the window",
          "hierarchy": "FRP Helm Window",
          "module": "FRP.Helm.Window",
          "name": "height",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current width of the window. \n\u003c/p\u003e",
          "module": "FRP.Helm.Window",
          "name": "width",
          "package": "helm",
          "signature": "SignalGen (Signal Int)",
          "source": "src/FRP-Helm-Window.html#width",
          "type": "function"
        },
        "index": {
          "description": "The current width of the window",
          "hierarchy": "FRP Helm Window",
          "module": "FRP.Helm.Window",
          "name": "width",
          "package": "helm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm-Window.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains miscellaneous utility functions and the main\n    functions for interfacing with the engine. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Helm",
          "name": "Helm",
          "package": "helm",
          "source": "src/FRP-Helm.html",
          "type": "module"
        },
        "index": {
          "description": "Contains miscellaneous utility functions and the main functions for interfacing with the engine",
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "Helm",
          "package": "helm",
          "partial": "Helm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure describing miscellaneous initial configurations of the game window and engine. \n\u003c/p\u003e",
          "module": "FRP.Helm",
          "name": "EngineConfig",
          "package": "helm",
          "source": "src/FRP-Helm.html#EngineConfig",
          "type": "data"
        },
        "index": {
          "description": "data structure describing miscellaneous initial configurations of the game window and engine",
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "EngineConfig",
          "package": "helm",
          "partial": "Engine Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#t:EngineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type describing an amount of time in an arbitary unit. Use the time composing/converting functions to manipulate\n    time values. \n\u003c/p\u003e",
          "module": "FRP.Helm",
          "name": "Time",
          "package": "helm",
          "source": "src/FRP-Helm-Time.html#Time",
          "type": "type"
        },
        "index": {
          "description": "type describing an amount of time in an arbitary unit Use the time composing converting functions to manipulate time values",
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "Time",
          "package": "helm",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm",
          "name": "EngineConfig",
          "package": "helm",
          "signature": "EngineConfig",
          "source": "src/FRP-Helm.html#EngineConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "EngineConfig",
          "package": "helm",
          "partial": "Engine Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:EngineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the default configuration for the engine. You should change the fields where necessary before passing it to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "FRP.Helm",
          "name": "defaultConfig",
          "package": "helm",
          "signature": "EngineConfig",
          "source": "src/FRP-Helm.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Creates the default configuration for the engine You should change the fields where necessary before passing it to run",
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "defaultConfig",
          "package": "helm",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes and runs the game engine. The supplied signal generator is\n    constantly sampled for an element to render until the user quits.\n\u003c/p\u003e\u003cpre\u003e import FRP.Helm\n import qualified FRP.Helm.Window as Window\n\n render :: (Int, Int) -\u003e Element\n render (w, h) = collage w h [rect (fromIntegral w) (fromIntegral h) |\u003e filled red]\n\n main :: IO ()\n main = run defaultConfig $ lift render Window.dimensions\n\u003c/pre\u003e",
          "module": "FRP.Helm",
          "name": "run",
          "package": "helm",
          "signature": "EngineConfig -\u003e SignalGen (Signal Element) -\u003e IO ()",
          "source": "src/FRP-Helm.html#run",
          "type": "function"
        },
        "index": {
          "description": "Initializes and runs the game engine The supplied signal generator is constantly sampled for an element to render until the user quits import FRP.Helm import qualified FRP.Helm.Window as Window render Int Int Element render collage rect fromIntegral fromIntegral filled red main IO main run defaultConfig lift render Window.dimensions",
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "run",
          "normalized": "EngineConfig-\u003eSignalGen(Signal Element)-\u003eIO()",
          "package": "helm",
          "signature": "EngineConfig-\u003eSignalGen(Signal Element)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm",
          "name": "windowDimensions",
          "package": "helm",
          "signature": "(Int, Int)",
          "source": "src/FRP-Helm.html#EngineConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "windowDimensions",
          "normalized": "(Int,Int)",
          "package": "helm",
          "partial": "Dimensions",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm",
          "name": "windowIsFullscreen",
          "package": "helm",
          "signature": "Bool",
          "source": "src/FRP-Helm.html#EngineConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "windowIsFullscreen",
          "package": "helm",
          "partial": "Is Fullscreen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowIsFullscreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm",
          "name": "windowIsResizable",
          "package": "helm",
          "signature": "Bool",
          "source": "src/FRP-Helm.html#EngineConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "windowIsResizable",
          "package": "helm",
          "partial": "Is Resizable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowIsResizable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Helm",
          "name": "windowTitle",
          "package": "helm",
          "signature": "String",
          "source": "src/FRP-Helm.html#EngineConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Helm",
          "module": "FRP.Helm",
          "name": "windowTitle",
          "package": "helm",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/helm/docs/FRP-Helm.html#v:windowTitle"
      }
    }
  ]
]