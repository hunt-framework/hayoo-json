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
        "word": "optparse-applicative"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an arrow interface for option parsers, which allows\n to define and combine parsers using the arrow notation and arrow\n combinators.\n\u003c/p\u003e\u003cp\u003eThe arrow syntax is particularly useful to create parsers of nested\n structures, or records where the order of fields is different from the order\n in which the parsers should be applied.\n\u003c/p\u003e\u003cp\u003eFor example, an \u003ccode\u003e\u003ca\u003earguments\u003c/a\u003e\u003c/code\u003e parser often needs\n to be applied last, and that makes it inconvenient to use it for a field\n which is not the last one in a record.\n\u003c/p\u003e\u003cp\u003eUsing the arrow syntax and the functions in this module, one can write, e.g.:\n\u003c/p\u003e\u003cpre\u003e data Options = Options\n   { optArgs :: [String]\n   , optVerbose :: Bool }\n\n opts :: Parser Options\n opts = runA $ proc () -\u003e do\n   verbose \u003c- asA (switch (short 'v')) -\u003c ()\n   args \u003c- asA (arguments str idm) -\u003c ()\n   returnA -\u003c Options args verbose\n\u003c/pre\u003e\u003cp\u003eParser arrows, created out of regular \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e values using the \u003ccode\u003e\u003ca\u003easA\u003c/a\u003e\u003c/code\u003e\n function, are arrows taking \u003ccode\u003e()\u003c/code\u003e as argument and returning the parsed value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Options.Applicative.Arrows",
          "name": "Arrows",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Arrows.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains an arrow interface for option parsers which allows to define and combine parsers using the arrow notation and arrow combinators The arrow syntax is particularly useful to create parsers of nested structures or records where the order of fields is different from the order in which the parsers should be applied For example an arguments parser often needs to be applied last and that makes it inconvenient to use it for field which is not the last one in record Using the arrow syntax and the functions in this module one can write e.g data Options Options optArgs String optVerbose Bool opts Parser Options opts runA proc do verbose asA switch short args asA arguments str idm returnA Options args verbose Parser arrows created out of regular Parser values using the asA function are arrows taking as argument and returning the parsed value",
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "Arrows",
          "package": "optparse-applicative",
          "partial": "Arrows",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor any \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functor \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003eA f\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e instance\n associated to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eA\u003c/a\u003e\u003c/code\u003e constructor can be used to convert a value of type \u003ccode\u003ef (a -\u003e b)\u003c/code\u003e into\n an arrow.\n\u003c/p\u003e",
          "module": "Options.Applicative.Arrows",
          "name": "A",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Arrows.html#A",
          "type": "newtype"
        },
        "index": {
          "description": "For any Applicative functor is the Arrow instance associated to The constructor can be used to convert value of type into an arrow",
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "A",
          "package": "optparse-applicative",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#t:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of arrows associated to the applicative \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e functor.\n\u003c/p\u003e",
          "module": "Options.Applicative.Arrows",
          "name": "ParserA",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Arrows.html#ParserA",
          "type": "type"
        },
        "index": {
          "description": "The type of arrows associated to the applicative Parser functor",
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "ParserA",
          "package": "optparse-applicative",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#t:ParserA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Arrows",
          "name": "A",
          "package": "optparse-applicative",
          "signature": "A",
          "source": "src/Options-Applicative-Arrows.html#A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "A",
          "package": "optparse-applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value of type \u003ccode\u003ef a\u003c/code\u003e into an arrow taking \u003ccode\u003e()\u003c/code\u003e as argument.\n\u003c/p\u003e\u003cp\u003eApplied to a value of type \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e, it turns it into an arrow that can be\n used inside an arrow command, or passed to arrow combinators.\n\u003c/p\u003e",
          "module": "Options.Applicative.Arrows",
          "name": "asA",
          "package": "optparse-applicative",
          "signature": "f a -\u003e A f () a",
          "source": "src/Options-Applicative-Arrows.html#asA",
          "type": "function"
        },
        "index": {
          "description": "Convert value of type into an arrow taking as argument Applied to value of type Parser it turns it into an arrow that can be used inside an arrow command or passed to arrow combinators",
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "asA",
          "normalized": "a b-\u003eA a()b",
          "package": "optparse-applicative",
          "signature": "f a-\u003eA f()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:asA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an arrow back to an applicative value.\n\u003c/p\u003e\u003cp\u003eThis function can be used to return a result of type \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e from an arrow\n command.\n\u003c/p\u003e",
          "module": "Options.Applicative.Arrows",
          "name": "runA",
          "package": "optparse-applicative",
          "signature": "A f () a -\u003e f a",
          "source": "src/Options-Applicative-Arrows.html#runA",
          "type": "function"
        },
        "index": {
          "description": "Convert an arrow back to an applicative value This function can be used to return result of type Parser from an arrow command",
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "runA",
          "normalized": "A a()b-\u003ea b",
          "package": "optparse-applicative",
          "signature": "A f()a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:runA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Arrows",
          "name": "unA",
          "package": "optparse-applicative",
          "signature": "f (a -\u003e b)",
          "source": "src/Options-Applicative-Arrows.html#A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Arrows",
          "module": "Options.Applicative.Arrows",
          "name": "unA",
          "normalized": "a(b-\u003ec)",
          "package": "optparse-applicative",
          "signature": "f(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:unA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.BashCompletion",
          "name": "BashCompletion",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-BashCompletion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative BashCompletion",
          "module": "Options.Applicative.BashCompletion",
          "name": "BashCompletion",
          "package": "optparse-applicative",
          "partial": "Bash Completion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-BashCompletion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.BashCompletion",
          "name": "bashCompletionParser",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e ParserPrefs -\u003e Parser ParserFailure",
          "source": "src/Options-Applicative-BashCompletion.html#bashCompletionParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative BashCompletion",
          "module": "Options.Applicative.BashCompletion",
          "name": "bashCompletionParser",
          "normalized": "Parser a-\u003eParserPrefs-\u003eParser ParserFailure",
          "package": "optparse-applicative",
          "partial": "Completion Parser",
          "signature": "Parser a-\u003eParserPrefs-\u003eParser ParserFailure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-BashCompletion.html#v:bashCompletionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Completer",
          "name": "Completer",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Completer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Completer",
          "module": "Options.Applicative.Builder.Completer",
          "name": "Completer",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Completer",
          "name": "Completer",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#Completer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Completer",
          "module": "Options.Applicative.Builder.Completer",
          "name": "Completer",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#t:Completer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Completer",
          "name": "bashCompleter",
          "package": "optparse-applicative",
          "signature": "String -\u003e Completer",
          "source": "src/Options-Applicative-Builder-Completer.html#bashCompleter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Completer",
          "module": "Options.Applicative.Builder.Completer",
          "name": "bashCompleter",
          "normalized": "String-\u003eCompleter",
          "package": "optparse-applicative",
          "partial": "Completer",
          "signature": "String-\u003eCompleter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:bashCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Completer",
          "name": "listCompleter",
          "package": "optparse-applicative",
          "signature": "[String] -\u003e Completer",
          "source": "src/Options-Applicative-Builder-Completer.html#listCompleter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Completer",
          "module": "Options.Applicative.Builder.Completer",
          "name": "listCompleter",
          "normalized": "[String]-\u003eCompleter",
          "package": "optparse-applicative",
          "partial": "Completer",
          "signature": "[String]-\u003eCompleter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:listCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Completer",
          "name": "listIOCompleter",
          "package": "optparse-applicative",
          "signature": "IO [String] -\u003e Completer",
          "source": "src/Options-Applicative-Builder-Completer.html#listIOCompleter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Completer",
          "module": "Options.Applicative.Builder.Completer",
          "name": "listIOCompleter",
          "normalized": "IO[String]-\u003eCompleter",
          "package": "optparse-applicative",
          "partial": "IOCompleter",
          "signature": "IO[String]-\u003eCompleter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:listIOCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Options.Applicative.Builder.Completer\",\"Options.Applicative.Types\"]",
          "name": "mkCompleter",
          "package": "optparse-applicative",
          "signature": "(String -\u003e IO [String]) -\u003e Completer",
          "source": "src/Options-Applicative-Types.html#mkCompleter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:mkCompleter\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:mkCompleter\"]"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Completer",
          "module": "Options.Applicative.Builder.Completer",
          "name": "mkCompleter",
          "normalized": "(String-\u003eIO[String])-\u003eCompleter",
          "package": "optparse-applicative",
          "partial": "Completer",
          "signature": "(String-\u003eIO[String])-\u003eCompleter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:mkCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "Internal",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "Internal",
          "package": "optparse-applicative",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "ArgumentFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "ArgumentFields",
          "package": "optparse-applicative",
          "partial": "Argument Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:ArgumentFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "CommandFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "CommandFields",
          "package": "optparse-applicative",
          "partial": "Command Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:CommandFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "DefaultProp",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#DefaultProp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "DefaultProp",
          "package": "optparse-applicative",
          "partial": "Default Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:DefaultProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "FlagFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "FlagFields",
          "package": "optparse-applicative",
          "partial": "Flag Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:FlagFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "HasCompleter",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#HasCompleter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "HasCompleter",
          "package": "optparse-applicative",
          "partial": "Has Completer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:HasCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "HasName",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#HasName",
          "type": "class"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "HasName",
          "package": "optparse-applicative",
          "partial": "Has Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:HasName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option modifier.\n\u003c/p\u003e\u003cp\u003eOption modifiers are values that represent a modification of the properties\n of an option.\n\u003c/p\u003e\u003cp\u003eThe type parameter \u003ccode\u003ea\u003c/code\u003e is the return type of the option, while \u003ccode\u003ef\u003c/code\u003e is a\n record containing its properties (e.g. \u003ccode\u003e\u003ca\u003eOptionFields\u003c/a\u003e\u003c/code\u003e for regular options,\n \u003ccode\u003e\u003ca\u003eFlagFields\u003c/a\u003e\u003c/code\u003e for flags, etc...).\n\u003c/p\u003e\u003cp\u003eAn option modifier consists of 3 elements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A field modifier, of the form \u003ccode\u003ef a -\u003e f a\u003c/code\u003e. These are essentially\n  (compositions of) setters for some of the properties supported by \u003ccode\u003ef\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An optional default value and function to display it.\n\u003c/li\u003e\u003cli\u003e A property modifier, of the form \u003ccode\u003eOptProperties -\u003e OptProperties\u003c/code\u003e. This\n  is just like the field modifier, but for properties applicable to any\n  option.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eModifiers are instances of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, and can be composed as such.\n\u003c/p\u003e\u003cp\u003eYou rarely need to deal with modifiers directly, as most of the times it is\n sufficient to pass them to builders (such as \u003ccode\u003estrOption\u003c/code\u003e or \u003ccode\u003eflag\u003c/code\u003e) to\n create options (see \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder.Internal",
          "name": "Mod",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#Mod",
          "type": "data"
        },
        "index": {
          "description": "An option modifier Option modifiers are values that represent modification of the properties of an option The type parameter is the return type of the option while is record containing its properties e.g OptionFields for regular options FlagFields for flags etc An option modifier consists of elements field modifier of the form These are essentially compositions of setters for some of the properties supported by An optional default value and function to display it property modifier of the form OptProperties OptProperties This is just like the field modifier but for properties applicable to any option Modifiers are instances of Monoid and can be composed as such You rarely need to deal with modifiers directly as most of the times it is sufficient to pass them to builders such as strOption or flag to create options see Builder",
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "Mod",
          "package": "optparse-applicative",
          "partial": "Mod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "OptionFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "OptionFields",
          "package": "optparse-applicative",
          "partial": "Option Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:OptionFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "ArgumentFields",
          "package": "optparse-applicative",
          "signature": "ArgumentFields",
          "source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "ArgumentFields",
          "package": "optparse-applicative",
          "partial": "Argument Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:ArgumentFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "CommandFields",
          "package": "optparse-applicative",
          "signature": "CommandFields",
          "source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "CommandFields",
          "package": "optparse-applicative",
          "partial": "Command Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:CommandFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "DefaultProp",
          "package": "optparse-applicative",
          "signature": "DefaultProp (Maybe a) (Maybe (a -\u003e String))",
          "source": "src/Options-Applicative-Builder-Internal.html#DefaultProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "DefaultProp",
          "normalized": "DefaultProp(Maybe a)(Maybe(a-\u003eString))",
          "package": "optparse-applicative",
          "partial": "Default Prop",
          "signature": "DefaultProp(Maybe a)(Maybe(a-\u003eString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:DefaultProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "FlagFields",
          "package": "optparse-applicative",
          "signature": "FlagFields",
          "source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "FlagFields",
          "package": "optparse-applicative",
          "partial": "Flag Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:FlagFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "Mod",
          "package": "optparse-applicative",
          "signature": "Mod (f a -\u003e f a) (DefaultProp a) (OptProperties -\u003e OptProperties)",
          "source": "src/Options-Applicative-Builder-Internal.html#Mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "Mod",
          "normalized": "Mod(a b-\u003ea b)(DefaultProp b)(OptProperties-\u003eOptProperties)",
          "package": "optparse-applicative",
          "partial": "Mod",
          "signature": "Mod(f a-\u003ef a)(DefaultProp a)(OptProperties-\u003eOptProperties)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "OptionFields",
          "package": "optparse-applicative",
          "signature": "OptionFields",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "OptionFields",
          "package": "optparse-applicative",
          "partial": "Option Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:OptionFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "argCompleter",
          "package": "optparse-applicative",
          "signature": "Completer",
          "source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "argCompleter",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:argCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase default properties.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder.Internal",
          "name": "baseProps",
          "package": "optparse-applicative",
          "signature": "OptProperties",
          "source": "src/Options-Applicative-Builder-Internal.html#baseProps",
          "type": "function"
        },
        "index": {
          "description": "Base default properties",
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "baseProps",
          "package": "optparse-applicative",
          "partial": "Props",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:baseProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "cmdCommands",
          "package": "optparse-applicative",
          "signature": "[(String, ParserInfo a)]",
          "source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "cmdCommands",
          "normalized": "[(String,ParserInfo a)]",
          "package": "optparse-applicative",
          "partial": "Commands",
          "signature": "[(String,ParserInfo a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:cmdCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "fieldMod",
          "package": "optparse-applicative",
          "signature": "(f a -\u003e f a) -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder-Internal.html#fieldMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "fieldMod",
          "normalized": "(a b-\u003ea b)-\u003eMod a b",
          "package": "optparse-applicative",
          "partial": "Mod",
          "signature": "(f a-\u003ef a)-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:fieldMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "flagActive",
          "package": "optparse-applicative",
          "signature": "a",
          "source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "flagActive",
          "package": "optparse-applicative",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:flagActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "flagNames",
          "package": "optparse-applicative",
          "signature": "[OptName]",
          "source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "flagNames",
          "normalized": "[OptName]",
          "package": "optparse-applicative",
          "partial": "Names",
          "signature": "[OptName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:flagNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHide this option from the help text\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Builder.Internal\",\"Options.Applicative.Builder\"]",
          "name": "internal",
          "package": "optparse-applicative",
          "signature": "Mod f a",
          "source": "src/Options-Applicative-Builder-Internal.html#internal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:internal\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:internal\"]"
        },
        "index": {
          "description": "Hide this option from the help text",
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "internal",
          "package": "optparse-applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkCommand",
          "package": "optparse-applicative",
          "signature": "Mod CommandFields a -\u003e ([String], String -\u003e Maybe (ParserInfo a))",
          "source": "src/Options-Applicative-Builder-Internal.html#mkCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkCommand",
          "normalized": "Mod CommandFields a-\u003e([String],String-\u003eMaybe(ParserInfo a))",
          "package": "optparse-applicative",
          "partial": "Command",
          "signature": "Mod CommandFields a-\u003e([String],String-\u003eMaybe(ParserInfo a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkOption",
          "package": "optparse-applicative",
          "signature": "DefaultProp a -\u003e (OptProperties -\u003e OptProperties) -\u003e OptReader a -\u003e Option a",
          "source": "src/Options-Applicative-Builder-Internal.html#mkOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkOption",
          "normalized": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eOption a",
          "package": "optparse-applicative",
          "partial": "Option",
          "signature": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eOption a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkParser",
          "package": "optparse-applicative",
          "signature": "DefaultProp a -\u003e (OptProperties -\u003e OptProperties) -\u003e OptReader a -\u003e Parser a",
          "source": "src/Options-Applicative-Builder-Internal.html#mkParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkParser",
          "normalized": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eParser a",
          "package": "optparse-applicative",
          "partial": "Parser",
          "signature": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkProps",
          "package": "optparse-applicative",
          "signature": "DefaultProp a -\u003e (OptProperties -\u003e OptProperties) -\u003e OptProperties",
          "source": "src/Options-Applicative-Builder-Internal.html#mkProps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "mkProps",
          "normalized": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptProperties",
          "package": "optparse-applicative",
          "partial": "Props",
          "signature": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptProperties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "modCompleter",
          "package": "optparse-applicative",
          "signature": "(Completer -\u003e Completer) -\u003e f a -\u003e f a",
          "source": "src/Options-Applicative-Builder-Internal.html#modCompleter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "modCompleter",
          "normalized": "(Completer-\u003eCompleter)-\u003ea b-\u003ea b",
          "package": "optparse-applicative",
          "partial": "Completer",
          "signature": "(Completer-\u003eCompleter)-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:modCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "name",
          "package": "optparse-applicative",
          "signature": "OptName -\u003e f a -\u003e f a",
          "source": "src/Options-Applicative-Builder-Internal.html#name",
          "type": "method"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "name",
          "normalized": "OptName-\u003ea b-\u003ea b",
          "package": "optparse-applicative",
          "signature": "OptName-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "optCompleter",
          "package": "optparse-applicative",
          "signature": "Completer",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "optCompleter",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "optNames",
          "package": "optparse-applicative",
          "signature": "[OptName]",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "optNames",
          "normalized": "[OptName]",
          "package": "optparse-applicative",
          "partial": "Names",
          "signature": "[OptName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "optNoArgError",
          "package": "optparse-applicative",
          "signature": "ParseError",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "optNoArgError",
          "package": "optparse-applicative",
          "partial": "No Arg Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optNoArgError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "optReader",
          "package": "optparse-applicative",
          "signature": "String -\u003e ReadM a",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "optReader",
          "normalized": "String-\u003eReadM a",
          "package": "optparse-applicative",
          "partial": "Reader",
          "signature": "String-\u003eReadM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder.Internal",
          "name": "optionMod",
          "package": "optparse-applicative",
          "signature": "(OptProperties -\u003e OptProperties) -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder-Internal.html#optionMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder Internal",
          "module": "Options.Applicative.Builder.Internal",
          "name": "optionMod",
          "normalized": "(OptProperties-\u003eOptProperties)-\u003eMod a b",
          "package": "optparse-applicative",
          "partial": "Mod",
          "signature": "(OptProperties-\u003eOptProperties)-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optionMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "Builder",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "Builder",
          "package": "optparse-applicative",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "ArgumentFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "ArgumentFields",
          "package": "optparse-applicative",
          "partial": "Argument Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:ArgumentFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "CommandFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "CommandFields",
          "package": "optparse-applicative",
          "partial": "Command Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:CommandFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "FlagFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "FlagFields",
          "package": "optparse-applicative",
          "partial": "Flag Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:FlagFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifier for \u003ccode\u003e\u003ca\u003eParserInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "InfoMod",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder.html#InfoMod",
          "type": "data"
        },
        "index": {
          "description": "Modifier for ParserInfo",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "InfoMod",
          "package": "optparse-applicative",
          "partial": "Info Mod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:InfoMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option modifier.\n\u003c/p\u003e\u003cp\u003eOption modifiers are values that represent a modification of the properties\n of an option.\n\u003c/p\u003e\u003cp\u003eThe type parameter \u003ccode\u003ea\u003c/code\u003e is the return type of the option, while \u003ccode\u003ef\u003c/code\u003e is a\n record containing its properties (e.g. \u003ccode\u003e\u003ca\u003eOptionFields\u003c/a\u003e\u003c/code\u003e for regular options,\n \u003ccode\u003e\u003ca\u003eFlagFields\u003c/a\u003e\u003c/code\u003e for flags, etc...).\n\u003c/p\u003e\u003cp\u003eAn option modifier consists of 3 elements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A field modifier, of the form \u003ccode\u003ef a -\u003e f a\u003c/code\u003e. These are essentially\n  (compositions of) setters for some of the properties supported by \u003ccode\u003ef\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An optional default value and function to display it.\n\u003c/li\u003e\u003cli\u003e A property modifier, of the form \u003ccode\u003eOptProperties -\u003e OptProperties\u003c/code\u003e. This\n  is just like the field modifier, but for properties applicable to any\n  option.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eModifiers are instances of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, and can be composed as such.\n\u003c/p\u003e\u003cp\u003eYou rarely need to deal with modifiers directly, as most of the times it is\n sufficient to pass them to builders (such as \u003ccode\u003estrOption\u003c/code\u003e or \u003ccode\u003eflag\u003c/code\u003e) to\n create options (see \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "Mod",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#Mod",
          "type": "data"
        },
        "index": {
          "description": "An option modifier Option modifiers are values that represent modification of the properties of an option The type parameter is the return type of the option while is record containing its properties e.g OptionFields for regular options FlagFields for flags etc An option modifier consists of elements field modifier of the form These are essentially compositions of setters for some of the properties supported by An optional default value and function to display it property modifier of the form OptProperties OptProperties This is just like the field modifier but for properties applicable to any option Modifiers are instances of Monoid and can be composed as such You rarely need to deal with modifiers directly as most of the times it is sufficient to pass them to builders such as strOption or flag to create options see Builder",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "Mod",
          "package": "optparse-applicative",
          "partial": "Mod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "OptionFields",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "OptionFields",
          "package": "optparse-applicative",
          "partial": "Option Fields",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:OptionFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "ParseError",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "ParseError",
          "package": "optparse-applicative",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "PrefsMod",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Builder.html#PrefsMod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "PrefsMod",
          "package": "optparse-applicative",
          "partial": "Prefs Mod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:PrefsMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype over the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad used by option readers.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "ReadM",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ReadM",
          "type": "data"
        },
        "index": {
          "description": "newtype over the Either monad used by option readers",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "ReadM",
          "package": "optparse-applicative",
          "partial": "Read",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:ReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use (\u003ca/\u003e) instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCompose modifiers.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "(&)",
          "package": "optparse-applicative",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Options-Applicative-Builder.html#%26",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use instead Compose modifiers",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "(&) &",
          "normalized": "a-\u003ea-\u003ea",
          "package": "optparse-applicative",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "(\u003c\u003e)",
          "package": "optparse-applicative",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "optparse-applicative",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Options.Applicative.Builder\",\"Options.Applicative.Types\"]",
          "name": "ErrorMsg",
          "package": "optparse-applicative",
          "signature": "ErrorMsg String",
          "source": "src/Options-Applicative-Types.html#ParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:ErrorMsg\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ErrorMsg\"]"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "ErrorMsg",
          "package": "optparse-applicative",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:ErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Options.Applicative.Builder\",\"Options.Applicative.Types\"]",
          "name": "InfoMsg",
          "package": "optparse-applicative",
          "signature": "InfoMsg String",
          "source": "src/Options-Applicative-Types.html#ParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:InfoMsg\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:InfoMsg\"]"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "InfoMsg",
          "package": "optparse-applicative",
          "partial": "Info Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:InfoMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Options.Applicative.Builder\",\"Options.Applicative.Types\"]",
          "name": "ShowHelpText",
          "package": "optparse-applicative",
          "signature": "ShowHelpText",
          "source": "src/Options-Applicative-Types.html#ParseError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:ShowHelpText\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ShowHelpText\"]"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "ShowHelpText",
          "package": "optparse-applicative",
          "partial": "Show Help Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:ShowHelpText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option that always fails.\n\u003c/p\u003e\u003cp\u003eWhen this option is encountered, the option parser immediately aborts with\n the given parse error.  If you simply want to output a message, use\n \u003ccode\u003e\u003ca\u003einfoOption\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "abortOption",
          "package": "optparse-applicative",
          "signature": "ParseError -\u003e Mod OptionFields (a -\u003e a) -\u003e Parser (a -\u003e a)",
          "source": "src/Options-Applicative-Builder.html#abortOption",
          "type": "function"
        },
        "index": {
          "description": "An option that always fails When this option is encountered the option parser immediately aborts with the given parse error If you simply want to output message use infoOption instead",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "abortOption",
          "normalized": "ParseError-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)",
          "package": "optparse-applicative",
          "partial": "Option",
          "signature": "ParseError-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:abortOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a bash completion action. Common actions include \u003ccode\u003efile\u003c/code\u003e and\n \u003ccode\u003edirectory\u003c/code\u003e. See\n http:\u003cem/\u003ewww.gnu.org\u003cem\u003esoftware\u003c/em\u003ebash\u003cem\u003emanual\u003c/em\u003ehtml_node/Programmable-Completion-Builtins.html#Programmable-Completion-Builtins\n for a complete list.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "action",
          "package": "optparse-applicative",
          "signature": "String -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#action",
          "type": "function"
        },
        "index": {
          "description": "Add bash completion action Common actions include file and directory See http www.gnu.org software bash manual html node Programmable-Completion-Builtins.html Programmable-Completion-Builtins for complete list",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "action",
          "normalized": "String-\u003eMod a b",
          "package": "optparse-applicative",
          "signature": "String-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for an argument parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "argument",
          "package": "optparse-applicative",
          "signature": "(String -\u003e Maybe a) -\u003e Mod ArgumentFields a -\u003e Parser a",
          "source": "src/Options-Applicative-Builder.html#argument",
          "type": "function"
        },
        "index": {
          "description": "Builder for an argument parser",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "argument",
          "normalized": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:argument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for an argument list parser. All arguments are collected and\n returned as a list.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "arguments",
          "package": "optparse-applicative",
          "signature": "(String -\u003e Maybe a) -\u003e Mod ArgumentFields a -\u003e Parser [a]",
          "source": "src/Options-Applicative-Builder.html#arguments",
          "type": "function"
        },
        "index": {
          "description": "Builder for an argument list parser All arguments are collected and returned as list",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "arguments",
          "normalized": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]",
          "package": "optparse-applicative",
          "signature": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earguments\u003c/a\u003e\u003c/code\u003e, but require at least one argument.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "arguments1",
          "package": "optparse-applicative",
          "signature": "(String -\u003e Maybe a) -\u003e Mod ArgumentFields a -\u003e Parser [a]",
          "source": "src/Options-Applicative-Builder.html#arguments1",
          "type": "function"
        },
        "index": {
          "description": "Like arguments but require at least one argument",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "arguments1",
          "normalized": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]",
          "package": "optparse-applicative",
          "signature": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:arguments1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader based on the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "auto",
          "package": "optparse-applicative",
          "signature": "String -\u003e m a",
          "source": "src/Options-Applicative-Builder.html#auto",
          "type": "function"
        },
        "index": {
          "description": "Option reader based on the Read type class",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "auto",
          "normalized": "String-\u003ea b",
          "package": "optparse-applicative",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly show a brief description in the help text of this parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "briefDesc",
          "package": "optparse-applicative",
          "signature": "InfoMod a",
          "source": "src/Options-Applicative-Builder.html#briefDesc",
          "type": "function"
        },
        "index": {
          "description": "Only show brief description in the help text of this parser",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "briefDesc",
          "package": "optparse-applicative",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:briefDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a command to a subparser option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "command",
          "package": "optparse-applicative",
          "signature": "String -\u003e ParserInfo a -\u003e Mod CommandFields a",
          "source": "src/Options-Applicative-Builder.html#command",
          "type": "function"
        },
        "index": {
          "description": "Add command to subparser option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "command",
          "normalized": "String-\u003eParserInfo a-\u003eMod CommandFields a",
          "package": "optparse-applicative",
          "signature": "String-\u003eParserInfo a-\u003eMod CommandFields a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a list of possible completion values.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "completeWith",
          "package": "optparse-applicative",
          "signature": "[String] -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#completeWith",
          "type": "function"
        },
        "index": {
          "description": "Add list of possible completion values",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "completeWith",
          "normalized": "[String]-\u003eMod a b",
          "package": "optparse-applicative",
          "partial": "With",
          "signature": "[String]-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:completeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a completer to an argument.\n\u003c/p\u003e\u003cp\u003eA completer is a function String -\u003e IO String which, given a partial\n argument, returns all possible completions for that argument.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "completer",
          "package": "optparse-applicative",
          "signature": "Completer -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#completer",
          "type": "function"
        },
        "index": {
          "description": "Add completer to an argument completer is function String IO String which given partial argument returns all possible completions for that argument",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "completer",
          "normalized": "Completer-\u003eMod a b",
          "package": "optparse-applicative",
          "signature": "Completer-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:completer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNull \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader. All arguments will fail validation.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "disabled",
          "package": "optparse-applicative",
          "signature": "String -\u003e m a",
          "source": "src/Options-Applicative-Builder.html#disabled",
          "type": "function"
        },
        "index": {
          "description": "Null Option reader All arguments will fail validation",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "disabled",
          "normalized": "String-\u003ea b",
          "package": "optparse-applicative",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:disabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "disambiguate",
          "package": "optparse-applicative",
          "signature": "PrefsMod",
          "source": "src/Options-Applicative-Builder.html#disambiguate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "disambiguate",
          "package": "optparse-applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:disambiguate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader as a function in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "eitherReader",
          "package": "optparse-applicative",
          "signature": "(String -\u003e Either String a) -\u003e Mod OptionFields a",
          "source": "src/Options-Applicative-Builder.html#eitherReader",
          "type": "function"
        },
        "index": {
          "description": "Specify the Option reader as function in the Either monad",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "eitherReader",
          "normalized": "(String-\u003eEither String a)-\u003eMod OptionFields a",
          "package": "optparse-applicative",
          "partial": "Reader",
          "signature": "(String-\u003eEither String a)-\u003eMod OptionFields a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:eitherReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify an exit code if a parse error occurs.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "failureCode",
          "package": "optparse-applicative",
          "signature": "Int -\u003e InfoMod a",
          "source": "src/Options-Applicative-Builder.html#failureCode",
          "type": "function"
        },
        "index": {
          "description": "Specify an exit code if parse error occurs",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "failureCode",
          "normalized": "Int-\u003eInfoMod a",
          "package": "optparse-applicative",
          "partial": "Code",
          "signature": "Int-\u003eInfoMod a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:failureCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for a flag parser.\n\u003c/p\u003e\u003cp\u003eA flag that switches from a \"default value\" to an \"active value\" when\n encountered. For a simple boolean value, use \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "flag",
          "package": "optparse-applicative",
          "signature": "a-\u003e a-\u003e Mod FlagFields a-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Builder for flag parser flag that switches from default value to an active value when encountered For simple boolean value use switch instead",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "flag",
          "normalized": "a-\u003ea-\u003eMod FlagFields a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "a-\u003ea-\u003eMod FlagFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for a flag parser without a default value.\n\u003c/p\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eflag\u003c/a\u003e\u003c/code\u003e, but with no default value. In particular, this flag will\n never parse successfully by itself.\n\u003c/p\u003e\u003cp\u003eIt still makes sense to use it as part of a composite parser. For example\n\u003c/p\u003e\u003cpre\u003e length \u003c$\u003e many (flag' () (short 't'))\n\u003c/pre\u003e\u003cp\u003eis a parser that counts the number of \u003ca\u003e-t\u003c/a\u003e arguments on the command line.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "flag'",
          "package": "optparse-applicative",
          "signature": "a-\u003e Mod FlagFields a-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Builder for flag parser without default value Same as flag but with no default value In particular this flag will never parse successfully by itself It still makes sense to use it as part of composite parser For example length many flag short is parser that counts the number of arguments on the command line",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "flag'",
          "normalized": "a-\u003eMod FlagFields a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "a-\u003eMod FlagFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:flag-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a footer for this parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "footer",
          "package": "optparse-applicative",
          "signature": "String -\u003e InfoMod a",
          "source": "src/Options-Applicative-Builder.html#footer",
          "type": "function"
        },
        "index": {
          "description": "Specify footer for this parser",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "footer",
          "normalized": "String-\u003eInfoMod a",
          "package": "optparse-applicative",
          "signature": "String-\u003eInfoMod a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:footer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a full description in the help text of this parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "fullDesc",
          "package": "optparse-applicative",
          "signature": "InfoMod a",
          "source": "src/Options-Applicative-Builder.html#fullDesc",
          "type": "function"
        },
        "index": {
          "description": "Show full description in the help text of this parser",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "fullDesc",
          "package": "optparse-applicative",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:fullDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a header for this parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "header",
          "package": "optparse-applicative",
          "signature": "String -\u003e InfoMod a",
          "source": "src/Options-Applicative-Builder.html#header",
          "type": "function"
        },
        "index": {
          "description": "Specify header for this parser",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "header",
          "normalized": "String-\u003eInfoMod a",
          "package": "optparse-applicative",
          "signature": "String-\u003eInfoMod a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the help text for an option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "help",
          "package": "optparse-applicative",
          "signature": "String -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#help",
          "type": "function"
        },
        "index": {
          "description": "Specify the help text for an option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "help",
          "normalized": "String-\u003eMod a b",
          "package": "optparse-applicative",
          "signature": "String-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHide this option from the brief description.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "hidden",
          "package": "optparse-applicative",
          "signature": "Mod f a",
          "source": "src/Options-Applicative-Builder.html#hidden",
          "type": "function"
        },
        "index": {
          "description": "Hide this option from the brief description",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "hidden",
          "package": "optparse-applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrivial option modifier.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "idm",
          "package": "optparse-applicative",
          "signature": "m",
          "source": "src/Options-Applicative-Builder.html#idm",
          "type": "function"
        },
        "index": {
          "description": "Trivial option modifier",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "idm",
          "package": "optparse-applicative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:idm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eParserInfo\u003c/a\u003e\u003c/code\u003e given a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e and a modifier.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "info",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e InfoMod a -\u003e ParserInfo a",
          "source": "src/Options-Applicative-Builder.html#info",
          "type": "function"
        },
        "index": {
          "description": "Create ParserInfo given Parser and modifier",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "info",
          "normalized": "Parser a-\u003eInfoMod a-\u003eParserInfo a",
          "package": "optparse-applicative",
          "signature": "Parser a-\u003eInfoMod a-\u003eParserInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option that always fails and displays a message.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "infoOption",
          "package": "optparse-applicative",
          "signature": "String -\u003e Mod OptionFields (a -\u003e a) -\u003e Parser (a -\u003e a)",
          "source": "src/Options-Applicative-Builder.html#infoOption",
          "type": "function"
        },
        "index": {
          "description": "An option that always fails and displays message",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "infoOption",
          "normalized": "String-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)",
          "package": "optparse-applicative",
          "partial": "Option",
          "signature": "String-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:infoOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a long name for an option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "long",
          "package": "optparse-applicative",
          "signature": "String -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#long",
          "type": "function"
        },
        "index": {
          "description": "Specify long name for an option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "long",
          "normalized": "String-\u003eMod a b",
          "package": "optparse-applicative",
          "signature": "String-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "mappend",
          "package": "optparse-applicative",
          "signature": "a -\u003e a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "optparse-applicative",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the metavariable.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "metavar",
          "package": "optparse-applicative",
          "signature": "String -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#metavar",
          "type": "function"
        },
        "index": {
          "description": "Specify the metavariable",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "metavar",
          "normalized": "String-\u003eMod a b",
          "package": "optparse-applicative",
          "signature": "String-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:metavar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "multiSuffix",
          "package": "optparse-applicative",
          "signature": "String -\u003e PrefsMod",
          "source": "src/Options-Applicative-Builder.html#multiSuffix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "multiSuffix",
          "normalized": "String-\u003ePrefsMod",
          "package": "optparse-applicative",
          "partial": "Suffix",
          "signature": "String-\u003ePrefsMod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:multiSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the error to display when no argument is provided to this option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "noArgError",
          "package": "optparse-applicative",
          "signature": "ParseError -\u003e Mod OptionFields a",
          "source": "src/Options-Applicative-Builder.html#noArgError",
          "type": "function"
        },
        "index": {
          "description": "Specify the error to display when no argument is provided to this option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "noArgError",
          "normalized": "ParseError-\u003eMod OptionFields a",
          "package": "optparse-applicative",
          "partial": "Arg Error",
          "signature": "ParseError-\u003eMod OptionFields a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:noArgError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "noBacktrack",
          "package": "optparse-applicative",
          "signature": "PrefsMod",
          "source": "src/Options-Applicative-Builder.html#noBacktrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "noBacktrack",
          "package": "optparse-applicative",
          "partial": "Backtrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:noBacktrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "noIntersperse",
          "package": "optparse-applicative",
          "signature": "PrefsMod",
          "source": "src/Options-Applicative-Builder.html#noIntersperse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "noIntersperse",
          "package": "optparse-applicative",
          "partial": "Intersperse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:noIntersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for an option with a null reader. A non-trivial reader can be\n added using the \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e modifier.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "nullOption",
          "package": "optparse-applicative",
          "signature": "Mod OptionFields a -\u003e Parser a",
          "source": "src/Options-Applicative-Builder.html#nullOption",
          "type": "function"
        },
        "index": {
          "description": "Builder for an option with null reader non-trivial reader can be added using the reader modifier",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "nullOption",
          "normalized": "Mod OptionFields a-\u003eParser a",
          "package": "optparse-applicative",
          "partial": "Option",
          "signature": "Mod OptionFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:nullOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for an option using the \u003ccode\u003e\u003ca\u003eauto\u003c/a\u003e\u003c/code\u003e reader.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "option",
          "package": "optparse-applicative",
          "signature": "Mod OptionFields a -\u003e Parser a",
          "source": "src/Options-Applicative-Builder.html#option",
          "type": "function"
        },
        "index": {
          "description": "Builder for an option using the auto reader",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "option",
          "normalized": "Mod OptionFields a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "Mod OptionFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "prefs",
          "package": "optparse-applicative",
          "signature": "PrefsMod -\u003e ParserPrefs",
          "source": "src/Options-Applicative-Builder.html#prefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "prefs",
          "normalized": "PrefsMod-\u003eParserPrefs",
          "package": "optparse-applicative",
          "signature": "PrefsMod-\u003eParserPrefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:prefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a short program description.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "progDesc",
          "package": "optparse-applicative",
          "signature": "String -\u003e InfoMod a",
          "source": "src/Options-Applicative-Builder.html#progDesc",
          "type": "function"
        },
        "index": {
          "description": "Specify short program description",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "progDesc",
          "normalized": "String-\u003eInfoMod a",
          "package": "optparse-applicative",
          "partial": "Desc",
          "signature": "String-\u003eInfoMod a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:progDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "reader",
          "package": "optparse-applicative",
          "signature": "(String -\u003e ReadM a) -\u003e Mod OptionFields a",
          "source": "src/Options-Applicative-Builder.html#reader",
          "type": "function"
        },
        "index": {
          "description": "Specify the Option reader",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "reader",
          "normalized": "(String-\u003eReadM a)-\u003eMod OptionFields a",
          "package": "optparse-applicative",
          "signature": "(String-\u003eReadM a)-\u003eMod OptionFields a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort option reader by exiting with a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Builder\",\"Options.Applicative.Types\"]",
          "name": "readerAbort",
          "package": "optparse-applicative",
          "signature": "ParseError -\u003e ReadM a",
          "source": "src/Options-Applicative-Types.html#readerAbort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:readerAbort\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:readerAbort\"]"
        },
        "index": {
          "description": "Abort option reader by exiting with ParseError",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "readerAbort",
          "normalized": "ParseError-\u003eReadM a",
          "package": "optparse-applicative",
          "partial": "Abort",
          "signature": "ParseError-\u003eReadM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:readerAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort option reader by exiting with an error message.\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Builder\",\"Options.Applicative.Types\"]",
          "name": "readerError",
          "package": "optparse-applicative",
          "signature": "String -\u003e ReadM a",
          "source": "src/Options-Applicative-Types.html#readerError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:readerError\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:readerError\"]"
        },
        "index": {
          "description": "Abort option reader by exiting with an error message",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "readerError",
          "normalized": "String-\u003eReadM a",
          "package": "optparse-applicative",
          "partial": "Error",
          "signature": "String-\u003eReadM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:readerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a short name for an option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "short",
          "package": "optparse-applicative",
          "signature": "Char -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#short",
          "type": "function"
        },
        "index": {
          "description": "Specify short name for an option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "short",
          "normalized": "Char-\u003eMod a b",
          "package": "optparse-applicative",
          "signature": "Char-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the default value for this option using its \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "showDefault",
          "package": "optparse-applicative",
          "signature": "Mod f a",
          "source": "src/Options-Applicative-Builder.html#showDefault",
          "type": "function"
        },
        "index": {
          "description": "Show the default value for this option using its Show instance",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "showDefault",
          "package": "optparse-applicative",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:showDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a function to show the default value for an option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "showDefaultWith",
          "package": "optparse-applicative",
          "signature": "(a -\u003e String) -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#showDefaultWith",
          "type": "function"
        },
        "index": {
          "description": "Specify function to show the default value for an option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "showDefaultWith",
          "normalized": "(a-\u003eString)-\u003eMod b a",
          "package": "optparse-applicative",
          "partial": "Default With",
          "signature": "(a-\u003eString)-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:showDefaultWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Builder",
          "name": "showHelpOnError",
          "package": "optparse-applicative",
          "signature": "PrefsMod",
          "source": "src/Options-Applicative-Builder.html#showHelpOnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "showHelpOnError",
          "package": "optparse-applicative",
          "partial": "Help On Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:showHelpOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "str",
          "package": "optparse-applicative",
          "signature": "String -\u003e m String",
          "source": "src/Options-Applicative-Builder.html#str",
          "type": "function"
        },
        "index": {
          "description": "String Option reader",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "str",
          "normalized": "String-\u003ea String",
          "package": "optparse-applicative",
          "signature": "String-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for an option taking a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "strOption",
          "package": "optparse-applicative",
          "signature": "Mod OptionFields String -\u003e Parser String",
          "source": "src/Options-Applicative-Builder.html#strOption",
          "type": "function"
        },
        "index": {
          "description": "Builder for an option taking String argument",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "strOption",
          "normalized": "Mod OptionFields String-\u003eParser String",
          "package": "optparse-applicative",
          "partial": "Option",
          "signature": "Mod OptionFields String-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:strOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for a command parser. The \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e modifier can be used to\n specify individual commands.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "subparser",
          "package": "optparse-applicative",
          "signature": "Mod CommandFields a -\u003e Parser a",
          "source": "src/Options-Applicative-Builder.html#subparser",
          "type": "function"
        },
        "index": {
          "description": "Builder for command parser The command modifier can be used to specify individual commands",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "subparser",
          "normalized": "Mod CommandFields a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "Mod CommandFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:subparser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilder for a boolean flag.\n\u003c/p\u003e\u003cpre\u003e switch = flag False True\n\u003c/pre\u003e",
          "module": "Options.Applicative.Builder",
          "name": "switch",
          "package": "optparse-applicative",
          "signature": "Mod FlagFields Bool -\u003e Parser Bool",
          "source": "src/Options-Applicative-Builder.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Builder for boolean flag switch flag False True",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "switch",
          "normalized": "Mod FlagFields Bool-\u003eParser Bool",
          "package": "optparse-applicative",
          "signature": "Mod FlagFields Bool-\u003eParser Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a default value for an option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Builder",
          "name": "value",
          "package": "optparse-applicative",
          "signature": "a -\u003e Mod f a",
          "source": "src/Options-Applicative-Builder.html#value",
          "type": "function"
        },
        "index": {
          "description": "Specify default value for an option",
          "hierarchy": "Options Applicative Builder",
          "module": "Options.Applicative.Builder",
          "name": "value",
          "normalized": "a-\u003eMod b a",
          "package": "optparse-applicative",
          "signature": "a-\u003eMod f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Common",
          "name": "Common",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Common.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "Common",
          "package": "optparse-applicative",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eParser a\u003c/code\u003e is an option parser returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "Parser",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "Parser is an option parser returning value of type",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "Parser",
          "package": "optparse-applicative",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA full description for a runnable \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for a program.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "ParserInfo",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "data"
        },
        "index": {
          "description": "full description for runnable Parser for program",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "ParserInfo",
          "package": "optparse-applicative",
          "partial": "Parser Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#t:ParserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "ParserInfo",
          "package": "optparse-applicative",
          "signature": "ParserInfo",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:ParserInfo\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserInfo\"]"
        },
        "index": {
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "ParserInfo",
          "package": "optparse-applicative",
          "partial": "Parser Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:ParserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value of a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.  This function returns an error if any of\n the options don't have a default value.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "evalParser",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e Maybe a",
          "source": "src/Options-Applicative-Common.html#evalParser",
          "type": "function"
        },
        "index": {
          "description": "The default value of Parser This function returns an error if any of the options don have default value",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "evalParser",
          "normalized": "Parser a-\u003eMaybe a",
          "package": "optparse-applicative",
          "partial": "Parser",
          "signature": "Parser a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:evalParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexit code for a parser failure\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "infoFailureCode",
          "package": "optparse-applicative",
          "signature": "Int",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFailureCode\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoFailureCode\"]"
        },
        "index": {
          "description": "exit code for parser failure",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "infoFailureCode",
          "package": "optparse-applicative",
          "partial": "Failure Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFailureCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efooter of the full parser description\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "infoFooter",
          "package": "optparse-applicative",
          "signature": "String",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFooter\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoFooter\"]"
        },
        "index": {
          "description": "footer of the full parser description",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "infoFooter",
          "package": "optparse-applicative",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether the help text should contain full documentation\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "infoFullDesc",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFullDesc\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoFullDesc\"]"
        },
        "index": {
          "description": "whether the help text should contain full documentation",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "infoFullDesc",
          "package": "optparse-applicative",
          "partial": "Full Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFullDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheader of the full parser description\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "infoHeader",
          "package": "optparse-applicative",
          "signature": "String",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoHeader\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoHeader\"]"
        },
        "index": {
          "description": "header of the full parser description",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "infoHeader",
          "package": "optparse-applicative",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe option parser for the program\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "infoParser",
          "package": "optparse-applicative",
          "signature": "Parser a",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoParser\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoParser\"]"
        },
        "index": {
          "description": "the option parser for the program",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "infoParser",
          "package": "optparse-applicative",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebrief parser description\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Common\",\"Options.Applicative.Types\"]",
          "name": "infoProgDesc",
          "package": "optparse-applicative",
          "signature": "String",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoProgDesc\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoProgDesc\"]"
        },
        "index": {
          "description": "brief parser description",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "infoProgDesc",
          "package": "optparse-applicative",
          "partial": "Prog Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoProgDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a parser composed of a single option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "liftOpt",
          "package": "optparse-applicative",
          "signature": "Option a -\u003e Parser a",
          "source": "src/Options-Applicative-Common.html#liftOpt",
          "type": "function"
        },
        "index": {
          "description": "Create parser composed of single option",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "liftOpt",
          "normalized": "Option a-\u003eParser a",
          "package": "optparse-applicative",
          "partial": "Opt",
          "signature": "Option a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:liftOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a polymorphic function over all the options of a parser, and collect\n the results in a list.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "mapParser",
          "package": "optparse-applicative",
          "signature": "(forall x.  OptHelpInfo -\u003e Option x -\u003e b) -\u003e Parser a -\u003e [b]",
          "source": "src/Options-Applicative-Common.html#mapParser",
          "type": "function"
        },
        "index": {
          "description": "Map polymorphic function over all the options of parser and collect the results in list",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "mapParser",
          "normalized": "(a b OptHelpInfo-\u003eOption c-\u003ed)-\u003eParser e-\u003e[d]",
          "package": "optparse-applicative",
          "partial": "Parser",
          "signature": "(forall x. OptHelpInfo-\u003eOption x-\u003eb)-\u003eParser a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:mapParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Common",
          "name": "optionNames",
          "package": "optparse-applicative",
          "signature": "OptReader a -\u003e [OptName]",
          "source": "src/Options-Applicative-Common.html#optionNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "optionNames",
          "normalized": "OptReader a-\u003e[OptName]",
          "package": "optparse-applicative",
          "partial": "Names",
          "signature": "OptReader a-\u003e[OptName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:optionNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e to a command line, and return a result and leftover\n arguments.  This function returns an error if any parsing error occurs, or\n if any options are missing and don't have a default value.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "runParser",
          "package": "optparse-applicative",
          "signature": "ArgPolicy -\u003e Parser a -\u003e Args -\u003e m (a, Args)",
          "source": "src/Options-Applicative-Common.html#runParser",
          "type": "function"
        },
        "index": {
          "description": "Apply Parser to command line and return result and leftover arguments This function returns an error if any parsing error occurs or if any options are missing and don have default value",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "runParser",
          "normalized": "ArgPolicy-\u003eParser a-\u003eArgs-\u003eb(a,Args)",
          "package": "optparse-applicative",
          "partial": "Parser",
          "signature": "ArgPolicy-\u003eParser a-\u003eArgs-\u003em(a,Args)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Common",
          "name": "runParserFully",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e Args -\u003e m a",
          "source": "src/Options-Applicative-Common.html#runParserFully",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "runParserFully",
          "normalized": "Parser a-\u003eArgs-\u003eb a",
          "package": "optparse-applicative",
          "partial": "Parser Fully",
          "signature": "Parser a-\u003eArgs-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:runParserFully"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Common",
          "name": "showOption",
          "package": "optparse-applicative",
          "signature": "OptName -\u003e String",
          "source": "src/Options-Applicative-Common.html#showOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "showOption",
          "normalized": "OptName-\u003eString",
          "package": "optparse-applicative",
          "partial": "Option",
          "signature": "OptName-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:showOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapParser\u003c/a\u003e\u003c/code\u003e, but collect the results in a tree structure.\n\u003c/p\u003e",
          "module": "Options.Applicative.Common",
          "name": "treeMapParser",
          "package": "optparse-applicative",
          "signature": "(forall x.  OptHelpInfo -\u003e Option x -\u003e b) -\u003e Parser a -\u003e OptTree b",
          "source": "src/Options-Applicative-Common.html#treeMapParser",
          "type": "function"
        },
        "index": {
          "description": "Like mapParser but collect the results in tree structure",
          "hierarchy": "Options Applicative Common",
          "module": "Options.Applicative.Common",
          "name": "treeMapParser",
          "normalized": "(a b OptHelpInfo-\u003eOption c-\u003ed)-\u003eParser e-\u003eOptTree d",
          "package": "optparse-applicative",
          "partial": "Map Parser",
          "signature": "(forall x. OptHelpInfo-\u003eOption x-\u003eb)-\u003eParser a-\u003eOptTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:treeMapParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Extra",
          "name": "Extra",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Extra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "Extra",
          "package": "optparse-applicative",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult after a parse error.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "ParserFailure",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParserFailure",
          "type": "data"
        },
        "index": {
          "description": "Result after parse error",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "ParserFailure",
          "package": "optparse-applicative",
          "partial": "Parser Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#t:ParserFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Options.Applicative.Extra\",\"Options.Applicative.Types\"]",
          "name": "ParserFailure",
          "package": "optparse-applicative",
          "signature": "ParserFailure",
          "source": "src/Options-Applicative-Types.html#ParserFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:ParserFailure\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserFailure\"]"
        },
        "index": {
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "ParserFailure",
          "package": "optparse-applicative",
          "partial": "Parser Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:ParserFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a program description with custom preferences.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "customExecParser",
          "package": "optparse-applicative",
          "signature": "ParserPrefs -\u003e ParserInfo a -\u003e IO a",
          "source": "src/Options-Applicative-Extra.html#customExecParser",
          "type": "function"
        },
        "index": {
          "description": "Run program description with custom preferences",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "customExecParser",
          "normalized": "ParserPrefs-\u003eParserInfo a-\u003eIO a",
          "package": "optparse-applicative",
          "partial": "Exec Parser",
          "signature": "ParserPrefs-\u003eParserInfo a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:customExecParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a program description with custom preferences in pure code.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecParserMaybe\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "customExecParserMaybe",
          "package": "optparse-applicative",
          "signature": "ParserPrefs -\u003e ParserInfo a -\u003e [String] -\u003e Maybe a",
          "source": "src/Options-Applicative-Extra.html#customExecParserMaybe",
          "type": "function"
        },
        "index": {
          "description": "Run program description with custom preferences in pure code See execParserMaybe for details",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "customExecParserMaybe",
          "normalized": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eMaybe a",
          "package": "optparse-applicative",
          "partial": "Exec Parser Maybe",
          "signature": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:customExecParserMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExit code to use for this error\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Extra\",\"Options.Applicative.Types\"]",
          "name": "errExitCode",
          "package": "optparse-applicative",
          "signature": "ExitCode",
          "source": "src/Options-Applicative-Types.html#ParserFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:errExitCode\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:errExitCode\"]"
        },
        "index": {
          "description": "Exit code to use for this error",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "errExitCode",
          "package": "optparse-applicative",
          "partial": "Exit Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:errExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction which takes the program name\n as input and returns an error message\n\u003c/p\u003e",
          "module": "[\"Options.Applicative.Extra\",\"Options.Applicative.Types\"]",
          "name": "errMessage",
          "package": "optparse-applicative",
          "signature": "String -\u003e IO String",
          "source": "src/Options-Applicative-Types.html#ParserFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:errMessage\",\"http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:errMessage\"]"
        },
        "index": {
          "description": "Function which takes the program name as input and returns an error message",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "errMessage",
          "normalized": "String-\u003eIO String",
          "package": "optparse-applicative",
          "partial": "Message",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:errMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a program description.\n\u003c/p\u003e\u003cp\u003eParse command line arguments. Display help text and exit if any parse error\n occurs.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "execParser",
          "package": "optparse-applicative",
          "signature": "ParserInfo a -\u003e IO a",
          "source": "src/Options-Applicative-Extra.html#execParser",
          "type": "function"
        },
        "index": {
          "description": "Run program description Parse command line arguments Display help text and exit if any parse error occurs",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "execParser",
          "normalized": "ParserInfo a-\u003eIO a",
          "package": "optparse-applicative",
          "partial": "Parser",
          "signature": "ParserInfo a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:execParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a program description in pure code.\n\u003c/p\u003e\u003cp\u003eThis function behaves like \u003ccode\u003e\u003ca\u003eexecParser\u003c/a\u003e\u003c/code\u003e, but can be called from pure code.\n Note that, in case of errors, no message is displayed, and this function\n simply returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you need to keep track of error messages, use \u003ccode\u003e\u003ca\u003eexecParserPure\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "execParserMaybe",
          "package": "optparse-applicative",
          "signature": "ParserInfo a -\u003e [String] -\u003e Maybe a",
          "source": "src/Options-Applicative-Extra.html#execParserMaybe",
          "type": "function"
        },
        "index": {
          "description": "Run program description in pure code This function behaves like execParser but can be called from pure code Note that in case of errors no message is displayed and this function simply returns Nothing If you need to keep track of error messages use execParserPure instead",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "execParserMaybe",
          "normalized": "ParserInfo a-\u003e[String]-\u003eMaybe a",
          "package": "optparse-applicative",
          "partial": "Parser Maybe",
          "signature": "ParserInfo a-\u003e[String]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:execParserMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general way to run a program description in pure code.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "execParserPure",
          "package": "optparse-applicative",
          "signature": "ParserPrefs-\u003e ParserInfo a-\u003e [String]-\u003e Either ParserFailure a",
          "type": "function"
        },
        "index": {
          "description": "The most general way to run program description in pure code",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "execParserPure",
          "normalized": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eEither ParserFailure a",
          "package": "optparse-applicative",
          "partial": "Parser Pure",
          "signature": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eEither ParserFailure a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:execParserPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hidden \"helper\" option which always fails.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "helper",
          "package": "optparse-applicative",
          "signature": "Parser (a -\u003e a)",
          "source": "src/Options-Applicative-Extra.html#helper",
          "type": "function"
        },
        "index": {
          "description": "hidden helper option which always fails",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "helper",
          "normalized": "Parser(a-\u003ea)",
          "package": "optparse-applicative",
          "signature": "Parser(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:helper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Extra",
          "name": "hsubparser",
          "package": "optparse-applicative",
          "signature": "Mod CommandFields a -\u003e Parser a",
          "source": "src/Options-Applicative-Extra.html#hsubparser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "hsubparser",
          "normalized": "Mod CommandFields a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "Mod CommandFields a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:hsubparser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate option summary.\n\u003c/p\u003e",
          "module": "Options.Applicative.Extra",
          "name": "usage",
          "package": "optparse-applicative",
          "signature": "ParserPrefs -\u003e Parser a -\u003e String -\u003e String",
          "source": "src/Options-Applicative-Extra.html#usage",
          "type": "function"
        },
        "index": {
          "description": "Generate option summary",
          "hierarchy": "Options Applicative Extra",
          "module": "Options.Applicative.Extra",
          "name": "usage",
          "normalized": "ParserPrefs-\u003eParser a-\u003eString-\u003eString",
          "package": "optparse-applicative",
          "signature": "ParserPrefs-\u003eParser a-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Help",
          "name": "Help",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Help.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Help",
          "module": "Options.Applicative.Help",
          "name": "Help",
          "package": "optparse-applicative",
          "partial": "Help",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a brief help text for a parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Help",
          "name": "briefDesc",
          "package": "optparse-applicative",
          "signature": "ParserPrefs -\u003e Parser a -\u003e String",
          "source": "src/Options-Applicative-Help.html#briefDesc",
          "type": "function"
        },
        "index": {
          "description": "Generate brief help text for parser",
          "hierarchy": "Options Applicative Help",
          "module": "Options.Applicative.Help",
          "name": "briefDesc",
          "normalized": "ParserPrefs-\u003eParser a-\u003eString",
          "package": "optparse-applicative",
          "partial": "Desc",
          "signature": "ParserPrefs-\u003eParser a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:briefDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate descriptions for commands.\n\u003c/p\u003e",
          "module": "Options.Applicative.Help",
          "name": "cmdDesc",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e [String]",
          "source": "src/Options-Applicative-Help.html#cmdDesc",
          "type": "function"
        },
        "index": {
          "description": "Generate descriptions for commands",
          "hierarchy": "Options Applicative Help",
          "module": "Options.Applicative.Help",
          "name": "cmdDesc",
          "normalized": "Parser a-\u003e[String]",
          "package": "optparse-applicative",
          "partial": "Desc",
          "signature": "Parser a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:cmdDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a full help text for a parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Help",
          "name": "fullDesc",
          "package": "optparse-applicative",
          "signature": "ParserPrefs -\u003e Parser a -\u003e [String]",
          "source": "src/Options-Applicative-Help.html#fullDesc",
          "type": "function"
        },
        "index": {
          "description": "Generate full help text for parser",
          "hierarchy": "Options Applicative Help",
          "module": "Options.Applicative.Help",
          "name": "fullDesc",
          "normalized": "ParserPrefs-\u003eParser a-\u003e[String]",
          "package": "optparse-applicative",
          "partial": "Desc",
          "signature": "ParserPrefs-\u003eParser a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:fullDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the help text for a program.\n\u003c/p\u003e",
          "module": "Options.Applicative.Help",
          "name": "parserHelpText",
          "package": "optparse-applicative",
          "signature": "ParserPrefs -\u003e ParserInfo a -\u003e String",
          "source": "src/Options-Applicative-Help.html#parserHelpText",
          "type": "function"
        },
        "index": {
          "description": "Generate the help text for program",
          "hierarchy": "Options Applicative Help",
          "module": "Options.Applicative.Help",
          "name": "parserHelpText",
          "normalized": "ParserPrefs-\u003eParserInfo a-\u003eString",
          "package": "optparse-applicative",
          "partial": "Help Text",
          "signature": "ParserPrefs-\u003eParserInfo a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:parserHelpText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "Types",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Types",
          "package": "optparse-applicative",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "CReader",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#CReader",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "CReader",
          "package": "optparse-applicative",
          "partial": "CReader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:CReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "Completer",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#Completer",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Completer",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:Completer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptHelpInfo",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#OptHelpInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptHelpInfo",
          "package": "optparse-applicative",
          "partial": "Opt Help Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptHelpInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptName",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#OptName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptName",
          "package": "optparse-applicative",
          "partial": "Opt Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification for an individual parser option.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "OptProperties",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#OptProperties",
          "type": "data"
        },
        "index": {
          "description": "Specification for an individual parser option",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptProperties",
          "package": "optparse-applicative",
          "partial": "Opt Properties",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOptReader\u003c/a\u003e\u003c/code\u003e defines whether an option matches an command line argument.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "OptReader",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#OptReader",
          "type": "data"
        },
        "index": {
          "description": "An OptReader defines whether an option matches an command line argument",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptReader",
          "package": "optparse-applicative",
          "partial": "Opt Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptTree",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#OptTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptTree",
          "package": "optparse-applicative",
          "partial": "Opt Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisibility of an option in the help text.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "OptVisibility",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#OptVisibility",
          "type": "data"
        },
        "index": {
          "description": "Visibility of an option in the help text",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptVisibility",
          "package": "optparse-applicative",
          "partial": "Opt Visibility",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single option of a parser.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "Option",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#Option",
          "type": "data"
        },
        "index": {
          "description": "single option of parser",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Option",
          "package": "optparse-applicative",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "ParseError",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParseError",
          "package": "optparse-applicative",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eParser a\u003c/code\u003e is an option parser returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "Parser",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "Parser is an option parser returning value of type",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Parser",
          "package": "optparse-applicative",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult after a parse error.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "ParserFailure",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParserFailure",
          "type": "data"
        },
        "index": {
          "description": "Result after parse error",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParserFailure",
          "package": "optparse-applicative",
          "partial": "Parser Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA full description for a runnable \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for a program.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "ParserInfo",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParserInfo",
          "type": "data"
        },
        "index": {
          "description": "full description for runnable Parser for program",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParserInfo",
          "package": "optparse-applicative",
          "partial": "Parser Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "ParserM",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParserM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParserM",
          "package": "optparse-applicative",
          "partial": "Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal preferences for a top-level \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "ParserPrefs",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "data"
        },
        "index": {
          "description": "Global preferences for top-level Parser",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParserPrefs",
          "package": "optparse-applicative",
          "partial": "Parser Prefs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype over the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad used by option readers.\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "ReadM",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Types.html#ReadM",
          "type": "newtype"
        },
        "index": {
          "description": "newtype over the Either monad used by option readers",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ReadM",
          "package": "optparse-applicative",
          "partial": "Read",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "AltNode",
          "package": "optparse-applicative",
          "signature": "AltNode [OptTree a]",
          "source": "src/Options-Applicative-Types.html#OptTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "AltNode",
          "normalized": "AltNode[OptTree a]",
          "package": "optparse-applicative",
          "partial": "Alt Node",
          "signature": "AltNode[OptTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:AltNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "AltP",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e Parser a -\u003e Parser a",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "AltP",
          "normalized": "Parser a-\u003eParser a-\u003eParser a",
          "package": "optparse-applicative",
          "partial": "Alt",
          "signature": "Parser a-\u003eParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:AltP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eargument reader\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "ArgReader",
          "package": "optparse-applicative",
          "signature": "ArgReader (ArgCReader a)",
          "source": "src/Options-Applicative-Types.html#OptReader",
          "type": "function"
        },
        "index": {
          "description": "argument reader",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ArgReader",
          "package": "optparse-applicative",
          "partial": "Arg Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ArgReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "BindP",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e (a -\u003e Parser b) -\u003e Parser b",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "BindP",
          "normalized": "Parser a-\u003e(a-\u003eParser b)-\u003eParser b",
          "package": "optparse-applicative",
          "partial": "Bind",
          "signature": "Parser a-\u003e(a-\u003eParser b)-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:BindP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "CReader",
          "package": "optparse-applicative",
          "signature": "CReader",
          "source": "src/Options-Applicative-Types.html#CReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "CReader",
          "package": "optparse-applicative",
          "partial": "CReader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:CReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommand reader\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "CmdReader",
          "package": "optparse-applicative",
          "signature": "CmdReader [String] (String -\u003e Maybe (ParserInfo a))",
          "source": "src/Options-Applicative-Types.html#OptReader",
          "type": "function"
        },
        "index": {
          "description": "command reader",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "CmdReader",
          "normalized": "CmdReader[String](String-\u003eMaybe(ParserInfo a))",
          "package": "optparse-applicative",
          "partial": "Cmd Reader",
          "signature": "CmdReader[String](String-\u003eMaybe(ParserInfo a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:CmdReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "Completer",
          "package": "optparse-applicative",
          "signature": "Completer",
          "source": "src/Options-Applicative-Types.html#Completer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Completer",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Completer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag reader\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "FlagReader",
          "package": "optparse-applicative",
          "signature": "FlagReader [OptName] !a",
          "source": "src/Options-Applicative-Types.html#OptReader",
          "type": "function"
        },
        "index": {
          "description": "flag reader",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "FlagReader",
          "normalized": "FlagReader[OptName]a",
          "package": "optparse-applicative",
          "partial": "Flag Reader",
          "signature": "FlagReader[OptName]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:FlagReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly visible in the full description\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "Hidden",
          "package": "optparse-applicative",
          "signature": "Hidden",
          "source": "src/Options-Applicative-Types.html#OptVisibility",
          "type": "function"
        },
        "index": {
          "description": "only visible in the full description",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Hidden",
          "package": "optparse-applicative",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoes not appear in the help text at all\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "Internal",
          "package": "optparse-applicative",
          "signature": "Internal",
          "source": "src/Options-Applicative-Types.html#OptVisibility",
          "type": "function"
        },
        "index": {
          "description": "does not appear in the help text at all",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Internal",
          "package": "optparse-applicative",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "Leaf",
          "package": "optparse-applicative",
          "signature": "Leaf a",
          "source": "src/Options-Applicative-Types.html#OptTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Leaf",
          "package": "optparse-applicative",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "MultNode",
          "package": "optparse-applicative",
          "signature": "MultNode [OptTree a]",
          "source": "src/Options-Applicative-Types.html#OptTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "MultNode",
          "normalized": "MultNode[OptTree a]",
          "package": "optparse-applicative",
          "partial": "Mult Node",
          "signature": "MultNode[OptTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:MultNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "MultP",
          "package": "optparse-applicative",
          "signature": "Parser (a -\u003e b) -\u003e Parser a -\u003e Parser b",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "MultP",
          "normalized": "Parser(a-\u003eb)-\u003eParser a-\u003eParser b",
          "package": "optparse-applicative",
          "partial": "Mult",
          "signature": "Parser(a-\u003eb)-\u003eParser a-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:MultP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "NilP",
          "package": "optparse-applicative",
          "signature": "Maybe a -\u003e Parser a",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "NilP",
          "normalized": "Maybe a-\u003eParser a",
          "package": "optparse-applicative",
          "partial": "Nil",
          "signature": "Maybe a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:NilP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptHelpInfo",
          "package": "optparse-applicative",
          "signature": "OptHelpInfo",
          "source": "src/Options-Applicative-Types.html#OptHelpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptHelpInfo",
          "package": "optparse-applicative",
          "partial": "Opt Help Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptHelpInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptLong",
          "package": "optparse-applicative",
          "signature": "OptLong !String",
          "source": "src/Options-Applicative-Types.html#OptName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptLong",
          "package": "optparse-applicative",
          "partial": "Opt Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptP",
          "package": "optparse-applicative",
          "signature": "Option a -\u003e Parser a",
          "source": "src/Options-Applicative-Types.html#Parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptP",
          "normalized": "Option a-\u003eParser a",
          "package": "optparse-applicative",
          "partial": "Opt",
          "signature": "Option a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptProperties",
          "package": "optparse-applicative",
          "signature": "OptProperties",
          "source": "src/Options-Applicative-Types.html#OptProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptProperties",
          "package": "optparse-applicative",
          "partial": "Opt Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoption reader\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "OptReader",
          "package": "optparse-applicative",
          "signature": "OptReader [OptName] (OptCReader a) ParseError",
          "source": "src/Options-Applicative-Types.html#OptReader",
          "type": "function"
        },
        "index": {
          "description": "option reader",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptReader",
          "normalized": "OptReader[OptName](OptCReader a)ParseError",
          "package": "optparse-applicative",
          "partial": "Opt Reader",
          "signature": "OptReader[OptName](OptCReader a)ParseError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "OptShort",
          "package": "optparse-applicative",
          "signature": "OptShort !Char",
          "source": "src/Options-Applicative-Types.html#OptName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "OptShort",
          "package": "optparse-applicative",
          "partial": "Opt Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "Option",
          "package": "optparse-applicative",
          "signature": "Option",
          "source": "src/Options-Applicative-Types.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Option",
          "package": "optparse-applicative",
          "partial": "Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "ParserM",
          "package": "optparse-applicative",
          "signature": "ParserM",
          "source": "src/Options-Applicative-Types.html#ParserM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParserM",
          "package": "optparse-applicative",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "ParserPrefs",
          "package": "optparse-applicative",
          "signature": "ParserPrefs",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ParserPrefs",
          "package": "optparse-applicative",
          "partial": "Parser Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "ReadM",
          "package": "optparse-applicative",
          "signature": "ReadM",
          "source": "src/Options-Applicative-Types.html#ReadM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "ReadM",
          "package": "optparse-applicative",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evisible both in the full and brief descriptions\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "Visible",
          "package": "optparse-applicative",
          "signature": "Visible",
          "source": "src/Options-Applicative-Types.html#OptVisibility",
          "type": "function"
        },
        "index": {
          "description": "visible both in the full and brief descriptions",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "Visible",
          "package": "optparse-applicative",
          "partial": "Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "crCompleter",
          "package": "optparse-applicative",
          "signature": "Completer",
          "source": "src/Options-Applicative-Types.html#CReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "crCompleter",
          "package": "optparse-applicative",
          "partial": "Completer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:crCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "crReader",
          "package": "optparse-applicative",
          "signature": "String -\u003e m a",
          "source": "src/Options-Applicative-Types.html#CReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "crReader",
          "normalized": "String-\u003ea b",
          "package": "optparse-applicative",
          "partial": "Reader",
          "signature": "String-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:crReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "fromM",
          "package": "optparse-applicative",
          "signature": "ParserM a -\u003e Parser a",
          "source": "src/Options-Applicative-Types.html#fromM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "fromM",
          "normalized": "ParserM a-\u003eParser a",
          "package": "optparse-applicative",
          "signature": "ParserM a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:fromM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "hinfoDefault",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#OptHelpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "hinfoDefault",
          "package": "optparse-applicative",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:hinfoDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "hinfoMulti",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#OptHelpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "hinfoMulti",
          "package": "optparse-applicative",
          "partial": "Multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:hinfoMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "manyM",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e ParserM [a]",
          "source": "src/Options-Applicative-Types.html#manyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "manyM",
          "normalized": "Parser a-\u003eParserM[a]",
          "package": "optparse-applicative",
          "signature": "Parser a-\u003eParserM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:manyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "oneM",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e ParserM a",
          "source": "src/Options-Applicative-Types.html#oneM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "oneM",
          "normalized": "Parser a-\u003eParserM a",
          "package": "optparse-applicative",
          "signature": "Parser a-\u003eParserM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:oneM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "optHelp",
          "package": "optparse-applicative",
          "signature": "Option a -\u003e String",
          "source": "src/Options-Applicative-Types.html#optHelp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "optHelp",
          "normalized": "Option a-\u003eString",
          "package": "optparse-applicative",
          "partial": "Help",
          "signature": "Option a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereader for this option\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "optMain",
          "package": "optparse-applicative",
          "signature": "OptReader a",
          "source": "src/Options-Applicative-Types.html#Option",
          "type": "function"
        },
        "index": {
          "description": "reader for this option",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "optMain",
          "package": "optparse-applicative",
          "partial": "Main",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "optMetaVar",
          "package": "optparse-applicative",
          "signature": "Option a -\u003e String",
          "source": "src/Options-Applicative-Types.html#optMetaVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "optMetaVar",
          "normalized": "Option a-\u003eString",
          "package": "optparse-applicative",
          "partial": "Meta Var",
          "signature": "Option a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optMetaVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproperties of this option\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "optProps",
          "package": "optparse-applicative",
          "signature": "OptProperties",
          "source": "src/Options-Applicative-Types.html#Option",
          "type": "function"
        },
        "index": {
          "description": "properties of this option",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "optProps",
          "package": "optparse-applicative",
          "partial": "Props",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "optShowDefault",
          "package": "optparse-applicative",
          "signature": "Option a -\u003e Maybe String",
          "source": "src/Options-Applicative-Types.html#optShowDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "optShowDefault",
          "normalized": "Option a-\u003eMaybe String",
          "package": "optparse-applicative",
          "partial": "Show Default",
          "signature": "Option a-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optShowDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "optVisibility",
          "package": "optparse-applicative",
          "signature": "Option a -\u003e OptVisibility",
          "source": "src/Options-Applicative-Types.html#optVisibility",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "optVisibility",
          "normalized": "Option a-\u003eOptVisibility",
          "package": "optparse-applicative",
          "partial": "Visibility",
          "signature": "Option a-\u003eOptVisibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebacktrack to parent parser when a\n subcommand fails (default: True)\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "prefBacktrack",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "function"
        },
        "index": {
          "description": "backtrack to parent parser when subcommand fails default True",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "prefBacktrack",
          "package": "optparse-applicative",
          "partial": "Backtrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefBacktrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eautomatically disambiguate abbreviations\n (default: False)\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "prefDisambiguate",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "function"
        },
        "index": {
          "description": "automatically disambiguate abbreviations default False",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "prefDisambiguate",
          "package": "optparse-applicative",
          "partial": "Disambiguate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefDisambiguate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallow regular options and flags to occur\n after arguments (default: True)\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "prefIntersperse",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "function"
        },
        "index": {
          "description": "allow regular options and flags to occur after arguments default True",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "prefIntersperse",
          "package": "optparse-applicative",
          "partial": "Intersperse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefIntersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emetavar suffix for multiple options\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "prefMultiSuffix",
          "package": "optparse-applicative",
          "signature": "String",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "function"
        },
        "index": {
          "description": "metavar suffix for multiple options",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "prefMultiSuffix",
          "package": "optparse-applicative",
          "partial": "Multi Suffix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefMultiSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealways show help text on parse errors\n (default: False)\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "prefShowHelpOnError",
          "package": "optparse-applicative",
          "signature": "Bool",
          "source": "src/Options-Applicative-Types.html#ParserPrefs",
          "type": "function"
        },
        "index": {
          "description": "always show help text on parse errors default False",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "prefShowHelpOnError",
          "package": "optparse-applicative",
          "partial": "Show Help On Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefShowHelpOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehelp text for this option\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "propHelp",
          "package": "optparse-applicative",
          "signature": "String",
          "source": "src/Options-Applicative-Types.html#OptProperties",
          "type": "function"
        },
        "index": {
          "description": "help text for this option",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "propHelp",
          "package": "optparse-applicative",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emetavariable for this option\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "propMetaVar",
          "package": "optparse-applicative",
          "signature": "String",
          "source": "src/Options-Applicative-Types.html#OptProperties",
          "type": "function"
        },
        "index": {
          "description": "metavariable for this option",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "propMetaVar",
          "package": "optparse-applicative",
          "partial": "Meta Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propMetaVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat to show in the help text as the default\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "propShowDefault",
          "package": "optparse-applicative",
          "signature": "Maybe String",
          "source": "src/Options-Applicative-Types.html#OptProperties",
          "type": "function"
        },
        "index": {
          "description": "what to show in the help text as the default",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "propShowDefault",
          "package": "optparse-applicative",
          "partial": "Show Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propShowDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether this flag is shown is the brief description\n\u003c/p\u003e",
          "module": "Options.Applicative.Types",
          "name": "propVisibility",
          "package": "optparse-applicative",
          "signature": "OptVisibility",
          "source": "src/Options-Applicative-Types.html#OptProperties",
          "type": "function"
        },
        "index": {
          "description": "whether this flag is shown is the brief description",
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "propVisibility",
          "package": "optparse-applicative",
          "partial": "Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "runCompleter",
          "package": "optparse-applicative",
          "signature": "String -\u003e IO [String]",
          "source": "src/Options-Applicative-Types.html#Completer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "runCompleter",
          "normalized": "String-\u003eIO[String]",
          "package": "optparse-applicative",
          "partial": "Completer",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:runCompleter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "runParserM",
          "package": "optparse-applicative",
          "signature": "forall x.  (r -\u003e Parser x) -\u003e Parser x",
          "source": "src/Options-Applicative-Types.html#ParserM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "runParserM",
          "normalized": "a b(c-\u003eParser d)-\u003eParser d",
          "package": "optparse-applicative",
          "partial": "Parser",
          "signature": "forall x.(r-\u003eParser x)-\u003eParser x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:runParserM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "runReadM",
          "package": "optparse-applicative",
          "signature": "Either ParseError a",
          "source": "src/Options-Applicative-Types.html#ReadM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "runReadM",
          "package": "optparse-applicative",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:runReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Types",
          "name": "someM",
          "package": "optparse-applicative",
          "signature": "Parser a -\u003e ParserM [a]",
          "source": "src/Options-Applicative-Types.html#someM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Options Applicative Types",
          "module": "Options.Applicative.Types",
          "name": "someM",
          "normalized": "Parser a-\u003eParserM[a]",
          "package": "optparse-applicative",
          "signature": "Parser a-\u003eParserM[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:someM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative.Utils",
          "name": "Utils",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative Utils",
          "module": "Options.Applicative.Utils",
          "name": "Utils",
          "package": "optparse-applicative",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate two strings with a space in the middle.\n\u003c/p\u003e",
          "module": "Options.Applicative.Utils",
          "name": "(\u003c+\u003e)",
          "package": "optparse-applicative",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Options-Applicative-Utils.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Concatenate two strings with space in the middle",
          "hierarchy": "Options Applicative Utils",
          "module": "Options.Applicative.Utils",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "String-\u003eString-\u003eString",
          "package": "optparse-applicative",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad a string to a fixed size with whitespace.\n\u003c/p\u003e",
          "module": "Options.Applicative.Utils",
          "name": "pad",
          "package": "optparse-applicative",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Options-Applicative-Utils.html#pad",
          "type": "function"
        },
        "index": {
          "description": "Pad string to fixed size with whitespace",
          "hierarchy": "Options Applicative Utils",
          "module": "Options.Applicative.Utils",
          "name": "pad",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "optparse-applicative",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay pairs of strings in a table.\n\u003c/p\u003e",
          "module": "Options.Applicative.Utils",
          "name": "tabulate",
          "package": "optparse-applicative",
          "signature": "[(String, String)] -\u003e [String]",
          "source": "src/Options-Applicative-Utils.html#tabulate",
          "type": "function"
        },
        "index": {
          "description": "Display pairs of strings in table",
          "hierarchy": "Options Applicative Utils",
          "module": "Options.Applicative.Utils",
          "name": "tabulate",
          "normalized": "[(String,String)]-\u003e[String]",
          "package": "optparse-applicative",
          "signature": "[(String,String)]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate strings vertically with empty lines in between.\n\u003c/p\u003e",
          "module": "Options.Applicative.Utils",
          "name": "vcat",
          "package": "optparse-applicative",
          "signature": "[String] -\u003e String",
          "source": "src/Options-Applicative-Utils.html#vcat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate strings vertically with empty lines in between",
          "hierarchy": "Options Applicative Utils",
          "module": "Options.Applicative.Utils",
          "name": "vcat",
          "normalized": "[String]-\u003eString",
          "package": "optparse-applicative",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Options.Applicative",
          "name": "Applicative",
          "package": "optparse-applicative",
          "source": "src/Options-Applicative.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Options Applicative",
          "module": "Options.Applicative",
          "name": "Applicative",
          "package": "optparse-applicative",
          "partial": "Applicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative.html#"
      }
    }
  ]
]