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
        "word": "quantum-arrow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "QuantumArrow.Quantum",
          "name": "Quantum",
          "package": "quantum-arrow",
          "source": "src/QuantumArrow-Quantum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "Quantum",
          "package": "quantum-arrow",
          "partial": "Quantum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a probability amplitude\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "Amp",
          "package": "quantum-arrow",
          "source": "src/QuantumArrow-Quantum.html#Amp",
          "type": "type"
        },
        "index": {
          "description": "Representation of probability amplitude",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "Amp",
          "package": "quantum-arrow",
          "partial": "Amp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#t:Amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Quantum arrow represents a quantum computation with observation.\n You can give a quantum computation a superposition of values, and\n it will operate over them, returning you a superposition back.  If\n ever you observe (using the qLift or qLift_ functions), the system\n collapses to an eigenstate of what you observed.\n\u003c/p\u003e\u003cpre\u003e x \u003c- entangle -\u003c [(1, 1 :+ 0), (2, 1 :+ 0)]\n -- x is in state |1\u003e + |2\u003e; i.e. 1 or 2 with equal probability\n let y = x + 1\n -- y is in state |2\u003e + |3\u003e\n qLift print -\u003c y    -- will print either 2 or 3; let's say it printed 2\n -- state collapses here, y in state |2\u003e\n qLift print -\u003c x    -- prints 1 (assuming 2 was printed earlier)\n\u003c/pre\u003e\u003cp\u003eSo the variables become entangled with each other in order to\n maintain consistency of the computation. \n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "Quantum",
          "package": "quantum-arrow",
          "source": "src/QuantumArrow-Quantum.html#Quantum",
          "type": "data"
        },
        "index": {
          "description": "The Quantum arrow represents quantum computation with observation You can give quantum computation superposition of values and it will operate over them returning you superposition back If ever you observe using the qLift or qLift functions the system collapses to an eigenstate of what you observed entangle is in state i.e or with equal probability let is in state qLift print will print either or let say it printed state collapses here in state qLift print prints assuming was printed earlier So the variables become entangled with each other in order to maintain consistency of the computation",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "Quantum",
          "package": "quantum-arrow",
          "partial": "Quantum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#t:Quantum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eentangle takes as input a list of values and probability \n amplitudes and gives as output a superposition of the inputs.\n For example:\n\u003c/p\u003e\u003cpre\u003e x \u003c- entangle -\u003c [(1, 1 :+ 0), (2, 0 :+ 1)]\n -- x is now |1\u003e + i|2\u003e\n qLift print -\u003c x    -- prints 1 or 2 with equal probability\n\u003c/pre\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "entangle",
          "package": "quantum-arrow",
          "signature": "Quantum m [(a, Amp)] a",
          "source": "src/QuantumArrow-Quantum.html#entangle",
          "type": "function"
        },
        "index": {
          "description": "entangle takes as input list of values and probability amplitudes and gives as output superposition of the inputs For example entangle is now qLift print prints or with equal probability",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "entangle",
          "normalized": "Quantum a[(b,Amp)]b",
          "package": "quantum-arrow",
          "signature": "Quantum m[(a,Amp)]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:entangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexecQuantum q x\u003c/code\u003e passes the state |x\u003e through q, collapses q's\n output to an eigenstate, and returns it.\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "execQuantum",
          "package": "quantum-arrow",
          "signature": "Quantum m a b -\u003e a -\u003e m b",
          "source": "src/QuantumArrow-Quantum.html#execQuantum",
          "type": "function"
        },
        "index": {
          "description": "execQuantum passes the state through collapses output to an eigenstate and returns it",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "execQuantum",
          "normalized": "Quantum a b c-\u003eb-\u003ea c",
          "package": "quantum-arrow",
          "partial": "Quantum",
          "signature": "Quantum m a b-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:execQuantum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eobserve is just observeWith on equality.\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "observe",
          "package": "quantum-arrow",
          "signature": "Quantum m a a",
          "source": "src/QuantumArrow-Quantum.html#observe",
          "type": "function"
        },
        "index": {
          "description": "observe is just observeWith on equality",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "observe",
          "package": "quantum-arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eobserveWith f\u003c/code\u003e takes an equivalence relation f, breaks the state\n space into eigenstates of that relation, and collapses to one.  \n For example:\n\u003c/p\u003e\u003cpre\u003e x \u003c- entangle -\u003c map (\\s -\u003e (s,1 :+ 0)) [1..20]\n observeWith (\\x y -\u003e x `mod` 2 == y `mod` 2)\n\u003c/pre\u003e\u003cp\u003eWill collapse \u003ccode\u003ex\u003c/code\u003e to be either even or odd, but make no finer\n decisions than that.\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "observeWith",
          "package": "quantum-arrow",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Quantum m a a",
          "source": "src/QuantumArrow-Quantum.html#observeWith",
          "type": "function"
        },
        "index": {
          "description": "observeWith takes an equivalence relation breaks the state space into eigenstates of that relation and collapses to one For example entangle map observeWith mod mod Will collapse to be either even or odd but make no finer decisions than that",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "observeWith",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eQuantum b a a",
          "package": "quantum-arrow",
          "partial": "With",
          "signature": "(a-\u003ea-\u003eBool)-\u003eQuantum m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:observeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eqLift f -\u003c x\u003c/code\u003e first collapses \u003ccode\u003ex\u003c/code\u003e to an eigenstate (using observe) then\n executes \u003ccode\u003ef x\u003c/code\u003e in the underlying monad.  All conditionals up to this point are \n collapsed to an eigenstate (True or False) so a \u003ca\u003ecurrent branch\u003c/a\u003e of \n the computation is selected.\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "qLift",
          "package": "quantum-arrow",
          "signature": "(a -\u003e m b) -\u003e Quantum m a b",
          "source": "src/QuantumArrow-Quantum.html#qLift",
          "type": "function"
        },
        "index": {
          "description": "qLift first collapses to an eigenstate using observe then executes in the underlying monad All conditionals up to this point are collapsed to an eigenstate True or False so current branch of the computation is selected",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "qLift",
          "normalized": "(a-\u003eb c)-\u003eQuantum b a c",
          "package": "quantum-arrow",
          "partial": "Lift",
          "signature": "(a-\u003em b)-\u003eQuantum m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:qLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eqLift_ is just qIO which doesn't take an input.  eg.\n\u003c/p\u003e\u003cpre\u003e qLift_ $ print \"hello world\" -\u003c ()\n\u003c/pre\u003e\u003cp\u003eAll conditionals up to this point are collapsed to an eigenstate \n (True or False) so a \u003ca\u003ecurrent branch\u003c/a\u003e of the computation is selected.\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "qLift_",
          "package": "quantum-arrow",
          "signature": "m b -\u003e Quantum m () b",
          "source": "src/QuantumArrow-Quantum.html#qLift_",
          "type": "function"
        },
        "index": {
          "description": "qLift is just qIO which doesn take an input eg qLift print hello world All conditionals up to this point are collapsed to an eigenstate True or False so current branch of the computation is selected",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "qLift_",
          "normalized": "a b-\u003eQuantum a()b",
          "package": "quantum-arrow",
          "partial": "Lift",
          "signature": "m b-\u003eQuantum m()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:qLift_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erunQuantum takes an input state vector, runs it through the given\n Quantum arrow, and returns a state vector of outputs.\n\u003c/p\u003e",
          "module": "QuantumArrow.Quantum",
          "name": "runQuantum",
          "package": "quantum-arrow",
          "signature": "Quantum m a b -\u003e [(a, Amp)] -\u003e m [(b, Amp)]",
          "source": "src/QuantumArrow-Quantum.html#runQuantum",
          "type": "function"
        },
        "index": {
          "description": "runQuantum takes an input state vector runs it through the given Quantum arrow and returns state vector of outputs",
          "hierarchy": "QuantumArrow Quantum",
          "module": "QuantumArrow.Quantum",
          "name": "runQuantum",
          "normalized": "Quantum a b c-\u003e[(b,Amp)]-\u003ea[(c,Amp)]",
          "package": "quantum-arrow",
          "partial": "Quantum",
          "signature": "Quantum m a b-\u003e[(a,Amp)]-\u003em[(b,Amp)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quantum-arrow/docs/QuantumArrow-Quantum.html#v:runQuantum"
      }
    }
  ]
]