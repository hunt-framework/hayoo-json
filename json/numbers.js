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
        "word": "numbers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of floating point numbers with a selectable\n precision.  The number of digits in the mantissa is selected by the\n \u003ccode\u003e\u003ca\u003eEpsilon\u003c/a\u003e\u003c/code\u003e type class from the \u003ca\u003eFixed\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe numbers are stored in base 10.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.BigFloat",
          "name": "BigFloat",
          "package": "numbers",
          "source": "src/Data-Number-BigFloat.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of floating point numbers with selectable precision The number of digits in the mantissa is selected by the Epsilon type class from the Fixed module The numbers are stored in base",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "BigFloat",
          "package": "numbers",
          "partial": "Big Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point number where the precision is determined by the type \u003cem\u003ee\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.BigFloat",
          "name": "BigFloat",
          "package": "numbers",
          "source": "src/Data-Number-BigFloat.html#BigFloat",
          "type": "data"
        },
        "index": {
          "description": "Floating point number where the precision is determined by the type",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "BigFloat",
          "package": "numbers",
          "partial": "Big Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:BigFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn epsilon of 1, i.e., no decimals.\n\u003c/p\u003e",
          "module": "Data.Number.BigFloat",
          "name": "Eps1",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Eps1",
          "type": "data"
        },
        "index": {
          "description": "An epsilon of i.e no decimals",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "Eps1",
          "package": "numbers",
          "partial": "Eps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:Eps1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type construct that gives one more decimals than the argument.\n\u003c/p\u003e",
          "module": "Data.Number.BigFloat",
          "name": "EpsDiv10",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#EpsDiv10",
          "type": "data"
        },
        "index": {
          "description": "type construct that gives one more decimals than the argument",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "EpsDiv10",
          "package": "numbers",
          "partial": "Eps Div",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:EpsDiv10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEpsilon\u003c/a\u003e\u003c/code\u003e class contains the types that can be used to determine the\n precision of a \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e number.\n\u003c/p\u003e",
          "module": "Data.Number.BigFloat",
          "name": "Epsilon",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Epsilon",
          "type": "class"
        },
        "index": {
          "description": "The Epsilon class contains the types that can be used to determine the precision of Fixed number",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "Epsilon",
          "package": "numbers",
          "partial": "Epsilon",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:Epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTen decimals.\n\u003c/p\u003e",
          "module": "Data.Number.BigFloat",
          "name": "Prec10",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Prec10",
          "type": "data"
        },
        "index": {
          "description": "Ten decimals",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "Prec10",
          "package": "numbers",
          "partial": "Prec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:Prec10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e50 decimals.\n\u003c/p\u003e",
          "module": "Data.Number.BigFloat",
          "name": "Prec50",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Prec50",
          "type": "data"
        },
        "index": {
          "description": "decimals",
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "Prec50",
          "package": "numbers",
          "partial": "Prec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:Prec50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.BigFloat",
          "name": "PrecPlus20",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#PrecPlus20",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number BigFloat",
          "module": "Data.Number.BigFloat",
          "name": "PrecPlus20",
          "package": "numbers",
          "partial": "Prec Plus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-BigFloat.html#t:PrecPlus20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.CReal",
          "name": "CReal",
          "package": "numbers",
          "source": "src/Data-Number-CReal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number CReal",
          "module": "Data.Number.CReal",
          "name": "CReal",
          "package": "numbers",
          "partial": "CReal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-CReal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCReal\u003c/a\u003e\u003c/code\u003e type implements (constructive) real numbers.\n\u003c/p\u003e\u003cp\u003eNote that the comparison operations on \u003ccode\u003e\u003ca\u003eCReal\u003c/a\u003e\u003c/code\u003e may diverge\n since it is (by necessity) impossible to implementent them\n correctly and always terminating.\n\u003c/p\u003e\u003cp\u003eThis implementation is really David Lester's ERA package.\n\u003c/p\u003e",
          "module": "Data.Number.CReal",
          "name": "CReal",
          "package": "numbers",
          "source": "src/Data-Number-CReal.html#CReal",
          "type": "data"
        },
        "index": {
          "description": "The CReal type implements constructive real numbers Note that the comparison operations on CReal may diverge since it is by necessity impossible to implementent them correctly and always terminating This implementation is really David Lester ERA package",
          "hierarchy": "Data Number CReal",
          "module": "Data.Number.CReal",
          "name": "CReal",
          "package": "numbers",
          "partial": "CReal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-CReal.html#t:CReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eshowCReal\u003c/a\u003e\u003c/code\u003e function connverts a \u003ccode\u003e\u003ca\u003eCReal\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.CReal",
          "name": "showCReal",
          "package": "numbers",
          "signature": "Int-\u003e CReal-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "The showCReal function connverts CReal to String",
          "hierarchy": "Data Number CReal",
          "module": "Data.Number.CReal",
          "name": "showCReal",
          "normalized": "Int-\u003eCReal-\u003eString",
          "package": "numbers",
          "partial": "CReal",
          "signature": "Int-\u003eCReal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-CReal.html#v:showCReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e module contains a data type, \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e, that allows for\n automatic forward differentiation.\n\u003c/p\u003e\u003cp\u003eAll the ideas are from Jerzy Karczmarczuk's work,\n see \u003ca\u003ehttp://users.info.unicaen.fr/~karczma/arpap/diffalg.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple example, if we define\n\u003c/p\u003e\u003cpre\u003e foo x = x*x\n\u003c/pre\u003e\u003cp\u003ethen the function\n\u003c/p\u003e\u003cpre\u003e foo' = deriv foo\n\u003c/pre\u003e\u003cp\u003ewill behave as if its body was 2*x.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Dif",
          "name": "Dif",
          "package": "numbers",
          "source": "src/Data-Number-Dif.html",
          "type": "module"
        },
        "index": {
          "description": "The Dif module contains data type Dif that allows for automatic forward differentiation All the ideas are from Jerzy Karczmarczuk work see http users.info.unicaen.fr karczma arpap diffalg.pdf simple example if we define foo then the function foo deriv foo will behave as if its body was",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "Dif",
          "package": "numbers",
          "partial": "Dif",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e type is the type of differentiable numbers.\n It's an instance of all the usual numeric classes.\n The computed derivative of a function is is correct\n except where the function is discontinuous, at these points\n the derivative should be a Dirac pulse, but it isn't.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e numbers are printed with a trailing ~~ to\n indicate that there is a \"tail\" of derivatives.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "Dif",
          "package": "numbers",
          "source": "src/Data-Number-Dif.html#Dif",
          "type": "data"
        },
        "index": {
          "description": "The Dif type is the type of differentiable numbers It an instance of all the usual numeric classes The computed derivative of function is is correct except where the function is discontinuous at these points the derivative should be Dirac pulse but it isn The Dif numbers are printed with trailing to indicate that there is tail of derivatives",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "Dif",
          "package": "numbers",
          "partial": "Dif",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#t:Dif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edCon\u003c/a\u003e\u003c/code\u003e function turns a normal number into a \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e\n number with the same value.  Not that numeric literals\n do not need an explicit conversion due to the normal\n Haskell overloading of literals.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "dCon",
          "package": "numbers",
          "signature": "a -\u003e Dif a",
          "source": "src/Data-Number-Dif.html#dCon",
          "type": "function"
        },
        "index": {
          "description": "The dCon function turns normal number into Dif number with the same value Not that numeric literals do not need an explicit conversion due to the normal Haskell overloading of literals",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "dCon",
          "normalized": "a-\u003eDif a",
          "package": "numbers",
          "partial": "Con",
          "signature": "a-\u003eDif a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:dCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edVar\u003c/a\u003e\u003c/code\u003e function turns a number into a variable\n number.  This is the number with with respect to which\n the derivaticve is computed.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "dVar",
          "package": "numbers",
          "signature": "a -\u003e Dif a",
          "source": "src/Data-Number-Dif.html#dVar",
          "type": "function"
        },
        "index": {
          "description": "The dVar function turns number into variable number This is the number with with respect to which the derivaticve is computed",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "dVar",
          "normalized": "a-\u003eDif a",
          "package": "numbers",
          "partial": "Var",
          "signature": "a-\u003eDif a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:dVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ederiv\u003c/a\u003e\u003c/code\u003e function is a simple utility to take the\n derivative of a (single argument) function.\n It is simply defined as\n\u003c/p\u003e\u003cpre\u003e  deriv f = val . df . f . dVar\n\u003c/pre\u003e",
          "module": "Data.Number.Dif",
          "name": "deriv",
          "package": "numbers",
          "signature": "(Dif a -\u003e Dif b) -\u003e a -\u003e b",
          "source": "src/Data-Number-Dif.html#deriv",
          "type": "function"
        },
        "index": {
          "description": "The deriv function is simple utility to take the derivative of single argument function It is simply defined as deriv val df dVar",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "deriv",
          "normalized": "(Dif a-\u003eDif b)-\u003ea-\u003eb",
          "package": "numbers",
          "signature": "(Dif a-\u003eDif b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:deriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edf\u003c/a\u003e\u003c/code\u003e takes a \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e number and returns its first\n derivative.  The function can be iterated to to get\n higher derivaties.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "df",
          "package": "numbers",
          "signature": "Dif a -\u003e Dif a",
          "source": "src/Data-Number-Dif.html#df",
          "type": "function"
        },
        "index": {
          "description": "The df takes Dif number and returns its first derivative The function can be iterated to to get higher derivaties",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "df",
          "normalized": "Dif a-\u003eDif a",
          "package": "numbers",
          "signature": "Dif a-\u003eDif a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:df"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emkDif\u003c/a\u003e\u003c/code\u003e takes a value and \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e value and makes\n a \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e number that has the given value as its normal\n value, and the \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e number as its derivatives.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "mkDif",
          "package": "numbers",
          "signature": "a -\u003e Dif a -\u003e Dif a",
          "source": "src/Data-Number-Dif.html#mkDif",
          "type": "function"
        },
        "index": {
          "description": "The mkDif takes value and Dif value and makes Dif number that has the given value as its normal value and the Dif number as its derivatives",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "mkDif",
          "normalized": "a-\u003eDif a-\u003eDif a",
          "package": "numbers",
          "partial": "Dif",
          "signature": "a-\u003eDif a-\u003eDif a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:mkDif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e function to an ordinary function.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "unDif",
          "package": "numbers",
          "signature": "(Dif a -\u003e Dif b) -\u003e a -\u003e b",
          "source": "src/Data-Number-Dif.html#unDif",
          "type": "function"
        },
        "index": {
          "description": "Convert Dif function to an ordinary function",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "unDif",
          "normalized": "(Dif a-\u003eDif b)-\u003ea-\u003eb",
          "package": "numbers",
          "partial": "Dif",
          "signature": "(Dif a-\u003eDif b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:unDif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eval\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eDif\u003c/a\u003e\u003c/code\u003e number back to a normal\n number, thus forgetting about all the derivatives.\n\u003c/p\u003e",
          "module": "Data.Number.Dif",
          "name": "val",
          "package": "numbers",
          "signature": "Dif a -\u003e a",
          "source": "src/Data-Number-Dif.html#val",
          "type": "function"
        },
        "index": {
          "description": "The val function takes Dif number back to normal number thus forgetting about all the derivatives",
          "hierarchy": "Data Number Dif",
          "module": "Data.Number.Dif",
          "name": "val",
          "normalized": "Dif a-\u003ea",
          "package": "numbers",
          "signature": "Dif a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Dif.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumbers with a fixed number of decimals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Fixed",
          "name": "Fixed",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html",
          "type": "module"
        },
        "index": {
          "description": "Numbers with fixed number of decimals",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "Fixed",
          "package": "numbers",
          "partial": "Fixed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn epsilon of 1, i.e., no decimals.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "Eps1",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Eps1",
          "type": "data"
        },
        "index": {
          "description": "An epsilon of i.e no decimals",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "Eps1",
          "package": "numbers",
          "partial": "Eps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:Eps1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type construct that gives one more decimals than the argument.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "EpsDiv10",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#EpsDiv10",
          "type": "data"
        },
        "index": {
          "description": "type construct that gives one more decimals than the argument",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "EpsDiv10",
          "package": "numbers",
          "partial": "Eps Div",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:EpsDiv10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEpsilon\u003c/a\u003e\u003c/code\u003e class contains the types that can be used to determine the\n precision of a \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e number.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "Epsilon",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Epsilon",
          "type": "class"
        },
        "index": {
          "description": "The Epsilon class contains the types that can be used to determine the precision of Fixed number",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "Epsilon",
          "package": "numbers",
          "partial": "Epsilon",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:Epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fixed",
          "name": "Fixed",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Fixed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "Fixed",
          "package": "numbers",
          "partial": "Fixed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTen decimals.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "Prec10",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Prec10",
          "type": "data"
        },
        "index": {
          "description": "Ten decimals",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "Prec10",
          "package": "numbers",
          "partial": "Prec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:Prec10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e50 decimals.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "Prec50",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#Prec50",
          "type": "data"
        },
        "index": {
          "description": "decimals",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "Prec50",
          "package": "numbers",
          "partial": "Prec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:Prec50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fixed",
          "name": "PrecPlus20",
          "package": "numbers",
          "source": "src/Data-Number-Fixed.html#PrecPlus20",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "PrecPlus20",
          "package": "numbers",
          "partial": "Prec Plus",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#t:PrecPlus20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between two arbitrary fixed precision types.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "convertFixed",
          "package": "numbers",
          "signature": "Fixed e -\u003e Fixed f",
          "source": "src/Data-Number-Fixed.html#convertFixed",
          "type": "function"
        },
        "index": {
          "description": "Convert between two arbitrary fixed precision types",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "convertFixed",
          "normalized": "Fixed a-\u003eFixed b",
          "package": "numbers",
          "partial": "Fixed",
          "signature": "Fixed e-\u003eFixed f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#v:convertFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fixed",
          "name": "dynamicEps",
          "package": "numbers",
          "signature": "Fixed e -\u003e a) -\u003e Rational -\u003e a",
          "source": "src/Data-Number-Fixed.html#dynamicEps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "dynamicEps",
          "normalized": "Fixed a-\u003eb)-\u003eRational-\u003eb",
          "package": "numbers",
          "partial": "Eps",
          "signature": "Fixed e-\u003ea)-\u003eRational-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#v:dynamicEps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Fixed",
          "name": "precision",
          "package": "numbers",
          "signature": "Fixed e -\u003e Rational",
          "source": "src/Data-Number-Fixed.html#precision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "precision",
          "normalized": "Fixed a-\u003eRational",
          "package": "numbers",
          "signature": "Fixed e-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#v:precision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe call \u003ccode\u003ewith_added_precision r f v\u003c/code\u003e evaluates \u003ccode\u003ef v\u003c/code\u003e, while\n temporarily multiplying the precision of \u003cem\u003ev\u003c/em\u003e by \u003cem\u003er\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Fixed",
          "name": "with_added_precision",
          "package": "numbers",
          "signature": "Fixed e -\u003e a) -\u003e Fixed f -\u003e a",
          "source": "src/Data-Number-Fixed.html#with_added_precision",
          "type": "function"
        },
        "index": {
          "description": "The call with added precision evaluates while temporarily multiplying the precision of by",
          "hierarchy": "Data Number Fixed",
          "module": "Data.Number.Fixed",
          "name": "with_added_precision",
          "normalized": "Fixed a-\u003eb)-\u003eFixed c-\u003eb",
          "package": "numbers",
          "signature": "Fixed e-\u003ea)-\u003eFixed f-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Fixed.html#v:with_added_precision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "FixedFunctions",
          "package": "numbers",
          "source": "src/Data-Number-FixedFunctions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "FixedFunctions",
          "package": "numbers",
          "partial": "Fixed Functions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "CF",
          "package": "numbers",
          "source": "src/Data-Number-FixedFunctions.html#CF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "CF",
          "package": "numbers",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#t:CF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "acos",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#acos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "acos",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "acosh",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#acosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "acosh",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "approx",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#approx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "approx",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "approxCF",
          "package": "numbers",
          "signature": "Rational -\u003e CF -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#approxCF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "approxCF",
          "normalized": "Rational-\u003eCF-\u003eRational",
          "package": "numbers",
          "partial": "CF",
          "signature": "Rational-\u003eCF-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:approxCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "asin",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#asin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "asin",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "asinh",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#asinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "asinh",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "atan",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#atan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "atan",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "atanh",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#atanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "atanh",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "cos",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#cos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "cos",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "cosh",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#cosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "cosh",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "exp",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "exp",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "fac",
          "package": "numbers",
          "signature": "Integer -\u003e Integer",
          "source": "src/Data-Number-FixedFunctions.html#fac",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "fac",
          "normalized": "Integer-\u003eInteger",
          "package": "numbers",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:fac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "fromCF",
          "package": "numbers",
          "signature": "CF -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#fromCF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "fromCF",
          "normalized": "CF-\u003eRational",
          "package": "numbers",
          "partial": "CF",
          "signature": "CF-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:fromCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "fromTaylorToCF",
          "package": "numbers",
          "signature": "[a] -\u003e a -\u003e [(a, a)]",
          "source": "src/Data-Number-FixedFunctions.html#fromTaylorToCF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "fromTaylorToCF",
          "normalized": "[a]-\u003ea-\u003e[(a,a)]",
          "package": "numbers",
          "partial": "Taylor To CF",
          "signature": "[a]-\u003ea-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:fromTaylorToCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "integerRoot2",
          "package": "numbers",
          "signature": "Integer -\u003e Integer",
          "source": "src/Data-Number-FixedFunctions.html#integerRoot2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "integerRoot2",
          "normalized": "Integer-\u003eInteger",
          "package": "numbers",
          "partial": "Root",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:integerRoot2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "log",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "log",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "pi",
          "package": "numbers",
          "signature": "Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#pi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "pi",
          "normalized": "Rational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "sin",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#sin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "sin",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "sinh",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#sinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "sinh",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "sqrt",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "sqrt",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "tan",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#tan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "tan",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "tanh",
          "package": "numbers",
          "signature": "Rational -\u003e Rational -\u003e Rational",
          "source": "src/Data-Number-FixedFunctions.html#tanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "tanh",
          "normalized": "Rational-\u003eRational-\u003eRational",
          "package": "numbers",
          "signature": "Rational-\u003eRational-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.FixedFunctions",
          "name": "toCF",
          "package": "numbers",
          "signature": "Rational -\u003e CF",
          "source": "src/Data-Number-FixedFunctions.html#toCF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number FixedFunctions",
          "module": "Data.Number.FixedFunctions",
          "name": "toCF",
          "normalized": "Rational-\u003eCF",
          "package": "numbers",
          "partial": "CF",
          "signature": "Rational-\u003eCF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-FixedFunctions.html#v:toCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn incomplete implementation of interval aritrhmetic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Interval",
          "name": "Interval",
          "package": "numbers",
          "source": "src/Data-Number-Interval.html",
          "type": "module"
        },
        "index": {
          "description": "An incomplete implementation of interval aritrhmetic",
          "hierarchy": "Data Number Interval",
          "module": "Data.Number.Interval",
          "name": "Interval",
          "package": "numbers",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Interval",
          "name": "Interval",
          "package": "numbers",
          "source": "src/Data-Number-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Interval",
          "module": "Data.Number.Interval",
          "name": "Interval",
          "package": "numbers",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Interval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Interval",
          "name": "getIval",
          "package": "numbers",
          "signature": "Interval a -\u003e (a, a)",
          "source": "src/Data-Number-Interval.html#getIval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Interval",
          "module": "Data.Number.Interval",
          "name": "getIval",
          "normalized": "Interval a-\u003e(a,a)",
          "package": "numbers",
          "partial": "Ival",
          "signature": "Interval a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Interval.html#v:getIval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Interval",
          "name": "ival",
          "package": "numbers",
          "signature": "a -\u003e a -\u003e Interval a",
          "source": "src/Data-Number-Interval.html#ival",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Interval",
          "module": "Data.Number.Interval",
          "name": "ival",
          "normalized": "a-\u003ea-\u003eInterval a",
          "package": "numbers",
          "signature": "a-\u003ea-\u003eInterval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Interval.html#v:ival"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy natural numbers.\n Addition and multiplication recurses over the first argument, i.e.,\n \u003ccode\u003e1 + n\u003c/code\u003e is the way to write the constant time successor function.\n\u003c/p\u003e\u003cp\u003eNote that (+) and (*) are not commutative for lazy natural numbers\n when considering bottom.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Natural",
          "name": "Natural",
          "package": "numbers",
          "source": "src/Data-Number-Natural.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy natural numbers Addition and multiplication recurses over the first argument i.e is the way to write the constant time successor function Note that and are not commutative for lazy natural numbers when considering bottom",
          "hierarchy": "Data Number Natural",
          "module": "Data.Number.Natural",
          "name": "Natural",
          "package": "numbers",
          "partial": "Natural",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Natural.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Natural",
          "name": "Natural",
          "package": "numbers",
          "source": "src/Data-Number-Natural.html#Natural",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number Natural",
          "module": "Data.Number.Natural",
          "name": "Natural",
          "package": "numbers",
          "partial": "Natural",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Natural.html#t:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe infinite natural number.\n\u003c/p\u003e",
          "module": "Data.Number.Natural",
          "name": "infinity",
          "package": "numbers",
          "signature": "Natural",
          "source": "src/Data-Number-Natural.html#infinity",
          "type": "function"
        },
        "index": {
          "description": "The infinite natural number",
          "hierarchy": "Data Number Natural",
          "module": "Data.Number.Natural",
          "name": "infinity",
          "package": "numbers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Natural.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSymbolic number, i.e., these are not numbers at all, but just build\n a representation of the expressions.\n This implementation is incomplete in that it allows comnstruction,\n but not deconstruction of the expressions.  It's mainly useful for\n debugging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Symbolic",
          "name": "Symbolic",
          "package": "numbers",
          "source": "src/Data-Number-Symbolic.html",
          "type": "module"
        },
        "index": {
          "description": "Symbolic number i.e these are not numbers at all but just build representation of the expressions This implementation is incomplete in that it allows comnstruction but not deconstruction of the expressions It mainly useful for debugging",
          "hierarchy": "Data Number Symbolic",
          "module": "Data.Number.Symbolic",
          "name": "Symbolic",
          "package": "numbers",
          "partial": "Symbolic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Symbolic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic numbers over some base type for the literals.\n\u003c/p\u003e",
          "module": "Data.Number.Symbolic",
          "name": "Sym",
          "package": "numbers",
          "source": "src/Data-Number-Symbolic.html#Sym",
          "type": "data"
        },
        "index": {
          "description": "Symbolic numbers over some base type for the literals",
          "hierarchy": "Data Number Symbolic",
          "module": "Data.Number.Symbolic",
          "name": "Sym",
          "package": "numbers",
          "partial": "Sym",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Symbolic.html#t:Sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant (useful when it is not a literal).\n\u003c/p\u003e",
          "module": "Data.Number.Symbolic",
          "name": "con",
          "package": "numbers",
          "signature": "a -\u003e Sym a",
          "source": "src/Data-Number-Symbolic.html#con",
          "type": "function"
        },
        "index": {
          "description": "Create constant useful when it is not literal",
          "hierarchy": "Data Number Symbolic",
          "module": "Data.Number.Symbolic",
          "name": "con",
          "normalized": "a-\u003eSym a",
          "package": "numbers",
          "signature": "a-\u003eSym a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Symbolic.html#v:con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003esubst x v e\u003c/code\u003e substitutes the expression \u003ccode\u003ev\u003c/code\u003e for each\n occurence of the variable \u003ccode\u003ex\u003c/code\u003e in \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Symbolic",
          "name": "subst",
          "package": "numbers",
          "signature": "String -\u003e Sym a -\u003e Sym a -\u003e Sym a",
          "source": "src/Data-Number-Symbolic.html#subst",
          "type": "function"
        },
        "index": {
          "description": "The expression subst substitutes the expression for each occurence of the variable in",
          "hierarchy": "Data Number Symbolic",
          "module": "Data.Number.Symbolic",
          "name": "subst",
          "normalized": "String-\u003eSym a-\u003eSym a-\u003eSym a",
          "package": "numbers",
          "signature": "String-\u003eSym a-\u003eSym a-\u003eSym a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Symbolic.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Symbolic",
          "name": "unSym",
          "package": "numbers",
          "signature": "Sym a -\u003e a",
          "source": "src/Data-Number-Symbolic.html#unSym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Symbolic",
          "module": "Data.Number.Symbolic",
          "name": "unSym",
          "normalized": "Sym a-\u003ea",
          "package": "numbers",
          "partial": "Sym",
          "signature": "Sym a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Symbolic.html#v:unSym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a variable.\n\u003c/p\u003e",
          "module": "Data.Number.Symbolic",
          "name": "var",
          "package": "numbers",
          "signature": "String -\u003e Sym a",
          "source": "src/Data-Number-Symbolic.html#var",
          "type": "function"
        },
        "index": {
          "description": "Create variable",
          "hierarchy": "Data Number Symbolic",
          "module": "Data.Number.Symbolic",
          "name": "var",
          "normalized": "String-\u003eSym a",
          "package": "numbers",
          "signature": "String-\u003eSym a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Symbolic.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Vectorspace",
          "name": "Vectorspace",
          "package": "numbers",
          "source": "src/Data-Number-Vectorspace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number Vectorspace",
          "module": "Data.Number.Vectorspace",
          "name": "Vectorspace",
          "package": "numbers",
          "partial": "Vectorspace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Vectorspace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of vector spaces \u003cem\u003ev\u003c/em\u003e with scalar \u003cem\u003es\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Vectorspace",
          "name": "Vectorspace",
          "package": "numbers",
          "source": "src/Data-Number-Vectorspace.html#Vectorspace",
          "type": "class"
        },
        "index": {
          "description": "Class of vector spaces with scalar",
          "hierarchy": "Data Number Vectorspace",
          "module": "Data.Number.Vectorspace",
          "name": "Vectorspace",
          "package": "numbers",
          "partial": "Vectorspace",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Vectorspace.html#t:Vectorspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Vectorspace",
          "name": "(*\u003e)",
          "package": "numbers",
          "signature": "s -\u003e v -\u003e v",
          "source": "src/Data-Number-Vectorspace.html#%2A%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Vectorspace",
          "module": "Data.Number.Vectorspace",
          "name": "(*\u003e) *\u003e",
          "normalized": "a-\u003eb-\u003eb",
          "package": "numbers",
          "signature": "s-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Vectorspace.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Vectorspace",
          "name": "(\u003c+\u003e)",
          "package": "numbers",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Number-Vectorspace.html#%3C%2B%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Vectorspace",
          "module": "Data.Number.Vectorspace",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "numbers",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Vectorspace.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Vectorspace",
          "name": "vnegate",
          "package": "numbers",
          "signature": "v -\u003e v",
          "source": "src/Data-Number-Vectorspace.html#vnegate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Vectorspace",
          "module": "Data.Number.Vectorspace",
          "name": "vnegate",
          "normalized": "a-\u003ea",
          "package": "numbers",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Vectorspace.html#v:vnegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Vectorspace",
          "name": "vzero",
          "package": "numbers",
          "signature": "v",
          "source": "src/Data-Number-Vectorspace.html#vzero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Vectorspace",
          "module": "Data.Number.Vectorspace",
          "name": "vzero",
          "package": "numbers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numbers/docs/Data-Number-Vectorspace.html#v:vzero"
      }
    }
  ]
]