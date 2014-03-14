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
        "word": "fft"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "Base",
          "package": "fft",
          "source": "src/Math-FFT-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "Base",
          "package": "fft",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of transforms.  Used to control \u003ccode\u003e\u003ca\u003edftShape\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "DFT",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#DFT",
          "type": "data"
        },
        "index": {
          "description": "Types of transforms Used to control dftShape",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "DFT",
          "package": "fft",
          "partial": "DFT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:DFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "FFTWFlag",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#FFTWFlag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "FFTWFlag",
          "package": "fft",
          "partial": "FFTWFlag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:FFTWFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "FFTWKind",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#FFTWKind",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "FFTWKind",
          "package": "fft",
          "partial": "FFTWKind",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:FFTWKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "FFTWPlan",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#FFTWPlan",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "FFTWPlan",
          "package": "fft",
          "partial": "FFTWPlan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:FFTWPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur API is polymorphic over the real data type.  FFTW, at least in\n principle, supports single precision \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, double precision \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and\n long double \u003ccode\u003eCLDouble\u003c/code\u003e (presumable?).\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "FFTWReal",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#FFTWReal",
          "type": "class"
        },
        "index": {
          "description": "Our API is polymorphic over the real data type FFTW at least in principle supports single precision Float double precision Double and long double CLDouble presumable",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "FFTWReal",
          "package": "fft",
          "partial": "FFTWReal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:FFTWReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "FFTWSign",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#FFTWSign",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "FFTWSign",
          "package": "fft",
          "partial": "FFTWSign",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:FFTWSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFlag\u003c/a\u003e\u003c/code\u003e type is used to influence the kind of plans which are created.\n To specify multiple flags, use a bitwise \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "Flag",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#Flag",
          "type": "newtype"
        },
        "index": {
          "description": "The Flag type is used to influence the kind of plans which are created To specify multiple flags use bitwise",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "Flag",
          "package": "fft",
          "partial": "Flag",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "IODim",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#IODim",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "IODim",
          "package": "fft",
          "partial": "IODim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:IODim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal to Real transform kinds.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "Kind",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "data"
        },
        "index": {
          "description": "Real to Real transform kinds",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "Kind",
          "package": "fft",
          "partial": "Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plan is an opaque foreign object.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "Plan",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#Plan",
          "type": "type"
        },
        "index": {
          "description": "plan is an opaque foreign object",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "Plan",
          "package": "fft",
          "partial": "Plan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:Plan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine which direction of DFT to execute.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "Sign",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#Sign",
          "type": "data"
        },
        "index": {
          "description": "Determine which direction of DFT to execute",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "Sign",
          "package": "fft",
          "partial": "Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTuple of transform dimensions and non-transform dimensions of the array.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "TSpec",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#TSpec",
          "type": "type"
        },
        "index": {
          "description": "Tuple of transform dimensions and non-transform dimensions of the array",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "TSpec",
          "package": "fft",
          "partial": "TSpec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#t:TSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "CC",
          "package": "fft",
          "signature": "CC",
          "source": "src/Math-FFT-Base.html#DFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "CC",
          "package": "fft",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:CC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "CR",
          "package": "fft",
          "signature": "CR",
          "source": "src/Math-FFT-Base.html#DFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "CR",
          "package": "fft",
          "partial": "CR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:CR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "CRO",
          "package": "fft",
          "signature": "CRO",
          "source": "src/Math-FFT-Base.html#DFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "CRO",
          "package": "fft",
          "partial": "CRO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:CRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "DFTBackward",
          "package": "fft",
          "signature": "DFTBackward",
          "source": "src/Math-FFT-Base.html#Sign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:DFTBackward\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:DFTBackward\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "DFTBackward",
          "package": "fft",
          "partial": "DFTBackward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:DFTBackward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "DFTForward",
          "package": "fft",
          "signature": "DFTForward",
          "source": "src/Math-FFT-Base.html#Sign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:DFTForward\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:DFTForward\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "DFTForward",
          "package": "fft",
          "partial": "DFTForward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:DFTForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "DHT",
          "package": "fft",
          "signature": "DHT",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:DHT\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:DHT\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "DHT",
          "package": "fft",
          "partial": "DHT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:DHT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "Flag",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "Flag",
          "package": "fft",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "HC2R",
          "package": "fft",
          "signature": "HC2R",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:HC2R\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:HC2R\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "HC2R",
          "package": "fft",
          "partial": "HC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:HC2R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "IODim",
          "package": "fft",
          "signature": "IODim",
          "source": "src/Math-FFT-Base.html#IODim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "IODim",
          "package": "fft",
          "partial": "IODim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:IODim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "R2HC",
          "package": "fft",
          "signature": "R2HC",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:R2HC\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:R2HC\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "R2HC",
          "package": "fft",
          "partial": "HC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:R2HC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "RC",
          "package": "fft",
          "signature": "RC",
          "source": "src/Math-FFT-Base.html#DFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "RC",
          "package": "fft",
          "partial": "RC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "REDFT00",
          "package": "fft",
          "signature": "REDFT00",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT00\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:REDFT00\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "REDFT00",
          "package": "fft",
          "partial": "REDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "REDFT01",
          "package": "fft",
          "signature": "REDFT01",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT01\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:REDFT01\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "REDFT01",
          "package": "fft",
          "partial": "REDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "REDFT10",
          "package": "fft",
          "signature": "REDFT10",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT10\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:REDFT10\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "REDFT10",
          "package": "fft",
          "partial": "REDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "REDFT11",
          "package": "fft",
          "signature": "REDFT11",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT11\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:REDFT11\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "REDFT11",
          "package": "fft",
          "partial": "REDFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:REDFT11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "RODFT00",
          "package": "fft",
          "signature": "RODFT00",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT00\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:RODFT00\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "RODFT00",
          "package": "fft",
          "partial": "RODFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "RODFT01",
          "package": "fft",
          "signature": "RODFT01",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT01\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:RODFT01\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "RODFT01",
          "package": "fft",
          "partial": "RODFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "RODFT10",
          "package": "fft",
          "signature": "RODFT10",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT10\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:RODFT10\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "RODFT10",
          "package": "fft",
          "partial": "RODFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "RODFT11",
          "package": "fft",
          "signature": "RODFT11",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT11\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:RODFT11\"]"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "RODFT11",
          "package": "fft",
          "partial": "RODFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RODFT11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "RR",
          "package": "fft",
          "signature": "RR",
          "source": "src/Math-FFT-Base.html#DFT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "RR",
          "package": "fft",
          "partial": "RR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:RR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generally useful list utility\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "adjust",
          "package": "fft",
          "signature": "(a -\u003e a) -\u003e Int -\u003e [a] -\u003e [a]",
          "source": "src/Math-FFT-Base.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "generally useful list utility",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "fft",
          "signature": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_backward",
          "package": "fft",
          "signature": "FFTWSign",
          "source": "src/Math-FFT-Base.html#c_backward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_backward",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_conserve_memory",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_conserve_memory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_conserve_memory",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_conserve_memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_destroy_input",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_destroy_input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_destroy_input",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_destroy_input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_dht",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_dht",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_dht",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_dht"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_estimate",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_estimate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_estimate",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple plan execution\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_execute",
          "package": "fft",
          "signature": "Plan -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#c_execute",
          "type": "function"
        },
        "index": {
          "description": "Simple plan execution",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_execute",
          "normalized": "Plan-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_execute_dft",
          "package": "fft",
          "signature": "Plan -\u003e Ptr (Complex Double) -\u003e Ptr (Complex Double) -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#c_execute_dft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_execute_dft",
          "normalized": "Plan-\u003ePtr(Complex Double)-\u003ePtr(Complex Double)-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003ePtr(Complex Double)-\u003ePtr(Complex Double)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_execute_dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_execute_dft_c2r",
          "package": "fft",
          "signature": "Plan -\u003e Ptr (Complex Double) -\u003e Ptr Double -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#c_execute_dft_c2r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_execute_dft_c2r",
          "normalized": "Plan-\u003ePtr(Complex Double)-\u003ePtr Double-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003ePtr(Complex Double)-\u003ePtr Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_execute_dft_c2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_execute_dft_r2c",
          "package": "fft",
          "signature": "Plan -\u003e Ptr Double -\u003e Ptr (Complex Double) -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#c_execute_dft_r2c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_execute_dft_r2c",
          "normalized": "Plan-\u003ePtr Double-\u003ePtr(Complex Double)-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003ePtr Double-\u003ePtr(Complex Double)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_execute_dft_r2c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_execute_r2r",
          "package": "fft",
          "signature": "Plan -\u003e Ptr Double -\u003e Ptr Double -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#c_execute_r2r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_execute_r2r",
          "normalized": "Plan-\u003ePtr Double-\u003ePtr Double-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003ePtr Double-\u003ePtr Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_execute_r2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_exhaustive",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_exhaustive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_exhaustive",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_exhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_export_wisdom_string",
          "package": "fft",
          "signature": "IO CString",
          "source": "src/Math-FFT-Base.html#c_export_wisdom_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_export_wisdom_string",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_export_wisdom_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_forward",
          "package": "fft",
          "signature": "FFTWSign",
          "source": "src/Math-FFT-Base.html#c_forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_forward",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrees memory allocated by \u003ccode\u003efftw_malloc\u003c/code\u003e.  Currently, we only need this to\n free the wisdom string.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_free",
          "package": "fft",
          "signature": "Ptr a -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#c_free",
          "type": "function"
        },
        "index": {
          "description": "Frees memory allocated by fftw malloc Currently we only need this to free the wisdom string",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_free",
          "normalized": "Ptr a-\u003eIO()",
          "package": "fft",
          "signature": "Ptr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_hc2r",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_hc2r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_hc2r",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_hc2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_import_wisdom_string",
          "package": "fft",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Math-FFT-Base.html#c_import_wisdom_string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_import_wisdom_string",
          "normalized": "CString-\u003eIO CInt",
          "package": "fft",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_import_wisdom_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_import_wisdom_system",
          "package": "fft",
          "signature": "IO CInt",
          "source": "src/Math-FFT-Base.html#c_import_wisdom_system",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_import_wisdom_system",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_import_wisdom_system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_measure",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_measure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_measure",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_patient",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_patient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_patient",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_patient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlan a complex to complex transform using the guru interface.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_dft",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr (Complex Double) -\u003e Ptr (Complex Double) -\u003e FFTWSign -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#c_plan_guru_dft",
          "type": "function"
        },
        "index": {
          "description": "Plan complex to complex transform using the guru interface",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_dft",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex Double)-\u003ePtr(Complex Double)-\u003eFFTWSign-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex Double)-\u003ePtr(Complex Double)-\u003eFFTWSign-\u003eFFTWFlag-\u003eIO Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_plan_guru_dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlan a complex to real transform using the guru interface.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_dft_c2r",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr (Complex Double) -\u003e Ptr Double -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#c_plan_guru_dft_c2r",
          "type": "function"
        },
        "index": {
          "description": "Plan complex to real transform using the guru interface",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_dft_c2r",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex Double)-\u003ePtr Double-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex Double)-\u003ePtr Double-\u003eFFTWFlag-\u003eIO Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_plan_guru_dft_c2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlan a real to complex transform using the guru interface.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_dft_r2c",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr Double -\u003e Ptr (Complex Double) -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#c_plan_guru_dft_r2c",
          "type": "function"
        },
        "index": {
          "description": "Plan real to complex transform using the guru interface",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_dft_r2c",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr Double-\u003ePtr(Complex Double)-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr Double-\u003ePtr(Complex Double)-\u003eFFTWFlag-\u003eIO Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_plan_guru_dft_r2c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlan a real to real transform using the guru interface.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_r2r",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr Double -\u003e Ptr Double -\u003e Ptr FFTWKind -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#c_plan_guru_r2r",
          "type": "function"
        },
        "index": {
          "description": "Plan real to real transform using the guru interface",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_plan_guru_r2r",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr Double-\u003ePtr Double-\u003ePtr FFTWKind-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr Double-\u003ePtr Double-\u003ePtr FFTWKind-\u003eFFTWFlag-\u003eIO Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_plan_guru_r2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault flag.  For most transforms, this is equivalent to setting \u003ccode\u003e\u003ca\u003emeasure\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003epreserveInput\u003c/a\u003e\u003c/code\u003e.  The exceptions are complex to real and half-complex to\n real transforms.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_preserve_input",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_preserve_input",
          "type": "function"
        },
        "index": {
          "description": "Default flag For most transforms this is equivalent to setting measure and preserveInput The exceptions are complex to real and half-complex to real transforms",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_preserve_input",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_preserve_input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_r2hc",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_r2hc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_r2hc",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_r2hc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_redft00",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_redft00",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_redft00",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_redft00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_redft01",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_redft01",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_redft01",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_redft01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_redft10",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_redft10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_redft10",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_redft10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_redft11",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_redft11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_redft11",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_redft11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to the \u003ccode\u003efftw_iodim\u003c/code\u003e structure.  It completely describes the\n layout of each dimension, before and after the transform.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "c_rodft00",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_rodft00",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to the fftw iodim structure It completely describes the layout of each dimension before and after the transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_rodft00",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_rodft00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_rodft01",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_rodft01",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_rodft01",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_rodft01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_rodft10",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_rodft10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_rodft10",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_rodft10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_rodft11",
          "package": "fft",
          "signature": "FFTWKind",
          "source": "src/Math-FFT-Base.html#c_rodft11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_rodft11",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_rodft11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "c_unaligned",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#c_unaligned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "c_unaligned",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:c_unaligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify that a plan is valid.  Thows an exception if not.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "check",
          "package": "fft",
          "signature": "Plan -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#check",
          "type": "function"
        },
        "index": {
          "description": "Verify that plan is valid Thows an exception if not",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "check",
          "normalized": "Plan-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header claims that this flag is documented, but in reality, it is not.\n I don't know what it does and it is here only for completeness.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "conserveMemory",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#conserveMemory",
          "type": "function"
        },
        "index": {
          "description": "The header claims that this flag is documented but in reality it is not don know what it does and it is here only for completeness",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "conserveMemory",
          "package": "fft",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:conserveMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 1 discrete cosine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct1",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct1\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct1\"]"
        },
        "index": {
          "description": "dimensional Type discrete cosine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct1",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 1 discrete cosine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct1N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct1N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct1N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct1N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete cosine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct1N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct1N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 2 discrete cosine transform.  This is commonly known as \u003cem\u003ethe\u003c/em\u003e DCT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct2",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct2\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct2\"]"
        },
        "index": {
          "description": "dimensional Type discrete cosine transform This is commonly known as the DCT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct2",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 2 discrete cosine transform.  This is commonly known\n as \u003cem\u003ethe\u003c/em\u003e DCT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct2N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct2N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct2N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct2N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete cosine transform This is commonly known as the DCT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct2N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct2N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 3 discrete cosine transform.  This is commonly known as \u003cem\u003ethe\u003c/em\u003e inverse DCT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct3",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct3\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct3\"]"
        },
        "index": {
          "description": "dimensional Type discrete cosine transform This is commonly known as the inverse DCT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct3",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 3 discrete cosine transform.  This is commonly known\n as \u003cem\u003ethe\u003c/em\u003e inverse DCT.  The result is not normalized.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct3N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct3N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct3N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct3N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete cosine transform This is commonly known as the inverse DCT The result is not normalized",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct3N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct3N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 4 discrete cosine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct4",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct4\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct4\"]"
        },
        "index": {
          "description": "dimensional Type discrete cosine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct4",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 4 discrete cosine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dct4N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dct4N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct4N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dct4N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete cosine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dct4N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dct4N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows FFTW to overwrite the input array with arbitrary data; this can\n sometimes allow more efficient algorithms to be employed.\n\u003c/p\u003e\u003cp\u003eSetting this flag implies that two memory allocations will be done, one for\n work space, and one for the result.  When \u003ccode\u003e\u003ca\u003eestimate\u003c/a\u003e\u003c/code\u003e is not set, we will be\n doing two memory allocations anyway, so we set this flag as well (since we\n don't retain the work array anyway).\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "destroyInput",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#destroyInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:destroyInput\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:destroyInput\"]"
        },
        "index": {
          "description": "Allows FFTW to overwrite the input array with arbitrary data this can sometimes allow more efficient algorithms to be employed Setting this flag implies that two memory allocations will be done one for work space and one for the result When estimate is not set we will be doing two memory allocations anyway so we set this flag as well since we don retain the work array anyway",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "destroyInput",
          "package": "fft",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:destroyInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional complex DFT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dft",
          "package": "fft",
          "signature": "CArray i (Complex r) -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dft",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dft\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dft\"]"
        },
        "index": {
          "description": "dimensional complex DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dft",
          "normalized": "CArray a(Complex b)-\u003eCArray a(Complex b)",
          "package": "fft",
          "signature": "CArray i(Complex r)-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional complex to real DFT with logically even dimension.  Inverse of \u003ccode\u003e\u003ca\u003edftRC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCR",
          "package": "fft",
          "signature": "CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCR\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCR\"]"
        },
        "index": {
          "description": "dimensional complex to real DFT with logically even dimension Inverse of dftRC",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCR",
          "normalized": "CArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CR",
          "signature": "CArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalized general complex to real DFT where the last transformed dimension\n is logically even.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCRG",
          "package": "fft",
          "signature": "Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCRG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRG\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCRG\"]"
        },
        "index": {
          "description": "Normalized general complex to real DFT where the last transformed dimension is logically even",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCRG",
          "normalized": "Flag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CRG",
          "signature": "Flag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex to Real DFT where last transformed dimension is logically even.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCRGU",
          "package": "fft",
          "signature": "Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCRGU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRGU\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCRGU\"]"
        },
        "index": {
          "description": "Complex to Real DFT where last transformed dimension is logically even",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCRGU",
          "normalized": "Flag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CRGU",
          "signature": "Flag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRGU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex to Real DFT.  The first argument determines whether the last\n transformed dimension is logically odd or even.  \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e implies the dimension\n is odd.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "dftCRG_",
          "package": "fft",
          "signature": "Bool -\u003e Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCRG_",
          "type": "function"
        },
        "index": {
          "description": "Complex to Real DFT The first argument determines whether the last transformed dimension is logically odd or even True implies the dimension is odd",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCRG_",
          "normalized": "Bool-\u003eFlag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CRG",
          "signature": "Bool-\u003eFlag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRG_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional inverse DFT of Hermitian-symmetric data (where only the\n non-negative frequencies are given).\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCRN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCRN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCRN\"]"
        },
        "index": {
          "description": "Multi-dimensional inverse DFT of Hermitian-symmetric data where only the non-negative frequencies are given",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCRN",
          "normalized": "[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CRN",
          "signature": "[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional complex to real DFT with logically odd dimension.  Inverse of \u003ccode\u003e\u003ca\u003edftRC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCRO",
          "package": "fft",
          "signature": "CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCRO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRO\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCRO\"]"
        },
        "index": {
          "description": "dimensional complex to real DFT with logically odd dimension Inverse of dftRC",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCRO",
          "normalized": "CArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CRO",
          "signature": "CArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalized general complex to real DFT where the last transformed dimension\n is logicall odd.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCROG",
          "package": "fft",
          "signature": "Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCROG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCROG\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCROG\"]"
        },
        "index": {
          "description": "Normalized general complex to real DFT where the last transformed dimension is logicall odd",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCROG",
          "normalized": "Flag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CROG",
          "signature": "Flag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCROG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex to Real DFT where last transformed dimension is logically odd.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCROGU",
          "package": "fft",
          "signature": "Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCROGU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCROGU\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCROGU\"]"
        },
        "index": {
          "description": "Complex to Real DFT where last transformed dimension is logically odd",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCROGU",
          "normalized": "Flag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CROGU",
          "signature": "Flag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCROGU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional inverse DFT of Hermitian-symmetric data (where only the\n non-negative frequencies are given) and the last transformed dimension is\n logically odd.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftCRON",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i (Complex r) -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftCRON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRON\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftCRON\"]"
        },
        "index": {
          "description": "Multi-dimensional inverse DFT of Hermitian-symmetric data where only the non-negative frequencies are given and the last transformed dimension is logically odd",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftCRON",
          "normalized": "[Int]-\u003eCArray a(Complex b)-\u003eCArray a b",
          "package": "fft",
          "partial": "CRON",
          "signature": "[Int]-\u003eCArray i(Complex r)-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftCRON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalized general complex DFT\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftG",
          "package": "fft",
          "signature": "Sign -\u003e Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dftG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftG\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftG\"]"
        },
        "index": {
          "description": "Normalized general complex DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftG",
          "normalized": "Sign-\u003eFlag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a(Complex b)",
          "package": "fft",
          "signature": "Sign-\u003eFlag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex to Complex DFT, un-normalized.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftGU",
          "package": "fft",
          "signature": "Sign -\u003e Flag -\u003e [Int] -\u003e CArray i (Complex r) -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dftGU",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftGU\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftGU\"]"
        },
        "index": {
          "description": "Complex to Complex DFT un-normalized",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftGU",
          "normalized": "Sign-\u003eFlag-\u003e[Int]-\u003eCArray a(Complex b)-\u003eCArray a(Complex b)",
          "package": "fft",
          "partial": "GU",
          "signature": "Sign-\u003eFlag-\u003e[Int]-\u003eCArray i(Complex r)-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftGU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional half-complex to real DFT.  Inverse of \u003ccode\u003e\u003ca\u003edftRH\u003c/a\u003e\u003c/code\u003e after normalization.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftHR",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftHR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftHR\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftHR\"]"
        },
        "index": {
          "description": "dimensional half-complex to real DFT Inverse of dftRH after normalization",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftHR",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "HR",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftHR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional half-complex to real transform.  The result is not normalized.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftHRN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftHRN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftHRN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftHRN\"]"
        },
        "index": {
          "description": "Multi-dimensional half-complex to real transform The result is not normalized",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftHRN",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "HRN",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftHRN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional forward DFT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i (Complex r) -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dftN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftN\"]"
        },
        "index": {
          "description": "Multi-dimensional forward DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftN",
          "normalized": "[Int]-\u003eCArray a(Complex b)-\u003eCArray a(Complex b)",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i(Complex r)-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional real to complex DFT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRC",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dftRC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRC\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRC\"]"
        },
        "index": {
          "description": "dimensional real to complex DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRC",
          "normalized": "CArray a b-\u003eCArray a(Complex b)",
          "package": "fft",
          "partial": "RC",
          "signature": "CArray i r-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal to Complex DFT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRCG",
          "package": "fft",
          "signature": "Flag -\u003e [Int] -\u003e CArray i r -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dftRCG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRCG\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRCG\"]"
        },
        "index": {
          "description": "Real to Complex DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRCG",
          "normalized": "Flag-\u003e[Int]-\u003eCArray a b-\u003eCArray a(Complex b)",
          "package": "fft",
          "partial": "RCG",
          "signature": "Flag-\u003e[Int]-\u003eCArray i r-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRCG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional forward DFT of real data.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRCN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#dftRCN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRCN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRCN\"]"
        },
        "index": {
          "description": "Multi-dimensional forward DFT of real data",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRCN",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a(Complex b)",
          "package": "fft",
          "partial": "RCN",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRCN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional real to half-complex DFT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRH",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftRH",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRH\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRH\"]"
        },
        "index": {
          "description": "dimensional real to half-complex DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRH",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "RH",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional real to half-complex transform.  The result is not normalized.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRHN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftRHN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRHN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRHN\"]"
        },
        "index": {
          "description": "Multi-dimensional real to half-complex transform The result is not normalized",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRHN",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "RHN",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRHN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal to Real transforms.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRRG",
          "package": "fft",
          "signature": "Flag -\u003e [(Int, Kind)] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftRRG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRRG\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRRG\"]"
        },
        "index": {
          "description": "Real to Real transforms",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRRG",
          "normalized": "Flag-\u003e[(Int,Kind)]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "RRG",
          "signature": "Flag-\u003e[(Int,Kind)]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional real to real transform.  The result is not normalized.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dftRRN",
          "package": "fft",
          "signature": "[(Int, Kind)] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dftRRN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRRN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dftRRN\"]"
        },
        "index": {
          "description": "Multi-dimensional real to real transform The result is not normalized",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftRRN",
          "normalized": "[(Int,Kind)]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "RRN",
          "signature": "[(Int,Kind)]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftRRN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the logic for determining shape of resulting array, and how to do the transform.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "dftShape",
          "package": "fft",
          "signature": "DFT -\u003e [Int] -\u003e CArray i e -\u003e ((i, i), TSpec)",
          "source": "src/Math-FFT-Base.html#dftShape",
          "type": "function"
        },
        "index": {
          "description": "All the logic for determining shape of resulting array and how to do the transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dftShape",
          "normalized": "DFT-\u003e[Int]-\u003eCArray a b-\u003e((a,a),TSpec)",
          "package": "fft",
          "partial": "Shape",
          "signature": "DFT-\u003e[Int]-\u003eCArray i e-\u003e((i,i),TSpec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dftShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Discrete Hartley Transform.  Self-inverse after normalization.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dht",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dht",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dht\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dht\"]"
        },
        "index": {
          "description": "dimensional Discrete Hartley Transform Self-inverse after normalization",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dht",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dht"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Discrete Hartley Transform.  The result is not normalized.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dhtN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dhtN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dhtN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dhtN\"]"
        },
        "index": {
          "description": "Multi-dimensional Discrete Hartley Transform The result is not normalized",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dhtN",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dhtN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "drr",
          "package": "fft",
          "signature": "Kind -\u003e [Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#drr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "drr",
          "normalized": "Kind-\u003e[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "Kind-\u003e[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:drr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 1 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst1",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst1\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst1\"]"
        },
        "index": {
          "description": "dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst1",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 1 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst1N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst1N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst1N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst1N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst1N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst1N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 2 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst2",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst2\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst2\"]"
        },
        "index": {
          "description": "dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst2",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 2 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst2N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst2N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst2N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst2N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst2N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst2N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 3 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst3",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst3\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst3\"]"
        },
        "index": {
          "description": "dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst3",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 3 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst3N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst3N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst3N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst3N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst3N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst3N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional Type 4 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst4",
          "package": "fft",
          "signature": "CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst4\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst4\"]"
        },
        "index": {
          "description": "dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst4",
          "normalized": "CArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "CArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional Type 4 discrete sine transform.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "dst4N",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i r -\u003e CArray i r",
          "source": "src/Math-FFT-Base.html#dst4N",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst4N\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:dst4N\"]"
        },
        "index": {
          "description": "Multi-dimensional Type discrete sine transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "dst4N",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i r-\u003eCArray i r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:dst4N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eestimate\u003c/a\u003e\u003c/code\u003e specifies that, instead of actual measurements of different\n algorithms, a simple heuristic is used to pick a (probably sub-optimal) plan\n quickly. With this flag, the input/output arrays are not overwritten during\n planning.\n\u003c/p\u003e\u003cp\u003eThis is the only planner flag for which a single memory allocation is possible.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "estimate",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#estimate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:estimate\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:estimate\"]"
        },
        "index": {
          "description": "estimate specifies that instead of actual measurements of different algorithms simple heuristic is used to pick probably sub-optimal plan quickly With this flag the input output arrays are not overwritten during planning This is the only planner flag for which single memory allocation is possible",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "estimate",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:estimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfirm that the plan is valid, then execute the transform.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "execute",
          "package": "fft",
          "signature": "Plan -\u003e IO ()",
          "source": "src/Math-FFT-Base.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Confirm that the plan is valid then execute the transform",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "execute",
          "normalized": "Plan-\u003eIO()",
          "package": "fft",
          "signature": "Plan-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexhaustive\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003epatient\u003c/a\u003e\u003c/code\u003e but considers an even wider range of\n algorithms, including many that we think are unlikely to be fast, to\n produce the most optimal plan but with a substantially increased planning\n time.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "exhaustive",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#exhaustive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:exhaustive\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:exhaustive\"]"
        },
        "index": {
          "description": "exhaustive is like patient but considers an even wider range of algorithms including many that we think are unlikely to be fast to produce the most optimal plan but with substantially increased planning time",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "exhaustive",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:exhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueries the FFTW cache.  The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e can be written to a file so the\n wisdom can be reused on a subsequent run.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "exportWisdomString",
          "package": "fft",
          "signature": "IO String",
          "source": "src/Math-FFT-Base.html#exportWisdomString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:exportWisdomString\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:exportWisdomString\"]"
        },
        "index": {
          "description": "Queries the FFTW cache The String can be written to file so the wisdom can be reused on subsequent run",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "exportWisdomString",
          "package": "fft",
          "partial": "Wisdom String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:exportWisdomString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "fzr",
          "package": "fft",
          "signature": "b -\u003e [a] -\u003e [(a, b)]",
          "source": "src/Math-FFT-Base.html#fzr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "fzr",
          "normalized": "a-\u003e[b]-\u003e[(b,a)]",
          "package": "fft",
          "signature": "b-\u003e[a]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:fzr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "has",
          "package": "fft",
          "signature": "Flag -\u003e Flag -\u003e Bool",
          "source": "src/Math-FFT-Base.html#has",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "has",
          "normalized": "Flag-\u003eFlag-\u003eBool",
          "package": "fft",
          "signature": "Flag-\u003eFlag-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:has"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional complex inverse DFT.  Inverse of \u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "idft",
          "package": "fft",
          "signature": "CArray i (Complex r) -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#idft",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:idft\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:idft\"]"
        },
        "index": {
          "description": "dimensional complex inverse DFT Inverse of dft",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "idft",
          "normalized": "CArray a(Complex b)-\u003eCArray a(Complex b)",
          "package": "fft",
          "signature": "CArray i(Complex r)-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:idft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulti-dimensional inverse DFT.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "idftN",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i (Complex r) -\u003e CArray i (Complex r)",
          "source": "src/Math-FFT-Base.html#idftN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:idftN\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:idftN\"]"
        },
        "index": {
          "description": "Multi-dimensional inverse DFT",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "idftN",
          "normalized": "[Int]-\u003eCArray a(Complex b)-\u003eCArray a(Complex b)",
          "package": "fft",
          "signature": "[Int]-\u003eCArray i(Complex r)-\u003eCArray i(Complex r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:idftN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd wisdom to the FFTW cache.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it is successful.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "importWisdomString",
          "package": "fft",
          "signature": "String -\u003e IO Bool",
          "source": "src/Math-FFT-Base.html#importWisdomString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:importWisdomString\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:importWisdomString\"]"
        },
        "index": {
          "description": "Add wisdom to the FFTW cache Returns True if it is successful",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "importWisdomString",
          "normalized": "String-\u003eIO Bool",
          "package": "fft",
          "partial": "Wisdom String",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:importWisdomString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to import wisdom from a global source, typically \u003ccode\u003e\u003cem\u003eetc\u003c/em\u003efftw/wisdom\u003c/code\u003e.\n Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was successful.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "importWisdomSystem",
          "package": "fft",
          "signature": "IO Bool",
          "source": "src/Math-FFT-Base.html#importWisdomSystem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:importWisdomSystem\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:importWisdomSystem\"]"
        },
        "index": {
          "description": "Tries to import wisdom from global source typically etc fftw wisdom Returns True if it was successful",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "importWisdomSystem",
          "package": "fft",
          "partial": "Wisdom System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:importWisdomSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStride along dimension in input array\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "isIODim",
          "package": "fft",
          "signature": "Int",
          "source": "src/Math-FFT-Base.html#IODim",
          "type": "function"
        },
        "index": {
          "description": "Stride along dimension in input array",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "isIODim",
          "package": "fft",
          "partial": "IODim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:isIODim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lock must be taken during \u003cem\u003eplanning\u003c/em\u003e of any transform.  The FFTW\n library is not thread-safe in the planning phase.  Thankfully, the lock is\n not needed during the execute phase.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "lock",
          "package": "fft",
          "signature": "MVar ()",
          "source": "src/Math-FFT-Base.html#lock",
          "type": "function"
        },
        "index": {
          "description": "This lock must be taken during planning of any transform The FFTW library is not thread-safe in the planning phase Thankfully the lock is not needed during the execute phase",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "lock",
          "normalized": "MVar()",
          "package": "fft",
          "signature": "MVar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emeasure\u003c/a\u003e\u003c/code\u003e tells FFTW to find an optimized plan by actually computing\n several FFTs and measuring their execution time. Depending on your machine,\n this can take some time (often a few seconds). \u003ccode\u003e\u003ca\u003emeasure\u003c/a\u003e\u003c/code\u003e is the default\n planning option.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "measure",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#measure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:measure\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:measure\"]"
        },
        "index": {
          "description": "measure tells FFTW to find an optimized plan by actually computing several FFTs and measuring their execution time Depending on your machine this can take some time often few seconds measure is the default planning option",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "measure",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical size of dimension\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "nIODim",
          "package": "fft",
          "signature": "Int",
          "source": "src/Math-FFT-Base.html#IODim",
          "type": "function"
        },
        "index": {
          "description": "Logical size of dimension",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "nIODim",
          "package": "fft",
          "partial": "IODim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:nIODim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "nullFlag",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#nullFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "nullFlag",
          "package": "fft",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:nullFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStride along dimension in output array\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "osIODim",
          "package": "fft",
          "signature": "Int",
          "source": "src/Math-FFT-Base.html#IODim",
          "type": "function"
        },
        "index": {
          "description": "Stride along dimension in output array",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "osIODim",
          "package": "fft",
          "partial": "IODim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:osIODim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epatient\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003emeasure\u003c/a\u003e\u003c/code\u003e, but considers a wider range of algorithms and\n often produces a \u003ca\u003emore optimal\u003c/a\u003e plan (especially for large transforms), but\n at the expense of several times longer planning time (especially for large\n transforms).\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "patient",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#patient",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:patient\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:patient\"]"
        },
        "index": {
          "description": "patient is like measure but considers wider range of algorithms and often produces more optimal plan especially for large transforms but at the expense of several times longer planning time especially for large transforms",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "patient",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:patient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "plan_guru_dft",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr (Complex a) -\u003e Ptr (Complex a) -\u003e FFTWSign -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#plan_guru_dft",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "plan_guru_dft",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex a)-\u003ePtr(Complex a)-\u003eFFTWSign-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex a)-\u003ePtr(Complex a)-\u003eFFTWSign-\u003eFFTWFlag-\u003eIO Plan",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:plan_guru_dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "plan_guru_dft_c2r",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr (Complex a) -\u003e Ptr a -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#plan_guru_dft_c2r",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "plan_guru_dft_c2r",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex a)-\u003ePtr a-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr(Complex a)-\u003ePtr a-\u003eFFTWFlag-\u003eIO Plan",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:plan_guru_dft_c2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "plan_guru_dft_r2c",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr a -\u003e Ptr (Complex a) -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#plan_guru_dft_r2c",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "plan_guru_dft_r2c",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr a-\u003ePtr(Complex a)-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr a-\u003ePtr(Complex a)-\u003eFFTWFlag-\u003eIO Plan",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:plan_guru_dft_r2c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "plan_guru_r2r",
          "package": "fft",
          "signature": "CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e Ptr a -\u003e Ptr a -\u003e Ptr FFTWKind -\u003e FFTWFlag -\u003e IO Plan",
          "source": "src/Math-FFT-Base.html#plan_guru_r2r",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "plan_guru_r2r",
          "normalized": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr a-\u003ePtr a-\u003ePtr FFTWKind-\u003eFFTWFlag-\u003eIO Plan",
          "package": "fft",
          "signature": "CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003ePtr a-\u003ePtr a-\u003ePtr FFTWKind-\u003eFFTWFlag-\u003eIO Plan",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:plan_guru_r2r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epreserveInput\u003c/a\u003e\u003c/code\u003e specifies that an out-of-place transform must not change\n its input array. This is ordinarily the default, except for complex to real\n transforms for which \u003ccode\u003e\u003ca\u003edestroyInput\u003c/a\u003e\u003c/code\u003e is the default. In the latter cases,\n passing \u003ccode\u003e\u003ca\u003epreserveInput\u003c/a\u003e\u003c/code\u003e will attempt to use algorithms that do not destroy\n the input, at the expense of worse performance; for multi-dimensional complex\n to real transforms, however, no input-preserving algorithms are implemented\n so the Haskell bindings will set \u003ccode\u003e\u003ca\u003edestroyInput\u003c/a\u003e\u003c/code\u003e and do a transform with two\n memory allocations.\n\u003c/p\u003e",
          "module": "[\"Math.FFT.Base\",\"Math.FFT\"]",
          "name": "preserveInput",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#preserveInput",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:preserveInput\",\"http://hackage.haskell.org/package/fft/docs/Math-FFT.html#v:preserveInput\"]"
        },
        "index": {
          "description": "preserveInput specifies that an out-of-place transform must not change its input array This is ordinarily the default except for complex to real transforms for which destroyInput is the default In the latter cases passing preserveInput will attempt to use algorithms that do not destroy the input at the expense of worse performance for multi-dimensional complex to real transforms however no input-preserving algorithms are implemented so the Haskell bindings will set destroyInput and do transform with two memory allocations",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "preserveInput",
          "package": "fft",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:preserveInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to transform a CArray with only one memory allocation (for the result).\n If we can find a way to prove that FFTW already has a sufficiently good plan\n for this transform size and the input will not be overwritten, then we could\n call have a version of this that does not require \u003ccode\u003e\u003ca\u003eestimate\u003c/a\u003e\u003c/code\u003e.  Since this is\n not currently the case, we require \u003ccode\u003e\u003ca\u003eestimate\u003c/a\u003e\u003c/code\u003e to be set.  Note that we do not\n check for the \u003ccode\u003e\u003ca\u003epreserveInput\u003c/a\u003e\u003c/code\u003e flag here.  This is because the default is to\n preserve input for all but the C-\u003eR and HC-\u003eR transforms.  Therefore, this\n function must not be called for those transforms, unless \u003ccode\u003e\u003ca\u003epreserveInput\u003c/a\u003e\u003c/code\u003e is\n set.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "transformCArray",
          "package": "fft",
          "signature": "Flag -\u003e CArray i a -\u003e (i, i) -\u003e (FFTWFlag -\u003e Ptr a -\u003e Ptr b -\u003e IO Plan) -\u003e CArray i b",
          "source": "src/Math-FFT-Base.html#transformCArray",
          "type": "function"
        },
        "index": {
          "description": "Try to transform CArray with only one memory allocation for the result If we can find way to prove that FFTW already has sufficiently good plan for this transform size and the input will not be overwritten then we could call have version of this that does not require estimate Since this is not currently the case we require estimate to be set Note that we do not check for the preserveInput flag here This is because the default is to preserve input for all but the and HC transforms Therefore this function must not be called for those transforms unless preserveInput is set",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "transformCArray",
          "normalized": "Flag-\u003eCArray a b-\u003e(a,a)-\u003e(FFTWFlag-\u003ePtr b-\u003ePtr c-\u003eIO Plan)-\u003eCArray a c",
          "package": "fft",
          "partial": "CArray",
          "signature": "Flag-\u003eCArray i a-\u003e(i,i)-\u003e(FFTWFlag-\u003ePtr a-\u003ePtr b-\u003eIO Plan)-\u003eCArray i b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:transformCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a CArray with two memory allocations.  This is entirely safe with\n all transforms, but it must allocate a temporary array to do the planning in.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "transformCArray'",
          "package": "fft",
          "signature": "Flag -\u003e CArray i a -\u003e (i, i) -\u003e (FFTWFlag -\u003e Ptr a -\u003e Ptr b -\u003e IO Plan) -\u003e CArray i b",
          "source": "src/Math-FFT-Base.html#transformCArray%27",
          "type": "function"
        },
        "index": {
          "description": "Transform CArray with two memory allocations This is entirely safe with all transforms but it must allocate temporary array to do the planning in",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "transformCArray'",
          "normalized": "Flag-\u003eCArray a b-\u003e(a,a)-\u003e(FFTWFlag-\u003ePtr b-\u003ePtr c-\u003eIO Plan)-\u003eCArray a c",
          "package": "fft",
          "partial": "CArray'",
          "signature": "Flag-\u003eCArray i a-\u003e(i,i)-\u003e(FFTWFlag-\u003ePtr a-\u003ePtr b-\u003eIO Plan)-\u003eCArray i b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:transformCArray-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "unFlag",
          "package": "fft",
          "signature": "FFTWFlag",
          "source": "src/Math-FFT-Base.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "unFlag",
          "package": "fft",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:unFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "unKind",
          "package": "fft",
          "signature": "Kind -\u003e FFTWKind",
          "source": "src/Math-FFT-Base.html#unKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "unKind",
          "normalized": "Kind-\u003eFFTWKind",
          "package": "fft",
          "partial": "Kind",
          "signature": "Kind-\u003eFFTWKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:unKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "unSign",
          "package": "fft",
          "signature": "Sign -\u003e FFTWSign",
          "source": "src/Math-FFT-Base.html#unSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "unSign",
          "normalized": "Sign-\u003eFFTWSign",
          "package": "fft",
          "partial": "Sign",
          "signature": "Sign-\u003eFFTWSign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:unSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruct FFTW not to generate a plan which uses SIMD instructions, even if\n the memory you are planning with is aligned.  This should only be needed if\n you are using the guru interface and want to reuse a plan with memory that\n may be unaligned (i.e. you constructed the \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003eunsafeForeignPtrToCArray\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "unaligned",
          "package": "fft",
          "signature": "Flag",
          "source": "src/Math-FFT-Base.html#unaligned",
          "type": "function"
        },
        "index": {
          "description": "Instruct FFTW not to generate plan which uses SIMD instructions even if the memory you are planning with is aligned This should only be needed if you are using the guru interface and want to reuse plan with memory that may be unaligned i.e you constructed the CArray with unsafeForeignPtrToCArray",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "unaligned",
          "package": "fft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:unaligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn-place normalization outside of IO.  You must be able to prove that no\n reference to the original can be retained.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "unsafeNormalize",
          "package": "fft",
          "signature": "[Int] -\u003e CArray i e -\u003e CArray i e",
          "source": "src/Math-FFT-Base.html#unsafeNormalize",
          "type": "function"
        },
        "index": {
          "description": "In-place normalization outside of IO You must be able to prove that no reference to the original can be retained",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "unsafeNormalize",
          "normalized": "[Int]-\u003eCArray a b-\u003eCArray a b",
          "package": "fft",
          "partial": "Normalize",
          "signature": "[Int]-\u003eCArray i e-\u003eCArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:unsafeNormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.FFT.Base",
          "name": "withLock",
          "package": "fft",
          "signature": "IO a -\u003e IO a",
          "source": "src/Math-FFT-Base.html#withLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "withLock",
          "normalized": "IO a-\u003eIO a",
          "package": "fft",
          "partial": "Lock",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:withLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple helper.\n\u003c/p\u003e",
          "module": "Math.FFT.Base",
          "name": "withTSpec",
          "package": "fft",
          "signature": "TSpec -\u003e (CInt -\u003e Ptr IODim -\u003e CInt -\u003e Ptr IODim -\u003e IO a) -\u003e IO a",
          "source": "src/Math-FFT-Base.html#withTSpec",
          "type": "function"
        },
        "index": {
          "description": "simple helper",
          "hierarchy": "Math FFT Base",
          "module": "Math.FFT.Base",
          "name": "withTSpec",
          "normalized": "TSpec-\u003e(CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003eIO a)-\u003eIO a",
          "package": "fft",
          "partial": "TSpec",
          "signature": "TSpec-\u003e(CInt-\u003ePtr IODim-\u003eCInt-\u003ePtr IODim-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT-Base.html#v:withTSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes an interface to FFTW, the Fastest Fourier Transform in\n the West.\n\u003c/p\u003e\u003cp\u003eThese bindings present several levels of interface.  All the higher level\n functions (\u003ccode\u003e\u003ca\u003edft\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eidft\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edftN\u003c/a\u003e\u003c/code\u003e, ...) are easily derived from the general\n functions (\u003ccode\u003e\u003ca\u003edftG\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edftRCG\u003c/a\u003e\u003c/code\u003e, ...).  Only the general functions let you\n specify planner flags.  The higher levels all set \u003ccode\u003e\u003ca\u003eestimate\u003c/a\u003e\u003c/code\u003e so you should\n not have to wait through time consuming planning (see below for more).\n\u003c/p\u003e\u003cp\u003eThe simplest interface is the one-dimensional transforms.  If you supply a\n multi-dimensional array, these will only transform the first dimension.\n These functions only take one argument, the array to be transformed.\n\u003c/p\u003e\u003cp\u003eAt the next level, we have multi-dimensional transforms where you specify\n which dimensions to transform in and the array to transform.  For instance\n\u003c/p\u003e\u003cpre\u003e b = dftRCN [0,2] a\n\u003c/pre\u003e\u003cp\u003eis the real to complex transform in dimensions 0 and 2 of the array \u003ccode\u003ea\u003c/code\u003e which\n must be at least rank 3.  The array \u003ccode\u003eb\u003c/code\u003e will be complex valued with the same\n extent as \u003ccode\u003ea\u003c/code\u003e in every dimension except \u003ccode\u003e2\u003c/code\u003e.  If \u003ccode\u003ea\u003c/code\u003e had extent \u003ccode\u003en\u003c/code\u003e in\n dimension \u003ccode\u003e2\u003c/code\u003e then the \u003ccode\u003eb\u003c/code\u003e will have extent \u003ccode\u003ea \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 2 + 1\u003c/code\u003e which consists of\n all non-negative frequency components in this dimension (the negative\n frequencies are conjugate to the positive frequencies because of symmetry\n since \u003ccode\u003ea\u003c/code\u003e is real valued).\n\u003c/p\u003e\u003cp\u003eThe real to real transforms allow different transform kinds in each\n transformed dimension.  For example,\n\u003c/p\u003e\u003cpre\u003e b = dftRRN [(0,DHT), (1,REDFT10), (2,RODFT11)] a\n\u003c/pre\u003e\u003cp\u003eis a Discrete Hartley Transform in dimension 0, a discrete cosine transform\n (DCT-2) in dimension 1, and distrete sine transform (DST-4) in dimension 2\n where the array \u003ccode\u003ea\u003c/code\u003e must have rank at least 3.\n\u003c/p\u003e\u003cp\u003eThe general interface is similar to the multi-dimensional interface, takes as\n its first argument, a bitwise \u003ccode\u003e.|.\u003c/code\u003e of planning \u003ccode\u003e\u003ca\u003eFlag\u003c/a\u003e\u003c/code\u003es.  (In the complex\n version, the sign of the transform is first.)  For example,\n\u003c/p\u003e\u003cpre\u003e b = dftG DFTBackward (patient .|. destroy_input) [1,2] a\n\u003c/pre\u003e\u003cp\u003eis an inverse DFT in dimensions 1 and 2 of the complex array \u003ccode\u003ea\u003c/code\u003e which has\n rank at least 3.  It will use the patient planner to generate a (near)\n optimal transform.  If you compute the same type of transform again, it\n should be very fast since the plan is cached.\n\u003c/p\u003e\u003cp\u003eInverse transforms are typically normalized.  The un-normalized inverse\n transforms are \u003ccode\u003e\u003ca\u003edftGU\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edftCRGU\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edftCROGU\u003c/a\u003e\u003c/code\u003e.  For example\n\u003c/p\u003e\u003cpre\u003e b = dftCROGU measure [0,1] a\n\u003c/pre\u003e\u003cp\u003eis an un-normalized inverse DFT in dimensions 0 and 1 of the complex array\n \u003ccode\u003ea\u003c/code\u003e (representing the non-negative frequencies, where the negative\n frequencies are conjugate) which has rank at least 2.  Here, dimension 1 is\n logically odd so if \u003ccode\u003ea\u003c/code\u003e has extent \u003ccode\u003en\u003c/code\u003e in dimension 1, then \u003ccode\u003eb\u003c/code\u003e will have\n extent \u003ccode\u003e(n - 1) * 2 + 1\u003c/code\u003e in dimension 1.  It is more common that the logical\n dimension is even, in which case we would use \u003ccode\u003e\u003ca\u003edftCRGU\u003c/a\u003e\u003c/code\u003e in which case \u003ccode\u003eb\u003c/code\u003e\n would have extent \u003ccode\u003e(n - 1) * 2\u003c/code\u003e in dimension \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe FFTW library separates transforms into two steps.  First you compute a\n plan for a given transform, then you execute it.  Often the planning stage is\n quite time-consuming, but subsequent transforms of the same size and type\n will be extremely fast.  The planning phase actually computes transforms, so\n it overwrites its input array.  For many C codes, it is reasonable to re-use\n the same arrays to compute a given transform on different data.  This is not\n a very useful paradigm from Haskell.  Fortunately, FFTW caches its plans so\n if try to generate a new plan for a transform size which has already been\n planned, the planner will return immediately.  Unfortunately, it is not\n possible to consult the cache, so if a plan is cached, we may use more memory\n than is strictly necessary since we must allocate a work array which we\n expect to be overwritten during planning.  FFTW can export its cached plans\n to a string.  This is known as wisdom.  For high performance work, it is a\n good idea to compute plans of the sizes you are interested in, using\n aggressive options (i.e. \u003ccode\u003e\u003ca\u003epatient\u003c/a\u003e\u003c/code\u003e), use \u003ccode\u003e\u003ca\u003eexportWisdomString\u003c/a\u003e\u003c/code\u003e to get a string\n representing these plans, and write this to a file.  Then for production\n runs, you can read this in, then add it to the cache with\n \u003ccode\u003e\u003ca\u003eimportWisdomString\u003c/a\u003e\u003c/code\u003e.  Now you can use the \u003ccode\u003e\u003ca\u003eestimate\u003c/a\u003e\u003c/code\u003e planner so the Haskell\n bindings know that FFTW will not overwrite the input array, and you will\n still get a high quality transform (because it has wisdom).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.FFT",
          "name": "FFT",
          "package": "fft",
          "source": "src/Math-FFT.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes an interface to FFTW the Fastest Fourier Transform in the West These bindings present several levels of interface All the higher level functions dft idft dftN are easily derived from the general functions dftG dftRCG Only the general functions let you specify planner flags The higher levels all set estimate so you should not have to wait through time consuming planning see below for more The simplest interface is the one-dimensional transforms If you supply multi-dimensional array these will only transform the first dimension These functions only take one argument the array to be transformed At the next level we have multi-dimensional transforms where you specify which dimensions to transform in and the array to transform For instance dftRCN is the real to complex transform in dimensions and of the array which must be at least rank The array will be complex valued with the same extent as in every dimension except If had extent in dimension then the will have extent div which consists of all non-negative frequency components in this dimension the negative frequencies are conjugate to the positive frequencies because of symmetry since is real valued The real to real transforms allow different transform kinds in each transformed dimension For example dftRRN DHT REDFT10 RODFT11 is Discrete Hartley Transform in dimension discrete cosine transform DCT-2 in dimension and distrete sine transform DST-4 in dimension where the array must have rank at least The general interface is similar to the multi-dimensional interface takes as its first argument bitwise of planning Flag In the complex version the sign of the transform is first For example dftG DFTBackward patient destroy input is an inverse DFT in dimensions and of the complex array which has rank at least It will use the patient planner to generate near optimal transform If you compute the same type of transform again it should be very fast since the plan is cached Inverse transforms are typically normalized The un-normalized inverse transforms are dftGU dftCRGU and dftCROGU For example dftCROGU measure is an un-normalized inverse DFT in dimensions and of the complex array representing the non-negative frequencies where the negative frequencies are conjugate which has rank at least Here dimension is logically odd so if has extent in dimension then will have extent in dimension It is more common that the logical dimension is even in which case we would use dftCRGU in which case would have extent in dimension The FFTW library separates transforms into two steps First you compute plan for given transform then you execute it Often the planning stage is quite time-consuming but subsequent transforms of the same size and type will be extremely fast The planning phase actually computes transforms so it overwrites its input array For many codes it is reasonable to re-use the same arrays to compute given transform on different data This is not very useful paradigm from Haskell Fortunately FFTW caches its plans so if try to generate new plan for transform size which has already been planned the planner will return immediately Unfortunately it is not possible to consult the cache so if plan is cached we may use more memory than is strictly necessary since we must allocate work array which we expect to be overwritten during planning FFTW can export its cached plans to string This is known as wisdom For high performance work it is good idea to compute plans of the sizes you are interested in using aggressive options i.e patient use exportWisdomString to get string representing these plans and write this to file Then for production runs you can read this in then add it to the cache with importWisdomString Now you can use the estimate planner so the Haskell bindings know that FFTW will not overwrite the input array and you will still get high quality transform because it has wisdom",
          "hierarchy": "Math FFT",
          "module": "Math.FFT",
          "name": "FFT",
          "package": "fft",
          "partial": "FFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal to Real transform kinds.\n\u003c/p\u003e",
          "module": "Math.FFT",
          "name": "Kind",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#Kind",
          "type": "data"
        },
        "index": {
          "description": "Real to Real transform kinds",
          "hierarchy": "Math FFT",
          "module": "Math.FFT",
          "name": "Kind",
          "package": "fft",
          "partial": "Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine which direction of DFT to execute.\n\u003c/p\u003e",
          "module": "Math.FFT",
          "name": "Sign",
          "package": "fft",
          "source": "src/Math-FFT-Base.html#Sign",
          "type": "data"
        },
        "index": {
          "description": "Determine which direction of DFT to execute",
          "hierarchy": "Math FFT",
          "module": "Math.FFT",
          "name": "Sign",
          "package": "fft",
          "partial": "Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fft/docs/Math-FFT.html#t:Sign"
      }
    }
  ]
]