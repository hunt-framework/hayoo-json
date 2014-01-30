[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an arrow interface for option parsers, which allows\n to define and combine parsers using the arrow notation and arrow\n combinators.\n\u003c/p\u003e\u003cp\u003eThe arrow syntax is particularly useful to create parsers of nested\n structures, or records where the order of fields is different from the order\n in which the parsers should be applied.\n\u003c/p\u003e\u003cp\u003eFor example, an \u003ccode\u003e\u003ca\u003earguments\u003c/a\u003e\u003c/code\u003e parser often needs\n to be applied last, and that makes it inconvenient to use it for a field\n which is not the last one in a record.\n\u003c/p\u003e\u003cp\u003eUsing the arrow syntax and the functions in this module, one can write, e.g.:\n\u003c/p\u003e\u003cpre\u003e data Options = Options\n   { optArgs :: [String]\n   , optVerbose :: Bool }\n\n opts :: Parser Options\n opts = runA $ proc () -\u003e do\n   verbose \u003c- asA (switch (short 'v')) -\u003c ()\n   args \u003c- asA (arguments str idm) -\u003c ()\n   returnA -\u003c Options args verbose\n\u003c/pre\u003e\u003cp\u003eParser arrows, created out of regular \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e values using the \u003ccode\u003e\u003ca\u003easA\u003c/a\u003e\u003c/code\u003e\n function, are arrows taking \u003ccode\u003e()\u003c/code\u003e as argument and returning the parsed value.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Arrows.html",
        "fct-type": "module",
        "title": "Arrows"
      },
      "index": {
        "description": "This module contains an arrow interface for option parsers which allows to define and combine parsers using the arrow notation and arrow combinators The arrow syntax is particularly useful to create parsers of nested structures or records where the order of fields is different from the order in which the parsers should be applied For example an arguments parser often needs to be applied last and that makes it inconvenient to use it for field which is not the last one in record Using the arrow syntax and the functions in this module one can write e.g data Options Options optArgs String optVerbose Bool opts Parser Options opts runA proc do verbose asA switch short args asA arguments str idm returnA Options args verbose Parser arrows created out of regular Parser values using the asA function are arrows taking as argument and returning the parsed value",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "Arrows",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Arrows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#t:A",
      "description": {
        "fct-descr": "\u003cp\u003eFor any \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e functor \u003ccode\u003ef\u003c/code\u003e, \u003ccode\u003eA f\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e instance\n associated to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eA\u003c/a\u003e\u003c/code\u003e constructor can be used to convert a value of type \u003ccode\u003ef (a -\u003e b)\u003c/code\u003e into\n an arrow.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "newtype",
        "fct-source": "src/Options-Applicative-Arrows.html#A",
        "fct-type": "newtype",
        "title": "A"
      },
      "index": {
        "description": "For any Applicative functor is the Arrow instance associated to The constructor can be used to convert value of type into an arrow",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "A",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#t:ParserA",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of arrows associated to the applicative \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e functor.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "type",
        "fct-source": "src/Options-Applicative-Arrows.html#ParserA",
        "fct-type": "type",
        "title": "ParserA"
      },
      "index": {
        "description": "The type of arrows associated to the applicative Parser functor",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "ParserA",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:A",
      "description": {
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "A",
        "fct-source": "src/Options-Applicative-Arrows.html#A",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "A",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:asA",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value of type \u003ccode\u003ef a\u003c/code\u003e into an arrow taking \u003ccode\u003e()\u003c/code\u003e as argument.\n\u003c/p\u003e\u003cp\u003eApplied to a value of type \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e, it turns it into an arrow that can be\n used inside an arrow command, or passed to arrow combinators.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "f a -\u003e A f () a",
        "fct-source": "src/Options-Applicative-Arrows.html#asA",
        "fct-type": "function",
        "title": "asA"
      },
      "index": {
        "description": "Convert value of type into an arrow taking as argument Applied to value of type Parser it turns it into an arrow that can be used inside an arrow command or passed to arrow combinators",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "asA",
        "normalized": "a b-\u003eA a()b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "f a-\u003eA f()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:runA",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an arrow back to an applicative value.\n\u003c/p\u003e\u003cp\u003eThis function can be used to return a result of type \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e from an arrow\n command.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "A f () a -\u003e f a",
        "fct-source": "src/Options-Applicative-Arrows.html#runA",
        "fct-type": "function",
        "title": "runA"
      },
      "index": {
        "description": "Convert an arrow back to an applicative value This function can be used to return result of type Parser from an arrow command",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "runA",
        "normalized": "A a()b-\u003ea b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "A f()a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Arrows.html#v:unA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Arrows",
        "fct-package": "optparse-applicative",
        "fct-signature": "f (a -\u003e b)",
        "fct-source": "src/Options-Applicative-Arrows.html#A",
        "fct-type": "function",
        "title": "unA"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Arrows",
        "module": "Options.Applicative.Arrows",
        "name": "unA",
        "normalized": "a(b-\u003ec)",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "f(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-BashCompletion.html#",
      "description": {
        "fct-module": "Options.Applicative.BashCompletion",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-BashCompletion.html",
        "fct-type": "module",
        "title": "BashCompletion"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative BashCompletion",
        "module": "Options.Applicative.BashCompletion",
        "name": "BashCompletion",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Bash Completion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-BashCompletion.html#v:bashCompletionParser",
      "description": {
        "fct-module": "Options.Applicative.BashCompletion",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e ParserPrefs -\u003e Parser ParserFailure",
        "fct-source": "src/Options-Applicative-BashCompletion.html#bashCompletionParser",
        "fct-type": "function",
        "title": "bashCompletionParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative BashCompletion",
        "module": "Options.Applicative.BashCompletion",
        "name": "bashCompletionParser",
        "normalized": "Parser a-\u003eParserPrefs-\u003eParser ParserFailure",
        "package": "optparse-applicative",
        "partial": "Completion Parser",
        "signature": "Parser a-\u003eParserPrefs-\u003eParser ParserFailure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#",
      "description": {
        "fct-module": "Options.Applicative.Builder.Completer",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Builder-Completer.html",
        "fct-type": "module",
        "title": "Completer"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Completer",
        "module": "Options.Applicative.Builder.Completer",
        "name": "Completer",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#t:Completer",
      "description": {
        "fct-module": "Options.Applicative.Builder.Completer",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#Completer",
        "fct-type": "data",
        "title": "Completer"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Completer",
        "module": "Options.Applicative.Builder.Completer",
        "name": "Completer",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:bashCompleter",
      "description": {
        "fct-module": "Options.Applicative.Builder.Completer",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e Completer",
        "fct-source": "src/Options-Applicative-Builder-Completer.html#bashCompleter",
        "fct-type": "function",
        "title": "bashCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Completer",
        "module": "Options.Applicative.Builder.Completer",
        "name": "bashCompleter",
        "normalized": "String-\u003eCompleter",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": "String-\u003eCompleter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:listCompleter",
      "description": {
        "fct-module": "Options.Applicative.Builder.Completer",
        "fct-package": "optparse-applicative",
        "fct-signature": "[String] -\u003e Completer",
        "fct-source": "src/Options-Applicative-Builder-Completer.html#listCompleter",
        "fct-type": "function",
        "title": "listCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Completer",
        "module": "Options.Applicative.Builder.Completer",
        "name": "listCompleter",
        "normalized": "[String]-\u003eCompleter",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": "[String]-\u003eCompleter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:listIOCompleter",
      "description": {
        "fct-module": "Options.Applicative.Builder.Completer",
        "fct-package": "optparse-applicative",
        "fct-signature": "IO [String] -\u003e Completer",
        "fct-source": "src/Options-Applicative-Builder-Completer.html#listIOCompleter",
        "fct-type": "function",
        "title": "listIOCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Completer",
        "module": "Options.Applicative.Builder.Completer",
        "name": "listIOCompleter",
        "normalized": "IO[String]-\u003eCompleter",
        "package": "optparse-applicative",
        "partial": "IOCompleter",
        "signature": "IO[String]-\u003eCompleter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Completer.html#v:mkCompleter",
      "description": {
        "fct-module": "Options.Applicative.Builder.Completer",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e IO [String]) -\u003e Completer",
        "fct-source": "src/Options-Applicative-Types.html#mkCompleter",
        "fct-type": "function",
        "title": "mkCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Completer",
        "module": "Options.Applicative.Builder.Completer",
        "name": "mkCompleter",
        "normalized": "(String-\u003eIO[String])-\u003eCompleter",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": "(String-\u003eIO[String])-\u003eCompleter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Builder-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:ArgumentFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
        "fct-type": "data",
        "title": "ArgumentFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "ArgumentFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Argument Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:CommandFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
        "fct-type": "data",
        "title": "CommandFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "CommandFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Command Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:DefaultProp",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#DefaultProp",
        "fct-type": "data",
        "title": "DefaultProp"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "DefaultProp",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Default Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:FlagFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
        "fct-type": "data",
        "title": "FlagFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "FlagFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Flag Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:HasCompleter",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "class",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#HasCompleter",
        "fct-type": "class",
        "title": "HasCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "HasCompleter",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Has Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:HasName",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "class",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#HasName",
        "fct-type": "class",
        "title": "HasName"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "HasName",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Has Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:Mod",
      "description": {
        "fct-descr": "\u003cp\u003eAn option modifier.\n\u003c/p\u003e\u003cp\u003eOption modifiers are values that represent a modification of the properties\n of an option.\n\u003c/p\u003e\u003cp\u003eThe type parameter \u003ccode\u003ea\u003c/code\u003e is the return type of the option, while \u003ccode\u003ef\u003c/code\u003e is a\n record containing its properties (e.g. \u003ccode\u003e\u003ca\u003eOptionFields\u003c/a\u003e\u003c/code\u003e for regular options,\n \u003ccode\u003e\u003ca\u003eFlagFields\u003c/a\u003e\u003c/code\u003e for flags, etc...).\n\u003c/p\u003e\u003cp\u003eAn option modifier consists of 3 elements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A field modifier, of the form \u003ccode\u003ef a -\u003e f a\u003c/code\u003e. These are essentially\n  (compositions of) setters for some of the properties supported by \u003ccode\u003ef\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An optional default value and function to display it.\n\u003c/li\u003e\u003cli\u003e A property modifier, of the form \u003ccode\u003eOptProperties -\u003e OptProperties\u003c/code\u003e. This\n  is just like the field modifier, but for properties applicable to any\n  option.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eModifiers are instances of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, and can be composed as such.\n\u003c/p\u003e\u003cp\u003eYou rarely need to deal with modifiers directly, as most of the times it is\n sufficient to pass them to builders (such as \u003ccode\u003estrOption\u003c/code\u003e or \u003ccode\u003eflag\u003c/code\u003e) to\n create options (see \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#Mod",
        "fct-type": "data",
        "title": "Mod"
      },
      "index": {
        "description": "An option modifier Option modifiers are values that represent modification of the properties of an option The type parameter is the return type of the option while is record containing its properties e.g OptionFields for regular options FlagFields for flags etc An option modifier consists of elements field modifier of the form These are essentially compositions of setters for some of the properties supported by An optional default value and function to display it property modifier of the form OptProperties OptProperties This is just like the field modifier but for properties applicable to any option Modifiers are instances of Monoid and can be composed as such You rarely need to deal with modifiers directly as most of the times it is sufficient to pass them to builders such as strOption or flag to create options see Builder",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "Mod",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#t:OptionFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "data",
        "title": "OptionFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "OptionFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Option Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:ArgumentFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "ArgumentFields",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
        "fct-type": "function",
        "title": "ArgumentFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "ArgumentFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Argument Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:CommandFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "CommandFields",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
        "fct-type": "function",
        "title": "CommandFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "CommandFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Command Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:DefaultProp",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "DefaultProp (Maybe a) (Maybe (a -\u003e String))",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#DefaultProp",
        "fct-type": "function",
        "title": "DefaultProp"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "DefaultProp",
        "normalized": "DefaultProp(Maybe a)(Maybe(a-\u003eString))",
        "package": "optparse-applicative",
        "partial": "Default Prop",
        "signature": "DefaultProp(Maybe a)(Maybe(a-\u003eString))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:FlagFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "FlagFields",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
        "fct-type": "function",
        "title": "FlagFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "FlagFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Flag Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:Mod",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod (f a -\u003e f a) (DefaultProp a) (OptProperties -\u003e OptProperties)",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#Mod",
        "fct-type": "function",
        "title": "Mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "Mod",
        "normalized": "Mod(a b-\u003ea b)(DefaultProp b)(OptProperties-\u003eOptProperties)",
        "package": "optparse-applicative",
        "partial": "Mod",
        "signature": "Mod(f a-\u003ef a)(DefaultProp a)(OptProperties-\u003eOptProperties)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:OptionFields",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptionFields",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "function",
        "title": "OptionFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "OptionFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Option Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:argCompleter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "Completer",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
        "fct-type": "function",
        "title": "argCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "argCompleter",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:baseProps",
      "description": {
        "fct-descr": "\u003cp\u003eBase default properties.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptProperties",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#baseProps",
        "fct-type": "function",
        "title": "baseProps"
      },
      "index": {
        "description": "Base default properties",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "baseProps",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Props",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:cmdCommands",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "[(String, ParserInfo a)]",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
        "fct-type": "function",
        "title": "cmdCommands"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "cmdCommands",
        "normalized": "[(String,ParserInfo a)]",
        "package": "optparse-applicative",
        "partial": "Commands",
        "signature": "[(String,ParserInfo a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:fieldMod",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "(f a -\u003e f a) -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#fieldMod",
        "fct-type": "function",
        "title": "fieldMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "fieldMod",
        "normalized": "(a b-\u003ea b)-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "Mod",
        "signature": "(f a-\u003ef a)-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:flagActive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
        "fct-type": "function",
        "title": "flagActive"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "flagActive",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:flagNames",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "[OptName]",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
        "fct-type": "function",
        "title": "flagNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "flagNames",
        "normalized": "[OptName]",
        "package": "optparse-applicative",
        "partial": "Names",
        "signature": "[OptName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:internal",
      "description": {
        "fct-descr": "\u003cp\u003eHide this option from the help text\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod f a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#internal",
        "fct-type": "function",
        "title": "internal"
      },
      "index": {
        "description": "Hide this option from the help text",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "internal",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkCommand",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod CommandFields a -\u003e ([String], String -\u003e Maybe (ParserInfo a))",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#mkCommand",
        "fct-type": "function",
        "title": "mkCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "mkCommand",
        "normalized": "Mod CommandFields a-\u003e([String],String-\u003eMaybe(ParserInfo a))",
        "package": "optparse-applicative",
        "partial": "Command",
        "signature": "Mod CommandFields a-\u003e([String],String-\u003eMaybe(ParserInfo a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkOption",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "DefaultProp a -\u003e (OptProperties -\u003e OptProperties) -\u003e OptReader a -\u003e Option a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#mkOption",
        "fct-type": "function",
        "title": "mkOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "mkOption",
        "normalized": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eOption a",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eOption a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkParser",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "DefaultProp a -\u003e (OptProperties -\u003e OptProperties) -\u003e OptReader a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#mkParser",
        "fct-type": "function",
        "title": "mkParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "mkParser",
        "normalized": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptReader a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:mkProps",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "DefaultProp a -\u003e (OptProperties -\u003e OptProperties) -\u003e OptProperties",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#mkProps",
        "fct-type": "function",
        "title": "mkProps"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "mkProps",
        "normalized": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptProperties",
        "package": "optparse-applicative",
        "partial": "Props",
        "signature": "DefaultProp a-\u003e(OptProperties-\u003eOptProperties)-\u003eOptProperties"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:modCompleter",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "(Completer -\u003e Completer) -\u003e f a -\u003e f a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#modCompleter",
        "fct-type": "method",
        "title": "modCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "modCompleter",
        "normalized": "(Completer-\u003eCompleter)-\u003ea b-\u003ea b",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": "(Completer-\u003eCompleter)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:name",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptName -\u003e f a -\u003e f a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#name",
        "fct-type": "method",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "name",
        "normalized": "OptName-\u003ea b-\u003ea b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "OptName-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optCompleter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "Completer",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "function",
        "title": "optCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "optCompleter",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optNames",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "[OptName]",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "function",
        "title": "optNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "optNames",
        "normalized": "[OptName]",
        "package": "optparse-applicative",
        "partial": "Names",
        "signature": "[OptName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optNoArgError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParseError",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "function",
        "title": "optNoArgError"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "optNoArgError",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "No Arg Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optReader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e ReadM a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "function",
        "title": "optReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "optReader",
        "normalized": "String-\u003eReadM a",
        "package": "optparse-applicative",
        "partial": "Reader",
        "signature": "String-\u003eReadM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder-Internal.html#v:optionMod",
      "description": {
        "fct-module": "Options.Applicative.Builder.Internal",
        "fct-package": "optparse-applicative",
        "fct-signature": "(OptProperties -\u003e OptProperties) -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#optionMod",
        "fct-type": "function",
        "title": "optionMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder Internal",
        "module": "Options.Applicative.Builder.Internal",
        "name": "optionMod",
        "normalized": "(OptProperties-\u003eOptProperties)-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "Mod",
        "signature": "(OptProperties-\u003eOptProperties)-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:ArgumentFields",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#ArgumentFields",
        "fct-type": "data",
        "title": "ArgumentFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "ArgumentFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Argument Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:CommandFields",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#CommandFields",
        "fct-type": "data",
        "title": "CommandFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "CommandFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Command Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:FlagFields",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#FlagFields",
        "fct-type": "data",
        "title": "FlagFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "FlagFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Flag Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:InfoMod",
      "description": {
        "fct-descr": "\u003cp\u003eModifier for \u003ccode\u003e\u003ca\u003eParserInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder.html#InfoMod",
        "fct-type": "data",
        "title": "InfoMod"
      },
      "index": {
        "description": "Modifier for ParserInfo",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "InfoMod",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Info Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:Mod",
      "description": {
        "fct-descr": "\u003cp\u003eAn option modifier.\n\u003c/p\u003e\u003cp\u003eOption modifiers are values that represent a modification of the properties\n of an option.\n\u003c/p\u003e\u003cp\u003eThe type parameter \u003ccode\u003ea\u003c/code\u003e is the return type of the option, while \u003ccode\u003ef\u003c/code\u003e is a\n record containing its properties (e.g. \u003ccode\u003e\u003ca\u003eOptionFields\u003c/a\u003e\u003c/code\u003e for regular options,\n \u003ccode\u003e\u003ca\u003eFlagFields\u003c/a\u003e\u003c/code\u003e for flags, etc...).\n\u003c/p\u003e\u003cp\u003eAn option modifier consists of 3 elements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A field modifier, of the form \u003ccode\u003ef a -\u003e f a\u003c/code\u003e. These are essentially\n  (compositions of) setters for some of the properties supported by \u003ccode\u003ef\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An optional default value and function to display it.\n\u003c/li\u003e\u003cli\u003e A property modifier, of the form \u003ccode\u003eOptProperties -\u003e OptProperties\u003c/code\u003e. This\n  is just like the field modifier, but for properties applicable to any\n  option.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eModifiers are instances of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, and can be composed as such.\n\u003c/p\u003e\u003cp\u003eYou rarely need to deal with modifiers directly, as most of the times it is\n sufficient to pass them to builders (such as \u003ccode\u003estrOption\u003c/code\u003e or \u003ccode\u003eflag\u003c/code\u003e) to\n create options (see \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#Mod",
        "fct-type": "data",
        "title": "Mod"
      },
      "index": {
        "description": "An option modifier Option modifiers are values that represent modification of the properties of an option The type parameter is the return type of the option while is record containing its properties e.g OptionFields for regular options FlagFields for flags etc An option modifier consists of elements field modifier of the form These are essentially compositions of setters for some of the properties supported by An optional default value and function to display it property modifier of the form OptProperties OptProperties This is just like the field modifier but for properties applicable to any option Modifiers are instances of Monoid and can be composed as such You rarely need to deal with modifiers directly as most of the times it is sufficient to pass them to builders such as strOption or flag to create options see Builder",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "Mod",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:OptionFields",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#OptionFields",
        "fct-type": "data",
        "title": "OptionFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "OptionFields",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Option Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:ParseError",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "ParseError",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:PrefsMod",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Builder.html#PrefsMod",
        "fct-type": "data",
        "title": "PrefsMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "PrefsMod",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Prefs Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#t:ReadM",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype over the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad used by option readers.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ReadM",
        "fct-type": "data",
        "title": "ReadM"
      },
      "index": {
        "description": "newtype over the Either monad used by option readers",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "ReadM",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:-38-",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use (\u003ca/\u003e) instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCompose modifiers.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/Options-Applicative-Builder.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "Deprecated Use instead Compose modifiers",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "(&) &",
        "normalized": "a-\u003ea-\u003ea",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:ErrorMsg",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "ErrorMsg String",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "function",
        "title": "ErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "ErrorMsg",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:InfoMsg",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "InfoMsg String",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "function",
        "title": "InfoMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "InfoMsg",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Info Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:ShowHelpText",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "ShowHelpText",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "function",
        "title": "ShowHelpText"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "ShowHelpText",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Show Help Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:abortOption",
      "description": {
        "fct-descr": "\u003cp\u003eAn option that always fails.\n\u003c/p\u003e\u003cp\u003eWhen this option is encountered, the option parser immediately aborts with\n the given parse error.  If you simply want to output a message, use\n \u003ccode\u003e\u003ca\u003einfoOption\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParseError -\u003e Mod OptionFields (a -\u003e a) -\u003e Parser (a -\u003e a)",
        "fct-source": "src/Options-Applicative-Builder.html#abortOption",
        "fct-type": "function",
        "title": "abortOption"
      },
      "index": {
        "description": "An option that always fails When this option is encountered the option parser immediately aborts with the given parse error If you simply want to output message use infoOption instead",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "abortOption",
        "normalized": "ParseError-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": "ParseError-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:action",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a bash completion action. Common actions include \u003ccode\u003efile\u003c/code\u003e and\n \u003ccode\u003edirectory\u003c/code\u003e. See\n http:\u003cem/\u003ewww.gnu.org\u003cem\u003esoftware\u003c/em\u003ebash\u003cem\u003emanual\u003c/em\u003ehtml_node/Programmable-Completion-Builtins.html#Programmable-Completion-Builtins\n for a complete list.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#action",
        "fct-type": "function",
        "title": "action"
      },
      "index": {
        "description": "Add bash completion action Common actions include file and directory See http www.gnu.org software bash manual html node Programmable-Completion-Builtins.html Programmable-Completion-Builtins for complete list",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "action",
        "normalized": "String-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:argument",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for an argument parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e Maybe a) -\u003e Mod ArgumentFields a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Builder.html#argument",
        "fct-type": "function",
        "title": "argument"
      },
      "index": {
        "description": "Builder for an argument parser",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "argument",
        "normalized": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:arguments",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for an argument list parser. All arguments are collected and\n returned as a list.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e Maybe a) -\u003e Mod ArgumentFields a -\u003e Parser [a]",
        "fct-source": "src/Options-Applicative-Builder.html#arguments",
        "fct-type": "function",
        "title": "arguments"
      },
      "index": {
        "description": "Builder for an argument list parser All arguments are collected and returned as list",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "arguments",
        "normalized": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:arguments1",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earguments\u003c/a\u003e\u003c/code\u003e, but require at least one argument.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e Maybe a) -\u003e Mod ArgumentFields a -\u003e Parser [a]",
        "fct-source": "src/Options-Applicative-Builder.html#arguments1",
        "fct-type": "function",
        "title": "arguments1"
      },
      "index": {
        "description": "Like arguments but require at least one argument",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "arguments1",
        "normalized": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "(String-\u003eMaybe a)-\u003eMod ArgumentFields a-\u003eParser[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:auto",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader based on the \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Options-Applicative-Builder.html#auto",
        "fct-type": "function",
        "title": "auto"
      },
      "index": {
        "description": "Option reader based on the Read type class",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "auto",
        "normalized": "String-\u003ea b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:briefDesc",
      "description": {
        "fct-descr": "\u003cp\u003eOnly show a brief description in the help text of this parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "InfoMod a",
        "fct-source": "src/Options-Applicative-Builder.html#briefDesc",
        "fct-type": "function",
        "title": "briefDesc"
      },
      "index": {
        "description": "Only show brief description in the help text of this parser",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "briefDesc",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:command",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a command to a subparser option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e ParserInfo a -\u003e Mod CommandFields a",
        "fct-source": "src/Options-Applicative-Builder.html#command",
        "fct-type": "function",
        "title": "command"
      },
      "index": {
        "description": "Add command to subparser option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "command",
        "normalized": "String-\u003eParserInfo a-\u003eMod CommandFields a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eParserInfo a-\u003eMod CommandFields a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:completeWith",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of possible completion values.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "[String] -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#completeWith",
        "fct-type": "function",
        "title": "completeWith"
      },
      "index": {
        "description": "Add list of possible completion values",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "completeWith",
        "normalized": "[String]-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "With",
        "signature": "[String]-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:completer",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a completer to an argument.\n\u003c/p\u003e\u003cp\u003eA completer is a function String -\u003e IO String which, given a partial\n argument, returns all possible completions for that argument.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Completer -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#completer",
        "fct-type": "function",
        "title": "completer"
      },
      "index": {
        "description": "Add completer to an argument completer is function String IO String which given partial argument returns all possible completions for that argument",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "completer",
        "normalized": "Completer-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Completer-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:disabled",
      "description": {
        "fct-descr": "\u003cp\u003eNull \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader. All arguments will fail validation.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Options-Applicative-Builder.html#disabled",
        "fct-type": "function",
        "title": "disabled"
      },
      "index": {
        "description": "Null Option reader All arguments will fail validation",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "disabled",
        "normalized": "String-\u003ea b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:disambiguate",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "PrefsMod",
        "fct-source": "src/Options-Applicative-Builder.html#disambiguate",
        "fct-type": "function",
        "title": "disambiguate"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "disambiguate",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:eitherReader",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader as a function in the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e Either String a) -\u003e Mod OptionFields a",
        "fct-source": "src/Options-Applicative-Builder.html#eitherReader",
        "fct-type": "function",
        "title": "eitherReader"
      },
      "index": {
        "description": "Specify the Option reader as function in the Either monad",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "eitherReader",
        "normalized": "(String-\u003eEither String a)-\u003eMod OptionFields a",
        "package": "optparse-applicative",
        "partial": "Reader",
        "signature": "(String-\u003eEither String a)-\u003eMod OptionFields a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:failureCode",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify an exit code if a parse error occurs.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Int -\u003e InfoMod a",
        "fct-source": "src/Options-Applicative-Builder.html#failureCode",
        "fct-type": "function",
        "title": "failureCode"
      },
      "index": {
        "description": "Specify an exit code if parse error occurs",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "failureCode",
        "normalized": "Int-\u003eInfoMod a",
        "package": "optparse-applicative",
        "partial": "Code",
        "signature": "Int-\u003eInfoMod a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:flag",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for a flag parser.\n\u003c/p\u003e\u003cp\u003eA flag that switches from a \"default value\" to an \"active value\" when\n encountered. For a simple boolean value, use \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "a-\u003e a-\u003e Mod FlagFields a-\u003e Parser a",
        "fct-type": "function",
        "title": "flag"
      },
      "index": {
        "description": "Builder for flag parser flag that switches from default value to an active value when encountered For simple boolean value use switch instead",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "flag",
        "normalized": "a-\u003ea-\u003eMod FlagFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "a-\u003ea-\u003eMod FlagFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:flag-39-",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for a flag parser without a default value.\n\u003c/p\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eflag\u003c/a\u003e\u003c/code\u003e, but with no default value. In particular, this flag will\n never parse successfully by itself.\n\u003c/p\u003e\u003cp\u003eIt still makes sense to use it as part of a composite parser. For example\n\u003c/p\u003e\u003cpre\u003e length \u003c$\u003e many (flag' () (short 't'))\n\u003c/pre\u003e\u003cp\u003eis a parser that counts the number of \u003ca\u003e-t\u003c/a\u003e arguments on the command line.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "a-\u003e Mod FlagFields a-\u003e Parser a",
        "fct-type": "function",
        "title": "flag'"
      },
      "index": {
        "description": "Builder for flag parser without default value Same as flag but with no default value In particular this flag will never parse successfully by itself It still makes sense to use it as part of composite parser For example length many flag short is parser that counts the number of arguments on the command line",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "flag'",
        "normalized": "a-\u003eMod FlagFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "a-\u003eMod FlagFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:footer",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a footer for this parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e InfoMod a",
        "fct-source": "src/Options-Applicative-Builder.html#footer",
        "fct-type": "function",
        "title": "footer"
      },
      "index": {
        "description": "Specify footer for this parser",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "footer",
        "normalized": "String-\u003eInfoMod a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eInfoMod a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:fullDesc",
      "description": {
        "fct-descr": "\u003cp\u003eShow a full description in the help text of this parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "InfoMod a",
        "fct-source": "src/Options-Applicative-Builder.html#fullDesc",
        "fct-type": "function",
        "title": "fullDesc"
      },
      "index": {
        "description": "Show full description in the help text of this parser",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "fullDesc",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:header",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a header for this parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e InfoMod a",
        "fct-source": "src/Options-Applicative-Builder.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "Specify header for this parser",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "header",
        "normalized": "String-\u003eInfoMod a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eInfoMod a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:help",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the help text for an option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#help",
        "fct-type": "function",
        "title": "help"
      },
      "index": {
        "description": "Specify the help text for an option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "help",
        "normalized": "String-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:hidden",
      "description": {
        "fct-descr": "\u003cp\u003eHide this option from the brief description.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#hidden",
        "fct-type": "function",
        "title": "hidden"
      },
      "index": {
        "description": "Hide this option from the brief description",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "hidden",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:idm",
      "description": {
        "fct-descr": "\u003cp\u003eTrivial option modifier.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "m",
        "fct-source": "src/Options-Applicative-Builder.html#idm",
        "fct-type": "function",
        "title": "idm"
      },
      "index": {
        "description": "Trivial option modifier",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "idm",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:info",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eParserInfo\u003c/a\u003e\u003c/code\u003e given a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e and a modifier.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e InfoMod a -\u003e ParserInfo a",
        "fct-source": "src/Options-Applicative-Builder.html#info",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "Create ParserInfo given Parser and modifier",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "info",
        "normalized": "Parser a-\u003eInfoMod a-\u003eParserInfo a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Parser a-\u003eInfoMod a-\u003eParserInfo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:infoOption",
      "description": {
        "fct-descr": "\u003cp\u003eAn option that always fails and displays a message.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e Mod OptionFields (a -\u003e a) -\u003e Parser (a -\u003e a)",
        "fct-source": "src/Options-Applicative-Builder.html#infoOption",
        "fct-type": "function",
        "title": "infoOption"
      },
      "index": {
        "description": "An option that always fails and displays message",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "infoOption",
        "normalized": "String-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": "String-\u003eMod OptionFields(a-\u003ea)-\u003eParser(a-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:internal",
      "description": {
        "fct-descr": "\u003cp\u003eHide this option from the help text\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod f a",
        "fct-source": "src/Options-Applicative-Builder-Internal.html#internal",
        "fct-type": "function",
        "title": "internal"
      },
      "index": {
        "description": "Hide this option from the help text",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "internal",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:long",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a long name for an option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#long",
        "fct-type": "function",
        "title": "long"
      },
      "index": {
        "description": "Specify long name for an option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "long",
        "normalized": "String-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:metavar",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the metavariable.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#metavar",
        "fct-type": "function",
        "title": "metavar"
      },
      "index": {
        "description": "Specify the metavariable",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "metavar",
        "normalized": "String-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:multiSuffix",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e PrefsMod",
        "fct-source": "src/Options-Applicative-Builder.html#multiSuffix",
        "fct-type": "function",
        "title": "multiSuffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "multiSuffix",
        "normalized": "String-\u003ePrefsMod",
        "package": "optparse-applicative",
        "partial": "Suffix",
        "signature": "String-\u003ePrefsMod"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:noArgError",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the error to display when no argument is provided to this option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParseError -\u003e Mod OptionFields a",
        "fct-source": "src/Options-Applicative-Builder.html#noArgError",
        "fct-type": "function",
        "title": "noArgError"
      },
      "index": {
        "description": "Specify the error to display when no argument is provided to this option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "noArgError",
        "normalized": "ParseError-\u003eMod OptionFields a",
        "package": "optparse-applicative",
        "partial": "Arg Error",
        "signature": "ParseError-\u003eMod OptionFields a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:noBacktrack",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "PrefsMod",
        "fct-source": "src/Options-Applicative-Builder.html#noBacktrack",
        "fct-type": "function",
        "title": "noBacktrack"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "noBacktrack",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Backtrack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:noIntersperse",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "PrefsMod",
        "fct-source": "src/Options-Applicative-Builder.html#noIntersperse",
        "fct-type": "function",
        "title": "noIntersperse"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "noIntersperse",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Intersperse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:nullOption",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for an option with a null reader. A non-trivial reader can be\n added using the \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e modifier.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod OptionFields a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Builder.html#nullOption",
        "fct-type": "function",
        "title": "nullOption"
      },
      "index": {
        "description": "Builder for an option with null reader non-trivial reader can be added using the reader modifier",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "nullOption",
        "normalized": "Mod OptionFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": "Mod OptionFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:option",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for an option using the \u003ccode\u003e\u003ca\u003eauto\u003c/a\u003e\u003c/code\u003e reader.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod OptionFields a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Builder.html#option",
        "fct-type": "function",
        "title": "option"
      },
      "index": {
        "description": "Builder for an option using the auto reader",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "option",
        "normalized": "Mod OptionFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Mod OptionFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:prefs",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "PrefsMod -\u003e ParserPrefs",
        "fct-source": "src/Options-Applicative-Builder.html#prefs",
        "fct-type": "function",
        "title": "prefs"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "prefs",
        "normalized": "PrefsMod-\u003eParserPrefs",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "PrefsMod-\u003eParserPrefs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:progDesc",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a short program description.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e InfoMod a",
        "fct-source": "src/Options-Applicative-Builder.html#progDesc",
        "fct-type": "function",
        "title": "progDesc"
      },
      "index": {
        "description": "Specify short program description",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "progDesc",
        "normalized": "String-\u003eInfoMod a",
        "package": "optparse-applicative",
        "partial": "Desc",
        "signature": "String-\u003eInfoMod a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e ReadM a) -\u003e Mod OptionFields a",
        "fct-source": "src/Options-Applicative-Builder.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Specify the Option reader",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "reader",
        "normalized": "(String-\u003eReadM a)-\u003eMod OptionFields a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "(String-\u003eReadM a)-\u003eMod OptionFields a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:readerAbort",
      "description": {
        "fct-descr": "\u003cp\u003eAbort option reader by exiting with a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParseError -\u003e ReadM a",
        "fct-source": "src/Options-Applicative-Types.html#readerAbort",
        "fct-type": "function",
        "title": "readerAbort"
      },
      "index": {
        "description": "Abort option reader by exiting with ParseError",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "readerAbort",
        "normalized": "ParseError-\u003eReadM a",
        "package": "optparse-applicative",
        "partial": "Abort",
        "signature": "ParseError-\u003eReadM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:readerError",
      "description": {
        "fct-descr": "\u003cp\u003eAbort option reader by exiting with an error message.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e ReadM a",
        "fct-source": "src/Options-Applicative-Types.html#readerError",
        "fct-type": "function",
        "title": "readerError"
      },
      "index": {
        "description": "Abort option reader by exiting with an error message",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "readerError",
        "normalized": "String-\u003eReadM a",
        "package": "optparse-applicative",
        "partial": "Error",
        "signature": "String-\u003eReadM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:short",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a short name for an option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Char -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#short",
        "fct-type": "function",
        "title": "short"
      },
      "index": {
        "description": "Specify short name for an option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "short",
        "normalized": "Char-\u003eMod a b",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Char-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:showDefault",
      "description": {
        "fct-descr": "\u003cp\u003eShow the default value for this option using its \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#showDefault",
        "fct-type": "function",
        "title": "showDefault"
      },
      "index": {
        "description": "Show the default value for this option using its Show instance",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "showDefault",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:showDefaultWith",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a function to show the default value for an option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "(a -\u003e String) -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#showDefaultWith",
        "fct-type": "function",
        "title": "showDefaultWith"
      },
      "index": {
        "description": "Specify function to show the default value for an option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "showDefaultWith",
        "normalized": "(a-\u003eString)-\u003eMod b a",
        "package": "optparse-applicative",
        "partial": "Default With",
        "signature": "(a-\u003eString)-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:showHelpOnError",
      "description": {
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "PrefsMod",
        "fct-source": "src/Options-Applicative-Builder.html#showHelpOnError",
        "fct-type": "function",
        "title": "showHelpOnError"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "showHelpOnError",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Help On Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:str",
      "description": {
        "fct-descr": "\u003cp\u003eString \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e reader.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e m String",
        "fct-source": "src/Options-Applicative-Builder.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "String Option reader",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "str",
        "normalized": "String-\u003ea String",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:strOption",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for an option taking a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod OptionFields String -\u003e Parser String",
        "fct-source": "src/Options-Applicative-Builder.html#strOption",
        "fct-type": "function",
        "title": "strOption"
      },
      "index": {
        "description": "Builder for an option taking String argument",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "strOption",
        "normalized": "Mod OptionFields String-\u003eParser String",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": "Mod OptionFields String-\u003eParser String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:subparser",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for a command parser. The \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e modifier can be used to\n specify individual commands.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod CommandFields a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Builder.html#subparser",
        "fct-type": "function",
        "title": "subparser"
      },
      "index": {
        "description": "Builder for command parser The command modifier can be used to specify individual commands",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "subparser",
        "normalized": "Mod CommandFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Mod CommandFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eBuilder for a boolean flag.\n\u003c/p\u003e\u003cpre\u003e switch = flag False True\n\u003c/pre\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod FlagFields Bool -\u003e Parser Bool",
        "fct-source": "src/Options-Applicative-Builder.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "Builder for boolean flag switch flag False True",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "switch",
        "normalized": "Mod FlagFields Bool-\u003eParser Bool",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Mod FlagFields Bool-\u003eParser Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Builder.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a default value for an option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Builder",
        "fct-package": "optparse-applicative",
        "fct-signature": "a -\u003e Mod f a",
        "fct-source": "src/Options-Applicative-Builder.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Specify default value for an option",
        "hierarchy": "Options Applicative Builder",
        "module": "Options.Applicative.Builder",
        "name": "value",
        "normalized": "a-\u003eMod b a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "a-\u003eMod f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#",
      "description": {
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "Common",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eParser a\u003c/code\u003e is an option parser returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "Parser is an option parser returning value of type",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "Parser",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#t:ParserInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA full description for a runnable \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for a program.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "data",
        "title": "ParserInfo"
      },
      "index": {
        "description": "full description for runnable Parser for program",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "ParserInfo",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:ParserInfo",
      "description": {
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserInfo",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "ParserInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "ParserInfo",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:evalParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value of a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.  This function returns an error if any of\n the options don't have a default value.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e Maybe a",
        "fct-source": "src/Options-Applicative-Common.html#evalParser",
        "fct-type": "function",
        "title": "evalParser"
      },
      "index": {
        "description": "The default value of Parser This function returns an error if any of the options don have default value",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "evalParser",
        "normalized": "Parser a-\u003eMaybe a",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": "Parser a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFailureCode",
      "description": {
        "fct-descr": "\u003cp\u003eexit code for a parser failure\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "Int",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoFailureCode"
      },
      "index": {
        "description": "exit code for parser failure",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "infoFailureCode",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Failure Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFooter",
      "description": {
        "fct-descr": "\u003cp\u003efooter of the full parser description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoFooter"
      },
      "index": {
        "description": "footer of the full parser description",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "infoFooter",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoFullDesc",
      "description": {
        "fct-descr": "\u003cp\u003ewhether the help text should contain full documentation\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoFullDesc"
      },
      "index": {
        "description": "whether the help text should contain full documentation",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "infoFullDesc",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Full Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoHeader",
      "description": {
        "fct-descr": "\u003cp\u003eheader of the full parser description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoHeader"
      },
      "index": {
        "description": "header of the full parser description",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "infoHeader",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoParser",
      "description": {
        "fct-descr": "\u003cp\u003ethe option parser for the program\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoParser"
      },
      "index": {
        "description": "the option parser for the program",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "infoParser",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:infoProgDesc",
      "description": {
        "fct-descr": "\u003cp\u003ebrief parser description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoProgDesc"
      },
      "index": {
        "description": "brief parser description",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "infoProgDesc",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Prog Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:liftOpt",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a parser composed of a single option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Common.html#liftOpt",
        "fct-type": "function",
        "title": "liftOpt"
      },
      "index": {
        "description": "Create parser composed of single option",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "liftOpt",
        "normalized": "Option a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "Opt",
        "signature": "Option a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:mapParser",
      "description": {
        "fct-descr": "\u003cp\u003eMap a polymorphic function over all the options of a parser, and collect\n the results in a list.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "(forall x.  OptHelpInfo -\u003e Option x -\u003e b) -\u003e Parser a -\u003e [b]",
        "fct-source": "src/Options-Applicative-Common.html#mapParser",
        "fct-type": "function",
        "title": "mapParser"
      },
      "index": {
        "description": "Map polymorphic function over all the options of parser and collect the results in list",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "mapParser",
        "normalized": "(a b OptHelpInfo-\u003eOption c-\u003ed)-\u003eParser e-\u003e[d]",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": "(forall x. OptHelpInfo-\u003eOption x-\u003eb)-\u003eParser a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:optionNames",
      "description": {
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptReader a -\u003e [OptName]",
        "fct-source": "src/Options-Applicative-Common.html#optionNames",
        "fct-type": "function",
        "title": "optionNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "optionNames",
        "normalized": "OptReader a-\u003e[OptName]",
        "package": "optparse-applicative",
        "partial": "Names",
        "signature": "OptReader a-\u003e[OptName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:runParser",
      "description": {
        "fct-descr": "\u003cp\u003eApply a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e to a command line, and return a result and leftover\n arguments.  This function returns an error if any parsing error occurs, or\n if any options are missing and don't have a default value.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "ArgPolicy -\u003e Parser a -\u003e Args -\u003e m (a, Args)",
        "fct-source": "src/Options-Applicative-Common.html#runParser",
        "fct-type": "function",
        "title": "runParser"
      },
      "index": {
        "description": "Apply Parser to command line and return result and leftover arguments This function returns an error if any parsing error occurs or if any options are missing and don have default value",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "runParser",
        "normalized": "ArgPolicy-\u003eParser a-\u003eArgs-\u003eb(a,Args)",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": "ArgPolicy-\u003eParser a-\u003eArgs-\u003em(a,Args)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:runParserFully",
      "description": {
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e Args -\u003e m a",
        "fct-source": "src/Options-Applicative-Common.html#runParserFully",
        "fct-type": "function",
        "title": "runParserFully"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "runParserFully",
        "normalized": "Parser a-\u003eArgs-\u003eb a",
        "package": "optparse-applicative",
        "partial": "Parser Fully",
        "signature": "Parser a-\u003eArgs-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:showOption",
      "description": {
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptName -\u003e String",
        "fct-source": "src/Options-Applicative-Common.html#showOption",
        "fct-type": "function",
        "title": "showOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "showOption",
        "normalized": "OptName-\u003eString",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": "OptName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Common.html#v:treeMapParser",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapParser\u003c/a\u003e\u003c/code\u003e, but collect the results in a tree structure.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Common",
        "fct-package": "optparse-applicative",
        "fct-signature": "(forall x.  OptHelpInfo -\u003e Option x -\u003e b) -\u003e Parser a -\u003e OptTree b",
        "fct-source": "src/Options-Applicative-Common.html#treeMapParser",
        "fct-type": "function",
        "title": "treeMapParser"
      },
      "index": {
        "description": "Like mapParser but collect the results in tree structure",
        "hierarchy": "Options Applicative Common",
        "module": "Options.Applicative.Common",
        "name": "treeMapParser",
        "normalized": "(a b OptHelpInfo-\u003eOption c-\u003ed)-\u003eParser e-\u003eOptTree d",
        "package": "optparse-applicative",
        "partial": "Map Parser",
        "signature": "(forall x. OptHelpInfo-\u003eOption x-\u003eb)-\u003eParser a-\u003eOptTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#",
      "description": {
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#t:ParserFailure",
      "description": {
        "fct-descr": "\u003cp\u003eResult after a parse error.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "data",
        "title": "ParserFailure"
      },
      "index": {
        "description": "Result after parse error",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "ParserFailure",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:ParserFailure",
      "description": {
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserFailure",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "function",
        "title": "ParserFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "ParserFailure",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:customExecParser",
      "description": {
        "fct-descr": "\u003cp\u003eRun a program description with custom preferences.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs -\u003e ParserInfo a -\u003e IO a",
        "fct-source": "src/Options-Applicative-Extra.html#customExecParser",
        "fct-type": "function",
        "title": "customExecParser"
      },
      "index": {
        "description": "Run program description with custom preferences",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "customExecParser",
        "normalized": "ParserPrefs-\u003eParserInfo a-\u003eIO a",
        "package": "optparse-applicative",
        "partial": "Exec Parser",
        "signature": "ParserPrefs-\u003eParserInfo a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:customExecParserMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a program description with custom preferences in pure code.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eexecParserMaybe\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs -\u003e ParserInfo a -\u003e [String] -\u003e Maybe a",
        "fct-source": "src/Options-Applicative-Extra.html#customExecParserMaybe",
        "fct-type": "function",
        "title": "customExecParserMaybe"
      },
      "index": {
        "description": "Run program description with custom preferences in pure code See execParserMaybe for details",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "customExecParserMaybe",
        "normalized": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eMaybe a",
        "package": "optparse-applicative",
        "partial": "Exec Parser Maybe",
        "signature": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:errExitCode",
      "description": {
        "fct-descr": "\u003cp\u003eExit code to use for this error\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ExitCode",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "function",
        "title": "errExitCode"
      },
      "index": {
        "description": "Exit code to use for this error",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "errExitCode",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Exit Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:errMessage",
      "description": {
        "fct-descr": "\u003cp\u003eFunction which takes the program name\n as input and returns an error message\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "function",
        "title": "errMessage"
      },
      "index": {
        "description": "Function which takes the program name as input and returns an error message",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "errMessage",
        "normalized": "String-\u003eIO String",
        "package": "optparse-applicative",
        "partial": "Message",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:execParser",
      "description": {
        "fct-descr": "\u003cp\u003eRun a program description.\n\u003c/p\u003e\u003cp\u003eParse command line arguments. Display help text and exit if any parse error\n occurs.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserInfo a -\u003e IO a",
        "fct-source": "src/Options-Applicative-Extra.html#execParser",
        "fct-type": "function",
        "title": "execParser"
      },
      "index": {
        "description": "Run program description Parse command line arguments Display help text and exit if any parse error occurs",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "execParser",
        "normalized": "ParserInfo a-\u003eIO a",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": "ParserInfo a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:execParserMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a program description in pure code.\n\u003c/p\u003e\u003cp\u003eThis function behaves like \u003ccode\u003e\u003ca\u003eexecParser\u003c/a\u003e\u003c/code\u003e, but can be called from pure code.\n Note that, in case of errors, no message is displayed, and this function\n simply returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you need to keep track of error messages, use \u003ccode\u003e\u003ca\u003eexecParserPure\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserInfo a -\u003e [String] -\u003e Maybe a",
        "fct-source": "src/Options-Applicative-Extra.html#execParserMaybe",
        "fct-type": "function",
        "title": "execParserMaybe"
      },
      "index": {
        "description": "Run program description in pure code This function behaves like execParser but can be called from pure code Note that in case of errors no message is displayed and this function simply returns Nothing If you need to keep track of error messages use execParserPure instead",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "execParserMaybe",
        "normalized": "ParserInfo a-\u003e[String]-\u003eMaybe a",
        "package": "optparse-applicative",
        "partial": "Parser Maybe",
        "signature": "ParserInfo a-\u003e[String]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:execParserPure",
      "description": {
        "fct-descr": "\u003cp\u003eThe most general way to run a program description in pure code.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs-\u003e ParserInfo a-\u003e [String]-\u003e Either ParserFailure a",
        "fct-type": "function",
        "title": "execParserPure"
      },
      "index": {
        "description": "The most general way to run program description in pure code",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "execParserPure",
        "normalized": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eEither ParserFailure a",
        "package": "optparse-applicative",
        "partial": "Parser Pure",
        "signature": "ParserPrefs-\u003eParserInfo a-\u003e[String]-\u003eEither ParserFailure a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:helper",
      "description": {
        "fct-descr": "\u003cp\u003eA hidden \"helper\" option which always fails.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser (a -\u003e a)",
        "fct-source": "src/Options-Applicative-Extra.html#helper",
        "fct-type": "function",
        "title": "helper"
      },
      "index": {
        "description": "hidden helper option which always fails",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "helper",
        "normalized": "Parser(a-\u003ea)",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Parser(a-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:hsubparser",
      "description": {
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "Mod CommandFields a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Extra.html#hsubparser",
        "fct-type": "function",
        "title": "hsubparser"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "hsubparser",
        "normalized": "Mod CommandFields a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Mod CommandFields a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Extra.html#v:usage",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate option summary.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Extra",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs -\u003e Parser a -\u003e String -\u003e String",
        "fct-source": "src/Options-Applicative-Extra.html#usage",
        "fct-type": "function",
        "title": "usage"
      },
      "index": {
        "description": "Generate option summary",
        "hierarchy": "Options Applicative Extra",
        "module": "Options.Applicative.Extra",
        "name": "usage",
        "normalized": "ParserPrefs-\u003eParser a-\u003eString-\u003eString",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "ParserPrefs-\u003eParser a-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#",
      "description": {
        "fct-module": "Options.Applicative.Help",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Help.html",
        "fct-type": "module",
        "title": "Help"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Help",
        "module": "Options.Applicative.Help",
        "name": "Help",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:briefDesc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a brief help text for a parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Help",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs -\u003e Parser a -\u003e String",
        "fct-source": "src/Options-Applicative-Help.html#briefDesc",
        "fct-type": "function",
        "title": "briefDesc"
      },
      "index": {
        "description": "Generate brief help text for parser",
        "hierarchy": "Options Applicative Help",
        "module": "Options.Applicative.Help",
        "name": "briefDesc",
        "normalized": "ParserPrefs-\u003eParser a-\u003eString",
        "package": "optparse-applicative",
        "partial": "Desc",
        "signature": "ParserPrefs-\u003eParser a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:cmdDesc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate descriptions for commands.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Help",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e [String]",
        "fct-source": "src/Options-Applicative-Help.html#cmdDesc",
        "fct-type": "function",
        "title": "cmdDesc"
      },
      "index": {
        "description": "Generate descriptions for commands",
        "hierarchy": "Options Applicative Help",
        "module": "Options.Applicative.Help",
        "name": "cmdDesc",
        "normalized": "Parser a-\u003e[String]",
        "package": "optparse-applicative",
        "partial": "Desc",
        "signature": "Parser a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:fullDesc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a full help text for a parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Help",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs -\u003e Parser a -\u003e [String]",
        "fct-source": "src/Options-Applicative-Help.html#fullDesc",
        "fct-type": "function",
        "title": "fullDesc"
      },
      "index": {
        "description": "Generate full help text for parser",
        "hierarchy": "Options Applicative Help",
        "module": "Options.Applicative.Help",
        "name": "fullDesc",
        "normalized": "ParserPrefs-\u003eParser a-\u003e[String]",
        "package": "optparse-applicative",
        "partial": "Desc",
        "signature": "ParserPrefs-\u003eParser a-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Help.html#v:parserHelpText",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the help text for a program.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Help",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs -\u003e ParserInfo a -\u003e String",
        "fct-source": "src/Options-Applicative-Help.html#parserHelpText",
        "fct-type": "function",
        "title": "parserHelpText"
      },
      "index": {
        "description": "Generate the help text for program",
        "hierarchy": "Options Applicative Help",
        "module": "Options.Applicative.Help",
        "name": "parserHelpText",
        "normalized": "ParserPrefs-\u003eParserInfo a-\u003eString",
        "package": "optparse-applicative",
        "partial": "Help Text",
        "signature": "ParserPrefs-\u003eParserInfo a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Types",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:CReader",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#CReader",
        "fct-type": "data",
        "title": "CReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "CReader",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "CReader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:Completer",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "newtype",
        "fct-source": "src/Options-Applicative-Types.html#Completer",
        "fct-type": "newtype",
        "title": "Completer"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Completer",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptHelpInfo",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#OptHelpInfo",
        "fct-type": "data",
        "title": "OptHelpInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptHelpInfo",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Help Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptName",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#OptName",
        "fct-type": "data",
        "title": "OptName"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptName",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptProperties",
      "description": {
        "fct-descr": "\u003cp\u003eSpecification for an individual parser option.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#OptProperties",
        "fct-type": "data",
        "title": "OptProperties"
      },
      "index": {
        "description": "Specification for an individual parser option",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptProperties",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptReader",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOptReader\u003c/a\u003e\u003c/code\u003e defines whether an option matches an command line argument.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#OptReader",
        "fct-type": "data",
        "title": "OptReader"
      },
      "index": {
        "description": "An OptReader defines whether an option matches an command line argument",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptReader",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptTree",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#OptTree",
        "fct-type": "data",
        "title": "OptTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptTree",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:OptVisibility",
      "description": {
        "fct-descr": "\u003cp\u003eVisibility of an option in the help text.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#OptVisibility",
        "fct-type": "data",
        "title": "OptVisibility"
      },
      "index": {
        "description": "Visibility of an option in the help text",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptVisibility",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:Option",
      "description": {
        "fct-descr": "\u003cp\u003eA single option of a parser.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#Option",
        "fct-type": "data",
        "title": "Option"
      },
      "index": {
        "description": "single option of parser",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Option",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParseError",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParseError",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eParser a\u003c/code\u003e is an option parser returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "Parser is an option parser returning value of type",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Parser",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserFailure",
      "description": {
        "fct-descr": "\u003cp\u003eResult after a parse error.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "data",
        "title": "ParserFailure"
      },
      "index": {
        "description": "Result after parse error",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserFailure",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA full description for a runnable \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for a program.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "data",
        "title": "ParserInfo"
      },
      "index": {
        "description": "full description for runnable Parser for program",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserInfo",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "newtype",
        "fct-source": "src/Options-Applicative-Types.html#ParserM",
        "fct-type": "newtype",
        "title": "ParserM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserM",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ParserPrefs",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal preferences for a top-level \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "data",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "data",
        "title": "ParserPrefs"
      },
      "index": {
        "description": "Global preferences for top-level Parser",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserPrefs",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Prefs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#t:ReadM",
      "description": {
        "fct-descr": "\u003cp\u003eA newtype over the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e monad used by option readers.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "newtype",
        "fct-source": "src/Options-Applicative-Types.html#ReadM",
        "fct-type": "newtype",
        "title": "ReadM"
      },
      "index": {
        "description": "newtype over the Either monad used by option readers",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ReadM",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:AltNode",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "AltNode [OptTree a]",
        "fct-source": "src/Options-Applicative-Types.html#OptTree",
        "fct-type": "function",
        "title": "AltNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "AltNode",
        "normalized": "AltNode[OptTree a]",
        "package": "optparse-applicative",
        "partial": "Alt Node",
        "signature": "AltNode[OptTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:AltP",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e Parser a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "function",
        "title": "AltP"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "AltP",
        "normalized": "Parser a-\u003eParser a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "Alt",
        "signature": "Parser a-\u003eParser a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ArgReader",
      "description": {
        "fct-descr": "\u003cp\u003eargument reader\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ArgReader (ArgCReader a)",
        "fct-source": "src/Options-Applicative-Types.html#OptReader",
        "fct-type": "function",
        "title": "ArgReader"
      },
      "index": {
        "description": "argument reader",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ArgReader",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Arg Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:BindP",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e (a -\u003e Parser b) -\u003e Parser b",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "function",
        "title": "BindP"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "BindP",
        "normalized": "Parser a-\u003e(a-\u003eParser b)-\u003eParser b",
        "package": "optparse-applicative",
        "partial": "Bind",
        "signature": "Parser a-\u003e(a-\u003eParser b)-\u003eParser b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:CReader",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "CReader",
        "fct-source": "src/Options-Applicative-Types.html#CReader",
        "fct-type": "function",
        "title": "CReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "CReader",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "CReader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:CmdReader",
      "description": {
        "fct-descr": "\u003cp\u003ecommand reader\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "CmdReader [String] (String -\u003e Maybe (ParserInfo a))",
        "fct-source": "src/Options-Applicative-Types.html#OptReader",
        "fct-type": "function",
        "title": "CmdReader"
      },
      "index": {
        "description": "command reader",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "CmdReader",
        "normalized": "CmdReader[String](String-\u003eMaybe(ParserInfo a))",
        "package": "optparse-applicative",
        "partial": "Cmd Reader",
        "signature": "CmdReader[String](String-\u003eMaybe(ParserInfo a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Completer",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Completer",
        "fct-source": "src/Options-Applicative-Types.html#Completer",
        "fct-type": "function",
        "title": "Completer"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Completer",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ErrorMsg",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ErrorMsg String",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "function",
        "title": "ErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ErrorMsg",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:FlagReader",
      "description": {
        "fct-descr": "\u003cp\u003eflag reader\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "FlagReader [OptName] !a",
        "fct-source": "src/Options-Applicative-Types.html#OptReader",
        "fct-type": "function",
        "title": "FlagReader"
      },
      "index": {
        "description": "flag reader",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "FlagReader",
        "normalized": "FlagReader[OptName]a",
        "package": "optparse-applicative",
        "partial": "Flag Reader",
        "signature": "FlagReader[OptName]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Hidden",
      "description": {
        "fct-descr": "\u003cp\u003eonly visible in the full description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Hidden",
        "fct-source": "src/Options-Applicative-Types.html#OptVisibility",
        "fct-type": "function",
        "title": "Hidden"
      },
      "index": {
        "description": "only visible in the full description",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Hidden",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Hidden",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:InfoMsg",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "InfoMsg String",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "function",
        "title": "InfoMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "InfoMsg",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Info Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Internal",
      "description": {
        "fct-descr": "\u003cp\u003edoes not appear in the help text at all\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Internal",
        "fct-source": "src/Options-Applicative-Types.html#OptVisibility",
        "fct-type": "function",
        "title": "Internal"
      },
      "index": {
        "description": "does not appear in the help text at all",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Internal",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Leaf",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Leaf a",
        "fct-source": "src/Options-Applicative-Types.html#OptTree",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Leaf",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:MultNode",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "MultNode [OptTree a]",
        "fct-source": "src/Options-Applicative-Types.html#OptTree",
        "fct-type": "function",
        "title": "MultNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "MultNode",
        "normalized": "MultNode[OptTree a]",
        "package": "optparse-applicative",
        "partial": "Mult Node",
        "signature": "MultNode[OptTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:MultP",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser (a -\u003e b) -\u003e Parser a -\u003e Parser b",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "function",
        "title": "MultP"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "MultP",
        "normalized": "Parser(a-\u003eb)-\u003eParser a-\u003eParser b",
        "package": "optparse-applicative",
        "partial": "Mult",
        "signature": "Parser(a-\u003eb)-\u003eParser a-\u003eParser b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:NilP",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Maybe a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "function",
        "title": "NilP"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "NilP",
        "normalized": "Maybe a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "Nil",
        "signature": "Maybe a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptHelpInfo",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptHelpInfo",
        "fct-source": "src/Options-Applicative-Types.html#OptHelpInfo",
        "fct-type": "function",
        "title": "OptHelpInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptHelpInfo",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Help Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptLong",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptLong !String",
        "fct-source": "src/Options-Applicative-Types.html#OptName",
        "fct-type": "function",
        "title": "OptLong"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptLong",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Long",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptP",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Types.html#Parser",
        "fct-type": "function",
        "title": "OptP"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptP",
        "normalized": "Option a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "Opt",
        "signature": "Option a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptProperties",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptProperties",
        "fct-source": "src/Options-Applicative-Types.html#OptProperties",
        "fct-type": "function",
        "title": "OptProperties"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptProperties",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptReader",
      "description": {
        "fct-descr": "\u003cp\u003eoption reader\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptReader [OptName] (OptCReader a) ParseError",
        "fct-source": "src/Options-Applicative-Types.html#OptReader",
        "fct-type": "function",
        "title": "OptReader"
      },
      "index": {
        "description": "option reader",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptReader",
        "normalized": "OptReader[OptName](OptCReader a)ParseError",
        "package": "optparse-applicative",
        "partial": "Opt Reader",
        "signature": "OptReader[OptName](OptCReader a)ParseError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:OptShort",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptShort !Char",
        "fct-source": "src/Options-Applicative-Types.html#OptName",
        "fct-type": "function",
        "title": "OptShort"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "OptShort",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Opt Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Option",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option",
        "fct-source": "src/Options-Applicative-Types.html#Option",
        "fct-type": "function",
        "title": "Option"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Option",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserFailure",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserFailure",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "function",
        "title": "ParserFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserFailure",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserInfo",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserInfo",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "ParserInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserInfo",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserM",
        "fct-source": "src/Options-Applicative-Types.html#ParserM",
        "fct-type": "function",
        "title": "ParserM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserM",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ParserPrefs",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserPrefs",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "function",
        "title": "ParserPrefs"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ParserPrefs",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser Prefs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ReadM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ReadM",
        "fct-source": "src/Options-Applicative-Types.html#ReadM",
        "fct-type": "function",
        "title": "ReadM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ReadM",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:ShowHelpText",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ShowHelpText",
        "fct-source": "src/Options-Applicative-Types.html#ParseError",
        "fct-type": "function",
        "title": "ShowHelpText"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "ShowHelpText",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Show Help Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:Visible",
      "description": {
        "fct-descr": "\u003cp\u003evisible both in the full and brief descriptions\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Visible",
        "fct-source": "src/Options-Applicative-Types.html#OptVisibility",
        "fct-type": "function",
        "title": "Visible"
      },
      "index": {
        "description": "visible both in the full and brief descriptions",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "Visible",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Visible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:crCompleter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Completer",
        "fct-source": "src/Options-Applicative-Types.html#CReader",
        "fct-type": "function",
        "title": "crCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "crCompleter",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:crReader",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e m a",
        "fct-source": "src/Options-Applicative-Types.html#CReader",
        "fct-type": "function",
        "title": "crReader"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "crReader",
        "normalized": "String-\u003ea b",
        "package": "optparse-applicative",
        "partial": "Reader",
        "signature": "String-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:errExitCode",
      "description": {
        "fct-descr": "\u003cp\u003eExit code to use for this error\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ExitCode",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "function",
        "title": "errExitCode"
      },
      "index": {
        "description": "Exit code to use for this error",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "errExitCode",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Exit Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:errMessage",
      "description": {
        "fct-descr": "\u003cp\u003eFunction which takes the program name\n as input and returns an error message\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/Options-Applicative-Types.html#ParserFailure",
        "fct-type": "function",
        "title": "errMessage"
      },
      "index": {
        "description": "Function which takes the program name as input and returns an error message",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "errMessage",
        "normalized": "String-\u003eIO String",
        "package": "optparse-applicative",
        "partial": "Message",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:fromM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParserM a -\u003e Parser a",
        "fct-source": "src/Options-Applicative-Types.html#fromM",
        "fct-type": "function",
        "title": "fromM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "fromM",
        "normalized": "ParserM a-\u003eParser a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "ParserM a-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:hinfoDefault",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#OptHelpInfo",
        "fct-type": "function",
        "title": "hinfoDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "hinfoDefault",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:hinfoMulti",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#OptHelpInfo",
        "fct-type": "function",
        "title": "hinfoMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "hinfoMulti",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Multi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoFailureCode",
      "description": {
        "fct-descr": "\u003cp\u003eexit code for a parser failure\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Int",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoFailureCode"
      },
      "index": {
        "description": "exit code for parser failure",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "infoFailureCode",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Failure Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoFooter",
      "description": {
        "fct-descr": "\u003cp\u003efooter of the full parser description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoFooter"
      },
      "index": {
        "description": "footer of the full parser description",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "infoFooter",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Footer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoFullDesc",
      "description": {
        "fct-descr": "\u003cp\u003ewhether the help text should contain full documentation\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoFullDesc"
      },
      "index": {
        "description": "whether the help text should contain full documentation",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "infoFullDesc",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Full Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoHeader",
      "description": {
        "fct-descr": "\u003cp\u003eheader of the full parser description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoHeader"
      },
      "index": {
        "description": "header of the full parser description",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "infoHeader",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoParser",
      "description": {
        "fct-descr": "\u003cp\u003ethe option parser for the program\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoParser"
      },
      "index": {
        "description": "the option parser for the program",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "infoParser",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:infoProgDesc",
      "description": {
        "fct-descr": "\u003cp\u003ebrief parser description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserInfo",
        "fct-type": "function",
        "title": "infoProgDesc"
      },
      "index": {
        "description": "brief parser description",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "infoProgDesc",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Prog Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:manyM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e ParserM [a]",
        "fct-source": "src/Options-Applicative-Types.html#manyM",
        "fct-type": "function",
        "title": "manyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "manyM",
        "normalized": "Parser a-\u003eParserM[a]",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Parser a-\u003eParserM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:mkCompleter",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "(String -\u003e IO [String]) -\u003e Completer",
        "fct-source": "src/Options-Applicative-Types.html#mkCompleter",
        "fct-type": "function",
        "title": "mkCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "mkCompleter",
        "normalized": "(String-\u003eIO[String])-\u003eCompleter",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": "(String-\u003eIO[String])-\u003eCompleter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:oneM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e ParserM a",
        "fct-source": "src/Options-Applicative-Types.html#oneM",
        "fct-type": "function",
        "title": "oneM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "oneM",
        "normalized": "Parser a-\u003eParserM a",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Parser a-\u003eParserM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optHelp",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option a -\u003e String",
        "fct-source": "src/Options-Applicative-Types.html#optHelp",
        "fct-type": "function",
        "title": "optHelp"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "optHelp",
        "normalized": "Option a-\u003eString",
        "package": "optparse-applicative",
        "partial": "Help",
        "signature": "Option a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optMain",
      "description": {
        "fct-descr": "\u003cp\u003ereader for this option\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptReader a",
        "fct-source": "src/Options-Applicative-Types.html#Option",
        "fct-type": "function",
        "title": "optMain"
      },
      "index": {
        "description": "reader for this option",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "optMain",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optMetaVar",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option a -\u003e String",
        "fct-source": "src/Options-Applicative-Types.html#optMetaVar",
        "fct-type": "function",
        "title": "optMetaVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "optMetaVar",
        "normalized": "Option a-\u003eString",
        "package": "optparse-applicative",
        "partial": "Meta Var",
        "signature": "Option a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optProps",
      "description": {
        "fct-descr": "\u003cp\u003eproperties of this option\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptProperties",
        "fct-source": "src/Options-Applicative-Types.html#Option",
        "fct-type": "function",
        "title": "optProps"
      },
      "index": {
        "description": "properties of this option",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "optProps",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Props",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optShowDefault",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option a -\u003e Maybe String",
        "fct-source": "src/Options-Applicative-Types.html#optShowDefault",
        "fct-type": "function",
        "title": "optShowDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "optShowDefault",
        "normalized": "Option a-\u003eMaybe String",
        "package": "optparse-applicative",
        "partial": "Show Default",
        "signature": "Option a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:optVisibility",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Option a -\u003e OptVisibility",
        "fct-source": "src/Options-Applicative-Types.html#optVisibility",
        "fct-type": "function",
        "title": "optVisibility"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "optVisibility",
        "normalized": "Option a-\u003eOptVisibility",
        "package": "optparse-applicative",
        "partial": "Visibility",
        "signature": "Option a-\u003eOptVisibility"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefBacktrack",
      "description": {
        "fct-descr": "\u003cp\u003ebacktrack to parent parser when a\n subcommand fails (default: True)\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "function",
        "title": "prefBacktrack"
      },
      "index": {
        "description": "backtrack to parent parser when subcommand fails default True",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "prefBacktrack",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Backtrack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefDisambiguate",
      "description": {
        "fct-descr": "\u003cp\u003eautomatically disambiguate abbreviations\n (default: False)\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "function",
        "title": "prefDisambiguate"
      },
      "index": {
        "description": "automatically disambiguate abbreviations default False",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "prefDisambiguate",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Disambiguate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefIntersperse",
      "description": {
        "fct-descr": "\u003cp\u003eallow regular options and flags to occur\n after arguments (default: True)\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "function",
        "title": "prefIntersperse"
      },
      "index": {
        "description": "allow regular options and flags to occur after arguments default True",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "prefIntersperse",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Intersperse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefMultiSuffix",
      "description": {
        "fct-descr": "\u003cp\u003emetavar suffix for multiple options\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "function",
        "title": "prefMultiSuffix"
      },
      "index": {
        "description": "metavar suffix for multiple options",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "prefMultiSuffix",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Multi Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:prefShowHelpOnError",
      "description": {
        "fct-descr": "\u003cp\u003ealways show help text on parse errors\n (default: False)\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Bool",
        "fct-source": "src/Options-Applicative-Types.html#ParserPrefs",
        "fct-type": "function",
        "title": "prefShowHelpOnError"
      },
      "index": {
        "description": "always show help text on parse errors default False",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "prefShowHelpOnError",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Show Help On Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propHelp",
      "description": {
        "fct-descr": "\u003cp\u003ehelp text for this option\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#OptProperties",
        "fct-type": "function",
        "title": "propHelp"
      },
      "index": {
        "description": "help text for this option",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "propHelp",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propMetaVar",
      "description": {
        "fct-descr": "\u003cp\u003emetavariable for this option\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String",
        "fct-source": "src/Options-Applicative-Types.html#OptProperties",
        "fct-type": "function",
        "title": "propMetaVar"
      },
      "index": {
        "description": "metavariable for this option",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "propMetaVar",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Meta Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propShowDefault",
      "description": {
        "fct-descr": "\u003cp\u003ewhat to show in the help text as the default\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Maybe String",
        "fct-source": "src/Options-Applicative-Types.html#OptProperties",
        "fct-type": "function",
        "title": "propShowDefault"
      },
      "index": {
        "description": "what to show in the help text as the default",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "propShowDefault",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Show Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:propVisibility",
      "description": {
        "fct-descr": "\u003cp\u003ewhether this flag is shown is the brief description\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "OptVisibility",
        "fct-source": "src/Options-Applicative-Types.html#OptProperties",
        "fct-type": "function",
        "title": "propVisibility"
      },
      "index": {
        "description": "whether this flag is shown is the brief description",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "propVisibility",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:readerAbort",
      "description": {
        "fct-descr": "\u003cp\u003eAbort option reader by exiting with a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "ParseError -\u003e ReadM a",
        "fct-source": "src/Options-Applicative-Types.html#readerAbort",
        "fct-type": "function",
        "title": "readerAbort"
      },
      "index": {
        "description": "Abort option reader by exiting with ParseError",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "readerAbort",
        "normalized": "ParseError-\u003eReadM a",
        "package": "optparse-applicative",
        "partial": "Abort",
        "signature": "ParseError-\u003eReadM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:readerError",
      "description": {
        "fct-descr": "\u003cp\u003eAbort option reader by exiting with an error message.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e ReadM a",
        "fct-source": "src/Options-Applicative-Types.html#readerError",
        "fct-type": "function",
        "title": "readerError"
      },
      "index": {
        "description": "Abort option reader by exiting with an error message",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "readerError",
        "normalized": "String-\u003eReadM a",
        "package": "optparse-applicative",
        "partial": "Error",
        "signature": "String-\u003eReadM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:runCompleter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e IO [String]",
        "fct-source": "src/Options-Applicative-Types.html#Completer",
        "fct-type": "function",
        "title": "runCompleter"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "runCompleter",
        "normalized": "String-\u003eIO[String]",
        "package": "optparse-applicative",
        "partial": "Completer",
        "signature": "String-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:runParserM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "forall x.  (r -\u003e Parser x) -\u003e Parser x",
        "fct-source": "src/Options-Applicative-Types.html#ParserM",
        "fct-type": "function",
        "title": "runParserM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "runParserM",
        "normalized": "a b(c-\u003eParser d)-\u003eParser d",
        "package": "optparse-applicative",
        "partial": "Parser",
        "signature": "forall x.(r-\u003eParser x)-\u003eParser x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:runReadM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Either ParseError a",
        "fct-source": "src/Options-Applicative-Types.html#ReadM",
        "fct-type": "function",
        "title": "runReadM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "runReadM",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Types.html#v:someM",
      "description": {
        "fct-module": "Options.Applicative.Types",
        "fct-package": "optparse-applicative",
        "fct-signature": "Parser a -\u003e ParserM [a]",
        "fct-source": "src/Options-Applicative-Types.html#someM",
        "fct-type": "function",
        "title": "someM"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Types",
        "module": "Options.Applicative.Types",
        "name": "someM",
        "normalized": "Parser a-\u003eParserM[a]",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Parser a-\u003eParserM[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#",
      "description": {
        "fct-module": "Options.Applicative.Utils",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative Utils",
        "module": "Options.Applicative.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate two strings with a space in the middle.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Utils",
        "fct-package": "optparse-applicative",
        "fct-signature": "String -\u003e String -\u003e String",
        "fct-source": "src/Options-Applicative-Utils.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Concatenate two strings with space in the middle",
        "hierarchy": "Options Applicative Utils",
        "module": "Options.Applicative.Utils",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "String-\u003eString-\u003eString",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:pad",
      "description": {
        "fct-descr": "\u003cp\u003ePad a string to a fixed size with whitespace.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Utils",
        "fct-package": "optparse-applicative",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/Options-Applicative-Utils.html#pad",
        "fct-type": "function",
        "title": "pad"
      },
      "index": {
        "description": "Pad string to fixed size with whitespace",
        "hierarchy": "Options Applicative Utils",
        "module": "Options.Applicative.Utils",
        "name": "pad",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:tabulate",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay pairs of strings in a table.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Utils",
        "fct-package": "optparse-applicative",
        "fct-signature": "[(String, String)] -\u003e [String]",
        "fct-source": "src/Options-Applicative-Utils.html#tabulate",
        "fct-type": "function",
        "title": "tabulate"
      },
      "index": {
        "description": "Display pairs of strings in table",
        "hierarchy": "Options Applicative Utils",
        "module": "Options.Applicative.Utils",
        "name": "tabulate",
        "normalized": "[(String,String)]-\u003e[String]",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "[(String,String)]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative-Utils.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate strings vertically with empty lines in between.\n\u003c/p\u003e",
        "fct-module": "Options.Applicative.Utils",
        "fct-package": "optparse-applicative",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Options-Applicative-Utils.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "Concatenate strings vertically with empty lines in between",
        "hierarchy": "Options Applicative Utils",
        "module": "Options.Applicative.Utils",
        "name": "vcat",
        "normalized": "[String]-\u003eString",
        "package": "optparse-applicative",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/optparse-applicative/docs/Options-Applicative.html#",
      "description": {
        "fct-module": "Options.Applicative",
        "fct-package": "optparse-applicative",
        "fct-signature": "module",
        "fct-source": "src/Options-Applicative.html",
        "fct-type": "module",
        "title": "Applicative"
      },
      "index": {
        "description": "",
        "hierarchy": "Options Applicative",
        "module": "Options.Applicative",
        "name": "Applicative",
        "normalized": "",
        "package": "optparse-applicative",
        "partial": "Applicative",
        "signature": ""
      }
    }
  }
]