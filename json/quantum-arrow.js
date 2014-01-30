[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#",
      "description": {
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "module",
        "fct-source": "src/QuantumArrow-Quantum.html",
        "fct-type": "module",
        "title": "Quantum"
      },
      "index": {
        "description": "",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "Quantum",
        "normalized": "",
        "package": "quantum-arrow",
        "partial": "Quantum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#t:Amp",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation of a probability amplitude\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "type",
        "fct-source": "src/QuantumArrow-Quantum.html#Amp",
        "fct-type": "type",
        "title": "Amp"
      },
      "index": {
        "description": "Representation of probability amplitude",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "Amp",
        "normalized": "",
        "package": "quantum-arrow",
        "partial": "Amp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#t:Quantum",
      "description": {
        "fct-descr": "\u003cp\u003eThe Quantum arrow represents a quantum computation with observation.\n You can give a quantum computation a superposition of values, and\n it will operate over them, returning you a superposition back.  If\n ever you observe (using the qLift or qLift_ functions), the system\n collapses to an eigenstate of what you observed.\n\u003c/p\u003e\u003cpre\u003e x \u003c- entangle -\u003c [(1, 1 :+ 0), (2, 1 :+ 0)]\n -- x is in state |1\u003e + |2\u003e; i.e. 1 or 2 with equal probability\n let y = x + 1\n -- y is in state |2\u003e + |3\u003e\n qLift print -\u003c y    -- will print either 2 or 3; let's say it printed 2\n -- state collapses here, y in state |2\u003e\n qLift print -\u003c x    -- prints 1 (assuming 2 was printed earlier)\n\u003c/pre\u003e\u003cp\u003eSo the variables become entangled with each other in order to\n maintain consistency of the computation. \n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "data",
        "fct-source": "src/QuantumArrow-Quantum.html#Quantum",
        "fct-type": "data",
        "title": "Quantum"
      },
      "index": {
        "description": "The Quantum arrow represents quantum computation with observation You can give quantum computation superposition of values and it will operate over them returning you superposition back If ever you observe using the qLift or qLift functions the system collapses to an eigenstate of what you observed entangle is in state i.e or with equal probability let is in state qLift print will print either or let say it printed state collapses here in state qLift print prints assuming was printed earlier So the variables become entangled with each other in order to maintain consistency of the computation",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "Quantum",
        "normalized": "",
        "package": "quantum-arrow",
        "partial": "Quantum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:entangle",
      "description": {
        "fct-descr": "\u003cp\u003eentangle takes as input a list of values and probability \n amplitudes and gives as output a superposition of the inputs.\n For example:\n\u003c/p\u003e\u003cpre\u003e x \u003c- entangle -\u003c [(1, 1 :+ 0), (2, 0 :+ 1)]\n -- x is now |1\u003e + i|2\u003e\n qLift print -\u003c x    -- prints 1 or 2 with equal probability\n\u003c/pre\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "Quantum m [(a, Amp)] a",
        "fct-source": "src/QuantumArrow-Quantum.html#entangle",
        "fct-type": "function",
        "title": "entangle"
      },
      "index": {
        "description": "entangle takes as input list of values and probability amplitudes and gives as output superposition of the inputs For example entangle is now qLift print prints or with equal probability",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "entangle",
        "normalized": "Quantum a[(b,Amp)]b",
        "package": "quantum-arrow",
        "partial": "",
        "signature": "Quantum m[(a,Amp)]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:execQuantum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eexecQuantum q x\u003c/code\u003e passes the state |x\u003e through q, collapses q's\n output to an eigenstate, and returns it.\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "Quantum m a b -\u003e a -\u003e m b",
        "fct-source": "src/QuantumArrow-Quantum.html#execQuantum",
        "fct-type": "function",
        "title": "execQuantum"
      },
      "index": {
        "description": "execQuantum passes the state through collapses output to an eigenstate and returns it",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "execQuantum",
        "normalized": "Quantum a b c-\u003eb-\u003ea c",
        "package": "quantum-arrow",
        "partial": "Quantum",
        "signature": "Quantum m a b-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:observe",
      "description": {
        "fct-descr": "\u003cp\u003eobserve is just observeWith on equality.\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "Quantum m a a",
        "fct-source": "src/QuantumArrow-Quantum.html#observe",
        "fct-type": "function",
        "title": "observe"
      },
      "index": {
        "description": "observe is just observeWith on equality",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "observe",
        "normalized": "",
        "package": "quantum-arrow",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:observeWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eobserveWith f\u003c/code\u003e takes an equivalence relation f, breaks the state\n space into eigenstates of that relation, and collapses to one.  \n For example:\n\u003c/p\u003e\u003cpre\u003e x \u003c- entangle -\u003c map (\\s -\u003e (s,1 :+ 0)) [1..20]\n observeWith (\\x y -\u003e x `mod` 2 == y `mod` 2)\n\u003c/pre\u003e\u003cp\u003eWill collapse \u003ccode\u003ex\u003c/code\u003e to be either even or odd, but make no finer\n decisions than that.\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e Quantum m a a",
        "fct-source": "src/QuantumArrow-Quantum.html#observeWith",
        "fct-type": "function",
        "title": "observeWith"
      },
      "index": {
        "description": "observeWith takes an equivalence relation breaks the state space into eigenstates of that relation and collapses to one For example entangle map observeWith mod mod Will collapse to be either even or odd but make no finer decisions than that",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "observeWith",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eQuantum b a a",
        "package": "quantum-arrow",
        "partial": "With",
        "signature": "(a-\u003ea-\u003eBool)-\u003eQuantum m a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:qLift",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eqLift f -\u003c x\u003c/code\u003e first collapses \u003ccode\u003ex\u003c/code\u003e to an eigenstate (using observe) then\n executes \u003ccode\u003ef x\u003c/code\u003e in the underlying monad.  All conditionals up to this point are \n collapsed to an eigenstate (True or False) so a \u003ca\u003ecurrent branch\u003c/a\u003e of \n the computation is selected.\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "(a -\u003e m b) -\u003e Quantum m a b",
        "fct-source": "src/QuantumArrow-Quantum.html#qLift",
        "fct-type": "function",
        "title": "qLift"
      },
      "index": {
        "description": "qLift first collapses to an eigenstate using observe then executes in the underlying monad All conditionals up to this point are collapsed to an eigenstate True or False so current branch of the computation is selected",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "qLift",
        "normalized": "(a-\u003eb c)-\u003eQuantum b a c",
        "package": "quantum-arrow",
        "partial": "Lift",
        "signature": "(a-\u003em b)-\u003eQuantum m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:qLift_",
      "description": {
        "fct-descr": "\u003cp\u003eqLift_ is just qIO which doesn't take an input.  eg.\n\u003c/p\u003e\u003cpre\u003e qLift_ $ print \"hello world\" -\u003c ()\n\u003c/pre\u003e\u003cp\u003eAll conditionals up to this point are collapsed to an eigenstate \n (True or False) so a \u003ca\u003ecurrent branch\u003c/a\u003e of the computation is selected.\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "m b -\u003e Quantum m () b",
        "fct-source": "src/QuantumArrow-Quantum.html#qLift_",
        "fct-type": "function",
        "title": "qLift_"
      },
      "index": {
        "description": "qLift is just qIO which doesn take an input eg qLift print hello world All conditionals up to this point are collapsed to an eigenstate True or False so current branch of the computation is selected",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "qLift_",
        "normalized": "a b-\u003eQuantum a()b",
        "package": "quantum-arrow",
        "partial": "Lift",
        "signature": "m b-\u003eQuantum m()b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:runQuantum",
      "description": {
        "fct-descr": "\u003cp\u003erunQuantum takes an input state vector, runs it through the given\n Quantum arrow, and returns a state vector of outputs.\n\u003c/p\u003e",
        "fct-module": "QuantumArrow.Quantum",
        "fct-package": "quantum-arrow",
        "fct-signature": "Quantum m a b -\u003e [(a, Amp)] -\u003e m [(b, Amp)]",
        "fct-source": "src/QuantumArrow-Quantum.html#runQuantum",
        "fct-type": "function",
        "title": "runQuantum"
      },
      "index": {
        "description": "runQuantum takes an input state vector runs it through the given Quantum arrow and returns state vector of outputs",
        "hierarchy": "QuantumArrow Quantum",
        "module": "QuantumArrow.Quantum",
        "name": "runQuantum",
        "normalized": "Quantum a b c-\u003e[(b,Amp)]-\u003ea[(c,Amp)]",
        "package": "quantum-arrow",
        "partial": "Quantum",
        "signature": "Quantum m a b-\u003e[(a,Amp)]-\u003em[(b,Amp)]"
      }
    }
  }
]