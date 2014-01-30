[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubclasses of \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e providing additional operations.\n\u003c/p\u003e\u003cp\u003eThe signatures are designed to be compatible with the proposed\n notation for arrows, cf. \u003ca\u003ehttp://www.haskell.org/arrows/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Operations.html",
        "fct-type": "module",
        "title": "Operations"
      },
      "index": {
        "description": "Subclasses of Arrow providing additional operations The signatures are designed to be compatible with the proposed notation for arrows cf http www.haskell.org arrows",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "Operations",
        "normalized": "",
        "package": "arrows",
        "partial": "Operations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#t:ArrowCircuit",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that can be used to interpret synchronous circuits.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Operations.html#ArrowCircuit",
        "fct-type": "class",
        "title": "ArrowCircuit"
      },
      "index": {
        "description": "An arrow type that can be used to interpret synchronous circuits",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "ArrowCircuit",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Circuit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#t:ArrowError",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that includes errors (or exceptions).\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etryInUnless\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e the operations here are inconsistent with other arrow transformers.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Operations.html#ArrowError",
        "fct-type": "class",
        "title": "ArrowError"
      },
      "index": {
        "description": "An arrow type that includes errors or exceptions Minimal definition raise and tryInUnless TODO the operations here are inconsistent with other arrow transformers",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "ArrowError",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#t:ArrowReader",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that provides a read-only state (an environment).\n If you also need to modify the state, use \u003ccode\u003e\u003ca\u003eArrowState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Operations.html#ArrowReader",
        "fct-type": "class",
        "title": "ArrowReader"
      },
      "index": {
        "description": "An arrow type that provides read-only state an environment If you also need to modify the state use ArrowState",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "ArrowReader",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#t:ArrowState",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that provides a modifiable state,\n based of section 9 of \u003cem\u003eGeneralising Monads to Arrows\u003c/em\u003e, by John Hughes,\n \u003cem\u003eScience of Computer Programming\u003c/em\u003e 37:67-111, May 2000.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Operations.html#ArrowState",
        "fct-type": "class",
        "title": "ArrowState"
      },
      "index": {
        "description": "An arrow type that provides modifiable state based of section of Generalising Monads to Arrows by John Hughes Science of Computer Programming May",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "ArrowState",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#t:ArrowWriter",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that collects additional output (of some \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e type).\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Operations.html#ArrowWriter",
        "fct-type": "class",
        "title": "ArrowWriter"
      },
      "index": {
        "description": "An arrow type that collects additional output of some Monoid type",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "ArrowWriter",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eA delay component.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "delay",
        "fct-source": "src/Control-Arrow-Operations.html#delay",
        "fct-type": "method",
        "title": "delay"
      },
      "index": {
        "description": "delay component",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "delay",
        "normalized": "",
        "package": "arrows",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:fetch",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the current value of the state.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a e s",
        "fct-source": "src/Control-Arrow-Operations.html#fetch",
        "fct-type": "method",
        "title": "fetch"
      },
      "index": {
        "description": "Obtain the current value of the state",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "fetch",
        "normalized": "",
        "package": "arrows",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eTraditional exception construct.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\tbody `handle` \\ex -\u003e handler\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "handle",
        "fct-source": "src/Control-Arrow-Operations.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "Traditional exception construct Typical usage in arrow notation proc body handle ex handler",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "handle",
        "normalized": "",
        "package": "arrows",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:newError",
      "description": {
        "fct-descr": "\u003cp\u003eHandler that returns the error as a value.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a e (Either ex b)",
        "fct-source": "src/Control-Arrow-Operations.html#newError",
        "fct-type": "method",
        "title": "newError"
      },
      "index": {
        "description": "Handler that returns the error as value",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "newError",
        "normalized": "a b c-\u003ea b(Either d c)",
        "package": "arrows",
        "partial": "Error",
        "signature": "a e b-\u003ea e(Either ex b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:newReader",
      "description": {
        "fct-descr": "\u003cp\u003eRun a subcomputation in the same arrow, but with a different\n environment.  The environment of the outer computation is\n unaffected.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|newReader cmd|) env\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a (e, r) b",
        "fct-source": "src/Control-Arrow-Operations.html#newReader",
        "fct-type": "method",
        "title": "newReader"
      },
      "index": {
        "description": "Run subcomputation in the same arrow but with different environment The environment of the outer computation is unaffected Typical usage in arrow notation proc newReader cmd env",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "newReader",
        "normalized": "a b c-\u003ea(b,d)c",
        "package": "arrows",
        "partial": "Reader",
        "signature": "a e b-\u003ea(e,r)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:newWriter",
      "description": {
        "fct-descr": "\u003cp\u003eRun a subcomputation in the same arrow, making its additional\n output accessible.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\t(value, output) \u003c- (|newWriter cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a e (b, w)",
        "fct-source": "src/Control-Arrow-Operations.html#newWriter",
        "fct-type": "method",
        "title": "newWriter"
      },
      "index": {
        "description": "Run subcomputation in the same arrow making its additional output accessible Typical usage in arrow notation proc do value output newWriter cmd",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "newWriter",
        "normalized": "a b c-\u003ea b(c,d)",
        "package": "arrows",
        "partial": "Writer",
        "signature": "a e b-\u003ea e(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:raise",
      "description": {
        "fct-descr": "\u003cp\u003eRaise an error.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a ex b",
        "fct-source": "src/Control-Arrow-Operations.html#raise",
        "fct-type": "method",
        "title": "raise"
      },
      "index": {
        "description": "Raise an error",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "raise",
        "normalized": "",
        "package": "arrows",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:readState",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the current value of the state.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a b r",
        "fct-source": "src/Control-Arrow-Operations.html#readState",
        "fct-type": "method",
        "title": "readState"
      },
      "index": {
        "description": "Obtain the current value of the state",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "readState",
        "normalized": "",
        "package": "arrows",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:store",
      "description": {
        "fct-descr": "\u003cp\u003eAssign a new value to the state.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a s ()",
        "fct-source": "src/Control-Arrow-Operations.html#store",
        "fct-type": "method",
        "title": "store"
      },
      "index": {
        "description": "Assign new value to the state",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "store",
        "normalized": "a b()",
        "package": "arrows",
        "partial": "",
        "signature": "a s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:tryInUnless",
      "description": {
        "fct-descr": "\u003cp\u003eException construct in the style of \u003cem\u003eExceptional Syntax\u003c/em\u003e,\n by Nick Benton and Andrew Kennedy, \u003cem\u003eJFP\u003c/em\u003e 11(4):395-410, July 2001.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|tryInUnless\n\t\t\tbody\n\t\t\t(\\res -\u003e success)\n\t\t\t(\\ex -\u003e handler)\n\t\t|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "tryInUnless",
        "fct-source": "src/Control-Arrow-Operations.html#tryInUnless",
        "fct-type": "method",
        "title": "tryInUnless"
      },
      "index": {
        "description": "Exception construct in the style of Exceptional Syntax by Nick Benton and Andrew Kennedy JFP July Typical usage in arrow notation proc tryInUnless body res success ex handler",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "tryInUnless",
        "normalized": "",
        "package": "arrows",
        "partial": "In Unless",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:tryInUnlessDefault",
      "description": {
        "fct-descr": "\u003cp\u003eA suitable value for \u003ccode\u003e\u003ca\u003etryInUnless\u003c/a\u003e\u003c/code\u003e when the arrow type belongs to\n \u003ccode\u003e\u003ca\u003eArrowChoice\u003c/a\u003e\u003c/code\u003e.  To use it, you must define either \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a e b-\u003e a (e, b) c-\u003e a (e, ex) c-\u003e a e c",
        "fct-type": "function",
        "title": "tryInUnlessDefault"
      },
      "index": {
        "description": "suitable value for tryInUnless when the arrow type belongs to ArrowChoice To use it you must define either handle or newError",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "tryInUnlessDefault",
        "normalized": "a b c-\u003ea(b,c)d-\u003ea(b,e)d-\u003ea b d",
        "package": "arrows",
        "partial": "In Unless Default",
        "signature": "a e b-\u003ea(e,b)c-\u003ea(e,ex)c-\u003ea e c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Operations.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a piece of additional output.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Operations",
        "fct-package": "arrows",
        "fct-signature": "a w ()",
        "fct-source": "src/Control-Arrow-Operations.html#write",
        "fct-type": "method",
        "title": "write"
      },
      "index": {
        "description": "Add piece of additional output",
        "hierarchy": "Control Arrow Operations",
        "module": "Control.Arrow.Operations",
        "name": "write",
        "normalized": "a b()",
        "package": "arrows",
        "partial": "",
        "signature": "a w()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-All.html#",
      "description": {
        "fct-module": "Control.Arrow.Transformer.All",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-All.html",
        "fct-type": "module",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer All",
        "module": "Control.Arrow.Transformer.All",
        "name": "All",
        "normalized": "",
        "package": "arrows",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Automaton.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple Mealy-style automata.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.Automaton",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-Automaton.html",
        "fct-type": "module",
        "title": "Automaton"
      },
      "index": {
        "description": "Simple Mealy-style automata",
        "hierarchy": "Control Arrow Transformer Automaton",
        "module": "Control.Arrow.Transformer.Automaton",
        "name": "Automaton",
        "normalized": "",
        "package": "arrows",
        "partial": "Automaton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Automaton.html#t:Automaton",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type comprising Mealy-style automata, each step of which is\n is a computation in the original arrow type.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Automaton",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-Automaton.html#Automaton",
        "fct-type": "newtype",
        "title": "Automaton"
      },
      "index": {
        "description": "An arrow type comprising Mealy-style automata each step of which is is computation in the original arrow type",
        "hierarchy": "Control Arrow Transformer Automaton",
        "module": "Control.Arrow.Transformer.Automaton",
        "name": "Automaton",
        "normalized": "",
        "package": "arrows",
        "partial": "Automaton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Automaton.html#v:Automaton",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Automaton",
        "fct-package": "arrows",
        "fct-signature": "Automaton (a b (c, Automaton a b c))",
        "fct-source": "src/Control-Arrow-Transformer-Automaton.html#Automaton",
        "fct-type": "function",
        "title": "Automaton"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Automaton",
        "module": "Control.Arrow.Transformer.Automaton",
        "name": "Automaton",
        "normalized": "Automaton(a b(c,Automaton a b c))",
        "package": "arrows",
        "partial": "Automaton",
        "signature": "Automaton(a b(c,Automaton a b c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Automaton.html#v:runAutomaton",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulating an automaton by running it on a stream of inputs,\n obtaining a stream of outputs.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\tys \u003c- (|runAutomaton (\\x -\u003e ...)|) xs\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003exs\u003c/code\u003e refers to the input stream and \u003ccode\u003ex\u003c/code\u003e to individual\n elements of that stream.  \u003ccode\u003eys\u003c/code\u003e is bound to the output stream.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Automaton",
        "fct-package": "arrows",
        "fct-signature": "Automaton a (e, b) c -\u003e a (e, Stream b) (Stream c)",
        "fct-source": "src/Control-Arrow-Transformer-Automaton.html#runAutomaton",
        "fct-type": "function",
        "title": "runAutomaton"
      },
      "index": {
        "description": "Encapsulating an automaton by running it on stream of inputs obtaining stream of outputs Typical usage in arrow notation proc do ys runAutomaton xs Here xs refers to the input stream and to individual elements of that stream ys is bound to the output stream",
        "hierarchy": "Control Arrow Transformer Automaton",
        "module": "Control.Arrow.Transformer.Automaton",
        "name": "runAutomaton",
        "normalized": "Automaton a(b,c)d-\u003ea(b,Stream c)(Stream d)",
        "package": "arrows",
        "partial": "Automaton",
        "signature": "Automaton a(e,b)c-\u003ea(e,Stream b)(Stream c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-CoState.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransformation of state readers.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e define operations for this arrow.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.CoState",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-CoState.html",
        "fct-type": "module",
        "title": "CoState"
      },
      "index": {
        "description": "Transformation of state readers TODO define operations for this arrow",
        "hierarchy": "Control Arrow Transformer CoState",
        "module": "Control.Arrow.Transformer.CoState",
        "name": "CoState",
        "normalized": "",
        "package": "arrows",
        "partial": "Co State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-CoState.html#t:CoStateArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.CoState",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-CoState.html#CoStateArrow",
        "fct-type": "newtype",
        "title": "CoStateArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer CoState",
        "module": "Control.Arrow.Transformer.CoState",
        "name": "CoStateArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Co State Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-CoState.html#v:CoStateArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.CoState",
        "fct-package": "arrows",
        "fct-signature": "CoStateArrow (a (s -\u003e b) (s -\u003e c))",
        "fct-source": "src/Control-Arrow-Transformer-CoState.html#CoStateArrow",
        "fct-type": "function",
        "title": "CoStateArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer CoState",
        "module": "Control.Arrow.Transformer.CoState",
        "name": "CoStateArrow",
        "normalized": "CoStateArrow(a(b-\u003ec)(b-\u003ed))",
        "package": "arrows",
        "partial": "Co State Arrow",
        "signature": "CoStateArrow(a(s-\u003eb)(s-\u003ec))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn arrow transformer that adds error handling.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e the operations here are inconsistent with other arrow transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "An arrow transformer that adds error handling TODO the operations here are inconsistent with other arrow transformers",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "Error",
        "normalized": "",
        "package": "arrows",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#t:ArrowAddError",
      "description": {
        "fct-descr": "\u003cp\u003eAdding a \u003ccode\u003e\u003ca\u003eErrorArrow\u003c/a\u003e\u003c/code\u003e to an\n arrow type, but not necessarily as the outer arrow transformer.\n\u003c/p\u003e\u003cp\u003eTypically a composite arrow type is built by applying a series\n of arrow transformer to a base arrow (usually either a function\n arrow or a \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrow.  One can add a transformer to the\n top of this stack using the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eArrowTransformer\u003c/a\u003e\u003c/code\u003e class,\n or remove a state transformer from the top of the stack using the\n \u003ccode\u003e\u003ca\u003erunError\u003c/a\u003e\u003c/code\u003e encapsulation operator.\n The methods of this class add and remove state transformers anywhere\n in the stack.  In the instance\n\u003c/p\u003e\u003cpre\u003e\tinstance Arrow a =\u003e ArrowAddError ex (ArrowError ex a) a\n\u003c/pre\u003e\u003cp\u003ethey are equivalent to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunError\u003c/a\u003e\u003c/code\u003e respectively.\n Instances are lifted through other transformers with\n\u003c/p\u003e\u003cpre\u003e\tinstance ArrowAddError ex a a' =\u003e\n\t\tArrowAddError ex (FooArrow a) (FooArrow a')\n\u003c/pre\u003e\u003cp\u003eThis could be combined with \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e,\n since the resulting arrow is always the arrow of the handler.\n Separating them has the advantage of consistency with the other arrows,\n and might give more helpful type error messages.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Internals.html#ArrowAddError",
        "fct-type": "class",
        "title": "ArrowAddError"
      },
      "index": {
        "description": "Adding ErrorArrow to an arrow type but not necessarily as the outer arrow transformer Typically composite arrow type is built by applying series of arrow transformer to base arrow usually either function arrow or Kleisli arrow One can add transformer to the top of this stack using the lift method of the ArrowTransformer class or remove state transformer from the top of the stack using the runError encapsulation operator The methods of this class add and remove state transformers anywhere in the stack In the instance instance Arrow ArrowAddError ex ArrowError ex they are equivalent to lift and runError respectively Instances are lifted through other transformers with instance ArrowAddError ex ArrowAddError ex FooArrow FooArrow This could be combined with handle since the resulting arrow is always the arrow of the handler Separating them has the advantage of consistency with the other arrows and might give more helpful type error messages",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "ArrowAddError",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Add Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#t:ErrorArrow",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow that augments an existing arrow with possible errors.\n The \u003ccode\u003e\u003ca\u003eArrowError\u003c/a\u003e\u003c/code\u003e class contains methods for raising and handling\n these errors.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-Error.html#ErrorArrow",
        "fct-type": "newtype",
        "title": "ErrorArrow"
      },
      "index": {
        "description": "An arrow that augments an existing arrow with possible errors The ArrowError class contains methods for raising and handling these errors",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "ErrorArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Error Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#v:ErrorArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "ErrorArrow (a b (Either ex c))",
        "fct-source": "src/Control-Arrow-Transformer-Error.html#ErrorArrow",
        "fct-type": "function",
        "title": "ErrorArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "ErrorArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Error Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#v:elimError",
      "description": {
        "fct-descr": "\u003cp\u003eElimination of errors from a computation,\n by completely handling any errors.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\tbody `elimError` \\ex -\u003e handler\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a' (e, ex) b -\u003e a' e b",
        "fct-source": "src/Control-Arrow-Internals.html#elimError",
        "fct-type": "method",
        "title": "elimError"
      },
      "index": {
        "description": "Elimination of errors from computation by completely handling any errors Typical usage in arrow notation proc body elimError ex handler",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "elimError",
        "normalized": "a b c-\u003ed(b,e)c-\u003ed b c",
        "package": "arrows",
        "partial": "Error",
        "signature": "a e b-\u003ea'(e,ex)b-\u003ea' e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#v:liftError",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from an arrow to one with error handling.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|liftError cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "a' e b -\u003e a e b",
        "fct-source": "src/Control-Arrow-Internals.html#liftError",
        "fct-type": "method",
        "title": "liftError"
      },
      "index": {
        "description": "Lift computation from an arrow to one with error handling Typical usage in arrow notation proc liftError cmd",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "liftError",
        "normalized": "a b c-\u003ed b c",
        "package": "arrows",
        "partial": "Error",
        "signature": "a' e b-\u003ea e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Error.html#v:runError",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate an error-raising computation,\n by completely handling any errors.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\tbody `runError` \\ex -\u003e handler\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Error",
        "fct-package": "arrows",
        "fct-signature": "ErrorArrow ex a e b-\u003e a (e, ex) b-\u003e a e b",
        "fct-type": "function",
        "title": "runError"
      },
      "index": {
        "description": "Encapsulate an error-raising computation by completely handling any errors Typical usage in arrow notation proc body runError ex handler",
        "hierarchy": "Control Arrow Transformer Error",
        "module": "Control.Arrow.Transformer.Error",
        "name": "runError",
        "normalized": "ErrorArrow a b c d-\u003eb(c,a)d-\u003eb c d",
        "package": "arrows",
        "partial": "Error",
        "signature": "ErrorArrow ex a e b-\u003ea(e,ex)b-\u003ea e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrow transformer that adds a read-only state (i.e. an environment).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-Reader.html",
        "fct-type": "module",
        "title": "Reader"
      },
      "index": {
        "description": "Arrow transformer that adds read-only state i.e an environment",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "arrows",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#t:ArrowAddReader",
      "description": {
        "fct-descr": "\u003cp\u003eAdding a \u003ccode\u003e\u003ca\u003eReaderArrow\u003c/a\u003e\u003c/code\u003e to an\n arrow type, but not necessarily as the outer arrow transformer.\n\u003c/p\u003e\u003cp\u003eTypically a composite arrow type is built by applying a series\n of arrow transformer to a base arrow (usually either a function\n arrow or a \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrow.  One can add a transformer to the\n top of this stack using the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eArrowTransformer\u003c/a\u003e\u003c/code\u003e class,\n or remove a state transformer from the top of the stack using the\n \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e encapsulation operator.\n The methods of this class add and remove state transformers anywhere\n in the stack.  In the instance\n\u003c/p\u003e\u003cpre\u003e\tinstance Arrow a =\u003e ArrowAddReader r (ArrowReader r a) a\n\u003c/pre\u003e\u003cp\u003ethey are equivalent to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e respectively.\n Instances are lifted through other transformers with\n\u003c/p\u003e\u003cpre\u003e\tinstance ArrowAddReader r a a' =\u003e\n\t\tArrowAddReader r (FooArrow a) (FooArrow a')\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Internals.html#ArrowAddReader",
        "fct-type": "class",
        "title": "ArrowAddReader"
      },
      "index": {
        "description": "Adding ReaderArrow to an arrow type but not necessarily as the outer arrow transformer Typically composite arrow type is built by applying series of arrow transformer to base arrow usually either function arrow or Kleisli arrow One can add transformer to the top of this stack using the lift method of the ArrowTransformer class or remove state transformer from the top of the stack using the runReader encapsulation operator The methods of this class add and remove state transformers anywhere in the stack In the instance instance Arrow ArrowAddReader ArrowReader they are equivalent to lift and runReader respectively Instances are lifted through other transformers with instance ArrowAddReader ArrowAddReader FooArrow FooArrow",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "ArrowAddReader",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Add Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#t:ReaderArrow",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that augments an existing arrow with a read-only state\n (or environment).  The \u003ccode\u003e\u003ca\u003eArrowReader\u003c/a\u003e\u003c/code\u003e class contains the operations\n on this state.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-Reader.html#ReaderArrow",
        "fct-type": "newtype",
        "title": "ReaderArrow"
      },
      "index": {
        "description": "An arrow type that augments an existing arrow with read-only state or environment The ArrowReader class contains the operations on this state",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "ReaderArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Reader Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#v:ReaderArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "ReaderArrow (a (b, r) c)",
        "fct-source": "src/Control-Arrow-Transformer-Reader.html#ReaderArrow",
        "fct-type": "function",
        "title": "ReaderArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "ReaderArrow",
        "normalized": "ReaderArrow(a(b,c)d)",
        "package": "arrows",
        "partial": "Reader Arrow",
        "signature": "ReaderArrow(a(b,r)c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#v:elimReader",
      "description": {
        "fct-descr": "\u003cp\u003eElimination of a state reader from a computation,\n taking a value for the state.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|elimReader cmd|) env\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a' (e, r) b",
        "fct-source": "src/Control-Arrow-Internals.html#elimReader",
        "fct-type": "method",
        "title": "elimReader"
      },
      "index": {
        "description": "Elimination of state reader from computation taking value for the state Typical usage in arrow notation proc elimReader cmd env",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "elimReader",
        "normalized": "a b c-\u003ed(b,e)c",
        "package": "arrows",
        "partial": "Reader",
        "signature": "a e b-\u003ea'(e,r)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#v:liftReader",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from an arrow to one with an added environment.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|liftReader cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "a' e b -\u003e a e b",
        "fct-source": "src/Control-Arrow-Internals.html#liftReader",
        "fct-type": "method",
        "title": "liftReader"
      },
      "index": {
        "description": "Lift computation from an arrow to one with an added environment Typical usage in arrow notation proc liftReader cmd",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "liftReader",
        "normalized": "a b c-\u003ed b c",
        "package": "arrows",
        "partial": "Reader",
        "signature": "a' e b-\u003ea e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Reader.html#v:runReader",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulation of a state-reading computation, taking a value for the\n state.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|runReader cmd|) env\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Reader",
        "fct-package": "arrows",
        "fct-signature": "ReaderArrow r a e b -\u003e a (e, r) b",
        "fct-source": "src/Control-Arrow-Transformer-Reader.html#runReader",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "Encapsulation of state-reading computation taking value for the state Typical usage in arrow notation proc runReader cmd env",
        "hierarchy": "Control Arrow Transformer Reader",
        "module": "Control.Arrow.Transformer.Reader",
        "name": "runReader",
        "normalized": "ReaderArrow a b c d-\u003eb(c,a)d",
        "package": "arrows",
        "partial": "Reader",
        "signature": "ReaderArrow r a e b-\u003ea(e,r)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn arrow transformer that adds a modifiable state,\n based of section 9 of \u003cem\u003eGeneralising Monads to Arrows\u003c/em\u003e, by John Hughes,\n \u003cem\u003eScience of Computer Programming\u003c/em\u003e 37:67-111, May 2000.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "An arrow transformer that adds modifiable state based of section of Generalising Monads to Arrows by John Hughes Science of Computer Programming May",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "State",
        "normalized": "",
        "package": "arrows",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#t:ArrowAddState",
      "description": {
        "fct-descr": "\u003cp\u003eAdding a \u003ccode\u003e\u003ca\u003eStateArrow\u003c/a\u003e\u003c/code\u003e to an\n arrow type, but not necessarily as the outer arrow transformer.\n\u003c/p\u003e\u003cp\u003eTypically a composite arrow type is built by applying a series\n of arrow transformer to a base arrow (usually either a function\n arrow or a \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrow.  One can add a transformer to the\n top of this stack using the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eArrowTransformer\u003c/a\u003e\u003c/code\u003e class,\n or remove a state transformer from the top of the stack using the\n \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e encapsulation operator.\n The methods of this class add and remove state transformers anywhere\n in the stack.  In the instance\n\u003c/p\u003e\u003cpre\u003e\tinstance Arrow a =\u003e ArrowAddState s (ArrowState s a) a\n\u003c/pre\u003e\u003cp\u003ethey are equivalent to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e respectively.\n Instances are lifted through other transformers with\n\u003c/p\u003e\u003cpre\u003e\tinstance ArrowAddState s a a' =\u003e\n\t\tArrowAddState s (FooArrow a) (FooArrow a')\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Internals.html#ArrowAddState",
        "fct-type": "class",
        "title": "ArrowAddState"
      },
      "index": {
        "description": "Adding StateArrow to an arrow type but not necessarily as the outer arrow transformer Typically composite arrow type is built by applying series of arrow transformer to base arrow usually either function arrow or Kleisli arrow One can add transformer to the top of this stack using the lift method of the ArrowTransformer class or remove state transformer from the top of the stack using the runState encapsulation operator The methods of this class add and remove state transformers anywhere in the stack In the instance instance Arrow ArrowAddState ArrowState they are equivalent to lift and runState respectively Instances are lifted through other transformers with instance ArrowAddState ArrowAddState FooArrow FooArrow",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "ArrowAddState",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Add State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#t:StateArrow",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that augments an existing arrow with a modifiable\n state.  The \u003ccode\u003e\u003ca\u003eArrowState\u003c/a\u003e\u003c/code\u003e class contains the operations on this state.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-State.html#StateArrow",
        "fct-type": "newtype",
        "title": "StateArrow"
      },
      "index": {
        "description": "An arrow type that augments an existing arrow with modifiable state The ArrowState class contains the operations on this state",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "StateArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "State Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#v:StateArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "StateArrow (a (b, s) (c, s))",
        "fct-source": "src/Control-Arrow-Transformer-State.html#StateArrow",
        "fct-type": "function",
        "title": "StateArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "StateArrow",
        "normalized": "StateArrow(a(b,c)(d,c))",
        "package": "arrows",
        "partial": "State Arrow",
        "signature": "StateArrow(a(b,s)(c,s))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#v:elimState",
      "description": {
        "fct-descr": "\u003cp\u003eElimination of a state transformer from a computation,\n exposing the initial and final states.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\t(result, final_state) \u003c- (|elimState cmd|) init_state\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a' (e, s) (b, s)",
        "fct-source": "src/Control-Arrow-Internals.html#elimState",
        "fct-type": "method",
        "title": "elimState"
      },
      "index": {
        "description": "Elimination of state transformer from computation exposing the initial and final states Typical usage in arrow notation proc do result final state elimState cmd init state",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "elimState",
        "normalized": "a b c-\u003ed(b,e)(c,e)",
        "package": "arrows",
        "partial": "State",
        "signature": "a e b-\u003ea'(e,s)(b,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#v:liftState",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from an arrow to one with an added state.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|liftState cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "a' e b -\u003e a e b",
        "fct-source": "src/Control-Arrow-Internals.html#liftState",
        "fct-type": "method",
        "title": "liftState"
      },
      "index": {
        "description": "Lift computation from an arrow to one with an added state Typical usage in arrow notation proc liftState cmd",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "liftState",
        "normalized": "a b c-\u003ed b c",
        "package": "arrows",
        "partial": "State",
        "signature": "a' e b-\u003ea e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-State.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulation of a state-using computation, exposing the initial\n and final states.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\t(result, final_state) \u003c- (|runState cmd|) init_state\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.State",
        "fct-package": "arrows",
        "fct-signature": "StateArrow s a e b -\u003e a (e, s) (b, s)",
        "fct-source": "src/Control-Arrow-Transformer-State.html#runState",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Encapsulation of state-using computation exposing the initial and final states Typical usage in arrow notation proc do result final state runState cmd init state",
        "hierarchy": "Control Arrow Transformer State",
        "module": "Control.Arrow.Transformer.State",
        "name": "runState",
        "normalized": "StateArrow a b c d-\u003eb(c,a)(d,a)",
        "package": "arrows",
        "partial": "State",
        "signature": "StateArrow s a e b-\u003ea(e,s)(b,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrow transformer adding static information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "Arrow transformer adding static information",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "Static",
        "normalized": "",
        "package": "arrows",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#t:StaticArrow",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that augments the underlying arrow with static information.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#StaticArrow",
        "fct-type": "newtype",
        "title": "StaticArrow"
      },
      "index": {
        "description": "An arrow type that augments the underlying arrow with static information",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "StaticArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Static Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#t:StaticArrowArrow",
      "description": {
        "fct-descr": "\u003cp\u003eA special case.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "type",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#StaticArrowArrow",
        "fct-type": "type",
        "title": "StaticArrowArrow"
      },
      "index": {
        "description": "special case",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "StaticArrowArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Static Arrow Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#t:StaticMonadArrow",
      "description": {
        "fct-descr": "\u003cp\u003eA special case is monads applied to the whole arrow, in contrast to\n \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrows, in which the monad is applied to the output.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "type",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#StaticMonadArrow",
        "fct-type": "type",
        "title": "StaticMonadArrow"
      },
      "index": {
        "description": "special case is monads applied to the whole arrow in contrast to Kleisli arrows in which the monad is applied to the output",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "StaticMonadArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Static Monad Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:StaticArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "StaticArrow (f (a b c))",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#StaticArrow",
        "fct-type": "function",
        "title": "StaticArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "StaticArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Static Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:unwrap",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "StaticArrow f a b c -\u003e f (a b c)",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#unwrap",
        "fct-type": "function",
        "title": "unwrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "unwrap",
        "normalized": "StaticArrow a b c d-\u003ea(b c d)",
        "package": "arrows",
        "partial": "",
        "signature": "StaticArrow f a b c-\u003ef(a b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:unwrapA",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "StaticArrowArrow a s a' b c -\u003e a s (a' b c)",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#unwrapA",
        "fct-type": "function",
        "title": "unwrapA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "unwrapA",
        "normalized": "StaticArrowArrow a b c d e-\u003ea b(c d e)",
        "package": "arrows",
        "partial": "",
        "signature": "StaticArrowArrow a s a' b c-\u003ea s(a' b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:unwrapM",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "StaticMonadArrow m a b c -\u003e m (a b c)",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#unwrapM",
        "fct-type": "function",
        "title": "unwrapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "unwrapM",
        "normalized": "StaticMonadArrow a b c d-\u003ea(b c d)",
        "package": "arrows",
        "partial": "",
        "signature": "StaticMonadArrow m a b c-\u003em(a b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:wrap",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "f (a b c) -\u003e StaticArrow f a b c",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "wrap",
        "normalized": "a(b c d)-\u003eStaticArrow a b c d",
        "package": "arrows",
        "partial": "",
        "signature": "f(a b c)-\u003eStaticArrow f a b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:wrapA",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "a s (a' b c) -\u003e StaticArrowArrow a s a' b c",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#wrapA",
        "fct-type": "function",
        "title": "wrapA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "wrapA",
        "normalized": "a b(c d e)-\u003eStaticArrowArrow a b c d e",
        "package": "arrows",
        "partial": "",
        "signature": "a s(a' b c)-\u003eStaticArrowArrow a s a' b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Static.html#v:wrapM",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Static",
        "fct-package": "arrows",
        "fct-signature": "m (a b c) -\u003e StaticMonadArrow m a b c",
        "fct-source": "src/Control-Arrow-Transformer-Static.html#wrapM",
        "fct-type": "function",
        "title": "wrapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Static",
        "module": "Control.Arrow.Transformer.Static",
        "name": "wrapM",
        "normalized": "a(b c d)-\u003eStaticMonadArrow a b c d",
        "package": "arrows",
        "partial": "",
        "signature": "m(a b c)-\u003eStaticMonadArrow m a b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrow transformer lifting an arrow to streams.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "Arrow transformer lifting an arrow to streams",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "arrows",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#t:ArrowAddStream",
      "description": {
        "fct-descr": "\u003cp\u003eAdding a \u003ccode\u003e\u003ca\u003eStreamArrow\u003c/a\u003e\u003c/code\u003e to an\n arrow type, but not necessarily as the outer arrow transformer.\n\u003c/p\u003e\u003cp\u003eTypically a composite arrow type is built by applying a series\n of arrow transformer to a base arrow (usually either a function\n arrow or a \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrow.  One can add a transformer to the\n top of this stack using the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eArrowTransformer\u003c/a\u003e\u003c/code\u003e class,\n or remove a state transformer from the top of the stack using the\n \u003ccode\u003e\u003ca\u003erunStream\u003c/a\u003e\u003c/code\u003e encapsulation operator.\n The methods of this class add and remove state transformers anywhere\n in the stack.  In the instance\n\u003c/p\u003e\u003cpre\u003e\tinstance Arrow a =\u003e ArrowAddStream (ArrowStream a) a\n\u003c/pre\u003e\u003cp\u003ethey are equivalent to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunStream\u003c/a\u003e\u003c/code\u003e respectively.\n Instances are lifted through other transformers with\n\u003c/p\u003e\u003cpre\u003e\tinstance ArrowAddStream a a' =\u003e\n\t\tArrowAddStream (FooArrow a) (FooArrow a')\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Internals.html#ArrowAddStream",
        "fct-type": "class",
        "title": "ArrowAddStream"
      },
      "index": {
        "description": "Adding StreamArrow to an arrow type but not necessarily as the outer arrow transformer Typically composite arrow type is built by applying series of arrow transformer to base arrow usually either function arrow or Kleisli arrow One can add transformer to the top of this stack using the lift method of the ArrowTransformer class or remove state transformer from the top of the stack using the runStream encapsulation operator The methods of this class add and remove state transformers anywhere in the stack In the instance instance Arrow ArrowAddStream ArrowStream they are equivalent to lift and runStream respectively Instances are lifted through other transformers with instance ArrowAddStream ArrowAddStream FooArrow FooArrow",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "ArrowAddStream",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Add Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#t:StreamArrow",
      "description": {
        "fct-descr": "\u003cp\u003eArrows between streams.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e is only a functor if \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e in the underlying arrow is.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html#StreamArrow",
        "fct-type": "newtype",
        "title": "StreamArrow"
      },
      "index": {
        "description": "Arrows between streams Note lift is only functor if in the underlying arrow is",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "StreamArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Stream Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#t:StreamMap",
      "description": {
        "fct-descr": "\u003cp\u003eMappings of streams\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "type",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html#StreamMap",
        "fct-type": "type",
        "title": "StreamMap"
      },
      "index": {
        "description": "Mappings of streams",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "StreamMap",
        "normalized": "",
        "package": "arrows",
        "partial": "Stream Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#t:StreamMapST",
      "description": {
        "fct-descr": "\u003cp\u003eIn-place state updates.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: this is an arrow type, and \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e can be used to promote arrows\n from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e s)\u003c/code\u003e: the resulting arrow updates the state for\n each stream element in turn, and as long as the final state in not\n required all is well.  However, \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e does not preserve composition,\n because this monad isn't commutative.  In particular, a composition\n of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003es of state transformers will not work, as the second will\n require the final state of the first.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "type",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html#StreamMapST",
        "fct-type": "type",
        "title": "StreamMapST"
      },
      "index": {
        "description": "In-place state updates Note this is an arrow type and lift can be used to promote arrows from Kleisli ST the resulting arrow updates the state for each stream element in turn and as long as the final state in not required all is well However lift does not preserve composition because this monad isn commutative In particular composition of lift of state transformers will not work as the second will require the final state of the first",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "StreamMapST",
        "normalized": "",
        "package": "arrows",
        "partial": "Stream Map ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#v:StreamArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "StreamArrow (a (Stream b) (Stream c))",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html#StreamArrow",
        "fct-type": "function",
        "title": "StreamArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "StreamArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Stream Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#v:elimStream",
      "description": {
        "fct-descr": "\u003cp\u003eRun a stream processor on a stream of inputs,\n obtaining a stream of outputs.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\tys \u003c- (|elimStream (\\x -\u003e ...)|) xs\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003exs\u003c/code\u003e refers to the input stream and \u003ccode\u003ex\u003c/code\u003e to individual\n elements of that stream.  \u003ccode\u003eys\u003c/code\u003e is bound to the output stream.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "a (e, b) c -\u003e a' (e, Stream b) (Stream c)",
        "fct-source": "src/Control-Arrow-Internals.html#elimStream",
        "fct-type": "method",
        "title": "elimStream"
      },
      "index": {
        "description": "Run stream processor on stream of inputs obtaining stream of outputs Typical usage in arrow notation proc do ys elimStream xs Here xs refers to the input stream and to individual elements of that stream ys is bound to the output stream",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "elimStream",
        "normalized": "a(b,c)d-\u003ee(b,Stream c)(Stream d)",
        "package": "arrows",
        "partial": "Stream",
        "signature": "a(e,b)c-\u003ea'(e,Stream b)(Stream c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#v:liftStream",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from an arrow to a stream processing one.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|liftStream cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "a' e b -\u003e a e b",
        "fct-source": "src/Control-Arrow-Internals.html#liftStream",
        "fct-type": "method",
        "title": "liftStream"
      },
      "index": {
        "description": "Lift computation from an arrow to stream processing one Typical usage in arrow notation proc liftStream cmd",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "liftStream",
        "normalized": "a b c-\u003ed b c",
        "package": "arrows",
        "partial": "Stream",
        "signature": "a' e b-\u003ea e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#v:runStream",
      "description": {
        "fct-descr": "\u003cp\u003eRun a stream processor on a stream of inputs, obtaining a stream\n of outputs.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\tys \u003c- (|runStream (\\x -\u003e ...)|) xs\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003exs\u003c/code\u003e refers to the input stream and \u003ccode\u003ex\u003c/code\u003e to individual\n elements of that stream.  \u003ccode\u003eys\u003c/code\u003e is bound to the output stream.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "StreamArrow a (e, b) c -\u003e a (e, Stream b) (Stream c)",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html#runStream",
        "fct-type": "function",
        "title": "runStream"
      },
      "index": {
        "description": "Run stream processor on stream of inputs obtaining stream of outputs Typical usage in arrow notation proc do ys runStream xs Here xs refers to the input stream and to individual elements of that stream ys is bound to the output stream",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "runStream",
        "normalized": "StreamArrow a(b,c)d-\u003ea(b,Stream c)(Stream d)",
        "package": "arrows",
        "partial": "Stream",
        "signature": "StreamArrow a(e,b)c-\u003ea(e,Stream b)(Stream c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Stream.html#v:runStreamST",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate a local state.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Stream",
        "fct-package": "arrows",
        "fct-signature": "(forall s.  StreamMapST s e c) -\u003e StreamMap e c",
        "fct-source": "src/Control-Arrow-Transformer-Stream.html#runStreamST",
        "fct-type": "function",
        "title": "runStreamST"
      },
      "index": {
        "description": "Encapsulate local state",
        "hierarchy": "Control Arrow Transformer Stream",
        "module": "Control.Arrow.Transformer.Stream",
        "name": "runStreamST",
        "normalized": "(a b StreamMapST c d e)-\u003eStreamMap d e",
        "package": "arrows",
        "partial": "Stream ST",
        "signature": "(forall s. StreamMapST s e c)-\u003eStreamMap e c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrow transformer that adds accumulation of output.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "Arrow transformer that adds accumulation of output",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "arrows",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#t:ArrowAddWriter",
      "description": {
        "fct-descr": "\u003cp\u003eAdding a \u003ccode\u003e\u003ca\u003eWriterArrow\u003c/a\u003e\u003c/code\u003e to an\n arrow type, but not necessarily as the outer arrow transformer.\n\u003c/p\u003e\u003cp\u003eTypically a composite arrow type is built by applying a series\n of arrow transformer to a base arrow (usually either a function\n arrow or a \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e arrow.  One can add a transformer to the\n top of this stack using the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n method of the \u003ccode\u003e\u003ca\u003eArrowTransformer\u003c/a\u003e\u003c/code\u003e class,\n or remove a state transformer from the top of the stack using the\n \u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e encapsulation operator.\n The methods of this class add and remove state transformers anywhere\n in the stack.  In the instance\n\u003c/p\u003e\u003cpre\u003e\tinstance Arrow a =\u003e ArrowAddWriter w (ArrowWriter w a) a\n\u003c/pre\u003e\u003cp\u003ethey are equivalent to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e respectively.\n Instances are lifted through other transformers with\n\u003c/p\u003e\u003cpre\u003e\tinstance ArrowAddWriter w a a' =\u003e\n\t\tArrowAddWriter w (FooArrow a) (FooArrow a')\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Internals.html#ArrowAddWriter",
        "fct-type": "class",
        "title": "ArrowAddWriter"
      },
      "index": {
        "description": "Adding WriterArrow to an arrow type but not necessarily as the outer arrow transformer Typically composite arrow type is built by applying series of arrow transformer to base arrow usually either function arrow or Kleisli arrow One can add transformer to the top of this stack using the lift method of the ArrowTransformer class or remove state transformer from the top of the stack using the runWriter encapsulation operator The methods of this class add and remove state transformers anywhere in the stack In the instance instance Arrow ArrowAddWriter ArrowWriter they are equivalent to lift and runWriter respectively Instances are lifted through other transformers with instance ArrowAddWriter ArrowAddWriter FooArrow FooArrow",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "ArrowAddWriter",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Add Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#t:WriterArrow",
      "description": {
        "fct-descr": "\u003cp\u003eAn arrow type that augments an existing arrow with accumulating\n output.  The \u003ccode\u003e\u003ca\u003eArrowWriter\u003c/a\u003e\u003c/code\u003e class contains the relevant operations.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Transformer-Writer.html#WriterArrow",
        "fct-type": "newtype",
        "title": "WriterArrow"
      },
      "index": {
        "description": "An arrow type that augments an existing arrow with accumulating output The ArrowWriter class contains the relevant operations",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "WriterArrow",
        "normalized": "",
        "package": "arrows",
        "partial": "Writer Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#v:WriterArrow",
      "description": {
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "WriterArrow (a b (c, w))",
        "fct-source": "src/Control-Arrow-Transformer-Writer.html#WriterArrow",
        "fct-type": "function",
        "title": "WriterArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "WriterArrow",
        "normalized": "WriterArrow(a b(c,d))",
        "package": "arrows",
        "partial": "Writer Arrow",
        "signature": "WriterArrow(a b(c,w))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#v:elimWriter",
      "description": {
        "fct-descr": "\u003cp\u003eElimination of an output writer from a computation,\n providing the accumulated output.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\t(result, output) \u003c- (|elimWriter cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "a e b -\u003e a' e (b, w)",
        "fct-source": "src/Control-Arrow-Internals.html#elimWriter",
        "fct-type": "method",
        "title": "elimWriter"
      },
      "index": {
        "description": "Elimination of an output writer from computation providing the accumulated output Typical usage in arrow notation proc do result output elimWriter cmd",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "elimWriter",
        "normalized": "a b c-\u003ed b(c,e)",
        "package": "arrows",
        "partial": "Writer",
        "signature": "a e b-\u003ea' e(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#v:liftWriter",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from an arrow to one with added output.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|liftWriter cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "a' e b -\u003e a e b",
        "fct-source": "src/Control-Arrow-Internals.html#liftWriter",
        "fct-type": "method",
        "title": "liftWriter"
      },
      "index": {
        "description": "Lift computation from an arrow to one with added output Typical usage in arrow notation proc liftWriter cmd",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "liftWriter",
        "normalized": "a b c-\u003ed b c",
        "package": "arrows",
        "partial": "Writer",
        "signature": "a' e b-\u003ea e b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer-Writer.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulation of a writer computation, providing the accumulated output.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e do\n\t\t...\n\t\t(result, output) \u003c- (|runWriter cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer.Writer",
        "fct-package": "arrows",
        "fct-signature": "WriterArrow w a e b -\u003e a e (b, w)",
        "fct-source": "src/Control-Arrow-Transformer-Writer.html#runWriter",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Encapsulation of writer computation providing the accumulated output Typical usage in arrow notation proc do result output runWriter cmd",
        "hierarchy": "Control Arrow Transformer Writer",
        "module": "Control.Arrow.Transformer.Writer",
        "name": "runWriter",
        "normalized": "WriterArrow a b c d-\u003eb c(d,a)",
        "package": "arrows",
        "partial": "Writer",
        "signature": "WriterArrow w a e b-\u003ea e(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrow transformers, for making new arrow types out of old ones.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Transformer",
        "fct-package": "arrows",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Transformer.html",
        "fct-type": "module",
        "title": "Transformer"
      },
      "index": {
        "description": "Arrow transformers for making new arrow types out of old ones",
        "hierarchy": "Control Arrow Transformer",
        "module": "Control.Arrow.Transformer",
        "name": "Transformer",
        "normalized": "",
        "package": "arrows",
        "partial": "Transformer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer.html#t:ArrowTransformer",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new arrow from an existing one.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Transformer",
        "fct-package": "arrows",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-Transformer.html#ArrowTransformer",
        "fct-type": "class",
        "title": "ArrowTransformer"
      },
      "index": {
        "description": "Construct new arrow from an existing one",
        "hierarchy": "Control Arrow Transformer",
        "module": "Control.Arrow.Transformer",
        "name": "ArrowTransformer",
        "normalized": "",
        "package": "arrows",
        "partial": "Arrow Transformer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrows/docs/Control-Arrow-Transformer.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eA transformation of arrows, preserving \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTypical usage in arrow notation:\n\u003c/p\u003e\u003cpre\u003e\tproc p -\u003e ...\n\t\t(|lift cmd|)\n\u003c/pre\u003e",
        "fct-module": "Control.Arrow.Transformer",
        "fct-package": "arrows",
        "fct-signature": "a b c -\u003e f a b c",
        "fct-source": "src/Control-Arrow-Transformer.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "transformation of arrows preserving arr and first Typical usage in arrow notation proc lift cmd",
        "hierarchy": "Control Arrow Transformer",
        "module": "Control.Arrow.Transformer",
        "name": "lift",
        "normalized": "a b c-\u003ed a b c",
        "package": "arrows",
        "partial": "",
        "signature": "a b c-\u003ef a b c"
      }
    }
  }
]