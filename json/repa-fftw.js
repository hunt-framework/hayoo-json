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
        "word": "repa-fftw"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePerforms fft of repa array data via FFTW.\n\u003c/p\u003e\u003cp\u003eCurrently supporting (\u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e Double) arrays for dimensions \u003ccode\u003e\u003ca\u003eDIM1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDIM2\u003c/a\u003e\u003c/code\u003e,\nand \u003ccode\u003e\u003ca\u003eDIM3\u003c/a\u003e\u003c/code\u003e only.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "FFTW",
          "package": "repa-fftw",
          "source": "src/Data-Array-Repa-FFTW.html",
          "type": "module"
        },
        "index": {
          "description": "Performs fft of repa array data via FFTW Currently supporting Complex Double arrays for dimensions DIM1 DIM2 and DIM3 only",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "FFTW",
          "package": "repa-fftw",
          "partial": "FFTW",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms 1 dimension forward fft.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "fft",
          "package": "repa-fftw",
          "signature": "Array F DIM1 (Complex Double) -\u003e Array F DIM1 (Complex Double)",
          "source": "src/Data-Array-Repa-FFTW.html#fft",
          "type": "function"
        },
        "index": {
          "description": "Performs dimension forward fft",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "fft",
          "normalized": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "package": "repa-fftw",
          "signature": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms 2 dimension forward fft.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "fft2d",
          "package": "repa-fftw",
          "signature": "Array F DIM2 (Complex Double) -\u003e Array F DIM2 (Complex Double)",
          "source": "src/Data-Array-Repa-FFTW.html#fft2d",
          "type": "function"
        },
        "index": {
          "description": "Performs dimension forward fft",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "fft2d",
          "normalized": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "package": "repa-fftw",
          "signature": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#v:fft2d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms 3 dimension forward fft.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "fft3d",
          "package": "repa-fftw",
          "signature": "Array F DIM3 (Complex Double) -\u003e Array F DIM3 (Complex Double)",
          "source": "src/Data-Array-Repa-FFTW.html#fft3d",
          "type": "function"
        },
        "index": {
          "description": "Performs dimension forward fft",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "fft3d",
          "normalized": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "package": "repa-fftw",
          "signature": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#v:fft3d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms 1 dimension inverse fft.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "ifft",
          "package": "repa-fftw",
          "signature": "Array F DIM1 (Complex Double) -\u003e Array F DIM1 (Complex Double)",
          "source": "src/Data-Array-Repa-FFTW.html#ifft",
          "type": "function"
        },
        "index": {
          "description": "Performs dimension inverse fft",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "ifft",
          "normalized": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "package": "repa-fftw",
          "signature": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#v:ifft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms 2 dimension inverse fft.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "ifft2d",
          "package": "repa-fftw",
          "signature": "Array F DIM2 (Complex Double) -\u003e Array F DIM2 (Complex Double)",
          "source": "src/Data-Array-Repa-FFTW.html#ifft2d",
          "type": "function"
        },
        "index": {
          "description": "Performs dimension inverse fft",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "ifft2d",
          "normalized": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "package": "repa-fftw",
          "signature": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#v:ifft2d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms 3 dimension inverse fft.\n\u003c/p\u003e",
          "module": "Data.Array.Repa.FFTW",
          "name": "ifft3d",
          "package": "repa-fftw",
          "signature": "Array F DIM3 (Complex Double) -\u003e Array F DIM3 (Complex Double)",
          "source": "src/Data-Array-Repa-FFTW.html#ifft3d",
          "type": "function"
        },
        "index": {
          "description": "Performs dimension inverse fft",
          "hierarchy": "Data Array Repa FFTW",
          "module": "Data.Array.Repa.FFTW",
          "name": "ifft3d",
          "normalized": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "package": "repa-fftw",
          "signature": "Array F DIM(Complex Double)-\u003eArray F DIM(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/repa-fftw/docs/Data-Array-Repa-FFTW.html#v:ifft3d"
      }
    }
  ]
]