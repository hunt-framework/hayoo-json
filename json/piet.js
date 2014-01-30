[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a customized stack for the Piet programming\n language.\n\u003c/p\u003e\u003cp\u003eIn addition to the common \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epop\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etop\u003c/a\u003e\u003c/code\u003e operations, the\n a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e provides a \u003ccode\u003e\u003ca\u003eroll\u003c/a\u003e\u003c/code\u003e (see below) command, which is the\n reason for using a \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003euence and not a list as underlying data\n structure.\n\u003c/p\u003e\u003cp\u003eWhenever the \u003cem\u003eO\u003c/em\u003e-notation is used, \u003cem\u003en\u003c/em\u003e describes the number of elements\n within the stack.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Data-RollStack.html",
        "fct-type": "module",
        "title": "RollStack"
      },
      "index": {
        "description": "This module implements customized stack for the Piet programming language In addition to the common push pop and top operations the RollStack provides roll see below command which is the reason for using Seq uence and not list as underlying data structure Whenever the notation is used describes the number of elements within the stack",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "RollStack",
        "normalized": "",
        "package": "piet",
        "partial": "Roll Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#t:RollStack",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Data-RollStack.html#RollStack",
        "fct-type": "data",
        "title": "RollStack"
      },
      "index": {
        "description": "The RollStack type",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "RollStack",
        "normalized": "",
        "package": "piet",
        "partial": "Roll Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct an empty \u003ccode\u003eStack\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "RollStack a",
        "fct-source": "src/Data-RollStack.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty Stack",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "empty",
        "normalized": "",
        "package": "piet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a list into a \u003ccode\u003eStack\u003c/code\u003e. The list's head will be\n the first element of the \u003ccode\u003eStack\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "[a] -\u003e RollStack a",
        "fct-source": "src/Data-RollStack.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list into Stack The list head will be the first element of the Stack",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "fromList",
        "normalized": "[a]-\u003eRollStack a",
        "package": "piet",
        "partial": "List",
        "signature": "[a]-\u003eRollStack a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Tests, if a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "RollStack a -\u003e Bool",
        "fct-source": "src/Data-RollStack.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Tests if RollStack is empty",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "isEmpty",
        "normalized": "RollStack a-\u003eBool",
        "package": "piet",
        "partial": "Empty",
        "signature": "RollStack a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Pop the top element from the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e if it is not empty.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "RollStack a -\u003e Maybe (a, RollStack a)",
        "fct-source": "src/Data-RollStack.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Pop the top element from the RollStack if it is not empty",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "pop",
        "normalized": "RollStack a-\u003eMaybe(a,RollStack a)",
        "package": "piet",
        "partial": "",
        "signature": "RollStack a-\u003eMaybe(a,RollStack a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Push an element on the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "a -\u003e RollStack a -\u003e RollStack a",
        "fct-source": "src/Data-RollStack.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push an element on the RollStack",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "push",
        "normalized": "a-\u003eRollStack a-\u003eRollStack a",
        "package": "piet",
        "partial": "",
        "signature": "a-\u003eRollStack a-\u003eRollStack a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:roll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log(n))\u003c/em\u003e. A single roll to depth \u003cem\u003en\u003c/em\u003e is defined as burying the top\n value on the stack \u003cem\u003en\u003c/em\u003e deep and bringing all values above it up by 1\n place. A negative number of rolls rolls in the opposite direction. A\n negative depth results in an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "Int-\u003e Int-\u003e RollStack a-\u003e RollStack a",
        "fct-type": "function",
        "title": "roll"
      },
      "index": {
        "description": "log single roll to depth is defined as burying the top value on the stack deep and bringing all values above it up by place negative number of rolls rolls in the opposite direction negative depth results in an error",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "roll",
        "normalized": "Int-\u003eInt-\u003eRollStack a-\u003eRollStack a",
        "package": "piet",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eRollStack a-\u003eRollStack a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e containing a single element.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "a -\u003e RollStack a",
        "fct-source": "src/Data-RollStack.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct RollStack containing single element",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "singleton",
        "normalized": "a-\u003eRollStack a",
        "package": "piet",
        "partial": "",
        "signature": "a-\u003eRollStack a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e to a list. The \u003ccode\u003e\u003ca\u003etop\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e\n will be the list's head.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "RollStack a -\u003e [a]",
        "fct-source": "src/Data-RollStack.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert RollStack to list The top of the RollStack will be the list head",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "toList",
        "normalized": "RollStack a-\u003e[a]",
        "package": "piet",
        "partial": "List",
        "signature": "RollStack a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:top",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Looks at the top element of the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e. Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stack is empty.\n\u003c/p\u003e",
        "fct-module": "Data.RollStack",
        "fct-package": "piet",
        "fct-signature": "RollStack a -\u003e Maybe a",
        "fct-source": "src/Data-RollStack.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "Looks at the top element of the RollStack Returns Nothing if the stack is empty",
        "hierarchy": "Data RollStack",
        "module": "Data.RollStack",
        "name": "top",
        "normalized": "RollStack a-\u003eMaybe a",
        "package": "piet",
        "partial": "",
        "signature": "RollStack a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the implementation of the Piet language\n constructs. Most of the documentation is copied from the\n Piet specification at \u003ca\u003ehttp://www.dangermouse.net/esoteric/piet.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Language-Piet-Commands.html",
        "fct-type": "module",
        "title": "Commands"
      },
      "index": {
        "description": "This module contains the implementation of the Piet language constructs Most of the documentation is copied from the Piet specification at http www.dangermouse.net esoteric piet.html",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "Commands",
        "normalized": "",
        "package": "piet",
        "partial": "Commands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_add",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack, adds them, and pushes the\n result back on the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_add",
        "fct-type": "function",
        "title": "piet_add"
      },
      "index": {
        "description": "Pops the top two values off the stack adds them and pushes the result back on the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_add",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_divide",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack, calculates the integer division\n of the second top value by the top value, and pushes the result back on\n the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_divide",
        "fct-type": "function",
        "title": "piet_divide"
      },
      "index": {
        "description": "Pops the top two values off the stack calculates the integer division of the second top value by the top value and pushes the result back on the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_divide",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_duplicate",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a copy of the top value on the stack on to the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_duplicate",
        "fct-type": "function",
        "title": "piet_duplicate"
      },
      "index": {
        "description": "Pushes copy of the top value on the stack on to the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_duplicate",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_greater",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack, and pushes 1 on to the stack if\n the second top value is greater than the top value, and pushes 0 if it\n is not greater.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_greater",
        "fct-type": "function",
        "title": "piet_greater"
      },
      "index": {
        "description": "Pops the top two values off the stack and pushes on to the stack if the second top value is greater than the top value and pushes if it is not greater",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_greater",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_in_char",
      "description": {
        "fct-descr": "\u003cp\u003eReads a char from STDIN and pushes it on to the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_in_char",
        "fct-type": "function",
        "title": "piet_in_char"
      },
      "index": {
        "description": "Reads char from STDIN and pushes it on to the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_in_char",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_in_number",
      "description": {
        "fct-descr": "\u003cp\u003eReads a number from STDIN and pushes it on to the stack. \n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_in_number",
        "fct-type": "function",
        "title": "piet_in_number"
      },
      "index": {
        "description": "Reads number from STDIN and pushes it on to the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_in_number",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_mod",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack, calculates the second top value\n modulo the top value, and pushes the result back on the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_mod",
        "fct-type": "function",
        "title": "piet_mod"
      },
      "index": {
        "description": "Pops the top two values off the stack calculates the second top value modulo the top value and pushes the result back on the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_mod",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_multiply",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack, multiplies them, and pushes the\n result back on the stack. \n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_multiply",
        "fct-type": "function",
        "title": "piet_multiply"
      },
      "index": {
        "description": "Pops the top two values off the stack multiplies them and pushes the result back on the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_multiply",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_not",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces the top value of the stack with 0 if it is non-zero, and 1 if\n it is zero.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_not",
        "fct-type": "function",
        "title": "piet_not"
      },
      "index": {
        "description": "Replaces the top value of the stack with if it is non-zero and if it is zero",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_not",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_out_char",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top value off the stack and prints it to STDOUT\n as a char.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_out_char",
        "fct-type": "function",
        "title": "piet_out_char"
      },
      "index": {
        "description": "Pops the top value off the stack and prints it to STDOUT as char",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_out_char",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_out_number",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top value off the stack and prints it to STDOUT\n as a number.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_out_number",
        "fct-type": "function",
        "title": "piet_out_number"
      },
      "index": {
        "description": "Pops the top value off the stack and prints it to STDOUT as number",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_out_number",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_pointer",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top value off the stack and rotates the DP clockwise that many\n steps (anticlockwise if negative).\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_pointer",
        "fct-type": "function",
        "title": "piet_pointer"
      },
      "index": {
        "description": "Pops the top value off the stack and rotates the DP clockwise that many steps anticlockwise if negative",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_pointer",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_pop",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top value off the stack and discards it.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_pop",
        "fct-type": "function",
        "title": "piet_pop"
      },
      "index": {
        "description": "Pops the top value off the stack and discards it",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_pop",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_push",
      "description": {
        "fct-descr": "\u003cp\u003ePushes the value of the colour block just exited on to the stack.\n Note that values of colour blocks are not automatically pushed on\n to the stack - this push operation must be explicitly carried out.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_push",
        "fct-type": "function",
        "title": "piet_push"
      },
      "index": {
        "description": "Pushes the value of the colour block just exited on to the stack Note that values of colour blocks are not automatically pushed on to the stack this push operation must be explicitly carried out",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_push",
        "normalized": "Int-\u003ePietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "Int-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_roll",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack and \"rolls\" the remaining stack\n entries to a depth equal to the second value popped, by a number of\n rolls equal to the first value popped. A single roll to depth \u003cem\u003en\u003c/em\u003e is\n defined as burying the top value on the stack \u003cem\u003en\u003c/em\u003e deep and bringing all\n values above it up by 1 place. A negative number of rolls rolls in the\n opposite direction. A negative depth is an error and the command is\n ignored.\n\u003c/p\u003e\u003cp\u003eIn this implementation, \"ignored\" means that the top two values\n remain pushed off the stack, while the rest of the stack remains\n unmodified.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_roll",
        "fct-type": "function",
        "title": "piet_roll"
      },
      "index": {
        "description": "Pops the top two values off the stack and rolls the remaining stack entries to depth equal to the second value popped by number of rolls equal to the first value popped single roll to depth is defined as burying the top value on the stack deep and bringing all values above it up by place negative number of rolls rolls in the opposite direction negative depth is an error and the command is ignored In this implementation ignored means that the top two values remain pushed off the stack while the rest of the stack remains unmodified",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_roll",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_subtract",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top two values off the stack, subtracts the top value from\n the second top value, and pushes the result back on the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_subtract",
        "fct-type": "function",
        "title": "piet_subtract"
      },
      "index": {
        "description": "Pops the top two values off the stack subtracts the top value from the second top value and pushes the result back on the stack",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_subtract",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_switch",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top value off the stack and toggles the CC that many times.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Commands",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-Commands.html#piet_switch",
        "fct-type": "function",
        "title": "piet_switch"
      },
      "index": {
        "description": "Pops the top value off the stack and toggles the CC that many times",
        "hierarchy": "Language Piet Commands",
        "module": "Language.Piet.Commands",
        "name": "piet_switch",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the image processing part of this library. It\n is able to do basic image I/O and provides funcions for labelling\n images and extracting Piet-relevant information at the same time.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Piet.Compiler",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Language-Piet-Compiler.html",
        "fct-type": "module",
        "title": "Compiler"
      },
      "index": {
        "description": "This module implements the image processing part of this library It is able to do basic image and provides funcions for labelling images and extracting Piet-relevant information at the same time",
        "hierarchy": "Language Piet Compiler",
        "module": "Language.Piet.Compiler",
        "name": "Compiler",
        "normalized": "",
        "package": "piet",
        "partial": "Compiler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eCompile an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to a Piet \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Compiler",
        "fct-package": "piet",
        "fct-signature": "Image Colour -\u003e Program",
        "fct-source": "src/Language-Piet-Compiler.html#compile",
        "fct-type": "function",
        "title": "compile"
      },
      "index": {
        "description": "Compile an Image Colour to Piet Program",
        "hierarchy": "Language Piet Compiler",
        "module": "Language.Piet.Compiler",
        "name": "compile",
        "normalized": "Image Colour-\u003eProgram",
        "package": "piet",
        "partial": "",
        "signature": "Image Colour-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:imgFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e holding Piet \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003es from a given file.\n If the codel length is known, it should be passed as \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n argument, otherwise, it is guessed from the file. Note that\n \"codel length\" means the edge length of the codels and\n not their size.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis function is not thread safe due to imlib2!\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Compiler",
        "fct-package": "piet",
        "fct-signature": "Maybe Int-\u003e FilePath-\u003e IO (Either ImlibLoadError (Image Colour))",
        "fct-type": "function",
        "title": "imgFromFile"
      },
      "index": {
        "description": "Load an Image holding Piet Colour from given file If the codel length is known it should be passed as Just argument otherwise it is guessed from the file Note that codel length means the edge length of the codels and not their size This function is not thread safe due to imlib2",
        "hierarchy": "Language Piet Compiler",
        "module": "Language.Piet.Compiler",
        "name": "imgFromFile",
        "normalized": "Maybe Int-\u003eFilePath-\u003eIO(Either ImlibLoadError(Image Colour))",
        "package": "piet",
        "partial": "From File",
        "signature": "Maybe Int-\u003eFilePath-\u003eIO(Either ImlibLoadError(Image Colour))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:label4",
      "description": {
        "fct-descr": "\u003cp\u003eLabel an image with 4-neighbourship and equivalence as neighbouring\n condition, which is \u003ccode\u003e\u003ccode\u003e\u003ca\u003elabel4With\u003c/a\u003e\u003c/code\u003e (==)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Compiler",
        "fct-package": "piet",
        "fct-signature": "Image a -\u003e (Image LabelKey, IntMap LabelInfo)",
        "fct-source": "src/Language-Piet-Compiler.html#label4",
        "fct-type": "function",
        "title": "label4"
      },
      "index": {
        "description": "Label an image with neighbourship and equivalence as neighbouring condition which is label4With",
        "hierarchy": "Language Piet Compiler",
        "module": "Language.Piet.Compiler",
        "name": "label4",
        "normalized": "Image a-\u003e(Image LabelKey,IntMap LabelInfo)",
        "package": "piet",
        "partial": "",
        "signature": "Image a-\u003e(Image LabelKey,IntMap LabelInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:label4With",
      "description": {
        "fct-descr": "\u003cp\u003eLabels an image with 4-neighbourship.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Compiler",
        "fct-package": "piet",
        "fct-signature": "(a -\u003e a -\u003e Bool)-\u003e Image a-\u003e (Image LabelKey, IntMap LabelInfo)",
        "fct-type": "function",
        "title": "label4With"
      },
      "index": {
        "description": "Labels an image with neighbourship",
        "hierarchy": "Language Piet Compiler",
        "module": "Language.Piet.Compiler",
        "name": "label4With",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eImage a-\u003e(Image LabelKey,IntMap LabelInfo)",
        "package": "piet",
        "partial": "With",
        "signature": "(a-\u003ea-\u003eBool)-\u003eImage a-\u003e(Image LabelKey,IntMap LabelInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an interpreter for the Piet programming\n language.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Language-Piet-Interpreter.html",
        "fct-type": "module",
        "title": "Interpreter"
      },
      "index": {
        "description": "This module implements an interpreter for the Piet programming language",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "Interpreter",
        "normalized": "",
        "package": "piet",
        "partial": "Interpreter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:colourDiff2Command",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a colour difference calculated by \u003ccode\u003eLanguage.Piet.Types.colourChange\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003elightnessChange\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePietMonad\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e, compare \u003ccode\u003e\u003ca\u003ecolours2Command\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "Lightness -\u003e HueColour -\u003e Int -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-Interpreter.html#colourDiff2Command",
        "fct-type": "function",
        "title": "colourDiff2Command"
      },
      "index": {
        "description": "Converts colour difference calculated by Language.Piet.Types.colourChange and lightnessChange to PietMonad compare colours2Command",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "colourDiff2Command",
        "normalized": "Lightness-\u003eHueColour-\u003eInt-\u003ePietMonad()",
        "package": "piet",
        "partial": "Diff Command",
        "signature": "Lightness-\u003eHueColour-\u003eInt-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:colours2Command",
      "description": {
        "fct-descr": "\u003cp\u003ePiet's commands are issued by a colour change, see\n \u003ca\u003ehttp://www.dangermouse.net/esoteric/piet.html\u003c/a\u003e. This function\n takes two neighbouring colours and returns the resulting Piet\n command, which is a function consuming (or more likely,\n ignoring) an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e (the size of the colour block that is being\n left) and returning a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePietMonad\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "Lightness-\u003e HueColour-\u003e Lightness-\u003e HueColour-\u003e Int-\u003e PietMonad ()",
        "fct-type": "function",
        "title": "colours2Command"
      },
      "index": {
        "description": "Piet commands are issued by colour change see http www.dangermouse.net esoteric piet.html This function takes two neighbouring colours and returns the resulting Piet command which is function consuming or more likely ignoring an Int the size of the colour block that is being left and returning PietMonad",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "colours2Command",
        "normalized": "Lightness-\u003eHueColour-\u003eLightness-\u003eHueColour-\u003eInt-\u003ePietMonad()",
        "package": "piet",
        "partial": "Command",
        "signature": "Lightness-\u003eHueColour-\u003eLightness-\u003eHueColour-\u003eInt-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret a Piet \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "Program -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-Interpreter.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "Interpret Piet Program",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "interpret",
        "normalized": "Program-\u003ePietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "Program-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:interpretWhite",
      "description": {
        "fct-descr": "\u003cp\u003eFind a way out of the current \u003ccode\u003e\u003ca\u003eWhite\u003c/a\u003e\u003c/code\u003e block. \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e if there\n is no way out.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "Program -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-Interpreter.html#interpretWhite",
        "fct-type": "function",
        "title": "interpretWhite"
      },
      "index": {
        "description": "Find way out of the current White block terminate if there is no way out",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "interpretWhite",
        "normalized": "Program-\u003ePietMonad()",
        "package": "piet",
        "partial": "White",
        "signature": "Program-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:nonBlackSucc",
      "description": {
        "fct-descr": "\u003cp\u003eFind coordinates and resulting DP/CC of the successing non-black block,\n if it exists, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "Program-\u003e LabelInfo-\u003e DirectionPointer-\u003e CodelChooser-\u003e Maybe (Int, Int, DirectionPointer, CodelChooser)",
        "fct-type": "function",
        "title": "nonBlackSucc"
      },
      "index": {
        "description": "Find coordinates and resulting DP CC of the successing non-black block if it exists Nothing otherwise",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "nonBlackSucc",
        "normalized": "Program-\u003eLabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003eMaybe(Int,Int,DirectionPointer,CodelChooser)",
        "package": "piet",
        "partial": "Black Succ",
        "signature": "Program-\u003eLabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003eMaybe(Int,Int,DirectionPointer,CodelChooser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:succCoordinates",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a label, a \u003ccode\u003e\u003ca\u003eDirectionPointer\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eCodelChooser\u003c/a\u003e\u003c/code\u003e, this\n function finds the coordinates of the next block to enter. These\n coordinates are not guaranteed to be valid, they might be out of\n range or point to a \u003ccode\u003e\u003ca\u003eBlack\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eWhite\u003c/a\u003e\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Interpreter",
        "fct-package": "piet",
        "fct-signature": "LabelInfo-\u003e DirectionPointer-\u003e CodelChooser-\u003e (Int, Int)",
        "fct-type": "function",
        "title": "succCoordinates"
      },
      "index": {
        "description": "Given label DirectionPointer and CodelChooser this function finds the coordinates of the next block to enter These coordinates are not guaranteed to be valid they might be out of range or point to Black or White block",
        "hierarchy": "Language Piet Interpreter",
        "module": "Language.Piet.Interpreter",
        "name": "succCoordinates",
        "normalized": "LabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003e(Int,Int)",
        "package": "piet",
        "partial": "Coordinates",
        "signature": "LabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module implementing the Piet interpreter as a monad. The monad\n encapsulates the interpreter's status, i. e. the side-effects of\n Piet programs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Language-Piet-PietMonad.html",
        "fct-type": "module",
        "title": "PietMonad"
      },
      "index": {
        "description": "module implementing the Piet interpreter as monad The monad encapsulates the interpreter status the side-effects of Piet programs",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "PietMonad",
        "normalized": "",
        "package": "piet",
        "partial": "Piet Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#t:InterpreterStatus",
      "description": {
        "fct-descr": "\u003cp\u003eThe status of a Piet interpreter.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-PietMonad.html#InterpreterStatus",
        "fct-type": "data",
        "title": "InterpreterStatus"
      },
      "index": {
        "description": "The status of Piet interpreter",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "InterpreterStatus",
        "normalized": "",
        "package": "piet",
        "partial": "Interpreter Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#t:LogLevel",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes the importance of a log message.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-PietMonad.html#LogLevel",
        "fct-type": "data",
        "title": "LogLevel"
      },
      "index": {
        "description": "Describes the importance of log message",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "LogLevel",
        "normalized": "",
        "package": "piet",
        "partial": "Log Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#t:PietMonad",
      "description": {
        "fct-descr": "\u003cp\u003eA monad encapsulating the status of a Piet interpreter.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-PietMonad.html#PietMonad",
        "fct-type": "data",
        "title": "PietMonad"
      },
      "index": {
        "description": "monad encapsulating the status of Piet interpreter",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "PietMonad",
        "normalized": "",
        "package": "piet",
        "partial": "Piet Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Error",
      "description": {
        "fct-descr": "\u003cp\u003eA recoverable error has occured.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Error",
        "fct-source": "src/Language-Piet-PietMonad.html#LogLevel",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "recoverable error has occured",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "Error",
        "normalized": "",
        "package": "piet",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Fatal",
      "description": {
        "fct-descr": "\u003cp\u003eA fatal error has occured.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Fatal",
        "fct-source": "src/Language-Piet-PietMonad.html#LogLevel",
        "fct-type": "function",
        "title": "Fatal"
      },
      "index": {
        "description": "fatal error has occured",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "Fatal",
        "normalized": "",
        "package": "piet",
        "partial": "Fatal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Info",
      "description": {
        "fct-descr": "\u003cp\u003eUsual log level.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Info",
        "fct-source": "src/Language-Piet-PietMonad.html#LogLevel",
        "fct-type": "function",
        "title": "Info"
      },
      "index": {
        "description": "Usual log level",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "Info",
        "normalized": "",
        "package": "piet",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Verbosed",
      "description": {
        "fct-descr": "\u003cp\u003eRather verbosed output.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Verbosed",
        "fct-source": "src/Language-Piet-PietMonad.html#LogLevel",
        "fct-type": "function",
        "title": "Verbosed"
      },
      "index": {
        "description": "Rather verbosed output",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "Verbosed",
        "normalized": "",
        "package": "piet",
        "partial": "Verbosed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:getCC",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current Codel Chooser.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad CodelChooser",
        "fct-source": "src/Language-Piet-PietMonad.html#getCC",
        "fct-type": "function",
        "title": "getCC"
      },
      "index": {
        "description": "Returns the current Codel Chooser",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "getCC",
        "normalized": "",
        "package": "piet",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:getDP",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current Direction Pointer.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad DirectionPointer",
        "fct-source": "src/Language-Piet-PietMonad.html#getDP",
        "fct-type": "function",
        "title": "getDP"
      },
      "index": {
        "description": "Returns the current Direction Pointer",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "getDP",
        "normalized": "",
        "package": "piet",
        "partial": "DP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:getPosition",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current position.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad (Int, Int)",
        "fct-source": "src/Language-Piet-PietMonad.html#getPosition",
        "fct-type": "function",
        "title": "getPosition"
      },
      "index": {
        "description": "Returns the current position",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "getPosition",
        "normalized": "PietMonad(Int,Int)",
        "package": "piet",
        "partial": "Position",
        "signature": "PietMonad(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:logMessage",
      "description": {
        "fct-descr": "\u003cp\u003eIssue log message with given priority.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "LogLevel -\u003e String -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#logMessage",
        "fct-type": "function",
        "title": "logMessage"
      },
      "index": {
        "description": "Issue log message with given priority",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "logMessage",
        "normalized": "LogLevel-\u003eString-\u003ePietMonad()",
        "package": "piet",
        "partial": "Message",
        "signature": "LogLevel-\u003eString-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:printChar",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a given number to a character and prints it to STDOUT.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#printChar",
        "fct-type": "function",
        "title": "printChar"
      },
      "index": {
        "description": "Converts given number to character and prints it to STDOUT",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "printChar",
        "normalized": "Int-\u003ePietMonad()",
        "package": "piet",
        "partial": "Char",
        "signature": "Int-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:printNumber",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a number to STDOUT.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#printNumber",
        "fct-type": "function",
        "title": "printNumber"
      },
      "index": {
        "description": "Prints number to STDOUT",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "printNumber",
        "normalized": "Int-\u003ePietMonad()",
        "package": "piet",
        "partial": "Number",
        "signature": "Int-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:readChar",
      "description": {
        "fct-descr": "\u003cp\u003eReads a character from STDIN. Note that it is returned as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad Int",
        "fct-source": "src/Language-Piet-PietMonad.html#readChar",
        "fct-type": "function",
        "title": "readChar"
      },
      "index": {
        "description": "Reads character from STDIN Note that it is returned as an Int",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "readChar",
        "normalized": "",
        "package": "piet",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:readNumber",
      "description": {
        "fct-descr": "\u003cp\u003eReads a number from STDIN.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad Int",
        "fct-source": "src/Language-Piet-PietMonad.html#readNumber",
        "fct-type": "function",
        "title": "readNumber"
      },
      "index": {
        "description": "Reads number from STDIN",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "readNumber",
        "normalized": "",
        "package": "piet",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:runPietMonad",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a program represented by a \u003ccode\u003e\u003ca\u003ePietMonad\u003c/a\u003e\u003c/code\u003e. I/O operations\n (reading and writing numbers or characters) is delegated to\n callback functions.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "(PietType -\u003e IO Int)-\u003e (PietType -\u003e Int -\u003e IO ())-\u003e (LogLevel -\u003e String -\u003e IO ())-\u003e PietMonad a-\u003e IO (Either String a)",
        "fct-type": "function",
        "title": "runPietMonad"
      },
      "index": {
        "description": "Executes program represented by PietMonad operations reading and writing numbers or characters is delegated to callback functions",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "runPietMonad",
        "normalized": "(PietType-\u003eIO Int)-\u003e(PietType-\u003eInt-\u003eIO())-\u003e(LogLevel-\u003eString-\u003eIO())-\u003ePietMonad a-\u003eIO(Either String a)",
        "package": "piet",
        "partial": "Piet Monad",
        "signature": "(PietType-\u003eIO Int)-\u003e(PietType-\u003eInt-\u003eIO())-\u003e(LogLevel-\u003eString-\u003eIO())-\u003ePietMonad a-\u003eIO(Either String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:setCC",
      "description": {
        "fct-descr": "\u003cp\u003eSets the current Codel Chooser.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "CodelChooser -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#setCC",
        "fct-type": "function",
        "title": "setCC"
      },
      "index": {
        "description": "Sets the current Codel Chooser",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "setCC",
        "normalized": "CodelChooser-\u003ePietMonad()",
        "package": "piet",
        "partial": "CC",
        "signature": "CodelChooser-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:setDP",
      "description": {
        "fct-descr": "\u003cp\u003eSets the Direction Pointer.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "DirectionPointer -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#setDP",
        "fct-type": "function",
        "title": "setDP"
      },
      "index": {
        "description": "Sets the Direction Pointer",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "setDP",
        "normalized": "DirectionPointer-\u003ePietMonad()",
        "package": "piet",
        "partial": "DP",
        "signature": "DirectionPointer-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:setPosition",
      "description": {
        "fct-descr": "\u003cp\u003eSets the current position.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e Int -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#setPosition",
        "fct-type": "function",
        "title": "setPosition"
      },
      "index": {
        "description": "Sets the current position",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "setPosition",
        "normalized": "Int-\u003eInt-\u003ePietMonad()",
        "package": "piet",
        "partial": "Position",
        "signature": "Int-\u003eInt-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:stackPop",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top value from the stack. If the stack was empty,\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the top value otherise.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad (Maybe Int)",
        "fct-source": "src/Language-Piet-PietMonad.html#stackPop",
        "fct-type": "function",
        "title": "stackPop"
      },
      "index": {
        "description": "Pops the top value from the stack If the stack was empty Nothing is returned Just the top value otherise",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "stackPop",
        "normalized": "",
        "package": "piet",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:stackPush",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a given \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value on the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#stackPush",
        "fct-type": "function",
        "title": "stackPush"
      },
      "index": {
        "description": "Pushes given Int value on the stack",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "stackPush",
        "normalized": "Int-\u003ePietMonad()",
        "package": "piet",
        "partial": "Push",
        "signature": "Int-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:stackRoll",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the \u003ccode\u003e\u003ca\u003eroll\u003c/a\u003e\u003c/code\u003e operation on the stack.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "Int-\u003e Int-\u003e PietMonad ()",
        "fct-type": "function",
        "title": "stackRoll"
      },
      "index": {
        "description": "Performs the roll operation on the stack",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "stackRoll",
        "normalized": "Int-\u003eInt-\u003ePietMonad()",
        "package": "piet",
        "partial": "Roll",
        "signature": "Int-\u003eInt-\u003ePietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:terminate",
      "description": {
        "fct-descr": "\u003cp\u003eQuit a program. Any command following this one will be ignored.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.PietMonad",
        "fct-package": "piet",
        "fct-signature": "PietMonad ()",
        "fct-source": "src/Language-Piet-PietMonad.html#terminate",
        "fct-type": "function",
        "title": "terminate"
      },
      "index": {
        "description": "Quit program Any command following this one will be ignored",
        "hierarchy": "Language Piet PietMonad",
        "module": "Language.Piet.PietMonad",
        "name": "terminate",
        "normalized": "PietMonad()",
        "package": "piet",
        "partial": "",
        "signature": "PietMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing a couple of Piet-specific types\n and simple associated functions needed throughout the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Language-Piet-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "module providing couple of Piet-specific types and simple associated functions needed throughout the library",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Types",
        "normalized": "",
        "package": "piet",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:CodelChooser",
      "description": {
        "fct-descr": "\u003cp\u003eThe Codel Chooser (CC).\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#CodelChooser",
        "fct-type": "data",
        "title": "CodelChooser"
      },
      "index": {
        "description": "The Codel Chooser CC",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "CodelChooser",
        "normalized": "",
        "package": "piet",
        "partial": "Codel Chooser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Colour",
      "description": {
        "fct-descr": "\u003cp\u003eThe colours that make up a Piet program text.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#Colour",
        "fct-type": "data",
        "title": "Colour"
      },
      "index": {
        "description": "The colours that make up Piet program text",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Colour",
        "normalized": "",
        "package": "piet",
        "partial": "Colour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:DirectionPointer",
      "description": {
        "fct-descr": "\u003cp\u003eThe Direction Pointer (DP).\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#DirectionPointer",
        "fct-type": "data",
        "title": "DirectionPointer"
      },
      "index": {
        "description": "The Direction Pointer DP",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "DirectionPointer",
        "normalized": "",
        "package": "piet",
        "partial": "Direction Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:HueColour",
      "description": {
        "fct-descr": "\u003cp\u003ePiet colours in the hue cycle.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "data",
        "title": "HueColour"
      },
      "index": {
        "description": "Piet colours in the hue cycle",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "HueColour",
        "normalized": "",
        "package": "piet",
        "partial": "Hue Colour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Image",
      "description": {
        "fct-descr": "\u003cp\u003eAn image. Its coordinates will be \u003ccode\u003e(0, 0) .. (width-1, height-1)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#Image",
        "fct-type": "data",
        "title": "Image"
      },
      "index": {
        "description": "An image Its coordinates will be width-1 height-1",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Image",
        "normalized": "",
        "package": "piet",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:LabelBorder",
      "description": {
        "fct-descr": "\u003cp\u003eHolds information of a label (coloured area) relevant for the Piet\n language, i. e. information about where the program flow will be\n directed regarding a Direction Pointer.\n\u003c/p\u003e\u003cp\u003eHolds a border position (e. g. an x-coordinate) and the minimum\n or maximum associated \"other\" coordinates (e. g. y-coordinates).\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#LabelBorder",
        "fct-type": "data",
        "title": "LabelBorder"
      },
      "index": {
        "description": "Holds information of label coloured area relevant for the Piet language information about where the program flow will be directed regarding Direction Pointer Holds border position an x-coordinate and the minimum or maximum associated other coordinates y-coordinates",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "LabelBorder",
        "normalized": "",
        "package": "piet",
        "partial": "Label Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:LabelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eStores compiler-relevant information about a label. This type\n implements an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to merge labels.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "data",
        "title": "LabelInfo"
      },
      "index": {
        "description": "Stores compiler-relevant information about label This type implements an instance of Monoid to merge labels",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "LabelInfo",
        "normalized": "",
        "package": "piet",
        "partial": "Label Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:LabelKey",
      "description": {
        "fct-descr": "\u003cp\u003eWe'll just use \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es to identifiy labels.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "type",
        "fct-source": "src/Language-Piet-Types.html#LabelKey",
        "fct-type": "type",
        "title": "LabelKey"
      },
      "index": {
        "description": "We ll just use Int to identifiy labels",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "LabelKey",
        "normalized": "",
        "package": "piet",
        "partial": "Label Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Lightness",
      "description": {
        "fct-descr": "\u003cp\u003eHue lightness values supported by Piet.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#Lightness",
        "fct-type": "data",
        "title": "Lightness"
      },
      "index": {
        "description": "Hue lightness values supported by Piet",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Lightness",
        "normalized": "",
        "package": "piet",
        "partial": "Lightness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:PietType",
      "description": {
        "fct-descr": "\u003cp\u003ePiet types. Relevant to distinguish in-/output strategies.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#PietType",
        "fct-type": "data",
        "title": "PietType"
      },
      "index": {
        "description": "Piet types Relevant to distinguish in output strategies",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "PietType",
        "normalized": "",
        "package": "piet",
        "partial": "Piet Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eRuntime program representation.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "data",
        "fct-source": "src/Language-Piet-Types.html#Program",
        "fct-type": "data",
        "title": "Program"
      },
      "index": {
        "description": "Runtime program representation",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Program",
        "normalized": "",
        "package": "piet",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Black",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Black",
        "fct-source": "src/Language-Piet-Types.html#Colour",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Black",
        "normalized": "",
        "package": "piet",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Blue",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Blue",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Blue",
        "normalized": "",
        "package": "piet",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:CCLeft",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "CCLeft",
        "fct-source": "src/Language-Piet-Types.html#CodelChooser",
        "fct-type": "function",
        "title": "CCLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "CCLeft",
        "normalized": "",
        "package": "piet",
        "partial": "CCLeft",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:CCRight",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "CCRight",
        "fct-source": "src/Language-Piet-Types.html#CodelChooser",
        "fct-type": "function",
        "title": "CCRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "CCRight",
        "normalized": "",
        "package": "piet",
        "partial": "CCRight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Cyan",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Cyan",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Cyan",
        "normalized": "",
        "package": "piet",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPDown",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "DPDown",
        "fct-source": "src/Language-Piet-Types.html#DirectionPointer",
        "fct-type": "function",
        "title": "DPDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "DPDown",
        "normalized": "",
        "package": "piet",
        "partial": "DPDown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPLeft",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "DPLeft",
        "fct-source": "src/Language-Piet-Types.html#DirectionPointer",
        "fct-type": "function",
        "title": "DPLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "DPLeft",
        "normalized": "",
        "package": "piet",
        "partial": "DPLeft",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPRight",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "DPRight",
        "fct-source": "src/Language-Piet-Types.html#DirectionPointer",
        "fct-type": "function",
        "title": "DPRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "DPRight",
        "normalized": "",
        "package": "piet",
        "partial": "DPRight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPUp",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "DPUp",
        "fct-source": "src/Language-Piet-Types.html#DirectionPointer",
        "fct-type": "function",
        "title": "DPUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "DPUp",
        "normalized": "",
        "package": "piet",
        "partial": "DPUp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Dark",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Dark",
        "fct-source": "src/Language-Piet-Types.html#Lightness",
        "fct-type": "function",
        "title": "Dark"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Dark",
        "normalized": "",
        "package": "piet",
        "partial": "Dark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:EmptyInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty label\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "EmptyInfo",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "EmptyInfo"
      },
      "index": {
        "description": "The empty label",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "EmptyInfo",
        "normalized": "",
        "package": "piet",
        "partial": "Empty Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Green",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Green",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Green",
        "normalized": "",
        "package": "piet",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Hue",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Hue !Lightness !HueColour",
        "fct-source": "src/Language-Piet-Types.html#Colour",
        "fct-type": "function",
        "title": "Hue"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Hue",
        "normalized": "",
        "package": "piet",
        "partial": "Hue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:LabelBorder",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "LabelBorder",
        "fct-source": "src/Language-Piet-Types.html#LabelBorder",
        "fct-type": "function",
        "title": "LabelBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "LabelBorder",
        "normalized": "",
        "package": "piet",
        "partial": "Label Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:LabelInfo",
      "description": {
        "fct-descr": "\u003cp\u003eLabel with a size and four borders\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "LabelInfo",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "LabelInfo"
      },
      "index": {
        "description": "Label with size and four borders",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "LabelInfo",
        "normalized": "",
        "package": "piet",
        "partial": "Label Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Light",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Light",
        "fct-source": "src/Language-Piet-Types.html#Lightness",
        "fct-type": "function",
        "title": "Light"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Light",
        "normalized": "",
        "package": "piet",
        "partial": "Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Magenta",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Magenta",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Magenta",
        "normalized": "",
        "package": "piet",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Normal",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Normal",
        "fct-source": "src/Language-Piet-Types.html#Lightness",
        "fct-type": "function",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Normal",
        "normalized": "",
        "package": "piet",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:PietChar",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "PietChar",
        "fct-source": "src/Language-Piet-Types.html#PietType",
        "fct-type": "function",
        "title": "PietChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "PietChar",
        "normalized": "",
        "package": "piet",
        "partial": "Piet Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:PietNumber",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "PietNumber",
        "fct-source": "src/Language-Piet-Types.html#PietType",
        "fct-type": "function",
        "title": "PietNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "PietNumber",
        "normalized": "",
        "package": "piet",
        "partial": "Piet Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Program",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Program",
        "fct-source": "src/Language-Piet-Types.html#Program",
        "fct-type": "function",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Program",
        "normalized": "",
        "package": "piet",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Red",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Red",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Red",
        "normalized": "",
        "package": "piet",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:White",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "White",
        "fct-source": "src/Language-Piet-Types.html#Colour",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "White",
        "normalized": "",
        "package": "piet",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Yellow",
      "description": {
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Yellow",
        "fct-source": "src/Language-Piet-Types.html#HueColour",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "Yellow",
        "normalized": "",
        "package": "piet",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:_labelSize",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of pixels\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!Int",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "_labelSize"
      },
      "index": {
        "description": "Number of pixels",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "_labelSize",
        "normalized": "",
        "package": "piet",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:addCoordinates",
      "description": {
        "fct-descr": "\u003cp\u003eMove coordinates by one in the direction of the \u003ccode\u003e\u003ca\u003eDirectionPointer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "DirectionPointer-\u003e Int-\u003e Int-\u003e (Int, Int)",
        "fct-type": "function",
        "title": "addCoordinates"
      },
      "index": {
        "description": "Move coordinates by one in the direction of the DirectionPointer",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "addCoordinates",
        "normalized": "DirectionPointer-\u003eInt-\u003eInt-\u003e(Int,Int)",
        "package": "piet",
        "partial": "Coordinates",
        "signature": "DirectionPointer-\u003eInt-\u003eInt-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:addPixel",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a pixel to a \u003ccode\u003e\u003ca\u003eLabelInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e Int -\u003e LabelInfo -\u003e LabelInfo",
        "fct-source": "src/Language-Piet-Types.html#addPixel",
        "fct-type": "function",
        "title": "addPixel"
      },
      "index": {
        "description": "Add pixel to LabelInfo",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "addPixel",
        "normalized": "Int-\u003eInt-\u003eLabelInfo-\u003eLabelInfo",
        "package": "piet",
        "partial": "Pixel",
        "signature": "Int-\u003eInt-\u003eLabelInfo-\u003eLabelInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:borderCoord",
      "description": {
        "fct-descr": "\u003cp\u003eWhere the border is located\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!Int",
        "fct-source": "src/Language-Piet-Types.html#LabelBorder",
        "fct-type": "function",
        "title": "borderCoord"
      },
      "index": {
        "description": "Where the border is located",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "borderCoord",
        "normalized": "",
        "package": "piet",
        "partial": "Coord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:borderMax",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum \"other\" coordinate of the border\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!Int",
        "fct-source": "src/Language-Piet-Types.html#LabelBorder",
        "fct-type": "function",
        "title": "borderMax"
      },
      "index": {
        "description": "Maximum other coordinate of the border",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "borderMax",
        "normalized": "",
        "package": "piet",
        "partial": "Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:borderMin",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum \"other\" coordinate of the border\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!Int",
        "fct-source": "src/Language-Piet-Types.html#LabelBorder",
        "fct-type": "function",
        "title": "borderMin"
      },
      "index": {
        "description": "Minimum other coordinate of the border",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "borderMin",
        "normalized": "",
        "package": "piet",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:hueChange",
      "description": {
        "fct-descr": "\u003cp\u003eHue difference between two \u003ccode\u003e\u003ca\u003eHueColour\u003c/a\u003e\u003c/code\u003es. \u003ccode\u003e\u003ca\u003eRed\u003c/a\u003e\u003c/code\u003e means no change,\n \u003ccode\u003e\u003ca\u003eYellow\u003c/a\u003e\u003c/code\u003e one step and so forth.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "HueColour -\u003e HueColour -\u003e HueColour",
        "fct-source": "src/Language-Piet-Types.html#hueChange",
        "fct-type": "function",
        "title": "hueChange"
      },
      "index": {
        "description": "Hue difference between two HueColour Red means no change Yellow one step and so forth",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "hueChange",
        "normalized": "HueColour-\u003eHueColour-\u003eHueColour",
        "package": "piet",
        "partial": "Change",
        "signature": "HueColour-\u003eHueColour-\u003eHueColour"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:image",
      "description": {
        "fct-descr": "\u003cp\u003eOriginal image\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Image Colour",
        "fct-source": "src/Language-Piet-Types.html#Program",
        "fct-type": "function",
        "title": "image"
      },
      "index": {
        "description": "Original image",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "image",
        "normalized": "",
        "package": "piet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgHeight",
      "description": {
        "fct-descr": "\u003cp\u003eHeight of an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e in pixels.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Image a -\u003e Int",
        "fct-source": "src/Language-Piet-Types.html#imgHeight",
        "fct-type": "function",
        "title": "imgHeight"
      },
      "index": {
        "description": "Height of an Image in pixels",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "imgHeight",
        "normalized": "Image a-\u003eInt",
        "package": "piet",
        "partial": "Height",
        "signature": "Image a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgInRange",
      "description": {
        "fct-descr": "\u003cp\u003eFind out, if the given coordinates are within the \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e\n borders (which are \u003ccode\u003e (0, 0) .. (width-1, height-1)\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int-\u003e Int-\u003e Image a-\u003e Bool",
        "fct-type": "function",
        "title": "imgInRange"
      },
      "index": {
        "description": "Find out if the given coordinates are within the Image borders which are width-1 height-1",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "imgInRange",
        "normalized": "Int-\u003eInt-\u003eImage a-\u003eBool",
        "package": "piet",
        "partial": "In Range",
        "signature": "Int-\u003eInt-\u003eImage a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgNew",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a new image.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int-\u003e Int-\u003e [((Int, Int), a)]-\u003e Image a",
        "fct-type": "function",
        "title": "imgNew"
      },
      "index": {
        "description": "Build new image",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "imgNew",
        "normalized": "Int-\u003eInt-\u003e[((Int,Int),a)]-\u003eImage a",
        "package": "piet",
        "partial": "New",
        "signature": "Int-\u003eInt-\u003e[((Int,Int),a)]-\u003eImage a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgPixel",
      "description": {
        "fct-descr": "\u003cp\u003eAccess a pixel at given x/y-coordinates.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int-\u003e Int-\u003e Image a-\u003e a",
        "fct-type": "function",
        "title": "imgPixel"
      },
      "index": {
        "description": "Access pixel at given y-coordinates",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "imgPixel",
        "normalized": "Int-\u003eInt-\u003eImage a-\u003ea",
        "package": "piet",
        "partial": "Pixel",
        "signature": "Int-\u003eInt-\u003eImage a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgSetPixel",
      "description": {
        "fct-descr": "\u003cp\u003eSet a pixel at given x/y-coordinates.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e Int -\u003e a -\u003e Image a -\u003e Image a",
        "fct-source": "src/Language-Piet-Types.html#imgSetPixel",
        "fct-type": "function",
        "title": "imgSetPixel"
      },
      "index": {
        "description": "Set pixel at given y-coordinates",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "imgSetPixel",
        "normalized": "Int-\u003eInt-\u003ea-\u003eImage a-\u003eImage a",
        "package": "piet",
        "partial": "Set Pixel",
        "signature": "Int-\u003eInt-\u003ea-\u003eImage a-\u003eImage a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgWidth",
      "description": {
        "fct-descr": "\u003cp\u003eWidth of an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e in pixels.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Image a -\u003e Int",
        "fct-source": "src/Language-Piet-Types.html#imgWidth",
        "fct-type": "function",
        "title": "imgWidth"
      },
      "index": {
        "description": "Width of an Image in pixels",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "imgWidth",
        "normalized": "Image a-\u003eInt",
        "package": "piet",
        "partial": "Width",
        "signature": "Image a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:info",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the labels\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "IntMap LabelInfo",
        "fct-source": "src/Language-Piet-Types.html#Program",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "Information about the labels",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "info",
        "normalized": "",
        "package": "piet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:isBlocked",
      "description": {
        "fct-descr": "\u003cp\u003eReturns if a given codel in a program is blocked in the Piet\n sense (which is the case when it is out of the image's range or\n \u003ccode\u003e\u003ca\u003eBlack\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e Int -\u003e Program -\u003e Bool",
        "fct-source": "src/Language-Piet-Types.html#isBlocked",
        "fct-type": "function",
        "title": "isBlocked"
      },
      "index": {
        "description": "Returns if given codel in program is blocked in the Piet sense which is the case when it is out of the image range or Black",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "isBlocked",
        "normalized": "Int-\u003eInt-\u003eProgram-\u003eBool",
        "package": "piet",
        "partial": "Blocked",
        "signature": "Int-\u003eInt-\u003eProgram-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelBottom",
      "description": {
        "fct-descr": "\u003cp\u003eBottom border\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!LabelBorder",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "labelBottom"
      },
      "index": {
        "description": "Bottom border",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "labelBottom",
        "normalized": "",
        "package": "piet",
        "partial": "Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelLeft",
      "description": {
        "fct-descr": "\u003cp\u003eleft border\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!LabelBorder",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "labelLeft"
      },
      "index": {
        "description": "left border",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "labelLeft",
        "normalized": "",
        "package": "piet",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelRight",
      "description": {
        "fct-descr": "\u003cp\u003eRight border\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!LabelBorder",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "labelRight"
      },
      "index": {
        "description": "Right border",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "labelRight",
        "normalized": "",
        "package": "piet",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelSize",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of pixels in a label. This function is defined for all\n constructors of \u003ccode\u003e\u003ca\u003eLabelInfo\u003c/a\u003e\u003c/code\u003e so, in contrast to \u003ccode\u003e\u003ca\u003e_labelSize\u003c/a\u003e\u003c/code\u003e, it\n won't fail on \u003ccode\u003e\u003ca\u003eEmptyInfo\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "LabelInfo -\u003e Int",
        "fct-source": "src/Language-Piet-Types.html#labelSize",
        "fct-type": "function",
        "title": "labelSize"
      },
      "index": {
        "description": "Number of pixels in label This function is defined for all constructors of LabelInfo so in contrast to labelSize it won fail on EmptyInfo",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "labelSize",
        "normalized": "LabelInfo-\u003eInt",
        "package": "piet",
        "partial": "Size",
        "signature": "LabelInfo-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelTop",
      "description": {
        "fct-descr": "\u003cp\u003eTop border\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "!LabelBorder",
        "fct-source": "src/Language-Piet-Types.html#LabelInfo",
        "fct-type": "function",
        "title": "labelTop"
      },
      "index": {
        "description": "Top border",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "labelTop",
        "normalized": "",
        "package": "piet",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:lightnessChange",
      "description": {
        "fct-descr": "\u003cp\u003eLightness difference between Piet lightness values. \u003ccode\u003e\u003ca\u003eLight\u003c/a\u003e\u003c/code\u003e\n represents no change, \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e one step darker and \u003ccode\u003e\u003ca\u003eDark\u003c/a\u003e\u003c/code\u003e\n two steps darker.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Lightness -\u003e Lightness -\u003e Lightness",
        "fct-source": "src/Language-Piet-Types.html#lightnessChange",
        "fct-type": "function",
        "title": "lightnessChange"
      },
      "index": {
        "description": "Lightness difference between Piet lightness values Light represents no change Normal one step darker and Dark two steps darker",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "lightnessChange",
        "normalized": "Lightness-\u003eLightness-\u003eLightness",
        "package": "piet",
        "partial": "Change",
        "signature": "Lightness-\u003eLightness-\u003eLightness"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eLabelled image\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Image LabelKey",
        "fct-source": "src/Language-Piet-Types.html#Program",
        "fct-type": "function",
        "title": "mask"
      },
      "index": {
        "description": "Labelled image",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "mask",
        "normalized": "",
        "package": "piet",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:rgb2Colour",
      "description": {
        "fct-descr": "\u003cp\u003eConverts red/green/blue values to a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e. If the supplied\n arguments do not form a proper Piet \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWhite\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "w-\u003e w-\u003e w-\u003e Colour",
        "fct-type": "function",
        "title": "rgb2Colour"
      },
      "index": {
        "description": "Converts red green blue values to Colour If the supplied arguments do not form proper Piet Colour White is returned",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "rgb2Colour",
        "normalized": "a-\u003ea-\u003ea-\u003eColour",
        "package": "piet",
        "partial": "Colour",
        "signature": "w-\u003ew-\u003ew-\u003eColour"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:rgba2Colour",
      "description": {
        "fct-descr": "\u003cp\u003eConverts red/green/blue/alpha values to a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e. The alpha channel\n is ignored for now, but may be used in future implementations or\n dialects, so please use this function instead of \u003ccode\u003e\u003ca\u003ergb2Colour\u003c/a\u003e\u003c/code\u003e whenever\n an alpha channel is available.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "w-\u003e w-\u003e w-\u003e w-\u003e Colour",
        "fct-type": "function",
        "title": "rgba2Colour"
      },
      "index": {
        "description": "Converts red green blue alpha values to Colour The alpha channel is ignored for now but may be used in future implementations or dialects so please use this function instead of rgb2Colour whenever an alpha channel is available",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "rgba2Colour",
        "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eColour",
        "package": "piet",
        "partial": "Colour",
        "signature": "w-\u003ew-\u003ew-\u003ew-\u003eColour"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a \u003ccode\u003e\u003ca\u003eDirectionPointer\u003c/a\u003e\u003c/code\u003e clockwise (counter clockwise if the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is\n negative) a given number of times. \n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e DirectionPointer -\u003e DirectionPointer",
        "fct-source": "src/Language-Piet-Types.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "Rotate DirectionPointer clockwise counter clockwise if the Int is negative given number of times",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "rotate",
        "normalized": "Int-\u003eDirectionPointer-\u003eDirectionPointer",
        "package": "piet",
        "partial": "",
        "signature": "Int-\u003eDirectionPointer-\u003eDirectionPointer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:toggle",
      "description": {
        "fct-descr": "\u003cp\u003eToggle a \u003ccode\u003e\u003ca\u003eCodelChooser\u003c/a\u003e\u003c/code\u003e a given number of times.\n\u003c/p\u003e",
        "fct-module": "Language.Piet.Types",
        "fct-package": "piet",
        "fct-signature": "Int -\u003e CodelChooser -\u003e CodelChooser",
        "fct-source": "src/Language-Piet-Types.html#toggle",
        "fct-type": "function",
        "title": "toggle"
      },
      "index": {
        "description": "Toggle CodelChooser given number of times",
        "hierarchy": "Language Piet Types",
        "module": "Language.Piet.Types",
        "name": "toggle",
        "normalized": "Int-\u003eCodelChooser-\u003eCodelChooser",
        "package": "piet",
        "partial": "",
        "signature": "Int-\u003eCodelChooser-\u003eCodelChooser"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComprehensive module of the Piet interpreter. See\n \u003ca\u003ehttp://www.dangermouse.net/esoteric/piet.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Piet",
        "fct-package": "piet",
        "fct-signature": "module",
        "fct-source": "src/Language-Piet.html",
        "fct-type": "module",
        "title": "Piet"
      },
      "index": {
        "description": "Comprehensive module of the Piet interpreter See http www.dangermouse.net esoteric piet.html",
        "hierarchy": "Language Piet",
        "module": "Language.Piet",
        "name": "Piet",
        "normalized": "",
        "package": "piet",
        "partial": "Piet",
        "signature": ""
      }
    }
  }
]