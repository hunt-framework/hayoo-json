[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#",
      "description": {
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Operational.html",
        "fct-type": "module",
        "title": "Operational"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "Operational",
        "normalized": "",
        "package": "operational",
        "partial": "Operational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e instr a\u003c/code\u003e represents programs,\n    i.e. sequences of primitive instructions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003cem\u003eprimitive instructions\u003c/em\u003e are given by the type constructor \u003ccode\u003einstr :: * -\u003e *\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e is the return type of a program.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e instr\u003c/code\u003e is always a monad and\n    automatically obeys the monad laws.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Operational.html#Program",
        "fct-type": "type",
        "title": "Program"
      },
      "index": {
        "description": "The abstract data type Program instr represents programs i.e sequences of primitive instructions The primitive instructions are given by the type constructor instr is the return type of program Program instr is always monad and automatically obeys the monad laws",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "Program",
        "normalized": "",
        "package": "operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:ProgramT",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr m a\u003c/code\u003e represents programs\n    over a base monad \u003ccode\u003em\u003c/code\u003e,\n    i.e. sequences of primitive instructions and actions from the base monad.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003cem\u003eprimitive instructions\u003c/em\u003e are given by the type constructor \u003ccode\u003einstr :: * -\u003e *\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e is the base monad, embedded with \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e is the return type of a program.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eProgramT\u003c/a\u003e\u003c/code\u003e instr m\u003c/code\u003e is a monad transformer and\n    automatically obeys both the monad and the lifting laws.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Operational.html#ProgramT",
        "fct-type": "data",
        "title": "ProgramT"
      },
      "index": {
        "description": "The abstract data type ProgramT instr represents programs over base monad i.e sequences of primitive instructions and actions from the base monad The primitive instructions are given by the type constructor instr is the base monad embedded with lift is the return type of program ProgramT instr is monad transformer and automatically obeys both the monad and the lifting laws",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "ProgramT",
        "normalized": "",
        "package": "operational",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:ProgramView",
      "description": {
        "fct-descr": "\u003cp\u003eView type for inspecting the first instruction.\n   It has two constructors \u003ccode\u003e\u003ca\u003eReturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e:\u003e\u003e=\u003c/code\u003e.\n   (For technical reasons, they are documented at \u003ccode\u003e\u003ca\u003eProgramViewT\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Operational.html#ProgramView",
        "fct-type": "type",
        "title": "ProgramView"
      },
      "index": {
        "description": "View type for inspecting the first instruction It has two constructors Return and For technical reasons they are documented at ProgramViewT",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "ProgramView",
        "normalized": "",
        "package": "operational",
        "partial": "Program View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#t:ProgramViewT",
      "description": {
        "fct-descr": "\u003cp\u003eView type for inspecting the first instruction.\n This is very similar to pattern matching on lists.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The case \u003ccode\u003e(Return a)\u003c/code\u003e means that the program contains no instructions\n and just returns the result \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003eThe case \u003ccode\u003e(someInstruction :\u003e\u003e= k)\u003c/code\u003e means that the first instruction\n is \u003ccode\u003esomeInstruction\u003c/code\u003e and the remaining program is given by the function \u003ccode\u003ek\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Operational.html#ProgramViewT",
        "fct-type": "data",
        "title": "ProgramViewT"
      },
      "index": {
        "description": "View type for inspecting the first instruction This is very similar to pattern matching on lists The case Return means that the program contains no instructions and just returns the result The case someInstruction means that the first instruction is someInstruction and the remaining program is given by the function",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "ProgramViewT",
        "normalized": "",
        "package": "operational",
        "partial": "Program View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v::-62--62--61-",
      "description": {
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "instr b -\u003e (b -\u003e ProgramT instr m a) -\u003e ProgramViewT instr m a",
        "fct-source": "src/Control-Monad-Operational.html#ProgramViewT",
        "fct-type": "function",
        "title": ":\u003e\u003e="
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": ":\u003e\u003e=",
        "normalized": "a b-\u003e(b-\u003eProgramT a c d)-\u003eProgramViewT a c d",
        "package": "operational",
        "partial": "",
        "signature": "instr b-\u003e(b-\u003eProgramT instr m a)-\u003eProgramViewT instr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:Return",
      "description": {
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "a -\u003e ProgramViewT instr m a",
        "fct-source": "src/Control-Monad-Operational.html#ProgramViewT",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "Return",
        "normalized": "a-\u003eProgramViewT b c a",
        "package": "operational",
        "partial": "Return",
        "signature": "a-\u003eProgramViewT instr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:interpretWithMonad",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function that extends\n a given interpretation of instructions as monadic actions\n to an interpration of \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003es as monadic actions.\n\u003c/p\u003e\u003cp\u003eThis function can be useful if you are mainly interested in\n mapping a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e to different standard monads, like the state monad.\n For implementing a truly custom monad, \n you should write your interpreter directly with \u003ccode\u003e\u003ca\u003eview\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "(forall a.  instr a -\u003e m a) -\u003e Program instr b -\u003e m b",
        "fct-source": "src/Control-Monad-Operational.html#interpretWithMonad",
        "fct-type": "function",
        "title": "interpretWithMonad"
      },
      "index": {
        "description": "Utility function that extends given interpretation of instructions as monadic actions to an interpration of Program as monadic actions This function can be useful if you are mainly interested in mapping Program to different standard monads like the state monad For implementing truly custom monad you should write your interpreter directly with view instead",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "interpretWithMonad",
        "normalized": "(a b c d-\u003ee d)-\u003eProgram c f-\u003ee f",
        "package": "operational",
        "partial": "With Monad",
        "signature": "(forall a. instr a-\u003em a)-\u003eProgram instr b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:liftProgram",
      "description": {
        "fct-descr": "\u003cp\u003eLift a plain sequence of instructions to a sequence\n    of instructions over a monad \u003ccode\u003em\u003c/code\u003e.\n    This is the counterpart of the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e function from \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt can be defined as follows:\n\u003c/p\u003e\u003cpre\u003e\n    liftProgram = eval . view\n        where\n        eval :: ProgramView instr a -\u003e ProgramT instr m a\n        eval (Return a) = return a\n        eval (i :\u003e\u003e= k) = singleton i \u003e\u003e= liftProgram . k\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "Program instr a -\u003e ProgramT instr m a",
        "fct-source": "src/Control-Monad-Operational.html#liftProgram",
        "fct-type": "function",
        "title": "liftProgram"
      },
      "index": {
        "description": "Lift plain sequence of instructions to sequence of instructions over monad This is the counterpart of the lift function from MonadTrans It can be defined as follows liftProgram eval view where eval ProgramView instr ProgramT instr eval Return return eval singleton liftProgram",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "liftProgram",
        "normalized": "Program a b-\u003eProgramT a c b",
        "package": "operational",
        "partial": "Program",
        "signature": "Program instr a-\u003eProgramT instr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eProgram made from a single primitive instruction.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "instr a -\u003e ProgramT instr m a",
        "fct-source": "src/Control-Monad-Operational.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Program made from single primitive instruction",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "singleton",
        "normalized": "a b-\u003eProgramT a c b",
        "package": "operational",
        "partial": "",
        "signature": "instr a-\u003eProgramT instr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003eView function for inspecting the first instruction.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "Program instr a -\u003e ProgramView instr a",
        "fct-source": "src/Control-Monad-Operational.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "View function for inspecting the first instruction",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "view",
        "normalized": "Program a b-\u003eProgramView a b",
        "package": "operational",
        "partial": "",
        "signature": "Program instr a-\u003eProgramView instr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/operational/docs/Control-Monad-Operational.html#v:viewT",
      "description": {
        "fct-descr": "\u003cp\u003eView function for inspecting the first instruction.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Operational",
        "fct-package": "operational",
        "fct-signature": "ProgramT instr m a -\u003e m (ProgramViewT instr m a)",
        "fct-source": "src/Control-Monad-Operational.html#viewT",
        "fct-type": "function",
        "title": "viewT"
      },
      "index": {
        "description": "View function for inspecting the first instruction",
        "hierarchy": "Control Monad Operational",
        "module": "Control.Monad.Operational",
        "name": "viewT",
        "normalized": "ProgramT a b c-\u003eb(ProgramViewT a b c)",
        "package": "operational",
        "partial": "",
        "signature": "ProgramT instr m a-\u003em(ProgramViewT instr m a)"
      }
    }
  }
]