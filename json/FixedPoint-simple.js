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
        "word": "FixedPoint-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint.TH",
          "name": "TH",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data FixedPoint TH",
          "module": "Data.FixedPoint.TH",
          "name": "TH",
          "package": "FixedPoint-simple",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint.TH",
          "name": "mkFixedPoint",
          "package": "FixedPoint-simple",
          "signature": "Int -\u003e Int -\u003e DecsQ",
          "source": "src/Data-FixedPoint-TH.html#mkFixedPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint TH",
          "module": "Data.FixedPoint.TH",
          "name": "mkFixedPoint",
          "normalized": "Int-\u003eInt-\u003eDecsQ",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "signature": "Int-\u003eInt-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#v:mkFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e$(mkInt X)\u003c/code\u003e Makes a type alias named \u003ccode\u003eIntX\u003c/code\u003e for an int of X bits.\n See the requirements under \u003ccode\u003e\u003ca\u003emkWord\u003c/a\u003e\u003c/code\u003e for additional information.\n\u003c/p\u003e",
          "module": "Data.FixedPoint.TH",
          "name": "mkInt",
          "package": "FixedPoint-simple",
          "signature": "Int -\u003e DecsQ",
          "source": "src/Data-FixedPoint-TH.html#mkInt",
          "type": "function"
        },
        "index": {
          "description": "mkInt Makes type alias named IntX for an int of bits See the requirements under mkWord for additional information",
          "hierarchy": "Data FixedPoint TH",
          "module": "Data.FixedPoint.TH",
          "name": "mkInt",
          "normalized": "Int-\u003eDecsQ",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "signature": "Int-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#v:mkInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e$(mkWord X)\u003c/code\u003e Makes a type alias named \u003ccode\u003eWordX\u003c/code\u003e for a word of \u003ccode\u003eX\u003c/code\u003e bits.\n Notice \u003ccode\u003eX\u003c/code\u003e must be a multiple of 8, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e must be in scope,\n \u003ccode\u003e\u003ca\u003eBigWord\u003c/a\u003e\u003c/code\u003e must be in scope, and this splice will add\n all smaller \u003ccode\u003eWordY\u003c/code\u003e type aliases needed that aren't already in scope.\n\u003c/p\u003e",
          "module": "Data.FixedPoint.TH",
          "name": "mkWord",
          "package": "FixedPoint-simple",
          "signature": "Int -\u003e DecsQ",
          "source": "src/Data-FixedPoint-TH.html#mkWord",
          "type": "function"
        },
        "index": {
          "description": "mkWord Makes type alias named WordX for word of bits Notice must be multiple of Word8 must be in scope BigWord must be in scope and this splice will add all smaller WordY type aliases needed that aren already in scope",
          "hierarchy": "Data FixedPoint TH",
          "module": "Data.FixedPoint.TH",
          "name": "mkWord",
          "normalized": "Int-\u003eDecsQ",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "signature": "Int-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint-TH.html#v:mkWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis FixedPoint module implements arbitrary sized fixed point types and\n  computations.  This module intentionally avoids converting to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for\n  computations because one purpose is to allow easy translation to other\n  languages to produce stand-alone fixed point libraries.  Instead of using\n  \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, elementary long multiplication and long division are implemented\n  explicitly along with sqrt, exp, and erf functions that are implemented using\n  only primitive operations. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FixedPoint",
          "name": "FixedPoint",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html",
          "type": "module"
        },
        "index": {
          "description": "This FixedPoint module implements arbitrary sized fixed point types and computations This module intentionally avoids converting to Integer for computations because one purpose is to allow easy translation to other languages to produce stand-alone fixed point libraries Instead of using Integer elementary long multiplication and long division are implemented explicitly along with sqrt exp and erf functions that are implemented using only primitive operations",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type constructor for building 2^n bit signed ints.\n BigInt is normally just used as a wrapper around BigWord\n since twos-complement arithmatic is the same, we simply\n need to provide alternate show, read, and comparison operations.\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "BigInt",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#BigInt",
          "type": "newtype"
        },
        "index": {
          "description": "type constructor for building bit signed ints BigInt is normally just used as wrapper around BigWord since twos-complement arithmatic is the same we simply need to provide alternate show read and comparison operations",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "BigInt",
          "package": "FixedPoint-simple",
          "partial": "Big Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:BigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type constuctor allowing construction of \u003ccode\u003e2^n\u003c/code\u003e bit unsigned words\n The type variable represents half the underlying representation, so\n \u003ccode\u003etype Foo = BigWord Word13\u003c/code\u003e would have a bit size of \u003ccode\u003e26 (2*13)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "BigWord",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#BigWord",
          "type": "data"
        },
        "index": {
          "description": "type constuctor allowing construction of bit unsigned words The type variable represents half the underlying representation so type Foo BigWord Word13 would have bit size of",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "BigWord",
          "package": "FixedPoint-simple",
          "partial": "Big Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:BigWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint10241024",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint10241024",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint10241024",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint10241024"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint128128",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint128128",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint128128",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint128128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint256256",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint256256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint256256",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint256256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint3232",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint3232",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint3232",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint3232"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint4816",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint4816",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint4816",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint4816"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint512512",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint512512",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint512512",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint512512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint6464",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#FixedPoint6464",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint6464",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:FixedPoint6464"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenericFixedPoint is a type constructor for arbitrarily-sized fixed point\n tyes. Take note the first type variable, \u003ccode\u003eflat\u003c/code\u003e, should be a signed int\n equal to the size of the fixed point integral plus fractional bits.\n The second type variable, \u003ccode\u003einternal\u003c/code\u003e, should be unsigned and twice\n as large a bit size as the \u003ccode\u003eflat\u003c/code\u003e type.  The final type variable,\n \u003ccode\u003efracBitRepr\u003c/code\u003e, should be a data structure of equal bit size to the\n fractional bits in the fixed point type.  See the existing type aliases,\n such as \u003ccode\u003eFixedPoint4816\u003c/code\u003e, for examples.\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "GenericFixedPoint",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#GenericFixedPoint",
          "type": "data"
        },
        "index": {
          "description": "GenericFixedPoint is type constructor for arbitrarily-sized fixed point tyes Take note the first type variable flat should be signed int equal to the size of the fixed point integral plus fractional bits The second type variable internal should be unsigned and twice as large bit size as the flat type The final type variable fracBitRepr should be data structure of equal bit size to the fractional bits in the fixed point type See the existing type aliases such as FixedPoint4816 for examples",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "GenericFixedPoint",
          "package": "FixedPoint-simple",
          "partial": "Generic Fixed Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:GenericFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 1024 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int1024",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int1024",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int1024",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int1024"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 128 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int128",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int128",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int128",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2048 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int2048",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int2048",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int2048",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int2048"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 256 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int256",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int256",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int256",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4096 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int4096",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int4096",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int4096",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int4096"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 512 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int512",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int512",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int512",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 8192 bit int (signed)\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Int8192",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Int8192",
          "type": "type"
        },
        "index": {
          "description": "bit int signed",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Int8192",
          "package": "FixedPoint-simple",
          "partial": "Int",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Int8192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 1024 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word1024",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word1024",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word1024",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word1024"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "Word128",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word128",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word128",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 1280 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word1280",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word1280",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word1280",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word1280"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2048 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word2048",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word2048",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word2048",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word2048"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 256 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word256",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word256",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word256",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2632 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word2632",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word2632",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word2632",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word2632"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4096 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word4096",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word4096",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word4096",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word4096"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 512 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word512",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word512",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word512",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 576 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word576",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word576",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word576",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word576"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 584 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word584",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word584",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word584",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word584"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 72 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word72",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word72",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word72",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word72"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 8192 bit unsigned word\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "Word8192",
          "package": "FixedPoint-simple",
          "source": "src/Data-FixedPoint.html#Word8192",
          "type": "type"
        },
        "index": {
          "description": "bit unsigned word",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "Word8192",
          "package": "FixedPoint-simple",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#t:Word8192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "BigInt",
          "package": "FixedPoint-simple",
          "signature": "BigInt",
          "source": "src/Data-FixedPoint.html#BigInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "BigInt",
          "package": "FixedPoint-simple",
          "partial": "Big Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:BigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "BigWord",
          "package": "FixedPoint-simple",
          "signature": "BigWord !a !b",
          "source": "src/Data-FixedPoint.html#BigWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "BigWord",
          "package": "FixedPoint-simple",
          "partial": "Big Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:BigWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "FixedPoint",
          "package": "FixedPoint-simple",
          "signature": "FixedPoint",
          "source": "src/Data-FixedPoint.html#GenericFixedPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "FixedPoint",
          "package": "FixedPoint-simple",
          "partial": "Fixed Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:FixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "W128",
          "package": "FixedPoint-simple",
          "signature": "W128 !Word64 !Word64",
          "source": "src/Data-FixedPoint.html#Word128",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "W128",
          "package": "FixedPoint-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:W128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "erf'",
          "package": "FixedPoint-simple",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-FixedPoint.html#erf%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "erf'",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "FixedPoint-simple",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:erf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "exp'",
          "package": "FixedPoint-simple",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Data-FixedPoint.html#exp%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "exp'",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "FixedPoint-simple",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:exp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the number of bits used to represent the fractional component of this fixed point.\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "fracBits",
          "package": "FixedPoint-simple",
          "signature": "GenericFixedPoint a b c -\u003e Int",
          "source": "src/Data-FixedPoint.html#fracBits",
          "type": "function"
        },
        "index": {
          "description": "Obtain the number of bits used to represent the fractional component of this fixed point",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "fracBits",
          "normalized": "GenericFixedPoint a b c-\u003eInt",
          "package": "FixedPoint-simple",
          "partial": "Bits",
          "signature": "GenericFixedPoint a b c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:fracBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "fromInternal",
          "package": "FixedPoint-simple",
          "signature": "b -\u003e GenericFixedPoint a b c",
          "source": "src/Data-FixedPoint.html#fromInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "fromInternal",
          "normalized": "a-\u003eGenericFixedPoint b a c",
          "package": "FixedPoint-simple",
          "partial": "Internal",
          "signature": "b-\u003eGenericFixedPoint a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:fromInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "pi'",
          "package": "FixedPoint-simple",
          "signature": "GenericFixedPoint a b c",
          "source": "src/Data-FixedPoint.html#pi%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "pi'",
          "package": "FixedPoint-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:pi-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe square root operation converges in O(bitSize input).\n\u003c/p\u003e",
          "module": "Data.FixedPoint",
          "name": "sqrt'",
          "package": "FixedPoint-simple",
          "signature": "GenericFixedPoint a b c -\u003e GenericFixedPoint a b c",
          "source": "src/Data-FixedPoint.html#sqrt%27",
          "type": "function"
        },
        "index": {
          "description": "The square root operation converges in bitSize input",
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "sqrt'",
          "normalized": "GenericFixedPoint a b c-\u003eGenericFixedPoint a b c",
          "package": "FixedPoint-simple",
          "signature": "GenericFixedPoint a b c-\u003eGenericFixedPoint a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:sqrt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "toFlat",
          "package": "FixedPoint-simple",
          "signature": "flat",
          "source": "src/Data-FixedPoint.html#GenericFixedPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "toFlat",
          "package": "FixedPoint-simple",
          "partial": "Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:toFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "toInternal",
          "package": "FixedPoint-simple",
          "signature": "GenericFixedPoint a b c -\u003e b",
          "source": "src/Data-FixedPoint.html#toInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "toInternal",
          "normalized": "GenericFixedPoint a b c-\u003eb",
          "package": "FixedPoint-simple",
          "partial": "Internal",
          "signature": "GenericFixedPoint a b c-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:toInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.FixedPoint",
          "name": "unBI",
          "package": "FixedPoint-simple",
          "signature": "a",
          "source": "src/Data-FixedPoint.html#BigInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data FixedPoint",
          "module": "Data.FixedPoint",
          "name": "unBI",
          "package": "FixedPoint-simple",
          "partial": "BI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FixedPoint-simple/docs/Data-FixedPoint.html#v:unBI"
      }
    }
  ]
]