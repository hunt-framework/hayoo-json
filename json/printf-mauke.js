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
        "word": "printf-mauke"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke.TH",
          "name": "TH",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Printf Mauke TH",
          "module": "Text.Printf.Mauke.TH",
          "name": "TH",
          "package": "printf-mauke",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static checking layer on top of \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e. It hasn't\n been tested much, but static argument checking is always a good idea. To use\n it, add\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n\n import Text.Printf.Mauke.TH\n\u003c/pre\u003e\u003cp\u003eat the top of your code and call \u003ccode\u003e$(\u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e \"%d %d\") x y\u003c/code\u003e instead of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e \"%d %d\" x y\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eStarting with version 0.6.0 of this library, \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e 's return type is\n overloaded: Like the non-TH \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e it can return either\n a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e. (It used to return \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e unconditionally.)\n\u003c/p\u003e",
          "module": "Text.Printf.Mauke.TH",
          "name": "printf",
          "package": "printf-mauke",
          "signature": "String -\u003e ExpQ",
          "source": "src/Text-Printf-Mauke-TH.html#printf",
          "type": "function"
        },
        "index": {
          "description": "static checking layer on top of printf It hasn been tested much but static argument checking is always good idea To use it add LANGUAGE TemplateHaskell import Text.Printf.Mauke.TH at the top of your code and call printf instead of printf Starting with version of this library printf return type is overloaded Like the non-TH printf it can return either String or IO It used to return String unconditionally",
          "hierarchy": "Text Printf Mauke TH",
          "module": "Text.Printf.Mauke.TH",
          "name": "printf",
          "normalized": "String-\u003eExpQ",
          "package": "printf-mauke",
          "signature": "String-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke-TH.html#v:printf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e but always returns a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. In versions before\n 0.6.0 of this library, this function was called \u003ccode\u003eprintf\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.Mauke.TH",
          "name": "sprintf",
          "package": "printf-mauke",
          "signature": "String -\u003e ExpQ",
          "source": "src/Text-Printf-Mauke-TH.html#sprintf",
          "type": "function"
        },
        "index": {
          "description": "Works like printf but always returns String In versions before of this library this function was called printf",
          "hierarchy": "Text Printf Mauke TH",
          "module": "Text.Printf.Mauke.TH",
          "name": "sprintf",
          "normalized": "String-\u003eExpQ",
          "package": "printf-mauke",
          "signature": "String-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke-TH.html#v:sprintf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "Mauke",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "Mauke",
          "package": "printf-mauke",
          "partial": "Mauke",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal type used to wrap and store all arguments.\n\u003c/p\u003e",
          "module": "Text.Printf.Mauke",
          "name": "Arg",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke-Internal.html#Arg",
          "type": "data"
        },
        "index": {
          "description": "The internal type used to wrap and store all arguments",
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "Arg",
          "package": "printf-mauke",
          "partial": "Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "FromChar",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke-Internal.html#FromChar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "FromChar",
          "package": "printf-mauke",
          "partial": "From Char",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#t:FromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "HPrintfType",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke.html#HPrintfType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "HPrintfType",
          "package": "printf-mauke",
          "partial": "HPrintf Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#t:HPrintfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for valid printf arguments.\n\u003c/p\u003e",
          "module": "Text.Printf.Mauke",
          "name": "PrintfArg",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke-Internal.html#PrintfArg",
          "type": "class"
        },
        "index": {
          "description": "Class for valid printf arguments",
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "PrintfArg",
          "package": "printf-mauke",
          "partial": "Printf Arg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#t:PrintfArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "PrintfType",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke.html#PrintfType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "PrintfType",
          "package": "printf-mauke",
          "partial": "Printf Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#t:PrintfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "ToChar",
          "package": "printf-mauke",
          "source": "src/Text-Printf-Mauke-Internal.html#ToChar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "ToChar",
          "package": "printf-mauke",
          "partial": "To Char",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#t:ToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "AChar",
          "package": "printf-mauke",
          "signature": "AChar Char",
          "source": "src/Text-Printf-Mauke-Internal.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "AChar",
          "package": "printf-mauke",
          "partial": "AChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:AChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "AFloat",
          "package": "printf-mauke",
          "signature": "AFloat Double",
          "source": "src/Text-Printf-Mauke-Internal.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "AFloat",
          "package": "printf-mauke",
          "partial": "AFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:AFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "AInt",
          "package": "printf-mauke",
          "signature": "AInt Integer",
          "source": "src/Text-Printf-Mauke-Internal.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "AInt",
          "package": "printf-mauke",
          "partial": "AInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:AInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "AStr",
          "package": "printf-mauke",
          "signature": "AStr String",
          "source": "src/Text-Printf-Mauke-Internal.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "AStr",
          "package": "printf-mauke",
          "partial": "AStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:AStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "embed",
          "package": "printf-mauke",
          "signature": "a -\u003e Arg",
          "source": "src/Text-Printf-Mauke-Internal.html#embed",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "embed",
          "normalized": "a-\u003eArg",
          "package": "printf-mauke",
          "signature": "a-\u003eArg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "fromChar",
          "package": "printf-mauke",
          "signature": "Char -\u003e a",
          "source": "src/Text-Printf-Mauke-Internal.html#fromChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "fromChar",
          "normalized": "Char-\u003ea",
          "package": "printf-mauke",
          "partial": "Char",
          "signature": "Char-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:fromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e, except that the result is printed to the specified\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Printf.Mauke",
          "name": "hPrintf",
          "package": "printf-mauke",
          "signature": "Handle -\u003e String -\u003e r",
          "source": "src/Text-Printf-Mauke.html#hPrintf",
          "type": "function"
        },
        "index": {
          "description": "Like printf except that the result is printed to the specified Handle",
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "hPrintf",
          "normalized": "Handle-\u003eString-\u003ea",
          "package": "printf-mauke",
          "partial": "Printf",
          "signature": "Handle-\u003eString-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:hPrintf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a variable number of arguments according to a format string,\n similar to (s)printf in Perl. The return value is either a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, in which case the result is printed to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e. If you use the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e variant, don't use the result: Because it has to be of any type \u003ccode\u003ea\u003c/code\u003e,\n this library makes it \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe format string consists of ordinary characters (everything except\n \u003ccode\u003e'%'\u003c/code\u003e), which are passed through unchanged, and formatting directives,\n which have the following form:\n\u003c/p\u003e\u003cpre\u003e\n  % \u003cem\u003eflag\u003c/em\u003e* \u003cem\u003evector\u003c/em\u003e? \u003cem\u003ewidth\u003c/em\u003e? \u003cem\u003eprecision\u003c/em\u003e? \u003cem\u003etype\u003c/em\u003e\n\u003c/pre\u003e\u003cp\u003e(\u003ccode\u003e*\u003c/code\u003e and \u003ccode\u003e?\u003c/code\u003e mean 0 or more and 0 or 1 of the preceding item, respectively.)\n\u003c/p\u003e\u003cp\u003eFlags:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003espace\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e prefix positive numbers with a space\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e+\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e prefix positive numbers with a plus sign (overrides space if both are\n present)\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e-\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e left-justify within the field\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e0\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e pad with zeroes on the left, not spaces\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e#\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e prefix binary numbers with \u003ccode\u003e0b\u003c/code\u003e/\u003ccode\u003e0B\u003c/code\u003e, octal numbers with \u003ccode\u003e0o\u003c/code\u003e/\u003ccode\u003e0O\u003c/code\u003e\n and hexadecimal numbers with \u003ccode\u003e0x\u003c/code\u003e/\u003ccode\u003e0X\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe \u003cem\u003evector\u003c/em\u003e flag \u003ccode\u003ev\u003c/code\u003e tells \u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e to format each character in the string\n argument according to the current directive, then joins the results with a\n separator that defaults to \u003ccode\u003e\".\"\u003c/code\u003e. When \u003ccode\u003e*v\u003c/code\u003e is used, the separator is\n taken from the argument list (use e.g. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eprintf\u003c/a\u003e\u003c/code\u003e \"%*v.2x\" \"\" str\u003c/code\u003e if you\n want no separator).\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003ewidth\u003c/em\u003e is either a decimal integer or \u003ccode\u003e*\u003c/code\u003e, in which case the width is\n taken from the argument list (this argument must be an integer). It\n specifies the minimum width for this field. Shorter values are padded on\n the left with spaces (but this can be changed by the \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003e-\u003c/code\u003e flags). If\n the \u003cem\u003ewidth\u003c/em\u003e taken from the argument list is negative, it behaves as if the\n \u003ccode\u003e-\u003c/code\u003e flag was specified.\n\u003c/p\u003e\u003cp\u003eThe \u003cem\u003eprecision\u003c/em\u003e consists of a \u003ccode\u003e.\u003c/code\u003e followed by digits or a \u003ccode\u003e*\u003c/code\u003e (see the\n description of \u003cem\u003ewidth\u003c/em\u003e above). The effects depend on the format \u003cem\u003etype\u003c/em\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e for floating point formats, this specifies the number of digits after the\n decimal point\n\u003c/li\u003e\u003cli\u003e for string formats, this is the maximum number of characters to appear\n (longer strings are truncated)\n\u003c/li\u003e\u003cli\u003e for integer formats, this is the minimum number of digits to appear in\n the output; shorter values are zero-padded\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTypes:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e%\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A percent sign. No argument is consumed.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ec\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A character. If the argument is an integer, it is converted with\n \u003ccode\u003echr\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003es\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A string.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ed\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A decimal integer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eu\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e An unsigned decimal integer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eb\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A binary integer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eB\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Like \u003ccode\u003eb\u003c/code\u003e, but using a \u003ccode\u003e0B\u003c/code\u003e prefix with \u003ccode\u003e#\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eo\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e An octal integer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eO\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Like \u003ccode\u003eo\u003c/code\u003e, but using a \u003ccode\u003e0O\u003c/code\u003e prefix with \u003ccode\u003e#\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ex\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A hexadecimal integer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eX\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Like \u003ccode\u003ex\u003c/code\u003e, but using uppercase letters.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ee\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A floating point number in scientific notation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Like \u003ccode\u003ee\u003c/code\u003e, but using an uppercase \u003ccode\u003eE\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ef\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A floating point number in fixed decimal notation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eg\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A floating point number in \u003ccode\u003e%e\u003c/code\u003e or \u003ccode\u003e%f\u003c/code\u003e notation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eG\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Like \u003ccode\u003eg\u003c/code\u003e, but using an uppercase \u003ccode\u003eE\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e_\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A generic format; it behaves like \u003ccode\u003e%c\u003c/code\u003e, \u003ccode\u003e%s\u003c/code\u003e, \u003ccode\u003e%d\u003c/code\u003e or \u003ccode\u003e%g\u003c/code\u003e, depending\n on the argument type.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Text.Printf.Mauke",
          "name": "printf",
          "package": "printf-mauke",
          "signature": "String -\u003e r",
          "source": "src/Text-Printf-Mauke.html#printf",
          "type": "function"
        },
        "index": {
          "description": "Format variable number of arguments according to format string similar to printf in Perl The return value is either String or IO in which case the result is printed to stdout If you use the IO variant don use the result Because it has to be of any type this library makes it undefined The format string consists of ordinary characters everything except which are passed through unchanged and formatting directives which have the following form flag vector width precision type and mean or more and or of the preceding item respectively Flags space prefix positive numbers with space prefix positive numbers with plus sign overrides space if both are present left-justify within the field pad with zeroes on the left not spaces prefix binary numbers with octal numbers with and hexadecimal numbers with The vector flag tells printf to format each character in the string argument according to the current directive then joins the results with separator that defaults to When is used the separator is taken from the argument list use e.g printf v.2x str if you want no separator The width is either decimal integer or in which case the width is taken from the argument list this argument must be an integer It specifies the minimum width for this field Shorter values are padded on the left with spaces but this can be changed by the and flags If the width taken from the argument list is negative it behaves as if the flag was specified The precision consists of followed by digits or see the description of width above The effects depend on the format type for floating point formats this specifies the number of digits after the decimal point for string formats this is the maximum number of characters to appear longer strings are truncated for integer formats this is the minimum number of digits to appear in the output shorter values are zero-padded Types percent sign No argument is consumed character If the argument is an integer it is converted with chr string decimal integer An unsigned decimal integer binary integer Like but using prefix with An octal integer Like but using prefix with hexadecimal integer Like but using uppercase letters floating point number in scientific notation Like but using an uppercase floating point number in fixed decimal notation floating point number in or notation Like but using an uppercase generic format it behaves like or depending on the argument type",
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "printf",
          "normalized": "String-\u003ea",
          "package": "printf-mauke",
          "signature": "String-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:printf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Printf.Mauke",
          "name": "toChar",
          "package": "printf-mauke",
          "signature": "a -\u003e Char",
          "source": "src/Text-Printf-Mauke-Internal.html#toChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Printf Mauke",
          "module": "Text.Printf.Mauke",
          "name": "toChar",
          "normalized": "a-\u003eChar",
          "package": "printf-mauke",
          "partial": "Char",
          "signature": "a-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/printf-mauke/docs/Text-Printf-Mauke.html#v:toChar"
      }
    }
  ]
]