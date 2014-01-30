[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for setting up a commandline parser and help generator for an\n application. It aims for conciseness, flexibility and composability. It\n supports both non-modal and modal (with subcommands -- like darcs, cabal and\n the like) applications.\n\u003c/p\u003e\u003cp\u003eThe library supports two main styles of representing flags and\n commands. These are called \u003ca\u003eRecord\u003c/a\u003e and \u003ca\u003eADT\u003c/a\u003e, respectively, by the\n library. The Record representation is more straightforward and easier to use\n in most instances. The ADT interface is suitable for applications that\n require exact correspondence between the commandline and its runtime\n representation, or when an existing application is being ported to cmdlib\n that is using this style to represent flags.\n\u003c/p\u003e\u003cp\u003eUsing the Record-based interface, a simple Hello World application could\n look like this:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE FlexibleInstances, MultiParamTypeClasses, DeriveDataTypeable #-}\n import System.Console.CmdLib\n import Control.Monad\n\n data Main = Main { greeting :: String, again :: Bool }\n     deriving (Typeable, Data, Eq)\n\n instance Attributes Main where\n     attributes _ = group \"Options\" [\n         greeting %\u003e [ Help \"The text of the greeting.\", ArgHelp \"TEXT\"\n                     , Default \"Hello world!\" ],\n         again    %\u003e Help \"Say hello twice.\" ]\n\n instance RecordCommand Main where\n     mode_summary _ = \"Hello world with argument parsing.\"\n\n main = getArgs \u003e\u003e= executeR Main {} \u003e\u003e= \\opts -\u003e do\n   putStrLn (greeting opts)\n\u003c/pre\u003e\u003cp\u003eThen, saying ./hello --help will give us:\n\u003c/p\u003e\u003cpre\u003e Hello world with argument parsing.\n\n Options:\n     --greeting=TEXT   The text of the greeting. (default: Hello world!)\n     --again[=yes|no]  Say hello twice. (default: no)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "module",
        "fct-source": "src/System-Console-CmdLib.html",
        "fct-type": "module",
        "title": "CmdLib"
      },
      "index": {
        "description": "library for setting up commandline parser and help generator for an application It aims for conciseness flexibility and composability It supports both non-modal and modal with subcommands like darcs cabal and the like applications The library supports two main styles of representing flags and commands These are called Record and ADT respectively by the library The Record representation is more straightforward and easier to use in most instances The ADT interface is suitable for applications that require exact correspondence between the commandline and its runtime representation or when an existing application is being ported to cmdlib that is using this style to represent flags Using the Record-based interface simple Hello World application could look like this LANGUAGE FlexibleInstances MultiParamTypeClasses DeriveDataTypeable import System.Console.CmdLib import Control.Monad data Main Main greeting String again Bool deriving Typeable Data Eq instance Attributes Main where attributes group Options greeting Help The text of the greeting ArgHelp TEXT Default Hello world again Help Say hello twice instance RecordCommand Main where mode summary Hello world with argument parsing main getArgs executeR Main opts do putStrLn greeting opts Then saying hello help will give us Hello world with argument parsing Options greeting TEXT The text of the greeting default Hello world again yes no Say hello twice default no",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "CmdLib",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Cmd Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:ADT",
      "description": {
        "fct-descr": "\u003cp\u003eThe ADT wrapper type allows use of classic ADTs (algebraic data types) for\n flag representation. The flags are then passed to the command as a list of\n values of this type. However, you need to make the type an instance of the\n Attributes first (if you do not wish to attach any attributes, you may keep\n the instance body empty). E.g.:\n\u003c/p\u003e\u003cpre\u003e data Flag = Simplify | Wibblify Int\n instance Attributes where\n     attributes _ = Wibblify %\u003e Help \"Add a wibblification pass.\" %+ ArgHelp \"intensity\" %%\n                    Simplify %\u003e Help \"Enable a two-pass simplifier.\"\n\u003c/pre\u003e\u003cp\u003eThe \u003ca\u003eCommand\u003c/a\u003e instances should then use \u003ccode\u003e(ADT Flag)\u003c/code\u003e for their second type\n parameter (the flag type).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdLib-ADTs.html#ADT",
        "fct-type": "data",
        "title": "ADT"
      },
      "index": {
        "description": "The ADT wrapper type allows use of classic ADTs algebraic data types for flag representation The flags are then passed to the command as list of values of this type However you need to make the type an instance of the Attributes first if you do not wish to attach any attributes you may keep the instance body empty E.g data Flag Simplify Wibblify Int instance Attributes where attributes Wibblify Help Add wibblification pass ArgHelp intensity Simplify Help Enable two-pass simplifier The Command instances should then use ADT Flag for their second type parameter the flag type",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "ADT",
        "normalized": "",
        "package": "cmdlib",
        "partial": "ADT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:Attribute",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "data",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Attribute",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:Attributes",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "class",
        "fct-source": "src/System-Console-CmdLib-Flag.html#Attributes",
        "fct-type": "class",
        "title": "Attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Attributes",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:Command",
      "description": {
        "fct-descr": "\u003cp\u003eA class that describes a single (sub)command. The \u003ccode\u003ecmd\u003c/code\u003e type parameter is\n just for dispatch (and the default command name is derived from this type's\n name, but this can be overriden). It could be an empty data decl as far as\n this library is concerned, although you may choose to store information in\n it.\n\u003c/p\u003e\u003cp\u003eTo parse the commandline for a given command, see \u003ca\u003eexecute\u003c/a\u003e. The basic usage\n can look something like this:\n\u003c/p\u003e\u003cpre\u003e data Flag = Summary | Unified Bool | LookForAdds Bool\n instance ADTFlag Flag\n\n [...]\n\n data Whatsnew = Whatsnew deriving Typeable\n\n instance Command Whatsnew (ADT Flag) where\n  options _ =  enable \u003c% Summary +% Unified +% LookForAdds\n  summary _ = \"Create a patch from unrecorded changes.\"\n\n  run _ f opts = do putStrLn $ \"Record.\"\n                    putStrLn $ \"Options: \" ++ show f\n                    putStrLn $ \"Non-options: \" ++ show opts\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "class",
        "fct-source": "src/System-Console-CmdLib-Command.html#Command",
        "fct-type": "class",
        "title": "Command"
      },
      "index": {
        "description": "class that describes single sub command The cmd type parameter is just for dispatch and the default command name is derived from this type name but this can be overriden It could be an empty data decl as far as this library is concerned although you may choose to store information in it To parse the commandline for given command see execute The basic usage can look something like this data Flag Summary Unified Bool LookForAdds Bool instance ADTFlag Flag data Whatsnew Whatsnew deriving Typeable instance Command Whatsnew ADT Flag where options enable Summary Unified LookForAdds summary Create patch from unrecorded changes run opts do putStrLn Record putStrLn Options show putStrLn Non-options show opts",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Command",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:CommandWrap",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdLib-Command.html#CommandWrap",
        "fct-type": "data",
        "title": "CommandWrap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "CommandWrap",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Command Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:Data",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class comprehends a fundamental primitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e for\nfolding over constructor applications, say terms. This primitive can\nbe instantiated in several ways to map over the immediate subterms\nof a term; see the \u003ccode\u003egmap\u003c/code\u003e combinators later in this class.  Indeed, a\ngeneric programmer does not necessarily need to use the ingenious gfoldl\nprimitive but rather the intuitive \u003ccode\u003egmap\u003c/code\u003e combinators.  The \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e\nprimitive is completed by means to query top-level constructors, to\nturn constructor representations into proper terms, and to list all\npossible datatype constructors.  This completion allows us to serve\ngeneric programming scenarios like read, show, equality, term generation.\n\u003c/p\u003e\u003cp\u003eThe combinators \u003ccode\u003e\u003ca\u003egmapT\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapQ\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egmapM\u003c/a\u003e\u003c/code\u003e, etc are all provided with\ndefault definitions in terms of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e, leaving open the opportunity\nto provide datatype-specific definitions.\n(The inclusion of the \u003ccode\u003egmap\u003c/code\u003e combinators as members of class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e\nallows the programmer or the compiler to derive specialised, and maybe\nmore efficient code per datatype.  \u003cem\u003eNote\u003c/em\u003e: \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is more higher-order\nthan the \u003ccode\u003egmap\u003c/code\u003e combinators.  This is subject to ongoing benchmarking\nexperiments.  It might turn out that the \u003ccode\u003egmap\u003c/code\u003e combinators will be\nmoved out of the class \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eConceptually, the definition of the \u003ccode\u003egmap\u003c/code\u003e combinators in terms of the\nprimitive \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e requires the identification of the \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e function\narguments.  Technically, we also need to identify the type constructor\n\u003ccode\u003ec\u003c/code\u003e for the construction of the result type from the folded term type.\n\u003c/p\u003e\u003cp\u003eIn the definition of \u003ccode\u003egmapQ\u003c/code\u003e\u003cem\u003ex\u003c/em\u003e combinators, we use phantom type\nconstructors for the \u003ccode\u003ec\u003c/code\u003e in the type of \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e because the result type\nof a query does not involve the (polymorphic) type of the term argument.\nIn the definition of \u003ccode\u003e\u003ca\u003egmapQl\u003c/a\u003e\u003c/code\u003e we simply use the plain constant type\nconstructor because \u003ccode\u003e\u003ca\u003egfoldl\u003c/a\u003e\u003c/code\u003e is left-associative anyway and so it is\nreadily suited to fold a left-associative binary operation over the\nimmediate subterms.  In the definition of gmapQr, extra effort is\nneeded. We use a higher-order accumulation trick to mediate between\nleft-associative constructor application vs. right-associative binary\noperation (e.g., \u003ccode\u003e(:)\u003c/code\u003e).  When the query is meant to compute a value\nof type \u003ccode\u003er\u003c/code\u003e, then the result type withing generic folding is \u003ccode\u003er -\u003e r\u003c/code\u003e.\nSo the result of folding is a function to which we finally pass the\nright unit.\n\u003c/p\u003e\u003cp\u003eWith the \u003ccode\u003e-XDeriveDataTypeable\u003c/code\u003e option, GHC can generate instances of the\n\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e class automatically.  For example, given the declaration\n\u003c/p\u003e\u003cpre\u003e data T a b = C1 a b | C2 deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003eGHC will generate an instance that is equivalent to\n\u003c/p\u003e\u003cpre\u003e instance (Data a, Data b) =\u003e Data (T a b) where\n     gfoldl k z (C1 a b) = z C1 `k` a `k` b\n     gfoldl k z C2       = z C2\n\n     gunfold k z c = case constrIndex c of\n                         1 -\u003e k (k (z C1))\n                         2 -\u003e z C2\n\n     toConstr (C1 _ _) = con_C1\n     toConstr C2       = con_C2\n\n     dataTypeOf _ = ty_T\n\n con_C1 = mkConstr ty_T \"C1\" [] Prefix\n con_C2 = mkConstr ty_T \"C2\" [] Prefix\n ty_T   = mkDataType \"Module.T\" [con_C1, con_C2]\n\u003c/pre\u003e\u003cp\u003eThis is suitable for datatypes that are exported transparently.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Data"
      },
      "index": {
        "description": "The Data class comprehends fundamental primitive gfoldl for folding over constructor applications say terms This primitive can be instantiated in several ways to map over the immediate subterms of term see the gmap combinators later in this class Indeed generic programmer does not necessarily need to use the ingenious gfoldl primitive but rather the intuitive gmap combinators The gfoldl primitive is completed by means to query top-level constructors to turn constructor representations into proper terms and to list all possible datatype constructors This completion allows us to serve generic programming scenarios like read show equality term generation The combinators gmapT gmapQ gmapM etc are all provided with default definitions in terms of gfoldl leaving open the opportunity to provide datatype-specific definitions The inclusion of the gmap combinators as members of class Data allows the programmer or the compiler to derive specialised and maybe more efficient code per datatype Note gfoldl is more higher-order than the gmap combinators This is subject to ongoing benchmarking experiments It might turn out that the gmap combinators will be moved out of the class Data Conceptually the definition of the gmap combinators in terms of the primitive gfoldl requires the identification of the gfoldl function arguments Technically we also need to identify the type constructor for the construction of the result type from the folded term type In the definition of gmapQ combinators we use phantom type constructors for the in the type of gfoldl because the result type of query does not involve the polymorphic type of the term argument In the definition of gmapQl we simply use the plain constant type constructor because gfoldl is left-associative anyway and so it is readily suited to fold left-associative binary operation over the immediate subterms In the definition of gmapQr extra effort is needed We use higher-order accumulation trick to mediate between left-associative constructor application vs right-associative binary operation e.g When the query is meant to compute value of type then the result type withing generic folding is So the result of folding is function to which we finally pass the right unit With the XDeriveDataTypeable option GHC can generate instances of the Data class automatically For example given the declaration data C1 C2 deriving Typeable Data GHC will generate an instance that is equivalent to instance Data Data Data where gfoldl C1 C1 gfoldl C2 C2 gunfold case constrIndex of C1 C2 toConstr C1 con C1 toConstr C2 con C2 dataTypeOf ty con C1 mkConstr ty C1 Prefix con C2 mkConstr ty C2 Prefix ty mkDataType Module.T con C1 con C2 This is suitable for datatypes that are exported transparently",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Data",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:HelpCommand",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdLib-Command.html#HelpCommand",
        "fct-type": "data",
        "title": "HelpCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "HelpCommand",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Help Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:OptionStyle",
      "description": {
        "fct-descr": "\u003cp\u003eHow to process options for a command. See \u003ca\u003eoptionStyle\u003c/a\u003e for details.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdLib-Command.html#OptionStyle",
        "fct-type": "data",
        "title": "OptionStyle"
      },
      "index": {
        "description": "How to process options for command See optionStyle for details",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "OptionStyle",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Option Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eThis wrapper type allows use of record types (single or multi-constructor)\n for handling flags. Each field of the record is made into a single flag of\n the corresponding type. The record needs to be made an instance of the\n \u003ca\u003eAttributes\u003c/a\u003e class. That way, attributes can be attached to the field\n selectors, although when used with RecordCommand, its \u003ca\u003erec_options\u003c/a\u003e method\n can be used as well and the Attributes instance left empty.\n\u003c/p\u003e\u003cpre\u003e data Flags = Flags { wibblify :: Int, simplify :: Bool }\n instance Attributes Flags where\n     attributes _ =\n        wibblify %\u003e Help \"Add a wibblification pass.\" %+ ArgHelp \"intensity\" %%\n        simplify %\u003e Help \"Enable a two-pass simplifier.\"\n\u003c/pre\u003e\u003cp\u003eA single value of the Flags type will then be passed to the \u003ca\u003eCommand\u003c/a\u003e\n instances (those that use \u003ccode\u003eRecord Flags\u003c/code\u003e as their second type parameter),\n containing the value of the rightmost occurence for each of the flags.\n\u003c/p\u003e\u003cp\u003eTODO: List-based option types should be accumulated instead of overriden.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "data",
        "fct-source": "src/System-Console-CmdLib-Record.html#Record",
        "fct-type": "data",
        "title": "Record"
      },
      "index": {
        "description": "This wrapper type allows use of record types single or multi-constructor for handling flags Each field of the record is made into single flag of the corresponding type The record needs to be made an instance of the Attributes class That way attributes can be attached to the field selectors although when used with RecordCommand its rec options method can be used as well and the Attributes instance left empty data Flags Flags wibblify Int simplify Bool instance Attributes Flags where attributes wibblify Help Add wibblification pass ArgHelp intensity simplify Help Enable two-pass simplifier single value of the Flags type will then be passed to the Command instances those that use Record Flags as their second type parameter containing the value of the rightmost occurence for each of the flags TODO List-based option types should be accumulated instead of overriden",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Record",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:RecordCommand",
      "description": {
        "fct-descr": "\u003cp\u003eA bridge that allows multi-constructor record types to be used as a\n description of a command set. In such a type, each constructor corresponds\n to a single command and its fields to its options. To describe a program\n with two commands, \u003ccode\u003efoo\u003c/code\u003e and \u003ccode\u003ebar\u003c/code\u003e, each taking a \u003ccode\u003e--wibble\u003c/code\u003e boolean option\n and \u003ccode\u003ebar\u003c/code\u003e also taking a \u003ccode\u003e--text=\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e option, you can write:\n\u003c/p\u003e\u003cpre\u003e data Commands = Foo { wibble :: Bool }\n               | Bar { wibble :: Bool, text :: String }\n\n instance RecordCommand Commands where (...)\n\u003c/pre\u003e\u003cp\u003eYou should at least implement \u003ccode\u003erun'\u003c/code\u003e, \u003ccode\u003erec_options\u003c/code\u003e and \u003ccode\u003emode_summary\u003c/code\u003e are optional.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "class",
        "fct-source": "src/System-Console-CmdLib-Record.html#RecordCommand",
        "fct-type": "class",
        "title": "RecordCommand"
      },
      "index": {
        "description": "bridge that allows multi-constructor record types to be used as description of command set In such type each constructor corresponds to single command and its fields to its options To describe program with two commands foo and bar each taking wibble boolean option and bar also taking text string option you can write data Commands Foo wibble Bool Bar wibble Bool text String instance RecordCommand Commands where You should at least implement run rec options and mode summary are optional",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "RecordCommand",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Record Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Typeable",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-37--37-",
      "description": {
        "fct-descr": "\u003cp\u003eJoin attribute mappings. E.g. \u003ccode\u003eKey1 %\u003e Attr1 %+ Attr2 %% Key2 %\u003e Attr3 %+\n Attr4\u003c/code\u003e. Also possible is \u003ccode\u003e[ Key1 %\u003e Attr1, Key2 %\u003e Attr2 ] %% Key3 %\u003e\n Attr3\u003c/code\u003e, or many other variations.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e b -\u003e AttributeMap k",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#%25%25",
        "fct-type": "function",
        "title": "(%%)"
      },
      "index": {
        "description": "Join attribute mappings E.g Key1 Attr1 Attr2 Key2 Attr3 Attr4 Also possible is Key1 Attr1 Key2 Attr2 Key3 Attr3 or many other variations",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(%%) %%",
        "normalized": "a-\u003eb-\u003eAttributeMap c",
        "package": "cmdlib",
        "partial": "",
        "signature": "a-\u003eb-\u003eAttributeMap k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-37--43-",
      "description": {
        "fct-descr": "\u003cp\u003eJoin multiple attributes into a list. Available for convenience (using\n [Attribute] directly works just as well if preferred, although this is not\n the case with keys, see \u003ccode\u003e\u003ca\u003e+%\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e b -\u003e [Attribute]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#%25%2B",
        "fct-type": "function",
        "title": "(%+)"
      },
      "index": {
        "description": "Join multiple attributes into list Available for convenience using Attribute directly works just as well if preferred although this is not the case with keys see",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(%+) %+",
        "normalized": "a-\u003eb-\u003e[Attribute]",
        "package": "cmdlib",
        "partial": "",
        "signature": "a-\u003eb-\u003e[Attribute]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-37--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAttach a (list of) attributes to a key. The key is usually either an ADT\n constructor (for use with \u003ca\u003eADTFlag\u003c/a\u003e-style flags) or a record selector (for\n use with \u003ca\u003eRecordFlag\u003c/a\u003es).\n\u003c/p\u003e\u003cpre\u003e data RFlags = Flags { wibblify :: Int, simplify :: Bool }\n data AFlag = Simplify | Wibblify Int\n rattr = wibblify %\u003e Help \"Add a wibblification pass.\" (%% ...)\n aattr = Wibblify %\u003e Help \"Add a wibblification pass.\" (%% ...)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e%+\u003c/a\u003e\u003c/code\u003e can be used to chain multiple attributes:\n\u003c/p\u003e\u003cpre\u003e attrs = wibblify %\u003e Help \"some help\" %+ Default (3 :: Int) %+ ArgHelp \"intensity\"\n\u003c/pre\u003e\u003cp\u003eBut lists work just as fine:\n\u003c/p\u003e\u003cpre\u003e attrs = wibblify %\u003e [ Help \"some help\", Default (3 :: Int), ArgHelp \"intensity\" ]\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "k -\u003e attr -\u003e AttributeMap Key",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#%25%3E",
        "fct-type": "function",
        "title": "(%\u003e)"
      },
      "index": {
        "description": "Attach list of attributes to key The key is usually either an ADT constructor for use with ADTFlag style flags or record selector for use with RecordFlag data RFlags Flags wibblify Int simplify Bool data AFlag Simplify Wibblify Int rattr wibblify Help Add wibblification pass aattr Wibblify Help Add wibblification pass can be used to chain multiple attributes attrs wibblify Help some help Default Int ArgHelp intensity But lists work just as fine attrs wibblify Help some help Default Int ArgHelp intensity",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(%\u003e) %\u003e",
        "normalized": "a-\u003eb-\u003eAttributeMap Key",
        "package": "cmdlib",
        "partial": "",
        "signature": "k-\u003eattr-\u003eAttributeMap Key"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-37-:",
      "description": {
        "fct-descr": "\u003cp\u003eChain commands into a list suitable for \u003ca\u003edispatch\u003c/a\u003e and \u003ca\u003ehelpCommands\u003c/a\u003e. E.g.:\n\u003c/p\u003e\u003cpre\u003e dispatch (Command1 %: Command2 %: Command3) opts\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e b -\u003e [CommandWrap]",
        "fct-source": "src/System-Console-CmdLib-Command.html#%25%3A",
        "fct-type": "function",
        "title": "(%:)"
      },
      "index": {
        "description": "Chain commands into list suitable for dispatch and helpCommands E.g dispatch Command1 Command2 Command3 opts",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(%:) %:",
        "normalized": "a-\u003eb-\u003e[CommandWrap]",
        "package": "cmdlib",
        "partial": "",
        "signature": "a-\u003eb-\u003e[CommandWrap]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-43--37-",
      "description": {
        "fct-descr": "\u003cp\u003eJoin multiple keys into a list, e.g. \u003ccode\u003eKey1 +% Key2\u003c/code\u003e. Useful with \u003ccode\u003e\u003ca\u003e\u003c%\u003c/a\u003e\u003c/code\u003e to\n list multiple (possibly heterogenously-typed) keys.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e b -\u003e [Key]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#%2B%25",
        "fct-type": "function",
        "title": "(+%)"
      },
      "index": {
        "description": "Join multiple keys into list e.g Key1 Key2 Useful with to list multiple possibly heterogenously-typed keys",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(+%) +%",
        "normalized": "a-\u003eb-\u003e[Key]",
        "package": "cmdlib",
        "partial": "",
        "signature": "a-\u003eb-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-60--37-",
      "description": {
        "fct-descr": "\u003cp\u003eAttach an attribute to multiple keys: written from right to left,\n i.e. \u003ccode\u003eAttribute \u003c% Key1 +% Key2\u003c/code\u003e. Useful for setting up option groups\n (although using \u003ca\u003egroup\u003c/a\u003e may be more convenient in this case) and option\n enablement.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Attribute -\u003e keys -\u003e AttributeMap Key",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#%3C%25",
        "fct-type": "function",
        "title": "(\u003c%)"
      },
      "index": {
        "description": "Attach an attribute to multiple keys written from right to left i.e Attribute Key1 Key2 Useful for setting up option groups although using group may be more convenient in this case and option enablement",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(\u003c%) \u003c%",
        "normalized": "Attribute-\u003ea-\u003eAttributeMap Key",
        "package": "cmdlib",
        "partial": "",
        "signature": "Attribute-\u003ekeys-\u003eAttributeMap Key"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:-60--43--60-",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/System-Console-CmdLib-Flag.html#%3C%2B%3C",
        "fct-type": "function",
        "title": "(\u003c+\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "(\u003c+\u003c) \u003c+\u003c",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "cmdlib",
        "partial": "",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:ArgHelp",
      "description": {
        "fct-descr": "\u003cp\u003eSet the help string for an argument, the \u003ccode\u003eFOO\u003c/code\u003e in \u003ccode\u003e--wibblify=FOO\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "ArgHelp String",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "ArgHelp"
      },
      "index": {
        "description": "Set the help string for an argument the FOO in wibblify FOO",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "ArgHelp",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Arg Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Default",
      "description": {
        "fct-descr": "\u003cp\u003eSet default value for this option. The default is only applied when its\n type matches the option's parameter type, otherwise it is ignored.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Default a",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Default"
      },
      "index": {
        "description": "Set default value for this option The default is only applied when its type matches the option parameter type otherwise it is ignored",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Default",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Enabled",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the option is enabled. Disabled options are not recognized and\n are not shown in help (effectively, they do not exist). Used to enable a\n subset of all available options for a given command. For Record-based\n commands (see \u003ca\u003eRecordCommand\u003c/a\u003e), this is handled automatically based on\n fields available in the command's constructor. Otherwise, constructs like\n\u003c/p\u003e\u003cpre\u003e enable \u003c% option1 +% option2 +% option3 %% disable \u003c% option4\n\u003c/pre\u003e\u003cp\u003emay be quite useful.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Enabled Bool",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Enabled"
      },
      "index": {
        "description": "Whether the option is enabled Disabled options are not recognized and are not shown in help effectively they do not exist Used to enable subset of all available options for given command For Record-based commands see RecordCommand this is handled automatically based on fields available in the command constructor Otherwise constructs like enable option1 option2 option3 disable option4 may be quite useful",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Enabled",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Extra",
      "description": {
        "fct-descr": "\u003cp\u003eWhen True, this option will contain the list of non-option arguments\n passed to the command. Only applicable to [String]-typed options. Options\n marked extra will not show up in help and neither will they be recognized\n by their name on commandline.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Extra Bool",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Extra"
      },
      "index": {
        "description": "When True this option will contain the list of non-option arguments passed to the command Only applicable to String typed options Options marked extra will not show up in help and neither will they be recognized by their name on commandline",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Extra",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Global",
      "description": {
        "fct-descr": "\u003cp\u003eWhen this attribute is given, the flag's value will be passed to the\n provided IO action (which would presumably record the flag's value in a\n global IORef for later use). Like with Default, the attribute is only\n effective if the parameter type of the provided function matches the\n parameter type of the option to which the attribute is applied.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Global (a -\u003e IO ())",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Global"
      },
      "index": {
        "description": "When this attribute is given the flag value will be passed to the provided IO action which would presumably record the flag value in global IORef for later use Like with Default the attribute is only effective if the parameter type of the provided function matches the parameter type of the option to which the attribute is applied",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Global",
        "normalized": "Global(a-\u003eIO())",
        "package": "cmdlib",
        "partial": "Global",
        "signature": "Global(a-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Group",
      "description": {
        "fct-descr": "\u003cp\u003eSet the group name for this option. The groups are used to section the\n help output (the options of a given group are shown together, under the\n heading of the group). The ordering of the groups is given by the first\n flag of each group. Flags themselves are in the order in which they are\n given in the ADT or Record in question.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Group String",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Group"
      },
      "index": {
        "description": "Set the group name for this option The groups are used to section the help output the options of given group are shown together under the heading of the group The ordering of the groups is given by the first flag of each group Flags themselves are in the order in which they are given in the ADT or Record in question",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Group",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Help",
      "description": {
        "fct-descr": "\u003cp\u003eSet help string (one-line summary) for an option. Displayed in help.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Help String",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Help"
      },
      "index": {
        "description": "Set help string one-line summary for an option Displayed in help",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Help",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:HelpCommand",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "HelpCommand [CommandWrap]",
        "fct-source": "src/System-Console-CmdLib-Command.html#HelpCommand",
        "fct-type": "function",
        "title": "HelpCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "HelpCommand",
        "normalized": "HelpCommand[CommandWrap]",
        "package": "cmdlib",
        "partial": "Help Command",
        "signature": "HelpCommand[CommandWrap]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:InvLong",
      "description": {
        "fct-descr": "\u003cp\u003eSet a list of long flags for an inversion of the option. Only used for\n boolean invertible options. See also \u003ca\u003elong\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "InvLong [String]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "InvLong"
      },
      "index": {
        "description": "Set list of long flags for an inversion of the option Only used for boolean invertible options See also long",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "InvLong",
        "normalized": "InvLong[String]",
        "package": "cmdlib",
        "partial": "Inv Long",
        "signature": "InvLong[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Invertible",
      "description": {
        "fct-descr": "\u003cp\u003eWhether this option is invertible. Only applies to boolean options and\n defaults to True. (Invertible means that for --foo, there are --no-foo and\n --foo=no alternatives. A non-invertible option will only create --foo.)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Invertible Bool",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Invertible"
      },
      "index": {
        "description": "Whether this option is invertible Only applies to boolean options and defaults to True Invertible means that for foo there are no-foo and foo no alternatives non-invertible option will only create foo",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Invertible",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Invertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Long",
      "description": {
        "fct-descr": "\u003cp\u003eSet a list of long flags for an option.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Long [String]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Long"
      },
      "index": {
        "description": "Set list of long flags for an option",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Long",
        "normalized": "Long[String]",
        "package": "cmdlib",
        "partial": "Long",
        "signature": "Long[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:NoOptions",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "NoOptions",
        "fct-source": "src/System-Console-CmdLib-Command.html#OptionStyle",
        "fct-type": "function",
        "title": "NoOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "NoOptions",
        "normalized": "",
        "package": "cmdlib",
        "partial": "No Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:NonPermuted",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "NonPermuted",
        "fct-source": "src/System-Console-CmdLib-Command.html#OptionStyle",
        "fct-type": "function",
        "title": "NonPermuted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "NonPermuted",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Non Permuted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Permuted",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Permuted",
        "fct-source": "src/System-Console-CmdLib-Command.html#OptionStyle",
        "fct-type": "function",
        "title": "Permuted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Permuted",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Permuted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Positional",
      "description": {
        "fct-descr": "\u003cp\u003eWhen set, this option will not show up on help and won't create a flag\n (similar to Extra), but instead it will contain the n-th non-option\n argument. The argument used up by such a positional option will not show\n up in the list of non-option arguments.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Positional Int",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Positional"
      },
      "index": {
        "description": "When set this option will not show up on help and won create flag similar to Extra but instead it will contain the n-th non-option argument The argument used up by such positional option will not show up in the list of non-option arguments",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Positional",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Positional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Required",
      "description": {
        "fct-descr": "\u003cp\u003eWhen True, this option will require that the argument must be provided.\n If the argument is also Positional, any preceeding Positional arguments\n should also be Required.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Required Bool",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "When True this option will require that the argument must be provided If the argument is also Positional any preceeding Positional arguments should also be Required",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Required",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:Short",
      "description": {
        "fct-descr": "\u003cp\u003eSet a list of short flags (single character per flag, like in \u003ccode\u003e-c\u003c/code\u003e,\n \u003ccode\u003e-h\u003c/code\u003e) for an option. Without the leading \u003ccode\u003e-\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Short [Char]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#Attribute",
        "fct-type": "function",
        "title": "Short"
      },
      "index": {
        "description": "Set list of short flags single character per flag like in for an option Without the leading",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "Short",
        "normalized": "Short[Char]",
        "package": "cmdlib",
        "partial": "Short",
        "signature": "Short[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:attributes",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e AttributeMap Key",
        "fct-source": "src/System-Console-CmdLib-Flag.html#attributes",
        "fct-type": "method",
        "title": "attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "attributes",
        "normalized": "a-\u003eAttributeMap Key",
        "package": "cmdlib",
        "partial": "",
        "signature": "a-\u003eAttributeMap Key"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:cmd",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience \u003ca\u003eundefined\u003c/a\u003e of the command, for use with \u003ca\u003eCommands\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd",
        "fct-source": "src/System-Console-CmdLib-Command.html#cmd",
        "fct-type": "method",
        "title": "cmd"
      },
      "index": {
        "description": "convenience undefined of the command for use with Commands",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "cmd",
        "normalized": "",
        "package": "cmdlib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:cmd_flag_defaults",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e (flag -\u003e [Attribute]) -\u003e Folded flag",
        "fct-source": "src/System-Console-CmdLib-Command.html#cmd_flag_defaults",
        "fct-type": "method",
        "title": "cmd_flag_defaults"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "cmd_flag_defaults",
        "normalized": "a-\u003e(b-\u003e[Attribute])-\u003eFolded b",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003e(flag-\u003e[Attribute])-\u003eFolded flag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:cmdname",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the command. Normally derived automatically from \u003ccode\u003ecmd\u003c/code\u003e, but\n may be overriden.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Command.html#cmdname",
        "fct-type": "method",
        "title": "cmdname"
      },
      "index": {
        "description": "The name of the command Normally derived automatically from cmd but may be overriden",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "cmdname",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:commandGroup",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "String -\u003e a -\u003e [CommandWrap]",
        "fct-source": "src/System-Console-CmdLib-Command.html#commandGroup",
        "fct-type": "function",
        "title": "commandGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "commandGroup",
        "normalized": "String-\u003ea-\u003e[CommandWrap]",
        "package": "cmdlib",
        "partial": "Group",
        "signature": "String-\u003ea-\u003e[CommandWrap]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:commandNames",
      "description": {
        "fct-descr": "\u003cp\u003eThis could be used to implement a disambiguation function\n\u003c/p\u003e\u003cp\u003eNote that there isn't presently a notion of hidden commands,\n but we're taking them into account now for future API stability\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Bool-\u003e [CommandWrap]-\u003e [String]",
        "fct-type": "function",
        "title": "commandNames"
      },
      "index": {
        "description": "This could be used to implement disambiguation function Note that there isn presently notion of hidden commands but we re taking them into account now for future API stability",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "commandNames",
        "normalized": "Bool-\u003e[CommandWrap]-\u003e[String]",
        "package": "cmdlib",
        "partial": "Names",
        "signature": "Bool-\u003e[CommandWrap]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:defaultCommand",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "f -\u003e DispatchOpt",
        "fct-source": "src/System-Console-CmdLib-Command.html#defaultCommand",
        "fct-type": "function",
        "title": "defaultCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "defaultCommand",
        "normalized": "a-\u003eDispatchOpt",
        "package": "cmdlib",
        "partial": "Command",
        "signature": "f-\u003eDispatchOpt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:die",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for dying with an error message (nicely, at least compared to\n \u003ca\u003efail\u003c/a\u003e in IO).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "String -\u003e IO a",
        "fct-source": "src/System-Console-CmdLib-Command.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "Helper for dying with an error message nicely at least compared to fail in IO",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "die",
        "normalized": "String-\u003eIO a",
        "package": "cmdlib",
        "partial": "",
        "signature": "String-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:disable",
      "description": {
        "fct-descr": "\u003cp\u003eFor convenience. Same as \u003ca\u003eEnabled\u003c/a\u003e False.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Attribute",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#disable",
        "fct-type": "function",
        "title": "disable"
      },
      "index": {
        "description": "For convenience Same as Enabled False",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "disable",
        "normalized": "",
        "package": "cmdlib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:dispatch",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of commands (see \u003ccode\u003e\u003ca\u003e%:\u003c/a\u003e\u003c/code\u003e) and a list of commandline arguments,\n dispatch on the command name, parse the commandline options (see \u003ca\u003eexecute\u003c/a\u003e)\n and transfer control to the command.  This function also implements the\n \u003ccode\u003ehelp\u003c/code\u003e pseudocommand.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "[DispatchOpt] -\u003e [CommandWrap] -\u003e [String] -\u003e IO ()",
        "fct-source": "src/System-Console-CmdLib-Command.html#dispatch",
        "fct-type": "function",
        "title": "dispatch"
      },
      "index": {
        "description": "Given list of commands see and list of commandline arguments dispatch on the command name parse the commandline options see execute and transfer control to the command This function also implements the help pseudocommand",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "dispatch",
        "normalized": "[DispatchOpt]-\u003e[CommandWrap]-\u003e[String]-\u003eIO()",
        "package": "cmdlib",
        "partial": "",
        "signature": "[DispatchOpt]-\u003e[CommandWrap]-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:dispatchOr",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edispatch\u003c/a\u003e\u003c/code\u003e but with the ability to control what happens when there\n   is an error on user input\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "(String -\u003e IO ())-\u003e [DispatchOpt]-\u003e [CommandWrap]-\u003e [String]-\u003e IO ()",
        "fct-type": "function",
        "title": "dispatchOr"
      },
      "index": {
        "description": "Like dispatch but with the ability to control what happens when there is an error on user input",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "dispatchOr",
        "normalized": "(String-\u003eIO())-\u003e[DispatchOpt]-\u003e[CommandWrap]-\u003e[String]-\u003eIO()",
        "package": "cmdlib",
        "partial": "Or",
        "signature": "(String-\u003eIO())-\u003e[DispatchOpt]-\u003e[CommandWrap]-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:dispatchR",
      "description": {
        "fct-descr": "\u003cp\u003eA command parsing & dispatch entry point for record-based\n commands. Ex. (see \u003ca\u003eRecordCommand\u003c/a\u003e):\n\u003c/p\u003e\u003cpre\u003e main = getArgs \u003e\u003e= dispatchR [] \u003e\u003e= \\x -\u003e case x of\n   Foo {} -\u003e putStrLn $ \"You asked for foo. Wibble = \" ++ show (wibble x)\n   Bar {} -\u003e putStrLn $ \"You asked for bar. ...\"\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "[DispatchOpt] -\u003e [String] -\u003e IO cmd",
        "fct-source": "src/System-Console-CmdLib-Record.html#dispatchR",
        "fct-type": "function",
        "title": "dispatchR"
      },
      "index": {
        "description": "command parsing dispatch entry point for record-based commands Ex see RecordCommand main getArgs dispatchR case of Foo putStrLn You asked for foo Wibble show wibble Bar putStrLn You asked for bar",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "dispatchR",
        "normalized": "[DispatchOpt]-\u003e[String]-\u003eIO a",
        "package": "cmdlib",
        "partial": "",
        "signature": "[DispatchOpt]-\u003e[String]-\u003eIO cmd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:enable",
      "description": {
        "fct-descr": "\u003cp\u003eFor convenience. Same as \u003ca\u003eEnabled\u003c/a\u003e True.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Attribute",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#enable",
        "fct-type": "function",
        "title": "enable"
      },
      "index": {
        "description": "For convenience Same as Enabled True",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "enable",
        "normalized": "",
        "package": "cmdlib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:everywhere",
      "description": {
        "fct-descr": "\u003cp\u003eSet an attribute on all keys.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Attribute -\u003e AttributeMap k",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#everywhere",
        "fct-type": "function",
        "title": "everywhere"
      },
      "index": {
        "description": "Set an attribute on all keys",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "everywhere",
        "normalized": "Attribute-\u003eAttributeMap a",
        "package": "cmdlib",
        "partial": "",
        "signature": "Attribute-\u003eAttributeMap k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eParse options for and execute a single command (see \u003ca\u003eCommand\u003c/a\u003e). May be\n useful for programs that do not need command-based \u003ca\u003edispatch\u003c/a\u003e, but still\n make use of the \u003ca\u003eCommand\u003c/a\u003e class to describe themselves. Handles \u003ccode\u003e--help\u003c/code\u003e\n internally. You can use this as the entrypoint if your application is\n non-modal (i.e. it has no subcommands).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e [String] -\u003e IO ()",
        "fct-source": "src/System-Console-CmdLib-Command.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Parse options for and execute single command see Command May be useful for programs that do not need command-based dispatch but still make use of the Command class to describe themselves Handles help internally You can use this as the entrypoint if your application is non-modal i.e it has no subcommands",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "execute",
        "normalized": "a-\u003e[String]-\u003eIO()",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:executeR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ca\u003eexecute\u003c/a\u003e, but you get the flags as a return value. This is useful to\n implement non-modal applications with record-based flags, eg.:\n\u003c/p\u003e\u003cpre\u003e data Main = Main { greeting :: String, again :: Bool }\n     deriving (Typeable, Data, Eq)\n instance Attributes Main where -- (...)\n instance RecordCommand Main\n main = getArgs \u003e\u003e= executeR Main {} \u003e\u003e= \\opts -\u003e do\n    putStrLn (greeting opts) -- (...)\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e [String] -\u003e IO cmd",
        "fct-source": "src/System-Console-CmdLib-Record.html#executeR",
        "fct-type": "function",
        "title": "executeR"
      },
      "index": {
        "description": "Like execute but you get the flags as return value This is useful to implement non-modal applications with record-based flags eg data Main Main greeting String again Bool deriving Typeable Data Eq instance Attributes Main where instance RecordCommand Main main getArgs executeR Main opts do putStrLn greeting opts",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "executeR",
        "normalized": "a-\u003e[String]-\u003eIO a",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003e[String]-\u003eIO cmd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:getArgs",
      "description": {
        "fct-descr": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e returns a list of the program's command\n line arguments (not including the program name).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "IO [String]",
        "fct-type": "function",
        "title": "getArgs"
      },
      "index": {
        "description": "Computation getArgs returns list of the program command line arguments not including the program name",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "getArgs",
        "normalized": "IO[String]",
        "package": "cmdlib",
        "partial": "Args",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:globalFlag",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003enoAttributes\u003c/a\u003e\u003c/code\u003e specify an empty attribute set. Available since 0.3.2.\n\u003c/p\u003e\u003cp\u003eCreate a global setter/getter pair for a flag. The setter can be then\n passed to the \u003ca\u003eGlobal\u003c/a\u003e attribute and the getter used globally to query value\n of that flag. Example:\n\u003c/p\u003e\u003cpre\u003e data Flag = Wibblify Int | Verbose Bool\n (setVerbose, isVerbose) = globalFlag False\n\n instance Attributes Flag where\n     attributes _ = Verbose %\u003e Global setVerbose\n\n putVerbose str = isVerbose \u003e\u003e= flip when (putStrLn str)\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e (a -\u003e IO (), IO a)",
        "fct-source": "src/System-Console-CmdLib.html#globalFlag",
        "fct-type": "function",
        "title": "globalFlag"
      },
      "index": {
        "description": "Use noAttributes specify an empty attribute set Available since Create global setter getter pair for flag The setter can be then passed to the Global attribute and the getter used globally to query value of that flag Example data Flag Wibblify Int Verbose Bool setVerbose isVerbose globalFlag False instance Attributes Flag where attributes Verbose Global setVerbose putVerbose str isVerbose flip when putStrLn str",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "globalFlag",
        "normalized": "a-\u003e(a-\u003eIO(),IO a)",
        "package": "cmdlib",
        "partial": "Flag",
        "signature": "a-\u003e(a-\u003eIO(),IO a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a group. This extracts all the keys that are (explicitly) mentioned\n in the body of the group and assigns the corresponding Group attribute to\n them. Normally used like this:\n\u003c/p\u003e\u003cpre\u003e group \"Group name\" [ option %\u003e Help \"some help\"\n                    , another %\u003e Help \"some other help\" ]\n\u003c/pre\u003e\u003cp\u003eDo not let the type confuse you too much. :)\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "String -\u003e a -\u003e AttributeMap k",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Create group This extracts all the keys that are explicitly mentioned in the body of the group and assigns the corresponding Group attribute to them Normally used like this group Group name option Help some help another Help some other help Do not let the type confuse you too much",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "group",
        "normalized": "String-\u003ea-\u003eAttributeMap b",
        "package": "cmdlib",
        "partial": "",
        "signature": "String-\u003ea-\u003eAttributeMap k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:help",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Command.html#help",
        "fct-type": "method",
        "title": "help"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "help",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:helpCommands",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "[CommandWrap] -\u003e [Char]",
        "fct-source": "src/System-Console-CmdLib-Command.html#helpCommands",
        "fct-type": "function",
        "title": "helpCommands"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "helpCommands",
        "normalized": "[CommandWrap]-\u003e[Char]",
        "package": "cmdlib",
        "partial": "Commands",
        "signature": "[CommandWrap]-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:helpOptions",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Command.html#helpOptions",
        "fct-type": "function",
        "title": "helpOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "helpOptions",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "Options",
        "signature": "cmd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:long",
      "description": {
        "fct-descr": "\u003cp\u003eFor convenience. Same as \u003ca\u003eLong\u003c/a\u003e [\u003ca\u003efoo\u003c/a\u003e] %+ \u003ca\u003eInvLong\u003c/a\u003e [\u003ca\u003eno-foo\u003c/a\u003e]\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "String -\u003e [Attribute]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#long",
        "fct-type": "function",
        "title": "long"
      },
      "index": {
        "description": "For convenience Same as Long foo InvLong no-foo",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "long",
        "normalized": "String-\u003e[Attribute]",
        "package": "cmdlib",
        "partial": "",
        "signature": "String-\u003e[Attribute]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:mode_help",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a help blurb for each mode. Use patterns like in \u003ccode\u003erun'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Record.html#mode_help",
        "fct-type": "method",
        "title": "mode_help"
      },
      "index": {
        "description": "Provide help blurb for each mode Use patterns like in run",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "mode_help",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:mode_summary",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a summary help string for each mode. Used in help output. Again,\n pattern match like in \u003ccode\u003erun'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Record.html#mode_summary",
        "fct-type": "method",
        "title": "mode_summary"
      },
      "index": {
        "description": "Provide summary help string for each mode Used in help output Again pattern match like in run",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "mode_summary",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:mode_synopsis",
      "description": {
        "fct-descr": "\u003cp\u003eOptionally override the default usage string for each mode. Use patterns\n like in \u003ccode\u003erun'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e Maybe String",
        "fct-source": "src/System-Console-CmdLib-Record.html#mode_synopsis",
        "fct-type": "method",
        "title": "mode_synopsis"
      },
      "index": {
        "description": "Optionally override the default usage string for each mode Use patterns like in run",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "mode_synopsis",
        "normalized": "a-\u003eMaybe String",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:noAttributes",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "AttributeMap k",
        "fct-source": "src/System-Console-CmdLib.html#noAttributes",
        "fct-type": "function",
        "title": "noAttributes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "noAttributes",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:noHelp",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "DispatchOpt",
        "fct-source": "src/System-Console-CmdLib-Command.html#noHelp",
        "fct-type": "function",
        "title": "noHelp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "noHelp",
        "normalized": "",
        "package": "cmdlib",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:optionStyle",
      "description": {
        "fct-descr": "\u003cp\u003eHow to process options for this command. \u003ca\u003eNoOptions\u003c/a\u003e disables option\n processing completely and all arguments are passed in the [String]\n parameter to \u003ca\u003erun\u003c/a\u003e. \u003ca\u003ePermuted\u003c/a\u003e collects everything that looks like an\n option (starts with a dash) and processes it. The non-option arguments are\n filtered and passed to run like above. Finally, \u003ca\u003eNonPermuted\u003c/a\u003e only\n processes options until a first non-option argument is encountered. The\n remaining arguments are passed unchanged to run.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e OptionStyle",
        "fct-source": "src/System-Console-CmdLib-Command.html#optionStyle",
        "fct-type": "method",
        "title": "optionStyle"
      },
      "index": {
        "description": "How to process options for this command NoOptions disables option processing completely and all arguments are passed in the String parameter to run Permuted collects everything that looks like an option starts with dash and processes it The non-option arguments are filtered and passed to run like above Finally NonPermuted only processes options until first non-option argument is encountered The remaining arguments are passed unchanged to run",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "optionStyle",
        "normalized": "a-\u003eOptionStyle",
        "package": "cmdlib",
        "partial": "Style",
        "signature": "cmd-\u003eOptionStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ca\u003eAttribute\u003c/a\u003e mapping for flags provided by the \u003ccode\u003eflag\u003c/code\u003e type parameter.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e AttributeMap Key",
        "fct-source": "src/System-Console-CmdLib-Command.html#options",
        "fct-type": "method",
        "title": "options"
      },
      "index": {
        "description": "An Attribute mapping for flags provided by the flag type parameter",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "options",
        "normalized": "a-\u003eAttributeMap Key",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eAttributeMap Key"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:readCommon",
      "description": {
        "fct-descr": "\u003cp\u003eThe default parser for option arguments. Handles strings, string lists\n (always produces single-element list), integers, booleans (\u003ccode\u003eyes|true|1\u003c/code\u003e vs\n \u003ccode\u003eno|false|0\u003c/code\u003e), PathF and integer lists (\u003ccode\u003e--foo=1,2,3\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/System-Console-CmdLib-Flag.html#readCommon",
        "fct-type": "function",
        "title": "readCommon"
      },
      "index": {
        "description": "The default parser for option arguments Handles strings string lists always produces single-element list integers booleans yes true vs no false PathF and integer lists foo",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "readCommon",
        "normalized": "String-\u003ea",
        "package": "cmdlib",
        "partial": "Common",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:readFlag",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "a -\u003e String -\u003e b",
        "fct-source": "src/System-Console-CmdLib-Flag.html#readFlag",
        "fct-type": "method",
        "title": "readFlag"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "readFlag",
        "normalized": "a-\u003eString-\u003eb",
        "package": "cmdlib",
        "partial": "Flag",
        "signature": "a-\u003eString-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:rec_optionStyle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the per-command option style, useful for supercommands to pass their\n options through to another dispatch, by using NoOptions.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e OptionStyle",
        "fct-source": "src/System-Console-CmdLib-Record.html#rec_optionStyle",
        "fct-type": "method",
        "title": "rec_optionStyle"
      },
      "index": {
        "description": "Set the per-command option style useful for supercommands to pass their options through to another dispatch by using NoOptions",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "rec_optionStyle",
        "normalized": "a-\u003eOptionStyle",
        "package": "cmdlib",
        "partial": "Style",
        "signature": "cmd-\u003eOptionStyle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:rec_options",
      "description": {
        "fct-descr": "\u003cp\u003eYou can also provide extra per-command flag attributes (match on the\n constructor like with \u003ccode\u003erun'\u003c/code\u003e). The attributes shared by various commands\n can be set in \u003ca\u003erec_attrs\u003c/a\u003e in \u003ca\u003eAttributes\u003c/a\u003e instead.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e AttributeMap Key",
        "fct-source": "src/System-Console-CmdLib-Record.html#rec_options",
        "fct-type": "method",
        "title": "rec_options"
      },
      "index": {
        "description": "You can also provide extra per-command flag attributes match on the constructor like with run The attributes shared by various commands can be set in rec attrs in Attributes instead",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "rec_options",
        "normalized": "a-\u003eAttributeMap Key",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eAttributeMap Key"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:rec_superCommand",
      "description": {
        "fct-descr": "\u003cp\u003ePattern match like in \u003ccode\u003erun'\u003c/code\u003e to identify any supercommands, which will\n allow --help flags to be passed through to the sub-commands.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e Bool",
        "fct-source": "src/System-Console-CmdLib-Record.html#rec_superCommand",
        "fct-type": "method",
        "title": "rec_superCommand"
      },
      "index": {
        "description": "Pattern match like in run to identify any supercommands which will allow help flags to be passed through to the sub-commands",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "rec_superCommand",
        "normalized": "a-\u003eBool",
        "package": "cmdlib",
        "partial": "Command",
        "signature": "cmd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:recordCommand",
      "description": {
        "fct-descr": "\u003cp\u003eObtain a value that is an instance of Command, i.e. suitable for use with\n \u003ca\u003edefaultCommand\u003c/a\u003e and other Command-based APIs.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e RecordMode cmd",
        "fct-source": "src/System-Console-CmdLib-Record.html#recordCommand",
        "fct-type": "function",
        "title": "recordCommand"
      },
      "index": {
        "description": "Obtain value that is an instance of Command i.e suitable for use with defaultCommand and other Command-based APIs",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "recordCommand",
        "normalized": "a-\u003eRecordMode a",
        "package": "cmdlib",
        "partial": "Command",
        "signature": "cmd-\u003eRecordMode cmd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:recordCommands",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a command list (for \u003ca\u003edispatch\u003c/a\u003e/\u003ca\u003ehelpCommands\u003c/a\u003e) from a\n multi-constructor record data type. See also \u003ca\u003eRecordCommand\u003c/a\u003e. Alternatively,\n you can use \u003ca\u003edispatchR\u003c/a\u003e directly.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e [CommandWrap]",
        "fct-source": "src/System-Console-CmdLib-Record.html#recordCommands",
        "fct-type": "function",
        "title": "recordCommands"
      },
      "index": {
        "description": "Construct command list for dispatch helpCommands from multi-constructor record data type See also RecordCommand Alternatively you can use dispatchR directly",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "recordCommands",
        "normalized": "a-\u003e[CommandWrap]",
        "package": "cmdlib",
        "partial": "Commands",
        "signature": "cmd-\u003e[CommandWrap]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eThe handler that actually runs the command. Gets the \u003ccode\u003esetup\u003c/code\u003e value as\n folded from the processed options (see \u003ca\u003eCombine\u003c/a\u003e) and a list of non-option\n arguments.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e Folded flag -\u003e [String] -\u003e IO ()",
        "fct-source": "src/System-Console-CmdLib-Command.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "The handler that actually runs the command Gets the setup value as folded from the processed options see Combine and list of non-option arguments",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "run",
        "normalized": "a-\u003eFolded b-\u003e[String]-\u003eIO()",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eFolded flag-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:run-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erun'\u003c/code\u003e is your entrypoint into the whole set of commands. You can\n dispatch on the command by looking at the constructor in \u003ccode\u003ecmd\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e run' cmd@(Foo {}) _ = putStrLn $ \"Foo running. Wibble = \" ++ show (wibble cmd)\n run' cmd@(Bar {}) _ = putStrLn \"This is bar.\"\n\u003c/pre\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e [String] -\u003e IO ()",
        "fct-source": "src/System-Console-CmdLib-Record.html#run%27",
        "fct-type": "method",
        "title": "run'"
      },
      "index": {
        "description": "run is your entrypoint into the whole set of commands You can dispatch on the command by looking at the constructor in cmd run cmd Foo putStrLn Foo running Wibble show wibble cmd run cmd Bar putStrLn This is bar",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "run'",
        "normalized": "a-\u003e[String]-\u003eIO()",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003e[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:short",
      "description": {
        "fct-descr": "\u003cp\u003eFor convenience. Same as \u003ca\u003eShort\u003c/a\u003e [\u003ccode\u003ex\u003c/code\u003e]\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "Char -\u003e Attribute",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#short",
        "fct-type": "function",
        "title": "short"
      },
      "index": {
        "description": "For convenience Same as Short",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "short",
        "normalized": "Char-\u003eAttribute",
        "package": "cmdlib",
        "partial": "",
        "signature": "Char-\u003eAttribute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:simple",
      "description": {
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "[Attribute]",
        "fct-source": "src/System-Console-CmdLib-Attribute.html#simple",
        "fct-type": "function",
        "title": "simple"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "simple",
        "normalized": "[Attribute]",
        "package": "cmdlib",
        "partial": "",
        "signature": "[Attribute]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:summary",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a short (one-line) description of the command. Used in help\n output.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Command.html#summary",
        "fct-type": "method",
        "title": "summary"
      },
      "index": {
        "description": "Provides short one-line description of the command Used in help output",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "summary",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:supercommand",
      "description": {
        "fct-descr": "\u003cp\u003eSet this to True if the command is a supercommand (i.e. expects another\n subcommand). Defaults to False. Supercommands can come with their own\n options, which need to appear between the supercommand and its\n subcommand. Any later options go to the subcommand. The \u003ca\u003erun\u003c/a\u003e (and\n \u003ca\u003edescription\u003c/a\u003e) method of a supercommand should use \u003ca\u003edispatch\u003c/a\u003e and\n \u003ca\u003ehelpCommands\u003c/a\u003e respectively (on its list of subcommands) itself.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e Bool",
        "fct-source": "src/System-Console-CmdLib-Command.html#supercommand",
        "fct-type": "method",
        "title": "supercommand"
      },
      "index": {
        "description": "Set this to True if the command is supercommand i.e expects another subcommand Defaults to False Supercommands can come with their own options which need to appear between the supercommand and its subcommand Any later options go to the subcommand The run and description method of supercommand should use dispatch and helpCommands respectively on its list of subcommands itself",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "supercommand",
        "normalized": "a-\u003eBool",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cmdlib/docs/System-Console-CmdLib.html#v:synopsis",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the commands' short synopsis.\n\u003c/p\u003e",
        "fct-module": "System.Console.CmdLib",
        "fct-package": "cmdlib",
        "fct-signature": "cmd -\u003e String",
        "fct-source": "src/System-Console-CmdLib-Command.html#synopsis",
        "fct-type": "method",
        "title": "synopsis"
      },
      "index": {
        "description": "Provides the commands short synopsis",
        "hierarchy": "System Console CmdLib",
        "module": "System.Console.CmdLib",
        "name": "synopsis",
        "normalized": "a-\u003eString",
        "package": "cmdlib",
        "partial": "",
        "signature": "cmd-\u003eString"
      }
    }
  }
]