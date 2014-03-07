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
        "word": "garepinoh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Calculate",
          "name": "Calculate",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Calculate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Console Garepinoh Calculate",
          "module": "Console.Garepinoh.Calculate",
          "name": "Calculate",
          "package": "garepinoh",
          "partial": "Calculate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Calculate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecalculate\u003c/a\u003e\u003c/code\u003e tries to calculate the value of the given\n input and returns either the caused error message or the resulting stack.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Calculate",
          "name": "calculate",
          "package": "garepinoh",
          "signature": "Prelude t -\u003e [String] -\u003e Result t",
          "source": "src/Console-Garepinoh-Calculate.html#calculate",
          "type": "function"
        },
        "index": {
          "description": "Given Prelude calculate tries to calculate the value of the given input and returns either the caused error message or the resulting stack",
          "hierarchy": "Console Garepinoh Calculate",
          "module": "Console.Garepinoh.Calculate",
          "name": "calculate",
          "normalized": "Prelude a-\u003e[String]-\u003eResult a",
          "package": "garepinoh",
          "signature": "Prelude t-\u003e[String]-\u003eResult t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Calculate.html#v:calculate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.GenMain",
          "name": "GenMain",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-GenMain.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Console Garepinoh GenMain",
          "module": "Console.Garepinoh.GenMain",
          "name": "GenMain",
          "package": "garepinoh",
          "partial": "Gen Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-GenMain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general \u003ccode\u003emain\u003c/code\u003e function which behaves just like the \u003ccode\u003egarepinoh\u003c/code\u003e\n executable, but depending on a \u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn fact, the \u003ccode\u003emain\u003c/code\u003e function of the executable \u003ccode\u003egarepinoh\u003c/code\u003e is just\n\u003c/p\u003e\u003cpre\u003e\n main = genMain \u003ccode\u003e\u003ca\u003efloatingPrelude\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003ewhereas the main function of \u003ccode\u003egarepiboh\u003c/code\u003e is:\n\u003c/p\u003e\u003cpre\u003e\n main = genMain \u003ccode\u003e\u003ca\u003eboolPrelude\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Console.Garepinoh.GenMain",
          "name": "genMain",
          "package": "garepinoh",
          "signature": "Prelude t -\u003e IO ()",
          "source": "src/Console-Garepinoh-GenMain.html#genMain",
          "type": "function"
        },
        "index": {
          "description": "general main function which behaves just like the garepinoh executable but depending on Prelude In fact the main function of the executable garepinoh is just main genMain floatingPrelude whereas the main function of garepiboh is main genMain boolPrelude",
          "hierarchy": "Console Garepinoh GenMain",
          "module": "Console.Garepinoh.GenMain",
          "name": "genMain",
          "normalized": "Prelude a-\u003eIO()",
          "package": "garepinoh",
          "partial": "Main",
          "signature": "Prelude t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-GenMain.html#v:genMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Preludes",
          "name": "Preludes",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Preludes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Console Garepinoh Preludes",
          "module": "Console.Garepinoh.Preludes",
          "name": "Preludes",
          "package": "garepinoh",
          "partial": "Preludes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Preludes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract \u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e which implements functions typical for concatenative \n programming languages.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Preludes",
          "name": "abstractPrelude",
          "package": "garepinoh",
          "signature": "Prelude t",
          "source": "src/Console-Garepinoh-Preludes.html#abstractPrelude",
          "type": "function"
        },
        "index": {
          "description": "The abstract Prelude which implements functions typical for concatenative programming languages",
          "hierarchy": "Console Garepinoh Preludes",
          "module": "Console.Garepinoh.Preludes",
          "name": "abstractPrelude",
          "package": "garepinoh",
          "partial": "Prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Preludes.html#v:abstractPrelude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e for Booleans.\n\u003c/p\u003e\u003cp\u003eBeside Boolean operations (e.g. conjunction and disjunction), it also\n contains the \u003ccode\u003e\u003ca\u003eabstractPrelude\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Preludes",
          "name": "boolPrelude",
          "package": "garepinoh",
          "signature": "Prelude Bool",
          "source": "src/Console-Garepinoh-Preludes.html#boolPrelude",
          "type": "function"
        },
        "index": {
          "description": "Prelude for Booleans Beside Boolean operations e.g conjunction and disjunction it also contains the abstractPrelude",
          "hierarchy": "Console Garepinoh Preludes",
          "module": "Console.Garepinoh.Preludes",
          "name": "boolPrelude",
          "package": "garepinoh",
          "partial": "Prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Preludes.html#v:boolPrelude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e floating-point numbers.\n\u003c/p\u003e\u003cp\u003eBeside arithmetic operations and common mathematical constants etc.,\n it also contains the \u003ccode\u003e\u003ca\u003eabstractPrelude\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Preludes",
          "name": "floatingPrelude",
          "package": "garepinoh",
          "signature": "Prelude t",
          "source": "src/Console-Garepinoh-Preludes.html#floatingPrelude",
          "type": "function"
        },
        "index": {
          "description": "Prelude floating-point numbers Beside arithmetic operations and common mathematical constants etc it also contains the abstractPrelude",
          "hierarchy": "Console Garepinoh Preludes",
          "module": "Console.Garepinoh.Preludes",
          "name": "floatingPrelude",
          "package": "garepinoh",
          "partial": "Prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Preludes.html#v:floatingPrelude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Types",
          "name": "Types",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Types",
          "package": "garepinoh",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn element is either...\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "El",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#El",
          "type": "data"
        },
        "index": {
          "description": "An element is either",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "El",
          "package": "garepinoh",
          "partial": "El",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:El"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Function consists of:\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Func",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#Func",
          "type": "data"
        },
        "index": {
          "description": "Function consists of",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Func",
          "package": "garepinoh",
          "partial": "Func",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA primitive/undivisible \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e is one of:\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Function",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#Function",
          "type": "data"
        },
        "index": {
          "description": "primitive undivisible Function is one of",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Function",
          "package": "garepinoh",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNonEmptyList\u003c/a\u003e\u003c/code\u003e is a non-empty list.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "NonEmptyList",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#NonEmptyList",
          "type": "data"
        },
        "index": {
          "description": "NonEmptyList is non-empty list",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "NonEmptyList",
          "package": "garepinoh",
          "partial": "Non Empty List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:NonEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e is a list of pre-defined functions.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Prelude",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#Prelude",
          "type": "type"
        },
        "index": {
          "description": "Prelude is list of pre-defined functions",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Prelude",
          "package": "garepinoh",
          "partial": "Prelude",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:Prelude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is either an error message or a \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Result",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#Result",
          "type": "type"
        },
        "index": {
          "description": "Result is either an error message or Stack",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Result",
          "package": "garepinoh",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStack\u003c/a\u003e\u003c/code\u003e is (simulated by) a list of elements.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Stack",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Types.html#Stack",
          "type": "type"
        },
        "index": {
          "description": "Stack is simulated by list of elements",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Stack",
          "package": "garepinoh",
          "partial": "Stack",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean element \u003ccode\u003e\u003ca\u003eEl\u003c/a\u003e\u003c/code\u003e;\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Ele",
          "package": "garepinoh",
          "signature": "Ele (El t)",
          "source": "src/Console-Garepinoh-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "an element El",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Ele",
          "package": "garepinoh",
          "partial": "Ele",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Ele"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Fu",
          "package": "garepinoh",
          "signature": "Fu (Func t)",
          "source": "src/Console-Garepinoh-Types.html#El",
          "type": "function"
        },
        "index": {
          "description": "function",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Fu",
          "package": "garepinoh",
          "partial": "Fu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Fu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean actual primitive\u003cem\u003epre-defined\u003c/em\u003ehard-coded function.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Fun",
          "package": "garepinoh",
          "signature": "Fun (Prelude t -\u003e Stack t -\u003e Either String (Stack t))",
          "source": "src/Console-Garepinoh-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "an actual primitive pre-defined hard-coded function",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Fun",
          "normalized": "Fun(Prelude a-\u003eStack a-\u003eEither String(Stack a))",
          "package": "garepinoh",
          "partial": "Fun",
          "signature": "Fun(Prelude t-\u003eStack t-\u003eEither String(Stack t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Types",
          "name": "Func",
          "package": "garepinoh",
          "signature": "Func",
          "source": "src/Console-Garepinoh-Types.html#Func",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Func",
          "package": "garepinoh",
          "partial": "Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of elements, or\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Li",
          "package": "garepinoh",
          "signature": "Li [El t]",
          "source": "src/Console-Garepinoh-Types.html#El",
          "type": "function"
        },
        "index": {
          "description": "list of elements or",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Li",
          "normalized": "Li[El a]",
          "package": "garepinoh",
          "partial": "Li",
          "signature": "Li[El t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Li"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Types",
          "name": "NEL",
          "package": "garepinoh",
          "signature": "NEL",
          "source": "src/Console-Garepinoh-Types.html#NonEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "NEL",
          "package": "garepinoh",
          "partial": "NEL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:NEL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea reference to other functions; or\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Ref",
          "package": "garepinoh",
          "signature": "Ref String",
          "source": "src/Console-Garepinoh-Types.html#Function",
          "type": "function"
        },
        "index": {
          "description": "reference to other functions or",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Ref",
          "package": "garepinoh",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea value of type \u003ccode\u003et\u003c/code\u003e,\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "Va",
          "package": "garepinoh",
          "signature": "Va t",
          "source": "src/Console-Garepinoh-Types.html#El",
          "type": "function"
        },
        "index": {
          "description": "value of type",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "Va",
          "package": "garepinoh",
          "partial": "Va",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:Va"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list (\u003ccode\u003e[f_fst,f_snd,..,f_last\u003c/code\u003e]) of\n primitive/undivisible \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003es which are evaluated step-by-step.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "func",
          "package": "garepinoh",
          "signature": "[Function t]",
          "source": "src/Console-Garepinoh-Types.html#Func",
          "type": "function"
        },
        "index": {
          "description": "list fst snd last of primitive undivisible Function which are evaluated step-by-step",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "func",
          "normalized": "[Function a]",
          "package": "garepinoh",
          "signature": "[Function t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efirst element  (head) of the (non-empty) list.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "hd",
          "package": "garepinoh",
          "signature": "t",
          "source": "src/Console-Garepinoh-Types.html#NonEmptyList",
          "type": "function"
        },
        "index": {
          "description": "first element head of the non-empty list",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "hd",
          "package": "garepinoh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:hd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea non-empty list of identifiers;\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "symb",
          "package": "garepinoh",
          "signature": "NonEmptyList String",
          "source": "src/Console-Garepinoh-Types.html#Func",
          "type": "function"
        },
        "index": {
          "description": "non-empty list of identifiers",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "symb",
          "package": "garepinoh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:symb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremaining part (tail) of the (non-empty) list.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Types",
          "name": "tl",
          "package": "garepinoh",
          "signature": "[t]",
          "source": "src/Console-Garepinoh-Types.html#NonEmptyList",
          "type": "function"
        },
        "index": {
          "description": "remaining part tail of the non-empty list",
          "hierarchy": "Console Garepinoh Types",
          "module": "Console.Garepinoh.Types",
          "name": "tl",
          "normalized": "[a]",
          "package": "garepinoh",
          "signature": "[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Types.html#v:tl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "Utils",
          "package": "garepinoh",
          "source": "src/Console-Garepinoh-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "Utils",
          "package": "garepinoh",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "append",
          "package": "garepinoh",
          "signature": "El t -\u003e Stack t -\u003e Result t",
          "source": "src/Console-Garepinoh-Utils.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "append",
          "normalized": "El a-\u003eStack a-\u003eResult a",
          "package": "garepinoh",
          "signature": "El t-\u003eStack t-\u003eResult t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "appendFunction",
          "package": "garepinoh",
          "signature": "String -\u003e Prelude t -\u003e Maybe (El t)",
          "source": "src/Console-Garepinoh-Utils.html#appendFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "appendFunction",
          "normalized": "String-\u003ePrelude a-\u003eMaybe(El a)",
          "package": "garepinoh",
          "partial": "Function",
          "signature": "String-\u003ePrelude t-\u003eMaybe(El t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:appendFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "apply",
          "package": "garepinoh",
          "signature": "Prelude t -\u003e El t -\u003e Stack t -\u003e Result t",
          "source": "src/Console-Garepinoh-Utils.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "apply",
          "normalized": "Prelude a-\u003eEl a-\u003eStack a-\u003eResult a",
          "package": "garepinoh",
          "signature": "Prelude t-\u003eEl t-\u003eStack t-\u003eResult t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestructor of \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Console.Garepinoh.Utils",
          "name": "function",
          "package": "garepinoh",
          "signature": "(El t -\u003e x) -\u003e (String -\u003e x) -\u003e ((Prelude t -\u003e Stack t -\u003e Either String (Stack t)) -\u003e x) -\u003e Function t -\u003e x",
          "source": "src/Console-Garepinoh-Utils.html#function",
          "type": "function"
        },
        "index": {
          "description": "Destructor of Function",
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "function",
          "normalized": "(El a-\u003eb)-\u003e(String-\u003eb)-\u003e((Prelude a-\u003eStack a-\u003eEither String(Stack a))-\u003eb)-\u003eFunction a-\u003eb",
          "package": "garepinoh",
          "signature": "(El t-\u003ex)-\u003e(String-\u003ex)-\u003e((Prelude t-\u003eStack t-\u003eEither String(Stack t))-\u003ex)-\u003eFunction t-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "list",
          "package": "garepinoh",
          "signature": "NonEmptyList t -\u003e [t]",
          "source": "src/Console-Garepinoh-Utils.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "list",
          "normalized": "NonEmptyList a-\u003e[a]",
          "package": "garepinoh",
          "signature": "NonEmptyList t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "step",
          "package": "garepinoh",
          "signature": "Prelude t -\u003e Result t -\u003e String -\u003e Result t",
          "source": "src/Console-Garepinoh-Utils.html#step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "step",
          "normalized": "Prelude a-\u003eResult a-\u003eString-\u003eResult a",
          "package": "garepinoh",
          "signature": "Prelude t-\u003eResult t-\u003eString-\u003eResult t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Console.Garepinoh.Utils",
          "name": "value",
          "package": "garepinoh",
          "signature": "String -\u003e Maybe (El t)",
          "source": "src/Console-Garepinoh-Utils.html#value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Console Garepinoh Utils",
          "module": "Console.Garepinoh.Utils",
          "name": "value",
          "normalized": "String-\u003eMaybe(El a)",
          "package": "garepinoh",
          "signature": "String-\u003eMaybe(El t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/garepinoh/docs/Console-Garepinoh-Utils.html#v:value"
      }
    }
  ]
]