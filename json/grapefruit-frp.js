[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Circuit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides circuits which are descriptions of reactive systems.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Grapefruit.Circuit",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Circuit.html",
        "fct-type": "module",
        "title": "Circuit"
      },
      "index": {
        "description": "This module provides circuits which are descriptions of reactive systems",
        "hierarchy": "FRP Grapefruit Circuit",
        "module": "FRP.Grapefruit.Circuit",
        "name": "Circuit",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Circuit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Circuit.html#t:Circuit",
      "description": {
        "fct-descr": "\u003cp\u003eA circuit describes a reactive system.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eera\u003c/code\u003e parameter denotes the time interval during which the circuit is in existence. It\n        is completely analogous to the era parameters of signal types which are described in the\n        documentation of \u003ca\u003eFRP.Grapefruit.Signal\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eInput and output of a circuit are typically signals, tuples of signals (with \u003ccode\u003e()\u003c/code\u003e as the\n        corner case) or records of signals as provided by the package grapefruit-records. The era\n        parameters of these signals usually match the \u003ccode\u003eera\u003c/code\u003e parameter of the circuit.\n\u003c/p\u003e\u003cp\u003eA circuit consumes only one input value and produces only one output value. This happens\n        when the circuit is constructed. So the temporal behavior does not come from turning\n        multiple inputs into multiple outputs but from using signals as inputs and outputs.\n\u003c/p\u003e\u003cp\u003eA circuit has the ability to interact with the outside world (that is, perform I/O).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowApply\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003eCircuit era\u003c/code\u003e is currently needed for implementing other parts\n        of Grapefruit. However, it should not be taken for granted that it will remain in future\n        versions. So it is better to not use it outside Grapefruit.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Circuit",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Circuit.html#Circuit",
        "fct-type": "data",
        "title": "Circuit"
      },
      "index": {
        "description": "circuit describes reactive system The era parameter denotes the time interval during which the circuit is in existence It is completely analogous to the era parameters of signal types which are described in the documentation of FRP.Grapefruit.Signal Input and output of circuit are typically signals tuples of signals with as the corner case or records of signals as provided by the package grapefruit-records The era parameters of these signals usually match the era parameter of the circuit circuit consumes only one input value and produces only one output value This happens when the circuit is constructed So the temporal behavior does not come from turning multiple inputs into multiple outputs but from using signals as inputs and outputs circuit has the ability to interact with the outside world that is perform The ArrowApply instance of Circuit era is currently needed for implementing other parts of Grapefruit However it should not be taken for granted that it will remain in future versions So it is better to not use it outside Grapefruit",
        "hierarchy": "FRP Grapefruit Circuit",
        "module": "FRP.Grapefruit.Circuit",
        "name": "Circuit",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Circuit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Circuit.html#v:act",
      "description": {
        "fct-descr": "\u003cp\u003eThis circuit takes an I/O action when it is constructed, performs this action immediately\n        and outputs its result.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Circuit",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Circuit era (IO output) output",
        "fct-source": "src/FRP-Grapefruit-Circuit.html#act",
        "fct-type": "function",
        "title": "act"
      },
      "index": {
        "description": "This circuit takes an action when it is constructed performs this action immediately and outputs its result",
        "hierarchy": "FRP Grapefruit Circuit",
        "module": "FRP.Grapefruit.Circuit",
        "name": "act",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Circuit.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a circuit.\n\u003c/p\u003e\u003cp\u003eThe second argument of \u003ccode\u003ecreate\u003c/code\u003e is fed into the circuit as its input and the circuit is\n        constructed then. After that, the initialization actions of all setups inserted by\n        \u003ccode\u003e\u003ca\u003eputSetup\u003c/a\u003e\u003c/code\u003e are run. The finalization actions of the setups are chained and returned by\n        \u003ccode\u003ecreate\u003c/code\u003e together with the output of the circuit.\n\u003c/p\u003e\u003cp\u003eNote that initialization is done completely after circuit creation. This allows outputs of\n        circuits to be generated before they are used for forming circuit inputs. This is important\n        to avoid circular dependencies when \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e is used.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Circuit",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(forall era.  Circuit era i o) -\u003e i -\u003e IO (o, IO ())",
        "fct-source": "src/FRP-Grapefruit-Circuit.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "Creates circuit The second argument of create is fed into the circuit as its input and the circuit is constructed then After that the initialization actions of all setups inserted by putSetup are run The finalization actions of the setups are chained and returned by create together with the output of the circuit Note that initialization is done completely after circuit creation This allows outputs of circuits to be generated before they are used for forming circuit inputs This is important to avoid circular dependencies when loop is used",
        "hierarchy": "FRP Grapefruit Circuit",
        "module": "FRP.Grapefruit.Circuit",
        "name": "create",
        "normalized": "(a b Circuit c d e)-\u003ed-\u003eIO(e,IO())",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(forall era. Circuit era i o)-\u003ei-\u003eIO(o,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Circuit.html#v:putSetup",
      "description": {
        "fct-descr": "\u003cp\u003eA circuit which triggers initialization and finalization according to a given setup.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Circuit",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Circuit era Setup ()",
        "fct-source": "src/FRP-Grapefruit-Circuit.html#putSetup",
        "fct-type": "function",
        "title": "putSetup"
      },
      "index": {
        "description": "circuit which triggers initialization and finalization according to given setup",
        "hierarchy": "FRP Grapefruit Circuit",
        "module": "FRP.Grapefruit.Circuit",
        "name": "putSetup",
        "normalized": "Circuit a Setup()",
        "package": "grapefruit-frp",
        "partial": "Setup",
        "signature": "Circuit era Setup()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Setup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA setup describes how to initialize and finalize a reactive system.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Grapefruit.Setup",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Setup.html",
        "fct-type": "module",
        "title": "Setup"
      },
      "index": {
        "description": "setup describes how to initialize and finalize reactive system",
        "hierarchy": "FRP Grapefruit Setup",
        "module": "FRP.Grapefruit.Setup",
        "name": "Setup",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Setup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Setup.html#t:Setup",
      "description": {
        "fct-descr": "\u003cp\u003eA setup describes the initialization and finalization of a reactive system. It is equivalent\n        to an action of type \u003ccode\u003eIO (IO ())\u003c/code\u003e which initializes the system and returns a finalization\n        action.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance denotes a setup which does no initialization\n        and no finalization.  The \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e method sequences initialization and finalization\n        actions.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Setup",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/FRP-Grapefruit-Setup.html#Setup",
        "fct-type": "data",
        "title": "Setup"
      },
      "index": {
        "description": "setup describes the initialization and finalization of reactive system It is equivalent to an action of type IO IO which initializes the system and returns finalization action The mempty method of the Monoid instance denotes setup which does no initialization and no finalization The mappend method sequences initialization and finalization actions",
        "hierarchy": "FRP Grapefruit Setup",
        "module": "FRP.Grapefruit.Setup",
        "name": "Setup",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Setup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Setup.html#v:fromIO",
      "description": {
        "fct-descr": "\u003cp\u003eForms an initialization-only setup from an I/O action.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Setup",
        "fct-package": "grapefruit-frp",
        "fct-signature": "IO () -\u003e Setup",
        "fct-source": "src/FRP-Grapefruit-Setup.html#fromIO",
        "fct-type": "function",
        "title": "fromIO"
      },
      "index": {
        "description": "Forms an initialization-only setup from an action",
        "hierarchy": "FRP Grapefruit Setup",
        "module": "FRP.Grapefruit.Setup",
        "name": "fromIO",
        "normalized": "IO()-\u003eSetup",
        "package": "grapefruit-frp",
        "partial": "IO",
        "signature": "IO()-\u003eSetup"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Setup.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a setup into an I/O action.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Setup",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Setup -\u003e IO (IO ())",
        "fct-source": "src/FRP-Grapefruit-Setup.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Converts setup into an action",
        "hierarchy": "FRP Grapefruit Setup",
        "module": "FRP.Grapefruit.Setup",
        "name": "run",
        "normalized": "Setup-\u003eIO(IO())",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Setup-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Setup.html#v:setup",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an I/O action into a setup.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Setup",
        "fct-package": "grapefruit-frp",
        "fct-signature": "IO (IO ()) -\u003e Setup",
        "fct-source": "src/FRP-Grapefruit-Setup.html#setup",
        "fct-type": "function",
        "title": "setup"
      },
      "index": {
        "description": "Converts an action into setup",
        "hierarchy": "FRP Grapefruit Setup",
        "module": "FRP.Grapefruit.Setup",
        "name": "setup",
        "normalized": "IO(IO())-\u003eSetup",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "IO(IO())-\u003eSetup"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Continuous.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is about continuous signals.\n\u003c/p\u003e\u003cp\u003eFor a general introduction to signals, see the documentation of \u003ca\u003eFRP.Grapefruit.Signal\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Continuous",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal-Continuous.html",
        "fct-type": "module",
        "title": "Continuous"
      },
      "index": {
        "description": "This module is about continuous signals For general introduction to signals see the documentation of FRP.Grapefruit.Signal",
        "hierarchy": "FRP Grapefruit Signal Continuous",
        "module": "FRP.Grapefruit.Signal.Continuous",
        "name": "Continuous",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Continuous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Continuous.html#t:CSignal",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of continuous signals.\n\u003c/p\u003e\u003cp\u003eA continuous signal denotes a mapping from times to values. You can think of \u003ccode\u003eCSignal \u003cem\u003eera\u003c/em\u003e\n        \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e as being equivalent to \u003ccode\u003eTime \u003cem\u003eera\u003c/em\u003e -\u003e \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e where \u003ccode\u003eTime \u003cem\u003eera\u003c/em\u003e\u003c/code\u003e is the type of all\n        times of the given era.\n\u003c/p\u003e\u003cp\u003eContinuous signals are used to describe continuously changing values. They are also used for\n        values changing at discrete times if there is no possibility of being notified about such\n        changes. If there is a notification mechanism then segemented signals, provided by\n        \u003ca\u003eFRP.Grapefruit.Signal.Segmented\u003c/a\u003e, should be used.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Continuous",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/FRP-Grapefruit-Signal-Continuous.html#CSignal",
        "fct-type": "data",
        "title": "CSignal"
      },
      "index": {
        "description": "The type of continuous signals continuous signal denotes mapping from times to values You can think of CSignal era val as being equivalent to Time era val where Time era is the type of all times of the given era Continuous signals are used to describe continuously changing values They are also used for values changing at discrete times if there is no possibility of being notified about such changes If there is notification mechanism then segemented signals provided by FRP.Grapefruit.Signal.Segmented should be used",
        "hierarchy": "FRP Grapefruit Signal Continuous",
        "module": "FRP.Grapefruit.Signal.Continuous",
        "name": "CSignal",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "CSignal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Continuous.html#v:fromSSignal",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a segmented signal into a continous signal, dropping the information about update\n        points.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Continuous",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era val -\u003e CSignal era val",
        "fct-source": "src/FRP-Grapefruit-Signal-Continuous.html#fromSSignal",
        "fct-type": "function",
        "title": "fromSSignal"
      },
      "index": {
        "description": "Converts segmented signal into continous signal dropping the information about update points",
        "hierarchy": "FRP Grapefruit Signal Continuous",
        "module": "FRP.Grapefruit.Signal.Continuous",
        "name": "fromSSignal",
        "normalized": "SSignal a b-\u003eCSignal a b",
        "package": "grapefruit-frp",
        "partial": "SSignal",
        "signature": "SSignal era val-\u003eCSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Continuous.html#v:producer",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a value read action into a continuous signal producer.\n\u003c/p\u003e\u003cp\u003eThe producer \u003ccode\u003eproducer \u003cem\u003ereadVal\u003c/em\u003e\u003c/code\u003e produces a continuous signal whose current value is\n        determined by executing \u003ccode\u003e\u003cem\u003ereadVal\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Continuous",
        "fct-package": "grapefruit-frp",
        "fct-signature": "IO val -\u003e Producer CSignal val",
        "fct-source": "src/FRP-Grapefruit-Signal-Continuous.html#producer",
        "fct-type": "function",
        "title": "producer"
      },
      "index": {
        "description": "Converts value read action into continuous signal producer The producer producer readVal produces continuous signal whose current value is determined by executing readVal",
        "hierarchy": "FRP Grapefruit Signal Continuous",
        "module": "FRP.Grapefruit.Signal.Continuous",
        "name": "producer",
        "normalized": "IO a-\u003eProducer CSignal a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "IO val-\u003eProducer CSignal val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is about discrete signals.\n\u003c/p\u003e\u003cp\u003eFor a general introduction to signals, see the documentation of \u003ca\u003eFRP.Grapefruit.Signal\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal-Discrete.html",
        "fct-type": "module",
        "title": "Discrete"
      },
      "index": {
        "description": "This module is about discrete signals For general introduction to signals see the documentation of FRP.Grapefruit.Signal",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "Discrete",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Discrete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#t:DSignal",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of discrete signals.\n\u003c/p\u003e\u003cp\u003eA discrete signal is a sequence of values assigned to discrete times. A pair of a time and a\n        corresponding value is called an occurrence. You can think of \u003ccode\u003eDSignal \u003cem\u003eera\u003c/em\u003e \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e as being\n        equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e (Time \u003cem\u003eera\u003c/em\u003e) \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e where \u003ccode\u003eTime \u003cem\u003eera\u003c/em\u003e\u003c/code\u003e is the type of all times of\n        the given era. However, an occurence at the starting time of the era is not possible. In\n        contrast to \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e, a discrete signal may cover infinitely many values.\n\u003c/p\u003e\u003cp\u003eDiscrete signals can describe sequences of events. For example, the sequence of all key\n        presses could be described by a discrete signal of characters. Discrete signals are also\n        used in conjunction with sampling.\n\u003c/p\u003e\u003cp\u003eThe discrete signal instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e provide the following method\n        definitions:\n\u003c/p\u003e\u003cpre\u003e\n        \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e    = \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e  = \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Signal-Discrete.html#DSignal",
        "fct-type": "data",
        "title": "DSignal"
      },
      "index": {
        "description": "The type of discrete signals discrete signal is sequence of values assigned to discrete times pair of time and corresponding value is called an occurrence You can think of DSignal era val as being equivalent to Map Time era val where Time era is the type of all times of the given era However an occurence at the starting time of the era is not possible In contrast to Map discrete signal may cover infinitely many values Discrete signals can describe sequences of events For example the sequence of all key presses could be described by discrete signal of characters Discrete signals are also used in conjunction with sampling The discrete signal instances of Functor and Monoid provide the following method definitions fmap map mempty empty mappend union mconcat unions",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "DSignal",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "DSignal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:catMaybes",
      "description": {
        "fct-descr": "\u003cp\u003eConverts all occurences with values of the form \u003ccode\u003eJust \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e into occurences with value\n        \u003ccode\u003e\u003cem\u003eval\u003c/em\u003e\u003c/code\u003e and drops all occurences with value \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "DSignal era (Maybe val) -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "Converts all occurences with values of the form Just val into occurences with value val and drops all occurences with value Nothing",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "catMaybes",
        "normalized": "DSignal a(Maybe b)-\u003eDSignal a b",
        "package": "grapefruit-frp",
        "partial": "Maybes",
        "signature": "DSignal era(Maybe val)-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:consumer",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an event handler into a discrete signal consumer.\n\u003c/p\u003e\u003cp\u003eIf a discrete signal is consumed with such a consumer, the handler is called at each\n        occurence with the occuring value as its argument.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e IO ()) -\u003e Consumer DSignal val",
        "fct-source": "src/Internal-Signal-Discrete.html#consumer",
        "fct-type": "function",
        "title": "consumer"
      },
      "index": {
        "description": "Converts an event handler into discrete signal consumer If discrete signal is consumed with such consumer the handler is called at each occurence with the occuring value as its argument",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "consumer",
        "normalized": "(a-\u003eIO())-\u003eConsumer DSignal a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eIO())-\u003eConsumer DSignal val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the difference of two discrete signals.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edifference\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edifferenceWith\u003c/a\u003e\u003c/code\u003e (\\_ _ -\u003e Nothing)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "DSignal era val1 -\u003e DSignal era val2 -\u003e DSignal era val1",
        "fct-source": "src/Internal-Signal-Discrete.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Constructs the difference of two discrete signals difference is equivalent to differenceWith Nothing",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "difference",
        "normalized": "DSignal a b-\u003eDSignal a b-\u003eDSignal a b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "DSignal era val-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a kind of difference of two discrete signals where occurences may be modified\n        instead of being dropped.\n\u003c/p\u003e\u003cp\u003eAt each time, a signal \u003ccode\u003e\u003cem\u003edSignal1\u003c/em\u003e\u003c/code\u003e has an occurence of a value \u003ccode\u003e\u003cem\u003eval1\u003c/em\u003e\u003c/code\u003e, the signal\n        \u003ccode\u003edifferenceWith \u003cem\u003ecomb\u003c/em\u003e \u003cem\u003edSignal1\u003c/em\u003e \u003cem\u003edSignal\u003c/em\u003e\u003c/code\u003e has\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ean occurence of \u003ccode\u003e\u003cem\u003eval1\u003c/em\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n            if \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has no occurence\n\u003c/dd\u003e\u003cdt\u003ean occurence of \u003ccode\u003e\u003cem\u003eval'\u003c/em\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n            if \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has an occurence of a value \u003ccode\u003e\u003cem\u003eval2\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003e\u003cem\u003ecomb\u003c/em\u003e \u003cem\u003eval1\u003c/em\u003e \u003cem\u003eval2\u003c/em\u003e = Just\n            \u003cem\u003eval'\u003c/em\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eno occurence\u003c/dt\u003e\u003cdd\u003e\n            if \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has an occurence of a value \u003ccode\u003e\u003cem\u003eval2\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003e\u003cem\u003ecomb\u003c/em\u003e \u003cem\u003eval1\u003c/em\u003e \u003cem\u003eval2\u003c/em\u003e =\n            Nothing\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val1 -\u003e val2 -\u003e Maybe val1) -\u003e DSignal era val1 -\u003e DSignal era val2 -\u003e DSignal era val1",
        "fct-source": "src/Internal-Signal-Discrete.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "Constructs kind of difference of two discrete signals where occurences may be modified instead of being dropped At each time signal dSignal1 has an occurence of value val1 the signal differenceWith comb dSignal1 dSignal has an occurence of val1 if dSignal2 has no occurence an occurence of val if dSignal2 has an occurence of value val2 and comb val1 val2 Just val no occurence if dSignal2 has an occurence of value val2 and comb val1 val2 Nothing",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "differenceWith",
        "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eDSignal b a-\u003eDSignal b a-\u003eDSignal b a",
        "package": "grapefruit-frp",
        "partial": "With",
        "signature": "(val-\u003eval-\u003eMaybe val)-\u003eDSignal era val-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eA signal with no occurrences.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "signal with no occurrences",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "empty",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eDrops all occurence of a discrete signal whose values do not fulfill a given predicate.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e Bool) -\u003e DSignal era val -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Drops all occurence of discrete signal whose values do not fulfill given predicate",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eDSignal b a-\u003eDSignal b a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eBool)-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the left-biased intersection of two discrete signals.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eintersection\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eintersectionWith\u003c/a\u003e\u003c/code\u003e const\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "DSignal era val1 -\u003e DSignal era val2 -\u003e DSignal era val1",
        "fct-source": "src/Internal-Signal-Discrete.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Constructs the left-biased intersection of two discrete signals intersection is equivalent to intersectionWith const",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "intersection",
        "normalized": "DSignal a b-\u003eDSignal a b-\u003eDSignal a b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "DSignal era val-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:intersectionWith",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the intersection of two discrete signals, combining values via a combining\n        function.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val1 -\u003e val2 -\u003e val') -\u003e DSignal era val1 -\u003e DSignal era val2 -\u003e DSignal era val'",
        "fct-source": "src/Internal-Signal-Discrete.html#intersectionWith",
        "fct-type": "function",
        "title": "intersectionWith"
      },
      "index": {
        "description": "Constructs the intersection of two discrete signals combining values via combining function",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "intersectionWith",
        "normalized": "(a-\u003ea-\u003eb)-\u003eDSignal c a-\u003eDSignal c a-\u003eDSignal c b",
        "package": "grapefruit-frp",
        "partial": "With",
        "signature": "(val-\u003eval-\u003eval')-\u003eDSignal era val-\u003eDSignal era val-\u003eDSignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eConverts each value occuring in a discrete signal by applying a function to it.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e val') -\u003e DSignal era val -\u003e DSignal era val'",
        "fct-source": "src/Internal-Signal-Discrete.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Converts each value occuring in discrete signal by applying function to it",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eDSignal c a-\u003eDSignal c b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eval')-\u003eDSignal era val-\u003eDSignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003emapMaybe \u003cem\u003efun\u003c/em\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003cem\u003efun\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e Maybe val') -\u003e DSignal era val -\u003e DSignal era val'",
        "fct-source": "src/Internal-Signal-Discrete.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "The combination of map and catMaybes mapMaybe fun is equivalent to catMaybes map fun",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eDSignal c a-\u003eDSignal c b",
        "package": "grapefruit-frp",
        "partial": "Maybe",
        "signature": "(val-\u003eMaybe val')-\u003eDSignal era val-\u003eDSignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:producer",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an event handler registration into a discrete signal producer.\n\u003c/p\u003e\u003cp\u003eApplying the argument of \u003ccode\u003eproducer\u003c/code\u003e to an event handler has to yield a setup which makes the\n        handler be called with a certain value everytime the produced signal shall have an\n        occurence of this value.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "((val -\u003e IO ()) -\u003e Setup) -\u003e Producer DSignal val",
        "fct-source": "src/Internal-Signal-Discrete.html#producer",
        "fct-type": "function",
        "title": "producer"
      },
      "index": {
        "description": "Converts an event handler registration into discrete signal producer Applying the argument of producer to an event handler has to yield setup which makes the handler be called with certain value everytime the produced signal shall have an occurence of this value",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "producer",
        "normalized": "((a-\u003eIO())-\u003eSetup)-\u003eProducer DSignal a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "((val-\u003eIO())-\u003eSetup)-\u003eProducer DSignal val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulates the values of a discrete signal, starting with a given initial value.\n\u003c/p\u003e\u003cp\u003eApplying \u003ccode\u003escan \u003cem\u003einit\u003c/em\u003e \u003cem\u003efun\u003c/em\u003e\u003c/code\u003e to a discrete signal replaces its occurence values \u003ccode\u003e\u003cem\u003eval_1\u003c/em\u003e\u003c/code\u003e,\n        \u003ccode\u003e\u003cem\u003eval_2\u003c/em\u003e\u003c/code\u003e and so on by the values \u003ccode\u003e\u003cem\u003einit\u003c/em\u003e `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_1\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003e(\u003cem\u003einit\u003c/em\u003e\n        `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_1\u003c/em\u003e) `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_2\u003c/em\u003e\u003c/code\u003e and so on.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "accu -\u003e (accu -\u003e val -\u003e accu) -\u003e DSignal era val -\u003e DSignal era accu",
        "fct-source": "src/Internal-Signal-Discrete.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Accumulates the values of discrete signal starting with given initial value Applying scan init fun to discrete signal replaces its occurence values val val and so on by the values init fun val init fun val fun val and so on",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "scan",
        "normalized": "a-\u003e(a-\u003eb-\u003ea)-\u003eDSignal c b-\u003eDSignal c a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "accu-\u003e(accu-\u003eval-\u003eaccu)-\u003eDSignal era val-\u003eDSignal era accu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:scan1",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulates the values of a discrete signal, starting with the first occuring value.\n\u003c/p\u003e\u003cp\u003eApplying \u003ccode\u003escan1 \u003cem\u003einit\u003c/em\u003e \u003cem\u003efun\u003c/em\u003e\u003c/code\u003e to a discrete signal replaces its occurence values \u003ccode\u003e\u003cem\u003eval_1\u003c/em\u003e\u003c/code\u003e,\n        \u003ccode\u003e\u003cem\u003eval_2\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003e\u003cem\u003eval_3\u003c/em\u003e\u003c/code\u003e and so on by the values \u003ccode\u003e\u003cem\u003eval_1\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003e\u003cem\u003eval_1\u003c/em\u003e `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_2\u003c/em\u003e\u003c/code\u003e,\n        \u003ccode\u003e(\u003cem\u003eval_1\u003c/em\u003e `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_2\u003c/em\u003e) `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_3\u003c/em\u003e\u003c/code\u003e and so on.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e val -\u003e val) -\u003e DSignal era val -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#scan1",
        "fct-type": "function",
        "title": "scan1"
      },
      "index": {
        "description": "Accumulates the values of discrete signal starting with the first occuring value Applying scan1 init fun to discrete signal replaces its occurence values val val val and so on by the values val val fun val val fun val fun val and so on",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "scan1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eDSignal b a-\u003eDSignal b a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eval-\u003eval)-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:stateful",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a discrete signal by repeatedly applying state transformers.\n\u003c/p\u003e\u003cp\u003eApplying \u003ccode\u003estateful \u003cem\u003einit\u003c/em\u003e\u003c/code\u003e to a discrete signal replaces its occurence values \u003ccode\u003e\u003cem\u003etrans_1\u003c/em\u003e\u003c/code\u003e,\n        \u003ccode\u003e\u003cem\u003etrans_2\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003e\u003cem\u003etrans_3\u003c/em\u003e\u003c/code\u003e and so on by the values \u003ccode\u003efst . \u003cem\u003etrans_1\u003c/em\u003e $ \u003cem\u003einit\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003efst .\n        \u003cem\u003etrans_2\u003c/em\u003e $ snd . \u003cem\u003etrans_1\u003c/em\u003e $ \u003cem\u003einit\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003efst . \u003cem\u003etrans_3\u003c/em\u003e $ snd . \u003cem\u003etrans_2\u003c/em\u003e $ snd . \u003cem\u003etrans_1\u003c/em\u003e\n        $ \u003cem\u003einit\u003c/em\u003e\u003c/code\u003e and so on.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "state -\u003e DSignal era (state -\u003e (val, state)) -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#stateful",
        "fct-type": "function",
        "title": "stateful"
      },
      "index": {
        "description": "Constructs discrete signal by repeatedly applying state transformers Applying stateful init to discrete signal replaces its occurence values trans trans trans and so on by the values fst trans init fst trans snd trans init fst trans snd trans snd trans init and so on",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "stateful",
        "normalized": "a-\u003eDSignal b(a-\u003e(c,a))-\u003eDSignal b c",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "state-\u003eDSignal era(state-\u003e(val,state))-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:transUnion",
      "description": {
        "fct-descr": "\u003cp\u003eUnion with conversion and combination.\n\u003c/p\u003e\u003cp\u003eAt each time, a signal \u003ccode\u003e\u003cem\u003edSignal1\u003c/em\u003e\u003c/code\u003e or a signal \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has an occurence, the signal\n\u003c/p\u003e\u003cpre\u003e\n        transUnion \u003cem\u003econv1\u003c/em\u003e \u003cem\u003econv2\u003c/em\u003e \u003cem\u003ecomb\u003c/em\u003e \u003cem\u003edSignal1\u003c/em\u003e \u003cem\u003edSignal2\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003ehas an occurence, too. The value of this occurence is formed as follows:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003cem\u003econv1\u003c/em\u003e \u003cem\u003eval1\u003c/em\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n            if \u003ccode\u003e\u003cem\u003edSignal1\u003c/em\u003e\u003c/code\u003e has an occurence of value \u003ccode\u003e\u003cem\u003eval1\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has no occurence\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003cem\u003econv2\u003c/em\u003e \u003cem\u003eval2\u003c/em\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n            if \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has an occurence of value \u003ccode\u003e\u003cem\u003eval2\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003e\u003cem\u003edSignal1\u003c/em\u003e\u003c/code\u003e has no occurence\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003cem\u003ecomb\u003c/em\u003e \u003cem\u003eval1\u003c/em\u003e \u003cem\u003eval2\u003c/em\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n            if \u003ccode\u003e\u003cem\u003edSignal1\u003c/em\u003e\u003c/code\u003e has an occurence of value \u003ccode\u003e\u003cem\u003eval1\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003e\u003cem\u003edSignal2\u003c/em\u003e\u003c/code\u003e has an occurence of\n            value \u003ccode\u003e\u003cem\u003eval2\u003c/em\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val1 -\u003e val') -\u003e (val2 -\u003e val') -\u003e (val1 -\u003e val2 -\u003e val') -\u003e DSignal era val1 -\u003e DSignal era val2 -\u003e DSignal era val'",
        "fct-source": "src/Internal-Signal-Discrete.html#transUnion",
        "fct-type": "function",
        "title": "transUnion"
      },
      "index": {
        "description": "Union with conversion and combination At each time signal dSignal1 or signal dSignal2 has an occurence the signal transUnion conv1 conv2 comb dSignal1 dSignal2 has an occurence too The value of this occurence is formed as follows conv1 val1 if dSignal1 has an occurence of value val1 and dSignal2 has no occurence conv2 val2 if dSignal2 has an occurence of value val2 and dSignal1 has no occurence comb val1 val2 if dSignal1 has an occurence of value val1 and dSignal2 has an occurence of value val2",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "transUnion",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003ea-\u003eb)-\u003eDSignal c a-\u003eDSignal c a-\u003eDSignal c b",
        "package": "grapefruit-frp",
        "partial": "Union",
        "signature": "(val-\u003eval')-\u003e(val-\u003eval')-\u003e(val-\u003eval-\u003eval')-\u003eDSignal era val-\u003eDSignal era val-\u003eDSignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the left-biased union of two discrete signals.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunion\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e const\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "DSignal era val -\u003e DSignal era val -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Constructs the left-biased union of two discrete signals union is equivalent to unionWith const",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "union",
        "normalized": "DSignal a b-\u003eDSignal a b-\u003eDSignal a b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "DSignal era val-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs the union of two discrete signals, combining simultaneously occuring values via\n        a combining function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunionWith\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003etransUnion\u003c/a\u003e\u003c/code\u003e id id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e val -\u003e val) -\u003e DSignal era val -\u003e DSignal era val -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Constructs the union of two discrete signals combining simultaneously occuring values via combining function unionWith is equivalent to transUnion id id",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eDSignal b a-\u003eDSignal b a-\u003eDSignal b a",
        "package": "grapefruit-frp",
        "partial": "With",
        "signature": "(val-\u003eval-\u003eval)-\u003eDSignal era val-\u003eDSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eRepeated left-biased union.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunions\u003c/code\u003e is equivalent to \u003ccode\u003efoldl \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunionsWith\u003c/a\u003e\u003c/code\u003e const\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "[DSignal era val] -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Repeated left-biased union unions is equivalent to foldl union empty and unionsWith const",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "unions",
        "normalized": "[DSignal a b]-\u003eDSignal a b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "[DSignal era val]-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Discrete.html#v:unionsWith",
      "description": {
        "fct-descr": "\u003cp\u003eRepeated union with a combining function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunionsWith \u003cem\u003ecomb\u003c/em\u003e\u003c/code\u003e is equivalent to \u003ccode\u003efoldl (\u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003cem\u003ecomb\u003c/em\u003e) \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Discrete",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e val -\u003e val) -\u003e [DSignal era val] -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Discrete.html#unionsWith",
        "fct-type": "function",
        "title": "unionsWith"
      },
      "index": {
        "description": "Repeated union with combining function unionsWith comb is equivalent to foldl unionWith comb empty",
        "hierarchy": "FRP Grapefruit Signal Discrete",
        "module": "FRP.Grapefruit.Signal.Discrete",
        "name": "unionsWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[DSignal b a]-\u003eDSignal b a",
        "package": "grapefruit-frp",
        "partial": "With",
        "signature": "(val-\u003eval-\u003eval)-\u003e[DSignal era val]-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html",
        "fct-type": "module",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "Sequence",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#t:AtomicDiff",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Signal-Incremental-Sequence-AtomicDiff.html#AtomicDiff",
        "fct-type": "data",
        "title": "AtomicDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "AtomicDiff",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Atomic Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:-124--62-",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Seq el) -\u003e SSignal era el -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#%7C%3E",
        "fct-type": "function",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "(|\u003e) |\u003e",
        "normalized": "ISignal a(Seq b)-\u003eSSignal a b-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Seq el)-\u003eSSignal era el-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:-60--124-",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era el -\u003e ISignal era (Seq el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#%3C%7C",
        "fct-type": "function",
        "title": "(\u003c|)"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "(\u003c|) \u003c|",
        "normalized": "SSignal a b-\u003eISignal a(Seq b)-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era el-\u003eISignal era(Seq el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:-62--60-",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Seq el) -\u003e ISignal era (Seq el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "ISignal a(Seq b)-\u003eISignal a(Seq b)-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Seq el)-\u003eISignal era(Seq el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:Deletion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Deletion Int Int",
        "fct-source": "src/Internal-Signal-Incremental-Sequence-AtomicDiff.html#AtomicDiff",
        "fct-type": "function",
        "title": "Deletion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "Deletion",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Deletion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:Insertion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Insertion Int (Seq el)",
        "fct-source": "src/Internal-Signal-Incremental-Sequence-AtomicDiff.html#AtomicDiff",
        "fct-type": "function",
        "title": "Insertion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "Insertion",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Insertion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:Shift",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Shift Int Int Int",
        "fct-source": "src/Internal-Signal-Incremental-Sequence-AtomicDiff.html#AtomicDiff",
        "fct-type": "function",
        "title": "Shift"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "Shift",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:Update",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Update Int (Seq el)",
        "fct-source": "src/Internal-Signal-Incremental-Sequence-AtomicDiff.html#AtomicDiff",
        "fct-type": "function",
        "title": "Update"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "Update",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:deletion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e Int -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#deletion",
        "fct-type": "function",
        "title": "deletion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "deletion",
        "normalized": "Int-\u003eInt-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:elementDeletion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#elementDeletion",
        "fct-type": "function",
        "title": "elementDeletion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "elementDeletion",
        "normalized": "Int-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "Deletion",
        "signature": "Int-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:elementInsertion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e el -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#elementInsertion",
        "fct-type": "function",
        "title": "elementInsertion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "elementInsertion",
        "normalized": "Int-\u003ea-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "Insertion",
        "signature": "Int-\u003eel-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:elementShift",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e Int -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#elementShift",
        "fct-type": "function",
        "title": "elementShift"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "elementShift",
        "normalized": "Int-\u003eInt-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "Shift",
        "signature": "Int-\u003eInt-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:elementUpdate",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e el -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#elementUpdate",
        "fct-type": "function",
        "title": "elementUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "elementUpdate",
        "normalized": "Int-\u003ea-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "Update",
        "signature": "Int-\u003eel-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:empty",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Seq a)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "empty",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:filter",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era (el -\u003e Bool) -\u003e ISignal era (Seq el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "filter",
        "normalized": "SSignal a(b-\u003eBool)-\u003eISignal a(Seq b)-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era(el-\u003eBool)-\u003eISignal era(Seq el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:insertion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e Seq el -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#insertion",
        "fct-type": "function",
        "title": "insertion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "insertion",
        "normalized": "Int-\u003eSeq a-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Int-\u003eSeq el-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:length",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Seq el) -\u003e SSignal era Int",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "length",
        "normalized": "ISignal a(Seq b)-\u003eSSignal a Int",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Seq el)-\u003eSSignal era Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:map",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era (el -\u003e el') -\u003e ISignal era (Seq el) -\u003e ISignal era (Seq el')",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "map",
        "normalized": "SSignal a(b-\u003ec)-\u003eISignal a(Seq b)-\u003eISignal a(Seq c)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era(el-\u003eel')-\u003eISignal era(Seq el)-\u003eISignal era(Seq el')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:null",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Seq el) -\u003e SSignal era Bool",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "null",
        "normalized": "ISignal a(Seq b)-\u003eSSignal a Bool",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Seq el)-\u003eSSignal era Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:reverse",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Seq el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "reverse",
        "normalized": "ISignal a(Seq b)-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Seq el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:shift",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "shift",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:singleton",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era el -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "singleton",
        "normalized": "SSignal a b-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era el-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:staticFilter",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(el -\u003e Bool) -\u003e ISignal era (Seq el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#staticFilter",
        "fct-type": "function",
        "title": "staticFilter"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "staticFilter",
        "normalized": "(a-\u003eBool)-\u003eISignal b(Seq a)-\u003eISignal b(Seq a)",
        "package": "grapefruit-frp",
        "partial": "Filter",
        "signature": "(el-\u003eBool)-\u003eISignal era(Seq el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:staticMap",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(el -\u003e el') -\u003e ISignal era (Seq el) -\u003e ISignal era (Seq el')",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#staticMap",
        "fct-type": "function",
        "title": "staticMap"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "staticMap",
        "normalized": "(a-\u003eb)-\u003eISignal c(Seq a)-\u003eISignal c(Seq b)",
        "package": "grapefruit-frp",
        "partial": "Map",
        "signature": "(el-\u003eel')-\u003eISignal era(Seq el)-\u003eISignal era(Seq el')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Sequence.html#v:update",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Int -\u003e Seq el -\u003e Diff (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Sequence.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Sequence",
        "module": "FRP.Grapefruit.Signal.Incremental.Sequence",
        "name": "update",
        "normalized": "Int-\u003eSeq a-\u003eDiff(Seq a)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Int-\u003eSeq el-\u003eDiff(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html",
        "fct-type": "module",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "Set",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:deletion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Set el -\u003e Diff (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#deletion",
        "fct-type": "function",
        "title": "deletion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "deletion",
        "normalized": "Set a-\u003eDiff(Set a)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Set el-\u003eDiff(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:difference",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e ISignal era (Set el) -\u003e ISignal era (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "difference",
        "normalized": "ISignal a(Set b)-\u003eISignal a(Set b)-\u003eISignal a(Set b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Set el)-\u003eISignal era(Set el)-\u003eISignal era(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:elementDeletion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "el -\u003e Diff (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#elementDeletion",
        "fct-type": "function",
        "title": "elementDeletion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "elementDeletion",
        "normalized": "a-\u003eDiff(Set a)",
        "package": "grapefruit-frp",
        "partial": "Deletion",
        "signature": "el-\u003eDiff(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:elementInsertion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "el -\u003e Diff (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#elementInsertion",
        "fct-type": "function",
        "title": "elementInsertion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "elementInsertion",
        "normalized": "a-\u003eDiff(Set a)",
        "package": "grapefruit-frp",
        "partial": "Insertion",
        "signature": "el-\u003eDiff(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:empty",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "empty",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:insertion",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Set el -\u003e Diff (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#insertion",
        "fct-type": "function",
        "title": "insertion"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "insertion",
        "normalized": "Set a-\u003eDiff(Set a)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Set el-\u003eDiff(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:intersection",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e ISignal era (Set el) -\u003e ISignal era (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "intersection",
        "normalized": "ISignal a(Set b)-\u003eISignal a(Set b)-\u003eISignal a(Set b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Set el)-\u003eISignal era(Set el)-\u003eISignal era(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:member",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era el -\u003e ISignal era (Set el) -\u003e SSignal era Bool",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "member",
        "normalized": "SSignal a b-\u003eISignal a(Set b)-\u003eSSignal a Bool",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era el-\u003eISignal era(Set el)-\u003eSSignal era Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:notMember",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era el -\u003e ISignal era (Set el) -\u003e SSignal era Bool",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "notMember",
        "normalized": "SSignal a b-\u003eISignal a(Set b)-\u003eSSignal a Bool",
        "package": "grapefruit-frp",
        "partial": "Member",
        "signature": "SSignal era el-\u003eISignal era(Set el)-\u003eSSignal era Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:null",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e SSignal era Bool",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "null",
        "normalized": "ISignal a(Set b)-\u003eSSignal a Bool",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Set el)-\u003eSSignal era Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:singleton",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era el -\u003e ISignal era (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "singleton",
        "normalized": "SSignal a b-\u003eISignal a(Set b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era el-\u003eISignal era(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:size",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e SSignal era Int",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "size",
        "normalized": "ISignal a(Set b)-\u003eSSignal a Int",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Set el)-\u003eSSignal era Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:staticMember",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "el -\u003e ISignal era (Set el) -\u003e SSignal era Bool",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#staticMember",
        "fct-type": "function",
        "title": "staticMember"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "staticMember",
        "normalized": "a-\u003eISignal b(Set a)-\u003eSSignal b Bool",
        "package": "grapefruit-frp",
        "partial": "Member",
        "signature": "el-\u003eISignal era(Set el)-\u003eSSignal era Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:staticNotMember",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "el -\u003e ISignal era (Set el) -\u003e SSignal era Bool",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#staticNotMember",
        "fct-type": "function",
        "title": "staticNotMember"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "staticNotMember",
        "normalized": "a-\u003eISignal b(Set a)-\u003eSSignal b Bool",
        "package": "grapefruit-frp",
        "partial": "Not Member",
        "signature": "el-\u003eISignal era(Set el)-\u003eSSignal era Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:toAscSeqs",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#toAscSeqs",
        "fct-type": "function",
        "title": "toAscSeqs"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "toAscSeqs",
        "normalized": "ISignal a(Set b)-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "Asc Seqs",
        "signature": "ISignal era(Set el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:toSeqs",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e ISignal era (Seq el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#toSeqs",
        "fct-type": "function",
        "title": "toSeqs"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "toSeqs",
        "normalized": "ISignal a(Set b)-\u003eISignal a(Seq b)",
        "package": "grapefruit-frp",
        "partial": "Seqs",
        "signature": "ISignal era(Set el)-\u003eISignal era(Seq el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental-Set.html#v:union",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental.Set",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Set el) -\u003e ISignal era (Set el) -\u003e ISignal era (Set el)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental-Set.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental Set",
        "module": "FRP.Grapefruit.Signal.Incremental.Set",
        "name": "union",
        "normalized": "ISignal a(Set b)-\u003eISignal a(Set b)-\u003eISignal a(Set b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era(Set el)-\u003eISignal era(Set el)-\u003eISignal era(Set el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html",
        "fct-type": "module",
        "title": "Incremental"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "Incremental",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Incremental",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#t:ISignal",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#ISignal",
        "fct-type": "data",
        "title": "ISignal"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "ISignal",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "ISignal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#t:Incremental",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "class",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#Incremental",
        "fct-type": "class",
        "title": "Incremental"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "Incremental",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Incremental",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#t:Monolithic",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "newtype",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#Monolithic",
        "fct-type": "newtype",
        "title": "Monolithic"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "Monolithic",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Monolithic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:Monolithic",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Monolithic val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#Monolithic",
        "fct-type": "function",
        "title": "Monolithic"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "Monolithic",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Monolithic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:combine",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val1 -\u003e val2 -\u003e (val', state)) -\u003e (Diff val1 -\u003e state -\u003e (Diff val', state)) -\u003e (Diff val2 -\u003e state -\u003e (Diff val', state)) -\u003e ISignal era val1 -\u003e ISignal era val2 -\u003e ISignal era val'",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "combine",
        "normalized": "(a-\u003ea-\u003e(b,c))-\u003e(Diff a-\u003ec-\u003e(Diff b,c))-\u003e(Diff a-\u003ec-\u003e(Diff b,c))-\u003eISignal d a-\u003eISignal d a-\u003eISignal d b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eval-\u003e(val',state))-\u003e(Diff val-\u003estate-\u003e(Diff val',state))-\u003e(Diff val-\u003estate-\u003e(Diff val',state))-\u003eISignal era val-\u003eISignal era val-\u003eISignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:const",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "val -\u003e ISignal era val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#const",
        "fct-type": "function",
        "title": "const"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "const",
        "normalized": "a-\u003eISignal b a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "val-\u003eISignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:construct",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "val -\u003e DSignal era (Diff val) -\u003e ISignal era val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#construct",
        "fct-type": "function",
        "title": "construct"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "construct",
        "normalized": "a-\u003eDSignal b(Diff a)-\u003eISignal b a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "val-\u003eDSignal era(Diff val)-\u003eISignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:consumer",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e IO ()) -\u003e (Diff val -\u003e IO ()) -\u003e Consumer ISignal val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#consumer",
        "fct-type": "function",
        "title": "consumer"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "consumer",
        "normalized": "(a-\u003eIO())-\u003e(Diff a-\u003eIO())-\u003eConsumer ISignal a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eIO())-\u003e(Diff val-\u003eIO())-\u003eConsumer ISignal val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:map",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e (val', state)) -\u003e (Diff val -\u003e state -\u003e (Diff val', state)) -\u003e ISignal era val -\u003e ISignal era val'",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "map",
        "normalized": "(a-\u003e(b,c))-\u003e(Diff a-\u003ec-\u003e(Diff b,c))-\u003eISignal d a-\u003eISignal d b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003e(val',state))-\u003e(Diff val-\u003estate-\u003e(Diff val',state))-\u003eISignal era val-\u003eISignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:monolithicFromSSignal",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era val -\u003e ISignal era (Monolithic val)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#monolithicFromSSignal",
        "fct-type": "function",
        "title": "monolithicFromSSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "monolithicFromSSignal",
        "normalized": "SSignal a b-\u003eISignal a(Monolithic b)",
        "package": "grapefruit-frp",
        "partial": "From SSignal",
        "signature": "SSignal era val-\u003eISignal era(Monolithic val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:monolithicToSSignal",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era (Monolithic val) -\u003e SSignal era val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#monolithicToSSignal",
        "fct-type": "function",
        "title": "monolithicToSSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "monolithicToSSignal",
        "normalized": "ISignal a(Monolithic b)-\u003eSSignal a b",
        "package": "grapefruit-frp",
        "partial": "To SSignal",
        "signature": "ISignal era(Monolithic val)-\u003eSSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:patch",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "val -\u003e Diff val -\u003e val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#patch",
        "fct-type": "method",
        "title": "patch"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "patch",
        "normalized": "a-\u003eDiff a-\u003ea",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "val-\u003eDiff val-\u003eval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:toSSignal",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era val -\u003e SSignal era val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#toSSignal",
        "fct-type": "function",
        "title": "toSSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "toSSignal",
        "normalized": "ISignal a b-\u003eSSignal a b",
        "package": "grapefruit-frp",
        "partial": "SSignal",
        "signature": "ISignal era val-\u003eSSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:updates",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era val -\u003e DSignal era (Diff val)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#updates",
        "fct-type": "function",
        "title": "updates"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "updates",
        "normalized": "ISignal a b-\u003eDSignal a(Diff b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "ISignal era val-\u003eDSignal era(Diff val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:validationInit",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "val -\u003e ValidationState val",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#validationInit",
        "fct-type": "method",
        "title": "validationInit"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "validationInit",
        "normalized": "a-\u003eValidationState a",
        "package": "grapefruit-frp",
        "partial": "Init",
        "signature": "val-\u003eValidationState val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:validationStep",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Diff val -\u003e ValidationState val -\u003e Maybe (ValidationState val)",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#validationStep",
        "fct-type": "method",
        "title": "validationStep"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "validationStep",
        "normalized": "Diff a-\u003eValidationState a-\u003eMaybe(ValidationState a)",
        "package": "grapefruit-frp",
        "partial": "Step",
        "signature": "Diff val-\u003eValidationState val-\u003eMaybe(ValidationState val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Incremental.html#v:withInit",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal.Incremental",
        "fct-package": "grapefruit-frp",
        "fct-signature": "ISignal era val -\u003e (val -\u003e signal era val') -\u003e signal era val'",
        "fct-source": "src/FRP-Grapefruit-Signal-Incremental.html#withInit",
        "fct-type": "function",
        "title": "withInit"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal Incremental",
        "module": "FRP.Grapefruit.Signal.Incremental",
        "name": "withInit",
        "normalized": "ISignal a b-\u003e(b-\u003ec a d)-\u003ec a d",
        "package": "grapefruit-frp",
        "partial": "Init",
        "signature": "ISignal era val-\u003e(val-\u003esignal era val')-\u003esignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is about segmented signals.\n\u003c/p\u003e\u003cp\u003eFor a general introduction to signals, see the documentation of \u003ca\u003eFRP.Grapefruit.Signal\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal-Segmented.html",
        "fct-type": "module",
        "title": "Segmented"
      },
      "index": {
        "description": "This module is about segmented signals For general introduction to signals see the documentation of FRP.Grapefruit.Signal",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "Segmented",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Segmented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#t:SSignal",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of segmented signals.\n\u003c/p\u003e\u003cp\u003eA segmented signal maps times to values like a continuous signal. However, it also comprises\n        a set of discrete times, called \u003cem\u003eupdate points\u003c/em\u003e. The signal can only change its value at its\n        update points. As a special case, the starting time of the era is always considered an\n        update point. So a segmented signal is composed of constant segments which are either\n        bounded by adjacent update points or left-bounded by a last update point and\n        right-unbounded. Note that value updates already take effect at the update point so that the\n        segments are left-closed.\n\u003c/p\u003e\u003cp\u003eIt follows that a segmented signal is completely determined by the update points and the\n        values assigned to them. Therefore, a segmented signal can also be seen as a kind of\n        discrete signal with occurences at the update points. The only difference to a discrete\n        signal is that a segmented signal always has an occurence at the starting time of the era\n        whereas a discrete signal never has one.\n\u003c/p\u003e\u003cp\u003eThe dual nature of segmented signals is reflected by the class instances of \u003ccode\u003eSSignal\u003c/code\u003e.\n        \u003ccode\u003eSSignal\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eSamplee\u003c/a\u003e\u003c/code\u003e as well as of \u003ccode\u003e\u003ca\u003eSampler\u003c/a\u003e\u003c/code\u003e. The first means that it can\n        be sampled and therefore has a continuous aspect. The second means that it can be used to\n        sample a signal and therefore has a discrete aspect.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Signal-Segmented.html#SSignal",
        "fct-type": "data",
        "title": "SSignal"
      },
      "index": {
        "description": "The type of segmented signals segmented signal maps times to values like continuous signal However it also comprises set of discrete times called update points The signal can only change its value at its update points As special case the starting time of the era is always considered an update point So segmented signal is composed of constant segments which are either bounded by adjacent update points or left-bounded by last update point and right-unbounded Note that value updates already take effect at the update point so that the segments are left-closed It follows that segmented signal is completely determined by the update points and the values assigned to them Therefore segmented signal can also be seen as kind of discrete signal with occurences at the update points The only difference to discrete signal is that segmented signal always has an occurence at the starting time of the era whereas discrete signal never has one The dual nature of segmented signals is reflected by the class instances of SSignal SSignal is an instance of Samplee as well as of Sampler The first means that it can be sampled and therefore has continuous aspect The second means that it can be used to sample signal and therefore has discrete aspect",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "SSignal",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "SSignal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:construct",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a segmented signal from an initial value and a series of updates.\n\u003c/p\u003e\u003cp\u003eA signal \u003ccode\u003econstruct \u003cem\u003einit\u003c/em\u003e \u003cem\u003eupd\u003c/em\u003e\u003c/code\u003e has initially the value \u003ccode\u003e\u003cem\u003einit\u003c/em\u003e\u003c/code\u003e. At each occurence in\n        \u003ccode\u003e\u003cem\u003eupd\u003c/em\u003e\u003c/code\u003e, it has an update point and changes its value to the value occuring in \u003ccode\u003e\u003cem\u003eupd\u003c/em\u003e\u003c/code\u003e. If\n        the segmented signal is interpreted as a kind of discrete signal, \u003ccode\u003efromInitAndUpdate\u003c/code\u003e just\n        adds an initial occurence of \u003ccode\u003e\u003cem\u003einit\u003c/em\u003e\u003c/code\u003e to the signal \u003ccode\u003e\u003cem\u003eupd\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "val -\u003e DSignal era val -\u003e SSignal era val",
        "fct-source": "src/Internal-Signal-Segmented.html#construct",
        "fct-type": "function",
        "title": "construct"
      },
      "index": {
        "description": "Constructs segmented signal from an initial value and series of updates signal construct init upd has initially the value init At each occurence in upd it has an update point and changes its value to the value occuring in upd If the segmented signal is interpreted as kind of discrete signal fromInitAndUpdate just adds an initial occurence of init to the signal upd",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "construct",
        "normalized": "a-\u003eDSignal b a-\u003eSSignal b a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "val-\u003eDSignal era val-\u003eSSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:consumer",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an event handler into a segmented signal consumer.\n\u003c/p\u003e\u003cp\u003eIf a segmented signal is consumed with such a consumer, the handler is called at the\n        starting time of the era and at each update with the current value of the signal as its\n        argument. If the segmented signal is seen as a discrete signal with an additional occurence\n        at the start then \u003ccode\u003econsumer\u003c/code\u003e behaves analogous to the \u003ccode\u003e\u003ca\u003econsumer\u003c/a\u003e\u003c/code\u003e function of\n        \u003ca\u003eFRP.Grapefruit.Signal.Discrete\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(val -\u003e IO ()) -\u003e Consumer SSignal val",
        "fct-source": "src/Internal-Signal-Segmented.html#consumer",
        "fct-type": "function",
        "title": "consumer"
      },
      "index": {
        "description": "Converts an event handler into segmented signal consumer If segmented signal is consumed with such consumer the handler is called at the starting time of the era and at each update with the current value of the signal as its argument If the segmented signal is seen as discrete signal with an additional occurence at the start then consumer behaves analogous to the consumer function of FRP.Grapefruit.Signal.Discrete",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "consumer",
        "normalized": "(a-\u003eIO())-\u003eConsumer SSignal a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "(val-\u003eIO())-\u003eConsumer SSignal val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:fromInitAndUpdate",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: fromInitAndUpdate is replaced by construct.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003econstruct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "val -\u003e DSignal era val -\u003e SSignal era val",
        "fct-source": "src/Internal-Signal-Segmented.html#fromInitAndUpdate",
        "fct-type": "function",
        "title": "fromInitAndUpdate"
      },
      "index": {
        "description": "Deprecated fromInitAndUpdate is replaced by construct Same as construct",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "fromInitAndUpdate",
        "normalized": "a-\u003eDSignal b a-\u003eSSignal b a",
        "package": "grapefruit-frp",
        "partial": "Init And Update",
        "signature": "val-\u003eDSignal era val-\u003eSSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:producer",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a value read action and a change event handler registration into a segmented signal\n        producer.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "IO val-\u003e (IO () -\u003e Setup)-\u003e Producer SSignal val",
        "fct-type": "function",
        "title": "producer"
      },
      "index": {
        "description": "Converts value read action and change event handler registration into segmented signal producer",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "producer",
        "normalized": "IO a-\u003e(IO()-\u003eSetup)-\u003eProducer SSignal a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "IO val-\u003e(IO()-\u003eSetup)-\u003eProducer SSignal val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulates the values of a discrete signal.\n\u003c/p\u003e\u003cp\u003eApplying \u003ccode\u003escan \u003cem\u003einit\u003c/em\u003e \u003cem\u003efun\u003c/em\u003e\u003c/code\u003e to a discrete signal replaces its occurence values \u003ccode\u003e\u003cem\u003eval_1\u003c/em\u003e\u003c/code\u003e,\n        \u003ccode\u003e\u003cem\u003eval_2\u003c/em\u003e\u003c/code\u003e and so on by the values \u003ccode\u003e\u003cem\u003einit\u003c/em\u003e `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_1\u003c/em\u003e\u003c/code\u003e, \u003ccode\u003e(\u003cem\u003einit\u003c/em\u003e\n        `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_1\u003c/em\u003e) `\u003cem\u003efun\u003c/em\u003e` \u003cem\u003eval_2\u003c/em\u003e\u003c/code\u003e and so on and adds an occurence of\n        the value \u003ccode\u003e\u003cem\u003einit\u003c/em\u003e\u003c/code\u003e at the beginning.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "accu -\u003e (accu -\u003e val -\u003e accu) -\u003e DSignal era val -\u003e SSignal era accu",
        "fct-source": "src/Internal-Signal-Segmented.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Accumulates the values of discrete signal Applying scan init fun to discrete signal replaces its occurence values val val and so on by the values init fun val init fun val fun val and so on and adds an occurence of the value init at the beginning",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "scan",
        "normalized": "a-\u003e(a-\u003eb-\u003ea)-\u003eDSignal c b-\u003eSSignal c a",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "accu-\u003e(accu-\u003eval-\u003eaccu)-\u003eDSignal era val-\u003eSSignal era accu"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:updates",
      "description": {
        "fct-descr": "\u003cp\u003eYields the sequence of updates of a segmented signal.\n\u003c/p\u003e\u003cp\u003eIf the segmented signal is interpreted as a discrete signal with an additional occurence at\n        the start then \u003ccode\u003eupdate\u003c/code\u003e just drops this occurence.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era val -\u003e DSignal era val",
        "fct-source": "src/Internal-Signal-Segmented.html#updates",
        "fct-type": "function",
        "title": "updates"
      },
      "index": {
        "description": "Yields the sequence of updates of segmented signal If the segmented signal is interpreted as discrete signal with an additional occurence at the start then update just drops this occurence",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "updates",
        "normalized": "SSignal a b-\u003eDSignal a b",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era val-\u003eDSignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal-Segmented.html#v:withInit",
      "description": {
        "fct-descr": "\u003cp\u003eApplies the second argument to the initial value of the first argument.\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003ewithInit\u003c/code\u003e, it is possible to create a signal which is dependent on the initial value\n        of a segmented signal but it is not possible to extract the initial value itself. The reason\n        for this restriction is that the initial value may depend on values of continuous signals\n        and therefore its calculation might involve doing I/O to read external continuous sources.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal.Segmented",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era val -\u003e (val -\u003e signal era val') -\u003e signal era val'",
        "fct-source": "src/Internal-Signal-Segmented.html#withInit",
        "fct-type": "function",
        "title": "withInit"
      },
      "index": {
        "description": "Applies the second argument to the initial value of the first argument Using withInit it is possible to create signal which is dependent on the initial value of segmented signal but it is not possible to extract the initial value itself The reason for this restriction is that the initial value may depend on values of continuous signals and therefore its calculation might involve doing to read external continuous sources",
        "hierarchy": "FRP Grapefruit Signal Segmented",
        "module": "FRP.Grapefruit.Signal.Segmented",
        "name": "withInit",
        "normalized": "SSignal a b-\u003e(b-\u003ec a d)-\u003ec a d",
        "package": "grapefruit-frp",
        "partial": "Init",
        "signature": "SSignal era val-\u003e(val-\u003esignal era val')-\u003esignal era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSignals are the key concept of Functional Reactive Programming. They describe behavior over\n    time. This module provides general support for signals. Individual kinds of signals are provided\n    by the submodules \u003ca\u003eFRP.Grapefruit.Signal.Disrete\u003c/a\u003e, \u003ca\u003eFRP.Grapefruit.Signal.Segmented\u003c/a\u003e and\n    \u003ca\u003eFRP.Grapefruit.Signal.Continuous\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA signal type has kind \u003ccode\u003e* -\u003e * -\u003e *\u003c/code\u003e. Its first parameter denotes the time interval in which the\n    signal is alive. This is called the \u003cem\u003eera\u003c/em\u003e of the signal. An era is left-closed (contains a\n    starting time) but right-open or right-unbounded (does not contain an ending time).\n\u003c/p\u003e\u003cp\u003eThe era type parameter is not intended to be instantiated with concrete types. Instead, it is\n    used to force equality of eras or independence of eras at compile time. Its use is very similar\n    to that of the first type parameter of \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e and the first parameter of \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "module",
        "fct-source": "src/FRP-Grapefruit-Signal.html",
        "fct-type": "module",
        "title": "Signal"
      },
      "index": {
        "description": "Signals are the key concept of Functional Reactive Programming They describe behavior over time This module provides general support for signals Individual kinds of signals are provided by the submodules FRP.Grapefruit.Signal.Disrete FRP.Grapefruit.Signal.Segmented and FRP.Grapefruit.Signal.Continuous signal type has kind Its first parameter denotes the time interval in which the signal is alive This is called the era of the signal An era is left-closed contains starting time but right-open or right-unbounded does not contain an ending time The era type parameter is not intended to be instantiated with concrete types Instead it is used to force equality of eras or independence of eras at compile time Its use is very similar to that of the first type parameter of ST and the first parameter of STRef",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e:-\u003e\u003c/code\u003e operator is used to form signal function shapes for \u003ccode\u003e\u003ca\u003eSignalFun\u003c/a\u003e\u003c/code\u003e. The shape\n        \u003ccode\u003e\u003cem\u003eargShape\u003c/em\u003e :-\u003e \u003cem\u003eresultShape\u003c/em\u003e\u003c/code\u003e stands for functions which map signals of shape \u003ccode\u003e\u003cem\u003eargShape\u003c/em\u003e\u003c/code\u003e\n        to signal functions of shape \u003ccode\u003e\u003cem\u003eresultShape\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Signal.html#%3A-%3E",
        "fct-type": "data",
        "title": ":-\u003e"
      },
      "index": {
        "description": "The operator is used to form signal function shapes for SignalFun The shape argShape resultShape stands for functions which map signals of shape argShape to signal functions of shape resultShape",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": ":-\u003e",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:Consumer",
      "description": {
        "fct-descr": "\u003cp\u003eA consumer says what to do with a given signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "newtype",
        "fct-source": "src/Internal-Signal.html#Consumer",
        "fct-type": "newtype",
        "title": "Consumer"
      },
      "index": {
        "description": "consumer says what to do with given signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Consumer",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:Of",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eOf\u003c/code\u003e is used to form signal shapes. Signal shapes are used as phantom types and denote a\n        signal type except its era parameter.\n\u003c/p\u003e\u003cp\u003eA signal shape \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e `Of` \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e stands for a signal of type \u003ccode\u003e\u003cem\u003esignal\u003c/em\u003e \u003cem\u003eera\u003c/em\u003e\n        \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e where the era parameter is provided by an external source. Signal shapes are used as\n        signal function shapes of nullary functions and as argument shapes for \u003ccode\u003e:-\u003e\u003c/code\u003e. In this case,\n        the era parameter is the era parameter of \u003ccode\u003e\u003ca\u003eSignalFun\u003c/a\u003e\u003c/code\u003e. Signal shapes are also used in\n        records as defined by the module \u003ccode\u003eFRP.Grapefruit.Record\u003c/code\u003e of package grapefruit-records.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Signal.html#Of",
        "fct-type": "data",
        "title": "Of"
      },
      "index": {
        "description": "Of is used to form signal shapes Signal shapes are used as phantom types and denote signal type except its era parameter signal shape signal Of val stands for signal of type signal era val where the era parameter is provided by an external source Signal shapes are used as signal function shapes of nullary functions and as argument shapes for In this case the era parameter is the era parameter of SignalFun Signal shapes are also used in records as defined by the module FRP.Grapefruit.Record of package grapefruit-records",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Of",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:PolySignalFun",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "newtype",
        "fct-source": "src/Internal-Signal.html#PolySignalFun",
        "fct-type": "newtype",
        "title": "PolySignalFun"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "PolySignalFun",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Poly Signal Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:Producer",
      "description": {
        "fct-descr": "\u003cp\u003eA producer says how to produce a certain signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "newtype",
        "fct-source": "src/Internal-Signal.html#Producer",
        "fct-type": "newtype",
        "title": "Producer"
      },
      "index": {
        "description": "producer says how to produce certain signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Producer",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:Samplee",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all signals which assign a value to each time of their era. Such signals can be\n        sampled by signals of class \u003ccode\u003e\u003ca\u003eSampler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "class",
        "fct-source": "src/Internal-Signal.html#Samplee",
        "fct-type": "class",
        "title": "Samplee"
      },
      "index": {
        "description": "The class of all signals which assign value to each time of their era Such signals can be sampled by signals of class Sampler",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Samplee",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Samplee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:Sampler",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all signals which can be seen as discrete sequences of values. Such signals can\n        be used to sample signals of class \u003ccode\u003e\u003ca\u003eSamplee\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "class",
        "fct-source": "src/Internal-Signal.html#Sampler",
        "fct-type": "class",
        "title": "Sampler"
      },
      "index": {
        "description": "The class of all signals which can be seen as discrete sequences of values Such signals can be used to sample signals of class Samplee",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Sampler",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Sampler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:Signal",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of all signal types.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "class",
        "fct-source": "src/Internal-Signal.html#Signal",
        "fct-type": "class",
        "title": "Signal"
      },
      "index": {
        "description": "The class of all signal types",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Signal",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#t:SignalFun",
      "description": {
        "fct-descr": "\u003cp\u003eA signal function is a function which maps a certain number of signals to one signal whereby\n        all argument signals and the result signal have the same era.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eera\u003c/code\u003e parameter of \u003ccode\u003eSignalFun\u003c/code\u003e denotes the era of all argument signals and the result\n        signal. The \u003ccode\u003eshape\u003c/code\u003e parameter is a phantom parameter which specifies the number of argument\n        signals as well as the types of the argument signals and the result signal without their era\n        parameters. It has the following form:\n\u003c/p\u003e\u003cpre\u003e\n        \u003cem\u003esignal_1\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_1\u003c/em\u003e :-\u003e ... :-\u003e \u003cem\u003esignal_n\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval_n\u003c/em\u003e :-\u003e \u003cem\u003esignal'\u003c/em\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval'\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThe data constructors \u003ccode\u003e\u003ca\u003eOSF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSSF\u003c/a\u003e\u003c/code\u003e construct signal functions of zero and non-zero arity,\n        respectively. (The \u003ccode\u003eO\u003c/code\u003e stands for &#8220;zero&#8221; and the \u003ccode\u003eS\u003c/code\u003e stands for\n        &#8220;successor&#8221;.) A signal function is typically formed by an expression like\n\u003c/p\u003e\u003cpre\u003e\n        \u003ccode\u003e\u003ca\u003eSSF\u003c/a\u003e\u003c/code\u003e $ \\\u003cem\u003esignal_1\u003c/em\u003e -\u003e\n        ...\n        \u003ccode\u003e\u003ca\u003eSSF\u003c/a\u003e\u003c/code\u003e $ \\\u003cem\u003esignal_n\u003c/em\u003e -\u003e\n        \u003ccode\u003e\u003ca\u003eOSF\u003c/a\u003e\u003c/code\u003e $ \u003cem\u003esignal'\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003e\u003cem\u003esignal'\u003c/em\u003e\u003c/code\u003e is an expression that might use \u003ccode\u003e\u003cem\u003esignal_1\u003c/em\u003e\u003c/code\u003e to \u003ccode\u003e\u003cem\u003esignal_n\u003c/em\u003e\u003c/code\u003e. Signal\n        functions are usually applied like this:\n\u003c/p\u003e\u003cpre\u003e\n        \u003ccode\u003e\u003ca\u003eunOSF\u003c/a\u003e\u003c/code\u003e $ \u003cem\u003esignalFun\u003c/em\u003e `\u003ccode\u003e\u003ca\u003esfApp\u003c/a\u003e\u003c/code\u003e` \u003cem\u003esignal_1\u003c/em\u003e `\u003ccode\u003e\u003ca\u003esfApp\u003c/a\u003e\u003c/code\u003e` ... `\u003ccode\u003e\u003ca\u003esfApp\u003c/a\u003e\u003c/code\u003e` \u003cem\u003esignal_n\u003c/em\u003e\n\u003c/pre\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "data",
        "fct-source": "src/Internal-Signal.html#SignalFun",
        "fct-type": "data",
        "title": "SignalFun"
      },
      "index": {
        "description": "signal function is function which maps certain number of signals to one signal whereby all argument signals and the result signal have the same era The era parameter of SignalFun denotes the era of all argument signals and the result signal The shape parameter is phantom parameter which specifies the number of argument signals as well as the types of the argument signals and the result signal without their era parameters It has the following form signal Of val signal Of val signal Of val The data constructors OSF and SSF construct signal functions of zero and non-zero arity respectively The stands for zero and the stands for successor signal function is typically formed by an expression like SSF signal SSF signal OSF signal where signal is an expression that might use signal to signal Signal functions are usually applied like this unOSF signalFun sfApp signal sfApp sfApp signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "SignalFun",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Signal Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:-35--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSampling of signals where the values of the sampler are ignored.\n\u003c/p\u003e\u003cp\u003eThe following equation holds:\n\u003c/p\u003e\u003cpre\u003e\n        \u003cem\u003esampler\u003c/em\u003e #\u003e \u003cem\u003esamplee\u003c/em\u003e = id \u003ccode\u003e\u003ca\u003e\u003c$\u003c/a\u003e\u003c/code\u003e \u003cem\u003esampler\u003c/em\u003e \u003ccode\u003e\u003ca\u003e\u003c#\u003e\u003c/a\u003e\u003c/code\u003e \u003cem\u003esamplee\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThis function has similarities with \u003ccode\u003e\u003ca\u003e*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "sampler era dummy -\u003e samplee era val -\u003e sampler era val",
        "fct-source": "src/Internal-Signal.html#%23%3E",
        "fct-type": "function",
        "title": "(#\u003e)"
      },
      "index": {
        "description": "Sampling of signals where the values of the sampler are ignored The following equation holds sampler samplee id sampler samplee This function has similarities with",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "(#\u003e) #\u003e",
        "normalized": "a b c-\u003ed b e-\u003ea b e",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "sampler era dummy-\u003esamplee era val-\u003esampler era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:-60--35-",
      "description": {
        "fct-descr": "\u003cp\u003eSampling of signals where the values of the samplee are ignored.\n\u003c/p\u003e\u003cp\u003eThe following equation holds:\n\u003c/p\u003e\u003cpre\u003e\n        \u003cem\u003esampler\u003c/em\u003e \u003c# \u003cem\u003esamplee\u003c/em\u003e = const \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003cem\u003esampler\u003c/em\u003e \u003ccode\u003e\u003ca\u003e\u003c#\u003e\u003c/a\u003e\u003c/code\u003e \u003cem\u003esamplee\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003eThis function has similarities with \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "sampler era val -\u003e samplee era dummy -\u003e sampler era val",
        "fct-source": "src/Internal-Signal.html#%3C%23",
        "fct-type": "function",
        "title": "(\u003c#)"
      },
      "index": {
        "description": "Sampling of signals where the values of the samplee are ignored The following equation holds sampler samplee const sampler samplee This function has similarities with",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "(\u003c#) \u003c#",
        "normalized": "a b c-\u003ed b e-\u003ea b c",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "sampler era val-\u003esamplee era dummy-\u003esampler era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:-60--35--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSampling of signals.\n\u003c/p\u003e\u003cp\u003eA signal \u003ccode\u003e\u003cem\u003esampler\u003c/em\u003e \u003c#\u003e \u003cem\u003esamplee\u003c/em\u003e\u003c/code\u003e has a value at each time where \u003ccode\u003e\u003cem\u003esampler\u003c/em\u003e\u003c/code\u003e has a\n        value. The value of \u003ccode\u003e\u003cem\u003esampler\u003c/em\u003e \u003c#\u003e \u003cem\u003esamplee\u003c/em\u003e\u003c/code\u003e is formed by applying the value of\n        \u003ccode\u003e\u003cem\u003esampler\u003c/em\u003e\u003c/code\u003e to the value, \u003ccode\u003e\u003cem\u003esamplee\u003c/em\u003e\u003c/code\u003e has at this time.\n\u003c/p\u003e\u003cp\u003eThis function has similarities with \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "sampler era (val -\u003e val') -\u003e samplee era val -\u003e sampler era val'",
        "fct-source": "src/Internal-Signal.html#%3C%23%3E",
        "fct-type": "function",
        "title": "(\u003c#\u003e)"
      },
      "index": {
        "description": "Sampling of signals signal sampler samplee has value at each time where sampler has value The value of sampler samplee is formed by applying the value of sampler to the value samplee has at this time This function has similarities with",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "(\u003c#\u003e) \u003c#\u003e",
        "normalized": "a b(c-\u003ed)-\u003ee b c-\u003ea b d",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "sampler era(val-\u003eval')-\u003esamplee era val-\u003esampler era val'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:Consumer",
      "description": {
        "fct-descr": "\u003cp\u003eA consumer, represented by a circuit that consumes a signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Consumer (forall era.  Circuit era (signal era val) ())",
        "fct-source": "src/Internal-Signal.html#Consumer",
        "fct-type": "function",
        "title": "Consumer"
      },
      "index": {
        "description": "consumer represented by circuit that consumes signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Consumer",
        "normalized": "Consumer(a b Circuit c(d c e)())",
        "package": "grapefruit-frp",
        "partial": "Consumer",
        "signature": "Consumer(forall era. Circuit era(signal era val)())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:OSF",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "signal era val -\u003e SignalFun era (signal `Of` val)",
        "fct-source": "src/Internal-Signal.html#SignalFun",
        "fct-type": "function",
        "title": "OSF"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "OSF",
        "normalized": "a b c-\u003eSignalFun b(a Of c)",
        "package": "grapefruit-frp",
        "partial": "OSF",
        "signature": "signal era val-\u003eSignalFun era(signal Of val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:PolySignalFun",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "PolySignalFun (forall era.  SignalFun era shape)",
        "fct-source": "src/Internal-Signal.html#PolySignalFun",
        "fct-type": "function",
        "title": "PolySignalFun"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "PolySignalFun",
        "normalized": "",
        "package": "grapefruit-frp",
        "partial": "Poly Signal Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:Producer",
      "description": {
        "fct-descr": "\u003cp\u003eA producer, represented by a circuit that produces a signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Producer (forall era.  Circuit era () (signal era val))",
        "fct-source": "src/Internal-Signal.html#Producer",
        "fct-type": "function",
        "title": "Producer"
      },
      "index": {
        "description": "producer represented by circuit that produces signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "Producer",
        "normalized": "Producer(a b Circuit c()(d c e))",
        "package": "grapefruit-frp",
        "partial": "Producer",
        "signature": "Producer(forall era. Circuit era()(signal era val))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:SSF",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "(signal era val -\u003e SignalFun era shape) -\u003e SignalFun era ((signal `Of` val) :-\u003e shape)",
        "fct-source": "src/Internal-Signal.html#SignalFun",
        "fct-type": "function",
        "title": "SSF"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "SSF",
        "normalized": "(a b c-\u003eSignalFun b d)-\u003eSignalFun b((a Of c)-\u003ed)",
        "package": "grapefruit-frp",
        "partial": "SSF",
        "signature": "(signal era val-\u003eSignalFun era shape)-\u003eSignalFun era((signal Of val)-\u003eshape)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eYields a circuit which consumes a signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Consumer signal val -\u003e Circuit era (signal era val) ()",
        "fct-source": "src/Internal-Signal.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Yields circuit which consumes signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "consume",
        "normalized": "Consumer a b-\u003eCircuit c(a c b)()",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Consumer signal val-\u003eCircuit era(signal era val)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:polySwitch",
      "description": {
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era (PolySignalFun shape) -\u003e SignalFun era shape",
        "fct-source": "src/Internal-Signal.html#polySwitch",
        "fct-type": "function",
        "title": "polySwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "polySwitch",
        "normalized": "SSignal a(PolySignalFun b)-\u003eSignalFun a b",
        "package": "grapefruit-frp",
        "partial": "Switch",
        "signature": "SSignal era(PolySignalFun shape)-\u003eSignalFun era shape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:produce",
      "description": {
        "fct-descr": "\u003cp\u003eYields a circuit which produces a signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "Producer signal val -\u003e Circuit era () (signal era val)",
        "fct-source": "src/Internal-Signal.html#produce",
        "fct-type": "function",
        "title": "produce"
      },
      "index": {
        "description": "Yields circuit which produces signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "produce",
        "normalized": "Producer a b-\u003eCircuit c()(a c b)",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "Producer signal val-\u003eCircuit era()(signal era val)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:sfApp",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a signal function to a signal.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esfApp\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eunSSF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SignalFun era ((signal `Of` val) :-\u003e shape) -\u003e signal era val -\u003e SignalFun era shape",
        "fct-source": "src/Internal-Signal.html#sfApp",
        "fct-type": "function",
        "title": "sfApp"
      },
      "index": {
        "description": "Applies signal function to signal sfApp is equivalent to unSSF",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "sfApp",
        "normalized": "SignalFun a((b Of c)-\u003ed)-\u003eb a c-\u003eSignalFun a d",
        "package": "grapefruit-frp",
        "partial": "App",
        "signature": "SignalFun era((signal Of val)-\u003eshape)-\u003esignal era val-\u003eSignalFun era shape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eThis function generates a signal whose behavior switches between that of different other\n        signals over time.\n\u003c/p\u003e\u003cp\u003eSince the result type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSignalFun\u003c/a\u003e\u003c/code\u003e era shape\u003c/code\u003e is isomorphic to an n-ary function type, we\n        can see \u003ccode\u003eswitch\u003c/code\u003e as a function which takes a first argument, called the function signal,\n        and \u003cem\u003en\u003c/em\u003e further arguments, called the argument signals, and yields a signal, called the\n        result signal.\n\u003c/p\u003e\u003cp\u003eThe result signal is composed of different sections. There is one section for each segment\n        of the function signal. Such a section is formed as follows: For each argument signal, the\n        part which corresponds to the time intervall of the functions signal&#8217;s segment is cut\n        out of the argument signal. The value of the function signal is applied to the resulting \u003cem\u003en\u003c/em\u003e\n        signal parts. The result of this application is the desired section of the result signal.\n\u003c/p\u003e\u003cp\u003eThe signal functions which are applied to the parts of the argument signals use an\n        universally quantified era parameter. This ensures that the results of these functions do\n        not depend on signals from the outside but only on the parts of the argument signals. This\n        is important since operations on signals require that their argument and result signals are\n        of the same era. The usage of universial quantification in the type of \u003ccode\u003eswitch\u003c/code\u003e\n        corresponds to the usage of rank 2 polymorphism in the type of \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SSignal era (forall era'.  SignalFun era' shape) -\u003e SignalFun era shape",
        "fct-source": "src/Internal-Signal.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "This function generates signal whose behavior switches between that of different other signals over time Since the result type SignalFun era shape is isomorphic to an n-ary function type we can see switch as function which takes first argument called the function signal and further arguments called the argument signals and yields signal called the result signal The result signal is composed of different sections There is one section for each segment of the function signal Such section is formed as follows For each argument signal the part which corresponds to the time intervall of the functions signal segment is cut out of the argument signal The value of the function signal is applied to the resulting signal parts The result of this application is the desired section of the result signal The signal functions which are applied to the parts of the argument signals use an universally quantified era parameter This ensures that the results of these functions do not depend on signals from the outside but only on the parts of the argument signals This is important since operations on signals require that their argument and result signals are of the same era The usage of universial quantification in the type of switch corresponds to the usage of rank polymorphism in the type of runST",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "switch",
        "normalized": "SSignal a(b c SignalFun d e)-\u003eSignalFun a e",
        "package": "grapefruit-frp",
        "partial": "",
        "signature": "SSignal era(forall era'. SignalFun era' shape)-\u003eSignalFun era shape"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:unOSF",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a nullary signal function into its corresponding signal.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SignalFun era (signal `Of` val) -\u003e signal era val",
        "fct-source": "src/Internal-Signal.html#unOSF",
        "fct-type": "function",
        "title": "unOSF"
      },
      "index": {
        "description": "Converts nullary signal function into its corresponding signal",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "unOSF",
        "normalized": "SignalFun a(b Of c)-\u003eb a c",
        "package": "grapefruit-frp",
        "partial": "OSF",
        "signature": "SignalFun era(signal Of val)-\u003esignal era val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grapefruit-frp/docs/FRP-Grapefruit-Signal.html#v:unSSF",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a signal function of non-zero arity into a true function.\n\u003c/p\u003e",
        "fct-module": "FRP.Grapefruit.Signal",
        "fct-package": "grapefruit-frp",
        "fct-signature": "SignalFun era ((signal `Of` val) :-\u003e shape) -\u003e signal era val -\u003e SignalFun era shape",
        "fct-source": "src/Internal-Signal.html#unSSF",
        "fct-type": "function",
        "title": "unSSF"
      },
      "index": {
        "description": "Converts signal function of non-zero arity into true function",
        "hierarchy": "FRP Grapefruit Signal",
        "module": "FRP.Grapefruit.Signal",
        "name": "unSSF",
        "normalized": "SignalFun a((b Of c)-\u003ed)-\u003eb a c-\u003eSignalFun a d",
        "package": "grapefruit-frp",
        "partial": "SSF",
        "signature": "SignalFun era((signal Of val)-\u003eshape)-\u003esignal era val-\u003eSignalFun era shape"
      }
    }
  }
]