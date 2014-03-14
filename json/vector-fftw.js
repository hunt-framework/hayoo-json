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
        "word": "vector-fftw"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides normalized versions of the transforms in \u003ccode\u003efftw\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe forwards transforms in this module are identical to those in \u003ca\u003eNumeric.FFT.Vector.Unnormalized\u003c/a\u003e.\nThe backwards transforms are normalized to be their inverse operations (approximately, due to floating point precision).\n\u003c/p\u003e\u003cp\u003eFor more information on the underlying transforms, see\n\u003ca\u003ehttp://www.fftw.org/fftw3_doc/What-FFTW-Really-Computes.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "Invertible",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Invertible.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides normalized versions of the transforms in fftw The forwards transforms in this module are identical to those in Numeric.FFT.Vector.Unnormalized The backwards transforms are normalized to be their inverse operations approximately due to floating point precision For more information on the underlying transforms see http www.fftw.org fftw3 doc What-FFTW-Really-Computes.html",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "Invertible",
          "package": "vector-fftw",
          "partial": "Invertible",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-1 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = x_0 + (-1)^k x_(n-1) + 2 sum_(j=1)^(n-2) x_j cos(pi j k/(n-1))\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dct1",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dct1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct1\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct1\"]"
        },
        "index": {
          "description": "type-1 discrete cosine transform n-1 sum n-2 cos pi n-1",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dct1",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-2 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dct2",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dct2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct2\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct2\"]"
        },
        "index": {
          "description": "type-2 discrete cosine transform sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dct2",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-3 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = x_0 + 2 sum_(j=1)^(n-1) x_j cos(pi j(k+1/2)/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dct3",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dct3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct3\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct3\"]"
        },
        "index": {
          "description": "type-3 discrete cosine transform sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dct3",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-4 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dct4",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dct4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct4\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct4\"]"
        },
        "index": {
          "description": "type-4 discrete cosine transform sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dct4",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA forward discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j e^(-2pi i j k/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dft",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dft",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dft\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dft\"]"
        },
        "index": {
          "description": "forward discrete Fourier transform The output and input sizes are the same sum n-1 pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dft",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normalized backward discrete Fourier transform which is the left inverse of\n \u003ccode\u003e\u003ca\u003edftR2C\u003c/a\u003e\u003c/code\u003e.  (Specifically, \u003ccode\u003erun dftC2R . run dftR2C == id\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e behaves differently than the others:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Calling \u003ccode\u003eplan dftC2R n\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e whose \u003cem\u003eoutput\u003c/em\u003e size is \u003ccode\u003en\u003c/code\u003e, and whose\n    \u003cem\u003einput\u003c/em\u003e size is \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003elength v == n\u003c/code\u003e, then \u003ccode\u003elength (run dftC2R v) == 2*(n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dftC2R",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#dftC2R",
          "type": "function"
        },
        "index": {
          "description": "normalized backward discrete Fourier transform which is the left inverse of dftR2C Specifically run dftC2R run dftR2C id This Transform behaves differently than the others Calling plan dftC2R creates Plan whose output size is and whose input size is div If length then length run dftC2R n-1",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dftC2R",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dftC2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA forward discrete Fourier transform with real data.  If the input size is \u003ccode\u003en\u003c/code\u003e,\n the output size will be \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dftR2C",
          "package": "vector-fftw",
          "signature": "Transform Double (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dftR2C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dftR2C\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dftR2C\"]"
        },
        "index": {
          "description": "forward discrete Fourier transform with real data If the input size is the output size will be div",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dftR2C",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dftR2C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-1 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j sin(pi(j+1)(k+1)/(n+1))\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dst1",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dst1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst1\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst1\"]"
        },
        "index": {
          "description": "type-1 discrete sine transform sum n-1 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dst1",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-2 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1)/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dst2",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dst2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst2\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst2\"]"
        },
        "index": {
          "description": "type-2 discrete sine transform sum n-1 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dst2",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-3 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = (-1)^k x_(n-1) + 2 sum_(j=0)^(n-2) x_j sin(pi(j+1)(k+1/2)/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dst3",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dst3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst3\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst3\"]"
        },
        "index": {
          "description": "type-3 discrete sine transform n-1 sum n-2 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dst3",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-4 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "dst4",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dst4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst4\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst4\"]"
        },
        "index": {
          "description": "type-4 discrete sine transform sum n-1 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "dst4",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a plan on the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length v\u003c/code\u003e, then calling\n \u003ccode\u003eexecute p v\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Plan\",\"Numeric.FFT.Vector.Unitary\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "execute",
          "package": "vector-fftw",
          "signature": "Plan a b -\u003e v a -\u003e v b",
          "source": "src/Numeric-FFT-Vector-Base.html#execute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:execute\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:execute\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:execute\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:execute\"]"
        },
        "index": {
          "description": "Run plan on the given Vector If planInputSize length then calling execute will throw an exception",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "execute",
          "normalized": "Plan a b-\u003ec a-\u003ec b",
          "package": "vector-fftw",
          "signature": "Plan a b-\u003ev a-\u003ev b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-1 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2(n-1)) [x_0 + (-1)^k x_(n-1) + 2 sum_(j=1)^(n-2) x_j cos(pi j k/(n-1))]\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct1",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idct1",
          "type": "function"
        },
        "index": {
          "description": "type-1 discrete cosine transform which is the inverse of dct1 n-1 n-1 sum n-2 cos pi n-1",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct1",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-3 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2n)) [x_0 + 2 sum_(j=1)^(n-1) x_j cos(pi j(k+1/2)/n)]\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct2",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idct2",
          "type": "function"
        },
        "index": {
          "description": "type-3 discrete cosine transform which is the inverse of dct2 sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct2",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-2 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct3",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idct3",
          "type": "function"
        },
        "index": {
          "description": "type-2 discrete cosine transform which is the inverse of dct3 sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct3",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-4 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct4",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idct4",
          "type": "function"
        },
        "index": {
          "description": "type-4 discrete cosine transform which is the inverse of dct4 sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idct4",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA backward discrete Fourier transform which is the inverse of \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j e^(2pi i j k/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idft",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idft",
          "type": "function"
        },
        "index": {
          "description": "backward discrete Fourier transform which is the inverse of dft The output and input sizes are the same sum n-1 pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idft",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-1 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(n+1)) sum_(j=0)^(n-1) x_j sin(pi(j+1)(k+1)/(n+1))\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst1",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idst1",
          "type": "function"
        },
        "index": {
          "description": "type-1 discrete sine transform which is the inverse of dst1 sum n-1 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst1",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-3 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2n)) [(-1)^k x_(n-1) + 2 sum_(j=0)^(n-2) x_j sin(pi(j+1)(k+1/2)/n)]\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst2",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idst2",
          "type": "function"
        },
        "index": {
          "description": "type-3 discrete sine transform which is the inverse of dst2 n-1 sum n-2 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst2",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-2 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1)/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst3",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idst3",
          "type": "function"
        },
        "index": {
          "description": "type-2 discrete sine transform which is the inverse of dst3 sum n-1 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst3",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-4 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2n)) sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst4",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Invertible.html#idst4",
          "type": "function"
        },
        "index": {
          "description": "type-4 discrete sine transform which is the inverse of dst4 sum n-1 sin pi",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "idst4",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size.  This function is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOfType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEstimate\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Plan\",\"Numeric.FFT.Vector.Unitary\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "plan",
          "package": "vector-fftw",
          "signature": "Transform a b -\u003e Int -\u003e Plan a b",
          "source": "src/Numeric-FFT-Vector-Base.html#plan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:plan\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:plan\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:plan\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:plan\"]"
        },
        "index": {
          "description": "Create Plan of specific size This function is equivalent to planOfType Estimate",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "plan",
          "normalized": "Transform a b-\u003eInt-\u003ePlan a b",
          "package": "vector-fftw",
          "signature": "Transform a b-\u003eInt-\u003ePlan a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and run a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e for the given transform.\n\u003c/p\u003e",
          "module": "[\"Numeric.FFT.Vector.Invertible\",\"Numeric.FFT.Vector.Plan\",\"Numeric.FFT.Vector.Unitary\",\"Numeric.FFT.Vector.Unnormalized\"]",
          "name": "run",
          "package": "vector-fftw",
          "signature": "Transform a b -\u003e v a -\u003e v b",
          "source": "src/Numeric-FFT-Vector-Base.html#run",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:run\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:run\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:run\",\"http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:run\"]"
        },
        "index": {
          "description": "Create and run Plan for the given transform",
          "hierarchy": "Numeric FFT Vector Invertible",
          "module": "Numeric.FFT.Vector.Invertible",
          "name": "run",
          "normalized": "Transform a b-\u003ec a-\u003ec b",
          "package": "vector-fftw",
          "signature": "Transform a b-\u003ev a-\u003ev b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Plan",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Plan.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Plan",
          "package": "vector-fftw",
          "partial": "Plan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e can be used to run an \u003ccode\u003efftw\u003c/code\u003e algorithm for a specific input/output size.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Plan",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Base.html#Plan",
          "type": "data"
        },
        "index": {
          "description": "Plan can be used to run an fftw algorithm for specific input output size",
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Plan",
          "package": "vector-fftw",
          "partial": "Plan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#t:Plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT.Vector.Plan",
          "name": "PlanType",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Base.html#PlanType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "PlanType",
          "package": "vector-fftw",
          "partial": "Plan Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#t:PlanType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transform which may be applied to vectors of different sizes.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Transform",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Base.html#Transform",
          "type": "data"
        },
        "index": {
          "description": "transform which may be applied to vectors of different sizes",
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Transform",
          "package": "vector-fftw",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Estimate",
          "package": "vector-fftw",
          "signature": "Estimate",
          "source": "src/Numeric-FFT-Vector-Base.html#PlanType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Estimate",
          "package": "vector-fftw",
          "partial": "Estimate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Exhaustive",
          "package": "vector-fftw",
          "signature": "Exhaustive",
          "source": "src/Numeric-FFT-Vector-Base.html#PlanType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Exhaustive",
          "package": "vector-fftw",
          "partial": "Exhaustive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Exhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Measure",
          "package": "vector-fftw",
          "signature": "Measure",
          "source": "src/Numeric-FFT-Vector-Base.html#PlanType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Measure",
          "package": "vector-fftw",
          "partial": "Measure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Patient",
          "package": "vector-fftw",
          "signature": "Patient",
          "source": "src/Numeric-FFT-Vector-Base.html#PlanType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "Patient",
          "package": "vector-fftw",
          "partial": "Patient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Patient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a plan on the given mutable vectors.  The same vector may be used for both\n input and output.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length vIn\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOutputSize\u003c/a\u003e\u003c/code\u003e p /= length vOut\u003c/code\u003e,\n then calling \u003ccode\u003eunsafeExecuteM p vIn vOut\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "executeM",
          "package": "vector-fftw",
          "signature": "Plan a b-\u003e v (PrimState m) a-\u003e v (PrimState m) b-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Run plan on the given mutable vectors The same vector may be used for both input and output If planInputSize length vIn or planOutputSize length vOut then calling unsafeExecuteM vIn vOut will throw an exception",
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "executeM",
          "normalized": "Plan a b-\u003ec(PrimState d)a-\u003ec(PrimState d)b-\u003ed()",
          "package": "vector-fftw",
          "signature": "Plan a b-\u003ev(PrimState m)a-\u003ev(PrimState m)b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:executeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (only) valid input size for this plan.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "planInputSize",
          "package": "vector-fftw",
          "signature": "Plan a b -\u003e Int",
          "source": "src/Numeric-FFT-Vector-Base.html#planInputSize",
          "type": "function"
        },
        "index": {
          "description": "The only valid input size for this plan",
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "planInputSize",
          "normalized": "Plan a b-\u003eInt",
          "package": "vector-fftw",
          "partial": "Input Size",
          "signature": "Plan a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:planInputSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size for this transform.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "planOfType",
          "package": "vector-fftw",
          "signature": "PlanType -\u003e Transform a b -\u003e Int -\u003e Plan a b",
          "source": "src/Numeric-FFT-Vector-Base.html#planOfType",
          "type": "function"
        },
        "index": {
          "description": "Create Plan of specific size for this transform",
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "planOfType",
          "normalized": "PlanType-\u003eTransform a b-\u003eInt-\u003ePlan a b",
          "package": "vector-fftw",
          "partial": "Of Type",
          "signature": "PlanType-\u003eTransform a b-\u003eInt-\u003ePlan a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:planOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (only) valid output size for this plan.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "planOutputSize",
          "package": "vector-fftw",
          "signature": "Plan a b -\u003e Int",
          "source": "src/Numeric-FFT-Vector-Base.html#planOutputSize",
          "type": "function"
        },
        "index": {
          "description": "The only valid output size for this plan",
          "hierarchy": "Numeric FFT Vector Plan",
          "module": "Numeric.FFT.Vector.Plan",
          "name": "planOutputSize",
          "normalized": "Plan a b-\u003eInt",
          "package": "vector-fftw",
          "partial": "Output Size",
          "signature": "Plan a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:planOutputSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides normalized versions of the transforms in \u003ccode\u003efftw\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll of the transforms are normalized so that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each transform is unitary, i.e., preserves the inner product and the sum-of-squares norm of its input.\n\u003c/li\u003e\u003cli\u003e Each backwards transform is the inverse of the corresponding forwards transform.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e(Both conditions only hold approximately, due to floating point precision.)\n\u003c/p\u003e\u003cp\u003eFor more information on the underlying transforms, see\n\u003ca\u003ehttp://www.fftw.org/fftw3_doc/What-FFTW-Really-Computes.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "Unitary",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Unitary.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides normalized versions of the transforms in fftw All of the transforms are normalized so that Each transform is unitary i.e preserves the inner product and the sum-of-squares norm of its input Each backwards transform is the inverse of the corresponding forwards transform Both conditions only hold approximately due to floating point precision For more information on the underlying transforms see http www.fftw.org fftw3 doc What-FFTW-Really-Computes.html",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "Unitary",
          "package": "vector-fftw",
          "partial": "Unitary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-2 discrete cosine transform.  Its inverse is \u003ccode\u003edct3\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ey_k = w(k) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n);\u003c/code\u003e\n where\n \u003ccode\u003ew(0)=1/sqrt n\u003c/code\u003e, and \u003ccode\u003ew(k)=sqrt(2/n)\u003c/code\u003e for \u003ccode\u003ek\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dct2",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unitary.html#dct2",
          "type": "function"
        },
        "index": {
          "description": "type-2 discrete cosine transform Its inverse is dct3 sum n-1 cos pi where sqrt and sqrt for",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dct2",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-4 discrete cosine transform.  It is its own inverse.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/sqrt n) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dct4",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unitary.html#dct4",
          "type": "function"
        },
        "index": {
          "description": "type-4 discrete cosine transform It is its own inverse sqrt sum n-1 cos pi",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dct4",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dct4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA discrete Fourier transform. The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = (1/sqrt n) sum_(j=0)^(n-1) x_j e^(-2pi i j k/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dft",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Unitary.html#dft",
          "type": "function"
        },
        "index": {
          "description": "discrete Fourier transform The output and input sizes are the same sqrt sum n-1 pi",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dft",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normalized backward discrete Fourier transform which is the left inverse of\n \u003ccode\u003e\u003ca\u003edftR2C\u003c/a\u003e\u003c/code\u003e.  (Specifically, \u003ccode\u003erun dftC2R . run dftR2C == id\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e behaves differently than the others:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Calling \u003ccode\u003eplan dftC2R n\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e whose \u003cem\u003eoutput\u003c/em\u003e size is \u003ccode\u003en\u003c/code\u003e, and whose\n    \u003cem\u003einput\u003c/em\u003e size is \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003elength v == n\u003c/code\u003e, then \u003ccode\u003elength (run dftC2R v) == 2*(n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dftC2R",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) Double",
          "source": "src/Numeric-FFT-Vector-Unitary.html#dftC2R",
          "type": "function"
        },
        "index": {
          "description": "normalized backward discrete Fourier transform which is the left inverse of dftR2C Specifically run dftC2R run dftR2C id This Transform behaves differently than the others Calling plan dftC2R creates Plan whose output size is and whose input size is div If length then length run dftC2R n-1",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dftC2R",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dftC2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA forward discrete Fourier transform with real data.  If the input size is \u003ccode\u003en\u003c/code\u003e,\n the output size will be \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dftR2C",
          "package": "vector-fftw",
          "signature": "Transform Double (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Unitary.html#dftR2C",
          "type": "function"
        },
        "index": {
          "description": "forward discrete Fourier transform with real data If the input size is the output size will be div",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "dftR2C",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dftR2C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-3 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ey_k = (-1)^k w(n-1) x_(n-1) + 2 sum_(j=0)^(n-2) w(j) x_j sin(pi(j+1)(k+1/2)/n);\u003c/code\u003e\n where\n \u003ccode\u003ew(0)=1/sqrt(n)\u003c/code\u003e, and \u003ccode\u003ew(k)=1/sqrt(2n)\u003c/code\u003e for \u003ccode\u003ek\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "idct2",
          "package": "vector-fftw",
          "signature": "Transform Double Double",
          "source": "src/Numeric-FFT-Vector-Unitary.html#idct2",
          "type": "function"
        },
        "index": {
          "description": "type-3 discrete cosine transform which is the inverse of dct2 n-1 n-1 sum n-2 sin pi where sqrt and sqrt for",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "idct2",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:idct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inverse discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = (1/sqrt n) sum_(j=0)^(n-1) x_j e^(2pi i j k/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "idft",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Unitary.html#idft",
          "type": "function"
        },
        "index": {
          "description": "An inverse discrete Fourier transform The output and input sizes are the same sqrt sum n-1 pi",
          "hierarchy": "Numeric FFT Vector Unitary",
          "module": "Numeric.FFT.Vector.Unitary",
          "name": "idft",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:idft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRaw, unnormalized versions of the transforms in \u003ccode\u003efftw\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the forwards and backwards transforms of this module are not actually\ninverses.  For example, \u003ccode\u003erun idft (run dft v) /= v\u003c/code\u003e in general.\n\u003c/p\u003e\u003cp\u003eFor more information on the individual transforms, see\n\u003ca\u003ehttp://www.fftw.org/fftw3_doc/What-FFTW-Really-Computes.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FFT.Vector.Unnormalized",
          "name": "Unnormalized",
          "package": "vector-fftw",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html",
          "type": "module"
        },
        "index": {
          "description": "Raw unnormalized versions of the transforms in fftw Note that the forwards and backwards transforms of this module are not actually inverses For example run idft run dft in general For more information on the individual transforms see http www.fftw.org fftw3 doc What-FFTW-Really-Computes.html",
          "hierarchy": "Numeric FFT Vector Unnormalized",
          "module": "Numeric.FFT.Vector.Unnormalized",
          "name": "Unnormalized",
          "package": "vector-fftw",
          "partial": "Unnormalized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA backward discrete Fourier transform which produces real data.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e behaves differently than the others:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Calling \u003ccode\u003eplan dftC2R n\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e whose \u003cem\u003eoutput\u003c/em\u003e size is \u003ccode\u003en\u003c/code\u003e, and whose\n    \u003cem\u003einput\u003c/em\u003e size is \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003elength v == n\u003c/code\u003e, then \u003ccode\u003elength (run dftC2R v) == 2*(n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.FFT.Vector.Unnormalized",
          "name": "dftC2R",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) Double",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#dftC2R",
          "type": "function"
        },
        "index": {
          "description": "backward discrete Fourier transform which produces real data This Transform behaves differently than the others Calling plan dftC2R creates Plan whose output size is and whose input size is div If length then length run dftC2R n-1",
          "hierarchy": "Numeric FFT Vector Unnormalized",
          "module": "Numeric.FFT.Vector.Unnormalized",
          "name": "dftC2R",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dftC2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA backward discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j e^(2pi i j k/n)\u003c/pre\u003e",
          "module": "Numeric.FFT.Vector.Unnormalized",
          "name": "idft",
          "package": "vector-fftw",
          "signature": "Transform (Complex Double) (Complex Double)",
          "source": "src/Numeric-FFT-Vector-Unnormalized.html#idft",
          "type": "function"
        },
        "index": {
          "description": "backward discrete Fourier transform The output and input sizes are the same sum n-1 pi",
          "hierarchy": "Numeric FFT Vector Unnormalized",
          "module": "Numeric.FFT.Vector.Unnormalized",
          "name": "idft",
          "package": "vector-fftw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:idft"
      }
    }
  ]
]