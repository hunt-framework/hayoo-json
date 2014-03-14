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
        "word": "chuchu"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules provides some utility parsers for creating step rules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "Parser",
          "package": "chuchu",
          "source": "src/Test-Chuchu-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This modules provides some utility parsers for creating step rules",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "Parser",
          "package": "chuchu",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e for Parsec's \u003ccode\u003eParser\u003c/code\u003e used on this library.  The\n main reason for not using \u003ccode\u003eParser\u003c/code\u003e directly is to be able to\n define the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "ChuchuParser",
          "package": "chuchu",
          "source": "src/Test-Chuchu-Types.html#ChuchuParser",
          "type": "data"
        },
        "index": {
          "description": "newtype for Parsec Parser used on this library The main reason for not using Parser directly is to be able to define the IsString instance",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "ChuchuParser",
          "package": "chuchu",
          "partial": "Chuchu Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#t:ChuchuParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a simplified e-mail address and return everything that was parsed as\n a simple \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  This is a very simplified parser for e-mail, which does\n not follow RFC5322. Basically, it parses \u003ccode\u003eTEXT@TEXT\u003c/code\u003e, where TEXT is\n \u003ccode\u003ealphaNum \u003c|\u003e oneOf \"!#$%&'*+-/=?^_`{|}~.\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "email",
          "package": "chuchu",
          "signature": "ChuchuParser Text",
          "source": "src/Test-Chuchu-Parser.html#email",
          "type": "function"
        },
        "index": {
          "description": "Parses simplified e-mail address and return everything that was parsed as simple Text This is very simplified parser for e-mail which does not follow RFC5322 Basically it parses TEXT@TEXT where TEXT is alphaNum oneOf",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "email",
          "package": "chuchu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#v:email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an integer.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "int",
          "package": "chuchu",
          "signature": "ChuchuParser Integer",
          "source": "src/Test-Chuchu-Parser.html#int",
          "type": "function"
        },
        "index": {
          "description": "Parses an integer",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "int",
          "package": "chuchu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a floating point number, with the same syntax as accepted by\n Haskell.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "number",
          "package": "chuchu",
          "signature": "ChuchuParser Double",
          "source": "src/Test-Chuchu-Parser.html#number",
          "type": "function"
        },
        "index": {
          "description": "Parses floating point number with the same syntax as accepted by Haskell",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "number",
          "package": "chuchu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a quoted string, with the same syntax as accepted by Haskell.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "text",
          "package": "chuchu",
          "signature": "ChuchuParser Text",
          "source": "src/Test-Chuchu-Parser.html#text",
          "type": "function"
        },
        "index": {
          "description": "Parses quoted string with the same syntax as accepted by Haskell",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "text",
          "package": "chuchu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as Parsec's \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e but for \u003ccode\u003e\u003ca\u003eChuchuParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "try",
          "package": "chuchu",
          "signature": "ChuchuParser a -\u003e ChuchuParser a",
          "source": "src/Test-Chuchu-Parser.html#try",
          "type": "function"
        },
        "index": {
          "description": "Same as Parsec try but for ChuchuParser",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "try",
          "normalized": "ChuchuParser a-\u003eChuchuParser a",
          "package": "chuchu",
          "signature": "ChuchuParser a-\u003eChuchuParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses anything until the string passed as parameter, and also the string.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Parser",
          "name": "wildcard",
          "package": "chuchu",
          "signature": "Text -\u003e ChuchuParser Text",
          "source": "src/Test-Chuchu-Parser.html#wildcard",
          "type": "function"
        },
        "index": {
          "description": "Parses anything until the string passed as parameter and also the string",
          "hierarchy": "Test Chuchu Parser",
          "module": "Test.Chuchu.Parser",
          "name": "wildcard",
          "normalized": "Text-\u003eChuchuParser Text",
          "package": "chuchu",
          "signature": "Text-\u003eChuchuParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Parser.html#v:wildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "Types",
          "package": "chuchu",
          "source": "src/Test-Chuchu-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "Types",
          "package": "chuchu",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most common use case where the return value of the Monad is ignored.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Types",
          "name": "Chuchu",
          "package": "chuchu",
          "source": "src/Test-Chuchu-Types.html#Chuchu",
          "type": "type"
        },
        "index": {
          "description": "The most common use case where the return value of the Monad is ignored",
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "Chuchu",
          "package": "chuchu",
          "partial": "Chuchu",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#t:Chuchu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Monad on which the step rules are constructed.  \u003ccode\u003e\u003ca\u003eGiven\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWhen\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eThen\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAnd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBut\u003c/a\u003e\u003c/code\u003e are interpreted in the same way by the program.  All\n of them receive a parser and an action to run if the parser finishes\n correctly.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Types",
          "name": "ChuchuM",
          "package": "chuchu",
          "source": "src/Test-Chuchu-Types.html#ChuchuM",
          "type": "data"
        },
        "index": {
          "description": "The Monad on which the step rules are constructed Given When Then And and But are interpreted in the same way by the program All of them receive parser and an action to run if the parser finishes correctly",
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "ChuchuM",
          "package": "chuchu",
          "partial": "Chuchu",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#t:ChuchuM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewtype\u003c/code\u003e for Parsec's \u003ccode\u003eParser\u003c/code\u003e used on this library.  The\n main reason for not using \u003ccode\u003eParser\u003c/code\u003e directly is to be able to\n define the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Types",
          "name": "ChuchuParser",
          "package": "chuchu",
          "source": "src/Test-Chuchu-Types.html#ChuchuParser",
          "type": "newtype"
        },
        "index": {
          "description": "newtype for Parsec Parser used on this library The main reason for not using Parser directly is to be able to define the IsString instance",
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "ChuchuParser",
          "package": "chuchu",
          "partial": "Chuchu Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#t:ChuchuParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "And",
          "package": "chuchu",
          "signature": "ChuchuParser a -\u003e (a -\u003e m ()) -\u003e ChuchuM m ()",
          "source": "src/Test-Chuchu-Types.html#ChuchuM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "And",
          "normalized": "ChuchuParser a-\u003e(a-\u003eb())-\u003eChuchuM b()",
          "package": "chuchu",
          "partial": "And",
          "signature": "ChuchuParser a-\u003e(a-\u003em())-\u003eChuchuM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "But",
          "package": "chuchu",
          "signature": "ChuchuParser a -\u003e (a -\u003e m ()) -\u003e ChuchuM m ()",
          "source": "src/Test-Chuchu-Types.html#ChuchuM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "But",
          "normalized": "ChuchuParser a-\u003e(a-\u003eb())-\u003eChuchuM b()",
          "package": "chuchu",
          "partial": "But",
          "signature": "ChuchuParser a-\u003e(a-\u003em())-\u003eChuchuM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:But"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "ChuchuParser",
          "package": "chuchu",
          "signature": "ChuchuParser (Parser a)",
          "source": "src/Test-Chuchu-Types.html#ChuchuParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "ChuchuParser",
          "package": "chuchu",
          "partial": "Chuchu Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:ChuchuParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "Given",
          "package": "chuchu",
          "signature": "ChuchuParser a -\u003e (a -\u003e m ()) -\u003e ChuchuM m ()",
          "source": "src/Test-Chuchu-Types.html#ChuchuM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "Given",
          "normalized": "ChuchuParser a-\u003e(a-\u003eb())-\u003eChuchuM b()",
          "package": "chuchu",
          "partial": "Given",
          "signature": "ChuchuParser a-\u003e(a-\u003em())-\u003eChuchuM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:Given"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "Then",
          "package": "chuchu",
          "signature": "ChuchuParser a -\u003e (a -\u003e m ()) -\u003e ChuchuM m ()",
          "source": "src/Test-Chuchu-Types.html#ChuchuM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "Then",
          "normalized": "ChuchuParser a-\u003e(a-\u003eb())-\u003eChuchuM b()",
          "package": "chuchu",
          "partial": "Then",
          "signature": "ChuchuParser a-\u003e(a-\u003em())-\u003eChuchuM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:Then"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Chuchu.Types",
          "name": "When",
          "package": "chuchu",
          "signature": "ChuchuParser a -\u003e (a -\u003e m ()) -\u003e ChuchuM m ()",
          "source": "src/Test-Chuchu-Types.html#ChuchuM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "When",
          "normalized": "ChuchuParser a-\u003e(a-\u003eb())-\u003eChuchuM b()",
          "package": "chuchu",
          "partial": "When",
          "signature": "ChuchuParser a-\u003e(a-\u003em())-\u003eChuchuM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:When"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the Monad into a single \u003ccode\u003eParser\u003c/code\u003e that executes the specified\n action if the parser is executed correctly.  It includes an \u003ccode\u003eeof\u003c/code\u003e on the\n parser of each step to avoid it from accepting prefixes of the desired rule.\n\u003c/p\u003e",
          "module": "Test.Chuchu.Types",
          "name": "runChuchu",
          "package": "chuchu",
          "signature": "ChuchuM m a -\u003e Parser (m ())",
          "source": "src/Test-Chuchu-Types.html#runChuchu",
          "type": "function"
        },
        "index": {
          "description": "Converts the Monad into single Parser that executes the specified action if the parser is executed correctly It includes an eof on the parser of each step to avoid it from accepting prefixes of the desired rule",
          "hierarchy": "Test Chuchu Types",
          "module": "Test.Chuchu.Types",
          "name": "runChuchu",
          "normalized": "ChuchuM a b-\u003eParser(a())",
          "package": "chuchu",
          "partial": "Chuchu",
          "signature": "ChuchuM m a-\u003eParser(m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu-Types.html#v:runChuchu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChuchu is a system similar to Ruby's Cucumber for Behaviour Driven\n Development.  It works with a language similar to Cucumber's Gherkin, which\n is parsed using package abacate.\n\u003c/p\u003e\u003cp\u003eThis module provides the main function for a test file based on Behaviour\n Driven Development for Haskell.\n\u003c/p\u003e\u003cp\u003eExample for a Stack calculator:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ecalculator.feature\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nFeature: Division\n  In order to avoid silly mistakes\n  Cashiers must be able to calculate a fraction\n\nScenario: Regular numbers\n    Given that I have entered 3 into the calculator\n    And that I have entered 2 into the calculator\n    When I press divide\n    Then the result should be 1.5 on the screen\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ecalculator.hs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nimport Control.Applicative\nimport Control.Monad.IO.Class\nimport Control.Monad.Trans.State\nimport Test.Chuchu\nimport Test.HUnit\n\ntype CalculatorT m = StateT [Double] m\n\nenterNumber :: Monad m =\u003e Double -\u003e CalculatorT m ()\nenterNumber = modify . (:)\n\ngetDisplay :: Monad m =\u003e CalculatorT m Double\ngetDisplay\n  = do\n    ns \u003c- get\n    return $ head $ ns ++ [0]\n\ndivide :: Monad m =\u003e CalculatorT m ()\ndivide = do\n  (n1:n2:ns) \u003c- get\n  put $ (n2 / n1) : ns\n\ndefs :: Chuchu (CalculatorT IO)\ndefs\n  = do\n    Given\n      (\"that I have entered \" *\u003e number \u003c* \" into the calculator\")\n      enterNumber\n    When \"I press divide\" $ const divide\n    Then (\"the result should be \" *\u003e number \u003c* \" on the screen\")\n      $ \\n\n        -\u003e do\n          d \u003c- getDisplay\n          liftIO $ d @?= n\n\nmain :: IO ()\nmain = chuchuMain defs (`evalStateT` [])\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.Chuchu",
          "name": "Chuchu",
          "package": "chuchu",
          "source": "src/Test-Chuchu.html",
          "type": "module"
        },
        "index": {
          "description": "Chuchu is system similar to Ruby Cucumber for Behaviour Driven Development It works with language similar to Cucumber Gherkin which is parsed using package abacate This module provides the main function for test file based on Behaviour Driven Development for Haskell Example for Stack calculator calculator.feature Feature Division In order to avoid silly mistakes Cashiers must be able to calculate fraction Scenario Regular numbers Given that have entered into the calculator And that have entered into the calculator When press divide Then the result should be on the screen calculator.hs import Control.Applicative import Control.Monad.IO.Class import Control.Monad.Trans.State import Test.Chuchu import Test.HUnit type CalculatorT StateT Double enterNumber Monad Double CalculatorT enterNumber modify getDisplay Monad CalculatorT Double getDisplay do ns get return head ns divide Monad CalculatorT divide do n1 n2 ns get put n2 n1 ns defs Chuchu CalculatorT IO defs do Given that have entered number into the calculator enterNumber When press divide const divide Then the result should be number on the screen do getDisplay liftIO main IO main chuchuMain defs evalStateT",
          "hierarchy": "Test Chuchu",
          "module": "Test.Chuchu",
          "name": "Chuchu",
          "package": "chuchu",
          "partial": "Chuchu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main function for the test file. It expects one or more\n \u003ccode\u003e.feature\u003c/code\u003e file as parameters on the command line. If you want to\n use it inside a library, consider using \u003ccode\u003ewithArgs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Chuchu",
          "name": "chuchuMain",
          "package": "chuchu",
          "signature": "Chuchu m -\u003e (m () -\u003e IO ()) -\u003e IO ()",
          "source": "src/Test-Chuchu.html#chuchuMain",
          "type": "function"
        },
        "index": {
          "description": "The main function for the test file It expects one or more feature file as parameters on the command line If you want to use it inside library consider using withArgs",
          "hierarchy": "Test Chuchu",
          "module": "Test.Chuchu",
          "name": "chuchuMain",
          "normalized": "Chuchu a-\u003e(a()-\u003eIO())-\u003eIO()",
          "package": "chuchu",
          "partial": "Main",
          "signature": "Chuchu m-\u003e(m()-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chuchu/docs/Test-Chuchu.html#v:chuchuMain"
      }
    }
  ]
]