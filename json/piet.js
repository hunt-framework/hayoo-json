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
        "word": "piet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a customized stack for the Piet programming\n language.\n\u003c/p\u003e\u003cp\u003eIn addition to the common \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epop\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etop\u003c/a\u003e\u003c/code\u003e operations, the\n a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e provides a \u003ccode\u003e\u003ca\u003eroll\u003c/a\u003e\u003c/code\u003e (see below) command, which is the\n reason for using a \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003euence and not a list as underlying data\n structure.\n\u003c/p\u003e\u003cp\u003eWhenever the \u003cem\u003eO\u003c/em\u003e-notation is used, \u003cem\u003en\u003c/em\u003e describes the number of elements\n within the stack.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RollStack",
          "name": "RollStack",
          "package": "piet",
          "source": "src/Data-RollStack.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements customized stack for the Piet programming language In addition to the common push pop and top operations the RollStack provides roll see below command which is the reason for using Seq uence and not list as underlying data structure Whenever the notation is used describes the number of elements within the stack",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "RollStack",
          "package": "piet",
          "partial": "Roll Stack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "RollStack",
          "package": "piet",
          "source": "src/Data-RollStack.html#RollStack",
          "type": "data"
        },
        "index": {
          "description": "The RollStack type",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "RollStack",
          "package": "piet",
          "partial": "Roll Stack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#t:RollStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct an empty \u003ccode\u003eStack\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "empty",
          "package": "piet",
          "signature": "RollStack a",
          "source": "src/Data-RollStack.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty Stack",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "empty",
          "package": "piet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a list into a \u003ccode\u003eStack\u003c/code\u003e. The list's head will be\n the first element of the \u003ccode\u003eStack\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "fromList",
          "package": "piet",
          "signature": "[a] -\u003e RollStack a",
          "source": "src/Data-RollStack.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list into Stack The list head will be the first element of the Stack",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "fromList",
          "normalized": "[a]-\u003eRollStack a",
          "package": "piet",
          "partial": "List",
          "signature": "[a]-\u003eRollStack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Tests, if a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "isEmpty",
          "package": "piet",
          "signature": "RollStack a -\u003e Bool",
          "source": "src/Data-RollStack.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Tests if RollStack is empty",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "isEmpty",
          "normalized": "RollStack a-\u003eBool",
          "package": "piet",
          "partial": "Empty",
          "signature": "RollStack a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Pop the top element from the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e if it is not empty.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "pop",
          "package": "piet",
          "signature": "RollStack a -\u003e Maybe (a, RollStack a)",
          "source": "src/Data-RollStack.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Pop the top element from the RollStack if it is not empty",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "pop",
          "normalized": "RollStack a-\u003eMaybe(a,RollStack a)",
          "package": "piet",
          "signature": "RollStack a-\u003eMaybe(a,RollStack a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Push an element on the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "push",
          "package": "piet",
          "signature": "a -\u003e RollStack a -\u003e RollStack a",
          "source": "src/Data-RollStack.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push an element on the RollStack",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "push",
          "normalized": "a-\u003eRollStack a-\u003eRollStack a",
          "package": "piet",
          "signature": "a-\u003eRollStack a-\u003eRollStack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log(n))\u003c/em\u003e. A single roll to depth \u003cem\u003en\u003c/em\u003e is defined as burying the top\n value on the stack \u003cem\u003en\u003c/em\u003e deep and bringing all values above it up by 1\n place. A negative number of rolls rolls in the opposite direction. A\n negative depth results in an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "roll",
          "package": "piet",
          "signature": "Int-\u003e Int-\u003e RollStack a-\u003e RollStack a",
          "type": "function"
        },
        "index": {
          "description": "log single roll to depth is defined as burying the top value on the stack deep and bringing all values above it up by place negative number of rolls rolls in the opposite direction negative depth results in an error",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "roll",
          "normalized": "Int-\u003eInt-\u003eRollStack a-\u003eRollStack a",
          "package": "piet",
          "signature": "Int-\u003eInt-\u003eRollStack a-\u003eRollStack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e containing a single element.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "singleton",
          "package": "piet",
          "signature": "a -\u003e RollStack a",
          "source": "src/Data-RollStack.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct RollStack containing single element",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "singleton",
          "normalized": "a-\u003eRollStack a",
          "package": "piet",
          "signature": "a-\u003eRollStack a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e to a list. The \u003ccode\u003e\u003ca\u003etop\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e\n will be the list's head.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "toList",
          "package": "piet",
          "signature": "RollStack a -\u003e [a]",
          "source": "src/Data-RollStack.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert RollStack to list The top of the RollStack will be the list head",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "toList",
          "normalized": "RollStack a-\u003e[a]",
          "package": "piet",
          "partial": "List",
          "signature": "RollStack a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Looks at the top element of the \u003ccode\u003e\u003ca\u003eRollStack\u003c/a\u003e\u003c/code\u003e. Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stack is empty.\n\u003c/p\u003e",
          "module": "Data.RollStack",
          "name": "top",
          "package": "piet",
          "signature": "RollStack a -\u003e Maybe a",
          "source": "src/Data-RollStack.html#top",
          "type": "function"
        },
        "index": {
          "description": "Looks at the top element of the RollStack Returns Nothing if the stack is empty",
          "hierarchy": "Data RollStack",
          "module": "Data.RollStack",
          "name": "top",
          "normalized": "RollStack a-\u003eMaybe a",
          "package": "piet",
          "signature": "RollStack a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Data-RollStack.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the implementation of the Piet language\n constructs. Most of the documentation is copied from the\n Piet specification at \u003ca\u003ehttp://www.dangermouse.net/esoteric/piet.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Piet.Commands",
          "name": "Commands",
          "package": "piet",
          "source": "src/Language-Piet-Commands.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the implementation of the Piet language constructs Most of the documentation is copied from the Piet specification at http www.dangermouse.net esoteric piet.html",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "Commands",
          "package": "piet",
          "partial": "Commands",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack, adds them, and pushes the\n result back on the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_add",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_add",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack adds them and pushes the result back on the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_add",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack, calculates the integer division\n of the second top value by the top value, and pushes the result back on\n the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_divide",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_divide",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack calculates the integer division of the second top value by the top value and pushes the result back on the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_divide",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes a copy of the top value on the stack on to the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_duplicate",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_duplicate",
          "type": "function"
        },
        "index": {
          "description": "Pushes copy of the top value on the stack on to the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_duplicate",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack, and pushes 1 on to the stack if\n the second top value is greater than the top value, and pushes 0 if it\n is not greater.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_greater",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_greater",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack and pushes on to the stack if the second top value is greater than the top value and pushes if it is not greater",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_greater",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a char from STDIN and pushes it on to the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_in_char",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_in_char",
          "type": "function"
        },
        "index": {
          "description": "Reads char from STDIN and pushes it on to the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_in_char",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_in_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a number from STDIN and pushes it on to the stack. \n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_in_number",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_in_number",
          "type": "function"
        },
        "index": {
          "description": "Reads number from STDIN and pushes it on to the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_in_number",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_in_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack, calculates the second top value\n modulo the top value, and pushes the result back on the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_mod",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_mod",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack calculates the second top value modulo the top value and pushes the result back on the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_mod",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack, multiplies them, and pushes the\n result back on the stack. \n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_multiply",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_multiply",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack multiplies them and pushes the result back on the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_multiply",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_multiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the top value of the stack with 0 if it is non-zero, and 1 if\n it is zero.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_not",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_not",
          "type": "function"
        },
        "index": {
          "description": "Replaces the top value of the stack with if it is non-zero and if it is zero",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_not",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top value off the stack and prints it to STDOUT\n as a char.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_out_char",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_out_char",
          "type": "function"
        },
        "index": {
          "description": "Pops the top value off the stack and prints it to STDOUT as char",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_out_char",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_out_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top value off the stack and prints it to STDOUT\n as a number.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_out_number",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_out_number",
          "type": "function"
        },
        "index": {
          "description": "Pops the top value off the stack and prints it to STDOUT as number",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_out_number",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_out_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top value off the stack and rotates the DP clockwise that many\n steps (anticlockwise if negative).\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_pointer",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_pointer",
          "type": "function"
        },
        "index": {
          "description": "Pops the top value off the stack and rotates the DP clockwise that many steps anticlockwise if negative",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_pointer",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top value off the stack and discards it.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_pop",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_pop",
          "type": "function"
        },
        "index": {
          "description": "Pops the top value off the stack and discards it",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_pop",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes the value of the colour block just exited on to the stack.\n Note that values of colour blocks are not automatically pushed on\n to the stack - this push operation must be explicitly carried out.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_push",
          "package": "piet",
          "signature": "Int -\u003e PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_push",
          "type": "function"
        },
        "index": {
          "description": "Pushes the value of the colour block just exited on to the stack Note that values of colour blocks are not automatically pushed on to the stack this push operation must be explicitly carried out",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_push",
          "normalized": "Int-\u003ePietMonad()",
          "package": "piet",
          "signature": "Int-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack and \"rolls\" the remaining stack\n entries to a depth equal to the second value popped, by a number of\n rolls equal to the first value popped. A single roll to depth \u003cem\u003en\u003c/em\u003e is\n defined as burying the top value on the stack \u003cem\u003en\u003c/em\u003e deep and bringing all\n values above it up by 1 place. A negative number of rolls rolls in the\n opposite direction. A negative depth is an error and the command is\n ignored.\n\u003c/p\u003e\u003cp\u003eIn this implementation, \"ignored\" means that the top two values\n remain pushed off the stack, while the rest of the stack remains\n unmodified.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_roll",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_roll",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack and rolls the remaining stack entries to depth equal to the second value popped by number of rolls equal to the first value popped single roll to depth is defined as burying the top value on the stack deep and bringing all values above it up by place negative number of rolls rolls in the opposite direction negative depth is an error and the command is ignored In this implementation ignored means that the top two values remain pushed off the stack while the rest of the stack remains unmodified",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_roll",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top two values off the stack, subtracts the top value from\n the second top value, and pushes the result back on the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_subtract",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_subtract",
          "type": "function"
        },
        "index": {
          "description": "Pops the top two values off the stack subtracts the top value from the second top value and pushes the result back on the stack",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_subtract",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_subtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top value off the stack and toggles the CC that many times.\n\u003c/p\u003e",
          "module": "Language.Piet.Commands",
          "name": "piet_switch",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-Commands.html#piet_switch",
          "type": "function"
        },
        "index": {
          "description": "Pops the top value off the stack and toggles the CC that many times",
          "hierarchy": "Language Piet Commands",
          "module": "Language.Piet.Commands",
          "name": "piet_switch",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Commands.html#v:piet_switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the image processing part of this library. It\n is able to do basic image I/O and provides funcions for labelling\n images and extracting Piet-relevant information at the same time.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Piet.Compiler",
          "name": "Compiler",
          "package": "piet",
          "source": "src/Language-Piet-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the image processing part of this library It is able to do basic image and provides funcions for labelling images and extracting Piet-relevant information at the same time",
          "hierarchy": "Language Piet Compiler",
          "module": "Language.Piet.Compiler",
          "name": "Compiler",
          "package": "piet",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to a Piet \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Compiler",
          "name": "compile",
          "package": "piet",
          "signature": "Image Colour -\u003e Program",
          "source": "src/Language-Piet-Compiler.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Compile an Image Colour to Piet Program",
          "hierarchy": "Language Piet Compiler",
          "module": "Language.Piet.Compiler",
          "name": "compile",
          "normalized": "Image Colour-\u003eProgram",
          "package": "piet",
          "signature": "Image Colour-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e holding Piet \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003es from a given file.\n If the codel length is known, it should be passed as \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n argument, otherwise, it is guessed from the file. Note that\n \"codel length\" means the edge length of the codels and\n not their size.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis function is not thread safe due to imlib2!\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Language.Piet.Compiler",
          "name": "imgFromFile",
          "package": "piet",
          "signature": "Maybe Int-\u003e FilePath-\u003e IO (Either ImlibLoadError (Image Colour))",
          "type": "function"
        },
        "index": {
          "description": "Load an Image holding Piet Colour from given file If the codel length is known it should be passed as Just argument otherwise it is guessed from the file Note that codel length means the edge length of the codels and not their size This function is not thread safe due to imlib2",
          "hierarchy": "Language Piet Compiler",
          "module": "Language.Piet.Compiler",
          "name": "imgFromFile",
          "normalized": "Maybe Int-\u003eFilePath-\u003eIO(Either ImlibLoadError(Image Colour))",
          "package": "piet",
          "partial": "From File",
          "signature": "Maybe Int-\u003eFilePath-\u003eIO(Either ImlibLoadError(Image Colour))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:imgFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel an image with 4-neighbourship and equivalence as neighbouring\n condition, which is \u003ccode\u003e\u003ccode\u003e\u003ca\u003elabel4With\u003c/a\u003e\u003c/code\u003e (==)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Compiler",
          "name": "label4",
          "package": "piet",
          "signature": "Image a -\u003e (Image LabelKey, IntMap LabelInfo)",
          "source": "src/Language-Piet-Compiler.html#label4",
          "type": "function"
        },
        "index": {
          "description": "Label an image with neighbourship and equivalence as neighbouring condition which is label4With",
          "hierarchy": "Language Piet Compiler",
          "module": "Language.Piet.Compiler",
          "name": "label4",
          "normalized": "Image a-\u003e(Image LabelKey,IntMap LabelInfo)",
          "package": "piet",
          "signature": "Image a-\u003e(Image LabelKey,IntMap LabelInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:label4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels an image with 4-neighbourship.\n\u003c/p\u003e",
          "module": "Language.Piet.Compiler",
          "name": "label4With",
          "package": "piet",
          "signature": "(a -\u003e a -\u003e Bool)-\u003e Image a-\u003e (Image LabelKey, IntMap LabelInfo)",
          "type": "function"
        },
        "index": {
          "description": "Labels an image with neighbourship",
          "hierarchy": "Language Piet Compiler",
          "module": "Language.Piet.Compiler",
          "name": "label4With",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eImage a-\u003e(Image LabelKey,IntMap LabelInfo)",
          "package": "piet",
          "partial": "With",
          "signature": "(a-\u003ea-\u003eBool)-\u003eImage a-\u003e(Image LabelKey,IntMap LabelInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Compiler.html#v:label4With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an interpreter for the Piet programming\n language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "Interpreter",
          "package": "piet",
          "source": "src/Language-Piet-Interpreter.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements an interpreter for the Piet programming language",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "Interpreter",
          "package": "piet",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a colour difference calculated by \u003ccode\u003eLanguage.Piet.Types.colourChange\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003elightnessChange\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePietMonad\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e, compare \u003ccode\u003e\u003ca\u003ecolours2Command\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "colourDiff2Command",
          "package": "piet",
          "signature": "Lightness -\u003e HueColour -\u003e Int -\u003e PietMonad ()",
          "source": "src/Language-Piet-Interpreter.html#colourDiff2Command",
          "type": "function"
        },
        "index": {
          "description": "Converts colour difference calculated by Language.Piet.Types.colourChange and lightnessChange to PietMonad compare colours2Command",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "colourDiff2Command",
          "normalized": "Lightness-\u003eHueColour-\u003eInt-\u003ePietMonad()",
          "package": "piet",
          "partial": "Diff Command",
          "signature": "Lightness-\u003eHueColour-\u003eInt-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:colourDiff2Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePiet's commands are issued by a colour change, see\n \u003ca\u003ehttp://www.dangermouse.net/esoteric/piet.html\u003c/a\u003e. This function\n takes two neighbouring colours and returns the resulting Piet\n command, which is a function consuming (or more likely,\n ignoring) an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e (the size of the colour block that is being\n left) and returning a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePietMonad\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "colours2Command",
          "package": "piet",
          "signature": "Lightness-\u003e HueColour-\u003e Lightness-\u003e HueColour-\u003e Int-\u003e PietMonad ()",
          "type": "function"
        },
        "index": {
          "description": "Piet commands are issued by colour change see http www.dangermouse.net esoteric piet.html This function takes two neighbouring colours and returns the resulting Piet command which is function consuming or more likely ignoring an Int the size of the colour block that is being left and returning PietMonad",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "colours2Command",
          "normalized": "Lightness-\u003eHueColour-\u003eLightness-\u003eHueColour-\u003eInt-\u003ePietMonad()",
          "package": "piet",
          "partial": "Command",
          "signature": "Lightness-\u003eHueColour-\u003eLightness-\u003eHueColour-\u003eInt-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:colours2Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a Piet \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "interpret",
          "package": "piet",
          "signature": "Program -\u003e PietMonad ()",
          "source": "src/Language-Piet-Interpreter.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Interpret Piet Program",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "interpret",
          "normalized": "Program-\u003ePietMonad()",
          "package": "piet",
          "signature": "Program-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a way out of the current \u003ccode\u003e\u003ca\u003eWhite\u003c/a\u003e\u003c/code\u003e block. \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e if there\n is no way out.\n\u003c/p\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "interpretWhite",
          "package": "piet",
          "signature": "Program -\u003e PietMonad ()",
          "source": "src/Language-Piet-Interpreter.html#interpretWhite",
          "type": "function"
        },
        "index": {
          "description": "Find way out of the current White block terminate if there is no way out",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "interpretWhite",
          "normalized": "Program-\u003ePietMonad()",
          "package": "piet",
          "partial": "White",
          "signature": "Program-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:interpretWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind coordinates and resulting DP/CC of the successing non-black block,\n if it exists, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "nonBlackSucc",
          "package": "piet",
          "signature": "Program-\u003e LabelInfo-\u003e DirectionPointer-\u003e CodelChooser-\u003e Maybe (Int, Int, DirectionPointer, CodelChooser)",
          "type": "function"
        },
        "index": {
          "description": "Find coordinates and resulting DP CC of the successing non-black block if it exists Nothing otherwise",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "nonBlackSucc",
          "normalized": "Program-\u003eLabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003eMaybe(Int,Int,DirectionPointer,CodelChooser)",
          "package": "piet",
          "partial": "Black Succ",
          "signature": "Program-\u003eLabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003eMaybe(Int,Int,DirectionPointer,CodelChooser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:nonBlackSucc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a label, a \u003ccode\u003e\u003ca\u003eDirectionPointer\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eCodelChooser\u003c/a\u003e\u003c/code\u003e, this\n function finds the coordinates of the next block to enter. These\n coordinates are not guaranteed to be valid, they might be out of\n range or point to a \u003ccode\u003e\u003ca\u003eBlack\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eWhite\u003c/a\u003e\u003c/code\u003e block.\n\u003c/p\u003e",
          "module": "Language.Piet.Interpreter",
          "name": "succCoordinates",
          "package": "piet",
          "signature": "LabelInfo-\u003e DirectionPointer-\u003e CodelChooser-\u003e (Int, Int)",
          "type": "function"
        },
        "index": {
          "description": "Given label DirectionPointer and CodelChooser this function finds the coordinates of the next block to enter These coordinates are not guaranteed to be valid they might be out of range or point to Black or White block",
          "hierarchy": "Language Piet Interpreter",
          "module": "Language.Piet.Interpreter",
          "name": "succCoordinates",
          "normalized": "LabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003e(Int,Int)",
          "package": "piet",
          "partial": "Coordinates",
          "signature": "LabelInfo-\u003eDirectionPointer-\u003eCodelChooser-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Interpreter.html#v:succCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module implementing the Piet interpreter as a monad. The monad\n encapsulates the interpreter's status, i. e. the side-effects of\n Piet programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "PietMonad",
          "package": "piet",
          "source": "src/Language-Piet-PietMonad.html",
          "type": "module"
        },
        "index": {
          "description": "module implementing the Piet interpreter as monad The monad encapsulates the interpreter status the side-effects of Piet programs",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "PietMonad",
          "package": "piet",
          "partial": "Piet Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe status of a Piet interpreter.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "InterpreterStatus",
          "package": "piet",
          "source": "src/Language-Piet-PietMonad.html#InterpreterStatus",
          "type": "data"
        },
        "index": {
          "description": "The status of Piet interpreter",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "InterpreterStatus",
          "package": "piet",
          "partial": "Interpreter Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#t:InterpreterStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the importance of a log message.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "LogLevel",
          "package": "piet",
          "source": "src/Language-Piet-PietMonad.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Describes the importance of log message",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "LogLevel",
          "package": "piet",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad encapsulating the status of a Piet interpreter.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "PietMonad",
          "package": "piet",
          "source": "src/Language-Piet-PietMonad.html#PietMonad",
          "type": "data"
        },
        "index": {
          "description": "monad encapsulating the status of Piet interpreter",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "PietMonad",
          "package": "piet",
          "partial": "Piet Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#t:PietMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recoverable error has occured.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "Error",
          "package": "piet",
          "signature": "Error",
          "source": "src/Language-Piet-PietMonad.html#LogLevel",
          "type": "function"
        },
        "index": {
          "description": "recoverable error has occured",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "Error",
          "package": "piet",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fatal error has occured.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "Fatal",
          "package": "piet",
          "signature": "Fatal",
          "source": "src/Language-Piet-PietMonad.html#LogLevel",
          "type": "function"
        },
        "index": {
          "description": "fatal error has occured",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "Fatal",
          "package": "piet",
          "partial": "Fatal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Fatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsual log level.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "Info",
          "package": "piet",
          "signature": "Info",
          "source": "src/Language-Piet-PietMonad.html#LogLevel",
          "type": "function"
        },
        "index": {
          "description": "Usual log level",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "Info",
          "package": "piet",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRather verbosed output.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "Verbosed",
          "package": "piet",
          "signature": "Verbosed",
          "source": "src/Language-Piet-PietMonad.html#LogLevel",
          "type": "function"
        },
        "index": {
          "description": "Rather verbosed output",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "Verbosed",
          "package": "piet",
          "partial": "Verbosed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:Verbosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current Codel Chooser.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "getCC",
          "package": "piet",
          "signature": "PietMonad CodelChooser",
          "source": "src/Language-Piet-PietMonad.html#getCC",
          "type": "function"
        },
        "index": {
          "description": "Returns the current Codel Chooser",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "getCC",
          "package": "piet",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:getCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current Direction Pointer.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "getDP",
          "package": "piet",
          "signature": "PietMonad DirectionPointer",
          "source": "src/Language-Piet-PietMonad.html#getDP",
          "type": "function"
        },
        "index": {
          "description": "Returns the current Direction Pointer",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "getDP",
          "package": "piet",
          "partial": "DP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:getDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current position.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "getPosition",
          "package": "piet",
          "signature": "PietMonad (Int, Int)",
          "source": "src/Language-Piet-PietMonad.html#getPosition",
          "type": "function"
        },
        "index": {
          "description": "Returns the current position",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "getPosition",
          "normalized": "PietMonad(Int,Int)",
          "package": "piet",
          "partial": "Position",
          "signature": "PietMonad(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:getPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue log message with given priority.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "logMessage",
          "package": "piet",
          "signature": "LogLevel -\u003e String -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#logMessage",
          "type": "function"
        },
        "index": {
          "description": "Issue log message with given priority",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "logMessage",
          "normalized": "LogLevel-\u003eString-\u003ePietMonad()",
          "package": "piet",
          "partial": "Message",
          "signature": "LogLevel-\u003eString-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:logMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a given number to a character and prints it to STDOUT.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "printChar",
          "package": "piet",
          "signature": "Int -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#printChar",
          "type": "function"
        },
        "index": {
          "description": "Converts given number to character and prints it to STDOUT",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "printChar",
          "normalized": "Int-\u003ePietMonad()",
          "package": "piet",
          "partial": "Char",
          "signature": "Int-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:printChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a number to STDOUT.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "printNumber",
          "package": "piet",
          "signature": "Int -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#printNumber",
          "type": "function"
        },
        "index": {
          "description": "Prints number to STDOUT",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "printNumber",
          "normalized": "Int-\u003ePietMonad()",
          "package": "piet",
          "partial": "Number",
          "signature": "Int-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:printNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a character from STDIN. Note that it is returned as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "readChar",
          "package": "piet",
          "signature": "PietMonad Int",
          "source": "src/Language-Piet-PietMonad.html#readChar",
          "type": "function"
        },
        "index": {
          "description": "Reads character from STDIN Note that it is returned as an Int",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "readChar",
          "package": "piet",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:readChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a number from STDIN.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "readNumber",
          "package": "piet",
          "signature": "PietMonad Int",
          "source": "src/Language-Piet-PietMonad.html#readNumber",
          "type": "function"
        },
        "index": {
          "description": "Reads number from STDIN",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "readNumber",
          "package": "piet",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:readNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a program represented by a \u003ccode\u003e\u003ca\u003ePietMonad\u003c/a\u003e\u003c/code\u003e. I/O operations\n (reading and writing numbers or characters) is delegated to\n callback functions.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "runPietMonad",
          "package": "piet",
          "signature": "(PietType -\u003e IO Int)-\u003e (PietType -\u003e Int -\u003e IO ())-\u003e (LogLevel -\u003e String -\u003e IO ())-\u003e PietMonad a-\u003e IO (Either String a)",
          "type": "function"
        },
        "index": {
          "description": "Executes program represented by PietMonad operations reading and writing numbers or characters is delegated to callback functions",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "runPietMonad",
          "normalized": "(PietType-\u003eIO Int)-\u003e(PietType-\u003eInt-\u003eIO())-\u003e(LogLevel-\u003eString-\u003eIO())-\u003ePietMonad a-\u003eIO(Either String a)",
          "package": "piet",
          "partial": "Piet Monad",
          "signature": "(PietType-\u003eIO Int)-\u003e(PietType-\u003eInt-\u003eIO())-\u003e(LogLevel-\u003eString-\u003eIO())-\u003ePietMonad a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:runPietMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current Codel Chooser.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "setCC",
          "package": "piet",
          "signature": "CodelChooser -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#setCC",
          "type": "function"
        },
        "index": {
          "description": "Sets the current Codel Chooser",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "setCC",
          "normalized": "CodelChooser-\u003ePietMonad()",
          "package": "piet",
          "partial": "CC",
          "signature": "CodelChooser-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:setCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the Direction Pointer.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "setDP",
          "package": "piet",
          "signature": "DirectionPointer -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#setDP",
          "type": "function"
        },
        "index": {
          "description": "Sets the Direction Pointer",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "setDP",
          "normalized": "DirectionPointer-\u003ePietMonad()",
          "package": "piet",
          "partial": "DP",
          "signature": "DirectionPointer-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:setDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current position.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "setPosition",
          "package": "piet",
          "signature": "Int -\u003e Int -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#setPosition",
          "type": "function"
        },
        "index": {
          "description": "Sets the current position",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "setPosition",
          "normalized": "Int-\u003eInt-\u003ePietMonad()",
          "package": "piet",
          "partial": "Position",
          "signature": "Int-\u003eInt-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:setPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top value from the stack. If the stack was empty,\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the top value otherise.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "stackPop",
          "package": "piet",
          "signature": "PietMonad (Maybe Int)",
          "source": "src/Language-Piet-PietMonad.html#stackPop",
          "type": "function"
        },
        "index": {
          "description": "Pops the top value from the stack If the stack was empty Nothing is returned Just the top value otherise",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "stackPop",
          "package": "piet",
          "partial": "Pop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:stackPop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes a given \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value on the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "stackPush",
          "package": "piet",
          "signature": "Int -\u003e PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#stackPush",
          "type": "function"
        },
        "index": {
          "description": "Pushes given Int value on the stack",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "stackPush",
          "normalized": "Int-\u003ePietMonad()",
          "package": "piet",
          "partial": "Push",
          "signature": "Int-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:stackPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the \u003ccode\u003e\u003ca\u003eroll\u003c/a\u003e\u003c/code\u003e operation on the stack.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "stackRoll",
          "package": "piet",
          "signature": "Int-\u003e Int-\u003e PietMonad ()",
          "type": "function"
        },
        "index": {
          "description": "Performs the roll operation on the stack",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "stackRoll",
          "normalized": "Int-\u003eInt-\u003ePietMonad()",
          "package": "piet",
          "partial": "Roll",
          "signature": "Int-\u003eInt-\u003ePietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:stackRoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuit a program. Any command following this one will be ignored.\n\u003c/p\u003e",
          "module": "Language.Piet.PietMonad",
          "name": "terminate",
          "package": "piet",
          "signature": "PietMonad ()",
          "source": "src/Language-Piet-PietMonad.html#terminate",
          "type": "function"
        },
        "index": {
          "description": "Quit program Any command following this one will be ignored",
          "hierarchy": "Language Piet PietMonad",
          "module": "Language.Piet.PietMonad",
          "name": "terminate",
          "normalized": "PietMonad()",
          "package": "piet",
          "signature": "PietMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-PietMonad.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing a couple of Piet-specific types\n and simple associated functions needed throughout the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Piet.Types",
          "name": "Types",
          "package": "piet",
          "source": "src/Language-Piet-Types.html",
          "type": "module"
        },
        "index": {
          "description": "module providing couple of Piet-specific types and simple associated functions needed throughout the library",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Types",
          "package": "piet",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Codel Chooser (CC).\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "CodelChooser",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#CodelChooser",
          "type": "data"
        },
        "index": {
          "description": "The Codel Chooser CC",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "CodelChooser",
          "package": "piet",
          "partial": "Codel Chooser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:CodelChooser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colours that make up a Piet program text.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "Colour",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#Colour",
          "type": "data"
        },
        "index": {
          "description": "The colours that make up Piet program text",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Colour",
          "package": "piet",
          "partial": "Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Direction Pointer (DP).\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "DirectionPointer",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#DirectionPointer",
          "type": "data"
        },
        "index": {
          "description": "The Direction Pointer DP",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "DirectionPointer",
          "package": "piet",
          "partial": "Direction Pointer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:DirectionPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePiet colours in the hue cycle.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "HueColour",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "data"
        },
        "index": {
          "description": "Piet colours in the hue cycle",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "HueColour",
          "package": "piet",
          "partial": "Hue Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:HueColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image. Its coordinates will be \u003ccode\u003e(0, 0) .. (width-1, height-1)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "Image",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#Image",
          "type": "data"
        },
        "index": {
          "description": "An image Its coordinates will be width-1 height-1",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Image",
          "package": "piet",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds information of a label (coloured area) relevant for the Piet\n language, i. e. information about where the program flow will be\n directed regarding a Direction Pointer.\n\u003c/p\u003e\u003cp\u003eHolds a border position (e. g. an x-coordinate) and the minimum\n or maximum associated \"other\" coordinates (e. g. y-coordinates).\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "LabelBorder",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#LabelBorder",
          "type": "data"
        },
        "index": {
          "description": "Holds information of label coloured area relevant for the Piet language information about where the program flow will be directed regarding Direction Pointer Holds border position an x-coordinate and the minimum or maximum associated other coordinates y-coordinates",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "LabelBorder",
          "package": "piet",
          "partial": "Label Border",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:LabelBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores compiler-relevant information about a label. This type\n implements an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e to merge labels.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "LabelInfo",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "data"
        },
        "index": {
          "description": "Stores compiler-relevant information about label This type implements an instance of Monoid to merge labels",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "LabelInfo",
          "package": "piet",
          "partial": "Label Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:LabelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe'll just use \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es to identifiy labels.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "LabelKey",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#LabelKey",
          "type": "type"
        },
        "index": {
          "description": "We ll just use Int to identifiy labels",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "LabelKey",
          "package": "piet",
          "partial": "Label Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:LabelKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHue lightness values supported by Piet.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "Lightness",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#Lightness",
          "type": "data"
        },
        "index": {
          "description": "Hue lightness values supported by Piet",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Lightness",
          "package": "piet",
          "partial": "Lightness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Lightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePiet types. Relevant to distinguish in-/output strategies.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "PietType",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#PietType",
          "type": "data"
        },
        "index": {
          "description": "Piet types Relevant to distinguish in output strategies",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "PietType",
          "package": "piet",
          "partial": "Piet Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:PietType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime program representation.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "Program",
          "package": "piet",
          "source": "src/Language-Piet-Types.html#Program",
          "type": "data"
        },
        "index": {
          "description": "Runtime program representation",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Program",
          "package": "piet",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Black",
          "package": "piet",
          "signature": "Black",
          "source": "src/Language-Piet-Types.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Black",
          "package": "piet",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Blue",
          "package": "piet",
          "signature": "Blue",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Blue",
          "package": "piet",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "CCLeft",
          "package": "piet",
          "signature": "CCLeft",
          "source": "src/Language-Piet-Types.html#CodelChooser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "CCLeft",
          "package": "piet",
          "partial": "CCLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:CCLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "CCRight",
          "package": "piet",
          "signature": "CCRight",
          "source": "src/Language-Piet-Types.html#CodelChooser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "CCRight",
          "package": "piet",
          "partial": "CCRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:CCRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Cyan",
          "package": "piet",
          "signature": "Cyan",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Cyan",
          "package": "piet",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "DPDown",
          "package": "piet",
          "signature": "DPDown",
          "source": "src/Language-Piet-Types.html#DirectionPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "DPDown",
          "package": "piet",
          "partial": "DPDown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "DPLeft",
          "package": "piet",
          "signature": "DPLeft",
          "source": "src/Language-Piet-Types.html#DirectionPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "DPLeft",
          "package": "piet",
          "partial": "DPLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "DPRight",
          "package": "piet",
          "signature": "DPRight",
          "source": "src/Language-Piet-Types.html#DirectionPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "DPRight",
          "package": "piet",
          "partial": "DPRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "DPUp",
          "package": "piet",
          "signature": "DPUp",
          "source": "src/Language-Piet-Types.html#DirectionPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "DPUp",
          "package": "piet",
          "partial": "DPUp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:DPUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Dark",
          "package": "piet",
          "signature": "Dark",
          "source": "src/Language-Piet-Types.html#Lightness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Dark",
          "package": "piet",
          "partial": "Dark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Dark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty label\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "EmptyInfo",
          "package": "piet",
          "signature": "EmptyInfo",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "The empty label",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "EmptyInfo",
          "package": "piet",
          "partial": "Empty Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:EmptyInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Green",
          "package": "piet",
          "signature": "Green",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Green",
          "package": "piet",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Hue",
          "package": "piet",
          "signature": "Hue !Lightness !HueColour",
          "source": "src/Language-Piet-Types.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Hue",
          "package": "piet",
          "partial": "Hue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Hue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "LabelBorder",
          "package": "piet",
          "signature": "LabelBorder",
          "source": "src/Language-Piet-Types.html#LabelBorder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "LabelBorder",
          "package": "piet",
          "partial": "Label Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:LabelBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel with a size and four borders\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "LabelInfo",
          "package": "piet",
          "signature": "LabelInfo",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "Label with size and four borders",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "LabelInfo",
          "package": "piet",
          "partial": "Label Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:LabelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Light",
          "package": "piet",
          "signature": "Light",
          "source": "src/Language-Piet-Types.html#Lightness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Light",
          "package": "piet",
          "partial": "Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Magenta",
          "package": "piet",
          "signature": "Magenta",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Magenta",
          "package": "piet",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Normal",
          "package": "piet",
          "signature": "Normal",
          "source": "src/Language-Piet-Types.html#Lightness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Normal",
          "package": "piet",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "PietChar",
          "package": "piet",
          "signature": "PietChar",
          "source": "src/Language-Piet-Types.html#PietType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "PietChar",
          "package": "piet",
          "partial": "Piet Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:PietChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "PietNumber",
          "package": "piet",
          "signature": "PietNumber",
          "source": "src/Language-Piet-Types.html#PietType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "PietNumber",
          "package": "piet",
          "partial": "Piet Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:PietNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Program",
          "package": "piet",
          "signature": "Program",
          "source": "src/Language-Piet-Types.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Program",
          "package": "piet",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Red",
          "package": "piet",
          "signature": "Red",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Red",
          "package": "piet",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "White",
          "package": "piet",
          "signature": "White",
          "source": "src/Language-Piet-Types.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "White",
          "package": "piet",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Piet.Types",
          "name": "Yellow",
          "package": "piet",
          "signature": "Yellow",
          "source": "src/Language-Piet-Types.html#HueColour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "Yellow",
          "package": "piet",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of pixels\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "_labelSize",
          "package": "piet",
          "signature": "Int",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "Number of pixels",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "_labelSize",
          "package": "piet",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:_labelSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove coordinates by one in the direction of the \u003ccode\u003e\u003ca\u003eDirectionPointer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "addCoordinates",
          "package": "piet",
          "signature": "DirectionPointer-\u003e Int-\u003e Int-\u003e (Int, Int)",
          "type": "function"
        },
        "index": {
          "description": "Move coordinates by one in the direction of the DirectionPointer",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "addCoordinates",
          "normalized": "DirectionPointer-\u003eInt-\u003eInt-\u003e(Int,Int)",
          "package": "piet",
          "partial": "Coordinates",
          "signature": "DirectionPointer-\u003eInt-\u003eInt-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:addCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a pixel to a \u003ccode\u003e\u003ca\u003eLabelInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "addPixel",
          "package": "piet",
          "signature": "Int -\u003e Int -\u003e LabelInfo -\u003e LabelInfo",
          "source": "src/Language-Piet-Types.html#addPixel",
          "type": "function"
        },
        "index": {
          "description": "Add pixel to LabelInfo",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "addPixel",
          "normalized": "Int-\u003eInt-\u003eLabelInfo-\u003eLabelInfo",
          "package": "piet",
          "partial": "Pixel",
          "signature": "Int-\u003eInt-\u003eLabelInfo-\u003eLabelInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:addPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere the border is located\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "borderCoord",
          "package": "piet",
          "signature": "Int",
          "source": "src/Language-Piet-Types.html#LabelBorder",
          "type": "function"
        },
        "index": {
          "description": "Where the border is located",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "borderCoord",
          "package": "piet",
          "partial": "Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:borderCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum \"other\" coordinate of the border\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "borderMax",
          "package": "piet",
          "signature": "Int",
          "source": "src/Language-Piet-Types.html#LabelBorder",
          "type": "function"
        },
        "index": {
          "description": "Maximum other coordinate of the border",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "borderMax",
          "package": "piet",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:borderMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum \"other\" coordinate of the border\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "borderMin",
          "package": "piet",
          "signature": "Int",
          "source": "src/Language-Piet-Types.html#LabelBorder",
          "type": "function"
        },
        "index": {
          "description": "Minimum other coordinate of the border",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "borderMin",
          "package": "piet",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:borderMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHue difference between two \u003ccode\u003e\u003ca\u003eHueColour\u003c/a\u003e\u003c/code\u003es. \u003ccode\u003e\u003ca\u003eRed\u003c/a\u003e\u003c/code\u003e means no change,\n \u003ccode\u003e\u003ca\u003eYellow\u003c/a\u003e\u003c/code\u003e one step and so forth.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "hueChange",
          "package": "piet",
          "signature": "HueColour -\u003e HueColour -\u003e HueColour",
          "source": "src/Language-Piet-Types.html#hueChange",
          "type": "function"
        },
        "index": {
          "description": "Hue difference between two HueColour Red means no change Yellow one step and so forth",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "hueChange",
          "normalized": "HueColour-\u003eHueColour-\u003eHueColour",
          "package": "piet",
          "partial": "Change",
          "signature": "HueColour-\u003eHueColour-\u003eHueColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:hueChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOriginal image\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "image",
          "package": "piet",
          "signature": "Image Colour",
          "source": "src/Language-Piet-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "Original image",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "image",
          "package": "piet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeight of an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e in pixels.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "imgHeight",
          "package": "piet",
          "signature": "Image a -\u003e Int",
          "source": "src/Language-Piet-Types.html#imgHeight",
          "type": "function"
        },
        "index": {
          "description": "Height of an Image in pixels",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "imgHeight",
          "normalized": "Image a-\u003eInt",
          "package": "piet",
          "partial": "Height",
          "signature": "Image a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind out, if the given coordinates are within the \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e\n borders (which are \u003ccode\u003e (0, 0) .. (width-1, height-1)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "imgInRange",
          "package": "piet",
          "signature": "Int-\u003e Int-\u003e Image a-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Find out if the given coordinates are within the Image borders which are width-1 height-1",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "imgInRange",
          "normalized": "Int-\u003eInt-\u003eImage a-\u003eBool",
          "package": "piet",
          "partial": "In Range",
          "signature": "Int-\u003eInt-\u003eImage a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgInRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a new image.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "imgNew",
          "package": "piet",
          "signature": "Int-\u003e Int-\u003e [((Int, Int), a)]-\u003e Image a",
          "type": "function"
        },
        "index": {
          "description": "Build new image",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "imgNew",
          "normalized": "Int-\u003eInt-\u003e[((Int,Int),a)]-\u003eImage a",
          "package": "piet",
          "partial": "New",
          "signature": "Int-\u003eInt-\u003e[((Int,Int),a)]-\u003eImage a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess a pixel at given x/y-coordinates.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "imgPixel",
          "package": "piet",
          "signature": "Int-\u003e Int-\u003e Image a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Access pixel at given y-coordinates",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "imgPixel",
          "normalized": "Int-\u003eInt-\u003eImage a-\u003ea",
          "package": "piet",
          "partial": "Pixel",
          "signature": "Int-\u003eInt-\u003eImage a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a pixel at given x/y-coordinates.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "imgSetPixel",
          "package": "piet",
          "signature": "Int -\u003e Int -\u003e a -\u003e Image a -\u003e Image a",
          "source": "src/Language-Piet-Types.html#imgSetPixel",
          "type": "function"
        },
        "index": {
          "description": "Set pixel at given y-coordinates",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "imgSetPixel",
          "normalized": "Int-\u003eInt-\u003ea-\u003eImage a-\u003eImage a",
          "package": "piet",
          "partial": "Set Pixel",
          "signature": "Int-\u003eInt-\u003ea-\u003eImage a-\u003eImage a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgSetPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of an \u003ccode\u003e\u003ca\u003eImage\u003c/a\u003e\u003c/code\u003e in pixels.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "imgWidth",
          "package": "piet",
          "signature": "Image a -\u003e Int",
          "source": "src/Language-Piet-Types.html#imgWidth",
          "type": "function"
        },
        "index": {
          "description": "Width of an Image in pixels",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "imgWidth",
          "normalized": "Image a-\u003eInt",
          "package": "piet",
          "partial": "Width",
          "signature": "Image a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:imgWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the labels\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "info",
          "package": "piet",
          "signature": "IntMap LabelInfo",
          "source": "src/Language-Piet-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "Information about the labels",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "info",
          "package": "piet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns if a given codel in a program is blocked in the Piet\n sense (which is the case when it is out of the image's range or\n \u003ccode\u003e\u003ca\u003eBlack\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "isBlocked",
          "package": "piet",
          "signature": "Int -\u003e Int -\u003e Program -\u003e Bool",
          "source": "src/Language-Piet-Types.html#isBlocked",
          "type": "function"
        },
        "index": {
          "description": "Returns if given codel in program is blocked in the Piet sense which is the case when it is out of the image range or Black",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "isBlocked",
          "normalized": "Int-\u003eInt-\u003eProgram-\u003eBool",
          "package": "piet",
          "partial": "Blocked",
          "signature": "Int-\u003eInt-\u003eProgram-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:isBlocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom border\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "labelBottom",
          "package": "piet",
          "signature": "LabelBorder",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "Bottom border",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "labelBottom",
          "package": "piet",
          "partial": "Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eleft border\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "labelLeft",
          "package": "piet",
          "signature": "LabelBorder",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "left border",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "labelLeft",
          "package": "piet",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight border\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "labelRight",
          "package": "piet",
          "signature": "LabelBorder",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "Right border",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "labelRight",
          "package": "piet",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of pixels in a label. This function is defined for all\n constructors of \u003ccode\u003e\u003ca\u003eLabelInfo\u003c/a\u003e\u003c/code\u003e so, in contrast to \u003ccode\u003e\u003ca\u003e_labelSize\u003c/a\u003e\u003c/code\u003e, it\n won't fail on \u003ccode\u003e\u003ca\u003eEmptyInfo\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "labelSize",
          "package": "piet",
          "signature": "LabelInfo -\u003e Int",
          "source": "src/Language-Piet-Types.html#labelSize",
          "type": "function"
        },
        "index": {
          "description": "Number of pixels in label This function is defined for all constructors of LabelInfo so in contrast to labelSize it won fail on EmptyInfo",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "labelSize",
          "normalized": "LabelInfo-\u003eInt",
          "package": "piet",
          "partial": "Size",
          "signature": "LabelInfo-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop border\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "labelTop",
          "package": "piet",
          "signature": "LabelBorder",
          "source": "src/Language-Piet-Types.html#LabelInfo",
          "type": "function"
        },
        "index": {
          "description": "Top border",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "labelTop",
          "package": "piet",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:labelTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLightness difference between Piet lightness values. \u003ccode\u003e\u003ca\u003eLight\u003c/a\u003e\u003c/code\u003e\n represents no change, \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e one step darker and \u003ccode\u003e\u003ca\u003eDark\u003c/a\u003e\u003c/code\u003e\n two steps darker.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "lightnessChange",
          "package": "piet",
          "signature": "Lightness -\u003e Lightness -\u003e Lightness",
          "source": "src/Language-Piet-Types.html#lightnessChange",
          "type": "function"
        },
        "index": {
          "description": "Lightness difference between Piet lightness values Light represents no change Normal one step darker and Dark two steps darker",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "lightnessChange",
          "normalized": "Lightness-\u003eLightness-\u003eLightness",
          "package": "piet",
          "partial": "Change",
          "signature": "Lightness-\u003eLightness-\u003eLightness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:lightnessChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabelled image\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "mask",
          "package": "piet",
          "signature": "Image LabelKey",
          "source": "src/Language-Piet-Types.html#Program",
          "type": "function"
        },
        "index": {
          "description": "Labelled image",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "mask",
          "package": "piet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts red/green/blue values to a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e. If the supplied\n arguments do not form a proper Piet \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWhite\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "rgb2Colour",
          "package": "piet",
          "signature": "w-\u003e w-\u003e w-\u003e Colour",
          "type": "function"
        },
        "index": {
          "description": "Converts red green blue values to Colour If the supplied arguments do not form proper Piet Colour White is returned",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "rgb2Colour",
          "normalized": "a-\u003ea-\u003ea-\u003eColour",
          "package": "piet",
          "partial": "Colour",
          "signature": "w-\u003ew-\u003ew-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:rgb2Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts red/green/blue/alpha values to a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e. The alpha channel\n is ignored for now, but may be used in future implementations or\n dialects, so please use this function instead of \u003ccode\u003e\u003ca\u003ergb2Colour\u003c/a\u003e\u003c/code\u003e whenever\n an alpha channel is available.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "rgba2Colour",
          "package": "piet",
          "signature": "w-\u003e w-\u003e w-\u003e w-\u003e Colour",
          "type": "function"
        },
        "index": {
          "description": "Converts red green blue alpha values to Colour The alpha channel is ignored for now but may be used in future implementations or dialects so please use this function instead of rgb2Colour whenever an alpha channel is available",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "rgba2Colour",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eColour",
          "package": "piet",
          "partial": "Colour",
          "signature": "w-\u003ew-\u003ew-\u003ew-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:rgba2Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a \u003ccode\u003e\u003ca\u003eDirectionPointer\u003c/a\u003e\u003c/code\u003e clockwise (counter clockwise if the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is\n negative) a given number of times. \n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "rotate",
          "package": "piet",
          "signature": "Int -\u003e DirectionPointer -\u003e DirectionPointer",
          "source": "src/Language-Piet-Types.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotate DirectionPointer clockwise counter clockwise if the Int is negative given number of times",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "rotate",
          "normalized": "Int-\u003eDirectionPointer-\u003eDirectionPointer",
          "package": "piet",
          "signature": "Int-\u003eDirectionPointer-\u003eDirectionPointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggle a \u003ccode\u003e\u003ca\u003eCodelChooser\u003c/a\u003e\u003c/code\u003e a given number of times.\n\u003c/p\u003e",
          "module": "Language.Piet.Types",
          "name": "toggle",
          "package": "piet",
          "signature": "Int -\u003e CodelChooser -\u003e CodelChooser",
          "source": "src/Language-Piet-Types.html#toggle",
          "type": "function"
        },
        "index": {
          "description": "Toggle CodelChooser given number of times",
          "hierarchy": "Language Piet Types",
          "module": "Language.Piet.Types",
          "name": "toggle",
          "normalized": "Int-\u003eCodelChooser-\u003eCodelChooser",
          "package": "piet",
          "signature": "Int-\u003eCodelChooser-\u003eCodelChooser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet-Types.html#v:toggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComprehensive module of the Piet interpreter. See\n \u003ca\u003ehttp://www.dangermouse.net/esoteric/piet.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Piet",
          "name": "Piet",
          "package": "piet",
          "source": "src/Language-Piet.html",
          "type": "module"
        },
        "index": {
          "description": "Comprehensive module of the Piet interpreter See http www.dangermouse.net esoteric piet.html",
          "hierarchy": "Language Piet",
          "module": "Language.Piet",
          "name": "Piet",
          "package": "piet",
          "partial": "Piet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/piet/docs/Language-Piet.html#"
      }
    }
  ]
]