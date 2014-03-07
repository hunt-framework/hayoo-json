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
        "word": "arx"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe CLTokens module describes non-overlapping classes of strings that are\n    useful for disambiguating arguments to command line programs. Many common\n    string formats -- environment variable assignments, URLs, option strings --\n    are recognized by this module's utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "CLTokens",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html",
          "type": "module"
        },
        "index": {
          "description": "The CLTokens module describes non-overlapping classes of strings that are useful for disambiguating arguments to command line programs Many common string formats environment variable assignments URLs option strings are recognized by this module utilities",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "CLTokens",
          "package": "arx",
          "partial": "CLTokens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-overlapping classes of command line argument strings.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "Class",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "data"
        },
        "index": {
          "description": "Non-overlapping classes of command line argument strings",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "Class",
          "package": "arx",
          "partial": "Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDash\u003c/a\u003e\u003c/code\u003e is a single dash, \u003ccode\u003e-\u003c/code\u003e, commonly used\n   to indicate input from \u003ccode\u003estdin\u003c/code\u003e or output to\n   \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "Dash",
          "package": "arx",
          "signature": "Dash",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "Dash is single dash commonly used to indicate input from stdin or output to stdout",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "Dash",
          "package": "arx",
          "partial": "Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:Dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDashDash\u003c/a\u003e\u003c/code\u003e is a string of two dashes, \u003ccode\u003e--\u003c/code\u003e,\n   commonly used to indicate the end of options\n   processing.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "DashDash",
          "package": "arx",
          "signature": "DashDash",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "DashDash is string of two dashes commonly used to indicate the end of options processing",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "DashDash",
          "package": "arx",
          "partial": "Dash Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:DashDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDecimalNum\u003c/a\u003e\u003c/code\u003e is a string of decimal digits:\n   \u003ccode\u003e123123\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "DecimalNum",
          "package": "arx",
          "signature": "DecimalNum",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "DecimalNum is string of decimal digits",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "DecimalNum",
          "package": "arx",
          "partial": "Decimal Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:DecimalNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEnvBinding\u003c/a\u003e\u003c/code\u003e has the form\n   \u003ccode\u003e\u003ca\u003evar name\u003c/a\u003e=\u003ca\u003estring\u003c/a\u003e\u003c/code\u003e. For example,\n   \u003ccode\u003eSENDIN=the_clowns\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "EnvBinding",
          "package": "arx",
          "signature": "EnvBinding",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "An EnvBinding has the form var name string For example SENDIN the clowns",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "EnvBinding",
          "package": "arx",
          "partial": "Env Binding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:EnvBinding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eHexNum\u003c/a\u003e\u003c/code\u003e is a sequence of hexadecimal\n   digits, upper or lower case, beginning with\n   \u003ccode\u003e0x\u003c/code\u003e; for example: \u003ccode\u003e0x01a3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "HexNum",
          "package": "arx",
          "signature": "HexNum",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "HexNum is sequence of hexadecimal digits upper or lower case beginning with for example x01a3",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "HexNum",
          "package": "arx",
          "partial": "Hex Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:HexNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLongOption\u003c/a\u003e\u003c/code\u003e is a string beginning with two\n   dashes and then at least one non-dash.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "LongOption",
          "package": "arx",
          "signature": "LongOption",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "LongOption is string beginning with two dashes and then at least one non-dash",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "LongOption",
          "package": "arx",
          "partial": "Long Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:LongOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eQualifiedPath\u003c/a\u003e\u003c/code\u003e is a file path starting with\n   \u003ccode\u003e\u003cem\u003e@, @.\u003c/em\u003e\u003c/code\u003e, or \u003ccode\u003e../\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "QualifiedPath",
          "package": "arx",
          "signature": "QualifiedPath",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "QualifiedPath is file path starting with or",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "QualifiedPath",
          "package": "arx",
          "partial": "Qualified Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:QualifiedPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eShortOption\u003c/a\u003e\u003c/code\u003e is a beginning with a dash and\n   then at least one non-dash.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "ShortOption",
          "package": "arx",
          "signature": "ShortOption",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "ShortOption is beginning with dash and then at least one non-dash",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "ShortOption",
          "package": "arx",
          "partial": "Short Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:ShortOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e is a decimal number followed by a\n   multiplicative suffix, in the manner of \u003ccode\u003edd\u003c/code\u003e\n   or \u003ccode\u003ehead\u003c/code\u003e. Note that counts in terms of bytes\n   require \u003ccode\u003eB\u003c/code\u003e (unlike \u003ccode\u003edd\u003c/code\u003e or \u003ccode\u003ehead\u003c/code\u003e). For a\n   full list of suffixes, see \u003ccode\u003e\u003ca\u003esizes\u003c/a\u003e\u003c/code\u003e below.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "Size",
          "package": "arx",
          "signature": "Size",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "Size is decimal number followed by multiplicative suffix in the manner of dd or head Note that counts in terms of bytes require unlike dd or head For full list of suffixes see sizes below",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "Size",
          "package": "arx",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e is a scheme, separated from the\n   resource, represented as an arbitrary string,\n   by \u003ccode\u003e:\u003cem/\u003e\u003c/code\u003e. The scheme consists of ASCII,\n   lower-case letters and digits, and may be\n   multi-part, with each part separated by a \u003ccode\u003e+\u003c/code\u003e\n   or \u003ccode\u003e/\u003c/code\u003e (for example, \u003ccode\u003egit+ssh\u003c/code\u003e). An example\n   URL: \u003ccode\u003ehttp:\u003cem/\u003eexample.com/?q=special\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "URL",
          "package": "arx",
          "signature": "URL",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#Class",
          "type": "function"
        },
        "index": {
          "description": "URL is scheme separated from the resource represented as an arbitrary string by The scheme consists of ASCII lower-case letters and digits and may be multi-part with each part separated by or for example git ssh An example URL http example.com special",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "URL",
          "package": "arx",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ByteString stand-in that demoes each token class.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "exemplar",
          "package": "arx",
          "signature": "Class -\u003e ByteString",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#exemplar",
          "type": "function"
        },
        "index": {
          "description": "ByteString stand-in that demoes each token class",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "exemplar",
          "normalized": "Class-\u003eByteString",
          "package": "arx",
          "signature": "Class-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:exemplar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isHexDigit",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#isHexDigit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:isHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isLongOptionChar",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#isLongOptionChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isLongOptionChar",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "Long Option Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:isLongOptionChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isSchemeChar",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#isSchemeChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isSchemeChar",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "Scheme Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:isSchemeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isShortOptionChar",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#isShortOptionChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isShortOptionChar",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "Short Option Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:isShortOptionChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isURLSchemeChar",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#isURLSchemeChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "isURLSchemeChar",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "URLScheme Char",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:isURLSchemeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a particular \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e matches the given \u003ccode\u003e\u003ca\u003eClass\u003c/a\u003e\u003c/code\u003e of token.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "match",
          "package": "arx",
          "signature": "Class -\u003e ByteString -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#match",
          "type": "function"
        },
        "index": {
          "description": "Determine if particular ByteString matches the given Class of token",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "match",
          "normalized": "Class-\u003eByteString-\u003eBool",
          "package": "arx",
          "signature": "Class-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if a particular \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e matches any \u003ccode\u003e\u003ca\u003eClass\u003c/a\u003e\u003c/code\u003e of token.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "recognize",
          "package": "arx",
          "signature": "ByteString -\u003e Maybe Class",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#recognize",
          "type": "function"
        },
        "index": {
          "description": "Determine if particular ByteString matches any Class of token",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "recognize",
          "normalized": "ByteString-\u003eMaybe Class",
          "package": "arx",
          "signature": "ByteString-\u003eMaybe Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:recognize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe recognizer appropriate to each token class. Parses successfully if a\n    the token class is recognized, returning '()'. Most token types are\n    defined in terms of a prefix of the input -- for example, \u003ccode\u003e\u003ca\u003eQualifiedPath\u003c/a\u003e\u003c/code\u003e\n    -- and the parsers for these tokens naturally return as soon as the prefix\n    is recognized.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "recognizer",
          "package": "arx",
          "signature": "Class -\u003e Parser ()",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#recognizer",
          "type": "function"
        },
        "index": {
          "description": "The recognizer appropriate to each token class Parses successfully if the token class is recognized returning Most token types are defined in terms of prefix of the input for example QualifiedPath and the parsers for these tokens naturally return as soon as the prefix is recognized",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "recognizer",
          "normalized": "Class-\u003eParser()",
          "package": "arx",
          "signature": "Class-\u003eParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:recognizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "schemeSeparator",
          "package": "arx",
          "signature": "Parser ByteString Word8",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#schemeSeparator",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "schemeSeparator",
          "package": "arx",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:schemeSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a size, consuming the entire input string.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "size",
          "package": "arx",
          "signature": "Parser Integer",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#size",
          "type": "function"
        },
        "index": {
          "description": "Parse size consuming the entire input string",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "size",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a size, consuming the entire input string, with the final result\n    bounded by the maximum of a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "sizeBounded",
          "package": "arx",
          "signature": "Parser b",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#sizeBounded",
          "type": "function"
        },
        "index": {
          "description": "Parse size consuming the entire input string with the final result bounded by the maximum of Bounded type",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "sizeBounded",
          "package": "arx",
          "partial": "Bounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:sizeBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from suffixes to sizes, following the conventions of command line\n    tools (GNU \u003ccode\u003edd\u003c/code\u003e or \u003ccode\u003ehead\u003c/code\u003e and many others) as well as the standard for\n    binary sizes established by the IEC.\n\u003ccode\u003e\n  B       =    1\n  K = KiB = 1024B   kB = 1000B\n  M = MiB = 1024K   MB = 1000kB\n  G = GiB = 1024M   GB = 1000MB\n  T = TiB = 1024G   TB = 1000GB\n  P = PiB = 1024T   PB = 1000TB\n  E = EiB = 1024P   EB = 1000PB\n  Z = ZiB = 1024E   ZB = 1000EB\n  Y = YiB = 1024Z   YB = 1000ZB\n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "sizes",
          "package": "arx",
          "signature": "Map ByteString Integer",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#sizes",
          "type": "function"
        },
        "index": {
          "description": "map from suffixes to sizes following the conventions of command line tools GNU dd or head and many others as well as the standard for binary sizes established by the IEC KiB kB MiB MB kB GiB GB MB TiB TB GB PiB PB TB EiB EB PB ZiB ZB EB YiB YB ZB",
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "sizes",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:sizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "varBody",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#varBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "varBody",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "Body",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:varBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "varFirst",
          "package": "arx",
          "signature": "Char -\u003e Bool",
          "source": "src/System-Posix-ARX-CLI-CLTokens.html#varFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI CLTokens",
          "module": "System.Posix.ARX.CLI.CLTokens",
          "name": "varFirst",
          "normalized": "Char-\u003eBool",
          "package": "arx",
          "partial": "First",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-CLTokens.html#v:varFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "Options",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "Options",
          "package": "arx",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ArgsParser",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI-Options.html#ArgsParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ArgsParser",
          "package": "arx",
          "partial": "Args Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#t:ArgsParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source of bytes (no writing, only reading).\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ByteSource",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI-Options.html#ByteSource",
          "type": "data"
        },
        "index": {
          "description": "source of bytes no writing only reading",
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ByteSource",
          "package": "arx",
          "partial": "Byte Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#t:ByteSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA byte-oriented store that can be read from or written to in a streaming\n    fashion.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "IOStream",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI-Options.html#IOStream",
          "type": "data"
        },
        "index": {
          "description": "byte-oriented store that can be read from or written to in streaming fashion",
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "IOStream",
          "package": "arx",
          "partial": "IOStream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#t:IOStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "(\u003c@\u003e)",
          "package": "arx",
          "signature": "Parser t -\u003e ArgsParser ByteString -\u003e ArgsParser t",
          "source": "src/System-Posix-ARX-CLI-Options.html#%3C%40%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "(\u003c@\u003e) \u003c@\u003e",
          "normalized": "Parser a-\u003eArgsParser ByteString-\u003eArgsParser a",
          "package": "arx",
          "signature": "Parser t-\u003eArgsParser ByteString-\u003eArgsParser t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:-60--64--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ByteString",
          "package": "arx",
          "signature": "ByteString !ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#ByteSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ByteString",
          "package": "arx",
          "partial": "Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "IOStream",
          "package": "arx",
          "signature": "IOStream !IOStream",
          "source": "src/System-Posix-ARX-CLI-Options.html#ByteSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "IOStream",
          "package": "arx",
          "partial": "IOStream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:IOStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "Path",
          "package": "arx",
          "signature": "Path !ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#IOStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "Path",
          "package": "arx",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "STDIO",
          "package": "arx",
          "signature": "STDIO",
          "source": "src/System-Posix-ARX-CLI-Options.html#IOStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "STDIO",
          "package": "arx",
          "partial": "STDIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:STDIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "anyArg",
          "package": "arx",
          "signature": "ArgsParser ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#anyArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "anyArg",
          "package": "arx",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:anyArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "arg",
          "package": "arx",
          "signature": "ByteString -\u003e ArgsParser ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "arg",
          "normalized": "ByteString-\u003eArgsParser ByteString",
          "package": "arx",
          "signature": "ByteString-\u003eArgsParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "argPrim",
          "package": "arx",
          "signature": "(ByteString -\u003e Maybe t) -\u003e ArgsParser t",
          "source": "src/System-Posix-ARX-CLI-Options.html#argPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "argPrim",
          "normalized": "(ByteString-\u003eMaybe a)-\u003eArgsParser a",
          "package": "arx",
          "partial": "Prim",
          "signature": "(ByteString-\u003eMaybe t)-\u003eArgsParser t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:argPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "blockSize",
          "package": "arx",
          "signature": "ArgsParser Word",
          "source": "src/System-Posix-ARX-CLI-Options.html#blockSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "blockSize",
          "package": "arx",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "cmd",
          "package": "arx",
          "signature": "ByteString -\u003e ArgsParser ByteSource",
          "source": "src/System-Posix-ARX-CLI-Options.html#cmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "cmd",
          "normalized": "ByteString-\u003eArgsParser ByteSource",
          "package": "arx",
          "signature": "ByteString-\u003eArgsParser ByteSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "env",
          "package": "arx",
          "signature": "ArgsParser (Var, Val)",
          "source": "src/System-Posix-ARX-CLI-Options.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "env",
          "normalized": "ArgsParser(Var,Val)",
          "package": "arx",
          "signature": "ArgsParser(Var,Val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ioStream",
          "package": "arx",
          "signature": "ArgsParser IOStream",
          "source": "src/System-Posix-ARX-CLI-Options.html#ioStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "ioStream",
          "package": "arx",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:ioStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "outputFile",
          "package": "arx",
          "signature": "ArgsParser IOStream",
          "source": "src/System-Posix-ARX-CLI-Options.html#outputFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "outputFile",
          "package": "arx",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:outputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "qPath",
          "package": "arx",
          "signature": "ArgsParser ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#qPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "qPath",
          "package": "arx",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:qPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "rm",
          "package": "arx",
          "signature": "ArgsParser (Bool, Bool)",
          "source": "src/System-Posix-ARX-CLI-Options.html#rm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "rm",
          "normalized": "ArgsParser(Bool,Bool)",
          "package": "arx",
          "signature": "ArgsParser(Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "satisfy",
          "package": "arx",
          "signature": "(ByteString -\u003e Bool) -\u003e ArgsParser ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#satisfy",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "satisfy",
          "normalized": "(ByteString-\u003eBool)-\u003eArgsParser ByteString",
          "package": "arx",
          "signature": "(ByteString-\u003eBool)-\u003eArgsParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "scriptToRun",
          "package": "arx",
          "signature": "ArgsParser ByteSource",
          "source": "src/System-Posix-ARX-CLI-Options.html#scriptToRun",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "scriptToRun",
          "package": "arx",
          "partial": "To Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:scriptToRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "shdat",
          "package": "arx",
          "signature": "ArgsParser ([Word], [IOStream], [IOStream])",
          "source": "src/System-Posix-ARX-CLI-Options.html#shdat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "shdat",
          "normalized": "ArgsParser([Word],[IOStream],[IOStream])",
          "package": "arx",
          "signature": "ArgsParser([Word],[IOStream],[IOStream])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:shdat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "slashes",
          "package": "arx",
          "signature": "ArgsParser (Maybe ByteString)",
          "source": "src/System-Posix-ARX-CLI-Options.html#slashes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "slashes",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:slashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "tmpx",
          "package": "arx",
          "signature": "ArgsParser ([Word], [IOStream], [IOStream], [(Var, Val)], [(Bool, Bool)], [ByteSource])",
          "source": "src/System-Posix-ARX-CLI-Options.html#tmpx",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "tmpx",
          "normalized": "ArgsParser([Word],[IOStream],[IOStream],[(Var,Val)],[(Bool,Bool)],[ByteSource])",
          "package": "arx",
          "signature": "ArgsParser([Word],[IOStream],[IOStream],[(Var,Val)],[(Bool,Bool)],[ByteSource])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:tmpx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI.Options",
          "name": "tokCL",
          "package": "arx",
          "signature": "Class -\u003e ArgsParser ByteString",
          "source": "src/System-Posix-ARX-CLI-Options.html#tokCL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI Options",
          "module": "System.Posix.ARX.CLI.Options",
          "name": "tokCL",
          "normalized": "Class-\u003eArgsParser ByteString",
          "package": "arx",
          "partial": "CL",
          "signature": "Class-\u003eArgsParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI-Options.html#v:tokCL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "CLI",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "CLI",
          "package": "arx",
          "partial": "CLI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "ZOM",
          "package": "arx",
          "source": "src/System-Posix-ARX-CLI.html#ZOM",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "ZOM",
          "package": "arx",
          "partial": "ZOM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#t:ZOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "Many",
          "package": "arx",
          "signature": "Many ![ByteString]",
          "source": "src/System-Posix-ARX-CLI.html#ZOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "Many",
          "normalized": "Many[ByteString]",
          "package": "arx",
          "partial": "Many",
          "signature": "Many[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:Many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "One",
          "package": "arx",
          "signature": "One !ByteString",
          "source": "src/System-Posix-ARX-CLI.html#ZOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "One",
          "package": "arx",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "Zero",
          "package": "arx",
          "signature": "Zero",
          "source": "src/System-Posix-ARX-CLI.html#ZOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "Zero",
          "package": "arx",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "arIOStream",
          "package": "arx",
          "signature": "IOStream -\u003e IO (Maybe (Tar, ByteString))",
          "source": "src/System-Posix-ARX-CLI.html#arIOStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "arIOStream",
          "normalized": "IOStream-\u003eIO(Maybe(Tar,ByteString))",
          "package": "arx",
          "partial": "IOStream",
          "signature": "IOStream-\u003eIO(Maybe(Tar,ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:arIOStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "blockMessage",
          "package": "arx",
          "signature": "ByteString -\u003e [ByteString] -\u003e ByteString -\u003e ByteString",
          "source": "src/System-Posix-ARX-CLI.html#blockMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "blockMessage",
          "normalized": "ByteString-\u003e[ByteString]-\u003eByteString-\u003eByteString",
          "package": "arx",
          "partial": "Message",
          "signature": "ByteString-\u003e[ByteString]-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:blockMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default, we encode binary data to HERE docs 4MiB at a time. (The\n    encoded result may be up to 10% larger, though 1% is more likely.)\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI",
          "name": "defaultBlock",
          "package": "arx",
          "signature": "Word",
          "source": "src/System-Posix-ARX-CLI.html#defaultBlock",
          "type": "function"
        },
        "index": {
          "description": "By default we encode binary data to HERE docs MiB at time The encoded result may be up to larger though is more likely",
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "defaultBlock",
          "package": "arx",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:defaultBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default task is a no-op call to \u003ccode\u003e/bin/true\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI",
          "name": "defaultTask",
          "package": "arx",
          "signature": "ByteSource",
          "source": "src/System-Posix-ARX-CLI.html#defaultTask",
          "type": "function"
        },
        "index": {
          "description": "The default task is no-op call to bin true",
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "defaultTask",
          "package": "arx",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:defaultTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "die",
          "package": "arx",
          "signature": "ByteString -\u003e IO b",
          "source": "src/System-Posix-ARX-CLI.html#die",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "die",
          "normalized": "ByteString-\u003eIO a",
          "package": "arx",
          "signature": "ByteString-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "err",
          "package": "arx",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/System-Posix-ARX-CLI.html#err",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "err",
          "normalized": "ByteString-\u003eIO()",
          "package": "arx",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "inIOStream",
          "package": "arx",
          "signature": "IOStream -\u003e IO ByteString",
          "source": "src/System-Posix-ARX-CLI.html#inIOStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "inIOStream",
          "normalized": "IOStream-\u003eIO ByteString",
          "package": "arx",
          "partial": "IOStream",
          "signature": "IOStream-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:inIOStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun CLI tool, processing arguments and options.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI",
          "name": "main",
          "package": "arx",
          "signature": "IO ()",
          "source": "src/System-Posix-ARX-CLI.html#main",
          "type": "function"
        },
        "index": {
          "description": "Run CLI tool processing arguments and options",
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "main",
          "normalized": "IO()",
          "package": "arx",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "openByteSource",
          "package": "arx",
          "signature": "ByteSource -\u003e IO ByteString",
          "source": "src/System-Posix-ARX-CLI.html#openByteSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "openByteSource",
          "normalized": "ByteSource-\u003eIO ByteString",
          "package": "arx",
          "partial": "Byte Source",
          "signature": "ByteSource-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:openByteSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "outIOStream",
          "package": "arx",
          "signature": "IOStream -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Posix-ARX-CLI.html#outIOStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "outIOStream",
          "normalized": "IOStream-\u003eByteString-\u003eIO()",
          "package": "arx",
          "partial": "IOStream",
          "signature": "IOStream-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:outIOStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "shdatCheckStreams",
          "package": "arx",
          "signature": "[IOStream] -\u003e Maybe ByteString",
          "source": "src/System-Posix-ARX-CLI.html#shdatCheckStreams",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "shdatCheckStreams",
          "normalized": "[IOStream]-\u003eMaybe ByteString",
          "package": "arx",
          "partial": "Check Streams",
          "signature": "[IOStream]-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:shdatCheckStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply defaulting and overrides appropriate to \u003ccode\u003e\u003ca\u003eSHDAT\u003c/a\u003e\u003c/code\u003e programs.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI",
          "name": "shdatResolve",
          "package": "arx",
          "signature": "([Word], [IOStream], [IOStream]) -\u003e (Word, IOStream, [IOStream])",
          "source": "src/System-Posix-ARX-CLI.html#shdatResolve",
          "type": "function"
        },
        "index": {
          "description": "Apply defaulting and overrides appropriate to SHDAT programs",
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "shdatResolve",
          "normalized": "([Word],[IOStream],[IOStream])-\u003e(Word,IOStream,[IOStream])",
          "package": "arx",
          "partial": "Resolve",
          "signature": "([Word],[IOStream],[IOStream])-\u003e(Word,IOStream,[IOStream])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:shdatResolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "streamsMessage",
          "package": "arx",
          "signature": "[ZOM] -\u003e Maybe ByteString",
          "source": "src/System-Posix-ARX-CLI.html#streamsMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "streamsMessage",
          "normalized": "[ZOM]-\u003eMaybe ByteString",
          "package": "arx",
          "partial": "Message",
          "signature": "[ZOM]-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:streamsMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "tmpxCheckStreams",
          "package": "arx",
          "signature": "[IOStream] -\u003e ByteSource -\u003e Maybe ByteString",
          "source": "src/System-Posix-ARX-CLI.html#tmpxCheckStreams",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "tmpxCheckStreams",
          "normalized": "[IOStream]-\u003eByteSource-\u003eMaybe ByteString",
          "package": "arx",
          "partial": "Check Streams",
          "signature": "[IOStream]-\u003eByteSource-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:tmpxCheckStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.CLI",
          "name": "tmpxOpen",
          "package": "arx",
          "signature": "Word -\u003e [(Var, Val)] -\u003e (Bool, Bool) -\u003e ByteSource -\u003e IO TMPX",
          "source": "src/System-Posix-ARX-CLI.html#tmpxOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "tmpxOpen",
          "normalized": "Word-\u003e[(Var,Val)]-\u003e(Bool,Bool)-\u003eByteSource-\u003eIO TMPX",
          "package": "arx",
          "partial": "Open",
          "signature": "Word-\u003e[(Var,Val)]-\u003e(Bool,Bool)-\u003eByteSource-\u003eIO TMPX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:tmpxOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply defaulting and overrides appropriate to \u003ccode\u003e\u003ca\u003eTMPX\u003c/a\u003e\u003c/code\u003e programs.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.CLI",
          "name": "tmpxResolve",
          "package": "arx",
          "signature": "([Word], [IOStream], [IOStream], [(Var, Val)], [(Bool, Bool)], [ByteSource]) -\u003e (Word, IOStream, [IOStream], [(Var, Val)], (Bool, Bool), ByteSource)",
          "source": "src/System-Posix-ARX-CLI.html#tmpxResolve",
          "type": "function"
        },
        "index": {
          "description": "Apply defaulting and overrides appropriate to TMPX programs",
          "hierarchy": "System Posix ARX CLI",
          "module": "System.Posix.ARX.CLI",
          "name": "tmpxResolve",
          "normalized": "([Word],[IOStream],[IOStream],[(Var,Val)],[(Bool,Bool)],[ByteSource])-\u003e(Word,IOStream,[IOStream],[(Var,Val)],(Bool,Bool),ByteSource)",
          "package": "arx",
          "partial": "Resolve",
          "signature": "([Word],[IOStream],[IOStream],[(Var,Val)],[(Bool,Bool)],[ByteSource])-\u003e(Word,IOStream,[IOStream],[(Var,Val)],(Bool,Bool),ByteSource)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-CLI.html#v:tmpxResolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for encoding arbitrary data as Bourne shell fragments that\n    stream the data to standard output, using HERE documents and simple shell\n    decoders.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "HEREDat",
          "package": "arx",
          "source": "src/System-Posix-ARX-HEREDat.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for encoding arbitrary data as Bourne shell fragments that stream the data to standard output using HERE documents and simple shell decoders",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "HEREDat",
          "package": "arx",
          "partial": "HEREDat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chunk describes a block of binary data ready for inclusion in a shell\n    script. For many data blocks, no encoding or decoding is necessary; these\n    are stored in a \u003ccode\u003e\u003ca\u003eSafeChunk\u003c/a\u003e\u003c/code\u003e. Those blocks needing byte-translation are\n    stored in an \u003ccode\u003e\u003ca\u003eEncodedChunk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "Chunk",
          "package": "arx",
          "source": "src/System-Posix-ARX-HEREDat.html#Chunk",
          "type": "data"
        },
        "index": {
          "description": "chunk describes block of binary data ready for inclusion in shell script For many data blocks no encoding or decoding is necessary these are stored in SafeChunk Those blocks needing byte-translation are stored in an EncodedChunk",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "Chunk",
          "package": "arx",
          "partial": "Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.HEREDat",
          "name": "EscapeChar",
          "package": "arx",
          "source": "src/System-Posix-ARX-HEREDat.html#EscapeChar",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "EscapeChar",
          "package": "arx",
          "partial": "Escape Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#t:EscapeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.HEREDat",
          "name": "EncodedChunk",
          "package": "arx",
          "signature": "EncodedChunk !ByteString !Int !EscapeChar !EscapeChar",
          "source": "src/System-Posix-ARX-HEREDat.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "EncodedChunk",
          "package": "arx",
          "partial": "Encoded Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:EncodedChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.HEREDat",
          "name": "EscapeChar",
          "package": "arx",
          "signature": "EscapeChar !Word8 !ByteString !ByteString !ByteString",
          "source": "src/System-Posix-ARX-HEREDat.html#EscapeChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "EscapeChar",
          "package": "arx",
          "partial": "Escape Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:EscapeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.HEREDat",
          "name": "SafeChunk",
          "package": "arx",
          "signature": "SafeChunk !ByteString",
          "source": "src/System-Posix-ARX-HEREDat.html#Chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "SafeChunk",
          "package": "arx",
          "partial": "Safe Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:SafeChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a string safe for inclusion in a shell HERE\n    document and annotates with information to construct a shell decoder for\n    that document, if necessary.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with nulls is rewritten in a complicated way. Two escape\n    characters are chosen from a class of ASCII printable characters that look\n    like reasonable escape characters; the two that show up least frequently\n    in the document (including 0 times) become the null replacer and the\n    escaper. All instances of these two characters are rewritten to escape\n    sequences formed with the escaper, while nulls are rewritten to the null\n    replacer. Given the two characters thus chosen, a command line with \u003ccode\u003etr\u003c/code\u003e\n    and \u003ccode\u003esed\u003c/code\u003e in sequence can be constructed to decode the document.\n\u003c/p\u003e\u003cp\u003eThis encoding doubles the amount of space consumed by the escape\n    characters. In the worst case, where the data is made of all 20 potential\n    escapes, evenly distributed, and one null (so we can't punt on escaping),\n    the data will grow in size by 10 percent. For data that is more evenly\n    distributed over the bytes -- as we might expect of compressed tarballs --\n    we expect a size growth of two 256ths, or less than 0.8 percent.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "chunk",
          "package": "arx",
          "signature": "ByteString -\u003e Chunk",
          "source": "src/System-Posix-ARX-HEREDat.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString into string safe for inclusion in shell HERE document and annotates with information to construct shell decoder for that document if necessary ByteString with nulls is rewritten in complicated way Two escape characters are chosen from class of ASCII printable characters that look like reasonable escape characters the two that show up least frequently in the document including times become the null replacer and the escaper All instances of these two characters are rewritten to escape sequences formed with the escaper while nulls are rewritten to the null replacer Given the two characters thus chosen command line with tr and sed in sequence can be constructed to decode the document This encoding doubles the amount of space consumed by the escape characters In the worst case where the data is made of all potential escapes evenly distributed and one null so we can punt on escaping the data will grow in size by percent For data that is more evenly distributed over the bytes as we might expect of compressed tarballs we expect size growth of two ths or less than percent",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "chunk",
          "normalized": "ByteString-\u003eChunk",
          "package": "arx",
          "signature": "ByteString-\u003eChunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the byte used to replace nulls and the escape byte, undoes the result\n    of the encode operation -- rewriting null replacers to literal nulls and\n    escape patterns to the original bytes. This function is not intended to be\n    used in practice -- it will be shell commands that unpack the data -- but\n    serves to document the ideas behind decoding as well as offering a way to\n    check the encoder.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "decode",
          "package": "arx",
          "signature": "Word8 -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/System-Posix-ARX-HEREDat.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Given the byte used to replace nulls and the escape byte undoes the result of the encode operation rewriting null replacers to literal nulls and escape patterns to the original bytes This function is not intended to be used in practice it will be shell commands that unpack the data but serves to document the ideas behind decoding as well as offering way to check the encoder",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "decode",
          "normalized": "Word-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "arx",
          "signature": "Word-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a byte to replace nulls and an escape byte, rewrites the data such\n    that nulls are mapped to the replace byte, replace bytes are mapped to a\n    pair of escape bytes and the escape byte is is mapped to an escape byte\n    followed by an underscore. For example, if the null replace byte is \u003ccode\u003e!\u003c/code\u003e\n    and the escape byte is \u003ccode\u003e#\u003c/code\u003e then all nulls become \u003ccode\u003e!\u003c/code\u003e, any \u003ccode\u003e!\u003c/code\u003e become\n    \u003ccode\u003e##\u003c/code\u003e and all \u003ccode\u003e#\u003c/code\u003e become \u003ccode\u003e#_\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis escaping scheme is dictated by the needs of our Sed decoder, which is\n    just two global substitions, one after another. If the escaping were such\n    that, with our characters above, \u003ccode\u003e#\u003c/code\u003e escaped to \u003ccode\u003e##\u003c/code\u003e and \u003ccode\u003e!\u003c/code\u003e to \u003ccode\u003e#_\u003c/code\u003e,\n    then \u003ccode\u003e#_\u003c/code\u003e in the input becomes \u003ccode\u003e##_\u003c/code\u003e. We want to run the subsitution\n    for \u003ccode\u003e#\u003c/code\u003e first, to catch this; it produces \u003ccode\u003e#_\u003c/code\u003e; then Sed feeds the input\n    to the second substitution which unfortunately renders \u003ccode\u003e!\u003c/code\u003e. In the\n    alternate scheme, the input is encoded \u003ccode\u003e#__\u003c/code\u003e, the \u003ccode\u003e!\u003c/code\u003e decoder runs first\n    and ignores it, then the \u003ccode\u003e#\u003c/code\u003e decoder runs and catches it. When using a\n    pipeline of stream processors to interpret escape sequences, it seems best\n    to ensure that only the very last processor inserts escape characters, to\n    prevent their further interpretation.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "encode",
          "package": "arx",
          "signature": "Word8 -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/System-Posix-ARX-HEREDat.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Given byte to replace nulls and an escape byte rewrites the data such that nulls are mapped to the replace byte replace bytes are mapped to pair of escape bytes and the escape byte is is mapped to an escape byte followed by an underscore For example if the null replace byte is and the escape byte is then all nulls become any become and all become This escaping scheme is dictated by the needs of our Sed decoder which is just two global substitions one after another If the escaping were such that with our characters above escaped to and to then in the input becomes We want to run the subsitution for first to catch this it produces then Sed feeds the input to the second substitution which unfortunately renders In the alternate scheme the input is encoded the decoder runs first and ignores it then the decoder runs and catches it When using pipeline of stream processors to interpret escape sequences it seems best to ensure that only the very last processor inserts escape characters to prevent their further interpretation",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "encode",
          "normalized": "Word-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "arx",
          "signature": "Word-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to determine whether data is represented as an encoded chunk or\n    is unencoded.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "encoded",
          "package": "arx",
          "signature": "Chunk -\u003e Bool",
          "source": "src/System-Posix-ARX-HEREDat.html#encoded",
          "type": "function"
        },
        "index": {
          "description": "Predicate to determine whether data is represented as an encoded chunk or is unencoded",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "encoded",
          "normalized": "Chunk-\u003eBool",
          "package": "arx",
          "signature": "Chunk-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:encoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe candidate escape characters, with the forms to be used in constructed\n    \u003ccode\u003etr\u003c/code\u003e and \u003ccode\u003esed\u003c/code\u003e commands.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "escapes",
          "package": "arx",
          "signature": "[EscapeChar]",
          "source": "src/System-Posix-ARX-HEREDat.html#escapes",
          "type": "function"
        },
        "index": {
          "description": "The candidate escape characters with the forms to be used in constructed tr and sed commands",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "escapes",
          "normalized": "[EscapeChar]",
          "package": "arx",
          "signature": "[EscapeChar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:escapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany binary strings can be embedded as-is in a HEREDOC, without escaping.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.HEREDat",
          "name": "safeForHereDoc",
          "package": "arx",
          "signature": "ByteString -\u003e Bool",
          "source": "src/System-Posix-ARX-HEREDat.html#safeForHereDoc",
          "type": "function"
        },
        "index": {
          "description": "Many binary strings can be embedded as-is in HEREDOC without escaping",
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "safeForHereDoc",
          "normalized": "ByteString-\u003eBool",
          "package": "arx",
          "partial": "For Here Doc",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:safeForHereDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.HEREDat",
          "name": "script",
          "package": "arx",
          "signature": "Chunk -\u003e Builder",
          "source": "src/System-Posix-ARX-HEREDat.html#script",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX HEREDat",
          "module": "System.Posix.ARX.HEREDat",
          "name": "script",
          "normalized": "Chunk-\u003eBuilder",
          "package": "arx",
          "signature": "Chunk-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-HEREDat.html#v:script"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Programs",
          "name": "Programs",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "Programs",
          "package": "arx",
          "partial": "Programs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eARX subprograms process some input to produce a script.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.Programs",
          "name": "ARX",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html#ARX",
          "type": "class"
        },
        "index": {
          "description": "ARX subprograms process some input to produce script",
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "ARX",
          "package": "arx",
          "partial": "ARX",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#t:ARX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eSHDAT\u003c/a\u003e\u003c/code\u003e program processes byte streams with the specified chunking to\n    produce a script.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.Programs",
          "name": "SHDAT",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html#SHDAT",
          "type": "newtype"
        },
        "index": {
          "description": "An SHDAT program processes byte streams with the specified chunking to produce script",
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "SHDAT",
          "package": "arx",
          "partial": "SHDAT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#t:SHDAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMPX\u003c/a\u003e\u003c/code\u003e program archives streams to produce a script that unpacks the\n    file data in a temporary location and runs the command with the attached\n    environment information in that location. The command may be any\n    executable file contents, modulo architectural compatibility. It is\n    written along side the temporary work location, to ensure it does not\n    collide with any files in the archive. The two boolean flags determine\n    when to delete the temporary directory. The first flag determines whether\n    or not to delete successful (exit code zero) runs; the second determines\n    whether or not to delete failed (exit code non-zero) runs.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.Programs",
          "name": "TMPX",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html#TMPX",
          "type": "data"
        },
        "index": {
          "description": "TMPX program archives streams to produce script that unpacks the file data in temporary location and runs the command with the attached environment information in that location The command may be any executable file contents modulo architectural compatibility It is written along side the temporary work location to ensure it does not collide with any files in the archive The two boolean flags determine when to delete the temporary directory The first flag determines whether or not to delete successful exit code zero runs the second determines whether or not to delete failed exit code non-zero runs",
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "TMPX",
          "package": "arx",
          "partial": "TMPX",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#t:TMPX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Programs\",\"System.Posix.ARX\"]",
          "name": "SHDAT",
          "package": "arx",
          "signature": "SHDAT Word",
          "source": "src/System-Posix-ARX-Programs.html#SHDAT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#v:SHDAT\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:SHDAT\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "SHDAT",
          "package": "arx",
          "partial": "SHDAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#v:SHDAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Programs\",\"System.Posix.ARX\"]",
          "name": "TMPX",
          "package": "arx",
          "signature": "TMPX SHDAT ByteString [(Var, Val)] Bool Bool",
          "source": "src/System-Posix-ARX-Programs.html#TMPX",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#v:TMPX\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:TMPX\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "TMPX",
          "normalized": "TMPX SHDAT ByteString[(Var,Val)]Bool Bool",
          "package": "arx",
          "partial": "TMPX",
          "signature": "TMPX SHDAT ByteString[(Var,Val)]Bool Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#v:TMPX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Programs",
          "name": "interpret",
          "package": "arx",
          "signature": "program -\u003e input -\u003e Builder",
          "source": "src/System-Posix-ARX-Programs.html#interpret",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Posix ARX Programs",
          "module": "System.Posix.ARX.Programs",
          "name": "interpret",
          "normalized": "a-\u003eb-\u003eBuilder",
          "package": "arx",
          "signature": "program-\u003einput-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Programs.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with shell script.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.ARX.Sh",
          "name": "Sh",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with shell script",
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "Sh",
          "package": "arx",
          "partial": "Sh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Sh",
          "name": "Raw",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html#Raw",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "Raw",
          "package": "arx",
          "partial": "Raw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#t:Raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Sh",
          "name": "Render",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html#Render",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "Render",
          "package": "arx",
          "partial": "Render",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#t:Render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid shell string values contain any byte but null.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.Sh",
          "name": "Val",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html#Val",
          "type": "data"
        },
        "index": {
          "description": "Valid shell string values contain any byte but null",
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "Val",
          "package": "arx",
          "partial": "Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid shell variable names consist of a leading letter or underscore and\n    then any number of letters, underscores or digits.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.Sh",
          "name": "Var",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Valid shell variable names consist of leading letter or underscore and then any number of letters underscores or digits",
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "Var",
          "package": "arx",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Sh",
          "name": "raw",
          "package": "arx",
          "signature": "t -\u003e ByteString",
          "source": "src/System-Posix-ARX-Sh.html#raw",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "raw",
          "normalized": "a-\u003eByteString",
          "package": "arx",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Sh",
          "name": "render",
          "package": "arx",
          "signature": "t -\u003e Builder",
          "source": "src/System-Posix-ARX-Sh.html#render",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "render",
          "normalized": "a-\u003eBuilder",
          "package": "arx",
          "signature": "t-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Sh",
          "name": "setEU",
          "package": "arx",
          "signature": "Builder",
          "source": "src/System-Posix-ARX-Sh.html#setEU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "setEU",
          "package": "arx",
          "partial": "EU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:setEU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Sh\",\"System.Posix.ARX\"]",
          "name": "val",
          "package": "arx",
          "signature": "ByteString -\u003e Maybe Val",
          "source": "src/System-Posix-ARX-Sh.html#val",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:val\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:val\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "val",
          "normalized": "ByteString-\u003eMaybe Val",
          "package": "arx",
          "signature": "ByteString-\u003eMaybe Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Sh\",\"System.Posix.ARX\"]",
          "name": "var",
          "package": "arx",
          "signature": "ByteString -\u003e Maybe Var",
          "source": "src/System-Posix-ARX-Sh.html#var",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:var\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:var\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Sh",
          "module": "System.Posix.ARX.Sh",
          "name": "var",
          "normalized": "ByteString-\u003eMaybe Var",
          "package": "arx",
          "signature": "ByteString-\u003eMaybe Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Sh.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "TMPXTools",
          "package": "arx",
          "source": "src/System-Posix-ARX-TMPXTools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "TMPXTools",
          "package": "arx",
          "partial": "TMPXTools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "Template",
          "package": "arx",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "Template",
          "package": "arx",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "Template",
          "package": "arx",
          "signature": "Template",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "Template",
          "package": "arx",
          "partial": "Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "coalesce",
          "package": "arx",
          "signature": "[Maybe ByteString] -\u003e [ByteString]",
          "source": "src/System-Posix-ARX-TMPXTools.html#coalesce",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "coalesce",
          "normalized": "[Maybe ByteString]-\u003e[ByteString]",
          "package": "arx",
          "signature": "[Maybe ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:coalesce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData unpacking text. \n\u003c/p\u003e",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "dat",
          "package": "arx",
          "signature": "Builder",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "function"
        },
        "index": {
          "description": "Data unpacking text",
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "dat",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:dat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream for env text. \n\u003c/p\u003e",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "env",
          "package": "arx",
          "signature": "Builder",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "function"
        },
        "index": {
          "description": "Stream for env text",
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "env",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "findChunks",
          "package": "arx",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/System-Posix-ARX-TMPXTools.html#findChunks",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "findChunks",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "arx",
          "partial": "Chunks",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:findChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "isHole",
          "package": "arx",
          "signature": "ByteString -\u003e Bool",
          "source": "src/System-Posix-ARX-TMPXTools.html#isHole",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "isHole",
          "normalized": "ByteString-\u003eBool",
          "package": "arx",
          "partial": "Hole",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:isHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "markHoles",
          "package": "arx",
          "signature": "ByteString -\u003e [Maybe ByteString]",
          "source": "src/System-Posix-ARX-TMPXTools.html#markHoles",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "markHoles",
          "normalized": "ByteString-\u003e[Maybe ByteString]",
          "package": "arx",
          "partial": "Holes",
          "signature": "ByteString-\u003e[Maybe ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:markHoles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.TMPXTools",
          "name": "render",
          "package": "arx",
          "signature": "Template -\u003e Builder",
          "source": "src/System-Posix-ARX-TMPXTools.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "render",
          "normalized": "Template-\u003eBuilder",
          "package": "arx",
          "signature": "Template-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove tmp on run success?    \n\u003c/p\u003e",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "rm0",
          "package": "arx",
          "signature": "Bool",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "function"
        },
        "index": {
          "description": "Remove tmp on run success",
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "rm0",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:rm0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove tmp on run error?      \n\u003c/p\u003e",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "rm1",
          "package": "arx",
          "signature": "Bool",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "function"
        },
        "index": {
          "description": "Remove tmp on run error",
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "rm1",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:rm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream for run text. \n\u003c/p\u003e",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "run",
          "package": "arx",
          "signature": "Builder",
          "source": "src/System-Posix-ARX-TMPXTools.html#Template",
          "type": "function"
        },
        "index": {
          "description": "Stream for run text",
          "hierarchy": "System Posix ARX TMPXTools",
          "module": "System.Posix.ARX.TMPXTools",
          "name": "run",
          "package": "arx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-TMPXTools.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Tar",
          "name": "Tar",
          "package": "arx",
          "source": "src/System-Posix-ARX-Tar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "Tar",
          "package": "arx",
          "partial": "Tar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandled styles of Tar archive.\n\u003c/p\u003e",
          "module": "System.Posix.ARX.Tar",
          "name": "Tar",
          "package": "arx",
          "source": "src/System-Posix-ARX-Tar.html#Tar",
          "type": "data"
        },
        "index": {
          "description": "Handled styles of Tar archive",
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "Tar",
          "package": "arx",
          "partial": "Tar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#t:Tar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Tar\",\"System.Posix.ARX\"]",
          "name": "TAR",
          "package": "arx",
          "signature": "TAR",
          "source": "src/System-Posix-ARX-Tar.html#Tar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:TAR\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:TAR\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "TAR",
          "package": "arx",
          "partial": "TAR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:TAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Tar\",\"System.Posix.ARX\"]",
          "name": "TBZ",
          "package": "arx",
          "signature": "TBZ",
          "source": "src/System-Posix-ARX-Tar.html#Tar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:TBZ\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:TBZ\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "TBZ",
          "package": "arx",
          "partial": "TBZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:TBZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Posix.ARX.Tar\",\"System.Posix.ARX\"]",
          "name": "TGZ",
          "package": "arx",
          "signature": "TGZ",
          "source": "src/System-Posix-ARX-Tar.html#Tar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:TGZ\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:TGZ\"]"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "TGZ",
          "package": "arx",
          "partial": "TGZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:TGZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Tar",
          "name": "bzMagic",
          "package": "arx",
          "signature": "ByteString -\u003e Bool",
          "source": "src/System-Posix-ARX-Tar.html#bzMagic",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "bzMagic",
          "normalized": "ByteString-\u003eBool",
          "package": "arx",
          "partial": "Magic",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:bzMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Tar",
          "name": "gzMagic",
          "package": "arx",
          "signature": "ByteString -\u003e Bool",
          "source": "src/System-Posix-ARX-Tar.html#gzMagic",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "gzMagic",
          "normalized": "ByteString-\u003eBool",
          "package": "arx",
          "partial": "Magic",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:gzMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScan a lazy ByteString for file magic.\n\u003c/p\u003e",
          "module": "[\"System.Posix.ARX.Tar\",\"System.Posix.ARX\"]",
          "name": "magic",
          "package": "arx",
          "signature": "ByteString -\u003e Maybe Tar",
          "source": "src/System-Posix-ARX-Tar.html#magic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:magic\",\"http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:magic\"]"
        },
        "index": {
          "description": "Scan lazy ByteString for file magic",
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "magic",
          "normalized": "ByteString-\u003eMaybe Tar",
          "package": "arx",
          "signature": "ByteString-\u003eMaybe Tar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX.Tar",
          "name": "tarMagic",
          "package": "arx",
          "signature": "ByteString -\u003e Bool",
          "source": "src/System-Posix-ARX-Tar.html#tarMagic",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix ARX Tar",
          "module": "System.Posix.ARX.Tar",
          "name": "tarMagic",
          "normalized": "ByteString-\u003eBool",
          "package": "arx",
          "partial": "Magic",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX-Tar.html#v:tarMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX",
          "name": "ARX",
          "package": "arx",
          "source": "src/System-Posix-ARX.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "ARX",
          "package": "arx",
          "partial": "ARX",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eARX subprograms process some input to produce a script.\n\u003c/p\u003e",
          "module": "System.Posix.ARX",
          "name": "ARX",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html#ARX",
          "type": "class"
        },
        "index": {
          "description": "ARX subprograms process some input to produce script",
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "ARX",
          "package": "arx",
          "partial": "ARX",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#t:ARX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eSHDAT\u003c/a\u003e\u003c/code\u003e program processes byte streams with the specified chunking to\n    produce a script.\n\u003c/p\u003e",
          "module": "System.Posix.ARX",
          "name": "SHDAT",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html#SHDAT",
          "type": "newtype"
        },
        "index": {
          "description": "An SHDAT program processes byte streams with the specified chunking to produce script",
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "SHDAT",
          "package": "arx",
          "partial": "SHDAT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#t:SHDAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTMPX\u003c/a\u003e\u003c/code\u003e program archives streams to produce a script that unpacks the\n    file data in a temporary location and runs the command with the attached\n    environment information in that location. The command may be any\n    executable file contents, modulo architectural compatibility. It is\n    written along side the temporary work location, to ensure it does not\n    collide with any files in the archive. The two boolean flags determine\n    when to delete the temporary directory. The first flag determines whether\n    or not to delete successful (exit code zero) runs; the second determines\n    whether or not to delete failed (exit code non-zero) runs.\n\u003c/p\u003e",
          "module": "System.Posix.ARX",
          "name": "TMPX",
          "package": "arx",
          "source": "src/System-Posix-ARX-Programs.html#TMPX",
          "type": "data"
        },
        "index": {
          "description": "TMPX program archives streams to produce script that unpacks the file data in temporary location and runs the command with the attached environment information in that location The command may be any executable file contents modulo architectural compatibility It is written along side the temporary work location to ensure it does not collide with any files in the archive The two boolean flags determine when to delete the temporary directory The first flag determines whether or not to delete successful exit code zero runs the second determines whether or not to delete failed exit code non-zero runs",
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "TMPX",
          "package": "arx",
          "partial": "TMPX",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#t:TMPX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandled styles of Tar archive.\n\u003c/p\u003e",
          "module": "System.Posix.ARX",
          "name": "Tar",
          "package": "arx",
          "source": "src/System-Posix-ARX-Tar.html#Tar",
          "type": "data"
        },
        "index": {
          "description": "Handled styles of Tar archive",
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "Tar",
          "package": "arx",
          "partial": "Tar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#t:Tar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid shell string values contain any byte but null.\n\u003c/p\u003e",
          "module": "System.Posix.ARX",
          "name": "Val",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html#Val",
          "type": "data"
        },
        "index": {
          "description": "Valid shell string values contain any byte but null",
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "Val",
          "package": "arx",
          "partial": "Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid shell variable names consist of a leading letter or underscore and\n    then any number of letters, underscores or digits.\n\u003c/p\u003e",
          "module": "System.Posix.ARX",
          "name": "Var",
          "package": "arx",
          "source": "src/System-Posix-ARX-Sh.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Valid shell variable names consist of leading letter or underscore and then any number of letters underscores or digits",
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "Var",
          "package": "arx",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.ARX",
          "name": "interpret",
          "package": "arx",
          "signature": "program -\u003e input -\u003e Builder",
          "source": "src/System-Posix-ARX-Programs.html#interpret",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Posix ARX",
          "module": "System.Posix.ARX",
          "name": "interpret",
          "normalized": "a-\u003eb-\u003eBuilder",
          "package": "arx",
          "signature": "program-\u003einput-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arx/docs/System-Posix-ARX.html#v:interpret"
      }
    }
  ]
]