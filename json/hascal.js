[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hascal/docs/Hascal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHascal is both a simple but extendable calculator library for Haskell\n and a command-line program using it.\n\u003c/p\u003e\u003cp\u003eAlso, its source code is a nice example for a minimalistic Haskell project.\n\u003c/p\u003e\u003cp\u003eSome examples for the usage of the command-line program (using bash):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal 1+2\n\u003c/code\u003e\u003c/strong\u003e3.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal 1+2*3-4/198^2\n\u003c/code\u003e\u003c/strong\u003e6.99989796959493929190898887868584838281807978777676\n\u003c/pre\u003e\u003cp\u003eAlso, preceding exclamation marks mean that the following number is\n imaginary, that is, you have to multiply it with i. E.g.:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal _1 ^ 0.5\n\u003c/code\u003e\u003c/strong\u003e!1.0\n\u003c/pre\u003e\u003cp\u003eAnd as you can see, negative numbers are preceded by an underscore.\n\u003c/p\u003e\u003cp\u003eAlthough hascal itself doesn't understand brackets, you can use your shell\n to get that functionality, like this (using bash):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal e ^ $(hascal i*pi)\n\u003c/code\u003e\u003c/strong\u003e-1.0\n\u003c/pre\u003e\u003cp\u003eSpeaking of shells, you should consider that your shell might extend an\n asterisk (*) to the files at the current directory, like this:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eecho *\n\u003c/code\u003e\u003c/strong\u003e_darcs dist hascal.cabal Hascal.hs LICENSE Main.hs README.org Setup.hs\n\u003c/pre\u003e\u003cp\u003eThat's why this might not work:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal 1 * 2\n\u003c/code\u003e\u003c/strong\u003eError. :(\n\u003c/pre\u003e\u003cp\u003eBut you could do this instead:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal 1*2\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cp\u003eOr, you could do:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehascal '1*2'\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e\u003cp\u003eYeah, that's pretty much it. Hascal is really minimalistic.\n And I'm not planning to extend it much.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hascal",
        "fct-package": "hascal",
        "fct-signature": "module",
        "fct-source": "src/Hascal.html",
        "fct-type": "module",
        "title": "Hascal"
      },
      "index": {
        "description": "Hascal is both simple but extendable calculator library for Haskell and command-line program using it Also its source code is nice example for minimalistic Haskell project Some examples for the usage of the command-line program using bash hascal hascal Also preceding exclamation marks mean that the following number is imaginary that is you have to multiply it with E.g hascal And as you can see negative numbers are preceded by an underscore Although hascal itself doesn understand brackets you can use your shell to get that functionality like this using bash hascal hascal pi Speaking of shells you should consider that your shell might extend an asterisk to the files at the current directory like this echo darcs dist hascal.cabal Hascal.hs LICENSE Main.hs README.org Setup.hs That why this might not work hascal Error But you could do this instead hascal Or you could do hascal Yeah that pretty much it Hascal is really minimalistic And not planning to extend it much",
        "hierarchy": "Hascal",
        "module": "Hascal",
        "name": "Hascal",
        "normalized": "",
        "package": "hascal",
        "partial": "Hascal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hascal/docs/Hascal.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e gets a list of operators and a string containing a mathematical\n expression/term which only uses those operators listed in the first\n argument, and returns the result of that term.\n\u003c/p\u003e",
        "fct-module": "Hascal",
        "fct-package": "hascal",
        "fct-signature": "[(Char, Complex t -\u003e Complex t -\u003e Complex t)]-\u003e String-\u003e Either String (Complex t)",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "eval gets list of operators and string containing mathematical expression term which only uses those operators listed in the first argument and returns the result of that term",
        "hierarchy": "Hascal",
        "module": "Hascal",
        "name": "eval",
        "normalized": "[(Char,Complex a-\u003eComplex a-\u003eComplex a)]-\u003eString-\u003eEither String(Complex a)",
        "package": "hascal",
        "partial": "",
        "signature": "[(Char,Complex t-\u003eComplex t-\u003eComplex t)]-\u003eString-\u003eEither String(Complex t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hascal/docs/Hascal.html#v:hascal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehascal\u003c/a\u003e\u003c/code\u003e is the default evaluator:\n\u003c/p\u003e\u003cpre\u003e hascal = \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eoperators\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Hascal",
        "fct-package": "hascal",
        "fct-signature": "String -\u003e Either String (Complex t)",
        "fct-source": "src/Hascal.html#hascal",
        "fct-type": "function",
        "title": "hascal"
      },
      "index": {
        "description": "hascal is the default evaluator hascal eval operators",
        "hierarchy": "Hascal",
        "module": "Hascal",
        "name": "hascal",
        "normalized": "String-\u003eEither String(Complex a)",
        "package": "hascal",
        "partial": "",
        "signature": "String-\u003eEither String(Complex t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hascal/docs/Hascal.html#v:operators",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eoperators\u003c/a\u003e\u003c/code\u003e is the default list of operators.\n\u003c/p\u003e\u003cp\u003eAn operator consists of one character and a function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eoperators\u003c/a\u003e\u003c/code\u003e includes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e addition, represented by \u003ccode\u003e'+'\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e subtraction, represented by \u003ccode\u003e'-'\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e multiplication, represented by \u003ccode\u003e'*'\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e division, represented by \u003ccode\u003e'/'\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e exponentiation, represented by \u003ccode\u003e'^'\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e logarithming (with flipped arguments, see below), represented by \u003ccode\u003e'?'\u003c/code\u003e,\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003esuch that these laws are held:\n\u003c/p\u003e\u003cpre\u003e (a - b == c) == (a == b + c)\n (a / b == c) == (a == b * c)\n (a ? b == c) == (a == b ^ c)\n\u003c/pre\u003e",
        "fct-module": "Hascal",
        "fct-package": "hascal",
        "fct-signature": "[(Char, Complex t -\u003e Complex t -\u003e Complex t)]",
        "fct-source": "src/Hascal.html#operators",
        "fct-type": "function",
        "title": "operators"
      },
      "index": {
        "description": "operators is the default list of operators An operator consists of one character and function operators includes addition represented by subtraction represented by multiplication represented by division represented by exponentiation represented by and logarithming with flipped arguments see below represented by such that these laws are held",
        "hierarchy": "Hascal",
        "module": "Hascal",
        "name": "operators",
        "normalized": "[(Char,Complex a-\u003eComplex a-\u003eComplex a)]",
        "package": "hascal",
        "partial": "",
        "signature": "[(Char,Complex t-\u003eComplex t-\u003eComplex t)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hascal/docs/Hascal.html#v:prettyPrint",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e prints a number nicely.\n E.g., it doesn't show the real or imaginary part of the number if it's \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hascal",
        "fct-package": "hascal",
        "fct-signature": "Complex t -\u003e String",
        "fct-source": "src/Hascal.html#prettyPrint",
        "fct-type": "function",
        "title": "prettyPrint"
      },
      "index": {
        "description": "prettyPrint prints number nicely E.g it doesn show the real or imaginary part of the number if it",
        "hierarchy": "Hascal",
        "module": "Hascal",
        "name": "prettyPrint",
        "normalized": "Complex a-\u003eString",
        "package": "hascal",
        "partial": "Print",
        "signature": "Complex t-\u003eString"
      }
    }
  }
]