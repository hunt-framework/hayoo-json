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
        "word": "operational"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational",
          "name": "Operational",
          "package": "operational",
          "source": "src/Control-Monad-Operational.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "Operational",
          "package": "operational",
          "partial": "Operational",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e instr a\u003c/code\u003e represents programs,\n    i.e. sequences of primitive instructions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003cem\u003eprimitive instructions\u003c/em\u003e are given by the type constructor \u003ccode\u003einstr :: * -\u003e *\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e is the return type of a program.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e instr\u003c/code\u003e is always a monad and\n    automatically obeys the monad laws.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "Program",
          "package": "operational",
          "source": "src/Control-Monad-Operational.html#Program",
          "type": "type"
        },
        "index": {
          "description": "The abstract data type Program instr represents programs i.e sequences of primitive instructions The primitive instructions are given by the type constructor instr is the return type of program Program instr is always monad and automatically obeys the monad laws",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "Program",
          "package": "operational",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr m a\u003c/code\u003e represents programs\n    over a base monad \u003ccode\u003em\u003c/code\u003e,\n    i.e. sequences of primitive instructions and actions from the base monad.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003cem\u003eprimitive instructions\u003c/em\u003e are given by the type constructor \u003ccode\u003einstr :: * -\u003e *\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e is the base monad, embedded with \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e is the return type of a program.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr m\u003c/code\u003e is a monad transformer and\n    automatically obeys both the monad and the lifting laws.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "ProgramT",
          "package": "operational",
          "source": "src/Control-Monad-Operational.html#ProgramT",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type ProgramT instr represents programs over base monad i.e sequences of primitive instructions and actions from the base monad The primitive instructions are given by the type constructor instr is the base monad embedded with lift is the return type of program ProgramT instr is monad transformer and automatically obeys both the monad and the lifting laws",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "ProgramT",
          "package": "operational",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:ProgramT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView type for inspecting the first instruction.\n   It has two constructors \u003ccode\u003e\u003ca\u003eReturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e:\u003e\u003e=\u003c/code\u003e.\n   (For technical reasons, they are documented at \u003ccode\u003e\u003ca\u003eProgramViewT\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "ProgramView",
          "package": "operational",
          "source": "src/Control-Monad-Operational.html#ProgramView",
          "type": "type"
        },
        "index": {
          "description": "View type for inspecting the first instruction It has two constructors Return and For technical reasons they are documented at ProgramViewT",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "ProgramView",
          "package": "operational",
          "partial": "Program View",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:ProgramView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView type for inspecting the first instruction.\n This is very similar to pattern matching on lists.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The case \u003ccode\u003e(Return a)\u003c/code\u003e means that the program contains no instructions\n and just returns the result \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003eThe case \u003ccode\u003e(someInstruction :\u003e\u003e= k)\u003c/code\u003e means that the first instruction\n is \u003ccode\u003esomeInstruction\u003c/code\u003e and the remaining program is given by the function \u003ccode\u003ek\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Monad.Operational",
          "name": "ProgramViewT",
          "package": "operational",
          "source": "src/Control-Monad-Operational.html#ProgramViewT",
          "type": "data"
        },
        "index": {
          "description": "View type for inspecting the first instruction This is very similar to pattern matching on lists The case Return means that the program contains no instructions and just returns the result The case someInstruction means that the first instruction is someInstruction and the remaining program is given by the function",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "ProgramViewT",
          "package": "operational",
          "partial": "Program View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:ProgramViewT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational",
          "name": ":\u003e\u003e=",
          "package": "operational",
          "signature": "instr b -\u003e (b -\u003e ProgramT instr m a) -\u003e ProgramViewT instr m a",
          "source": "src/Control-Monad-Operational.html#ProgramViewT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": ":\u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003eProgramT a c d)-\u003eProgramViewT a c d",
          "package": "operational",
          "signature": "instr b-\u003e(b-\u003eProgramT instr m a)-\u003eProgramViewT instr m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v::-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational",
          "name": "Return",
          "package": "operational",
          "signature": "a -\u003e ProgramViewT instr m a",
          "source": "src/Control-Monad-Operational.html#ProgramViewT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "Return",
          "normalized": "a-\u003eProgramViewT b c a",
          "package": "operational",
          "partial": "Return",
          "signature": "a-\u003eProgramViewT instr m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function that extends\n a given interpretation of instructions as monadic actions\n to an interpration of \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003es as monadic actions.\n\u003c/p\u003e\u003cp\u003eThis function can be useful if you are mainly interested in\n mapping a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e to different standard monads, like the state monad.\n For implementing a truly custom monad, \n you should write your interpreter directly with \u003ccode\u003e\u003ca\u003eview\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "interpretWithMonad",
          "package": "operational",
          "signature": "(forall a.  instr a -\u003e m a) -\u003e Program instr b -\u003e m b",
          "source": "src/Control-Monad-Operational.html#interpretWithMonad",
          "type": "function"
        },
        "index": {
          "description": "Utility function that extends given interpretation of instructions as monadic actions to an interpration of Program as monadic actions This function can be useful if you are mainly interested in mapping Program to different standard monads like the state monad For implementing truly custom monad you should write your interpreter directly with view instead",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "interpretWithMonad",
          "normalized": "(a b c d-\u003ee d)-\u003eProgram c f-\u003ee f",
          "package": "operational",
          "partial": "With Monad",
          "signature": "(forall a. instr a-\u003em a)-\u003eProgram instr b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:interpretWithMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a plain sequence of instructions to a sequence\n    of instructions over a monad \u003ccode\u003em\u003c/code\u003e.\n    This is the counterpart of the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e function from \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt can be defined as follows:\n\u003c/p\u003e\u003cpre\u003e\n    liftProgram = eval . view\n        where\n        eval :: ProgramView instr a -\u003e ProgramT instr m a\n        eval (Return a) = return a\n        eval (i :\u003e\u003e= k) = singleton i \u003e\u003e= liftProgram . k\n\u003c/pre\u003e",
          "module": "Control.Monad.Operational",
          "name": "liftProgram",
          "package": "operational",
          "signature": "Program instr a -\u003e ProgramT instr m a",
          "source": "src/Control-Monad-Operational.html#liftProgram",
          "type": "function"
        },
        "index": {
          "description": "Lift plain sequence of instructions to sequence of instructions over monad This is the counterpart of the lift function from MonadTrans It can be defined as follows liftProgram eval view where eval ProgramView instr ProgramT instr eval Return return eval singleton liftProgram",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "liftProgram",
          "normalized": "Program a b-\u003eProgramT a c b",
          "package": "operational",
          "partial": "Program",
          "signature": "Program instr a-\u003eProgramT instr m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:liftProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram made from a single primitive instruction.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "singleton",
          "package": "operational",
          "signature": "instr a -\u003e ProgramT instr m a",
          "source": "src/Control-Monad-Operational.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Program made from single primitive instruction",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "singleton",
          "normalized": "a b-\u003eProgramT a c b",
          "package": "operational",
          "signature": "instr a-\u003eProgramT instr m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView function for inspecting the first instruction.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "view",
          "package": "operational",
          "signature": "Program instr a -\u003e ProgramView instr a",
          "source": "src/Control-Monad-Operational.html#view",
          "type": "function"
        },
        "index": {
          "description": "View function for inspecting the first instruction",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "view",
          "normalized": "Program a b-\u003eProgramView a b",
          "package": "operational",
          "signature": "Program instr a-\u003eProgramView instr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView function for inspecting the first instruction.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational",
          "name": "viewT",
          "package": "operational",
          "signature": "ProgramT instr m a -\u003e m (ProgramViewT instr m a)",
          "source": "src/Control-Monad-Operational.html#viewT",
          "type": "function"
        },
        "index": {
          "description": "View function for inspecting the first instruction",
          "hierarchy": "Control Monad Operational",
          "module": "Control.Monad.Operational",
          "name": "viewT",
          "normalized": "ProgramT a b c-\u003eb(ProgramViewT a b c)",
          "package": "operational",
          "signature": "ProgramT instr m a-\u003em(ProgramViewT instr m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:viewT"
      }
    }
  ]
]