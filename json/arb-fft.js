[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMixed-radix FFT calculation.\n\u003c/p\u003e\u003cp\u003eArbitrary input vector lengths are handled using a mixed-radix\n Cooley-Tukey decimation in time algorithm with residual prime\n length vectors being treated using Rader's algorithm or hand-coded\n codelets for small primes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "module",
        "fct-source": "src/Numeric-FFT.html",
        "fct-type": "module",
        "title": "FFT"
      },
      "index": {
        "description": "Mixed-radix FFT calculation Arbitrary input vector lengths are handled using mixed-radix Cooley-Tukey decimation in time algorithm with residual prime length vectors being treated using Rader algorithm or hand-coded codelets for small primes",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "FFT",
        "normalized": "",
        "package": "arb-fft",
        "partial": "FFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#t:BaseTransform",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ca\u003ebase transform\u003c/a\u003e used at the \u003ca\u003ebottom\u003c/a\u003e of the recursive\n Cooley-Tukey decomposition of the input problem size: either a\n simple DFT, a special hard-coded small problem size case, or a\n Rader prime-length FFT invocation.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "data",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "data",
        "title": "BaseTransform"
      },
      "index": {
        "description": "base transform used at the bottom of the recursive Cooley-Tukey decomposition of the input problem size either simple DFT special hard-coded small problem size case or Rader prime-length FFT invocation",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "BaseTransform",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Base Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#t:Direction",
      "description": {
        "fct-descr": "\u003cp\u003eTransform direction: \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e is the normal FFT, \u003ccode\u003e\u003ca\u003eInverse\u003c/a\u003e\u003c/code\u003e is\n inverse FFT.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "data",
        "fct-source": "src/Numeric-FFT-Types.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "Transform direction Forward is the normal FFT Inverse is inverse FFT",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "Direction",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#t:Plan",
      "description": {
        "fct-descr": "\u003cp\u003eA FFT plan.  This depends only on the problem size and can be\n pre-computed and reused to transform (and inverse transform) any\n number of vectors of the given size.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "data",
        "fct-source": "src/Numeric-FFT-Types.html#Plan",
        "fct-type": "data",
        "title": "Plan"
      },
      "index": {
        "description": "FFT plan This depends only on the problem size and can be pre-computed and reused to transform and inverse transform any number of vectors of the given size",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "Plan",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Plan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:DFTBase",
      "description": {
        "fct-descr": "\u003cp\u003eSimple DFT base transform, giving problem\n size and powers of roots of unity needed for\n transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "DFTBase",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "DFTBase"
      },
      "index": {
        "description": "Simple DFT base transform giving problem size and powers of roots of unity needed for transform",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "DFTBase",
        "normalized": "",
        "package": "arb-fft",
        "partial": "DFTBase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:Forward",
      "description": {
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Forward",
        "fct-source": "src/Numeric-FFT-Types.html#Direction",
        "fct-type": "function",
        "title": "Forward"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "Forward",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:Inverse",
      "description": {
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Inverse",
        "fct-source": "src/Numeric-FFT-Types.html#Direction",
        "fct-type": "function",
        "title": "Inverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "Inverse",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Inverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:Plan",
      "description": {
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Plan",
        "fct-source": "src/Numeric-FFT-Types.html#Plan",
        "fct-type": "function",
        "title": "Plan"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "Plan",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Plan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:RaderBase",
      "description": {
        "fct-descr": "\u003cp\u003ePrime-length Rader FFT base transform,\n giving problem size, output index permutation\n (the input index permutation is folded into\n the main input permutation of the full\n transform), pre-transformed Rader b sequence\n for forward and inverse problems, the (padded\n or not) problem size for Rader sequence\n convolution and a sub-plan (either of size\n baseSize-1 or the next larger power of two)\n for computing the Rader convolution.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "RaderBase",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "RaderBase"
      },
      "index": {
        "description": "Prime-length Rader FFT base transform giving problem size output index permutation the input index permutation is folded into the main input permutation of the full transform pre-transformed Rader sequence for forward and inverse problems the padded or not problem size for Rader sequence convolution and sub-plan either of size baseSize-1 or the next larger power of two for computing the Rader convolution",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "RaderBase",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Rader Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:SpecialBase",
      "description": {
        "fct-descr": "\u003cp\u003eHard-coded small-size base transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "SpecialBase",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "SpecialBase"
      },
      "index": {
        "description": "Hard-coded small-size base transform",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "SpecialBase",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Special Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:baseSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "baseSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "baseSize",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:dftWsFwd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "VCD",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "dftWsFwd"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "dftWsFwd",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Ws Fwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:dftWsInv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "VCD",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "dftWsInv"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "dftWsInv",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Ws Inv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eMain FFT plan execution driver.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Plan -\u003e Direction -\u003e VCD -\u003e VCD",
        "fct-source": "src/Numeric-FFT-Execute.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Main FFT plan execution driver",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "execute",
        "normalized": "Plan-\u003eDirection-\u003eVCD-\u003eVCD",
        "package": "arb-fft",
        "partial": "",
        "signature": "Plan-\u003eDirection-\u003eVCD-\u003eVCD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:fft",
      "description": {
        "fct-descr": "\u003cp\u003eForward FFT with embedded plan calculation.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "v (Complex Double) -\u003e IO (v (Complex Double))",
        "fct-source": "src/Numeric-FFT.html#fft",
        "fct-type": "function",
        "title": "fft"
      },
      "index": {
        "description": "Forward FFT with embedded plan calculation",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "fft",
        "normalized": "a(Complex Double)-\u003eIO(a(Complex Double))",
        "package": "arb-fft",
        "partial": "",
        "signature": "v(Complex Double)-\u003eIO(v(Complex Double))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:fftWith",
      "description": {
        "fct-descr": "\u003cp\u003eForward FFT with pre-computed plan.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Plan -\u003e v (Complex Double) -\u003e v (Complex Double)",
        "fct-source": "src/Numeric-FFT.html#fftWith",
        "fct-type": "function",
        "title": "fftWith"
      },
      "index": {
        "description": "Forward FFT with pre-computed plan",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "fftWith",
        "normalized": "Plan-\u003ea(Complex Double)-\u003ea(Complex Double)",
        "package": "arb-fft",
        "partial": "With",
        "signature": "Plan-\u003ev(Complex Double)-\u003ev(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:ifft",
      "description": {
        "fct-descr": "\u003cp\u003eInverse FFT with embedded plan calculation.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "v (Complex Double) -\u003e IO (v (Complex Double))",
        "fct-source": "src/Numeric-FFT.html#ifft",
        "fct-type": "function",
        "title": "ifft"
      },
      "index": {
        "description": "Inverse FFT with embedded plan calculation",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "ifft",
        "normalized": "a(Complex Double)-\u003eIO(a(Complex Double))",
        "package": "arb-fft",
        "partial": "",
        "signature": "v(Complex Double)-\u003eIO(v(Complex Double))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:ifftWith",
      "description": {
        "fct-descr": "\u003cp\u003eInverse FFT with pre-computed plan.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Plan -\u003e v (Complex Double) -\u003e v (Complex Double)",
        "fct-source": "src/Numeric-FFT.html#ifftWith",
        "fct-type": "function",
        "title": "ifftWith"
      },
      "index": {
        "description": "Inverse FFT with pre-computed plan",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "ifftWith",
        "normalized": "Plan-\u003ea(Complex Double)-\u003ea(Complex Double)",
        "package": "arb-fft",
        "partial": "With",
        "signature": "Plan-\u003ev(Complex Double)-\u003ev(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plBase",
      "description": {
        "fct-descr": "\u003cp\u003eBase transformation used for each sub-vector\n before performing recursive Danielson-Lanczos\n steps to form the full FFT result.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "BaseTransform",
        "fct-source": "src/Numeric-FFT-Types.html#Plan",
        "fct-type": "function",
        "title": "plBase"
      },
      "index": {
        "description": "Base transformation used for each sub-vector before performing recursive Danielson-Lanczos steps to form the full FFT result",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "plBase",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plDLInfo",
      "description": {
        "fct-descr": "\u003cp\u003eSize information and diagonal matrix entries\n for Danielson-Lanczos recursive decomposition of\n problem size.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Vector (Int, Int, VVVCD, VVVCD)",
        "fct-source": "src/Numeric-FFT-Types.html#Plan",
        "fct-type": "function",
        "title": "plDLInfo"
      },
      "index": {
        "description": "Size information and diagonal matrix entries for Danielson-Lanczos recursive decomposition of problem size",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "plDLInfo",
        "normalized": "Vector(Int,Int,VVVCD,VVVCD)",
        "package": "arb-fft",
        "partial": "DLInfo",
        "signature": "Vector(Int,Int,VVVCD,VVVCD)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plPermute",
      "description": {
        "fct-descr": "\u003cp\u003eInput vector permutation to use before base\n transformation and recursive Danielson-Lanczos\n composition.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Maybe VI",
        "fct-source": "src/Numeric-FFT-Types.html#Plan",
        "fct-type": "function",
        "title": "plPermute"
      },
      "index": {
        "description": "Input vector permutation to use before base transformation and recursive Danielson-Lanczos composition",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "plPermute",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Permute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plan",
      "description": {
        "fct-descr": "\u003cp\u003ePlan calculation for a given problem size.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Int -\u003e IO Plan",
        "fct-source": "src/Numeric-FFT-Plan.html#plan",
        "fct-type": "function",
        "title": "plan"
      },
      "index": {
        "description": "Plan calculation for given problem size",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "plan",
        "normalized": "Int-\u003eIO Plan",
        "package": "arb-fft",
        "partial": "",
        "signature": "Int-\u003eIO Plan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:planFromFactors",
      "description": {
        "fct-descr": "\u003cp\u003ePlan calculation for a given problem factorisation.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Int -\u003e (Int, Vector Int) -\u003e IO Plan",
        "fct-source": "src/Numeric-FFT-Plan.html#planFromFactors",
        "fct-type": "function",
        "title": "planFromFactors"
      },
      "index": {
        "description": "Plan calculation for given problem factorisation",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "planFromFactors",
        "normalized": "Int-\u003e(Int,Vector Int)-\u003eIO Plan",
        "package": "arb-fft",
        "partial": "From Factors",
        "signature": "Int-\u003e(Int,Vector Int)-\u003eIO Plan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderBFwd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "VCD",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "raderBFwd"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "raderBFwd",
        "normalized": "",
        "package": "arb-fft",
        "partial": "BFwd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderBInv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "VCD",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "raderBInv"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "raderBInv",
        "normalized": "",
        "package": "arb-fft",
        "partial": "BInv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderConvPlan",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Plan",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "raderConvPlan"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "raderConvPlan",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Conv Plan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderConvSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "raderConvSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "raderConvSize",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Conv Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderOutPerm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.FFT",
        "fct-package": "arb-fft",
        "fct-signature": "VI",
        "fct-source": "src/Numeric-FFT-Types.html#BaseTransform",
        "fct-type": "function",
        "title": "raderOutPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT",
        "module": "Numeric.FFT",
        "name": "raderOutPerm",
        "normalized": "",
        "package": "arb-fft",
        "partial": "Out Perm",
        "signature": ""
      }
    }
  }
]