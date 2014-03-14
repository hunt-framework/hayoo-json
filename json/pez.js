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
        "word": "pez"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePEZ is a generic zipper library. It uses lenses from the \u003ca\u003efclabels\u003c/a\u003e package to\nreference a \"location\" to move to in the zipper. The zipper is restricted to\ntypes in the \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e class, allowing the user to \"move up\" through complex \ndata structures such as mutually-recursive types, where the compiler could not \notherwise type-check the program.\n.\nBoth the Typeable class and \u003ca\u003efclabels\u003c/a\u003e lenses can be derived in GHC, making it\neasy for the programmer to use a zipper with a minimum of boilerplate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Label.Zipper",
          "name": "Zipper",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html",
          "type": "module"
        },
        "index": {
          "description": "PEZ is generic zipper library It uses lenses from the fclabels package to reference location to move to in the zipper The zipper is restricted to types in the Typeable class allowing the user to move up through complex data structures such as mutually-recursive types where the compiler could not otherwise type-check the program Both the Typeable class and fclabels lenses can be derived in GHC making it easy for the programmer to use zipper with minimum of boilerplate",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Zipper",
          "package": "pez",
          "partial": "Zipper",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens type for situations in which the accessor functions can fail. This is\n useful, for example, when accessing fields in datatypes with multiple\n constructors.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": ":~\u003e",
          "package": "pez",
          "type": "type"
        },
        "index": {
          "description": "Lens type for situations in which the accessor functions can fail This is useful for example when accessing fields in datatypes with multiple constructors",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": ":~\u003e",
          "package": "pez",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "Exception",
          "package": "pez",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Exception",
          "package": "pez",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "Failure",
          "package": "pez",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Failure",
          "package": "pez",
          "partial": "Failure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMotion types which alter a Zipper by a knowable integer quantity.\n Concretly, the following should hold:\n\u003c/p\u003e\u003cpre\u003e level (move m z) == level z + delta m\n\u003c/pre\u003e\u003cp\u003eFor motions upwards this returns a negative value.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "LevelDelta",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#LevelDelta",
          "type": "class"
        },
        "index": {
          "description": "Motion types which alter Zipper by knowable integer quantity Concretly the following should hold level move level delta For motions upwards this returns negative value",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "LevelDelta",
          "package": "pez",
          "partial": "Level Delta",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:LevelDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of the Motion class describe \"paths\" up or down (so to speak)\n through a datatype. The exceptions thrown by each motion are enumerated in\n the associated type \u003ccode\u003eThrownBy mot\u003c/code\u003e. The \u003ccode\u003eMotion\u003c/code\u003e type that will return the\n focus to the last location after doing a 'moveSaving is given by \u003ccode\u003eReturning mot\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "Motion",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#Motion",
          "type": "class"
        },
        "index": {
          "description": "Types of the Motion class describe paths up or down so to speak through datatype The exceptions thrown by each motion are enumerated in the associated type ThrownBy mot The Motion type that will return the focus to the last location after doing moveSaving is given by Returning mot",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Motion",
          "package": "pez",
          "partial": "Motion",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Motion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMotion\u003c/a\u003e\u003c/code\u003e type describing an incremental path \"down\" through a data\n structure. Use \u003ccode\u003e\u003ca\u003eto\u003c/a\u003e\u003c/code\u003e to move to a location specified by a \u003ca\u003efclabels\u003c/a\u003e lens.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e to return to a previously-visited location in a zipper, with\n previous history intact, so:\n\u003c/p\u003e\u003cpre\u003e (\\(l,ma)-\u003e move l \u003c$\u003e ma) (closeSaving z)  ==  Just z\n\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e to turn this into a standard fclabels lens, flattening the\n incremental move steps.\n\u003c/p\u003e\u003cp\u003eThrows errors of type \u003ccode\u003e\u003ca\u003eToErrors\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "To",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#To",
          "type": "data"
        },
        "index": {
          "description": "Motion type describing an incremental path down through data structure Use to to move to location specified by fclabels lens Use restore to return to previously-visited location in zipper with previous history intact so ma move ma closeSaving Just Use flatten to turn this into standard fclabels lens flattening the incremental move steps Throws errors of type ToErrors",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "To",
          "package": "pez",
          "partial": "To",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "ToErrors",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#ToErrors",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "ToErrors",
          "package": "pez",
          "partial": "To Errors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:ToErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "Typeable",
          "package": "pez",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Typeable",
          "package": "pez",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eMotion\u003c/a\u003e\u003c/code\u003e upwards in the data type. e.g. \u003ccode\u003emove (Up 2)\u003c/code\u003e would move up to\n the grandparent level, as long as the type of the focus after moving is \n \u003ccode\u003eb\u003c/code\u003e. Inline type signatures are often helpful to avoid ambiguity, e.g. \n \u003ccode\u003e(Up 2 :: Up Char (Tree Char))\u003c/code\u003e read as \"up two levels, from a focus of\n type \u003ccode\u003eChar\u003c/code\u003e to \u003ccode\u003eTree Char\u003c/code\u003e\".\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMotion\u003c/a\u003e\u003c/code\u003e type throws \u003ccode\u003e\u003ca\u003eUpErrors\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "Up",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#Up",
          "type": "newtype"
        },
        "index": {
          "description": "Motion upwards in the data type e.g move Up would move up to the grandparent level as long as the type of the focus after moving is Inline type signatures are often helpful to avoid ambiguity e.g Up Up Char Tree Char read as up two levels from focus of type Char to Tree Char This Motion type throws UpErrors",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Up",
          "package": "pez",
          "partial": "Up",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindicates a \u003ccode\u003e\u003ca\u003eMotion\u003c/a\u003e\u003c/code\u003e upwards in the zipper until we arrive at a type which\n we can cast to \u003ccode\u003eb\u003c/code\u003e, otherwise throwing \u003ccode\u003e\u003ca\u003eUpErrors\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "UpCasting",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#UpCasting",
          "type": "data"
        },
        "index": {
          "description": "indicates Motion upwards in the zipper until we arrive at type which we can cast to otherwise throwing UpErrors",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "UpCasting",
          "package": "pez",
          "partial": "Up Casting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:UpCasting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "UpErrors",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#UpErrors",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "UpErrors",
          "package": "pez",
          "partial": "Up Errors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:UpErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates a data type \u003ccode\u003ea\u003c/code\u003e at a focus \u003ccode\u003eb\u003c/code\u003e, supporting various \u003ccode\u003e\u003ca\u003eMotion\u003c/a\u003e\u003c/code\u003e\n operations\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "Zipper",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#Zipper",
          "type": "data"
        },
        "index": {
          "description": "Encapsulates data type at focus supporting various Motion operations",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Zipper",
          "package": "pez",
          "partial": "Zipper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea simple type synonym for a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e where the type at the focus is the\n same as the type of the outer (unzippered) type. Cleans up type signatures\n for simple recursive types:\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "Zipper1",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#Zipper1",
          "type": "type"
        },
        "index": {
          "description": "simple type synonym for Zipper where the type at the focus is the same as the type of the outer unzippered type Cleans up type signatures for simple recursive types",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Zipper1",
          "package": "pez",
          "partial": "Zipper",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:Zipper1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe root of the exception hierarchy for Zipper \u003ccode\u003e\u003ca\u003emove\u003c/a\u003e\u003c/code\u003e operations:\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "ZipperException",
          "package": "pez",
          "source": "src/Data-Label-Zipper.html#ZipperException",
          "type": "data"
        },
        "index": {
          "description": "The root of the exception hierarchy for Zipper move operations",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "ZipperException",
          "package": "pez",
          "partial": "Zipper Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#t:ZipperException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "CastFailed",
          "package": "pez",
          "signature": "CastFailed",
          "source": "src/Data-Label-Zipper.html#UpErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "CastFailed",
          "package": "pez",
          "partial": "Cast Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:CastFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "LensGetterFailed",
          "package": "pez",
          "signature": "LensGetterFailed",
          "source": "src/Data-Label-Zipper.html#ToErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "LensGetterFailed",
          "package": "pez",
          "partial": "Lens Getter Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:LensGetterFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "LensSetterFailed",
          "package": "pez",
          "signature": "LensSetterFailed",
          "source": "src/Data-Label-Zipper.html#UpErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "LensSetterFailed",
          "package": "pez",
          "partial": "Lens Setter Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:LensSetterFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "MovePastTop",
          "package": "pez",
          "signature": "MovePastTop",
          "source": "src/Data-Label-Zipper.html#UpErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "MovePastTop",
          "package": "pez",
          "partial": "Move Past Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:MovePastTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "Up",
          "package": "pez",
          "signature": "Up",
          "source": "src/Data-Label-Zipper.html#Up",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "Up",
          "package": "pez",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "UpCasting",
          "package": "pez",
          "signature": "UpCasting",
          "source": "src/Data-Label-Zipper.html#UpCasting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "UpCasting",
          "package": "pez",
          "partial": "Up Casting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:UpCasting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e is at the top level of the data structure:\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "atTop",
          "package": "pez",
          "signature": "Zipper a b -\u003e Bool",
          "source": "src/Data-Label-Zipper.html#atTop",
          "type": "function"
        },
        "index": {
          "description": "returns True if Zipper is at the top level of the data structure",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "atTop",
          "normalized": "Zipper a b-\u003eBool",
          "package": "pez",
          "partial": "Top",
          "signature": "Zipper a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:atTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ere-assembles the data structure from the top level, returning \u003ccode\u003eNothing\u003c/code\u003e if\n the structure cannot be re-assembled.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For standard lenses produced with \u003ccode\u003e\u003ca\u003emkLabels\u003c/a\u003e\u003c/code\u003e this will never fail.\n However setters defined by hand with \u003ccode\u003e\u003ca\u003elens\u003c/a\u003e\u003c/code\u003e can be used to enforce arbitrary\n constraints on a data structure, e.g. that a type \u003ccode\u003eOdd Int\u003c/code\u003e can only hold an\n odd integer.  This function returns \u003ccode\u003eNothing\u003c/code\u003e in such cases, which\n corresponds to the \u003ccode\u003eLensSetterFailed\u003c/code\u003e constructor of \u003ccode\u003e\u003ca\u003eUpErrors\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "close",
          "package": "pez",
          "signature": "Zipper a b -\u003e Maybe a",
          "source": "src/Data-Label-Zipper.html#close",
          "type": "function"
        },
        "index": {
          "description": "re-assembles the data structure from the top level returning Nothing if the structure cannot be re-assembled Note For standard lenses produced with mkLabels this will never fail However setters defined by hand with lens can be used to enforce arbitrary constraints on data structure e.g that type Odd Int can only hold an odd integer This function returns Nothing in such cases which corresponds to the LensSetterFailed constructor of UpErrors",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "close",
          "normalized": "Zipper a b-\u003eMaybe a",
          "package": "pez",
          "signature": "Zipper a b-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the zipper, returning the saved path back down to the zipper's\n focus. See \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "closeSaving",
          "package": "pez",
          "signature": "Zipper a b -\u003e (To a b, Maybe a)",
          "source": "src/Data-Label-Zipper.html#closeSaving",
          "type": "function"
        },
        "index": {
          "description": "Close the zipper returning the saved path back down to the zipper focus See close",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "closeSaving",
          "normalized": "Zipper a b-\u003e(To a b,Maybe a)",
          "package": "pez",
          "partial": "Saving",
          "signature": "Zipper a b-\u003e(To a b,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:closeSaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "delta",
          "package": "pez",
          "signature": "m a b -\u003e Int",
          "source": "src/Data-Label-Zipper.html#delta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "delta",
          "normalized": "a b c-\u003eInt",
          "package": "pez",
          "signature": "m a b-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "failure",
          "package": "pez",
          "signature": "e -\u003e f v",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "failure",
          "normalized": "a-\u003eb c",
          "package": "pez",
          "signature": "e-\u003ef v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a composed lens that points to the location we saved. This lets \n us modify, set or get a location that we visited with our \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e, after \n closing the Zipper, using \u003ca\u003efclabels\u003c/a\u003e \u003ccode\u003eget\u003c/code\u003e and \u003ccode\u003eset\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "flatten",
          "package": "pez",
          "signature": "To a b -\u003e a :~\u003e b",
          "source": "src/Data-Label-Zipper.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Extract composed lens that points to the location we saved This lets us modify set or get location that we visited with our Zipper after closing the Zipper using fclabels get and set",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "flatten",
          "normalized": "To a b-\u003ea b",
          "package": "pez",
          "signature": "To a b-\u003ea b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "focus",
          "package": "pez",
          "signature": "Lens ~\u003e (Zipper a b) b",
          "source": "src/Data-Label-Zipper.html#focus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "focus",
          "package": "pez",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "fromException",
          "package": "pez",
          "signature": "SomeException -\u003e Maybe e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "fromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "pez",
          "partial": "Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:fromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn our zero-indexed depth in the \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e. \n if \u003ccode\u003e\u003ca\u003eatTop\u003c/a\u003e\u003c/code\u003e zipper then \u003ccode\u003e\u003ccode\u003e\u003ca\u003elevel\u003c/a\u003e\u003c/code\u003e zipper == 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "level",
          "package": "pez",
          "signature": "Zipper a b -\u003e Int",
          "source": "src/Data-Label-Zipper.html#level",
          "type": "function"
        },
        "index": {
          "description": "Return our zero-indexed depth in the Zipper if atTop zipper then level zipper",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "level",
          "normalized": "Zipper a b-\u003eInt",
          "package": "pez",
          "signature": "Zipper a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive lenses including type signatures for all the record selectors in a\n datatype. The types will be polymorphic and can be used in an arbitrary\n context.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "mkLabels",
          "package": "pez",
          "signature": "[Name] -\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Derive lenses including type signatures for all the record selectors in datatype The types will be polymorphic and can be used in an arbitrary context",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "mkLabels",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "pez",
          "partial": "Labels",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:mkLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify the Zipper's \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e modf = modify focus\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "modf",
          "package": "pez",
          "signature": "(b -\u003e b) -\u003e Zipper a b -\u003e Zipper a b",
          "source": "src/Data-Label-Zipper.html#modf",
          "type": "function"
        },
        "index": {
          "description": "modify the Zipper focus modf modify focus",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "modf",
          "normalized": "(a-\u003ea)-\u003eZipper b a-\u003eZipper b a",
          "package": "pez",
          "signature": "(b-\u003eb)-\u003eZipper a b-\u003eZipper a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:modf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to a new location in the zipper, either returning the new zipper,\n or throwing \u003ccode\u003eerr\u003c/code\u003e in some \u003ccode\u003eFailure\u003c/code\u003e class type (from the \u003ca\u003efailure\u003c/a\u003e pkg.)\n\u003c/p\u003e\u003cp\u003eThe return type can be treated as \u003ccode\u003eMaybe\u003c/code\u003e for simple exception handling\n or one can even use something like \u003ca\u003econtrol-monad-exception\u003c/a\u003e to get \n powerful typed, checked exceptions.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "move",
          "package": "pez",
          "signature": "mot b c -\u003e Zipper a b -\u003e m (Zipper a c)",
          "source": "src/Data-Label-Zipper.html#move",
          "type": "method"
        },
        "index": {
          "description": "Move to new location in the zipper either returning the new zipper or throwing err in some Failure class type from the failure pkg The return type can be treated as Maybe for simple exception handling or one can even use something like control-monad-exception to get powerful typed checked exceptions",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "move",
          "normalized": "a b c-\u003eZipper d b-\u003ee(Zipper d c)",
          "package": "pez",
          "signature": "mot b c-\u003eZipper a b-\u003em(Zipper a c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given Motion to a zipper until the Motion fails, returning the\n last location visited. For instance \u003ccode\u003emoveFloor (to left) z\u003c/code\u003e might return\n the left-most node of a \u003ccode\u003e\u003ca\u003ezipper\u003c/a\u003e\u003c/code\u003eed tree \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e moveFloor m z = maybe z (moveFloor m) $ move m z\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "moveFloor",
          "package": "pez",
          "signature": "m b b -\u003e Zipper a b -\u003e Zipper a b",
          "source": "src/Data-Label-Zipper.html#moveFloor",
          "type": "function"
        },
        "index": {
          "description": "Apply the given Motion to zipper until the Motion fails returning the last location visited For instance moveFloor to left might return the left-most node of zipper ed tree moveFloor maybe moveFloor move",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "moveFloor",
          "normalized": "a b b-\u003eZipper c b-\u003eZipper c b",
          "package": "pez",
          "partial": "Floor",
          "signature": "m b b-\u003eZipper a b-\u003eZipper a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:moveFloor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003emove\u003c/a\u003e\u003c/code\u003e but saves the \u003ccode\u003eMotion\u003c/code\u003e that will return us back to the \n location we started from in the passed zipper.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "moveSaving",
          "package": "pez",
          "signature": "mot b c -\u003e Zipper a b -\u003e m (Returning mot c b, Zipper a c)",
          "source": "src/Data-Label-Zipper.html#moveSaving",
          "type": "method"
        },
        "index": {
          "description": "like move but saves the Motion that will return us back to the location we started from in the passed zipper",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "moveSaving",
          "normalized": "a b c-\u003eZipper d b-\u003ee(Returning a c b,Zipper d c)",
          "package": "pez",
          "partial": "Saving",
          "signature": "mot b c-\u003eZipper a b-\u003em(Returning mot c b,Zipper a c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:moveSaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a motion zero or more times until the focus matches the predicate\n\u003c/p\u003e\u003cpre\u003e moveUntil p = moveWhile (not . p)\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "moveUntil",
          "package": "pez",
          "signature": "(c -\u003e Bool) -\u003e mot c c -\u003e Zipper a c -\u003e m (Zipper a c)",
          "source": "src/Data-Label-Zipper.html#moveUntil",
          "type": "function"
        },
        "index": {
          "description": "Apply motion zero or more times until the focus matches the predicate moveUntil moveWhile not",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "moveUntil",
          "normalized": "(a-\u003eBool)-\u003eb a a-\u003eZipper c a-\u003ed(Zipper c a)",
          "package": "pez",
          "partial": "Until",
          "signature": "(c-\u003eBool)-\u003emot c c-\u003eZipper a c-\u003em(Zipper a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:moveUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a motion each time the focus matches the predicate, raising an error\n in \u003ccode\u003em\u003c/code\u003e otherwise\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "moveWhile",
          "package": "pez",
          "signature": "(c -\u003e Bool) -\u003e mot c c -\u003e Zipper a c -\u003e m (Zipper a c)",
          "source": "src/Data-Label-Zipper.html#moveWhile",
          "type": "function"
        },
        "index": {
          "description": "Apply motion each time the focus matches the predicate raising an error in otherwise",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "moveWhile",
          "normalized": "(a-\u003eBool)-\u003eb a a-\u003eZipper c a-\u003ed(Zipper c a)",
          "package": "pez",
          "partial": "While",
          "signature": "(c-\u003eBool)-\u003emot c c-\u003eZipper a c-\u003em(Zipper a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:moveWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnter a zipper using the specified \u003ccode\u003e\u003ca\u003eMotion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSaving and restoring lets us for example: find some location within our \n structure using a \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e, save the location, \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e over the entire structure,\n and then return to where we were safely, even if the \"shape\" of our\n structure has changed.\n\u003c/p\u003e\u003cpre\u003e restore s = move s . zipper\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "restore",
          "package": "pez",
          "signature": "To a b -\u003e a -\u003e m (Zipper a b)",
          "source": "src/Data-Label-Zipper.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Enter zipper using the specified Motion Saving and restoring lets us for example find some location within our structure using Zipper save the location fmap over the entire structure and then return to where we were safely even if the shape of our structure has changed restore move zipper",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "restore",
          "normalized": "To a b-\u003ea-\u003ec(Zipper a b)",
          "package": "pez",
          "signature": "To a b-\u003ea-\u003em(Zipper a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a path \u003ccode\u003e\u003ca\u003eTo\u003c/a\u003e\u003c/code\u003e the current location in the \u003ccode\u003e\u003ca\u003eZipper\u003c/a\u003e\u003c/code\u003e.\n This lets you return to a location in your data type with \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e save = fst . closeSaving\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "save",
          "package": "pez",
          "signature": "Zipper a b -\u003e To a b",
          "source": "src/Data-Label-Zipper.html#save",
          "type": "function"
        },
        "index": {
          "description": "Return path To the current location in the Zipper This lets you return to location in your data type with restore save fst closeSaving",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "save",
          "normalized": "Zipper a b-\u003eTo a b",
          "package": "pez",
          "signature": "Zipper a b-\u003eTo a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the Zipper's \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e setf = set focus\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "setf",
          "package": "pez",
          "signature": "b -\u003e Zipper a b -\u003e Zipper a b",
          "source": "src/Data-Label-Zipper.html#setf",
          "type": "function"
        },
        "index": {
          "description": "set the Zipper focus setf set focus",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "setf",
          "normalized": "a-\u003eZipper b a-\u003eZipper b a",
          "package": "pez",
          "signature": "b-\u003eZipper a b-\u003eZipper a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:setf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse a \u003ca\u003efclabels\u003c/a\u003e label to define a Motion \"down\" into a data type.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "to",
          "package": "pez",
          "signature": "(a :~\u003e b) -\u003e To a b",
          "source": "src/Data-Label-Zipper.html#to",
          "type": "function"
        },
        "index": {
          "description": "use fclabels label to define Motion down into data type",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "to",
          "normalized": "(a b)-\u003eTo a b",
          "package": "pez",
          "signature": "(a b)-\u003eTo a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "toException",
          "package": "pez",
          "signature": "e -\u003e SomeException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "toException",
          "normalized": "a-\u003eSomeException",
          "package": "pez",
          "partial": "Exception",
          "signature": "e-\u003eSomeException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:toException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a value of type \u003ccode\u003ea\u003c/code\u003e and returns a concrete representation\n of that type.  The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by\n any instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, so that it is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as\n the argument.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "typeOf",
          "package": "pez",
          "signature": "a -\u003e TypeRep",
          "type": "method"
        },
        "index": {
          "description": "Takes value of type and returns concrete representation of that type The value of the argument should be ignored by any instance of Typeable so that it is safe to pass undefined as the argument",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "typeOf",
          "normalized": "a-\u003eTypeRep",
          "package": "pez",
          "partial": "Of",
          "signature": "a-\u003eTypeRep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Label.Zipper",
          "name": "upLevel",
          "package": "pez",
          "signature": "Int",
          "source": "src/Data-Label-Zipper.html#Up",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "upLevel",
          "package": "pez",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:upLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea view function for a Zipper's \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e viewf = get focus\n\u003c/pre\u003e",
          "module": "Data.Label.Zipper",
          "name": "viewf",
          "package": "pez",
          "signature": "Zipper a b -\u003e b",
          "source": "src/Data-Label-Zipper.html#viewf",
          "type": "function"
        },
        "index": {
          "description": "view function for Zipper focus viewf get focus",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "viewf",
          "normalized": "Zipper a b-\u003eb",
          "package": "pez",
          "signature": "Zipper a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:viewf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a zipper with the focus on the top level.\n\u003c/p\u003e",
          "module": "Data.Label.Zipper",
          "name": "zipper",
          "package": "pez",
          "signature": "a -\u003e Zipper a a",
          "source": "src/Data-Label-Zipper.html#zipper",
          "type": "function"
        },
        "index": {
          "description": "create zipper with the focus on the top level",
          "hierarchy": "Data Label Zipper",
          "module": "Data.Label.Zipper",
          "name": "zipper",
          "normalized": "a-\u003eZipper a a",
          "package": "pez",
          "signature": "a-\u003eZipper a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pez/docs/Data-Label-Zipper.html#v:zipper"
      }
    }
  ]
]