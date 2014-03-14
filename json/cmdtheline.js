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
        "word": "cmdtheline"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Arg",
          "name": "Arg",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Arg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "Arg",
          "package": "cmdtheline",
          "partial": "Arg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of command line arguments.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "Arg",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Arg.html#Arg",
          "type": "data"
        },
        "index": {
          "description": "The type of command line arguments",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "Arg",
          "package": "cmdtheline",
          "partial": "Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about an optional argument. Exposes the folowing fields.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eoptName\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e :: String: defaults to \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eoptDoc\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  :: String: defaults to \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eoptSec\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  :: String: defaults to \u003ccode\u003e\"OPTIONS\"\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "OptInfo",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Arg.html#OptInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about an optional argument Exposes the folowing fields optName String defaults to optDoc String defaults to optSec String defaults to OPTIONS",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "OptInfo",
          "package": "cmdtheline",
          "partial": "Opt Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#t:OptInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a positional argument. Exposes the folowing fields.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eposName\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e :: String: defaults to \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eposDoc\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  :: String: defaults to \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eposSec\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  :: String: defautts to \u003ccode\u003e\"ARGUMENTS\"\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "PosInfo",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Arg.html#PosInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about positional argument Exposes the folowing fields posName String defaults to posDoc String defaults to posSec String defautts to ARGUMENTS",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "PosInfo",
          "package": "cmdtheline",
          "partial": "Pos Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#t:PosInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edefaultOpt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003edef v ai\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003eopt\u003c/a\u003e\u003c/code\u003e except if it is present and no value is\n assigned on the command line, \u003ccode\u003edef\u003c/code\u003e is the result.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "defaultOpt",
          "package": "cmdtheline",
          "signature": "a -\u003e a -\u003e OptInfo -\u003e Arg a",
          "source": "src/System-Console-CmdTheLine-Arg.html#defaultOpt",
          "type": "function"
        },
        "index": {
          "description": "defaultOpt def ai is as opt except if it is present and no value is assigned on the command line def is the result",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "defaultOpt",
          "normalized": "a-\u003ea-\u003eOptInfo-\u003eArg a",
          "package": "cmdtheline",
          "partial": "Opt",
          "signature": "a-\u003ea-\u003eOptInfo-\u003eArg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:defaultOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edefaultOptAll\u003c/a\u003e\u003c/code\u003e \u003ccode\u003edef vs ai\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eoptAll\u003c/a\u003e\u003c/code\u003e except that if it is present\n without being assigned a value, the value \u003ccode\u003edef\u003c/code\u003e takes its place in the list\n of results.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "defaultOptAll",
          "package": "cmdtheline",
          "signature": "a -\u003e [a] -\u003e OptInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#defaultOptAll",
          "type": "function"
        },
        "index": {
          "description": "defaultOptAll def vs ai is like optAll except that if it is present without being assigned value the value def takes its place in the list of results",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "defaultOptAll",
          "normalized": "a-\u003e[a]-\u003eOptInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Opt All",
          "signature": "a-\u003e[a]-\u003eOptInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:defaultOptAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a command line flag that can appear at most once on the\n command line.  Yields \u003ccode\u003eFalse\u003c/code\u003e in absence and \u003ccode\u003eTrue\u003c/code\u003e in presence.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "flag",
          "package": "cmdtheline",
          "signature": "OptInfo -\u003e Arg Bool",
          "source": "src/System-Console-CmdTheLine-Arg.html#flag",
          "type": "function"
        },
        "index": {
          "description": "Create command line flag that can appear at most once on the command line Yields False in absence and True in presence",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "flag",
          "normalized": "OptInfo-\u003eArg Bool",
          "package": "cmdtheline",
          "signature": "OptInfo-\u003eArg Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eflag\u003c/a\u003e\u003c/code\u003e but may appear an infinity of times. Yields a list of \u003ccode\u003eTrue\u003c/code\u003es\n as long as the number of times present.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "flagAll",
          "package": "cmdtheline",
          "signature": "OptInfo -\u003e Arg [Bool]",
          "source": "src/System-Console-CmdTheLine-Arg.html#flagAll",
          "type": "function"
        },
        "index": {
          "description": "As flag but may appear an infinity of times Yields list of True as long as the number of times present",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "flagAll",
          "normalized": "OptInfo-\u003eArg[Bool]",
          "package": "cmdtheline",
          "partial": "All",
          "signature": "OptInfo-\u003eArg[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:flagAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elastOf\u003c/a\u003e\u003c/code\u003e \u003ccode\u003earg\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e that fails if its result is empty and evaluates\n to the last element of the resulting list otherwise.  Intended for lists\n of flags or options where the last takes precedence.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "lastOf",
          "package": "cmdtheline",
          "signature": "Arg [a] -\u003e Term a",
          "source": "src/System-Console-CmdTheLine-Arg.html#lastOf",
          "type": "function"
        },
        "index": {
          "description": "lastOf arg is Term that fails if its result is empty and evaluates to the last element of the resulting list otherwise Intended for lists of flags or options where the last takes precedence",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "lastOf",
          "normalized": "Arg[a]-\u003eTerm a",
          "package": "cmdtheline",
          "partial": "Of",
          "signature": "Arg[a]-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:lastOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003earg\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e that fails if its result is empty. Intended\n for non-empty lists of positional arguments.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "nonEmpty",
          "package": "cmdtheline",
          "signature": "Arg [a] -\u003e Term [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#nonEmpty",
          "type": "function"
        },
        "index": {
          "description": "nonEmpty arg is Term that fails if its result is empty Intended for non-empty lists of positional arguments",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "nonEmpty",
          "normalized": "Arg[a]-\u003eTerm[a]",
          "package": "cmdtheline",
          "partial": "Empty",
          "signature": "Arg[a]-\u003eTerm[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:nonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eopt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ev ai\u003c/code\u003e is an optional argument that yields \u003ccode\u003ev\u003c/code\u003e in absence, or an\n assigned value in presence.  If the option is present, but no value is\n assigned, it is considered a user-error and usage is printed on exit.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "opt",
          "package": "cmdtheline",
          "signature": "a -\u003e OptInfo -\u003e Arg a",
          "source": "src/System-Console-CmdTheLine-Arg.html#opt",
          "type": "function"
        },
        "index": {
          "description": "opt ai is an optional argument that yields in absence or an assigned value in presence If the option is present but no value is assigned it is considered user-error and usage is printed on exit",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "opt",
          "normalized": "a-\u003eOptInfo-\u003eArg a",
          "package": "cmdtheline",
          "signature": "a-\u003eOptInfo-\u003eArg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eoptAll\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evs ai\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eopt\u003c/a\u003e\u003c/code\u003e except that it yields \u003ccode\u003evs\u003c/code\u003e in absence and\n can appear an infinity of times.  The values it is assigned on the command\n line are accumulated in the order they appear.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "optAll",
          "package": "cmdtheline",
          "signature": "[a] -\u003e OptInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#optAll",
          "type": "function"
        },
        "index": {
          "description": "optAll vs ai is like opt except that it yields vs in absence and can appear an infinity of times The values it is assigned on the command line are accumulated in the order they appear",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "optAll",
          "normalized": "[a]-\u003eOptInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "All",
          "signature": "[a]-\u003eOptInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:optAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize an \u003ccode\u003e\u003ca\u003eOptInfo\u003c/a\u003e\u003c/code\u003e by providing a list of names.  The fields\n \u003ccode\u003eoptName\u003c/code\u003e, \u003ccode\u003eoptDoc\u003c/code\u003e, and \u003ccode\u003eoptSec\u003c/code\u003e can then be manipulated post-mortem,\n as in\n\u003c/p\u003e\u003cpre\u003e inf =(optInfo    [ \"i\", \"insufflation\" ])\n     { optName = \"INSUFFERABLE\"\n     , optDoc  = \"in the haunted house's harrow\"\n     , optSec  = \"NOT FOR AUGHT\"\n     }\n\u003c/pre\u003e\u003cp\u003eNames of one character in length will be prefixed by \u003ccode\u003e-\u003c/code\u003e on the command line,\n while longer names will be prefixed by \u003ccode\u003e--\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is considered a programming error to provide an empty list of names to\n optInfo.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "optInfo",
          "package": "cmdtheline",
          "signature": "[String] -\u003e OptInfo",
          "source": "src/System-Console-CmdTheLine-Arg.html#optInfo",
          "type": "function"
        },
        "index": {
          "description": "Initialize an OptInfo by providing list of names The fields optName optDoc and optSec can then be manipulated post-mortem as in inf optInfo insufflation optName INSUFFERABLE optDoc in the haunted house harrow optSec NOT FOR AUGHT Names of one character in length will be prefixed by on the command line while longer names will be prefixed by It is considered programming error to provide an empty list of names to optInfo",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "optInfo",
          "normalized": "[String]-\u003eOptInfo",
          "package": "cmdtheline",
          "partial": "Info",
          "signature": "[String]-\u003eOptInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:optInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epos\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en v ai\u003c/code\u003e is an argument defined by the \u003ccode\u003en\u003c/code\u003eth positional argument\n on the command line. If absent the value \u003ccode\u003ev\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "pos",
          "package": "cmdtheline",
          "signature": "Int -\u003e a -\u003e PosInfo -\u003e Arg a",
          "source": "src/System-Console-CmdTheLine-Arg.html#pos",
          "type": "function"
        },
        "index": {
          "description": "pos ai is an argument defined by the th positional argument on the command line If absent the value is returned",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "pos",
          "normalized": "Int-\u003ea-\u003ePosInfo-\u003eArg a",
          "package": "cmdtheline",
          "signature": "Int-\u003ea-\u003ePosInfo-\u003eArg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eposAny\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evs ai\u003c/code\u003e yields a list of all positional arguments or \u003ccode\u003evs\u003c/code\u003e if none\n are present.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posAny",
          "package": "cmdtheline",
          "signature": "[a] -\u003e PosInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#posAny",
          "type": "function"
        },
        "index": {
          "description": "posAny vs ai yields list of all positional arguments or vs if none are present",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posAny",
          "normalized": "[a]-\u003ePosInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Any",
          "signature": "[a]-\u003ePosInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:posAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a \u003ccode\u003e\u003ca\u003ePosInfo\u003c/a\u003e\u003c/code\u003e.  The fields \u003ccode\u003eposName\u003c/code\u003e, \u003ccode\u003eposDoc\u003c/code\u003e, and \u003ccode\u003eposSec\u003c/code\u003e\n can then be manipulated post-mortem, as in\n\u003c/p\u003e\u003cpre\u003e inf = posInfo\n     { posName = \"DEST\"\n     , posDoc  = \"A destination for the operation.\"\n     , posSec  = \"DESTINATIONS\"\n     }\n\u003c/pre\u003e\u003cp\u003eThe fields \u003ccode\u003eposName\u003c/code\u003e and \u003ccode\u003eposDoc\u003c/code\u003e must be non-empty strings for the argument\n to be listed with its documentation under the section \u003ccode\u003eposSec\u003c/code\u003e of generated\n help.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posInfo",
          "package": "cmdtheline",
          "signature": "PosInfo",
          "source": "src/System-Console-CmdTheLine-Arg.html#posInfo",
          "type": "function"
        },
        "index": {
          "description": "Initialize PosInfo The fields posName posDoc and posSec can then be manipulated post-mortem as in inf posInfo posName DEST posDoc destination for the operation posSec DESTINATIONS The fields posName and posDoc must be non-empty strings for the argument to be listed with its documentation under the section posSec of generated help",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posInfo",
          "package": "cmdtheline",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:posInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eposLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en vs ai\u003c/code\u003e yield a list of all positional arguments to the left of\n the \u003ccode\u003en\u003c/code\u003eth positional argument or \u003ccode\u003evs\u003c/code\u003e if there are none.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posLeft",
          "package": "cmdtheline",
          "signature": "Int -\u003e [a] -\u003e PosInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#posLeft",
          "type": "function"
        },
        "index": {
          "description": "posLeft vs ai yield list of all positional arguments to the left of the th positional argument or vs if there are none",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posLeft",
          "normalized": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Left",
          "signature": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:posLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eposRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en vs ai\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003eposLeft\u003c/a\u003e\u003c/code\u003e except yielding all values to the right\n of the \u003ccode\u003en\u003c/code\u003eth positional argument.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posRight",
          "package": "cmdtheline",
          "signature": "Int -\u003e [a] -\u003e PosInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#posRight",
          "type": "function"
        },
        "index": {
          "description": "posRight vs ai is as posLeft except yielding all values to the right of the th positional argument",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "posRight",
          "normalized": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Right",
          "signature": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:posRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003earg\u003c/code\u003e converts \u003ccode\u003earg\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e such that it fails in the\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and yields \u003ccode\u003ea\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is used for required positional arguments.  There is nothing\n stopping you from using it with optional arguments, except that they\n would no longer be optional and it would be confusing from a user's\n perspective.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "required",
          "package": "cmdtheline",
          "signature": "Arg (Maybe a) -\u003e Term a",
          "source": "src/System-Console-CmdTheLine-Arg.html#required",
          "type": "function"
        },
        "index": {
          "description": "required arg converts arg into Term such that it fails in the Nothing and yields in the Just This is used for required positional arguments There is nothing stopping you from using it with optional arguments except that they would no longer be optional and it would be confusing from user perspective",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "required",
          "normalized": "Arg(Maybe a)-\u003eTerm a",
          "package": "cmdtheline",
          "signature": "Arg(Maybe a)-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erevPos\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en v ai\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003epos\u003c/a\u003e\u003c/code\u003e but counting from the end of the command line\n to the front.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "revPos",
          "package": "cmdtheline",
          "signature": "Int -\u003e a -\u003e PosInfo -\u003e Arg a",
          "source": "src/System-Console-CmdTheLine-Arg.html#revPos",
          "type": "function"
        },
        "index": {
          "description": "revPos ai is as pos but counting from the end of the command line to the front",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "revPos",
          "normalized": "Int-\u003ea-\u003ePosInfo-\u003eArg a",
          "package": "cmdtheline",
          "partial": "Pos",
          "signature": "Int-\u003ea-\u003ePosInfo-\u003eArg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:revPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erevPosLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en vs ai\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003eposLeft\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003en\u003c/code\u003e counts from the end of the\n command line to the front.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "revPosLeft",
          "package": "cmdtheline",
          "signature": "Int -\u003e [a] -\u003e PosInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#revPosLeft",
          "type": "function"
        },
        "index": {
          "description": "revPosLeft vs ai is as posLeft except counts from the end of the command line to the front",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "revPosLeft",
          "normalized": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Pos Left",
          "signature": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:revPosLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erevPosRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en vs ai\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003eposRight\u003c/a\u003e\u003c/code\u003e except \u003ccode\u003en\u003c/code\u003e counts from the end of\n the command line to the front.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "revPosRight",
          "package": "cmdtheline",
          "signature": "Int -\u003e [a] -\u003e PosInfo -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#revPosRight",
          "type": "function"
        },
        "index": {
          "description": "revPosRight vs ai is as posRight except counts from the end of the command line to the front",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "revPosRight",
          "normalized": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Pos Right",
          "signature": "Int-\u003e[a]-\u003ePosInfo-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:revPosRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evFlag\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ev [ ( v1, ai1 ), ... ]\u003c/code\u003e is an argument that can be present at most\n once on the command line. It takes on the value \u003ccode\u003evn\u003c/code\u003e when appearing as\n \u003ccode\u003eain\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "vFlag",
          "package": "cmdtheline",
          "signature": "a -\u003e [(a, OptInfo)] -\u003e Arg a",
          "source": "src/System-Console-CmdTheLine-Arg.html#vFlag",
          "type": "function"
        },
        "index": {
          "description": "vFlag v1 ai1 is an argument that can be present at most once on the command line It takes on the value vn when appearing as ain",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "vFlag",
          "normalized": "a-\u003e[(a,OptInfo)]-\u003eArg a",
          "package": "cmdtheline",
          "partial": "Flag",
          "signature": "a-\u003e[(a,OptInfo)]-\u003eArg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:vFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evFlagAll\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evs assoc\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003evFlag\u003c/a\u003e\u003c/code\u003e except that it can be present an\n infinity of times.  In absence, \u003ccode\u003evs\u003c/code\u003e is yielded.  When present, each\n value is collected in the order they appear.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "vFlagAll",
          "package": "cmdtheline",
          "signature": "[a] -\u003e [(a, OptInfo)] -\u003e Arg [a]",
          "source": "src/System-Console-CmdTheLine-Arg.html#vFlagAll",
          "type": "function"
        },
        "index": {
          "description": "vFlagAll vs assoc is as vFlag except that it can be present an infinity of times In absence vs is yielded When present each value is collected in the order they appear",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "vFlagAll",
          "normalized": "[a]-\u003e[(a,OptInfo)]-\u003eArg[a]",
          "package": "cmdtheline",
          "partial": "Flag All",
          "signature": "[a]-\u003e[(a,OptInfo)]-\u003eArg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:vFlagAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003earg\u003c/code\u003e makes \u003ccode\u003earg\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "value",
          "package": "cmdtheline",
          "signature": "Arg a -\u003e Term a",
          "source": "src/System-Console-CmdTheLine-Arg.html#value",
          "type": "function"
        },
        "index": {
          "description": "value arg makes arg into Term",
          "hierarchy": "System Console CmdTheLine Arg",
          "module": "System.Console.CmdTheLine.Arg",
          "name": "value",
          "normalized": "Arg a-\u003eTerm a",
          "package": "cmdtheline",
          "signature": "Arg a-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Arg.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgVal",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-ArgVal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgVal",
          "package": "cmdtheline",
          "partial": "Arg Val",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of parsers of individual command line argument values.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgParser",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#ArgParser",
          "type": "type"
        },
        "index": {
          "description": "The type of parsers of individual command line argument values",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgParser",
          "package": "cmdtheline",
          "partial": "Arg Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#t:ArgParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of printers of values retrieved from the command line.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgPrinter",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#ArgPrinter",
          "type": "type"
        },
        "index": {
          "description": "The type of printers of values retrieved from the command line",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgPrinter",
          "package": "cmdtheline",
          "partial": "Arg Printer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#t:ArgPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of values that can be converted from the command line.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgVal",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#ArgVal",
          "type": "class"
        },
        "index": {
          "description": "The class of values that can be converted from the command line",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "ArgVal",
          "package": "cmdtheline",
          "partial": "Arg Val",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#t:ArgVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA converter is just a pair of a parser and a printer.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "Converter",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#Converter",
          "type": "type"
        },
        "index": {
          "description": "converter is just pair of parser and printer",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "Converter",
          "package": "cmdtheline",
          "partial": "Converter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#t:Converter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "converter",
          "package": "cmdtheline",
          "signature": "Converter a",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#converter",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "converter",
          "package": "cmdtheline",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:converter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA converter of enumerated values conveyed as an association list of\n \u003ccode\u003e( string, value )\u003c/code\u003e pairs.  Unambiguous prefixes of \u003ccode\u003estring\u003c/code\u003e map to\n \u003ccode\u003evalue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "enum",
          "package": "cmdtheline",
          "signature": "[(String, a)] -\u003e Converter a",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#enum",
          "type": "function"
        },
        "index": {
          "description": "converter of enumerated values conveyed as an association list of string value pairs Unambiguous prefixes of string map to value",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "enum",
          "normalized": "[(String,a)]-\u003eConverter a",
          "package": "cmdtheline",
          "signature": "[(String,a)]-\u003eConverter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromParsec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eonErr p\u003c/code\u003e makes an \u003ccode\u003e\u003ca\u003eArgParser\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003ep\u003c/code\u003e using \u003ccode\u003eonErr\u003c/code\u003e to\n produce meaningful error messages.  On failure, \u003ccode\u003eonErr\u003c/code\u003e will receive a\n raw string of the value found on the command line.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "fromParsec",
          "package": "cmdtheline",
          "signature": "(String -\u003e Doc) -\u003e Parsec String () a -\u003e ArgParser a",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#fromParsec",
          "type": "function"
        },
        "index": {
          "description": "fromParsec onErr makes an ArgParser from using onErr to produce meaningful error messages On failure onErr will receive raw string of the value found on the command line",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "fromParsec",
          "normalized": "(String-\u003eDoc)-\u003eParsec String()a-\u003eArgParser a",
          "package": "cmdtheline",
          "partial": "Parsec",
          "signature": "(String-\u003eDoc)-\u003eParsec String()a-\u003eArgParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:fromParsec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA converter of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e values of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eParses as:\n\u003c/p\u003e\u003cpre\u003e fmap Just . parser\n\u003c/pre\u003e\u003cp\u003ePretty prints as:\n\u003c/p\u003e\u003cpre\u003e maybe empty pp\n\u003c/pre\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "just",
          "package": "cmdtheline",
          "signature": "Converter (Maybe a)",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#just",
          "type": "function"
        },
        "index": {
          "description": "converter of Maybe values of ArgVal instances Parses as fmap Just parser Pretty prints as maybe empty pp",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "just",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elist\u003c/a\u003e\u003c/code\u003e sep\u003c/code\u003e creates a converter of lists of an \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instance separated\n by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "list",
          "package": "cmdtheline",
          "signature": "Char -\u003e Converter [a]",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#list",
          "type": "function"
        },
        "index": {
          "description": "list sep creates converter of lists of an ArgVal instance separated by sep",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "list",
          "normalized": "Char-\u003eConverter[a]",
          "package": "cmdtheline",
          "signature": "Char-\u003eConverter[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epair\u003c/a\u003e\u003c/code\u003e sep\u003c/code\u003e creates a converter of pairs of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instances separated\n by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "pair",
          "package": "cmdtheline",
          "signature": "Char -\u003e Converter (a, b)",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#pair",
          "type": "function"
        },
        "index": {
          "description": "pair sep creates converter of pairs of ArgVal instances separated by sep",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "pair",
          "normalized": "Char-\u003eConverter(a,b)",
          "package": "cmdtheline",
          "signature": "Char-\u003eConverter(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parsing part of a \u003ccode\u003e\u003ca\u003econverter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "parser",
          "package": "cmdtheline",
          "signature": "ArgParser a",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#parser",
          "type": "function"
        },
        "index": {
          "description": "The parsing part of converter",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "parser",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pretty printing part of a \u003ccode\u003e\u003ca\u003econverter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "pp",
          "package": "cmdtheline",
          "signature": "ArgPrinter a",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#pp",
          "type": "function"
        },
        "index": {
          "description": "The pretty printing part of converter",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "pp",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003equadruple\u003c/a\u003e\u003c/code\u003e sep\u003c/code\u003e creates a converter of quadruples of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instances\n separated by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "quadruple",
          "package": "cmdtheline",
          "signature": "Char -\u003e Converter (a, b, c, d)",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#quadruple",
          "type": "function"
        },
        "index": {
          "description": "quadruple sep creates converter of quadruples of ArgVal instances separated by sep",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "quadruple",
          "normalized": "Char-\u003eConverter(a,b,c,d)",
          "package": "cmdtheline",
          "signature": "Char-\u003eConverter(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:quadruple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003equintuple\u003c/a\u003e\u003c/code\u003e sep\u003c/code\u003e creates a converter of quintuples of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instances\n separated by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "quintuple",
          "package": "cmdtheline",
          "signature": "Char -\u003e Converter (a, b, c, d, e)",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#quintuple",
          "type": "function"
        },
        "index": {
          "description": "quintuple sep creates converter of quintuples of ArgVal instances separated by sep",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "quintuple",
          "normalized": "Char-\u003eConverter(a,b,c,d,e)",
          "package": "cmdtheline",
          "signature": "Char-\u003eConverter(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:quintuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etriple\u003c/a\u003e\u003c/code\u003e sep\u003c/code\u003e creates a converter of triples of \u003ccode\u003e\u003ca\u003eArgVal\u003c/a\u003e\u003c/code\u003e instances separated\n by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "triple",
          "package": "cmdtheline",
          "signature": "Char -\u003e Converter (a, b, c)",
          "source": "src/System-Console-CmdTheLine-ArgVal.html#triple",
          "type": "function"
        },
        "index": {
          "description": "triple sep creates converter of triples of ArgVal instances separated by sep",
          "hierarchy": "System Console CmdTheLine ArgVal",
          "module": "System.Console.CmdTheLine.ArgVal",
          "name": "triple",
          "normalized": "Char-\u003eConverter(a,b,c)",
          "package": "cmdtheline",
          "signature": "Char-\u003eConverter(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-ArgVal.html#v:triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapter for \u003ca\u003eSystem.Console.GetOpt\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.CmdTheLine.GetOpt",
          "name": "GetOpt",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-GetOpt.html",
          "type": "module"
        },
        "index": {
          "description": "Adapter for System.Console.GetOpt",
          "hierarchy": "System Console CmdTheLine GetOpt",
          "module": "System.Console.CmdTheLine.GetOpt",
          "name": "GetOpt",
          "package": "cmdtheline",
          "partial": "Get Opt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-GetOpt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e which returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n \u003ccode\u003e\u003ca\u003eNoArg\u003c/a\u003e\u003c/code\u003e is specified and the flag is absent or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the argument\n otherwise.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.GetOpt",
          "name": "optDescrToTerm",
          "package": "cmdtheline",
          "signature": "OptDescr a -\u003e Term (Maybe a)",
          "source": "src/System-Console-CmdTheLine-GetOpt.html#optDescrToTerm",
          "type": "function"
        },
        "index": {
          "description": "Convert an OptDescr into Term which returns Nothing if NoArg is specified and the flag is absent or Just the argument otherwise",
          "hierarchy": "System Console CmdTheLine GetOpt",
          "module": "System.Console.CmdTheLine.GetOpt",
          "name": "optDescrToTerm",
          "normalized": "OptDescr a-\u003eTerm(Maybe a)",
          "package": "cmdtheline",
          "partial": "Descr To Term",
          "signature": "OptDescr a-\u003eTerm(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-GetOpt.html#v:optDescrToTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence a list of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e into a term. Absent flags\n (specified with \u003ccode\u003e\u003ca\u003eNoArg\u003c/a\u003e\u003c/code\u003e) are filtered out.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.GetOpt",
          "name": "optDescrsTerm",
          "package": "cmdtheline",
          "signature": "[OptDescr a] -\u003e Term [a]",
          "source": "src/System-Console-CmdTheLine-GetOpt.html#optDescrsTerm",
          "type": "function"
        },
        "index": {
          "description": "Sequence list of OptDescr into term Absent flags specified with NoArg are filtered out",
          "hierarchy": "System Console CmdTheLine GetOpt",
          "module": "System.Console.CmdTheLine.GetOpt",
          "name": "optDescrsTerm",
          "normalized": "[OptDescr a]-\u003eTerm[a]",
          "package": "cmdtheline",
          "partial": "Descrs Term",
          "signature": "[OptDescr a]-\u003eTerm[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-GetOpt.html#v:optDescrsTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Term",
          "name": "Term",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Term.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "Term",
          "package": "cmdtheline",
          "partial": "Term",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the way a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e exited early.  Obtained by either\n \u003ccode\u003e\u003ca\u003eunwrap\u003c/a\u003e\u003c/code\u003eing or \u003ccode\u003e\u003ca\u003eunwrapChoice\u003c/a\u003e\u003c/code\u003eing some Term.  Handy for testing programs when\n it is undesirable to exit execution of the entire program when a Term exits\n early.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "EvalExit",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Term.html#EvalExit",
          "type": "data"
        },
        "index": {
          "description": "Information about the way Term exited early Obtained by either unwrap ing or unwrapChoice ing some Term Handy for testing programs when it is undesirable to exit execution of the entire program when Term exits early",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "EvalExit",
          "package": "cmdtheline",
          "partial": "Eval Exit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#t:EvalExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Term",
          "name": "Help",
          "package": "cmdtheline",
          "signature": "Help HelpFormat (Maybe String)",
          "source": "src/System-Console-CmdTheLine-Term.html#EvalExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "Help",
          "package": "cmdtheline",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Term",
          "name": "Msg",
          "package": "cmdtheline",
          "signature": "Msg Doc",
          "source": "src/System-Console-CmdTheLine-Term.html#EvalExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "Msg",
          "package": "cmdtheline",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Term",
          "name": "Usage",
          "package": "cmdtheline",
          "signature": "Usage Doc",
          "source": "src/System-Console-CmdTheLine-Term.html#EvalExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "Usage",
          "package": "cmdtheline",
          "partial": "Usage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:Usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Term",
          "name": "Version",
          "package": "cmdtheline",
          "signature": "Version",
          "source": "src/System-Console-CmdTheLine-Term.html#EvalExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "Version",
          "package": "cmdtheline",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eargs ( term, termInfo )\u003c/code\u003e allows the user to pass \u003ccode\u003eargs\u003c/code\u003e directly to\n the evaluation mechanism.  This is useful if some kind of pre-processing is\n required.  If you do not need to pre-process command line arguments, use one\n of \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.  On failure the program exits.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "eval",
          "package": "cmdtheline",
          "signature": "[String] -\u003e (Term a, TermInfo) -\u003e IO a",
          "source": "src/System-Console-CmdTheLine-Term.html#eval",
          "type": "function"
        },
        "index": {
          "description": "eval args term termInfo allows the user to pass args directly to the evaluation mechanism This is useful if some kind of pre-processing is required If you do not need to pre-process command line arguments use one of exec or run On failure the program exits",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "eval",
          "normalized": "[String]-\u003e(Term a,TermInfo)-\u003eIO a",
          "package": "cmdtheline",
          "signature": "[String]-\u003e(Term a,TermInfo)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eevalChoice\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eargs mainTerm choices\u003c/code\u003e is analogous to \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e, but for\n programs that provide a choice of commands.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "evalChoice",
          "package": "cmdtheline",
          "signature": "[String] -\u003e (Term a, TermInfo) -\u003e [(Term a, TermInfo)] -\u003e IO a",
          "source": "src/System-Console-CmdTheLine-Term.html#evalChoice",
          "type": "function"
        },
        "index": {
          "description": "evalChoice args mainTerm choices is analogous to eval but for programs that provide choice of commands",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "evalChoice",
          "normalized": "[String]-\u003e(Term a,TermInfo)-\u003e[(Term a,TermInfo)]-\u003eIO a",
          "package": "cmdtheline",
          "partial": "Choice",
          "signature": "[String]-\u003e(Term a,TermInfo)-\u003e[(Term a,TermInfo)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:evalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e( term, termInfo )\u003c/code\u003e executes a command line program, directly\n grabbing the command line arguments from the environment and returning the\n result upon successful evaluation of \u003ccode\u003eterm\u003c/code\u003e.  On failure the program exits.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "exec",
          "package": "cmdtheline",
          "signature": "(Term a, TermInfo) -\u003e IO a",
          "source": "src/System-Console-CmdTheLine-Term.html#exec",
          "type": "function"
        },
        "index": {
          "description": "exec term termInfo executes command line program directly grabbing the command line arguments from the environment and returning the result upon successful evaluation of term On failure the program exits",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "exec",
          "normalized": "(Term a,TermInfo)-\u003eIO a",
          "package": "cmdtheline",
          "signature": "(Term a,TermInfo)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, but for programs that provide a choice of commands.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "execChoice",
          "package": "cmdtheline",
          "signature": "(Term a, TermInfo) -\u003e [(Term a, TermInfo)] -\u003e IO a",
          "source": "src/System-Console-CmdTheLine-Term.html#execChoice",
          "type": "function"
        },
        "index": {
          "description": "Analogous to exec but for programs that provide choice of commands",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "execChoice",
          "normalized": "(Term a,TermInfo)-\u003e[(Term a,TermInfo)]-\u003eIO a",
          "package": "cmdtheline",
          "partial": "Choice",
          "signature": "(Term a,TermInfo)-\u003e[(Term a,TermInfo)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:execChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e( term, termInfo )\u003c/code\u003e runs a \u003ccode\u003eterm\u003c/code\u003e containing an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action,\n performs the action, and returns the result on success. On failure the\n program exits.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "run",
          "package": "cmdtheline",
          "signature": "(Term (IO a), TermInfo) -\u003e IO a",
          "source": "src/System-Console-CmdTheLine-Term.html#run",
          "type": "function"
        },
        "index": {
          "description": "run term termInfo runs term containing an IO action performs the action and returns the result on success On failure the program exits",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "run",
          "normalized": "(Term(IO a),TermInfo)-\u003eIO a",
          "package": "cmdtheline",
          "signature": "(Term(IO a),TermInfo)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, but for programs that provide a choice of commands.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "runChoice",
          "package": "cmdtheline",
          "signature": "(Term (IO a), TermInfo) -\u003e [(Term (IO a), TermInfo)] -\u003e IO a",
          "source": "src/System-Console-CmdTheLine-Term.html#runChoice",
          "type": "function"
        },
        "index": {
          "description": "Analogous to run but for programs that provide choice of commands",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "runChoice",
          "normalized": "(Term(IO a),TermInfo)-\u003e[(Term(IO a),TermInfo)]-\u003eIO a",
          "package": "cmdtheline",
          "partial": "Choice",
          "signature": "(Term(IO a),TermInfo)-\u003e[(Term(IO a),TermInfo)]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:runChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwrap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eargs ( term, termInfo )\u003c/code\u003e unwraps a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e without handling errors.\n The intent is for use in testing of Terms where the programmer would like\n to consult error state without the program exiting.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "unwrap",
          "package": "cmdtheline",
          "signature": "[String] -\u003e (Term a, TermInfo) -\u003e IO (Either EvalExit a)",
          "source": "src/System-Console-CmdTheLine-Term.html#unwrap",
          "type": "function"
        },
        "index": {
          "description": "unwrap args term termInfo unwraps Term without handling errors The intent is for use in testing of Terms where the programmer would like to consult error state without the program exiting",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "unwrap",
          "normalized": "[String]-\u003e(Term a,TermInfo)-\u003eIO(Either EvalExit a)",
          "package": "cmdtheline",
          "signature": "[String]-\u003e(Term a,TermInfo)-\u003eIO(Either EvalExit a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eunwrap\u003c/a\u003e\u003c/code\u003e, but for programs that provide a choice of commands.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Term",
          "name": "unwrapChoice",
          "package": "cmdtheline",
          "signature": "[String] -\u003e (Term a, TermInfo) -\u003e [(Term a, TermInfo)] -\u003e IO (Either EvalExit a)",
          "source": "src/System-Console-CmdTheLine-Term.html#unwrapChoice",
          "type": "function"
        },
        "index": {
          "description": "Analogous to unwrap but for programs that provide choice of commands",
          "hierarchy": "System Console CmdTheLine Term",
          "module": "System.Console.CmdTheLine.Term",
          "name": "unwrapChoice",
          "normalized": "[String]-\u003e(Term a,TermInfo)-\u003e[(Term a,TermInfo)]-\u003eIO(Either EvalExit a)",
          "package": "cmdtheline",
          "partial": "Choice",
          "signature": "[String]-\u003e(Term a,TermInfo)-\u003e[(Term a,TermInfo)]-\u003eIO(Either EvalExit a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Term.html#v:unwrapChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine.Util",
          "name": "Util",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "Util",
          "package": "cmdtheline",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edirExists\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e checks that \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eterm\u003c/code\u003e is a path to an existing\n \u003cem\u003edirectory\u003c/em\u003e. If it is not, exit with an explanatory message for the user.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "dirExists",
          "package": "cmdtheline",
          "signature": "Term String -\u003e Term String",
          "source": "src/System-Console-CmdTheLine-Util.html#dirExists",
          "type": "function"
        },
        "index": {
          "description": "dirExists term checks that String in term is path to an existing directory If it is not exit with an explanatory message for the user",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "dirExists",
          "normalized": "Term String-\u003eTerm String",
          "package": "cmdtheline",
          "partial": "Exists",
          "signature": "Term String-\u003eTerm String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:dirExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edirsExist\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003edirExists\u003c/a\u003e\u003c/code\u003e but for a \u003ccode\u003eterm\u003c/code\u003e containing a list\n of directory paths.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "dirsExist",
          "package": "cmdtheline",
          "signature": "Term [String] -\u003e Term [String]",
          "source": "src/System-Console-CmdTheLine-Util.html#dirsExist",
          "type": "function"
        },
        "index": {
          "description": "dirsExist term is as dirExists but for term containing list of directory paths",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "dirsExist",
          "normalized": "Term[String]-\u003eTerm[String]",
          "package": "cmdtheline",
          "partial": "Exist",
          "signature": "Term[String]-\u003eTerm[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:dirsExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efileExists\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e checks that \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eterm\u003c/code\u003e is a path to an existing\n \u003cem\u003efile\u003c/em\u003e. If it is not, exit with an explanatory message for the user.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "fileExists",
          "package": "cmdtheline",
          "signature": "Term String -\u003e Term String",
          "source": "src/System-Console-CmdTheLine-Util.html#fileExists",
          "type": "function"
        },
        "index": {
          "description": "fileExists term checks that String in term is path to an existing file If it is not exit with an explanatory message for the user",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "fileExists",
          "normalized": "Term String-\u003eTerm String",
          "package": "cmdtheline",
          "partial": "Exists",
          "signature": "Term String-\u003eTerm String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:fileExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilesExist\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003efileExists\u003c/a\u003e\u003c/code\u003e but for a \u003ccode\u003eterm\u003c/code\u003e containing a list\n of file paths.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "filesExist",
          "package": "cmdtheline",
          "signature": "Term [String] -\u003e Term [String]",
          "source": "src/System-Console-CmdTheLine-Util.html#filesExist",
          "type": "function"
        },
        "index": {
          "description": "filesExist term is as fileExists but for term containing list of file paths",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "filesExist",
          "normalized": "Term[String]-\u003eTerm[String]",
          "package": "cmdtheline",
          "partial": "Exist",
          "signature": "Term[String]-\u003eTerm[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:filesExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epathExists\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e checks that \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eterm\u003c/code\u003e is a path to an existing\n \u003cem\u003efile or directory\u003c/em\u003e. If it is not, exit with an explanatory message for the\n user.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "pathExists",
          "package": "cmdtheline",
          "signature": "Term String -\u003e Term String",
          "source": "src/System-Console-CmdTheLine-Util.html#pathExists",
          "type": "function"
        },
        "index": {
          "description": "pathExists term checks that String in term is path to an existing file or directory If it is not exit with an explanatory message for the user",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "pathExists",
          "normalized": "Term String-\u003eTerm String",
          "package": "cmdtheline",
          "partial": "Exists",
          "signature": "Term String-\u003eTerm String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:pathExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epathsExist\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e is as \u003ccode\u003e\u003ca\u003epathExists\u003c/a\u003e\u003c/code\u003e but for a \u003ccode\u003eterm\u003c/code\u003e containing a list\n of paths.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "pathsExist",
          "package": "cmdtheline",
          "signature": "Term [String] -\u003e Term [String]",
          "source": "src/System-Console-CmdTheLine-Util.html#pathsExist",
          "type": "function"
        },
        "index": {
          "description": "pathsExist term is as pathExists but for term containing list of paths",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "pathsExist",
          "normalized": "Term[String]-\u003eTerm[String]",
          "package": "cmdtheline",
          "partial": "Exist",
          "signature": "Term[String]-\u003eTerm[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:pathsExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evalidPath\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e checks that \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eterm\u003c/code\u003e is a valid path under\n the current operating system. If it is not, exit with an explanatory\n message for the user.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine.Util",
          "name": "validPath",
          "package": "cmdtheline",
          "signature": "Term String -\u003e Term String",
          "source": "src/System-Console-CmdTheLine-Util.html#validPath",
          "type": "function"
        },
        "index": {
          "description": "validPath term checks that String in term is valid path under the current operating system If it is not exit with an explanatory message for the user",
          "hierarchy": "System Console CmdTheLine Util",
          "module": "System.Console.CmdTheLine.Util",
          "name": "validPath",
          "normalized": "Term String-\u003eTerm String",
          "package": "cmdtheline",
          "partial": "Path",
          "signature": "Term String-\u003eTerm String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine-Util.html#v:validPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine",
          "name": "CmdTheLine",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "CmdTheLine",
          "package": "cmdtheline",
          "partial": "Cmd The Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for values in the context of possibly failing with a helpful\n message.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "Err",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Common.html#Err",
          "type": "type"
        },
        "index": {
          "description": "monad for values in the context of possibly failing with helpful message",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "Err",
          "package": "cmdtheline",
          "partial": "Err",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#t:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe format to print help in.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "HelpFormat",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Common.html#HelpFormat",
          "type": "data"
        },
        "index": {
          "description": "The format to print help in",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "HelpFormat",
          "package": "cmdtheline",
          "partial": "Help Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#t:HelpFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument to a \u003ccode\u003e\u003ca\u003eManBlock\u003c/a\u003e\u003c/code\u003e constructor may contain the\n  following significant forms for a limited kind of meta-programing.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e $(i,text): italicizes \u003ccode\u003etext\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e $(b,text): bolds \u003ccode\u003etext\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e $(mname): evaluates to the name of the default term if there are choices\n    of commands, or the only term otherwise.\n\u003c/li\u003e\u003cli\u003e $(tname): evaluates to the name of the currently evaluating term.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAdditionally, text inside the content portion of an \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e constructor may\n  contain one of the following significant forms.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e $(argName): evaluates to the name of the argument being documented.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "ManBlock",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Common.html#ManBlock",
          "type": "data"
        },
        "index": {
          "description": "Any String argument to ManBlock constructor may contain the following significant forms for limited kind of meta-programing text italicizes text text bolds text mname evaluates to the name of the default term if there are choices of commands or the only term otherwise tname evaluates to the name of the currently evaluating term Additionally text inside the content portion of an constructor may contain one of the following significant forms argName evaluates to the name of the argument being documented",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "ManBlock",
          "package": "cmdtheline",
          "partial": "Man Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#t:ManBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying Applicative of the library.  A \u003ccode\u003eTerm\u003c/code\u003e represents a value\n in the context of being computed from the command line arguments.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "Term",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Common.html#Term",
          "type": "data"
        },
        "index": {
          "description": "The underlying Applicative of the library Term represents value in the context of being computed from the command line arguments",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "Term",
          "package": "cmdtheline",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e.  It is recommended that \u003ccode\u003e\u003ca\u003eTermInfo\u003c/a\u003e\u003c/code\u003es be\n created by customizing \u003ccode\u003e\u003ca\u003edefTI\u003c/a\u003e\u003c/code\u003e, as in\n\u003c/p\u003e\u003cpre\u003e termInfo = defTI\n   { termName = \"caroline-no\"\n   , termDoc  = \"carry a line off\"\n   }\n\u003c/pre\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "TermInfo",
          "package": "cmdtheline",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about Term It is recommended that TermInfo be created by customizing defTI as in termInfo defTI termName caroline-no termDoc carry line off",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "TermInfo",
          "package": "cmdtheline",
          "partial": "Term Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#t:TermInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine",
          "name": "Groff",
          "package": "cmdtheline",
          "signature": "Groff",
          "source": "src/System-Console-CmdTheLine-Common.html#HelpFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "Groff",
          "package": "cmdtheline",
          "partial": "Groff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:Groff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label-content pair. As in an argument\n   definition and its accompanying\n   documentation.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "I",
          "package": "cmdtheline",
          "signature": "I String String",
          "source": "src/System-Console-CmdTheLine-Common.html#ManBlock",
          "type": "function"
        },
        "index": {
          "description": "label-content pair As in an argument definition and its accompanying documentation",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "I",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppress the normal blank line following\n   a \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e or an \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "NoBlank",
          "package": "cmdtheline",
          "signature": "NoBlank",
          "source": "src/System-Console-CmdTheLine-Common.html#ManBlock",
          "type": "function"
        },
        "index": {
          "description": "Suppress the normal blank line following or an",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "NoBlank",
          "package": "cmdtheline",
          "partial": "No Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:NoBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA paragraph.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "P",
          "package": "cmdtheline",
          "signature": "P String",
          "source": "src/System-Console-CmdTheLine-Common.html#ManBlock",
          "type": "function"
        },
        "index": {
          "description": "paragraph",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "P",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine",
          "name": "Pager",
          "package": "cmdtheline",
          "signature": "Pager",
          "source": "src/System-Console-CmdTheLine-Common.html#HelpFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "Pager",
          "package": "cmdtheline",
          "partial": "Pager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:Pager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine",
          "name": "Plain",
          "package": "cmdtheline",
          "signature": "Plain",
          "source": "src/System-Console-CmdTheLine-Common.html#HelpFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "Plain",
          "package": "cmdtheline",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA section title.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "S",
          "package": "cmdtheline",
          "signature": "S String",
          "source": "src/System-Console-CmdTheLine-Common.html#ManBlock",
          "type": "function"
        },
        "index": {
          "description": "section title",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "S",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.CmdTheLine",
          "name": "TermInfo",
          "package": "cmdtheline",
          "signature": "TermInfo",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "TermInfo",
          "package": "cmdtheline",
          "partial": "Term Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:TermInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default \u003ccode\u003e\u003ca\u003eTermInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "defTI",
          "package": "cmdtheline",
          "signature": "TermInfo",
          "source": "src/System-Console-CmdTheLine-Common.html#defTI",
          "type": "function"
        },
        "index": {
          "description": "default TermInfo",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "defTI",
          "package": "cmdtheline",
          "partial": "TI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:defTI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA format to print the help in and an optional name of the term to print\n help for.  If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is supplied, help will be printed for the currently\n evaluating term.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "helpFail",
          "package": "cmdtheline",
          "signature": "HelpFormat -\u003e Maybe String -\u003e Err a",
          "source": "src/System-Console-CmdTheLine-Err.html#helpFail",
          "type": "function"
        },
        "index": {
          "description": "format to print the help in and an optional name of the term to print help for If Nothing is supplied help will be printed for the currently evaluating term",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "helpFail",
          "normalized": "HelpFormat-\u003eMaybe String-\u003eErr a",
          "package": "cmdtheline",
          "partial": "Fail",
          "signature": "HelpFormat-\u003eMaybe String-\u003eErr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:helpFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of \u003ccode\u003e\u003ca\u003eManBlock\u003c/a\u003e\u003c/code\u003es to append to the default \u003ccode\u003e[ManBlock]\u003c/code\u003e. Defaults\n to \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "man",
          "package": "cmdtheline",
          "signature": "[ManBlock]",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "description": "list of ManBlock to append to the default ManBlock Defaults to",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "man",
          "normalized": "[ManBlock]",
          "package": "cmdtheline",
          "signature": "[ManBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:man"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with an arbitrary message on failure.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "msgFail",
          "package": "cmdtheline",
          "signature": "Doc -\u003e Err a",
          "source": "src/System-Console-CmdTheLine-Err.html#msgFail",
          "type": "function"
        },
        "index": {
          "description": "Fail with an arbitrary message on failure",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "msgFail",
          "normalized": "Doc-\u003eErr a",
          "package": "cmdtheline",
          "partial": "Fail",
          "signature": "Doc-\u003eErr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:msgFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eret\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eterm\u003c/code\u003e folds \u003ccode\u003eterm\u003c/code\u003e's \u003ccode\u003e\u003ca\u003eErr\u003c/a\u003e\u003c/code\u003e context into the library to be handled\n internally and as seamlessly as other error messages that are built in.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "ret",
          "package": "cmdtheline",
          "signature": "Term (Err a) -\u003e Term a",
          "source": "src/System-Console-CmdTheLine-Err.html#ret",
          "type": "function"
        },
        "index": {
          "description": "ret term folds term Err context into the library to be handled internally and as seamlessly as other error messages that are built in",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "ret",
          "normalized": "Term(Err a)-\u003eTerm a",
          "package": "cmdtheline",
          "signature": "Term(Err a)-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe section under which to place a term's argument's\n documentation by default. Defaults to \u003ccode\u003e\"OPTIONS\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "stdOptSec",
          "package": "cmdtheline",
          "signature": "String",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "description": "The section under which to place term argument documentation by default Defaults to OPTIONS",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "stdOptSec",
          "package": "cmdtheline",
          "partial": "Opt Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:stdOptSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocumentation for the term. Defaults to \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "termDoc",
          "package": "cmdtheline",
          "signature": "String",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "description": "Documentation for the term Defaults to",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "termDoc",
          "package": "cmdtheline",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:termDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the command or program represented by the term. Defaults to\n \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "termName",
          "package": "cmdtheline",
          "signature": "String",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "description": "The name of the command or program represented by the term Defaults to",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "termName",
          "package": "cmdtheline",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:termName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe section under which to place the terms documentation.\n Defaults to \u003ccode\u003e\"COMMANDS\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "termSec",
          "package": "cmdtheline",
          "signature": "String",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "description": "The section under which to place the terms documentation Defaults to COMMANDS",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "termSec",
          "package": "cmdtheline",
          "partial": "Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:termSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail with a message along with the usage on failure.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "usageFail",
          "package": "cmdtheline",
          "signature": "Doc -\u003e Err a",
          "source": "src/System-Console-CmdTheLine-Err.html#usageFail",
          "type": "function"
        },
        "index": {
          "description": "Fail with message along with the usage on failure",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "usageFail",
          "normalized": "Doc-\u003eErr a",
          "package": "cmdtheline",
          "partial": "Fail",
          "signature": "Doc-\u003eErr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:usageFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version string.  Must be left blank for commands. Defaults to \u003ccode\u003e\"\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.CmdTheLine",
          "name": "version",
          "package": "cmdtheline",
          "signature": "String",
          "source": "src/System-Console-CmdTheLine-Common.html#TermInfo",
          "type": "function"
        },
        "index": {
          "description": "version string Must be left blank for commands Defaults to",
          "hierarchy": "System Console CmdTheLine",
          "module": "System.Console.CmdTheLine",
          "name": "version",
          "package": "cmdtheline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cmdtheline/docs/System-Console-CmdTheLine.html#v:version"
      }
    }
  ]
]