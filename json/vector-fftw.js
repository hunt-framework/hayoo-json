[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides normalized versions of the transforms in \u003ccode\u003efftw\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe forwards transforms in this module are identical to those in \u003ca\u003eNumeric.FFT.Vector.Unnormalized\u003c/a\u003e.\nThe backwards transforms are normalized to be their inverse operations (approximately, due to floating point precision).\n\u003c/p\u003e\u003cp\u003eFor more information on the underlying transforms, see\n\u003ca\u003ehttp://www.fftw.org/fftw3_doc/What-FFTW-Really-Computes.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "module",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html",
        "fct-type": "module",
        "title": "Invertible"
      },
      "index": {
        "description": "This module provides normalized versions of the transforms in fftw The forwards transforms in this module are identical to those in Numeric.FFT.Vector.Unnormalized The backwards transforms are normalized to be their inverse operations approximately due to floating point precision For more information on the underlying transforms see http www.fftw.org fftw3 doc What-FFTW-Really-Computes.html",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "Invertible",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Invertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct1",
      "description": {
        "fct-descr": "\u003cp\u003eA type-1 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = x_0 + (-1)^k x_(n-1) + 2 sum_(j=1)^(n-2) x_j cos(pi j k/(n-1))\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct1",
        "fct-type": "function",
        "title": "dct1"
      },
      "index": {
        "description": "type-1 discrete cosine transform n-1 sum n-2 cos pi n-1",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dct1",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct2",
        "fct-type": "function",
        "title": "dct2"
      },
      "index": {
        "description": "type-2 discrete cosine transform sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dct2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct3",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = x_0 + 2 sum_(j=1)^(n-1) x_j cos(pi j(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct3",
        "fct-type": "function",
        "title": "dct3"
      },
      "index": {
        "description": "type-3 discrete cosine transform sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dct3",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dct4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct4",
        "fct-type": "function",
        "title": "dct4"
      },
      "index": {
        "description": "type-4 discrete cosine transform sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dct4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dft",
      "description": {
        "fct-descr": "\u003cp\u003eA forward discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j e^(-2pi i j k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dft",
        "fct-type": "function",
        "title": "dft"
      },
      "index": {
        "description": "forward discrete Fourier transform The output and input sizes are the same sum n-1 pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dft",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dftC2R",
      "description": {
        "fct-descr": "\u003cp\u003eA normalized backward discrete Fourier transform which is the left inverse of\n \u003ccode\u003e\u003ca\u003edftR2C\u003c/a\u003e\u003c/code\u003e.  (Specifically, \u003ccode\u003erun dftC2R . run dftR2C == id\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e behaves differently than the others:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Calling \u003ccode\u003eplan dftC2R n\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e whose \u003cem\u003eoutput\u003c/em\u003e size is \u003ccode\u003en\u003c/code\u003e, and whose\n    \u003cem\u003einput\u003c/em\u003e size is \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003elength v == n\u003c/code\u003e, then \u003ccode\u003elength (run dftC2R v) == 2*(n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#dftC2R",
        "fct-type": "function",
        "title": "dftC2R"
      },
      "index": {
        "description": "normalized backward discrete Fourier transform which is the left inverse of dftR2C Specifically run dftC2R run dftR2C id This Transform behaves differently than the others Calling plan dftC2R creates Plan whose output size is and whose input size is div If length then length run dftC2R n-1",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dftC2R",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dftR2C",
      "description": {
        "fct-descr": "\u003cp\u003eA forward discrete Fourier transform with real data.  If the input size is \u003ccode\u003en\u003c/code\u003e,\n the output size will be \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dftR2C",
        "fct-type": "function",
        "title": "dftR2C"
      },
      "index": {
        "description": "forward discrete Fourier transform with real data If the input size is the output size will be div",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dftR2C",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst1",
      "description": {
        "fct-descr": "\u003cp\u003eA type-1 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j sin(pi(j+1)(k+1)/(n+1))\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst1",
        "fct-type": "function",
        "title": "dst1"
      },
      "index": {
        "description": "type-1 discrete sine transform sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dst1",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst2",
        "fct-type": "function",
        "title": "dst2"
      },
      "index": {
        "description": "type-2 discrete sine transform sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dst2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst3",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = (-1)^k x_(n-1) + 2 sum_(j=0)^(n-2) x_j sin(pi(j+1)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst3",
        "fct-type": "function",
        "title": "dst3"
      },
      "index": {
        "description": "type-3 discrete sine transform n-1 sum n-2 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dst3",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:dst4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst4",
        "fct-type": "function",
        "title": "dst4"
      },
      "index": {
        "description": "type-4 discrete sine transform sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "dst4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eRun a plan on the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length v\u003c/code\u003e, then calling\n \u003ccode\u003eexecute p v\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Run plan on the given Vector If planInputSize length then calling execute will throw an exception",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "execute",
        "normalized": "Plan a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Plan a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct1",
      "description": {
        "fct-descr": "\u003cp\u003eA type-1 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2(n-1)) [x_0 + (-1)^k x_(n-1) + 2 sum_(j=1)^(n-2) x_j cos(pi j k/(n-1))]\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idct1",
        "fct-type": "function",
        "title": "idct1"
      },
      "index": {
        "description": "type-1 discrete cosine transform which is the inverse of dct1 n-1 n-1 sum n-2 cos pi n-1",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idct1",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2n)) [x_0 + 2 sum_(j=1)^(n-1) x_j cos(pi j(k+1/2)/n)]\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idct2",
        "fct-type": "function",
        "title": "idct2"
      },
      "index": {
        "description": "type-3 discrete cosine transform which is the inverse of dct2 sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idct2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct3",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idct3",
        "fct-type": "function",
        "title": "idct3"
      },
      "index": {
        "description": "type-2 discrete cosine transform which is the inverse of dct3 sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idct3",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idct4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idct4",
        "fct-type": "function",
        "title": "idct4"
      },
      "index": {
        "description": "type-4 discrete cosine transform which is the inverse of dct4 sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idct4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idft",
      "description": {
        "fct-descr": "\u003cp\u003eA backward discrete Fourier transform which is the inverse of \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j e^(2pi i j k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idft",
        "fct-type": "function",
        "title": "idft"
      },
      "index": {
        "description": "backward discrete Fourier transform which is the inverse of dft The output and input sizes are the same sum n-1 pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idft",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst1",
      "description": {
        "fct-descr": "\u003cp\u003eA type-1 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(n+1)) sum_(j=0)^(n-1) x_j sin(pi(j+1)(k+1)/(n+1))\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idst1",
        "fct-type": "function",
        "title": "idst1"
      },
      "index": {
        "description": "type-1 discrete sine transform which is the inverse of dst1 sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idst1",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2n)) [(-1)^k x_(n-1) + 2 sum_(j=0)^(n-2) x_j sin(pi(j+1)(k+1/2)/n)]\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idst2",
        "fct-type": "function",
        "title": "idst2"
      },
      "index": {
        "description": "type-3 discrete sine transform which is the inverse of dst2 n-1 sum n-2 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idst2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst3",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/n) sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idst3",
        "fct-type": "function",
        "title": "idst3"
      },
      "index": {
        "description": "type-2 discrete sine transform which is the inverse of dst3 sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idst3",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:idst4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete sine transform which is the inverse of \u003ccode\u003e\u003ca\u003edst4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/(2n)) sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Invertible.html#idst4",
        "fct-type": "function",
        "title": "idst4"
      },
      "index": {
        "description": "type-4 discrete sine transform which is the inverse of dst4 sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "idst4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:plan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size.  This function is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOfType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEstimate\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e Int -\u003e Plan a b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#plan",
        "fct-type": "function",
        "title": "plan"
      },
      "index": {
        "description": "Create Plan of specific size This function is equivalent to planOfType Estimate",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "plan",
        "normalized": "Transform a b-\u003eInt-\u003ePlan a b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003eInt-\u003ePlan a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Invertible.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and run a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e for the given transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Invertible",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Create and run Plan for the given transform",
        "hierarchy": "Numeric FFT Vector Invertible",
        "module": "Numeric.FFT.Vector.Invertible",
        "name": "run",
        "normalized": "Transform a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#",
      "description": {
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "module",
        "fct-source": "src/Numeric-FFT-Vector-Plan.html",
        "fct-type": "module",
        "title": "Plan"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Plan",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Plan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#t:Plan",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e can be used to run an \u003ccode\u003efftw\u003c/code\u003e algorithm for a specific input/output size.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "data",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#Plan",
        "fct-type": "data",
        "title": "Plan"
      },
      "index": {
        "description": "Plan can be used to run an fftw algorithm for specific input output size",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Plan",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Plan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#t:PlanType",
      "description": {
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "data",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#PlanType",
        "fct-type": "data",
        "title": "PlanType"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "PlanType",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Plan Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#t:Transform",
      "description": {
        "fct-descr": "\u003cp\u003eA transform which may be applied to vectors of different sizes.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "data",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#Transform",
        "fct-type": "data",
        "title": "Transform"
      },
      "index": {
        "description": "transform which may be applied to vectors of different sizes",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Transform",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Estimate",
      "description": {
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Estimate",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#PlanType",
        "fct-type": "function",
        "title": "Estimate"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Estimate",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Estimate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Exhaustive",
      "description": {
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Exhaustive",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#PlanType",
        "fct-type": "function",
        "title": "Exhaustive"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Exhaustive",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Exhaustive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Measure",
      "description": {
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Measure",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#PlanType",
        "fct-type": "function",
        "title": "Measure"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Measure",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:Patient",
      "description": {
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Patient",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#PlanType",
        "fct-type": "function",
        "title": "Patient"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "Patient",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Patient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eRun a plan on the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length v\u003c/code\u003e, then calling\n \u003ccode\u003eexecute p v\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Run plan on the given Vector If planInputSize length then calling execute will throw an exception",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "execute",
        "normalized": "Plan a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Plan a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:executeM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a plan on the given mutable vectors.  The same vector may be used for both\n input and output.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length vIn\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOutputSize\u003c/a\u003e\u003c/code\u003e p /= length vOut\u003c/code\u003e,\n then calling \u003ccode\u003eunsafeExecuteM p vIn vOut\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b-\u003e v (PrimState m) a-\u003e v (PrimState m) b-\u003e m ()",
        "fct-type": "function",
        "title": "executeM"
      },
      "index": {
        "description": "Run plan on the given mutable vectors The same vector may be used for both input and output If planInputSize length vIn or planOutputSize length vOut then calling unsafeExecuteM vIn vOut will throw an exception",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "executeM",
        "normalized": "Plan a b-\u003ec(PrimState d)a-\u003ec(PrimState d)b-\u003ed()",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Plan a b-\u003ev(PrimState m)a-\u003ev(PrimState m)b-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:plan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size.  This function is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOfType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEstimate\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e Int -\u003e Plan a b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#plan",
        "fct-type": "function",
        "title": "plan"
      },
      "index": {
        "description": "Create Plan of specific size This function is equivalent to planOfType Estimate",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "plan",
        "normalized": "Transform a b-\u003eInt-\u003ePlan a b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003eInt-\u003ePlan a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:planInputSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe (only) valid input size for this plan.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b -\u003e Int",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#planInputSize",
        "fct-type": "function",
        "title": "planInputSize"
      },
      "index": {
        "description": "The only valid input size for this plan",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "planInputSize",
        "normalized": "Plan a b-\u003eInt",
        "package": "vector-fftw",
        "partial": "Input Size",
        "signature": "Plan a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:planOfType",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size for this transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "PlanType -\u003e Transform a b -\u003e Int -\u003e Plan a b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#planOfType",
        "fct-type": "function",
        "title": "planOfType"
      },
      "index": {
        "description": "Create Plan of specific size for this transform",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "planOfType",
        "normalized": "PlanType-\u003eTransform a b-\u003eInt-\u003ePlan a b",
        "package": "vector-fftw",
        "partial": "Of Type",
        "signature": "PlanType-\u003eTransform a b-\u003eInt-\u003ePlan a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:planOutputSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe (only) valid output size for this plan.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b -\u003e Int",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#planOutputSize",
        "fct-type": "function",
        "title": "planOutputSize"
      },
      "index": {
        "description": "The only valid output size for this plan",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "planOutputSize",
        "normalized": "Plan a b-\u003eInt",
        "package": "vector-fftw",
        "partial": "Output Size",
        "signature": "Plan a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Plan.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and run a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e for the given transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Plan",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Create and run Plan for the given transform",
        "hierarchy": "Numeric FFT Vector Plan",
        "module": "Numeric.FFT.Vector.Plan",
        "name": "run",
        "normalized": "Transform a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides normalized versions of the transforms in \u003ccode\u003efftw\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll of the transforms are normalized so that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each transform is unitary, i.e., preserves the inner product and the sum-of-squares norm of its input.\n\u003c/li\u003e\u003cli\u003e Each backwards transform is the inverse of the corresponding forwards transform.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e(Both conditions only hold approximately, due to floating point precision.)\n\u003c/p\u003e\u003cp\u003eFor more information on the underlying transforms, see\n\u003ca\u003ehttp://www.fftw.org/fftw3_doc/What-FFTW-Really-Computes.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "module",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html",
        "fct-type": "module",
        "title": "Unitary"
      },
      "index": {
        "description": "This module provides normalized versions of the transforms in fftw All of the transforms are normalized so that Each transform is unitary i.e preserves the inner product and the sum-of-squares norm of its input Each backwards transform is the inverse of the corresponding forwards transform Both conditions only hold approximately due to floating point precision For more information on the underlying transforms see http www.fftw.org fftw3 doc What-FFTW-Really-Computes.html",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "Unitary",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Unitary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dct2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete cosine transform.  Its inverse is \u003ccode\u003edct3\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ey_k = w(k) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n);\u003c/code\u003e\n where\n \u003ccode\u003ew(0)=1/sqrt n\u003c/code\u003e, and \u003ccode\u003ew(k)=sqrt(2/n)\u003c/code\u003e for \u003ccode\u003ek\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#dct2",
        "fct-type": "function",
        "title": "dct2"
      },
      "index": {
        "description": "type-2 discrete cosine transform Its inverse is dct3 sum n-1 cos pi where sqrt and sqrt for",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "dct2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dct4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete cosine transform.  It is its own inverse.\n\u003c/p\u003e\u003cpre\u003ey_k = (1/sqrt n) sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#dct4",
        "fct-type": "function",
        "title": "dct4"
      },
      "index": {
        "description": "type-4 discrete cosine transform It is its own inverse sqrt sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "dct4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dft",
      "description": {
        "fct-descr": "\u003cp\u003eA discrete Fourier transform. The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = (1/sqrt n) sum_(j=0)^(n-1) x_j e^(-2pi i j k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#dft",
        "fct-type": "function",
        "title": "dft"
      },
      "index": {
        "description": "discrete Fourier transform The output and input sizes are the same sqrt sum n-1 pi",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "dft",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dftC2R",
      "description": {
        "fct-descr": "\u003cp\u003eA normalized backward discrete Fourier transform which is the left inverse of\n \u003ccode\u003e\u003ca\u003edftR2C\u003c/a\u003e\u003c/code\u003e.  (Specifically, \u003ccode\u003erun dftC2R . run dftR2C == id\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e behaves differently than the others:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Calling \u003ccode\u003eplan dftC2R n\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e whose \u003cem\u003eoutput\u003c/em\u003e size is \u003ccode\u003en\u003c/code\u003e, and whose\n    \u003cem\u003einput\u003c/em\u003e size is \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003elength v == n\u003c/code\u003e, then \u003ccode\u003elength (run dftC2R v) == 2*(n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) Double",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#dftC2R",
        "fct-type": "function",
        "title": "dftC2R"
      },
      "index": {
        "description": "normalized backward discrete Fourier transform which is the left inverse of dftR2C Specifically run dftC2R run dftR2C id This Transform behaves differently than the others Calling plan dftC2R creates Plan whose output size is and whose input size is div If length then length run dftC2R n-1",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "dftC2R",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:dftR2C",
      "description": {
        "fct-descr": "\u003cp\u003eA forward discrete Fourier transform with real data.  If the input size is \u003ccode\u003en\u003c/code\u003e,\n the output size will be \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#dftR2C",
        "fct-type": "function",
        "title": "dftR2C"
      },
      "index": {
        "description": "forward discrete Fourier transform with real data If the input size is the output size will be div",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "dftR2C",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eRun a plan on the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length v\u003c/code\u003e, then calling\n \u003ccode\u003eexecute p v\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Run plan on the given Vector If planInputSize length then calling execute will throw an exception",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "execute",
        "normalized": "Plan a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Plan a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:idct2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete cosine transform which is the inverse of \u003ccode\u003e\u003ca\u003edct2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ey_k = (-1)^k w(n-1) x_(n-1) + 2 sum_(j=0)^(n-2) w(j) x_j sin(pi(j+1)(k+1/2)/n);\u003c/code\u003e\n where\n \u003ccode\u003ew(0)=1/sqrt(n)\u003c/code\u003e, and \u003ccode\u003ew(k)=1/sqrt(2n)\u003c/code\u003e for \u003ccode\u003ek\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#idct2",
        "fct-type": "function",
        "title": "idct2"
      },
      "index": {
        "description": "type-3 discrete cosine transform which is the inverse of dct2 n-1 n-1 sum n-2 sin pi where sqrt and sqrt for",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "idct2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:idft",
      "description": {
        "fct-descr": "\u003cp\u003eAn inverse discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = (1/sqrt n) sum_(j=0)^(n-1) x_j e^(2pi i j k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unitary.html#idft",
        "fct-type": "function",
        "title": "idft"
      },
      "index": {
        "description": "An inverse discrete Fourier transform The output and input sizes are the same sqrt sum n-1 pi",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "idft",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:plan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size.  This function is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOfType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEstimate\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e Int -\u003e Plan a b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#plan",
        "fct-type": "function",
        "title": "plan"
      },
      "index": {
        "description": "Create Plan of specific size This function is equivalent to planOfType Estimate",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "plan",
        "normalized": "Transform a b-\u003eInt-\u003ePlan a b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003eInt-\u003ePlan a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unitary.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and run a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e for the given transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unitary",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Create and run Plan for the given transform",
        "hierarchy": "Numeric FFT Vector Unitary",
        "module": "Numeric.FFT.Vector.Unitary",
        "name": "run",
        "normalized": "Transform a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRaw, unnormalized versions of the transforms in \u003ccode\u003efftw\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the forwards and backwards transforms of this module are not actually\ninverses.  For example, \u003ccode\u003erun idft (run dft v) /= v\u003c/code\u003e in general.\n\u003c/p\u003e\u003cp\u003eFor more information on the individual transforms, see\n\u003ca\u003ehttp://www.fftw.org/fftw3_doc/What-FFTW-Really-Computes.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "module",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html",
        "fct-type": "module",
        "title": "Unnormalized"
      },
      "index": {
        "description": "Raw unnormalized versions of the transforms in fftw Note that the forwards and backwards transforms of this module are not actually inverses For example run idft run dft in general For more information on the individual transforms see http www.fftw.org fftw3 doc What-FFTW-Really-Computes.html",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "Unnormalized",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "Unnormalized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct1",
      "description": {
        "fct-descr": "\u003cp\u003eA type-1 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = x_0 + (-1)^k x_(n-1) + 2 sum_(j=1)^(n-2) x_j cos(pi j k/(n-1))\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct1",
        "fct-type": "function",
        "title": "dct1"
      },
      "index": {
        "description": "type-1 discrete cosine transform n-1 sum n-2 cos pi n-1",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dct1",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j cos(pi(j+1/2)k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct2",
        "fct-type": "function",
        "title": "dct2"
      },
      "index": {
        "description": "type-2 discrete cosine transform sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dct2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct3",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = x_0 + 2 sum_(j=1)^(n-1) x_j cos(pi j(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct3",
        "fct-type": "function",
        "title": "dct3"
      },
      "index": {
        "description": "type-3 discrete cosine transform sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dct3",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dct4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete cosine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j cos(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dct4",
        "fct-type": "function",
        "title": "dct4"
      },
      "index": {
        "description": "type-4 discrete cosine transform sum n-1 cos pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dct4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dft",
      "description": {
        "fct-descr": "\u003cp\u003eA forward discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j e^(-2pi i j k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dft",
        "fct-type": "function",
        "title": "dft"
      },
      "index": {
        "description": "forward discrete Fourier transform The output and input sizes are the same sum n-1 pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dft",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dftC2R",
      "description": {
        "fct-descr": "\u003cp\u003eA backward discrete Fourier transform which produces real data.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e behaves differently than the others:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Calling \u003ccode\u003eplan dftC2R n\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e whose \u003cem\u003eoutput\u003c/em\u003e size is \u003ccode\u003en\u003c/code\u003e, and whose\n    \u003cem\u003einput\u003c/em\u003e size is \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If \u003ccode\u003elength v == n\u003c/code\u003e, then \u003ccode\u003elength (run dftC2R v) == 2*(n-1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dftC2R",
        "fct-type": "function",
        "title": "dftC2R"
      },
      "index": {
        "description": "backward discrete Fourier transform which produces real data This Transform behaves differently than the others Calling plan dftC2R creates Plan whose output size is and whose input size is div If length then length run dftC2R n-1",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dftC2R",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dftR2C",
      "description": {
        "fct-descr": "\u003cp\u003eA forward discrete Fourier transform with real data.  If the input size is \u003ccode\u003en\u003c/code\u003e,\n the output size will be \u003ccode\u003en `div` 2 + 1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dftR2C",
        "fct-type": "function",
        "title": "dftR2C"
      },
      "index": {
        "description": "forward discrete Fourier transform with real data If the input size is the output size will be div",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dftR2C",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst1",
      "description": {
        "fct-descr": "\u003cp\u003eA type-1 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j sin(pi(j+1)(k+1)/(n+1))\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst1",
        "fct-type": "function",
        "title": "dst1"
      },
      "index": {
        "description": "type-1 discrete sine transform sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dst1",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst2",
      "description": {
        "fct-descr": "\u003cp\u003eA type-2 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = 2 sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst2",
        "fct-type": "function",
        "title": "dst2"
      },
      "index": {
        "description": "type-2 discrete sine transform sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dst2",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst3",
      "description": {
        "fct-descr": "\u003cp\u003eA type-3 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = (-1)^k x_(n-1) + 2 sum_(j=0)^(n-2) x_j sin(pi(j+1)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst3",
        "fct-type": "function",
        "title": "dst3"
      },
      "index": {
        "description": "type-3 discrete sine transform n-1 sum n-2 sin pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dst3",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:dst4",
      "description": {
        "fct-descr": "\u003cp\u003eA type-4 discrete sine transform.\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j sin(pi(j+1/2)(k+1/2)/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform Double Double",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#dst4",
        "fct-type": "function",
        "title": "dst4"
      },
      "index": {
        "description": "type-4 discrete sine transform sum n-1 sin pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "dst4",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eRun a plan on the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanInputSize\u003c/a\u003e\u003c/code\u003e p /= length v\u003c/code\u003e, then calling\n \u003ccode\u003eexecute p v\u003c/code\u003e will throw an exception.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Plan a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Run plan on the given Vector If planInputSize length then calling execute will throw an exception",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "execute",
        "normalized": "Plan a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Plan a b-\u003ev a-\u003ev b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:idft",
      "description": {
        "fct-descr": "\u003cp\u003eA backward discrete Fourier transform.  The output and input sizes are the same (\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ey_k = sum_(j=0)^(n-1) x_j e^(2pi i j k/n)\u003c/pre\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform (Complex Double) (Complex Double)",
        "fct-source": "src/Numeric-FFT-Vector-Unnormalized.html#idft",
        "fct-type": "function",
        "title": "idft"
      },
      "index": {
        "description": "backward discrete Fourier transform The output and input sizes are the same sum n-1 pi",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "idft",
        "normalized": "",
        "package": "vector-fftw",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:plan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e of a specific size.  This function is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eplanOfType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEstimate\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e Int -\u003e Plan a b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#plan",
        "fct-type": "function",
        "title": "plan"
      },
      "index": {
        "description": "Create Plan of specific size This function is equivalent to planOfType Estimate",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "plan",
        "normalized": "Transform a b-\u003eInt-\u003ePlan a b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003eInt-\u003ePlan a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-fftw/docs/Numeric-FFT-Vector-Unnormalized.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and run a \u003ccode\u003e\u003ca\u003ePlan\u003c/a\u003e\u003c/code\u003e for the given transform.\n\u003c/p\u003e",
        "fct-module": "Numeric.FFT.Vector.Unnormalized",
        "fct-package": "vector-fftw",
        "fct-signature": "Transform a b -\u003e v a -\u003e v b",
        "fct-source": "src/Numeric-FFT-Vector-Base.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Create and run Plan for the given transform",
        "hierarchy": "Numeric FFT Vector Unnormalized",
        "module": "Numeric.FFT.Vector.Unnormalized",
        "name": "run",
        "normalized": "Transform a b-\u003ec a-\u003ec b",
        "package": "vector-fftw",
        "partial": "",
        "signature": "Transform a b-\u003ev a-\u003ev b"
      }
    }
  }
]