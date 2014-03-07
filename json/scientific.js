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
        "word": "scientific"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is designed to be imported qualified:\n\u003c/p\u003e\u003cpre\u003eimport Data.Scientific as Scientific\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Scientific",
          "name": "Scientific",
          "package": "scientific",
          "source": "src/Data-Scientific.html",
          "type": "module"
        },
        "index": {
          "description": "This module is designed to be imported qualified import Data.Scientific as Scientific",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "Scientific",
          "package": "scientific",
          "partial": "Scientific",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl the rendering of floating point numbers.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "FPFormat",
          "package": "scientific",
          "source": "src/Data-Scientific.html#FPFormat",
          "type": "data"
        },
        "index": {
          "description": "Control the rendering of floating point numbers",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "FPFormat",
          "package": "scientific",
          "partial": "FPFormat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#t:FPFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary-precision number represented using\n \u003ca\u003escientific notation\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis type describes the set of all \u003ccode\u003e\u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e which have a finite\n decimal expansion.\n\u003c/p\u003e\u003cp\u003eA scientific number with \u003ccode\u003e\u003ca\u003ecoefficient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebase10Exponent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ee\u003c/code\u003e\n corresponds to the \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e number: \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e c * 10 \u003ccode\u003e\u003ca\u003e^^\u003c/a\u003e\u003c/code\u003e e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "Scientific",
          "package": "scientific",
          "source": "src/Data-Scientific.html#Scientific",
          "type": "data"
        },
        "index": {
          "description": "An arbitrary-precision number represented using scientific notation This type describes the set of all Real which have finite decimal expansion scientific number with coefficient and base10Exponent corresponds to the Fractional number fromInteger",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "Scientific",
          "package": "scientific",
          "partial": "Scientific",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#t:Scientific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScientific notation (e.g. \u003ccode\u003e2.3e123\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "Exponent",
          "package": "scientific",
          "signature": "Exponent",
          "source": "src/Data-Scientific.html#FPFormat",
          "type": "function"
        },
        "index": {
          "description": "Scientific notation e.g e123",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "Exponent",
          "package": "scientific",
          "partial": "Exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:Exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard decimal notation.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "Fixed",
          "package": "scientific",
          "signature": "Fixed",
          "source": "src/Data-Scientific.html#FPFormat",
          "type": "function"
        },
        "index": {
          "description": "Standard decimal notation",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "Fixed",
          "package": "scientific",
          "partial": "Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse decimal notation for values between \u003ccode\u003e0.1\u003c/code\u003e and\n \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "Generic",
          "package": "scientific",
          "signature": "Generic",
          "source": "src/Data-Scientific.html#FPFormat",
          "type": "function"
        },
        "index": {
          "description": "Use decimal notation for values between and and scientific notation otherwise",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "Generic",
          "package": "scientific",
          "partial": "Generic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base-10 exponent of a scientific number.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "base10Exponent",
          "package": "scientific",
          "signature": "Scientific -\u003e Int",
          "source": "src/Data-Scientific.html#base10Exponent",
          "type": "function"
        },
        "index": {
          "description": "The base-10 exponent of scientific number",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "base10Exponent",
          "normalized": "Scientific-\u003eInt",
          "package": "scientific",
          "partial": "Exponent",
          "signature": "Scientific-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:base10Exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe coefficient of a scientific number.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "coefficient",
          "package": "scientific",
          "signature": "Scientific -\u003e Integer",
          "source": "src/Data-Scientific.html#coefficient",
          "type": "function"
        },
        "index": {
          "description": "The coefficient of scientific number",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "coefficient",
          "normalized": "Scientific-\u003eInteger",
          "package": "scientific",
          "signature": "Scientific-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:coefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e but provides rendering options.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "formatScientific",
          "package": "scientific",
          "signature": "FPFormat-\u003e Maybe Int-\u003e Scientific-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Like show but provides rendering options",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "formatScientific",
          "normalized": "FPFormat-\u003eMaybe Int-\u003eScientific-\u003eString",
          "package": "scientific",
          "partial": "Scientific",
          "signature": "FPFormat-\u003eMaybe Int-\u003eScientific-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:formatScientific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003escientificBuilder\u003c/a\u003e\u003c/code\u003e but provides rendering options.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "formatScientificBuilder",
          "package": "scientific",
          "signature": "FPFormat-\u003e Maybe Int-\u003e Scientific-\u003e Builder",
          "type": "function"
        },
        "index": {
          "description": "Like scientificBuilder but provides rendering options",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "formatScientificBuilder",
          "normalized": "FPFormat-\u003eMaybe Int-\u003eScientific-\u003eBuilder",
          "package": "scientific",
          "partial": "Scientific Builder",
          "signature": "FPFormat-\u003eMaybe Int-\u003eScientific-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:formatScientificBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficient and exact conversion from a \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eScientific\u003c/a\u003e\u003c/code\u003e number.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "fromFloatDigits",
          "package": "scientific",
          "signature": "a -\u003e Scientific",
          "source": "src/Data-Scientific.html#fromFloatDigits",
          "type": "function"
        },
        "index": {
          "description": "Efficient and exact conversion from RealFloat into Scientific number",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "fromFloatDigits",
          "normalized": "a-\u003eScientific",
          "package": "scientific",
          "partial": "Float Digits",
          "signature": "a-\u003eScientific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:fromFloatDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escientific c e\u003c/code\u003e constructs a scientific number with\n \u003ccode\u003e\u003ca\u003ecoefficient\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ec\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebase10Exponent\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "scientific",
          "package": "scientific",
          "signature": "Integer -\u003e Int -\u003e Scientific",
          "source": "src/Data-Scientific.html#scientific",
          "type": "function"
        },
        "index": {
          "description": "scientific constructs scientific number with coefficient and base10Exponent",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "scientific",
          "normalized": "Integer-\u003eInt-\u003eScientific",
          "package": "scientific",
          "signature": "Integer-\u003eInt-\u003eScientific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:scientific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eText\u003c/code\u003e \u003ccode\u003eBuilder\u003c/code\u003e which renders a scientific number to full\n precision, using standard decimal notation for arguments whose\n absolute value lies between \u003ccode\u003e0.1\u003c/code\u003e and \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific\n notation otherwise.\n\u003c/p\u003e",
          "module": "Data.Scientific",
          "name": "scientificBuilder",
          "package": "scientific",
          "signature": "Scientific -\u003e Builder",
          "source": "src/Data-Scientific.html#scientificBuilder",
          "type": "function"
        },
        "index": {
          "description": "Text Builder which renders scientific number to full precision using standard decimal notation for arguments whose absolute value lies between and and scientific notation otherwise",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "scientificBuilder",
          "normalized": "Scientific-\u003eBuilder",
          "package": "scientific",
          "partial": "Builder",
          "signature": "Scientific-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:scientificBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efloatToDigits\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003etoDecimalDigits\u003c/code\u003e takes a\n non-negative \u003ccode\u003e\u003ca\u003eScientific\u003c/a\u003e\u003c/code\u003e number, and returns a list of digits and\n a base-10 exponent. In particular, if \u003ccode\u003ex\u003e=0\u003c/code\u003e, and\n\u003c/p\u003e\u003cpre\u003e toDecimalDigits x = ([d1,d2,...,dn], e)\n\u003c/pre\u003e\u003cp\u003ethen\n\u003c/p\u003e\u003col\u003e\u003cli\u003e\u003cpre\u003en \u003e= 1\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003ex = 0.d1d2...dn * (10^^e)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e0 \u003c= di \u003c= 9\u003c/pre\u003e\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Scientific",
          "name": "toDecimalDigits",
          "package": "scientific",
          "signature": "Scientific -\u003e ([Int], Int)",
          "source": "src/Data-Scientific.html#toDecimalDigits",
          "type": "function"
        },
        "index": {
          "description": "Similar to floatToDigits toDecimalDigits takes non-negative Scientific number and returns list of digits and base-10 exponent In particular if and toDecimalDigits d1 d2 dn then d1d2...dn di",
          "hierarchy": "Data Scientific",
          "module": "Data.Scientific",
          "name": "toDecimalDigits",
          "normalized": "Scientific-\u003e([Int],Int)",
          "package": "scientific",
          "partial": "Decimal Digits",
          "signature": "Scientific-\u003e([Int],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scientific/docs/Data-Scientific.html#v:toDecimalDigits"
      }
    }
  ]
]