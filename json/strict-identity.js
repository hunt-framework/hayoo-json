[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-identity/docs/Control-Monad-StrictIdentity.html#",
      "description": {
        "fct-module": "Control.Monad.StrictIdentity",
        "fct-package": "strict-identity",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-StrictIdentity.html",
        "fct-type": "module",
        "title": "StrictIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StrictIdentity",
        "module": "Control.Monad.StrictIdentity",
        "name": "StrictIdentity",
        "normalized": "",
        "package": "strict-identity",
        "partial": "Strict Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-identity/docs/Control-Monad-StrictIdentity.html#t:StrictIdentity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStrictIdentity\u003c/a\u003e\u003c/code\u003e is a newtype wrapper for a given type \u003ccode\u003ea\u003c/code\u003e that \nsatisfies the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e laws  when restricted to\nterminating strict computations. \n\u003c/p\u003e\u003cp\u003eThe typical use case is to provide a light weight strict nested \nlet notation for code that otherwise must use nested case expressions\nas a proxy for a strict let.\n\u003c/p\u003e\u003cp\u003ethe general pattern is to write code of the form\n\u003c/p\u003e\u003cpre\u003e\nfoo f h g x y z = runStrictIdentity $! do\n    w \u003c- return $! f x y\n    j \u003c- return $! h w z\n    res \u003c- return $! g w j\n    return res\n\u003c/pre\u003e\u003cp\u003eAn example usage of \u003ccode\u003e\u003ca\u003eStrictIdentity\u003c/a\u003e\u003c/code\u003e that compiles to assembly \ncomparable to C is the following:\n\u003c/p\u003e\u003cpre\u003e\n(\u003e\u003e) = unsafeShiftR\n(\u003c\u003c) = unsafeShiftL\nouterShuffle64A :: Word -\u003e Word \nouterShuffle64A !x =\n    runStrictIdentity $! do\n        x \u003c- return $! ((x .&. 0x00000000FFFF0000) \u003c\u003c 16 )\n            .|. ((x\u003e\u003e16) .&. 0x00000000FFFF0000) .|. (x .&. 0xFFFF00000000FFFF)\n        x \u003c-  return $! ((x .&. 0x0000FF000000FF00 ) \u003c\u003c  8 )\n            .|. (x \u003e\u003e 8) .&. 0x0000FF000000FF00 .|. (x  .&. 0xFF0000FFFF0000FF)\n        x\u003c-  return $! (( x .&. 0x00F000F000F000F0 ) \u003c\u003c 4 )\n            .|. (x \u003e\u003e 4) .&. 0x00F000F000F000F0 .|. (x .&. 0xF00FF00FF00FF00F )\n        x\u003c-   return $!((x .&.  0x0C0C0C0C0C0C0C0C )\u003c\u003c 2 )\n            .|. (x \u003e\u003e 2) .&. 0x0C0C0C0C0C0C0C0C .|.( x .&. 0xC3C3C3C3C3C3C3C3)\n        x\u003c-   return $! ( (x .&. 0x2222222222222222)  \u003c\u003c 1 ) \n            .|. (x\u003e\u003e 1) .&. 0x2222222222222222 .|. (x .&. 0x9999999999999999)\n        return x\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.StrictIdentity",
        "fct-package": "strict-identity",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-StrictIdentity.html#StrictIdentity",
        "fct-type": "newtype",
        "title": "StrictIdentity"
      },
      "index": {
        "description": "StrictIdentity is newtype wrapper for given type that satisfies the Functor Applicative and Monad laws when restricted to terminating strict computations The typical use case is to provide light weight strict nested let notation for code that otherwise must use nested case expressions as proxy for strict let the general pattern is to write code of the form foo runStrictIdentity do return return res return return res An example usage of StrictIdentity that compiles to assembly comparable to is the following unsafeShiftR unsafeShiftL outerShuffle64A Word Word outerShuffle64A runStrictIdentity do return x00000000FFFF0000 x00000000FFFF0000 xFFFF00000000FFFF return x0000FF000000FF00 x0000FF000000FF00 xFF0000FFFF0000FF return x00F000F000F000F0 x00F000F000F000F0 xF00FF00FF00FF00F return x0C0C0C0C0C0C0C0C x0C0C0C0C0C0C0C0C xC3C3C3C3C3C3C3C3 return x2222222222222222 x2222222222222222 x9999999999999999 return",
        "hierarchy": "Control Monad StrictIdentity",
        "module": "Control.Monad.StrictIdentity",
        "name": "StrictIdentity",
        "normalized": "",
        "package": "strict-identity",
        "partial": "Strict Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-identity/docs/Control-Monad-StrictIdentity.html#v:StrictIdentity",
      "description": {
        "fct-module": "Control.Monad.StrictIdentity",
        "fct-package": "strict-identity",
        "fct-signature": "StrictIdentity",
        "fct-source": "src/Control-Monad-StrictIdentity.html#StrictIdentity",
        "fct-type": "function",
        "title": "StrictIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StrictIdentity",
        "module": "Control.Monad.StrictIdentity",
        "name": "StrictIdentity",
        "normalized": "",
        "package": "strict-identity",
        "partial": "Strict Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-identity/docs/Control-Monad-StrictIdentity.html#v:runStrictIdentity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunStrictIdentity\u003c/a\u003e\u003c/code\u003e unwraps a value of type  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStrictIdentity\u003c/a\u003e\u003c/code\u003e ty\u003c/code\u003e  into a value of type \u003ccode\u003ety\u003c/code\u003e,  strictly.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.StrictIdentity",
        "fct-package": "strict-identity",
        "fct-signature": "StrictIdentity a -\u003e a",
        "fct-source": "src/Control-Monad-StrictIdentity.html#runStrictIdentity",
        "fct-type": "function",
        "title": "runStrictIdentity"
      },
      "index": {
        "description": "runStrictIdentity unwraps value of type StrictIdentity ty into value of type ty strictly",
        "hierarchy": "Control Monad StrictIdentity",
        "module": "Control.Monad.StrictIdentity",
        "name": "runStrictIdentity",
        "normalized": "StrictIdentity a-\u003ea",
        "package": "strict-identity",
        "partial": "Strict Identity",
        "signature": "StrictIdentity a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/strict-identity/docs/Control-Monad-StrictIdentity.html#v:runStrictIdentity_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.StrictIdentity",
        "fct-package": "strict-identity",
        "fct-signature": "a",
        "fct-source": "src/Control-Monad-StrictIdentity.html#StrictIdentity",
        "fct-type": "function",
        "title": "runStrictIdentity_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad StrictIdentity",
        "module": "Control.Monad.StrictIdentity",
        "name": "runStrictIdentity_",
        "normalized": "",
        "package": "strict-identity",
        "partial": "Strict Identity",
        "signature": ""
      }
    }
  }
]