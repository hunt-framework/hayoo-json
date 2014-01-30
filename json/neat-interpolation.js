[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/neat-interpolation/docs/NeatInterpolation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNeatInterpolation provides a quasiquoter for producing strings \n with a simple interpolation of input values. \n It removes the excessive indentation from the input and \n accurately manages the indentation of all lines of interpolated variables. \n But enough words, the code shows it better.\n\u003c/p\u003e\u003cp\u003eConsider the following declaration:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE QuasiQuotes, OverloadedStrings #-}\n \n import NeatInterpolation\n \n f :: String -\u003e String -\u003e String\n f a b = \n   [string|\n     function(){\n       function(){\n         $a\n       }\n       return $b\n     }\n   |]\n\u003c/pre\u003e\u003cp\u003eExecuting the following:\n\u003c/p\u003e\u003cpre\u003e main = putStrLn $ f \"1\" \"2\"\n\u003c/pre\u003e\u003cp\u003ewill produce this (notice the reduced indentation compared to how it was\n declared):\n\u003c/p\u003e\u003cpre\u003e function(){\n   function(){\n     1\n   }\n   return 2\n }\n\u003c/pre\u003e\u003cp\u003eNow let's test it with multiline string parameters:\n\u003c/p\u003e\u003cpre\u003e main = putStrLn $ f \n   \"{\\n  indented line\\n  indented line\\n}\" \n   \"{\\n  indented line\\n  indented line\\n}\" \n\u003c/pre\u003e\u003cp\u003eWe get\n\u003c/p\u003e\u003cpre\u003e function(){\n   function(){\n     {\n       indented line\n       indented line\n     }\n   }\n   return {\n     indented line\n     indented line\n   }\n }\n\u003c/pre\u003e\u003cp\u003eSee how it neatly preserved the indentation levels of lines the \n variable placeholders were at?  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "NeatInterpolation",
        "fct-package": "neat-interpolation",
        "fct-signature": "module",
        "fct-source": "src/NeatInterpolation.html",
        "fct-type": "module",
        "title": "NeatInterpolation"
      },
      "index": {
        "description": "NeatInterpolation provides quasiquoter for producing strings with simple interpolation of input values It removes the excessive indentation from the input and accurately manages the indentation of all lines of interpolated variables But enough words the code shows it better Consider the following declaration LANGUAGE QuasiQuotes OverloadedStrings import NeatInterpolation String String String string function function return Executing the following main putStrLn will produce this notice the reduced indentation compared to how it was declared function function return Now let test it with multiline string parameters main putStrLn indented line indented line indented line indented line We get function function indented line indented line return indented line indented line See how it neatly preserved the indentation levels of lines the variable placeholders were at",
        "hierarchy": "NeatInterpolation",
        "module": "NeatInterpolation",
        "name": "NeatInterpolation",
        "normalized": "",
        "package": "neat-interpolation",
        "partial": "Neat Interpolation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/neat-interpolation/docs/NeatInterpolation.html#v:indentQQPlaceholder",
      "description": {
        "fct-descr": "\u003cp\u003eA function used internally by quasiquoter. Just ignore it.\n\u003c/p\u003e",
        "fct-module": "NeatInterpolation",
        "fct-package": "neat-interpolation",
        "fct-signature": "Int -\u003e String -\u003e String",
        "fct-source": "src/NeatInterpolation.html#indentQQPlaceholder",
        "fct-type": "function",
        "title": "indentQQPlaceholder"
      },
      "index": {
        "description": "function used internally by quasiquoter Just ignore it",
        "hierarchy": "NeatInterpolation",
        "module": "NeatInterpolation",
        "name": "indentQQPlaceholder",
        "normalized": "Int-\u003eString-\u003eString",
        "package": "neat-interpolation",
        "partial": "QQPlaceholder",
        "signature": "Int-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/neat-interpolation/docs/NeatInterpolation.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003eThe quasiquoter.\n\u003c/p\u003e",
        "fct-module": "NeatInterpolation",
        "fct-package": "neat-interpolation",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/NeatInterpolation.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "The quasiquoter",
        "hierarchy": "NeatInterpolation",
        "module": "NeatInterpolation",
        "name": "string",
        "normalized": "",
        "package": "neat-interpolation",
        "partial": "",
        "signature": ""
      }
    }
  }
]