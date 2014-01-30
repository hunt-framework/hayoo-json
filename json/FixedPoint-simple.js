[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#",
      "description": {
        "fct-module": "Data.FixedPoint.TH",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "module",
        "fct-source": "src/Data-FixedPoint-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint TH",
        "module": "Data.FixedPoint.TH",
        "name": "TH",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#v:mkFixedPoint",
      "description": {
        "fct-module": "Data.FixedPoint.TH",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "Int -\u003e Int -\u003e DecsQ",
        "fct-source": "src/Data-FixedPoint-TH.html#mkFixedPoint",
        "fct-type": "function",
        "title": "mkFixedPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint TH",
        "module": "Data.FixedPoint.TH",
        "name": "mkFixedPoint",
        "normalized": "Int-\u003eInt-\u003eDecsQ",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": "Int-\u003eInt-\u003eDecsQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#v:mkInt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e$(mkInt X)\u003c/code\u003e Makes a type alias named \u003ccode\u003eIntX\u003c/code\u003e for an int of X bits.\n See the requirements under \u003ccode\u003e\u003ca\u003emkWord\u003c/a\u003e\u003c/code\u003e for additional information.\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint.TH",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "Int -\u003e DecsQ",
        "fct-source": "src/Data-FixedPoint-TH.html#mkInt",
        "fct-type": "function",
        "title": "mkInt"
      },
      "index": {
        "description": "mkInt Makes type alias named IntX for an int of bits See the requirements under mkWord for additional information",
        "hierarchy": "Data FixedPoint TH",
        "module": "Data.FixedPoint.TH",
        "name": "mkInt",
        "normalized": "Int-\u003eDecsQ",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": "Int-\u003eDecsQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#v:mkWord",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e$(mkWord X)\u003c/code\u003e Makes a type alias named \u003ccode\u003eWordX\u003c/code\u003e for a word of \u003ccode\u003eX\u003c/code\u003e bits.\n Notice \u003ccode\u003eX\u003c/code\u003e must be a multiple of 8, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e must be in scope,\n \u003ccode\u003e\u003ca\u003eBigWord\u003c/a\u003e\u003c/code\u003e must be in scope, and this splice will add\n all smaller \u003ccode\u003eWordY\u003c/code\u003e type aliases needed that aren't already in scope.\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint.TH",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "Int -\u003e DecsQ",
        "fct-source": "src/Data-FixedPoint-TH.html#mkWord",
        "fct-type": "function",
        "title": "mkWord"
      },
      "index": {
        "description": "mkWord Makes type alias named WordX for word of bits Notice must be multiple of Word8 must be in scope BigWord must be in scope and this splice will add all smaller WordY type aliases needed that aren already in scope",
        "hierarchy": "Data FixedPoint TH",
        "module": "Data.FixedPoint.TH",
        "name": "mkWord",
        "normalized": "Int-\u003eDecsQ",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": "Int-\u003eDecsQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis FixedPoint module implements arbitrary sized fixed point types and\n  computations.  This module intentionally avoids converting to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for\n  computations because one purpose is to allow easy translation to other\n  languages to produce stand-alone fixed point libraries.  Instead of using\n  \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, elementary long multiplication and long division are implemented\n  explicitly along with sqrt, exp, and erf functions that are implemented using\n  only primitive operations. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "module",
        "fct-source": "src/Data-FixedPoint.html",
        "fct-type": "module",
        "title": "FixedPoint"
      },
      "index": {
        "description": "This FixedPoint module implements arbitrary sized fixed point types and computations This module intentionally avoids converting to Integer for computations because one purpose is to allow easy translation to other languages to produce stand-alone fixed point libraries Instead of using Integer elementary long multiplication and long division are implemented explicitly along with sqrt exp and erf functions that are implemented using only primitive operations",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:BigInt",
      "description": {
        "fct-descr": "\u003cp\u003eA type constructor for building 2^n bit signed ints.\n BigInt is normally just used as a wrapper around BigWord\n since twos-complement arithmatic is the same, we simply\n need to provide alternate show, read, and comparison operations.\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Data-FixedPoint.html#BigInt",
        "fct-type": "newtype",
        "title": "BigInt"
      },
      "index": {
        "description": "type constructor for building bit signed ints BigInt is normally just used as wrapper around BigWord since twos-complement arithmatic is the same we simply need to provide alternate show read and comparison operations",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "BigInt",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:BigWord",
      "description": {
        "fct-descr": "\u003cp\u003eA type constuctor allowing construction of \u003ccode\u003e2^n\u003c/code\u003e bit unsigned words\n The type variable represents half the underlying representation, so\n \u003ccode\u003etype Foo = BigWord Word13\u003c/code\u003e would have a bit size of \u003ccode\u003e26 (2*13)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "data",
        "fct-source": "src/Data-FixedPoint.html#BigWord",
        "fct-type": "data",
        "title": "BigWord"
      },
      "index": {
        "description": "type constuctor allowing construction of bit unsigned words The type variable represents half the underlying representation so type Foo BigWord Word13 would have bit size of",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "BigWord",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Big Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint10241024",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint10241024",
        "fct-type": "type",
        "title": "FixedPoint10241024"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint10241024",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint128128",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint128128",
        "fct-type": "type",
        "title": "FixedPoint128128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint128128",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint256256",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint256256",
        "fct-type": "type",
        "title": "FixedPoint256256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint256256",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint3232",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint3232",
        "fct-type": "type",
        "title": "FixedPoint3232"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint3232",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint4816",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint4816",
        "fct-type": "type",
        "title": "FixedPoint4816"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint4816",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint512512",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint512512",
        "fct-type": "type",
        "title": "FixedPoint512512"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint512512",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint6464",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#FixedPoint6464",
        "fct-type": "type",
        "title": "FixedPoint6464"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint6464",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:GenericFixedPoint",
      "description": {
        "fct-descr": "\u003cp\u003eGenericFixedPoint is a type constructor for arbitrarily-sized fixed point\n tyes. Take note the first type variable, \u003ccode\u003eflat\u003c/code\u003e, should be a signed int\n equal to the size of the fixed point integral plus fractional bits.\n The second type variable, \u003ccode\u003einternal\u003c/code\u003e, should be unsigned and twice\n as large a bit size as the \u003ccode\u003eflat\u003c/code\u003e type.  The final type variable,\n \u003ccode\u003efracBitRepr\u003c/code\u003e, should be a data structure of equal bit size to the\n fractional bits in the fixed point type.  See the existing type aliases,\n such as \u003ccode\u003eFixedPoint4816\u003c/code\u003e, for examples.\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "data",
        "fct-source": "src/Data-FixedPoint.html#GenericFixedPoint",
        "fct-type": "data",
        "title": "GenericFixedPoint"
      },
      "index": {
        "description": "GenericFixedPoint is type constructor for arbitrarily-sized fixed point tyes Take note the first type variable flat should be signed int equal to the size of the fixed point integral plus fractional bits The second type variable internal should be unsigned and twice as large bit size as the flat type The final type variable fracBitRepr should be data structure of equal bit size to the fractional bits in the fixed point type See the existing type aliases such as FixedPoint4816 for examples",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "GenericFixedPoint",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Generic Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int1024",
      "description": {
        "fct-descr": "\u003cp\u003eA 1024 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int1024",
        "fct-type": "type",
        "title": "Int1024"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int1024",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int128",
      "description": {
        "fct-descr": "\u003cp\u003eA 128 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int128",
        "fct-type": "type",
        "title": "Int128"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int128",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int2048",
      "description": {
        "fct-descr": "\u003cp\u003eA 2048 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int2048",
        "fct-type": "type",
        "title": "Int2048"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int2048",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int256",
      "description": {
        "fct-descr": "\u003cp\u003eA 256 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int256",
        "fct-type": "type",
        "title": "Int256"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int256",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int4096",
      "description": {
        "fct-descr": "\u003cp\u003eA 4096 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int4096",
        "fct-type": "type",
        "title": "Int4096"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int4096",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int512",
      "description": {
        "fct-descr": "\u003cp\u003eA 512 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int512",
        "fct-type": "type",
        "title": "Int512"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int512",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int8192",
      "description": {
        "fct-descr": "\u003cp\u003eA 8192 bit int (signed)\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Int8192",
        "fct-type": "type",
        "title": "Int8192"
      },
      "index": {
        "description": "bit int signed",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Int8192",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word1024",
      "description": {
        "fct-descr": "\u003cp\u003eA 1024 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word1024",
        "fct-type": "type",
        "title": "Word1024"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word1024",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word128",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "data",
        "fct-source": "src/Data-FixedPoint.html#Word128",
        "fct-type": "data",
        "title": "Word128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word128",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word1280",
      "description": {
        "fct-descr": "\u003cp\u003eA 1280 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word1280",
        "fct-type": "type",
        "title": "Word1280"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word1280",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word2048",
      "description": {
        "fct-descr": "\u003cp\u003eA 2048 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word2048",
        "fct-type": "type",
        "title": "Word2048"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word2048",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word256",
      "description": {
        "fct-descr": "\u003cp\u003eA 256 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word256",
        "fct-type": "type",
        "title": "Word256"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word256",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word2632",
      "description": {
        "fct-descr": "\u003cp\u003eA 2632 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word2632",
        "fct-type": "type",
        "title": "Word2632"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word2632",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word4096",
      "description": {
        "fct-descr": "\u003cp\u003eA 4096 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word4096",
        "fct-type": "type",
        "title": "Word4096"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word4096",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word512",
      "description": {
        "fct-descr": "\u003cp\u003eA 512 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word512",
        "fct-type": "type",
        "title": "Word512"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word512",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word576",
      "description": {
        "fct-descr": "\u003cp\u003eA 576 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word576",
        "fct-type": "type",
        "title": "Word576"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word576",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word584",
      "description": {
        "fct-descr": "\u003cp\u003eA 584 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word584",
        "fct-type": "type",
        "title": "Word584"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word584",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word72",
      "description": {
        "fct-descr": "\u003cp\u003eA 72 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word72",
        "fct-type": "type",
        "title": "Word72"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word72",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word8192",
      "description": {
        "fct-descr": "\u003cp\u003eA 8192 bit unsigned word\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedPoint.html#Word8192",
        "fct-type": "type",
        "title": "Word8192"
      },
      "index": {
        "description": "bit unsigned word",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "Word8192",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:BigInt",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "BigInt",
        "fct-source": "src/Data-FixedPoint.html#BigInt",
        "fct-type": "function",
        "title": "BigInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "BigInt",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:BigWord",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "BigWord !a !b",
        "fct-source": "src/Data-FixedPoint.html#BigWord",
        "fct-type": "function",
        "title": "BigWord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "BigWord",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Big Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:FixedPoint",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "FixedPoint",
        "fct-source": "src/Data-FixedPoint.html#GenericFixedPoint",
        "fct-type": "function",
        "title": "FixedPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "FixedPoint",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Fixed Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:W128",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "W128 !Word64 !Word64",
        "fct-source": "src/Data-FixedPoint.html#Word128",
        "fct-type": "function",
        "title": "W128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "W128",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:erf-39-",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Data-FixedPoint.html#erf%27",
        "fct-type": "function",
        "title": "erf'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "erf'",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "FixedPoint-simple",
        "partial": "",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:exp-39-",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Data-FixedPoint.html#exp%27",
        "fct-type": "function",
        "title": "exp'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "exp'",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "FixedPoint-simple",
        "partial": "",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:fracBits",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the number of bits used to represent the fractional component of this fixed point.\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "GenericFixedPoint a b c -\u003e Int",
        "fct-source": "src/Data-FixedPoint.html#fracBits",
        "fct-type": "function",
        "title": "fracBits"
      },
      "index": {
        "description": "Obtain the number of bits used to represent the fractional component of this fixed point",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "fracBits",
        "normalized": "GenericFixedPoint a b c-\u003eInt",
        "package": "FixedPoint-simple",
        "partial": "Bits",
        "signature": "GenericFixedPoint a b c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:fromInternal",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "b -\u003e GenericFixedPoint a b c",
        "fct-source": "src/Data-FixedPoint.html#fromInternal",
        "fct-type": "function",
        "title": "fromInternal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "fromInternal",
        "normalized": "a-\u003eGenericFixedPoint b a c",
        "package": "FixedPoint-simple",
        "partial": "Internal",
        "signature": "b-\u003eGenericFixedPoint a b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:pi-39-",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "GenericFixedPoint a b c",
        "fct-source": "src/Data-FixedPoint.html#pi%27",
        "fct-type": "function",
        "title": "pi'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "pi'",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:sqrt-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe square root operation converges in O(bitSize input).\n\u003c/p\u003e",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "GenericFixedPoint a b c -\u003e GenericFixedPoint a b c",
        "fct-source": "src/Data-FixedPoint.html#sqrt%27",
        "fct-type": "function",
        "title": "sqrt'"
      },
      "index": {
        "description": "The square root operation converges in bitSize input",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "sqrt'",
        "normalized": "GenericFixedPoint a b c-\u003eGenericFixedPoint a b c",
        "package": "FixedPoint-simple",
        "partial": "",
        "signature": "GenericFixedPoint a b c-\u003eGenericFixedPoint a b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:toFlat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "flat",
        "fct-source": "src/Data-FixedPoint.html#GenericFixedPoint",
        "fct-type": "function",
        "title": "toFlat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "toFlat",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "Flat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:toInternal",
      "description": {
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "GenericFixedPoint a b c -\u003e b",
        "fct-source": "src/Data-FixedPoint.html#toInternal",
        "fct-type": "function",
        "title": "toInternal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "toInternal",
        "normalized": "GenericFixedPoint a b c-\u003eb",
        "package": "FixedPoint-simple",
        "partial": "Internal",
        "signature": "GenericFixedPoint a b c-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:unBI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FixedPoint",
        "fct-package": "FixedPoint-simple",
        "fct-signature": "a",
        "fct-source": "src/Data-FixedPoint.html#BigInt",
        "fct-type": "function",
        "title": "unBI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedPoint",
        "module": "Data.FixedPoint",
        "name": "unBI",
        "normalized": "",
        "package": "FixedPoint-simple",
        "partial": "BI",
        "signature": ""
      }
    }
  }
]