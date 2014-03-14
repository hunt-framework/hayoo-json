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
        "word": "multiarg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators that are useful for building command-line\n parsers. These build off the functions in\n \u003ca\u003eSystem.Console.MultiArg.Prim\u003c/a\u003e. Unlike those functions, these\n functions have no access to the internals of the parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "Combinator",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators that are useful for building command-line parsers These build off the functions in System.Console.MultiArg.Prim Unlike those functions these functions have no access to the internals of the parser",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "Combinator",
          "package": "multiarg",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how many arguments each option takes. As with\n \u003ccode\u003e\u003ca\u003eArgDescr\u003c/a\u003e\u003c/code\u003e, there are (at least) two ways to\n use this type. You can simply represent each possible option using\n different data constructors in an algebraic data type. Or you can\n have each ArgSpec yield a function that transforms a record. For an\n example that uses an algebraic data type, see\n \u003ca\u003eSystem.Console.MultiArg.SampleParser\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost of these value constructors take as an argument a function\n that returns an Either.  The function should return a \u003ccode\u003eLeft\n InputError\u003c/code\u003e if the parsing of the arguments failed--if, for\n example, the user needs to enter an integer but she instead input a\n letter.  The functions should return a Right if parsing of the\n arguments was successful.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ArgSpec",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "data"
        },
        "index": {
          "description": "Specifies how many arguments each option takes As with ArgDescr there are at least two ways to use this type You can simply represent each possible option using different data constructors in an algebraic data type Or you can have each ArgSpec yield function that transforms record For an example that uses an algebraic data type see System.Console.MultiArg.SampleParser Most of these value constructors take as an argument function that returns an Either The function should return Left InputError if the parsing of the arguments failed--if for example the user needs to enter an integer but she instead input letter The functions should return Right if parsing of the arguments was successful",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ArgSpec",
          "package": "multiarg",
          "partial": "Arg Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#t:ArgSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates errors when parsing options to arguments.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "InputError",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Combinator.html#InputError",
          "type": "data"
        },
        "index": {
          "description": "Indicates errors when parsing options to arguments",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "InputError",
          "package": "multiarg",
          "partial": "Input Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#t:InputError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies options for the \u003ccode\u003e\u003ca\u003eparseOption\u003c/a\u003e\u003c/code\u003e function. Each OptSpec\n represents one command-line option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OptSpec",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Combinator.html#OptSpec",
          "type": "data"
        },
        "index": {
          "description": "Specifies options for the parseOption function Each OptSpec represents one command-line option",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OptSpec",
          "package": "multiarg",
          "partial": "Opt Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#t:OptSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes a single argument, which must match one of\n the strings given in the list. The user may supply the shortest\n unambiguous string. If the argument list to ChoiceArg has\n duplicate strings, only the first string is used. For instance,\n ChoiceArg could be useful if you were parsing the \u003ccode\u003e--color\u003c/code\u003e\n option to GNU grep, which requires the user to supply one of\n three arguments: \u003ccode\u003ealways\u003c/code\u003e, \u003ccode\u003enever\u003c/code\u003e, or \u003ccode\u003eauto\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ChoiceArg",
          "package": "multiarg",
          "signature": "ChoiceArg [(String, a)]",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes single argument which must match one of the strings given in the list The user may supply the shortest unambiguous string If the argument list to ChoiceArg has duplicate strings only the first string is used For instance ChoiceArg could be useful if you were parsing the color option to GNU grep which requires the user to supply one of three arguments always never or auto",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ChoiceArg",
          "normalized": "ChoiceArg[(String,a)]",
          "package": "multiarg",
          "partial": "Choice Arg",
          "signature": "ChoiceArg[(String,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:ChoiceArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing the argument failed with this error message. An example\n might be \u003ccode\u003eoption argument is not an integer\u003c/code\u003e or \u003ccode\u003eoption argument\n is too large\u003c/code\u003e. The text of the options the user provided is\n automatically prepended to the error message, so do not replicate\n this in your message.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ErrorMsg",
          "package": "multiarg",
          "signature": "ErrorMsg String",
          "source": "src/System-Console-MultiArg-Combinator.html#InputError",
          "type": "function"
        },
        "index": {
          "description": "Parsing the argument failed with this error message An example might be option argument is not an integer or option argument is too large The text of the options the user provided is automatically prepended to the error message so do not replicate this in your message",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ErrorMsg",
          "package": "multiarg",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:ErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes no arguments\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "NoArg",
          "package": "multiarg",
          "signature": "NoArg a",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes no arguments",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "NoArg",
          "package": "multiarg",
          "partial": "No Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:NoArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo error message accompanies this failure. multiarg will create\n a generic error message for you.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "NoMsg",
          "package": "multiarg",
          "signature": "NoMsg",
          "source": "src/System-Console-MultiArg-Combinator.html#InputError",
          "type": "function"
        },
        "index": {
          "description": "No error message accompanies this failure multiarg will create generic error message for you",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "NoMsg",
          "package": "multiarg",
          "partial": "No Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:NoMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes one argument. Here, if option \u003ccode\u003ea\u003c/code\u003e takes one\n argument, \u003ccode\u003e-a -b\u003c/code\u003e will be parsed with \u003ccode\u003e-b\u003c/code\u003e being an argument to\n option \u003ccode\u003ea\u003c/code\u003e, even though \u003ccode\u003e-b\u003c/code\u003e starts with a hyphen and therefore\n \"looks like\" an option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OneArg",
          "package": "multiarg",
          "signature": "OneArg (String -\u003e Either InputError a)",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes one argument Here if option takes one argument will be parsed with being an argument to option even though starts with hyphen and therefore looks like an option",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OneArg",
          "normalized": "OneArg(String-\u003eEither InputError a)",
          "package": "multiarg",
          "partial": "One Arg",
          "signature": "OneArg(String-\u003eEither InputError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:OneArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Combinator",
          "name": "OptSpec",
          "package": "multiarg",
          "signature": "OptSpec",
          "source": "src/System-Console-MultiArg-Combinator.html#OptSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OptSpec",
          "package": "multiarg",
          "partial": "Opt Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:OptSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes an optional argument. As noted in \"The Tao\n of Option Parsing\", optional arguments can result in some\n ambiguity. (Read it here:\n \u003ca\u003ehttp://optik.sourceforge.net/doc/1.5/tao.html\u003c/a\u003e) If option \u003ccode\u003ea\u003c/code\u003e\n takes an optional argument, and \u003ccode\u003eb\u003c/code\u003e is also an option, what\n does \u003ccode\u003e-ab\u003c/code\u003e mean? SimpleParser resolves this ambiguity by\n assuming that \u003ccode\u003eb\u003c/code\u003e is an argument to \u003ccode\u003ea\u003c/code\u003e. If the user does not\n like this, she can specify \u003ccode\u003e-a -b\u003c/code\u003e (in such an instance \u003ccode\u003e-b\u003c/code\u003e is\n not parsed as an option to \u003ccode\u003e-a\u003c/code\u003e, because \u003ccode\u003e-b\u003c/code\u003e begins with a\n hyphen and therefore \"looks like\" an option.) Certainly\n though, optional arguments lead to ambiguity, so if you don't\n like it, don't use them :)\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OptionalArg",
          "package": "multiarg",
          "signature": "OptionalArg (Maybe String -\u003e Either InputError a)",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes an optional argument As noted in The Tao of Option Parsing optional arguments can result in some ambiguity Read it here http optik.sourceforge.net doc tao.html If option takes an optional argument and is also an option what does ab mean SimpleParser resolves this ambiguity by assuming that is an argument to If the user does not like this she can specify in such an instance is not parsed as an option to because begins with hyphen and therefore looks like an option Certainly though optional arguments lead to ambiguity so if you don like it don use them",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "OptionalArg",
          "normalized": "OptionalArg(Maybe String-\u003eEither InputError a)",
          "package": "multiarg",
          "partial": "Optional Arg",
          "signature": "OptionalArg(Maybe String-\u003eEither InputError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:OptionalArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes three arguments. Parsed similarly to\n \u003ccode\u003e\u003ca\u003eOneArg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ThreeArg",
          "package": "multiarg",
          "signature": "ThreeArg (String -\u003e String -\u003e String -\u003e Either InputError a)",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes three arguments Parsed similarly to OneArg",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "ThreeArg",
          "normalized": "ThreeArg(String-\u003eString-\u003eString-\u003eEither InputError a)",
          "package": "multiarg",
          "partial": "Three Arg",
          "signature": "ThreeArg(String-\u003eString-\u003eString-\u003eEither InputError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:ThreeArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes two arguments. Parsed similarly to\n \u003ccode\u003e\u003ca\u003eOneArg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "TwoArg",
          "package": "multiarg",
          "signature": "TwoArg (String -\u003e String -\u003e Either InputError a)",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes two arguments Parsed similarly to OneArg",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "TwoArg",
          "normalized": "TwoArg(String-\u003eString-\u003eEither InputError a)",
          "package": "multiarg",
          "partial": "Two Arg",
          "signature": "TwoArg(String-\u003eString-\u003eEither InputError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:TwoArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option takes a variable number of arguments--zero or\n more. Option arguments continue until the command line contains\n a word that begins with a hyphen. For example, if option \u003ccode\u003ea\u003c/code\u003e\n takes a variable number of arguments, then \u003ccode\u003e-a one two three\n -b\u003c/code\u003e will be parsed as \u003ccode\u003ea\u003c/code\u003e taking three arguments, and \u003ccode\u003e-a -b\u003c/code\u003e\n will be parsed as \u003ccode\u003ea\u003c/code\u003e taking no arguments. If the user enters\n \u003ccode\u003e-a\u003c/code\u003e as the last option on the command line, then the only way\n to indicate the end of arguments for \u003ccode\u003ea\u003c/code\u003e and the beginning of\n positional argments is with a stopper.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "VariableArg",
          "package": "multiarg",
          "signature": "VariableArg ([String] -\u003e Either InputError a)",
          "source": "src/System-Console-MultiArg-Combinator.html#ArgSpec",
          "type": "function"
        },
        "index": {
          "description": "This option takes variable number of arguments--zero or more Option arguments continue until the command line contains word that begins with hyphen For example if option takes variable number of arguments then one two three will be parsed as taking three arguments and will be parsed as taking no arguments If the user enters as the last option on the command line then the only way to indicate the end of arguments for and the beginning of positional argments is with stopper",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "VariableArg",
          "normalized": "VariableArg([String]-\u003eEither InputError a)",
          "package": "multiarg",
          "partial": "Variable Arg",
          "signature": "VariableArg([String]-\u003eEither InputError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:VariableArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do each time one of the given long options or\n short options appears on the command line.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "argSpec",
          "package": "multiarg",
          "signature": "ArgSpec a",
          "source": "src/System-Console-MultiArg-Combinator.html#OptSpec",
          "type": "function"
        },
        "index": {
          "description": "What to do each time one of the given long options or short options appears on the command line",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "argSpec",
          "package": "multiarg",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:argSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats error messages for nice display. Returns a multi-line\n string (there is no need to append a newline to the end of the\n string returned).\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "formatError",
          "package": "multiarg",
          "signature": "String-\u003e Error-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Formats error messages for nice display Returns multi-line string there is no need to append newline to the end of the string returned",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "formatError",
          "normalized": "String-\u003eError-\u003eString",
          "package": "multiarg",
          "partial": "Error",
          "signature": "String-\u003eError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:formatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach String is a single long option, such as \u003ccode\u003eversion\u003c/code\u003e. When\n the user specifies long options on the command line, she must\n type two dashes; however, do not include the dashes when you\n specify the long option here. Strings you specify as long options\n cannot include a dash as either the first or the second\n character, and they cannot include an equal sign anywhere. If\n your long option does not meet these conditions, a runtime error\n will occur.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "longOpts",
          "package": "multiarg",
          "signature": "[String]",
          "source": "src/System-Console-MultiArg-Combinator.html#OptSpec",
          "type": "function"
        },
        "index": {
          "description": "Each String is single long option such as version When the user specifies long options on the command line she must type two dashes however do not include the dashes when you specify the long option here Strings you specify as long options cannot include dash as either the first or the second character and they cannot include an equal sign anywhere If your long option does not meet these conditions runtime error will occur",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "longOpts",
          "normalized": "[String]",
          "package": "multiarg",
          "partial": "Opts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:longOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotFollowedBy p\u003c/code\u003e succeeds only if parser p fails. If p fails,\n notFollowedBy succeeds without consuming any input. If p succeeds\n and consumes input, notFollowedBy fails and consumes input. If p\n succeeds and does not consume any input, notFollowedBy fails and\n does not consume any input.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "notFollowedBy",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser ()",
          "source": "src/System-Console-MultiArg-Combinator.html#notFollowedBy",
          "type": "function"
        },
        "index": {
          "description": "notFollowedBy succeeds only if parser fails If fails notFollowedBy succeeds without consuming any input If succeeds and consumes input notFollowedBy fails and consumes input If succeeds and does not consume any input notFollowedBy fails and does not consume any input",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "notFollowedBy",
          "normalized": "Parser a-\u003eParser()",
          "package": "multiarg",
          "partial": "Followed By",
          "signature": "Parser a-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads in values that are members of Read, but the value does not\n have to appear on the command line. Provides a generic error\n message if the read fails. If the argument is Nothing, returns\n Nothing.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "optReader",
          "package": "multiarg",
          "signature": "Maybe String -\u003e Either InputError (Maybe a)",
          "source": "src/System-Console-MultiArg-Combinator.html#optReader",
          "type": "function"
        },
        "index": {
          "description": "Reads in values that are members of Read but the value does not have to appear on the command line Provides generic error message if the read fails If the argument is Nothing returns Nothing",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "optReader",
          "normalized": "Maybe String-\u003eEither InputError(Maybe a)",
          "package": "multiarg",
          "partial": "Reader",
          "signature": "Maybe String-\u003eEither InputError(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:optReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a single command line option. Examines all the options\n specified using multiple OptSpec and parses one option on the\n command line accordingly. Fails without consuming any input if the\n next word on the command line is not a recognized option. Allows\n the user to specify the shortest unambiguous match for long\n options; for example, the user could type \u003ccode\u003e--verb\u003c/code\u003e for \u003ccode\u003e--verbose\u003c/code\u003e\n and \u003ccode\u003e--vers\u003c/code\u003e for \u003ccode\u003e--version\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is applied to a list of OptSpec, rather than to a\n single OptSpec, because in order to correctly handle the parsing of\n shortened long options (e.g. \u003ccode\u003e--verb\u003c/code\u003e rather than \u003ccode\u003e--verbose\u003c/code\u003e) it\n is necessary for one function to have access to all of the\n OptSpec. Applying this function multiple times to different lists\n of OptSpec and then using the \u003ccode\u003e\u003ca\u003e|\u003c/a\u003e\u003c/code\u003e function to combine them will\n break the proper parsing of shortened long options.\n\u003c/p\u003e\u003cp\u003eFor an example that uses this function, see\n \u003ca\u003eSystem.Console.MultiArg.SimpleParser\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "parseOption",
          "package": "multiarg",
          "signature": "[OptSpec a] -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Combinator.html#parseOption",
          "type": "function"
        },
        "index": {
          "description": "Parses single command line option Examines all the options specified using multiple OptSpec and parses one option on the command line accordingly Fails without consuming any input if the next word on the command line is not recognized option Allows the user to specify the shortest unambiguous match for long options for example the user could type verb for verbose and vers for version This function is applied to list of OptSpec rather than to single OptSpec because in order to correctly handle the parsing of shortened long options e.g verb rather than verbose it is necessary for one function to have access to all of the OptSpec Applying this function multiple times to different lists of OptSpec and then using the function to combine them will break the proper parsing of shortened long options For an example that uses this function see System.Console.MultiArg.SimpleParser",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "parseOption",
          "normalized": "[OptSpec a]-\u003eParser a",
          "package": "multiarg",
          "partial": "Option",
          "signature": "[OptSpec a]-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:parseOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads in values that are members of Read. Provides a generic\n error message if the read fails.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "reader",
          "package": "multiarg",
          "signature": "String -\u003e Either InputError a",
          "source": "src/System-Console-MultiArg-Combinator.html#reader",
          "type": "function"
        },
        "index": {
          "description": "Reads in values that are members of Read Provides generic error message if the read fails",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "reader",
          "normalized": "String-\u003eEither InputError a",
          "package": "multiarg",
          "signature": "String-\u003eEither InputError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach Char is a single short option, such as \u003ccode\u003ev\u003c/code\u003e. The\n character cannot be a dash; if it is, a runtime error will occur.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Combinator",
          "name": "shortOpts",
          "package": "multiarg",
          "signature": "[Char]",
          "source": "src/System-Console-MultiArg-Combinator.html#OptSpec",
          "type": "function"
        },
        "index": {
          "description": "Each Char is single short option such as The character cannot be dash if it is runtime error will occur",
          "hierarchy": "System Console MultiArg Combinator",
          "module": "System.Console.MultiArg.Combinator",
          "name": "shortOpts",
          "normalized": "[Char]",
          "package": "multiarg",
          "partial": "Opts",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Combinator.html#v:shortOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome pre-built command line parsers. One is a simple command line\n parser that can parse options that take an optional argument, one\n or two arguments, or a variable number of arguments. For sample\n code that uses this parser, see\n \u003ca\u003eSystem.Console.MultiArg.SampleParser\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAnother parser is provided for multi-mode programs that are similar\n to \u003ccode\u003egit\u003c/code\u003e or \u003ccode\u003edarcs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePreviously there was a bug in System.Environment.getArgs that would\n not properly encode Unicode command line arguments.  multiarg used\n to provide its own GetArgs module to deal with this.  This bug was\n in base 4.3.1.0, which was bundled with ghc 7.0.4.  This bug was\n fixed in base 4.4.0.0, which came with ghc 7.2.  Since this bug has\n been fixed for awhile, multiarg no longer has its own GetArgs\n module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "CommandLine",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-CommandLine.html",
          "type": "module"
        },
        "index": {
          "description": "Some pre-built command line parsers One is simple command line parser that can parse options that take an optional argument one or two arguments or variable number of arguments For sample code that uses this parser see System.Console.MultiArg.SampleParser Another parser is provided for multi-mode programs that are similar to git or darcs Previously there was bug in System.Environment.getArgs that would not properly encode Unicode command line arguments multiarg used to provide its own GetArgs module to deal with this This bug was in base which was bundled with ghc This bug was fixed in base which came with ghc Since this bug has been fixed for awhile multiarg no longer has its own GetArgs module",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "CommandLine",
          "package": "multiarg",
          "partial": "Command Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do after encountering the first non-option,\n non-option-argument word on the command line? In either case, no\n more options are parsed after a stopper.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Intersperse",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-CommandLine.html#Intersperse",
          "type": "data"
        },
        "index": {
          "description": "What to do after encountering the first non-option non-option-argument word on the command line In either case no more options are parsed after stopper",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Intersperse",
          "package": "multiarg",
          "partial": "Intersperse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#t:Intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a mode.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Mode",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-CommandLine.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Specifies mode",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Mode",
          "package": "multiarg",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a set of options.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Opts",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-CommandLine.html#Opts",
          "type": "data"
        },
        "index": {
          "description": "Specifies set of options",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Opts",
          "package": "multiarg",
          "partial": "Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#t:Opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification for both options and positional arguments.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "OptsWithPosArgs",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-CommandLine.html#OptsWithPosArgs",
          "type": "data"
        },
        "index": {
          "description": "Specification for both options and positional arguments",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "OptsWithPosArgs",
          "package": "multiarg",
          "partial": "Opts With Pos Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#t:OptsWithPosArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the program that was entered on the command line,\n obtained from System.Environment.getProgName.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "ProgName",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-CommandLine.html#ProgName",
          "type": "type"
        },
        "index": {
          "description": "The name of the program that was entered on the command line obtained from System.Environment.getProgName",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "ProgName",
          "package": "multiarg",
          "partial": "Prog Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#t:ProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional options are allowed on the command line after\n encountering the first positional argument. For example, if \u003ccode\u003ea\u003c/code\u003e\n and \u003ccode\u003eb\u003c/code\u003e are options, in the command line \u003ccode\u003e-a posarg -b\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e will\n be parsed as an option. If \u003ccode\u003eb\u003c/code\u003e is \u003cem\u003enot\u003c/em\u003e an option and the same\n command line is entered, then \u003ccode\u003e-b\u003c/code\u003e will result in an error\n because \u003ccode\u003e-b\u003c/code\u003e starts with a hyphen and therefore \"looks like\" an\n option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Intersperse",
          "package": "multiarg",
          "signature": "Intersperse",
          "source": "src/System-Console-MultiArg-CommandLine.html#Intersperse",
          "type": "function"
        },
        "index": {
          "description": "Additional options are allowed on the command line after encountering the first positional argument For example if and are options in the command line posarg will be parsed as an option If is not an option and the same command line is entered then will result in an error because starts with hyphen and therefore looks like an option",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Intersperse",
          "package": "multiarg",
          "partial": "Intersperse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:Intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Mode",
          "package": "multiarg",
          "signature": "forall a . Mode",
          "source": "src/System-Console-MultiArg-CommandLine.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Mode",
          "package": "multiarg",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Opts",
          "package": "multiarg",
          "signature": "Opts",
          "source": "src/System-Console-MultiArg-CommandLine.html#Opts",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "Opts",
          "package": "multiarg",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:Opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.CommandLine",
          "name": "OptsWithPosArgs",
          "package": "multiarg",
          "signature": "OptsWithPosArgs",
          "source": "src/System-Console-MultiArg-CommandLine.html#OptsWithPosArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "OptsWithPosArgs",
          "package": "multiarg",
          "partial": "Opts With Pos Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:OptsWithPosArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo additional options will be parsed after encountering the\n first positional argument. For example, if \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are\n options, in the command line \u003ccode\u003e-a posarg -b\u003c/code\u003e, \u003ccode\u003eb\u003c/code\u003e will be parsed\n as a positional argument rather than as an option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "StopOptions",
          "package": "multiarg",
          "signature": "StopOptions",
          "source": "src/System-Console-MultiArg-CommandLine.html#Intersperse",
          "type": "function"
        },
        "index": {
          "description": "No additional options will be parsed after encountering the first positional argument For example if and are options in the command line posarg will be parsed as positional argument rather than as an option",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "StopOptions",
          "package": "multiarg",
          "partial": "Stop Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:StopOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is applied to a list of the results of parsing the\n options that are specific to this mode.  The function returns a\n type of your choosing (though all modes in the same parser will\n have to return the same type.)\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "mGetResult",
          "package": "multiarg",
          "signature": "[a] -\u003e r",
          "source": "src/System-Console-MultiArg-CommandLine.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "This function is applied to list of the results of parsing the options that are specific to this mode The function returns type of your choosing though all modes in the same parser will have to return the same type",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "mGetResult",
          "normalized": "[a]-\u003eb",
          "package": "multiarg",
          "partial": "Get Result",
          "signature": "[a]-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:mGetResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow the user specifies the mode on the command line.  For \u003ccode\u003egit\u003c/code\u003e\n for example this might be \u003ccode\u003ecommit\u003c/code\u003e or \u003ccode\u003elog\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "mModeName",
          "package": "multiarg",
          "signature": "String",
          "source": "src/System-Console-MultiArg-CommandLine.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "How the user specifies the mode on the command line For git for example this might be commit or log",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "mModeName",
          "package": "multiarg",
          "partial": "Mode Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:mModeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions and positional arguments that are specific to this\n mode.  For example, in the command line \u003ccode\u003egit commit -a -m 'this\n is a log message'\u003c/code\u003e, \u003ccode\u003ecommit\u003c/code\u003e is the mode name and everything\n after that is specified here as an option or positional argument\n that is specific to this mode.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "mOpts",
          "package": "multiarg",
          "signature": "OptsWithPosArgs s a",
          "source": "src/System-Console-MultiArg-CommandLine.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Options and positional arguments that are specific to this mode For example in the command line git commit this is log message commit is the mode name and everything after that is specified here as an option or positional argument that is specific to this mode",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "mOpts",
          "package": "multiarg",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:mOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Mode with a help option (help specific to the mode.)\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "modeHelp",
          "package": "multiarg",
          "signature": "String-\u003e h-\u003e ([a] -\u003e r)-\u003e [OptSpec a]-\u003e Intersperse-\u003e (String -\u003e Either InputError a)-\u003e Mode h r",
          "type": "function"
        },
        "index": {
          "description": "Creates Mode with help option help specific to the mode",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "modeHelp",
          "normalized": "String-\u003ea-\u003e([b]-\u003ec)-\u003e[OptSpec b]-\u003eIntersperse-\u003e(String-\u003eEither InputError b)-\u003eMode a c",
          "package": "multiarg",
          "partial": "Help",
          "signature": "String-\u003eh-\u003e([a]-\u003er)-\u003e[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eMode h r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:modeHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA command line parser for multi-mode command lines.  Runs in the\n IO monad.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "modesIO",
          "package": "multiarg",
          "signature": "Opts s g-\u003e ([g] -\u003e Either String (Either r [Mode s r]))-\u003e IO (Either s r)",
          "type": "function"
        },
        "index": {
          "description": "command line parser for multi-mode command lines Runs in the IO monad",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "modesIO",
          "normalized": "Opts a b-\u003e([b]-\u003eEither String(Either c[Mode a c]))-\u003eIO(Either a c)",
          "package": "multiarg",
          "partial": "IO",
          "signature": "Opts s g-\u003e([g]-\u003eEither String(Either r[Mode s r]))-\u003eIO(Either s r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:modesIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure (non-IO) parser for command lines that contain modes.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "modesPure",
          "package": "multiarg",
          "signature": "Opts s g-\u003e ([g] -\u003e Either String (Either r [Mode s r]))-\u003e [String]-\u003e Either Error (Either s r)",
          "type": "function"
        },
        "index": {
          "description": "pure non-IO parser for command lines that contain modes",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "modesPure",
          "normalized": "Opts a b-\u003e([b]-\u003eEither String(Either c[Mode a c]))-\u003e[String]-\u003eEither Error(Either a c)",
          "package": "multiarg",
          "partial": "Pure",
          "signature": "Opts s g-\u003e([g]-\u003eEither String(Either r[Mode s r]))-\u003e[String]-\u003eEither Error(Either s r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:modesPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the user does not specify any shortcut options, she may\n specify any number of these options.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "oOptions",
          "package": "multiarg",
          "signature": "[OptSpec a]",
          "source": "src/System-Console-MultiArg-CommandLine.html#Opts",
          "type": "function"
        },
        "index": {
          "description": "If the user does not specify any shortcut options she may specify any number of these options",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "oOptions",
          "normalized": "[OptSpec a]",
          "package": "multiarg",
          "partial": "Options",
          "signature": "[OptSpec a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:oOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut options are commonly options such as \u003ccode\u003e--help\u003c/code\u003e or\n \u003ccode\u003e--version\u003c/code\u003e. Such options must be specified alone on the command\n line.  The parser looks for one of these options first.  If it\n finds one and it is the only option on the command line, only\n this option is processed and returned.  If the option is not\n alone on the command line, an error occurs.  If no shortcut\n option is found, the parser processes non-shortcut options\n instead.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "oShortcuts",
          "package": "multiarg",
          "signature": "[OptSpec s]",
          "source": "src/System-Console-MultiArg-CommandLine.html#Opts",
          "type": "function"
        },
        "index": {
          "description": "Shortcut options are commonly options such as help or version Such options must be specified alone on the command line The parser looks for one of these options first If it finds one and it is the only option on the command line only this option is processed and returned If the option is not alone on the command line an error occurs If no shortcut option is found the parser processes non-shortcut options instead",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "oShortcuts",
          "normalized": "[OptSpec a]",
          "package": "multiarg",
          "partial": "Shortcuts",
          "signature": "[OptSpec s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:oShortcuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.CommandLine",
          "name": "opIntersperse",
          "package": "multiarg",
          "signature": "Intersperse",
          "source": "src/System-Console-MultiArg-CommandLine.html#OptsWithPosArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "opIntersperse",
          "package": "multiarg",
          "partial": "Intersperse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:opIntersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.CommandLine",
          "name": "opOpts",
          "package": "multiarg",
          "signature": "Opts s a",
          "source": "src/System-Console-MultiArg-CommandLine.html#OptsWithPosArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "opOpts",
          "package": "multiarg",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:opOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.CommandLine",
          "name": "opPosArg",
          "package": "multiarg",
          "signature": "String -\u003e Either InputError a",
          "source": "src/System-Console-MultiArg-CommandLine.html#OptsWithPosArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "opPosArg",
          "normalized": "String-\u003eEither InputError a",
          "package": "multiarg",
          "partial": "Pos Arg",
          "signature": "String-\u003eEither InputError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:opPosArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an Opts with a help shortcut option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "optsHelp",
          "package": "multiarg",
          "signature": "h-\u003e [OptSpec a]-\u003e Opts h a",
          "type": "function"
        },
        "index": {
          "description": "Creates an Opts with help shortcut option",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "optsHelp",
          "normalized": "a-\u003e[OptSpec b]-\u003eOpts a b",
          "package": "multiarg",
          "partial": "Help",
          "signature": "h-\u003e[OptSpec a]-\u003eOpts h a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:optsHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an Opts with help and version shortcut options.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "optsHelpVersion",
          "package": "multiarg",
          "signature": "h-\u003e h-\u003e [OptSpec a]-\u003e Opts h a",
          "type": "function"
        },
        "index": {
          "description": "Creates an Opts with help and version shortcut options",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "optsHelpVersion",
          "normalized": "a-\u003ea-\u003e[OptSpec b]-\u003eOpts a b",
          "package": "multiarg",
          "partial": "Help Version",
          "signature": "h-\u003eh-\u003e[OptSpec a]-\u003eOpts h a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:optsHelpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for simple command lines. Adds a \u003ccode\u003e--help\u003c/code\u003e option for\n you.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simpleHelp",
          "package": "multiarg",
          "signature": "(ProgName -\u003e String)-\u003e [OptSpec a]-\u003e Intersperse-\u003e (String -\u003e Either InputError a)-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "parser for simple command lines Adds help option for you",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simpleHelp",
          "normalized": "(ProgName-\u003eString)-\u003e[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eIO[a]",
          "package": "multiarg",
          "partial": "Help",
          "signature": "(ProgName-\u003eString)-\u003e[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:simpleHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for simple command lines without modes.  Adds options\n for \u003ccode\u003e--help\u003c/code\u003e and \u003ccode\u003e--version\u003c/code\u003e for you.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simpleHelpVersion",
          "package": "multiarg",
          "signature": "(ProgName -\u003e String)-\u003e (ProgName -\u003e String)-\u003e [OptSpec a]-\u003e Intersperse-\u003e (String -\u003e Either InputError a)-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "parser for simple command lines without modes Adds options for help and version for you",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simpleHelpVersion",
          "normalized": "(ProgName-\u003eString)-\u003e(ProgName-\u003eString)-\u003e[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eIO[a]",
          "package": "multiarg",
          "partial": "Help Version",
          "signature": "(ProgName-\u003eString)-\u003e(ProgName-\u003eString)-\u003e[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:simpleHelpVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for simple command lines that do not contain modes.\n Runs in the IO monad.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simpleIO",
          "package": "multiarg",
          "signature": "[OptSpec a]-\u003e Intersperse-\u003e (String -\u003e Either InputError a)-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "parser for simple command lines that do not contain modes Runs in the IO monad",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simpleIO",
          "normalized": "[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eIO[a]",
          "package": "multiarg",
          "partial": "IO",
          "signature": "[OptSpec a]-\u003eIntersperse-\u003e(String-\u003eEither InputError a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:simpleIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure (non-IO) parser for simple command lines--that is, command\n lines that do not have modes.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simplePure",
          "package": "multiarg",
          "signature": "OptsWithPosArgs s a-\u003e [String]-\u003e Either Error (Either s [a])",
          "type": "function"
        },
        "index": {
          "description": "pure non-IO parser for simple command lines--that is command lines that do not have modes",
          "hierarchy": "System Console MultiArg CommandLine",
          "module": "System.Console.MultiArg.CommandLine",
          "name": "simplePure",
          "normalized": "OptsWithPosArgs a b-\u003e[String]-\u003eEither Error(Either a[b])",
          "package": "multiarg",
          "partial": "Pure",
          "signature": "OptsWithPosArgs s a-\u003e[String]-\u003eEither Error(Either s[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-CommandLine.html#v:simplePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese types represent options. Option names cannot have a dash as\n their first or second character, and long option names cannot have\n an equals sign anywhere in the name.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.MultiArg.Option",
          "name": "Option",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Option.html",
          "type": "module"
        },
        "index": {
          "description": "These types represent options Option names cannot have dash as their first or second character and long option names cannot have an equals sign anywhere in the name",
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "Option",
          "package": "multiarg",
          "partial": "Option",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong options. Options that are preceded with two dashes on the\n command line and typically consist of an entire mnemonic word, such\n as \u003ccode\u003elines\u003c/code\u003e. However, anything that is at least one letter long is\n fine for a long option name. The name must be at least one\n character long. It cannot have an equal sign anywhere in its\n name. Otherwise any Unicode character is good (including\n pathological ones like newlines).\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Option",
          "name": "LongOpt",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Option.html#LongOpt",
          "type": "data"
        },
        "index": {
          "description": "Long options Options that are preceded with two dashes on the command line and typically consist of an entire mnemonic word such as lines However anything that is at least one letter long is fine for long option name The name must be at least one character long It cannot have an equal sign anywhere in its name Otherwise any Unicode character is good including pathological ones like newlines",
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "LongOpt",
          "package": "multiarg",
          "partial": "Long Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#t:LongOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort options. Options that are preceded with a single dash on\n the command line and consist of a single letter. That single letter\n cannot be a dash. Any other Unicode character is good (including\n pathological ones like newlines).\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Option",
          "name": "ShortOpt",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Option.html#ShortOpt",
          "type": "data"
        },
        "index": {
          "description": "Short options Options that are preceded with single dash on the command line and consist of single letter That single letter cannot be dash Any other Unicode character is good including pathological ones like newlines",
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "ShortOpt",
          "package": "multiarg",
          "partial": "Short Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#t:ShortOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a long option. Returns Nothing if the string is not a valid\n long option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Option",
          "name": "makeLongOpt",
          "package": "multiarg",
          "signature": "String -\u003e Maybe LongOpt",
          "source": "src/System-Console-MultiArg-Option.html#makeLongOpt",
          "type": "function"
        },
        "index": {
          "description": "Makes long option Returns Nothing if the string is not valid long option",
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "makeLongOpt",
          "normalized": "String-\u003eMaybe LongOpt",
          "package": "multiarg",
          "partial": "Long Opt",
          "signature": "String-\u003eMaybe LongOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#v:makeLongOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a short option. Returns Nothing if the character is not\n valid for a short option.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Option",
          "name": "makeShortOpt",
          "package": "multiarg",
          "signature": "Char -\u003e Maybe ShortOpt",
          "source": "src/System-Console-MultiArg-Option.html#makeShortOpt",
          "type": "function"
        },
        "index": {
          "description": "Creates short option Returns Nothing if the character is not valid for short option",
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "makeShortOpt",
          "normalized": "Char-\u003eMaybe ShortOpt",
          "package": "multiarg",
          "partial": "Short Opt",
          "signature": "Char-\u003eMaybe ShortOpt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#v:makeShortOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Option",
          "name": "unLongOpt",
          "package": "multiarg",
          "signature": "LongOpt -\u003e String",
          "source": "src/System-Console-MultiArg-Option.html#unLongOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "unLongOpt",
          "normalized": "LongOpt-\u003eString",
          "package": "multiarg",
          "partial": "Long Opt",
          "signature": "LongOpt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#v:unLongOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Option",
          "name": "unShortOpt",
          "package": "multiarg",
          "signature": "ShortOpt -\u003e Char",
          "source": "src/System-Console-MultiArg-Option.html#unShortOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Option",
          "module": "System.Console.MultiArg.Option",
          "name": "unShortOpt",
          "normalized": "ShortOpt-\u003eChar",
          "package": "multiarg",
          "partial": "Short Opt",
          "signature": "ShortOpt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Option.html#v:unShortOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser primitives. These are the only functions that have access\n to the internals of the parser. Use these functions if you want to\n build your own parser from scratch. If your needs are simpler, you\n will want to look at \u003ca\u003eSystem.Console.MultiArg.SimpleParser\u003c/a\u003e or\n \u003ca\u003eSystem.Console.MultiArg.Combinator\u003c/a\u003e, which do a lot of grunt work\n for you.\n\u003c/p\u003e\u003cp\u003eInternal design, especially the error handling, is based in large\n part on Parsec, as described in the paper at\n \u003ca\u003ehttp://legacy.cs.uu.nl/daan/pubs.html#parsec\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "Prim",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "Parser primitives These are the only functions that have access to the internals of the parser Use these functions if you want to build your own parser from scratch If your needs are simpler you will want to look at System.Console.MultiArg.SimpleParser or System.Console.MultiArg.Combinator which do lot of grunt work for you Internal design especially the error handling is based in large part on Parsec as described in the paper at http legacy.cs.uu.nl daan pubs.html parsec",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Prim",
          "package": "multiarg",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Prim",
          "name": "Description",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Prim.html#Description",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Description",
          "package": "multiarg",
          "partial": "Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#t:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError messages. To format error messages for nice display, see\n \u003ccode\u003e\u003ca\u003eformatError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "Error",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Prim.html#Error",
          "type": "data"
        },
        "index": {
          "description": "Error messages To format error messages for nice display see formatError",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Error",
          "package": "multiarg",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Prim",
          "name": "InputDesc",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Prim.html#InputDesc",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "InputDesc",
          "package": "multiarg",
          "partial": "Input Desc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#t:InputDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsers. Internally the parser tracks what input remains to be\n parsed, whether there are any pending short options, and whether a\n stopper has been seen. A parser can return a value of any type.\n\u003c/p\u003e\u003cp\u003eThe parser also includes the notion of failure. Any parser can\n fail; a failed parser affects the behavior of combinators such as\n choice.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "Parser",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-Prim.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "Parsers Internally the parser tracks what input remains to be parsed whether there are any pending short options and whether stopper has been seen parser can return value of any type The parser also includes the notion of failure Any parser can fail failed parser affects the behavior of combinators such as choice",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Parser",
          "package": "multiarg",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the parser given. If it fails without consuming any input,\n replaces all Expected messages with the one given. Otherwise,\n returns the result of the parser unchanged.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "(\u003c?\u003e)",
          "package": "multiarg",
          "signature": "Parser a -\u003e String -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Runs the parser given If it fails without consuming any input replaces all Expected messages with the one given Otherwise returns the result of the parser unchanged",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Parser a-\u003eString-\u003eParser a",
          "package": "multiarg",
          "signature": "Parser a-\u003eString-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Prim",
          "name": "Error",
          "package": "multiarg",
          "signature": "Error InputDesc [Description]",
          "source": "src/System-Console-MultiArg-Prim.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Error",
          "normalized": "Error InputDesc[Description]",
          "package": "multiarg",
          "partial": "Error",
          "signature": "Error InputDesc[Description]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Prim",
          "name": "Expected",
          "package": "multiarg",
          "signature": "Expected String",
          "source": "src/System-Console-MultiArg-Prim.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Expected",
          "package": "multiarg",
          "partial": "Expected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:Expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Prim",
          "name": "General",
          "package": "multiarg",
          "signature": "General String",
          "source": "src/System-Console-MultiArg-Prim.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "General",
          "package": "multiarg",
          "partial": "General",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:General"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.Prim",
          "name": "Unknown",
          "package": "multiarg",
          "signature": "Unknown",
          "source": "src/System-Console-MultiArg-Prim.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "Unknown",
          "package": "multiarg",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines the next word. If it matches a LongOpt in the set\n unambiguously, returns a tuple of the word actually found and the\n matching word in the set and the accompanying text after the equal\n sign (if any). If the Set is empty, this parser will always fail.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "approxLongOpt",
          "package": "multiarg",
          "signature": "Set LongOpt -\u003e Parser (String, LongOpt, Maybe String)",
          "source": "src/System-Console-MultiArg-Prim.html#approxLongOpt",
          "type": "function"
        },
        "index": {
          "description": "Examines the next word If it matches LongOpt in the set unambiguously returns tuple of the word actually found and the matching word in the set and the accompanying text after the equal sign if any If the Set is empty this parser will always fail",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "approxLongOpt",
          "normalized": "Set LongOpt-\u003eParser(String,LongOpt,Maybe String)",
          "package": "multiarg",
          "partial": "Long Opt",
          "signature": "Set LongOpt-\u003eParser(String,LongOpt,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:approxLongOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two parsers into a single parser. The second parser can\n optionally depend upon the result from the first parser.\n\u003c/p\u003e\u003cp\u003eThis applies the first parser. If the first parser succeeds,\n combine then takes the result from the first parser, applies the\n function given to the result from the first parser, and then\n applies the resulting parser.\n\u003c/p\u003e\u003cp\u003eIf the first parser fails, combine will not apply the second\n function but instead will bypass the second parser.\n\u003c/p\u003e\u003cp\u003eThis provides the implementation for \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e in\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "bind",
          "package": "multiarg",
          "signature": "Parser a -\u003e (a -\u003e Parser b) -\u003e Parser b",
          "source": "src/System-Console-MultiArg-Prim.html#bind",
          "type": "function"
        },
        "index": {
          "description": "Combines two parsers into single parser The second parser can optionally depend upon the result from the first parser This applies the first parser If the first parser succeeds combine then takes the result from the first parser applies the function given to the result from the first parser and then applies the resulting parser If the first parser fails combine will not apply the second function but instead will bypass the second parser This provides the implementation for in Monad",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "bind",
          "normalized": "Parser a-\u003e(a-\u003eParser b)-\u003eParser b",
          "package": "multiarg",
          "signature": "Parser a-\u003e(a-\u003eParser b)-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the first parser. If it fails without consuming any input,\n then runs the second parser. If the first parser succeeds, then\n returns the result of the first parser. If the first parser fails\n and consumes input, then returns the result of the first\n parser. This provides the implementation for\n \u003ccode\u003e\u003c|\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "choice",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser a -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#choice",
          "type": "function"
        },
        "index": {
          "description": "Runs the first parser If it fails without consuming any input then runs the second parser If the first parser succeeds then returns the result of the first parser If the first parser fails and consumes input then returns the result of the first parser This provides the implementation for in Alternative",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "choice",
          "normalized": "Parser a-\u003eParser a-\u003eParser a",
          "package": "multiarg",
          "signature": "Parser a-\u003eParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceeds if there is no more input left.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "end",
          "package": "multiarg",
          "signature": "Parser ()",
          "source": "src/System-Console-MultiArg-Prim.html#end",
          "type": "function"
        },
        "index": {
          "description": "Succeeds if there is no more input left",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "end",
          "normalized": "Parser()",
          "package": "multiarg",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an exact long option. That is, the text of the\n command-line option must exactly match the text of the\n option. Returns any argument that is attached to\n the same word of the option with an equal sign (for example,\n \u003ccode\u003e--follow=/dev/random\u003c/code\u003e will return \u003ccode\u003eJust \"/dev/random\"\u003c/code\u003e for the\n argument.) If there is no equal sign, returns Nothing for the\n argument. If there is an equal sign but there is nothing after it,\n returns \u003ccode\u003eJust \"\"\u003c/code\u003e for the argument.\n\u003c/p\u003e\u003cp\u003eIf you do not want your long option to have equal signs and\n GNU-style option arguments, wrap this parser in something that will\n fail if there is an option argument.\n\u003c/p\u003e\u003cp\u003eFails without consuming any input if:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e there are pending short options\n\u003c/li\u003e\u003cli\u003e a stopper has been parsed\n\u003c/li\u003e\u003cli\u003e there are no arguments left on the command line\n\u003c/li\u003e\u003cli\u003e the next argument on the command line does not begin with\n   two dashes\n\u003c/li\u003e\u003cli\u003e the next argument on the command line is \u003ccode\u003e--\u003c/code\u003e (a stopper)\n\u003c/li\u003e\u003cli\u003e the next argument on the command line does begin with two\n   dashes but its text does not match the argument we're looking for\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "exactLongOpt",
          "package": "multiarg",
          "signature": "LongOpt -\u003e Parser (Maybe String)",
          "source": "src/System-Console-MultiArg-Prim.html#exactLongOpt",
          "type": "function"
        },
        "index": {
          "description": "Parses an exact long option That is the text of the command-line option must exactly match the text of the option Returns any argument that is attached to the same word of the option with an equal sign for example follow dev random will return Just dev random for the argument If there is no equal sign returns Nothing for the argument If there is an equal sign but there is nothing after it returns Just for the argument If you do not want your long option to have equal signs and GNU-style option arguments wrap this parser in something that will fail if there is an option argument Fails without consuming any input if there are pending short options stopper has been parsed there are no arguments left on the command line the next argument on the command line does not begin with two dashes the next argument on the command line is stopper the next argument on the command line does begin with two dashes but its text does not match the argument we re looking for",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "exactLongOpt",
          "normalized": "LongOpt-\u003eParser(Maybe String)",
          "package": "multiarg",
          "partial": "Long Opt",
          "signature": "LongOpt-\u003eParser(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:exactLongOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efailString s\u003c/code\u003e always fails without consuming any input. The\n failure contains a record of the string passed in by s. This\n provides the implementation for \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "failString",
          "package": "multiarg",
          "signature": "String -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#failString",
          "type": "function"
        },
        "index": {
          "description": "failString always fails without consuming any input The failure contains record of the string passed in by This provides the implementation for fail",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "failString",
          "normalized": "String-\u003eParser a",
          "package": "multiarg",
          "partial": "String",
          "signature": "String-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:failString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with an unhelpful error message. Usually \u003ccode\u003ethrowString\u003c/code\u003e is\n more useful, but this is handy to implement some typeclass\n instances.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "genericThrow",
          "package": "multiarg",
          "signature": "Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#genericThrow",
          "type": "function"
        },
        "index": {
          "description": "Fail with an unhelpful error message Usually throwString is more useful but this is handy to implement some typeclass instances",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "genericThrow",
          "package": "multiarg",
          "partial": "Throw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:genericThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egood a\u003c/code\u003e always succeeds without consuming any input and has\n result a. This provides the implementation for\n \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "good",
          "package": "multiarg",
          "signature": "a -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#good",
          "type": "function"
        },
        "index": {
          "description": "good always succeeds without consuming any input and has result This provides the implementation for return and pure",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "good",
          "normalized": "a-\u003eParser a",
          "package": "multiarg",
          "signature": "a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:good"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookAhead p\u003c/code\u003e runs parser p. If p succeeds, lookAhead p succeeds\n without consuming any input. If p fails without consuming any\n input, so does lookAhead. If p fails and consumes input, lookAhead\n also fails and consumes input. If this is undesirable, combine with\n \u003ca\u003etry\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "lookAhead",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "lookAhead runs parser If succeeds lookAhead succeeds without consuming any input If fails without consuming any input so does lookAhead If fails and consumes input lookAhead also fails and consumes input If this is undesirable combine with try",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "lookAhead",
          "normalized": "Parser a-\u003eParser a",
          "package": "multiarg",
          "partial": "Ahead",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e runs parser p zero or more times until parser\n \u003ccode\u003eend\u003c/code\u003e succeeds. If \u003ccode\u003eend\u003c/code\u003e succeeds and consumes input, that input is\n also consumed. in the result of \u003ccode\u003emanyTill\u003c/code\u003e. If that is a problem,\n wrap it in \u003ccode\u003elookAhead\u003c/code\u003e. Also, if \u003ccode\u003eend\u003c/code\u003e fails and consumes input,\n \u003ccode\u003emanyTill\u003c/code\u003e fails and consumes input. If that is a problem, wrap\n \u003ccode\u003eend\u003c/code\u003e in \u003ccode\u003etry\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "manyTill",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser end -\u003e Parser [a]",
          "source": "src/System-Console-MultiArg-Prim.html#manyTill",
          "type": "function"
        },
        "index": {
          "description": "manyTill end runs parser zero or more times until parser end succeeds If end succeeds and consumes input that input is also consumed in the result of manyTill If that is problem wrap it in lookAhead Also if end fails and consumes input manyTill fails and consumes input If that is problem wrap end in try",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "manyTill",
          "normalized": "Parser a-\u003eParser b-\u003eParser[a]",
          "package": "multiarg",
          "partial": "Till",
          "signature": "Parser a-\u003eParser end-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines the possible words in Set. If there are no pendings,\n then get the next word and see if it matches one of the words in\n Set. If so, returns the word actually parsed and the matching word\n from Set. If there is no match, fails without consuming any\n input. Pays no attention to whether a stopper has been seen.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "matchApproxWord",
          "package": "multiarg",
          "signature": "Set String -\u003e Parser (String, String)",
          "source": "src/System-Console-MultiArg-Prim.html#matchApproxWord",
          "type": "function"
        },
        "index": {
          "description": "Examines the possible words in Set If there are no pendings then get the next word and see if it matches one of the words in Set If so returns the word actually parsed and the matching word from Set If there is no match fails without consuming any input Pays no attention to whether stopper has been seen",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "matchApproxWord",
          "normalized": "Set String-\u003eParser(String,String)",
          "package": "multiarg",
          "partial": "Approx Word",
          "signature": "Set String-\u003eParser(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:matchApproxWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the next string on the command line as long as there are\n no pendings. Succeeds even if a stopper is present. Be careful -\n this will return the next string even if it looks like an option\n (that is, it starts with a dash.) Consider whether you should be\n using nonOptionPosArg instead. However this can be useful when\n parsing command line options after a stopper.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "nextWord",
          "package": "multiarg",
          "signature": "Parser String",
          "source": "src/System-Console-MultiArg-Prim.html#nextWord",
          "type": "function"
        },
        "index": {
          "description": "Returns the next string on the command line as long as there are no pendings Succeeds even if stopper is present Be careful this will return the next string even if it looks like an option that is it starts with dash Consider whether you should be using nonOptionPosArg instead However this can be useful when parsing command line options after stopper",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "nextWord",
          "package": "multiarg",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:nextWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the next word on the command line, but only if it exactly\n matches the word given. Otherwise, fails without consuming any\n input. Also fails without consuming any input if there are pending\n short options or if a stopper has already been parsed. Does not pay\n any attention to whether a stopper is present.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "nextWordIs",
          "package": "multiarg",
          "signature": "String -\u003e Parser ()",
          "source": "src/System-Console-MultiArg-Prim.html#nextWordIs",
          "type": "function"
        },
        "index": {
          "description": "Parses the next word on the command line but only if it exactly matches the word given Otherwise fails without consuming any input Also fails without consuming any input if there are pending short options or if stopper has already been parsed Does not pay any attention to whether stopper is present",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "nextWordIs",
          "normalized": "String-\u003eParser()",
          "package": "multiarg",
          "partial": "Word Is",
          "signature": "String-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:nextWordIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there are pending short options, fails without consuming any input.\n\u003c/p\u003e\u003cp\u003eOtherwise, if a stopper has NOT already been parsed, then returns\n the next word if it is either a single dash or any other word that\n does not begin with a dash. If the next word does not meet these\n criteria, fails without consuming any input.\n\u003c/p\u003e\u003cp\u003eOtherwise, if a stopper has already been parsed, then returns the\n next word, regardless of whether it begins with a dash or not.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "nonOptionPosArg",
          "package": "multiarg",
          "signature": "Parser String",
          "source": "src/System-Console-MultiArg-Prim.html#nonOptionPosArg",
          "type": "function"
        },
        "index": {
          "description": "If there are pending short options fails without consuming any input Otherwise if stopper has NOT already been parsed then returns the next word if it is either single dash or any other word that does not begin with dash If the next word does not meet these criteria fails without consuming any input Otherwise if stopper has already been parsed then returns the next word regardless of whether it begins with dash or not",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "nonOptionPosArg",
          "package": "multiarg",
          "partial": "Option Pos Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:nonOptionPosArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only non-pending short options. Fails without consuming\n any input if:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e there are pending short options\n\u003c/li\u003e\u003cli\u003e there has already been a stopper\n\u003c/li\u003e\u003cli\u003e there are no arguments left to parse\n\u003c/li\u003e\u003cli\u003e the next argument is an empty string\n\u003c/li\u003e\u003cli\u003e the next argument does not begin with a dash\n\u003c/li\u003e\u003cli\u003e the next argument is a single dash\n\u003c/li\u003e\u003cli\u003e the next argument is a short option but it does not match\n   the one given\n\u003c/li\u003e\u003cli\u003e the next argument is a stopper\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOtherwise, consumes the next argument, puts any remaining letters\n from the argument into a pending short, and removes the first word\n from remaining arguments to be parsed.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "nonPendingShortOpt",
          "package": "multiarg",
          "signature": "ShortOpt -\u003e Parser ()",
          "source": "src/System-Console-MultiArg-Prim.html#nonPendingShortOpt",
          "type": "function"
        },
        "index": {
          "description": "Parses only non-pending short options Fails without consuming any input if there are pending short options there has already been stopper there are no arguments left to parse the next argument is an empty string the next argument does not begin with dash the next argument is single dash the next argument is short option but it does not match the one given the next argument is stopper Otherwise consumes the next argument puts any remaining letters from the argument into pending short and removes the first word from remaining arguments to be parsed",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "nonPendingShortOpt",
          "normalized": "ShortOpt-\u003eParser()",
          "package": "multiarg",
          "partial": "Pending Short Opt",
          "signature": "ShortOpt-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:nonPendingShortOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a parser. This is the only way to change a value of type\n \u003ccode\u003eParser a\u003c/code\u003e into a value of type \u003ccode\u003ea\u003c/code\u003e (that is, it is the only way to\n \"get out of the Parser monad\" or to \"escape the Parser monad\".)\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "parse",
          "package": "multiarg",
          "signature": "[String]-\u003e Parser a-\u003e Either Error a",
          "type": "function"
        },
        "index": {
          "description": "Runs parser This is the only way to change value of type Parser into value of type that is it is the only way to get out of the Parser monad or to escape the Parser monad",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "parse",
          "normalized": "[String]-\u003eParser a-\u003eEither Error a",
          "package": "multiarg",
          "signature": "[String]-\u003eParser a-\u003eEither Error a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only pending short options. Fails without consuming any\n input if there has already been a stopper or if there are no\n pending short options. Fails without consuming any input if there\n is a pending short option, but it does not match the short option\n given. Succeeds and consumes a pending short option if it matches\n the short option given.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "pendingShortOpt",
          "package": "multiarg",
          "signature": "ShortOpt -\u003e Parser ()",
          "source": "src/System-Console-MultiArg-Prim.html#pendingShortOpt",
          "type": "function"
        },
        "index": {
          "description": "Parses only pending short options Fails without consuming any input if there has already been stopper or if there are no pending short options Fails without consuming any input if there is pending short option but it does not match the short option given Succeeds and consumes pending short option if it matches the short option given",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "pendingShortOpt",
          "normalized": "ShortOpt-\u003eParser()",
          "package": "multiarg",
          "partial": "Short Opt",
          "signature": "ShortOpt-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:pendingShortOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only pending short option arguments. For example, for the\n \u003ccode\u003etail\u003c/code\u003e command, if you enter the option \u003ccode\u003e-c25\u003c/code\u003e, then after parsing\n the \u003ccode\u003e-c\u003c/code\u003e option the \u003ccode\u003e25\u003c/code\u003e becomes a pending short option argument\n because it was in the same command line argument as the \u003ccode\u003e-c\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFails without consuming any input if:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a stopper has already been parsed\n\u003c/li\u003e\u003cli\u003e there are no pending short option arguments\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn success, returns the String of the pending short option argument\n (this String will never be empty).\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "pendingShortOptArg",
          "package": "multiarg",
          "signature": "Parser String",
          "source": "src/System-Console-MultiArg-Prim.html#pendingShortOptArg",
          "type": "function"
        },
        "index": {
          "description": "Parses only pending short option arguments For example for the tail command if you enter the option c25 then after parsing the option the becomes pending short option argument because it was in the same command line argument as the Fails without consuming any input if stopper has already been parsed there are no pending short option arguments On success returns the String of the pending short option argument this String will never be empty",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "pendingShortOptArg",
          "package": "multiarg",
          "partial": "Short Opt Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:pendingShortOptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a stopper has already been seen, change the internal state\n back to indicating that no stopper has been seen.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "resetStopper",
          "package": "multiarg",
          "signature": "Parser ()",
          "source": "src/System-Console-MultiArg-Prim.html#resetStopper",
          "type": "function"
        },
        "index": {
          "description": "If stopper has already been seen change the internal state back to indicating that no stopper has been seen",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "resetStopper",
          "normalized": "Parser()",
          "package": "multiarg",
          "partial": "Stopper",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:resetStopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a parser zero or more times. If the last run of the parser\n fails without consuming any input, this parser succeeds without\n consuming any input. If the last run of the parser fails while\n consuming input, this parser fails while consuming input. This\n provides the implementation for \u003ccode\u003emany\u003c/code\u003e in Control.Applicative.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "several",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/System-Console-MultiArg-Prim.html#several",
          "type": "function"
        },
        "index": {
          "description": "Runs parser zero or more times If the last run of the parser fails without consuming any input this parser succeeds without consuming any input If the last run of the parser fails while consuming input this parser fails while consuming input This provides the implementation for many in Control.Applicative",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "several",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "multiarg",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:several"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a parser one or more times. Runs the parser once and then\n applies \u003ccode\u003e\u003ca\u003eseveral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "several1",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/System-Console-MultiArg-Prim.html#several1",
          "type": "function"
        },
        "index": {
          "description": "Runs parser one or more times Runs the parser once and then applies several",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "several1",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "multiarg",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:several1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \"stopper\" - that is, a double dash. Changes the internal\n state of the parser to reflect that a stopper has been seen.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "stopper",
          "package": "multiarg",
          "signature": "Parser ()",
          "source": "src/System-Console-MultiArg-Prim.html#stopper",
          "type": "function"
        },
        "index": {
          "description": "Parses stopper that is double dash Changes the internal state of the parser to reflect that stopper has been seen",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "stopper",
          "normalized": "Parser()",
          "package": "multiarg",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:stopper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry p behaves just like p, but if p fails, try p will not consume\n any input.\n\u003c/p\u003e",
          "module": "System.Console.MultiArg.Prim",
          "name": "try",
          "package": "multiarg",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/System-Console-MultiArg-Prim.html#try",
          "type": "function"
        },
        "index": {
          "description": "try behaves just like but if fails try will not consume any input",
          "hierarchy": "System Console MultiArg Prim",
          "module": "System.Console.MultiArg.Prim",
          "name": "try",
          "normalized": "Parser a-\u003eParser a",
          "package": "multiarg",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-Prim.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is sample code using \u003ca\u003eSystem.Console.MultiArg\u003c/a\u003e. This could\n be a command-line parser for the version of the Unix command \u003ccode\u003etail\u003c/code\u003e\n that is included with GNU coreutils version 8.5. \u003ca\u003emain\u003c/a\u003e simply gets\n the command line arguments, parses them, and prints out what was\n parsed. To test it out, simply compile an executable that looks\n like this and then feed it different options:\n\u003c/p\u003e\u003cpre\u003e import System.Console.MultiArg.SampleParser\n main = sampleMain Intersperse\n\u003c/pre\u003e\u003cp\u003eor:\n\u003c/p\u003e\u003cpre\u003e import System.Console.MultiArg.SampleParser\n main = sampleMain StopOptions\n\u003c/pre\u003e\u003cp\u003eThe code in the module is the sample code; the sample code is not\n in the Haddock documentation! If you're reading this in Haddock,\n you will want to also take a look at the actual source code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "SampleParser",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-SampleParser.html",
          "type": "module"
        },
        "index": {
          "description": "This is sample code using System.Console.MultiArg This could be command-line parser for the version of the Unix command tail that is included with GNU coreutils version main simply gets the command line arguments parses them and prints out what was parsed To test it out simply compile an executable that looks like this and then feed it different options import System.Console.MultiArg.SampleParser main sampleMain Intersperse or import System.Console.MultiArg.SampleParser main sampleMain StopOptions The code in the module is the sample code the sample code is not in the Haddock documentation If you re reading this in Haddock you will want to also take look at the actual source code",
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "SampleParser",
          "package": "multiarg",
          "partial": "Sample Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Flag",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Flag",
          "package": "multiarg",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Bytes",
          "package": "multiarg",
          "signature": "Bytes String",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Bytes",
          "package": "multiarg",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Filename",
          "package": "multiarg",
          "signature": "Filename String",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Filename",
          "package": "multiarg",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Follow",
          "package": "multiarg",
          "signature": "Follow (Maybe String)",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Follow",
          "package": "multiarg",
          "partial": "Follow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Follow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Help",
          "package": "multiarg",
          "signature": "Help",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Help",
          "package": "multiarg",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Lines",
          "package": "multiarg",
          "signature": "Lines String",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Lines",
          "package": "multiarg",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Pid",
          "package": "multiarg",
          "signature": "Pid String",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Pid",
          "package": "multiarg",
          "partial": "Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Pid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Quiet",
          "package": "multiarg",
          "signature": "Quiet",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Quiet",
          "package": "multiarg",
          "partial": "Quiet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Retry",
          "package": "multiarg",
          "signature": "Retry",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Retry",
          "package": "multiarg",
          "partial": "Retry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Sleep",
          "package": "multiarg",
          "signature": "Sleep String",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Sleep",
          "package": "multiarg",
          "partial": "Sleep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Stats",
          "package": "multiarg",
          "signature": "Stats String",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Stats",
          "package": "multiarg",
          "partial": "Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Verbose",
          "package": "multiarg",
          "signature": "Verbose",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Verbose",
          "package": "multiarg",
          "partial": "Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Version",
          "package": "multiarg",
          "signature": "Version",
          "source": "src/System-Console-MultiArg-SampleParser.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "Version",
          "package": "multiarg",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "sampleMain",
          "package": "multiarg",
          "signature": "Intersperse -\u003e IO ()",
          "source": "src/System-Console-MultiArg-SampleParser.html#sampleMain",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "sampleMain",
          "normalized": "Intersperse-\u003eIO()",
          "package": "multiarg",
          "partial": "Main",
          "signature": "Intersperse-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:sampleMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.MultiArg.SampleParser",
          "name": "specs",
          "package": "multiarg",
          "signature": "[OptSpec Flag]",
          "source": "src/System-Console-MultiArg-SampleParser.html#specs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console MultiArg SampleParser",
          "module": "System.Console.MultiArg.SampleParser",
          "name": "specs",
          "normalized": "[OptSpec Flag]",
          "package": "multiarg",
          "signature": "[OptSpec Flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg-SampleParser.html#v:specs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA combinator library for building command-line parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.MultiArg",
          "name": "MultiArg",
          "package": "multiarg",
          "source": "src/System-Console-MultiArg.html",
          "type": "module"
        },
        "index": {
          "description": "combinator library for building command-line parsers",
          "hierarchy": "System Console MultiArg",
          "module": "System.Console.MultiArg",
          "name": "MultiArg",
          "package": "multiarg",
          "partial": "Multi Arg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/multiarg/docs/System-Console-MultiArg.html#"
      }
    }
  ]
]