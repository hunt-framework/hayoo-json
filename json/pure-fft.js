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
        "word": "pure-fft"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA radix-2 DIT version of\n  the Cooley-Tukey FFT algorithm.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FFT",
          "name": "FFT",
          "package": "pure-fft",
          "source": "src/Numeric-FFT.html",
          "type": "module"
        },
        "index": {
          "description": "radix-2 DIT version of the Cooley-Tukey FFT algorithm",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "FFT",
          "package": "pure-fft",
          "partial": "FFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pure-fft/docs/Numeric-FFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e. The Discrete Fourier Transform.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "dft",
          "package": "pure-fft",
          "signature": "[Complex Double] -\u003e [Complex Double]",
          "source": "src/Numeric-FFT.html#dft",
          "type": "function"
        },
        "index": {
          "description": "The Discrete Fourier Transform",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "dft",
          "normalized": "[Complex Double]-\u003e[Complex Double]",
          "package": "pure-fft",
          "signature": "[Complex Double]-\u003e[Complex Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-fft/docs/Numeric-FFT.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n lg n)\u003c/em\u003e. A radix-2 DIT\n  (decimation-in-time) version of the\n  Cooley-Tukey FFT algorithm.\n  The length of the input list \u003cem\u003emust\u003c/em\u003e\n  be a power of two, or only the prefix\n  of the list of length equal to the largest\n  power of two less than the length of the list\n  will be transformed.\n\u003c/p\u003e",
          "module": "Numeric.FFT",
          "name": "fft",
          "package": "pure-fft",
          "signature": "[Complex Double] -\u003e [Complex Double]",
          "source": "src/Numeric-FFT.html#fft",
          "type": "function"
        },
        "index": {
          "description": "lg radix-2 DIT decimation-in-time version of the Cooley-Tukey FFT algorithm The length of the input list must be power of two or only the prefix of the list of length equal to the largest power of two less than the length of the list will be transformed",
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "fft",
          "normalized": "[Complex Double]-\u003e[Complex Double]",
          "package": "pure-fft",
          "signature": "[Complex Double]-\u003e[Complex Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-fft/docs/Numeric-FFT.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "idft",
          "package": "pure-fft",
          "signature": "[Complex Double] -\u003e [Complex Double]",
          "source": "src/Numeric-FFT.html#idft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "idft",
          "normalized": "[Complex Double]-\u003e[Complex Double]",
          "package": "pure-fft",
          "signature": "[Complex Double]-\u003e[Complex Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-fft/docs/Numeric-FFT.html#v:idft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.FFT",
          "name": "ifft",
          "package": "pure-fft",
          "signature": "[Complex Double] -\u003e [Complex Double]",
          "source": "src/Numeric-FFT.html#ifft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric FFT",
          "module": "Numeric.FFT",
          "name": "ifft",
          "normalized": "[Complex Double]-\u003e[Complex Double]",
          "package": "pure-fft",
          "signature": "[Complex Double]-\u003e[Complex Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pure-fft/docs/Numeric-FFT.html#v:ifft"
      }
    }
  ]
]