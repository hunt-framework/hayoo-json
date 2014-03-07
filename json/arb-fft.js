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
        "word": "arb-fft"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMixed-radix FFT calculation.\n\u003c/p\u003e\u003cp\u003eArbitrary input vector lengths are handled using a mixed-radix\n Cooley-Tukey decimation in time algorithm with residual prime\n length vectors being treated using Rader's algorithm or hand-coded\n codelets for small primes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FFT",
          "name": "FFT",
          "package": "arb-fft",
          "source": "src/Numeric-FFT.html",
          "type": "module"
        },
        "index": {
          "description": "Mixed-radix FFT calculation Arbitrary input vector lengths are handled using mixed-radix Cooley-Tukey decimation in time algorithm with residual prime length vectors being treated using Rader algorithm or hand-coded codelets for small primes",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "FFT",
          "package": "arb-fft",
          "partial": "FFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ca\u003ebase transform\u003c/a\u003e used at the \u003ca\u003ebottom\u003c/a\u003e of the recursive\n Cooley-Tukey decomposition of the input problem size: either a\n simple DFT, a special hard-coded small problem size case, or a\n Rader prime-length FFT invocation.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "BaseTransform",
          "package": "arb-fft",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "data"
        },
        "index": {
          "description": "base transform used at the bottom of the recursive Cooley-Tukey decomposition of the input problem size either simple DFT special hard-coded small problem size case or Rader prime-length FFT invocation",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "BaseTransform",
          "package": "arb-fft",
          "partial": "Base Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#t:BaseTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform direction: \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e is the normal FFT, \u003ccode\u003e\u003ca\u003eInverse\u003c/a\u003e\u003c/code\u003e is\n inverse FFT.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "Direction",
          "package": "arb-fft",
          "source": "src/Numeric-FFT-Types.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "Transform direction Forward is the normal FFT Inverse is inverse FFT",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "Direction",
          "package": "arb-fft",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FFT plan.  This depends only on the problem size and can be\n pre-computed and reused to transform (and inverse transform) any\n number of vectors of the given size.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "Plan",
          "package": "arb-fft",
          "source": "src/Numeric-FFT-Types.html#Plan",
          "type": "data"
        },
        "index": {
          "description": "FFT plan This depends only on the problem size and can be pre-computed and reused to transform and inverse transform any number of vectors of the given size",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "Plan",
          "package": "arb-fft",
          "partial": "Plan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#t:Plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple DFT base transform, giving problem\n size and powers of roots of unity needed for\n transform.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "DFTBase",
          "package": "arb-fft",
          "signature": "DFTBase",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "description": "Simple DFT base transform giving problem size and powers of roots of unity needed for transform",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "DFTBase",
          "package": "arb-fft",
          "partial": "DFTBase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:DFTBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "Forward",
          "package": "arb-fft",
          "signature": "Forward",
          "source": "src/Numeric-FFT-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "Forward",
          "package": "arb-fft",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "Inverse",
          "package": "arb-fft",
          "signature": "Inverse",
          "source": "src/Numeric-FFT-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "Inverse",
          "package": "arb-fft",
          "partial": "Inverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:Inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "Plan",
          "package": "arb-fft",
          "signature": "Plan",
          "source": "src/Numeric-FFT-Types.html#Plan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "Plan",
          "package": "arb-fft",
          "partial": "Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:Plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrime-length Rader FFT base transform,\n giving problem size, output index permutation\n (the input index permutation is folded into\n the main input permutation of the full\n transform), pre-transformed Rader b sequence\n for forward and inverse problems, the (padded\n or not) problem size for Rader sequence\n convolution and a sub-plan (either of size\n baseSize-1 or the next larger power of two)\n for computing the Rader convolution.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "RaderBase",
          "package": "arb-fft",
          "signature": "RaderBase",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "description": "Prime-length Rader FFT base transform giving problem size output index permutation the input index permutation is folded into the main input permutation of the full transform pre-transformed Rader sequence for forward and inverse problems the padded or not problem size for Rader sequence convolution and sub-plan either of size baseSize-1 or the next larger power of two for computing the Rader convolution",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "RaderBase",
          "package": "arb-fft",
          "partial": "Rader Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:RaderBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHard-coded small-size base transform.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "SpecialBase",
          "package": "arb-fft",
          "signature": "SpecialBase",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "description": "Hard-coded small-size base transform",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "SpecialBase",
          "package": "arb-fft",
          "partial": "Special Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:SpecialBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "baseSize",
          "package": "arb-fft",
          "signature": "Int",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "baseSize",
          "package": "arb-fft",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:baseSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "dftWsFwd",
          "package": "arb-fft",
          "signature": "VCD",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "dftWsFwd",
          "package": "arb-fft",
          "partial": "Ws Fwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:dftWsFwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "dftWsInv",
          "package": "arb-fft",
          "signature": "VCD",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "dftWsInv",
          "package": "arb-fft",
          "partial": "Ws Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:dftWsInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain FFT plan execution driver.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "execute",
          "package": "arb-fft",
          "signature": "Plan -\u003e Direction -\u003e VCD -\u003e VCD",
          "source": "src/Numeric-FFT-Execute.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Main FFT plan execution driver",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "execute",
          "normalized": "Plan-\u003eDirection-\u003eVCD-\u003eVCD",
          "package": "arb-fft",
          "signature": "Plan-\u003eDirection-\u003eVCD-\u003eVCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward FFT with embedded plan calculation.  For an input vector\n \u003cem\u003eh\u003c/em\u003e of length \u003cem\u003eN\u003c/em\u003e, with entries numbered from 0 to \u003cem\u003eN - 1\u003c/em\u003e,\n calculates the entries in \u003cem\u003eH\u003c/em\u003e, the discrete Fourier transform of\n \u003cem\u003eh\u003c/em\u003e, as:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.skybluetrades.net/images/arb-fft/fft-formula.svg\"/\u003e\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "fft",
          "package": "arb-fft",
          "signature": "v (Complex Double) -\u003e IO (v (Complex Double))",
          "source": "src/Numeric-FFT.html#fft",
          "type": "function"
        },
        "index": {
          "description": "Forward FFT with embedded plan calculation For an input vector of length with entries numbered from to calculates the entries in the discrete Fourier transform of as",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "fft",
          "normalized": "a(Complex Double)-\u003eIO(a(Complex Double))",
          "package": "arb-fft",
          "signature": "v(Complex Double)-\u003eIO(v(Complex Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward FFT with pre-computed plan.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "fftWith",
          "package": "arb-fft",
          "signature": "Plan -\u003e v (Complex Double) -\u003e v (Complex Double)",
          "source": "src/Numeric-FFT.html#fftWith",
          "type": "function"
        },
        "index": {
          "description": "Forward FFT with pre-computed plan",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "fftWith",
          "normalized": "Plan-\u003ea(Complex Double)-\u003ea(Complex Double)",
          "package": "arb-fft",
          "partial": "With",
          "signature": "Plan-\u003ev(Complex Double)-\u003ev(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:fftWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse FFT with embedded plan calculation.  For an input vector\n \u003cem\u003eH\u003c/em\u003e of length \u003cem\u003eN\u003c/em\u003e, with entries numbered from 0 to \u003cem\u003eN - 1\u003c/em\u003e,\n representing Fourier amplitudes of a signal, calculates the entries\n in \u003cem\u003eh\u003c/em\u003e, the inverse discrete Fourier transform of \u003cem\u003eH\u003c/em\u003e, as:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"http://www.skybluetrades.net/images/arb-fft/ifft-formula.svg\"/\u003e\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "ifft",
          "package": "arb-fft",
          "signature": "v (Complex Double) -\u003e IO (v (Complex Double))",
          "source": "src/Numeric-FFT.html#ifft",
          "type": "function"
        },
        "index": {
          "description": "Inverse FFT with embedded plan calculation For an input vector of length with entries numbered from to representing Fourier amplitudes of signal calculates the entries in the inverse discrete Fourier transform of as",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "ifft",
          "normalized": "a(Complex Double)-\u003eIO(a(Complex Double))",
          "package": "arb-fft",
          "signature": "v(Complex Double)-\u003eIO(v(Complex Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:ifft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse FFT with pre-computed plan.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "ifftWith",
          "package": "arb-fft",
          "signature": "Plan -\u003e v (Complex Double) -\u003e v (Complex Double)",
          "source": "src/Numeric-FFT.html#ifftWith",
          "type": "function"
        },
        "index": {
          "description": "Inverse FFT with pre-computed plan",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "ifftWith",
          "normalized": "Plan-\u003ea(Complex Double)-\u003ea(Complex Double)",
          "package": "arb-fft",
          "partial": "With",
          "signature": "Plan-\u003ev(Complex Double)-\u003ev(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:ifftWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase transformation used for each sub-vector\n before performing recursive Danielson-Lanczos\n steps to form the full FFT result.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "plBase",
          "package": "arb-fft",
          "signature": "BaseTransform",
          "source": "src/Numeric-FFT-Types.html#Plan",
          "type": "function"
        },
        "index": {
          "description": "Base transformation used for each sub-vector before performing recursive Danielson-Lanczos steps to form the full FFT result",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "plBase",
          "package": "arb-fft",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize information and diagonal matrix entries\n for Danielson-Lanczos recursive decomposition of\n problem size.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "plDLInfo",
          "package": "arb-fft",
          "signature": "Vector (Int, Int, VVVCD, VVVCD)",
          "source": "src/Numeric-FFT-Types.html#Plan",
          "type": "function"
        },
        "index": {
          "description": "Size information and diagonal matrix entries for Danielson-Lanczos recursive decomposition of problem size",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "plDLInfo",
          "normalized": "Vector(Int,Int,VVVCD,VVVCD)",
          "package": "arb-fft",
          "partial": "DLInfo",
          "signature": "Vector(Int,Int,VVVCD,VVVCD)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plDLInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput vector permutation to use before base\n transformation and recursive Danielson-Lanczos\n composition.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "plPermute",
          "package": "arb-fft",
          "signature": "Maybe VI",
          "source": "src/Numeric-FFT-Types.html#Plan",
          "type": "function"
        },
        "index": {
          "description": "Input vector permutation to use before base transformation and recursive Danielson-Lanczos composition",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "plPermute",
          "package": "arb-fft",
          "partial": "Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlan calculation for a given problem size.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "plan",
          "package": "arb-fft",
          "signature": "Int -\u003e IO Plan",
          "source": "src/Numeric-FFT-Plan.html#plan",
          "type": "function"
        },
        "index": {
          "description": "Plan calculation for given problem size",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "plan",
          "normalized": "Int-\u003eIO Plan",
          "package": "arb-fft",
          "signature": "Int-\u003eIO Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlan calculation for a given problem factorisation.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "planFromFactors",
          "package": "arb-fft",
          "signature": "Int -\u003e (Int, Vector Int) -\u003e IO Plan",
          "source": "src/Numeric-FFT-Plan.html#planFromFactors",
          "type": "function"
        },
        "index": {
          "description": "Plan calculation for given problem factorisation",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "planFromFactors",
          "normalized": "Int-\u003e(Int,Vector Int)-\u003eIO Plan",
          "package": "arb-fft",
          "partial": "From Factors",
          "signature": "Int-\u003e(Int,Vector Int)-\u003eIO Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:planFromFactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "raderBFwd",
          "package": "arb-fft",
          "signature": "VCD",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "raderBFwd",
          "package": "arb-fft",
          "partial": "BFwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderBFwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "raderBInv",
          "package": "arb-fft",
          "signature": "VCD",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "raderBInv",
          "package": "arb-fft",
          "partial": "BInv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderBInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "raderConvPlan",
          "package": "arb-fft",
          "signature": "Plan",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "raderConvPlan",
          "package": "arb-fft",
          "partial": "Conv Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderConvPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "raderConvSize",
          "package": "arb-fft",
          "signature": "Int",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "raderConvSize",
          "package": "arb-fft",
          "partial": "Conv Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderConvSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "raderOutPerm",
          "package": "arb-fft",
          "signature": "VI",
          "source": "src/Numeric-FFT-Types.html#BaseTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "raderOutPerm",
          "package": "arb-fft",
          "partial": "Out Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arb-fft/docs/Numeric-FFT.html#v:raderOutPerm"
      }
    }
  ]
]