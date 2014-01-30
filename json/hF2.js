[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA hopefully timing attack resistant F(2^e) backend, \n i.e. binary representation polynomial arithmetic\n The presented interface is Big Endian, like Data.Bits\n All indices are [0 .. (length - 1)]\n TODO: further optimization\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "module",
        "fct-source": "src/Data-F2.html",
        "fct-type": "module",
        "title": "F2"
      },
      "index": {
        "description": "hopefully timing attack resistant backend i.e binary representation polynomial arithmetic The presented interface is Big Endian like Data.Bits All indices are length TODO further optimization",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "F2",
        "normalized": "",
        "package": "hF2",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#t:F2",
      "description": {
        "fct-descr": "\u003cp\u003eF2 consist of an exact length of meaningful bits an a representation of those bits in a possibly larger Vector of Words, Note: The vectors use small to large indices, but the Data.Word endianness is of no concern as it is hidden by Data.Bits\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "data",
        "fct-source": "src/Data-F2.html#F2",
        "fct-type": "data",
        "title": "F2"
      },
      "index": {
        "description": "F2 consist of an exact length of meaningful bits an representation of those bits in possibly larger Vector of Words Note The vectors use small to large indices but the Data.Word endianness is of no concern as it is hidden by Data.Bits",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "F2",
        "normalized": "",
        "package": "hF2",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:bininv",
      "description": {
        "fct-descr": "\u003cp\u003ebinary inversion of f in m\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2-\u003e F2-\u003e F2",
        "fct-type": "function",
        "title": "bininv"
      },
      "index": {
        "description": "binary inversion of in",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "bininv",
        "normalized": "F-\u003eF-\u003eF",
        "package": "hF2",
        "partial": "",
        "signature": "F-\u003eF-\u003eF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:div",
      "description": {
        "fct-descr": "\u003cp\u003ePolynomial division, needs 3 parameters instead of 2, computing k/f mod m by binary inversion of f in m\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2-\u003e F2-\u003e F2-\u003e F2",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "Polynomial division needs parameters instead of computing mod by binary inversion of in",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "div",
        "normalized": "F-\u003eF-\u003eF-\u003eF",
        "package": "hF2",
        "partial": "",
        "signature": "F-\u003eF-\u003eF-\u003eF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:even",
      "description": {
        "fct-descr": "\u003cp\u003eO(1), a simple Test for the LSB\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2 -\u003e Bool",
        "fct-source": "src/Data-F2.html#even",
        "fct-type": "function",
        "title": "even"
      },
      "index": {
        "description": "simple Test for the LSB",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "even",
        "normalized": "F-\u003eBool",
        "package": "hF2",
        "partial": "",
        "signature": "F-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:mod",
      "description": {
        "fct-descr": "\u003cp\u003ePolynomial reduction, a.k.a. modulo on polynomials\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2-\u003e F2-\u003e F2",
        "fct-type": "function",
        "title": "mod"
      },
      "index": {
        "description": "Polynomial reduction a.k.a modulo on polynomials",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "mod",
        "normalized": "F-\u003eF-\u003eF",
        "package": "hF2",
        "partial": "",
        "signature": "F-\u003eF-\u003eF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:odd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1), a simple Test for the LSB\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2 -\u003e Bool",
        "fct-source": "src/Data-F2.html#odd",
        "fct-type": "function",
        "title": "odd"
      },
      "index": {
        "description": "simple Test for the LSB",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "odd",
        "normalized": "F-\u003eBool",
        "package": "hF2",
        "partial": "",
        "signature": "F-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:pow",
      "description": {
        "fct-descr": "\u003cp\u003eThe power function on F2\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2-\u003e Integer-\u003e F2",
        "fct-type": "function",
        "title": "pow"
      },
      "index": {
        "description": "The power function on F2",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "pow",
        "normalized": "F-\u003eInteger-\u003eF",
        "package": "hF2",
        "partial": "",
        "signature": "F-\u003eInteger-\u003eF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hF2/docs/Data-F2.html#v:toInteger",
      "description": {
        "fct-descr": "\u003cp\u003econversion to Integer\n\u003c/p\u003e",
        "fct-module": "Data.F2",
        "fct-package": "hF2",
        "fct-signature": "F2 -\u003e Integer",
        "fct-source": "src/Data-F2.html#toInteger",
        "fct-type": "function",
        "title": "toInteger"
      },
      "index": {
        "description": "conversion to Integer",
        "hierarchy": "Data F2",
        "module": "Data.F2",
        "name": "toInteger",
        "normalized": "F-\u003eInteger",
        "package": "hF2",
        "partial": "Integer",
        "signature": "F-\u003eInteger"
      }
    }
  }
]